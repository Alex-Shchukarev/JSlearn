
function randomGenerateNumber( bool, num ) {
    
    let result = 0;
    let h = document.documentElement.clientHeight;
    let w = document.documentElement.clientWidth;
    let ms = new Date().getTime();
    let b = navigator.appVersion.slice(0,1);
    
    if( bool ) result = num * b + w / h;
    else result = num * h - w / b;

    result = ms / result;

    let resultStringArray = result.toString().split('.');

    let resultSumArray = +resultStringArray[0] + +resultStringArray[1];
    
   return resultSumArray / 10 ** ( resultSumArray.toString().length ); 

}

function getUnicodeChar( str ) {

    let charNumber = 0;

    for( let i = 0; i < str.length; i++ ) {
        charNumber += str[i].charCodeAt();
    }

    return charNumber;
}

function getParametr( num ) {

    if( num % 2 == 0 ) return true;
    else return false;
}


let nameSurname = prompt( "Please, enter the first letters your name and surname: ", "AZ" );

let charUnicode = getUnicodeChar( nameSurname );

console.log(randomGenerateNumber( getParametr( charUnicode ), charUnicode ));