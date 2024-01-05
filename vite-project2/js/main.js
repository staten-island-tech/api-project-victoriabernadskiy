import "../css/style.css"
import { DOMselectors } from "./dom"

// NASA APOD
const config = {
  NASA_API_KEY: "NDeFF4wPtMyuheK8gYrnP8BJlJwZxlIG5mPsyshP"
}
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
    return data
  } catch (error) {
    console.log(error)
  }
}

fetchNASAData()


// # of people in space rn
const URL = `http://api.open-notify.org/astros.json`;
const Example = async () => {
  try {
    const response = await fetch(`${URL}`)
    const data = await response.json()
    console.log('NUMBER OF PPL', data)
  } catch (error) {
    console.log(error)
  }
}

Example()


// location of ISS rn
const URL2 = `http://api.open-notify.org/iss-now.json`;
const Maybe = async () => {
  try {
    const response = await fetch(`${URL2}`)
    const data = await response.json()
    console.log('MAYBE data', data)
  } catch (error) {
    console.log(error)
  }
}

Maybe()

//ISS api another (easier to read)

const URL3 = `https://api.wheretheiss.at/v1/satellites/25544`;
const Possibly = async () => {
  try {
    const response = await fetch(`${URL3}`)
    const data = await response.json()
    console.log('POSSIBLY data', data)
  } catch (error) {
    console.log(error)
  }
}

Possibly()


//smth cool maybe

const URL4 = `https://api.le-systeme-solaire.net/rest/bodies/`;
const Cool = async () => {
  try {
    const response = await fetch(`${URL4}`)
    const data = await response.json()
    console.log('COOL data', data)
  } catch (error) {
    console.log(error)
  }
}

Cool()
/* 
document.querySelector("#btn").addEventListener("click", function () {
  if (document.body.classList.contains("day")) {
    document.body.classList.add("night");
    document.body.classList.remove("day");
  } else {
    document.body.classList.add("day");
    document.body.classList.remove("night");
  }
});
 */
function Insert(obj) {
    DOMselectors.card_holder.insertAdjacentHTML('afterbegin', 
    `  <div class="apod_card">
    <h1 class="title">${obj.title}</h1>
    <img src="${obj.url}" alt="" class="img">
    <h2 class="explanation">${obj.explanation}</h2>
    <h2 class="date">${obj.date}</h2>
  </div>`)};


const nasadata = await fetchNASAData()
Insert(nasadata)

DOMselectors.form.addEventListener("submit", function (event) {
  event.preventDefault
  var bar = `${DOMselectors.search_bar.value}` ;
  console.log(bar)
  const URL4 = `https://api.le-systeme-solaire.net/rest/bodies/${bar}`
}
)


function Enter(planet) {
  planet.forEach((moon) => {
    document.querySelector(".planet_holder").insertAdjacentHTML('afterbegin', )
  ` <div class="planet_card">
  <h1 class="englishName">${moon.englishName}</h1>
  <h2 class="bodyType">${moon.bodyType}</h2>
  <h2 class="discoveryDate">${moon.discoveryDate}</h2>
  <h2 class="discoveredBy">${moon.discoveredBy}</h2>
  <h2 class="gravity">${moon.gravity}</h2>
  <h2 class="aroundPlanet">${moon.aroundPlanet}</h2>
</div>`
})
}

const planetData = await Cool()
Enter(planetData)
