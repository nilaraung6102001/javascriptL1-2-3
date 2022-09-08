var getacctitles = document.getElementsByClassName("acctitle");
// console.log(getacctitles); //HTML collection

var getaccontents = document.querySelectorAll(".accontent");
// console.log(getaccontents); //note list


for(var x = 0; x<getacctitles.length; x++){
	// console.log(x);

	getacctitles[x].addEventListener("click",function(e){
		// console.log(e.target);
		// console.log(this);

		this.classList.toggle("active");
		var getcontent=this.nextElementSibling;
		// console.log(getcontent);


		if(getcontent.style.height){
			getcontent.style.height=null;

		}else{
			// console.log(getcontent.scrollHeight);
			getcontent.style.height=getcontent.scrollHeight+"px";
		}


	});

	// getaccontents[0].style.height=getaccontents[0].scrollHeight + "px";


	if(getacctitles[x].classList.contains("active")){
		getaccontents[x].style.height=getaccontents[x].scrollHeight+"px";
	}
}

