const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const router = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const routerName = file.slice(0, -9);
    const routerModule = require(path.join(__dirname, file));
    router[routerName] = routerModule;
  });

module.exports = router;
