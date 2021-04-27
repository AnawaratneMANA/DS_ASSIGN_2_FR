import axios from 'axios'
const url = "http://localhost:8073/";


//Create API Calling method 
export const createUser = (user) =>  axios.post(url + "user", user);


