const Model = require('../../models/foo');

const FindById = require('./findById');

const _update = (criteria = {}, body) => Model.update(criteria, { $set: body });

module.exports = (_id, body) => new Promise((resolve, reject) => {
  FindById(_id)
    .then(() => _update({ _id }, body).then(resolve).catch(reject))
    .catch(reject);
});
