"use strict";

let arr = [];
for( let i = 0; i < 100000; i++ ) {
arr.push( Math.round( Math.random() * 10000 ) );
}

/* Сортировка пузырьком последовательно сравнивать значения соседних элементов и менять числа местами, если предыдущее 
оказывается больше последующего. */

function sortBubble( arrayNum ) {

    for( let i = 0; i < arrayNum.length - 1; i++ ) {
        for( let j = 0; j < arrayNum.length - 1 - i; j++ ) {
            if( arrayNum[j+1] < arrayNum[j] ) {
                let buffer = arrayNum[j+1];
                arrayNum[j+1] = arrayNum[j];
                arrayNum[j] = buffer;
            }
        }
    
    }
    return arrayNum;
}

// Посчитаем время пузырьком 3 раза  и вычислим среднее время сортировки при массиве в 100 000 целых чисел

let averangeTimeBubble = 0;
for( let i = 0; i < 3; i++ ) {
let startTime = Date.now();
sortBubble( arr );
let endTime = Date.now();
averangeTimeBubble += ( endTime - startTime );
}

averangeTimeBubble /= 3;
console.log( averangeTimeBubble );

/* Сортировка вставками - массив постепенно перебирается слева направо. При этом каждый последующий элемент размещается так, 
чтобы он оказался между ближайшими элементами с минимальным и максимальным значением. */

function sortInsert( arrayNum ) {

    for( let i = 0; i < arrayNum.length; i++ ) {
        let buffer = arrayNum[i]; j = i - 1;
        while( j >= 0 && arrayNum[j] > buffer ) {
            arrayNum[j+1] = arrayNum[j];
            j--;
        }
        arrayNum[j+1] = buffer;
    }
    return arrayNum;
}

// Посчитаем время вставкой 3 раза  и вычислим среднее время сортировки при массиве в 100 000 целых чисел

let averangeTimeInsert = 0;
for( let i = 0; i < 3; i++ ) {
let startTime = Date.now();
sortInsert( arr );
let endTime = Date.now();
averangeTimeInsert += ( endTime - startTime );
}

averangeTimeInsert /= 3;
console.log( averangeTimeInsert );

/* Сортировка выбором - массив постепенно перебирается слева направо. При этом каждый последующий элемент размещается так, 
чтобы он оказался между ближайшими элементами с минимальным и максимальным значением. */

function sortChoose( arrayNum ) {

    for( let i = 0; i < arrayNum.length - 1; i++ ) {
        let minNumIndex = i;
        for( let j = i + 1; j < arrayNum.length; j++ ) {
            if( arrayNum[j] < arrayNum[minNumIndex] ) {
                minNumIndex = j;
            }
        }
        let buffer = arrayNum[i];
        arrayNum[i] = arrayNum[minNumIndex];
        arrayNum[minNumIndex] = buffer;
    }
    return arrayNum;
}

let averangeTimeChoose = 0;
for( let i = 0; i < 3; i++ ) {
let startTime = Date.now();
sortChoose( arr );
let endTime = Date.now();
averangeTimeChoose += ( endTime - startTime );
}

averangeTimeChoose /= 3;
console.log( averangeTimeChoose );
