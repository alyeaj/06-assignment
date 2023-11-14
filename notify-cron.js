require('dotenv').config()

const Pushover = require('node-pushover') 
const cron = require('node-cron')

const push = new Pushover({
    token : process.env.APP_TOKEN, 
    user : process.env.USERKEY
}) 

cron.schedule('*/43200 * * * * *', sendNotification)

function sendNotification() {
push.send("It's stretching time!🤸🏾‍♀️", "Get up and do some strectches for 2 minutes 🧘🏽‍♀️", handleErrors); 
} 

function handleErrors(error, response){
    if (error) console.log('error: ' , error) 
    console.log(response)
}