const ErrorHelper = require('../../helpers/error');
const FooDeleteService = require('../../services/foo/delete');

module.exports = (req, res) => {
  FooDeleteService(req.params.id)
    .then(() => res.status(200).json({ success: true }))
    .catch(err => ErrorHelper.response(res, err));
};
