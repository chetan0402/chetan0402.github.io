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
	return t_items;
}

function load_cart() {
	var watch1 = localStorage.getItem('watch1');
	var watch2 = localStorage.getItem('watch2');
	var watch3 = localStorage.getItem('watch3');
	var watch4 = localStorage.getItem('watch4');
	var watch5 = localStorage.getItem('watch5');
	if (watch1!==null) {
		document.getElementById('watch1_quan').innerText = watch1;
	} else {
		document.getElementById('watch1_cart').style.display = 'none';
	}
	if (watch2!==null) {
		document.getElementById('watch2_quan').innerText = watch2;
	} else {
		document.getElementById('watch2_cart').style.display = 'none';
	}
	if (watch3!==null) {
		document.getElementById('watch3_quan').innerText = watch3;
	} else {
		document.getElementById('watch3_cart').style.display = 'none';
	}
	if (watch4!==null) {
		document.getElementById('watch4_quan').innerText = watch4;
	} else {
		document.getElementById('watch4_cart').style.display = 'none';
	}
	if (watch5!==null) {
		document.getElementById('watch5_quan').innerText = watch5;
	} else {
		document.getElementById('watch5_cart').style.display = 'none';
	}
}

function remove_item(item,number) {
	if (number == 5) {
		localStorage.removeItem(item);
	} else if (localStorage.getItem(item) == 1) {
		localStorage.removeItem(item);
	} else {
		var amount = parseInt(localStorage.getItem(item))-number;
		localStorage.setItem(item,amount);
	}
}

function g_total() {
	var watch1 = localStorage.getItem('watch1');
	var watch2 = localStorage.getItem('watch2');
	var watch3 = localStorage.getItem('watch3');
	var watch4 = localStorage.getItem('watch4');
	var watch5 = localStorage.getItem('watch5');
	var g_total = (watch1*5999)+(watch2*7995)+(watch3*2099)+(watch4*359)+(watch5*415)
	document.getElementById('grand_price').innerText = g_total;
}

function buy() {
	if (t_items()==0) {
		alert('There are no item in the cart.')
	} else {
		remove_item('watch1',5);
		remove_item('watch2',5);
		remove_item('watch3',5);
		remove_item('watch4',5);
		remove_item('watch5',5);
		load_cart();
		document.getElementById('thanks').style.display = 'block';
		document.getElementById('side_grand').style.display = 'none';
	}
}

function need_help() {
	document.getElementById('help').style.display = 'none';
	$('#help_btn').click(function() {
		document.getElementById('help').style.display = 'block';
	});
}