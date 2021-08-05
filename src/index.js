const searchBtn = document.getElementById('search-btn');
const searchField = document.getElementById('search-field');
const content = document.getElementById('content');

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

const appendWeather = (data) => {
  content.innerHTML = '';
  content.appendChild(create('h2', ['text-white', 'text-3xl'], `Weather in ${data.name}`));
  content.appendChild(create('h2', ['text-white', 'text-3xl'], `${parseInt(data.main.temp, 10)}°C | ${parseInt(parseFloat(data.main.temp, 10) * (9 / 5) + 32, 10)}°F`));
  content.appendChild(create('h2', ['text-white', 'text-3xl'], `${data.weather[0].description}`));
  content.appendChild(create('h2', ['text-white', 'text-3xl'], `Humidity: ${data.main.humidity}`));
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