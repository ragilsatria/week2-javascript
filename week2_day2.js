var nama = 'Zozo'
var peran = 'Assassin'

//Availavle role: Warrior, Mage, and Assassin

if (!nama && !peran){
    console.log('Input nama dan role!')
} else if (nama && !peran) {
    console.log('Halo ' + nama + '!' + ' Pilih role sebelum bermain!')
} else if (!nama && peran) {
    console.log('Masukan nama terlebih dahulu!!')
} else if (nama && (peran === 'Warrior' || peran === 'Mage' || peran === 'Assassin'))  {
    if (peran === 'Warrior'){
        console.log('Selamat datang di Obibion!')
        console.log('Ayo ' + nama + '! pedang sakti mu siap untuk bertempur!' )
    }

    if (peran === 'Mage'){
        console.log('Selamat datang di Obibion!')
        console.log('Ayo ' + nama + '! support teman mu dengan mantra mu yang overpower!' )
    }

    if (peran === 'Assassin'){
        console.log('Selamat datang di Obibion!')
        console.log('Ayo ' + nama + ', jadilah tidak terlihat dan serang mereka dari belakang!' )
    }

} else{
    console.log('Sayang sekali ' + nama + ' role mu tidak tersedia.')
    console.log('Role yang tersedia Warrior, Mage dan Assassin.')
}





