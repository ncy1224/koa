const {userFormatError, userHasExsistedError, userRegisterError} = require("../constant/types")
const userService = require("../services/user.service")
module.exports={
    userValidator: async (ctx, next) => {
        const {username, password} = ctx.request.body;
        if(!username || !password){
            ctx.app.emit("error", userFormatError, ctx);
            return ;
        }
        await next();
    },
    userVerify: async (ctx, next) => {
        try {
            const {username} = ctx.request.body;
            if(await userService.getUserInfo({username})){
                ctx.app.emit("error", userHasExsistedError, ctx);
                return;
            }
        } catch (error) {
            console.log(error);
            ctx.app.emit("error", userRegisterError, ctx);
        }
        
        await next();
    },
}