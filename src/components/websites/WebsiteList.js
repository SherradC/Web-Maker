import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class WebsiteList extends Component {
  
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

    const {uid}=this.state;

    return (
      <div>
        <section className="websites">
        <nav className="navbar navbar-light bg-dark fixed-top">
            <Link className="text-white" to={`/user/${uid}`}><i className="fas fa-arrow-circle-left"></i></Link>
            <span className="text-white">Websites</span>
            <Link className="text-white" to={`/user/${uid}/website/new`}><i className="far fa-plus-square"></i></Link>
        </nav>
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
        </section>
        <section className="navbar navbar-light fixed-bottom bg-dark row">
                <footer>
                    <span></span>
                    <Link className="text-white" to={`/user/${uid}`}><i className="pl-3 far fa-id-badge fa-2x"></i></Link>
                    <span></span>
                </footer>
        </section>
      </div>
    )
  }
}
