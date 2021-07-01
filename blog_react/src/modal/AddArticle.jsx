import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddArticle() {
    
    const [value, setValue] = useState('');
    
    const SaveBlog=()=>{
        console.log(value)

    }

    return (
        <>
        <h5 className="text-center mb-3">What's in your mind??</h5>
        <ReactQuill theme="snow" value={value} onChange={setValue}/>
        <button className="btn btn-primary mt-2 " onClick={()=>SaveBlog()}>Publish</button>
        </>
    );
    
}

export default AddArticle
