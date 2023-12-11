

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
async function getData(URL){
try{
const response1 = await fetch(URL);
if(response1.status !=200) {
    throw new Error(response1.statusText);
}

console.log(response1);
const data = await response1.json();
console.log('People in Space', data);
document.querySelector("h1").textContent = data.content;
document.querySelector("h1").textContent = data.author;
} catch (error) {}
document.querySelector("h1").textContent = "error";
}

getData(URL);


// location of ISS rn
const URL2 = `http://api.open-notify.org/iss-now.json`;
async function getData(URL2){
try{
const response2 = await fetch(URL2);
if(response2.status !=200) {
    throw new Error(response2.statusText);
}

console.log(response);
const data = await response2.json();
console.log(data);
document.querySelector("h1").textContent = data.content;
document.querySelector("h1").textContent = data.author;
} catch (error) {}
document.querySelector("h1").textContent = "error";
}

getData(URL2);


//ISS api another (easier to read)

const URL3 = `https://api.wheretheiss.at/v1/satellites/25544`;
async function getData(URL3){
try{
const response3 = await fetch(URL3);
if(response3.status !=200) {
    throw new Error(response3.statusText);
}

console.log(response3);
const data = await response3.json();
console.log(data);
document.querySelector("h1").textContent = data.content;
document.querySelector("h1").textContent = data.author;
} catch (error) {}
document.querySelector("h1").textContent = "error";
}

getData(URL3);

//smth cool maybe

const URL4 = `https://api.le-systeme-solaire.net/rest/bodies/`;
async function getData(URL4){
try{
const response4 = await fetch(URL4);
if(response.status !=200) {
    throw new Error(response.statusText);
}

console.log(response4);
const data = await response4.json();
console.log(data);
document.querySelector("h1").textContent = data.content;
document.querySelector("h1").textContent = data.author;
} catch (error) {}
document.querySelector("h1").textContent = "error";
}

getData(URL4);