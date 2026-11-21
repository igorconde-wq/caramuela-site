

$(document).ready(function () {

  setTimeout(function() { 
    $('.awnt__history__ld1__image').addClass('animate');
    $('.awnt__history__ld2').addClass('animate');
    $('awnt__creator__ld1__image').addClass('animate');
    $('.awnt__creator__ld2').addClass('animate');
    $('.awnt__advice__ld1__image').addClass('animate');
    $('.awnt__advice__ld2').addClass('animate');
    $('.hono__encompass').addClass('animate');
    $('.hono__box').addClass('animate');
    $('.hoin__box__image').addClass('animate');
    $('.hoin__box__description').addClass('animate');
    $('.caed__description__title').addClass('animate');
    $('.caed__category__boxs').addClass('animate');
    $('.caed__description__paragraph').addClass('animate');
    $('.toin__logo').addClass('animate');
    $('.toin__sidebar').addClass('animate');
    $('.awar__encompass').addClass('animate');
    $('.awar__box').addClass('animate');
    $('.awin__box__image').addClass('animate');
    $('.awin__box__description ').addClass('animate');
    $('.gall__encompass').addClass('animate');
    $('.gall__box').addClass('animate');
    $('.gain__encompass').addClass('animate');
    $('.gall .gain__box').addClass('animate');
    $('.gall-in .gain__box').addClass('animate');
    $('.part__ld1__image').addClass('animate');
    $('.part__ld2').addClass('animate');
    $('.cont__ld1__image').addClass('animate');
    $('.cont__ld2').addClass('animate');
    $('.hoin__box__image').addClass('animate');
    $('.hoin__box__description').addClass('animate');
    $('.toin__nav .btn-confira').addClass('animate');
    $('.topo__nav .btn-confira').addClass('animate');
    $('.topo__logo').addClass('animate');
    $('.topo__sidebar').addClass('animate');
    $('.owl-dots').addClass('animate');
    $('.rede-header').addClass('animate');
    $('.emph-firula').addClass('animate');
    $('.firula-artigos-inter1').addClass('animate');
    $('.firula-artigos-inter2').addClass('animate');
    $('.awar-firula1').addClass('animate');
    $('.awar-firula2').addClass('animate');
    $('#awarded-artists-inter').addClass('animate');

    $('.gall-in').addClass('animate');
    $('.artigos-inter').addClass('animate');
    $('#award-inter').addClass('animate');
    $('#honored').addClass('animate');
    $('#hoinred-inter').addClass('animate');
    $('.cont').addClass('animate');
    $('#participate').addClass('animate');
    $('#gallery-inter').addClass('animate');
    $('#category-edition').addClass('animate');
    $('.caed-bg').addClass('animate');
    
}, 900);


let dragCategory = $('.drag_category');

setTimeout(function() {
  dragCategory.addClass('active');
}, 980); 


setTimeout(function() {
  dragCategory.removeClass('active');
}, 6000); 





if($(window).outerWidth() <= 820){
  $('#category-edition').css('height', $(window).outerHeight());
  $('#category-edition').css('width', $(window).outerWidth());
}

$(".data-category").on('click', function(e){
    e.preventDefault();
    let year = $(this).attr('data-year'),
        $this = $(this)

    $.ajax({
        url: $url+"model/ajax-edition.php",
        data: { item: year, tipo: 'ganhadores' },
        type: "POST",
        success: function(data){
            $("#contentEdition").remove();
            $("#edit__content").append(data);
            
            $('.data-category').removeClass('active')
            setTimeout(function() { 
              $('.edit__content__box').addClass('animate')
              $('.edit__text').addClass('animate')
              $this.addClass('active')
            },500);

            if(!$('#cont-edition').hasClass('hide')){
                $('#cont-edition').animate({'margin-top': -$('#cont-edition').outerHeight()}, 900, function(){
                    $('#cont-edition').addClass('hide')
                    $('body').css('overflow', 'visible')
                    
                    setTimeout(function() { 
                      $('.edit__content__box').addClass('animate')
                      $('.edit__text').addClass('animate')
                      $this.addClass('active')
                    },500);
                    
                })
            }

            $('.carrossel_edit_category').owlCarousel({
              // loop:true,
              nav:true,
              dots: false,
              margin:0,
              // items:3,
              responsive:{
                  0:{
                      items:1, 
                  },
                  375:{
                      items:2, 
                  },
                  400:{
                      items:2, 
                  },
                  720:{
                    items:3, 
                  },
                  1024:{
                      items:5, 
                  },
                  1300:{
                      items:6, 
                  }
              }
            });

            $('html, body').animate({
                scrollTop: 0
            }, 900)
        },
        error: function(xhr, status, error){
            console.error(error);
        }
    });
});
  if($(window).outerWidth() <= 820){
    

    $('.vide__content').addClass('owl-carousel');
    $('.vide__content').addClass('carrossel-video');

    $('.carrossel-video').owlCarousel({
            // loop:true,
            nav:false,
            dots: true,
            margin:1,
            items:3
    });
    $('.carrossel-video .owl-next').html('>');
    $('.carrossel-video .owl-prev').html('<');
    $('.carrossel-video').css('width', $(window).outerWidth());
  }

    if ($(window).outerWidth() >= 992) {
      $('.carrossel-presetation').css('width', $('.carrossel-presetation').parent().outerWidth()).addClass('owl-carousel');

      $('.carrossel-presetation').owlCarousel({
              // loop:true,
              nav:false,
              dots: true,
              margin:0,
              items:3,
              responsive:{
                  1024:{
                      items:2, 
                  },
                  1300:{
                      items:3, 
                  }
              }
      });
      
      $('.carrossel-presetation .owl-next').html('>');
      $('.carrossel-presetation .owl-prev').html('<');
    }
    


  $(".edit-close").on('click', function(e){
    if($('#cont-edition').hasClass('hide')){
        $('#cont-edition').animate({'margin-top': 0}, 900, function(){
            $('#cont-edition').removeClass('hide')
            $('body').css('overflow', 'hidden')
        })
        // $('.data-category').removeClass('active')
        // $('.data-category:first').addClass('active')
    }
  });

    $('.carousel-video').owlCarousel({
          loop: false,
          margin: 10,
          nav: true,
          navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>",
          ],
          autoplay: false,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 3,
            },
            600: {
              items: 4,
            },
            1000: {
              items: 5,
            },
          },
      });

     /*Inicio - carousel-banner*/

    $('.carousel-banner').css('width', '100%');
    $('.bann__cnt').css('width', '100%');

    $('.carousel-banner').css('height', $(window).outerHeight());
    $('.bann__cnt').css('height', $(window).outerHeight());

    $('.carousel-banner').owlCarousel({
        loop: false,
        autoplay: false,
        dots: false,
        navigation: false,
        singleItem: true,
        responsiveClass: true,
        items: 1
    });
    /*Fim - carousel-banner*/

    
    $('.carousel-category-edition').css('width', $(window).outerWidth() - 150);

    if($(window).outerWidth() <= 600){
      $('.carousel-category-edition').css('width', $(window).outerWidth());
    }
    $('.carousel-category-edition').owlCarousel({
        // loop: true,
        // autoplay: true,
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        responsiveClass: true,
        transitionStyle: "fade",
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: {
              items: 3,
            },
            500: {
              items: 3,
            },
            600: {
              items: 5,
            },
            766: {
              items: 5,
            },
            1000: {
              items: 7,
            },
            1400: {
              items: 7,
            },
            1600: {
              items: 8,
            },
          },
    });


    $('.carousel-category-edition-bt').css('width', $(window).outerWidth() - 150);
    
    if($(window).outerWidth() <= 600){
      $('.carousel-category-edition-bt').css('width', $(window).outerWidth());
    }
    $('.carousel-category-edition-bt').owlCarousel({
        // loop: true,
        // autoplay: true,
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        responsiveClass: true,
        transitionStyle: "fade",
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: {
              items: 2,
            },
            500: {
              items: 2,
            },
            600: {
              items: 5,
            },
            766: {
              items: 5,
            },
            1000: {
              items: 7,
            },
            1400: {
              items: 7,
            },
            1600: {
              items: 8,
            },
          },
    });

     /*Inicio - Topo*/
     $(window).scroll(function () {
        let rolagem = $(this).scrollTop();
        if (rolagem >= 90 && $('#topo').hasClass('normal')) {
            $('#topo').removeClass('normal');
            $('#topo').addClass('flutuante');
            $('.awar__cta').addClass('active');
            setTimeout(function() {
              $('#topo').addClass('active');
            }, 300); 

        } // FIM - if(rolagem >= 200 && $('#topo').hasClass('normal')){
        if (rolagem < 90 && $('#topo').hasClass('flutuante')) {
            $('#topo').addClass('normal');
            $('#topo').removeClass('flutuante');
            $('.awar__cta').removeClass('active');
            setTimeout(function() {
              $('#topo').removeClass('active');
            }, 800); 
        } // FIM - if(rolagem < 200 && $('#topo').hasClass('flutuante')) {
    });
    /*Fim - Topo*/
    $(window).scroll(function () {
      let rolagem = $(this).scrollTop();
      if (rolagem >= 90 && $('#topo-inter').hasClass('normal')) {
          $('#topo-inter').removeClass('normal');
          $('#topo-inter').addClass('flutuante');
          setTimeout(function() {
            $('#topo').addClass('active');
            $('.artigo-inter').addClass('flutuante');
            
          }, 300); 

      } // FIM - if(rolagem >= 200 && $('#topo').hasClass('normal')){
      if (rolagem < 90 && $('#topo-inter').hasClass('flutuante')) {
          $('#topo-inter').addClass('normal');
          $('#topo-inter').removeClass('flutuante');
          setTimeout(function() {
            $('#topo').removeClass('active');
           
          }, 300); 
          $('.artigo-inter').removeClass('flutuante');
      } // FIM - if(rolagem < 200 && $('#topo').hasClass('flutuante')) {
  });


    
    if($(window).outerWidth() <= 850){
        $('[data-mobile-image]').each(function(){
                let $imagemMobile = $(this).attr('data-mobile-image');
                if($imagemMobile != ''){
                $(this).css('background-image', 'url('+$imagemMobile+')');
                }
        });
    }

    if($(window).outerWidth() <= 850){
      $('[data-mobile-image-dois]').each(function(){
              let $imagemMobile = $(this).attr('data-mobile-image-dois');
              if($imagemMobile != ''){
              $(this).css('background-image', 'url('+$imagemMobile+')');
              }
      });
  }

    if (typeof Inputmask !== 'undefined') {
      Inputmask({ "mask": "(99) [9]9999-9999" }).mask(document.querySelectorAll('.celular'));
    }

    $('.line-edition').css('width', $('.carousel-category-edition .owl-item').outerWidth() - 87);
    $('.line-edition').css('left', $('.carousel-category-edition .owl-item').outerWidth() / 2 + 46);

    $('.line-edition').css('width', $('.carousel-category-edition-bt .owl-item').outerWidth() - 87);
    $('.line-edition').css('left', $('.carousel-category-edition-bt .owl-item').outerWidth() / 2 + 46);

});  

if (typeof grecaptcha !== 'undefined') {
  grecaptcha.ready(function () {
    grecaptcha
      .execute(siteKey, {
        action: "submit",
      })
      .then(function (token) {
        for (rec of document.querySelectorAll(".g-recaptcha-response")) {
          rec.value = token;
        }
      });
  });
}


