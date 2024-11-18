const express = require("express");
const router = express.Router();
const data = require("../data");
const List = require("../models/List");

router.get("/", async (req, res) => {
  try {
    const list = await List.find(select);
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/add", async (req, res) => {
  try {
    const list = await List.create({
      name: req.body.name,
      list: req.body.list,
    });
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.patch("/edit/:id", async (req, res) => {
  const name = parseInt(req.params["id"]);

  try {
    const list = await List.updateOne(
      { name: name },
      { $push: { list: req.body.name } }
    );
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/delete/:id", async (req, res) => {
  const name = parseInt(req.params["id"]);

  try {
    const list = await List.deleteOne({ name: name });
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
