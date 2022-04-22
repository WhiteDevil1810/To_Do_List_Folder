var ol = document.getElementById('list');
var entery = document.getElementById('start');
entery.onsubmit = function (evt) {
  evt.preventDefault();
  var input = document.getElementById('input').value;
  if (input === "") {
    alert('Please enter your task');
  } else {
    createListElement();
  }
}

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = "";

  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);
  var dBtn = document.createElement("button" + "");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    var listItems = document.getElementsByTagName("li"); // or document.querySelectorAll("li"); 
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].onclick = function () { this.parentNode.removeChild(this); }
    }

  }
}



