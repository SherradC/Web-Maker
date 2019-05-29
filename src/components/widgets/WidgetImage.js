import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class WidgetImage extends Component {

    onChange= e => {
        this.props.onChange(e);
    }

    onSubmit= e => {
        this.props.onSubmit(e)
    }

    onDelete = () => {
        this.props.onDelete();
    }

    render() {
        const {uid, wid, pid, name, width, url} = this.props;

    return (
      <div>
        <nav className="navbar navbar-light bg-info fixed-top">
            <div className="navbar-brand w-100 text-center text-white">
                <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}><i className="float-left fas fa-arrow-circle-left"></i></Link>
                <span className="">Edit Widget</span>
                <button
                    className="btn btn-lg text-white float-right" 
                    form="imgForm">
                    <i 
                        className="far fa-check-circle">
                    </i>
                </button>
            </div>
        </nav>
        <section className="container  ppb text-white">
            <form id="imgForm" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Name for Widget" 
                        id="name" 
                        name="name"
                        onChange={this.onChange}
                        value={name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="url">URL</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="URL of the Image" 
                        id="url" 
                        name="url"
                        onChange={this.onChange}
                        value={url}/>
                </div>
                <div className="form-group">
                    <label htmlFor="width">Width</label>
                    <input 
                        type="range" 
                        className="form-control-range" 
                        id="width"
                        value={width}
                        onChange={this.onChange}
                        min="1" 
                        max="100"
                        step="1"
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="upload">Upload</label>
                    <input type="file" className="form-control" id="file" name="file"/>
                </div>
                <button 
                    className="btn btn-block btn-outline-success text-white but" 
                    to=""
                    >Upload
                </button>
                <button 
                    className="btn btn-block btn-outline-danger text-white but" 
                    type="button"
                    onClick={this.onDelete}
                    >Delete
                </button>
            </form>
        </section>
        <section className="navbar navbar-light fixed-bottom bg-info row">
            <footer className="w-100">
                <Link className= "text-white" to={`/user/${uid}`}><i className="float-right pr-4 far fa-id-badge fa-2x"></i></Link>
                <span></span>
            </footer>
        </section>
      </div>
    )
  }
}
