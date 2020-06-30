const { Router } = require("express");
const User = require("../models").user;
const Collection = require("../models").collection;
const Card = require("../models").card;
const Session = require("../models").session;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const id = req.user.dataValues["id"];
    console.log("ID", id);
    const user = await User.findByPk(id, {
      include: [
        {
          model: Collection,
          include: [Card],
        },
        Session,
      ],
    });

    delete user.dataValues["password"];
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
