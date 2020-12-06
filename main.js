function InvalidMsg(textbox,thing) { 
	if (textbox.value === '') { 
		textbox.setCustomValidity('Entering '+thing+' is necessary!'); 
	} else if (textbox.validity.patternMismatch) { 
		textbox.setCustomValidity('Please enter '+thing+' which is valid!'); 
	} else { 
		textbox.setCustomValidity(''); 
	} 
	return true;
} 

function login() {
	$('#document').ready(function(){
    	$('#form').submit(function(){
    		var email = document.main_form.email.value;
    		var pwd = document.main_form.pwd.value;
    		if (email == 'example@example.com' && pwd == 'example123##') {
        		localStorage.setItem("email", email);
        		window.location.href = './welcome.html';
        	} else if (email == 'example2@example.com' && pwd == 'example2123') {
        		localStorage.setItem("email", email);
        		window.location.href = './welcome.html';
        	} else {
        		$('.wrong_id').fadeIn(300);
        	}
        	return false;
    	});
    });
}

function load_name() {
	var username = localStorage.getItem('email');
	var log_element = document.getElementById("login");
	var log_out_element =  document.getElementById("log_out");
	if (username !== null) {
		document.getElementById("email").innerText = username;
		log_element.style.display='none';
	} else {
		document.getElementById("email").innerText = "Guest";
		log_out_element.style.display='none';
		$('.main-box').click(function(){
			window.location.href='./login.html';
			return false;
		})
	}
}

function log_out() {
	localStorage.removeItem('email');
	document.location.href = "./welcome.html";
	return false;
}

function date_show() {
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	document.getElementById("date").innerText = date;
}

function load_price(price) {
	var amount = $('#quantity option:selected').val();
	var t_price = amount*price;
	document.getElementById('price').innerText = t_price;
}

function add_cart(item) {
	var amount = $('#quantity option:selected').val();
	localStorage.setItem(item,amount);
}

function t_items() {
	var t_items = 0;
	if (localStorage.getItem('watch1')!==null) {
		var t_items = t_items+parseInt(localStorage.getItem('watch1'));
	}
	if (localStorage.getItem('watch2')!==null) {
		var t_items = t_items+parseInt(localStorage.getItem('watch2'));
	}
	if (localStorage.getItem('watch3')!==null) {
		var t_items = t_items+parseInt(localStorage.getItem('watch3'));
	}
	if (localStorage.getItem('watch4')!==null) {
		var t_items = t_items+parseInt(localStorage.getItem('watch4'));
	}
	if (localStorage.getItem('watch5')!==null) {
		var t_items = t_items+parseInt(localStorage.getItem('watch5'));
	}
	document.getElementById('no_items').innerText = t_items;
}