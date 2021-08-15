const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/]
        },
        thoughts: [{
            // _id values referencing the thought model
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            // _id values referencing the user model
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;