const blogData = require('../models/blogModel');
const userData = require('../models/userModel');

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
            .then(data => {
                res.status(200).json(data)
                return data;
            })
            .then(createdBlog => {
                if (req.body && req.body.author) {
                    userData.findByIdAndUpdate(
                        req.body.author, 
                        { $push: { blogs: createdBlog._id } }
                    )
                        .then(result => console.log(result))
                        .catch(err => res.json(err))
                }
            })
            .catch(err => res.json(err))

    }

    // [DELETE] /blog/:id
    delete(req, res, next) {
        userData.updateMany(
            { blogs: req.params.id },
            { $pull: { blogs: req.params.id } }
        )
            .then(data => console.log(data))
            .catch(err => res.json(err))
        blogData.findByIdAndDelete(req.params.id)
            .then(data => res.status(200).json(data))
            .catch(err => res.json(err))
    }

}

module.exports = new blogController(); 
