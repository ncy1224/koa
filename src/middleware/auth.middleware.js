const jwt = require("jsonwebtoken");
const { TokenExpiredError, JsonWebTokenError } = require("../constant/types");
const auth = async (ctx, next) => {
    try {
        let {authorization} = ctx.request.header;
        authorization = authorization.replace("Bearer ", "")
        const userInfo = jwt.verify(authorization, process.env.JWT_SECRET)
        ctx.state.userInfo = userInfo
    } catch (error) {
        console.log(error.message);
        switch(error.name){
            case "TokenExpiredError":
                ctx.app.emit("error", TokenExpiredError, ctx);
                break;
            case "JsonWebTokenError":
                ctx.app.emit("error", JsonWebTokenError, ctx);
                break;
            default:
                ctx.app.emit("error", JsonWebTokenError, ctx);
        }
        return ;
    }
    await next();
}

module.exports = {auth}