import React, {Components} from 'react';


export default class PageEdit extends Components {
    render() {
        return(
            <div>
                <nav className="navbar navbar-light bg-success fixed-top">
                    <div className="navbar-brand w-100 text-center text-white">
                        <a href="/Websites/website-list.html"><i className="fas fa-arrow-circle-left float-left"></i></a>
                        <span className="pl-3">Pages</span>
                        <a href="/Page/Page-new.html"><i className="far fa-plus-square float-right"></i></a>
                    </div>
                </nav>
                <section className="container">
                        <form className="ppt">
                                <ul className="list-group ">
                                    <li className="list-group-item">
                                        <a href="/Widgets/widget-list.html">Home</a>
                                        <a className="float-right" href="../Page/Page-edit.html"><i className="fas fa-user-cog"></i></a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="/Widgets/widget-list.html">Blogs</a>
                                        <a className="float-right" href="../Page/Page-edit.html"><i className="fas fa-user-cog"></i></a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="/Widgets/widget-list.html">Blog Post</a>
                                        <a className="float-right" href="../Page/Page-edit.html"><i className="fas fa-user-cog"></i></a>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="/Widgets/widget-list.html">About</a>
                                        <a className="float-right" href="../Page/Page-edit.html"><i className="fas fa-user-cog"></i></a>
                                    </li>
                                    <li className="list-group-item">
                                            <a href="/Widgets/widget-list.html">Contact</a>
                                            <a className="float-right" href="../Page/Page-edit.html"><i className="fas fa-user-cog"></i></a>
                                    </li>
                                </ul>
                            </form>
                </section>
                <section className="navbar navbar-light fixed-bottom bg-success pt-3 row">
                    <footer className="w-100">
                        <span></span>
                        <a className= "text-white" href="../User/profile.html"><i className="float-right pr-5 far fa-id-badge fa-2x"></i></a>
                        <span></span>
                    </footer>
                </section>
            </div>
        )
    }
}
