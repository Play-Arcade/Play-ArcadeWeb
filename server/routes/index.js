const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("this is an API route");
});

/* SSL Certificate Verification */
router.get(
  "/.well-known/acme-challenge/NNgwaw4jHMtlQFHz3axA4ePNzcQfsXuI9DXcV3o0-bI",
  (req, res) => {
    res.send(
      "NNgwaw4jHMtlQFHz3axA4ePNzcQfsXuI9DXcV3o0-bI.0H8-HTmq7xS-B4aoSNGKWV1Wf_aoDhilPkbXcn-AB3I",
    );
  },
);

module.exports = router;
