const input = document.querySelector("input");
const button = document.querySelector(".btn");
const content = document.querySelector(".content");
let ul = document.createElement("ul");

document.addEventListener("keypress", function (event) {
  if (event.keyCode == 13 && input.value !== "") {
      maker();
  
  }
});
button.addEventListener("click", function (event) {
  if (input.value !== "") {
    maker();
  }
});

function maker() {
  const li = document.createElement("li");
  const buttonX = document.createElement("button");
  buttonX.classList.add("del")
  buttonX.textContent = "x";
  li.textContent = input.value[0].toUpperCase() + input.value.substring(1).toLowerCase();
  li.appendChild(buttonX);
  ul.appendChild(li);
  content.appendChild(ul);
  input.value = "";
  

  li.addEventListener("click", () => {
    if (li.classList.contains("toggle")) {
      li.classList.remove("toggle");
    } else {
      li.classList.add("toggle");
    }
    //li.classList.toggle("toggle");
  });
  buttonX.addEventListener("click", () => {
    ul.removeChild(li);
  });
}
