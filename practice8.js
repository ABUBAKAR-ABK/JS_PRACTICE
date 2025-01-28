//  QS : Write a js program to delete all occurences of element 'num' in a given array.
  // EG : if arr = [1,2,3,4,5,6,2,3] & num = 2 
  //      then output should be [1,3,4,5,6,3]

   let arr = [ 1,2,3,4,5,6,2,3]
   let num = 2;
   for (let i=0 ; i<arr.length ; i++){
    if (arr[i] == num){
        arr.splice(i,1);
   }
   }
      console.log(arr);

   
  // QS : Wrtie a js program to find the number of digits in a number 
  // EG : if num = 287152 , count = 6 

   let number = 287152 ;
   let count = 0;
   let copy = number ;
   while (copy > 0){
    count++;
    copy = Math.floor(copy/10);
   }
   console.log(count);

  // QS : Write a js program to find the sum of digits in a number 
  // EG : if num = 287152 , sum = 25
    let number = 287152 ;
    let sum = 0;
    let copy = number ;
    while (copy > 0){
      digit = copy % 10 ;
      sum += digit ;
      copy = Math.floor(copy/10);
      }
      console.log(sum);


  // QS : Print the factorial of a number n 
  // EG : if n = 5 , output = 120
      let n = 5 ;
      let fact = 1 ;
      for (let i = 1 ; i <= n ; i++){
        fact *= i ;
        }
        console.log(fact);


  //QS : Find the largest number in an array with only positive Numbers 
     let arr = [2,5,10,4,2,7,1,9];
     let largest = 0 ;
     for (let i = 0 ; i < arr.length ; i++){
        if (arr[i] > largest){
            largest = arr[i];
            }
            }
            console.log(largest);
            

