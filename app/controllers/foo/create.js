const ErrorHelper = require('../../helpers/error');
const FooCreateService = require('../../services/foo/create');

module.exports = (req, res) => {
  FooCreateService(req.body)
    .then(data => res.status(200).json({ success: true, data }))
    .catch(err => ErrorHelper.response(res, err));
};
