import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import uuid from 'uuid';


export default class Register extends Component {
    state = {
        username: "",
        password: "",
        password2: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, password, password2} = this.state;
        this.register(username,password,password2);
    }

    async register (username, password, password2) {
        if (password !== password2){
            alert("Not matching passwords");
            return;
        }
        // Check if username is available
        const res = await axios.get(`/api/user?username=${username}`)
        if (res.data){
            alert("Username is taken, try again!")
            return;
        } else {
            const newUser= {
                _id: uuid(),
                username,
                password,
                email: "",
                firstName: "",
                lastName: ""
            }
            const res2 = await axios.post("/api/user", newUser);
            this.props.history.push(`/user/${res2.data._id}`);
        }
    }



    
    //     const newUser= {
    //         _id: (parseInt(this.props.users[this.props.users.length - 1]._id) + 1).toString,
    //         username,
    //         password,
    //         email: "",
    //         firstName: "",
    //         lastName: ""
    //     }
    //     this.props.addUser(newUser);

    //     this.props.history.push(`/user/${newUser._id}`);
    // }

  render() {
      const {username, password, password2} = this.state
    return (
      <div>
        <section className="container">
            <div className="ptt text-white">
                <h1>Register</h1>
            </div>
            <div className="">
                <form action="" className="" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input className="form-control"  type="text" name="username" placeholder="Username" value={username} onChange={this.onChange}/>
                    </div>
                    <div className="form-group" >
                        <input className= "form-control" name= "password" type="password" value={password} placeholder="password" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input className= "form-control" value= {password2} name= "password2" type="password" placeholder="confirm password" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-warning btn-block but" >Register</button>
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

