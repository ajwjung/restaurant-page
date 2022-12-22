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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements-builder */ "./src/elements-builder.js");


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

/***/ "./src/elements-builder.js":
/*!*********************************!*\
  !*** ./src/elements-builder.js ***!
  \*********************************/
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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements-builder */ "./src/elements-builder.js");


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

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements-builder */ "./src/elements-builder.js");
/* harmony import */ var _imgs_alfredo_linguini_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/alfredo-linguini.png */ "./src/imgs/alfredo-linguini.png");
/* harmony import */ var _imgs_remy_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/remy.png */ "./src/imgs/remy.png");
/* harmony import */ var _imgs_anton_ego_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/anton-ego.png */ "./src/imgs/anton-ego.png");





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
            "alfredo", "alfredo-container", _imgs_alfredo_linguini_png__WEBPACK_IMPORTED_MODULE_1__, "alfredo-img", "Alfredo Linguini"
        );
        const remyInfo = CharacterBios.createBio(
            "remy", "remy-container", _imgs_remy_png__WEBPACK_IMPORTED_MODULE_2__, "remy-img", "Remy"
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
            "ego", "ego-container", _imgs_anton_ego_png__WEBPACK_IMPORTED_MODULE_3__, "ego-img", "Anton Ego"
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

/***/ }),

/***/ "./src/imgs/alfredo-linguini.png":
/*!***************************************!*\
  !*** ./src/imgs/alfredo-linguini.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a888a199125446d8da2.png";

/***/ }),

/***/ "./src/imgs/anton-ego.png":
/*!********************************!*\
  !*** ./src/imgs/anton-ego.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a0c441e07cfd678b9cb.png";

/***/ }),

/***/ "./src/imgs/remy.png":
/*!***************************!*\
  !*** ./src/imgs/remy.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5ec938723c6aae074af.png";

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
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const RenderPage = (() => {
    const content = document.querySelector("#content");

    _page_load__WEBPACK_IMPORTED_MODULE_0__["default"].renderHome();
   
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
                _page_load__WEBPACK_IMPORTED_MODULE_0__["default"].renderHome();
                break;
            case "menu-tab":
                clearContent();
                _menu__WEBPACK_IMPORTED_MODULE_1__["default"].renderMenu();
                break;
            case "contact-tab":
                clearContent();
                _contact__WEBPACK_IMPORTED_MODULE_2__["default"].renderContact();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUNMO0FBQ007QUFDZjs7QUFFckI7QUFDQTs7QUFFQSxJQUFJLDZEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZEQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4REFBeUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9lbGVtZW50cy1idWlsZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDppdGFsLHdnaHRAMCw2MDA7MCw3MDA7MSw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLW1haW4tYmctY2xyOiByZ2IoMTIsIDIyLCA1Myk7XFxuICAgIC0taW1nLWJnLWNscjogcmdiKDY4LCAwLCAyMCk7XFxuICAgIC0tZm9udC1jbHI6IHJnYigyMjYsIDE3NSwgNjQpO1xcbiAgICAtLWgxLWZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICAtLWgyLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1xdW90ZS1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1zbWFsbC1mb250LXNpemU6IDEuMnJlbTtcXG4gICAgLS1oZWFkZXItbWFyZ2luOiAycmVtIDA7XFxuICAgIC0tZnVsbC13aWR0aDogMTAwdnc7XFxuICAgIC0tdGV4dC1hbGlnbm1lbnQ6IGNlbnRlcjtcXG59XFxuXFxuKiB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50IEdhcmFtb25kXFxcIiwgc2VyaWY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmctY2xyKTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oZWFkZXIsXFxuZm9vdGVyLFxcbi5hbGZyZWRvLFxcbi5yZW15LFxcbi5lZ28sXFxuLm1lbnUtaXRlbSA+IHAsXFxuLmNvbnRhY3QtaW5mbyA+IHAge1xcbiAgICB0ZXh0LWFsaWduOiB2YXIoLS10ZXh0LWFsaWdubWVudCk7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gICAgbWFyZ2luOiB2YXIoLS1oZWFkZXItbWFyZ2luKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcXVvdGUtZm9udC1zaXplKTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcXG59XFxuXFxuaHIge1xcbiAgICBib3JkZXItd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvbnQtY2xyKTtcXG59XFxuXFxuLmhlYWRlci1saW5lLFxcbi5mb290ZXItbGluZSB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogMnB4O1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4vKiBNYWluIFBhZ2UgKi9cXG5cXG5oZWFkZXIsXFxubmF2LFxcbmZvb3RlcixcXG4uY2hlZnMsXFxuLnJldmlld3Mge1xcbiAgICB3aWR0aDogdmFyKC0tZnVsbC13aWR0aCk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxubWFpbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDUwdmhcXG59XFxuXFxubmF2IHtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIG1hcmdpbjogMSUgMDtcXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA4NSVcXG59XFxuXFxuLmNoZWZzLFxcbi5yZXZpZXdzIHtcXG4gICAgbWFyZ2luOiA1JSAwO1xcbn1cXG5cXG5oZWFkZXIsXFxubmF2LFxcbi5kaXZpZGVycyxcXG4uY2hlZnMtaW5mbyxcXG4ucmV2aWV3cyxcXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLm1lbnUtaXRlbSxcXG4uY29udGFjdC1pbmZvLFxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idG4tY29udGFpbmVyLFxcbi5idG4tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5idG4tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY2xyKTtcXG59XFxuXFxuI2hvbWUtdGFiLFxcbiNtZW51LXRhYixcXG4jY29udGFjdC10YWIge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250LXNpemUpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLmNoZWZzLWluZm8ge1xcbiAgICBnYXA6IDEwJTtcXG4gICAgbWFyZ2luOiB2YXIoLS1oZWFkZXItbWFyZ2luKTtcXG59XFxuXFxuaGVhZGVyLFxcbi5yZXZpZXdzLFxcbi5tZW51LWl0ZW0sXFxuLmNvbnRhY3QtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGZyZWRvLWNvbnRhaW5lcixcXG4ucmVteS1jb250YWluZXIsXFxuLmVnby1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltZy1iZy1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbiNlZ28taW1nIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xOCUpO1xcbn1cXG5cXG4jZWdvLXJldmlldyB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1xdW90ZS1mb250LXNpemUpO1xcbn1cXG5cXG4jYWxmcmVkby1pbWcge1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyJSkgdHJhbnNsYXRlWSgtNSUpO1xcbn1cXG5cXG4jcmVteS1pbWcge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSkgdHJhbnNsYXRlWSg1JSk7XFxufVxcblxcbi8qIE1lbnUgJiBDb250YWN0IFBhZ2VzICovXFxuLnN0YXJ0ZXJzLFxcbi5lbnRyZWVzLFxcbi5kZXNzZXJ0cyxcXG4uY29udGFjdC1pbmZvIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogdmFyKC0tZnVsbC13aWR0aCk7XFxuICAgIG1hcmdpbjogNHJlbSAwO1xcbn1cXG5cXG4ubWVudS1pdGVtID4gcCxcXG4uY29udGFjdC1pbmZvID4gcCB7XFxuICAgIHdpZHRoOiA3MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYztJQUNkLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7Ozs7OztJQVNJLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBLGNBQWM7O0FBRWQ7Ozs7O0lBS0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7Ozs7Ozs7OztJQVNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFFBQVE7SUFDUiw0QkFBNEI7QUFDaEM7O0FBRUE7Ozs7SUFJSSxzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGtCQUFrQjs7SUFFbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztBQUM5Qzs7QUFFQSx5QkFBeUI7QUFDekI7Ozs7SUFJSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDppdGFsLHdnaHRAMCw2MDA7MCw3MDA7MSw0MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tYmctY2xyOiByZ2IoMTIsIDIyLCA1Myk7XFxuICAgIC0taW1nLWJnLWNscjogcmdiKDY4LCAwLCAyMCk7XFxuICAgIC0tZm9udC1jbHI6IHJnYigyMjYsIDE3NSwgNjQpO1xcbiAgICAtLWgxLWZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICAtLWgyLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1xdW90ZS1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1zbWFsbC1mb250LXNpemU6IDEuMnJlbTtcXG4gICAgLS1oZWFkZXItbWFyZ2luOiAycmVtIDA7XFxuICAgIC0tZnVsbC13aWR0aDogMTAwdnc7XFxuICAgIC0tdGV4dC1hbGlnbm1lbnQ6IGNlbnRlcjtcXG59XFxuXFxuKiB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50IEdhcmFtb25kXFxcIiwgc2VyaWY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmctY2xyKTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oZWFkZXIsXFxuZm9vdGVyLFxcbi5hbGZyZWRvLFxcbi5yZW15LFxcbi5lZ28sXFxuLm1lbnUtaXRlbSA+IHAsXFxuLmNvbnRhY3QtaW5mbyA+IHAge1xcbiAgICB0ZXh0LWFsaWduOiB2YXIoLS10ZXh0LWFsaWdubWVudCk7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gICAgbWFyZ2luOiB2YXIoLS1oZWFkZXItbWFyZ2luKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcXVvdGUtZm9udC1zaXplKTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcXG59XFxuXFxuaHIge1xcbiAgICBib3JkZXItd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvbnQtY2xyKTtcXG59XFxuXFxuLmhlYWRlci1saW5lLFxcbi5mb290ZXItbGluZSB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogMnB4O1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4vKiBNYWluIFBhZ2UgKi9cXG5cXG5oZWFkZXIsXFxubmF2LFxcbmZvb3RlcixcXG4uY2hlZnMsXFxuLnJldmlld3Mge1xcbiAgICB3aWR0aDogdmFyKC0tZnVsbC13aWR0aCk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxubWFpbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDUwdmhcXG59XFxuXFxubmF2IHtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIG1hcmdpbjogMSUgMDtcXG4gICAgZ2FwOiA0cmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA4NSVcXG59XFxuXFxuLmNoZWZzLFxcbi5yZXZpZXdzIHtcXG4gICAgbWFyZ2luOiA1JSAwO1xcbn1cXG5cXG5oZWFkZXIsXFxubmF2LFxcbi5kaXZpZGVycyxcXG4uY2hlZnMtaW5mbyxcXG4ucmV2aWV3cyxcXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLm1lbnUtaXRlbSxcXG4uY29udGFjdC1pbmZvLFxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idG4tY29udGFpbmVyLFxcbi5idG4tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5idG4tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY2xyKTtcXG59XFxuXFxuI2hvbWUtdGFiLFxcbiNtZW51LXRhYixcXG4jY29udGFjdC10YWIge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250LXNpemUpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLmNoZWZzLWluZm8ge1xcbiAgICBnYXA6IDEwJTtcXG4gICAgbWFyZ2luOiB2YXIoLS1oZWFkZXItbWFyZ2luKTtcXG59XFxuXFxuaGVhZGVyLFxcbi5yZXZpZXdzLFxcbi5tZW51LWl0ZW0sXFxuLmNvbnRhY3QtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGZyZWRvLWNvbnRhaW5lcixcXG4ucmVteS1jb250YWluZXIsXFxuLmVnby1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltZy1iZy1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbiNlZ28taW1nIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xOCUpO1xcbn1cXG5cXG4jZWdvLXJldmlldyB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1xdW90ZS1mb250LXNpemUpO1xcbn1cXG5cXG4jYWxmcmVkby1pbWcge1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyJSkgdHJhbnNsYXRlWSgtNSUpO1xcbn1cXG5cXG4jcmVteS1pbWcge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSkgdHJhbnNsYXRlWSg1JSk7XFxufVxcblxcbi8qIE1lbnUgJiBDb250YWN0IFBhZ2VzICovXFxuLnN0YXJ0ZXJzLFxcbi5lbnRyZWVzLFxcbi5kZXNzZXJ0cyxcXG4uY29udGFjdC1pbmZvIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogdmFyKC0tZnVsbC13aWR0aCk7XFxuICAgIG1hcmdpbjogNHJlbSAwO1xcbn1cXG5cXG4ubWVudS1pdGVtID4gcCxcXG4uY29udGFjdC1pbmZvID4gcCB7XFxuICAgIHdpZHRoOiA3MCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IE1haW5FbGVtZW50cywgT3RoZXJFbGVtZW50cywgVGFicyB9IGZyb20gXCIuL2VsZW1lbnRzLWJ1aWxkZXJcIjtcblxuY29uc3QgQ29udGFjdEVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVDb250YWN0SGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBNYWluRWxlbWVudHMuY3JlYXRlSGVhZGVyKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250YWN0TmF2QmFyID0gVGFicy5jcmVhdGVUYWJTZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGhlYWRlckxpbmUgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUxpbmUoXCJoZWFkZXItbGluZVwiKTtcbiAgICAgICAgY29uc3QgY29udGFjdEgxID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMShcIkNvbnRhY3QgVXNcIik7XG5cbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3ROYXZCYXIpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGluZSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0SDEpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVDb250YWN0TWFpbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IE1haW5FbGVtZW50cy5jcmVhdGVNYWluKCk7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcImNvbnRhY3QtaW5mb1wiKTtcbiAgICBcbiAgICAgICAgY29uc3QgY29udGFjdFBhcmExID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMyhcIldlIGxvb2sgZm9yd2FyZCB0byBzZXJ2aW5nIHlvdS5cIik7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RQYXJhMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShcIklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3Igd291bGQgbGlrZSB0byBib29rIGEgcmVzZXJ2YXRpb24sIHBsZWFzZSByZWFjaCBvdXQgdG8gdXMuXCIpXG4gICAgICAgIGNvbnN0IGNvbnRhY3RQaG9uZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShcIjExMS0xMTEtMTExMVwiKTtcbiAgICAgICAgY29uc3QgY29udGFjdEVtYWlsID0gT3RoZXJFbGVtZW50cy5jcmVhdGVQYXJhKFwiaW5mb0BndXN0ZWF1cy5jb21cIik7XG5cbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0UGFyYTEpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RQYXJhMik7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuICAgICAgICBtYWluLmFwcGVuZChtYWluQ29udGFpbmVyKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIG1haW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlQ29udGFjdEhlYWRlciwgY3JlYXRlQ29udGFjdE1haW4gfTtcblxufSkoKTtcblxuY29uc3QgQ29udGFjdFBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlckNvbnRhY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBDb250YWN0RWxlbWVudHMuY3JlYXRlQ29udGFjdEhlYWRlcigpO1xuICAgICAgICBjb25zdCBkaXZpZGVyTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImRpdmlkZXJcIik7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RNYWluID0gQ29udGFjdEVsZW1lbnRzLmNyZWF0ZUNvbnRhY3RNYWluKCk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RGb290ZXIgPSBNYWluRWxlbWVudHMuY3JlYXRlRm9vdGVyKCk7XG4gICAgICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdmlkZXJMaW5lKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0TWFpbik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdEZvb3Rlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVuZGVyQ29udGFjdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7IiwiY29uc3QgTWFpbkVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgICAgIHJldHVybiBuZXdIZWFkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgICAgICByZXR1cm4gbmV3TmF2O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICAgICAgcmV0dXJuIG5ld01haW47XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU2VjdGlvbiA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBuZXdTZWN0aW9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ld1NlY3Rpb247XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGZvb3RlckxpbmUgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUxpbmUoXCJmb290ZXItbGluZVwiKTtcbiAgICAgICAgY29uc3Qgbm90ZUNvbnRhaW5lciA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgZm9vdGVyTm90ZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShcIkNvcHlyaWdodCDCqSAyMDIyIEFteSBKdW5nXCIpO1xuXG4gICAgICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTm90ZSk7XG4gICAgICAgIG5ld0Zvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5lKTtcbiAgICAgICAgbmV3Rm9vdGVyLmFwcGVuZENoaWxkKG5vdGVDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBuZXdGb290ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlSGVhZGVyLCBjcmVhdGVOYXYsIGNyZWF0ZU1haW4sIGNyZWF0ZVNlY3Rpb24sIGNyZWF0ZUZvb3RlciB9XG59KSgpO1xuXG5jb25zdCBPdGhlckVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVIMSA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBuZXdIMS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdIMTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVIMiA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBuZXdIMi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdIMjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVIMyA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuZXdIMy50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdIMztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVEaXYgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBuZXdEaXY7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlSW1hZ2UgPSAoc3JjKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICByZXR1cm4gbmV3SW1hZ2U7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUGFyYSA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbmV3UGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdQYXJhO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVNwYW4gPSAodGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG5ld1NwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gbmV3U3BhbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVMaW5lID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICAgICAgICBuZXdMaW5lLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ld0xpbmU7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQnRuID0gKHRleHQsIGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5ld0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBuZXdCdG4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBuZXdCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICByZXR1cm4gbmV3QnRuO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUgxLCBjcmVhdGVIMiwgY3JlYXRlSDMsIGNyZWF0ZURpdiwgY3JlYXRlSW1hZ2UsXG4gICAgICAgIGNyZWF0ZVBhcmEsIGNyZWF0ZVNwYW4sIGNyZWF0ZUxpbmUsIGNyZWF0ZUJ0biB9XG59KSgpO1xuXG5jb25zdCBUYWJzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVIb21lQnRuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBob21lVGFiRGl2ID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJidG4tY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBob21lVGFiID0gT3RoZXJFbGVtZW50cy5jcmVhdGVCdG4oXCJIb21lXCIsIFwiaG9tZS10YWJcIik7XG4gICAgICAgIGhvbWVUYWJEaXYuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG5cbiAgICAgICAgcmV0dXJuIGhvbWVUYWJEaXY7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTWVudUJ0biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudVRhYkRpdiA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiYnRuLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgbWVudVRhYiA9IE90aGVyRWxlbWVudHMuY3JlYXRlQnRuKFwiTWVudVwiLCBcIm1lbnUtdGFiXCIpO1xuICAgICAgICBtZW51VGFiRGl2LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gICAgICAgIHJldHVybiBtZW51VGFiRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3RCdG4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RUYWJEaXYgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcImJ0bi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUJ0bihcIkNvbnRhY3QgVXNcIiwgXCJjb250YWN0LXRhYlwiKTtcbiAgICAgICAgY29udGFjdFRhYkRpdi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICAgICAgICByZXR1cm4gY29udGFjdFRhYkRpdjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUYWJTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYXZTZWN0aW9uID0gTWFpbkVsZW1lbnRzLmNyZWF0ZU5hdihcInRhYnNcIik7XG5cbiAgICAgICAgY29uc3QgaG9tZVRhYiA9IGNyZWF0ZUhvbWVCdG4oKTtcbiAgICAgICAgY29uc3QgbWVudVRhYiA9IGNyZWF0ZU1lbnVCdG4oKTtcbiAgICAgICAgY29uc3QgY29udGFjdFRhYiA9IGNyZWF0ZUNvbnRhY3RCdG4oKTtcblxuICAgICAgICBuYXZTZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICAgICAgICBuYXZTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICAgICAgICBuYXZTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG4gICAgICAgIHJldHVybiBuYXZTZWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZVRhYlNlY3Rpb24gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IE1haW5FbGVtZW50cywgT3RoZXJFbGVtZW50cywgVGFicyB9OyIsImltcG9ydCB7IE1haW5FbGVtZW50cywgT3RoZXJFbGVtZW50cywgVGFicyB9IGZyb20gXCIuL2VsZW1lbnRzLWJ1aWxkZXJcIjtcblxuY29uc3QgTWVudUVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVNZW51SGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBNYWluRWxlbWVudHMuY3JlYXRlSGVhZGVyKCk7XG4gICAgXG4gICAgICAgIGNvbnN0IG1lbnVOYXZCYXIgPSBUYWJzLmNyZWF0ZVRhYlNlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgaGVhZGVyTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImhlYWRlci1saW5lXCIpO1xuICAgICAgICBjb25zdCBtZW51SDEgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgxKFwiR3VzdGVhdSdzIE1lbnVcIik7XG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudU5hdkJhcik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMaW5lKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVIMSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNZW51RGlzaCA9IChkaXNoTmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGlzaCA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwibWVudS1pdGVtXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGlzaFRpdGxlID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMyhkaXNoTmFtZSk7XG4gICAgICAgIGNvbnN0IGRpc2hEZXNjcmlwdGlvbiA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbmV3RGlzaC5hcHBlbmRDaGlsZChkaXNoVGl0bGUpO1xuICAgICAgICBuZXdEaXNoLmFwcGVuZENoaWxkKGRpc2hEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIG5ld0Rpc2g7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU3RhcnRlcnNTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydGVycyA9IE1haW5FbGVtZW50cy5jcmVhdGVTZWN0aW9uKFwic3RhcnRlcnNcIik7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRlcnNIMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDIoXCJTdGFydGVyc1wiKTtcbiAgICAgICAgY29uc3QgY2Flc2FyU2FsYWQgPSBjcmVhdGVNZW51RGlzaChcIkNhZXNhciBTYWxhZCB3aXRoIFNhbG1vblwiLFxuICAgICAgICBcIlBhbi1mcmllZCBzYWxtb24gc2VydmVkIG9uIGEgc2FsYWQgb2Ygcm9tYWluZSBsZXR0dWNlIHRvc3NlZCB3aXRoIGFuIG9saXZlIG9pbCBkcmVzc2luZywgZ3JhdGVkIGNoZWVzZSwgYW5kIHRvcHBlZCB3aXRoIGNyb3V0b25zLlwiKTtcbiAgICAgICAgY29uc3QgcGhlYXNhbnRDb25zb21tZSA9IGNyZWF0ZU1lbnVEaXNoKFwiUGhlYXNhbnQgQ29uc29tbcOpXCIsXG4gICAgICAgIFwiQSBjbGVhciBzb3VwIG1hZGUgZnJvbSBwaGVhc2FudCBtZWF0LlwiKTtcblxuICAgICAgICBzdGFydGVycy5hcHBlbmRDaGlsZChzdGFydGVyc0gyKTtcbiAgICAgICAgc3RhcnRlcnMuYXBwZW5kQ2hpbGQoY2Flc2FyU2FsYWQpO1xuICAgICAgICBzdGFydGVycy5hcHBlbmRDaGlsZChwaGVhc2FudENvbnNvbW1lKTtcblxuICAgICAgICByZXR1cm4gc3RhcnRlcnM7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRW50cmVlc1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJlZXMgPSBNYWluRWxlbWVudHMuY3JlYXRlU2VjdGlvbihcImVudHJlZXNcIik7XG5cbiAgICAgICAgY29uc3QgZW50cmVlc0gyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMihcIkVudHLDqWVzXCIpO1xuICAgICAgICBjb25zdCBzb2xlTWV1bmllcmUgPSBjcmVhdGVNZW51RGlzaChcIlNvbGUgTWV1bmnDqHJlXCIsXG4gICAgICAgIFwiQSBzb2xlIGZpbGV0IHRoYXQgaXMgbGlnaHRseSBicmVhZGVkIGluIHBsYWluIGZsb3VyIGFuZCBwYW4tZnJpZWQgaW4gYnV0dGVyLCB0aGVuIGxpZ2h0bHkgZmxhdm9yZWQgd2l0aCBsZW1vbiBhbmQgcGFyc2xleS5cIilcbiAgICAgICAgY29uc3Qgc2FsbW9uUm91bGFkZSA9IGNyZWF0ZU1lbnVEaXNoKFwiU291cy12aWRlIFNhbG1vbiBSb3VsYWRlXCIsIFxuICAgICAgICBcIkEgbmljZSBzYWxtb24gZmlsZXQgcm9sbGVkIHdpdGggbGVtb24gYW5kIGhlcmJzIGludG8gYSByb3VsYWRlLCBjb29rZWQgc291cy12aWRlLlwiKTtcbiAgICAgICAgY29uc3Qgc2VhcmVkU2NhbGxvcHMgPSBjcmVhdGVNZW51RGlzaChcIlNlYXJlZCBTY2FsbG9wcyB3aXRoIEJldXJyZSBCbGFuY1wiLFxuICAgICAgICBcIkZyZXNoIHNjYWxsb3BzIHNlYXJlZCBpbiBzZWFzb25lZCBidXR0ZXIgYW5kIG9saXZlIG9pbCwgd2l0aCBhIGRhc2ggb2YgQmV1cnJlIEJsYW5jLlwiKTtcbiAgICAgICAgY29uc3QgZmlsZXRNaWdub24gPSBjcmVhdGVNZW51RGlzaChcIkZpbGV0IE1pZ25vblwiLCBcbiAgICAgICAgXCJBbiA4IG96LiBmaWxldCBtaWdub24gc2VydmVkIHdpdGggYSBzaWRlIG9mIHN3ZWV0IHBvdGF0b2VzLCBwYW4tc2VhcmVkIG9uaW9ucyBhbmQgbXVzaHJvb21zLlwiKVxuXG4gICAgICAgIGVudHJlZXMuYXBwZW5kQ2hpbGQoZW50cmVlc0gyKTtcbiAgICAgICAgZW50cmVlcy5hcHBlbmRDaGlsZChzb2xlTWV1bmllcmUpO1xuICAgICAgICBlbnRyZWVzLmFwcGVuZENoaWxkKHNhbG1vblJvdWxhZGUpO1xuICAgICAgICBlbnRyZWVzLmFwcGVuZENoaWxkKHNlYXJlZFNjYWxsb3BzKTtcbiAgICAgICAgZW50cmVlcy5hcHBlbmRDaGlsZChmaWxldE1pZ25vbik7XG5cbiAgICAgICAgcmV0dXJuIGVudHJlZXM7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRGVzc2VydHNTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNzZXJ0cyA9IE1haW5FbGVtZW50cy5jcmVhdGVTZWN0aW9uKFwiZGVzc2VydHNcIik7XG5cbiAgICAgICAgY29uc3QgZGVzc2VydHNIMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDIoXCJEZXNzZXJ0c1wiKTtcbiAgICAgICAgY29uc3Qgc291ZmZsZSA9IGNyZWF0ZU1lbnVEaXNoKFwiR3VzdGVhdSdzIFNvdWZmbGVcIixcbiAgICAgICAgXCJBIGJha2VkIGVnZy1iYXNlZCBkZXNzZXJ0IHRoYXQncyBjcmlzcHkgb24gdGhlIG91dHNpZGUgYW5kIHNvZnQgYW5kIGZsdWZmeSBvbiB0aGUgaW5zaWRlLlwiKTtcbiAgICAgICAgY29uc3QgbWlsbGVGZXVsbGUgPSBjcmVhdGVNZW51RGlzaChcIk1pbGxlLUZldWxsZVwiLFxuICAgICAgICBcIkEgZGVsaWNhdGUgcGFzdHJ5IGNvbXBvc2VkIG9mIG11bHRpcGxlIGxheWVycyBvZiBidXR0ZXJ5IHBhc3RyeSwgZmlsbGVkIHdpdGggcmljaCBjdXN0YXJkIHBhc3RyeSBjcmVhbSBhbmQgdG9wcGVkIHdpdGggZ2xvc3N5IHJveWFsIGljaW5nLiBcIik7XG4gICAgICAgIGNvbnN0IGJ1bmR0Q2FrZSA9IGNyZWF0ZU1lbnVEaXNoKFwiRnJlbmNoIEJ1bmR0IENha2VcIixcbiAgICAgICAgXCJBIGNsYXNzaWMgdmFuaWxsYSBCdW5kdCBjYWtlIHRvcHBlZCB3aXRoIHBvd2RlcmVkIHN1Z2FyLiBTaW1wbGUgYnV0IGRlbGljaW91cyFcIik7XG5cbiAgICAgICAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoZGVzc2VydHNIMik7XG4gICAgICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKHNvdWZmbGUpO1xuICAgICAgICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChtaWxsZUZldWxsZSk7XG4gICAgICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKGJ1bmR0Q2FrZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGVzc2VydHM7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTWVudU1haW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBNYWluRWxlbWVudHMuY3JlYXRlTWFpbigpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ZXJzU2VjdGlvbiA9IGNyZWF0ZVN0YXJ0ZXJzU2VjdGlvbigpO1xuICAgICAgICBjb25zdCBlbnRyZWVzU2VjdGlvbiA9IGNyZWF0ZUVudHJlZXNTZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGRlc3NlcnRzU2VjdGlvbiA9IGNyZWF0ZURlc3NlcnRzU2VjdGlvbigpO1xuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc3RhcnRlcnNTZWN0aW9uKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChlbnRyZWVzU2VjdGlvbik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzc2VydHNTZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBtYWluO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZU1lbnVIZWFkZXIsIGNyZWF0ZU1lbnVNYWluIH07XG5cbn0pKCk7XG5cblxuY29uc3QgTWVudVBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlck1lbnUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBNZW51RWxlbWVudHMuY3JlYXRlTWVudUhlYWRlcigpO1xuICAgICAgICBjb25zdCBkaXZpZGVyTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImRpdmlkZXJcIik7XG4gICAgICAgIGNvbnN0IG1lbnVNYWluID0gTWVudUVsZW1lbnRzLmNyZWF0ZU1lbnVNYWluKCk7XG4gICAgICAgIGNvbnN0IG1lbnVGb290ZXIgPSBNYWluRWxlbWVudHMuY3JlYXRlRm9vdGVyKCk7XG4gICAgXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2aWRlckxpbmUpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVNYWluKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Rm9vdGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXJNZW51IH07XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVQYWdlOyIsImltcG9ydCB7IE1haW5FbGVtZW50cywgT3RoZXJFbGVtZW50cywgVGFicyB9IGZyb20gXCIuL2VsZW1lbnRzLWJ1aWxkZXJcIjtcbmltcG9ydCBBbGZyZWRvIGZyb20gXCIuL2ltZ3MvYWxmcmVkby1saW5ndWluaS5wbmdcIjtcbmltcG9ydCBSZW15IGZyb20gXCIuL2ltZ3MvcmVteS5wbmdcIjtcbmltcG9ydCBFZ28gZnJvbSBcIi4vaW1ncy9hbnRvbi1lZ28ucG5nXCI7XG5cbmNvbnN0IENoYXJhY3RlckJpb3MgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUJpbyA9IChvdXRlckRpdk5hbWUsIGlubmVyRGl2TmFtZSwgaW1nU3JjLCBpbWdJZCwgcGVyc29uTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBvdXRlckRpdiA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KG91dGVyRGl2TmFtZSk7XG4gICAgICAgIGNvbnN0IGlubmVyQ29udGFpbmVyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoaW5uZXJEaXZOYW1lKTtcbiAgICAgICAgY29uc3QgcGVyc29uSW1nID0gT3RoZXJFbGVtZW50cy5jcmVhdGVJbWFnZShpbWdTcmMpO1xuICAgICAgICBwZXJzb25JbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW1nSWQpO1xuICAgICAgICBjb25zdCBwZXJzb25OYW1lUGFyYSA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShwZXJzb25OYW1lKTtcblxuICAgICAgICBpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJzb25JbWcpO1xuICAgICAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKHBlcnNvbk5hbWVQYXJhKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIG91dGVyRGl2O1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUJpbyB9O1xuXG59KSgpO1xuXG5jb25zdCBQYWdlRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUhlYWRlclNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IE1haW5FbGVtZW50cy5jcmVhdGVIZWFkZXIoKTtcblxuICAgICAgICBjb25zdCBuYXZCYXIgPSBUYWJzLmNyZWF0ZVRhYlNlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgaGVhZGVyTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImhlYWRlci1saW5lXCIpO1xuICAgICAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDEoXCJHdXN0ZWF1J3NcIik7XG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxpbmUpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQ2hlZlNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWZzU2VjdGlvbiA9IE1haW5FbGVtZW50cy5jcmVhdGVTZWN0aW9uKFwiY2hlZnNcIik7XG4gICAgICAgIGNvbnN0IGNoZWZzSDIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgyKFwiTWVldCB0aGUgQ2hlZnNcIik7XG4gICAgICAgIGNvbnN0IGNoZWZzQ29udGFpbmVyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJjaGVmcy1pbmZvXCIpO1xuICAgIFxuICAgICAgICBjb25zdCBhbGZyZWRvSW5mbyA9IENoYXJhY3RlckJpb3MuY3JlYXRlQmlvKFxuICAgICAgICAgICAgXCJhbGZyZWRvXCIsIFwiYWxmcmVkby1jb250YWluZXJcIiwgQWxmcmVkbywgXCJhbGZyZWRvLWltZ1wiLCBcIkFsZnJlZG8gTGluZ3VpbmlcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCByZW15SW5mbyA9IENoYXJhY3RlckJpb3MuY3JlYXRlQmlvKFxuICAgICAgICAgICAgXCJyZW15XCIsIFwicmVteS1jb250YWluZXJcIiwgUmVteSwgXCJyZW15LWltZ1wiLCBcIlJlbXlcIlxuICAgICAgICApO1xuXG4gICAgICAgIGNoZWZzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsZnJlZG9JbmZvKTtcbiAgICAgICAgY2hlZnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVteUluZm8pO1xuICAgICAgICBjaGVmc1NlY3Rpb24uYXBwZW5kQ2hpbGQoY2hlZnNIMik7XG4gICAgICAgIGNoZWZzU2VjdGlvbi5hcHBlbmRDaGlsZChjaGVmc0NvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGNoZWZzU2VjdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVSZXZpZXdTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXZpZXdzU2VjdGlvbiA9IE1haW5FbGVtZW50cy5jcmVhdGVTZWN0aW9uKFwicmV2aWV3c1wiKTtcbiAgICAgICAgY29uc3QgcmV2aWV3c0gyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMihcIldoYXQgdGhlIENyaXRpY3MgU2F5XCIpO1xuXG4gICAgICAgIGNvbnN0IHJldmlld3NDb250YWluZXIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcInJldmlld3MtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBlZ29JbmZvID0gQ2hhcmFjdGVyQmlvcy5jcmVhdGVCaW8oXG4gICAgICAgICAgICBcImVnb1wiLCBcImVnby1jb250YWluZXJcIiwgRWdvLCBcImVnby1pbWdcIiwgXCJBbnRvbiBFZ29cIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBlZ29SZXZpZXcgPSBgXCJJIGV4cGVyaWVuY2VkIHNvbWV0aGluZyBuZXc6IGFuIGV4dHJhb3JkaW5hcnkgbWVhbCBmcm9tIGEgc2luZ3VsYXJseSB1bmV4cGVjdGVkIHNvdXJjZS4gWy4uLl0gSXQgaXMgZGlmZmljdWx0IHRvIGltYWdpbmUgbW9yZSBodW1ibGUgb3JpZ2lucyB0aGFuIHRob3NlIG9mIHRoZSBnZW5pdXMgbm93IGNvb2tpbmcgYXQgR3VzdGVhdSdzIHdobyBpcywgaW4gdGhpcyBjcml0aWMncyBvcGluaW9uLCBub3RoaW5nIGxlc3MgdGhhbiB0aGUgZmluZXN0IGNoZWYgaW4gRnJhbmNlLiBJIHdpbGwgYmUgcmV0dXJuaW5nIHRvIEd1c3RlYXUncyBzb29uLCBodW5ncnkgZm9yIG1vcmUuXCJgO1xuICAgICAgICBjb25zdCByZXZpZXdTcGFuID0gT3RoZXJFbGVtZW50cy5jcmVhdGVTcGFuKGVnb1Jldmlldyk7XG4gICAgICAgIHJldmlld1NwYW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZ28tcmV2aWV3XCIpXG5cbiAgICAgICAgcmV2aWV3c1NlY3Rpb24uYXBwZW5kQ2hpbGQocmV2aWV3c0gyKTtcbiAgICAgICAgcmV2aWV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdTcGFuKTtcbiAgICAgICAgcmV2aWV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZ29JbmZvKTtcbiAgICAgICAgcmV2aWV3c1NlY3Rpb24uYXBwZW5kQ2hpbGQocmV2aWV3c0NvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHJldmlld3NTZWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUhlYWRlclNlY3Rpb24sIGNyZWF0ZUNoZWZTZWN0aW9uLCBjcmVhdGVSZXZpZXdTZWN0aW9uIH07XG59KSgpO1xuXG5jb25zdCBIb21lUGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVySG9tZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgaGVhZGVyID0gUGFnZUVsZW1lbnRzLmNyZWF0ZUhlYWRlclNlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IE1haW5FbGVtZW50cy5jcmVhdGVNYWluKCk7XG4gICAgICAgIGNvbnN0IGZpcnN0TGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImRpdmlkZXJcIik7XG4gICAgICAgIGNvbnN0IHJldmlld3NNYWluID0gUGFnZUVsZW1lbnRzLmNyZWF0ZVJldmlld1NlY3Rpb24oKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImRpdmlkZXJcIik7XG4gICAgICAgIGNvbnN0IGNoZWZzTWFpbiA9IFBhZ2VFbGVtZW50cy5jcmVhdGVDaGVmU2VjdGlvbigpO1xuICAgICAgICBjb25zdCBmb290ZXIgPSBNYWluRWxlbWVudHMuY3JlYXRlRm9vdGVyKCk7XG4gICAgICAgIFxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGZpcnN0TGluZSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocmV2aWV3c01haW4pO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHNlY29uZExpbmUpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNoZWZzTWFpbik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlckhvbWUgfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcbmltcG9ydCBNZW51UGFnZSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgUmVuZGVyUGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIEhvbWVQYWdlLnJlbmRlckhvbWUoKTtcbiAgIFxuICAgIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZXIgPSAodGFiKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGFiKSB7XG4gICAgICAgICAgICBjYXNlIFwiaG9tZS10YWJcIjpcbiAgICAgICAgICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICBIb21lUGFnZS5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVudS10YWJcIjpcbiAgICAgICAgICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICBNZW51UGFnZS5yZW5kZXJNZW51KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY29udGFjdC10YWJcIjpcbiAgICAgICAgICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICBDb250YWN0UGFnZS5yZW5kZXJDb250YWN0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaGFuZGxlcihlLnRhcmdldC5pZCk7XG4gICAgfSlcblxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==