import {React,useEffect,useState,useContext} from 'react'
import axios from 'axios'
import  Cookies  from  'js-cookie';
import Article from './Article';
import { sessionContext } from '../App';

const custAxios=axios.create({
    baseURL:"http://localhost:8000/",
    headers:{
        'X-CSRFToken':Cookies.get('csrftoken'),
    },
    withCredentials:true,
})


function Articles() {
    const [articles,setArticles]=useState([])
    const sessionCont=useContext(sessionContext)
    useEffect(()=>{
        console.log('inuser effect')
        custAxios.get('articles/')
        .then(response =>{
            console.log(response.data.user)
            setArticles(response.data.data)
            if(response.data.user){
            sessionCont.setLog(true)
            }
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
console.log(sessionCont.isLog)
    return (
        <div>
            <div className="container mb-3">
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
