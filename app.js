const API_KEY = "c526519b8d928f74ce94936b5ae6fef0";

let caja= document.getElementById ("contenedor");
let cargar= document.getElementById ("loader");
let buscar= document.getElementById ("buscar_ciudad")
let ciudad= document.getElementById ("texto_ciudad")
let ubicacion= document.getElementById ("ciudad")
let icono= document.getElementById ("clima_icon")
let temp= document.getElementById ("temperatura")
let descripcion= document.getElementById ("descripcion")
let temp_min= document.getElementById  ("temp_min")
let temp_max= document.getElementById  ("temp_max")
let termica= document.getElementById  ("termica")
let humedad= document.getElementById  ("humedad")
let presion= document.getElementById  ("presion")
let viento= document.getElementById  ("viento")
let fondo = document.getElementById ("fondo")
let caja1 = document.getElementsByClassName ("nombre")
let caja2 = document.getElementsByClassName ("caja_datos")
let cajatemp = document.getElementById ("ciudad_temp")

//Obtengo los datos del objeto

const display_data = (obj)=>{
    ubicacion.textContent = `${(obj.name)} - ${(obj.sys.country)}`
    temp.textContent = `${Math.floor(obj.main.temp)}°C`
    temp_min.textContent = `${Math.floor(obj.main.temp_min)}°C`
    temp_max.textContent = `${Math.floor(obj.main.temp_max)}°C`
    termica.textContent = `${Math.floor(obj.main.feels_like)}°C`
    humedad.textContent = `${Math.floor(obj.main.humidity)}%`
    presion.textContent = `${Math.floor(obj.main.pressure)} hPa`
    viento.textContent = `${Math.floor(obj.main.humidity)} m/s`

//Dependiendo que reciba del main cambio la info del clima segun corresponda 
    switch(obj.weather[0].main){
        case 'Thunderstorm':
            icono.src='img/icon/trueno.png'
            fondo.src='https://www.youtube.com/embed/uupSgrlr_4Y?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=uupSgrlr_4Y'
            descripcion.textContent = 'Tormenta Electrica'
            caja.style.backgroundColor = '#C1C1D9'
            cajatemp.style.backgroundColor ='#E6E9F2'
            for(let i = 0; i < caja1.length; i++){
                caja1[i].style.backgroundColor = "#D3D4E6";}
            for(let i = 0; i < caja2.length; i++){
                caja2[i].style.backgroundColor = "#E6E9F2";}
        break;
        case 'Drizzle':
            icono.src='img/icon/lluvia.png'
            fondo.src='https://www.youtube.com/embed/NNxHVgz9nf4?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=NNxHVgz9nf4'
            descripcion.textContent = 'Llovizna'
            caja.style.backgroundColor = '#A0C4E2'
            cajatemp.style.backgroundColor ='#C6DBF0'
            for(let i = 0; i < caja1.length; i++){
                caja1[i].style.backgroundColor = "#AED1E6";}
            for(let i = 0; i < caja2.length; i++){
                caja2[i].style.backgroundColor = "#C6DBF0";}
        break;
        case 'Rain':
            icono.src='img/icon/lluvia.png'
            fondo.src='https://www.youtube.com/embed/NNxHVgz9nf4?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=NNxHVgz9nf4'
            descripcion.textContent = 'Lluvia'
            caja.style.backgroundColor = '#A0C4E2'
            cajatemp.style.backgroundColor ='#C6DBF0'
            for(let i = 0; i < caja1.length; i++){
                caja1[i].style.backgroundColor = "#AED1E6";}
            for(let i = 0; i < caja2.length; i++){
                caja2[i].style.backgroundColor = "#C6DBF0";}
        break;
        case 'Snow':
            icono.src='img/icon/nevando.png'
            fondo.src='https://www.youtube.com/embed/Sj_ExTWNoWE?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=Sj_ExTWNoWE'
            descripcion.textContent = 'Nieve'
            caja.style.backgroundColor = '#EBF1FF'
            cajatemp.style.backgroundColor ='#FCFFEB'
            for(let i = 0; i < caja1.length; i++){
                caja1[i].style.backgroundColor = "#FFF8EB";}
            for(let i = 0; i < caja2.length; i++){
                caja2[i].style.backgroundColor = "#FCFFEB";}
        break;
        case 'Clear':
            icono.src='img/icon/sol.png'
            fondo.src='https://www.youtube.com/embed/Fv_KeODSVRQ?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=Fv_KeODSVRQ'
            descripcion.textContent = 'Despejado'
            caja.style.backgroundColor = '#FFB65C'
            cajatemp.style.backgroundColor ='#FFDC74'
            for(let i = 0; i < caja1.length; i++){
                caja1[i].style.backgroundColor = "#FFD15C";}
            for(let i = 0; i < caja2.length; i++){
                caja2[i].style.backgroundColor = "#FFDC74";}
        break;
        case 'Clouds':
            icono.src='img/icon/nube.png'
            fondo.src='https://www.youtube.com/embed/4DxR0tw0lOI?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=4DxR0tw0lOI'
            descripcion.textContent = 'Nublado'
            caja.style.backgroundColor = '#CED4DA'
            cajatemp.style.backgroundColor ='#B7C3CD'
            for(let i = 0; i < caja1.length; i++){
                caja1[i].style.backgroundColor = "#DEE2E6";}
            for(let i = 0; i < caja2.length; i++){
                caja2[i].style.backgroundColor = "#B7C3CD";}
        break;
        default:
            icono.src='img/icon/nube.png'
            fondo.src='https://www.youtube.com/embed/4DxR0tw0lOI?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=4DxR0tw0lOI'
            descripcion.textContent = 'Nublado'
            caja.style.backgroundColor = '#CED4DA'
            cajatemp.style.backgroundColor ='#B7C3CD'
            for(let i = 0; i < caja1.length; i++){
                caja1[i].style.backgroundColor = "#DEE2E6";}
            for(let i = 0; i < caja2.length; i++){
                caja2[i].style.backgroundColor = "#B7C3CD";}
    }       
}

//Obtener datos de la API

const obtener_datos = async (city)=>{

    //Obtener el objeto que contiene los datos
    const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=${API_KEY}`);
    const data = await res.json();
    console.log(data);

    //mostrar los datos en pantalla

    setTimeout(function(){
        display_data(data);
    }, 500);

    setTimeout(function(){
        spinner();
    }, 1000);
}

const spinner = () =>{
    cargar.style.display = 'none';
    caja.style.display = 'block';
}


buscar.addEventListener("submit", event=>{
    event.preventDefault();
    obtener_datos(ciudad.value);
})

obtener_datos("Buenos Aires");