var body = document.getElementsByTagName('body')[0];
var canvas = document.getElementsByTagName('div')[0];
var palette = document.getElementsByTagName('div')[1];
var menuNew = document.getElementById('new');
var menuSave = document.getElementById('save');
var menuLoad = document.getElementById('load');

var colorArray = ['#800000', '#FF0000', '#FFA500', '#FFFF00', '#808000', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#4B0082', '#800080', '#EE82EE', '#FFFFFF', '#C0C0C0', '#808080', '#000000', '#A52A2A', '#A0522D', '#D2691E', '#CD853F', '#D2B48C', '#F5DEB3', '#FFF8DC' ];

var paintColor = '';
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

function generatePixels(array) {
  if (!array.length) {
    for(let i = 0; i< 3234; i++) {
      let element = document.createElement('div');
      element.className = 'pixel';
      element.style.backgroundColor = '#ffffff';
      canvas.appendChild(element);
    }
  } else {
    //console.log(array.length);
    for (let m = 0; m < 3234; m++) {
      let element = document.createElement('div');
      element.className = 'pixel';
      element.style.backgroundColor = array[m];
      canvas.appendChild(element);
    }
  }
}

function clearPixels(){
  let pixels = document.getElementsByClassName('pixel');
  let deleteCounter = pixels.length;
  for (let k = 0; k < deleteCounter; k++) {
    canvas.removeChild(pixels[0]);
  }
}

function newPixels(){
  clearPixels();
  generatePixels([]);
}

function savePixels(){
  let pixelArray = [];
  let pixels = document.getElementsByClassName('pixel');
  for (let l = 0; l < pixels.length; l++) {
    pixelArray.push(pixels[l].style.backgroundColor);
  }
  let fileName = prompt('Please Pick a File Name');
  localStorage.setItem(fileName, JSON.stringify(pixelArray));
}

function loadPixels(){
  let userFile = prompt('Please enter the name of the file you want to load');
  let pixelArray = localStorage.getItem(userFile);
  pixelArray = JSON.parse(pixelArray);
  clearPixels();
  generatePixels(pixelArray);
}

function setPalette(){
  for(let j = 0; j < colorArray.length; j++) {
    let dot = document.createElement('div');
    dot.className = 'paint';
    dot.addEventListener('click', pickPaint);
    dot.style.backgroundColor = colorArray[j];
    palette.appendChild(dot);
  }
}


paintColor = '#ffffff';
generatePixels([]);
setPalette();
colorWheel.addEventListener("change", colorWheelPick);
canvas.addEventListener('click', changeColor);
canvas.addEventListener("mousedown", mouseDown);
body.addEventListener("mouseup", mouseUp);
canvas.addEventListener("mouseover", dragChangeColor);
menuNew.addEventListener("click", newPixels);
menuSave.addEventListener("click", savePixels);
menuLoad.addEventListener("click", loadPixels);
