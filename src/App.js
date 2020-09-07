import React from 'react';
import Home from './components/Home/Home';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';


const App = () => {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path= "/" >
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
};

export default App;