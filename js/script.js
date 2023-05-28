// チェックボックスの取得
const lightmode = document.querySelector("#on");
const darkmode = document.querySelector("#off");

//サイトを開いたときライトシームにする
document.body.classList.remove("dark-theme");
document.body.classList.add("light-theme");
$('#lightsw').removeClass('1d');
$('#darksw').addClass('1l');
 
// チェックした時の挙動
darkmode.addEventListener("change", () => {
  if (darkmode.checked == true) {
    // ダークモード
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    document.getElementById("logo_image").src='./images/shibanorail_darklogo.png';
    $('#lightsw').addClass('1d');
    $('#darksw').removeClass('1l');
  }
});

lightmode.addEventListener("change", () => {
  if (lightmode.checked == true) {
    // ダークモード
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    document.getElementById("logo_image").src='./images/shibanorail_lightlogo.png';
    $('#lightsw').removeClass('1d');
    $('#darksw').addClass('1l');
  }
});