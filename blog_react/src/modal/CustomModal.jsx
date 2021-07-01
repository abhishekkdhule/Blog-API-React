import React from 'react';
import AddArticle from './AddArticle';
import Signin from './Signin';
import Signup from './Signup';

function CustomModal(props) {
    let modalClass="modal-dialog"
    if(props.type==="AA"){
        modalClass="modal-dialog modal-lg"
    }

  return (
      <>
                
            <a type="button"  data-bs-toggle="modal" data-bs-target={`#${props.type}`}>
            {props.heading}
            </a>


            <div className="modal fade" id={props.type} tabindex="-1" aria-labelledby={props.type} aria-hidden="true">
            
            <div className={modalClass}>
                <div className="modal-content">
                <div className="modal-header">
                    {/* <h5 className="modal-title text-center" id="{props.type}Label">{props.heading}</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {
                        props.type==="SI"?
                        (<Signin/>) : 
                        props.type=="SU" ? 
                        (<Signup/>) : 
                        <AddArticle/>
                        
                    }
                </div>
         
                </div>
            </div>
            </div>

      </>
  )
}
export default CustomModal;