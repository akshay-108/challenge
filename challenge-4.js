/*
Create a `users` empty array (which will have Person class objects).

Create a `Person` class with data fields firstName, lastName, mobileNumber.
with function
constructor -> to set object field values
fullName function - which will return a combination of firstName, lastName.

Create a `createPerson` function will accept parameters firstName, lastName, mobileNumber.
The function should return Promise.
Promise will have the functionality to add the `Person` object to the `users` array.
The Promise should return Person fullName for success.
The Promise should fail if a mobile number already exists in the `users` array to another person object.

Create a `main` function.
Inside the main function
Call the `CreatePerson` function 10 times with different parameters (firstName, lastName, mobileNumber) and display fullName or Error.
*/


class Person{
	constructor(firstname,lastname,mobileno)
	{
		this.firstname=firstname;
		this.lastname=lastname;
		this.mobileno=mobileno;
	}
	fullname(firstname,lastname)
	{
		console.log(firstname,lastname);
	}
	Error(error)
	{
		console.log(error);
	}
}

var user=[];

function createPerson(firstname,lastname,mobileno)
{
	return new Promise((function(resolve,reject){
		let classObj=new Person(firstname,lastname,mobileno);

		setTimeout(function(){
			if(user.find(number=>number.mobileno===mobileno))
			{
				reject(classObj.Error("The mobile number already exist"));
			}else
			{
				let person={
					firstname:classObj.firstname,
					lastname:classObj.lastname,
					mobileno:classObj.mobileno
			};
				user.push(person);
				resolve(classObj.fullname(firstname,lastname));
			}
		},3000);
	}));
}

function main()
{
	createPerson("Akshay","Pawar",8879794870).then(
		function(result){
			fullname(result);
		}).catch(
		function(error)
		{
			Error(error);
		})

	createPerson("suraj","pawar",8879794870).then(
		function(result){
			fullname(result);
		}).catch(
		function(error){
			Error(error);
		});

	createPerson("sushant","patil",6666666666).then(
		function(result){
			fullname(result);
		}).catch(
		function(error){
			Error(error);
		});

	createPerson("siddhesh","more",5555555555).then(
		function(result){
			fullname(result);
		}).catch(
		function(error){
			Error(error);
		});
	createPerson("keval","parikh",5555555555).then(
		function(result){
			fullname(result);
		}).catch(
		function(error){
			Error(error);
		});
	createPerson("sandesh","chavan",4444444444).then(
		function(result){
			fullname(result);
		}).catch(
		function(error){
			Error(error);
		});
	createPerson("aakash","sahani",3333333333).then(
		function(result){
			fullname(result);
		}).catch(
		function(error){
			Error(error);
		});
	createPerson("ashwin","gupta",2222222222).then(
		function(result){
			fullname(result);
		}).catch(
		function(error){
			Error(error);
		});
	createPerson("lovelesh","pandey",2222222222).then(
		function(result){
			fullname(result);
		}).catch(
		function(error){
			Error(error);
		});
	createPerson("harshada","kadam",1111111111).then(
		function(result){
			fullname(result);
		}).catch(
		function(error){
			Error(error);
		});
}
main();













