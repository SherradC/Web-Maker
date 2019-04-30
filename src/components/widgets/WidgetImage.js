import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class WidgetImage extends Component {
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
                    <input className="form-control" type="text" placeholder="Name for Widget" id="name" name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <input className="form-control" type="text" placeholder="Description of Image" id="text" name="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="url">URL</label>
                    <input className="form-control" type="text" placeholder="URL of the Image" id="url" name="url"/>
                </div>
                <div className="form-group">
                    <label htmlFor="width">Width</label>
                    <input type="range" className="form-control-range" id="formControlRange" step="1" min="1" max="100"/>
                </div>
                <div className="form-group">
                    <label htmlFor="upload">Upload</label>
                    <input type="file" className="form-control" id="file" name="file"/>
                </div>
                <Link className="btn btn-block btn-outline-success text-white but" to="">Upload</Link>
                <Link className="btn btn-block btn-outline-danger text-white but" to="widget-list.html">Delete</Link>
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
