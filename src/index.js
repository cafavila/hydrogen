import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {split} from 'apollo-link'
import {ApolloProvider} from 'react-apollo'
import {ApolloClient} from 'apollo-client'
import {WebSocketLink} from 'apollo-link-ws'
import {setContext} from 'apollo-link-context'
import {BrowserRouter} from 'react-router-dom'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {getMainDefinition} from 'apollo-utilities'
import registerServiceWorker from './utils/registerServiceWorker'
import {AUTH_TOKEN} from './constant/constant'

console.log('[HYDROGEN] - Server is STARTING');
console.log('[HYDROGEN] - Server is RUNNING');

const httpLink = createHttpLink({uri: 'http://localhost:4000'})
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {headers: {...headers, authorization: token ? `Bearer ${token}` : ''}}
})
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000', option: {
    reconnect: true, connectionParams: {authToken: localStorage.getItem(AUTH_TOKEN)}
  }
})
const link = split(({query}) => {
  const {kind, operation} = getMainDefinition(query)
  return kind === 'OperationDefinition' && operation === 'subscription'
}, wsLink, authLink.concat(httpLink))
const client = new ApolloClient({link, cache: new InMemoryCache()})

ReactDOM.render(<BrowserRouter>
    <ApolloProvider client={client}><App /></ApolloProvider>
  </BrowserRouter>, document.getElementById('app'))
registerServiceWorker()
