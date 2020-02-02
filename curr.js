window.alert('Hey ! Thank You for using our Currency Converter App. Please note that all Currency'  + 'values here are constant values'
	+'to continue Press the ok button. Thanks!!!')

function calc() {
	let rate = document.getElementById("con").value;
	let amount = document.getElementById("forex-amount").value;
	let forex = document.getElementById('fx').value;
	let compute1 = rate* amount * forex
    document.getElementById('result').innerHTML = compute1;
}