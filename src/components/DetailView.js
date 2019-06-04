import React from 'react';
import './DetailView.css';
import { connect } from 'react-redux';
import { showDetail } from '../actions';

class DetailView extends React.Component {
	constructor() {
		super();
		this.handleHideDetail = this.handleHideDetail.bind(this);
    }
    
	handleHideDetail(e) {
		this.props.showDetail(0);
	}

	render() {
		return (
        <div>
            <p>{this.props.messages.filter(x => x.id == this.props.detailIndex).message}</p> 
            <button type="button" class="hide" onClick={() => this.handleHideDetail(0)}>Hide Detail</button>
        </div>
);
	}
}

const mapStateToProps = (state) => { //name is by convention
	//state has entire state of app!!
return { 
    messages: state.messages,
    detailIndex: state.detailIndex}; //now it will appear as props
}

export default connect(mapStateToProps, {showDetail})(DetailView);