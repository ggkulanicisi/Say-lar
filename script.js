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
        // Yalnızca butonu devre dışı bırakıyoruz, yazı sabit kalıyor
        buton.disabled = true; 
        
        // Butonun stilini de değiştirelim, bittiği belli olsun
        buton.textContent = "BİTTİ!";
        buton.style.backgroundColor = "#ff6b6b"; 
        
        return; // Fonksiyondan çık
    }

    // Dizideki mevcut kelimeyi ekrana yazdır
    yaziAlani.textContent = KELIMELER[sayac];

    // Bir sonraki tıklama için sayacı artır
    sayac++;
}

// Butona "tıkla" olay dinleyicisini ekle
buton.addEventListener('click', tiklamaIslemi);
