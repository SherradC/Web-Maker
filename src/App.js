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

  userNameUsed = (username) => {
    for (let user of this.state.users){
      if(username === user.username) {
        return true;
      }
    }

    return false;
  }

  updateUser = (newUser) => {
    const newUsers = this.state.users.map((user)=> {
      if(user._id === newUser._id) {
        if(user.username !== newUser.userName && this.userNameUsed(newUser.username)) {
            alert ("Come again");
        } else {
            user = newUser;
            alert("info updated")
        }
      }
      return user;

    });

    this.setState({
      users: newUsers
    });

    
  }

  addWeb = (newWeb) => {
    const newWebs = this.state.websites;
    newWebs.push(newWeb);
    this.setState({
      websites: newWebs
    });
  }

  addPage = newPage => {
    const newPages = this.state.pages;
    newPages.push(newPage);
    this.setState({
      pages: newPages
    });
  }

  deleteWeb =(wid) => {
    this.setState({
      websites: this.state.websites.filter(
        (website) => website._id !== wid
      )
    })
  }

  editWeb = (wid, name, description) => {
    this.setState({
      websites: this.state.websites.map(
        (website) => {
          if (wid === website._id){
            website.name = name;
            website.description = description
          }
          return website;
        }
      )
    })
  }


  editPage = newPage => {
    const newPages = this.state.pages.map(
        (page) => {
            if(page._id === newPage._id) {
                page = newPage
            }
            return page;
        }
    )
    this.setState({
        pages: newPages
    })
}

deletePage = pid => {
    const newPages = this.state.pages.filter(
        (page) => (
            page._id !== pid
        )
    )
    this.setState({
        pages: newPages
    })
}

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

state = {

  websites: [
    { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
    { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
    { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
  ],

  pages:[
    { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
  ],
  
  widgets:[
    { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
    { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "data:image/jpeg;base64,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"},
     { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
    { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://www.youtube.com/embed/LdF2RcelRg0"},
  ]
}


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component = {Login} />
          <Route exact path="/login" component = {Login} />
          <Route exact path="/register" component = {Register}/>
          <Route exact path="/user/:uid" render= { props => (<Profile {...props} users={this.state.users} updateUser={this.updateUser}/>)}/>
          <Route exact path="/user/:uid/website" render= { props => (<WebsiteList {...props} websites={this.state.websites}/>)} />
          <Route exact path="/user/:uid/website/new" render={ props => (<WebsiteNew {...props} websites={this.state.websites} addWeb={this.addWeb}/>)} />
          <Route exact path="/user/:uid/website/:wid" render={ props => (<WebsiteEdit {...props} websites={this.state.websites} deleteWeb={this.deleteWeb} editWeb={this.editWeb}/>)} />
          <Route exact path="/user/:uid/website/:wid/page" render={ props => (<PageList {...props} pages={this.state.pages} />)} />
          <Route exact path="/user/:uid/website/:wid/page/new" render={ props => (<PageNew {...props} pages={this.state.pages} addPage={this.addPage} />)} />
          <Route exact path="/user/:uid/website/:wid/page/:pid" render={ props => (<PageEdit {...props} pages={this.state.pages} editPage={this.editPage} deletePage={this.deletePage} />)} />
          <Route exact path="/user/:uid/website/:wid/page/:pid/widget" render={ props=>(<WidgetList {...props} widgets={this.state.widgets} />)} />
          <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new" render={props=>(<WidgetChooser {...props} addWidget={this.addWidget} />)} />
          <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid" render={ props=>(<WidgetEdit {...props} widgets={this.state.widgets} editWidget={this.editWidget} deleteWidget={this.deleteWidget} />)} />
        </Switch>
      </Router>
    );
  }
}