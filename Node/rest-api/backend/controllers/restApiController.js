import asyncHandler from "express-async-handler";
import Contact from "../models/restApiModel";

export const addNewContact = asyncHandler(async(req, res) => {
    const contact = new Contact(req.body);

    const newContact = await contact.save();
    
    res.status(201).json(newContact);
});

export const getContacts = asyncHandler(async(req, res) => {
    
    const contacts = await Contact.find({});
    
    
    res.json(contacts);
    
    
});

export const getContactById = asyncHandler(async(req, res) => {

const contact = await Contact.findById(req.params.id);

if(contact) {
    res.json(contact);
} else {
    res.status(404);
    throw new Error("Contact not found");
}

});

export const updateContact = asyncHandler(async(req, res) => {

const contact = await Contact.findOneAndUpdate(
                        { _id: req.params.id },
                         req.body,
                         { new: true, useFindAndModify: false }
                    );

if(contact) {
res.json(contact);
} else {
res.status(404);
throw new Error("Contact not found");
}

});