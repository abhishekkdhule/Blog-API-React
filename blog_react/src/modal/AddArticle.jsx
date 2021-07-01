import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import  Cookies  from  'js-cookie';

const custAxios=axios.create({
    baseURL:"http://localhost:8000/",
    headers:{
        'X-CSRFToken':Cookies.get('csrftoken'),
    },
    withCredentials:true,
})

function AddArticle() {
    
    const [value, setValue] = useState('<p>Sunny day!!!</p>');
    const [title,setTitle] = useState('')
    const SaveBlog=()=>{
        console.log(value,title)
        custAxios.post('addarticle/',{"title":title,"text":value})
        .then(response=>{
            window.location.reload()
        })
    }

    return (
        <>
        <h5 className="text-center mb-3">What's in your mind??</h5>
        <label for="title mb-1">Title</label>
        <input className="form-control mb-3" type="text" name="title" value={title} placeholder="Today's weather!!!!" onChange={(e)=>setTitle(e.target.value)}/>
        <label for="blogContent mb-1">Blog Content</label>
        <ReactQuill theme="snow" value={value} onChange={setValue}/>
        <div className="text-end">

        <button className="btn btn-primary mt-2 " onClick={()=>SaveBlog()}>Publish</button>
        </div>
        </>
    );
    
}

export default AddArticle
