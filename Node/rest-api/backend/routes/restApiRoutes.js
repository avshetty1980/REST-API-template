import express from "express";

const router = express.Router();

import {
    addNewContact,
    getContacts,
    getContactById,
    updateContact,
} from "../controllers/restApiController";

router
.route("/")
.post(addNewContact)
.get(getContacts);

router
.route("/:id")
.get(getContactById)
.put(updateContact);

export default router;