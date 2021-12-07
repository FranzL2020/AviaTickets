import axios from 'axios';
import config from '../config/apiConfig';

/**
 * countries - [array of countries]
 * cityes - [array of cityes]
 * prices/cheap [array]
 */

class Api {
    constructor (config){
        this.url = config.url;
    }
async countries (){
   try {
       const response = await axios.get(`${this.url}/countries`);
       return response.data;
       console.log(response)
   } catch (err) {
   console.log(err) 
   return Promise.reject(error)
   }
}
async cities (){
    try {
        const response = await axios.get(`${this.url}/cities`);
        return response.data;
        console.log(response)
    } catch (err) {
    console.log(err) 
    return Promise.reject(err)
    }
}
async prices (params){
    try {
        const response = await axios.get(`${this.url}/prices/cheap`, {
            params,
        });
        return response.data;
       
    } catch (err) {
    console.log(err) 
    return Promise.reject(err)
    }
    
}

}

const api = new Api(config);
export default api;