const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        thoughtText: {
            type: String,
            required: true,
            // must be between 1 and 280 characters
            minLength: 1,
            maxLength: 280

        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        // array of nested documents created with the reactionSchema
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;