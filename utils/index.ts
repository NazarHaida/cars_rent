const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params: {model: 'corolla'},
    headers: {
        'x-rapidapi-key': '624985df63msh827de94dbef3ecep10ec10jsnf5a4ca0e624c',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();