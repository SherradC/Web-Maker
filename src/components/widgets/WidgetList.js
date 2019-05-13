import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class WidgetList extends Component {

    state= {
        uid: "",
        wid: "",
        pid: "",
        widgets: []
    }

    async componentDidMount() {
        await this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid,
            pid: this.props.match.params.pid
        })
        this.filterWidgets(this.state.pid);
    }

    filterWidgets = (pid) => {
        const widgets = this.props.widgets.filter(
            (widget) => (
                widget.pageId === pid
            )
        )

        this.setState({
            widgets
        })
    }

  render() {
    const {uid, wid, pid, widgets} = this.state;

    return (
      <div>
        <nav className="navbar navbar-light bg-info fixed-top">
            <div className="navbar-brand w-100 text-center text-white">
                <Link to={`/user/${uid}/website/${wid}/page`}><i className="float-left fas fa-arrow-circle-left"></i></Link>
                <span className="">Widgets</span>
                <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/new`}><i className="far fa-plus-square float-right"></i></Link>
            </div>
        </nav>
        <section className="container-fluid ppt ppb text-white">
        {
            widgets.map(
                (widget) => {
                    switch(widget.widgetType){
                        case "HEADING":
                            return (
                                <div key={widget._id}>
                                    <div className="float-right">
                                        <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget._id}`}>
                                            <i className="fas fa-cog float-right" />
                                        </Link>
                                        <span>
                                            <i className="fas fa-bars float-right" />
                                        </span>
                                    </div>
                                    <div>
                                        {widget.size === 1 && <h1>{widget.text}</h1>}
                                        {widget.size === 2 && <h2>{widget.text}</h2>}
                                        {widget.size === 3 && <h3>{widget.text}</h3>}
                                        {widget.size === 4 && <h4>{widget.text}</h4>}
                                        {widget.size === 5 && <h5>{widget.text}</h5>}
                                        {widget.size === 6 && <h6>{widget.text}</h6>}
                                    </div>
                                </div>
                            )
                        case "IMAGE":
                            return (
                                <div key={widget._id}>
                                    <div className="icon-right">
                                        <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget._id}`}>
                                            <i className="fas fa-cog float-right" />
                                        </Link>
                                        <span>
                                            <i className="fas fa-bars float-right" />
                                        </span>
                                    </div>
                                    <div>
                                        <img
                                            className="img-fluid"
                                            src={widget.url}
                                            alt=""
                                            width={widget.width}
                                        />
                                    </div>
                                </div>
                            )
                        case "YOUTUBE":
                            return (
                                <div key={widget._id}>
                                    <div className="icon-right">
                                        <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget._id}`}>
                                            <i className="fas fa-cog float-right" />
                                        </Link>
                                        <span>
                                            <i className="fas fa-bars float-right" />
                                        </span>
                                    </div>
                                    <div className="embed-responsive embed-responsive-16by9" style={{width: widget.width}}>
                                        <iframe
                                            src={widget.url}
                                            title={widget._id}
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            )
                        default:
                            return <div></div>;
                    }
                }
            )
        }
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
