const ErrorHelper = require('../../helpers/error');
const FooListService = require('../../services/foo/list');

module.exports = (req, res) => {
  FooListService(req.query)
    .then(data => res.status(200).json({ success: true, data }))
    .catch(err => ErrorHelper.response(res, err));
};
