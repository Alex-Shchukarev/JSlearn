"use strict;"

const chessWrap = document.querySelector('.ch-wrap');
let flag = true;

for( let i = 0; i < 8; i++ ) {
    
    for (let j = 0; j < 8; j++) {
        
        let item = document.createElement('div');
        item.classList.add('ch-item');
        chessWrap.append( item );
        if( flag && j % 2 == 0 ) item.classList.add('ch-black');
        else if( !flag && j % 2 != 0 ) item.classList.add('ch-black');
        
    }

    flag = !flag;
}