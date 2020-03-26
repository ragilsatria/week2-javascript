function xo(str) {
    var x = 0;
    var o = 0;
    var z = str.length;
    var temp = '';
    
    while (z > 0){
        temp = str[z-1];
        
        if (temp === 'x'){
            x++;
        }
        else if (temp === 'o'){
            o++;
        }
        z--;
    }

    if (x >= 3 && o >= 3){
        return true;
    }
    else {
        return false;
    }
    
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true