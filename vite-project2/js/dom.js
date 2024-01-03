const DOMselectors = {
    form: document.getElementById("form"),
    search_bar: document.getElementById("search"),
    apodbtn: document.getElementById("apodbtn"),
    databtn: document.getElementById("databtn"),
    themebtn: document.getElementById("btn"),
    apod_card: document.querySelector("apod_card"),
    title: document.querySelector("title"),
    img: document.querySelector("img"), //img is url
    explanation: document.querySelector("explanation"),
    date: document.querySelector("date"),
    card_holder: document.getElementById("card_holder"),
    planet_card: document.getElementById("planet_card"),
    englishName: document.querySelector("englishName"),
    bodyType: document.querySelector("bodyType"),
    discoveryDate: document.querySelector("discoveryDate"),
    discoveredBy: document.querySelector("discoveredBy"),
    gravity: document.querySelector("gravity"),
    aroundPlanet: document.querySelector("aroundPlanet")
}

export {DOMselectors}