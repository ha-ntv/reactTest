
import React, {FC} from 'react';
import './Input.css';
import cx from "classnames";

interface InputProps {
  rules?: {};
  name: string;
  label?: string;
  placeHolder?: string;
  type: string;
  register: any;
}


const Checkbox: FC<InputProps> = ({
    name,
    type,
    label,
    placeHolder,
    rules = {},
    register
  }) => {
    return (
      <div className="form-check">
      <label className="form-check-label text-muted">
       
        <input
          className={cx("form-control form-control-lg")}
          type={type}
          name={name}
          id={name}
          {...register(name)}
        />
        
        {label}
        <i className="input-helper"></i>
                </label>
            </div>
    );
  };
  
  export default Checkbox;

