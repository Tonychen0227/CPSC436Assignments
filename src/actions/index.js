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

export const showDetail = (id) => {
  return {
    type: 'DISPLAY_DETAIL',
    payload: id
  }
}
