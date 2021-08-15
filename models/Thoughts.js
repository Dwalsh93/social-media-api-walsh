const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        thoughtText: {
            type: String,
            Required: true,
            // must be between 1 and 280 characters
            
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: [{
            type: String,
            Required: true
        }],
        reactions: [{
            // array of nested documents created with the reactionSchema
            recations: [ReactionSchema]
        }]
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