const Koa = require("koa");

const { APP_PORT } = require("./config/config.default")

const app = new Koa();

app.listen(APP_PORT, ()=>{
    console.log(`listening port ${APP_PORT}`);
})