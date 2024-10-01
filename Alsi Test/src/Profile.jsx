import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
    let navigate = useNavigate();
    let[allUsers,setAllusers]=useState(null);
    let id=sessionStorage.getItem("id");
    let[toggle,setToggle]=useState(false);

    useEffect(()=>{
        async function getData() {
         let {data} = await axios.get(`http://localhost:5000/users`)
            setAllusers(data);
        }getData();
    },[toggle])

    let handleChange=(id)=>{
        axios.delete(`http://localhost:5000/users/${id}`).then(()=>{
            toast.success("Delete kar diyaaa jiiiiiiiiii")
            setToggle(!toggle)

        }).catch((err)=>{
            toast.error("gadbad hai ")
            console.log(err)
        })
    }

  return (
    <div>
        <table border={5} cellPadding={15} cellSpacing={10}>
        <thead>
        <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>DOB</th>
                <th colSpan={2}>Actions</th>
            </tr>
        </thead>
           
            <tbody>
            {allUsers?.map((user)=>{
                return(
                    <tr key={user?.id}>
                    <th>{user?.id}</th>
                    <th>{user?.username}</th>
                    <th>{user?.password}</th>
                    <th>{user?.dob}</th>
                    <th><button><Link to={`/edit/${user.id}`}>Edit</Link></button></th>
                    <th><button onClick={()=>{
                        handleChange(user.id)
                    }}>Delete</button></th>
                </tr>
                )
            })

            }
            </tbody>
        </table>
    </div>
  )
}

export default Profile