const { Router } = require("express");
const User = require("../models").user;
const Collection = require("../models").collection;
const Card = require("../models").card;

const router = new Router();

// router.get("/", async (req, res, next) => {
//   try {
//     const users = await User.findAll(); //{ include: [Collection] } ???
//     res.send(users);
//   } catch (error) {
//     next(error);
//   }
// });

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (isNaN(parseInt(id))) {
      return res.status(400).send();
    }

    const user = await User.findByPk(id, { include: [Card] });

    if (user === null) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
