import React, { Component } from 'react';
import axios from 'axios';

class FullPost extends Component {
  state = {
    loadedPost: null
  }
  componentDidUpdate() {
    if (this.props.id) {
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
        axios.get('/posts/' + this.props.id).then(response => {
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }
  deletePostHandler = () => {    
    axios.delete('/posts/' + this.props.id).then(response => {
      console.log(response);
    });
  }
  render() {
    let post = <div className="my-3 bg-white p-2 text-danger">Please select a Post!</div>;
    if (this.props.id) {
      post = <div className="my-3 bg-white p-2 text-danger">Loading..!!</div>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost my-3 bg-white p-2">
          <b>Full Post</b>
          <p className="mt-2 mb-1">{this.state.loadedPost.title}</p>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <a onClick={this.deletePostHandler}>Delete</a>
          </div>
        </div>
      )
    }

    return post;
  }
}

export default FullPost;