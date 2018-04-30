console.log('remove the dublicate array');


   let array1 = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
   
   // create a new array with empty value
   let array2 = [];


// create the length of the array
   let len = array1.length;


 // start with for loop
   for(let i = 0; i < len; i++) {
       if(array2.indexOf(array1[i]) === -1) {
           array2.push(array1[i]);
       }
   }

   console.log(array2);
   