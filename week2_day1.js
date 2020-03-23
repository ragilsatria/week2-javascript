// nomor 1 Rumus Hukum Newton 2

var newton = 0;
var massa = 600;
var p = 2;

newton = massa * p
console.log(newton)

/*
VAR newton SET NUMBER VALUE 0 
VAR massa SET VALUE 600
VAR p SET VALUE 2
newton ASSIGN massa MULTIPLY p
DISPLAY newton VALUE
*/
console.log()

// nomor 2 tahun kabisat

var year = 2020

if ((year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 100 == 0 && year % 400 == 0))
    console.log('tahun kabisat')
else
    console.log('bukan tahun kabisat')

/*
VAR year SET NUMBER VALUE 2020 (in this case)
IF (year MOD 4 IS 0 AND year MOD 100 IS NOT 0) OR (year MOD 4 IS 0 AND year MOD 100 IS 0 AND year MOD 400 IS 0)
    DISPLAY 'tahun kabisat'
ELSE
    DISPLAY 'bukan tahun kabisat'

*/
console.log()

//nomor 3 laundry day

var cloth = 20
var cloth_in = 0
var start = 'nyalakan'

for (cloth_in = 0; cloth_in <= cloth; cloth_in++)
    console.log(cloth_in)

console.log(start)

/*
VAR cloth SET NUMBER VALUE 20
VAR cloth_in SET NUMBER VALUE 0

START FOR cloth_in SET NUMBER 0
    IF cloth_in LESS OR EQUAL THAN cloth
    DO cloth_in INCREMENT
     DISPLAY cloth_in 
END FOR     

DISPLAY start
*/
console.log()

//nomor 4 
var siswa = 40
var kukupanjang1 = 4
var kukupanjang2 = 15
var kukupanjang3 = 30
var proses = 1

for (proses = 1; proses <= siswa; proses++){
    if (proses == kukupanjang1 || proses == kukupanjang2 || proses == kukupanjang3) {
        console.log(proses + '. HUKUM')
    }
    else {
        console.log(proses + ' CAKEP!')
    }
}

/*

VAR siswa SET NUMBER VALUE 40
VAR kukpanjang1 SET NUMBER VALUE 4
VAR kukupanjang2 SET NUMBER VALUE 15
VAR kukupanjang3 SET NUMBER VALUE 30
VAR proses SET NUMBER VALUE 1

START FOR proses SET NUMBER 1
    IF proses LESS OR EQUAL THAN siswa
    DO proses INCREMENT{
        IF proses EQUAL TO kukupanjang1 OR proses EQUAL TO kukupanjang2 OR proses EQUAL TO kukupanjang3
            DISPLAY 'HUKUM'
        ELSE
            DISPLAY 'CAKEP!'
        ENDIF
    } 
END FOR
*/