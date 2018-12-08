import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }
  postSelectedHandler = (id) => {
    //this.setState({ selectedPostId: id });
    this.props.history.push({ pathname: '/posts/' + id });
  }
  componentDidMount() {
    console.log(this.props);
    axios.get('/posts').then(
      response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max'
          }
        });
        this.setState({ posts: updatedPosts });
      }).catch(error => {
        console.log(error);
      });
  }
  render() {
    let posts = <p>Something went wrong!..</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} />
          // <Link to={'/posts/' + post.id} key={post.id}><Post title={post.title}
          //   author={post.author}
          //   clicked={() => this.postSelectedHandler(post.id)} /></Link>
        );
      });
    }
    return (
      <div className="row m-0">
        <div>{posts}</div>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;