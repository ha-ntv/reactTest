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
  errors?: any;
}



const Input: FC<InputProps> = ({
    name,
    type,
    label,
    placeHolder,
    rules = {},
    register,
    errors = {}
  }) => {
    return ( 
        <div className="form-group">
            <input
            className={cx("form-control form-control-lg", errors[name] && "is-invalid")}
            aria-invalid={errors[name] ? "true" : "false"}
            type={type}
            name={name}
            id={name}
            placeholder={placeHolder}
            {...register(name)}
            />
        
            {errors[name] && (
            <p className="invalid-feedback" role="alert">
                {errors[name].message}
            </p>
            )}
      </div>
    );
  };
  
  export default Input;