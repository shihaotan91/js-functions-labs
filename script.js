//LONG QUESTION 1

function lengths(arr) {
   var wordLength = []
   var arr = ["hello", "what", "is", "up", "dude"]
   for (var i = 0; i < arr.length; i++) {
   wordLength.push(arr[i].length)
  }
  return wordLength;
}

console.log(lengths());

//LONG QUESTION 2

function transmogrifier(a,b,c) {
     return ((a+b)**c)
}

console.log(transmogrifier(5,4,3))
console.log(transmogrifier(13,12,5))
console.log(transmogrifier(42,13,7))

//LONG QUESTION 3

function wordReverse(x) {
var split = x.split(" ");
var reverseArr = []
for (var i = split.length -1 ; i >= 0 ; i--) {
    var reversing = split[i]
    reverseArr.push(reversing);
     }
   return reverseArr.join(" ");
 }

console.log(wordReverse("hello i am not a girl"))

//SHORT QUESTION 1

function maxOfTwoNumbers(x,y) {

     if (x > y)
     return x;

     else
     return y;

}

console.log(maxOfTwoNumbers(5,10));

//SHORT QUESTION 2

function maxOfThreeNumbers(a,b,c) {
      if (a > b && a > c)
      return a;

      else if (b > a && b > c)
      return b;

      else (c > a && c > b)
      return c;
}

console.log(maxOfThreeNumbers(50,40,20));

//SHORT QUESTION 3

function isCharacterAVowel(x) {
   if (x == "A" || x == "E" || x == "I" || x == "O" || x == "U")
   {return ("True");}

   else if (x.length >= 2)
   {return ("That string is not a letter");}

   else if (typeof x == 'number')
   {return ("That is not a string");}

//    else if ( x !== NaN)
//    {return ("That is not a string");}

   else
   {return ("False");}
}

console.log(isCharacterAVowel("A"))

//SHORT QUESTION 4a

function sumArray(arr) {
  var add = 0;

   for(var i = 0; i < arr.length ; i++){

   add += arr[i];

   }

   return add

}


console.log(sumArray([1,2,3]));

//SHORT QUESTION 4b

function sumArray(arr) {
  var multiply = 1;

   for(var i = 0; i < arr.length ; i++){

   multiply *= arr[i];

   }

   return multiply

}


console.log(sumArray([1,2,3,4]));

//SHORT QUESTION 5

function argueLength(w,x,y,z) {
     return (arguments.length)
}

console.log(argueLength(1,2,3,4));

//SHORT QUESTION 6

function reverseString(str){
        var split = str.split("");
        var resultArr = [] // var resultStr = ''
        for (var x = split.length-1; x > -1; x--) {
          var currLetter = split[x];
          resultArr.push(currLetter);
        }
        return resultArr.join("");
}

console.log(reverseString("abcdef"));

//SHORT QUESTION 7

function findLongestWords(arr) {
    for (var i = 0; i < arr.length; i++) {
       function sortLongestWords() {
         arr.sort();
         return arr[arr.length-1]
   }
      return sortLongestWords();
 }
}

console.log(findLongestWords(["hey","heya","heyaaaaa"]))

//SHORT QUESTION 8

function filterLongWords(arr,x) {

  var longArray=[];
  for(var i = 0; i < arr.length; i++) {
    if (arr[i].length > x){
    longArray.push(arr[i])
    }
  }
  return longArray;
}

console.log(filterLongWords(["123","1","1234"],2));
