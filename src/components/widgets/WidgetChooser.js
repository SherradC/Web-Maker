import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class WidgetChooser extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-info fixed-top">
            <div className="navbar-brand w-100 text-center text-white">
                <Link to="/user/:uid/website/:wid/page/:pid/widget"><i className="float-left fas fa-arrow-circle-left"></i></Link>
                <span className="">Choose Widget</span>
            </div>
        </nav>
        <section className="ppt" >
            <ul className="container list-group text-center">
                <li className="list-group-item list-group-item-dark">
                    <Link className="text-danger" to="/Widgets/widget-heading.html">Header</Link>
                </li> 
                <li className="list-group-item list-group-item-dark">
                    <Link className="text-danger" to="">Label</Link>
                </li>
                <li className="list-group-item list-group-item-dark">
                    <Link className="text-danger" to="">HTML</Link>
                </li>
                <li className="list-group-item list-group-item-dark">
                    <Link className="text-danger" to="">Text Input</Link>
                </li>
                <li className="list-group-item list-group-item-dark">
                    <Link className="text-danger" to="">Link</Link>
                </li> 
                <li className="list-group-item list-group-item-dark">
                    <Link className="text-danger" to="">Button</Link>
                </li> 
                <li className="list-group-item list-group-item-dark">
                    <Link className="text-danger" to="/Widgets/widget-image.html">Image</Link>
                </li> 
                <li className="list-group-item list-group-item-dark">
                    <Link className="text-danger" to="/Widgets/widget-youtube.html">Youtube</Link>
                </li> 
                <li className="list-group-item list-group-item-dark">
                    <Link className="text-danger" to="">Data Table</Link>
                </li> 
                <li className="list-group-item list-group-item-dark">
                    <Link className="text-danger" to="">Repeater</Link>
                </li>
            </ul>
        </section>
        <section className="navbar navbar-light fixed-bottom bg-info row">
            <footer className="w-100">
                <Link className= "text-white" to="/user/:uid"><i className="float-right pr-4 far fa-id-badge fa-2x"></i></Link>
                <span></span>
            </footer>
        </section>
      </div>
    )
  }
}
