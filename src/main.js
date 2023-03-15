const Koa = require("koa");

const app = new Koa();

app.use((ctx, next)=> {
    ctx.body="hello world"
})

app.listen("8080", ()=>{
    console.log("listening port 8080");
})