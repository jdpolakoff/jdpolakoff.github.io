
// $('.threebars').click(function() {
//     $('.navmenu').show()
//     $('threebars').attr('src',"images/xx.png");
//     // $('.xx').show()
//   })
var shake

$(document).ready(function(){
  $('.ga').slick({
    dots: true,
  })
  $('.welcome').fadeIn(1500)
})


$(".tog").click(function(){
  $('img', this).toggle();
})

$('.xx').click(function(){
  $('.nothercontain').hide()
  $('.navmenu').hide()
  $('.particles').removeClass('filter')
  shake = setInterval(function(){
    $('.threebars').effect('shake', 300)
  }, 3500)
})

$('.threebars').click(function(){
  window.clearInterval(shake)
  $('.welcome').hide()
  $('.journalism').hide()
  $('.gis').hide()
  $('.aboutme').hide()
  $('.ga').css('visibility', 'hidden')
  $('.nothercontain').fadeIn(400)
  $('.navmenu').fadeIn(400)
  $('.particles').addClass('filter')
})


$('#bigtopic').click(function() {
  $('.subtopic').toggle()
  $(this).text(function(i, v) {
    return v === 'Projects +' ? 'Projects -' : 'Projects +'
  })
})

// $('.xx').click(function() {
//     $('.navmenu').hide()
//     $('.xx').hide()
//   })



  $('#aboutme').click(function(){
    $('img', '.tog').toggle();
    $('.nothercontain').toggle()
    $('.navmenu').toggle()
    $('.particles').addClass('filter')

    $('.ga').css('visibility', 'hidden')
    $('.journalism').hide()
    $('.gis').hide()
    $('.welcome').hide()

    $('.aboutme').fadeIn(300)
  })


$('#web').click(function(){
  $('img', '.tog').toggle();
  $('.nothercontain').toggle()
  $('.navmenu').toggle()
  $('.particles').addClass('filter')

  $('.welcome').hide()
  $('.journalism').hide()
  $('.gis').hide()
  $('.aboutme').hide()
  $('.ga').animate({opacity: 1}, 'fast', function(){
    $('.ga').css('visibility', 'visible')
  })
})

$('#journalism').click(function(){
  $('img', '.tog').toggle();
  $('.nothercontain').toggle()
  $('.particles').addClass('filter')
  $('.navmenu').toggle()

  $('.ga').css('visibility', 'hidden')
  $('.welcome').hide()
  $('.gis').hide()
  $('.aboutme').hide()
  $('.journalism').fadeIn(300)
})

$('#gis').click(function(){
  $('img', '.tog').toggle();
  $('.nothercontain').toggle()
  $('.navmenu').toggle()
  $('.particles').addClass('filter')

  $('.welcome').hide()
  $('.ga').css('visibility', 'hidden')
  $('.journalism').hide()
  $('.aboutme').hide()
  $('.gis').fadeIn(300)
})

$('#home').click(function(){
  $('img', '.tog').toggle();
  $('.nothercontain').toggle()
  $('.navmenu').toggle()
  $('.particles').removeClass('filter')

  $('.ga').css('visibility', 'hidden')
  $('.journalism').hide()
  $('.aboutme').hide()
  $('.gis').hide()
  $('.welcome').fadeIn(300)
})
