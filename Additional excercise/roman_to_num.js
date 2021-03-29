function romanToNumeric(romanNumber) {
    var rez = 0;
    var arr = [['CM', 900],['CD',400],['XC',90],['XL',40],['IX',9],['IV', 4],['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10], ['V', 5], ['I', 1]];
   
    for (var i = 0; i < romanNumber.length; i++) {
      console.log('Vrednost i napocetku', i) 
        for (var j = 0; j < arr.length; j++){ 
            var pom = romanNumber[i] + romanNumber[i+1];
          // console.log('Pomocna je',pom)
            if (pom === arr[j][0]){
               //console.log('Vrednost pom', pom === arr[j][0])
                rez += arr[j][1];
                i++;
                //console.log('Sta je u prvom rezultatu', rez);
                console.log('vrednost i u prvom if je:', i)
                break;
                
            }else if (romanNumber[i] === arr[j][0])  {
              // console.log('Vrednost else if', romanNumber[i] === arr[j][0])
                rez += arr[j][1];
               // console.log('Sta je u drugom rezultatu', rez);
            }
            console.log('Vrednost i posle if', i)
                
        }
    }
    return rez;
}
console.log('Decimal number of roman number is', romanToNumeric('MCMXCII'));

//[['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10], ['V', 5], ['I', 1], ['CM', 900], ['XC', 90], ['IV', 4], ['IX', 9], ['XL', 40], ['CD', 400]];

//[['CM', 900],['CD',400],['XC',90],['XL',40],['IX',4],['IV', 4],['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10], ['V', 5], ['I', 1]]