import React, { Fragment } from 'react'


function Child3({JSONDATA}) {
   console.log(JSONDATA)
  return (
      <>
    <div>Child3</div>
    {JSONDATA.map((user)=>{
        let {id,username,pic}= user;
        return(
            <Fragment key={id}>
                <h2>Id : {id}</h2>
                <h2>Username : {username}</h2>
                <img src={pic} alt=""  width={300} height={300}/>
            </Fragment>
        )
    })}

    </>
  )

}

export default Child3