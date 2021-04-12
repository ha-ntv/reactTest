import React from 'react';
import {Link} from 'react-router-dom';
import {TOKEN, REGISTER_PATH, USER_PATH, userNameProps,passwordProps, checkboxProps} from '../Config/constants';
import Logo from '../Components/Logo';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Checkbox from '../Components/Checkbox';
import { useForm, Resolver } from "react-hook-form";
import {loginRequest} from '../Service/service';
import auth from '../Utils/helpers';
import { useHistory } from "react-router-dom";


export default function LoginPage() {

    const [isLogin, setIsLogin] = React.useState<boolean>(false);
    const history = useHistory();
    React.useEffect(() => {
       const token = auth.get(TOKEN);
       if(token) {
           history.push(USER_PATH);
       }
    },[])

    const headlinesProps = {
        headlineH4: 'Hello! let\'s get started',
        headlineH6: 'Sign in to continue.',
    }
    const rememberCheckbox = {...checkboxProps, name:'remember', label: ' Keep me signed in'};
    type FormValues = {
        username: string;
        password: string;
        remember:boolean;
      };
    const validateForm = (values:FormValues)  => {
        const validationObj = {};
        for(let prop in values) {
            if(!values[prop] && prop !== 'remember') {
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
    const onSubmit = handleSubmit( async (data) => {
        let response;
        const requestData = {
            username: data.username,
            password: data.password
        }
        try {
            response = await loginRequest(requestData);
            const { token } = response.data;
            auth.set(TOKEN,token);
            setIsLogin(true);
            history.push(USER_PATH);
        }
        catch {
           console.log('unable to login ');
        }
        
    });
    return (
        <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                            <Logo {...headlinesProps} />
                            <form id="login-form"
                                onSubmit={onSubmit}
                                >
                                <Input  {...userNameProps} errors={errors} register={register}/>
                                <Input  register={register} {...passwordProps} errors={errors} />
                                <Button text="SIGN IN" id="submit" />
                                <div className="my-2 d-flex justify-content-between align-items-center">
                                    <Checkbox {...rememberCheckbox}  register={register}/>
                                    <Link to="/forgot" className="auth-link text-black">Forgot password?</Link>
                                </div>
                                <div className="text-center mt-4 font-weight-light">
                                    Don't have an account? <Link to={REGISTER_PATH} className="text-primary">Create</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}