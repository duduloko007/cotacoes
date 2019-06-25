const request = require('request')

const api_token = 'jmiPh2rEq5P2NYm5OwpaQUnGtxrZD7rEqUW4II45hCbvepOd8kekwK99S0qk'

const cotacao = (symbol, callback) => {
    
    const url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`

    request({url: url, json:true}, (err, response) => {
        
        if(err){
            callback({
                message: `Something went wrong: ${err}`,
                code: 500
            }, undefined)
        } 
     

         if(response.body === undefined || response.body.data === undefined){
            callback({
                message: `No data found`,
                code: 404
            }, undefined)
        }

        const parsedJSON = response.body.data[0]

     
       const {symbol, price_open, price, day_high, day_low} = parsedJSON

        callback(undefined, {symbol, price_open, price, day_high, day_low})
    })
}


module.exports = cotacao
