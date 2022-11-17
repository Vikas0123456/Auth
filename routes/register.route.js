const express= require('express');
const route = express.Router()

const {postdata,postsign} = require("../controller/register.controller")

route.post("/register",postdata)
route.post("/login",postsign)

module.exports= route