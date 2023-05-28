// チェックボックスの取得
const lightmode = document.querySelector("#on");
const darkmode = document.querySelector("#off");
 
// チェックした時の挙動
darkmode.addEventListener("change", () => {
  if (darkmode.checked == true) {
    // ダークモード
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  }
});

lightmode.addEventListener("change", () => {
  if (lightmode.checked == true) {
    // ダークモード
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }
});