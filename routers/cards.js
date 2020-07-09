const { Router } = require("express");
const Card = require("../models").card;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const cards = await Card.findAll({ order: [["id", "ASC"]] });
    res.send(cards);
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.dataValues["id"];
    console.log("REQ BODY", req.body);
    const { collectionId, wordEn, wordNl, wordIt } = req.body;

    const card = await Card.create({
      userId: userId,
      wordEn,
      wordNl,
      wordIt,
      collectionId: collectionId,
    });
    res.send(card);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
