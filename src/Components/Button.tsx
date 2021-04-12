import React from 'react';
export default function Button(props: {text: string, id:string}) {
  
    return (
        <div className="mt-3">
           <button type="submit" id={props.id} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">{props.text}</button>
        </div>
    )
}