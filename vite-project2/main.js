// import "./style.css";
/* const URL = "https://api.nasa.gov/planetary/apod?api_key=NDeFF4wPtMyuheK8gYrnP8BJlJwZxlIG5mPsyshP";
var APIKey = NDeFF4wPtMyuheK8gYrnP8BJlJwZxlIG5mPsyshP;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    document.querySelector("h1").textContent = data.content;
  } catch (error) {}
    document.querySelector("h1").textContent = "error";
}

getData(URL); */

async function getData() {
  let res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=NDeFF4wPtMyuheK8gYrnP8BJlJwZxlIG5mPsyshP"
  );
  let data = await res.json();
  console.log(data);
}
getData();




const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}
