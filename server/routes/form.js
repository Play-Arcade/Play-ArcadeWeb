const express = require("express");
const router = express.Router();
const genericForm = require("../models/genericForm");

router.post("/newgenericform", (req, res) => {
    const form = req.body;

    const newForm = new genericForm({
        Name: form.Name,
        Email: form.Email,
        Professional_student: form.Professional_student,
        Related_Org: form.Related_Org,
        Is_Developer: form.Is_Developer,
        Is_Investor: form.Is_Investor,
        Is_Partner: form.Is_Partner,
        Is_Player: form.Is_Player,
        Newsletter: form.Newsletter,
    });

    newForm.save(e => {
        if (e) {
            console.error("error while saving form to database", e);
            res.sendStatus(500);
        } else {
            res.json("Submission Success!");
        }
    });
});

module.exports = router;
