const Koa = require('koa');
const {koaBody} = require('koa-body');
const router = require('./router');
const responseHandler = require('./handler/responseHandler');

const app = new Koa();

app.use(responseHandler());
app.use(koaBody({includeUnparsed: true}));
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
