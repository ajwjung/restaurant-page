/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/elements-builder.js":
/*!*********************************!*\
  !*** ./src/elements-builder.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainElements\": () => (/* binding */ MainElements),\n/* harmony export */   \"OtherElements\": () => (/* binding */ OtherElements)\n/* harmony export */ });\nconst MainElements = (() => {\n    const createHeader = () => {\n        const newHeader = document.createElement(\"header\");\n        return newHeader;\n    }\n\n    const createMain = () => {\n        const newMain = document.createElement(\"main\");\n        return newMain;\n    }\n\n    const createSection = (className) => {\n        const newSection = document.createElement(\"section\");\n        newSection.classList.add(className);\n        return newSection;\n    }\n\n    return { createHeader, createMain, createSection }\n})();\n\nconst OtherElements = (() => {\n    const createH1 = (text) => {\n        const newH1 = document.createElement(\"h1\");\n        newH1.textContent = text;\n        return newH1;\n    }\n\n    const createH2 = (text) => {\n        const newH2 = document.createElement(\"h2\");\n        newH2.textContent = text;\n        return newH2;\n    }\n\n    const createH3 = (text) => {\n        const newH3 = document.createElement(\"h3\");\n        newH3.textContent = text;\n        return newH3;\n    }\n\n    const createDiv = (className) => {\n        const newDiv = document.createElement(\"div\");\n        newDiv.classList.add(className);\n        return newDiv;\n    }\n\n    const createImage = (src) => {\n        const newImage = document.createElement(\"img\");\n        newImage.src = src;\n        return newImage;\n    }\n\n    const createPara = (text) => {\n        const newPara = document.createElement(\"p\");\n        newPara.textContent = text;\n        return newPara;\n    }\n\n    const createSpan = (text) => {\n        const newSpan = document.createElement(\"span\");\n        newSpan.textContent = text;\n        return newSpan;\n    }\n\n    return { createH1, createH2, createH3, createDiv,\n        createImage, createPara, createSpan }\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/elements-builder.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/elements-builder.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;