window.onload = function () {
  setTimeout(function () {
    document.getElementById("promoPopup").style.display = "flex";
  }, 2000); // tampilkan setelah 2 detik
};

function closePopup() {
  document.getElementById("promoPopup").style.display = "none";
}
