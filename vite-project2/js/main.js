import "../css/style.css"

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