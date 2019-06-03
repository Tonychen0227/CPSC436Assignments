import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField';
import MessageList from './MessageList';

const App = () => {   //this is how you make a functional component
	return (
<div className="App">
<div><InputField/></div>
<div><MessageList/></div>
</div>
);
}

export default App;
