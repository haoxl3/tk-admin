/* 
* http config
*/
import axios from 'axios'
import {Loading} from 'element-ui'

//跨域请求，允许保存cookie
axios.defaults.withCredentials = true 

let loadinginstace
let cfg, msg 
msg = '服务器君开小差了，请稍后再试'
//HTTPrequest拦截
axios.interceptors.request.use(config => {
    loadinginstace = Loading.service({
        fullscreen: true 
    })
    // if(store.getters.token) {
    //     // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //     config.headers['X-Token'] = getToken() 
    // }
    // return config 
}, error => {
    console.log('err' + error)
    return Promise.reject(error)
})
//HTTPresponse拦截
axios.interceptors.response.use(data => {
	loadinginstace.close();
	return data
}, error => {
	loadinginstace.close();

	return Promise.reject(new Error(msg));

})

export default axios