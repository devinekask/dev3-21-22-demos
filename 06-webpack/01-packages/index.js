// Axios is an external library that is imported in our project
// It simplifies the process of fetching data from an external source
// https://www.npmjs.com/package/axios

const axios = require('axios');

const sendGetRequest = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
    resp.data.forEach(item => console.log(item.title));
};

sendGetRequest();