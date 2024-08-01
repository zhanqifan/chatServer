const express=require('express')
const cors = require('cors')
const app = express()
const port =3000
const test = require('./router/index')
app.use(cors)
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.use(test)
// 服务端捕获前端请求接口错误
app.use((req,res,next)=>{
    let err = new Error('Not fount')
    err.status = '404'
    next(err)
    // next 是 Express 中间件函数的第三个参数
    // 它是一个函数，用于将控制权传递给下一个中间件函数。
    // 如果当前中间件没有结束请求-响应循环（例如，通过 res.send()、res.json() 等方法），则需要调用 next() 
    // 以便将控制权交给下一个中间件或路由处理函数。
})
// 这一层接受错误抛出 有四个参数
app.use((err,req,res,next)=>{
  res.status(err.status||500)
  res.send(err.message)
})

app.listen(port,()=>{
    console.log(`服务器启动 listen on ${port}`)
})