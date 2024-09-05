import React, { useEffect, useState } from 'react'


export  const useAPICALL = (API_URL)=>{
        let [state,setState] = useState(null);
        useEffect(()=>{
            async function fetchData (){
                try {
                    let repsonse = await fetch(API_URL);
                let data = await repsonse.json();
                setState(data);     
                } catch (error) {
                    setState({message:"something went wrong"})
                }
            }
            fetchData();
        },[]);
        return state;
  }


