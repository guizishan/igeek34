const router = require('koa-router')()

router.prefix('/post')

router.get('/', async function (ctx, next) {
   await ctx.render('index',{
   	posts:['aa','bb','cc']
   });
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
