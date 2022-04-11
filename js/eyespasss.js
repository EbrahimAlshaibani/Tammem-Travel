function myFunction()
{
		
	var x=document.getElementById("ic");
	var y=document.getElementById("ic1");
	var z=document.getElementById("ic2");
	var e=document.getElementById("ic3");
	if(x.type==="password")
	{
		x.type="text";
		e.type="text";
		y.className = "icon-eye";
		z.className = "icon-eye";
	}
	else
	{
		x.type="password";
		e.type="password";
		y.className = "icon-eye-slash";
		z.className = "icon-eye-slash";
	}

}
