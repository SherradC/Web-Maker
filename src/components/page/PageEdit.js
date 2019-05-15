import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PageEdit extends Component {
    
    state={
        uid: "",
        wid: "",
        pid: "",
        name: "",
        title: ""
    }

    async componentDidMount(){
        await this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid,
            pid: this.props.match.params.pid
        })
        const page = this.getPage();
        this.setState({
            name: page.name,
            title: page.title
        })
    }

    getPage = () => {
        for(let page of this.props.pages){
            if(page._id === this.state.pid){
                return page;
            }
        }
        return null;
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onDelete = () => {
        this.props.deletePage(this.state.pid);
        this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
    }

    onSubmit = e => {
        e.preventDefault();
        const newPage = {
            _id: this.state.pid,
            name: this.state.name,
            websiteId: this.state.wid,
            title: this.state.title
        }
        this.props.editPage(newPage);
        this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
    }

  render() {
      const {uid, wid, name, title} = this.state;

    return (
      <div>
          <nav className="navbar navbar-light bg-success fixed-top">
                    <div className="navbar-brand w-100 text-center text-white">
                        <Link to={`/user/${uid}/website/${wid}/page`}><i className="fas fa-arrow-circle-left float-left"></i></Link>
                        <span className="pl-3">Pages</span>
                        <button 
                            className="btn text-white float-right btn-lg" 
                            form="editPageForm">
                            <i 
                            className="far fa-plus-square">
                            </i>
                        </button>
                    </div>
                </nav>
                <section className="container text-white">
                    <form className id="editPageForm" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">
                                <b>Name</b>
                            </label>
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                onChange={this.onChange} 
                                type="text"
                                placeholder="Name of the page..."
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">
                                <b>Title</b>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                placeholder="Title of the page..."
                                value={title}
                            />
                        </div>
                        <Link to={`/user/${uid}/website/${wid}/page`} className="btn btn-lg btn-warning">
                            Cancel
                        </Link>
                        <button
                            type="button"
                            onClick={this.onDelete}
                            className="btn btn-lg btn-danger float-right"
                        >
                            Delete
                        </button>
                    </form>
                </section>
                <section className="navbar navbar-light fixed-bottom bg-success pt-3 row">
                    <footer className="w-100">
                        <span></span>
                        <Link className= "text-white" to={`/user/${uid}`}><i className="float-right pr-5 far fa-id-badge fa-2x"></i></Link>
                        <span></span>
                    </footer>
                </section>
      </div>
    )
  }
}
