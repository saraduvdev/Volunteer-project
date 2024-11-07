const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const helpRequestSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    problemDescription: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['waiting', 'inProgress', 'completed'],
        default: 'waiting'
    },
    priorityCode: {
        type: String,
        enum: ['low', 'medium', 'high', 'critical'],
        default: 'medium'
    },
    volunteer: {
        type: Schema.Types.ObjectId,
        ref: 'Volunteer'
    }
});

const HelpRequest = mongoose.model('HelpRequest', helpRequestSchema);

module.exports = HelpRequest;
