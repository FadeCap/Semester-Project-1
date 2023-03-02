const toTopButton = document.getElementById("top-button")
const logo = document.getElementById('logo')
const sendToTop = () => {
  window.scrollTo({top:0, behavior:'smooth'})
}

const showButton = () => {
  if(window.scrollY > 130) {
    toTopButton.style.opacity = '100'
    toTopButton.style.visibility = 'visible'
    toTopButton.style.bottom = '2rem';
    
  } else {
    toTopButton.style.opacity = '0'
    toTopButton.style.visibility = 'hidden'
    toTopButton.style.bottom = '4rem';

  }

  if((window.innerHeight + window.pageYOffset + 130) > document.body.scrollHeight ) {
    toTopButton.style.position = 'absolute'
  } else {
    toTopButton.style.position = 'fixed'
  }
}

const animateLogo = () => {
  if (logo.classList.contains('spin')){
     return;
    }
  logo.classList.add('spin');
  setTimeout(() => {
    logo.classList.remove('spin')
  }, 6000);
}

toTopButton.addEventListener('click', sendToTop)
logo.addEventListener('mouseenter', animateLogo)
window.addEventListener('scroll', showButton)