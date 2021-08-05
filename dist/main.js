/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const searchBtn = document.getElementById('search-btn')\r\nconst searchField = document.getElementById('search-field')\r\nconst content = document.getElementById('content')\r\n\r\nconst key = 'e1b476e101e01d5095de3095ad8c6ff0'\r\n\r\nconst create = (elementName, styles = false, text = false) => {\r\n    const element = document.createElement(elementName);\r\n    if (styles) {\r\n        styles.forEach((style) => {\r\n            element.classList.add(style);\r\n        });\r\n    }\r\n    if (text) {\r\n        element.textContent = text;\r\n    }\r\n    return element;\r\n};\r\n\r\nconst appendWeather = (data) => {\r\n    content.innerHTML = ''\r\n    console.log(data);\r\n    content.appendChild(create('h2', ['text-white', 'text-3xl'], `Weather in ${data.name}`))\r\n    content.appendChild(create('h2', ['text-white', 'text-3xl'], `${parseInt(data.main['temp'], 10)}°C | ${parseInt(parseFloat(data.main['temp'], 10) * (9 / 5) + 32, 10)}°F`))\r\n    content.appendChild(create('h2', ['text-white', 'text-3xl'], `${data.weather[0].description}`))\r\n    content.appendChild(create('h2', ['text-white', 'text-3xl'], `Humidity: ${data.main['humidity']}`))\r\n}\r\n\r\nconst getData = () => {\r\n    const city = searchField.value || 'cairo'\r\n    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`, { mode: 'cors' })\r\n        .then(res => res.json())\r\n        .then(data => appendWeather(data))\r\n        .catch(() => {\r\n            content.appendChild = create('h2', ['text-white', 'text-2xl'])\r\n        })\r\n}\r\n\r\nsearchBtn.addEventListener('click', getData)\r\ngetData()\n\n//# sourceURL=webpack://weather-today/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;