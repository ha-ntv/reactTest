import React from 'react';
export default function Button(props: {text: string}) {
  
    return (
        <div className="mt-3">
           <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">{props.text}</button>
        </div>
    )
}