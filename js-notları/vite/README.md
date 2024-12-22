##NEDEN FRONTEND GELİŞTİRMEDE NODEJS KULLANILIR?

- NodeJS, JS ile Backend Uygulamalarinin geliştirilebilmesi için yazildi.
- Bu sebeple, Chrome browser'ların JS motoru, PC ve Server'larda çalışabilecek şekilde implement edildi.
- Ancak NodeJS de çalışacak uygulamalarin UI tarafıyla ilgisi olmayacaği için DOM, window v.b kisimlar implement edilmedi.
- Browser'lar ES modüllerini desteklemeden önce NodeJS modul yapisini (CommonJS) destekliyordu.
- Dolayısıyla Frontend geliştiricileri,
  - NodeJS'in modül yapısından faydalanmak istediler.
  - Ayrıca, NodeJS üzerinde bulunan ve npm olarak adlandirilan paket yönetim sistemi de harici kütüphanlerin yönetimini kolaylaştırdığı için NodeJS üzerinde Frontend geliştirme fikri ağır bastı.
- Ancak, browser'larda bulunan bir çok API Nodejs tarafından desteklemediği için uygulama NodeJS üzerinde geliştirilse bile yine Browser'larda çalıştırılmalıydı.
- İşte bu ikisi (NodeJS ve Browser) arasindaki uyumu sağlamak için yani NodeJS üzerinde geliştirilen uygulamaların paketlenerek bir bundle (Bir çok harici kod ve modülün birleştirilmesi işlemi) oluşturulup Browser'lara sunulabilmesi için Webpack, Rollup, Parcel gibi bundler'lar kullanıldı.
- Günümüzde birçok FE kütüphanesi (React,Vue,Angular v.b) yukarıda bahsedilen şekilde frontend geliştirilmesine imkan sağlamış oluyor. Son yıllarda Vite gibi tool'lar yardımıyla FE geliştirmedeki tüm bu süreçler daha kolay bir şekilde yönetilebilmektedir.
  -Sonuç olarak, NodeJS her ne kadar Backend geliştirme için yazılmış olsa da bir çok avantajından dolayı FE geliştirmede de yaygın bir şekilde kullanılmaktadır.

Nodejs ortamında proje başlatma : npm init || npm init -y
Nodejs ortamında paket yükleme : npm install package_name || npm i package_name
Nodejs ortamında js dosyasını çalıştırma : node dosyaAdi.js

Node.js’i Basitçe Anlamak
Düşün ki JavaScript, normalde bir şef gibi sadece mutfakta (yani tarayıcıda) çalışır. Ama artık bir gün biri geliyor ve bu şefi alıp bir restoranın her yerinde çalışabilir hale getiriyor:

Sadece mutfakta değil, siparişleri alabiliyor, masaları organize edebiliyor, faturaları yazabiliyor.
Node.js, JavaScript’i böyle çok yönlü bir hale getiriyor!
Node.js, JavaScript’i tarayıcıdan çıkarıp bilgisayarda ya da sunucuda çalıştırmamızı sağlar.

Peki Node.js Neden Var?
Eskiden JavaScript sadece tarayıcıda (örneğin, Chrome, Firefox gibi) çalışabiliyordu. Ancak:

Sunucular, web sitelerinin arka planındaki işleri yapar. Örneğin, bir e-ticaret sitesinde ürün listesi göstermek ya da bir formu kaydetmek gibi.
Bu işleri yapmak için başka programlama dilleri (PHP, Java, Python) kullanılıyordu.
Node.js, "JavaScript’i neden sunucu tarafında da kullanmayalım?" fikriyle ortaya çıktı. Yani artık JavaScript, hem tarayıcıda (frontend) hem de sunucuda (backend) çalışabiliyor.

Node.js’in Temel Özellikleri
Hızlıdır:
Chrome’un V8 JavaScript motorunu kullanır. Bu motor sayesinde kodlar çok hızlı çalışır.

Tek İplikli (Single-threaded) ve Hafiftir:
Aynı anda birçok işi yapabilir, ancak sistem kaynaklarını fazla tüketmez.

npm (Node Package Manager) ile Gelir:
Node.js, binlerce hazır kod parçasını (kütüphane) içeren bir sistemle gelir. Böylece sıfırdan bir şeyler yazmak yerine, hazır araçları kullanabilirsin.

Node.js’i Daha Kolay Bir Örnekle Açıklayalım
Diyelim ki bir kahve dükkânın var:

Bir müşteri geliyor ve kahve sipariş ediyor.
Normalde her müşteri için yeni bir barista (çalışan) çağırırsan, dükkân kalabalık olduğunda iş karışır.
Node.js, işleri daha pratik hale getiriyor:
Bir müşteri sipariş verdiğinde, barista kahveyi hazırlarken diğer müşteriler beklemek zorunda kalmıyor.
Barista hızlıca sıradaki müşterinin siparişini alabiliyor.
Böylece herkes sırasıyla işlemini hallediyor.
Node.js, bu mantıkla çalışıyor. Yani aynı anda birden fazla işi (isteği) kolayca yönetiyor.

Node.js Nerelerde Kullanılır?
Gerçek Zamanlı Uygulamalar:
Sohbet uygulamaları (örneğin, WhatsApp gibi), canlı skor siteleri veya online oyunlar.
Örnek: Node.js, anlık mesajları hızlıca iletebilir.

API’ler:
Node.js, bir uygulamanın başka bir uygulamaya veri göndermesi veya alması için kullanılır.

Dosya ve Veri İşlemleri:
Büyük dosyalarla ya da veri tabanlarıyla çalışırken Node.js hız ve verim sağlar.

Sonuç
Node.js, JavaScript’i sadece tarayıcıda değil, her yerde kullanmanı sağlar:

Bilgisayarında, sunucuda, hatta bir robot üzerinde bile!
Hızlı, esnek ve modern uygulamalar geliştirmek için harika bir araçtır.