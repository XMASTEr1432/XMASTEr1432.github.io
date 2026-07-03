console.log("ok")

// tablice

let stronaProduktu = [
    "https://tacohemingway.store/marmur",
    "https://www.empik.com/graduation-kanye-west,p1225977276,muzyka-p",
    "https://www.amazon.pl/dp/1835411711/?coliid=IMYTGS44HOD6W&colid=WUXHXXMYEKG4&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it_im",
    "https://www.mediaexpert.pl/gaming/gry/gry/gra-nintendo-switch-super-mario-rpg?gad_source=1",
    "https://www.empik.com/the-legend-of-zelda-echoes-of-wisdom-nintendo,p1501938254,multimedia-p?utm_source=google&utm_medium=cpc&utm_campaign=21912298706&utm_id=21912298706&utm_term=empik_multimedia&gad_source=1&gclid=EAIaIQobChMIwda_t-uOigMVd0-RBR1KbgtiEAQYASABEgJRMPD_BwE&gclsrc=aw.ds",
    "https://www.empik.com/ns-persona-5-tactica-cenega,p1396771776,multimedia-p?mpShopId=2669&utm_source=google&utm_medium=cpc&utm_campaign=20327908306&utm_id=20327908306&utm_term=empik_multimedia&gclsrc=aw.ds&gad_source=1&gclid=EAIaIQobChMIm5fVluuOigMVZgqiAx1liQu6EAQYAiABEgIOb_D_BwE&cls=1",
    "https://mediamarkt.pl/pl/product/_gra-nintendo-switch-pokemon-violet-1467323.html?utm_source=google&utm_medium=cpc&utm_campaign=rt_shopping_na_nsp_na_PMAX-Shopping-Promo-Price-PLA&gad_source=1&gclid=EAIaIQobChMI2Yad4OqOigMVkBmiAx1QsDJNEAQYASABEgLW6vD_BwE",
    "https://www.empik.com/kwiaty-dla-algernona-keyes-daniel,p1223076786,ksiazka-p?utm_source=google&utm_medium=cpc&utm_campaign=20800944404&utm_id=20800944404&utm_term=empik_ksiazka&gclsrc=aw.ds&gad_source=1&gclid=EAIaIQobChMI6-ar1_SOigMVnwuiAx23rhMVEAYYASABEgJ8j_D_BwE&cls=1",
    "https://www.x-kom.pl/p/1186687-sluchawki-bezprzewodowe-corsair-hs65-wireless-carbon-v2.html",
    "https://yatta.pl/Arcane_League_of_legends_Season_1_Blu_Ray_UK,273110,p"
]

let obrazyProduktow = [
    "https://tacohemingway.store/img/imagecache/6001-7000/680x680/1/product-media/6001-7000/Marmur-8097-680x680.jpg",
    "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/graduation-b-iext145478233.jpg",
    "https://m.media-amazon.com/images/I/71DjFYvMJ4L._SY466_.jpg",
    "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/56/5669256/Super-Mario-RPG-Gra-NINTENDO-SWITCH-2D-1.jpg",
    "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/the-legend-of-zelda-echoes-of-wisdom-b-iext170707254.jpg",
    "https://ecsmedia.pl/cdn-cgi/image/format=webp,/c/persona-5-tactica-nintendo-switch-b-iext156222007.jpg",
    "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_117264598?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
    "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/kwiaty-dla-algernona-b-iext161052805.jpg",
    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/10/pr_2023_10_20_13_7_43_397_00.jpg",
    "https://cache.yatta-static.pl/cache/size300/border429/es11/zoom0/pi0/img=towary/sprowadzane/497682/0.jpg"
]

let nazwaProduktu = [
    "Marmur",
    "Płyty Kanye\'go Westa np. Graduation",
    "The Art of Arcane",
    "Super Mario RPG Gra NINTENDO SWITCH",
    "The Legend of Zelda: Echoes of Wisdom",
    "Persona 5 Tactica, Nintendo Switch",
    "Gra Nintendo Switch Pokémon Violet",
    "Kwiaty dla Algernona",
    "Corsair HS65 Wireless (Carbon) v2",
    "Arcane League of legends Season 1 Blu-Ray UK"
]

let komentarzDoProduktu = [
    "płyta jest w przedsprzedaży do 17 grudnia",
    "jakakolwiek płyta Kanye West będzie ok ta tylko jest przykładem",
    "nie jest już dostępna na amazonie (nie wiem dlaczego), więc trzeba szukać gdzieś indziej :o (też trzeba patrzeć czy nie jest po niemiecku!)",
    "nie wiem czy jest akurat na media expert",
    "brak",
    "brak",
    "aktualnie jest obniżka (04.12)",
    "brak",
    "aktualnie jest obnizka (04.12)",
    "nie jestem pewny czy ma to sens :)"
]

let przecenaProduktu = "<span>*<span>"

let cenaProduktu = [
    "50zł",
    "54,94zł",
    "ok. 200zł",
    "89,99zł",
    "209,89zł",
    "99,90zł",
    "172,99zł" + przecenaProduktu,
    "27,99zł",
    "335zł" + przecenaProduktu,
    "279,90zł"
]

// modyfikacja tablicy 

for(let i = 0; i<obrazyProduktow.length; i++)
{
    // obrazyProduktow[i] = `<a href='${stronaProduktu[i]}'><img class='obrazyProduktu' src='${obrazyProduktow[i]}' alt='obraz'></a>`
    obrazyProduktow[i] = "<a href='"+stronaProduktu[i]+"'><img class='obrazyProduktu' src='"+obrazyProduktow[i]+"' alt='obraz'></a>"
}
for(let i = 0; i<stronaProduktu.length; i++)
{
    // stronaProduktu[i] = `<a class='stronaProduktu' href='${stronaProduktu[i]}'>Strona produktu</a>`
    stronaProduktu[i] = "<a class='stronaProduktu' href='"+stronaProduktu[i]+"'>Strona produktu</a>"
}

for(let i = 0; i<komentarzDoProduktu.length; i++)
{
    // komentarzDoProduktu[i] = `<i class='komentarz'>komentarz: ${komentarzDoProduktu[i]}</i>`
    komentarzDoProduktu[i] = "<i class='komentarz'>komentarz: "+komentarzDoProduktu[i]+"</i>"
}

for(let i = 0; i<cenaProduktu.length; i++)
{
    // cenaProduktu[i] = `<b class='cenaProduktu'>cena: ${cenaProduktu[i]}</b>`
    cenaProduktu[i] = "<b class='cenaProduktu'>cena: "+cenaProduktu[i]+"</b>"
}

for(let i = 0; i<nazwaProduktu.length; i++)
{
    nazwaProduktu[i] = "<b class='nazwaProduktu'>produkt:"+ nazwaProduktu[i]+"</b>"
}

let listaProduktow = new Array()

// dodawanie tablicy


for(i = 0; i < nazwaProduktu.length; i++)
{
    listaProduktow.push("<li><h4>" + cenaProduktu[i] + nazwaProduktu[i] + stronaProduktu[i] + komentarzDoProduktu[i] + "<br><br>" +  obrazyProduktow[i] + "</h4></li>")
    console.log(i)
}


document.getElementById("lista").innerHTML = listaProduktow

// sortowanie tablicy
let czySortowane = false;

let sortowanie = () =>
{
    document.getElementById("lista").innerHTML = listaProduktow.reverse()
    if(czySortowane == true)
    {
        document.getElementById("przyciskSortowania").value = "Sortuj od najnowszych"
        czySortowane = false
    }
    else
    {
        document.getElementById("przyciskSortowania").value = "Sortuj od najstarszych"
        czySortowane = true
    }
}
