// チェックボックスの取得
const btn = document.querySelector("#btn-darkmode");
 
// チェックした時の挙動
btn.addEventListener("change", () => {
  if (btn.checked == true) {
    // ダークモード
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    btn.textContent = "Dark Mode";
    
  } else {
    // ライトモード
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    btn.textContent = "Light Mode";
  }
});