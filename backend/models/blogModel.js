const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String, required: true },
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    publishedAt: String,
    tags: [String],
    comments: [String],
    status: String, 
}, {
    timestamps: true, 
})

module.exports = new mongoose.model('Blog', blogSchema); 

