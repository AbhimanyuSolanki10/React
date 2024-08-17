import React from 'react'

export const Child = ({data:{dbData,person:{username,subject,designation}}}) => {
    // console.log(username,subject,designation)
    // console.log(dbData)
  return (
    <div>
        <h1>Child Comp</h1>
        <h2>{dbData} {username} </h2>
    </div>
  )
}
// const Child = ({data}) => {
//     console.log(data)
//   return (
//     <div>
//         <h1>Child Comp {data}</h1>
//     </div>
//   )
// }


// const Child = (x) => {
//     console.log(x)
//         let {propname}= x;
        
//   return (
//     <div>
//         <h1>Child Comp {propname}</h1>
//     </div>
//   )
// }




export const ChildOfChild2 =()=>{
    return(

        <>
            <hr/>
            <h1>I am Child 22</h1>
        </>
    )
}
