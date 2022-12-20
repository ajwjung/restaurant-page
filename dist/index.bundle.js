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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"header > img {\\n    width: 25%;\\n    border-radius: 50%;\\n}\\n\\n.reviews img {\\n    width: 15%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _elements_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements-builder */ \"./src/elements-builder.js\");\n\n\n\nconst ContactElements = (() => {\n    const createContactHeader = () => {\n        const header = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createHeader();\n        \n        const contactH1 = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH1(\"Contact Us\");\n        header.appendChild(contactH1);\n\n        return header;\n    }\n\n    const createContactMain = () => {\n        const main = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createMain();\n        const mainContainer = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createDiv(\"contact-info\");\n    \n        const contactPara = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createPara(\"We look forward to serving you. If you have any questions or would like to book a reservation, please reach out to us.\")\n        const contactPhone = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createPara(\"111-111-1111\");\n        const contactEmail = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createPara(\"info@gusteaus.com\");\n\n        mainContainer.appendChild(contactPara);\n        mainContainer.appendChild(contactPhone);\n        mainContainer.appendChild(contactEmail);\n        main.append(mainContainer);\n    \n        return main;\n    }\n\n    return { createContactHeader, createContactMain };\n\n})();\n\nconst Contact = (() => {\n    const content = _page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content;\n\n    const contactHeader = ContactElements.createContactHeader();\n    const contactMain = ContactElements.createContactMain();\n    \n    content.appendChild(contactHeader);\n    content.appendChild(contactMain);\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/elements-builder.js":
/*!*********************************!*\
  !*** ./src/elements-builder.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainElements\": () => (/* binding */ MainElements),\n/* harmony export */   \"OtherElements\": () => (/* binding */ OtherElements)\n/* harmony export */ });\nconst MainElements = (() => {\n    const createHeader = () => {\n        const newHeader = document.createElement(\"header\");\n        return newHeader;\n    }\n\n    const createMain = () => {\n        const newMain = document.createElement(\"main\");\n        return newMain;\n    }\n\n    const createSection = (className) => {\n        const newSection = document.createElement(\"section\");\n        newSection.classList.add(className);\n        return newSection;\n    }\n\n    return { createHeader, createMain, createSection }\n})();\n\nconst OtherElements = (() => {\n    const createH1 = (text) => {\n        const newH1 = document.createElement(\"h1\");\n        newH1.textContent = text;\n        return newH1;\n    }\n\n    const createH2 = (text) => {\n        const newH2 = document.createElement(\"h2\");\n        newH2.textContent = text;\n        return newH2;\n    }\n\n    const createH3 = (text) => {\n        const newH3 = document.createElement(\"h3\");\n        newH3.textContent = text;\n        return newH3;\n    }\n\n    const createDiv = (className) => {\n        const newDiv = document.createElement(\"div\");\n        newDiv.classList.add(className);\n        return newDiv;\n    }\n\n    const createImage = (src) => {\n        const newImage = document.createElement(\"img\");\n        newImage.src = src;\n        return newImage;\n    }\n\n    const createPara = (text) => {\n        const newPara = document.createElement(\"p\");\n        newPara.textContent = text;\n        return newPara;\n    }\n\n    const createSpan = (text) => {\n        const newSpan = document.createElement(\"span\");\n        newSpan.textContent = text;\n        return newSpan;\n    }\n\n    return { createH1, createH2, createH3, createDiv,\n        createImage, createPara, createSpan }\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/elements-builder.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst CreatePage = (() => {\n    (0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;