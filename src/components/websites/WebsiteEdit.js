import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class WebsiteEdit extends Component {

    state={
        uid: this.props.match.params.uid,
        wid: this.props.match.params.wid,
        websites:[],
        name:"",
        description:""
      };
    
    
      async componentDidMount(){
        const res= await axios.get(`/api/user/${this.state.uid}/website`)
         await  this.filterWebsites(res.data);
          this.getWebsite(this.state.wid);
      }

      filterWebsites = (websites) => {
        const newWebsites = websites.filter(
          website => (website.developerId === this.state.uid)
        )
        this.setState({
          websites: newWebsites
        });
      };

      getWebsite = wid => {
          let currentWeb;
          for (let website of this.state.websites){
              if(website._id === wid){
                  currentWeb = website;
                  break;
              }
          }
          this.setState({
              name: currentWeb.name,
              description: currentWeb.description
          });
      };

      onChange= e => {
          this.setState({
              [e.target.name]: e.target.value
          });
      };

      delete = async () => {
        await axios.delete(`/api/website/${this.state.wid}`);
          this.props.history.push(`/user/${this.state.uid}/website`);
      };

      onSubmit = async e => {
          e.preventDefault();
        const newWeb = {
            _id: this.state.uid,
            name: this.state.name,
            description: this.state.description,
            developerId: this.state.uid
        }
        await axios.put('/api/website', newWeb);
          this.props.history.push(`/user/${this.state.uid}/website`);
      };


  render() {
      const {uid} =this.state;

    return (
        <div>
            <nav className= "navbar navbar-light bg-dark fixed-top row">
                <div className="col-lg-4 d-none d-lg-block text-center text-white">
                    <Link className="float-left" to={`/user/${uid}/website`}><i className="fas fa-arrow-circle-left"></i></Link>
                    <span className="">Websites</span>
                    <Link className="float-right" to={`/user/${uid}/website/new`}><i className="far fa-plus-square"></i></Link>
                </div>
                <div className="col-lg-8 text-center text-white">
                    <Link className="d-lg-none float-left" to={`/user/${uid}/website`}><i className="fas fa-arrow-circle-left"></i></Link>
                    <span className="">Edit Website</span>
                    <button  className="float-right btn btn-lg text-white" form="editWebForm"><i  className="far fa-check-circle"></i></button>
                </div>
            </nav>
            <section className="row">
                <div className="col-lg-4 d-none d-lg-block ">
                    <form className="container">
                        <ul className="list-group ">
                            {
                            this.state.websites.map(
                                (website) => (
                                <li key={website._id} className= "list-group-item">
                                    <Link to={`/user/${uid}/website/${website._id}/page`}>{website.name}</Link>
                                    <Link className="float-right" to={`/user/${uid}/website/${website._id}`}><i className="fas fa-user-cog"></i></Link>
                                </li>
                                )
                            )
                        }
                        </ul>
                    </form>
                </div>
                <div className="col-lg-8">
                    <form className="container" onSubmit={this.onSubmit} id="editWebForm">
                        <div className="form-group">
                            <label className="d-block text-white" htmlFor="WebsiteName">Website Name</label>
                            <input 
                                className="form-control" 
                                name="name" id="name" 
                                onChange={this.onChange} 
                                value={this.state.name} 
                                type="text" 
                                placeholder="Site Name Here"/>
                        </div>
                        <div className="form-group pb-3">
                            <label className="d-block text-white" htmlFor="Description">Website Description</label>
                            <textarea 
                                row="5" 
                                className="form-control" 
                                name="description" 
                                placeholder= "Website Description" 
                                onChange={this.onChange} 
                                value={this.state.description} 
                                id="description">
                                Website Description
                            </textarea>
                        </div>
                        <Link
                            to={`/user/${uid}/website`}
                            className="btn btn-block btn-outline-warning text-white but mb-3"
                            >
                            Cancel
                        </Link>
                        <div className="form-group">
                            <Link onClick={this.delete} className="btn btn-block btn-outline-danger text-white but" to={`/user/${uid}/website`}>Delete</Link>
                        </div>
                    </form>
                </div>
            </section>
            <section className="navbar navbar-light fixed-bottom bg-dark row">
                <footer className="">
                    <span></span>
                    <Link className= "text-white" to={`/user/${uid}`}><i className="pl-3 far fa-id-badge fa-2x"></i></Link>
                    <span></span>
                </footer>
            </section>
        </div>
    )
  }
}
