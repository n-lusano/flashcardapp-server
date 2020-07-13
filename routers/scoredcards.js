const { Router } = require("express");
const Session = require("../models").session;
const ScoredCard = require("../models").scoredCard;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const scoredCards = await ScoredCard.findAll({
      order: [["id", "ASC"]],
    });

    res.status(200).send(scoredCards);
  } catch (error) {
    next(error);
  }
});

router.patch(
  "/collections/:collectionId/:cardId",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { collectionId, cardId } = req.params;
      const { scoredCorrect } = req.body;
      const userId = req.user.dataValues["id"];

      // get the User's latest Session for this Collection
      const session = await Session.findOne({
        // include: [ScoredCard],
        where: { userId: userId, collectionId: collectionId },
        order: [["id", "DESC"]],
      });

      const scoredCard = await ScoredCard.create({
        cardId: cardId,
        sessionId: session.id,
        scoredCorrect: scoredCorrect,
        // order: [["id", "DESC"]],
      });

      res.status(200).send(scoredCard);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
