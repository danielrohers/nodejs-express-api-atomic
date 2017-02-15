module.exports = (router, controller) => {
  /**
  * @api {get} /foo List
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo[]} data
  */
  router
    .route('/')
    .get(controller('list'));
};
