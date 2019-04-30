import React, { Component } from 'react'

export default class WebsiteNew extends Component {
  render() {
    return (
      <div>
        <nav className= "navbar navbar-light bg-dark fixed-top row">
            <div className="col-lg-4 d-none d-lg-block text-center text-white">
                <Link className="float-left" to="/Websites/website-list.html"><i className="fas fa-arrow-circle-left"></i></Link>
                <span className="">Websites</span>
                <Link className="float-right" to="../Page/Page-new.html"><i className="far fa-plus-square"></i></Link>
            </div>
            <div className="col-lg-8 text-center text-white">
                <Link className="d-lg-none float-left" to="/Websites/website-list.html"><i className="fas fa-arrow-circle-left"></i></Link>
                <span className="">New Website</span>
                <Link className="float-right" to="/Websites/website-list.html"><i className="far fa-check-circle"></i></Link>
            </div>
        </nav>
        <section className="ppt row">
            <div className="col-lg-4 d-none d-lg-block ">
                <form className="container">
                    <ul className="list-group ">
                        <li className="list-group-item">
                            <Link to="../page/Page-list.html">Ferrara Candy Company</Link>
                            <Link className="float-right" to="/Websites/website-edit.html"><i className="fas fa-user-cog"></i></Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="../page/Page-list.html">Munchies</Link>
                            <Link className="float-right" to="/Websites/website-edit.html"><i className="fas fa-user-cog"></i></Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="../page/Page-list.html">Boston Baked Beans</Link>
                            <Link className="float-right" to="/Websites/website-edit.html"><i className="fas fa-user-cog"></i></Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="../page/Page-list.html">Sweet Tooth Blog</Link>
                            <Link className="float-right" to="/Websites/website-edit.html"><i className="fas fa-user-cog"></i></Link>
                        </li>
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
                        <Link className="btn btn-block btn-outline-danger text-white but" to="/Websites/website-list.html">Delete</Link>
                    </div>
                </form>
            </div>
        </section>
        <section className="navbar navbar-light fixed-bottom bg-dark row">
            <footer className="">
                <span></span>
                <Link className= text-white to="../User/profile.html"><i className="pl-3 far fa-id-badge fa-2x"></i></Link>
                <span></span>
            </footer>
        </section>
      </div>
    )
  }
}
