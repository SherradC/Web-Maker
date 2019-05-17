import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class PageList extends Component {

    state = {
        uid: "",
        wid: "",
        pages: []
    }


    async componentDidMount(){
       await this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid
        })
        this.filterPage(this.state.wid);
    }

    filterPage = async (wid) => {
        let res = await axios.get(`/api/website/${this.state.wid}/page`)
        this.setState({
            pages: res.data
        });
    }
  render() {
    const {uid, wid} = this.state;
    return (
      <div>
        <nav className="navbar navbar-light bg-success fixed-top">
            <div className="navbar-brand w-100 text-center text-white">
                <Link to={`/user/${uid}/website`}><i className="fas fa-arrow-circle-left float-left"></i></Link>
                <span className="pl-3">Pages</span>
                <Link to={`/user/${uid}/website/${wid}/page/new`}><i className="far fa-plus-square float-right"></i></Link>
            </div>
        </nav>
        <section className="container">
                <form>
                        <ul className="list-group ">
                            {
                                this.state.pages.map(
                                    (page) => (
                                        <li className= "list-group-item">
                                            <Link to={`/user/${uid}/website/${wid}/page/${page._id}/widget`}>{page.name}</Link>
                                            <Link className= "float-right" to={`/user/${uid}/website/${wid}/page/${page._id}`}><i className= "fas fa-user-cog"></i></Link>
                                        </li>
                                    )
                                )
                            }
                        </ul>
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
