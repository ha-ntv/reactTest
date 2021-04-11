import axios, {Method} from "axios";
import { API_BASE_URL } from '../Config/constants';
import auth from '../Utils/helpers';
import { TOKEN }  from '../Config/constants';
import { LoginDataType } from '../Types/type';

// ----
// STEP 1
// ----
//
// Config Axios
//
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common.Authorization = `Bearer ${  auth.get(TOKEN)}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(
  (config: any) => config,
  (error: {response: string}) => Promise.reject(error.response)
);



// Making request gate
const request = (url:string, values: {}, method:Method) => {
  const token = auth.get(TOKEN)
  const headers: {Authorization: string} = { Authorization: `Bearer ${token}` };
  let data = {
      ...values,
      token
    };
 
  return axios({ method, url, data, headers });
}
// Login API
const loginRequest = ({ username, password }: LoginDataType) => request('/login', { username, password }, 'post');

// Get user table API

const userRequest = () => request('/users',{},'get');

export  { loginRequest, userRequest };

