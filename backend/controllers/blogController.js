const blogData = require('../models/blogModel'); 

class blogController {
    show(req, res, next) {
        blogData.find({}).populate('author')
            .then(data => res.status(200).json(data)) 
            .catch(err => res.json(err)) 
    }
}

module.exports = new blogController(); 
