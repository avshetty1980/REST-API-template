import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
firstName: {
    type: String,
    required: [true, "Please enter a firstName"]
},
lastName: {
    type: String,
    required: [true, "Please enter a lastName"]
},
email: {
    type: String,
    unique: true

},
company: {
    type: String
},
phoneNumber: {
    type: Number
},
created_date: {
    type: Date,
    default: Date.now
}

}, {
    timestamps: true
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;