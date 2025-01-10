 // Q : change the array to the 2nd form given 

//   start :  ['january' , 'july' , 'march' , 'august']

//    end  : ['july'   , 'june'  , 'march' ,  'august']
               
          // using shift and unshift 
  let months =   ['january' , 'july' , 'march' , 'august'];
  months.shift();
  months.unshift();

  months.unshift('june');
  months.unshift('july');

        // using splice 

        let months2 =   ['january' , 'july' , 'march' , 'august']; 
         months2.splice( 0 , 2 , "july" , "june");

          