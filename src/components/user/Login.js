import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Login extends Component {
  
  state = {
    username: "",
    password: ""
  }

  onChange = e => { 
    this.setState({
      [e.target.name]: e.target.value
    }) // if (e.target.name === "username"){
      //   this.setState({
      //     username: e.target.value
      //   })
      // } else {
      //   this.setState ({
      //     password: e.target.value
      //   })
      // }
   
  }

  onSubmit = e=> {
    e.preventDefault();
    const {username, password} = this.state;
    const user = {
      username,
      password
    }

    this.login(user);
  }

  login = user => {
    for (let item of this.props.users){
      if(item.username === user.username && item.password === user.password) {
        this.props.history.push("/user/" + item._id)
        return;
      }
    }
    alert ("Your username and password isnt in our records!");
  }
  

  render() {
    return (
      <div>
        <section className="container">
            <div className="ptt text-white">
                <h1>Login</h1>
            </div>
            <div className="logform">
                <form action="" className="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input className= "form-control" name = "username" type="username" placeholder="Username" value={this.state.username} onChange={this.onChange}/>
                    </div>
                    <div className="form-group" >
                        <input className= "form-control" name= "password" type="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-warning btn-block but">
                        Login
                        </button>
                    </div>
                    <div className="form-group">
                        <Link className="btn btn-outline-primary btn-block but" to="/register">Register</Link>
                    </div>
                </form>
            </div>
        </section>
      </div>
    )
  }
}
