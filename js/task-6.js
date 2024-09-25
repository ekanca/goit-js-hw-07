// DOM Elemanları
const createButton = document.querySelector("#Create-btn");
const destroyButton = document.querySelector("#Destroy-btn");
const input = document.querySelector("input");
const boxesContainer = document.querySelector("#boxes");

// Rastgele bir hex renk üretme fonksiyonu
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Kutuları oluşturma fonksiyonu
function createBoxes(amount) {
  // Önceki kutuları temizle
  destroyBoxes();
  let size = 30; // İlk kutunun boyutu

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`; // Kutunun genişliği
    box.style.height = `${size}px`; // Kutunun yüksekliği
    box.style.backgroundColor = getRandomHexColor(); // Rastgele arka plan rengi
    box.classList.add("boxCSS"); // CSS sınıfı ekleniyor (stil için)
    boxesContainer.appendChild(box); // Kutuyu kutu konteynerine ekle
    size += 10; // Sonraki kutu için boyutu artır
  }
}

// Kutuları silme fonksiyonu
function destroyBoxes() {
  boxesContainer.innerHTML = ""; // İçeriği temizler, tüm kutuları siler
}

// Oluşturma butonu için event listener
createButton.addEventListener("click", () => {
  const amount = input.value; // Input'tan gelen değeri al
  if (amount > 0 && amount <= 100) {
    // Girdiyi kontrol et (1-100 arasında olmalı)
    createBoxes(amount); // Girilen miktarda kutu oluştur
    input.value = ""; // Kutular oluşturulduktan sonra input alanını temizle
  }
});

// Silme butonu için event listener
destroyButton.addEventListener("click", destroyBoxes); // Butona tıklandığında tüm kutuları sil
