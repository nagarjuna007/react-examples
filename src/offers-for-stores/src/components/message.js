import React, { Component } from "react";

class Message extends Component {
  state = {
    class: "global-message"
  };

  componentWillReceiveProps() {
    this.setState({
      class: "global-message"
    });
    setTimeout(() => {
      this.setState({
        class: "d-none"
      });
    }, 5000);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        class: "d-none"
      });
    }, 5000);

    if (this.props.messageinfo == undefined) {
     // console.log("test");
    } else {
      this.setState({
        class: "d-none"
      });
    }
  }
  closeMessageHadler = () => {
    this.setState({
      class: "d-none"
    });
  };

  render() {
    return (
      <div className={this.state.class}>
        {this.props.messageinfo}{" "}
        <span onClick={this.closeMessageHadler}>&times;</span>
      </div>
    );
  }
}

export default Message;
