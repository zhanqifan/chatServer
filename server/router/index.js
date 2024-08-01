const express = require('express')
const router = express.Router()

router.get('/test',(req,res)=>{
  res.send('这是测试页面')
  console.log('测试一下')
})


module.exports = router