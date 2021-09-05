function toggleText() {
  
  const btn = document.querySelector('.toggle-text-button');
  const textBlock = document.querySelector('#text');

  btn.addEventListener('click', () => {
    if ( textBlock.hidden ) {
      textBlock.hidden = false;
    } else 
    textBlock.hidden = true;
  });

}