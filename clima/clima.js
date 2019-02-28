const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get('url');

    return resp.main.temp;

}

module.exports = {
    getClima
}