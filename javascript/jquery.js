
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
  $('.ga').css('visibility', 'visible')
  $('.welcome').hide()
})
