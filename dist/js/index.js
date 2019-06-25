'use strict';

$(function () {
  /* radio choice fn*/
  // radioEle: 单选框按钮, submitData: 提交的数据, mergeData: 合并数据
  function radioChoice(submitData, mergeData) {
    submitData.children('li span').click(function () {
      var aimEle = $(this);
      aimEle.addClass('active').siblings().removeClass('active');

      aimEle.parent().find('user-con').each(function () {
        $(this).val($(this).parent().find('.active').html());
      });
      var submitData = '';
      for (var n = 0; n < aimEle.parent().length; n++) {
        submitData += aimEle.parent().eq(n).find('.active').text() + '、';
      }
      mergeData.val(submitData);
    });

    /*radioEle.click(function(submitData){
      var aimEle = $(this);
      aimEle.addClass('active').siblings().removeClass('active');
      // console.log(submitData, 111111);
      submitData.children('li .user-con').each(function(){
        $(this).val($(this).parent().find('.active').html());
      });
      var submitData = '';
      for(var n = 0; n < submitData.children('li').length; n++){
        submitData += submitData.children('li').eq(n).find('.active').text() + '、';
      }
      mergeData.val(submitData);
    });*/
  }

  radioChoice($('.invite-data li span'), $('.invite-data'), $('inviteData'));

  /* 测评模块 */
  // $('.appraisal-data li span').click(function(){
  //   $(this).addClass('active').siblings().removeClass('active');
  //   $('.appraisal-data li .user-con').each(function(){
  //     $(this).val($(this).parent().find('.active').html());
  //   });
  //   var submitData = '';
  //   for(var n = 0; n < $('.appraisal-data li').length; n++){
  //     submitData += $('.appraisal-data li').eq(n).find('.active').text() + '、';
  //   }
  //   $('#aptitude').val(submitData);
  // });

  function midtc(ele, c, f, a, n, s) {
    var $par = $(ele);
    var $cleardiv = $(s);
    var $num = 0;
    popupTc(f);
    $(c, $par).click(function () {
      $cleardiv.hide();
      $par.hide();
      $num++;
      if ($num <= n) {
        popupTc(a);
      }
    });

    function popupTc(d) {
      setTimeout(function () {
        $cleardiv.show();
        $par.fadeIn(300);
      }, d);
    }
  }

  midtc('.test_tc', '.test_close', 8000, 30000, 233);

  /* 重置select */
  // currentOption: 当前选项, showOptions: 模拟的options, originalSelect: 原本的select
  function optimizeSelect(currentOption, showOptions, originalSelect) {
    // console.log(11111);
    currentOption.click(function () {
      showOptions.css("display", "block");
      showOptions.children("li").each(function () {
        var liEle = this;
        // 点击默认显示的option标签，就显示模拟的options
        $(liEle).click(function () {
          // 默认显示的option标签
          // 取模拟的select的li的rel的值赋值给option标签的value
          originalSelect.val($(this).attr("rel"));
          showOptions.css("display", "none");
          // 把从option标签的html值赋值给默认显示的option
          currentOption.val($(liEle).text());
          // $('.sel-grade').val($(liEle).text());
        });
      });
    });
  }
  // 学历-pc
  optimizeSelect($(".current-education"), $(".education-options"), $(".education"));
  // 学历-wap
  optimizeSelect($(".current-wap-education"), $(".education-wap-options"), $(".education-wap"));
});