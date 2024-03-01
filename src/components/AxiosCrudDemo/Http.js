import axios from 'axios';
const HttpLink=axios.create({
    baseURL:`https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api`
})
export default HttpLink