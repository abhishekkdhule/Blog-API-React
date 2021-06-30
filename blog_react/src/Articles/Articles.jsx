import {React,useEffect,useState} from 'react'
import axios from 'axios'
import  Cookies  from  'js-cookie';
import Article from './Article';


const custAxios=axios.create({
    baseURL:"http://localhost:8000/",
    headers:{
        'X-CSRFToken':Cookies.get('csrftoken'),
    },
    withCredentials:true,
})


function Articles() {
    const [articles,setArticles]=useState([])

    useEffect(()=>{
        console.log('inuser effect')
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
            <div className="container">
            {
                articles.map((article)=>{
                    return <Article key={article.id} user={article.user} title={article.title} text={article.text} time={article.time}/>
                })
            }
            </div>
        </div>
    )
}

export default Articles
