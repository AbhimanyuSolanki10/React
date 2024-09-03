import React, { useEffect, useState } from 'react'

const Fetch = () => {
    let[users,setUsers]=useState(null);

    useEffect(()=>{
       async function fetchDB(){
            let response=  await fetch('https://api.github.com/users')
            // console.log(response)
          let data= await response.json()
        //   console.log(data)
          setUsers(data);
        }
        fetchDB();
    },[])
    console.log("all users----->",users)
  return (
    <div>
        <h1>fetch API</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Profile</th>
                    <th>UserName</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map(({id,login,avatar_url,type} )=>{
                        return (
                            <tr key={id}>

                                <td>{id}</td>
                                <td><img src={avatar_url} height={150} width={150} alt="tuhara net nahi chal" /></td>
                                <td>{login}</td>
                                <td>{type}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
     
    </div>
  )
}

export default Fetch