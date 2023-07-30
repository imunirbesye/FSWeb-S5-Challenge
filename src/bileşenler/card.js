import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  let cardEl = document.createElement("div");
  cardEl.classList.add("card");

  let headlineEl = document.createElement("div");
  headlineEl.classList.add("headline");
  headlineEl.textContent = makale.anabaslik;
  cardEl.appendChild(headlineEl);

  let authorEl = document.createElement("div");
  authorEl.classList.add("author");
  cardEl.appendChild(authorEl);

  let imgContainerEl = document.createElement("div");
  imgContainerEl.classList.add("img-container");
  authorEl.appendChild(imgContainerEl);

  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", makale.yazarFoto);
  imgContainerEl.appendChild(imgEl);

  let spanEl = document.createElement("span");
  authorEl.appendChild(spanEl);
  spanEl.textContent = makale.yazarAdi + " tarafından";

  return cardEl;
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const node = document.querySelector(secici);
  const url = "http://localhost:5001/api/makaleler";
  axios.get(url)
    .then(response => {
      console.log(response);
      const makaleler = response.data.makaleler;
      for(let key in makaleler){
        makaleler[key].forEach(element => {
          let card = Card(element);
          node.appendChild(card);
        });
      }
    })
    .catch(err => {
      console.log(err);
    })
}

export { Card, cardEkleyici }
