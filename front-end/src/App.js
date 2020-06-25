import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './component/Home';
import Contact from './component/Contact';
import Posts from './component/Posts';
import Header from './component/Header';
import Footer from './component/Footer';
import Post from './component/Post';

export default function MyApp() {
  return (
    <>
    <Router>
      <Header/>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
    </>
  );
}