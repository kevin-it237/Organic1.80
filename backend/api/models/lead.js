const mongoose = require('mongoose');

const Comment = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    body  : String,
    link  : Date
});

const Appointment = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    body  : String,
    link  : Date
});

const leadSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: false },
    userId: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: false },
    facebook_account: { type: String, required: false },
    instagram_account: { type: String, required: false },
    tel: { type: String, required: false },
    website: { type: String, required: false },
    status: { type: String, required: false, default: "Lead" },
    qualification_status: { type: String, required: false, default: "Not Qualified" },
    observation: { type: String, required: false },
    tags: { type: String, required: false },
    engagement_rate: { type: Number, required: false, default: 0 },
    likes: { type: Number, required: false, default: 0 },
    comments: [Comment],
    appointments: [Appointment],
    chat_links: { type: Array, required: false },
    share_links: { type: Array, required: false },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: false },
})

module.exports = mongoose.model('Lead', leadSchema);