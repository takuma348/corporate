$(document).ready(function() {
 //---------------------------------
  // Smooth Scrolling
  //---------------------------------

  $('a[href^="#"]').click(function(){

    var the_id = $(this).attr("href");
    var scrollto = 0;

    if(the_id != '#top') {
      scrollto = $(the_id).offset().top-50
    }
    $('html, body').animate({
      scrollTop: scrollto
    }, 'slow');

    return false;
  });
});

$(document).ready(function() {
  //---------------------------------
  // Is-scrolled
  //---------------------------------
  var scrolltop = 0;
  var header = document.querySelector('.header');
  var footer = document.querySelector('.footer');
  window.addEventListener('scroll', isScrolled);
  isScrolled();

  function isScrolled() {
    scrolltop = window.pageYOffset;
    if (scrolltop < 60) header.classList.remove('is-scrolled') & footer.classList.remove('is-scrolled');
    else header.classList.add('is-scrolled') & footer.classList.add('is-scrolled');
  }

  /* contact */
  if($('body').hasClass('contact')) { init_contact(); }

});

$(document).ready(function() {
  //---------------------------------
  // AOS
  //---------------------------------
  AOS.init({
    duration: 600,
    easing: 'ease-out-quart',
    once: true
  });
});



$(document).ready(function() {
//---------------------------------
// More btn
//---------------------------------

  $(function () {
    // 表示させる要素の総数をlengthメソッドで取得
    var $numberListLen = $("#news-list .news-item").length;
    // デフォルトの表示数
    var defaultNum = 3;
    // ボタンクリックで追加表示させる数
    var addNum = 3;
    // 現在の表示数
    var currentNum = 0;

    $("#news-list").each(function () {
      // moreボタンを表示し、closeボタンを隠す
      $(this).find("#more-btn").show();
      // $(this).find("#close_btn").hide();

      // defaultNumの数だけ要素を表示
      // defaultNumよりインデックスが大きい要素は隠す
      $(this).find(".news-item:not(:lt(" + defaultNum + "))").hide();

      // 初期表示ではデフォルト値が現在の表示数となる
      currentNum = defaultNum;

      // moreボタンがクリックされた時の処理
      $("#more-btn").click(function () {
        // 現在の表示数に追加表示数を加えていく
        currentNum += addNum;

        // 現在の表示数に追加表示数を加えた数の要素を表示する
        $(this).parents().find(".news-item:lt(" + currentNum + ")").slideDown();

        // 表示数の総数よりcurrentNumが多い=全て表示された時の処理
        if ($numberListLen <= currentNum) {
          // 現在の表示数をデフォルト表示数へ戻す
          currentNum = defaultNum;
          // インデックス用の値をセット
          indexNum = currentNum - 1;

          // moreボタンを隠し、closeボタンを表示する
          $("#more-btn").hide();
          // $("#close_btn").show();

          // closeボタンがクリックされた時の処理
          // $("#close_btn").click(function () {
          //   // デフォルト数以降=インデックスがindexNumより多い要素は非表示にする
          //   $(this).parent().find(".news-item:gt(" + indexNum + ")").slideUp();

          //   // closeボタンを隠し、moreボタンを表示する
          //   $(this).hide();
          //   $("#more-btn").show();
          // });
        }
      });
    });
  });
});
