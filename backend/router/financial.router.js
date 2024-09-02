const financialController = require("../controllers/financial.controller")
const existss = require("express");
const router = existss.Router();

//create a new fianncial
router.post("/", financialController.create);

//Retrieve all financial records
router.get("/", financialController.findAll);

//Retrieve a financial record with id
router.get("/:id", financialController.findOne);

//Retrieve all financial records with id
router.put("/:id",financialController.update);

//Retrieve a financial records By UserId
router.get("/user/:userId", financialController.findAllByUserId);

//Delete a financial records with id
router.delete("/:id", financialController.delete);

module.exports = router;