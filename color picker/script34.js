var button = document.querySelector('#button');
var red = document.querySelector('#red');
var green = document.querySelector('#green');
var blue = document.querySelector('#blue');
var colors = document.querySelector('#colors');
var colorsss = document.querySelector('#colorsss');
var add = document.querySelector('#add');
var pata_na = document.querySelector('#pata_na');

var ischanged = false;
var currentColor ='#E0E0E0';
var allpalletecolors = [];


colorsss.style.display = 'none';
add.addEventListener('click', function(){
   if(allpalletecolors.indexOf(currentColor) === -1 && ischanged !==false){
    pata_na.innerHTML += `<div style="background-color: ${currentColor}" id="colorsss"></div>`
     allpalletecolors.push(currentColor);
    }
});

button.addEventListener('click', function(){
    currentColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    colors.style.backgroundColor = currentColor;
    ischanged = true;
});