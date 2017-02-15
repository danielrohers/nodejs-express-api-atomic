const Model = require('../../models/foo');

module.exports = (body = {}) => {
  const model = new Model(body);
  model.name = body.name;
  return model.save();
};
