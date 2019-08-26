const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date_joined: {
        type: Date,
        default: Date.now
    },
    admin: {
        type: Boolean,
        default: false
    },
    image_url: {
        type: String,
        default: "https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"
    },
    slug: {
        type: String
    },
    current_city: {
        type: String
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;