module.exports = (router, controller) => {
  /**
  * @api {put} /foo/:id Update
  * @apiGroup Foo
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  */
  router
    .route('/:id')
    .put(controller('update'));
};
