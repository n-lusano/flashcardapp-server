const { Router } = require("express");
const Collection = require("../models").collection;
const Card = require("../models").card;

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

    const collection = await Collection.findByPk(id, { include: [Card] });

    if (collection === null) {
      return res.status(404).send();
    }
    res.status(200).send(collection);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
