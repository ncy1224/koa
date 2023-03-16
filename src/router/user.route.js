const Router = require("koa-router")
const {register, login} = require("../controller/user.controller")
const {userValidator,userVerify} = require("../middleware/user.middleware")

const userRouter = new Router({prefix: "/users"})

userRouter.post("/register", userValidator, userVerify, register)
userRouter.post("/login", login)

module.exports = userRouter