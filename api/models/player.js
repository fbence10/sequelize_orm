const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class Player extends Model {};

    Player.init
    (
        {
            idNumber:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            goalCount:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            Name:
            {
                type: DataTypes.STRING(60),
                allowNull: false,
            },

            Sex:
            {
                type: DataTypes.ENUM('male','female','huan miguel escanor galdiator warrior'),
                allowNull: false,
                defaultValue: 'huan miguel escanor galdiator warrior'
            },

            bornDate:
            {
                type: DataTypes.STRING(80),
                allowNull: false,
                defaultValue: 0,
            },

            Height: 
            {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

            Weight: 
            {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

            Age: 
            {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
            
        },

        {
            sequelize,
            modelName: "Player",
            timestamps: false,
        }
    )

    return Player;
}