//  let p1 =fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10")
// !url is also called end points
// console.log(p1)
//!        What is Promise?
//todo     A Promise is an object representing the eventual completion or failure of an asynchronous operation.

//? When we request from client(browser) to server we get a response in the form of promise which is an object and inside promise object we have promiseStae and promiseResult and 3 state of promise 1--> pending(search time span) 2--> fullfilled (if server get data ) 3--> rejected(server not found data)  when we send data through api or fetch data from api we get promise.

//! How to create a Promise

// let p1= new Promise((resolve,reject)=>{
// resolve("Hiiii")
// reject("Byeeee")
// if(10<2){
//     resolve("HII")
// }else{
//     reject("Byee")
// }
// })
// console.log(p1)
// --------------------------------------------------------------------------------------------------------------------------------------------
// let data =[
//     {
//         id:1,
//         ename:"Prashad"
//     },
//     {
//         id:2,
//         ename:"Sarvesh"
//     },
//     {
//         id:3,
//         ename:"Solanki"
//     },
// ];

// let err = {error:"Unable to fetch data"};
// let p1 = new Promise((resolve,reject)=>{
    
//         if(10<2)
//             {
//              resolve(data);
//             }else
//             {
//             reject(err);
//             }

// });
// console.log(p1)
// ! to handle the promise we use Then and Catch will store the result of promise like if promiseSate got fullfilled (Then) will execute and (Catch) will execute when promiseState rejected .
//* promiseresult give response and we store into  x as a paramenter inside callback function of then block, response                       (object---> Prototype--> json )when we call .json method it will convert from json to js object and return into Promise form .
//! try ,catch, finally --> not depend on promise
//! then,catch,finally --> dependent on promise
//! If we get pending so finally will not execute in any case 

// p1.then((x)=>{
//     console.log("Hiiii");
//     console.log(x)
// })

// p1.catch((y)=>{
//     console.log("Byeeee")
// })


// p1.then((x)=>{
//     console.log("Hiiii");
//     console.log(x)
//     x.map((user)=>{
//     let {id,ename}=user
//     x.map(({id,ename})=>{
        // console.log(id,ename)
        // ! to display on UI
//         let h1=document.createElement("h1");
//         h1.innerText=ename;
//         document.body.append(h1);
//     })
// })

// p1.catch((y)=>{
    // console.log("Byeeee");
//     console.log(y)
//     let h1=document.createElement("h1");
//     h1.innerText=y.error;
//     document.body.append(h1);
// })

// !Fetching Data from API 
// let p1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(p1);

// p1.then((response)=>{
        // console.log(response)
        // let p2 = response.json();
        // console.log(p2)
// });

//todo                                                        Async and Await
// !Try and catch  will use to handle the error and we write risky code in try block if any error comes then try will send the control to catch method to handle the error 

//? Await will return the promise result either rejected or fullfilled  in the form of promise after that .json method will convert it into javascript object and return into promise form. 
// Fetching data is an asynchronous process which means it does not update instantly and takes time to fetch the data.
// async function APICALL(){
//         try{
//             let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//             console.log(response);
//             let data =response.json();
//             let data = await response.json();
//             console.log(data);
//         }catch(error){
//             console.log(error);
//         }
// }
// APICALL();






















