import React from 'react';
import './MessageList.css';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import { getMessage } from '../actions';
import MessageItem from './MessageItem';
import DetailView from './DetailView';
import { bindActionCreators } from 'redux'

class MessageList extends React.Component {
	render() {
		this.props.getMessage();
		if (!this.props.messageProgress) {
			
		}
		return (<div>
			<h3>Detail View</h3>
			<DetailView/>
			<h3>List of messages</h3>
			<h5>Click a message to reveal details</h5>
			<ul>
			{this.props.messages.map((message, index) => (
				<MessageItem key={index} message={message} />
			))}
			</ul>
		</div>
);
	}
}

const mapStateToProps = (state) => { //name is by convention
	//state has entire state of app!!
return { messages: state.messages }; //now it will appear as props
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: bindActionCreators(addMessage, dispatch),
    getMessage: bindActionCreators(getMessage, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
