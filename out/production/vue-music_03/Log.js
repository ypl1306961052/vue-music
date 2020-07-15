let config = require("./config")
// let config={
//     config:{
//         isLog:false
//     }
// };


function info(info) {
    if (config.config.isLog) {
        console.log( info);
    }
}

function error(info) {
    if (config.config.isLog) {
        console.error("error:" + info);
    }
}
module.exports={
    info,
    error,
}
