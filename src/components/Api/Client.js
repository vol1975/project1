import axios from 'axios';

const Client = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`
});
// client.interceptors.request.use(req => {
//     console.log(req)
//     // req.headers.authorization = "my secret token 2222222222";
//         return req;
// })
export default Client;