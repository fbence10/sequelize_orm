const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) =>
    {
        class PlayerTransfers extends Model {};
    
        PlayerTransfers.init
        (
            {
                PlayerId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'Player',
                        key: 'idNumber',
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
                TransgerDate: {
                    type: DataTypes.STRING(80),
                    allowNull: false,
                    defaultValue: DataTypes.NOW,
                },
                
            },
    
            {
                sequelize,
                modelName: "PlayerTransfers",
                timestamps: false,
            }
        )
    
        return PlayerTransfers;
}