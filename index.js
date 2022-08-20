function result(){
	var Name="kathiravan";
    var FatherName="ravindran";
    var Zodiac="aquarius";
    var DOB="07-12-2005";
    var Regno="2465093";
    var Rollno="7465598";
	var name=document.getElementById("Name").value;
	var fathername=document.getElementById("FatherName").value;
	var zodiac=document.getElementById("Zodiac").value;
	var dob=document.getElementById("DOB").value;
	var regno=document.getElementById("RegisterNo").value;
	var rollno=document.getElementById("RollNo").value;
	//var output=document.getElementById("output").value;
	if (Name==name&&FatherName==fathername&&Zodiac==zodiac&&DOB==dob&&Regno==regno&&Rollno==rollno)
	{
	document.getElementById("output").innerHTML="<hr>YOU ARE HER => MESSAGE whoami4744 insta id<hr>";
    } 
	else
	{
	  document.getElementById("output").innerHTML="<hr>YOU ARE NOT HER<hr>";
	}
}