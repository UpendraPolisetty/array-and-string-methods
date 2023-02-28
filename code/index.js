//map

// Steps
// Map accepts a callback function in our case we need two arguments array and callback
// The callback function gets access to three things (elm, index, arr)
// call the callback function with each values
// store the return value in a new array for each element
// return the new array


// Implementation


function map ( array, cb ) {
  let final = [];
  for(let index = 0; index < array.length; index++){
    let element = array[index];
    final.push(cb(element, index, array))
  }
  return final;
}

let array = [10, 20, 43, 56, 76, 89, 90];




console.log(map(array, (num, index, array) => {
    return num + index;
  }));


  //forEach

// Steps
// forEach accepts a callback function in our case we need two arguments array and callback
// The callback function gets access to three things (elm, index, arr)
// call the callback function with each values
// it will not return anything 


// Implementation


function forEach ( array, cb ) {
    for(let index = 0; index < array.length; index++){
      let element = array[index];
      cb(element, index, array)
    }
  }

  let array1 = [10, 20, 43, 56, 76, 89, 90];

forEach ( array1, (num, index, array) => {
    console.log(num, index, array);
  }); 


// Filter

// Steps
// filter accepts a callback function in our case we need two arguments array and callback
// The callback function gets access to three things (elm, index, arr)
// call the callback function with each values
// it will check true or false condition and gives filtered new array


// Implementation

function filter (array , cb ){
    let final = []
    for ( i =0 ; i<= array.length ; i++ ){
        if ( cb(array[i]) === true) {
            final.push(array[i])
        }
    }
    return final
}

let array2 = [10, 20, 43, 56, 76, 89, 90];

console.log(filter(array2, (num, index, array) => {
    return num % 2 === 0;
  }));

// Reduce

//Steps 
// reduce function accepets one array , one callback function and one initial value as a parameters
// The callback function gets access to four things (total,initial value , index, arr)
// call the callback function with each values
// it will check  condition and gives  new value


// Implementation

function reduce (array , cb ,initial ){
    let number = initial

    for ( i =0 ; i<= array.length ; i++ ){
        let elm = array[i]
         number =   cb (number , elm) 
    }
    return number
} 

let array3 = [10, 20, 43, 56, 76, 89, 90];

console.log(reduce(array3, (acc, num) => {
  return acc + num;
}, 0));

// find

// Steps
// find accepts one parameter which accepts true or false case and return value of array 
// it will check true or false condition and gives filtered new value

function find (array , cb ){
    

    for ( i =0 ; i<= array.length ; i++ ){
        if ( cb(array[i]) === true) {
            num = array[i]
        }
    }
    return num
}

let array4 = [10, 20, 43, 56, 76, 89, 90];


console.log(find(array4 , (num) => num === 20));

//Practice Reduce Methods ---------------------------------------------------------------------------------


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
  
  // NOTE: Use reduce method whereever you can to solve this exercise:
  
  // Find the average grade
  // let peopleGrade = persons.map(person => person.grade)
  let peopleGrade = persons.reduce((acc, cv) => {
    return acc + cv.grade
  }, 0)
  console.log(peopleGrade / persons.length)
  

  
  // Find the average grade of male
  
  
  let avg_people_grade_male = persons.filter(person => person.sex === "M")
  .reduce((acc, cv) => {
    return acc + cv.grade;
  }, 0) / persons.length
  
  console.log(avg_people_grade_male)
  
  
  // Find the average grade of female
  
  // let people_female_grade = persons.filter(person => person.sex == "F")
  // .map(person => person.grade)
  
  // let avg_people_grade_female = people_female_grade.reduce((acc, cv) => {
  //   return acc + cv
  // }, 0) / people_female_grade.length
  
  let avg_people_grade_female =  persons.filter(person => person.sex === "F")
  .reduce((acc, cv) => {
    return acc + cv.grade;
  }, 0) / persons.length
  
  
  console.log(avg_people_grade_female)
  
  // Find the highest grade
  let highest_grade = persons.map(person => person.grade).sort((a, b) => a - b).pop();
  console.log(highest_grade)
  
  // Find the highest grade in male
  // let highest_grade_male = people_male_grade.sort((a, b) => a - b ).pop();
  // console.log(highest_grade_male)
  
  let highest_grade_male = persons.filter(person => person.sex === "M")
  .map(person => person.grade)
  .sort((a, b) => a - b).pop();
  console.log(highest_grade_male)
  
  // Find the highest grade in female
  // let highest_grade_female = people_female_grade.sort((a, b) => a - b ).pop();
  // console.log(highest_grade_female)
  
  let highest_grade_female = persons.filter(person => person.sex === "F")
  .map(person => person.grade)
  .sort((a, b) => a - b).pop();
  console.log(highest_grade_female)
  
  // Find the highest grade for people whose name starts with 'J' or 'P'
  let name_JP = persons.filter(person =>
   person.name.startsWith('J') || person.name.startsWith('P'))
   .map(person => person.grade)
   .sort((a, b) => a - b).pop();
   console.log(name_JP)
  
  const fruitBasket = [
    'banana',
    'cherry',
    'orange',
    'apple',
    'cherry',
    'orange',
    'apple',
    'banana',
    'cherry',
    'orange',
    'fig',
  ];
  
  /* 
  
  Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
  that fruit has appeared in the array. Store it in new variable fruitsObj
  
  Output: 
  {banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
  */
    let fruitObj = fruitBasket.reduce((acc, cv) => {
      if(acc[cv]){
        acc[cv] += 1
      }else{
        acc[cv] = 1
      }
      return acc;
    }, {})
    console.log(fruitObj)
  /* 
  
  Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
  that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()
  
  Output: 
  
  [['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
  */
  let fruitsArray = Object.keys(fruitObj).reduce((acc, cv) => {
    acc = acc.concat([[cv, fruitObj[cv]]])
    return acc;
  }, [])
  console.log(fruitsArray)
  
  const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];
  
  // Using reduce flat data array
  // let flat_data = data.flat(Infinity)
  
  // let reduce_data = flat_data.reduce((acc, cv) => {
  //   return acc + cv
  // })
  // console.log(reduce_data)
  
  let flat_data = data.reduce((acc, cv) => {
    acc = acc.concat(cv)
    return acc;
  }, [])
  console.log(flat_data)
  
  const dataTwo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11], 12],
  ];
  
  
  // Using reduce flat dataTwo array
  // let flat_dataTwo = dataTwo.flat(Infinity)
  
  // let reduce_dataTwo = flat_dataTwo.reduce((acc, cv) => {
  //   return acc + cv
  // })
  // console.log(reduce_dataTwo)
  let flat_dataTwo = dataTwo.reduce((acc, cv) => {
    acc = acc.concat(cv.flat(Infinity))
    return acc;
  }, [])
  console.log(flat_dataTwo)
  
  
  /*
  
  Create these functions which accepts a number value and returns a number value:
    - `increment` adds one to the input value
    - `double` doubles the input value
    - `decrement` decrement 1 from the value 
    - `triple` triples the input 
    - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
  */
  function increment(num){
    return num + 1
  }
  
  function double(num){
    return num * 2
  }
  function decrement(num){
    return num - 1
  }
  function triple(num){
    return num * 3
  }
  function half(num){
    return Math.round(num / 2)
  }
  
  let pipeline = [
    increment,
    double,
    decrement,
    decrement,
    double,
    triple,
    half,
    increment,
  ];
  
  /*
  Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.
  
  NOTE: Initial value will be passed to first function the output of that function will be the input to next function.
  
  EXAMPLE:
    initialValue - 3
    increment(3) - return 4
    double(4) - return 8
    decrement(8) - return 7
  
    ...
  */
  let pipeline_reduce = pipeline.reduce((acc, cv) => {
    acc = cv(acc);
    return acc;
  }, 3)
  console.log(pipeline_reduce)
  
  
  let pipeline2 = [
    increment,
    half,
    double,
    decrement,
    decrement,
    triple,
    double,
    triple,
    half,
    increment,
    triple,
  ];
  
  // Find the output using pipeline2 the initial value if 8
  let pipeline2_reduce = pipeline2.reduce((acc, cv) => {
    acc = cv(acc)
    return acc;
  }, 8)
  console.log(pipeline2_reduce)




  // People of GOT  data practice --------------------------------------------------------------------------


  // NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
    // your code goes here
    let totalPeople = 0;
    got.houses.forEach(house => {
      totalPeople += house.people.length;
    });
    return totalPeople
  }
  function peopleByHouses() {
    // your code goes here
    let final = {};
    got.houses.forEach(house => {
      final[house.name] = house.people.length;
    })
    return final;
  
  }
  
  function everyone() {
    // your code goes here
    let final = [];
    got.houses.forEach(house => {
      let peopleName = house.people.map(person => person.name)
      final = final.concat(peopleName)
    });
    return final;
  }
  
  function nameWithS() {
    // your code goes here
    let allPeople = everyone();
    return allPeople.filter((person) => 
    person.toLowerCase().includes("s")
    )
  }
  
  function nameWithA() {
    // your code goes here
    // let allPeople = everyone();
    // return allPeople.filter((person) => 
    // person.toLowerCase().includes("a")
    // )
  }
  
  function surnameWithS() {
    // your code goes here
    // let allPeople = everyone();
    // return allPeople.filter((person) => 
    // person.split(" ")[1].toLowerCase().includes("s")
    // )
  }
  
  function surnameWithA() {
    // your code goes here
    // let allPeople = everyone();
    // return allPeople.filter((person) => 
    // person.split(" ")[1].toLowerCase().includes("a")
    // )
  
  }
  
  function peopleNameOfAllHouses() {
    // your code goes here
    // let final = {};
    // got.houses.forEach(house => {
    //   final[house.name] = house.people.map((p) => p.name);
    // });
    // return final;
    let final = {};
    got.houses.forEach(house => {
      final[house.name] = house.people.map((p) => 
        p.name
      )
    })
    return final;
  }
  
  // Testing your result after writing your function
  console.log(countAllPeople());
  // Output should be 33
  
  console.log(peopleByHouses());
  // Output should be
  //{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}
  
  console.log(everyone());
  // Output should be
  //["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]
  
  console.log(nameWithS(), 'with s');
  // Output should be
  // ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]
  
  console.log(nameWithA());
  // Output should be
  // ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]
  
  console.log(surnameWithS(), 'surname with s');
  // Output should be
  // ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]
  
  console.log(surnameWithA());
  // Output should be
  // ["Lysa Arryn", "Jon Arryn"]
  
  console.log(peopleNameOfAllHouses());
  // Output should be
  // {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}










  
  // NOTE: You can only use the (reduce) array method to solve this exercise: -----------------------------------------------------

function countAllPeople() {
    // your code goes here
    return got.houses.reduce((acc, cv) => {
      acc += cv.people.length
      return acc;
    }, 0)
  }
  
  function peopleByHouses() {
    // your code goes here
    // let final = {};
   return  got.houses.reduce((acc, house) => {
      acc[house.name] = house.people.length
      return acc;
    }, {})
  }
  
  function everyone() {
    // your code goes here
   return  got.houses.reduce((acc, house) => {
      acc = acc.concat(house.people.map((n) => n.name))
      return acc;
    }, [])
  }
  
  function nameWithS() {
    // your code goes here
    return got.houses.reduce((acc, house) => {
      acc = acc.concat(house.people.map((p) => p.name)
      .filter((name) => name.toLowerCase().includes("s"))
    )
      return acc;
    }, [])
  }
  
  function nameWithA() {
    // your code goes here
  return  got.houses.reduce((acc, house) => {
      acc = acc.concat(house.people.map((p) => p.name).filter((name => name.toLowerCase().includes("a"))))
      return acc;
    }, [])
  }
  
  function surnameWithS() {
    // your code goes here
   let allPeople = everyone();
  return allPeople.filter((name) => 
   name.split(" ")[1].toLowerCase().includes("s")
   );
  }
  
  function surnameWithA() {
    // your code goes here
    let allPeople = everyone();
    return allPeople.filter((name) => 
     name.split(" ")[1].toLowerCase().includes("a")
     );
  }
  
  function peopleNameOfAllHouses() {
    // your code goes here
    return got.houses.reduce((acc, house) => {
      acc[house.name] = house.people.map((p) => p.name)
      return acc;
    }, {})
  }
  
  // Testing your result after writing your function
  console.log(countAllPeople());
  // Output should be 33
  
  console.log(peopleByHouses());
  // Output should be
  //{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}
  
  console.log(everyone());
  // Output should be
  //["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]
  
  console.log(nameWithS(), 'with s');
  // Output should be
  // ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]
  
  console.log(nameWithA());
  // Output should be
  // ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]
  
  console.log(surnameWithS(), 'surname with s');
  // Output should be
  // ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]
  
  console.log(surnameWithA());
  // Output should be
  // ["Lysa Arryn", "Jon Arryn"]
  
  console.log(peopleNameOfAllHouses());
  // Output should be
  // {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
