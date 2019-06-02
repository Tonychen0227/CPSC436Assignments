import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField';
import MessageList from './MessageList';

const App = () => {   //this is how you make a functional component
	return (
<div>
<div><InputField/></div>
<div><MessageList/></div>
</div>
);
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
