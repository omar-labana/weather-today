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

eval("const searchBtn = document.getElementById('search-btn')\r\nconst searchField = document.getElementById('search-field')\r\nconst content = document.getElementById('content')\r\n\r\nconst create = (elementName, styles = false, text = false) => {\r\n    const element = document.createElement(elementName);\r\n    if (styles) {\r\n      styles.forEach((style) => {\r\n        element.classList.add(style);\r\n      });\r\n    }\r\n    if (text) {\r\n      element.textContent = text;\r\n    }\r\n    return element;\r\n  };\r\n\r\nconst appendWeather = (data)=>{\r\n    create('h2', [], `Whether in data.city`)\r\n}\r\n\r\nconst key = 'e1b476e101e01d5095de3095ad8c6ff0'\r\nfetch(`https://api.openweathermap.org/data/2.5/weather?q=cairo&units=metric&APPID=${key}`, { mode: 'cors' })\r\n    .then(res => res.json())\r\n    .then(data => appendWeather(data))\r\n    .catch(() => {\r\n        document.getElementById('content').innerHTML += customAlert('City not found. Please realod the page and try again! ');\r\n    })\n\n//# sourceURL=webpack://weather-today/./src/index.js?");

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