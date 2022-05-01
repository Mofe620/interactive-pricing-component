var pages = document.querySelector('#views')
var price = document.querySelector('#price')
var slider = document.querySelector('input[type="range"]')
var discount = document.querySelector('input[type="checkbox"]')
slider.addEventListener('change', handleInputChange)

function handleInputChange(e) {
  let target = e.target
  let min = target.min
  let max = target.max
  let val = target.value
  target.style.background = `linear-gradient(to right, #fff 0%, 
                                                       hsl(174, 86%, 45%) ${val}%,  
                                                       #fff ${val}%, 
                                                       #fff 100%)`;
  target.style.transition = 'background 0.2s ease';
  
  if (val == 0){
    pages.textContent = "0";
    price.textContent = "$0.00";
  }
  if (val == 20){
    pages.textContent = "10K";
    price.textContent = "$8.00";
  }
  if (val == 40){
    pages.textContent = "50K";
    price.textContent = "$12.00";
  }
  if (val == 60){
    pages.textContent = "100K";
    price.textContent = "$16.00";
  }
  if (val == 80){
    pages.textContent = "500K";
    price.textContent = "$24.00";
  }
  if (val == 100){
    pages.textContent = "1M";
    price.textContent = "$36.00";
  }

  //YEARLY DISCOUNT
  if (discount.checked == true){
    var newPrice = parseInt(price.textContent.slice(1)) * 0.75;
    price.textContent = "$" + newPrice + ".00";
  }
}

discount.addEventListener("change", function(){
  //To prevent repeated discounting if checkbox is toggled multiple times
  originalPrices = ["$0.00", "$8.00", "$12.00", "$16.00", "$24.00", "$36.00"] 

  if (discount.checked == true && originalPrices.includes(price.textContent)){
    var newPrice = parseInt(price.textContent.slice(1)) * 0.75;
    price.textContent = "$" + newPrice + ".00";
  }
})
  
