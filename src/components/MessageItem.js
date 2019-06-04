import React from 'react';
import './MessageItem.css';
import { connect } from 'react-redux';
import { deleteMessage, showDetail } from '../actions';

class MessageItem extends React.Component {
	constructor() {
		super();
		this.state = {
			showDetails: false
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleShowDetail = this.handleShowDetail.bind(this);
	}

	handleClick() {
		this.setState({showDetails: !this.state.showDetails});
	}

	handleDelete(e) {
		this.props.deleteMessage(e);
	}

	handleShowDetail(e) {
		this.props.showDetail(e);
	}

	render() {
		return (
			<li id={this.props.message.id} className={this.state.showDetails ? "shown" :"hidden"}>
				<span onClick={() => this.handleClick()} className="body">
					{this.props.message.text}
				</span>
				<span> {this.state.showDetails ? '- ' + this.props.message.details:""} </span>
				<button type="button" class="delete" onClick={() => this.handleDelete(this.props.message.id)}>Delete Me!</button>
				<button type="button" class="detail" onClick={() => this.handleShowDetail(this.props.message.id)}>Display Details in view</button>
			</li>
);
	}
}

const mapStateToProps = (state) => { //name is by convention
	//state has entire state of app!!
return { messages: state.messages}; //now it will appear as props
}

export default connect(mapStateToProps, {deleteMessage, showDetail})(MessageItem);