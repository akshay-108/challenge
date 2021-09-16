function fullname(firstname,lastname,mobileno)
{
	return firstname,lastname,mobileno;
}

function createPerson(firstname,lastname,mobileno)
{	
	var fullnamePromise=new Promise(function(){

		return {Firstname:firstname,Lastname:lastname,Mobile:mobileno};
	},3000);
}


var success=createPerson("Akshay","pawar",14563287956)

console.log(success);