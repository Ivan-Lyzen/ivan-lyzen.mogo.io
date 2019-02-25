var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;
var slideInterval = 5000;

//сам слайдер, проверка нпо наявности блока по очеред
function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('#slidewrapper').css('transform', 'translate(0, 0)');
    slideNow = 1;
  } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
  }
}


$(document).ready(function () {
    setInterval(nextSlide, slideInterval);
});

//остановка прокрутки при наведении курсора
$(document).ready(function () {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });
});





//buttons
var navBtnId = 0;
$('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
});





//Accordion
var accordion = function() {
  var data = $(".my-accordeon").attr("Toggle");

  $(".accordeon-header").on("click", function() {
    if (data === "close"){
      $(".desc-boxone").slideUp();
      if ($(this).hasClass("active")){
        $(this).toggleClass("active");
      }
      else{
        $(".accordeon-header").removeClass("active");
        $(this).toggleClass("active");
      }
    }
    else{
      $(this).toggleClass("active");
    }
    $(this).next(".desc-boxone").not(":animated").slideToggle();
  });
}
accordion();





//quotes slider
$(document).ready(function(){
  $('.next').click(function(){
    var currentImage = $('.slider-inner.curry');
    var currentImageIndex = $('.slider-inner.curry').index();
    var nextImageIndex = currentImageIndex + 1;
    var nextImage = $('.slider-inner').eq(nextImageIndex);
    currentImage.fadeOut(1000);
    currentImage.removeClass('curry');

    if(nextImageIndex == ($('.slider-inner:last').index()+1)){
      $('.slider-inner').eq(0).fadeIn(1000);
      $('.slider-inner').eq(0).addClass('curry');
    } else {
      nextImage.fadeIn(1000);
      nextImage.addClass('curry');
    }
  });

  $('.prev').click(function() {
    var currentImage = $('.slider-inner.curry');
    var currentImageIndex = $('.slider-inner.curry').index();
    var prevImageIndex = currentImageIndex - 1;
    var prevImage = $('.slider-inner').eq(prevImageIndex);

    currentImage.fadeOut(1000);
    currentImage.removeClass('curry');
    prevImage.fadeIn(1000);
    prevImage.addClass('curry');

  });
});




//quotestwo slider
$(document).ready(function(){
  $('.next').click(function(){
    var currentImage = $('.slider-innertwo.curry');
    var currentImageIndex = $('.slider-innertwo.curry').index();
    var nextImageIndex = currentImageIndex + 1;
    var nextImage = $('.slider-innertwo').eq(nextImageIndex);
    currentImage.fadeOut(1000);
    currentImage.removeClass('curry');

    if(nextImageIndex == ($('.slider-innertwo:last').index()+1)){
      $('.slider-innertwo').eq(0).fadeIn(1000);
      $('.slider-innertwo').eq(0).addClass('curry');
    } else {
      nextImage.fadeIn(1000);
      nextImage.addClass('curry');
    }
  });

  $('.prev').click(function() {
    var currentImage = $('.slider-inner.currytwo');
    var currentImageIndex = $('.slider-innertwo.curry').index();
    var prevImageIndex = currentImageIndex - 1;
    var prevImage = $('.slider-innertwo').eq(prevImageIndex);

    currentImage.fadeOut(1000);
    currentImage.removeClass('curry');
    prevImage.fadeIn(1000);
    prevImage.addClass('curry');

  });
});
