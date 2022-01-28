const ws = require("nodejs-websocket")
const servers = () => {
    const server = ws.createServer(async (conn) => {
        conn.on("text", (str) => { // 获取客服端发送的信息
            const data = JSON.parse(str); // 
            console.log(str)
            switch (data.type) { //判断发送的信息，是哪类信息
                case "setname":
                    // bases(JSON.stringify(data.text))
                    break;
                case "chat":
                    bases(data.text)
                    break;
                case "close":
                    conn.close();
                    break;
            }
        })
        conn.on("close", function () { })
        conn.on("error", (err) => {
            console.log(err)
        })
    })
    server.listen(8888)
    const bases = (str) => {
        server.connections.forEach((conn) => {
            conn.sendText(str);
        })
    }
}

module.exports = {
    servers
}