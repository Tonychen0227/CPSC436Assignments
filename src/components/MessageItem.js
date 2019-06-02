import React from 'react';
import { connect } from 'react-redux';

class MessageItem extends React.Component {
	constructor() {
	super();
	this.state = {
		showDetails: false
	}
	this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({showDetails: !this.state.showDetails});
	}

	render() {
		return (
			<li id={this.props.message.id}>
				<span onClick={() => this.handleClick()}>
					{this.props.message.text}
				</span>
				<b> {this.state.showDetails ? '-' + this.props.message.details:""}</b>
			</li>
);
	}
}

export default MessageItem;
