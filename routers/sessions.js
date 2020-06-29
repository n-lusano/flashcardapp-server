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

// router.get("/", authMiddleware, async (req, res, next) => {
//   try {
//     const id = req.user.dataValues["id"];
//     console.log("ID", id);
//     const user = await User.findByPk(id, {
//       include: [
//         {
//           model: Collection,
//           include: [Card],
//         },
//       ],
//     });

//     delete user.dataValues["password"];
//     res.status(200).send(user);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
