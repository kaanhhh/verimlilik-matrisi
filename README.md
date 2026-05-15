# 🎯 Eisenhower Verimlilik Matrisi Uygulaması (Eisenhower Matrix)

Bu proje, görev yönetimini sıradan bir liste yapısından çıkarıp iş yönetim metodolojisi olan **Eisenhower Matrisi** kurallarına göre kategorize eden, **Vanilla JavaScript** ile geliştirilmiş bir verimlilik aracıdır.

## 🧠 Metodoloji ve Mimari
Uygulama, girilen görevleri dinamik olarak 4 farklı kritiklik seviyesine (Çeyreğe) böler. Yazılım mimarisi olarak şu yapılara odaklanılmıştır:
- **CSS Grid Yapısı:** Arayüz, modern responsive CSS Grid kullanılarak 2x2'lik bir matris formuna sadık kalınarak tasarlanmıştır.
- **State Yönetimi:** Görevlerin eklenmesi, silinmesi ve listelenmesi süreçlerinde JavaScript nesne dizileri (Array of Objects) üzerinde **`filter`** ve **`forEach`** gibi yüksek mertebeden fonksiyonlar (Higher-Order Functions) kullanılmıştır.
- **Veri Kalıcılığı:** Tarayıcı tabanlı `localStorage` entegrasyonu sayesinde veriler lokalde güvenle saklanır.

## 🛠️ Teknolojiler
- HTML5
- CSS3 (Grid & Flexbox)
- Modern JavaScript (ES6+)

## 📦 Kurulum
Herhangi bir bağımlılık veya API anahtarı gerektirmez. `index.html` dosyasını tarayıcınızda açarak doğrudan kullanmaya başlayabilirsiniz.
