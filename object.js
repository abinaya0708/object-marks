document.write("create an object and find total marks and average value"+"<br>");

document.write("object:"+"<br>")
let student1={
	mark1:96,
	mark2:86,
	mark3:96,
	mark4:93,
	mark5:92,
	total(){
		let marks=student1.mark1+student1.mark2+student1.mark3+student1.mark4+student1.mark5;
		return marks                                                                              
	}
}
let totals=student1.total();
document.write("Total marks:"+totals+"<br>");

let average=totals/5;
document.write("Average:"+average);