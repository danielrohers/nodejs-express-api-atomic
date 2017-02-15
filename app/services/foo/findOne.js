const Model = require('../../models/foo');

module.exports = (criteria = {}) => new Promise((resolve, reject) => {
  Model
    .findOne(criteria)
    .then((data) => {
      if (!data) return reject({ success: false, message: 'Not found', status: 404 });
      resolve(data);
    })
    .catch(reject);
});
