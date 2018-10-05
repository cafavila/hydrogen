import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {AUTH_TOKEN} from '../constant/constant'

class Header extends Component
{
  render()
  {
      const authToken = localStorage.getItem(AUTH_TOKEN)
      return (<div className="flex pal justify-between nowrap orange">
        <div className="flex flex-fixed black">
            <div className="fw7 mr1">Hydrogen</div>
            <Link to="/" className="ml1 no-underline black">Noticias</Link>
            <div className="ml1">|</div>
            <Link to="/top" className="ml1 no-underline black">Top</Link>
            <div className="ml1">|</div>
            <Link to="/search" className="ml1 no-underline black">Buscar</Link>
            {authToken && (<div className="flex">
                <div className="ml1">|</div>
                <Link to="/crear" className="ml1 no-underline black">Enviar</Link>
            </div>)}
        </div>
        <div className="flex flex-fixed">
            {authToken ? (<div className="ml1 pointer black" onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)}}>
                Salir
            </div>) : (<Link to="/login" className="ml1 no-underline black">Ingresar</Link>)}
        </div>
      </div>)
  }
}

export default withRouter(Header)
