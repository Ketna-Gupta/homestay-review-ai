const express = require("express");
const router = express.Router();

const {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews
} = require("../controllers/reviewController");


router.get("/search", searchReviews);


router.get("/", getAllReviews);
router.post("/", createReview);


router.get("/:id", getReviewById);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;