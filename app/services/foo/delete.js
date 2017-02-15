const Model = require('../../models/foo');

const FindById = require('./findById');

const _delete = (criteria = {}) => Model.remove(criteria);

module.exports = _id => new Promise((resolve, reject) => {
  FindById(_id)
    .then(() => _delete({ _id }).then(resolve).catch(reject))
    .catch(reject);
});
