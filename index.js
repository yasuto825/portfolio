$(function () {
  // 変数
  const profileArea = $("#profile");
  const profileHeight = profileArea.outerHeight(true);

  // profile-btnをクリックしたとき
  $(".prf-btn").on("click", function () {
    $("#profile").slideToggle(300);
    $("#profile").toggleClass("open");
    $(".prf-btn button").toggleClass("close");

    if ($(".open").length) {
      // #wrapperのアニメーション
      $("#wrapper").animate({ marginTop: profileHeight }, 300);

      // #profileにCSSを追加
      profileArea.css({
        position: "fixed",
        top: 0,
      });

      // .floatのアニメーション
      $("#btn").animate({ top: profileHeight }, 300);
    } else {
      // #wrapperのアニメーション
      $("#wrapper").animate({ marginTop: 0 }, 300);

      // .floatのアニメーション
      $("#btn").animate({ top: "0px" }, 300);
    }
  });

  // ページ内リンクのアニメーション
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - profileHeight;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
