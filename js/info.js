$(function () {
  function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }
  var index = GetQueryString('index');
  if ($(window).width() > 767) {
    if (index == 1) {
      document.title = "快乐猜玩法介绍"
      $('.box').children('img').eq(0).attr('src', '../images/pc/快乐猜详情.png');
    }
    if (index == 2) {
      document.title = "时时猜玩法介绍"
      $('.box').children('img').eq(0).attr('src', '../images/pc/时时彩游戏详情.png');
    }
    if (index == 3) {
      document.title = "脑力大作战玩法介绍"
      $('.box').children('img').eq(0).attr('src', '../images/pc/脑力游戏详情.png');
    }

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
  } else {
    $('.imgs').removeClass('box')
    console.log('手机模式下页面显示');
    if (index == 1) {
      document.title = "快乐猜玩法介绍"
      $('.imgs').children('img').eq(0).attr('src', '../images/web/快乐介绍.png');
    }
    if (index == 2) {
      document.title = "时时猜玩法介绍"
      $('.imgs').children('img').eq(0).attr('src', '../images/web/时时彩介绍.png');
    }
    if (index == 3) {
      document.title = "脑力大作战玩法介绍"
      $('.imgs').children('img').eq(0).attr('src', '../images/web/脑力介绍.png');
    }

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