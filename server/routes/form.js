const express = require("express");
const router = express.Router();
const genericForm = require("../models/forms/generic");
const meeting = require("../models/meeting");

router.post("/newgenericform", (req, res) => {
  const {
    name,
    email,
    professional_student,
    related_Org,
    connection_type,
    newsletter,
  } = req.query;

  const genericData = {
    Name: name,
    Email: email,
    Professional_student: professional_student,
    Related_Org: related_Org,
    Connection_Type: connection_type,
    Newsletter: newsletter,
  };
  let newForm = null;

  if (connection_Type === "Developer") {
    const {
      project_repo_link,
      experience,
      developer_type,
      stack,
      why_build,
      want_build_type,
      been_to_game_jam,
      game_jam_details,
      reason_no_game_jam,
      classification,
    } = req.query;
    newForm = new genericForm(
      Object.assign({}, genericData, {
        Project_Repo_Link: project_repo_link,
        Experience: experience,
        Developer_Type: developer_type,
        Stack: stack,
        Why_Build: why_build,
        Want_Build_Type: want_build_type,
        Been_To_Game_Jam: been_to_game_jam,
        Game_Jam_details: game_jam_details,
        Reason_no_game_jam: reason_no_game_jam,
        Classification: classification,
      }),
    );
  } else if (connection_Type === "Investor") {
    const { institution_name, investor_type, deck_req } = req.query;
    newForm = new genericForm(
      Object.assign({}, genericData, {
        Investor_Type: investor_type,
        //only for investor type Grant or VC
        Institution_Name: institution_name,
        Deck_Req: deck_req,
      }),
    );
  } else if (connection_Type === "Partner") {
    const { partner_type, intended_partnership } = req.query;
    newForm = new genericForm(
      Object.assign({}, genericData, {
        Partner_Type: partner_type,
        Intended_Partnership: intended_partnership,
      }),
    );
  } else if (connection_Type === "Player") {
    const {
      account_name,
      fav_game_type,
      devices,
      reasons_for_play,
    } = req.query;
    newForm = new genericForm(
      Object.assign({}, genericData, {
        Account_Name: account_name,
        Fav_Game_Type: fav_game_type,
        Devices: devices,
        Reasons_for_play: reasons_for_play,
      }),
    );
  } else {
    console.error("error, type of connection invalid", e);
    res.sendStatus(500).json("error, type of connection invalid");
  }
  let formID = null;
  newForm.save(e, doc => {
    if (e) {
      console.error("error while saving form to database", e);
      res.sendStatus(500);
    } else {
      res.json("Submission success!");
    }
    formID = doc.id;
  });

  //Meeting schedule if there is one
  if ("meeting_type" in req.query) {
    const { meeting_type } = req.query;
    let newMeeting = null;
    if (meeting_type === "Call") {
      const { meeting_date } = req.query;
      newMeeting = new meeting({
        Name: name,
        Email: email,
        Id: formID,
        Meeting_Type: meeting_type,
        Meeting_Date: meeting_date,
      });
    } else if (meeting_type === "In-Person") {
      const { meeting_date, meeting_location } = req.query;
      newMeeting = new meeting({
        Name: name,
        Email: email,
        Id: formID,
        Meeting_Type: meeting_type,
        Meeting_Date: meeting_date,
        Meeting_Location: meeting_location,
      });
    } else {
      console.error("error, meeting type invalid", e);
      res.sendStatus(500).json("error, type of connection invalid");
    }
    newMeeting.save(e => {
      if (e) {
        console.error("error while saving meeting to database", e);
        res.sendStatus(500);
      } else {
        res.json("Submission success!");
      }
    });
  }
});

module.exports = router;
