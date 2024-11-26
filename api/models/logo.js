const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class Logo extends Model {};

    Logo.init
    (
        {
            Figure:
            {
                type: DataTypes.STRING(60),
                primaryKey: true,
                allowNull: false,
            },

            mainColor:
            {
                type: DataTypes.STRING(60),
                primaryKey: true,
                allowNull: false,
            },

            creatorName:
            {
                type: DataTypes.STRING(60),
                allowNull: false,
            },

            creationDate:
            {
                type: DataTypes.STRING(80),
                allowNull: false,
            },
            TeamId: 
            {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Team',
                    key: 'Id',
                },
                primaryKey: true,
                allowNull: false,
                unique: true,
            },
            
        },

        {
            sequelize,
            modelName: "Logo",
            timestamps: false,
        }
    )

    return Logo;
}