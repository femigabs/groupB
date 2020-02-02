window.alert('Hey ! Thank You for using our Currency Converter App. Please note that all Currency'  + 'values here are constant values'
	+'to continue Press the ok button. Thanks!!!')

function calc() {
  let amount = parseFloat(document.getElementById("amount").value);
  let select = document.getElementById("select");
  let select1 = document.getElementById("select1");
  let result = document.getElementById("result");

if (select.value === "USD" && select1.value === "USD")  {
    result.value = (amount * 1);
} else if (select.value === "USD" && select1.value === "EUR")  {
    result.value = (amount * 0.90);
}
  else if (select.value === "USD" && select1.value === "AUD")  {
    result.value = (amount * 1.49);
  }
  else if (select.value === "USD" && select1.value === "GPB")  {
    result.value = (amount * 0.76);
  }
  else if (select.value === "USD" && select1.value === "JPY")  {
    result.value = (amount * 108.34);
  }
  else if (select.value === "USD" && select1.value === "NGN")  {
    result.value = (amount * 361.50);
  }
  if (select.value === "EUR" && select1.value === "EUR")  {
    result.value = (amount * 1);
  }
  else if (select.value === "EUR" && select1.value === "USD")  {
    result.value = (amount * 1.11);
  }
  else if (select.value === "EUR" && select1.value === "AUD")  {
    result.value = (amount * 1.66);
  }
  else if (select.value === "EUR" && select1.value === "GPB")  {
    result.value = (amount * 0.84);
  }
  else if (select.value === "EUR" && select1.value === "JPY")  {
    result.value = (amount * 120.26);
	}
	else if (select.value === "EUR" && select1.value === "NGN")  {
	    result.value = (amount * 401.06);
	  }
 if (select.value === "GPB" && select1.value === "GPB")  {
    result.value = (amount * 1);
  }
  else if (select.value === "GPB" && select1.value === "EUR")  {
    result.value = (amount * 1.19);
  }
  else if (select.value === "GPB" && select1.value === "USD")  {
    result.value = (amount * 1.32);
  }
  else if (select.value === "GPB" && select1.value === "AUD")  {
    result.value = (amount * 1.97);
  }
  else if (select.value === "GPB" && select1.value === "JPY")  {
    result.value = (amount * 143.11);
  }
  else if (select.value === "GPB" && select1.value === "NGN")  {
    result.value = (amount * 477,35);
  }
  else if (select.value === "AUD" && select1.value === "AUD")  {
    result.value = (amount * 1);
  }
  else if (select.value === "AUD" && select1.value === "EUR")  {
    result.value = (amount * 0.60);
  }
  else if (select.value === "AUD" && select1.value === "USD")  {
    result.value = (amount * 0.67);
  }
  else if (select.value === "AUD" && select1.value === "GPB")  {
    result.value = (amount * 0.51);
  }
  else if (select.value === "AUD" && select1.value === "JPY")  {
    result.value = (amount * 72.56);
  }
  else if (select.value === "AUD" && select1.value === "NGN")  {
    result.value = (amount * 241.94);
  }
   if (select.value === "JPY" && select1.value === "JPY")  {
    result.value = (amount * 1);
  }
  else if (select.value === "JPY" && select1.value === "EUR")  {
    result.value = (amount * 0.0083);
  }
  else if (select.value === "JPY" && select1.value === "USD")  {
    result.value = (amount * 0.0092);
  }
  else if (select.value === "JPY" && select1.value === "AUD")  {
    result.value = (amount * 0.014);
  }
  else if (select.value === "JPY" && select1.value === "GPB")  {
    result.value = (amount * 0.0070);
  }
  else if (select.value === "JPY" && select1.value === "NGN")  {
    result.value = (amount * 3.34);
  }
  if (select.value === "NGN" && select1.value === "NGN")  {
    result.value = (amount * 1);
  }
  else if (select.value === "NGN" && select1.value === "EUR")  {
    result.value = (amount * 0.0025);
  }
  else if (select.value === "NGN" && select1.value === "USD")  {
    result.value = (amount * 0.0027);
  }
  else if (select.value === "NGN" && select1.value === "AUD")  {
    result.value = (amount * 0.0041);
  }
  else if (select.value === "NGN" && select1.value === "GPB")  {
    result.value = (amount * 0.0021);
  }
  else if (select.value === "NGN" && select1.value === "JPY")  {
    result.value = (amount * 0.30);
  }
}