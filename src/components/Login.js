import React, {Component} from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import {AUTH_TOKEN} from '../constant/constant'

const SIGNUP_MUTATION = gql `mutation SignupMutation($email: String!, $password: String!, $name: String!)
    {
        signup(email: $email, password: $password, name: $name)
        {
          token
        }
    }`
const LOGIN_MUTATION = gql `mutation LoginMutation($email: String!, $password: String!)
    {
        login(email: $email, password: $password)
        {
          token
        }
    }`

class Login extends Component
{
  state = {login: true, email: '', password: '', name: ''}
  render()
  {
    const {login, email, password, name} = this.state
    return (<div>
      <h4 className="mv3">{login ? 'Ingresar': 'Registrar'}</h4>
      <div className="flex flex-column">
        {!login && (<input value={name} onChange={e => this.setState({name: e.target.value})} type="text" placeholder="Tu nombre" />)}
        <input value={email} onChange={e => this.setState({email: e.target.value})} type="text" placeholder="Tu direccion de correo" />
        <input value={password} onChange={e => this.setState({password: e.target.value})} type="password" placeholder="Ingresar nueva clave" />
      </div>
      <div className="flex mt3">
        <Mutation mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION} variables={{email, password, name}} onCompleted={data => this._confirm(data)}>
            {mutation => (<div className="pointer mr2 button" onClick={mutation}>
                {login ? 'entrar' : 'Crear cuenta'}
            </div>)}
        </Mutation>
        <div className="pointer button" onClick={() => this.setState({login: !login})}>
            {login ? 'Necesita crear una cuenta?': 'Ya tengo una cuenta!'}
        </div>
      </div>
    </div>)
  }

  _confirm = async data => {
      const {token} = this.state.login ? data.login : data.signup
      this._saveUserData(token)
      this.props.history.push('/')
    }
  _saveUserData = token => {localStorage.setItem(AUTH_TOKEN, token)}

}

export default Login
