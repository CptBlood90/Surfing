const slider = $(".products").bxSlider({
    pager: false,
    controls: false,
  });
  
  $(".products-slider__arrows--direction--prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
  });
  
  $(".products-slider__arrows--direction--next").click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
  });