const { Router } = require("express");
const Ninja = require("./models/ninja");

const router = Router();

router.get("/ninjas", async (req, res) => {
  const ninjas = await Ninja.find({});

  return res.send(ninjas);
});

router.post("/ninja", async (req, res) => {
  try {
    const ninja = await Ninja.create(req.body);

    return res.send(ninja);
  } catch (error) {
    res.status(500).send({
      error: error._message,
    });
  }
});

router.put("/ninja/:id", async (req, res) => {
  const { id } = req.params;

  await Ninja.findByIdAndUpdate(
    {
      _id: id,
    },
    req.body
  );

  const ninjaUpdated = await Ninja.findOne({
    _id: id,
  });

  return res.send(ninjaUpdated);
});

router.delete("/ninja/:id", async (req, res) => {
  const { id } = req.params;

  await Ninja.findByIdAndRemove({
    _id: id,
  });

  return res.send({
    message: "Ninja was removed.",
  });
});

module.exports = router;
