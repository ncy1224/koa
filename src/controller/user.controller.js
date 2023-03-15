class UserController{
    async register(ctx, next){
        ctx.body="注册成功"
    }
    async login(ctx, next){
        console.log(ctx);
        ctx.body="登录成功"
    }
}

module.exports= new UserController()