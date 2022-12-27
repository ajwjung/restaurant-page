/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSwyQkFBMkIsdUVBQXdCO0FBQ25EO0FBQ0EsdUJBQXVCLHdFQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYixDQUFDOztBQUVELGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNHdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNMO0FBQ007QUFDdkI7O0FBRXJCO0FBQ0E7O0FBRUEsSUFBSSxxRUFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRUFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdFQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0VBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUwsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvZWxlbWVudHMtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1haW5FbGVtZW50cywgT3RoZXJFbGVtZW50cywgVGFicyB9IGZyb20gXCIuL2VsZW1lbnRzLWJ1aWxkZXJcIjtcblxuY29uc3QgQ29udGFjdEVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVDb250YWN0SGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBNYWluRWxlbWVudHMuY3JlYXRlSGVhZGVyKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250YWN0TmF2QmFyID0gVGFicy5jcmVhdGVUYWJTZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGhlYWRlckxpbmUgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUxpbmUoXCJoZWFkZXItbGluZVwiKTtcbiAgICAgICAgY29uc3QgY29udGFjdEgxID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMShcIkNvbnRhY3QgVXNcIik7XG5cbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3ROYXZCYXIpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGluZSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0SDEpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVDb250YWN0TWFpbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IE1haW5FbGVtZW50cy5jcmVhdGVNYWluKCk7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcImNvbnRhY3QtaW5mb1wiKTtcbiAgICBcbiAgICAgICAgY29uc3QgY29udGFjdFBhcmExID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMyhcIldlIGxvb2sgZm9yd2FyZCB0byBzZXJ2aW5nIHlvdS5cIik7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RQYXJhMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShcIklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3Igd291bGQgbGlrZSB0byBib29rIGEgcmVzZXJ2YXRpb24sIHBsZWFzZSByZWFjaCBvdXQgdG8gdXMuXCIpXG4gICAgICAgIGNvbnN0IGNvbnRhY3RQaG9uZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShcIjExMS0xMTEtMTExMVwiKTtcbiAgICAgICAgY29uc3QgY29udGFjdEVtYWlsID0gT3RoZXJFbGVtZW50cy5jcmVhdGVQYXJhKFwiaW5mb0BndXN0ZWF1cy5jb21cIik7XG5cbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0UGFyYTEpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RQYXJhMik7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuICAgICAgICBtYWluLmFwcGVuZChtYWluQ29udGFpbmVyKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIG1haW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlQ29udGFjdEhlYWRlciwgY3JlYXRlQ29udGFjdE1haW4gfTtcblxufSkoKTtcblxuY29uc3QgQ29udGFjdFBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlckNvbnRhY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBDb250YWN0RWxlbWVudHMuY3JlYXRlQ29udGFjdEhlYWRlcigpO1xuICAgICAgICBjb25zdCBkaXZpZGVyTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImRpdmlkZXJcIik7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RNYWluID0gQ29udGFjdEVsZW1lbnRzLmNyZWF0ZUNvbnRhY3RNYWluKCk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RGb290ZXIgPSBNYWluRWxlbWVudHMuY3JlYXRlRm9vdGVyKCk7XG4gICAgICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdmlkZXJMaW5lKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0TWFpbik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdEZvb3Rlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVuZGVyQ29udGFjdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFBhZ2U7IiwiY29uc3QgTWFpbkVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgICAgIHJldHVybiBuZXdIZWFkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgICAgICByZXR1cm4gbmV3TmF2O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICAgICAgcmV0dXJuIG5ld01haW47XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU2VjdGlvbiA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBuZXdTZWN0aW9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ld1NlY3Rpb247XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGZvb3RlckxpbmUgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUxpbmUoXCJmb290ZXItbGluZVwiKTtcbiAgICAgICAgY29uc3Qgbm90ZUNvbnRhaW5lciA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgZm9vdGVyTm90ZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShcIkNvcHlyaWdodCDCqSAyMDIyIEFteSBKdW5nXCIpO1xuXG4gICAgICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTm90ZSk7XG4gICAgICAgIG5ld0Zvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5lKTtcbiAgICAgICAgbmV3Rm9vdGVyLmFwcGVuZENoaWxkKG5vdGVDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBuZXdGb290ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlSGVhZGVyLCBjcmVhdGVOYXYsIGNyZWF0ZU1haW4sIGNyZWF0ZVNlY3Rpb24sIGNyZWF0ZUZvb3RlciB9XG59KSgpO1xuXG5jb25zdCBPdGhlckVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVIMSA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBuZXdIMS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdIMTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVIMiA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBuZXdIMi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdIMjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVIMyA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuZXdIMy50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdIMztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVEaXYgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBuZXdEaXY7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlSW1hZ2UgPSAoc3JjKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICByZXR1cm4gbmV3SW1hZ2U7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUGFyYSA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbmV3UGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBuZXdQYXJhO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVNwYW4gPSAodGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG5ld1NwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gbmV3U3BhbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVMaW5lID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICAgICAgICBuZXdMaW5lLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ld0xpbmU7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQnRuID0gKHRleHQsIGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5ld0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBuZXdCdG4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBuZXdCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICByZXR1cm4gbmV3QnRuO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUgxLCBjcmVhdGVIMiwgY3JlYXRlSDMsIGNyZWF0ZURpdiwgY3JlYXRlSW1hZ2UsXG4gICAgICAgIGNyZWF0ZVBhcmEsIGNyZWF0ZVNwYW4sIGNyZWF0ZUxpbmUsIGNyZWF0ZUJ0biB9XG59KSgpO1xuXG5jb25zdCBUYWJzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVIb21lQnRuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBob21lVGFiRGl2ID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJidG4tY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBob21lVGFiID0gT3RoZXJFbGVtZW50cy5jcmVhdGVCdG4oXCJIb21lXCIsIFwiaG9tZS10YWJcIik7XG4gICAgICAgIGhvbWVUYWJEaXYuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG5cbiAgICAgICAgcmV0dXJuIGhvbWVUYWJEaXY7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTWVudUJ0biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudVRhYkRpdiA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwiYnRuLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgbWVudVRhYiA9IE90aGVyRWxlbWVudHMuY3JlYXRlQnRuKFwiTWVudVwiLCBcIm1lbnUtdGFiXCIpO1xuICAgICAgICBtZW51VGFiRGl2LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gICAgICAgIHJldHVybiBtZW51VGFiRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3RCdG4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RUYWJEaXYgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcImJ0bi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUJ0bihcIkNvbnRhY3QgVXNcIiwgXCJjb250YWN0LXRhYlwiKTtcbiAgICAgICAgY29udGFjdFRhYkRpdi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICAgICAgICByZXR1cm4gY29udGFjdFRhYkRpdjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUYWJTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYXZTZWN0aW9uID0gTWFpbkVsZW1lbnRzLmNyZWF0ZU5hdihcInRhYnNcIik7XG5cbiAgICAgICAgY29uc3QgaG9tZVRhYiA9IGNyZWF0ZUhvbWVCdG4oKTtcbiAgICAgICAgY29uc3QgbWVudVRhYiA9IGNyZWF0ZU1lbnVCdG4oKTtcbiAgICAgICAgY29uc3QgY29udGFjdFRhYiA9IGNyZWF0ZUNvbnRhY3RCdG4oKTtcblxuICAgICAgICBuYXZTZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICAgICAgICBuYXZTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICAgICAgICBuYXZTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG4gICAgICAgIHJldHVybiBuYXZTZWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZVRhYlNlY3Rpb24gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IE1haW5FbGVtZW50cywgT3RoZXJFbGVtZW50cywgVGFicyB9OyIsImltcG9ydCB7IE1haW5FbGVtZW50cywgT3RoZXJFbGVtZW50cywgVGFicyB9IGZyb20gXCIuL2VsZW1lbnRzLWJ1aWxkZXJcIjtcblxuY29uc3QgTWVudUVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVNZW51SGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBNYWluRWxlbWVudHMuY3JlYXRlSGVhZGVyKCk7XG4gICAgXG4gICAgICAgIGNvbnN0IG1lbnVOYXZCYXIgPSBUYWJzLmNyZWF0ZVRhYlNlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgaGVhZGVyTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImhlYWRlci1saW5lXCIpO1xuICAgICAgICBjb25zdCBtZW51SDEgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgxKFwiR3VzdGVhdSdzIE1lbnVcIik7XG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudU5hdkJhcik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMaW5lKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVIMSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNZW51RGlzaCA9IChkaXNoTmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGlzaCA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KFwibWVudS1pdGVtXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGlzaFRpdGxlID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMyhkaXNoTmFtZSk7XG4gICAgICAgIGNvbnN0IGRpc2hEZXNjcmlwdGlvbiA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbmV3RGlzaC5hcHBlbmRDaGlsZChkaXNoVGl0bGUpO1xuICAgICAgICBuZXdEaXNoLmFwcGVuZENoaWxkKGRpc2hEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIG5ld0Rpc2g7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU3RhcnRlcnNTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydGVycyA9IE1haW5FbGVtZW50cy5jcmVhdGVTZWN0aW9uKFwic3RhcnRlcnNcIik7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRlcnNIMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDIoXCJTdGFydGVyc1wiKTtcbiAgICAgICAgY29uc3QgY2Flc2FyU2FsYWQgPSBjcmVhdGVNZW51RGlzaChcIkNhZXNhciBTYWxhZCB3aXRoIFNhbG1vblwiLFxuICAgICAgICBcIlBhbi1mcmllZCBzYWxtb24gc2VydmVkIG9uIGEgc2FsYWQgb2Ygcm9tYWluZSBsZXR0dWNlIHRvc3NlZCB3aXRoIGFuIG9saXZlIG9pbCBkcmVzc2luZywgZ3JhdGVkIGNoZWVzZSwgYW5kIHRvcHBlZCB3aXRoIGNyb3V0b25zLlwiKTtcbiAgICAgICAgY29uc3QgcGhlYXNhbnRDb25zb21tZSA9IGNyZWF0ZU1lbnVEaXNoKFwiUGhlYXNhbnQgQ29uc29tbcOpXCIsXG4gICAgICAgIFwiQSBjbGVhciBzb3VwIG1hZGUgZnJvbSBwaGVhc2FudCBtZWF0LlwiKTtcblxuICAgICAgICBzdGFydGVycy5hcHBlbmRDaGlsZChzdGFydGVyc0gyKTtcbiAgICAgICAgc3RhcnRlcnMuYXBwZW5kQ2hpbGQoY2Flc2FyU2FsYWQpO1xuICAgICAgICBzdGFydGVycy5hcHBlbmRDaGlsZChwaGVhc2FudENvbnNvbW1lKTtcblxuICAgICAgICByZXR1cm4gc3RhcnRlcnM7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRW50cmVlc1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJlZXMgPSBNYWluRWxlbWVudHMuY3JlYXRlU2VjdGlvbihcImVudHJlZXNcIik7XG5cbiAgICAgICAgY29uc3QgZW50cmVlc0gyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMihcIkVudHLDqWVzXCIpO1xuICAgICAgICBjb25zdCBzb2xlTWV1bmllcmUgPSBjcmVhdGVNZW51RGlzaChcIlNvbGUgTWV1bmnDqHJlXCIsXG4gICAgICAgIFwiQSBzb2xlIGZpbGV0IHRoYXQgaXMgbGlnaHRseSBicmVhZGVkIGluIHBsYWluIGZsb3VyIGFuZCBwYW4tZnJpZWQgaW4gYnV0dGVyLCB0aGVuIGxpZ2h0bHkgZmxhdm9yZWQgd2l0aCBsZW1vbiBhbmQgcGFyc2xleS5cIilcbiAgICAgICAgY29uc3Qgc2FsbW9uUm91bGFkZSA9IGNyZWF0ZU1lbnVEaXNoKFwiU291cy12aWRlIFNhbG1vbiBSb3VsYWRlXCIsIFxuICAgICAgICBcIkEgbmljZSBzYWxtb24gZmlsZXQgcm9sbGVkIHdpdGggbGVtb24gYW5kIGhlcmJzIGludG8gYSByb3VsYWRlLCBjb29rZWQgc291cy12aWRlLlwiKTtcbiAgICAgICAgY29uc3Qgc2VhcmVkU2NhbGxvcHMgPSBjcmVhdGVNZW51RGlzaChcIlNlYXJlZCBTY2FsbG9wcyB3aXRoIEJldXJyZSBCbGFuY1wiLFxuICAgICAgICBcIkZyZXNoIHNjYWxsb3BzIHNlYXJlZCBpbiBzZWFzb25lZCBidXR0ZXIgYW5kIG9saXZlIG9pbCwgd2l0aCBhIGRhc2ggb2YgQmV1cnJlIEJsYW5jLlwiKTtcbiAgICAgICAgY29uc3QgZmlsZXRNaWdub24gPSBjcmVhdGVNZW51RGlzaChcIkZpbGV0IE1pZ25vblwiLCBcbiAgICAgICAgXCJBbiA4IG96LiBmaWxldCBtaWdub24gc2VydmVkIHdpdGggYSBzaWRlIG9mIHN3ZWV0IHBvdGF0b2VzLCBwYW4tc2VhcmVkIG9uaW9ucyBhbmQgbXVzaHJvb21zLlwiKVxuXG4gICAgICAgIGVudHJlZXMuYXBwZW5kQ2hpbGQoZW50cmVlc0gyKTtcbiAgICAgICAgZW50cmVlcy5hcHBlbmRDaGlsZChzb2xlTWV1bmllcmUpO1xuICAgICAgICBlbnRyZWVzLmFwcGVuZENoaWxkKHNhbG1vblJvdWxhZGUpO1xuICAgICAgICBlbnRyZWVzLmFwcGVuZENoaWxkKHNlYXJlZFNjYWxsb3BzKTtcbiAgICAgICAgZW50cmVlcy5hcHBlbmRDaGlsZChmaWxldE1pZ25vbik7XG5cbiAgICAgICAgcmV0dXJuIGVudHJlZXM7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRGVzc2VydHNTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNzZXJ0cyA9IE1haW5FbGVtZW50cy5jcmVhdGVTZWN0aW9uKFwiZGVzc2VydHNcIik7XG5cbiAgICAgICAgY29uc3QgZGVzc2VydHNIMiA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDIoXCJEZXNzZXJ0c1wiKTtcbiAgICAgICAgY29uc3Qgc291ZmZsZSA9IGNyZWF0ZU1lbnVEaXNoKFwiR3VzdGVhdSdzIFNvdWZmbGVcIixcbiAgICAgICAgXCJBIGJha2VkIGVnZy1iYXNlZCBkZXNzZXJ0IHRoYXQncyBjcmlzcHkgb24gdGhlIG91dHNpZGUgYW5kIHNvZnQgYW5kIGZsdWZmeSBvbiB0aGUgaW5zaWRlLlwiKTtcbiAgICAgICAgY29uc3QgbWlsbGVGZXVsbGUgPSBjcmVhdGVNZW51RGlzaChcIk1pbGxlLUZldWxsZVwiLFxuICAgICAgICBcIkEgZGVsaWNhdGUgcGFzdHJ5IGNvbXBvc2VkIG9mIG11bHRpcGxlIGxheWVycyBvZiBidXR0ZXJ5IHBhc3RyeSwgZmlsbGVkIHdpdGggcmljaCBjdXN0YXJkIHBhc3RyeSBjcmVhbSBhbmQgdG9wcGVkIHdpdGggZ2xvc3N5IHJveWFsIGljaW5nLiBcIik7XG4gICAgICAgIGNvbnN0IGJ1bmR0Q2FrZSA9IGNyZWF0ZU1lbnVEaXNoKFwiRnJlbmNoIEJ1bmR0IENha2VcIixcbiAgICAgICAgXCJBIGNsYXNzaWMgdmFuaWxsYSBCdW5kdCBjYWtlIHRvcHBlZCB3aXRoIHBvd2RlcmVkIHN1Z2FyLiBTaW1wbGUgYnV0IGRlbGljaW91cyFcIik7XG5cbiAgICAgICAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoZGVzc2VydHNIMik7XG4gICAgICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKHNvdWZmbGUpO1xuICAgICAgICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChtaWxsZUZldWxsZSk7XG4gICAgICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKGJ1bmR0Q2FrZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGVzc2VydHM7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTWVudU1haW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBNYWluRWxlbWVudHMuY3JlYXRlTWFpbigpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ZXJzU2VjdGlvbiA9IGNyZWF0ZVN0YXJ0ZXJzU2VjdGlvbigpO1xuICAgICAgICBjb25zdCBlbnRyZWVzU2VjdGlvbiA9IGNyZWF0ZUVudHJlZXNTZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGRlc3NlcnRzU2VjdGlvbiA9IGNyZWF0ZURlc3NlcnRzU2VjdGlvbigpO1xuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc3RhcnRlcnNTZWN0aW9uKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChlbnRyZWVzU2VjdGlvbik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZGVzc2VydHNTZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBtYWluO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZU1lbnVIZWFkZXIsIGNyZWF0ZU1lbnVNYWluIH07XG5cbn0pKCk7XG5cblxuY29uc3QgTWVudVBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlck1lbnUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBNZW51RWxlbWVudHMuY3JlYXRlTWVudUhlYWRlcigpO1xuICAgICAgICBjb25zdCBkaXZpZGVyTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImRpdmlkZXJcIik7XG4gICAgICAgIGNvbnN0IG1lbnVNYWluID0gTWVudUVsZW1lbnRzLmNyZWF0ZU1lbnVNYWluKCk7XG4gICAgICAgIGNvbnN0IG1lbnVGb290ZXIgPSBNYWluRWxlbWVudHMuY3JlYXRlRm9vdGVyKCk7XG4gICAgXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2aWRlckxpbmUpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVNYWluKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Rm9vdGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXJNZW51IH07XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVQYWdlOyIsImltcG9ydCB7IE1haW5FbGVtZW50cywgT3RoZXJFbGVtZW50cywgVGFicyB9IGZyb20gXCIuL2VsZW1lbnRzLWJ1aWxkZXJcIjtcbmltcG9ydCBBbGZyZWRvIGZyb20gXCIuLi9pbWdzL2FsZnJlZG8tbGluZ3VpbmkucG5nXCI7XG5pbXBvcnQgUmVteSBmcm9tIFwiLi4vaW1ncy9yZW15LnBuZ1wiO1xuaW1wb3J0IEVnbyBmcm9tIFwiLi4vaW1ncy9hbnRvbi1lZ28ucG5nXCI7XG5cbmNvbnN0IENoYXJhY3RlckJpb3MgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUJpbyA9IChvdXRlckRpdk5hbWUsIGlubmVyRGl2TmFtZSwgaW1nU3JjLCBpbWdJZCwgcGVyc29uTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBvdXRlckRpdiA9IE90aGVyRWxlbWVudHMuY3JlYXRlRGl2KG91dGVyRGl2TmFtZSk7XG4gICAgICAgIGNvbnN0IGlubmVyQ29udGFpbmVyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoaW5uZXJEaXZOYW1lKTtcbiAgICAgICAgY29uc3QgcGVyc29uSW1nID0gT3RoZXJFbGVtZW50cy5jcmVhdGVJbWFnZShpbWdTcmMpO1xuICAgICAgICBwZXJzb25JbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW1nSWQpO1xuICAgICAgICBjb25zdCBwZXJzb25OYW1lUGFyYSA9IE90aGVyRWxlbWVudHMuY3JlYXRlUGFyYShwZXJzb25OYW1lKTtcblxuICAgICAgICBpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJzb25JbWcpO1xuICAgICAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKHBlcnNvbk5hbWVQYXJhKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIG91dGVyRGl2O1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUJpbyB9O1xuXG59KSgpO1xuXG5jb25zdCBQYWdlRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUhlYWRlclNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IE1haW5FbGVtZW50cy5jcmVhdGVIZWFkZXIoKTtcblxuICAgICAgICBjb25zdCBuYXZCYXIgPSBUYWJzLmNyZWF0ZVRhYlNlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgaGVhZGVyTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImhlYWRlci1saW5lXCIpO1xuICAgICAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlSDEoXCJHdXN0ZWF1J3NcIik7XG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxpbmUpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQ2hlZlNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWZzU2VjdGlvbiA9IE1haW5FbGVtZW50cy5jcmVhdGVTZWN0aW9uKFwiY2hlZnNcIik7XG4gICAgICAgIGNvbnN0IGNoZWZzSDIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZUgyKFwiTWVldCB0aGUgQ2hlZnNcIik7XG4gICAgICAgIGNvbnN0IGNoZWZzQ29udGFpbmVyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVEaXYoXCJjaGVmcy1pbmZvXCIpO1xuICAgIFxuICAgICAgICBjb25zdCBhbGZyZWRvSW5mbyA9IENoYXJhY3RlckJpb3MuY3JlYXRlQmlvKFxuICAgICAgICAgICAgXCJhbGZyZWRvXCIsIFwiYWxmcmVkby1jb250YWluZXJcIiwgQWxmcmVkbywgXCJhbGZyZWRvLWltZ1wiLCBcIkFsZnJlZG8gTGluZ3VpbmlcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCByZW15SW5mbyA9IENoYXJhY3RlckJpb3MuY3JlYXRlQmlvKFxuICAgICAgICAgICAgXCJyZW15XCIsIFwicmVteS1jb250YWluZXJcIiwgUmVteSwgXCJyZW15LWltZ1wiLCBcIlJlbXlcIlxuICAgICAgICApO1xuXG4gICAgICAgIGNoZWZzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsZnJlZG9JbmZvKTtcbiAgICAgICAgY2hlZnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVteUluZm8pO1xuICAgICAgICBjaGVmc1NlY3Rpb24uYXBwZW5kQ2hpbGQoY2hlZnNIMik7XG4gICAgICAgIGNoZWZzU2VjdGlvbi5hcHBlbmRDaGlsZChjaGVmc0NvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGNoZWZzU2VjdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVSZXZpZXdTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXZpZXdzU2VjdGlvbiA9IE1haW5FbGVtZW50cy5jcmVhdGVTZWN0aW9uKFwicmV2aWV3c1wiKTtcbiAgICAgICAgY29uc3QgcmV2aWV3c0gyID0gT3RoZXJFbGVtZW50cy5jcmVhdGVIMihcIldoYXQgdGhlIENyaXRpY3MgU2F5XCIpO1xuXG4gICAgICAgIGNvbnN0IHJldmlld3NDb250YWluZXIgPSBPdGhlckVsZW1lbnRzLmNyZWF0ZURpdihcInJldmlld3MtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBlZ29JbmZvID0gQ2hhcmFjdGVyQmlvcy5jcmVhdGVCaW8oXG4gICAgICAgICAgICBcImVnb1wiLCBcImVnby1jb250YWluZXJcIiwgRWdvLCBcImVnby1pbWdcIiwgXCJBbnRvbiBFZ29cIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBlZ29SZXZpZXcgPSBgXCJJIGV4cGVyaWVuY2VkIHNvbWV0aGluZyBuZXc6IGFuIGV4dHJhb3JkaW5hcnkgbWVhbCBmcm9tIGEgc2luZ3VsYXJseSB1bmV4cGVjdGVkIHNvdXJjZS4gWy4uLl0gSXQgaXMgZGlmZmljdWx0IHRvIGltYWdpbmUgbW9yZSBodW1ibGUgb3JpZ2lucyB0aGFuIHRob3NlIG9mIHRoZSBnZW5pdXMgbm93IGNvb2tpbmcgYXQgR3VzdGVhdSdzIHdobyBpcywgaW4gdGhpcyBjcml0aWMncyBvcGluaW9uLCBub3RoaW5nIGxlc3MgdGhhbiB0aGUgZmluZXN0IGNoZWYgaW4gRnJhbmNlLiBJIHdpbGwgYmUgcmV0dXJuaW5nIHRvIEd1c3RlYXUncyBzb29uLCBodW5ncnkgZm9yIG1vcmUuXCJgO1xuICAgICAgICBjb25zdCByZXZpZXdTcGFuID0gT3RoZXJFbGVtZW50cy5jcmVhdGVTcGFuKGVnb1Jldmlldyk7XG4gICAgICAgIHJldmlld1NwYW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZ28tcmV2aWV3XCIpXG5cbiAgICAgICAgcmV2aWV3c1NlY3Rpb24uYXBwZW5kQ2hpbGQocmV2aWV3c0gyKTtcbiAgICAgICAgcmV2aWV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdTcGFuKTtcbiAgICAgICAgcmV2aWV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZ29JbmZvKTtcbiAgICAgICAgcmV2aWV3c1NlY3Rpb24uYXBwZW5kQ2hpbGQocmV2aWV3c0NvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHJldmlld3NTZWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUhlYWRlclNlY3Rpb24sIGNyZWF0ZUNoZWZTZWN0aW9uLCBjcmVhdGVSZXZpZXdTZWN0aW9uIH07XG59KSgpO1xuXG5jb25zdCBIb21lUGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVySG9tZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgaGVhZGVyID0gUGFnZUVsZW1lbnRzLmNyZWF0ZUhlYWRlclNlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IE1haW5FbGVtZW50cy5jcmVhdGVNYWluKCk7XG4gICAgICAgIGNvbnN0IGZpcnN0TGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImRpdmlkZXJcIik7XG4gICAgICAgIGNvbnN0IHJldmlld3NNYWluID0gUGFnZUVsZW1lbnRzLmNyZWF0ZVJldmlld1NlY3Rpb24oKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kTGluZSA9IE90aGVyRWxlbWVudHMuY3JlYXRlTGluZShcImRpdmlkZXJcIik7XG4gICAgICAgIGNvbnN0IGNoZWZzTWFpbiA9IFBhZ2VFbGVtZW50cy5jcmVhdGVDaGVmU2VjdGlvbigpO1xuICAgICAgICBjb25zdCBmb290ZXIgPSBNYWluRWxlbWVudHMuY3JlYXRlRm9vdGVyKCk7XG4gICAgICAgIFxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGZpcnN0TGluZSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocmV2aWV3c01haW4pO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHNlY29uZExpbmUpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNoZWZzTWFpbik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlckhvbWUgfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL21vZHVsZXMvcGFnZS1sb2FkXCI7XG5pbXBvcnQgTWVudVBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBSZW5kZXJQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgSG9tZVBhZ2UucmVuZGVySG9tZSgpO1xuICAgXG4gICAgY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlciA9ICh0YWIpID0+IHtcbiAgICAgICAgc3dpdGNoICh0YWIpIHtcbiAgICAgICAgICAgIGNhc2UgXCJob21lLXRhYlwiOlxuICAgICAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIEhvbWVQYWdlLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZW51LXRhYlwiOlxuICAgICAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIE1lbnVQYWdlLnJlbmRlck1lbnUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjb250YWN0LXRhYlwiOlxuICAgICAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIENvbnRhY3RQYWdlLnJlbmRlckNvbnRhY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBoYW5kbGVyKGUudGFyZ2V0LmlkKTtcbiAgICB9KVxuXG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9