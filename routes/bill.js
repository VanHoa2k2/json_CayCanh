const billController = require('../controllers/billController')

const billRouter = require('express').Router()

// ADD PRODUCT
billRouter.post("/", billController.addBill)

// GET ALL PRODUCT
billRouter.get("/", billController.getAllBill)

// UPDATE A PRODUCT
billRouter.put("/:id", billController.updateBill)

// DELETE PRODUCT
billRouter.delete("/:id", billController.deleteBill)

module.exports = billRouter