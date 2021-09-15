
/*
Create a function sumPlusMinus() that takes array and sums separately positive and negative numbers.

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

function sumPlusMinus(nums)
{
	var plus=0, minus=0;
	for (var i = 0; i < nums.length; i++) 
	{
		if(nums[i] >= 0)
		{
			plus=plus+nums[i];
		} else{
			minus=minus+nums[i];
		}
	}
	return {Plus:plus, Minus:minus};
}
var nums= [10, -12, 30, -1, -8, 0, 14, -33, 20];

console.log(sumPlusMinus(nums));