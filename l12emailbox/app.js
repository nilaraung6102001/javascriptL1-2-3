const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemailcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup',function(e){
	createemaillist(e.target.value);
});

function createemaillist(inputtext){
	// console.log(inputtext);

	//split by ","  return array
	// const eitems = inputtext.split(',');
	// console.log(eitems);

	//remove empty,empty(space)
	// const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() != '');
	// console.log(eitems);



	//remove space,empty(space)
	const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() != '').map(reempty=>reempty.trim());
	// console.log(eitems);

	getemailcontainer.innerHTML = '';

	eitems.forEach(function(eitem){
		// console.log(eitem);

		const setnewspan = document.createElement('span');
		setnewspan.textContent = eitem;
		setnewspan.classList.add('email-item');

		//consle.log(setnewspan);

		getemailcontainer.appendChild(setnewspan);


	});

}

getbtn.addEventListener('click',function(e){
	sendemail();

	e.preventDefault();
});

function sendemail(){
	// console.log('i am working');

	const gettextvalue = gettextarea.value;
	const getaddresses = document.querySelectorAll('.email-item');
	// console.log(gettextvalue);
	// console.log(getaddress);



	var person = [] ;
	if(getaddresses.length > 0 && gettextvalue){
		getaddresses.forEach(function(getaddress){
			person.push({
				email:getaddresses.textContent,
				message:gettextvalue
			});
		});

		console.log(person)

	}else{
		window.alert('Enter Message');
		gettextarea.focus();
	}
}