/* ハンバーガーメニュー開閉
***************************************************************/
document.querySelector('.toggle-menu').addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector('header').classList.toggle('open');
})

/* 300pxスクロールしたらfixedのクラス名がつくjs
***************************************************************/
window.addEventListener('scroll', function() {
    // 300px以上スクロールしたら
    if (window.scrollY > 300) {
        document.querySelector('header').classList.add('fixed');
    } else {
        document.querySelector('header').classList.remove('fixed');
    }
});

/* フッターまでスクロールしたらclearのクラス名がつくjs */
document.addEventListener('scroll', function () {
  const fixedButton = document.getElementById('sp-btn-fixed');
  const scrollPosition = window.scrollY; // 現在のスクロール位置
  const windowHeight = window.innerHeight; // ウィンドウの高さ
  const documentHeight = document.documentElement.scrollHeight; // ドキュメント全体の高さ

  // サイトの下から800pxの位置に来たかどうかをチェック
  if (scrollPosition + windowHeight >= documentHeight - 600) {
      fixedButton.classList.add('clear'); // .clearクラスを付与
  } else {
      fixedButton.classList.remove('clear'); // .clearクラスを削除
  }
});