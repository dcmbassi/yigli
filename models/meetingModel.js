import mongoose from "mongoose";

const meetingModel = mongoose.Schema({
    date: {
        type: Date
    },
    location: {
        type: String
    },
    hosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member'
    }],
    latecomers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member'
    }],
    absentees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member'
    }],
    agenda: [{
        item: {
            type: String
        },
        resolution: {
            type: String
        },
    }]
}, {
    timestamps: true
})

export default mongoose.models.Meeting || mongoose.model('Meeting', meetingModel)