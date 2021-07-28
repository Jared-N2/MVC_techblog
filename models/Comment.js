const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allownull: false,
        }

    },
    {
        sequelize
    }

)
module.exports = Comment;