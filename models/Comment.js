//Install dependencies
const { Sequelize, Model, Dataypes } = require('sequelize');
const sequelize = require('..config/config');

//Create comment model
class Comment extends Model { }

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
);

module.exports = Comment;