// npm i --save-dev koa 
const Koa = require('koa');
const app = new Koa();
const items = [{ id: 1, title: 'title1' }, { id: 2, title: 'title2' }];

// ctx：context
app.use(async (ctx, next) => {
  if (ctx.path === '/api/jsonp') {
    // 获取URL中传递的参数 解构对象{cb:callback, id}
    const { cb, id } = ctx.query;
    // find()返回id满足的那个元素
    const title = items.find(item => item.id == id)['title'];
    ctx.body = `${cb}(${JSON.stringify({ title })})`;
    return;
  }
  if (ctx.path === '/api/jsonps') {
    const { cb, a, b } = ctx.query;
    ctx.body = `${cb}(${JSON.stringify({ a, b })})`;
    return;
  }
})
console.log('listen 8080....')
app.listen(8080);