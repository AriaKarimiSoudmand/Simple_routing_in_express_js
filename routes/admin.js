const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
// /admin/add-ptoduct ==> GET
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button><form>'
  );
});
// /admin/add-ptoduct ==> POST
router.post("/add-product", (req, res, next) => {
  console.log("You added: " + req.body.title);
  res.redirect("/");
});

module.exports = router;
