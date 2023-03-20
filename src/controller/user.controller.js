const userService = require("../services/user.service")
const {userRegisterError, userLoginError} = require("../constant/types");
const { getUserInfo, updatePassword } = require("../services/user.service");
const jwt = require("jsonwebtoken");
// const {JWT_SECRET} = require("../config/config.default")
class UserController{
    async register(ctx, next){
        try{
            const {username, password} = ctx.request.body;
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
        try {
            const {password, ...res} = ctx.state.userInfo;
            ctx.body = {
                code: 0,
                message: "用户登录成功",
                data: {
                    token: jwt.sign(res,process.env.JWT_SECRET,{expiresIn: "1d"})
                }
            }
        } catch (error) {
            console.log(error);
            ctx.app.commit("error", userLoginError, ctx)
        }
    }
    async changePassword(ctx, next){
        try {
            const {id} = ctx.state.userInfo;
            const {password} = ctx.request.body;
            if(await updatePassword({password},{id})){
                ctx.body={
                    code:0,
                    message:"密码修改成功",
                    data: ""
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports= new UserController()