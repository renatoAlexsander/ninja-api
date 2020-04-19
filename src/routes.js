const { Router } = require("express");

const router = Router();

router.get("/ninjas", (req, res) => {
  return res.send({
    type: "GET",
  });
});

router.post("/ninja", (req, res) => {
  return res.send({
    type: "POST",
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
