import mongoose from "mongoose";

const memberModel = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a last name']
    },
    email: {
        type: String,
        required: [true, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    address: {
        type: String
    },
    generation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Generation'
    },
    parents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member'
    }],
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member'
    }],
    spouse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member'
    },
}, {
    timestamps: true
})

export default mongoose.models.Member || mongoose.model('Member', memberModel)