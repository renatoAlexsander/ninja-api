const { Router } = require("express");
const Ninja = require("./models/ninja");

const router = Router();

router.get("/ninjas", (req, res) => {
  return res.send({
    type: "GET",
  });
});

router.post("/ninja", (req, res, next) => {
  Ninja.create(req.body)
    .then((ninja) => {
      return res.send(ninja);
    })
    .catch(next);
});

router.put("/ninja/:id", (req, res) => {
  return res.send({
    type: "PUT",
  });
});

router.delete("/ninja/:id", (req, res) => {
  const { id } = req.params;

  Ninja.findByIdAndRemove({
    _id: id,
  }).then((ninja) => {
    return res.send({
      message: "Ninja was removed.",
    });
  });
});

module.exports = router;
