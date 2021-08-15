const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        reactionId: {
            //Use Mongoose's ObjectId data type
            //Default value is set to a new ObjectId
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),

        },
        reactionBody: {
            type: String,
            required: true,
            // 280 character maximum
            maxlength: 280,
        },
        username: [{
            type: String,
            required: true
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

// ReactionSchema.virtual('ThoughtCount').get(function () {
//     return this.Thoughts.length;
// });

// const Reaction = model('Reaction', ReactionSchema);

module.exports = ReactionSchema;