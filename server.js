require("dotenv").config()
const db = require("./api/db/dbContext")
const app = require("./app")

db.sequelize.sync({ alter: true }).then(() =>{
    app.listen(process.env.PORT, () =>{
        console.log(`app listening on port ${process.env.PORT}`)
    })
})
