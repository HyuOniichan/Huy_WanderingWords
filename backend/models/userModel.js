const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        unique: true,
        trim: true, 
        minlength: 3,
        maxlength: 30, 
    }, 
    name: { type: String, required: true },
    email: String,
    avatar: String,
    bio: String,
    blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }]
}, {
    timestamps: true,
})

module.exports = new mongoose.model('User', userSchema);

