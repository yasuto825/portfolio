$(function () {
  // 変数
  const aboutArea = $("#about");
  const aboutHeight = aboutArea.outerHeight(true);

  // about-btnをクリックしたとき
  $(".about-btn").on("click", function () {
    $("#about").slideToggle(300);
    $("#about").toggleClass("open");
    $(".side button").toggleClass("close");
    $(".my-name").fadeToggle(300);

    if ($(".open").length) {
      // #wrapperのアニメーション
      $("#wrapper").animate({ marginTop: aboutHeight }, 300);

      // #aboutにCSSを追加
      aboutArea.css({
        position: "fixed",
        top: 0,
      });

      // .floatのアニメーション
      $(".float").animate({ top: aboutHeight }, 300);
    } else {
      // #wrapperのアニメーション
      $("#wrapper").animate({ marginTop: 0 }, 300);

      // .floatのアニメーション
      $(".float").animate({ top: "0px" }, 300);
    }
  });

  // ページ内リンクのアニメーション
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - aboutHeight;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
