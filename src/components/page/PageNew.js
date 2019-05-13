import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import uuid from "uuid";

export default class PageNew extends Component {

    state = {
        uid: "",
        wid: "",
        name: "",
        title: ""
    }

    componentDidMount() {
        this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid
        })    
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const newPage = {
            _id: uuid(),
            name: this.state.name,
            websiteId: this.state.wid,
            title: this.state.title
        }
        this.props.addPage(newPage);
        this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
    }

  render() {
      const {uid, wid, name, title} = this.state;
      
    return (
      <div>
        <nav className="navbar navbar-light bg-success fixed-top">
            <div className="navbar-brand w-100 text-center text-white">
                <Link to={`/user/${uid}/website/${wid}/page`}><i className="float-left fas fa-arrow-circle-left"></i></Link>
                <span className="">New Pages</span>
                <button className= "btn btn-lg float-right text-white" form="newPageForm"><i className="far fa-check-circle float-right "></i></button>
            </div>
        </nav>
        <section>
            <form className="container ppt" id="newPageForm" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="text-white" htmlFor="name" name="name" id="name" >Name</label>
                    <input type="text" className="form-control" placeholder="Page Name" 
                    name="name" id="name" onChange={this.onChange} value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="title" name="title" id="title" className="text-white">Title</label>
                    <input type="text" className="form-control" placeholder="Page Title" id="title" name="title" onChange={this.onChange} value={title} />
                </div>
                <Link to={`/user/${uid}/website/${wid}/page`} className="btn btn-lg btn-warning">
                    Cancel
                </Link>
                <button
                    className="btn btn-lg btn-success float-right"
                >
                    Submit
                </button>
            </form>
        </section>
        <section className="navbar navbar-light fixed-bottom bg-dark row">
            <footer className="w-100">
                <span></span>
                <Link className= "text-white" to={`/user/${uid}`}><i className="float-right pr-4 far fa-id-badge fa-2x"></i></Link>
                <span></span>
            </footer>
        </section>
    </div>
    )
  }
}
