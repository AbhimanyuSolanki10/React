import React from 'react'

const Child = ({data}) => {
    // console.log(data)
  return (
    <div>
        <h1>Child Comp {data}</h1>
    </div>
  )
}


// const Child = (x) => {
//     console.log(x)
//         let {propname}= x;
//   return (
//     <div>
//         <h1>Child Comp {propname}</h1>
//     </div>
//   )
// }





export default Child