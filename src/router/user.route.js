const Router = require("koa-router")

const userRouter = new Router({prefix: "/user"})

userRouter.get("/", (ctx, next)=> {
    ctx.body="user"
})
userRouter.get("/info", (ctx, next)=> {
    ctx.body="user info"
})

module.exports = userRouter