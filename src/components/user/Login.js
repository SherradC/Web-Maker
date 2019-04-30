import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
        <section className="container">
            <div className="ptt text-white">
                <h1>Login</h1>
            </div>
            <div className="logform">
                <form action="" className="form">
                    <div className="form-group">
                        <input className= "form-control" type="username" placeholder="Username"/>
                    </div>
                    <div className="form-group" >
                        <input className= "form-control" type="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <Link className="btn btn-outline-warning btn-block but" to="/User/profile.html">Login</Link>
                    </div>
                    <div className="form-group">
                        <Link className="btn btn-outline-primary btn-block but" to="register.html">Register</Link>
                    </div>
                </form>
            </div>
        </section>
      </div>
    )
  }
}
