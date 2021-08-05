const searchBtn = document.getElementById('search-btn')
const searchField = document.getElementById('search-field')
const content = document.getElementById('content')

const create = (elementName, styles = false, text = false) => {
    const element = document.createElement(elementName);
    if (styles) {
      styles.forEach((style) => {
        element.classList.add(style);
      });
    }
    if (text) {
      element.textContent = text;
    }
    return element;
  };

const appendWeather = (data)=>{
    create('h2', [], `Whether in data.city`)
}

const key = 'e1b476e101e01d5095de3095ad8c6ff0'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=cairo&units=metric&APPID=${key}`, { mode: 'cors' })
    .then(res => res.json())
    .then(data => appendWeather(data))
    .catch(() => {
        document.getElementById('content').innerHTML += customAlert('City not found. Please realod the page and try again! ');
    })