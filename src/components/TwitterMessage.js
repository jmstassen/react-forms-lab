import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMsgChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let characters = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <p>Characters Remaining: {characters}</p>
        <input onChange={this.handleMsgChange} type="text" name="message" id="message" value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
