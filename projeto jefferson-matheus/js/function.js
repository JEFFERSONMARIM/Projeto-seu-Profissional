$(function(){
  
    var delay = 3000;
	var curIndex = 0;
	var amt;

	initSlider();
	autoPlay();

	function initSlider(){
		amt = $('.mini-img-wraper').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;

        $('.mini-img-wraper').css('width',sizeBoxSingle+'%');
        $('.nav-galeria-wraper').css('width',sizeContainer+'%');

        for(var i = 0; i < amt; i++){
			if(i == 0)
				$('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>');
			else
				$('.slider-bullets').append('<span></span>');
		}
	}

    function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt)
				curIndex = 0;
			goToSlider(curIndex);			
		},delay)
	}

	function goToSlider(curIndex){

        var offSetX = $('.mini-img-wraper').eq(curIndex).offset().left - $('.nav-galeria-wraper').offset().left;
        $('.slider-bullets span').css('background-color','rgb(200,200,200)');
		$('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');
		$('.slide-single').stop().animate({'scrollLeft':offSetX+'px'});
	}

	$(window).resize(function(){
		$('.slide-single').stop().animate({'scrollLeft':0});
	})


    // Clicar e ir para div de contato com base no atributo GOTO

	$('[goto=contato]').click(function(){
		$('nav a').css('color','black');
		$(this).css('color','#EB2D2D');
		$('html,body').animate({'scrollTop':$('#contato').offset().top});
		return false;
	})


	
    
})


$(function(){
	$('form').submit(function(){
		var erro = false;
		var nome = $('[name=nome]').val();
		var email = $('[name=email]').val();
		var telefone = $('[name=telefone]').val();
		var endereco = $('[name=endereco]').val();
		var bairro = $('[name=bairro]').val();
		var cidade = $('[name=cidade]').val();
		var servico= $('[name=servico]').val();
		var mensagem= $('[name=mensagem]').val();
		resetForm();
		if(nome == ''){
			erro = true;
			var el = $('[name=nome]');
			el.parent().find('span').html('Por favor insira seu nome.');
			el.css('border','2px solid red');
		}
		if(endereco == ''){
			erro = true;
			var el = $('[name=endereco]');
			el.parent().find('span').html('Por favor insira seu endereço.');
			el.css('border','2px solid red');
		}
		if(bairro == ''){
			erro = true;
			var el = $('[name=bairro]');
			el.parent().find('span').html('Por favor insira seu Bairro.');
			el.css('border','2px solid red');
		}
		if(cidade == ''){
			erro = true;
			var el = $('[name=cidade]');
			el.parent().find('span').html('Por favor insira sua cidade.');
			el.css('border','2px solid red');
		}
		if(email == ''){
			erro = true;
			var el = $('[name=email]');
			el.parent().find('span').html('Por favor insira seu E-mail.');
			el.css('border','2px solid red');
		}
		if(telefone == ''){
			erro = true;
			var el = $('[name=telefone]');
			el.parent().find('span').html('Por favor insira seu telefone.');
			el.css('border','2px solid red');
		}
		if(servico == ''){
			erro = true;
			var el = $('[name=servico]');
			el.parent().find('span').html('Por favor insira seu serviço.');
			el.css('border','2px solid red');
		}
		if(mensagem == ''){
			erro = true;
			var el = $('[name=mensagem]');
			el.parent().find('span').html('Por favor insira sua mensagem.');
			el.css('border','2px solid red');
		}

		if(erro == false){
			$('.box-sucesso').fadeIn(function(){
				setTimeout(function(){
					$('.box-sucesso').fadeOut();
				},3000);
			});
			$(this)[0].reset();
		}

		return false;
	})

	function resetForm(){
		$('input[type=text],textarea').css('border','1px solid #ccc');
		$('span').html('');
	}
})