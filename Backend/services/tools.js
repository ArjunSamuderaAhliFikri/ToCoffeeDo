function getDataById(data, id) {
  const findDataById = data.find((data) => data.title === id);
  console.log("is halo!");
  return findDataById;
}

module.exports = { getDataById };
