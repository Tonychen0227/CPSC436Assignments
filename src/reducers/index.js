import {combineReducers} from 'redux';
var maxId = 3;

const messageReducer = (messages = [
  {"text": "Hello world",
  "id": 1, "details": "Boo!"}, {"text": "Goodbye world",
  "id": 2, "details": "Foo!"}], action) => {
  if (action.type === 'ADD_MESSAGE') {
    var toAdd = {};
    toAdd["text"] = action.payloadText;
    console.log(action.payloadDeets);
    toAdd["details"] = action.payloadDeets;
    toAdd["id"] = maxId;
    maxId = maxId + 1;
    return messages.concat(toAdd);
  }
  return messages;
}

export default combineReducers ({
  messages: messageReducer
  //anotherKey: anotherReducer (all your reducers should be combined)
});
