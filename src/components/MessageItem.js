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
			text: '',
			details: ''
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleShowDetail = this.handleShowDetail.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.populateEdit = this.populateEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
		e.preventDefault();
		console.log(e)
	}

	handleChange(e) {
		console.log(e);
	}

	populateEdit() {
		this.setState({
			showEdit: !this.state.showEdit,});
	}

	render() {
		return (
			<li id={this.props.message.id} className={this.state.showDetails ? "shown" :"hidden"}>
				<span onClick={() => this.handleShowDetail(this.props.message.id)} className="body" hidden={this.state.showEdit}>
					{this.props.message.text}
				</span>
				<span hidden={this.state.showEdit}> {this.state.showDetails ? '- ' + this.props.message.details:""} </span>
				<form onChange={this.handleChange} onSubmit={this.handleEdit} className="EditField" hidden={!this.state.showEdit}>
					<label>
						Text:
						<input type="text" defaultValue={this.props.message.text} onChange={this.handleChangeText}/>
					</label>
					<label>
						Details:
						<input type="text" defaultValue={this.props.message.details} onChange={this.handleChangeText}/>
					</label>
					<input type="submit" value="Send Edit" />
					<input type="reset" onClick={this.handleClear} value="Reset Inputs" />
				</form>
				<button type="button" className="delete" onClick={() => this.handleDelete(this.props.message.id)}>Delete Me!</button>
				<button type="button" className="detail" onClick={() => this.handleShowDetail(this.props.message.id)}>Display Details in view</button>
				<button type="button" className="edit" onClick={() => this.populateEdit()}>Edit</button>
			</li>
);
	}
}

const mapStateToProps = (state) => { //name is by convention
	//state has entire state of app!!
return { messages: state.messages}; //now it will appear as props
}

export default connect(mapStateToProps, {deleteMessage, showDetail})(MessageItem);
