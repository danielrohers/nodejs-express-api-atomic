module.exports = (router, controller) => {
  /**
  * @api {delete} /foo/:id Delete
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  */
  router
    .route('/:id')
    .delete(controller('delete'));
};
