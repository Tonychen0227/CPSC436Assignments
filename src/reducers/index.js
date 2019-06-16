import {combineReducers} from 'redux';
const axios = require('axios');

const url = "http://localhost:3001/messages";

const messageReducer = (messages = [], action) => {
  if (action.type === "GET_MESSAGE") {
    axios.get(url)
      .then(response => {
        console.log(response.data);
        messages = response.data;
        return messages;
      })
      .catch(error => {
        console.log(error);
      });
  }
  if (action.type === 'ADD_MESSAGE') {
    axios.post(url, {
      text: action.payloadText,
      details: action.payloadDeets
    })
    .then(response => {
      console.log(response.data);
      messages = response.data;
      return messages;
    })
    .catch(error => {
      console.log(error);
    });
  }
  if (action.type === 'DELETE_MESSAGE') {
    axios.delete(url, {
      idToDelete: action.payload
    }).then(response => {
      console.log(response.data);
      messages = response.data;
      return messages;
    })
    .catch(error => {
      console.log(error);
    });
  }
  return messages;
}

const detailReducer = (detailIndex = 0, action) => {
  if (action.type === 'DISPLAY_DETAIL') {
    detailIndex = action.payload;
  }
  return detailIndex;
}

export default combineReducers ({
  messages: messageReducer,
  detailIndex: detailReducer
  //anotherKey: anotherReducer (all your reducers should be combined)
});
