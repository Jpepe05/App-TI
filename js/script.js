$(document).ready(function(){


	// 
	// CODE TO BRING HEADER IN AND OUT
	//

	(function(){
		var previousScroll = 0;

		$('.messages_section').scroll(function(){
			var currentScroll = $('.messages_section').scrollTop();

			if(currentScroll > previousScroll){
				if(currentScroll > 0 && currentScroll <= 90){
					// Slightly move scroll
					$('.title_bar').css('margin-top' , '-' + currentScroll + 'px');
				} else {
					// Scrolling down put passed slide zone
					$('.title_bar').css('margin-top', '-90px');
				}
			} else {
				if(currentScroll <= 90){
					$('.title_bar').css('margin-top' , '-' + currentScroll + 'px');
				} else {
					$('.title_bar').css('margin-top', '-90px');
				}
			}
			previousScroll = currentScroll;
		});
	}());

	//
	// CODE TO BRING UP IMAGE LIGHTBOX
	//
	$('.image_container').click(function(){
		var thisimage = $(this).children('img').attr('src');
		var thisname  = $(this).parent().find('.user_name name').text();
		
		$('.lightbox_name').text(thisname);
		$('.lightbox_image img').attr('src' , thisimage);
		$('.lightbox').css('display' , 'flex');
		$('.lightbox').animate({opacity: 1}, 600);
		$('.lightbox_container').show("slow");
	});

	// Hide lightbox
	$('.lightbox').click(function(e){
		if($(e.target).attr('class') == 'lightbox'){
			// If element clicked is lightbox and not child
			var q = $(this);
			q.animate({opacity: 0}, 600);
			$('.lightbox_container').hide("slow");

			setTimeout(function(){
				q.css('display' , 'none');
			}, 700);
		}
	});

	//
	// CODE TO MAKE SEARCH WORK
	//
	$('.icon_container div:nth-child(2) img').click(function(){
		$('.search_bar').css('display' , 'block');
		$('.back_trigger').css('display' , 'block');
		$('.search_bar').animate({opacity: 1, width: '100%'}, 600);
		$('.title_bar').animate({marginTop: '-90px'}, 600);
		$('.search_bar').focus();
	});

	$('.back_trigger').click(function(){
		$('.search_bar').val('');
		$('.search_bar').keyup();
		$('.search_bar').animate({opacity: 0}, 600);
		$('.back_trigger').css('display' , 'none');
		$('.title_bar').animate({marginTop: '0px'}, 600);

		setTimeout(function(){
			$('.search_bar').css('display' , 'none');
		}, 600);
	});

	$('body').on('change, keyup' , '.search_bar', function(){
		var thisvalue  = $(this).val().toLowerCase();
		var thislength = $(this).val().length;

		$('.single_chat').each(function(){
			var thischat = $(this);
			var name 	 = $(this).find('.user_name name').text().toLowerCase();

			if(name.indexOf(thisvalue) < 0){
				thischat.hide("slow");
			} else {
				thischat.show("slow");
			}
		});
	});

	//
	// CODE TO ENABLE MENU
	//
	$('.icon_container div:nth-child(1) img').click(function(){
		$('.dropdown_menu').animate({width: '200px', height: '200px', opacity: 1}, 400);
	});

	// Hide menu
	$('*').click(function(e){
		if($('.dropdown_menu').height() > 100){
			if($(e.target).attr('class') != 'dropdown_menu' || $(e.target).attr('class') != 'dropdown_item'){
				$('.dropdown_menu').animate({width: '0px', height: '0px', opacity: 0}, 400);
			}
		}
	});

});


	/*Form validation*/

	const btnLogin = document.querySelector(".btn-login");
	const form = document.querySelector("form");
	const usuarios = ['João','partyU','Pedro','Greg','Jhonny','Lucas','Harry','Drake','Ellie'];
	const senhas =  ['123','123','123456','chris','666666','178080','potter','Josh','7707070'];
	const nome = document.getElementById("login-user").value;
	btnLogin.addEventListener("click", event => {
	  event.preventDefault();
	
	  const fields = [...document.querySelectorAll(".input-block input")];
	  
	  fields.forEach(field => {
		
		if (field.value === "") form.classList.add("validate-error");
		else{
		  let user = document.getElementById("login-user").value;
		  let password = document.querySelector("#login-password").value;
		  valida(user, password);      
		}
	  });
		function valida(user, password){
		  var valido = false;
		  
		  for(i = 0; i < usuarios.length; i++){
			if(user == usuarios[i] && password == senhas[i])
			valido = true;
		  }
		 
		  if(valido == true){
			
			alert(`seja bem vindo à festa ${user}`);
			
			
			location = "eventos.html";
			username.innerHTML = `${user}`;
		 }
		  else{
			alert("usuário ou senha não cadastrados");
			form.classList.add("validate-error");
		  }
		}
		
	  
	  const formError = document.querySelector(".validate-error");
	  if (formError) {
		formError.addEventListener("animationend", event => {
		  if (event.animationName === "nono") {
			formError.classList.remove("validate-error");
		  }
		});
	  } else {
		form.classList.add("form-hide");
	  }
	});
	
	form.addEventListener("animationstart", event => {
	  if (event.animationName === "down") {
		document.querySelector("body").style.overflow = "hidden";
	  }
	});
	
	form.addEventListener("animationend", event => {
	  if (event.animationName === "down") {
		form.style.display = "none";
		document.querySelector("body").style.overflow = "none";
	  }
	});
	
	/* background square animation */
	const ulSquares = document.querySelector("ul.squares");
	
	for (let i = 0; i < 11; i++) {
	  const li = document.createElement("li");
	
	  const random = (min, max) => Math.random() * (max - min) + min;
	
	  const size = Math.floor(random(10, 120));
	  const position = random(1, 99);
	  const delay = random(5, 0.1);
	  const duration = random(24, 12);
	
	  li.style.width = `${size}px`;
	  li.style.height = `${size}px`;
	  li.style.bottom = `-${size}px`;
	
	  li.style.left = `${position}%`;
	
	  li.style.animationDelay = `${delay}s`;
	  li.style.animationDuration = `${duration}s`;
	  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
	
	  ulSquares.appendChild(li);
	}

