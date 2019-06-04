import React from 'react';
import './MessageList.css';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import MessageItem from './MessageItem';
import DetailView from './DetailView';

class InputField extends React.Component {
	render() {
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

export default connect(mapStateToProps, {addMessage})(InputField);
