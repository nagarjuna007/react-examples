import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Post from '../../components/Post/Post';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }
  componentDidMount() {
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
        //console.log(response);
      }).catch(error => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  }

  render() {
    let posts = <p>Something went wrong!..</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post key={post.id} title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)} />;
      });
    }
    return (
      <div className="mt-3">
        <div className="row m-0">
          {posts}
        </div>
        <div className="clearfix"></div>
        <FullPost id={this.state.selectedPostId} />
        <NewPost />
      </div>
    )
  }
}

export default Blog;