import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class WidgetYoutube extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-info fixed-top">
            <div className="navbar-brand w-100 text-center text-white">
                <Link to="/Widgets/widget-list.html"><i className="float-left fas fa-arrow-circle-left"></i></Link>
                <span className="">Edit Widget</span>
                <Link to="/Widgets/widget-list.html"><i className="far fa-plus-square float-right"></i></Link>
            </div>
        </nav>
        <section className="container ppt text-white">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" type="text" placeholder="Name for Image" id="name" name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <input className="form-control" type="text" placeholder="Text for description" id="text" name="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <input className="form-control" type="text" placeholder="Enter URL of video" id="url" name="url"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="width">Width</label>
                        <input type="range" className="form-control-range" id="formControlRange" step="1" min="1" max="100"/>
                    </div>
                    <Link className="btn btn-block btn-outline-danger text-white but" to="/Widgets/widget-list.html">Delete</Link>
                </form>
        </section>
        <section className="navbar navbar-light fixed-bottom bg-info row">
            <footer className="w-100">
                <Link className= "text-white" to="../User/profile.html"><i className="float-right pr-4 far fa-id-badge fa-2x"></i></Link>
                <span></span>
            </footer>
        </section>
      </div>
    )
  }
}
