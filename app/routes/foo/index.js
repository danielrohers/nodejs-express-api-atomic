const express = require('express');

const controller = action => require(`../../controllers/foo/${action}`);
const router = express.Router();

const actions = [
  'create',
  'delete',
  'findById',
  'list',
  'update',
];

actions.forEach(action => require(`./${action}`)(router, controller));

module.exports = router;
