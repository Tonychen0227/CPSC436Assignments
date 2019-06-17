import {combineReducers} from 'redux';
const axios = require('axios');
const shortid = require('shortid');

const url = "http://localhost:3001/messages";

const messageReducer = (messages = [], action) => {
  if (action.type === "LOAD_MESSAGE") {
    messages = action.payload;
  }
  if (action.type === "EDIT_MESSAGE") {
    for (var x = 0; x < messages.length; x++) {
      if (messages[x].id == action.payloadId) {
        messages[x].text = action.payloadText;
        messages[x].details = action.payloadDeets;
      }
    }
    axios.put(url, {
      id: action.payloadId,
      text: action.payloadText,
      details: action.payloadDeets
    }).then(response => {
      messages = response.data;
    })
    .catch(error => {
      console.log(error);
    });
  }
  if (action.type === 'ADD_MESSAGE') {
    messages.push({"id": shortid.generate(), "text": action.payloadText,
      "details": action.payloadDeets});
    axios.post(url, {
      text: action.payloadText,
      details: action.payloadDeets
    })
    .then(response => {
      messages = response.data;
    })
    .catch(error => {
      console.log(error);
    });
  }
  if (action.type === 'DELETE_MESSAGE') {
    if (action.payload == null) {
      messages = []
    } else {
      messages = messages.filter( (item) => item.id !== action.payload);
    }
    axios.delete(url, {
      idToDelete: action.payload
    }).then(response => {
      messages = response.data;
    })
    .catch(error => {
      console.log(error);
    });
  }
  return messages;
}

const detailReducer = (detailIndex = 0, action) => {
  console.log(action.payload);
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
