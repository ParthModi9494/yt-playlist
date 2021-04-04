var ytpl = require("ytpl");

exports.getPlaylist = (req, res, next) => {
  const playlistId = req.body.playlistId.trim();
  console.log("playlistId", playlistId);
  ytpl(playlistId)
    .then((data) => {
      res.render("form", { playlistDetails: data.items, error: null });
    })
    .catch((err) => {
      console.log(err.message);
      res.render("form", { playlistDetails: null, error: err });
    });
};
