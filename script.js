//your JS code here. If required.
const btn = document.querySelector("#btn");
btn.addEventListener("click",showNumber);

function showNumber(){
const getDiv = document.querySelector("#output");
const getInput = document.querySelector("#ip").value;
	
return new Promise(resolve => setTimeout(() => {
	getDiv.textContent = `Result: ${getInput}`;
	resolve(getInput);
},2000))
	.then(num =>{
		return new Promise(resolve =>{
		setTimeout(() =>{
			const results =num*2;
			getDiv.textContent =`Result: ${results}`;
			resolve(results);
		},2000);
	});
			})
	.then(num => {
		return new Promise(resolve => {
		setTimeout(() => {
			const results = num-3;
			getDiv.textContent =`Result: ${results}`;
			resolve(results);
		},1000);
	});
			})
	.then( num => {
		return new Promise(resolve => {
		setTimeout(() => {
			const results = num/2;
			getDiv.textContent =`Result: ${results}`;
			resolve(results);
		},1000)
	});
		})
	.then( num => {
		return new Promise(resolve => {
		setTimeout(() => {
			const results = num+10;
			getDiv.textContent =`Final Result: ${num+10}`;
			resolve(results);
		},1000)
	});
		});

	
	
}