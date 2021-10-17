$(function () {
  // 変数
  const aboutArea = $("#about");
  const aboutHeight = aboutArea.outerHeight(true);

  // about-btnをクリックしたとき
  $(".about-btn").on("click", function () {
    $("#about").slideToggle(300);
    $("#about").toggleClass("open");
    $(".side button").toggleClass("close");

    if ($(".open").length) {
      // .floatのアニメーション
      $(".float,.my-name").animate({ top: aboutHeight }, 300);

      // #aboutにCSSを追加
      aboutArea.css({
        position: "fixed",
        top: 0,
      });

      // #wrapperのアニメーション
      $("#wrapper").animate({ marginTop: aboutHeight }, 300);
    } else {
      // .floatのアニメーション
      $(".float,.my-name").animate({ top: "0px" }, 300);

      // #wrapperのアニメーション
      $("#wrapper").animate({ marginTop: 0 }, 300);
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
