//! destructuring 
// let arr = [10,20,30,40,50];
// let [a, , ,d,e] =arr;
// console.log(a,d,e)

// let arr2= [100,200,["Hello",300,["Byeeeee"]]];
// let [x,y,[, , [z]]] = arr2;
// console.log(z)


// let obj = {
//     id:1,
//     ename:"Prashad",
//     trainer:"React JS"
// };

// let {trainer,ename,company}=obj;
// console.log(trainer,ename,company)

// let obj2={
//     ename:"Raj",
//     course:{
//         javaFullStack:["HTML","CSS","JS","REACT","Core Java","Adv Java","SQL"],
//     MernStack:["web Tech","React","Node","Express","Mongo"],
//     PythonFullstack:["Web Tech","Python","Django","SQL"]
//     }
// }
// let {course:{javaFullStack,MernStack,PythonFullstack}}=obj2
//!This will through error beacuse when we destructure any key then we will not access that key like course is already destructure so we can acces it 
// console.log(course)
// console.log(javaFullStack)


// let arr4 =[10,20,30,40,50]
// let val = arr4.filter((ele)=>{
//     return ele>20
// })
// console.log(val)
//! It will return filtered array after condition pass


// let arr4 =[10,20,30,40,50]
// let val = arr4.find((ele)=>{
//         return ele>20
//     })
//     console.log(val)
    //! It will return single element 