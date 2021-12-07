import '../css/style.css'
import './plugins';
import locations from "./store/locations";
locations.init().then(res => {
    console.log(res) 
    console.log(locations)
    console.log(locations.getCitiesCountryCode('PE'))
});

/* import api from './service/apiService';
api.countries().then(res => console.log(res))
api.cities().then(res => console.log(res)) */