const { Router } = require("express");
const Ninja = require("./models/ninja");

const router = Router();

router.get("/ninjas", (req, res) => {
  return res.send({
    type: "GET",
  });
});

router.post("/ninja", (req, res) => {
  Ninja.create(req.body).then((ninja) => {
    return res.send(ninja);
  });
});

router.put("/ninja/:id", (req, res) => {
  return res.send({
    type: "PUT",
  });
});

router.delete("/ninja/:id", (req, res) => {
  return res.send({
    type: "DELETE",
  });
});

module.exports = router;
