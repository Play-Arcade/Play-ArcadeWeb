const express = require("express");
const router = express.Router();
const genericForm = require("../models/generic");
const devForm = require("../models/dev");

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

router.post("/newdevform", (req, res) => {
  const form = req.body;

  const newForm = new devForm({
    Name: form.Name,
    Email: form.Email,
    Professional: form.Professional,
    Student: form.Student,
    Related_Org: form.Related_Org,
    Experience: form.Experience,
    Stack: form.Stack,
    Why_Build: form.Why_Build,
    Want_Build: form.Want_Build,
    Game_Jam: form.Game_Jam,
    Game_Jam_details: form.Game_Jam_Details,
    Reason_no_game_jam: form.Reason_no_game_jam,
    Classification: form.Classification,
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

router.post("/newscheduleform", (req, res) => {
  const form = req.body;

  const newForm = new scheduleForm({
    Name: form.Name,
    Email: form.Email,
    Professional: form.Professional,
    Student: form.Student,
    Related_Org: form.Related_Org,

    Date: form.Date,
    Location: form.Location,
    Time: form.Time,
    Type: form.Type,
  });

  newForm.save(e => {
    if (e) {
      console.error("error while saving form to database", e);
      res.sendStatus(500);
    } else {
      res.json("Submission success!");
    }
  });
});

module.exports = router;
