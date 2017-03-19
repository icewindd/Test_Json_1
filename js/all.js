
$(document).ready(function() {
$('#btn').click(function(event) {
  // event.preventDefault();
  // $('.list').outerHeight()
  // console.log($('.list').outerHeight());
  var oClass = $('#option').val();
  var oArea =$('#area').val();
  $('.list').empty();
 	$.ajax({
  	url: 'data.json',
  	dataType: 'json',
  	success: function(data) {
      for(var i =0;i<=data.length;i++){
        if(oClass == data[i].Heritage_class && oArea == data[i].Heritage_desc.match(oArea) ){
          $('.list').prepend( '<ul><li><h2>'+data[i].Heritage_title+'<h2></li>'+
                            '<li><p>類別：'+data[i].Heritage_class+'</p><hr></li>'+
                            '<li><p>'+data[i].Heritage_desc.replace(/\r\n/g,"<br/>")+'</p><hr></li>'+
                            '<li><p>'+data[i].Heritage_travel.replace(/\r\n/g,"<br/>")+'</p><hr></li><a href="'+data[i].Heritage_Image[0]+
                            '" data-lightbox="imge-'+i+'"><img src="'+
                            data[i].Heritage_Image[0]+'"><a><li></ul>');
             }else if( oClass =='all' && oArea == data[i].Heritage_desc.match(oArea) || oClass == data[i].Heritage_class&&oArea=="all"){
        $('.list').prepend( '<ul><li><h2>'+data[i].Heritage_title+'<h2></li>'+
                            '<li><p>類別：'+data[i].Heritage_class+'</p><hr></li>'+
                            '<li><p>'+data[i].Heritage_desc.replace(/\r\n/g,"<br/>")+'</p><hr></li>'+
                          '<li><p>'+data[i].Heritage_travel.replace(/\r\n/g,"<br/>")+'</p><hr></li><a href="'+data[i].Heritage_Image[0]+
                            '" data-lightbox="imge-'+i+'"><img src="'+
                            data[i].Heritage_Image[0]+'"><a><li></ul>');
         }else if(oClass =='all' && oArea=="all"){
            $('.list').prepend( '<ul><li><h2>'+data[i].Heritage_title+'<h2></li>'+
                            '<li><p>類別：'+data[i].Heritage_class+'</p><hr></li>'+
                            '<li><p>'+data[i].Heritage_desc.replace(/\r\n/g,"<br/>")+'</p><hr></li>'+
                          '<li><p>'+data[i].Heritage_travel.replace(/\r\n/g,"<br/>")+'</p><hr></li><a href="'+data[i].Heritage_Image[0]+
                            '" data-lightbox="imge-'+i+'"><img src="'+
                            data[i].Heritage_Image[0]+'"><a><li></ul>');
          }//if end
          if($('.list').html()==""||$('.list').html()== null){
            $('.list').prepend( '<ul><li><h2>沒有資料了!!<h2></li>')
          }
      }//for data end
	}//sucess function end

 	});//ajax end

 });//click end

    //top按鈕
    $(window).scroll(function(event) {
      var scrollPos = $(window).scrollTop();
      // console.log(scrollPos);
      if(scrollPos>=100){
        $('.top').addClass('active');
      }else{
        $('.top').removeClass('active');
      }
    });
    $('.top').click(function(event) {
      event.preventDefault();
      $('body').animate({scrollTop:0}, 5000);
    });

});

