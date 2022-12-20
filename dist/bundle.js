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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-bg-clr: rgb(19, 27, 54);\n    --img-bg-clr: rgba(78, 16, 59, 0.5);\n    --font-clr: rgb(238, 173, 14);\n\n}\n\nbody {\n    background: var(--main-bg-clr);\n    color: var(--font-clr);\n}\n\nh1, h2, h3 {\n    text-align: center;\n}\n\n.chefs-info,\n.reviews-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n}\n\n.alfredo,\n.remy,\n.ego {\n    text-align: center;\n}\n\n.alfredo-container,\n.remy-container,\n.ego-container {\n    height: 150px;\n    width: 150px;\n    background-color: var(--img-bg-clr);\n    border-radius: 50%;\n\n    overflow: hidden;\n}\n\n#alfredo-img {\n    height: 350px;\n    transform: translateX(-22%) translateY(-5%);\n}\n\n#remy-img {\n    height: 250px;\n    transform: translateX(-40%) translateY(5%);\n}\n\n#ego-img {\n    height: 250px;\n    transform: translateX(-18%);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,mCAAmC;IACnC,6BAA6B;;AAEjC;;AAEA;IACI,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;;;IAGI,kBAAkB;AACtB;;AAEA;;;IAGI,aAAa;IACb,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;;IAElB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,2BAA2B;AAC/B","sourcesContent":[":root {\n    --main-bg-clr: rgb(19, 27, 54);\n    --img-bg-clr: rgba(78, 16, 59, 0.5);\n    --font-clr: rgb(238, 173, 14);\n\n}\n\nbody {\n    background: var(--main-bg-clr);\n    color: var(--font-clr);\n}\n\nh1, h2, h3 {\n    text-align: center;\n}\n\n.chefs-info,\n.reviews-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n}\n\n.alfredo,\n.remy,\n.ego {\n    text-align: center;\n}\n\n.alfredo-container,\n.remy-container,\n.ego-container {\n    height: 150px;\n    width: 150px;\n    background-color: var(--img-bg-clr);\n    border-radius: 50%;\n\n    overflow: hidden;\n}\n\n#alfredo-img {\n    height: 350px;\n    transform: translateX(-22%) translateY(-5%);\n}\n\n#remy-img {\n    height: 250px;\n    transform: translateX(-40%) translateY(5%);\n}\n\n#ego-img {\n    height: 250px;\n    transform: translateX(-18%);\n}\n"],"sourceRoot":""}]);
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
        const egoReview = "I experienced something new: an extraordinary meal from a singularly unexpected source. [...] It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more.";
        const reviewSpan = _elements_builder__WEBPACK_IMPORTED_MODULE_0__.OtherElements.createSpan(egoReview);

        reviewsSection.appendChild(reviewsH2);
        egoContainer.appendChild(egoImg);
        egoDiv.appendChild(egoContainer);
        egoDiv.appendChild(egoNamePara);
        reviewsContainer.appendChild(egoDiv);
        reviewsContainer.appendChild(reviewSpan);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7QUFDTDtBQUNNO0FBQ1g7O0FBRXJCO0FBQ0EsSUFBSSxrREFBSTtBQUNSLElBQUksNkNBQUk7QUFDUixJQUFJLGdEQUFPO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZWxlbWVudHMtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1iZy1jbHI6IHJnYigxOSwgMjcsIDU0KTtcXG4gICAgLS1pbWctYmctY2xyOiByZ2JhKDc4LCAxNiwgNTksIDAuNSk7XFxuICAgIC0tZm9udC1jbHI6IHJnYigyMzgsIDE3MywgMTQpO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jbHIpO1xcbn1cXG5cXG5oMSwgaDIsIGgzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2hlZnMtaW5mbyxcXG4ucmV2aWV3cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uYWxmcmVkbyxcXG4ucmVteSxcXG4uZWdvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWxmcmVkby1jb250YWluZXIsXFxuLnJlbXktY29udGFpbmVyLFxcbi5lZ28tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWctYmctY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jYWxmcmVkby1pbWcge1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyJSkgdHJhbnNsYXRlWSgtNSUpO1xcbn1cXG5cXG4jcmVteS1pbWcge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSkgdHJhbnNsYXRlWSg1JSk7XFxufVxcblxcbiNlZ28taW1nIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xOCUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7OztJQUdJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsa0JBQWtCOztJQUVsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1haW4tYmctY2xyOiByZ2IoMTksIDI3LCA1NCk7XFxuICAgIC0taW1nLWJnLWNscjogcmdiYSg3OCwgMTYsIDU5LCAwLjUpO1xcbiAgICAtLWZvbnQtY2xyOiByZ2IoMjM4LCAxNzMsIDE0KTtcXG5cXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmctY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY2xyKTtcXG59XFxuXFxuaDEsIGgyLCBoMyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNoZWZzLWluZm8sXFxuLnJldmlld3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLmFsZnJlZG8sXFxuLnJlbXksXFxuLmVnbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFsZnJlZG8tY29udGFpbmVyLFxcbi5yZW15LWNvbnRhaW5lcixcXG4uZWdvLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1nLWJnLWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2FsZnJlZG8taW1nIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMiUpIHRyYW5zbGF0ZVkoLTUlKTtcXG59XFxuXFxuI3JlbXktaW1nIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MCUpIHRyYW5zbGF0ZVkoNSUpO1xcbn1cXG5cXG4jZWdvLWltZyB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTglKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5pbXBvcnQgeyBNYWluRWxlbWVudHMsIE90aGVyRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50cy1idWlsZGVyXCI7XG5cbmNvbnN0IENvbnRhY3RFbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlQ29udGFjdEhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gTWFpbkVsZW1lbnRzLmNyZWF0ZUhlYWRlcigpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGFjdEgxID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMShcIkNvbnRhY3QgVXNcIik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0SDEpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQ29udGFjdE1haW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBNYWluRWxlbWVudHMuY3JlYXRlTWFpbigpO1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJjb250YWN0LWluZm9cIik7XG4gICAgXG4gICAgICAgIGNvbnN0IGNvbnRhY3RQYXJhID0gT3RoZXJFbGVtZW50cy5jcmVhdGVQYXJhKFwiV2UgbG9vayBmb3J3YXJkIHRvIHNlcnZpbmcgeW91LiBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIG9yIHdvdWxkIGxpa2UgdG8gYm9vayBhIHJlc2VydmF0aW9uLCBwbGVhc2UgcmVhY2ggb3V0IHRvIHVzLlwiKVxuICAgICAgICBjb25zdCBjb250YWN0UGhvbmUgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZVBhcmEoXCIxMTEtMTExLTExMTFcIik7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RFbWFpbCA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShcImluZm9AZ3VzdGVhdXMuY29tXCIpO1xuXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBhcmEpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZSk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEVtYWlsKTtcbiAgICAgICAgbWFpbi5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG4gICAgXG4gICAgICAgIHJldHVybiBtYWluO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUNvbnRhY3RIZWFkZXIsIGNyZWF0ZUNvbnRhY3RNYWluIH07XG5cbn0pKCk7XG5cbmNvbnN0IENvbnRhY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBjb250YWN0SGVhZGVyID0gQ29udGFjdEVsZW1lbnRzLmNyZWF0ZUNvbnRhY3RIZWFkZXIoKTtcbiAgICBjb25zdCBjb250YWN0TWFpbiA9IENvbnRhY3RFbGVtZW50cy5jcmVhdGVDb250YWN0TWFpbigpO1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0TWFpbik7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyIsImNvbnN0IE1haW5FbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgICAgICByZXR1cm4gbmV3SGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICAgICAgcmV0dXJuIG5ld01haW47XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU2VjdGlvbiA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBuZXdTZWN0aW9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ld1NlY3Rpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlSGVhZGVyLCBjcmVhdGVNYWluLCBjcmVhdGVTZWN0aW9uIH1cbn0pKCk7XG5cbmNvbnN0IE90aGVyRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUgxID0gKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIG5ld0gxLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG5ld0gxO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUgyID0gKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIG5ld0gyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG5ld0gyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUgzID0gKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5ld0gzLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG5ld0gzO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZURpdiA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ld0RpdjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJbWFnZSA9IChzcmMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBuZXdJbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIHJldHVybiBuZXdJbWFnZTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQYXJhID0gKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuZXdQYXJhLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIG5ld1BhcmE7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU3BhbiA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbmV3U3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdTcGFuO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUgxLCBjcmVhdGVIMiwgY3JlYXRlSDMsIGNyZWF0ZURpdixcbiAgICAgICAgY3JlYXRlSW1hZ2UsIGNyZWF0ZVBhcmEsIGNyZWF0ZVNwYW4gfVxufSkoKTtcblxuZXhwb3J0IHsgTWFpbkVsZW1lbnRzLCBPdGhlckVsZW1lbnRzIH07IiwiaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5pbXBvcnQgeyBNYWluRWxlbWVudHMsIE90aGVyRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50cy1idWlsZGVyXCI7XG5cbmNvbnN0IE1lbnVFbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlTWVudUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gTWFpbkVsZW1lbnRzLmNyZWF0ZUhlYWRlcigpO1xuICAgIFxuICAgICAgICBjb25zdCBtZW51SDEgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgxKFwiR3VzdGVhdSdzIE1lbnVcIik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51SDEpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTWVudURpc2ggPSAoZGlzaE5hbWUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0Rpc2ggPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcInNhbGFkXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGlzaFRpdGxlID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMyhkaXNoTmFtZSk7XG4gICAgICAgIGNvbnN0IGRpc2hEZXNjcmlwdGlvbiA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbmV3RGlzaC5hcHBlbmRDaGlsZChkaXNoVGl0bGUpO1xuICAgICAgICBuZXdEaXNoLmFwcGVuZENoaWxkKGRpc2hEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIG5ld0Rpc2g7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU3RhcnRlcnNTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydGVycyA9IE1haW5FbGVtZW50cy5jcmVhdGVTZWN0aW9uKFwic3RhcnRlcnNcIik7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRlcnNIMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDIoXCJTdGFydGVyc1wiKTtcbiAgICAgICAgY29uc3QgY2Flc2FyU2FsYWQgPSBjcmVhdGVNZW51RGlzaChcIkNhZXNhciBTYWxhZCB3aXRoIFNhbG1vblwiLFxuICAgICAgICBcIlBhbi1mcmllZCBzYWxtb24gc2VydmVkIG9uIGEgc2FsYWQgb2Ygcm9tYWluZSBsZXR0dWNlIHRvc3NlZCB3aXRoIGFuIG9saXZlIG9pbCBkcmVzc2luZywgZ3JhdGVkIGNoZWVzZSwgYW5kIHRvcHBlZCB3aXRoIGNyb3V0b25zLlwiKTtcbiAgICAgICAgY29uc3QgcGhlYXNhbnRDb25zb21tZSA9IGNyZWF0ZU1lbnVEaXNoKFwiUGhlYXNhbnQgQ29uc29tbcOpXCIsXG4gICAgICAgIFwiQSBjbGVhciBzb3VwIG1hZGUgZnJvbSBwaGVhc2FudCBtZWF0LlwiKTtcblxuICAgICAgICBzdGFydGVycy5hcHBlbmRDaGlsZChzdGFydGVyc0gyKTtcbiAgICAgICAgc3RhcnRlcnMuYXBwZW5kQ2hpbGQoY2Flc2FyU2FsYWQpO1xuICAgICAgICBzdGFydGVycy5hcHBlbmRDaGlsZChwaGVhc2FudENvbnNvbW1lKTtcblxuICAgICAgICByZXR1cm4gc3RhcnRlcnM7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRW50cmVlc1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJlZXMgPSBNYWluRWxlbWVudHMuY3JlYXRlU2VjdGlvbihcImVudHJlZXNcIik7XG5cbiAgICAgICAgY29uc3QgZW50cmVlc0gyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMihcIkVudHLDqWVzXCIpO1xuICAgICAgICBjb25zdCBzb2xlTWV1bmllcmUgPSBjcmVhdGVNZW51RGlzaChcIlNvbGUgTWV1bmnDqHJlXCIsXG4gICAgICAgIFwiQSBzb2xlIGZpbGV0IHRoYXQgaXMgbGlnaHRseSBicmVhZGVkIGluIHBsYWluIGZsb3VyIGFuZCBwYW4tZnJpZWQgaW4gYnV0dGVyLCB0aGVuIGxpZ2h0bHkgZmxhdm9yZWQgd2l0aCBsZW1vbiBhbmQgcGFyc2xleS5cIilcbiAgICAgICAgY29uc3Qgc2FsbW9uUm91bGFkZSA9IGNyZWF0ZU1lbnVEaXNoKFwiU291cy12aWRlIFNhbG1vbiBSb3VsYWRlXCIsIFxuICAgICAgICBcIkEgbmljZSBzYWxtb24gZmlsZXQgcm9sbGVkIHdpdGggbGVtb24gYW5kIGhlcmJzIGludG8gYSByb3VsYWRlLCBjb29rZWQgc291cy12aWRlLlwiKTtcbiAgICAgICAgY29uc3Qgc2VhcmVkU2NhbGxvcHMgPSBjcmVhdGVNZW51RGlzaChcIlNlYXJlZCBTY2FsbG9wcyB3aXRoIEJldXJyZSBCbGFuY1wiLFxuICAgICAgICBcIkZyZXNoIHNjYWxsb3BzIHNlYXJlZCBpbiBzZWFzb25lZCBidXR0ZXIgYW5kIG9saXZlIG9pbCwgd2l0aCBhIGRhc2ggb2YgQmV1cnJlIEJsYW5jLlwiKTtcbiAgICAgICAgY29uc3QgZmlsZXRNaWdub24gPSBjcmVhdGVNZW51RGlzaChcIkZpbGV0IE1pZ25vblwiLCBcbiAgICAgICAgXCJBbiA4IG96LiBmaWxldCBtaWdub24gc2VydmVkIHdpdGggYSBzaWRlIG9mIHN3ZWV0IHBvdGF0b2VzLCBwYW4tc2VhcmVkIG9uaW9ucyBhbmQgbXVzaHJvb21zLlwiKVxuXG4gICAgICAgIGVudHJlZXMuYXBwZW5kQ2hpbGQoZW50cmVlc0gyKTtcbiAgICAgICAgZW50cmVlcy5hcHBlbmRDaGlsZChzb2xlTWV1bmllcmUpO1xuICAgICAgICBlbnRyZWVzLmFwcGVuZENoaWxkKHNhbG1vblJvdWxhZGUpO1xuICAgICAgICBlbnRyZWVzLmFwcGVuZENoaWxkKHNlYXJlZFNjYWxsb3BzKTtcbiAgICAgICAgZW50cmVlcy5hcHBlbmRDaGlsZChmaWxldE1pZ25vbik7XG5cbiAgICAgICAgcmV0dXJuIGVudHJlZXM7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRGVzc2VydHNTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNzZXJ0cyA9IE1haW5FbGVtZW50cy5jcmVhdGVTZWN0aW9uKFwiZGVzc2VydHNcIik7XG5cbiAgICAgICAgY29uc3QgZGVzc2VydHNIMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDIoXCJEZXNzZXJ0c1wiKTtcbiAgICAgICAgY29uc3Qgc291ZmZsZSA9IGNyZWF0ZU1lbnVEaXNoKFwiR3VzdGVhdSdzIFNvdWZmbGVcIixcbiAgICAgICAgXCJBIGJha2VkIGVnZy1iYXNlZCBkZXNzZXJ0IHRoYXQncyBjcmlzcHkgb24gdGhlIG91dHNpZGUgYW5kIHNvZnQgYW5kIGZsdWZmeSBvbiB0aGUgaW5zaWRlLlwiKTtcbiAgICAgICAgY29uc3QgbWlsbGVGZXVsbGUgPSBjcmVhdGVNZW51RGlzaChcIk1pbGxlLUZldWxsZVwiLFxuICAgICAgICBcIkEgZGVsaWNhdGUgcGFzdHJ5IGNvbXBvc2VkIG9mIG11bHRpcGxlIGxheWVycyBvZiBidXR0ZXJ5IHBhc3RyeSwgZmlsbGVkIHdpdGggcmljaCBjdXN0YXJkIHBhc3RyeSBjcmVhbSBhbmQgdG9wcGVkIHdpdGggZ2xvc3N5IHJveWFsIGljaW5nLiBcIik7XG4gICAgICAgIGNvbnN0IGJ1bmR0Q2FrZSA9IGNyZWF0ZU1lbnVEaXNoKFwiRnJlbmNoIEJ1bmR0IENha2VcIixcbiAgICAgICAgXCJBIGNsYXNzaWMgdmFuaWxsYSBCdW5kdCBjYWtlIHRvcHBlZCB3aXRoIHBvd2RlcmVkIHN1Z2FyLiBTaW1wbGUgYnV0IGRlbGljaW91cyFcIik7XG5cbiAgICAgICAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoZGVzc2VydHNIMik7XG4gICAgICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKHNvdWZmbGUpO1xuICAgICAgICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChtaWxsZUZldWxsZSk7XG4gICAgICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKGJ1bmR0Q2FrZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGVzc2VydHM7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTWVudU1haW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBNYWluRWxlbWVudHMuY3JlYXRlTWFpbigpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ZXJzU2VjdGlvbiA9IGNyZWF0ZVN0YXJ0ZXJzU2VjdGlvbigpO1xuICAgICAgICBjb25zdCBlbnRyZWVzU2VjdGlvbiA9IGNyZWF0ZUVudHJlZXNTZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGRlc3NlcnRzU2VjdGlvbiA9IGNyZWF0ZURlc3NlcnRzU2VjdGlvbigpO1xuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc3RhcnRlcnNTZWN0aW9uKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChlbnRyZWVzU2VjdGlvbik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzc2VydHNTZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBtYWluO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZU1lbnVIZWFkZXIsIGNyZWF0ZU1lbnVNYWluIH07XG5cbn0pKCk7XG5cblxuY29uc3QgTWVudSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBNZW51RWxlbWVudHMuY3JlYXRlTWVudUhlYWRlcigpO1xuICAgIGNvbnN0IG1lbnVNYWluID0gTWVudUVsZW1lbnRzLmNyZWF0ZU1lbnVNYWluKCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudU1haW4pO1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51OyIsImltcG9ydCB7IE1haW5FbGVtZW50cywgT3RoZXJFbGVtZW50cyB9IGZyb20gXCIuL2VsZW1lbnRzLWJ1aWxkZXJcIjtcbmltcG9ydCBHdXN0ZWF1IGZyb20gXCIuL2ltZ3MvZ3VzdGVhdXMucG5nXCI7XG5pbXBvcnQgQWxmcmVkbyBmcm9tIFwiLi9pbWdzL2FsZnJlZG8tbGluZ3VpbmkucG5nXCI7XG5pbXBvcnQgUmVteSBmcm9tIFwiLi9pbWdzL3JlbXkucG5nXCI7XG5pbXBvcnQgRWdvIGZyb20gXCIuL2ltZ3MvYW50b24tZWdvLnBuZ1wiO1xuXG5jb25zdCBQYWdlRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUhlYWRlclNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IE1haW5FbGVtZW50cy5jcmVhdGVIZWFkZXIoKTtcblxuICAgICAgICAvLyBjb25zdCByZXN0YXVyYW50TG9nbyA9IE90aGVyRWxlbWVudHMuY3JlYXRlSW1hZ2UoR3VzdGVhdSk7XG4gICAgICAgIC8vIGNvbnN0IGxvZ29XcmFwcGVyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJsb2dvLWNvbnRhaW5lclwiKTtcbiAgICAgICAgLy8gcmVzdGF1cmFudExvZ28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJndXN0ZWF1LWxvZ29cIik7XG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMShcIkd1c3RlYXUnc1wiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGxvZ29XcmFwcGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRMb2dvKTtcbiAgICAgICAgLy8gaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29XcmFwcGVyKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNoZWZTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVmc1NlY3Rpb24gPSBNYWluRWxlbWVudHMuY3JlYXRlU2VjdGlvbihcImNoZWZzXCIpO1xuICAgICAgICBjb25zdCBjaGVmc0gyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMihcIk1lZXQgdGhlIENoZWZzXCIpO1xuICAgICAgICBjb25zdCBjaGVmc0NvbnRhaW5lciA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiY2hlZnMtaW5mb1wiKTtcbiAgICBcbiAgICAgICAgY29uc3QgYWxmcmVkb0RpdiA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiYWxmcmVkb1wiKTtcbiAgICAgICAgY29uc3QgYWxmcmVkb0NvbnRhaW5lciA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiYWxmcmVkby1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGFsZnJlZG9JbWcgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUltYWdlKEFsZnJlZG8pO1xuICAgICAgICBhbGZyZWRvSW1nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWxmcmVkby1pbWdcIik7XG4gICAgICAgIGNvbnN0IGFsZnJlZG9OYW1lUGFyYSA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShcIkFsZnJlZG8gTGluZ3VpbmlcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IHJlbXlEaXYgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcInJlbXlcIik7XG4gICAgICAgIGNvbnN0IHJlbXlDb250YWluZXIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcInJlbXktY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCByZW15SW1nID0gT3RoZXJFbGVtZW50cy5jcmVhdGVJbWFnZShSZW15KTtcbiAgICAgICAgcmVteUltZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlbXktaW1nXCIpO1xuICAgICAgICBjb25zdCByZW15TmFtZVBhcmEgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZVBhcmEoXCJSZW15XCIpO1xuICAgIFxuICAgICAgICBhbGZyZWRvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsZnJlZG9JbWcpO1xuICAgICAgICBhbGZyZWRvRGl2LmFwcGVuZENoaWxkKGFsZnJlZG9Db250YWluZXIpO1xuICAgICAgICBhbGZyZWRvRGl2LmFwcGVuZENoaWxkKGFsZnJlZG9OYW1lUGFyYSk7XG4gICAgICAgIHJlbXlDb250YWluZXIuYXBwZW5kQ2hpbGQocmVteUltZyk7XG4gICAgICAgIHJlbXlEaXYuYXBwZW5kQ2hpbGQocmVteUNvbnRhaW5lcik7XG4gICAgICAgIHJlbXlEaXYuYXBwZW5kQ2hpbGQocmVteU5hbWVQYXJhKTtcblxuICAgICAgICBjaGVmc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhbGZyZWRvRGl2KTtcbiAgICAgICAgY2hlZnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVteURpdik7XG5cbiAgICAgICAgY2hlZnNTZWN0aW9uLmFwcGVuZENoaWxkKGNoZWZzSDIpO1xuICAgICAgICBjaGVmc1NlY3Rpb24uYXBwZW5kQ2hpbGQoY2hlZnNDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBjaGVmc1NlY3Rpb247XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUmV2aWV3U2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmV2aWV3c1NlY3Rpb24gPSBNYWluRWxlbWVudHMuY3JlYXRlU2VjdGlvbihcInJldmlld3NcIik7XG5cbiAgICAgICAgY29uc3QgcmV2aWV3c0gyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMihcIldoYXQgdGhlIENyaXRpY3MgU2F5XCIpO1xuICAgICAgICBjb25zdCByZXZpZXdzQ29udGFpbmVyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJyZXZpZXdzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgZWdvRGl2ID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJlZ29cIik7XG4gICAgICAgIGNvbnN0IGVnb0NvbnRhaW5lciA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiZWdvLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgZWdvSW1nID0gT3RoZXJFbGVtZW50cy5jcmVhdGVJbWFnZShFZ28pO1xuICAgICAgICBlZ29JbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZ28taW1nXCIpO1xuICAgICAgICBjb25zdCBlZ29OYW1lUGFyYSA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShcIkFudG9uIEVnb1wiKTtcbiAgICAgICAgY29uc3QgZWdvUmV2aWV3ID0gXCJJIGV4cGVyaWVuY2VkIHNvbWV0aGluZyBuZXc6IGFuIGV4dHJhb3JkaW5hcnkgbWVhbCBmcm9tIGEgc2luZ3VsYXJseSB1bmV4cGVjdGVkIHNvdXJjZS4gWy4uLl0gSXQgaXMgZGlmZmljdWx0IHRvIGltYWdpbmUgbW9yZSBodW1ibGUgb3JpZ2lucyB0aGFuIHRob3NlIG9mIHRoZSBnZW5pdXMgbm93IGNvb2tpbmcgYXQgR3VzdGVhdSdzIHdobyBpcywgaW4gdGhpcyBjcml0aWMncyBvcGluaW9uLCBub3RoaW5nIGxlc3MgdGhhbiB0aGUgZmluZXN0IGNoZWYgaW4gRnJhbmNlLiBJIHdpbGwgYmUgcmV0dXJuaW5nIHRvIEd1c3RlYXUncyBzb29uLCBodW5ncnkgZm9yIG1vcmUuXCI7XG4gICAgICAgIGNvbnN0IHJldmlld1NwYW4gPSBPdGhlckVsZW1lbnRzLmNyZWF0ZVNwYW4oZWdvUmV2aWV3KTtcblxuICAgICAgICByZXZpZXdzU2VjdGlvbi5hcHBlbmRDaGlsZChyZXZpZXdzSDIpO1xuICAgICAgICBlZ29Db250YWluZXIuYXBwZW5kQ2hpbGQoZWdvSW1nKTtcbiAgICAgICAgZWdvRGl2LmFwcGVuZENoaWxkKGVnb0NvbnRhaW5lcik7XG4gICAgICAgIGVnb0Rpdi5hcHBlbmRDaGlsZChlZ29OYW1lUGFyYSk7XG4gICAgICAgIHJldmlld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZWdvRGl2KTtcbiAgICAgICAgcmV2aWV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdTcGFuKTtcbiAgICAgICAgcmV2aWV3c1NlY3Rpb24uYXBwZW5kQ2hpbGQocmV2aWV3c0NvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHJldmlld3NTZWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUhlYWRlclNlY3Rpb24sIGNyZWF0ZUNoZWZTZWN0aW9uLCBjcmVhdGVSZXZpZXdTZWN0aW9uIH07XG59KSgpO1xuXG5jb25zdCBQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gUGFnZUVsZW1lbnRzLmNyZWF0ZUhlYWRlclNlY3Rpb24oKTtcbiAgICBjb25zdCBtYWluID0gTWFpbkVsZW1lbnRzLmNyZWF0ZU1haW4oKTtcbiAgICBjb25zdCBjaGVmc01haW4gPSBQYWdlRWxlbWVudHMuY3JlYXRlQ2hlZlNlY3Rpb24oKTtcbiAgICBjb25zdCByZXZpZXdzTWFpbiA9IFBhZ2VFbGVtZW50cy5jcmVhdGVSZXZpZXdTZWN0aW9uKCk7XG4gICAgXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjaGVmc01haW4pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocmV2aWV3c01haW4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IENyZWF0ZVBhZ2UgPSAoKCkgPT4ge1xuICAgIFBhZ2U7XG4gICAgTWVudTtcbiAgICBDb250YWN0O1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==