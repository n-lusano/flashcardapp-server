const { Router } = require("express");
const Session = require("../models").session;
const ScoredCard = require("../models").scoredCard;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.dataValues["id"];
    const sessions = await Session.findAll({
      include: [ScoredCard],
      where: { userId: userId },
      order: [["id", "ASC"]],
    });

    res.status(200).send(sessions);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/collections/:collectionId",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { collectionId } = req.params;
      const userId = req.user.dataValues["id"];
      const finished = false;

      const session = await Session.create({ userId, collectionId, finished });

      res.send(session);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/collections/:collectionId",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { collectionId } = req.params;
      const userId = req.user.dataValues["id"];
      const { finished } = req.body;

      const session = await Session.findOne({
        where: { userId: userId },
        order: [["id", "DESC"]],
      });

      await session.update({ finished });

      res.status(200).send(session);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/stats/:collectionId", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.dataValues["id"];
    const { collectionId } = req.params;
    const sessions = await Session.findAll({
      include: [ScoredCard],
      where: {
        userId: userId,
        collectionId: collectionId,
      },
      order: [["id", "ASC"]],
    });

    const nonEmptySessions = sessions.filter(
      (session) => session.scoredCards.length !== 0
    );

    res.status(200).send(nonEmptySessions);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
