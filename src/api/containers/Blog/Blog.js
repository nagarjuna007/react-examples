import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  }
  render() {
    return (
      <div className="mt-3">
        <div>
          <ul className="list-inline">
            <li><NavLink to="/posts/" exact>Posts</NavLink></li>
            <li><NavLink to="/new-post">New Post</NavLink></li>
          </ul>
        </div>
        <div className="clearfix"></div>
        <Switch>
          {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}

          <Route path="/posts/" component={Posts} />
          <Redirect from="/" to="/posts" />
          <Route path="/" component={Posts} />
        </Switch>
      </div>
    )
  }
}

export default Blog;