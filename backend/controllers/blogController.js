const blogData = require('../models/blogModel'); 

class blogController {
    // [GET] /blog
    show(req, res, next) {
        blogData.find({}).populate('author')
            .then(data => res.status(200).json(data)) 
            .catch(err => res.json(err)) 
    }

    // [GET] /blog/:id
    showOne(req, res, next) {
        blogData.findOne({ _id: req.params.id }).populate('author')
            .then(data => res.status(200).json(data))
            .catch(err => res.json(err))
    }

    // [POST] /blog
    create(req, res, next) {
        blogData.create(req.body)
            .then(data => res.status(200).json(data))
            .catch(err => res.json(err))
    }
}

module.exports = new blogController(); 
