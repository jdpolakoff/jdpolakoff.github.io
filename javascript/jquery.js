
// $('.threebars').click(function() {
//     $('.navmenu').show()
//     $('threebars').attr('src',"images/xx.png");
//     // $('.xx').show()
//   })

var filter = false


$(".tog").click(function(){
  $('img', this).toggle();
  $('.nothercontain').toggle()
  $('.navmenu').toggle()
})


// $('.threebars').click(function(){
//   $('.particles').addClass('filter')
// })

// $('.xx').click(function(){
//   $('.particles').removeClass('filter')
// })



// $('.xx').click(function() {
//     $('.navmenu').hide()
//     $('.xx').hide()
//   })

$('#bigtopic').click(function(){
  $('.subtopic').toggle()
})

$(document).ready(function(){
  $('.ga').slick({
    dots: true
  })
})


$('#web').click(function(){
  $('img', '.tog').toggle();
  $('.nothercontain').toggle()
  $('.navmenu').toggle()
  $('.particles').addClass('filter')
  $('.ga').css('visibility', 'visible')
  $('.welcome').hide()
  $('.journalism').hide()
})

$('#journalism').click(function(){
  $('img', '.tog').toggle();
  $('.nothercontain').toggle()
  $('.particles').addClass('filter')
  $('.navmenu').toggle()
  $('.welcome').hide()
  $('.ga').css('visibility', 'hidden')
  $('.journalism').show()
})
