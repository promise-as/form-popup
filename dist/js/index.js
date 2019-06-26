'use strict';

$(function () {
  /* radio choice fn*/
  // dataWrap: 数据容器, submitData: 提交的数据, mergeData: 合并数据
  function radioChoice(dataWrap, submitData) {
    dataWrap.find('li span').click(function () {
      var aimEle = $(this);
      aimEle.addClass('active').siblings().removeClass('active');
      aimEle.parent().find('.user-con').each(function () {
        $(this).val($(this).siblings('.active').html());
      });
      var mergeData = '';
      for (var n = 0; n < dataWrap.find('li').length; n++) {
        mergeData += dataWrap.find('li').eq(n).find('.active').text() + '、';
      }
      submitData.val(mergeData);
    });
  }

  // 测评模块
  radioChoice($('.appraisal-data'), $('#appraisalData'));
  // 邀请弹窗
  radioChoice($('.invite-data'), $('#inviteData'));

  /* 重置select */
  // currentOption: 当前选项, showOptions: 模拟的options, originalSelect: 原本的select
  function optimizeSelect(currentOption, showOptions, originalSelect) {
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
          console.log(currentOption.val());
          currentOption.val($(liEle).text());
        });
      });
    });
  }

  // 试听模块
  optimizeSelect($(".current-education"), $(".education-options"), $(".education"));

  // ele: 目标元素, c: 关闭按钮, f: 第一次是多少毫秒显示,
  // a: 第二次是第一次之后多少毫秒显示, n: 一共显示多少次,
  function popupHandle(ele, c, f, a, n) {
    var $par = $(ele);
    var $num = 1;
    popupTc(f);
    $(c).click(function () {
      $par.hide();
      if ($num < n) {
        popupTc(a);
      }
      $num++;
    });

    function popupTc(d) {
      setTimeout(function () {
        $par.fadeIn(300);
      }, d);
    }
  }

  if ($(".invite-popup").size() > 0) {
    popupHandle('.invite-popup', '.invite-popup .close', 30000, 40000, 2);
  }
});