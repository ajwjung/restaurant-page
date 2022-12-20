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

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _elements_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements-builder */ \"./src/elements-builder.js\");\n\n\n\nconst MenuElements = (() => {\n    const createMenuHeader = () => {\n        const header = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createHeader();\n    \n        const menuH1 = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH1(\"Gusteau's Menu\");\n        header.appendChild(menuH1);\n\n        return header;\n    }\n\n    const createMenuDish = (dishName, description) => {\n        const newDish = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createDiv(\"salad\");\n        \n        const dishTitle = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH3(dishName);\n        const dishDescription = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createPara(description);\n\n        newDish.appendChild(dishTitle);\n        newDish.appendChild(dishDescription);\n\n        return newDish;\n    }\n\n    const createStartersSection = () => {\n        const starters = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createSection(\"starters\");\n\n        const startersH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH2(\"Starters\");\n        const caesarSalad = createMenuDish(\"Caesar Salad with Salmon\",\n        \"Pan-fried salmon served on a salad of romaine lettuce tossed with an olive oil dressing, grated cheese, and topped with croutons.\");\n        const pheasantConsomme = createMenuDish(\"Pheasant Consommé\",\n        \"A clear soup made from pheasant meat.\");\n\n        starters.appendChild(startersH2);\n        starters.appendChild(caesarSalad);\n        starters.appendChild(pheasantConsomme);\n\n        return starters;\n    }\n\n    const createEntreesSection = () => {\n        const entrees = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createSection(\"entrees\");\n\n        const entreesH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH2(\"Entrées\");\n        const soleMeuniere = createMenuDish(\"Sole Meunière\",\n        \"A sole filet that is lightly breaded in plain flour and pan-fried in butter, then lightly flavored with lemon and parsley.\")\n        const salmonRoulade = createMenuDish(\"Sous-vide Salmon Roulade\", \n        \"A nice salmon filet rolled with lemon and herbs into a roulade, cooked sous-vide.\");\n        const searedScallops = createMenuDish(\"Seared Scallops with Beurre Blanc\",\n        \"Fresh scallops seared in seasoned butter and olive oil, with a dash of Beurre Blanc.\");\n        const filetMignon = createMenuDish(\"Filet Mignon\", \n        \"An 8 oz. filet mignon served with a side of sweet potatoes, pan-seared onions and mushrooms.\")\n\n        entrees.appendChild(entreesH2);\n        entrees.appendChild(soleMeuniere);\n        entrees.appendChild(salmonRoulade);\n        entrees.appendChild(searedScallops);\n        entrees.appendChild(filetMignon);\n\n        return entrees;\n    }\n\n    const createDessertsSection = () => {\n        const desserts = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createSection(\"desserts\");\n\n        const dessertsH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH2(\"Desserts\");\n        const souffle = createMenuDish(\"Gusteau's Souffle\",\n        \"A baked egg-based dessert that's crispy on the outside and soft and fluffy on the inside.\");\n        const milleFeulle = createMenuDish(\"Mille-Feulle\",\n        \"A delicate pastry composed of multiple layers of buttery pastry, filled with rich custard pastry cream and topped with glossy royal icing. \");\n        const bundtCake = createMenuDish(\"French Bundt Cake\",\n        \"A classic vanilla Bundt cake topped with powdered sugar. Simple but delicious!\");\n\n        desserts.appendChild(dessertsH2);\n        desserts.appendChild(souffle);\n        desserts.appendChild(milleFeulle);\n        desserts.appendChild(bundtCake);\n        \n        return desserts;\n    }\n\n    const createMenuMain = () => {\n        const main = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createMain();\n\n        const startersSection = createStartersSection();\n        const entreesSection = createEntreesSection();\n        const dessertsSection = createDessertsSection();\n\n        main.appendChild(startersSection);\n        main.appendChild(entreesSection);\n        main.appendChild(dessertsSection);\n        \n        return main;\n    }\n\n    return { createMenuHeader, createMenuMain };\n\n})();\n\n\nconst Menu = (() => {\n    const content = _page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content;\n\n    const menuHeader = MenuElements.createMenuHeader();\n    const menuMain = MenuElements.createMenuMain();\n\n    content.appendChild(menuHeader);\n    content.appendChild(menuMain);\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements-builder */ \"./src/elements-builder.js\");\n/* harmony import */ var _imgs_gusteaus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/gusteaus.png */ \"./src/imgs/gusteaus.png\");\n/* harmony import */ var _imgs_alfredo_linguini_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/alfredo-linguini.png */ \"./src/imgs/alfredo-linguini.png\");\n/* harmony import */ var _imgs_remy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/remy.png */ \"./src/imgs/remy.png\");\n/* harmony import */ var _imgs_anton_ego_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/anton-ego.png */ \"./src/imgs/anton-ego.png\");\n\n\n\n\n\n\nconst PageElements = (() => {\n    const CreateHeaderSection = (() => {\n        const header = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createHeader();\n\n        const restaurantLogo = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createImage(_imgs_gusteaus_png__WEBPACK_IMPORTED_MODULE_1__);\n        restaurantLogo.setAttribute(\"id\", \"gusteau-logo\");\n        const restaurantName = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH1(\"Gusteau's\");\n        \n        header.appendChild(restaurantLogo);\n        header.appendChild(restaurantName);\n\n        return header;\n    })\n\n    const CreateChefSection = () => {\n        const chefsSection = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createSection(\"chefs\");\n        const chefsH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH2(\"Meet the Chefs\");\n    \n        const alfredoDiv = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv(\"alfredo\");\n        const alfredoImg = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createImage(_imgs_alfredo_linguini_png__WEBPACK_IMPORTED_MODULE_2__);\n        alfredoImg.setAttribute(\"id\", \"alfredo\");\n        const alfredoNamePara = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createPara(\"Alfredo Linguini\");\n    \n        const remyDiv = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv(\"remy\");\n        const remyImg = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createImage(_imgs_remy_png__WEBPACK_IMPORTED_MODULE_3__);\n        remyImg.setAttribute(\"id\", \"remy\");\n        const remyNamePara = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createPara(\"Remy\");\n    \n        alfredoDiv.appendChild(alfredoImg);\n        alfredoDiv.appendChild(alfredoNamePara);\n        remyDiv.appendChild(remyImg);\n        remyDiv.appendChild(remyNamePara);\n        chefsSection.appendChild(chefsH2);\n        chefsSection.appendChild(alfredoDiv);\n        chefsSection.appendChild(remyDiv);\n\n        return chefsSection;\n    }\n\n    const CreateReviewSection = () => {\n        const reviewsSection = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createSection(\"reviews\");\n\n        const reviewsH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH2(\"What the Critics Say\");\n        const egoImg = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createImage(_imgs_anton_ego_png__WEBPACK_IMPORTED_MODULE_4__);\n        egoImg.setAttribute(\"id\", \"ego\");\n        const egoReview = \"I experienced something new: an extraordinary meal from a singularly unexpected source. [...] It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more.\";\n        const reviewSpan = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createSpan(egoReview);\n        const egoNamePara = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createPara(\"Anton Ego\");\n\n        reviewsSection.appendChild(reviewsH2);\n        reviewsSection.appendChild(egoImg);\n        reviewsSection.appendChild(reviewSpan);\n        reviewsSection.appendChild(egoNamePara);\n\n        return reviewsSection;\n    }\n\n    return { CreateHeaderSection, CreateChefSection, CreateReviewSection };\n})();\n\nconst Page = (() => {\n    const content = document.querySelector(\"#content\");\n\n    const header = PageElements.CreateHeaderSection();\n    const main = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createMain();\n    const chefsMain = PageElements.CreateChefSection();\n    const reviewsMain = PageElements.CreateReviewSection();\n    \n    main.appendChild(chefsMain);\n    main.appendChild(reviewsMain);\n    content.appendChild(header);\n    content.appendChild(main);\n\n    return { content };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/imgs/alfredo-linguini.png":
/*!***************************************!*\
  !*** ./src/imgs/alfredo-linguini.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a888a199125446d8da2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/alfredo-linguini.png?");

/***/ }),

/***/ "./src/imgs/anton-ego.png":
/*!********************************!*\
  !*** ./src/imgs/anton-ego.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a0c441e07cfd678b9cb.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/anton-ego.png?");

/***/ }),

/***/ "./src/imgs/gusteaus.png":
/*!*******************************!*\
  !*** ./src/imgs/gusteaus.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d36471955967c81e0f4.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/gusteaus.png?");

/***/ }),

/***/ "./src/imgs/remy.png":
/*!***************************!*\
  !*** ./src/imgs/remy.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5ec938723c6aae074af.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/remy.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;