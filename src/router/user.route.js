const Router = require("koa-router")
const {register, login} = require("../controller/user.controller")

const userRouter = new Router({prefix: "/users"})

userRouter.get("/", (ctx, next)=> {
    ctx.body="user"
})
userRouter.get("/info", (ctx, next)=> {
    ctx.body="user info"
})
userRouter.post("/register", register)
userRouter.post("/login", login)

module.exports = userRouter