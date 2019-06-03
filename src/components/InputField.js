import React from 'react';
import './InputField.css';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

class InputField extends React.Component {
	constructor() {
		super();
		this.state = {text: '', details: ''};
		this.handleChangeText = this.handleChangeText.bind(this);
		this.handleChangeDetail = this.handleChangeDetail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClear = this.handleClear.bind(this)
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

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.text == "") {
			alert("May not have an empty message text!");
			return;
		}
		if (this.state.details == "") {
			this.setState({
				text: this.state.text,
				details: "No Details Provided"});
			this.props.addMessage(this.state.text, "no details provided");
		} else {
			this.props.addMessage(this.state.text, this.state.details);
		}
		this.setState({
			text: "",
			details: ""});
	}

	handleClear(event) {
		this.setState({text: "", details: ""});
	}

	render() {
		return (<div>
			<h1> Welcome to my message board! </h1>
			<h3> Add a new message: </h3>
			<form onSubmit={this.handleSubmit} className="InputField">
        <label>
          Text:
          <input type="text" value={this.state.text} onChange={this.handleChangeText}/>
        </label>
				<br/>
				<label>
					Details:
					<input type="text" value={this.state.details} onChange={this.handleChangeDetail}/>
				</label>
				<br/>
        <input type="submit" value="Send Message" />
				<input type="reset" onClick={this.handleClear} value="Reset Inputs" />
      </form>
</div>
);
	}
}

const mapStateToProps = (state) => { //name is by convention
	//state has entire state of app!!
return { messages: state.messages }; //now it will appear as props
}

export default connect(mapStateToProps, {addMessage})(InputField);
