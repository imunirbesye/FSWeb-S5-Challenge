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

  axios.get("http://localhost:5001/api/makaleler")
    .then(response => {
      let jsElemanlar   = response.data.makaleler["javascript"];
      let bsElemanlar   = response.data.makaleler["bootstrap"];
      let tekElemanlar  = response.data.makaleler["teknoloji"];
      let jqElemanlar   = response.data.makaleler["jquery"];
      let nsElemanlar   = response.data.makaleler["node.js"];

      alert(jsElemanlar);

      let makalelerObje = response.data.makaleler;
      let makalelerDizi = Object.values(makalelerObje);
      //alert(makalelerObje);

      let cards = [];

      makalelerDizi.forEach(element => {
        for(let i = 0; i < element.length; i++){
          let newCard = Card(element[i]);
          cards.push(newCard);
        }
      });
    })
    .catch(err => {

    });
}

export { Card, cardEkleyici }
