const router = require("express").Router();

// Matches with "/api/books"
router.route("/")
  .get((req, res, next) => {
    res.send("To be completed");
  });

module.exports = router;
