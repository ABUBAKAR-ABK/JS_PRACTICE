// Qs1 : Square and sum the array elements using the arrow function aand then find the 
//  average of the array. 

   let nums = [ 1 , 2 , 3 , 4 , 5];
   const Square = nums.map((nums) => num * num ) ;
   console.log(square);

   let sum = square.reduce((acc , cur) => acc + cur , 0);

   let avg = sum / nums.length;
   console.log(avg)


// Qs2 : Create a new array using the map function whose each element is equal to the original 
//    element plus 5

    let numbers = [ 2 , 3 , 4 , -3 , -4];
    console.log(numbers.map((string) => numbers + 5))

// Qs3 : Create a new array whose elements are in uppercase of words present in the original array 
    let strings = ["adam" , "bob" , "something" , "2something" , "3something"];
    console.log(string.map((string) => string.toUppercase()));

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled

   const doubleAndReturnArgs = ( arr , ...args) => [ 
    ...arr , 
    ...args.map((v) => + 2),
   ];
   doubleAndReturnArgs ( [ 1 , 2 , 3] , 4 , 5);
   doubleAndReturnArgs ( [2] , 10 , 4);

// Qs5. Write a function caled mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.
   const mergeObjects = ( obj1 , obj2) => ({ ...obj1 , ...obj2 });
   mergeObjects ({a: 1 , b: 2 } , { c : 3 , d : 4}) ;

   