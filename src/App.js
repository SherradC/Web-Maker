import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PageEdit from './components/page/PageEdit';


function App() {
  return (
    <Router>
     <Route path="/" component={PageEdit}></Route>
    </Router>
  );
}

export default App;
