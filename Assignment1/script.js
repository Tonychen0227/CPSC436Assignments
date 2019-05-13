function setSize() {
  var size = 0;
  var randomNum = Math.floor(Math.random() *10);
  for (var i = 0; i < randomNum; i++) {
    size += 100;
  }
  return size;
}

function moveHorizontal() {
  var steven = document.getElementById('picture');
  if (steven) {
    steven.style.left = setSize() + 'px';
  }
}

function moveVertical() {
  var steven = document.getElementById('picture');
  if (steven) {
    steven.style.top = setSize() + 'px';
  }
}
