if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

console.log('dsad');

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI:process.env.MONGO_URI
}
