import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './Header'
import CreateLink from './CreateLink'
import LinkList from './LinkList'
import Login from './Login'
import Search from './Search'

class  App extends Component
{
  render()
  {
      return (<div className="center w85">
        <Header/>
        <div className="ph3 pv1 background-gray">
          <Switch>
              <Route exact path="/" component={LinkList}/>
              <Route exact path="/crear" component={CreateLink}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/search" component={Search}/>
              <Route exact path="/top" component={LinkList}/>
              <Route exact path="/new:/page" component={LinkList}/>
          </Switch>
        </div>
      </div>)
  }
}

export default App