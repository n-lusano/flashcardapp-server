const { Router } = require("express");
const Card = require("../models").card;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const cards = await Card.findAll({ order: [["id", "ASC"]] });
    res.send(cards);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
