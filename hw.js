// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

//  function grade (){
//  let marks = 56;
//     if(marks >= 55 && marks < 60){
//         console.log('Not too good');
//     }else if (marks >= 60 && marks < 70){
//         console.log("ehhhhh");
//      }else if(marks >=70 && marks < 80){
//         console.log('Keep Trying');
//       }else if(marks >= 80 && marks <= 100){
//          console.log('You did a good job');
//        }else if(marks > 100){
//           console.log('Not valid number, Try again');
//          }
//      else{
//          console.log("Bad grade but you'll get Em Next Time ");
//         } 
        
//     } grade()





// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

    // function multiples(j){

    //     let i = 0 ;
    //     while(i < j ){
    //         i += 10 ;
    //         console.log(i);
    //     }
    // }

    // multiples(100)




// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

        // function change(billAmount, itemAmount){
        //     let quarter = 0;
        //     let remaining = billAmount - itemAmount;
        //     while(remaining > 0){
        //         remaining -= 0.25;
        //         quarter++;                               
                             
        //     }  console.log(quarter);
        // }     
        // change (10, 8)   

//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paind and amount cost


     function bills(amountPaid, amountCost){
      let change, count_100 = 0, count_50 = 0, count_20 = 0, count_10 = 0, count_05 = 0,count_02 = 0, count_01 = 0;
      change = amountPaid - amountCost;
      if(change > 0){
      console.log("Your total change is : $" + change);
      }

      while (change >= 1){
        if(change >= 100){
            change -= 100;
            count_100++;
        }else if (change >= 50){
            change -= 50;
            count_50++;
        }else if (change >= 20){
            change -= 20;
            count_20++;
        }else if (change >= 10){
            change -= 10;
            count_10++;
        }else if (change >= 5){
            change -= 5;
            count_05++;
        }else if (change >= 2){
            change -= 2;
            count_02++;
        }else if (change >= 1){
            change -= 1;
            count_01++;
        }
      }
      if(count_100 > 0){
        console.log("You will get " + count_100 + " $100 bills");
      } 
      if (count_50 > 0){
        console.log("You will get " + count_50 + " $50 bills");
      }
       if (count_20 > 0){
        console.log("You will get " + count_20 + " $20 bills");
      }
       if (count_10 > 0){
        console.log("You will get " + count_10 + " $10 bills");
      }
       if (count_05 > 0){
        console.log("You will get " + count_05 + " $5 bills");
      }
       if (count_02 > 0){
        console.log("You will get " + count_02 + " $2 bills");
      }
       if (count_01 > 0){
        console.log("You will get " + count_01 + " $1 bills");
      }

     }
     bills(250, 20)




// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// function FizzBuzz(){
//     let i = 0;
//     while(i <= 100){
//         if(i % 3 ===0 && i % 5 !== 0){
//             console.log("Fizz");
//         }else if(i % 3 !== 0 && i % 5 === 0){
//             console.log("Buzz");
//         }else if(i % 3 === 0 && i % 5 ===0){
//             console.log("FizzBuzz");
//         }else{
//             console.log(i);
//         }
//         i++;
//     }

// }FizzBuzz()

