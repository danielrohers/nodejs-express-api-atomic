const ErrorHelper = require('../../helpers/error');
const FooUpdateService = require('../../services/foo/update');

module.exports = (req, res) => {
  FooUpdateService(req.params.id, req.body)
    .then(() => res.status(200).json({ success: true }))
    .catch(err => ErrorHelper.response(res, err));
};
