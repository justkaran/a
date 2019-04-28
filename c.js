var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var Output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement('style');
var headElem = document.querySelector('head');
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = 'h1 {\n  color: blue;\n  background-color: yellow;\n  border: 1px solid black;\n}\n\np {\n  color: red;\n}\n\nli {\n  text-shadow: 2px 2px 3px purple;\n}';
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
