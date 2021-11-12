const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
    ctx.body = '<h1>Index Sayfasına Hoşgeldiniz</h1>';
});

router.get('/hakkimda', (ctx) => {
    ctx.body = '<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>';
});

router.get('/iletisim', (ctx) => {
    ctx.body = '<h1>İletişim Sayfasına Hoşgeldiniz</h1>';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
