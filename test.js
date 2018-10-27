// showNumbers(10);

// function showNumbers(limit)
// {
//     const startNumber=1;
    
//     for(  i=startNumber;i<=limit;i++)
//     {
//         if(i%2===0)
//         {
//             console.log("EVEN");
//         }
//         else
//         console.log("ODD");
//     } 
// }
///////////////////////////////////////////////////////////////////////////
// const movie= {
// title:"Titanic",
// year:"2007",
// earned:2000,
// rating:4.5

// };

// console.log(showProperties(movie));

// function showProperties(obj)
// {
//     for (let key in obj)
//   if(typeof obj[key]==='number')
//   console.log(key,obj[key]);
// }
//////////////////////////////////////////////////////////////////////////

// console.log(sum(20));

// function sum(limit)
// {
    
//     let sum = 0;

//     for(let i=0; i<=limit; i++)
//         if(i%3===0|| i%5===0)
//          sum+=i;  
//        return sum;
    
// }
/////////////////////////////////////////////////////////////////////////

// const marks=[90,80,70,80];

// console.log(calculateGrade(marks));

// function calculateGrade(marks)
//     {
// const average=calculateAverage(marks);

//       if(average<60) return 'F';
      
//        if(average<70) return 'D';
      
//        if(average<80) return'C';
      
//        if(average<90) return 'B';

//        return console.log("A");
//     }

//     function calculateAverage(values)
//     {
//         let total=0;
//         for (let mark of values)
//         total+=mark;
//         return total/values.length;

//     }
/////////////////////////////////////////////////////////////////////

IsPrime(10);
function IsPrime(Limit)
{
    for (let i=2;i<=Limit;i++){
        let prime=true;

        for (let j=2;j<i;j++)
        {
        if(i%j===0)
        {
        prime=false;
         break;  
        }
        
        }
        if(prime)console.log(i);
    }


}