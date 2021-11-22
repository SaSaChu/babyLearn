$(function() {
 
  // 光箱
  $('.showModel').click(function() {
    $('#myModel').addClass('showModel')

    $('#myModel .model_boxs.box_' + $(this).data('id')).addClass('l_show').siblings().removeClass('l_show')
  })


  $('.t-close').click(function() {
    $('#myModel').removeClass('showModel')
  }) 

  // 手機Menu
  $('.m_header_r').click(function() {
    $('.m_menu').addClass('menu_open');
  });

  $('.menuClose').click(function() {
    $('.m_menu').removeClass('menu_open');
  });

  // 圖片縮放
  $(".brandPicImg, .acImg, .v_size").imgLiquid ();

});



