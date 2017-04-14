var body = document.getElementsByTagName('body')[0];
var canvas = document.getElementsByTagName('div')[0];
var palette = document.getElementsByTagName('div')[1];
var paintColor = '';
var colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white'];
var currentColor = document.createElement('div');
var colorWheel = document.createElement('input');
var isMouseDown = false;

function mouseDown() {
  isMouseDown = true;
}

function mouseUp() {
  isMouseDown = false;
}

function colorWheelPick() {
  paintColor = colorWheel.value;
  currentColor.style.backgroundColor = colorWheel.value;
}

function changeColor(event){
    event.stopPropagation();
    if(event.target.className === 'pixel'){
      event.target.style.backgroundColor = paintColor;
    }
}

function dragChangeColor(event) {
  if(isMouseDown) {
    if(event.target.className === 'pixel'){
      event.target.style.backgroundColor = paintColor;
    }
  }
}

function pickPaint(event) {
  paintColor = event.target.style.backgroundColor;
  currentColor.style.backgroundColor = event.target.style.backgroundColor;
}

canvas.addEventListener('click', changeColor);

for(let i = 0; i< 3234; i++) {
  let element = document.createElement('div');
  element.className = 'pixel';
  element.style.backgroundColor = 'white';
  canvas.appendChild(element);
}

for(let j = 0; j < 7; j++) {
  let dot = document.createElement('div');
  dot.className = 'paint';
  dot.addEventListener('click', pickPaint);
  dot.style.backgroundColor = colorArray[j];
  palette.appendChild(dot);
}

colorWheel.className = 'paint';
colorWheel.type = 'color';
colorWheel.addEventListener("change", colorWheelPick);
palette.appendChild(colorWheel);

currentColor.className = 'paint';
currentColor.style.backgroundColor = 'white';
palette.appendChild(currentColor);
paintColor = 'white';

canvas.addEventListener("mousedown", mouseDown);
body.addEventListener("mouseup", mouseUp);
canvas.addEventListener("mouseover", dragChangeColor);
