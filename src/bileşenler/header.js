const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  let headerEl = document.createElement("div");
  headerEl.classList.add("header");

  let tarihEl = document.createElement("span");
  tarihEl.classList.add("date");
  tarihEl.textContent = tarih;

  let baslikEl = document.createElement("h1");
  baslikEl.textContent = baslik;  

  let yaziEl = document.createElement("span");
  yaziEl.classList.add("temp");
  yaziEl.textContent = yazi;

  headerEl.appendChild(tarihEl);
  headerEl.appendChild(baslikEl);
  headerEl.appendChild(yaziEl);

  return headerEl;
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir. 

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
  
  let header1 = Header("Yeni Başlık", "6 Temmuz 2023", "iat, vel venenatis ante porta.");
  let parent1 = document.querySelector(secici);
  parent1.appendChild(header1);
}

export { Header, headerEkleyici }
