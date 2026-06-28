const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    guestName: {
      type: String,
      required: true,
      trim: true,
    },

    review: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 5,
    },

    sentiment: {
      type: String,
      enum: ["Positive", "Negative", "Neutral"],
      default: "Neutral",
    },

    theme: {
      type: String,
      default: "General",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);