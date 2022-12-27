/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-bg-clr: rgb(12, 22, 53);\n    --img-bg-clr: rgb(68, 0, 20);\n    --font-clr: rgb(226, 175, 64);\n    --h1-font-size: 3.5rem;\n    --h2-font-size: 2rem;\n    --quote-font-size: 1.5rem;\n    --small-font-size: 1.2rem;\n    --header-margin: 2rem 0;\n    --full-width: 100vw;\n    --text-alignment: center;\n}\n\n* {\n    color: var(--font-clr);\n    font-family: \"Cormorant Garamond\", serif;\n    letter-spacing: 0.1rem;;\n}\n\nbody {\n    min-height: 100vh;\n    width: 100vw;\n    margin: 0 auto;\n    background: var(--main-bg-clr);\n    overflow-x: hidden;\n}\n\nh1,\nh2,\nheader,\nfooter,\n.alfredo,\n.remy,\n.ego,\n.menu-item > p,\n.contact-info > p {\n    text-align: var(--text-alignment);\n}\n\nh1,\nh2 {\n    margin: var(--header-margin);\n}\n\nh1 {\n    font-size: var(--h1-font-size);\n}\n\nh2 {\n    font-size: var(--h2-font-size);\n}\n\nh3 {\n    font-size: var(--quote-font-size);\n}\n\np {\n    font-size: var(--small-font-size);\n}\n\nhr {\n    border-width: 0;\n    background: var(--font-clr);\n}\n\n.header-line,\n.footer-line {\n    width: 85%;\n    height: 2px;\n}\n\n.divider {\n    width: 40%;\n    height: 1px;\n}\n\n/* Main Page */\n\nheader,\nnav,\nfooter,\n.chefs,\n.reviews {\n    width: var(--full-width);\n}\n\nheader {\n    height: 30vh;\n    margin-top: auto;\n}\n\nmain {\n    min-height: 50vh\n}\n\nnav {\n    height: 30%;\n    margin: 1% 0;\n    gap: 4rem;\n}\n\nfooter {\n    height: 15vh;\n}\n\n.footer-container {\n    height: 85%\n}\n\n.chefs,\n.reviews {\n    margin: 5% 0;\n}\n\nheader,\nnav,\n.dividers,\n.chefs-info,\n.reviews,\n.reviews-container,\n.menu-item,\n.contact-info,\n.footer-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.btn-container,\n.btn-container:hover {\n    height: 50px;\n    width: 150px;\n    box-sizing: border-box;\n}\n\n.btn-container:hover {\n    border-bottom: 2px solid var(--font-clr);\n}\n\n#home-tab,\n#menu-tab,\n#contact-tab {\n    height: 50px;\n    width: 150px;\n    background: transparent;\n    border: 0;\n    border-radius: 10px;\n    font-size: var(--small-font-size);\n    text-transform: uppercase;\n    font-weight: 600;\n}\n\n.reviews-container,\n.chefs-info {\n    gap: 10%;\n    margin: var(--header-margin);\n}\n\nheader,\n.reviews,\n.menu-item,\n.contact-info {\n    flex-direction: column;\n}\n\n.alfredo-container,\n.remy-container,\n.ego-container {\n    height: 150px;\n    width: 150px;\n    background-color: var(--img-bg-clr);\n    border-radius: 50%;\n\n    overflow: hidden;\n}\n\n.reviews-container {\n    width: 50%;\n}\n\n#ego-img {\n    height: 250px;\n    transform: translateX(-18%);\n}\n\n#ego-review {\n    font-style: italic;\n    font-size: var(--quote-font-size);\n}\n\n#alfredo-img {\n    height: 350px;\n    transform: translateX(-22%) translateY(-5%);\n}\n\n#remy-img {\n    height: 250px;\n    transform: translateX(-40%) translateY(5%);\n}\n\n/* Menu & Contact Pages */\n.starters,\n.entrees,\n.desserts,\n.contact-info {\n    height: 100%;\n    width: var(--full-width);\n    margin: 4rem 0;\n}\n\n.menu-item > p,\n.contact-info > p {\n    width: 70%;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,8BAA8B;IAC9B,4BAA4B;IAC5B,6BAA6B;IAC7B,sBAAsB;IACtB,oBAAoB;IACpB,yBAAyB;IACzB,yBAAyB;IACzB,uBAAuB;IACvB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,wCAAwC;IACxC,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;;;;;;;;;IASI,iCAAiC;AACrC;;AAEA;;IAEI,4BAA4B;AAChC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,eAAe;IACf,2BAA2B;AAC/B;;AAEA;;IAEI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA,cAAc;;AAEd;;;;;IAKI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI;AACJ;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;;;;;;IASI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;;;IAGI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,SAAS;IACT,mBAAmB;IACnB,iCAAiC;IACjC,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;;IAEI,QAAQ;IACR,4BAA4B;AAChC;;AAEA;;;;IAII,sBAAsB;AAC1B;;AAEA;;;IAGI,aAAa;IACb,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;;IAElB,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,0CAA0C;AAC9C;;AAEA,yBAAyB;AACzB;;;;IAII,YAAY;IACZ,wBAAwB;IACxB,cAAc;AAClB;;AAEA;;IAEI,UAAU;AACd","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&display=swap');\n\n:root {\n    --main-bg-clr: rgb(12, 22, 53);\n    --img-bg-clr: rgb(68, 0, 20);\n    --font-clr: rgb(226, 175, 64);\n    --h1-font-size: 3.5rem;\n    --h2-font-size: 2rem;\n    --quote-font-size: 1.5rem;\n    --small-font-size: 1.2rem;\n    --header-margin: 2rem 0;\n    --full-width: 100vw;\n    --text-alignment: center;\n}\n\n* {\n    color: var(--font-clr);\n    font-family: \"Cormorant Garamond\", serif;\n    letter-spacing: 0.1rem;;\n}\n\nbody {\n    min-height: 100vh;\n    width: 100vw;\n    margin: 0 auto;\n    background: var(--main-bg-clr);\n    overflow-x: hidden;\n}\n\nh1,\nh2,\nheader,\nfooter,\n.alfredo,\n.remy,\n.ego,\n.menu-item > p,\n.contact-info > p {\n    text-align: var(--text-alignment);\n}\n\nh1,\nh2 {\n    margin: var(--header-margin);\n}\n\nh1 {\n    font-size: var(--h1-font-size);\n}\n\nh2 {\n    font-size: var(--h2-font-size);\n}\n\nh3 {\n    font-size: var(--quote-font-size);\n}\n\np {\n    font-size: var(--small-font-size);\n}\n\nhr {\n    border-width: 0;\n    background: var(--font-clr);\n}\n\n.header-line,\n.footer-line {\n    width: 85%;\n    height: 2px;\n}\n\n.divider {\n    width: 40%;\n    height: 1px;\n}\n\n/* Main Page */\n\nheader,\nnav,\nfooter,\n.chefs,\n.reviews {\n    width: var(--full-width);\n}\n\nheader {\n    height: 30vh;\n    margin-top: auto;\n}\n\nmain {\n    min-height: 50vh\n}\n\nnav {\n    height: 30%;\n    margin: 1% 0;\n    gap: 4rem;\n}\n\nfooter {\n    height: 15vh;\n}\n\n.footer-container {\n    height: 85%\n}\n\n.chefs,\n.reviews {\n    margin: 5% 0;\n}\n\nheader,\nnav,\n.dividers,\n.chefs-info,\n.reviews,\n.reviews-container,\n.menu-item,\n.contact-info,\n.footer-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.btn-container,\n.btn-container:hover {\n    height: 50px;\n    width: 150px;\n    box-sizing: border-box;\n}\n\n.btn-container:hover {\n    border-bottom: 2px solid var(--font-clr);\n}\n\n#home-tab,\n#menu-tab,\n#contact-tab {\n    height: 50px;\n    width: 150px;\n    background: transparent;\n    border: 0;\n    border-radius: 10px;\n    font-size: var(--small-font-size);\n    text-transform: uppercase;\n    font-weight: 600;\n}\n\n.reviews-container,\n.chefs-info {\n    gap: 10%;\n    margin: var(--header-margin);\n}\n\nheader,\n.reviews,\n.menu-item,\n.contact-info {\n    flex-direction: column;\n}\n\n.alfredo-container,\n.remy-container,\n.ego-container {\n    height: 150px;\n    width: 150px;\n    background-color: var(--img-bg-clr);\n    border-radius: 50%;\n\n    overflow: hidden;\n}\n\n.reviews-container {\n    width: 50%;\n}\n\n#ego-img {\n    height: 250px;\n    transform: translateX(-18%);\n}\n\n#ego-review {\n    font-style: italic;\n    font-size: var(--quote-font-size);\n}\n\n#alfredo-img {\n    height: 350px;\n    transform: translateX(-22%) translateY(-5%);\n}\n\n#remy-img {\n    height: 250px;\n    transform: translateX(-40%) translateY(5%);\n}\n\n/* Menu & Contact Pages */\n.starters,\n.entrees,\n.desserts,\n.contact-info {\n    height: 100%;\n    width: var(--full-width);\n    margin: 4rem 0;\n}\n\n.menu-item > p,\n.contact-info > p {\n    width: 70%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/imgs/alfredo-linguini.png":
/*!***************************************!*\
  !*** ./src/imgs/alfredo-linguini.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/alfredo-linguini.3a888a199125446d8da222ecebf680fc.png");

/***/ }),

/***/ "./src/imgs/anton-ego.png":
/*!********************************!*\
  !*** ./src/imgs/anton-ego.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/anton-ego.9a0c441e07cfd678b9cb294f8d0da7d9.png");

/***/ }),

/***/ "./src/imgs/remy.png":
/*!***************************!*\
  !*** ./src/imgs/remy.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/remy.f5ec938723c6aae074af884855eb5218.png");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements-builder */ "./src/modules/elements-builder.js");


const ContactElements = (() => {
    const createContactHeader = () => {
        const header = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createHeader();
        
        const contactNavBar = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.Tabs.createTabSection();
        const headerLine = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createLine("header-line");
        const contactH1 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH1("Contact Us");

        header.appendChild(contactNavBar);
        header.appendChild(headerLine);
        header.appendChild(contactH1);
        
        return header;
    }

    const createContactMain = () => {
        const main = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createMain();
        const mainContainer = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("contact-info");
    
        const contactPara1 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH3("We look forward to serving you.");
        const contactPara2 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createPara("If you have any questions or would like to book a reservation, please reach out to us.")
        const contactPhone = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createPara("111-111-1111");
        const contactEmail = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createPara("info@gusteaus.com");

        mainContainer.appendChild(contactPara1);
        mainContainer.appendChild(contactPara2);
        mainContainer.appendChild(contactPhone);
        mainContainer.appendChild(contactEmail);
        main.append(mainContainer);
    
        return main;
    }

    return { createContactHeader, createContactMain };

})();

const ContactPage = (() => {
    const renderContact = () => {
        const content = document.querySelector("#content");
    
        const contactHeader = ContactElements.createContactHeader();
        const dividerLine = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createLine("divider");
        const contactMain = ContactElements.createContactMain();
        const contactFooter = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createFooter();
        
        content.appendChild(contactHeader);
        content.appendChild(dividerLine);
        content.appendChild(contactMain);
        content.appendChild(contactFooter);
    }

    return { renderContact };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);

/***/ }),

/***/ "./src/modules/elements-builder.js":
/*!*****************************************!*\
  !*** ./src/modules/elements-builder.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainElements": () => (/* binding */ MainElements),
/* harmony export */   "OtherElements": () => (/* binding */ OtherElements),
/* harmony export */   "Tabs": () => (/* binding */ Tabs)
/* harmony export */ });
const MainElements = (() => {
    const createHeader = () => {
        const newHeader = document.createElement("header");
        return newHeader;
    }

    const createNav = () => {
        const newNav = document.createElement("nav");
        return newNav;
    }

    const createMain = () => {
        const newMain = document.createElement("main");
        return newMain;
    }

    const createSection = (className) => {
        const newSection = document.createElement("section");
        newSection.classList.add(className);
        return newSection;
    }

    const createFooter = () => {
        const newFooter = document.createElement("footer");

        const footerLine = OtherElements.createLine("footer-line");
        const noteContainer = OtherElements.createDiv("footer-container");
        const footerNote = OtherElements.createPara("Copyright © 2022 Amy Jung");

        noteContainer.appendChild(footerNote);
        newFooter.appendChild(footerLine);
        newFooter.appendChild(noteContainer);

        return newFooter;
    }

    return { createHeader, createNav, createMain, createSection, createFooter }
})();

const OtherElements = (() => {
    const createH1 = (text) => {
        const newH1 = document.createElement("h1");
        newH1.textContent = text;
        return newH1;
    }

    const createH2 = (text) => {
        const newH2 = document.createElement("h2");
        newH2.textContent = text;
        return newH2;
    }

    const createH3 = (text) => {
        const newH3 = document.createElement("h3");
        newH3.textContent = text;
        return newH3;
    }

    const createDiv = (className) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add(className);
        return newDiv;
    }

    const createImage = (src) => {
        const newImage = document.createElement("img");
        newImage.src = src;
        return newImage;
    }

    const createPara = (text) => {
        const newPara = document.createElement("p");
        newPara.textContent = text;
        return newPara;
    }

    const createSpan = (text) => {
        const newSpan = document.createElement("span");
        newSpan.textContent = text;
        return newSpan;
    }

    const createLine = (className) => {
        const newLine = document.createElement("hr");
        newLine.classList.add(className);
        return newLine;
    }

    const createBtn = (text, id) => {
        const newBtn = document.createElement("button");
        newBtn.setAttribute("type", "button");
        newBtn.textContent = text;
        newBtn.setAttribute("id", id);
        return newBtn;
    }

    return { createH1, createH2, createH3, createDiv, createImage,
        createPara, createSpan, createLine, createBtn }
})();

const Tabs = (() => {
    const createHomeBtn = () => {
        const homeTabDiv = OtherElements.createDiv("btn-container");
        const homeTab = OtherElements.createBtn("Home", "home-tab");
        homeTabDiv.appendChild(homeTab);

        return homeTabDiv;
    }

    const createMenuBtn = () => {
        const menuTabDiv = OtherElements.createDiv("btn-container");
        const menuTab = OtherElements.createBtn("Menu", "menu-tab");
        menuTabDiv.appendChild(menuTab);

        return menuTabDiv;
    }

    const createContactBtn = () => {
        const contactTabDiv = OtherElements.createDiv("btn-container");
        const contactTab = OtherElements.createBtn("Contact Us", "contact-tab");
        contactTabDiv.appendChild(contactTab);

        return contactTabDiv;
    }

    const createTabSection = () => {
        const navSection = MainElements.createNav("tabs");

        const homeTab = createHomeBtn();
        const menuTab = createMenuBtn();
        const contactTab = createContactBtn();

        navSection.appendChild(homeTab);
        navSection.appendChild(menuTab);
        navSection.appendChild(contactTab);

        return navSection;
    }

    return { createTabSection };
})();



/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements-builder */ "./src/modules/elements-builder.js");


const MenuElements = (() => {
    const createMenuHeader = () => {
        const header = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createHeader();
    
        const menuNavBar = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.Tabs.createTabSection();
        const headerLine = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createLine("header-line");
        const menuH1 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH1("Gusteau's Menu");
        
        header.appendChild(menuNavBar);
        header.appendChild(headerLine);
        header.appendChild(menuH1);

        return header;
    }

    const createMenuDish = (dishName, description) => {
        const newDish = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("menu-item");
        
        const dishTitle = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH3(dishName);
        const dishDescription = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createPara(description);

        newDish.appendChild(dishTitle);
        newDish.appendChild(dishDescription);

        return newDish;
    }

    const createStartersSection = () => {
        const starters = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createSection("starters");

        const startersH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH2("Starters");
        const caesarSalad = createMenuDish("Caesar Salad with Salmon",
        "Pan-fried salmon served on a salad of romaine lettuce tossed with an olive oil dressing, grated cheese, and topped with croutons.");
        const pheasantConsomme = createMenuDish("Pheasant Consommé",
        "A clear soup made from pheasant meat.");

        starters.appendChild(startersH2);
        starters.appendChild(caesarSalad);
        starters.appendChild(pheasantConsomme);

        return starters;
    }

    const createEntreesSection = () => {
        const entrees = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createSection("entrees");

        const entreesH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH2("Entrées");
        const soleMeuniere = createMenuDish("Sole Meunière",
        "A sole filet that is lightly breaded in plain flour and pan-fried in butter, then lightly flavored with lemon and parsley.")
        const salmonRoulade = createMenuDish("Sous-vide Salmon Roulade", 
        "A nice salmon filet rolled with lemon and herbs into a roulade, cooked sous-vide.");
        const searedScallops = createMenuDish("Seared Scallops with Beurre Blanc",
        "Fresh scallops seared in seasoned butter and olive oil, with a dash of Beurre Blanc.");
        const filetMignon = createMenuDish("Filet Mignon", 
        "An 8 oz. filet mignon served with a side of sweet potatoes, pan-seared onions and mushrooms.")

        entrees.appendChild(entreesH2);
        entrees.appendChild(soleMeuniere);
        entrees.appendChild(salmonRoulade);
        entrees.appendChild(searedScallops);
        entrees.appendChild(filetMignon);

        return entrees;
    }

    const createDessertsSection = () => {
        const desserts = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createSection("desserts");

        const dessertsH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH2("Desserts");
        const souffle = createMenuDish("Gusteau's Souffle",
        "A baked egg-based dessert that's crispy on the outside and soft and fluffy on the inside.");
        const milleFeulle = createMenuDish("Mille-Feulle",
        "A delicate pastry composed of multiple layers of buttery pastry, filled with rich custard pastry cream and topped with glossy royal icing. ");
        const bundtCake = createMenuDish("French Bundt Cake",
        "A classic vanilla Bundt cake topped with powdered sugar. Simple but delicious!");

        desserts.appendChild(dessertsH2);
        desserts.appendChild(souffle);
        desserts.appendChild(milleFeulle);
        desserts.appendChild(bundtCake);
        
        return desserts;
    }

    const createMenuMain = () => {
        const main = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createMain();

        const startersSection = createStartersSection();
        const entreesSection = createEntreesSection();
        const dessertsSection = createDessertsSection();

        main.appendChild(startersSection);
        main.appendChild(entreesSection);
        main.appendChild(dessertsSection);
        
        return main;
    }

    return { createMenuHeader, createMenuMain };

})();


const MenuPage = (() => {
    const renderMenu = () => {
        const content = document.querySelector("#content");
    
        const menuHeader = MenuElements.createMenuHeader();
        const dividerLine = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createLine("divider");
        const menuMain = MenuElements.createMenuMain();
        const menuFooter = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createFooter();
    
        content.appendChild(menuHeader);
        content.appendChild(dividerLine);
        content.appendChild(menuMain);
        content.appendChild(menuFooter);
    }

    return { renderMenu };

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPage);

/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements-builder */ "./src/modules/elements-builder.js");
/* harmony import */ var _imgs_alfredo_linguini_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/alfredo-linguini.png */ "./src/imgs/alfredo-linguini.png");
/* harmony import */ var _imgs_remy_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/remy.png */ "./src/imgs/remy.png");
/* harmony import */ var _imgs_anton_ego_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/anton-ego.png */ "./src/imgs/anton-ego.png");





const CharacterBios = (() => {
    const createBio = (outerDivName, innerDivName, imgSrc, imgId, personName) => {
        const outerDiv = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv(outerDivName);
        const innerContainer = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv(innerDivName);
        const personImg = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createImage(imgSrc);
        personImg.setAttribute("id", imgId);
        const personNamePara = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createPara(personName);

        innerContainer.appendChild(personImg);
        outerDiv.appendChild(innerContainer);
        outerDiv.appendChild(personNamePara);
    
        return outerDiv;
    }

    return { createBio };

})();

const PageElements = (() => {
    const createHeaderSection = () => {
        const header = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createHeader();

        const navBar = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.Tabs.createTabSection();
        const headerLine = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createLine("header-line");
        const restaurantName = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH1("Gusteau's");
        
        header.appendChild(navBar);
        header.appendChild(headerLine);
        header.appendChild(restaurantName);

        return header;
    }

    const createChefSection = () => {
        const chefsSection = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createSection("chefs");
        const chefsH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH2("Meet the Chefs");
        const chefsContainer = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("chefs-info");
    
        const alfredoInfo = CharacterBios.createBio(
            "alfredo", "alfredo-container", _imgs_alfredo_linguini_png__WEBPACK_IMPORTED_MODULE_1__["default"], "alfredo-img", "Alfredo Linguini"
        );
        const remyInfo = CharacterBios.createBio(
            "remy", "remy-container", _imgs_remy_png__WEBPACK_IMPORTED_MODULE_2__["default"], "remy-img", "Remy"
        );

        chefsContainer.appendChild(alfredoInfo);
        chefsContainer.appendChild(remyInfo);
        chefsSection.appendChild(chefsH2);
        chefsSection.appendChild(chefsContainer);

        return chefsSection;
    }

    const createReviewSection = () => {
        const reviewsSection = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createSection("reviews");
        const reviewsH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH2("What the Critics Say");

        const reviewsContainer = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("reviews-container");
        const egoInfo = CharacterBios.createBio(
            "ego", "ego-container", _imgs_anton_ego_png__WEBPACK_IMPORTED_MODULE_3__["default"], "ego-img", "Anton Ego"
        );
        const egoReview = `"I experienced something new: an extraordinary meal from a singularly unexpected source. [...] It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more."`;
        const reviewSpan = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createSpan(egoReview);
        reviewSpan.setAttribute("id", "ego-review")

        reviewsSection.appendChild(reviewsH2);
        reviewsContainer.appendChild(reviewSpan);
        reviewsContainer.appendChild(egoInfo);
        reviewsSection.appendChild(reviewsContainer);

        return reviewsSection;
    }

    return { createHeaderSection, createChefSection, createReviewSection };
})();

const HomePage = (() => {
    const renderHome = () => {
        const content = document.querySelector("#content");
    
        const header = PageElements.createHeaderSection();
        const main = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createMain();
        const firstLine = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createLine("divider");
        const reviewsMain = PageElements.createReviewSection();
        const secondLine = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createLine("divider");
        const chefsMain = PageElements.createChefSection();
        const footer = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createFooter();
        
        main.appendChild(firstLine);
        main.appendChild(reviewsMain);
        main.appendChild(secondLine);
        main.appendChild(chefsMain);
        content.appendChild(header);
        content.appendChild(main);
        content.appendChild(footer);
    }

    return { renderHome };

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load */ "./src/modules/page-load.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const RenderPage = (() => {
    const content = document.querySelector("#content");

    _modules_page_load__WEBPACK_IMPORTED_MODULE_0__["default"].renderHome();
   
    const clearContent = () => {
        const content = document.querySelector("#content");
        
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    };

    const handler = (tab) => {
        switch (tab) {
            case "home-tab":
                clearContent();
                _modules_page_load__WEBPACK_IMPORTED_MODULE_0__["default"].renderHome();
                break;
            case "menu-tab":
                clearContent();
                _modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"].renderMenu();
                break;
            case "contact-tab":
                clearContent();
                _modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"].renderContact();
                break;
            default:
                break;
        }
    };

    content.addEventListener("click", function(e) {
        handler(e.target.id);
    })

})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDTDtBQUNNO0FBQ3ZCOztBQUVyQjtBQUNBOztBQUVBLElBQUkscUVBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUVBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnRUFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNFQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltZ3MvYWxmcmVkby1saW5ndWluaS5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltZ3MvYW50b24tZWdvLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1ncy9yZW15LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2VsZW1lbnRzLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDppdGFsLHdnaHRAMCw2MDA7MCw3MDA7MSw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLW1haW4tYmctY2xyOiByZ2IoMTIsIDIyLCA1Myk7XFxuICAgIC0taW1nLWJnLWNscjogcmdiKDY4LCAwLCAyMCk7XFxuICAgIC0tZm9udC1jbHI6IHJnYigyMjYsIDE3NSwgNjQpO1xcbiAgICAtLWgxLWZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICAtLWgyLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1xdW90ZS1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1zbWFsbC1mb250LXNpemU6IDEuMnJlbTtcXG4gICAgLS1oZWFkZXItbWFyZ2luOiAycmVtIDA7XFxuICAgIC0tZnVsbC13aWR0aDogMTAwdnc7XFxuICAgIC0tdGV4dC1hbGlnbm1lbnQ6IGNlbnRlcjtcXG59XFxuXFxuKiB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50IEdhcmFtb25kXFxcIiwgc2VyaWY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmctY2xyKTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oZWFkZXIsXFxuZm9vdGVyLFxcbi5hbGZyZWRvLFxcbi5yZW15LFxcbi5lZ28sXFxuLm1lbnUtaXRlbSA+IHAsXFxuLmNvbnRhY3QtaW5mbyA+IHAge1xcbiAgICB0ZXh0LWFsaWduOiB2YXIoLS10ZXh0LWFsaWdubWVudCk7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gICAgbWFyZ2luOiB2YXIoLS1oZWFkZXItbWFyZ2luKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcXVvdGUtZm9udC1zaXplKTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcXG59XFxuXFxuaHIge1xcbiAgICBib3JkZXItd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvbnQtY2xyKTtcXG59XFxuXFxuLmhlYWRlci1saW5lLFxcbi5mb290ZXItbGluZSB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogMnB4O1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4vKiBNYWluIFBhZ2UgKi9cXG5cXG5oZWFkZXIsXFxubmF2LFxcbmZvb3RlcixcXG4uY2hlZnMsXFxuLnJldmlld3Mge1xcbiAgICB3aWR0aDogdmFyKC0tZnVsbC13aWR0aCk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxubWFpbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDUwdmhcXG59XFxuXFxubmF2IHtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIG1hcmdpbjogMSUgMDtcXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA4NSVcXG59XFxuXFxuLmNoZWZzLFxcbi5yZXZpZXdzIHtcXG4gICAgbWFyZ2luOiA1JSAwO1xcbn1cXG5cXG5oZWFkZXIsXFxubmF2LFxcbi5kaXZpZGVycyxcXG4uY2hlZnMtaW5mbyxcXG4ucmV2aWV3cyxcXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLm1lbnUtaXRlbSxcXG4uY29udGFjdC1pbmZvLFxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idG4tY29udGFpbmVyLFxcbi5idG4tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5idG4tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY2xyKTtcXG59XFxuXFxuI2hvbWUtdGFiLFxcbiNtZW51LXRhYixcXG4jY29udGFjdC10YWIge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250LXNpemUpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLmNoZWZzLWluZm8ge1xcbiAgICBnYXA6IDEwJTtcXG4gICAgbWFyZ2luOiB2YXIoLS1oZWFkZXItbWFyZ2luKTtcXG59XFxuXFxuaGVhZGVyLFxcbi5yZXZpZXdzLFxcbi5tZW51LWl0ZW0sXFxuLmNvbnRhY3QtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGZyZWRvLWNvbnRhaW5lcixcXG4ucmVteS1jb250YWluZXIsXFxuLmVnby1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltZy1iZy1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbiNlZ28taW1nIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xOCUpO1xcbn1cXG5cXG4jZWdvLXJldmlldyB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1xdW90ZS1mb250LXNpemUpO1xcbn1cXG5cXG4jYWxmcmVkby1pbWcge1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyJSkgdHJhbnNsYXRlWSgtNSUpO1xcbn1cXG5cXG4jcmVteS1pbWcge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSkgdHJhbnNsYXRlWSg1JSk7XFxufVxcblxcbi8qIE1lbnUgJiBDb250YWN0IFBhZ2VzICovXFxuLnN0YXJ0ZXJzLFxcbi5lbnRyZWVzLFxcbi5kZXNzZXJ0cyxcXG4uY29udGFjdC1pbmZvIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogdmFyKC0tZnVsbC13aWR0aCk7XFxuICAgIG1hcmdpbjogNHJlbSAwO1xcbn1cXG5cXG4ubWVudS1pdGVtID4gcCxcXG4uY29udGFjdC1pbmZvID4gcCB7XFxuICAgIHdpZHRoOiA3MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYztJQUNkLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7Ozs7OztJQVNJLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBLGNBQWM7O0FBRWQ7Ozs7O0lBS0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7Ozs7Ozs7OztJQVNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFFBQVE7SUFDUiw0QkFBNEI7QUFDaEM7O0FBRUE7Ozs7SUFJSSxzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGtCQUFrQjs7SUFFbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztBQUM5Qzs7QUFFQSx5QkFBeUI7QUFDekI7Ozs7SUFJSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDppdGFsLHdnaHRAMCw2MDA7MCw3MDA7MSw0MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tYmctY2xyOiByZ2IoMTIsIDIyLCA1Myk7XFxuICAgIC0taW1nLWJnLWNscjogcmdiKDY4LCAwLCAyMCk7XFxuICAgIC0tZm9udC1jbHI6IHJnYigyMjYsIDE3NSwgNjQpO1xcbiAgICAtLWgxLWZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICAtLWgyLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1xdW90ZS1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1zbWFsbC1mb250LXNpemU6IDEuMnJlbTtcXG4gICAgLS1oZWFkZXItbWFyZ2luOiAycmVtIDA7XFxuICAgIC0tZnVsbC13aWR0aDogMTAwdnc7XFxuICAgIC0tdGV4dC1hbGlnbm1lbnQ6IGNlbnRlcjtcXG59XFxuXFxuKiB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50IEdhcmFtb25kXFxcIiwgc2VyaWY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmctY2xyKTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oZWFkZXIsXFxuZm9vdGVyLFxcbi5hbGZyZWRvLFxcbi5yZW15LFxcbi5lZ28sXFxuLm1lbnUtaXRlbSA+IHAsXFxuLmNvbnRhY3QtaW5mbyA+IHAge1xcbiAgICB0ZXh0LWFsaWduOiB2YXIoLS10ZXh0LWFsaWdubWVudCk7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gICAgbWFyZ2luOiB2YXIoLS1oZWFkZXItbWFyZ2luKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcXVvdGUtZm9udC1zaXplKTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcXG59XFxuXFxuaHIge1xcbiAgICBib3JkZXItd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvbnQtY2xyKTtcXG59XFxuXFxuLmhlYWRlci1saW5lLFxcbi5mb290ZXItbGluZSB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogMnB4O1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4vKiBNYWluIFBhZ2UgKi9cXG5cXG5oZWFkZXIsXFxubmF2LFxcbmZvb3RlcixcXG4uY2hlZnMsXFxuLnJldmlld3Mge1xcbiAgICB3aWR0aDogdmFyKC0tZnVsbC13aWR0aCk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxubWFpbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDUwdmhcXG59XFxuXFxubmF2IHtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIG1hcmdpbjogMSUgMDtcXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA4NSVcXG59XFxuXFxuLmNoZWZzLFxcbi5yZXZpZXdzIHtcXG4gICAgbWFyZ2luOiA1JSAwO1xcbn1cXG5cXG5oZWFkZXIsXFxubmF2LFxcbi5kaXZpZGVycyxcXG4uY2hlZnMtaW5mbyxcXG4ucmV2aWV3cyxcXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLm1lbnUtaXRlbSxcXG4uY29udGFjdC1pbmZvLFxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idG4tY29udGFpbmVyLFxcbi5idG4tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5idG4tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY2xyKTtcXG59XFxuXFxuI2hvbWUtdGFiLFxcbiNtZW51LXRhYixcXG4jY29udGFjdC10YWIge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250LXNpemUpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLmNoZWZzLWluZm8ge1xcbiAgICBnYXA6IDEwJTtcXG4gICAgbWFyZ2luOiB2YXIoLS1oZWFkZXItbWFyZ2luKTtcXG59XFxuXFxuaGVhZGVyLFxcbi5yZXZpZXdzLFxcbi5tZW51LWl0ZW0sXFxuLmNvbnRhY3QtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGZyZWRvLWNvbnRhaW5lcixcXG4ucmVteS1jb250YWluZXIsXFxuLmVnby1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltZy1iZy1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbiNlZ28taW1nIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xOCUpO1xcbn1cXG5cXG4jZWdvLXJldmlldyB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1xdW90ZS1mb250LXNpemUpO1xcbn1cXG5cXG4jYWxmcmVkby1pbWcge1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyJSkgdHJhbnNsYXRlWSgtNSUpO1xcbn1cXG5cXG4jcmVteS1pbWcge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSkgdHJhbnNsYXRlWSg1JSk7XFxufVxcblxcbi8qIE1lbnUgJiBDb250YWN0IFBhZ2VzICovXFxuLnN0YXJ0ZXJzLFxcbi5lbnRyZWVzLFxcbi5kZXNzZXJ0cyxcXG4uY29udGFjdC1pbmZvIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogdmFyKC0tZnVsbC13aWR0aCk7XFxuICAgIG1hcmdpbjogNHJlbSAwO1xcbn1cXG5cXG4ubWVudS1pdGVtID4gcCxcXG4uY29udGFjdC1pbmZvID4gcCB7XFxuICAgIHdpZHRoOiA3MCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZ3MvYWxmcmVkby1saW5ndWluaS4zYTg4OGExOTkxMjU0NDZkOGRhMjIyZWNlYmY2ODBmYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy9hbnRvbi1lZ28uOWEwYzQ0MWUwN2NmZDY3OGI5Y2IyOTRmOGQwZGE3ZDkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZ3MvcmVteS5mNWVjOTM4NzIzYzZhYWUwNzRhZjg4NDg1NWViNTIxOC5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgTWFpbkVsZW1lbnRzLCBPdGhlckVsZW1lbnRzLCBUYWJzIH0gZnJvbSBcIi4vZWxlbWVudHMtYnVpbGRlclwiO1xuXG5jb25zdCBDb250YWN0RWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3RIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IE1haW5FbGVtZW50cy5jcmVhdGVIZWFkZXIoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRhY3ROYXZCYXIgPSBUYWJzLmNyZWF0ZVRhYlNlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgaGVhZGVyTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImhlYWRlci1saW5lXCIpO1xuICAgICAgICBjb25zdCBjb250YWN0SDEgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgxKFwiQ29udGFjdCBVc1wiKTtcblxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdE5hdkJhcik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMaW5lKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RIMSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3RNYWluID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gTWFpbkVsZW1lbnRzLmNyZWF0ZU1haW4oKTtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiY29udGFjdC1pbmZvXCIpO1xuICAgIFxuICAgICAgICBjb25zdCBjb250YWN0UGFyYTEgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgzKFwiV2UgbG9vayBmb3J3YXJkIHRvIHNlcnZpbmcgeW91LlwiKTtcbiAgICAgICAgY29uc3QgY29udGFjdFBhcmEyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVQYXJhKFwiSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciB3b3VsZCBsaWtlIHRvIGJvb2sgYSByZXNlcnZhdGlvbiwgcGxlYXNlIHJlYWNoIG91dCB0byB1cy5cIilcbiAgICAgICAgY29uc3QgY29udGFjdFBob25lID0gT3RoZXJFbGVtZW50cy5jcmVhdGVQYXJhKFwiMTExLTExMS0xMTExXCIpO1xuICAgICAgICBjb25zdCBjb250YWN0RW1haWwgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZVBhcmEoXCJpbmZvQGd1c3RlYXVzLmNvbVwiKTtcblxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RQYXJhMSk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBhcmEyKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0UGhvbmUpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XG4gICAgICAgIG1haW4uYXBwZW5kKG1haW5Db250YWluZXIpO1xuICAgIFxuICAgICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVDb250YWN0SGVhZGVyLCBjcmVhdGVDb250YWN0TWFpbiB9O1xuXG59KSgpO1xuXG5jb25zdCBDb250YWN0UGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyQ29udGFjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgY29udGFjdEhlYWRlciA9IENvbnRhY3RFbGVtZW50cy5jcmVhdGVDb250YWN0SGVhZGVyKCk7XG4gICAgICAgIGNvbnN0IGRpdmlkZXJMaW5lID0gT3RoZXJFbGVtZW50cy5jcmVhdGVMaW5lKFwiZGl2aWRlclwiKTtcbiAgICAgICAgY29uc3QgY29udGFjdE1haW4gPSBDb250YWN0RWxlbWVudHMuY3JlYXRlQ29udGFjdE1haW4oKTtcbiAgICAgICAgY29uc3QgY29udGFjdEZvb3RlciA9IE1haW5FbGVtZW50cy5jcmVhdGVGb290ZXIoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2aWRlckxpbmUpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RNYWluKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Rm9vdGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXJDb250YWN0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZTsiLCJjb25zdCBNYWluRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICAgICAgcmV0dXJuIG5ld0hlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld05hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgICAgIHJldHVybiBuZXdOYXY7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgICAgICByZXR1cm4gbmV3TWFpbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTZWN0aW9uID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIG5ld1NlY3Rpb24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gbmV3U2VjdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImZvb3Rlci1saW5lXCIpO1xuICAgICAgICBjb25zdCBub3RlQ29udGFpbmVyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJmb290ZXItY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBmb290ZXJOb3RlID0gT3RoZXJFbGVtZW50cy5jcmVhdGVQYXJhKFwiQ29weXJpZ2h0IMKpIDIwMjIgQW15IEp1bmdcIik7XG5cbiAgICAgICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJOb3RlKTtcbiAgICAgICAgbmV3Rm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmUpO1xuICAgICAgICBuZXdGb290ZXIuYXBwZW5kQ2hpbGQobm90ZUNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIG5ld0Zvb3RlcjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVIZWFkZXIsIGNyZWF0ZU5hdiwgY3JlYXRlTWFpbiwgY3JlYXRlU2VjdGlvbiwgY3JlYXRlRm9vdGVyIH1cbn0pKCk7XG5cbmNvbnN0IE90aGVyRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUgxID0gKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIG5ld0gxLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG5ld0gxO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUgyID0gKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIG5ld0gyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG5ld0gyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUgzID0gKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5ld0gzLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG5ld0gzO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZURpdiA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ld0RpdjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJbWFnZSA9IChzcmMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBuZXdJbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIHJldHVybiBuZXdJbWFnZTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQYXJhID0gKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuZXdQYXJhLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG5ld1BhcmE7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU3BhbiA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbmV3U3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdTcGFuO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUxpbmUgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gICAgICAgIG5ld0xpbmUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gbmV3TGluZTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVCdG4gPSAodGV4dCwgaWQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmV3QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgIG5ld0J0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIG5ld0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIHJldHVybiBuZXdCdG47XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlSDEsIGNyZWF0ZUgyLCBjcmVhdGVIMywgY3JlYXRlRGl2LCBjcmVhdGVJbWFnZSxcbiAgICAgICAgY3JlYXRlUGFyYSwgY3JlYXRlU3BhbiwgY3JlYXRlTGluZSwgY3JlYXRlQnRuIH1cbn0pKCk7XG5cbmNvbnN0IFRhYnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUhvbWVCdG4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvbWVUYWJEaXYgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcImJ0bi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGhvbWVUYWIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUJ0bihcIkhvbWVcIiwgXCJob21lLXRhYlwiKTtcbiAgICAgICAgaG9tZVRhYkRpdi5hcHBlbmRDaGlsZChob21lVGFiKTtcblxuICAgICAgICByZXR1cm4gaG9tZVRhYkRpdjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNZW51QnRuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51VGFiRGl2ID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJidG4tY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBtZW51VGFiID0gT3RoZXJFbGVtZW50cy5jcmVhdGVCdG4oXCJNZW51XCIsIFwibWVudS10YWJcIik7XG4gICAgICAgIG1lbnVUYWJEaXYuYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cbiAgICAgICAgcmV0dXJuIG1lbnVUYWJEaXY7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQ29udGFjdEJ0biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFjdFRhYkRpdiA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiYnRuLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgY29udGFjdFRhYiA9IE90aGVyRWxlbWVudHMuY3JlYXRlQnRuKFwiQ29udGFjdCBVc1wiLCBcImNvbnRhY3QtdGFiXCIpO1xuICAgICAgICBjb250YWN0VGFiRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG4gICAgICAgIHJldHVybiBjb250YWN0VGFiRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRhYlNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdlNlY3Rpb24gPSBNYWluRWxlbWVudHMuY3JlYXRlTmF2KFwidGFic1wiKTtcblxuICAgICAgICBjb25zdCBob21lVGFiID0gY3JlYXRlSG9tZUJ0bigpO1xuICAgICAgICBjb25zdCBtZW51VGFiID0gY3JlYXRlTWVudUJ0bigpO1xuICAgICAgICBjb25zdCBjb250YWN0VGFiID0gY3JlYXRlQ29udGFjdEJ0bigpO1xuXG4gICAgICAgIG5hdlNlY3Rpb24uYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gICAgICAgIG5hdlNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gICAgICAgIG5hdlNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cbiAgICAgICAgcmV0dXJuIG5hdlNlY3Rpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlVGFiU2VjdGlvbiB9O1xufSkoKTtcblxuZXhwb3J0IHsgTWFpbkVsZW1lbnRzLCBPdGhlckVsZW1lbnRzLCBUYWJzIH07IiwiaW1wb3J0IHsgTWFpbkVsZW1lbnRzLCBPdGhlckVsZW1lbnRzLCBUYWJzIH0gZnJvbSBcIi4vZWxlbWVudHMtYnVpbGRlclwiO1xuXG5jb25zdCBNZW51RWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZU1lbnVIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IE1haW5FbGVtZW50cy5jcmVhdGVIZWFkZXIoKTtcbiAgICBcbiAgICAgICAgY29uc3QgbWVudU5hdkJhciA9IFRhYnMuY3JlYXRlVGFiU2VjdGlvbigpO1xuICAgICAgICBjb25zdCBoZWFkZXJMaW5lID0gT3RoZXJFbGVtZW50cy5jcmVhdGVMaW5lKFwiaGVhZGVyLWxpbmVcIik7XG4gICAgICAgIGNvbnN0IG1lbnVIMSA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDEoXCJHdXN0ZWF1J3MgTWVudVwiKTtcbiAgICAgICAgXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51TmF2QmFyKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxpbmUpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUgxKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU1lbnVEaXNoID0gKGRpc2hOYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdEaXNoID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJtZW51LWl0ZW1cIik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXNoVGl0bGUgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgzKGRpc2hOYW1lKTtcbiAgICAgICAgY29uc3QgZGlzaERlc2NyaXB0aW9uID0gT3RoZXJFbGVtZW50cy5jcmVhdGVQYXJhKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBuZXdEaXNoLmFwcGVuZENoaWxkKGRpc2hUaXRsZSk7XG4gICAgICAgIG5ld0Rpc2guYXBwZW5kQ2hpbGQoZGlzaERlc2NyaXB0aW9uKTtcblxuICAgICAgICByZXR1cm4gbmV3RGlzaDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTdGFydGVyc1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ZXJzID0gTWFpbkVsZW1lbnRzLmNyZWF0ZVNlY3Rpb24oXCJzdGFydGVyc1wiKTtcblxuICAgICAgICBjb25zdCBzdGFydGVyc0gyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMihcIlN0YXJ0ZXJzXCIpO1xuICAgICAgICBjb25zdCBjYWVzYXJTYWxhZCA9IGNyZWF0ZU1lbnVEaXNoKFwiQ2Flc2FyIFNhbGFkIHdpdGggU2FsbW9uXCIsXG4gICAgICAgIFwiUGFuLWZyaWVkIHNhbG1vbiBzZXJ2ZWQgb24gYSBzYWxhZCBvZiByb21haW5lIGxldHR1Y2UgdG9zc2VkIHdpdGggYW4gb2xpdmUgb2lsIGRyZXNzaW5nLCBncmF0ZWQgY2hlZXNlLCBhbmQgdG9wcGVkIHdpdGggY3JvdXRvbnMuXCIpO1xuICAgICAgICBjb25zdCBwaGVhc2FudENvbnNvbW1lID0gY3JlYXRlTWVudURpc2goXCJQaGVhc2FudCBDb25zb21tw6lcIixcbiAgICAgICAgXCJBIGNsZWFyIHNvdXAgbWFkZSBmcm9tIHBoZWFzYW50IG1lYXQuXCIpO1xuXG4gICAgICAgIHN0YXJ0ZXJzLmFwcGVuZENoaWxkKHN0YXJ0ZXJzSDIpO1xuICAgICAgICBzdGFydGVycy5hcHBlbmRDaGlsZChjYWVzYXJTYWxhZCk7XG4gICAgICAgIHN0YXJ0ZXJzLmFwcGVuZENoaWxkKHBoZWFzYW50Q29uc29tbWUpO1xuXG4gICAgICAgIHJldHVybiBzdGFydGVycztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVFbnRyZWVzU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZW50cmVlcyA9IE1haW5FbGVtZW50cy5jcmVhdGVTZWN0aW9uKFwiZW50cmVlc1wiKTtcblxuICAgICAgICBjb25zdCBlbnRyZWVzSDIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgyKFwiRW50csOpZXNcIik7XG4gICAgICAgIGNvbnN0IHNvbGVNZXVuaWVyZSA9IGNyZWF0ZU1lbnVEaXNoKFwiU29sZSBNZXVuacOocmVcIixcbiAgICAgICAgXCJBIHNvbGUgZmlsZXQgdGhhdCBpcyBsaWdodGx5IGJyZWFkZWQgaW4gcGxhaW4gZmxvdXIgYW5kIHBhbi1mcmllZCBpbiBidXR0ZXIsIHRoZW4gbGlnaHRseSBmbGF2b3JlZCB3aXRoIGxlbW9uIGFuZCBwYXJzbGV5LlwiKVxuICAgICAgICBjb25zdCBzYWxtb25Sb3VsYWRlID0gY3JlYXRlTWVudURpc2goXCJTb3VzLXZpZGUgU2FsbW9uIFJvdWxhZGVcIiwgXG4gICAgICAgIFwiQSBuaWNlIHNhbG1vbiBmaWxldCByb2xsZWQgd2l0aCBsZW1vbiBhbmQgaGVyYnMgaW50byBhIHJvdWxhZGUsIGNvb2tlZCBzb3VzLXZpZGUuXCIpO1xuICAgICAgICBjb25zdCBzZWFyZWRTY2FsbG9wcyA9IGNyZWF0ZU1lbnVEaXNoKFwiU2VhcmVkIFNjYWxsb3BzIHdpdGggQmV1cnJlIEJsYW5jXCIsXG4gICAgICAgIFwiRnJlc2ggc2NhbGxvcHMgc2VhcmVkIGluIHNlYXNvbmVkIGJ1dHRlciBhbmQgb2xpdmUgb2lsLCB3aXRoIGEgZGFzaCBvZiBCZXVycmUgQmxhbmMuXCIpO1xuICAgICAgICBjb25zdCBmaWxldE1pZ25vbiA9IGNyZWF0ZU1lbnVEaXNoKFwiRmlsZXQgTWlnbm9uXCIsIFxuICAgICAgICBcIkFuIDggb3ouIGZpbGV0IG1pZ25vbiBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygc3dlZXQgcG90YXRvZXMsIHBhbi1zZWFyZWQgb25pb25zIGFuZCBtdXNocm9vbXMuXCIpXG5cbiAgICAgICAgZW50cmVlcy5hcHBlbmRDaGlsZChlbnRyZWVzSDIpO1xuICAgICAgICBlbnRyZWVzLmFwcGVuZENoaWxkKHNvbGVNZXVuaWVyZSk7XG4gICAgICAgIGVudHJlZXMuYXBwZW5kQ2hpbGQoc2FsbW9uUm91bGFkZSk7XG4gICAgICAgIGVudHJlZXMuYXBwZW5kQ2hpbGQoc2VhcmVkU2NhbGxvcHMpO1xuICAgICAgICBlbnRyZWVzLmFwcGVuZENoaWxkKGZpbGV0TWlnbm9uKTtcblxuICAgICAgICByZXR1cm4gZW50cmVlcztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVEZXNzZXJ0c1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc3NlcnRzID0gTWFpbkVsZW1lbnRzLmNyZWF0ZVNlY3Rpb24oXCJkZXNzZXJ0c1wiKTtcblxuICAgICAgICBjb25zdCBkZXNzZXJ0c0gyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMihcIkRlc3NlcnRzXCIpO1xuICAgICAgICBjb25zdCBzb3VmZmxlID0gY3JlYXRlTWVudURpc2goXCJHdXN0ZWF1J3MgU291ZmZsZVwiLFxuICAgICAgICBcIkEgYmFrZWQgZWdnLWJhc2VkIGRlc3NlcnQgdGhhdCdzIGNyaXNweSBvbiB0aGUgb3V0c2lkZSBhbmQgc29mdCBhbmQgZmx1ZmZ5IG9uIHRoZSBpbnNpZGUuXCIpO1xuICAgICAgICBjb25zdCBtaWxsZUZldWxsZSA9IGNyZWF0ZU1lbnVEaXNoKFwiTWlsbGUtRmV1bGxlXCIsXG4gICAgICAgIFwiQSBkZWxpY2F0ZSBwYXN0cnkgY29tcG9zZWQgb2YgbXVsdGlwbGUgbGF5ZXJzIG9mIGJ1dHRlcnkgcGFzdHJ5LCBmaWxsZWQgd2l0aCByaWNoIGN1c3RhcmQgcGFzdHJ5IGNyZWFtIGFuZCB0b3BwZWQgd2l0aCBnbG9zc3kgcm95YWwgaWNpbmcuIFwiKTtcbiAgICAgICAgY29uc3QgYnVuZHRDYWtlID0gY3JlYXRlTWVudURpc2goXCJGcmVuY2ggQnVuZHQgQ2FrZVwiLFxuICAgICAgICBcIkEgY2xhc3NpYyB2YW5pbGxhIEJ1bmR0IGNha2UgdG9wcGVkIHdpdGggcG93ZGVyZWQgc3VnYXIuIFNpbXBsZSBidXQgZGVsaWNpb3VzIVwiKTtcblxuICAgICAgICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChkZXNzZXJ0c0gyKTtcbiAgICAgICAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoc291ZmZsZSk7XG4gICAgICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKG1pbGxlRmV1bGxlKTtcbiAgICAgICAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoYnVuZHRDYWtlKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkZXNzZXJ0cztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNZW51TWFpbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IE1haW5FbGVtZW50cy5jcmVhdGVNYWluKCk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRlcnNTZWN0aW9uID0gY3JlYXRlU3RhcnRlcnNTZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGVudHJlZXNTZWN0aW9uID0gY3JlYXRlRW50cmVlc1NlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgZGVzc2VydHNTZWN0aW9uID0gY3JlYXRlRGVzc2VydHNTZWN0aW9uKCk7XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzdGFydGVyc1NlY3Rpb24pO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGVudHJlZXNTZWN0aW9uKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkZXNzZXJ0c1NlY3Rpb24pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG1haW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlTWVudUhlYWRlciwgY3JlYXRlTWVudU1haW4gfTtcblxufSkoKTtcblxuXG5jb25zdCBNZW51UGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyTWVudSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgbWVudUhlYWRlciA9IE1lbnVFbGVtZW50cy5jcmVhdGVNZW51SGVhZGVyKCk7XG4gICAgICAgIGNvbnN0IGRpdmlkZXJMaW5lID0gT3RoZXJFbGVtZW50cy5jcmVhdGVMaW5lKFwiZGl2aWRlclwiKTtcbiAgICAgICAgY29uc3QgbWVudU1haW4gPSBNZW51RWxlbWVudHMuY3JlYXRlTWVudU1haW4oKTtcbiAgICAgICAgY29uc3QgbWVudUZvb3RlciA9IE1haW5FbGVtZW50cy5jcmVhdGVGb290ZXIoKTtcbiAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXZpZGVyTGluZSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudU1haW4pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVGb290ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlck1lbnUgfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudVBhZ2U7IiwiaW1wb3J0IHsgTWFpbkVsZW1lbnRzLCBPdGhlckVsZW1lbnRzLCBUYWJzIH0gZnJvbSBcIi4vZWxlbWVudHMtYnVpbGRlclwiO1xuaW1wb3J0IEFsZnJlZG8gZnJvbSBcIi4uL2ltZ3MvYWxmcmVkby1saW5ndWluaS5wbmdcIjtcbmltcG9ydCBSZW15IGZyb20gXCIuLi9pbWdzL3JlbXkucG5nXCI7XG5pbXBvcnQgRWdvIGZyb20gXCIuLi9pbWdzL2FudG9uLWVnby5wbmdcIjtcblxuY29uc3QgQ2hhcmFjdGVyQmlvcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlQmlvID0gKG91dGVyRGl2TmFtZSwgaW5uZXJEaXZOYW1lLCBpbWdTcmMsIGltZ0lkLCBwZXJzb25OYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG91dGVyRGl2ID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYob3V0ZXJEaXZOYW1lKTtcbiAgICAgICAgY29uc3QgaW5uZXJDb250YWluZXIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihpbm5lckRpdk5hbWUpO1xuICAgICAgICBjb25zdCBwZXJzb25JbWcgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUltYWdlKGltZ1NyYyk7XG4gICAgICAgIHBlcnNvbkltZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbWdJZCk7XG4gICAgICAgIGNvbnN0IHBlcnNvbk5hbWVQYXJhID0gT3RoZXJFbGVtZW50cy5jcmVhdGVQYXJhKHBlcnNvbk5hbWUpO1xuXG4gICAgICAgIGlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBlcnNvbkltZyk7XG4gICAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlubmVyQ29udGFpbmVyKTtcbiAgICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQocGVyc29uTmFtZVBhcmEpO1xuICAgIFxuICAgICAgICByZXR1cm4gb3V0ZXJEaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlQmlvIH07XG5cbn0pKCk7XG5cbmNvbnN0IFBhZ2VFbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlSGVhZGVyU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gTWFpbkVsZW1lbnRzLmNyZWF0ZUhlYWRlcigpO1xuXG4gICAgICAgIGNvbnN0IG5hdkJhciA9IFRhYnMuY3JlYXRlVGFiU2VjdGlvbigpO1xuICAgICAgICBjb25zdCBoZWFkZXJMaW5lID0gT3RoZXJFbGVtZW50cy5jcmVhdGVMaW5lKFwiaGVhZGVyLWxpbmVcIik7XG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMShcIkd1c3RlYXUnc1wiKTtcbiAgICAgICAgXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGluZSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVDaGVmU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlZnNTZWN0aW9uID0gTWFpbkVsZW1lbnRzLmNyZWF0ZVNlY3Rpb24oXCJjaGVmc1wiKTtcbiAgICAgICAgY29uc3QgY2hlZnNIMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDIoXCJNZWV0IHRoZSBDaGVmc1wiKTtcbiAgICAgICAgY29uc3QgY2hlZnNDb250YWluZXIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcImNoZWZzLWluZm9cIik7XG4gICAgXG4gICAgICAgIGNvbnN0IGFsZnJlZG9JbmZvID0gQ2hhcmFjdGVyQmlvcy5jcmVhdGVCaW8oXG4gICAgICAgICAgICBcImFsZnJlZG9cIiwgXCJhbGZyZWRvLWNvbnRhaW5lclwiLCBBbGZyZWRvLCBcImFsZnJlZG8taW1nXCIsIFwiQWxmcmVkbyBMaW5ndWluaVwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlbXlJbmZvID0gQ2hhcmFjdGVyQmlvcy5jcmVhdGVCaW8oXG4gICAgICAgICAgICBcInJlbXlcIiwgXCJyZW15LWNvbnRhaW5lclwiLCBSZW15LCBcInJlbXktaW1nXCIsIFwiUmVteVwiXG4gICAgICAgICk7XG5cbiAgICAgICAgY2hlZnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxmcmVkb0luZm8pO1xuICAgICAgICBjaGVmc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW15SW5mbyk7XG4gICAgICAgIGNoZWZzU2VjdGlvbi5hcHBlbmRDaGlsZChjaGVmc0gyKTtcbiAgICAgICAgY2hlZnNTZWN0aW9uLmFwcGVuZENoaWxkKGNoZWZzQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gY2hlZnNTZWN0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVJldmlld1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldmlld3NTZWN0aW9uID0gTWFpbkVsZW1lbnRzLmNyZWF0ZVNlY3Rpb24oXCJyZXZpZXdzXCIpO1xuICAgICAgICBjb25zdCByZXZpZXdzSDIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgyKFwiV2hhdCB0aGUgQ3JpdGljcyBTYXlcIik7XG5cbiAgICAgICAgY29uc3QgcmV2aWV3c0NvbnRhaW5lciA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwicmV2aWV3cy1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGVnb0luZm8gPSBDaGFyYWN0ZXJCaW9zLmNyZWF0ZUJpbyhcbiAgICAgICAgICAgIFwiZWdvXCIsIFwiZWdvLWNvbnRhaW5lclwiLCBFZ28sIFwiZWdvLWltZ1wiLCBcIkFudG9uIEVnb1wiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGVnb1JldmlldyA9IGBcIkkgZXhwZXJpZW5jZWQgc29tZXRoaW5nIG5ldzogYW4gZXh0cmFvcmRpbmFyeSBtZWFsIGZyb20gYSBzaW5ndWxhcmx5IHVuZXhwZWN0ZWQgc291cmNlLiBbLi4uXSBJdCBpcyBkaWZmaWN1bHQgdG8gaW1hZ2luZSBtb3JlIGh1bWJsZSBvcmlnaW5zIHRoYW4gdGhvc2Ugb2YgdGhlIGdlbml1cyBub3cgY29va2luZyBhdCBHdXN0ZWF1J3Mgd2hvIGlzLCBpbiB0aGlzIGNyaXRpYydzIG9waW5pb24sIG5vdGhpbmcgbGVzcyB0aGFuIHRoZSBmaW5lc3QgY2hlZiBpbiBGcmFuY2UuIEkgd2lsbCBiZSByZXR1cm5pbmcgdG8gR3VzdGVhdSdzIHNvb24sIGh1bmdyeSBmb3IgbW9yZS5cImA7XG4gICAgICAgIGNvbnN0IHJldmlld1NwYW4gPSBPdGhlckVsZW1lbnRzLmNyZWF0ZVNwYW4oZWdvUmV2aWV3KTtcbiAgICAgICAgcmV2aWV3U3Bhbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVnby1yZXZpZXdcIilcblxuICAgICAgICByZXZpZXdzU2VjdGlvbi5hcHBlbmRDaGlsZChyZXZpZXdzSDIpO1xuICAgICAgICByZXZpZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld1NwYW4pO1xuICAgICAgICByZXZpZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVnb0luZm8pO1xuICAgICAgICByZXZpZXdzU2VjdGlvbi5hcHBlbmRDaGlsZChyZXZpZXdzQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gcmV2aWV3c1NlY3Rpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlSGVhZGVyU2VjdGlvbiwgY3JlYXRlQ2hlZlNlY3Rpb24sIGNyZWF0ZVJldmlld1NlY3Rpb24gfTtcbn0pKCk7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIFxuICAgICAgICBjb25zdCBoZWFkZXIgPSBQYWdlRWxlbWVudHMuY3JlYXRlSGVhZGVyU2VjdGlvbigpO1xuICAgICAgICBjb25zdCBtYWluID0gTWFpbkVsZW1lbnRzLmNyZWF0ZU1haW4oKTtcbiAgICAgICAgY29uc3QgZmlyc3RMaW5lID0gT3RoZXJFbGVtZW50cy5jcmVhdGVMaW5lKFwiZGl2aWRlclwiKTtcbiAgICAgICAgY29uc3QgcmV2aWV3c01haW4gPSBQYWdlRWxlbWVudHMuY3JlYXRlUmV2aWV3U2VjdGlvbigpO1xuICAgICAgICBjb25zdCBzZWNvbmRMaW5lID0gT3RoZXJFbGVtZW50cy5jcmVhdGVMaW5lKFwiZGl2aWRlclwiKTtcbiAgICAgICAgY29uc3QgY2hlZnNNYWluID0gUGFnZUVsZW1lbnRzLmNyZWF0ZUNoZWZTZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IE1haW5FbGVtZW50cy5jcmVhdGVGb290ZXIoKTtcbiAgICAgICAgXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZmlyc3RMaW5lKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChyZXZpZXdzTWFpbik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2Vjb25kTGluZSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY2hlZnNNYWluKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVuZGVySG9tZSB9O1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL21vZHVsZXMvcGFnZS1sb2FkXCI7XG5pbXBvcnQgTWVudVBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBSZW5kZXJQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgSG9tZVBhZ2UucmVuZGVySG9tZSgpO1xuICAgXG4gICAgY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlciA9ICh0YWIpID0+IHtcbiAgICAgICAgc3dpdGNoICh0YWIpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob21lLXRhYlwiOlxuICAgICAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIEhvbWVQYWdlLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZW51LXRhYlwiOlxuICAgICAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIE1lbnVQYWdlLnJlbmRlck1lbnUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjb250YWN0LXRhYlwiOlxuICAgICAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIENvbnRhY3RQYWdlLnJlbmRlckNvbnRhY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBoYW5kbGVyKGUudGFyZ2V0LmlkKTtcbiAgICB9KVxuXG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9