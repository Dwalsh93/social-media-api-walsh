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
        match: //find email validation thru mongoose
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
      getters: true
    }
  }
);

UserSchema.virtual("friendCount")