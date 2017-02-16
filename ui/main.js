console.log('Loaded!');

//change the text

var element = document.getElementById('main-text');

element.innerHTML = 'This is a web page made by Prankur Chauhan';

//move image

var img = document.getElementById('madi');

img.onclick = function ()
{
    img.style.marginLeft = '100px';
    
};