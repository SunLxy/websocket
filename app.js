let express = require("express")
let path = require("path")

const { servers } =require("./server")

let app = express()

// app.use(express.static(path.join(__dirname , "./")))

//设置允许跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "authorization,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// app.get("/",function(req,res){
//     res.sendFile(path.join(__dirname , "/index.html"))
// })
servers()
// app.listen(6666);
