import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Post from "./Pages/Post/Post.jsx";
import Login from "./Pages/Login/Login.jsx";
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/post/:postId' component={Post} />
       </Switch>
    );
  }
}

export default Routes;
