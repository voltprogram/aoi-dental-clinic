/* ハンバーガーメニュー開閉 */
document.querySelector('.toggle-menu').addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector('header').classList.toggle('open');
})

/* 300pxスクロールしたらfixedのクラス名がつくjs */
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

/* コンタクトフォーム送信時の動き*/
document.addEventListener("DOMContentLoaded", function () {
const form = document.querySelector("#contact-main");
const checkSection = document.querySelector("#contact-check");

form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
        })
        .then(response => {
        if (response.ok) {
            // 成功時にメッセージ表示
            checkSection.innerHTML = `
            <div class="thank-you-message">
                <p>送信が完了しました。<br class="sp_only">お問い合わせいただきありがとうございます。</p>
            </div>
            `;
        } else {
            alert("送信に失敗しました。もう一度お試しください。");
        }
        })
        .catch(() => {
        alert("送信中にエラーが発生しました。");
        });
    });
});
