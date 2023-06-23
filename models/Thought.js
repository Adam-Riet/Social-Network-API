const { Schema, model, Types } = require('mongoose');
const formatDate = require('../utils/date');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: [280, 'Reaction cannot exceed 280 characters.']
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => formatDate(createdAtVal)
    }
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: [1, 'Thought must be at least 1 character long.'],
        maxlength: [280, 'Thought cannot exceed 280 characters.'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => formatDate(createdAtVal)
    },
    username: {
        type: String,
        required: true,
        ref: 'User'
    },
    reactions: [reactionSchema]
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

        
