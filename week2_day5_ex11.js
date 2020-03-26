function balikKata(kata) {
    var temp = kata.length - 1;
    var reverse = '';

    for (i = 0; temp >= i; temp--){        
        reverse += kata[temp];
    }
    
    return reverse;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS