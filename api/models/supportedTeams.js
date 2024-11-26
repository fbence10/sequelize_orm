const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) =>
    {
        class SupportedTeams extends Model {};
    
        SupportedTeams.init
        (
            {
                FanId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'Fan',
                        key: 'Id',
                    },
                    primaryKey: true,
                },
                TeamId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'Team',
                        key: 'Id',
                    },
                    primaryKey: true,
                },
                
            },
    
            {
                sequelize,
                modelName: "SupportedTeams",
                timestamps: false,
            }
        )
    
        return SupportedTeams;
}