const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema(
  {
    title: String,
    type: {
      type: String,
      enum: ["youtube", "spotify", "podcast", "book", "tedtalk"],
    },
    url: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resources", ResourceSchema);
