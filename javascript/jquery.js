
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

$('topics').hover(function(){
  $(this).animate({
    'border-bottom': '2px solid black'
  }, 500)
})
