const router = require('koa-router')()

router.prefix('/users')

router.get('/', async function (ctx, next) {
  await ctx.render('new');
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
