
import axios from 'axios';
export default  function Myinterceptor() {
  axios.interceptors.request.use(
    (req)=>{
            console.log("interceptor")
            console.log(req)
            req.headers.Authorization="my token"
            console.log(req)
            return req
             })}

             
  
  
             export function requestStartedInterceptor() {
                axios.interceptors.request.use(req => {
                    console.log('requestStartedInterceptor')
                    req.meta = req.meta || {}
                    req.meta.requestStartedAt = new Date().getTime();
                    return req;
                });
            }
  export function responseReceivedInterceptor() {
    axios.interceptors.response.use(res => {
        console.log("response"+res)
        res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt
        console.log("time    "+res.durationInMs+res)
        return res;
    },
        err => {
            err.durationInMs = new Date().getTime() - err.config.meta.requestStartedAt
            console.log("requested time err"+err.durationInMs)
            throw err;
        });}
  
  
    
    
  

