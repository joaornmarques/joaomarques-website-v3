console.log('hey!')

document.addEventListener('scroll', function(e) {

  // Toggle navbar blend mode
  /*
  let navbar = document.getElementsByClassName('c-navbar')[0]
  if (scrollPos > 80) {
    navbar.classList.add('c-navbar--blend');
  } else {
    navbar.classList.remove('c-navbar--blend');
  }
  */

  // Motion wheel
  let wheel = document.getElementsByClassName('c-shape-motion-wheel')[0]
  if(wheel) {
    let scrollPos = window.scrollY
    wheel.style.transform = `rotate(${scrollPos / 8}deg)`;
  }
})