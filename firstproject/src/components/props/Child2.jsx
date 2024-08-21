import React from "react";

const Child2 =(props)=>{
    console.log(props)
    let {dbData , person:{username,id,designation,subject}} = props;
    return(

        <>
            {/* <hr/> */}
            <h1>I am Child 2</h1>
            <p>{dbData} {username} id is  {id} and designation is {designation} for subject {subject}</p>
        </>
    )
}
export default Child2