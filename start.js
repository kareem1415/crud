const mongoose = require('mongoose');
const app = require('./app')
require('dotenv/config');

// Database
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'

})
.then(() => {
    console.log('Database is Connection is ready...')
}).catch((err)=> {
    console.log(err)
})


app.listen(3000, () => {
    console.log('the server is running now')

})