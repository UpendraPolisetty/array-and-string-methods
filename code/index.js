// String Methods :

// 1. charAt() 

//--Parameter: (index) defaults to 0 - (number data type)
//--Return: character at specific index in the string (string data type)
// Example:
let name = 'Arya Stark';
console.log(name.charAt(2)); //"y"
let sentance = 'A quick brown fox jumped over a lazy dog';
console.log(sentance.charAt(4)); // "i"
let houseName = 'Starks';
console.log(houseName.charAt(0)); // "S"
// Def : charAt accepts a index (number data type) and return the character on that index in the string.

// 2. toUpperCase()

//--Return: it will return a new string which represents calling string with Upper Case 
// Example:
let str = 'Arya Stark';
console.log(str.toUpperCase())
let str2 = 'A quick brown fox jumped over a lazy dog';
console.log(str2.toUpperCase());
let str3 = 'Starks';
console.log(str3.toUpperCase());
// Def : toUpperCase() will return the calling string to new string in upper case  

// 3. toLowerCase()

//--Return: it will return a new string which represents calling string with lower Case 
// Example:
let str4 = 'Arya Stark';
console.log(str4.toLowerCase())
let str5 = 'A quick brown fox jumped over a lazy dog';
console.log(str5.toLowerCase());
let str6 = 'Starks';
console.log(str6.toLowerCase());
// Def : toUpperCase() will return the calling string to new string in Lower case

// 4. trim();

//--Return : it will remove spaces at begining and end side
// Example:
let str7 = '   Arya Stark    ';
console.log(str7.trim())
let str8 = 'A quick brown fox jumped over a lazy dog               ';
console.log(str8.trim());
let str9 = '                Starks';
console.log(str9.trim());
//Def : trim() method will remove white spaces of the string begining and end sides

// 5. trimStart();

//--Return : it will return new string with removed white spaces at begining 
// Example:
let str10 = '   Arya Stark    ';
console.log(str10.trimStart())
let str11 = 'A quick brown fox jumped over a lazy dog               ';
console.log(str11.trimStart());
let str12 = '                Starks';
console.log(str12.trimStart());
//Def : trim() method will remove white spaces of the string begining and return new string

// 6. trimEnd();

//--Return : it will return new string with removed white spaces at end 
// Example:
let str13 = '   Arya Stark    ';
console.log(str13.trimEnd())
let str14 = 'A quick brown fox jumped over a lazy dog               ';
console.log(str14.trimEnd());
let str15 = '                Starks';
console.log(str15.trimEnd());
//Def : trim() method will remove white spaces end of string and return new string



7. `concat`

  - parameter : It accepts two or more parameters 
  - Return : It will concatinate the strings or numbers which are given by us.

  ```js
  let name = "sohail"
  name.concat(" ", "shaik") // "sohail shaik'
  name.concat(" ", 12345) // 'sohail 12345'
  name.concat(" ", "shaik", 12345) // "sohail shaik 12345'
  ```
  - `concat` It will concat whatever we want to attach each other as you can see in the above examples.

8. `endsWith`

  - parameter : It accepts one parameter
  - Return : It will returns the 'Boolean' value based on the variable value.

  ```js
  let name = "sohail"
  name.endsWith("l") // true
  name.endsWith("s") // false
  ```
  - `endsWith` It will accepts one parameter and it will returns the boolean value based on the value which we have given.


9. `includes`
  - parameter : It accepts one parameter.
  - Return : It will return the boolean value based on teh variable value checking.

  ```js
  let name = "sohail"
  name.includes("s") // true
  name.includes("k") // false
  ```
  - `includes` It will checks the value which is given by us with the value we are comparing.


10. `indexOf`

  - parameter : It will accepts one parameter.
  - Return : It will returns the index of the particular value in the variable.

  ```js
  let name = "sohail"
  name.indexOf("s") // 0
  name.indexOf("l") // 5
  name.indexOf("k") // -1
  ```
  - `indexOf` It will shows the index of the particular value and if we give non-existed value it will return '-1'.

11. `lastIndexOf`

 - parameter : It will accepts one parameter.
  - Return : It will returns the index of the particular value in the variable.

  ```js
  let name = "sohail"
  name.lastIndexOf("s") // 0
  name.lastIndexOf("l") // 5
  name.lastIndexOf("k") // -1
  ```
  - `lastIndexOf` It will shows the index of the particular value and if we give non-existed value it will return '-1'.


12. `padEnd`

 - parameter : It will accepts two parameter.
  - Return : It will concatinate any value or a string with it only at the end.

  ```js
  let name = "sohail"
  name.padEnd(10 ,".") // "sohail.........."
  name.padEnd(6, "l") // "sohailllllll"
  ```
  - `padEnd`It will concatinate any value or a string with it only at the end. And it also calculate the number of times you want to repeat some symbols as you can see in the above example.

13. `padStart`

- parameter : It will accepts two parameter only in the start.
  - Return : It will concatinate any value or a string with it.

  ```js
  let name = "sohail"
  name.padEnd(10 ,".") // "..........sohail"
  name.padEnd(6, "l") // "llllllsohail"
  ```
  - `padEnd`It will concatinate any value or a string with it only in the start. And it also calculate the number of times you want to repeat some symbols as you can see in the above example.


14. `repeat`

 - parameter : It will accepts one parameter
 - Return : It will return the repeated values number of times.

 ```js
 let name = "sohail"
 name.repeat(4) // "sohailsohailsohailsohail' 
 ```
  - `repeat` It will repeat the any string or number as we want based on the values given.


15. `replace`

 - parameter : It will accepts two parameters
  - Return : It will replace the value we want to replace

  ```js
  let name = "AltCampus"
  name.replace("Campus", "School") // "AltSchool"
  ```


16. `slice`

 - parameter : It  accepts two parameters that is start index and end index of the variable value.
 - Return : It will cuts the portion of the string given by us with values.

 ```js
 let name = "sohail"
 name.slice(0, 5) // "sohai"
 name.slice(1, 3) // "oh"
 name.slice(1) // "ohail"
 ```
 `slice` It will takes two parameters one is starting index and another one is ending index o cut the value from where to where.If you can't give the ending index it will go till the end from start. If you give the indexe's reversely it will show an empy string


17. `split`
  - parameter : It accepts one parameter
  - Return : It will return the splitting value given by us with an 'array' of strings or numbers.

  ```js
  let name = "Sohail Shaik"
  name.split(" ") // ["Sohail", "Shaik"]
  ```
  - `split` It will take one parameter and it will return the strings or numbers separately in the form of array.


18. `substring`

 - parameter : It  accepts two parameters that is start index and end index of the variable value.
 - Return : It will gives the portion of the string given by us with values.

  ```js
  let name = "Sohail Shaik"
  name.substring(0, 5) // 'sohai'
  name.substring(5, 0) // 'sohai'
  ```
 - `substring` It will takes two parameters one is starting index and another one is ending index o cut the value from where to where. If you give the indexe's reversely also it will return the same output.