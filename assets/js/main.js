console.log('hey!')

// Motion wheel
document.addEventListener('scroll', function(e) {
  let scrollPos = window.scrollY
  let wheel = document.getElementsByClassName('c-shape-motion-wheel')[0]

  wheel.style.transform = `rotate(${scrollPos / 8}deg)`;
})