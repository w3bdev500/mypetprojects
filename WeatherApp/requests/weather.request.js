const res = require('express/lib/response')
const rp = require('request-promise')

module.exports = async function(city = '') {
    if (!city){
        throw new Error('Укажите город')
    }

    const KEY = 'e6cad95a1f4fe141d9b087a9374e5e1b'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'
    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        },
        json: true
    }

    try{
        const data = await rp(options)
        const celsius = (data.main.temp - 32) * 5/9

        return{
            weather: `${data.name}: ${celsius.toFixed(0)}`,
            error: null
        }
    } catch (error) {
        // console.log(error)
        return{
            weather: null,
            error: error.error.message
        }
    }

   
}