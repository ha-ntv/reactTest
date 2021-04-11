 /** routes */
 const LOGIN_PATH = '/login';
 const REGISTER_PATH =  '/register';
 const USER_PATH = '/user';
 /** other constants */
 const TOKEN = 'token';
 /** props constants */
 const userNameProps = {
    type: 'text',
    className: 'form-control form-control-lg',
    placeHolder: 'Username',
    name: 'username'
};
const passwordProps = {
    type: 'password',
    className: 'form-control form-control-lg',
    placeHolder: 'Password',
    name: 'password'
};
const emailProps = {
    type: 'text',
    className: 'form-control form-control-lg',
    placeHolder: 'Email',
    name: 'email'
};
const checkboxProps = {
    type: 'checkbox',   
    className: 'form-check-input',
}

/** api url */
const API_BASE_URL = 'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1';

/** pagination */
const PER_PAGE = 6;
export {LOGIN_PATH, REGISTER_PATH,API_BASE_URL, PER_PAGE,  USER_PATH, TOKEN, userNameProps, passwordProps, emailProps, checkboxProps};