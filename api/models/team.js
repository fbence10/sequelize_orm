const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class Team extends Model {};

    Team.init
    (
        {
            Id:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            countOfClubMembers:
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
            
        },

        {
            sequelize,
            modelName: "Team",
            timestamps: false,
        }
    )

    return Team;
}