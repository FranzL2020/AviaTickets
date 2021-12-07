import '../css/style.css'
import './plugins';
import locations from './store/locations';
import formUI from './views/form';

document.addEventListener('DOMContentLoaded', () => {
initApp();

const form = formUI.form;

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    onFormSubmit();
    
})

//events


//handlers
     async function initApp (){
         await locations.init();
         formUI.setAutocomplete(locations.shortCitiesList);
     }

     async function onFormSubmit(){
         //collection data
         const origin = locations.getCityCodeByKey(formUI.originValue);
         const destination = locations.getCityCodeByKey(formUI.originValue);
         const depart_date = formUI.departDateValue;
         const return_date = formUI.returnDateValue;

         console.log(origin,destination,depart_date,return_date )
         await locations.fetchTickets({
             origin,
             destination,
             depart_date,
             return_date
         })
     }
})

/* locations.init().then(res => {
    console.log(res) 
    console.log(locations)
    console.log(locations.getCitiesCountryCode('PE'))
});
 */
/* import api from './service/apiService';
api.countries().then(res => console.log(res))
api.cities().then(res => console.log(res)) */