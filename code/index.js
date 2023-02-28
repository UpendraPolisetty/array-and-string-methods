let words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot',
    'rhythm',
  ];
  
  // - Write a function findLongestWord that takes an array of words and returns the longest word from the array.
  // (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
  // let longest = [...words].sort((a, b) => a.length - b.length).pop();
  // function findLongestWord(arr){
  //   return arr
  // }
  // findLongestWord(longest)
  
  let longestWord =  [...words].sort((a,b) => b.length-a.length)
  console.log(longestWord.shift());
  
  
  // - Convert the above array "words" into an array of length of word instead of word.
 
  let  wordLengths =[...words].map(word => {
    return word.length
  });
  console.log(wordLengths);
  // - Create a new array that only contains word with atleast one vowel.

  let vowelWords = [...words].filter(word => {
    if (word.toLowerCase().includes('a') ||
    word.toLowerCase().includes('e') ||
    word.toLowerCase().includes('i') ||
    word.toLowerCase().includes('o') ||
    word.toLowerCase().includes('u') ){
        return true
    }else {
        return false
    }
  })
  console.log(vowelWords);
  
  // - Find the index of the word "rhythm"

   console.log(words.indexOf('rhythm'))
 
  
  // - Create a new array that contians words not starting with vowel.

  let startVowel = [...words].filter(word=>{
    if(word.toLowerCase().startsWith('a')||
    word.toLowerCase().startsWith('e')||
    word.toLowerCase().startsWith('i')||
    word.toLowerCase().startsWith('o')||
    word.toLowerCase().startsWith('u')){
        return false
    }else{
        return true
    }
  })
  console.log(startVowel);
  // - Create a new array that contianse words not ending with vowel
  let endVowel = [...words].filter(word=>{
    if(word.toLowerCase().endsWith('a')||
    word.toLowerCase().endsWith('e')||
    word.toLowerCase().endsWith('i')||
    word.toLowerCase().endsWith('o')||
    word.toLowerCase().endsWith('u')){
        return false
    }else{
        return true
    }
  })
  console.log(endVowel);
  
  // - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
 
  let numbers = [1,4,8,5,33,5,9,37,99];
  let sumOfNumbers=[...numbers].reduce((acc,num)=>{
    return acc += num
  },0)
  console.log(sumOfNumbers);
  // - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
    let mulByThree = numbers.map(num => num*3)
    console.log(mulByThree);
  
  // - Create a new array that contains only even numbers
  let evenNumbers = numbers.filter(num =>{
   if ( num % 2 == 0){
    return num
   }
  })
  console.log(evenNumbers);
  
  // - Create  a new array that contains only odd numbers.
  let oddNumbers = numbers.filter(num =>{
    if ( num % 2 !== 0){
     return num
    }
   })
   console.log(oddNumbers);
  
  // - Create a new array that should have true for even number and false for odd numbers.
  let evenORodd = numbers.map(num =>{
    if ( num % 2 == 0){
     return true
    }else {
        return false
    }
   })
   console.log(evenORodd);
  
  // - Sort the above number in assending order.
 
  console.log(numbers.sort((a,b)=>a-b));
  // - Does sort mutate the original array?
  
  // ```js
  // Yes 'sort();' method mutates the array 
  // ```
  // - Find the sum of the numbers in the array.
  
  let sumOFNumbers = [...numbers].reduce((acc,num)=>{
    return acc += num
  },0)
  console.log(sumOFNumbers);
 
  
  //- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
  
 
  function averageNumbers (num){
    let average  = num/numbers.length
    return average
  }
 console.log( averageNumbers(sumOFNumbers) )
  
  
  
  let strings = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace',
  ];
  
  // - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
  
 let sumOFStrings = strings.reduce((acc,str)=> {
    return acc += str.length
 },0)
 function averageWordLength (sum) {
    return sum/strings.length
 }
 console.log(averageWordLength(sumOFStrings));
  

// =======================================================================================================================================

 let persons = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' },
    { name: 'John', grade: 17, sex: 'M' },
    { name: 'Arya', grade: 14, sex: 'F' },
  ];
  
  // Create an array peopleName and store value of sex key from persons array
  
  let peopleName = persons.map( data => {
    return  data.name
   });
  console.log(peopleName);
  
  // Create an array peopleGrade and store the value of grade key from persons array
  let peopleGrade = persons.map( data => {
    return  data.grade
   });
  console.log(peopleGrade);

  
  // Create an array peopleSex and store the value of sex key from persons array
  let peopleSex = persons.map( data => {
    return  data.sex
   });
  console.log(peopleSex);
  
  // Log the filtered named of people in peopleName that starts with 'J' or 'P'
 
  
  let nameWithJorP = peopleName.filter(name =>{
    if(name.startsWith('J') || name.startsWith('P')){
      return name
    }
  })
  console.log(nameWithJorP);
  // Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
  let nameWithAandC = peopleName.filter(name =>{
    if(name.startsWith('A') && name.startsWith('C')){
      return name
    }
  })
  console.log(nameWithAandC);
  
  // Log all the filtered male ('M') in persons array

  let maleData = persons.filter(data =>{
    if(data.sex === 'M'){
      return data
    }
  })
  console.log(maleData);
  
  // Log all the filtered female ('F') in persons array

  let femaleData = persons.filter(data =>{
    if(data.sex === 'F'){
      return data
    }
  })
  console.log(femaleData);
  
  // Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

  let femalesWithCorJ = femaleData.filter(name =>{
     if (name.name.startsWith('C')||name.name.startsWith('J')){
      return name.name
     }
  })
 console.log(femalesWithCorJ);
  
  // Log all the even numbers from peopleGrade array

  let evenGrade = peopleGrade.filter(grade => {
    return grade % 2 == 0
  })
  console.log(evenGrade);

  // Find the first name that starts with 'J' in persons array and log the object
   let nameWithJ = persons.find(name =>{
     if (name.name.startsWith('J')){
      return name.name
     }
  })
 console.log(nameWithJ);

  
  // Find the first name that starts with 'P' in persons array and log the object
  let nameWithP = persons.find(name =>{
    if (name.name.startsWith('P')){
     return name.name
    }
 })
console.log(nameWithP);

  
  // Find the first name that starts with 'J', grade is greater than 10 and is a female
  let nameWithGrade10 = persons.find(name =>{
    if (name.name.startsWith('J') && name.grade>10){
     return name.name
    }
 })
console.log(nameWithGrade10);
  
  // Filter all the female from persons array and store in femalePersons array

  let femalePersons = persons.filter(data =>{
    if(data.sex === 'F'){
      return data
    }
  })
  console.log(femalePersons);
  
  // Filter all the male from persons array and store in malePersons array
  let malePersons = persons.filter(data =>{
    if(data.sex === 'M'){
      return data
    }
  })
  console.log(malePersons);
  
  // Find the sum of all grades and store in gradeTotal
  let gradeTotal = persons.reduce((acc,grade)=>{
    return acc += grade.grade
  },0);
  console.log(gradeTotal);
  
  // Find the average grade

  let averageOfGrade = gradeTotal/persons.length
  console.log(averageOfGrade);
  
  // Find the average grade of male

  let sumOfMaleGrades = maleData.reduce((acc,grade) => {
    
    return acc += grade.grade;
  },0)
 let averageGradeMale = sumOfMaleGrades/maleData.length
 console.log(averageGradeMale);
  // Find the average grade of female
  let sumOfFemaleGrades = femaleData.reduce((acc,grade) => {
    
    return acc += grade.grade;
  },0)
 let averageGradeFemale = sumOfFemaleGrades/femaleData.length
 console.log(averageGradeFemale);
  
  // Find the highest grade
  
  let highestGrade = [...peopleGrade].sort((a,b)=>a-b).pop()
  console.log(highestGrade);

  // Find the highest grade in male
 let highestGradeInMale = maleData.map(grade => grade.grade).sort((a,b) => a-b).pop()
 console.log(highestGradeInMale);
  
  // Find the highest grade in female

  let highestGradeInFemale = femaleData.map(grade => grade.grade).sort((a,b) => a-b).pop()
  console.log(highestGradeInFemale);
  
  // Find the highest grade for people whose name starts with 'J' or 'P'
 
  let highestGradeOfnameWithJorP =persons.filter(name =>{
    if(name.name.startsWith('J') || name.name.startsWith('P')){
      return name.grade
    }
  }).sort((a,b) => a-b).pop()
  console.log(highestGradeOfnameWithJorP);
  
  // Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log([...peopleGrade].sort((a,b)=>a-b));
  
  // Sort the peopleGrade in descending order

  console.log([...peopleGrade].sort((a,b)=>b-a));
  // Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
  console.log([...peopleGrade].sort((a,b)=>a-b));
  // Sort the array peopelName in ascending `ABCD..Za....z`

  console.log([...peopleName].sort());
  // Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

 console.log([...peopleName].sort());



 //-------------------------------------------------------------------------------------------------------


 //Write a function to check whether input value is a string or not.return 

 function isString (data) {
  if (typeof(data) == "string"){
    return true
  }else {
    return false 
  }
 }

 // Test
console.log(isString('tony stark')); // true;
console.log(isString([1, 2, 4, 0])); // false;

//Write a function to check whether a string is blank or not.


function isBlank (data) {
  if (data == ""){
    return true
  }else {
    return false 
  }
 }
 // Test
console.log(isBlank('')); // true;
console.log(isBlank('abc')); // false;

//Write a function to split a string and convert it into an array of words.

function stringToArray (data) {
  return data.split(" ");
}

// Test
console.log(stringToArray('Hello World')); // ["Hello", "World"];
console.log(stringToArray('Lady Bird')); // ["Lady", "Bird"];

//Write a function to return specified number of characters from a string.

function truncate (data,num){
  return data.slice(0,num)
}

// Test
console.log(truncate('John Snow', 4)); // "John";

//Write a function to convert a string name in abbreviated form

function abbrevName(str){
  let data = str.split(" ")
  let abb = data[1].slice(0,1)
  
  return `${data[0]} ${abb}.`
  }
  
// Test
console.log(abbrevName('Robin Singh')); //"Robin S."
console.log(abbrevName('John Snow')); //"John S."

//Write a function to hide email addresses to protect from unauthorized user.

function protect1 (data) {
  let splitData = data.split("@")
   let spliceData = splitData[0].slice(0,4)
  return `${spliceData.padEnd(7,'.')}@${splitData[1]}`
  
}

// Test
console.log(protect1('johnS@example.com')); // "john...@example.com"
console.log(protect1('arya_stark@example.com')); // "arya...@example.com"

//Write a function to hide email addresses to protect from unauthorized user. The number of dots should be same as length of left characters.

function protect2 (data) {
  let splitData = data.split("@")
   let spliceData = splitData[0].slice(0,4)
  return `${spliceData.padEnd(splitData[0].length,'.')}@${splitData[1]}`
  
}
// Test
console.log(protect2('johnS@example.com')); // "john.@example.com"
console.log(protect2('arya_stark@example.com')); // "arya......@example.com"

//Write a function to parameterize a string.

function parameterize( str){
  return str.replaceAll(" ","-")
}

// Test
console.log(parameterize('John Snow from Winterfell')); // "john-snow-from-winterfell"
console.log(parameterize('Arya Stark from Winterfell')); // "arya-stark-from-winterfell"

// Write a function to capitalize the first letter of a string

function capitalizeFirst(str){
  return str.replace(str.charAt(0),str.charAt(0).toUpperCase())
}
// Test
console.log(capitalizeFirst('we are learning')); // "We are learning"
console.log(capitalizeFirst('learning Javascript')); // "Learning Javascript"

//Write a function to capitalize the first letter of each word in a string.

function capitalizeWords(str){
  let charAT = str.indexOf(' ')
  return str.replace(str.charAt(0),str.charAt(0).toUpperCase()) 
}

// Test
console.log(capitalizeWords('we are learning')); // "We Are Learning"
console.log(capitalizeWords('learning javascript')); // "Learnign Javascript"

//Write a function that takes a string which has lower and upper case letters as a parameter and 
//converts upper case letters to lower case, and lower case letters to upper case.

// function swapcase(str){
//   let newArray = str.split('')
//   let newString = "" ;
//   for ( i=0 ; i<newArray.length ;i++){
//     console.log(newArray);
//     if(newArray[i] === newArray[i].toUpperCase()){
//         newString += newArray[i].toLowerCase()
//     } else if (newArray[i] === newArray[i].toLowerCase()){
//       newString += newArray[i].toUpperCase()
//     }
//   }
//   return newString
// }


function swapCase (str) {
  let newArray = str.split('');
  let arr = newArray.map(letter => {
    if (letter === '[A-Z]'){
       return letter.toLowerCase();
    } else if (letter === '[a-z]'){
      return letter.toUpperCase();
    }else{
      return letter
    }
  })
  return arr.join('')
}
  
// Tets
console.log(swapCase('AaBbc')); // "aAbBC"
console.log(swapCase('abcDef')); // "ABCdEF"

//Write a function to convert a string into camel case.

function camelize(str){
  let newArr = str.split(' ')
  let newStr = str.replace(newArr[1].charAt(0),newArr[1].charAt(0).toUpperCase() )
  return newStr.replace(/\s/g, '')
}

// Test
console.log(camelize('hello world')); // "helloWorld"
console.log(camelize('main exercise')); // "mainExercise"

// Write a function to uncamelize a string (output should be all in lowercase)------------------


function uncamelize ( str , sym) {
  let newArr = str.split("")
  let num = 0
  for ( i=0 ; i<= newArr.length ; i++) {
    if (newArr[i] === '[A-Z]'){
       num = newArr[i].length
    }
    
  }
}
//TEST
console.log(uncamelize('helloWorld', '_')); // "hello_world"
console.log(uncamelize('learningJavascript', '_')); // "learning_javascript"
console.log(uncamelize('learningJavaScriptAgain', '_')); // "learning_java_script_again"

//Write a function to concatenates a given string n times (default is 1).

function repeat(str , num=1){
  return str.repeat(num)
}

// Test
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"
console.log(repeat('Ha!')); // "Ha"

//Write a function to truncates a string if it is longer than the specified number of characters.-------------------------
// Truncated strings will end with ("…") (by default) or specified characters.

function textTruncate(str1 ,num,str2){
  let newArr = str1.split('');
  let newStr ="";
  for ( i=0 ; i<=num ; i++) {
    newStr += newArr[i]
  }
  if (Boolean(str2) === true){
    return newStr.concat(str2)
  } else {
    return newStr+"..."
  }
}

// Test
console.log(textTruncate('We are doing JS string exercises.', 15, '!!')); //"We are doing !!"
console.log(textTruncate('We are doing JS string exercises.', 15)); //"We are doing ..."

//Write a function to chop a string into chunks of a given length.

function stringChop (str ,num=1){
  let newArr = [];

  for ( i=0 ; i<= str.length ; i += num){
      newArr.push(str.slice(i,i+num))
  }
 return newArr
}


// Test
console.log(stringChop('hello world', 2)); // ["he", "ll", "o ", "wo", "rl", "d"]
console.log(stringChop('hello')); // ["h", "e", "l", "l", "o"]

// Write a function to count the occurrence of a substring (case doesn't matter) in a string.

function count ( str1,str2){
  let newArr = str1.toLowerCase().split(" ")
  return newArr.reduce((acc,current)=>{
    if (!acc[str2]){
      acc[str2] = 0;
    } 
    if (current === str2) {
      acc[str2]++
    }
    return acc
  },0)
}

console.log(count('The quick brown fox jumps over the lazy dog', 'the')); // 2
console.log(count('hello again hello', 'hello')); // 2
console.log(count('hello', 'one')); // 0