module.exports = (db) => {
    db.Fan.belongsToMany(db.Team, { through: db.SupportedTeams, foreignKey: 'FanId', 'otherKey': 'TeamId'});
    db.Team.belongsToMany(db.Fan, { through: db.SupportedTeams, foreignKey: 'TeamId', 'otherKey': 'FanId'});

    db.Player.belongsToMany(db.Team, { through: db.PlayerTransfers, foreignKey: 'PlayerId', 'otherKey': 'TeamId'});
    db.Team.belongsToMany(db.Player, { through: db.PlayerTransfers, foreignKey: 'TeamId', 'otherKey': 'PlayerId'},);
}
