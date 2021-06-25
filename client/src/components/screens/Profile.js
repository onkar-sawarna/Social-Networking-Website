import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'

export const Profile = () => {
    const {state,dispatch} = useContext(UserContext)
    const[mypics,setPics] = useState([])
    useEffect(()=>{
       fetch('/mypost',{
           headers:{
               "Authorization": "Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
         .then(result=>{
           setPics(result.mypost)
       })
    },[])
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{

                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"180px",height:"180px",borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80"
                    alt="sexy boy"/>
                </div>
                <div>
                    <h4>{state?state.name:"loading"}</h4>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-around",
                        width:"108%"
                    }}>
                        <h6>30 posts</h6>
                        <h6>599 followers</h6>
                        <h6>0 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
               {
                   mypics.map(item=>{
                       return(
                        <img key={item.id} className="item" src={item.photo} alt="nice boy"/>
                       )
                   })
               }
            
            </div>
            </div>
    )
} 