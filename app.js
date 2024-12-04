//  visyaltization the call stack
//  topic from video 2

// function one(){
//     return 1;
// };
// function two(){
//     return one() + one();
// };
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


//  breakpoints
//  topic from video 3

//  function one(){
//     return 1;
//  };
//  function two(){
//     return one() + one();
//  };
//  function three(){
//     let ans = two() + one();
//     console.log(ans);
//  };
// three()


//  Js in sinlge threaded

// setTimeout(() =>{
// document.write("hellow wwrld")
// }, 2000);
// setTimeout(() =>{
//     document.write("hellow wwrld")
// }, 2000);
// // console.log("adfsdf");

//  CallBack hell 

// h1 = document.querySelector("h1");

// function changeValue(value, delay, nextValue){
// setTimeout(() => {
//    h1.innerHTML = value;
//    nextValue();
// }, delay);
// }


// changeValue("hello", 1000, ()=>{
//     changeValue("My name is", 1000, () =>{
//         changeValue("Anas Jawaid", 2000, () =>{
//             changeValue("And my caste is Kamboh", 3000, () =>{
//                 changeValue(" I am a undergraduate students", 4000, () =>{
        
//                 })
//             })
//         })
//     })
// })



//  promises

// function savetoDb(data, success, faiure){
//    let internetConnection = Math.floor(Math.random() * 10) + 1;
//    if(internetConnection > 4){
//     success();
//    } else{
//     faiure();
//    }
// };

// savetoDb("apna college", 
//   () => {
//     console.log("your data was saved");
//     savetoDb("Hello World", () =>{
//       console.log("succes1: your data was saved");
//       savetoDb("Anas", () => {
//         console.log("succes3: your data was saved");
//       }, 
//       () =>{
//         console.log("falure3: weak connection");
//       }
//     )
//     },
//   () =>{
//     console.log("falure: weak connection");
//   })
//   }, 
//   () =>{
//     console.log(`weak connection`);
//   }

// );

//  Promisse 
//  Resolve and Reject

// function savetoDb(data){
//   return new Promise((resolve, reject) => {
//     let internetConnection = Math.floor(Math.random() * 10) + 1;
//     console.log("Internetspeed",internetConnection);
//     if(internetConnection >4){
//       resolve("succes: data was saved");
//     } else{
//       reject("failure: data was not saved");
//     }
//   })
// }

// savetoDb("Anas Jawaid").then(() => {
//   console.log("prmise was filled");
// })

// .catch(() => {
//   console.log("promise was not filled");
// })

//  Promise Chaining

// function dob(data){
//   return new Promise((resolve, reject) => {
//   let age = 18;
//   console.log(age);
//   if(age >= 18){
//     resolve("your data was saved");
//   } else{
//     console.log("your data was not saved");
//   }
// })
// }

// dob("age is 23 years old").then(() =>{
//   console.log("data 1 is saved");
//   return dob("age is 25 years old");
// })
// .then(() =>{
//   console.log("data 2 is saved");
//   return dob("age is 14 years old");
// })
// .then(() =>{
//   console.log("data 3 was saved");
// })
// .catch(() =>{
//   console.log("weak connection")
// })


function savetodb(data){
  return new Promise((resolve, reject) => {
    let Internetspeed = Math.floor(Math.random() * 10) + 1;
    console.log(Internetspeed);
    if(Internetspeed > 4){
      resolve("succes: data was saved");
    } else{
      reject("failure: weak connection");
    }
  })
}

savetodb("Apna College").then((result) =>{
  console.log(result);
  return savetodb("Hello Wolrd");
})
.then((result) => {
  console.log(result);
  return savetodb("Anas JAwaid");
})
.then((result) =>{
  console.log(result);
})
.catch((error) => {
  console.log(error);
})