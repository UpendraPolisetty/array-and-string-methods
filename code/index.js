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