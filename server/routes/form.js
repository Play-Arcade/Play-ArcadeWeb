const express = require("express");
const router = express.Router();
const genericForm = require("../models/generic");
const devForm = require("../models/dev");
const investorForm = require("../models/investor");
const partnerForm = require("../models/partner");
const playerForm = require("../models/player");
const newsletterForm = require("../models/newsletter");
const crowdfundForm = require("../models/crowdfund");

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

  save(newForm);
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

  save(newForm);
});

router.post("/newcrowdfundform", (req, res) => {
  const form = req.body;
  const newForm = new crowdfundForm({
    Name: form.Name,
    Email: form.Email,
  });
});

router.post("/newinvesterform", (req, res) => {
  const form = req.body;

  const newForm = new investerForm({
    Name: form.Name,
    Email: form.Email,
    Professional_student: form.Professional_student,
    Related_Org: form.Related_Org,
    Investor_Type: form.Investor_Type,
    Institution_Name: form.Institution_Name,
    Call_Date: form.Call_Date,
    Call_Time: form.Call_Time,
    Deck_Req: form.Deck_Req,
  });

  save(newForm);
});

router.post("/newpartnerform", (req, res) => {
  const form = req.body;

  const newForm = new partnerForm({
    Name: form.Name,
    Email: form.Email,
    Professional_student: form.Professional_student,
    Related_Org: form.Related_Org,
    Partner_Type: form.Partner_Type,
    Intended_Partnership: form.Intended_Partnership,
    InPerson: form.InPerson,
    OnCall: form.OnCall,
    Date: form.Date,
    Time: form.Time,
  });

  save(newForm);
});

router.post("/newnewsletterform", (req, res) => {
  const form = req.body;

  const newForm = new newsletterForm({
    Name: form.Name,
    Email: form.Email,
    Professional_student: form.Professional_student,
    Related_Org: form.Related_Org,
  });

  save(newForm);
});

router.post("/newplayerform", (req, res) => {
  const form = req.body;

  const newForm = new scheduleForm({
    Name: form.Name,
    Email: form.Email,
    Professional_student: form.Professional_student,
    Related_Org: form.Related_Org,
    Account_Name: form.Account_Name,
    Fav_Game_Type: form.Fav_Game_Type,
    Devices: form.Devices,
    Reason_for_play: form.Reason_for_play,
  });

  save(newForm);
});

function save(newForm) {
  newForm.save(e => {
    if (e) {
      console.error("error while saving form to database", e);
      res.sendStatus(500);
    } else {
      res.json("Submission success!");
    }
  });
}
module.exports = router;
