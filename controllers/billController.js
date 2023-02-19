const { bill } = require('../models/model')

const billController = {
    //ADD PRODUCT
    addBill: async(req, res)=> {
        try {
            const newBill = new bill(req.body)
            const savedBill = await newBill.save()
            res.status(200).json(savedBill)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    
    //GET PRODUCT
    getAllBill: async(req, res)=> {
        try {
            const bills = await bill.find()
            res.status(200).json(bills)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //UPDATE PRODUCT
    updateBill: async(req, res)=> {
        try {
            const bill = await bill.findById(req.params.id)
            await bill.updateOne({$set: req.body})
            res.status(200).json("Updates bill successfully!")
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //DELETE PRODUCT
    deleteBill: async(req, res)=> {
        try {
            await bill.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete bill successfully!")
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = billController