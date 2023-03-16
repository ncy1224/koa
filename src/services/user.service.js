const User = require("../model/user.model")
class UserService{
    async createUser(username, password){
        const res = await User.create({username,password})
        return res.dataValues;
    }
    async getUserInfo(whereOpt){
        // let whereOpt = {}
        const res = await User.findOne({
            attributes:["id","username","password", "isadmin"],
            where:whereOpt
        })
        return res ? res.dataValues : null;
    }
}

module.exports= new UserService();