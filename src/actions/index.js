export const addMessage = (message, details) => {
  return {
    //Payloads can be several, just cannot be duplicate names, think JSON
    type: 'ADD_MESSAGE',
    payloadText: message,
    payloadDeets: details
  };
};

export const deleteMessage = (id) => {
  return {
    //Payloads can be several, just cannot be duplicate names, think JSON
    type: 'DELETE_MESSAGE',
    payload: id
  };
};

export const deleteAllMessages = () => {
  return {
    //Payloads can be several, just cannot be duplicate names, think JSON
    type: 'DELETE_MESSAGE'
  };
};

export const showDetail = (id) => {
  return {
    type: 'DISPLAY_DETAIL',
    payload: id
  }
}

export const getMessage = () => {
  return {
    type: 'GET_MESSAGE'
  }
}

export const editMessage = (id, message, details) => {
  return {
    type: 'EDIT_MESSAGE',
    payloadText: message,
    payloadId: id,
    payloadDeets: details
  }
}

export const loadMessage = (messageList) => {
  return {
    type: 'LOAD_MESSAGE',
    payload: messageList
  }
}
