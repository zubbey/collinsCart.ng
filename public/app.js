import Product from './modules/product.js';
import User from './modules/users.js';
// PRODUCT OBJECTS
const collins = new User('Collins', 'Danjuma', 'collins@gmail.com', 'amfromhausa');
// console.log(collins);

let macbook = new Product(1, 'Macbook Air 2017', 450000, 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/233582/1.jpg');
let iphone = new Product(2, 'iPhone 11s', 400000, 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/447615/1.jpg');
let ipad = new Product(3, 'iPad pro 32GB', 198350, 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/861165/1.jpg');
let appleTV = new Product(4, 'Apple Smart TV', 2100000, 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/937355/1.jpg');
let smartWatch = new Product(5, 'Apple Smart Watch', 120000, 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/744951/1.jpg');
let airpod = new Product(6, 'Apple AIRPODS2 With Wireless Charging Case', 95000, 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/005894/2.jpg');

let products = [macbook, iphone, ipad, appleTV, smartWatch, airpod];
// FOR USERS LOGIN
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let signinbtn = document.querySelector('#signin');
let msgdisplay = document.querySelector('#msgDisplay');
let display = document.querySelector('.display-4');

//FOR Product
let navcontainer = $('#navbarcontainer');
let jumbotron = $('.jumbotron');
let list = $('#products');
let searchList = $('.list-group');
let button = document.querySelector('#search');
let search = document.querySelector('input[name="search"]');
let searched = '';
let output = '';
let searchedOutput = '';

for (let key in products){
	let value = products[key];

	output += `
	<div class="card">
	<img src="${value['image']}" class="p-5 card-img-top">
	<div class="card-body">
	<h5 class="card-title">${value['name']}</h5>
	<p class="card-text">Product Price: &#8358;${value['price']}</p>
	</div>
	<div class="card-footer">
	<small class="text-muted">Product Scores:</small> <span class="badge badge-primary badge-pill">${value['productSearch']}</span>
	</div>
	</div>`;
}
list.append(output);


search.addEventListener('keyup', function(event) {
	searched = search.value.toLocaleLowerCase();
	if (event.keyCode == 13) {
		event.preventDefault();
		increaseScore();
		console.log('key pressed!');
	}
});

button.addEventListener('click', increaseScore);

// increaseScore
function increaseScore(){
	output = '';
	searchedOutput = '';
	if (searched == 'macbook' || searched == 1){
		macbook.addScore();
		searchedOutput += `<li class="list-group-item d-flex justify-content-between align-items-center"><small>Product Name:</small> <b>${macbook['name']}</b> <small>Product Price:</small> &#8358;${macbook['price']} <small>Scores:</small> <span class="badge badge-primary badge-pill">${macbook['productSearch']}</span></li>`;
	}
	else if (searched == 'iphone' || searched == 'iphone 11' || searched == 2){
		iphone.addScore();
		searchedOutput += `<li class="list-group-item d-flex justify-content-between align-items-center"><small>Product Name:</small> <b>${iphone['name']}</b> <small>Product Price:</small> &#8358;${iphone['price']} <small>Scores:</small> <span class="badge badge-primary badge-pill">${iphone['productSearch']}</span></li>`;
	}
	else if (searched == 'ipad' || searched == 3){
		ipad.addScore();
		searchedOutput += `<li class="list-group-item d-flex justify-content-between align-items-center"><small>Product Name:</small> <b>${ipad['name']}</b> <small>Product Price:</small> &#8358;${ipad['price']} <small>Scores:</small> <span class="badge badge-primary badge-pill">${ipad['productSearch']}</span></li>`;
	}
	else if (searched == 'appleTV' || searched == 'tv' || searched == 'television' || searched == 4){
		appleTV.addScore();
		searchedOutput += `<li class="list-group-item d-flex justify-content-between align-items-center"><small>Product Name:</small> <b>${appleTV['name']}</b> <small>Product Price:</small> &#8358;${appleTV['price']} <small>Scores:</small> <span class="badge badge-primary badge-pill">${appleTV['productSearch']}</span></li>`;
	}
	else if (searched == 'smartWatch' || searched == 'watch' || searched == 5){
		smartWatch.addScore();
		searchedOutput += `<li class="list-group-item d-flex justify-content-between align-items-center"><small>Product Name:</small> <b>${smartWatch['name']}</b> <small>Product Price:</small> &#8358;${smartWatch['price']} <small>Scores:</small> <span class="badge badge-primary badge-pill">${smartWatch['productSearch']}</span></li>`;
	}
	else if (searched == 'airpod' || searched == 'earpiece' || searched == 6){
		airpod.addScore();
		searchedOutput += `<li class="list-group-item d-flex justify-content-between align-items-center"><small>Product Name:</small> <b>${airpod['name']}</b> <small>Product Price:</small> &#8358;${airpod['price']} <small>Scores:</small> <span class="badge badge-primary badge-pill">${airpod['productSearch']}</span></li>`;
	}
	else if (searched == 'smart'){
		smartWatch.addScore();
		appleTV.addScore();
		searchedOutput += `<li class="list-group-item d-flex justify-content-between align-items-center"><small>Product Name:</small> <b>${smartWatch['name']}</b> <small>Product Price:</small> &#8358;${smartWatch['price']} <small>Scores:</small> ${smartWatch['productSearch']}</span></li>`;
		searchedOutput += `<li class="list-group-item d-flex justify-content-between align-items-center"><small>Product Name:</small> <b>${appleTV['name']}</b> <small>Product Price:</small> &#8358;${appleTV['price']} <small>Scores:</small> <span class="badge badge-primary badge-pill">${appleTV['productSearch']}</span></li>`;
	}
	else if (searched == ''){
		for (let key in products){
		let value = products[key];

		output += `
			<div class="card">
			<img src="${value['image']}" class="p-5 card-img-top">
			<div class="card-body">
			<h5 class="card-title">${value['name']}</h5>
			<p class="card-text">Product Price: &#8358;${value['price']}</p>
			</div>
			<div class="card-footer">
			<small class="text-muted">Product Scores:</small> <span class="badge badge-primary badge-pill">${value['productSearch']}</span>
			</div>
			</div>`;
		}
		list.append(output);
	}
	else {
		searchedOutput = `<div class="alert alert-warning" role="alert" >No product found with this name! :)</div>`;
	}
	list.html(output);
	searchList.html(searchedOutput);
}


// User Login system
email.addEventListener('change', ()=>{
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat)){
		console.log(email.value);
		createErrorMsg(email, 'is-valid', 'valid-feedback', 'Looking good!');
	} else {
		createErrorMsg(email, 'is-invalid', 'invalid-feedback', 'Please provide a valid email address.');
		// alert('invaid email address!');
	}
});
password.addEventListener('change', (e)=>{
	if(password.value.length > 5){
		signinbtn.classList.remove('disabled');
		signinbtn.addEventListener('click', ()=>{
			msgdisplay.innerText = '';
			if(email.value === collins.useremail && password.value === collins.userpassword){
				msgdisplay.classList.remove('invalid-feedback');
				msgdisplay.classList.add('valid-feedback', 'd-block');
				msgdisplay.innerText = 'You have successfully logged in!';

				loginUser(collins);
			} else {
				msgdisplay.classList.add('invalid-feedback', 'd-block');
				msgdisplay.innerText = 'You don\'t have access to this portal';
			}
		})
	} else {
		createErrorMsg(password, 'is-invalid', 'invalid-feedback', 'Please provide your password.');
	}
});

function createErrorMsg(el, elClass, msgClass, msg){
	let feedback = document.querySelector('.invalid-feedback');
	if(feedback == null){
		el.classList.add(elClass);
		let e = document.createElement('div');
		e.setAttribute('class', msgClass);
		let t = document.createTextNode(msg);
		e.appendChild(t);
		let elParent = el.parentNode;
		elParent.insertBefore(e, el.nextSibling);
	}else{
		el.classList.replace('is-invalid', 'is-valid');
		el.parentNode.removeChild(feedback);
	}
}

function loginUser(user){
	sessionStorage.setItem('usersession', JSON.stringify(user));
	window.location.reload();
}


if(sessionStorage.getItem('usersession')){
	let activeuser = JSON.parse(sessionStorage.usersession);
	console.log('user has an active session!');
	console.log(activeuser);
	navcontainer.append(`
	<div class="nav-item dropdown">
        <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <b>${activeuser.firstname} ${activeuser.lastname}</b>
        </div>
		<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
		<a class="dropdown-item" id="profile">My Profile</a>
          <a class="dropdown-item" id="logout">Logout</a>
        </div>
	  </div>`);
	  jumbotron.append(`
		<p class="lead">
		<button type="button" class="btn btn-warning btn-lg" role="button" data-toggle="modal" data-target="#addproductmodal">Add product</button>
		</p>`);
		display.innerText = `Welcome back ${activeuser.firstname}`;

		document.querySelector('#logout').addEventListener('click', ()=> {
			sessionStorage.removeItem('usersession');
			window.location.reload();
		});
} else {
	navcontainer.append(`<button class="btn btn-secondary" role="button" data-toggle="modal" data-target="#signinmodal">Sign in</button>`);
}

