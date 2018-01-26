$(function () {
  var bannerSwiper = new Swiper('.swiper-container-banner', {
    autoplay: true, //可选选项，自动滑动
  })
  var gameSwiper = new Swiper('.swiper-container-game', {
    slidesPerView: 3.05,
    spaceBetween: 30,
    slidesPerGroup: 3,
    autoHeight: true,
    preventLinksPropagation: false,
    // loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  if ($(window).width() > 768) {
     $(".swiper-slide").mouseover(function () {
       $(this).children('img').eq(0).addClass("hidden").removeClass('show')
       $(this).children('img').eq(1).addClass("show").removeClass('hidden')
     });
     $(".swiper-slide").mouseout(function () {
       $(this).children('img').eq(0).addClass("show").removeClass('hidden')
       $(this).children('img').eq(1).addClass("hidden").removeClass('show')
     });
     $('.pc_my_bottom').click(function () {
       var myName = $('.pc_my_name').val();
       var myIphone = $('.pc_my_iphone').val();
       var myMessage = $('.pc_my_message').val();
       if (!/^1[34578]\d{9}$/.test(myIphone)) {
         alert('请输入正确的手机号码')
         return false;
       }
       var baseUrl = "http://t.games.playingbuy.com/api/analysis/adminMining";
       if (document.domain == "") {
         baseUrl = "http://games.playingbuy.com/api/analysis/adminMining";
       }
       $.ajax({
         type: "post",
         url: baseUrl,
         data: {
          phone: myIphone,
          name: myName,
          extra: myMessage
         },
         success: function (response) {
           console.log(response, '-------------发送成功');
         }
       });
       console.log(myName, myIphone, myMessage);
     })
  }else {
    $('.web_my_bottom').click(function () {
      var myName = $('.web_my_name').val();
      var myIphone = $('.web_my_iphone').val();
      var myMessage = $('.web_my_message').val();
      if (!/^1[34578]\d{9}$/.test(myIphone)) {
        alert('请输入正确的手机号码')
        return false;
      }
      var baseUrl = "http://t.games.playingbuy.com/api/analysis/adminMining";
      if (document.domain == "") {
        baseUrl = "http://games.playingbuy.com/api/analysis/adminMining";
      }
      $.ajax({
        type: "post",
        url: baseUrl,
        data: {
          phone: myIphone,
          name: myName,
          extra: myMessage
        },
        success: function (response) {
          console.log(response, '-------------发送成功');
        }
      });
      console.log(myName, myIphone, myMessage);
    })
  }
})