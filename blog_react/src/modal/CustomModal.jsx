import React from 'react';
import AddArticle from './AddArticle';
import Signin from './Signin';
import Signup from './Signup';

function CustomModal(props) {
  

  return (
      <>
                
            <a type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${props.type}`}>
            {props.heading}
            </a>


            <div className="modal fade" id={props.type} tabindex="-1" aria-labelledby={props.type} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="{props.type}Label">{props.heading}</h5>
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
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>

      </>
  )
}
export default CustomModal;