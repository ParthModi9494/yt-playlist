const express = require("express");
const router = express.Router();

const playlistController = require("../controllers/playlist");
router.post("/playlist", playlistController.getPlaylist);

router.get("/", (req, res, next) => {
  res.render("form", { playlistDetails: null, error: null });
});

module.exports = router;
