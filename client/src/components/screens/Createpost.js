import React, { useEffect, useState } from 'react'
import Mo from 'materialize-css'
import { useHistory } from 'react-router'

export const Createpost = () => {
    const [title,setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setimage] = useState("")
    const [url,seturl] = useState("")
    const history = useHistory()

    useEffect(() => {
        if(url){
            fetch("/createpost",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify(
                    {
                        title,
                        body,
                        pic:url
                    }
                )
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    Mo.toast({html:data.error,classes:"#c62828 red darken-3"})
                }else{
                    Mo.toast({html:"Created Post successfully",classes:"#4caf50 green"})
                    history.push("/")
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    },[url])

    const postDetails=()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","socialnetwork")
        data.append("cloud_name","dzlyauzgq")
        fetch("https://api.cloudinary.com/v1_1/dzlyauzgq/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data=>{
            seturl(data.url)
        }).catch(err=>{
            console.log(err)
        })
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify(
                {
                    title,
                    body,
                    pic:url
                }
            )
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                Mo.toast({html:data.error,classes:"#c62828 red darken-3"})
            }else{
                Mo.toast({html:"Created Post successfully",classes:"#4caf50 green"})
                history.push("/")
            }
        }).catch(err=>{
            console.log(err)
        })
    } 

    return (
        <div className="card input-filed"
        style={{
            margin:"10px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}>
           <input type="text" placeholder="Title"
               value={title}
               onChange={(e)=>{
                   setTitle(e.target.value)
               }}
           />
           <input type="text" placeholder="Description"
                value={body}
               onChange={(e)=>{
                   setBody(e.target.value)
               }}
           />
           <div class="file-field input-field">
           <div className="btn">
            <span>Upload Image</span>
            <input type="file"
                onChange={(e)=>{
                    setimage(e.target.files[0])
                }}
            />
            </div>
            <div className="file-path-wrapper">
            <input className="file-path validate" type="text"/>
        </div>
        </div>
        <button className="btn waves-effect waves-light ##008B8B"
        onClick={()=>postDetails()}
        >
            Upload Post
        </button>
        </div>
    )
}