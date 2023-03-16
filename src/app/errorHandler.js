const errorHandler = (error,ctx) => {
    let status = 500;
    switch(error.code){
        case "10001":
            status = 409;
            break;
        case "10002":
            status = 400;
            break;
        case "10003":
            status = 400;
            break;
        default:
            status= 500;
    }

    ctx.body=error;
}
module.exports = errorHandler;