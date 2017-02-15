module.exports = (router, controller) => {
  /**
  * @api {get} /foo/:id Find
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  router
    .route('/:id')
    .get(controller('findById'));
};
