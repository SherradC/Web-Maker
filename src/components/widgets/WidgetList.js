import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class WidgetList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-info fixed-top">
            <div className="navbar-brand w-100 text-center text-white">
                <Link to="/user/:uid/website/:wid/page"><i className="float-left fas fa-arrow-circle-left"></i></Link>
                <span className="">Widgets</span>
                <Link to="/user/:uid//website/:wid/page/:pid/widget/new"><i className="far fa-plus-square float-right"></i></Link>
            </div>
        </nav>
        <section className="container-fluid ppt ppb">
            <div className="text-white">
                <div className="float-right">
                    <Link className="text-white" to="/widgets/widget-heading.html"><i className="fas fa-cog"></i></Link>
                    <i className="fas fa-bars"></i>
                </div>
                <h1>Boston Baked Beans</h1>
            </div>
            <div className="text-white">
                <div className="float-right">
                    <Link className="text-white" to=""><i className="fas fa-cog"></i></Link>
                    <i className="fas fa-bars"></i>
                </div>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, dicta excepturi sunt odio fugit ab!</h3>
            </div>
            <div className="text-white">
                <div className="float-right">
                    <Link className="text-white" to="/widgets/widget-image.html"><i className="fas fa-cog"></i></Link>
                    <i className="fas fa-bars"></i>
                </div>
                <img className="img-fluid" src="http://www.bostonbakedbeans.com/globalassets/assets/boston-baked-beans/bbb-logo-1024x207.png" alt="Boston Baked Bean"/>
            </div>
            <div className="text-white">
                <div className="float-right">
                    <Link className="text-white" to=""><i className="fas fa-cog"></i></Link>
                    <i className="fas fa-bars"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reiciendis fugiat eum iste excepturi? Quae nemo voluptates rem eum harum, illo vel hic totam alias cumque laudantium facere beatae inventore minus consequatur architecto rerum, animi corporis maxime esse? Perferendis accusamus corporis incidunt, a deleniti maxime alias totam obcaecati possimus quia recusandae deserunt dolorem autem nisi aperiam ab perspiciatis voluptates odit nobis nesciunt cumque dolores temporibus quisquam aliquam. Ea, ullam aut? Exercitationem doloribus autem accusantium, nulla, facilis atque reprehenderit minima deleniti alias, non id provident sit fuga vel blanditiis nobis ducimus. Optio fugiat, repudiandae adipisci eligendi harum veniam nemo nisi mollitia.</p>
            </div>
            <div className="text-white">
                <div className="float-right">
                    <Link className="text-white" to=""><i className="fas fa-cog"></i></Link>
                    <i className="fas fa-bars"></i>
                </div>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, veniam!</h3>
            </div>
            <div className="text-white">
                <div className="float-right icon-right">
                    <Link className="text-white" to="/widgets/widget-youtube.html"><i className="fas fa-cog"></i></Link>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="Baked Beans" width="560" height="315" src="https://www.youtube.com/embed/3jjCoxP-4mY?start=31" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="text-white">
                <div className="float-right">
                    <Link className="text-white" to=""><i className="fas fa-cog"></i></Link>
                    <i className="fas fa-bars"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reiciendis fugiat eum iste excepturi? Quae nemo voluptates rem eum harum, illo vel hic totam alias cumque laudantium facere beatae inventore minus consequatur architecto rerum, animi corporis maxime esse? Perferendis accusamus corporis incidunt, a deleniti maxime alias totam obcaecati possimus quia recusandae deserunt dolorem autem nisi aperiam ab perspiciatis voluptates odit nobis nesciunt cumque dolores temporibus quisquam aliquam. Ea, ullam aut? Exercitationem doloribus autem accusantium, nulla, facilis atque reprehenderit minima deleniti alias, non id provident sit fuga vel blanditiis nobis ducimus. Optio fugiat, repudiandae adipisci eligendi harum veniam nemo nisi mollitia.</p>
            </div>
        </section>
        <section className="navbar navbar-light fixed-bottom bg-info row">
            <footer className="w-100">
                <i className="text-white fas fa-play pl-4 pt-3"></i>
                <i className="text-white fas fa-eye pl-4 pt-3"></i>
                <Link className= "text-white" to="/user/:uid"><i className="float-right pr-4 far fa-id-badge fa-2x"></i></Link>
                <span></span>
            </footer>
        </section>
      </div>
    )
  }
}
