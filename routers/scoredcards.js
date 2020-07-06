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

      // console.log("collection ID", collectionId);
      // console.log("scoredcorrect ", scoredCorrect);
      // console.log("user id", userId);
      // Get the User's latest Session for this Collection
      const session = await Session.findOne({
        // include: [ScoredCard],
        where: { userId: userId, collectionId: collectionId },
        order: [["id", "DESC"]],
      });
      // console.log("what is session", session);
      const scoredCard = await ScoredCard.create({
        cardId: cardId,
        sessionId: session.id,
        scoredCorrect,
        // order: [["id", "DESC"]],
      });

      await scoredCard.update({ scoredCorrect: scoredCorrect });

      res.status(200).send(scoredCard);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
