 import React from 'react'
import { useAPICALL } from './CustomHook';
 
 const Products = () => {
    let data = useAPICALL("https://fakestoreapi.com/products");
    console.log(data);


    if(data){
        if(Array.isArray(data)){
            return (
                        <div>
                            {data.map((item)=>{
                                return(
                                    <section key={item.id}>
                                        <h1>{item.title}</h1>
                                    </section>
                                )
                            })}
                        </div>
                    )
        }else{
            return <h1>{data.message}</h1>
        }
    }else{
        return <h1>Loading......</h1>
    }










    // if(data){
    //     return (
    //         <div>
    //             {data.map((item)=>{
    //                 return(
    //                     <section key={item.id}>
    //                         <h1>{item.title}</h1>
    //                     </section>
    //                 )
    //             })}
    //         </div>
    //     )
    // }else{
    //     return(
    //         <h1>Loading......</h1>
    //     )
    // }
   return (
     <div>

     </div>
   )
 }
 
 export default Products