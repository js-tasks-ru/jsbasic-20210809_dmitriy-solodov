function initCarousel() {
    
  const btnArrowRight = document.querySelector('.carousel__arrow_right');
  const btnArrowLeft = document.querySelector('.carousel__arrow_left');

  btnArrowLeft.style.display = 'none';

  const gallery = document.querySelector('.carousel__inner');
  const galleryWidth = gallery.offsetWidth;

  let positionRight = galleryWidth;
  let positionLeft = galleryWidth;

  let sliderCont = document.querySelectorAll('.carousel__slide').length;

  btnArrowRight.addEventListener('click', () => {
      
    btnArrowLeft.style.display = '';

    if (positionRight == galleryWidth * (sliderCont - 1)) {
      btnArrowRight.style.display = 'none';
    }

    gallery.style.transform = "translateX(-" + positionRight + "px)";
    positionRight += galleryWidth;
    positionLeft -= galleryWidth;

  });

  btnArrowLeft.addEventListener('click', () => {

    btnArrowRight.style.display = '';

    if (positionLeft == 0) {
      btnArrowLeft.style.display = 'none';
    }

    gallery.style.transform = "translateX(" + positionLeft + "px)";
    positionLeft += galleryWidth;
    positionRight -= galleryWidth;

  });

}