import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class WebsiteList extends Component {
  render() {
    return (
      <div>
        <section className="websites">
        <nav className="navbar navbar-light bg-dark fixed-top">
            <Link className="text-white" to="../User/profile.html"><i className="fas fa-arrow-circle-left"></i></Link>
            <span className="text-white">Websites</span>
            <Link className="text-white" to="../Websites/website-new.html"><i className="far fa-plus-square"></i></Link>
        </nav>
        <form className="container ppt">
                <ul className="list-group ">
                    <li className="list-group-item">
                        <Link to="../page/Page-list.html">Ferrara Candy Company</Link>
                        <Link className="float-right" to="/Websites/website-edit.html"><i className="fas fa-user-cog"></i></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="../page/Page-list.html">Munchies</Link>
                        <Link className="float-right" to="/Websites/website-edit.html"><i className="fas fa-user-cog"></i></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="../page/Page-list.html">Boston Baked Beans</Link>
                        <Link className="float-right" to="/Websites/website-edit.html"><i className="fas fa-user-cog"></i></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="../page/Page-list.html">Sweet Tooth Blog</Link>
                        <Link className="float-right" to="/Websites/website-edit.html"><i className="fas fa-user-cog"></i></Link>
                    </li>
                </ul>
            </form>
        </section>
        <section className="navbar navbar-light fixed-bottom bg-dark row">
                <footer>
                    <span></span>
                    <Link className="text-white" to="../User/profile.html"><i className="pl-3 far fa-id-badge fa-2x"></i></Link>
                    <span></span>
                </footer>
        </section>
      </div>
    )
  }
}
