const fs = require('fs');

const http = require('http');

const url = require('url');
const slugify = require('slugify');

const replaceTemplate = require('./modules/replaceTemplate');
///////////////////////////////////
//     FILE


//Blocking Synchonous way 
// const textInfo = fs.readFileSync('./txt/append.txt','utf-8');
// console.log(textInfo);

// const textOut = `This is what we know about avocado .\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut);
// console.log('File Written!');

//Non-blocking Asynchonous way 

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.log('ERROR! 🔥🔥🔥🔥');
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/output.txt',`${data2}\n${data3}`,'utf-8',err =>{
//                 console.log('Two file are uploaded successfully😋');
//             })
//         }); 
//     });
// });
// console.log('Will read file');

// fs.readFile('./txt/final.txt','utf-8',(err,data)=>{
//   console.log(data);
// });
// console.log('File has been loaded');


/////////////////////////////////////////////
//   SERVER

 

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const slugs = dataObj.map(el=> slugify(el.productName,{lower:true}));
console.log(slugs);
const server = http.createServer((req, res) => {
   const { query, pathname } =url.parse(req.url,true);
    //const pathname = req.url;

       //OverView Page
    if (pathname === '/' || pathname === '/overview') {
        
        res.writeHead(200, {'Content': 'text/html'});
        
        const cardHtml = dataObj.map(el =>replaceTemplate(tempCard,el)).join('');
        const output= tempOverview.replace('{%PRODUCT_CARDS%}',cardHtml);

        res.end(output);
        //Product Page
    } else if (pathname === '/product') {
        res.writeHead(200,{'Content': 'text/html'});
       const product = dataObj[query.id];
       const output = replaceTemplate(tempProduct,product);
       res.end(output);

        //API
    } else if (pathname === '/api') {
        res.writeHead(200, {
            'Content': 'application/json'
        });
        res.end(data);

        //Page Not Found Error 404
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }

    //console.log(req.url);
    //console.log(req);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on ports 8000');
});