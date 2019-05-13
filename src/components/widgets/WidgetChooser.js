import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import uuid from "uuid";

export default class WidgetChooser extends Component {

    createWidget = type => {
        const {uid, wid, pid} = this.props.match.params
        const newWidget = {
            _id: uuid(),
            name: "",
            widgetType: type,
            pageId: pid,
            text: "",
            size: 1,
            width: "",
            url: ""
        }
        this.props.addWidget(newWidget);
        this.props.history.push(`/user/${uid}/website/${wid}/page/${pid}/widget/${newWidget._id}`)
    }

  render() {
    const {uid, wid, pid} = this.props.match.params;
    return (
      <div>
        <nav className="navbar navbar-light bg-info fixed-top">
            <div className="navbar-brand w-100 text-center text-white">
                <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}><i className="float-left fas fa-arrow-circle-left"></i></Link>
                <span className="">Choose Widget</span>
            </div>
        </nav>
        <section className="" >
            <ul className="container list-group text-center">
                <li className="list-group-item list-group-item-dark">
                    <span className="cp" onClick={this.createWidget.bind(this, "HEADING")}>
                        Heading
                    </span>
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <Link to="#">Label</Link>
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <Link to="#">Text Input</Link>
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <Link to="#">Link</Link>
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <Link to="#">Button</Link>
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <span className="cp" onClick={this.createWidget.bind(this, "IMAGE")}>
                            Image
                        </span>
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <span className="cp" onClick={this.createWidget.bind(this, "YOUTUBE")}>
                            Youtube
                        </span>
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <Link to="#">Data Table</Link>
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <Link to="#">Repeater</Link>
                </li>
            </ul>
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
