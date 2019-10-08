const router = require("express").Router();
const { add, get, remove, update } = require("../controllers/accounts.js");

router.get("/", get);
router.post("/", add);
router.put("/", update);
router.delete("/", remove);

module.exports = router;
