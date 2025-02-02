/*
Create a function that takes a Roman numeral as its argument 
and returns its value as a numeric decimal integer. 
You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each 
decimal digit of the number to be encoded separately, 
starting with the leftmost digit and skipping any 0s.

So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) 
and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 
The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
  "MM"      -> 2000
  "MDCLXVI" -> 1666
  "M"       -> 1000
  "CD"      ->  400
  "XC"      ->   90
  "XL"      ->   40
  "I"       ->    1

Help:
  Symbol    Value
  I          1
  V          5
  X          10
  L          50
  C          100
  D          500
  M          1,000
*/


// Solution

function solution(roman) {
	let data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  let numbers = roman.split('');
  let sum = 0, i;

	for(i = 0; i < numbers.length; i++) {
  	if(data[numbers[i]] < data[numbers[i+1]]) {
    	sum += data[numbers[i+1]] - data[numbers[i]];
      i++;
    }
    else {
    	sum += data[numbers[i]];
    }
  }
  
  return sum;
}

// or

const numeralMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function solution(roman){
  const arrNums = roman.split('').map((el) => numeralMap[el]);
  
  return arrNums.reduce((sum, cur, i, a) => {
    if (cur < a[i+1]) return sum - cur;
    return sum + cur;
  }, 0)
}