const mongoose = require(`mongoose`);

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: `Question`
        }
    ],
}, {
    // Keep the created and updated time
    timestamps: true
});

module.exports = mongoose.model(`Feedback`, feedbackSchema);
