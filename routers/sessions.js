const { Router } = require("express");
const Session = require("../models").session;
const ScoredCard = require("../models").scoredCard;
const authMiddleware = require("../auth/middleware");
const { sequelize } = require("sequelize");

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

module.exports = router;
