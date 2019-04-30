import React, { Component } from 'react'
import {Link} from "react-router-dom "

export default class PageEdit extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-light bg-success fixed-top">
                    <div className="navbar-brand w-100 text-center text-white">
                        <Link to="/user/:uid/website"><i className="fas fa-arrow-circle-left float-left"></i></Link>
                        <span className="pl-3">Pages</span>
                        <Link to="/user/:uid/website/:wid/page/new"><i className="far fa-plus-square float-right"></i></Link>
                    </div>
                </nav>
                <section className="container">
                        <form className="ppt">
                                <ul className="list-group ">
                                    <li className="list-group-item">
                                        <Link to="/user/:uid/website/:wid/page/:pid/widget">Home</Link>
                                        <Link className="float-right" to="/user/:uid/website/:wid/page/:pid"><i className="fas fa-user-cog"></i></Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/user/:uid/website/:wid/page/:pid/widget">Blogs</Link>
                                        <Link className="float-right" to="/user/:uid/website/:wid/page/:pid"><i className="fas fa-user-cog"></i></Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/user/:uid/website/:wid/page/:pid/widget">Blog Post</Link>
                                        <Link className="float-right" to="/user/:uid/website/:wid/page/:pid"><i className="fas fa-user-cog"></i></Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/user/:uid/website/:wid/page/:pid/widget">About</Link>
                                        <Link className="float-right" to="/user/:uid/website/:wid/page/:pid"><i className="fas fa-user-cog"></i></Link>
                                    </li>
                                    <li className="list-group-item">
                                            <Link to="/user/:uid/website/:wid/page/:pid/widget">Contact</Link>
                                            <Link className="float-right" to="/user/:uid/website/:wid/page/:pid"><i className="fas fa-user-cog"></i></Link>
                                    </li>
                                </ul>
                            </form>
                </section>
                <section className="navbar navbar-light fixed-bottom bg-success pt-3 row">
                    <footer className="w-100">
                        <span></span>
                        <Link className= "text-white" to="/user/:uid"><i className="float-right pr-5 far fa-id-badge fa-2x"></i></Link>
                        <span></span>
                    </footer>
                </section>
      </div>
    )
  }
}
