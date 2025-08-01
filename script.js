//your JS code here. If required.
const btn = document.querySelector("#btn");
btn.addEventListener("onclick",showNumber());

function showNumber(){
const getDiv = document.querySelector("#output");
const getInput = document.querySelector("#ip").value();
	
return new Promise(resolve => setTimeout(() => {
	const toShow = resolve(`Result: ${getInput}`);
	getDiv.textContent = toShow;
},2000))
	.then(num =>{
		setTimeout(() =>{
			getDiv.textContent =`Result: ${num*2}`;
		},2000);
	})
	.then(num => {
		setTimeout(() => {
			getDiv.textContent =`Result: ${num-3}`;
		},1000);
	})
	.then( num => {
		setTimeout(() => {
			getDiv.textContent =`Result: ${num/2}`;
		},1000)
	})
	.then( num => {
		setTimeout(() => {
			getDiv.textContent =`Final Result: ${num+10}`;
		},1000)
	});

	
	
}