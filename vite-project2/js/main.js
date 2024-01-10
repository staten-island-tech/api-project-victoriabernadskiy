import "../css/style.css"
import { DOMselectors } from "./dom"

// NASA APOD
const config = {
  NASA_API_KEY: "NDeFF4wPtMyuheK8gYrnP8BJlJwZxlIG5mPsyshP"
}
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY





//smth cool maybe

const URL4 = `https://api.le-systeme-solaire.net/rest/bodies/`;
const FetchURL = async (request) => {
  try {
    const response = await fetch(`${request}`)
    const data = await response.json()
    console.log('COOL data', data)
    return data
  } catch (error) {
    console.log(error)
  }
}

FetchURL()

function Insert(obj) {
    DOMselectors.card_holder.insertAdjacentHTML('afterbegin', 
    `  <div class="apod_card">
    <h1 class="title">${obj.title}</h1>
    <img src="${obj.url}" alt="" class="img">
    <h2 class="explanation">${obj.explanation}</h2>
    <h2 class="date">${obj.date}</h2>
  </div>`)};




DOMselectors.form.addEventListener("submit", async function (event) {
  event.preventDefault()
  var bar = `${DOMselectors.search_bar.value}` ;
  console.log(bar)
  const newURL = `https://api.le-systeme-solaire.net/rest/bodies/${bar}`;
  const data = await FetchURL(newURL)
  console.log(data)
  deletecards()
  Enter(data)
  DOMselectors.card_holder.classList.add("hidden")
}
)


const deletecards = function() {
  DOMselectors.planet_holder.innerHTML = ''
}
deletecards()




function Enter(moon) {
  var empty

    if (moon.aroundPlanet == null) {
      empty = "none"
    } else {
      empty = moon.aroundPlanet.planet
    }
    document.querySelector("#planet_holder").insertAdjacentHTML('afterbegin', 
  ` <div class="planet_card">
  <h1 class="englishName">${moon.englishName}</h1>
  <h2 class="bodyType">Type: ${moon.bodyType}</h2>
  <h2 class="discoveryDate">Discovery Date: ${moon.discoveryDate}</h2>
  <h2 class="discoveredBy">Discovered By: ${moon.discoveredBy}</h2>
  <h2 class="gravity">Gravity: ${moon.gravity}</h2>
  <h2 class="aroundPlanet">Around Planet: ${empty}</h2>
  
</div>`)

}


DOMselectors.apodbtn.addEventListener("click", function(){
  DOMselectors.card_holder.classList.remove("hidden")
  deletecards() 
})

async function load() {
  const nasadata = await FetchURL(`${url}${api_key}`)
  Insert(nasadata)
}

load()