//nomor 1
console.log('nomor 1');
var rows1 = 5;

for (i = 0; i < rows1; i++){
    var star = '*';
    console.log(star);
}
console.log();

//nomor 2
console.log('nomor 2');
var rows2 = 5;

for (i = 0; i < rows2; i++){
    temp = 0;
    var star2 = '';

    while (temp < rows2){
        star2 += '*';
        temp++;
    }
    console.log(star2);
}
console.log();

//nomor 3   
console.log('nomor 3');
var rows3 = 5;

for (x = 0; x < rows3; x++){
    var star3 = '';

    for (y = 0; y <= x; y++){
        star3 += '*';
    }

    console.log(star3);
}


