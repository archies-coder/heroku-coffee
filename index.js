const axios = require('axios')

const getData = async () => {
        const {data} = await axios.get('https://sag-backend.herokuapp.com/')
    console.log(data)
}

getData()

setInterval(async () => {
    const {data} = await axios.get('https://sag-backend.herokuapp.com/')
    console.log(data)
}, 1000 * 60 * 15)