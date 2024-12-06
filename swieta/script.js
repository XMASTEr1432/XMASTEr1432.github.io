console.log("ok")

// tablica

const listaProduktow = [
    {
        nazwaProduktu: "Marmur",
        cenaProduktu: 50,
        czyPromocja: false,
        obrazyProduktow: "https://tacohemingway.store/img/imagecache/6001-7000/680x680/1/product-media/6001-7000/Marmur-8097-680x680.jpg",
        stronaProduktu: "https://tacohemingway.store/marmur",
        komentarzDoProduktu: "płyta jest w przedsprzedaży do 17 grudnia"
    },
    {
        nazwaProduktu: "Płyty Kanye\'go Westa np. Graduation",
        cenaProduktu: 54.94,
        czyPromocja: false,
        obrazyProduktow: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/graduation-b-iext145478233.jpg",
        stronaProduktu: "https://www.empik.com/graduation-kanye-west,p1225977276,muzyka-p",
        komentarzDoProduktu: "jakakolwiek płyta Kanye West będzie ok ta tylko jest przykładem",
    },
    {
        nazwaProduktu: "The Art of Arcane",
        cenaProduktu: 200,
        czyPromocja: false,
        obrazyProduktow: "https://m.media-amazon.com/images/I/71DjFYvMJ4L._SY466_.jpg",
        stronaProduktu: "https://www.amazon.pl/dp/1835411711/?coliid=IMYTGS44HOD6W&colid=WUXHXXMYEKG4&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it_im",
        komentarzDoProduktu: "nie jest już dostępna na amazonie (nie wiem dlaczego), więc trzeba szukać gdzieś indziej :o (też trzeba patrzeć czy nie jest po niemiecku!)"
    },
    {
        nazwaProduktu: "Super Mario RPG Gra NINTENDO SWITCH",
        cenaProduktu: 89.99,
        czyPromocja: false,
        obrazyProduktow: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/56/5669256/Super-Mario-RPG-Gra-NINTENDO-SWITCH-2D-1.jpg",
        stronaProduktu: "https://www.mediaexpert.pl/gaming/gry/gry/gra-nintendo-switch-super-mario-rpg?gad_source=1",
        komentarzDoProduktu: "nie wiem czy jest akurat na media expert"
    },
    {
        nazwaProduktu: "The Legend of Zelda: Echoes of Wisdom",
        cenaProduktu: 209.89,
        czyPromocja: false,
        obrazyProduktow: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/the-legend-of-zelda-echoes-of-wisdom-b-iext170707254.jpg",
        stronaProduktu: "https://www.empik.com/the-legend-of-zelda-echoes-of-wisdom-nintendo,p1501938254,multimedia-p?utm_source=google&utm_medium=cpc&utm_campaign=21912298706&utm_id=21912298706&utm_term=empik_multimedia&gad_source=1&gclid=EAIaIQobChMIwda_t-uOigMVd0-RBR1KbgtiEAQYASABEgJRMPD_BwE&gclsrc=aw.ds",
        komentarzDoProduktu: "brak"
    },  
    {
        nazwaProduktu: "Persona 5 Tactica, Nintendo Switch",
        cenaProduktu: 100,
        czyPromocja: false,
        obrazyProduktow: "https://ecsmedia.pl/cdn-cgi/image/format=webp,/c/persona-5-tactica-nintendo-switch-b-iext156222007.jpg",
        stronaProduktu: "https://www.empik.com/ns-persona-5-tactica-cenega,p1396771776,multimedia-p?mpShopId=2669&utm_source=google&utm_medium=cpc&utm_campaign=20327908306&utm_id=20327908306&utm_term=empik_multimedia&gclsrc=aw.ds&gad_source=1&gclid=EAIaIQobChMIm5fVluuOigMVZgqiAx1liQu6EAQYAiABEgIOb_D_BwE&cls=1",
        komentarzDoProduktu: "brak"
    },
    {
        nazwaProduktu: "Gra Nintendo Switch Pokémon Violet",
        cenaProduktu: 172.99,
        czyPromocja: true,
        obrazyProduktow: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_117264598?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
        stronaProduktu: "https://mediamarkt.pl/pl/product/_gra-nintendo-switch-pokemon-violet-1467323.html?utm_source=google&utm_medium=cpc&utm_campaign=rt_shopping_na_nsp_na_PMAX-Shopping-Promo-Price-PLA&gad_source=1&gclid=EAIaIQobChMI2Yad4OqOigMVkBmiAx1QsDJNEAQYASABEgLW6vD_BwE",
        komentarzDoProduktu: "aktualnie jest obniżka (04.12)"
    },
    {
        nazwaProduktu: "Kwiaty dla Algernona",
        cenaProduktu: 27.99,
        czyPromocja: false,
        obrazyProduktow: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/kwiaty-dla-algernona-b-iext161052805.jpg",
        stronaProduktu: "https://www.empik.com/kwiaty-dla-algernona-keyes-daniel,p1223076786,ksiazka-p?utm_source=google&utm_medium=cpc&utm_campaign=20800944404&utm_id=20800944404&utm_term=empik_ksiazka&gclsrc=aw.ds&gad_source=1&gclid=EAIaIQobChMI6-ar1_SOigMVnwuiAx23rhMVEAYYASABEgJ8j_D_BwE&cls=1",
        komentarzDoProduktu: "brak"
    },
    {
        nazwaProduktu: "Corsair HS65 Wireless (Carbon) v2",
        cenaProduktu: 335,
        czyPromocja: true,
        obrazyProduktow: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/10/pr_2023_10_20_13_7_43_397_00.jpg",
        stronaProduktu: "https://www.x-kom.pl/p/1186687-sluchawki-bezprzewodowe-corsair-hs65-wireless-carbon-v2.html",
        komentarzDoProduktu: "aktualnie jest obnizka (04.12)"
    },
    {
        nazwaProduktu: "Arcane League of legends Season 1 Blu-Ray UK",
        cenaProduktu: 280,
        czyPromocja: false,
        obrazyProduktow: "https://cache.yatta-static.pl/cache/size300/border429/es11/zoom0/pi0/img=towary/sprowadzane/497682/0.jpg",
        stronaProduktu: "https://yatta.pl/Arcane_League_of_legends_Season_1_Blu_Ray_UK,273110,p",
        komentarzDoProduktu: "nie jestem pewny czy ma to sens :)"
    }
]

// wypisywanie do tablicy

let listaProduktowOutput = document.getElementById("lista")

let wypisanieTablicy = (produkt) =>
{
    let listaProduktowOutputTable =`
        <li>
            <p>Cena: ${produkt.cenaProduktu}${produkt.czyPromocja}zł</p>
            <p>Nazwa: ${produkt.nazwaProduktu}</p>
            <a href="${produkt.stronaProduktu}" class="stronaProduktu">Strona produktu</a>
            <p><i class="komentarz">Komentarz: ${produkt.komentarzDoProduktu}</i></p>
            <img src="${produkt.obrazyProduktow}" alt="obraz" class="obrazyProduktu">
        </li>
    `
    if(produkt.czyPromocja == true){
        listaProduktowOutput.innerHTML += listaProduktowOutputTable.replace(true, "<span>*</span>")
    }
    else
    {
        listaProduktowOutput.innerHTML += listaProduktowOutputTable.replace(false, "")
    }
}

// sortowanie

let czySortowaneData = false
let czySortowaneCena = false

let buttonFirst = document.getElementById("przyciskSortowaniaData")

let buttonSecond = document.getElementById("przyciskSortowaniaCena")


function sortowanieData()
{
    listaProduktow.reverse()
    if(czySortowaneData == true)
    {
        czySortowaneData = false
        buttonFirst.value = "Sortuj od najstarszych ⇩"
    }
    else
    {
        czySortowaneData = true
        buttonFirst.value = "Sortuj od najnowszych ⇧"
    }
    listaProduktowOutput.innerHTML = ""
    listaProduktow.forEach(produkt => {
        wypisanieTablicy(produkt)
    })
}
function sortowanieCena()
{
    
    if(czySortowaneCena == false)
    {
        listaProduktowCenaSort = listaProduktow.toSorted((a, b)=>a.cenaProduktu-b.cenaProduktu)
        czySortowaneCena = true
        buttonSecond.value = "Sortuj po cenie ⇩"
    }
    else
    {
        czySortowaneCena = false
        listaProduktowCenaSort = listaProduktow.toSorted((a, b)=>b.cenaProduktu-a.cenaProduktu)
        buttonSecond.value = "Sortuj po cenie ⇧"
    }
    listaProduktowOutput.innerHTML = ""
    listaProduktowCenaSort.forEach(produkt => {
        wypisanieTablicy(produkt)
    })
}

onload = () =>
{
    listaProduktow.forEach(produkt => {
        // console.log(produkt)
        wypisanieTablicy(produkt)
    })
    console.log(czySortowaneData)
}