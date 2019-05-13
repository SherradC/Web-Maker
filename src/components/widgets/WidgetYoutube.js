import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class WidgetYoutube extends Component {

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
        const {uid, wid, pid, name, url, width} = this.props;

    return (
      <div>
        <nav className="navbar navbar-light bg-info fixed-top">
            <div className="navbar-brand w-100 text-center text-white">
                <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}><i className="float-left fas fa-arrow-circle-left"></i></Link>
                <span className="">Edit Widget</span>
                <button
                    className="btn btn-lg float-right text-white"
                    form="youtubeForm"
                    ><i 
                        className="far fa-plus-square float-right">
                    </i>
                </button>
            </div>
        </nav>
        <section className="container  text-white">
                <form id="youtubeForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Name for Image" 
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
                            placeholder="Enter URL of video" 
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
                            step="1" min="1" max="100"
                            onChange={this.onChange}
                            value={width}/>
                    </div>
                    <button 
                        className="btn btn-block btn-outline-danger text-white but" 
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
