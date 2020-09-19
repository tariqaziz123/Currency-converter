const fromcurrency1 = document.getElementById('fromcurrency');
const from_currency_amt1 = document.getElementById('from_currency_amt');
const tocurrencyl = document.getElementById('tocurrency');
const to_currencyamtl = document.getElementById('to_currencyamt');
const curr_ratel = document.getElementById('rate');
const exchange_curr = document.getElementById('exchange_curr');
 
fromcurrency1.addEventListener('change', calculate);
from_currency_amt1.addEventListener('input', calculate);
tocurrencyl.addEventListener('change', calculate);
to_currencyamtl.addEventListener('input', calculate);
 
exchange_curr.addEventListener('click', () => {
	const temp = fromcurrency1.value;
	fromcurrency1.value =tocurrencyl.value;
	tocurrencyl.value = temp;
	calculate();
});
 
function calculate() {
	const from = fromcurrency1.value;
	const to = tocurrencyl.value;
	
	fetch(`https://api.exchangeratesapi.io/latest?base=${from}`)
		.then(res => res.json())
		.then(res => {
		const curr_rate = res.rates[to];
		curr_ratel.innerText = `1 ${from} = ${curr_rate} ${to}`
		to_currencyamtl.value = (from_currency_amt1.value * curr_rate).toFixed(2);
	})
}
 
calculate();