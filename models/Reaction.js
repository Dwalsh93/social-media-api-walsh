const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        reactionId: {
            //Use Mongoose's ObjectId data type
            //Default value is set to a new ObjectId

        },
        reactionBody: {
            type: String,
            Required: True,
            // 280 character maximum
        },
        username: [{
            type: String,
            Required: true
        }],
        createdAt: [{
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

ReactionSchema.virtual('ThoughtCount').get(function () {
    return this.Thoughts.length;
});

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;