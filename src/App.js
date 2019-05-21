import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from './components/user/Login';
import Register from "./components/user/Register"
import Profile from "./components/user/Profile"
import WebsiteList from './components/websites/WebsiteList';
import WebsiteEdit from './components/websites/WebsiteEdit';
import WebsiteNew from './components/websites/WebsiteNew';
import PageList from './components/page/PageList';
import PageEdit from './components/page/PageEdit';
import PageNew from './components/page/PageNew';
import WidgetChooser from './components/widgets/WidgetChooser';
import WidgetList from './components/widgets/WidgetList';
import WidgetEdit from './components/widgets/WidgetEdit';


export default class App extends React.Component {

editWidget = newWidget => {
    
    const newWidgets = this.state.widgets.map(
        (widget) => {
            if(widget._id === newWidget._id) {
                widget = newWidget
            }
            return widget;
        }
    )
    this.setState({
        widgets: newWidgets
    })
}

addWidget = newWidget => {
    const newWidgets = this.state.widgets;
    newWidgets.push(newWidget);
    this.setState({
        widgets: newWidgets
    });
}

deleteWidget = (wgid) => {
    const newWidgets = this.state.widgets.filter(
        (widget) => (
            widget._id !== wgid
        )
    )
    this.setState({
        widgets: newWidgets
    })
}

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component = {Login} />
          <Route exact path="/login" component = {Login} />
          <Route exact path="/register" component = {Register}/>
          <Route exact path="/user/:uid" component = {Profile}/>
          <Route exact path="/user/:uid/website" component = {WebsiteList} />
          <Route exact path="/user/:uid/website/new" component = {WebsiteNew} />
          <Route exact path="/user/:uid/website/:wid" component = {WebsiteEdit} />
          <Route exact path="/user/:uid/website/:wid/page" component = {PageList} />
          <Route exact path="/user/:uid/website/:wid/page/new" component = {PageNew} />
          <Route exact path="/user/:uid/website/:wid/page/:pid" component = {PageEdit} />
          <Route exact path="/user/:uid/website/:wid/page/:pid/widget" component = {WidgetList} />
          <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new" component = {WidgetChooser} />
          <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid" component = {WidgetEdit} />
        </Switch>
      </Router>
    );
  }
}