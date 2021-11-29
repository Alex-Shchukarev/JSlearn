"use strict";

function draw () {
    return `<img src="/Image48.gif" id="fet2">`;
}

function destr () {
    return `<img src="/Image49.gif" id="fet1">`;
    
}
let gorg = document.querySelector('#gorg');
let gorg1 = document.querySelector('#gorg1');
//gorg.innerHTML = '<img src="/Image1.gif" id="fet1">';
setTimeout(() => { gorg.innerHTML = draw();
    
}, 2000);

setTimeout(() => {
    gorg1.innerHTML = destr();
}, 3000);
//gorg.innerHTML = '<img src="/Горгулья.gif" id="gorgul">'