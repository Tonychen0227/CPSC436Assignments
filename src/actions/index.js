export const addMessage = (message, details) => {
  return {
    //Payloads can be several, just cannot be duplicate names, think JSON
    type: 'ADD_MESSAGE',
    payloadText: message,
    payloadDeets: details
  };
};
