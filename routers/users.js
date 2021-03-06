const { Router } = require("express");
const User = require("../models").user;
const Collection = require("../models").collection;
const Card = require("../models").card;
const Session = require("../models").session;
const ScoredCard = require("../models").scoredCard;

const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const id = req.user.dataValues["id"];
    const user = await User.findByPk(id, {
      include: [
        {
          model: Collection,
          include: [Card],
        },
        {
          model: Session,
          include: [ScoredCard],
        },
      ],
    });

    delete user.dataValues["password"];
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
