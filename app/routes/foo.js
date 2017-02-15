const express = require('express');

const foo = action => require(`../controllers/foo/${action}`);

const router = express.Router();

router
  .route('/')

  /**
  * @api {get} /foo List
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo[]} data
  */
  .get(foo('list'))

  /**
  * @api {post} /foo Create
  * @apiGroup Foo
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  .post(foo('create'));

router
  .route('/:id')

  /**
  * @api {get} /foo/:id Find
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  .get(foo('findById'))

  /**
  * @api {put} /foo/:id Update
  * @apiGroup Foo
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  */
  .put(foo('update'))

  /**
  * @api {delete} /foo/:id Delete
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  */
  .delete(foo('delete'));

module.exports = router;
