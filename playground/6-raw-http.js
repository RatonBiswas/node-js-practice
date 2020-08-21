
const https = require('https');
const url = 'https://api.darksky.net/forecast/35e034ff5c54760416633a2bb01f5292/40,-75';
https.request(url,(res)=>{
	let  data ='';
	res.on('data'(chunk)=>{
		 data = data + chunk.toString();
	})
	res.on('end',()=>{
	const body = JSON.parse(data);
	console.log(body);  
	});
});


request.on('error',(error )=>{
console.log('An error',error);
})
request.end();
