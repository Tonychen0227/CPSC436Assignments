import React from 'react';
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
			alert("May not have an empty message!");
			return;
		}
		this.props.addMessage(this.state.text, this.state.details);
		this.setState({
			text: "",
			details: ""});
	}

	handleClear(event) {
		this.setState({text: "", details: ""});
	}

	render() {
		return (<form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.text} onChange={this.handleChangeText}/>
        </label>
				<br/>
				<label>
					Details:
					<input type="text" value={this.state.details} onChange={this.handleChangeDetail}/>
				</label>
				<br/>
        <input type="submit" value="Send Message" />
				<br/>
				<input type="reset" onClick={this.handleClear} value="Reset Inputs" />
      </form>

);
	}
}

const mapStateToProps = (state) => { //name is by convention
	//state has entire state of app!!
return { messages: state.messages }; //now it will appear as props
}

export default connect(mapStateToProps, {addMessage})(InputField);
