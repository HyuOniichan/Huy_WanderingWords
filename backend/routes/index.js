const blogRoute = require('./blogRoute'); 
const userRoute = require('./userRoute'); 

function route(app) {
    app.use(`/v1/blog`, blogRoute); 
    app.use(`/v1/user`, userRoute); 
}

module.exports = route; 