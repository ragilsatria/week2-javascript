//nomor 1
var i = 0;
console.log('Looping Pertama')
while (i < 20){
    i += 2;
    console.log(i + ' - I love coding');
}

console.log('Looping Kedua')
while (i > 0){
    console.log(i + ' - I will become fullstack developer');
    i -= 2;
}

console.log('\n');

//nomor2
console.log('Looping Pertama')
for (i = 1; i <= 20; i++) {
    console.log(i + ' I love coding');
}

console.log('Looping Kedua')
for (i = 20; i > 0; i--){
    console.log(i + ' I will become fullstack developer');
}
console.log();

//nomor3
console.log('ganjil genap')
for (i = 0; i <= 100; i++){
    if (i % 2 == 0){
        console.log(`${i} adalah genap`);
    }else {
        console.log(`${i} adalah ganjil`);
    }
}

console.log('kelipatan 3')
for (i = 1; i <= 100; i++){
    if (i % 3 == 0){
        console.log(i + " kelipatan 3");
    }else {
        console.log(i);
    }   
}

console.log('kelipatan 6')
for (i = 1; i <= 100; i++){
    if (i % 6 == 0){
        console.log(i + " kelipatan 6");
    }else {
        console.log(i);
    }   
}

console.log('kelipatan 10')
for (i = 1; i <= 100; i++){
    if (i % 10 == 0){
        console.log(i + " kelipatan 10");
    }else {
        console.log(i);
    }   
}




