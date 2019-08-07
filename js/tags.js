//HEADER TAGS

$('#botao_header_facebook').on('click', function(){
    gtag('event', 'click', {
      'event_category': 'botao_header_facebook'
    });
});
$('#botao_header_instagram').on('click', function(){
    gtag('event', 'click', {
      'event_category': 'botao_header_instagram' 
    });
});

$('#botao_header_linkedin').on('click', function(){
    gtag('event', 'click', {
      'event_category': 'botao_header_linkedin'
    });
});

//HOME
$('#botao_home_inscrevase, #botao_home_inscrevase_secao2').on('click', function(){
    gtag('event', 'click', {
      'event_category': 'botao_home_inscrevase' 
    });
});
$('#botao_download_ebook').on('click', function(){
    gtag('event', 'click', {
      'event_category': 'botao_download_ebook'
    });
});

//O PREMIO
$('#botao_o_premio_inscrevase').on('click', function(){
    gtag('event', 'click', {
      'event_category': 'botao_opremio_inscrevase' 
    });
});

//CONFORTO E SUSTENTABILIDADE
$('#botao_conforto_inscrevase').on('click', function(){
    gtag('event', 'click', {
      'event_category': 'botao_sustentabilidade_inscrevase' 
    });
});


//REGULAMENTO
$('#botao_regulamento_inscrevase').on('click', function(){
    gtag('event', 'click', {
      'event_category': 'botao_regulamento_inscrevase' 
    });
});
$('#botao_download_regulamento').on('click', function(){
    gtag('event', 'click', {
      'event_category': 'botao_download_regulamento' 
    });
});
