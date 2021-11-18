$(function(){

    var indiceAtual = 0;
	var indiceMaximo = $('.galeria').length;
	var delay = 5000;
    
    initSlider();
    cliqueSlider();

    function initSlider(){
        var amt = $('.galeria').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.galeria').css ('width',sizeBoxSingle+'%');
        $('.caixa').css('width',sizeContainer+'%');
    }

    function cliqueSlider(){
		$('.bullets span').click(function(){
			$('.galeria').eq(indiceAtual).stop().fadeOut(2000);
			indiceAtual = $(this).index();
			$('.galeria').eq(indiceAtual).stop().fadeIn(2000);
			$('.bullets span').css('background-color','#ccc');
			$(this).css('background-color','#069');
		});
	}

    function alternarSlider(){
		$('.galeria').eq(indiceAtual).stop().fadeOut(2000);
		indiceAtual+=1;
		if(indiceAtual == indiceMaximo)
			indiceAtual = 0;
		$('.bullets span').css('background-color','#ccc');
		$('.bullets span').eq(indiceAtual).css('background-color','#069');
		$('.galeria').eq(indiceAtual).stop().fadeIn(2000);
	}

	

})