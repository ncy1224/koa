const {userFormatError, userHasExsistedError, userRegisterError, userDoesNotExist, userPasswordError, userLoginError} = require("../constant/types")
const userService = require("../services/user.service")
const bcrypt = require("bcryptjs");
const { getUserInfo } = require("../services/user.service");
const userValidator = async (ctx, next) => {
    const {username, password} = ctx.request.body;
    if(!username || !password){
        ctx.app.emit("error", userFormatError, ctx);
        return ;
    }
    await next();
}
const userVerify = async (ctx, next) => {
    try {
        const {username} = ctx.request.body;
        if(await userService.getUserInfo({username})){
            ctx.app.emit("error", userHasExsistedError, ctx);
            return;
        }
    } catch (error) {
        console.log(error);
        return ctx.app.emit("error", userRegisterError, ctx);
    }
    
    await next();
}
const cryptPassword = async (ctx, next)=> {
    const {password} = ctx.request.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    ctx.request.body.password = hash;

    await next();
}
const loginVerify = async(ctx, next)=> {
    try {
        const {username, password} = ctx.request.body;
        const user = await getUserInfo({username});
        if(!user){
            return ctx.app.emit("error",userDoesNotExist ,ctx);
        }
        if(!bcrypt.compareSync(password, user.password)){
            return ctx.app.emit("error", userPasswordError, ctx);
        }
        ctx.state.userInfo = user;
    } catch (error) {
        console.log(error);
        return ctx.app.emit("error", userLoginError, ctx);
    }
    await next();
}
module.exports={
    userValidator,
    userVerify,
    cryptPassword,
    loginVerify 
}