const axios = require('axios')

const fetchUrl = async (url)=>{
   let response = await axios.get(url);
   let data = await response.data;
   //console.log('Response.data ',response.data);
   return data; 
}
let url = 'https://jsonplaceholder.typicode.com/posts/1';
let response = fetchUrl(url);
//response.then(data=>console.log("Data is ",data))

const forAwait = async()=>{
    let arr = [fetchUrl('https://jsonplaceholder.typicode.com/posts/1'),
    fetchUrl('https://jsonplaceholder.typicode.com/posts/2')]

    for await( let data of arr)
    {
        console.log("for await Data ",data);
    }
};
forAwait();
