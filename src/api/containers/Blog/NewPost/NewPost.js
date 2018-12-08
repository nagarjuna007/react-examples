import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
  state = {
    title: '',
    body: '',
    author: 'Max',
    submitted: false
  }
  componentDidMount() {
    console.log(this.props);
  }
  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author
    }
    console.log(data);
    axios.post('/posts', data).then(response => {
      console.log(response);
      this.props.history.replace('/posts');
      // this.setState({ submitted: true });
    });
  }
  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/posts" />;
    }
    return (
      <div className="NewPost my-3 bg-white p-2">
        {redirect}
        <h5>Add a Post</h5>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} className="form-control" />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <input type="text" value={this.state.body} onChange={(event) => this.setState({ body: event.target.value })} className="form-control" />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input type="text" value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })} className="form-control" />
        </div>
        <button onClick={this.postDataHandler} type="button" className="btn btn-primary">ADD</button>
      </div>
    )
  }
}

export default NewPost;