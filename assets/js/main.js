// banner js start //
    $('.banner_slider').slick({
      arrows:false,
      autoplay:true,
      fade:true,
      autoplaySpeed:2000,
      speed:2500,
      dots:true,
      dotsClass:'banner_slider_dots'
      
    })
    // banner js ends //
    // new arrival item js starts
    $('.product_items').slick({
      slidesToShow:4,
      arrows:false,
      autoplay:true,
      autoplaySpeed:2000,
      speed:1000,
      
      
})
  // new arrival item js ends
  // Tooltip js Exported from bootstrap5 starts here
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
  // Tooltip js Exported from bootstrap5 ends here
  // deals timer countdown starts
  $('#deals_timer').countdown('2024/12/31', function(event) {
    var $this = $(this).html(event.strftime(''
      + 
      '<div class="deals_timer_pera"><span class="span_css">%D</span><span class="info_span_css">Days</span></div>'+
      '<span class="colone_span_css">:</span>'+
      '<div class="deals_timer_pera"><span class="span_css">%H</span><span class="info_span_css">Hours</span></div>'+
      '<span class="colone_span_css">:</span>'+
      '<div class="deals_timer_pera"><span class="span_css">%M</span><span class="info_span_css">Minuts</span></div>'+
      '<span class="colone_span_css">:</span>'+
      '<div class="deals_timer_pera"><span class="span_css">%S</span><span class="info_span_css">Sec</span></div>'
      ));
  });
  // deals timer countdown ends
  // deals slider slick here
  $('.deals_slider').slick({
      slidesToShow:2,
      slidesToScroll:2,
      arrows:false,
      autoplaySpeed:2000,
      speed:1500,
      dots:true,
      dotsClass:'deals_slider_dots'
    
})
  // deals slider slick here stoped here

  // leadership slider starts
  $('.leadership_main_slider').slick({
    slidesToShow:4,
    autoplay:true,
    autoplaySpeed:5000,
    speed:1500,
    arrows:false,
  })
  // leadership slider ends
  // shop --> cart plus / minus function starts here
  function cart_minus(){
    let btn = document.getElementById('cart_minus');
    let input = document.getElementById('cart_value');

    btn.addEventListener('click', function(){
      
      if(input.value < 2){
        btn.setAttribute('disabled', true)
      }else{
        input.value--;

      }
    })
  }
  cart_minus();

  function cart_plus(){
    let btn = document.getElementById('cart_plus');
    let input = document.getElementById('cart_value');

    btn.addEventListener('click', function(){
      if(input.value > 0){
        document.getElementById('cart_minus').removeAttribute('disabled')
      }
      input.value++;
    })
  }
  cart_plus();
  // shop --> cart plus / minus function ends here

  // shop --> slider starts here
  $('.jackets_thumbs_slider').slick({
    arrows:false,
    autoplay:true,
    asNavFor:'.jackets_thumbs_slider_nav',
    fade:true,
  })
  // shop --> slider ends here
  // shop --> nicher slider starts
  $('.jackets_thumbs_slider_nav').slick({
    slidesToShow:5,
    slidesToScroll:1,
    arrows:false,
    asNavFor:'.jackets_thumbs_slider',
    focusOnSelect:true,
    centerMode:true,
    centerPadding:'0px',
  })
  // shop --> nicher slider ends
  
  // about --> instagram sliders starts here
$('.slick_s').slick()
  // about --> instagram sliders ends here

// search button click event starts here
// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
// search button click event ends here