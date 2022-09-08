var getprogressbar = document.getElementById("progress-bar");

function scrollpoint(){
	// console.log("I am working");

}

window.onscroll = function(){
	scrollpoint();

	var getscrolltop = document.documentElement.scrollTop;
	//console.log(getscrolltop);
	var getscrollheight = document.documentElement.scrollHeight;
	//console.log(getscrollheight);
	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

	var calcheight = getscrollheight - getclientheight;

	var getfinal = Math.round((getscrolltop * 100) / calcheight);
	// console.log(getfinal);


	getprogressbar.style.width = `${getfinal}%`
}


function printme(){
	window.print();
}

