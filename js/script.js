// チェックボックスの取得
const darkcheck = document.querySelector("#checkbox-darkmode");
const btn_dark = document.getElementById('button-darkmode');
 
// チェックした時の挙動
darkcheck.addEventListener("change", () => {
  if (darkcheck.checked == true) {
    // ダークモード
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    btn_dark.textContent = 'Dark Mode';
  } else {
    // ライトモード
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    btn_dark.textContent = 'Light Mode';
  }
});