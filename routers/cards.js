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

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;

    if (isNaN(parseInt(id))) {
      return res.status(400).send();
    }

    const card = await Card.findByPk(id);

    if (card === null) {
      return res.status(404).send();
    }
    card.destroy();
    res.status(200).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
