const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    heading: {type: String, required: true}, 
    text: String
})

const blogSchema = new Schema({
    title: { type: String, required: true },
    content: [contentSchema],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    thumbnail: String, 
    tags: [String],
    comments: [String],
    published: Boolean, 
    deleted: Boolean,  
}, {
    timestamps: true, 
})

module.exports = mongoose.model('Blog', blogSchema); 

