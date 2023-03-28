// use express.Router() class and load it with controllers
const express = require("express")
const fruit = require("./fruit")
const err = require("./error")
const router =  express.Router()

router.use(fruit)
router.use(err)
module.exports = router;



