import axios from "axios"

export const api = axios.create({
 baseURL:"https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ac0274875ee85ae1554604af4e720f16&hash=a26ea54816d2fab464b89f61b898d035",
 params:{
   limit: 100
 }
});

 