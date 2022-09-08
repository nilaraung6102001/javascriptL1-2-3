var getmodal =document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-signup');
var getbtnclose = document.querySelector('.btn-close');
var getbtnfullscreen = document.getElementById('btn-fullscreen');
var getbtnclosescreen = document.getElementById('btn-closescreen');


getbtnsignup.addEventListener('click',function(){
	getmodal.style.display = "block";
});

getbtnclose.addEventListener('click',function(){
	getmodal.style.display = 'none';
});

window.onclick = function(e){
	// console.log(e.target);

	e.preventDefault();

	if(e.target === getmodal){
		getmodal.style.display = 'none';
	};
};


var getde = document.documentElement;

getbtnfullscreen.addEventListener('click',function(){

	// console.log(getde);



	localStorage.setItem("fullscreen","on");

	if(getde.requestFullscreen){
		// for standard
		getde.requestFullscreen();
	}else if(getde.msRequestFullscreen){
		// for msRequestFullscreen
		getde.msRequestFullscreen();
	}else if(getde.webkit.RequestFullscreen){
		// for webkit
		getde.webkitRequestFullscreen();
	}

	getbtnclosescreen.style.display = "inline-block";

	screenon();

});

getbtnclosescreen.addEventListener('click',function(){
	// standard
	// document.exitFullscreen();

	

	localStorage.setItem("fullscreen","off");

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}

	getbtnclosescreen.style.display = "none";

	screenon();
});

var getstorage = localStorage.getItem("fullscreen");

function screenon(){
	if(getstorage === "on"){
		document.addEventListener('keydown',function(e){
			e.preventDefault();
		});
	}
}