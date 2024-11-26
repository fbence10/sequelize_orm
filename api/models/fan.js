const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class Fan extends Model {};

    Fan.init
    (
        {
            Id:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            Name:
            {
                type: DataTypes.STRING(60),
                allowNull: false,
            },

            Age:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            bornDate:
            {
                type: DataTypes.STRING(80),
                allowNull: false,
                defaultValue: 0,
            },

            Sex:
            {
                type: DataTypes.ENUM('male','female','huan miguel escanor galdiator warrior'),
                allowNull: false,
                defaultValue: 'huan miguel escanor galdiator warrior'
            },
            
        },

        {
            sequelize,
            modelName: "Fan",
            timestamps: false,
        }
    )

    return Fan;
}