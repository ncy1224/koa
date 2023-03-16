const userService = require("../services/user.service")
const {userRegisterError} = require("../constant/types")
class UserController{
    async register(ctx, next){
        try{
            const {username, password} = ctx.request.body;
            console.log(aaa);
            const res = await userService.createUser(username, password);
            ctx.body = {
                code:0,
                message: "register success",
                data: {
                    id: res.id,
                    username: res.username
                }
            }
        }catch(err){
            ctx.app.emit("error", userRegisterError, ctx)
        }
    }
    async login(ctx, next){
        console.log(ctx.request.body);
        ctx.body="登录成功"
    }
}

module.exports= new UserController()