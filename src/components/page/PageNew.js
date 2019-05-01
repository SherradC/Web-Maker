import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class PageNew extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-success fixed-top">
            <div className="navbar-brand w-100 text-center text-white">
                <Link to="/user/:uid/website/:wid/page"><i className="float-left fas fa-arrow-circle-left"></i></Link>
                <span className="">New Pages</span>
                <Link to="/user/:uid/website/:wid/page"><i className="far fa-check-circle float-right "></i></Link>
            </div>
        </nav>
        <section>
            <form className="container ppt">
                <div className="form-group">
                    <label className="text-white" htmlFor="name" name="name" id="name" >Name</label>
                    <input type="text" className="form-control" placeholder="Page Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="title" name="title" id="title" className="text-white">Title</label>
                    <input type="text" className="form-control" placeholder="Page Title"/>
                </div>
            </form>
        </section>
        <section className="navbar navbar-light fixed-bottom bg-dark row">
            <footer className="w-100">
                <span></span>
                <Link className= "text-white" to="/user/:uid"><i className="float-right pr-4 far fa-id-badge fa-2x"></i></Link>
                <span></span>
            </footer>
        </section>
    </div>
    )
  }
}
