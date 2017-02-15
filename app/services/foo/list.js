const Model = require('../../models/foo');

module.exports = (query = {}) => {
  const { limit, skip, sort } = query;
  return Model
    .find({})
    .limit(limit)
    .skip(skip)
    .sort(sort);
};
