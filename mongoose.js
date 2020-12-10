const mongoose = require("mongoose")

mongoose.connect("mongodb://39.102.117.54:27017/chat",{useNewUrlParser:true})
const db = mongoose.connection; // 获取状态

db.on("open",()=>{
    console.log("连接成功")
})
db.on("error",()=>{
    console.log("连接失败")
})



// 创建schema模块
const schemaModel = mongoose.Schema({
    name:{type:String}
})

//创建model模块
const models = mongoose.model("user",schemaModel);

//用户注册
const addUser = async(query)=>{
    return await new models({name:query}).save()
    .then(res=>res)
    .catch(err=>err)
}

//用户删除
const delUser = async(query)=>{
    return await models.deleteOne({name:query})
    .then(res=>res)
    .catch(err=>err)
}

const findUser = async()=>{
    return await models.find()
    .then(res=>res)
    .catch(err=>err)
}

module.exports = {
    findUser,
    addUser,
    delUser
}