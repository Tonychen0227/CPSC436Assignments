import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from '../actions';

class MessageItem extends React.Component {
	constructor() {
	super();
	this.state = {
		showDetails: false
	}
	this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleClick() {
		this.setState({showDetails: !this.state.showDetails});
	}

	handleDelete(e) {
		this.props.deleteMessage(e);
	}

	render() {
		return (
			<li id={this.props.message.id}>
				<span onClick={() => this.handleClick()}>
					{this.props.message.text}
				</span>
				<b> {this.state.showDetails ? '-' + this.props.message.details:""} </b>
				<button type="button" onClick={() => this.handleDelete(this.props.message.id)}>Delete Me!</button>
			</li>
);
	}
}

const mapStateToProps = (state) => { //name is by convention
	//state has entire state of app!!
return { messages: state.messages }; //now it will appear as props
}

export default connect(mapStateToProps, {deleteMessage})(MessageItem);
