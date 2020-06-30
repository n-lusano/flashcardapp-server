const { Router } = require("express");
const Session = require("../models").session;
const ScoredCard = require("../models").scoredCard;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.dataValues["id"];
    console.log("USER ID", userId);
    const sessions = await Session.findAll({
      include: [ScoredCard],
      where: { userId: userId },
    });

    res.status(200).send(sessions);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
