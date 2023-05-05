import pg from "pg";
import { Sequelize } from "sequelize";

const db = new Sequelize(
  "yrqwfkme",
  "yrqwfkme",
  "gZfh9u0iYXS4RaCPzFGsWMkibPc06vue",
  {
    host: "rosie.db.elephantsql.com",
    dialect: "postgres",
    dialectModule: pg,
    port: 5432,
  }
);

export default db;
