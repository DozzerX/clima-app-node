//   EJEMPLO DE OPTIMIZAR CODIGO NO LO ESTOY UTILIZANDO
//   MI "APP.JS" FUNCIONA SOLO
const axios = require('axios');


const getLugarLatLng = async(direccion) => {


    let resp = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=38.26173%2C%20-0.70579&key=78a7738578c649de9cb175f717b2fa34&language=es&pretty=1`)

    if (resp.data.status) {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    let location = resp.data.results[0];
    console.log('Direccion: ', location.formatted);
    console.log('Latitud: ', location.geometry.lat);
    console.log('Longitud: ', location.geometry.lng);

    //console.log(JSON.stringify(resp.data, undefined, 2));

    return {
        direccion: location.formatted,
        lag: location.geometry.lat,
        lng: location.geometry.lng
    }
}

module.exports = {
    getLugarLatLng
}