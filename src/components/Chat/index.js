import React from 'react';
import './Chat.css'
import Message from '../Message/';

export default class Chat extends React.Component {
  state = {
      messages: [],
      messageInput: ''
  };

  changeInputMessage = (e) => {
    this.setState({
        messageInput: e.target.value
    })
  }

  sendMessageOnEnter = (e) => {
      const { messages, messageInput } = this.state;
      if (e.key === 'Enter') {
          this.setState({
              messages: [...messages, { text: messageInput }],
              messageInput: ''
          });
      }
  }

  render() {
    const { messages, messageInput } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {
                messages.map((item, index) => {
                    return <Message text={item.text} key={index}/>              
                })
            }
          </div>
        </div>
        <input className='input-message' 
            type='text' onChange={this.changeInputMessage}
            onKeyPress={this.sendMessageOnEnter}
            value={messageInput}
            />
      </div>
    );
  }
}