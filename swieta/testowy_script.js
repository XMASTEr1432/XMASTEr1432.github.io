console.log("ok")

// tablice

let listaProduktow = [
    {
        nazwaProduktu: "Marmur",
        cenaProduktu: 50,
        obrazyProduktow: "https://tacohemingway.store/img/imagecache/6001-7000/680x680/1/product-media/6001-7000/Marmur-8097-680x680.jpg",
        stronaProduktu: "https://tacohemingway.store/marmur",
        komentarzDoProduktu: "płyta jest w przedsprzedaży do 17 grudnia"
    }
]

tablicaProduktow = listaProduktow.forEach((produkt)=>{
    return(produkt.cenaProduktu + ""+ produkt.nazwaProduktu + produkt.stronaProduktu + 
        produkt.komentarzDoProduktu + produkt.obrazyProduktow)
})

console.log(tablicaProduktow)

document.getElementById("lista").innerHTML = tablicaProduktow

// sortowanie tablicy

