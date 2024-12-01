window.onload = function () {
    //今日の日時を表示
    const date = new Date();

    const yyyy = date.getFullYear();
    const mm = ("0" + (date.getMonth() + 1)).slice(-2);
    const dd = ("0" + date.getDate()).slice(-2);

    if (document.getElementById("today") !== null) {
        document.getElementById("today").value = `${yyyy}-${mm}-${dd}`;
    }
};

//メニューのJS
("use strict");

{
    // DOM取得
    // 親メニューのli要素
    const parentMenuItem = document.querySelectorAll(".menu__item");
    console.log(parentMenuItem);

    // イベントを付加
    for (let i = 0; i < parentMenuItem.length; i++) {
        parentMenuItem[i].addEventListener("mouseover", dropDownMenuOpen);
        parentMenuItem[i].addEventListener("mouseleave", dropDownMenuClose);
    }

    // ドロップダウンメニューを開く処理
    function dropDownMenuOpen(e) {
        // 子メニューa要素
        const childMenuLink =
            e.currentTarget.querySelectorAll(".drop-menu__link");
        console.log(childMenuLink);

        // is-activeを付加
        for (let i = 0; i < childMenuLink.length; i++) {
            childMenuLink[i].classList.add("is-active");
        }
    }

    // ドロップダウンメニューを閉じる処理
    function dropDownMenuClose(e) {
        // 子メニューリンク
        const childMenuLink =
            e.currentTarget.querySelectorAll(".drop-menu__link");
        console.log(childMenuLink);

        // is-activeを削除
        for (let i = 0; i < childMenuLink.length; i++) {
            childMenuLink[i].classList.remove("is-active");
        }
    }
}

//ログイン画面
function nextPage() {
    //id = document.login_form.id.value
    // pwd = document.login_form.pass.value;
    // location.href = id + pwd + ".html";
    // フォームからIDとパスワードの値を取得
    var id = document.forms["login_form"]["id"].value;
    var password = document.forms["login_form"]["pass"].value;

    // IDとパスワードが正しいかどうかを確認します
    if (id === "111" && password === "111") {
        // 正しければ、外部のページにリダイレクト
        window.location.href = "index.html";
        return false; // フォームの送信を防ぎます
    } else if (id === "222" && password === "222") {
        // 正しければ、外部のページにリダイレクト
        window.location.href = "index.html";
        return false; // フォームの送信を防ぎます
    } else {
        // 不正な場合、アラートを表示します
        alert("IDまたはパスワードが正しくありません");
        location.reload();
        return false; // フォームの送信を防ぎます
    }
}
