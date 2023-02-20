Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - parameter : It will accepts one parameter
   - Return : It returns join the array of strings into one string.


   ```js
   let arr = ['sohail', 'shaik']
   arr.join() // 'sohail,shaik'
   arr.join('-') // 'sohail-shaik'
   ``` 

   `join` accepts one parameter and it will join the number of strings into one string with the value.


3. `flat`

 - parameter : It will accepts one parameter
   - Return : It returns the new array and make it into sub-array.


   ```js
   let arr = [1, 2, [3, 4, [5, 6]]]
   arr.flat() // [1, 2, Array(3)]
   arr.flat(Infinity) // [1, 2, 3, 4, 5, 6]
   ``` 

   `flat` accepts one parameter and it will separates the nested arrays into one new array. And it will only go through the first nested array init if you give only flat(). If you pass the value 'Infinity' it will splits the whole array separately. 


4. `push`

 - parameter : It will accepts one or more parameters. 
   - Return : It will returns the new array and adds the value to the end of the array.


   ```js
   let arr = ['sohail']
   arr.push('shaik') // ['sohail', 'shaik']
   arr.push('AltCampus', 'FSD') // ['sohail', 'shaik', 'AltCampus', 'FSD']
   ``` 

   `push` accepts one or more parameters and adds the string to the end of the array. And we can add any number of strings as we want.

   
5. `indexOf`

 - parameter : It will accepts one  parameters. 
   - Return : It will finds the index of the particular string or number.


   ```js
   let arr = ['sohail', 'shaik', 'AltCampus']
   arr.indexOf('shaik') // 1
   arr.indexOf('AltCampus') // 2
   arr.indexOf('FSD') // -1
   ``` 

   `indexOf` accepts one parameter and it will finds index of the particular string or number from start. And by default or any string or number which is not present in the array it will return -1.



6. `lastIndexOf`

- parameter : It will accepts one  parameters. 
   - Return : It will finds the index of the particular string or number.


   ```js
   let arr = ['sohail', 'shaik', 'AltCampus']
   arr.lastIndexOf('shaik') // 1
   arr.lastIndexOf('AltCampus') // 0
   arr.lastIndexOf('FSD') // -1
   ``` 

   `lastIndexOf` accepts one parameter and it will finds index of the particular string or number from end. And by default or any string or number which is not present in the array it will return -1.

7. `includes`

- parameter : It will accepts one  parameter. 
   - Return : It will check whether the given value if present in the original value or not and returns the boolean value.


   ```js
   let arr = ['sohail', 'shaik', 'AltCampus']
   arr.includes('shaik') // true
   arr.includes('AltCampus') // true
   arr.includes('FSD') // false
   ``` 

   `inccludes` It will check whether the given value if present in the original value or not and returns the boolean value.



8. `reverse`

- parameter : no parameter. 
   - Return : It will reverse the array values in place.


   ```js
   let arr = [1, 2, 3]
   arr.reverse() // [3, 2, 1]
   let arr_1 = ['shaik', 'sohail']
   arr_1.reverse() // ['sohail', 'shaik']
   ``` 

   `reverse` It will reverse the array values in place. And it will mutates the original array and returns the new array. 


9. `every`

- parameter : no parameter. But it accepts a callback function 
   - Return : It will check the given condition in the callback function is true or not.


   ```js
   let numbers = [1, 2, 3, 4]
   function check(num){
     return num > 0
   }
   console.log(numbers.every(check)) // true
   ``` 

   `every` It will check every value present in the array and returns a boolean value based on that.

10. `shift`

- parameter : no parameter. 
   - Return : It will remove the first element in the array.


   ```js
   let numbers = [1, 2, 3, 4]
   numbers.shift() // [2, 3, 4]
   ``` 

   `shift` It will remove the first element in the array. And it will mutates the original array and returns new array.
    


11. `splice`

- parameter : It accepts two or three parameters. 
   - Return : It will remove the elements in the array and adds new elements in the array.


   ```js
   let arr = ['sohail', 'shaik', 'AltCampus']
   arr.splice(1, 0, 'hai') // ['sohail', 'hai', 'shaik', 'AltCampus'] 
   ``` 

   `splice` It will remove the elements in the array by using two parameters and the element which we want to add and adds new elements in the array.


12. `find`

- parameter : It accepts a callback function. 
   - Return : It will remove the elements in the array and adds new elements in the array.


   ```js
  var array1 = [5, 12, 8, 130, 44];

  let find_arr = array1.find((num) => {
    return num > 100
  })
    // 130
   ``` 

   `find` will finds the element and accepts the callback function to execute and it will check the condition based on a condition given by us.


13. `unshift`

- parameter : accepts one or more parameters. 
   - Return : It will add the new elements to the array at the starting of the array.


   ```js
  var array1 = [5, 12, 8, 130, 44];

  array1.unshift(1, 2, 3) // [1, 2, 3, 5, 12, 8, 130, 44];

   ``` 

   `unshift` will adds the single or multiple elements to the starting of the array. And it is mutable.


14. `findIndex`

- parameter : accepts callback function. 
   - Return : It will finds the index of the element using the callback function.


   ```js
   var array1 = [5, 12, 8, 130, 44];
   array1.findIndex((num) => {
     return num > 10;
   })
   // num > 10 is 12 the index of that element is 1 so output // 1
   ``` 

   `findIndex` It will finds the index of the element using the callback function, Otherwise it will return -1.


15. `filter`

- parameter : accepts callback function. 
   - Return : It will filter the elements based on the condition.


   ```js
   var array1 = [5, 12, 8, 130, 44];
   let evenArray = array1.filter((num) => {
     return num % 2 === 0;
   })
   console.log(evenArray)

   // [12, 8, 130, 44]
   ``` 

   `filter`  It will filter the elements based on the condition. If you can't give any condition it will return undefined.


17. `forEach`
- parameter : accepts callback function. 
   - Return : It will loop through each element present in the array add returns the output.


   ```js
   var array1 = [5, 12, 8, 130, 44];
   let Array = array1.forEach((num) => {
     console.log(Array)
   })

   // 5
   // 12
   // 8
   // 130
   // 44
   ``` 

   `forEach` will accepts a callback function and it will loop through it and it will logs the values. But it is immutable and it always returns undefined.


18. `map`

- parameter : accepts callback function. 
   - Return : It will loop through each element present in the array add returns the output.


   ```js
   var array1 = [5, 12, 8, 130, 44];
   let Array = array1.map((num) => {
     console.log(Array)
   })

   // 5
   // 12
   // 8
   // 130
   // 44
   
   let Array = array1.map((num) => {
     return num * 2
   })
   console.log(Array) // [10, 24, 16, 260, 88]
   
   ``` 

   `map` will accepts a callback function and it will loop through it and it will logs the values. But it is immutable.


19. `pop`

- parameter : no parameter. 
   - Return : It will removes the last element of the array.


   ```js
   var array1 = [5, 12, 8, 130, 44];
   array1.pop(); // [5, 12, 8, 130]
   
   ``` 

   `pop` will accepts a callback function and it will loop through it and it will logs the values. But it is mutable.


20. `reduce`

 - parameter : It accepts two parameters one is accumulater and another one is current value. 
   - Return : It will returns the value .


   ```js
   var array1 = [5, 12, 8, 130, 44];
   let reduced_arr = array1.reduce((acc, num) => {
     return acc + num
   }, 0)
   console.log(reduced_arr) // 199
   ``` 

   `reduce`will accepts the two parameters and it will return the valuss based on the condition.


21. `slice`

- parameter : It accepts two parameters. 
   - Return : It will returns the new array of elements .


   ```js
   var array1 = [5, 12, 8, 130, 44];
   array1.slice(1) // [ 12, 8, 130, 44];
   array1.slice(2) // [ 8, 130, 44];
      array1.slice(1, 3) // [ 12, 8];
   ``` 

   `slice`will accepts the two parameters one is start and one is end and it is  immutable. You can see the above example to understand.



22. `some`


- parameter : It accepts callback function. 
   - Return : It will returns the boolean value based on the condition .


   ```js
   var array1 = [5, 12, 8, 130, 44];
   let some_arr = array1.some((num) => {
     return num % 2 === 0
   })
   console.log(some_arr) // true
   ``` 

`some` will returns the boolean value and it will check the condition is true or not. And it is immutable.