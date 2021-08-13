const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    username: {
      type: String,
      Unique: true,
      Required: true,
      trim: true
    },
    email: {
        type: String,
        Unique: true,
        Required: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/]
    },
    thoughts: [{
    // _id values referencing the thought model
    }],
    friends: [{
// _id values referencing the user model
    }]
  },
  {
    toJSON: {
    virtuals: true,
    },
    id: false 
  }
);

CommentSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;