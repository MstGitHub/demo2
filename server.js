const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    let content=fs.readFileSync('./build/index.html');
    res.writeHead(200,{'Context-Type':'text/html;charset=utf-8;'});
    res.end(content);
}).listen(4000);