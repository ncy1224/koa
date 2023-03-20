const Router = require("koa-router")
const {register, login, changePassword} = require("../controller/user.controller")
const { auth } = require("../middleware/auth.middleware")
const {userValidator,userVerify,cryptPassword,loginVerify} = require("../middleware/user.middleware")

const userRouter = new Router({prefix: "/users"})

userRouter.post("/register", userValidator, userVerify,cryptPassword, register)
userRouter.post("/login", loginVerify, login)
userRouter.patch("/", auth, cryptPassword, changePassword)

module.exports = userRouter