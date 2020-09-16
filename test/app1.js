document.querySelector("#elastic").oninput = function () {
  let val = this.value.trim();
  let elasticItems = document.querySelectorAll(".elastic *");
  let line = document.querySelector("#hr");
  if (val != "") {
    elasticItems.forEach(function (elem) {
      if (elem.innerText.search(RegExp(val, "gi")) == -1) {
        elem.classList.add("hide");
      } else {
        elem.classList.remove("hide");
        let str = elem.innerText;
      }
    });
  } else {
    elasticItems.forEach(function (elem) {
      elem.classList.remove("hide");
    });
  }
};

function removeElement(elementId) {
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}
