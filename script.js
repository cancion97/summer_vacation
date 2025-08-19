document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".splide").forEach(function (el) {
    new Splide(el, {
      type: "loop", // 無限ループ
      perPage: 1, // 1枚ずつ表示
      autoplay: true, // 自動再生
      interval: 4000, // 3秒ごとに切り替え（必要なら調整）
      pauseOnHover: true, // マウスを乗せたら一時停止
      arrows: true, // 矢印表示
      pagination: true, // ドット表示
    }).mount();
  });
});

// function (関数を作る)　関数の名前・自由につけられる　(引数(関数に引き渡す値)){処理内容(何がしたいのか)}
function drawerButton() {
  // htmlから必要な要素をjavascriptに連れてくる
  const dButton = document.querySelector(".drawerButton");
  const dMenu = document.querySelector(".drawerMenu");
  //   連れてきた要素にクラスの付け外しをする
  dButton.classList.toggle("active");
  dMenu.classList.toggle("active");
}

// メニューリンクをクリックしたら閉じる処理
document.querySelectorAll(".drawerMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".drawerButton").classList.remove("active");
    document.querySelector(".drawerMenu").classList.remove("active");
  });
});

const pagetop_btn = document.querySelector("#page-top");

// .pagetopをクリックしたら
pagetop_btn.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}
