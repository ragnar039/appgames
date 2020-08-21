const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const {GamesRoutes} = require('./routes');
const {MONGO_URI, PORT} = require('./config');
const {NotFoundMiddleware} = require('./middlewares');


mongoose.set('useCreateIndex', true);


mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false})
.then(()=>console.log('DB connected'))
.catch(console.log);



app.use(express.json())
    .use(express.static(__dirname+'/static'))
    .use(cors())
    .use(morgan('dev'));

app.use('/api',GamesRoutes)
    .use(NotFoundMiddleware);


app.listen(PORT, ()=>{console.log('Funcionando')});
