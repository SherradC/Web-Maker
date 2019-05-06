import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class WebsiteNew extends Component {

    state={
        uid: this.props.match.params.uid,
        websites:[]
      }
    
    
        componentDidMount(){
          this.filterWebsites(this.props.websites);
      }
    
      filterWebsites = (websites) => {
        const newWebsites = websites.filter(
          website => (website.developerId === this.state.uid)
        )
        this.setState({
          websites: newWebsites
        })
      }


  render() {
      const {uid} = this.state;
    return (
      <div>
        <nav className= "navbar navbar-light bg-dark fixed-top row">
            <div className="col-lg-4 d-none d-lg-block text-center text-white">
                <Link className="float-left" to={`/user/${uid}/website`}><i className="fas fa-arrow-circle-left"></i></Link>
                <span className="">Websites</span>
                <Link className="float-right" to={`/user/${uid}/website`}><i className="far fa-plus-square"></i></Link>
            </div>
            <div className="col-lg-8 text-center text-white">
                <Link className="d-lg-none float-left" to={`/user/${uid}/website`}><i className="fas fa-arrow-circle-left"></i></Link>
                <span className="">New Website</span>
                <Link className="float-right" to={`/user/${uid}/website`}><i className="far fa-check-circle"></i></Link>
            </div>
        </nav>
        <section className="ppt row">
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
                <form className="container">
                    <div className="form-group">
                        <label className="d-block text-white" htmlFor="WebsiteName">Name</label>
                        <input className="form-control" type="text" placeholder="Site Name Here"/>
                    </div>
                    <div className="form-group pb-3">
                        <label className="d-block text-white" htmlFor="Description">Description</label>
                        <textarea row="5" className="form-control" name="Description" id="Description" placeholder="Description"></textarea>
                    </div>
                    <div className="form-group">
                        <Link className="btn btn-block btn-outline-danger text-white but" to={`/user/${uid}/website`}>Delete</Link>
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
