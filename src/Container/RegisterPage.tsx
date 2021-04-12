import React from 'react';
import {Link} from 'react-router-dom';
import { userNameProps, emailProps, passwordProps,checkboxProps, LOGIN_PATH} from '../Config/constants';
import Logo from '../Components/Logo';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Checkbox from '../Components/Checkbox';
import { useForm, Resolver } from "react-hook-form";

export default function RegisterPage() {
    const headlinesProps = {
        headlineH4: 'New here?',
        headlineH6: 'Signing up is easy. It only takes a few steps',
    }
    const policyCheckbox = {...checkboxProps, name:'policy', label: ' Keep me signed in'};
    type FormValues = {
        username: string;
        email: string;
        password: string;
        policy:boolean;
      };
    const validateForm = (values:FormValues)  => {
        const validationObj = {};
        for(let prop in values) {
            if(!values[prop] && prop !== 'policy') {
                validationObj[prop]= {
                    type: 'required',
                    message: 'this is required'
                };
            }
        }    
        return validationObj;
    }
    const resolver: Resolver<FormValues> = async (values) => {
        return {
            values,
            errors: validateForm(values)
        };
    };
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<FormValues>({
        resolver: resolver
      });
    const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));
    return (
        <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                            <Logo {...headlinesProps} />
                            <form id="register-form"
                                onSubmit={onSubmit}
                                >
                                <Input  {...userNameProps} errors={errors} register={register} />
                                <Input  {...emailProps} errors={errors}  register={register} />
                                <Input  register={register} {...passwordProps} errors={errors}  />
                                <Button text="SIGN UP" id="submit" />
                                <div className="mb-4">
                                    <Checkbox {...policyCheckbox}  register={register} />
                                </div>
                                <div className="text-center mt-4 font-weight-light">
                                    Already have an account?  <Link to={LOGIN_PATH} className="text-primary">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}