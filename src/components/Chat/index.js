import React from 'react';
import './Chat.css'
import Message from '../Message/';

export default class Chat extends React.Component {
  state = {
      messages: [],
      messageInput: ''
  };

  onChange = (e) => {
    this.setState({
        messageInput: e.target.value
    })
  }

  onKeyPress = (e) => {
      if (e.key === 'Enter') {
          let newMessages = this.state.messages.slice();
          newMessages.push(e.target.value);
          this.setState({
              messages: newMessages,
              messageInput: ''
          });
      }
  }

  render() {
    const state = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {
                state.messages.map((item, index) => {
                    return <Message message={item} key={index}/>              
                })
            }
          </div>
        </div>
        <input className='input-message' 
            type='text' onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            value={state.messageInput}
            />
      </div>
    );
  }
}
