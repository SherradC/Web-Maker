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
import Axios from 'axios';
import UserManage from "./components/user/UserManage";


export default class App extends React.Component {

// check if user is loggedIn
    loggedIn = async () => {
        const res = await Axios.get("/api/loggedIn");
        return res.data;
    }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component = {Login} />
          <Route exact path="/login" component = {Login} />
          <Route exact path="/register" component = {Register}/>
          <Route exact path="/user/:uid" render ={props => <Profile {...props} loggedIn={this.loggedIn} />}/>
          <Route exact path="/manage" render={props => <UserManage {...props} loggedIn={this.loggedIn} />}/>
          <Route exact path="/user/:uid/website" render={props => <WebsiteList {...props} loggedIn={this.loggedIn} />} />
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