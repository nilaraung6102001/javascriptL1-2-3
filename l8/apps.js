var getinput = document.getElementById("search");
var getul = document.getElementById("member");
var getli = getul.getElementsByTagName('li');
console.log(getli); //HTML Collection

var getsortazm1btn = document.getElementById('sortazm1');
var getsortzam1btn = document.getElementById('sortzam1');
var getsortazm2btn = document.getElementById('sortazm2');
var getsortzam2btn = document.getElementById('sortzam2');



getinput.addEventListener('keyup',filter);

function filter(){
	// console.log(this.value);

	var inputfilter = this.value.toLowerCase();
	// console.log(inputfilter);

	for(var x=0; x<getli.length; x++){
		// console.log(getli[x]);

		// console.log(getli[x].querySelector('a').textContent);

		// console.log(getli[x].querySelector('a').textContent.toLowerCase());

		// console.log(getli[x].getElementsByTagName('a')[0].textContent.toLowerCase());

		var getavalue = getli[x].querySelector('a').textContent.toLowerCase();

		if(getavalue.indexOf(inputfilter)  > -1){
			getli[x].style.display = '';
		}else{
			getli[x].style.display = 'none';
		}


	}
}


// Method1
getsortazm1btn.addEventListener('click',sortingazm1);
function sortingazm1(){
	console.log("abc");

	var lis = [];
	for(var i = 0; i < getli.length ; i++){
		console.log(getli[i]);

		// console.log(getli[i].textContent);

		lis.push(getli[i].textContent);
	}
	// console.log(lis);
	// console.log(lis.sort());
	// console.log(lis.sort().reverse());

	var azlis = lis.sort();
	getul.innerHTML = '';

	azlis.forEach(function(azlis){
		// console.log(azli);

		const newli = document.createElement('li');
		const newlink = document.createElement('a');
		newlink.href = `javascript:void(0);`;

		newlink.appendChild(document.createTextNode(azlis));
		newli.appendChild(newlink);
		// console.log(newli);
		getul.appendChild(newli);
	})
		
	
}




getsortzam1btn.addEventListener('click',sortingzam1);
function sortingzam1(){
	// console.log("abc");

	var lis = [];
	for(var i = 0; i < getli.length ; i++){
		console.log(getli[i]);

		// console.log(getli[i].textContent);

		lis.push(getli[i].textContent);
	}
	// console.log(lis);
	// console.log(lis.sort());
	// console.log(lis.sort().reverse());

	var zalis = lis.sort().reverse();
	getul.innerHTML = '';

	zalis.forEach(function(zalis){
		// console.log(azli);

		const newli = document.createElement('li');
		const newlink = document.createElement('a');
		newlink.href = `javascript:void(0);`;

		newlink.appendChild(document.createTextNode(zalis));
		newli.appendChild(newlink);
		// console.log(newli);
		getul.appendChild(newli);
	})
		
	
}



// Metod2
getsortazm2btn.addEventListener('click',sirtingazm2);
function sirtingazm2(){
	var shouldswitch = true;
	var switching = true;

	do{
		switching = false;
		var i;

		for(i = 0 ; i <getli.length ; i++){
			// console.log(i);
		}

		if(shouldswitch){
			switching = true;
		}
	}while(switching)
}


if(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase()){
	console.log('true');
}else if (getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()){
	console.log('equal');
}else{
	console.log('false');
}
