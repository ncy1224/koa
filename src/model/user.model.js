const {DataTypes} = require("sequelize")

const seq = require("../db/seq")

const User = seq.define("zd_user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: 'username'
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: 'password'
    },
    isadmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'isadmin'
    }
})

// User.sync()

module.exports = User;