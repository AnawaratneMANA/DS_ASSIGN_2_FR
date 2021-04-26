import axios from 'axios'
const url = "http://localhost:8093";


//Create API Calling method 
export const CreateUser = (user) => axios.post(url + "/user", user);
