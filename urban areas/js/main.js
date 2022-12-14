var age=prompt("enter the age");
age=parseInt(age);
var gender="male";
if(gender==="female")
{
 console.log(" employee will  work in urban areas");
}
else if(gender==="male")
{
  if(age>=20&&age<=40)
  {
  console.log("employee will work anywhere")
  }
else if(age>40&&age<=60)
{
console.log(" employee will work in urban areas")
}
}
else
{
console.log("error");
}