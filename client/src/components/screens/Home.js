import React, { useState,useEffect, useContext } from 'react'
import { UserContext } from '../../App'

export const Home = () => {
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+ localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result)
        })
    },[])

    const likePost = (_id)=>{
        fetch('/like',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:_id
            })
        }).then(res=>res.json())
        .then(result=>{
            const newData = data.map(item=>{
                if(item._id == result._id){
                    return result
                }else{
                    return item
                }
            })

            setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }
    const unlikePost = (_id)=>{
        fetch('/unlike',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:_id
            })
        }).then(res=>res.json())
        .then(result=>{
            //console.log(result);
            const newData = data.map(item=>{
                if(item._id == result._id){
                    return result
                }else{
                    return item
                }
            })

            setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }
    const makeComment = (text,postId)=>{
        fetch('/comment',{
             method:"put",
             headers:{
                 "Content-Type":"application/json",
                 "Authorization":"Bearer " +localStorage.getItem("jwt")
             },
             body:JSON.stringify({
                 postId,
                 name:localStorage.getItem("user").name,
                 text
             })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result);
            const newData = data.map(item=>{
                if(item._id == result._id){
                    return result
                }else{
                    return item
                }
            })

            setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="home">
        {data.map(item=>{
            return(
                <div className="card home-card" key={item._id}>
                <h5>{item.postedby.name}</h5>
                <div className="card-image">
                   <img src={item.photo}
                   alt="abstract"/>
               </div>
           
               <div className="card-content">
               {item.likes.includes(state.id)?
                        <i class="material-icons"
                        onClick={()=>{
                            unlikePost(item._id)
                        }}>thumb_down</i>:
                        <i class="material-icons"
                        onClick={()=>{
                            likePost(item._id)
                        }}>thumb_up</i>
               }
            
                   <h6>{item.likes.length} likes</h6>
                   <h6>{item.title}</h6>
                   <p>{item.body}</p>
                   {
                       item.comments.map(record=>{
                           return(
                               <h6><span style={{fontWeight:"600"}}>{record.postedBy.name}

                               </span> {record.text}</h6>
                           )
                       })
                   }
                   <form onSubmit={(e)=>{
                       e.preventDefault()
                       makeComment(e.target[0].value,item._id)
                   }}>
                   <input type="text" placeholder="add a comment"/>
                   </form>
               </div>
            </div>
            )
        })}
           
        </div>   
    )
} 