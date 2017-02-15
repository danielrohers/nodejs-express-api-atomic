
module.exports = (router, controller) => {
  /**
  * @api {post} /foo Create
  * @apiGroup Foo
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  router
    .route('/')
    .post(controller('create'));
};
