import mongoose from "mongoose";

const generationSchema = mongoose.Schema({
    label: {
        type: String
    },
    contributionAmount: {
        type: Number
    },
    lateFee: {
        type: Number
    },
    absenteeFee: {
        type: Number
    },
}, {
    timestamps: true
})

export default mongoose.model('Generation', generationSchema)