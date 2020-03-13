$(document).ready(function(){

  // header 영역 hover 이벤트 시 함수 호출
  header_hover();
  menu_hover();

  // header 영역 scroll 값 변경 시
  $(window).scroll(function(){
    var scrValue = $(document).scrollTop();
    console.log(scrValue);

    if(scrValue > 0){
      $('.header').css({
        backgroundColor: '#fff',
        borderBottom: '1px solid #ccc'
      }).unbind('mouseenter mouseleave');
      $('.kakao_link, .menu_link, .kor').css({ color: '#000' });
    };

    if(scrValue == 0){
      $('.header').css({
        backgroundColor: 'transparent',
        borderBottom: 'none'
      });
      $('.kakao_link, .menu_link, .kor').css({ color: '#fff' });

      // header 영역 hover 이벤트 시 함수 호출
      header_hover();
    };
  });



  // 메인 메뉴 hover 시 border-bottom 생성
  $('.menu_item').hover(function(){
    $(this).css({ borderBottom: '3px solid black' })
  }, function(){
    $(this).css({ borderBottom: 'none' })
  });



  // 메인 이미지 자동 슬라이드
  var imgs = ['main_ai', 'main_dream', 'main_move', 'main_world'];
  var i = 0;
  setInterval(function(){
    img_slide();
    color_set();
    list_slide();
    page_num();
  }, 5000);



  // 좌/우 버튼 클릭 시 이미지 슬라이드
  $('.right_arrow').click(function(){
    img_slide();
    color_set();
    list_slide();
    page_num();
  });
  $('.left_arrow').click(function(){
    i--;
    if(i<0){ i = 3; };
    $('.imgSlide').css({
      display: 'none',
      'background-image': 'url(image/'+ imgs[i] +'.png)',
    }).fadeIn();
    color_set();
    list_slide();
    page_num();
  });




  // ㅡㅡㅡㅡㅡ 함수 선언 영역 ㅡㅡㅡㅡㅡ //

  // 함수 선언 - header 영역 hover 이벤트 시 배경색 & 글자색 변경
  function header_hover(){
    $('.header').hover(function(){
      $(this).css({ backgroundColor: '#fff' });
      $('.kakao_link, .menu_link, .kor').css({ color: '#000' });
    }, function(){
      $(this).css({
        backgroundColor: 'transparent',
        borderBottom: 'none'
      });
      color_set();
    });
  };
  // 함수 선언 - menu 영역 hover 이벤트 시 아래 테두리 생성
  function menu_hover(){
    $('.menu_item').hover(function(){
        var index = $(this).index();
        $(this).addClass('active');
        $('.menu_link').eq(index).css({
        });
    }, function(){
        $(this).removeClass('active');
        $('.menu_link').css({ borderBottom: 'none' });
    });
  };
// 함수 선언 - 메인 이미지 슬라이드 시 4가지 기능
  // 01_ 이미지 변경
  function img_slide(){
    i++;
    if(i>3){ i = 0; };
    $('.imgSlide').css({
      display: 'none',
      'background-image': 'url(image/'+ imgs[i] +'.png)'
    }).fadeIn();
  };
  // 02_ 글자 색상 변경
  function color_set(){
    if(i==1 || i==3){
      $('.kakao_link, .menu_link, .kor, .list_dream, .list_world, .pageNum p').css({ color: '#000' });
    }else{
      $('.kakao_link, .menu_link, .kor, .list_ai, .list_move, .pageNum p').css({ color: '#fff' });
    };
  };
  // 03_ 리스트 변경
  function list_slide(){
    $('.list').css({ display: 'none' });
    $('.list').eq(i).css({ display: 'block' });
  };
  // 04_ 페이지 번호 변경
  function page_num(){
    if(i+1 == 4){
        $('.pageNum').css({ top: 420 });
    }else{
        $('.pageNum').css({ top: 470 });
    };
    $('.pageNum p').html((i+1) +'/4');
  };

});
