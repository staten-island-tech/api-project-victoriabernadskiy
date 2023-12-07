import "./style.css";
const URL = "https://api.nasa.gov/planetary/apod?api_key=NDeFF4wPtMyuheK8gYrnP8BJlJwZxlIG5mPsyshP";
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

getData(URL);

