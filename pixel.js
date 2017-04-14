var canvas = document.getElementsByTagName('div')[0];
var palette = document.getElementsByTagName('div')[1];
var paintColor = '';
var colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white'];
var currentColor = document.createElement('div');

canvas.addEventListener('click', turnRed);

function turnRed(){
  event.target.style.backgroundColor = paintColor;
}

function pickPaint() {
  paintColor = event.target.style.backgroundColor;
  currentColor.style.backgroundColor = event.target.style.backgroundColor;
}

for(let i = 0; i< 3234; i++) {
  let element = document.createElement('div');
  element.className = 'pixel';
  element.style.backgroundColor = 'white';
  canvas.appendChild(element);
}

for(let j = 0; j < 8; j++) {
  let dot = document.createElement('div');
  dot.className = 'paint';
  dot.addEventListener('click', pickPaint);
  dot.style.backgroundColor = colorArray[j];
  palette.appendChild(dot);
}

currentColor.className = 'paint';
currentColor.style.backgroundColor = 'white';
palette.appendChild(currentColor);
