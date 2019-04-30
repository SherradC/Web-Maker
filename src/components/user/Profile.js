import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Profile extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark fixed-top row">
            <div className="navbar-brand w-100 text-center">
                <span className="text-white">Profile</span>
                <Link to="profile.html"><i className="far fa-check-circle float-right pt-2"></i></Link>
            </div>
        </nav>
        <div className="container">
            <section className="py-5">
                <div className="">
                    <label className="text-light" htmlFor="Username">Username</label>
                    <input className="form-control form-group" type="text" id="username" name="username" placeholder="ex. Boston"/>
                </div>
                <div className="">
                    <label className="text-light" htmlFor="Email">Email</label>
                    <input className="form-control form-group" type="text" placeholder="ex. BBBeans@gmail.com" id="email" name="email"/>
                </div>
                <div>
                    <label className="text-light" htmlFor="FirstName">First Name</label>
                    <input className="form-control form-group" type="text" id="FirstName" Name="FirstName" placeholder="Baked"/>
                </div>
                <div>
                    <label className="text-light" htmlFor="LastName">Last Name</label>
                    <input className="form-control form-group" type="text" id="LastName" Name="LastName" placeholder="Beans"/>
                </div>
                <div className="form-group" >
                    <Link className="btn btn-outline-warning btn-block but" to="../Websites/website-list.html">Websites</Link>
                </div>
                <div className="form-group">
                    <Link className="btn btn-outline-primary btn-block but" to="../user/login.html">Logout</Link>
                </div>
            </section>
        </div>
        <nav className="navbar fixed-bottom bg-dark">
            <footer className="navbar-brand text-white w-100">
            <Link to="profile.html"><i className="pl-3 far fa-id-badge fa-2x"></i></Link>
            </footer>
        </nav>
      </div>
    )
  }
}
