const userData = require('../models/userModel'); 

class userController {
    show(req, res, next) {
        userData.find({}).populate('blogs')
            .then(data => res.status(200).json(data)) 
            .catch(err => res.json(err)) 
    }
}

module.exports = new userController(); 
