//KODE FUNCTION
function shoutOut(){
    return 'Halo Function';
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

function calculateMultiply(angka1, angka2){
    return angka1 * angka2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

function processSentence(string1, string2, string3, string4){
    return 'Nama Saya ' + string1 + ', umur saya ' + string2 + ', alamat saya di ' + string3 + 
        ', dan saya punya hobby yaitu ' + string4 + '!';
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"