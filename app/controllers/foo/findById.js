const ErrorHelper = require('../../helpers/error');
const FooFindByIdService = require('../../services/foo/findById');

module.exports = (req, res) => {
  FooFindByIdService(req.params.id)
    .then(data => res.status(200).json({ success: true, data }))
    .catch(err => ErrorHelper.response(res, err));
};
