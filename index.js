require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
let URL = require("./models/URLSchema");

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/shorturl", async (req, res) => {
  const url = req.body.url;
  const urlRegex = /^(http|https):\/\/[^ "]+$/;
  if (!urlRegex.test(url)) {
    return res.json({ error: "invalid url" });
  }
  let doc = new URL({
    original_url: req.body.url,
  });
  try {
    const output = await doc.save();
    console.log(output);
    res.json({
      original_url: output.original_url,
      short_url: output.short_url,
    });
  } catch {
    (err) => {
      console.log(err);
    };
  }
});

app.get("/api/shorturl/:short_url", async (req, res) => {
  try {
    const output = await URL.findOne({ short_url: req.params.short_url });
    console.log(output);
    res.redirect(output.original_url);
  } catch {
    (err) => {
      console.log(err);
    };
  }
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
