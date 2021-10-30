$(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger,.header__list').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });



  $(function(){
    $('.slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        fade: true,
        slidesToShow: 1
   });
});



$(function(){
  $('.progress__slider').slick({
      arrows: true,
      dots: false,
      autoplay: false,
      fade: true,
      slidesToShow: 1,
   });
});



$(function(){
  $('.description__box-img').slick({
      lazyLoad: 'ondemand',
      arrows: false,
      dots: false,
      autoplay: false,
      fade: true,
      asNavFor: '.description__box-text',
      slidesToShow: 1,
   });
});



$(function(){
  $('.description__box-text').slick({
      arrows: false,
      dots: true,
      autoplay: false,
      fade: true,
      asNavFor: '.description__box-img',
      slidesToShow: 1,
   });
});



$(function(){
  $('.benefits__slider').slick({
      lazyLoad: 'ondemand',
      arrows: true,
      dots: false,
      autoplay: false,
      fade: true,
      slidesToShow: 1,
   });
});



$(function(){

  $('.progress__tabs-link').on('click', function(e) {
      e.preventDefault();

      $('.progress__tabs-link').removeClass('progress__tabs-link--active');
      $(this).addClass('progress__tabs-link--active');

      $('.progress__container').removeClass('progress__container--active');
      $($(this).attr('href')).addClass('progress__container--active');
  });
});



$(document).ready(function(){
  $('.home__heading').click(function(event) {
    if($('.home-nav__list').hasClass('one')){
      $('.home__heading').not($(this)).removeClass('active');
      $('.home__container').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});




$(document).ready(function(){

  function heightBlock(column){
    var myblock = 0;

    column.each(function(){
      thisHight = $(this).height();
      if(thisHight > myblock){
        myblock = thisHight;
      }
    });
  column.height(myblock);
};

heightBlock($('.home-apartment__column > div'));

})