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

module.exports = router;
