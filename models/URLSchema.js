const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const urlSchema = mongoose.Schema({
  original_url: {
    type: String,
    required: true,
    unique: true,
  },
  short_url: {
    type: Number,
    unique: true,
  },
});

urlSchema.plugin(AutoIncrement, { inc_field: "short_url" });

module.exports = mongoose.model("URL", urlSchema);
