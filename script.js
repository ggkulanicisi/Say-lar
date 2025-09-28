// script.js

// KELIMELER messages.js'ten, RENKLER colors.js'ten gelir.

// Mevcut kelimeyi takip eden sayaç
let sayac = 0;

// HTML elemanlarını seçme
const yaziAlani = document.getElementById('yazi');
const buton = document.getElementById('buton');
// Arka planı değiştireceğimiz body etiketini seçiyoruz
const bodyElementi = document.body; 

// Sayfa yüklendiğinde ilk rengi uygula
bodyElementi.style.backgroundColor = RENKLER[0];


// Butona tıklandığında çalışacak fonksiyon
function tiklamaIslemi() {
    // Eğer sayaç KELIMELER dizisinin sonuna ulaştıysa
    if (sayac >= KELIMELER.length) {
        // Yalnızca butonu devre dışı bırak
        buton.disabled = true; 
        
        // Butonun stilini bittiği belli olsun diye değiştir
        buton.textContent = "BİTTİ!";
        buton.style.backgroundColor = "#ff6b6b"; 
        
        return; // Fonksiyondan çık
    }

    // 1. Dizideki mevcut kelimeyi ekrana yazdır
    yaziAlani.textContent = KELIMELER[sayac];
    
    // 2. Arka plan rengini değiştir (Eğer renk dizisi, kelime dizisi ile eşleşiyorsa)
    if (sayac < RENKLER.length) {
         // JavaScript ile body'nin stilini değiştirme
        bodyElementi.style.backgroundColor = RENKLER[sayac];
    }

    // Bir sonraki tıklama için sayacı artır
    sayac++;
}

// Butona "tıkla" olay dinleyicisini ekle
buton.addEventListener('click', tiklamaIslemi);
