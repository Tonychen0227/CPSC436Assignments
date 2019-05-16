var messages = '[{"id": 1, "alias": "Steve", "message": "I love CPSC 310"}, {"id": 2, "alias": "Danya", "message": "I love HTML"}]'
var maxId = 3

function initializeHTML() {
  messages = JSON.parse(messages);
  renderList();
}

function renderList() {
  let list = document.getElementById("messages-list");
  list.innerHTML = "";
  for (var x = 0; x < messages.length; x++) {
    let newElement = createElement(messages[x].message,
       messages[x].alias, messages[x].id);
    list.appendChild(newElement);
  }
}

function createElement(message, alias, id) {
  let newElement = document.createElement("li");
  if (alias == "") {
    alias = "Anonymous";
  }
  newElement.innerHTML = message + " - " + alias + " ";
  let button = document.createElement("button");
  button.innerHTML = "x";
  button.setAttribute("id", id);
  button.setAttribute("onClick", "removeMessage(this.id)");
  newElement.appendChild(button);
  return newElement;
}


function submitMessage() {
  let message = document.getElementById("message");
  if (message.value.length == 0) {
    alert("You must enter a message!");
    return;
  }
  let alias = document.getElementById("alias");
  if (alias.value.length == 0) {
    alias = "Anonymous";
  }
  let list = document.getElementById("messages-list");
  let newElement = createElement(message.value, alias.value, maxId);
  let jsonElement = {
    "id": maxId,
    "message": message.value,
    "alias": alias.value
  }
  maxId++;
  messages.push(jsonElement);
  list.appendChild(newElement);
  message.value = "";
  alias.value = "";
  return false;
}

function clearMessage() {
  let message = document.getElementById("message");
  let alias = document.getElementById("alias");
  message.value = "";
  alias.value = "";
}

function printMessage() {
  console.log(JSON.stringify(messages));
}


function deleteMessage() {
  if (window.prompt(
    "Are you sure you want to delete all? Type 'Yes' to confirm", "No") != "Yes"
  ) {
    alert("Operation cancelled");
    return;
  }
  messages = [];
  renderList();
}

function removeMessage(id) {
  for (var x = 0; x < messages.length; x++) {
    if (messages[x].id == id) {
      if (!confirm("Deleting element: " + messages[x].message
      + " by " + messages[x].alias)) {
        alert("Operation cancelled");
        return;
      }
      messages.splice(x, 1);
      break;
    }
  }
  renderList();
  alert("Successfully deleted");
}
