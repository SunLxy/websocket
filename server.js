const ws = require("nodejs-websocket")
const servers = ()=>{
    const server = ws.createServer( async(conn)=>{
        conn.on("text",(str)=>{ // 获取客服端发送的信息
            const data = JSON.parse(str); // 
            switch(data.type){ //判断发送的信息，是哪类信息
                case "setname":
                    conn.nikeName = data.name 
                    bases(JSON.stringify({
                        users:conn.nikeName, 
                        info:"<span style='color:palevioletred'>" +data.name + "</span>  <span style='color:red'>加入聊天室</span>"
                    }))
                    break;
                case "chat":
                    bases(JSON.stringify({
                        users:conn.nikeName,
                        info:"<span style='color:palevioletred'>" + conn.nikeName +"</span> 说："+data.text
                    }))
                    break;
                case "close":
                        conn.close();  
                    break;       
            }
        })
        conn.on("close",function(){
            bases(JSON.stringify({
                users:conn.nikeName,
                info:"<span style='color:palevioletred'>" + conn.nikeName + "</span>  " + "<span style='color:red'>退出房间</span>",
            }))
        })

        conn.on("error",(err)=>{
            console.log(err)
        })
        
    })
    server.listen(8080)
    const bases = (str)=>{
        server.connections.forEach((conn)=>{
            conn.sendText(str);
        })
    }
}

module.exports = {
    servers
}