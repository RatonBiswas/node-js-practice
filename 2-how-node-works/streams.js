///node.js streams fundamentals////
//Readable streams,Writable streams,Diplex streams,Transform streams

const fs = require('fs');
const server = require('http').createServer();
server.on('request',(req,res)=>{
    // First Solution

    // fs.readFile('test-file.txt',(err,data)=>{
    //     if(err)console.log(err);
    //     res.end(data);
    // });

    //Second Solution

    // const readable = fs.createReadStream('test-file.txt');
    // readable.on("data",chunk=>{
    //     res.write(chunk);
    //     console.log(chunk);
    // });
    // readable.on("end",()=>{
    //     res.end();
    // });
    // readable.on("error",err=>{
    //     console.log(err);
    //     res.statusCode = 404;
    //     res.end("File not found");
    // });

    //  Third Solution
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    //readableSourse.pipe(writableDest);
    readable.on('error',err=>{
        console.log(err);
        res.statusCode = 500;
        res.end("File not found");
    });
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening.....");
});
