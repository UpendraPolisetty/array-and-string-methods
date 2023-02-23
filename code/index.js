// After knowing about string methods, practice those by solving problems given below.

let from = 'Syrio Forel';
let quote = 'There is only one thing we say to death: Not today';
let to = 'Arya Stark';

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
let indexOfIs = quote.indexOf("is");
console.log(indexOfIs)

/*
2. Find the character at the index indexOfIs (Problem 1) in quote.
*/
quote.charAt(indexOfIs);

/*
3. Log the message saying `The index of first is in quote is 7`
*/
console.log(`The index of first is in quote is ${quote.charAt(indexOfIs)}`)

/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/
for(let i = 0 ; i < 6 ; i++){
  console.log(` The character at index ${i} is ${quote[i]}`)
}

/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/

let final = from.concat(" ","said"," ", quote, "to"," ", to);
console.log(final)

/*
6. Does from, to and quote ends with "rk". Check all three.
*/
console.log(from.endsWith('rk'))
console.log(quote.endsWith('rk'));
console.log(to.endsWith('rk'));

/*
7. Does quote includes the word "Only"
*/
console.log(quote.includes('Only'))

/*
8. Does quote includes the word " we"
*/
console.log(quote.includes('we'))


/*
9. Find the index of the the word `we` in quote
*/
quote.indexOf("we")

/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
let quoteSplitted = quote.split(" ");
console.log(quoteSplitted)

/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/
let index = quoteSplitted.indexOf('today')
console.log(index);
quoteSplitted[index] = "tomorrow"
console.log(quoteSplitted);
console.log(quoteSplitted.join(" "));
/*
12. Find the index of second "o" in quote. Use indexOf
*/
quote.indexOf('o', '8');

/*
13. Find the last index of letter "a" in quote.
*/
let lastIndexOfA = quote.lastIndexOf('a')

/*
14. Find the second last index of letter "a" in quote.
*/
quote.lastIndexOf('a', lastIndexOfA - 1)



/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/
let length = quote.length
for ( i = length ; i <70 ; i++) {
    quote += "."
}
console.log(quote);

/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/
// new_variable.padStart('15', '.' )
let newQuote =  ".".repeat(70 - length) + quote
console.log(newQuote);


/*
17. Log the repeat of "Hello World!" 10 times.
*/
console.log('Hello World!'.repeat(10))

/*
18. Replace today to tomorrow in quote.
*/
quote.replace('today', 'tommorow')

/*
19. Replace Stark to Lannister in quoteTo
*/
to.replace('Stark', 'Lannister')


/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
quote.slice(0, 30, '.')
let limit = quote.slice(0, 30) + "..."

/*
21. Find out does quote, from, to starts with "A"
*/
console.log(quote.startsWith("A"))
console.log(from.startsWith("A"))
console.log(to.startsWith("A"))




//---------------------------------------------

// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101)

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9)

// - Convert value of strings array into a sentance like "This is a collection of words"
// let emptyString = ""
// for(let i = 0 ; i < strings.length ; i++){
//   let str = strings[i]
//   emptyString += str + " "
// }
// console.log(emptyString)
strings.join(" ")

// - Add two new words in the strings array "called" and "sentance"
console.log([...strings].push('called ', 'sentence'))

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
// let emptyString = ""
// for(let i = 0 ; i < strings.length ; i++){
//   let str = strings[i]
//   emptyString += str + " "
// }
// console.log(emptyString)
strings.join(" ")


// - Remove the first word in the array (strings)
strings.shift();

// - Find all the words that contain 'is' use string method 'includes'
let allIs = strings.filter(char => char.includes('is'))

// - Find all the words that contain 'is' use string method 'indexOf'
let allIsAgain = strings.filter(char => char.indexOf('is') !== -1)

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(num => num % 3 === 0)

// -  Sort Array from smallest to largest

let largest_num = [...numbers].sort((a, b) => a - b);
console.log(largest_num)


// - Remove the last word in strings
let last_Word = [...strings].pop();

// - Find largest number in numbers
let largest = [...numbers].sort((a, b) => b - a).pop();

// - Find longest string in strings
let largest_string = [...strings].sort((a, b) => a.length - b.length).pop();
console.log(largest_string)

// - Find all the even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers)

// - Find all the odd numbers
let oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers)

// - Place a new word at the start of the array use (unshift)
strings.unshift('newWord')

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));

// - Make a subset of strings array ['a','collection']
strings.slice(4, 5);

// - Replace 12 & 18 with 1221 and 1881
// numbers.splice(numbers.indexOf(12), 1, 1221);
console.log(numbers.map(num => {
  if(num === 12){
    return 1221;
  }else if (num === 18){
    return 1881;
  }else{
    return num;
  }
}));
// - Replace words in strings array with the length of the word
let string_length = strings.map(string => string.length)

// - Find the sum of the length of words using above question
string_length.reduce((acc, init) => {
  return acc + init
}, 0);

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let start_j = customers.filter(customer =>
   customer.firstname.startsWith("J"))
console.log(start_j)

// - Create new array with only first name
console.log(customers.map(char => char.firstname));

// - Create new array with all the full names (ex: "Joe Blogs")

let fullNameCustomer = customers.map(customer => 
    `${customer.firstname} ${customer.lastname}`
)
console.log(fullNameCustomer)
// - Sort the array created above alphabetically
let sorted_arr = [...fullNameCustomer].sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel_customer = customers.filter(customer => {
  if(
  customer.firstname.toLowerCase().includes('a')||
  customer.firstname.toLowerCase().includes('e') ||
  customer.firstname.toLowerCase().includes('i') ||
  customer.firstname.toLowerCase().includes('o') ||
  customer.firstname.toLowerCase().includes('u')
  ){
    return true
  }else{
    return false
  }
})
console.log(vowel_customer)
