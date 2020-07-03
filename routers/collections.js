const { Router } = require("express");
const Collection = require("../models").collection;
const Card = require("../models").card;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const collections = await Collection.findAll({ include: [Card] });
    res.send(collections);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (isNaN(parseInt(id))) {
      return res.status(400).send();
    }

    const collection = await Collection.findByPk(id, {
      include: [Card],
      order: [["id", "ASC"]],
    });

    if (collection === null) {
      return res.status(404).send();
    }
    res.status(200).send(collection);
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.dataValues["id"];
    const { name } = req.body;

    const collection = await Collection.create({ userId, name });
    res.send(collection);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
