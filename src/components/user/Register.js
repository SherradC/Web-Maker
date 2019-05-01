import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Register extends Component {
  render() {
    return (
      <div>
        <section className="container">
            <div className="ptt text-white">
                <h1>Register</h1>
            </div>
            <div className="">
                <form action="" className="">
                    <div className="form-group">
                        <input className="form-control"  type="text" placeholder="Username"/>
                    </div>
                    <div className="form-group" >
                        <input className= "form-control" type="password" placeholder="password"/>
                    </div>
                    <div className="form-group">
                        <input className= "form-control" type="password" placeholder="confirm password"/>
                    </div>
                    <div className="form-group">
                        <Link className="btn btn-outline-warning btn-block but" to="/user/:uid">Register</Link>
                    </div>
                    <div className="form-group">
                        <Link className="btn btn-outline-primary btn-block but" to="/login">Cancel</Link>
                    </div>
                </form>
            </div>
        </section>
      </div>
    )
  }
}
