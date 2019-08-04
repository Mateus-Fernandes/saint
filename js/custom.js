$(".hamburger").click(function()
{
    $(".menu").toggleClass("open_menu");
});
$(".closer").click(function()
{
    $(".menu").removeClass("open_menu");
});

$(document).mouseup(function (e) {
  var popup = $(".menu");
  if (!$('.menu').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
      $(".menu").removeClass("open_menu");
  }
  $(".hamburger").click(function()
  {
      $(".menu").toggleClass("open_menu");
  });
});

$(".menu a").click(function()
{
    $(".menu").removeClass("open_menu");
});
$(document).ready(function() {
  
  $("#premio_read").click(function() {
    $( this ).toggleClass( "expandido" );
    var elem = $("#premio_read").children('.text').text();
    if (elem == "Continuar Lendo") {
      //Stuff to do when btn is in the read more state
      $("#premio_read").children('.text').text("Encolher texto");
      $(".read_more_text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#premio_read").children('.text').text("Continuar Lendo");
      $(".read_more_text").slideUp();
    }
  });





  $("a.link_page").click(function() {
    $link = $(this).attr("href");
    $("body").fadeOut(200);
    setTimeout(function(){
        window.location.replace($link);
    },200);
    return false;
  });

  $(".descer").click(function() {
    $.fn.pagepiling.moveSectionDown();
  });
  $(".subir").click(function() {
    $.fn.pagepiling.moveTo(1);
  });
  $(".to_top").click(function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});  
	$('#fullpage').pagepiling({
        anchors: ['secao_1', 'secao_2', 'categorias_home', 'conforto', 'regulamento', 'como_foi', 'footer'],
        menu: '#MenuLinks',
        scrollingSpeed: 300,
        normalScrollElements: '#scroll',
        onLeave: function(index, nextIndex, direction){
            if(index == 1 && direction =='down'){
				$('.mulher').addClass('to_left');
			}
			else if(index == 2 && direction == 'up'){
				$('.mulher').removeClass('to_left');
            }
            else if(index == 3 && direction =='up'){
				$('.mulher').addClass('to_left');
			}
        },
        afterLoad: function(anchorLink, index){
			//using index
			if(index == 3 || index == 4 || index == 5 || index == 6 || index == 7){
                $('.mulher').addClass('sumir');
                $('header').addClass('blue');
                $('.menu').addClass('blue');
            }
            else if(index == 1) {
                $('.mulher').removeClass('to_left');
                $('.mulher').removeClass('sumir');
            }
            else {
                $('.mulher').removeClass('sumir');
                $('header').removeClass('blue');
                $('.menu').removeClass('blue');
            }
        }
    });
});

  $('.apoiadores').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  if (document.getElementById('video_box')) { 
    document.getElementById('play_btn').onclick = function (){
    document.getElementById('play_btn').style.display = 'none';
    document.getElementById('video').load();
    document.getElementById('video').play();
    document.getElementById('video').setAttribute("controls","controls");
  };
  };


  
  $('#modalExample').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Botão que acionou o modal
    var url = button.data('link') // Extrai informação dos atributos data-*

    $.get( url, function( data ) {
      $( "#resultModal" ).html( data );
    });
  });

  /*MODAIS*/
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});