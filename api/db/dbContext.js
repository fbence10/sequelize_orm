const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
    }
);

try {
    sequelize.authenticate();
    console.log(`Connection is now stable with db ${process.env.DB_NAME}`);
} catch (error) {
    console.log(error.message);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Team = require("../models/team")(sequelize, DataTypes);
db.Fan = require("../models/fan")(sequelize, DataTypes);
db.Player = require("../models/player")(sequelize, DataTypes);
db.Logo = require("../models/logo")(sequelize, DataTypes);
db.SupportedTeams = require("../models/supportedTeams")(sequelize, DataTypes);
db.PlayerTransfers = require("../models/playerTransfers")(sequelize, DataTypes);


require('../models/associations')(db);

db.sequelize.sync({ alter: true });

module.exports = db;