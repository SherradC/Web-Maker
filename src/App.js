import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
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
// import WidgetHeading from './components/widgets/WidgetHeading';
// import WidgetImage from './components/widgets/WidgetImage';
import WidgetList from './components/widgets/WidgetList';
// import WidgetYoutube from './components/widgets/WidgetYoutube';


function App() {

  const users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
    {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
  ];

  const websites = [
    { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
    { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
    { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
  ];

  const pages = [
    { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
  ];


  return (
   <Router>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/user/:uid" component={Profile}></Route>
      <Route exact path="/user/:uid/website" component={WebsiteList}></Route>
      <Route exact path="/user/:uid/website/:wid" component={WebsiteEdit}></Route>
      <Route exact path="/user/:uid/website/new" component={WebsiteNew}></Route>
      <Route exact path="/user/:uid/website/:wid/page" component={PageList}></Route>
      <Route exact path="/user/:uid/website/:wid/page/new" component={PageNew}></Route>
      <Route exact path="/user/:uid/website/:wid/page/:pid" component={PageEdit}></Route>
      <Route exact path="/user/:uid/website/:wid/page/:pid/widget" component={WidgetList}></Route>
      <Route exact path="/user/:uid//website/:wid/page/:pid/widget/new" component={WidgetChooser}></Route>
      {/* <Route exact path="/user/:uid/widgets-heading" component={WidgetHeading}></Route>
      <Route exact path="/user/:uid/widgets-image" component={WidgetImage}></Route>
      <Route exact path="/user/:uid/widgets-youtube" component={WidgetYoutube}></Route> */}
   </Router>
  );
}

export default App;