import React from 'react';
import './MessageList.css';
import { connect } from 'react-redux';
import { addMessage, loadMessage, deleteAllMessages } from '../actions';
import MessageItem from './MessageItem';
import DetailView from './DetailView';
import { bindActionCreators } from 'redux'
import axios from "axios";

const url = "http://localhost:3001/messages";

var initialized = false;

class MessageList extends React.Component {
	constructor() {
		super();
		this.handleDeleteAll = this.handleDeleteAll.bind(this);
    }

	handleDeleteAll(e) {
		this.props.deleteAllMessages(0);
	}
	render() {
		if (!initialized) {
			initialized = true;
			axios.get(url)
				.then(response => {
					this.props.loadMessage(response.data);
				})
				.catch(error => {
				});
		}
		return (<div>
			<h3>Detail View</h3>
			<DetailView/>
			<h3>List of messages</h3>
			<button type="button" onClick={() => this.handleDeleteAll()}>Clear messages</button>
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
    loadMessage: bindActionCreators(loadMessage, dispatch),
		deleteAllMessages: bindActionCreators(deleteAllMessages, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
