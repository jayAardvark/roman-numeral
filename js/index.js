function convertToRoman(num) {
   let numStr = num.toString();
    let arrNum = num;
    let arrStr = numStr;
    let finalArr = [3,4,5,6];
    let roman = "";
    console.log(roman)
    


    if (arrStr.length === 1){
        let ones = parseInt(arrStr[0]);
        console.log(ones +" der")
        if (ones === 1){
            roman += "I"
        }else if (ones === 2){
            roman += "II"
        }else if (ones === 3){
            roman += "III"
        }else if (ones === 4){
            roman += "IV"
        }else if (ones === 5){
            roman += "V"
        }else if (ones === 6){
            roman += "VI"
        }else if (ones === 7){
            roman += "VII"
        }else if (ones === 8){
            roman += "VIII"
        }else if (ones === 9){
            roman += "IX"
        }
    }

    if (arrStr.length === 2){
        let tens = parseInt(arrStr[0]);
        let ones = parseInt(arrStr[1]);
        console.log(tens)
        if (tens === 1){
            roman += "X"
        }else if (tens === 2){
            roman += "XX"
        }else if (tens === 3){
            roman += "XXX"
        }else if (tens === 4){
            roman += "XL"
        }else if (tens === 5){
            roman += "L"
        }else if (tens === 6){
            roman += "LX"
        }else if (tens === 7){
            roman += "LXX"
        }else if (tens === 8){
            roman += "LXXX"
        }else if (tens === 9){
            roman += "XC"
        }
        if (ones === 1){
            roman += "I"
        }else if (ones === 2){
            roman += "II"
        }else if (ones === 3){
            roman += "III"
        }else if (ones === 4){
            roman += "IV"
        }else if (ones === 5){
            roman += "V"
        }else if (ones === 6){
            roman += "VI"
        }else if (ones === 7){
            roman += "VII"
        }else if (ones === 8){
            roman += "VIII"
        }else if (ones === 9){
            roman += "IX"
        }
        
    }

    if (arrStr.length == 3){
        let hundreds = parseInt(arrStr[0]);
        let tens = parseInt(arrStr[1]);
        let ones = parseInt(arrStr[2]);

        if (hundreds === 1){
            roman += "C"
        }else if (hundreds === 2){
            roman += "CC"
        }else if (hundreds === 3){
            roman += "CCC"
        }else if (hundreds === 4){
            roman += "CD"
        }else if (hundreds === 5){
            roman += "D"
        }else if (hundreds === 6){
            roman += "DC"
        }else if (hundreds === 7){
            roman += "DCC"
        }else if (hundreds === 8){
            roman += "DCCC"
        }else if (hundreds === 9){
            roman += "CM"
        }

        if (tens === 1){
            roman += "X"
        }else if (tens === 2){
            roman += "XX"
        }else if (tens === 3){
            roman += "XXX"
        }else if (tens === 4){
            roman += "XL"
        }else if (tens === 5){
            roman += "L"
        }else if (tens === 6){
            roman += "LX"
        }else if (tens === 7){
            roman += "LXX"
        }else if (tens === 8){
            roman += "LXXX"
        }else if (tens === 9){
            roman += "XC"
        }
        if (ones === 1){
            roman += "I"
        }else if (ones === 2){
            roman += "II"
        }else if (ones === 3){
            roman += "III"
        }else if (ones === 4){
            roman += "IV"
        }else if (ones === 5){
            roman += "V"
        }else if (ones === 6){
            roman += "VI"
        }else if (ones === 7){
            roman += "VII"
        }else if (ones === 8){
            roman += "VIII"
        }else if (ones === 9){
            roman += "IX"
        }
    }

    if (arrStr.length === 4){
            let thousands = parseInt(arrStr[0]);
            let hundreds = parseInt(arrStr[1]);
            let tens = parseInt(arrStr[2]);
            let ones = parseInt (arrStr[3]);

            if (thousands === 1){
                roman += "M";
            }else if (thousands === 2){
                roman += "MM"
            }else if (thousands === 3){
                roman += "MMM"
            }

            if (hundreds === 1){
            roman += "C"
        }else if (hundreds === 2){
            roman += "CC"
        }else if (hundreds === 3){
            roman += "CCC"
        }else if (hundreds === 4){
            roman += "CD"
        }else if (hundreds === 5){
            roman += "D"
        }else if (hundreds === 6){
            roman += "DC"
        }else if (hundreds === 7){
            roman += "DCC"
        }else if (hundreds === 8){
            roman += "DCCC"
        }else if (hundreds === 9){
            roman += "CM"
        }

        if (tens === 1){
            roman += "X"
        }else if (tens === 2){
            roman += "XX"
        }else if (tens === 3){
            roman += "XXX"
        }else if (tens === 4){
            roman += "XL"
        }else if (tens === 5){
            roman += "L"
        }else if (tens === 6){
            roman += "LX"
        }else if (tens === 7){
            roman += "LXX"
        }else if (tens === 8){
            roman += "LXXX"
        }else if (tens === 9){
            roman += "XC"
        }
        if (ones === 1){
            roman += "I"
        }else if (ones === 2){
            roman += "II"
        }else if (ones === 3){
            roman += "III"
        }else if (ones === 4){
            roman += "IV"
        }else if (ones === 5){
            roman += "V"
        }else if (ones === 6){
            roman += "VI"
        }else if (ones === 7){
            roman += "VII"
        }else if (ones === 8){
            roman += "VIII"
        }else if (ones === 9){
            roman += "IX"
        }
    }
        
        
    
    console.log(roman)
 return roman;
}

convertToRoman(222);
/*
Creative freewrite to generate ideas on how to solve:
    This challenge seems very challenging but I have a route that seems worth trying.  Try to think in terms of ones-places, tens-places, hundreds-places, thousands-places, etc.  That is, maybe a system can be devised that breaks the "num" up into chunks that the program considers separately.  So, for example, the program might check to see if the "num" is at least 1,000.  If this is the case, the program might check to see how many times 1,000 fits into the thousands-place of the number.  This figure is then stored into an array that will serve as an accumulator.  What is accumulated in this array are the results for the hundreds-place, tens-place, and ones-place when a similar procedure is ran on these -places as was ran for the thousands-place as mentioned above.

Things to Try:
1. convert number to string. copy this number to array.
2. determine the "range" of the number by determining the array length. for example, if the number is in the thousands, then the array length will be 4.  
3. create different conditionals for if the number is in the thousands, hundreds, tens, and ones. for example, if the number is determined to be in the thousands, divide the value @ arr[0] by 1,000--this value will then be stored in a new comulative array. 
4. Repeat the previous step for the length of the array.
5. return the resultant array.
6. Consider that step 3 might be too lengthy.  If this is the case, try to create stand alone functions that can be called upon.

****** Note that wherever there was mentioned a cumulative array, disregard that!  Rather, use a variable that accumulates translated strings.
*/
