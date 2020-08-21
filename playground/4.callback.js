setTimeout(() =>{
console.log('two seconds are up');
},2000); 

const nameas = ['Othoi','raton','ritu'];
const shortNames = names.filter((name)=>{
return name.length<=4;
})

const  geoCode = (address,callback) =>{
	
	setTimeout(()=>{
		const data = {
		latitude = 0;
		longtitude= 0;
		}
		callback(data);
	},2000)}

 geoCode('Philadelphia',(data)=>{
	console.log(data);	
});
//console.log(data);



//
//Goal:Mess around with the callback pattern
//
//1.Define an add function that accepts the correct arguments
//2.Use setTimeout to simulate a 2 second delay
//3.After 2 seconds are up , call the callback function with the sum.
//4. Test your work!

add(1,2,(sum)=>{
	console.log(sum) // Should print : 5
})