var age=prompt("enter the age");
var permission="not ok"
if ((age>=16)&&(age<=50))
{

	console.log("you have allowed to get ticket");

}
else if(age<16)
{	
	if(permission=="ok")
		{
	console.log("parent permission allowed");
		}
	else
		{
	console.log("parent permission not allowed");
		}
}		
else 
{
	console.log("you have not allowed to get ticket");
}



