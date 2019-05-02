import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Profile extends Component {

    state = {
        username: "",
        password:"",
        email: "",
        firstName: "",
        lastName: ""
    }


    componentDidMount(){
        const uid = this.props.match.params.uid;
        
        for(let user of this.props.users){
            if (user._id === uid) {
                this.showUser(user);
                return;
            }
        }
        alert("ID unknown");
    }

    showUser = (user) => {
        const {username, email, firstName, password, lastName} = user;

        this.setState({
            username, 
            email, 
            firstName, 
            lastName,
            password
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, email, firstName, lastName, password} = this.state;
        const newUser = {
            _id: this.props.match.params.uid,
            username,
            password,
            email,
            firstName,
            lastName
        }

        this.props.updateUser(newUser);
    }

  render() {
      const {username, email, firstName, lastName} = this.state;
    return (
      <div>
        <nav className="navbar navbar-light bg-dark fixed-top row">
            <div className="navbar-brand w-100 text-center">
                <span className="text-white">Profile</span>
                <button className= "float-right btn text-white" form= "profileForm" to="/user/:uid"><i className="far fa-check-circle float-right "></i></button>
            </div>
        </nav>
        <div className="container">
            <form className="py-5" onSubmit={this.onSubmit} id="profileForm">
                <div className="">
                    <label className="text-light" htmlFor="Username">Username</label>
                    <input className="form-control form-group" type="text" id="username" name="username" placeholder="ex. Boston" value={username} onChange={this.onChange}/>
                </div>
                <div className="">
                    <label className="text-light" htmlFor="Email">Email</label>
                    <input className="form-control form-group" type="text" placeholder="ex. BBBeans@gmail.com" id="email" value= {email} onChange={this.onChange} name="email"/>
                </div>
                <div>
                    <label className="text-light" htmlFor="FirstName">First Name</label>
                    <input className="form-control form-group" type="text" id="FirstName" name="FirstName" placeholder="Baked" onChange={this.onChange} value={firstName} />
                </div>
                <div>
                    <label className="text-light" htmlFor="LastName">Last Name</label>
                    <input className="form-control form-group" type="text" id="LastName" name="LastName" placeholder="Beans" value={lastName} onChange={this.onChange} />
                </div>
                <div className="form-group" >
                    <Link className="btn btn-outline-warning btn-block but" to= "/user/:uid/website">Websites</Link>
                </div>
                <div className="form-group">
                    <Link className="btn btn-outline-primary btn-block but" to="/login">Logout</Link>
                </div>
            </form>
        </div>
        <nav className="navbar fixed-bottom bg-dark">
            <footer className="navbar-brand text-white w-100">
            <Link to="/user/:uid"><i className="pl-3 far fa-id-badge fa-2x"></i></Link>
            </footer>
        </nav>
      </div>
    )
  }
}
