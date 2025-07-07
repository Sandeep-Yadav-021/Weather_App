let city=document.getElementById("city");
let type=document.getElementById("type");
let temp=document.getElementById("temp");
let img=document.getElementById("img");
let inp=document.getElementById("inp");

let API_key="e13ec559dd7980bc4660de528dc20593"

const data=async function(search){
  let getData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
  console.log(getData);
  let jsonData=await getData.json();
  console.log(jsonData);
  console.log(jsonData.name);

  if(jsonData.cod == 400){
    alert("Please EnterLocation")
    // img.src="error.jpg"
    city.innerHTML="";
  type.innerHTML="";
  temp.innerHTML="";
  }

  if(jsonData.cod == 404){
    alert("Please Enter Correct Location")
  }

  city.innerHTML=jsonData.name;
  type.innerHTML=jsonData.weather[0].main;
  temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";

  if(type.innerHTML== "Clouds"){
     img.src="clouds.jpg"
  }
  else if(type.innerHTML== "Clear"){
    img.src="clear.jpg"
  }
  else if(type.innerHTML== "Rain"){
    img.src="rain.jpg"
  }
  else if(type.innerHTML== "Snow"){
    img.src="snow.jpg"
  }
  else if(type.innerHTML== "Haze"){
    img.src="haze.jpg"
  }
  else if(type.innerHTML== "Strom"){
    img.src="strom.jpg"
  }
  inp.value="";

}

function myFun(){
  search=inp.value;
  data(search);
}
