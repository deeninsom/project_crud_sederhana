const exprees = require('express');
const  route  = require('./router/router');
const app = exprees();
const PORT = 8080;
const db = require('./database/db');
require('dotenv').config();
const cors = require('cors');
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')


app.use(exprees.json());
app.use(cors());
app.use('/api/data', route)
app.use(errorHandlerMiddleware)
app.use(notFound)
const start = async() => {
    try {
        await db(process.env.MONGO_URL)
        app.listen(PORT, () => { console.log(`apps running on http://localhost:${PORT}`) })
    } catch (error) {
        console.log(error);
    }
}
start();

