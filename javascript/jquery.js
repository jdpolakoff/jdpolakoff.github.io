
// $('.threebars').click(function() {
//     $('.navmenu').show()
//     $('threebars').attr('src',"images/xx.png");
//     // $('.xx').show()
//   })

$(".tog").click(function(){
  $('img', this).toggle();
  $('.nothercontain').toggle()
  $('.navmenu').toggle()
})


$('.threebars').click(function(){
    $('.particles').addClass('filter')
})

// if (!$('.welcome').hide) {
// $('.xx').click(function(){
//   $('.particles').removeClass('filter')
// })
// }


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

var genAssem = $('.ga').css('visibility')
if ($('genAssem') === 'visible') {
  $('.particles').addClass('filter')
}

$('#web').click(function(){
  $('img', '.tog').toggle();
  $('.nothercontain').toggle()
  $('.navmenu').toggle()
  $('.ga').css('visibility', 'visible')
  $('.welcome').hide()
})
