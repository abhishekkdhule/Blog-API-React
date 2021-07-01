import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'

function Article(props) {
    // const config = genConfig(AvatarConfig)
    const dateString=props.time.substring(0,10)
    const timeString=props.time.substring(11,16)
    const userObj=props.user
    const updatedText=props.text
    return (
       
            <div className="row mt-4 ">
                <div className="col-md-8 mx-auto border shadow-sm bg-white rounded">
                    <div className="d-flex pt-2 justify-content-between">
                    <div className="d-flex mt-1">

                    <Avatar style={{ width: '3rem', height: '3rem' }}  hairStyle="thick" />
        
                    <h6 className="mt-3 ms-2 mb-0">{userObj.username}</h6>
                    </div>
                    <div>
                        <p className="mt-1 me-2 mb-0"><small>{dateString}</small></p>
                        <p className=" me-2 mb-0"><small>{timeString}</small></p>
                    </div>
   
                    </div>
                    <hr/>
                    <h2 className="mx-auto mb-2  text-center">{props.title}</h2>
                    <div className="p-3" style={{textAlign:'justify'}} dangerouslySetInnerHTML={{__html:updatedText}}></div>
                </div>
            </div>
        
    )
}

export default Article
