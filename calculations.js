function addition() {
	
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
  
	
	if (!isNaN(num1) && !isNaN(num2)) {
	  
	  var answer = num1 + num2;
	  
	  document.getElementById('result').innerText = `The Addition of ${num1} and ${num2} is ${answer}`;
	} else {
	  
	  document.getElementById('result').innerText = 'Please enter valid numbers.';
	}
  }
  
  function substraction() {
	
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
  
	
	if (!isNaN(num1) && !isNaN(num2)) {
	  
		var answer = num1 - num2;
	  
		document.getElementById('result').innerText = `The Substraction of ${num1} and ${num2} is ${answer}`;
	} else {
	  
	  document.getElementById('result').innerText = 'Please enter valid numbers.';
	}
  }
  function multiplication() {
	
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
  
	
	if (!isNaN(num1) && !isNaN(num2)) {
	  
		var answer = num1 * num2;
	  
		document.getElementById('result').innerText = `The Multiplication of ${num1} and ${num2} is ${answer}`;
	} else {
	  
	  document.getElementById('result').innerText = 'Please enter valid numbers.';
	}
  }
  function division() {
	
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
  
	
	if (!isNaN(num1) && !isNaN(num2)) {
	  
		var answer = num1 / num2;
	  
		document.getElementById('result').innerText = `The Division of ${num1} and ${num2} is ${answer}`;
	} else {
	  
	  document.getElementById('result').innerText = 'Please enter valid numbers.';
	}
  }
  
  function taxCalculator() {
	var inputAmount = parseFloat(document.getElementById('amount').value);
	var taxPercentage = parseFloat(document.getElementById('per').value);
	if (!isNaN(inputAmount) && !isNaN(taxPercentage)) {
	  
		let taxAmount = (inputAmount * taxPercentage) / 100;
        let totalAmount = inputAmount + taxAmount;
	  
		document.getElementById('result').innerText = `The tax amount of ${inputAmount} and ${taxPercentage} is ${taxAmount}`;
		document.getElementById('result1').innerText = `The total Amount of ${inputAmount} and ${taxPercentage} is ${totalAmount}`;

	} else {
	  
	  document.getElementById('result').innerText = 'Please enter valid numbers.';
	}
    
    
  }

  function submitArray() {
	
	var inputString = document.getElementById('arrayInput').value.trim();
	
	console.log(inputString);
	var array = inputString.split(' ');
	
	// Trim each array element to remove leading/trailing spaces and convert to numbers
	var trimmedArray = array.map(function(item) {
	  return parseFloat(item.trim());
	});
	
	// Calculate the sum of the array elements
	var sum = trimmedArray.reduce(function(acc, curr) {
	  return acc + curr;
	}, 0);
	
	// Display the sum
	document.getElementById('result').innerText = 'Sum of array elements: ' + sum;
  }

  function interestCalculator() {
	let principle=document.getElementById("prin").value;
	let period=document.getElementById("peri").value;
	let rate=document.getElementById("rate").value;
	let roiOn=document.getElementById("rei").value;
    
	let r;
    switch (roiOn) {
		
        case 'day':
            r=365;
            break;
        case 'month':
            r= 12;			
            break;
        case 'year':
            r=1;
            break;
        case 'quarter':
           r=4;
            break;
        case 'half-year':
            r= 2;
            break;
        case 'week':
            r= 52;
            break;
        default:
            
			document.getElementById('result').innerText = "Invalid ROI period";
    }
	let d=rate/100;
			let p=period/r;
			let amo=Math.round(principle*(1+(d*p)));
			let Int=Math.round(amo-principle);
			document.getElementById('result').innerText = `The interest is ${Int}. `;
			
			document.getElementById('result1').innerText = `The total Amount is ${amo} .`;
    
    
}

function verticalSumArrayResult(){
	const dataArray = [{ name: "Mobile", price: 30000, qty: 20 }, { name: "Laptop", price: 100000, qty: 2 }, { name: "PC", price: 200000, qty: 20 }];
	
	let totalPrice = 0;
	let totalQty=0;
  
	
	for (const item of dataArray) {
	  
	  totalPrice += item.price ;
	  totalQty+=item.qty ;
	}
	
	document.getElementById('result').innerText = `The Total price is ${totalPrice}. `;
	document.getElementById('result1').innerText = `The Total Quantity is ${totalQty}. `;
}
function generateRandomNumber(){
	let numb=document.getElementById("numb1").value;
	if(numb==1){
		document.getElementById('result').innerText = Math.floor(Math.random() * 11); 
		console.log()
	}
	else if(numb==2){
	document.getElementById('result').innerText = Math.floor((Math.random()*89)+ 10);
	console.log(Math.floor((Math.random()*88)+ 10) )
	}
	else if(numb==3){
		document.getElementById('result').innerText = Math.floor((Math.random()*889)+ 100);
		console.log(Math.floor((Math.random()*888)+ 100) )
		}
		else if(numb==4){
			document.getElementById('result').innerText = Math.floor((Math.random()*889)+ 1000);
			console.log(Math.floor((Math.random()*888)+ 1000) )

			}
			else if(numb==5){
				document.getElementById('result').innerText = Math.floor((Math.random()*8889)+ 10000);
				console.log(Math.floor((Math.random()*8888)+ 10000) )
				
				}
			else{
				document.getElementById('result').innerText ="Sorry! Choose number between 1-5";
			}



}