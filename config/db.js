import {Sequelize} from "sequelize";

const db = new Sequelize('gam_db','aldi','aldi',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;