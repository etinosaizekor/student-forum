const db = require("../models");

let arg = process.argv.slice(2)[0];

async function handleArgs() {
  if (arg === "drop") {
    console.log("DROPPING TABLES");
    // drop the table if it already exists
    db.sequelize.sync({ force: true }).then(() => {
      console.log("Dropped db.");
    });
  } else if (arg === "migrate") {
    db.sequelize
      .sync({ alter: true })
      .then(() => {
        console.log("Migration done");
      })
      .catch((err) => {
        console.log("Failed to sync db: " + err.message);
      });
  } else if (arg === "seed") {
    // seeder
    await require("../seeders");
  } else {
    throw new Error("Unknown argument");
  }
}

handleArgs();
