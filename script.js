// script.js

// KELIMELER değişkeni messages.js dosyasından gelir.

// Mevcut kelimeyi takip eden sayaç
let sayac = 0;

// HTML elemanlarını seçme
const yaziAlani = document.getElementById('yazi');
const buton = document.getElementById('buton');

// Butona tıklandığında çalışacak fonksiyon
function tiklamaIslemi() {
    // Eğer sayaç KELIMELER dizisinin sonuna ulaştıysa
    if (sayac >= KELIMELER.length) {
        yaziAlani.textContent = "Bitti! Baştan başlamak için sayfayı yenile.";
        // Butonu devre dışı bırak
        buton.disabled = true; 
        return; // Fonksiyondan çık
    }

    // Dizideki mevcut kelimeyi ekrana yazdır
    yaziAlani.textContent = KELIMELER[sayac];

    // Bir sonraki tıklama için sayacı artır
    sayac++;
}

// Butona "tıkla" olay dinleyicisini ekle
buton.addEventListener('click', tiklamaIslemi);
