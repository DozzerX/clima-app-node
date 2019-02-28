// const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


axios.get(`https://api.opencagedata.com/geocode/v1/json?q=38.26173%2C%20-0.70579&key=78a7738578c649de9cb175f717b2fa34&language=es&pretty=1`)
    .then(resp => {

        let location = resp.data.results[0];
        console.log('Direccion: ', location.formatted);
        console.log('Latitud: ', location.geometry.lat);
        console.log('Longitud: ', location.geometry.lng);

        //console.log(JSON.stringify(resp.data, undefined, 2));
    })
    .catch(e => console.log('ERROR!!! ', e));

// Esto es para llamar al clima pero no tengo url
// clima.getClima(9.1231231, -52.0110230)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));

// -----------------------------------------------------
// Esto es para poner el clima y temp en una funciona de llamada
// let getInfo = async() => {

//     let coors = await lugar.getLugarLatLng(argv.direccion);
//     let temp = await clima.getClima(location.geometry.lat, location.geometry.lng)

//     return `El clima en ${ coors.direccion} es de ${temp}`;
// }
// getInfo( argv.direccion)
// .then(mensaje => console.log(mensaje))
// .catch(e => console.log(e));