
// $('.threebars').click(function() {
//     $('.navmenu').show()
//     $('threebars').attr('src',"images/xx.png");
//     // $('.xx').show()
//   })
$(document).ready(function(){
  $('.ga').slick({
    dots: true,
  })
  $('.welcome').show()
})


$(".tog").click(function(){
  $('img', this).toggle();
  $('.nothercontain').toggle()
  $('.navmenu').toggle()
})


$('.threebars').click(function(){
  $('.welcome').hide()
  $('.journalism').hide()
  $('.gis').hide()
  $('.aboutme').hide()
  $('.ga').css('visibility', 'hidden')
  // $('.particles').addClass('filter')
})

// if ($('.welcome').css('display') !== 'none'){
//   $('.xx').click(function(){
//     $('.particles').removeClass('filter')
//   })
// }

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

    $('.aboutme').show()
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
  $('.ga').css('visibility', 'visible')
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
  $('.journalism').show()
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
  $('.gis').show()
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
  $('.welcome').show()
})
