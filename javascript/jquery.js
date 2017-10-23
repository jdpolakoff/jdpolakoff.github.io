
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
