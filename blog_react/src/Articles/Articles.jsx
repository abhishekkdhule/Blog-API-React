import {React,useEffect,useState} from 'react'
import axios from 'axios'
import  Cookies  from  'js-cookie';

const custAxios=axios.create({
    baseURL:"http://localhost:8000/",
    headers:{
        'X-CSRFToken':Cookies.get('csrftoken'),
    },
    withCredentials:true,
})


function Articles() {
    const [articles,setArticles]=useState(['a','v'])

    useEffect(()=>{
        custAxios.get('articles/')
        .then(response =>{
            console.log(response)
            setArticles(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    return (
        <div>
        <h2>this is article component</h2>
            {
                articles.map((article)=>{
                    return <div>{article.title}</div>
                })
            }
        </div>
    )
}

export default Articles
