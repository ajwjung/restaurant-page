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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-bg-clr: rgb(12, 22, 53);\n    --img-bg-clr: rgb(68, 0, 20);\n    --font-clr: rgb(238, 173, 14);\n    --quote-font-size: 1.2rem;\n}\n\nbody {\n    background: var(--main-bg-clr);\n    color: var(--font-clr);\n}\n\nh1, h2, h3 {\n    text-align: center;\n}\n\n.chefs,\n.reviews {\n    width: 100%;\n}\n\n.chefs-info,\n.reviews-container,\n.reviews {\n    display: flex;\n    justify-content: center;\n}\n\n.chefs-info,\n.reviews-container {\n    align-items: center;\n    gap: 50px;\n}\n\n.reviews {\n    flex-direction: column;\n    align-items: center;\n}\n\n.alfredo,\n.remy,\n.ego {\n    text-align: center;\n}\n\n.alfredo-container,\n.remy-container,\n.ego-container {\n    height: 150px;\n    width: 150px;\n    background-color: var(--img-bg-clr);\n    border-radius: 50%;\n\n    overflow: hidden;\n}\n\n#alfredo-img {\n    height: 350px;\n    transform: translateX(-22%) translateY(-5%);\n}\n\n#remy-img {\n    height: 250px;\n    transform: translateX(-40%) translateY(5%);\n}\n\n.reviews-container {\n    width: 50%;\n}\n\n#ego-img {\n    height: 250px;\n    transform: translateX(-18%);\n    flex: 1;\n}\n\n#ego-review {\n    font-style: italic;\n    font-size: var(--quote-font-size);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,4BAA4B;IAC5B,6BAA6B;IAC7B,yBAAyB;AAC7B;;AAEA;IACI,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;AACf;;AAEA;;;IAGI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;;IAEI,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;;;IAGI,kBAAkB;AACtB;;AAEA;;;IAGI,aAAa;IACb,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;;IAElB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,0CAA0C;AAC9C;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;AACrC","sourcesContent":[":root {\n    --main-bg-clr: rgb(12, 22, 53);\n    --img-bg-clr: rgb(68, 0, 20);\n    --font-clr: rgb(238, 173, 14);\n    --quote-font-size: 1.2rem;\n}\n\nbody {\n    background: var(--main-bg-clr);\n    color: var(--font-clr);\n}\n\nh1, h2, h3 {\n    text-align: center;\n}\n\n.chefs,\n.reviews {\n    width: 100%;\n}\n\n.chefs-info,\n.reviews-container,\n.reviews {\n    display: flex;\n    justify-content: center;\n}\n\n.chefs-info,\n.reviews-container {\n    align-items: center;\n    gap: 50px;\n}\n\n.reviews {\n    flex-direction: column;\n    align-items: center;\n}\n\n.alfredo,\n.remy,\n.ego {\n    text-align: center;\n}\n\n.alfredo-container,\n.remy-container,\n.ego-container {\n    height: 150px;\n    width: 150px;\n    background-color: var(--img-bg-clr);\n    border-radius: 50%;\n\n    overflow: hidden;\n}\n\n#alfredo-img {\n    height: 350px;\n    transform: translateX(-22%) translateY(-5%);\n}\n\n#remy-img {\n    height: 250px;\n    transform: translateX(-40%) translateY(5%);\n}\n\n.reviews-container {\n    width: 50%;\n}\n\n#ego-img {\n    height: 250px;\n    transform: translateX(-18%);\n    flex: 1;\n}\n\n#ego-review {\n    font-style: italic;\n    font-size: var(--quote-font-size);\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _elements_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements-builder */ "./src/elements-builder.js");



const ContactElements = (() => {
    const createContactHeader = () => {
        const header = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createHeader();
        
        const contactH1 = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH1("Contact Us");
        header.appendChild(contactH1);

        return header;
    }

    const createContactMain = () => {
        const main = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createMain();
        const mainContainer = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createDiv("contact-info");
    
        const contactPara = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createPara("We look forward to serving you. If you have any questions or would like to book a reservation, please reach out to us.")
        const contactPhone = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createPara("111-111-1111");
        const contactEmail = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createPara("info@gusteaus.com");

        mainContainer.appendChild(contactPara);
        mainContainer.appendChild(contactPhone);
        mainContainer.appendChild(contactEmail);
        main.append(mainContainer);
    
        return main;
    }

    return { createContactHeader, createContactMain };

})();

const Contact = (() => {
    const content = document.querySelector("#content");

    const contactHeader = ContactElements.createContactHeader();
    const contactMain = ContactElements.createContactMain();
    
    content.appendChild(contactHeader);
    content.appendChild(contactMain);
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/elements-builder.js":
/*!*********************************!*\
  !*** ./src/elements-builder.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainElements": () => (/* binding */ MainElements),
/* harmony export */   "OtherElements": () => (/* binding */ OtherElements)
/* harmony export */ });
const MainElements = (() => {
    const createHeader = () => {
        const newHeader = document.createElement("header");
        return newHeader;
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

    return { createHeader, createMain, createSection }
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

    return { createH1, createH2, createH3, createDiv,
        createImage, createPara, createSpan }
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
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _elements_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements-builder */ "./src/elements-builder.js");



const MenuElements = (() => {
    const createMenuHeader = () => {
        const header = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createHeader();
    
        const menuH1 = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH1("Gusteau's Menu");
        header.appendChild(menuH1);

        return header;
    }

    const createMenuDish = (dishName, description) => {
        const newDish = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createDiv("salad");
        
        const dishTitle = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH3(dishName);
        const dishDescription = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createPara(description);

        newDish.appendChild(dishTitle);
        newDish.appendChild(dishDescription);

        return newDish;
    }

    const createStartersSection = () => {
        const starters = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createSection("starters");

        const startersH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH2("Starters");
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
        const entrees = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createSection("entrees");

        const entreesH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH2("Entrées");
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
        const desserts = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createSection("desserts");

        const dessertsH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.OtherElements.createH2("Desserts");
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
        const main = _elements_builder__WEBPACK_IMPORTED_MODULE_1__.MainElements.createMain();

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


const Menu = (() => {
    const content = document.querySelector("#content");

    const menuHeader = MenuElements.createMenuHeader();
    const menuMain = MenuElements.createMenuMain();

    content.appendChild(menuHeader);
    content.appendChild(menuMain);

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

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
/* harmony import */ var _imgs_gusteaus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/gusteaus.png */ "./src/imgs/gusteaus.png");
/* harmony import */ var _imgs_alfredo_linguini_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/alfredo-linguini.png */ "./src/imgs/alfredo-linguini.png");
/* harmony import */ var _imgs_remy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/remy.png */ "./src/imgs/remy.png");
/* harmony import */ var _imgs_anton_ego_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/anton-ego.png */ "./src/imgs/anton-ego.png");






const PageElements = (() => {
    const createHeaderSection = () => {
        const header = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createHeader();

        // const restaurantLogo = OtherElements.createImage(Gusteau);
        // const logoWrapper = OtherElements.createDiv("logo-container");
        // restaurantLogo.setAttribute("id", "gusteau-logo");
        const restaurantName = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH1("Gusteau's");
        
        // logoWrapper.appendChild(restaurantLogo);
        // header.appendChild(logoWrapper);
        header.appendChild(restaurantName);

        return header;
    }

    const createChefSection = () => {
        const chefsSection = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createSection("chefs");
        const chefsH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH2("Meet the Chefs");
        const chefsContainer = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("chefs-info");
    
        const alfredoDiv = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("alfredo");
        const alfredoContainer = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("alfredo-container");
        const alfredoImg = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createImage(_imgs_alfredo_linguini_png__WEBPACK_IMPORTED_MODULE_2__);
        alfredoImg.setAttribute("id", "alfredo-img");
        const alfredoNamePara = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createPara("Alfredo Linguini");
    
        const remyDiv = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("remy");
        const remyContainer = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("remy-container");
        const remyImg = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createImage(_imgs_remy_png__WEBPACK_IMPORTED_MODULE_3__);
        remyImg.setAttribute("id", "remy-img");
        const remyNamePara = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createPara("Remy");
    
        alfredoContainer.appendChild(alfredoImg);
        alfredoDiv.appendChild(alfredoContainer);
        alfredoDiv.appendChild(alfredoNamePara);
        remyContainer.appendChild(remyImg);
        remyDiv.appendChild(remyContainer);
        remyDiv.appendChild(remyNamePara);

        chefsContainer.appendChild(alfredoDiv);
        chefsContainer.appendChild(remyDiv);

        chefsSection.appendChild(chefsH2);
        chefsSection.appendChild(chefsContainer);

        return chefsSection;
    }

    const createReviewSection = () => {
        const reviewsSection = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createSection("reviews");

        const reviewsH2 = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createH2("What the Critics Say");
        const reviewsContainer = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("reviews-container");
        const egoDiv = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("ego");
        const egoContainer = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createDiv("ego-container");
        const egoImg = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createImage(_imgs_anton_ego_png__WEBPACK_IMPORTED_MODULE_4__);
        egoImg.setAttribute("id", "ego-img");
        const egoNamePara = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createPara("Anton Ego");
        const egoReview = `"I experienced something new: an extraordinary meal from a singularly unexpected source. [...] It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more."`;
        const reviewSpan = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createSpan(egoReview);
        reviewSpan.setAttribute("id", "ego-review")

        reviewsSection.appendChild(reviewsH2);
        egoContainer.appendChild(egoImg);
        egoDiv.appendChild(egoContainer);
        egoDiv.appendChild(egoNamePara);
        reviewsContainer.appendChild(reviewSpan);
        reviewsContainer.appendChild(egoDiv);
        reviewsSection.appendChild(reviewsContainer);

        return reviewsSection;
    }

    return { createHeaderSection, createChefSection, createReviewSection };
})();

const Page = (() => {
    const content = document.querySelector("#content");

    const header = PageElements.createHeaderSection();
    const main = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.MainElements.createMain();
    const chefsMain = PageElements.createChefSection();
    const reviewsMain = PageElements.createReviewSection();
    
    main.appendChild(chefsMain);
    main.appendChild(reviewsMain);
    content.appendChild(header);
    content.appendChild(main);

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

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

/***/ "./src/imgs/gusteaus.png":
/*!*******************************!*\
  !*** ./src/imgs/gusteaus.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d36471955967c81e0f4.png";

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





const CreatePage = (() => {
    _page_load__WEBPACK_IMPORTED_MODULE_0__["default"];
    _menu__WEBPACK_IMPORTED_MODULE_1__["default"];
    _contact__WEBPACK_IMPORTED_MODULE_2__["default"];
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBRztBQUNwRDtBQUNBLDRCQUE0Qix1RUFBd0I7QUFDcEQ7QUFDQSwyQkFBMkIsdUVBQXdCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzRUFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEduQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ0w7QUFDTTtBQUNYOztBQUVyQjtBQUNBLElBQUksa0RBQUk7QUFDUixJQUFJLDZDQUFJO0FBQ1IsSUFBSSxnREFBTztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VsZW1lbnRzLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLW1haW4tYmctY2xyOiByZ2IoMTIsIDIyLCA1Myk7XFxuICAgIC0taW1nLWJnLWNscjogcmdiKDY4LCAwLCAyMCk7XFxuICAgIC0tZm9udC1jbHI6IHJnYigyMzgsIDE3MywgMTQpO1xcbiAgICAtLXF1b3RlLWZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jbHIpO1xcbn1cXG5cXG5oMSwgaDIsIGgzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2hlZnMsXFxuLnJldmlld3Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNoZWZzLWluZm8sXFxuLnJldmlld3MtY29udGFpbmVyLFxcbi5yZXZpZXdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVmcy1pbmZvLFxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLnJldmlld3Mge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWxmcmVkbyxcXG4ucmVteSxcXG4uZWdvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWxmcmVkby1jb250YWluZXIsXFxuLnJlbXktY29udGFpbmVyLFxcbi5lZ28tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWctYmctY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jYWxmcmVkby1pbWcge1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyJSkgdHJhbnNsYXRlWSgtNSUpO1xcbn1cXG5cXG4jcmVteS1pbWcge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSkgdHJhbnNsYXRlWSg1JSk7XFxufVxcblxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbiNlZ28taW1nIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xOCUpO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4jZWdvLXJldmlldyB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1xdW90ZS1mb250LXNpemUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsa0JBQWtCOztJQUVsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsT0FBTztBQUNYOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1iZy1jbHI6IHJnYigxMiwgMjIsIDUzKTtcXG4gICAgLS1pbWctYmctY2xyOiByZ2IoNjgsIDAsIDIwKTtcXG4gICAgLS1mb250LWNscjogcmdiKDIzOCwgMTczLCAxNCk7XFxuICAgIC0tcXVvdGUtZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJnLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNscik7XFxufVxcblxcbmgxLCBoMiwgaDMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaGVmcyxcXG4ucmV2aWV3cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hlZnMtaW5mbyxcXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLnJldmlld3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWZzLWluZm8sXFxuLnJldmlld3MtY29udGFpbmVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ucmV2aWV3cyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hbGZyZWRvLFxcbi5yZW15LFxcbi5lZ28ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hbGZyZWRvLWNvbnRhaW5lcixcXG4ucmVteS1jb250YWluZXIsXFxuLmVnby1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltZy1iZy1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNhbGZyZWRvLWltZyB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjIlKSB0cmFuc2xhdGVZKC01JSk7XFxufVxcblxcbiNyZW15LWltZyB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAlKSB0cmFuc2xhdGVZKDUlKTtcXG59XFxuXFxuLnJldmlld3MtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuI2Vnby1pbWcge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE4JSk7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbiNlZ28tcmV2aWV3IHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IHZhcigtLXF1b3RlLWZvbnQtc2l6ZSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQYWdlIGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xuaW1wb3J0IHsgTWFpbkVsZW1lbnRzLCBPdGhlckVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHMtYnVpbGRlclwiO1xuXG5jb25zdCBDb250YWN0RWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3RIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IE1haW5FbGVtZW50cy5jcmVhdGVIZWFkZXIoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRhY3RIMSA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDEoXCJDb250YWN0IFVzXCIpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdEgxKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3RNYWluID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gTWFpbkVsZW1lbnRzLmNyZWF0ZU1haW4oKTtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiY29udGFjdC1pbmZvXCIpO1xuICAgIFxuICAgICAgICBjb25zdCBjb250YWN0UGFyYSA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShcIldlIGxvb2sgZm9yd2FyZCB0byBzZXJ2aW5nIHlvdS4gSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciB3b3VsZCBsaWtlIHRvIGJvb2sgYSByZXNlcnZhdGlvbiwgcGxlYXNlIHJlYWNoIG91dCB0byB1cy5cIilcbiAgICAgICAgY29uc3QgY29udGFjdFBob25lID0gT3RoZXJFbGVtZW50cy5jcmVhdGVQYXJhKFwiMTExLTExMS0xMTExXCIpO1xuICAgICAgICBjb25zdCBjb250YWN0RW1haWwgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZVBhcmEoXCJpbmZvQGd1c3RlYXVzLmNvbVwiKTtcblxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RQYXJhKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0UGhvbmUpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XG4gICAgICAgIG1haW4uYXBwZW5kKG1haW5Db250YWluZXIpO1xuICAgIFxuICAgICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVDb250YWN0SGVhZGVyLCBjcmVhdGVDb250YWN0TWFpbiB9O1xuXG59KSgpO1xuXG5jb25zdCBDb250YWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IENvbnRhY3RFbGVtZW50cy5jcmVhdGVDb250YWN0SGVhZGVyKCk7XG4gICAgY29uc3QgY29udGFjdE1haW4gPSBDb250YWN0RWxlbWVudHMuY3JlYXRlQ29udGFjdE1haW4oKTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdE1haW4pO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiLCJjb25zdCBNYWluRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICAgICAgcmV0dXJuIG5ld0hlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgICAgIHJldHVybiBuZXdNYWluO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVNlY3Rpb24gPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgbmV3U2VjdGlvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBuZXdTZWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUhlYWRlciwgY3JlYXRlTWFpbiwgY3JlYXRlU2VjdGlvbiB9XG59KSgpO1xuXG5jb25zdCBPdGhlckVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVIMSA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBuZXdIMS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdIMTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVIMiA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBuZXdIMi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdIMjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVIMyA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuZXdIMy50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdIMztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVEaXYgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBuZXdEaXY7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlSW1hZ2UgPSAoc3JjKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICByZXR1cm4gbmV3SW1hZ2U7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUGFyYSA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbmV3UGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdQYXJhO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVNwYW4gPSAodGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG5ld1NwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gbmV3U3BhbjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVIMSwgY3JlYXRlSDIsIGNyZWF0ZUgzLCBjcmVhdGVEaXYsXG4gICAgICAgIGNyZWF0ZUltYWdlLCBjcmVhdGVQYXJhLCBjcmVhdGVTcGFuIH1cbn0pKCk7XG5cbmV4cG9ydCB7IE1haW5FbGVtZW50cywgT3RoZXJFbGVtZW50cyB9OyIsImltcG9ydCBQYWdlIGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xuaW1wb3J0IHsgTWFpbkVsZW1lbnRzLCBPdGhlckVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHMtYnVpbGRlclwiO1xuXG5jb25zdCBNZW51RWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZU1lbnVIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IE1haW5FbGVtZW50cy5jcmVhdGVIZWFkZXIoKTtcbiAgICBcbiAgICAgICAgY29uc3QgbWVudUgxID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMShcIkd1c3RlYXUncyBNZW51XCIpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUgxKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU1lbnVEaXNoID0gKGRpc2hOYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdEaXNoID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJzYWxhZFwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRpc2hUaXRsZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDMoZGlzaE5hbWUpO1xuICAgICAgICBjb25zdCBkaXNoRGVzY3JpcHRpb24gPSBPdGhlckVsZW1lbnRzLmNyZWF0ZVBhcmEoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIG5ld0Rpc2guYXBwZW5kQ2hpbGQoZGlzaFRpdGxlKTtcbiAgICAgICAgbmV3RGlzaC5hcHBlbmRDaGlsZChkaXNoRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHJldHVybiBuZXdEaXNoO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVN0YXJ0ZXJzU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRlcnMgPSBNYWluRWxlbWVudHMuY3JlYXRlU2VjdGlvbihcInN0YXJ0ZXJzXCIpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ZXJzSDIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgyKFwiU3RhcnRlcnNcIik7XG4gICAgICAgIGNvbnN0IGNhZXNhclNhbGFkID0gY3JlYXRlTWVudURpc2goXCJDYWVzYXIgU2FsYWQgd2l0aCBTYWxtb25cIixcbiAgICAgICAgXCJQYW4tZnJpZWQgc2FsbW9uIHNlcnZlZCBvbiBhIHNhbGFkIG9mIHJvbWFpbmUgbGV0dHVjZSB0b3NzZWQgd2l0aCBhbiBvbGl2ZSBvaWwgZHJlc3NpbmcsIGdyYXRlZCBjaGVlc2UsIGFuZCB0b3BwZWQgd2l0aCBjcm91dG9ucy5cIik7XG4gICAgICAgIGNvbnN0IHBoZWFzYW50Q29uc29tbWUgPSBjcmVhdGVNZW51RGlzaChcIlBoZWFzYW50IENvbnNvbW3DqVwiLFxuICAgICAgICBcIkEgY2xlYXIgc291cCBtYWRlIGZyb20gcGhlYXNhbnQgbWVhdC5cIik7XG5cbiAgICAgICAgc3RhcnRlcnMuYXBwZW5kQ2hpbGQoc3RhcnRlcnNIMik7XG4gICAgICAgIHN0YXJ0ZXJzLmFwcGVuZENoaWxkKGNhZXNhclNhbGFkKTtcbiAgICAgICAgc3RhcnRlcnMuYXBwZW5kQ2hpbGQocGhlYXNhbnRDb25zb21tZSk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0ZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUVudHJlZXNTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyZWVzID0gTWFpbkVsZW1lbnRzLmNyZWF0ZVNlY3Rpb24oXCJlbnRyZWVzXCIpO1xuXG4gICAgICAgIGNvbnN0IGVudHJlZXNIMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDIoXCJFbnRyw6llc1wiKTtcbiAgICAgICAgY29uc3Qgc29sZU1ldW5pZXJlID0gY3JlYXRlTWVudURpc2goXCJTb2xlIE1ldW5pw6hyZVwiLFxuICAgICAgICBcIkEgc29sZSBmaWxldCB0aGF0IGlzIGxpZ2h0bHkgYnJlYWRlZCBpbiBwbGFpbiBmbG91ciBhbmQgcGFuLWZyaWVkIGluIGJ1dHRlciwgdGhlbiBsaWdodGx5IGZsYXZvcmVkIHdpdGggbGVtb24gYW5kIHBhcnNsZXkuXCIpXG4gICAgICAgIGNvbnN0IHNhbG1vblJvdWxhZGUgPSBjcmVhdGVNZW51RGlzaChcIlNvdXMtdmlkZSBTYWxtb24gUm91bGFkZVwiLCBcbiAgICAgICAgXCJBIG5pY2Ugc2FsbW9uIGZpbGV0IHJvbGxlZCB3aXRoIGxlbW9uIGFuZCBoZXJicyBpbnRvIGEgcm91bGFkZSwgY29va2VkIHNvdXMtdmlkZS5cIik7XG4gICAgICAgIGNvbnN0IHNlYXJlZFNjYWxsb3BzID0gY3JlYXRlTWVudURpc2goXCJTZWFyZWQgU2NhbGxvcHMgd2l0aCBCZXVycmUgQmxhbmNcIixcbiAgICAgICAgXCJGcmVzaCBzY2FsbG9wcyBzZWFyZWQgaW4gc2Vhc29uZWQgYnV0dGVyIGFuZCBvbGl2ZSBvaWwsIHdpdGggYSBkYXNoIG9mIEJldXJyZSBCbGFuYy5cIik7XG4gICAgICAgIGNvbnN0IGZpbGV0TWlnbm9uID0gY3JlYXRlTWVudURpc2goXCJGaWxldCBNaWdub25cIiwgXG4gICAgICAgIFwiQW4gOCBvei4gZmlsZXQgbWlnbm9uIHNlcnZlZCB3aXRoIGEgc2lkZSBvZiBzd2VldCBwb3RhdG9lcywgcGFuLXNlYXJlZCBvbmlvbnMgYW5kIG11c2hyb29tcy5cIilcblxuICAgICAgICBlbnRyZWVzLmFwcGVuZENoaWxkKGVudHJlZXNIMik7XG4gICAgICAgIGVudHJlZXMuYXBwZW5kQ2hpbGQoc29sZU1ldW5pZXJlKTtcbiAgICAgICAgZW50cmVlcy5hcHBlbmRDaGlsZChzYWxtb25Sb3VsYWRlKTtcbiAgICAgICAgZW50cmVlcy5hcHBlbmRDaGlsZChzZWFyZWRTY2FsbG9wcyk7XG4gICAgICAgIGVudHJlZXMuYXBwZW5kQ2hpbGQoZmlsZXRNaWdub24pO1xuXG4gICAgICAgIHJldHVybiBlbnRyZWVzO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZURlc3NlcnRzU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGVzc2VydHMgPSBNYWluRWxlbWVudHMuY3JlYXRlU2VjdGlvbihcImRlc3NlcnRzXCIpO1xuXG4gICAgICAgIGNvbnN0IGRlc3NlcnRzSDIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgyKFwiRGVzc2VydHNcIik7XG4gICAgICAgIGNvbnN0IHNvdWZmbGUgPSBjcmVhdGVNZW51RGlzaChcIkd1c3RlYXUncyBTb3VmZmxlXCIsXG4gICAgICAgIFwiQSBiYWtlZCBlZ2ctYmFzZWQgZGVzc2VydCB0aGF0J3MgY3Jpc3B5IG9uIHRoZSBvdXRzaWRlIGFuZCBzb2Z0IGFuZCBmbHVmZnkgb24gdGhlIGluc2lkZS5cIik7XG4gICAgICAgIGNvbnN0IG1pbGxlRmV1bGxlID0gY3JlYXRlTWVudURpc2goXCJNaWxsZS1GZXVsbGVcIixcbiAgICAgICAgXCJBIGRlbGljYXRlIHBhc3RyeSBjb21wb3NlZCBvZiBtdWx0aXBsZSBsYXllcnMgb2YgYnV0dGVyeSBwYXN0cnksIGZpbGxlZCB3aXRoIHJpY2ggY3VzdGFyZCBwYXN0cnkgY3JlYW0gYW5kIHRvcHBlZCB3aXRoIGdsb3NzeSByb3lhbCBpY2luZy4gXCIpO1xuICAgICAgICBjb25zdCBidW5kdENha2UgPSBjcmVhdGVNZW51RGlzaChcIkZyZW5jaCBCdW5kdCBDYWtlXCIsXG4gICAgICAgIFwiQSBjbGFzc2ljIHZhbmlsbGEgQnVuZHQgY2FrZSB0b3BwZWQgd2l0aCBwb3dkZXJlZCBzdWdhci4gU2ltcGxlIGJ1dCBkZWxpY2lvdXMhXCIpO1xuXG4gICAgICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKGRlc3NlcnRzSDIpO1xuICAgICAgICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChzb3VmZmxlKTtcbiAgICAgICAgZGVzc2VydHMuYXBwZW5kQ2hpbGQobWlsbGVGZXVsbGUpO1xuICAgICAgICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChidW5kdENha2UpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRlc3NlcnRzO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU1lbnVNYWluID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gTWFpbkVsZW1lbnRzLmNyZWF0ZU1haW4oKTtcblxuICAgICAgICBjb25zdCBzdGFydGVyc1NlY3Rpb24gPSBjcmVhdGVTdGFydGVyc1NlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgZW50cmVlc1NlY3Rpb24gPSBjcmVhdGVFbnRyZWVzU2VjdGlvbigpO1xuICAgICAgICBjb25zdCBkZXNzZXJ0c1NlY3Rpb24gPSBjcmVhdGVEZXNzZXJ0c1NlY3Rpb24oKTtcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHN0YXJ0ZXJzU2VjdGlvbik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZW50cmVlc1NlY3Rpb24pO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRlc3NlcnRzU2VjdGlvbik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVNZW51SGVhZGVyLCBjcmVhdGVNZW51TWFpbiB9O1xuXG59KSgpO1xuXG5cbmNvbnN0IE1lbnUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyID0gTWVudUVsZW1lbnRzLmNyZWF0ZU1lbnVIZWFkZXIoKTtcbiAgICBjb25zdCBtZW51TWFpbiA9IE1lbnVFbGVtZW50cy5jcmVhdGVNZW51TWFpbigpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVNYWluKTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgeyBNYWluRWxlbWVudHMsIE90aGVyRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50cy1idWlsZGVyXCI7XG5pbXBvcnQgR3VzdGVhdSBmcm9tIFwiLi9pbWdzL2d1c3RlYXVzLnBuZ1wiO1xuaW1wb3J0IEFsZnJlZG8gZnJvbSBcIi4vaW1ncy9hbGZyZWRvLWxpbmd1aW5pLnBuZ1wiO1xuaW1wb3J0IFJlbXkgZnJvbSBcIi4vaW1ncy9yZW15LnBuZ1wiO1xuaW1wb3J0IEVnbyBmcm9tIFwiLi9pbWdzL2FudG9uLWVnby5wbmdcIjtcblxuY29uc3QgUGFnZUVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVIZWFkZXJTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBNYWluRWxlbWVudHMuY3JlYXRlSGVhZGVyKCk7XG5cbiAgICAgICAgLy8gY29uc3QgcmVzdGF1cmFudExvZ28gPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUltYWdlKEd1c3RlYXUpO1xuICAgICAgICAvLyBjb25zdCBsb2dvV3JhcHBlciA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwibG9nby1jb250YWluZXJcIik7XG4gICAgICAgIC8vIHJlc3RhdXJhbnRMb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ3VzdGVhdS1sb2dvXCIpO1xuICAgICAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDEoXCJHdXN0ZWF1J3NcIik7XG4gICAgICAgIFxuICAgICAgICAvLyBsb2dvV3JhcHBlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TG9nbyk7XG4gICAgICAgIC8vIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvV3JhcHBlcik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVDaGVmU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlZnNTZWN0aW9uID0gTWFpbkVsZW1lbnRzLmNyZWF0ZVNlY3Rpb24oXCJjaGVmc1wiKTtcbiAgICAgICAgY29uc3QgY2hlZnNIMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDIoXCJNZWV0IHRoZSBDaGVmc1wiKTtcbiAgICAgICAgY29uc3QgY2hlZnNDb250YWluZXIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcImNoZWZzLWluZm9cIik7XG4gICAgXG4gICAgICAgIGNvbnN0IGFsZnJlZG9EaXYgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcImFsZnJlZG9cIik7XG4gICAgICAgIGNvbnN0IGFsZnJlZG9Db250YWluZXIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcImFsZnJlZG8tY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBhbGZyZWRvSW1nID0gT3RoZXJFbGVtZW50cy5jcmVhdGVJbWFnZShBbGZyZWRvKTtcbiAgICAgICAgYWxmcmVkb0ltZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFsZnJlZG8taW1nXCIpO1xuICAgICAgICBjb25zdCBhbGZyZWRvTmFtZVBhcmEgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZVBhcmEoXCJBbGZyZWRvIExpbmd1aW5pXCIpO1xuICAgIFxuICAgICAgICBjb25zdCByZW15RGl2ID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJyZW15XCIpO1xuICAgICAgICBjb25zdCByZW15Q29udGFpbmVyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJyZW15LWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgcmVteUltZyA9IE90aGVyRWxlbWVudHMuY3JlYXRlSW1hZ2UoUmVteSk7XG4gICAgICAgIHJlbXlJbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZW15LWltZ1wiKTtcbiAgICAgICAgY29uc3QgcmVteU5hbWVQYXJhID0gT3RoZXJFbGVtZW50cy5jcmVhdGVQYXJhKFwiUmVteVwiKTtcbiAgICBcbiAgICAgICAgYWxmcmVkb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhbGZyZWRvSW1nKTtcbiAgICAgICAgYWxmcmVkb0Rpdi5hcHBlbmRDaGlsZChhbGZyZWRvQ29udGFpbmVyKTtcbiAgICAgICAgYWxmcmVkb0Rpdi5hcHBlbmRDaGlsZChhbGZyZWRvTmFtZVBhcmEpO1xuICAgICAgICByZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbXlJbWcpO1xuICAgICAgICByZW15RGl2LmFwcGVuZENoaWxkKHJlbXlDb250YWluZXIpO1xuICAgICAgICByZW15RGl2LmFwcGVuZENoaWxkKHJlbXlOYW1lUGFyYSk7XG5cbiAgICAgICAgY2hlZnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxmcmVkb0Rpdik7XG4gICAgICAgIGNoZWZzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbXlEaXYpO1xuXG4gICAgICAgIGNoZWZzU2VjdGlvbi5hcHBlbmRDaGlsZChjaGVmc0gyKTtcbiAgICAgICAgY2hlZnNTZWN0aW9uLmFwcGVuZENoaWxkKGNoZWZzQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gY2hlZnNTZWN0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVJldmlld1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldmlld3NTZWN0aW9uID0gTWFpbkVsZW1lbnRzLmNyZWF0ZVNlY3Rpb24oXCJyZXZpZXdzXCIpO1xuXG4gICAgICAgIGNvbnN0IHJldmlld3NIMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDIoXCJXaGF0IHRoZSBDcml0aWNzIFNheVwiKTtcbiAgICAgICAgY29uc3QgcmV2aWV3c0NvbnRhaW5lciA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwicmV2aWV3cy1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGVnb0RpdiA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiZWdvXCIpO1xuICAgICAgICBjb25zdCBlZ29Db250YWluZXIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcImVnby1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGVnb0ltZyA9IE90aGVyRWxlbWVudHMuY3JlYXRlSW1hZ2UoRWdvKTtcbiAgICAgICAgZWdvSW1nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWdvLWltZ1wiKTtcbiAgICAgICAgY29uc3QgZWdvTmFtZVBhcmEgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZVBhcmEoXCJBbnRvbiBFZ29cIik7XG4gICAgICAgIGNvbnN0IGVnb1JldmlldyA9IGBcIkkgZXhwZXJpZW5jZWQgc29tZXRoaW5nIG5ldzogYW4gZXh0cmFvcmRpbmFyeSBtZWFsIGZyb20gYSBzaW5ndWxhcmx5IHVuZXhwZWN0ZWQgc291cmNlLiBbLi4uXSBJdCBpcyBkaWZmaWN1bHQgdG8gaW1hZ2luZSBtb3JlIGh1bWJsZSBvcmlnaW5zIHRoYW4gdGhvc2Ugb2YgdGhlIGdlbml1cyBub3cgY29va2luZyBhdCBHdXN0ZWF1J3Mgd2hvIGlzLCBpbiB0aGlzIGNyaXRpYydzIG9waW5pb24sIG5vdGhpbmcgbGVzcyB0aGFuIHRoZSBmaW5lc3QgY2hlZiBpbiBGcmFuY2UuIEkgd2lsbCBiZSByZXR1cm5pbmcgdG8gR3VzdGVhdSdzIHNvb24sIGh1bmdyeSBmb3IgbW9yZS5cImA7XG4gICAgICAgIGNvbnN0IHJldmlld1NwYW4gPSBPdGhlckVsZW1lbnRzLmNyZWF0ZVNwYW4oZWdvUmV2aWV3KTtcbiAgICAgICAgcmV2aWV3U3Bhbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVnby1yZXZpZXdcIilcblxuICAgICAgICByZXZpZXdzU2VjdGlvbi5hcHBlbmRDaGlsZChyZXZpZXdzSDIpO1xuICAgICAgICBlZ29Db250YWluZXIuYXBwZW5kQ2hpbGQoZWdvSW1nKTtcbiAgICAgICAgZWdvRGl2LmFwcGVuZENoaWxkKGVnb0NvbnRhaW5lcik7XG4gICAgICAgIGVnb0Rpdi5hcHBlbmRDaGlsZChlZ29OYW1lUGFyYSk7XG4gICAgICAgIHJldmlld3NDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3U3Bhbik7XG4gICAgICAgIHJldmlld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZWdvRGl2KTtcbiAgICAgICAgcmV2aWV3c1NlY3Rpb24uYXBwZW5kQ2hpbGQocmV2aWV3c0NvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHJldmlld3NTZWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUhlYWRlclNlY3Rpb24sIGNyZWF0ZUNoZWZTZWN0aW9uLCBjcmVhdGVSZXZpZXdTZWN0aW9uIH07XG59KSgpO1xuXG5jb25zdCBQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gUGFnZUVsZW1lbnRzLmNyZWF0ZUhlYWRlclNlY3Rpb24oKTtcbiAgICBjb25zdCBtYWluID0gTWFpbkVsZW1lbnRzLmNyZWF0ZU1haW4oKTtcbiAgICBjb25zdCBjaGVmc01haW4gPSBQYWdlRWxlbWVudHMuY3JlYXRlQ2hlZlNlY3Rpb24oKTtcbiAgICBjb25zdCByZXZpZXdzTWFpbiA9IFBhZ2VFbGVtZW50cy5jcmVhdGVSZXZpZXdTZWN0aW9uKCk7XG4gICAgXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjaGVmc01haW4pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocmV2aWV3c01haW4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IENyZWF0ZVBhZ2UgPSAoKCkgPT4ge1xuICAgIFBhZ2U7XG4gICAgTWVudTtcbiAgICBDb250YWN0O1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==