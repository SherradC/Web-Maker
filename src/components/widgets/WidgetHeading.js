import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class WidgetHeading extends Component {
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

        const {uid, wid, pid, name, text, size} = this.props;

        return (
        <div>
            <nav className="navbar navbar-light bg-info fixed-top">
                <div className="navbar-brand w-100 text-center text-white">
                    <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}><i className="float-left fas fa-arrow-circle-left"></i></Link>
                    <span className="">Edit Widget</span>
                    <button 
                        className ="btn btn-lg text-white float-right"
                        form="headingForm">
                        <i 
                        className="far fa-plus-square float-right">
                        </i>
                    </button>
                </div>
            </nav>
            <section className="container text-white">
                <form
                id="headingForm"
                onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Name for Heading" 
                            id="name" 
                            name="name"
                            onChange={this.onChange}
                            value={name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Content for Heading" 
                            id="text" 
                            name="text"
                            onChange={this.onChange}
                            value={text}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="size">Size</label>
                        <input 
                            className="form-control" 
                            type="number" 
                            placeholder="Size of content" 
                            id="size" 
                            name="size"
                            onChange={this.onChange}
                            value={size}/>
                    </div>
                    <button 
                        className="btn btn-block btn-outline-danger text-white but"
                        onClick={this.onDelete}
                        type="button"
                        >
                        Delete
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