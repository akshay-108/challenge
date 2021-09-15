
/*Create a function `sum` that will sum all arguments passed to it.
The quantity of the arguments is unknown.
print `sum` result.*/

function sum(...unknown_arguments)
{
	let add=0;
	for (var i = 0; i < unknown_arguments.length; i++) {
		 add+=unknown_arguments[i];
	}
	return add;
}

console.log(sum(52,36,89,75,45,69,21,74));