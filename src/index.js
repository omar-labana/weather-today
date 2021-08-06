const searchBtn = document.getElementById('search-btn');
const searchField = document.getElementById('search-field');
const content = document.getElementById('content');

let unit = 'C';
let degree = 0;
const key = 'e1b476e101e01d5095de3095ad8c6ff0';

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

const changeUnit = () => {
  if (unit === 'C') {
    document.getElementsByClassName('t')[0].innerHTML = `${parseInt(parseFloat(degree, 10) * (9 / 5) + 32, 10)}°F`;
  } else {
    document.getElementsByClassName('t')[0].innerHTML = `${parseInt(degree, 10)}°C`;
  }
  document.getElementsByClassName('s')[0].innerHTML = `Switch to °${unit}`;
  unit = unit === 'C' ? 'F' : 'C';
};

const changeBG = (s) => {
  const cloud = 'https://static.turbosquid.com/Preview/2020/01/06__17_01_59/cloud_combine.png4B817141-BA64-42BA-B720-788A5CDF916DLarge.jpg';
  const rain = 'data:image/jpeg;base64,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';
  const clear = 'https://media.istockphoto.com/videos/sapporo-cityscape-video-id473018915?s=640x640';
  if (s === 'Clear') {
    document.getElementById('kk').style.backgroundImage = `url('${clear}')`;
  } else if (s === 'Clouds') {
    document.getElementById('kk').style.backgroundImage = `url('${cloud}')`;
  } else {
    document.getElementById('kk').style.backgroundImage = `url('${rain}')`;
  }
};

const appendWeather = (data) => {
  content.innerHTML = '';
  content.appendChild(create('h2', ['text-white', 'text-3xl'], `Weather in ${data.name}`));
  content.appendChild(create('h2', ['text-white', 'text-3xl', 't'], `${parseInt(data.main.temp, 10)}°C`));
  degree = data.main.temp;
  const switchBtn = create('button', ['p-2', 'bg-white', 'text-xl', 'rounded', 's'], `switch to °${unit === 'C' ? 'F' : 'C'}`);
  switchBtn.addEventListener('click', changeUnit);
  content.appendChild(switchBtn);
  content.appendChild(create('h2', ['text-white', 'text-3xl'], `${data.weather[0].description}`));
  content.appendChild(create('h2', ['text-white', 'text-3xl'], `Humidity: ${data.main.humidity}`));
  changeBG(data.weather[0].main);
};

const getData = () => {
  const city = searchField.value || 'cairo';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`, { mode: 'cors' })
    .then((res) => res.json())
    .then((data) => appendWeather(data))
    .catch(() => {
      content.appendChild = create('h2', ['text-white', 'text-2xl']);
    });
};

searchBtn.addEventListener('click', getData);
getData();