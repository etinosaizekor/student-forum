const {tryCatchWrapper} = require("../utils/withTryCatch");

const create = tryCatchWrapper(async(Model, body) => {
    const newInstance = await Model.bulkCreate(body);
    return JSON.stringify(newInstance)
})

const getAll = tryCatchWrapper(async(Model) => {
  const result = await Model.findAll();
  return JSON.stringify(result)
})

const search = tryCatchWrapper(async (Model, criteria) => {
  const result = await Model.findAll({where: criteria});
  return JSON.stringify(result)
})

const update = tryCatchWrapper(async(Model, instanceIdentifier, instanceNewDetail) => {
    const result = await Model.update(instanceNewDetail, {
      where: instanceIdentifier
    })
    return result
});

const deleteInstance = tryCatchWrapper(async(Model, criteria) => {
    const result = Model.destroy({where: criteria});
    return result
})

 

module.exports = {
    create,
    getAll,
    search,
    deleteInstance,
    update
}