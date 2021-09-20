/*Create a `users` empty array (which will have Person class objects).
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

var user=[];

class Persons{
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
	// Error(error)
	// {
	// 	console.log(error);
	// }
}



function createPerson(firstname,lastname,mobileno)
{
	return new Promise((function(resolve,reject){
		
		setTimeout(function(){
			if(user.find(number=>number.mobileno===mobileno))
			{
				reject("The mobile number already exist");
			}else
			{
                let classObj=new Persons(firstname,lastname,mobileno);
				user.push(classObj);
				resolve(classObj.fullname(firstname,lastname));
			}
		},3000);
	}));
}

async function main()
{
		try {
            await createPerson("Akshay","Pawar",8879794)
        } catch (error) {
            console.log(error);
        }


		try {
            await createPerson("suraj","pawar",9967661)
        } catch (error) {
            console.log(error);
        }

        try {
            await createPerson("sushant","patil",66666)
        } catch (error) {
            console.log(error);
        }

        try {
            await createPerson("siddhesh","more",55555)
        } catch (error) {
            console.log(error);
        }

        try{
            await createPerson("keval","parikh",55555)
        }
	   catch(error){
           console.log(error);
       }

       try {
            await createPerson("sandesh","chavan",44444)
       } catch (error) {
            console.log(error);
       }

       try {
            await createPerson("harshada","kadam",11111)
       } 
       catch (error) {
            console.log(error);
       }

       try {
            await createPerson("lovelesh","pandey",22222)
       } catch (error) {
            console.log(error);
       }

       try {
            await createPerson("ashwin","gupta",22222)
       } catch (error) {
            console.log(error);
       }

       try {
            await createPerson("aakash","sahani",33333)
       } catch (error) {
            console.log(error);
       }
}
main();