const {Sequelize} = require("sequelize")

const seq = new Sequelize("zdsc","root","123456",{
    host: "localhost",
    dialect: "mysql"
})


// seq.authenticate().then(()=>{
//     console.log("数据库连接成功");
// }).catch(err=>{
//     console.log(err);
// })
module.exports=seq;