import React from 'react';
import './MessageItem.css';
import { connect } from 'react-redux';
import { deleteMessage, showDetail, editMessage } from '../actions';

class MessageItem extends React.Component {
	constructor() {
		super();
		this.state = {
			showDetails: false,
			showEdit: false,
			id: '',
			text: '',
			details: ''
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleShowDetail = this.handleShowDetail.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.populateEdit = this.populateEdit.bind(this);
		this.handleChangeText = this.handleChangeText.bind(this);
		this.handleChangeDetail = this.handleChangeDetail.bind(this);
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

	handleEdit(e) {
		if (this.state.text == "") {
			alert("May not have an empty message text!");
			return;
		}
		if (this.state.details == "") {
			this.setState({
				details: "No Details Provided"
			});
			//TODO: ADD EDIT MESSAGE
			this.props.editMessage(this.state.id, this.state.text, this.state.details);
		} else {
			//TODO: ADD EDIT MESSAGE
			this.props.editMessage(this.state.id, this.state.text, this.state.details);
		}
		this.setState({
			showEdit: false
		});
	}

	handleChangeText(event) {
		this.setState({
			text: event.target.value,
			details: this.state.details});
	}

	handleChangeDetail(event) {
		this.setState({
			text: this.state.text,
			details: event.target.value});
	}

	populateEdit(id, text, details) {
		this.setState({
			id: id,
			showDetails: false,
			showEdit: !this.state.showEdit,
			text: text,
			details: details});
	}

	render() {
		return (
			<li id={this.props.message.id} className={this.state.showDetails ? "shown" :"hidden"}>
				<span onClick={() => this.handleClick()} className="body" hidden={this.state.showEdit}>
					{this.props.message.text}
				</span>
				<span hidden={this.state.showEdit}> {this.state.showDetails ? '- ' + this.props.message.details:""} </span>
				<form onSubmit={this.handleEdit} className="EditField" hidden={!this.state.showEdit}>
					<label>
						Text:
						<input type="text" defaultValue={this.props.message.text} onChange={this.handleChangeText}/>
					</label>
					<label>
						Details:
						<input type="text" defaultValue={this.props.message.details} onChange={this.handleChangeDetail}/>
					</label>
					<input type="submit" value="Send Edit" />
					<input type="reset" onClick={this.handleClear} value="Reset Inputs" />
				</form>
				<button type="button" className="delete" onClick={() => this.handleDelete(this.props.message.id)}>Delete Me!</button>
				<button type="button" className="detail" onClick={() => this.handleShowDetail(this.props.message.id)}>Display Details in view</button>
				<button type="button" className="edit" onClick={() => this.populateEdit(this.props.message.id, this.props.message.text, this.props.message.details)}>Edit</button>
			</li>
);
	}
}

const mapStateToProps = (state) => { //name is by convention
	//state has entire state of app!!
return { messages: state.messages}; //now it will appear as props
}

export default connect(mapStateToProps, {editMessage, deleteMessage, showDetail})(MessageItem);
