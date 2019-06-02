import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import MessageItem from './MessageItem';

class InputField extends React.Component {
	render() {
		const element = document.createElement("ul");
		console.log(this.props.messages);
		for (var x; x < this.props.messages.length; x++) {
			var base = document.createElement("LI");
			var textnode = document.createTextNode(this.props.messages[x]);

			base.appendChild(textnode.text);
			element.appendChild(base);
		}
		return (<div>
			<h1>List of messages</h1>
			{this.props.messages.map((message, index) => (
				<MessageItem key={index} message={message} />
			))}
			</div>
);
	}
}

const mapStateToProps = (state) => { //name is by convention
	//state has entire state of app!!
return { messages: state.messages }; //now it will appear as props
}

export default connect(mapStateToProps, {addMessage})(InputField);
