const userData = require('../models/userModel'); 

class userController {
    // [GET] /user
    show(req, res, next) {
        userData.find({}).populate('blogs')
            .then(data => res.status(200).json(data)) 
            .catch(err => res.json(err)) 
    }

    // [GET] /user/:username
    showOne(req, res, next) {
        userData.find({ username: req.params.username }).populate('blogs')
            .then(data => res.status(200).json(data))
            .catch(err => res.json(err))
    }

}

module.exports = new userController(); 
