const express = require("express");
const ytpl = require("ytpl");
const app = express();
const appRoutes = require("./routes/appRoutes");
const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(appRoutes);

app.listen(port, () => {
  console.log("server started and listening at port " + port);
});
