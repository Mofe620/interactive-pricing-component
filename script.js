var slider = document.querySelector('input[type="range"]')
slider.addEventListener('change', handleInputChange)

function handleInputChange(e) {
  let target = e.target
//   if (e.target.type !== 'range') {
//     target = document.getElementById('range')
//   } 
  const min = target.min
  const max = target.max
  const val = target.value
 
//   target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  target.style.background = `linear-gradient(to right, #fff 0%, 
                                                       hsl(174, 86%, 45%) ${val}%,  
                                                       #fff 51%, 
                                                       #fff 100%)`;
  target.style.transition = 'background 0.2s ease';
}