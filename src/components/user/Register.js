import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



export default class Register extends Component {
    state = {
        username: "",
        password: "",
        password2: "",
        showAlert: false,
        showPassAlert: false,
        showUserAlert: false,
        showPasswAlert: false
    }

    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value,
            showAlert: false,
            showPassAlert: false,
            showUserAlert: false,
            showPasswAlert: false
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, password, password2} = this.state;
        this.register(username,password,password2);
    }

    async register (username, password, password2) {
        // check username length
        if(username.length < 4){
            this.setState({
                showUserAlert:true
            })
            return;
        }
        // check username length
        if(password.length < 4){
            this.setState({
                showPasswAlert: true
            })
            return;
        }
        if (password !== password2){
            // alert("Passwords do not match");
            this.setState({
                showPassAlert: true
            })
            return;
        }
        // Check if username is available
        const res = await axios.get(`/api/user?username=${username}`)
        
        if (res.data){
            // alert("Username is taken, try again!")
            this.setState({
                showAlert: true
            })
            return;
        } else {
            const newUser= {
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
    {this.state.showPassAlert && (<div className= "alert alert-warning">The passwords you entered doesn't match, please try it again</div>)}
    {this.state.showAlert && (<div className= "alert alert-warning">The username is taken, try again</div>)}
    {this.state.showUserAlert && (<div className= "alert alert-warning">The username has to be more than 4 characters</div>)}
    {this.state.showPasswAlert && (<div className= "alert alert-warning">Your password should be more than four characters</div>)}
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

