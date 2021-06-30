import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'

function Article(props) {
    // const config = genConfig(AvatarConfig)
    const timeString=props.time.substring(0,10)
    const userObj=props.user
    return (
       
            <div className="row mt-4">
                <div className="col-md-8 mx-auto border shadow ">
                    <div className="d-flex pt-2 justify-content-between">
                    <div className="d-flex">

                    <Avatar style={{ width: '3rem', height: '3rem' }}  />
        
                    <h6 className="mt-3 ms-2 mb-0">{userObj.username}</h6>
                    </div>
                    <p className="mt-3 me-2"><small>{timeString}</small></p>
   
                    </div>
                    <hr/>
                    <h5 className="text-center mb-4">{props.title}</h5>
                    <p className="text-justify p-2">{props.text}</p>
                </div>
            </div>
        
    )
}

export default Article
