const express = require('express');
const app = express();

app.get('/course/list', (req, resp) => {
    resp.header('Access-Control-Allow-Origin', '*');
    resp.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    resp.header('Content-Type', 'application/json;charset=utf-8');
    resp.json({
        code:0,
        list:[
            { name:'web全栈架构师', id:1},
            { name:'js高级课', id:2},
            { name:'web小白课', id:3},
            { name:'java架构师', id:4},
        ]    
    });
});

app.listen(9000, () => {
    console.log('mock成功')
});