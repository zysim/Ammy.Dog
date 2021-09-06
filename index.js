/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/MainComponent/CatSelector.ts":
/*!*****************************************************!*\
  !*** ./src/components/MainComponent/CatSelector.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _utils_cats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cats */ "./src/utils/cats.ts");
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/fetchApi */ "./src/utils/fetchApi.ts");
/* harmony import */ var _utils_fp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fp */ "./src/utils/fp.ts");
/* harmony import */ var _utils_jQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/jQuery */ "./src/utils/jQuery.ts");





const TAG = 'cat-selector';
const style = `
#container {
  padding: 0rem .5rem;
}

select {
  font-family: "astralsOkami";
  font-size: 1rem;
}

.cat-option {
  font-family: "astralsOkami", sans-serif;
  font-size: 16px;
}
`;
const template = `
<div id="container">
  <select></select>
</div>
`;
const optionTemplate = (entry) => `
<option ${entry[1] === (0,_utils_cats__WEBPACK_IMPORTED_MODULE_1__.getDefaultCat)() && 'selected'} class="cat-option" value=${entry[1]}>
${entry[0]}
</option>
`;
const initStyle = () => Object.assign((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_4__.c)('style'), { textContent: style });
const init = () => Object.assign((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_4__.c)('div'), { innerHTML: template }).querySelector('#container');
const fetchCats = async () => {
    const res = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__.default)('games/w6j7546j/categories');
    if (!res.ok) {
        console.table({ status: res.status, statusText: res.statusText });
        return null;
    }
    return res.json();
};
const parseCatApiJson = async (json) => (await json)
    ? (await json).data.reduce((acc, { id, name }) => name.startsWith('(Legacy)') ? acc : { ...acc, [name]: id }, {})
    : null;
const writeCatsToLocalStorage = async (cats) => {
    try {
        localStorage.setItem('cats', JSON.stringify((await cats) ?? _constants__WEBPACK_IMPORTED_MODULE_0__.default.FALLBACK));
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_CAT_NAME_KEY, _constants__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_CAT_NAME);
    }
    catch (e) {
        // It's most likely a QuotaExceededError. Just log the error just in case and ignore
        console.error(e);
    }
    return (await cats) ?? _constants__WEBPACK_IMPORTED_MODULE_0__.default.FALLBACK;
};
const triggerFetch = async (el, cats) => {
    el.dispatchEvent((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_4__.e)('initialFetch', {
        whyDoIHaveToDoThis: (await cats)[_constants__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_CAT_NAME],
    }));
    return cats;
};
class CatSelector extends HTMLElement {
    constructor() {
        super();
        this.buildSelect = (cats, el) => {
            if (!(cats instanceof Promise)) {
                el.innerHTML = Object.entries(cats).map(optionTemplate).join('\n');
            }
            else {
                cats.then(c => this.buildSelect(c, el));
            }
        };
        this.getCats = () => localStorage.getItem('cats')
            ? JSON.parse(localStorage.getItem('cats'))
            : this.fetchCatsAndParseJson();
        this.fetchCatsAndParseJson = (0,_utils_fp__WEBPACK_IMPORTED_MODULE_3__.compose)(fetchCats, parseCatApiJson, writeCatsToLocalStorage, (0,_utils_fp__WEBPACK_IMPORTED_MODULE_3__.curry)(triggerFetch, this));
        const shadow = this.attachShadow({ mode: 'open' });
        const container = init();
        this._select = container.querySelector('select');
        this._select.addEventListener('change', _ => {
            this._select.dispatchEvent((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_4__.e)('catChanged', {
                cat: this._select.options.item(this._select.selectedIndex),
            }));
        });
        shadow.append(initStyle(), container);
    }
    connectedCallback() {
        this.buildSelect(this.getCats(), this._select);
    }
}
customElements.define(TAG, CatSelector);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TAG);


/***/ }),

/***/ "./src/components/MainComponent/CatSelectorContainer.ts":
/*!**************************************************************!*\
  !*** ./src/components/MainComponent/CatSelectorContainer.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_jQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/jQuery */ "./src/utils/jQuery.ts");
/* harmony import */ var _CatSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatSelector */ "./src/components/MainComponent/CatSelector.ts");


const TAG = 'cat-selector-container';
const style = `
#container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

@media (min-width: 800px) {
  #container {
    flex-direction: row;
  }
}
`;
const template = `
<div id="container">
  <span>You have to show video proof if your</span>
  <span>run is quicker than or exactly at</span>
</div>
`;
const initStyle = () => Object.assign((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_0__.c)('style'), { textContent: style });
const init = () => Object.assign((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_0__.c)('div'), { innerHTML: template }).querySelector('#container');
class CatSelectorContainer extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const container = init();
        container.insertBefore((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_0__.c)(_CatSelector__WEBPACK_IMPORTED_MODULE_1__.default), container.lastElementChild);
        shadow.append(initStyle(), container);
    }
}
customElements.define(TAG, CatSelectorContainer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TAG);


/***/ }),

/***/ "./src/components/MainComponent/Display.ts":
/*!*************************************************!*\
  !*** ./src/components/MainComponent/Display.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const THRESHOLD = 1.1;
const calculateThresholdTime = (wrTimeInSeconds) => wrTimeInSeconds * THRESHOLD;
const parseThresholdTime = (s) => {
    const [hours, minsSecs] = [~~(s / 3600), s % 3600];
    const [minutes, seconds] = [~~(minsSecs / 60), Math.ceil(minsSecs % 60)];
    return {
        hours,
        minutes,
        seconds,
    };
};
const displayThresholdTime = (timeDisplay, time) => {
    const { hours, minutes, seconds } = parseThresholdTime(time);
    timeDisplay.textContent = `${hours}H ${minutes}M ${seconds}S`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((parent) => {
    const timeDisplay = parent.appendChild(document.createElement('div'));
    timeDisplay.id = 'display';
    timeDisplay.classList.add('hide');
    return {
        timeDisplay,
        set time(time) {
            if (!this.timeDisplay) {
                throw Error;
            }
            displayThresholdTime(this.timeDisplay, calculateThresholdTime(time));
        },
        set message(message) {
            if (!this.timeDisplay) {
                throw Error;
            }
            this.timeDisplay.textContent = message;
        },
        hide() {
            this.timeDisplay.classList.add('hide');
        },
        show() {
            this.timeDisplay.classList.remove('hide');
        },
    };
});


/***/ }),

/***/ "./src/components/MainComponent/index.ts":
/*!***********************************************!*\
  !*** ./src/components/MainComponent/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _utils_cats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cats */ "./src/utils/cats.ts");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/debounce */ "./src/utils/debounce.ts");
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchApi */ "./src/utils/fetchApi.ts");
/* harmony import */ var _utils_jQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/jQuery */ "./src/utils/jQuery.ts");
/* harmony import */ var _CatSelectorContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CatSelectorContainer */ "./src/components/MainComponent/CatSelectorContainer.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Display */ "./src/components/MainComponent/Display.ts");







const STYLE = `
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#container {
  display: flex;
  border: solid 18px hsl(0, 0%, 12%);
  flex-flow: column nowrap;
  align-items: center;
  padding: 24px;
  background-color: hsla(0, 0%, 100%, 97%);
}

button, select {
  font-size: 24px;
  font-family: "astralsOkami", sans-serif;
}

.hide {
  display: none;
}

#loading-icon {
  height: 2.5rem;
  animation-name: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

#display {
  text-align: center;
  font-size: 2.5rem;
  height: 2.5rem;
}

#title {
  text-align: center;
}

@media (min-width: 800px) {
  #container {
    border: solid 24px hsl(0, 0%, 12%);
    padding: 48px;
  }

  #display {
    font-size: 6rem;
    height: 6rem;
  }
}
`;
class MainComponent extends HTMLElement {
    constructor() {
        super();
        this._selectedCat = (0,_utils_cats__WEBPACK_IMPORTED_MODULE_1__.getDefaultCat)();
        this.refresh = async () => {
            if (typeof this._selectedCat !== 'string') {
                this._display.message = 'Something went wrong on our end! Try refreshing.';
                this.hideLoading();
                return;
            }
            this.showLoading();
            const res = await this.getWrForCat(this._selectedCat);
            if (!res.ok) {
                if (res.status === 420) {
                    this._display.message = "SRC's busy! Retry Later.";
                }
                else {
                    this._display.message = 'Failed! Please Retry.';
                }
                this.hideLoading();
                return;
            }
            try {
                this.setDisplayTime(await res.json());
                this.hideLoading();
            }
            catch (e) {
                console.log({ e });
            }
        };
        this.hideLoading = () => {
            this._loadingIcon.classList.add('hide');
            this.hideLoadingImage();
            this._display.show();
        };
        this.showLoading = () => {
            this.showLoadingImage();
            this._display.hide();
            this._loadingIcon.classList.remove('hide');
        };
        this.getWrForCat = async (cat) => (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__.default)(`leaderboards/w6j7546j/category/${cat}?var-68k4dyzl=4qy3r57l&top=1`);
        this.saveDefaultCatNameToLocalStorage = (catName) => {
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_CAT_NAME_KEY, catName);
        };
        this.setDisplayTime = async (json) => {
            this._display.time = json.data.runs[0].run.times.ingame_t;
        };
        // TODO: Doesn't work; event seemingly doesn't dispatch.
        this.hideLoadingImage = () => {
            this._container.dispatchEvent((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_4__.e)('isLoading', { isLoading: false }));
        };
        // TODO: Ditto.
        this.showLoadingImage = () => {
            this._container.dispatchEvent((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_4__.e)('isLoading', {
                isLoading: true,
            }));
        };
        const shadow = this.attachShadow({ mode: 'open' });
        this._container = (0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_4__.c)('div');
        this._container.appendChild((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_4__.c)(_CatSelectorContainer__WEBPACK_IMPORTED_MODULE_5__.default));
        this._container.addEventListener('initialFetch', e => {
            // @ts-ignore TS doesn't have support for custom events yet
            const { whyDoIHaveToDoThis } = e.detail;
            this._selectedCat = whyDoIHaveToDoThis;
            this.refresh();
        });
        this._container.addEventListener('catChanged', e => {
            // @ts-ignore TS doesn't have CustomEvent handler support yet
            const { cat } = e.detail;
            this._selectedCat = cat.value;
            this.saveDefaultCatNameToLocalStorage(cat.innerText);
            this.refresh();
        });
        this._loadingIcon = this._container.appendChild((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_4__.c)('img'));
        this._display = (0,_Display__WEBPACK_IMPORTED_MODULE_6__.default)(this._container);
        this._button = this._container.appendChild((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_4__.c)('button'));
        this._container.id = 'container';
        this._loadingIcon.id = 'loading-icon';
        this._loadingIcon.src = 'assets/ammy-borking.gif';
        this._button.textContent = 'Get/Refresh';
        this._button.addEventListener('click', (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_2__.default)(this.refresh));
        const style = (0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_4__.c)('style');
        style.textContent = STYLE;
        shadow.append(style, this._container);
    }
    connectedCallback() {
        if (!this.isConnected)
            return;
        this._selectedCat && this.refresh();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    customElements.define('main-component', MainComponent);
});


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    DEFAULT_CAT_NAME_KEY: 'defaultCatName',
    DEFAULT_CAT_NAME: 'NG+ Any%',
    BACKGROUND_IMAGES: [
        'assets/background-images/ammy-static.png',
        'assets/background-images/bead.png',
    ],
    LOADING_GIFS: [
        'assets/loading-gifs/BorgFlag.gif',
        'assets/loading-gifs/BorgHeart.gif',
        'assets/loading-gifs/PensiveHeart.gif',
    ],
    FALLBACK: {
        'NG Any%': 'zdnwp4xd',
        'NG+ Any%': 'xk901ggk',
        'NG All Brushes': 'q25owqgk',
        'NG+ All Brushes': 'z27gy6o2',
        'Top Dog': 'mkeozqxd',
        'All Major Bosses': '9d831962',
    },
});


/***/ }),

/***/ "./src/utils/cats.ts":
/*!***************************!*\
  !*** ./src/utils/cats.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CAT_NAME": () => (/* binding */ DEFAULT_CAT_NAME),
/* harmony export */   "getCats": () => (/* binding */ getCats),
/* harmony export */   "getCat": () => (/* binding */ getCat),
/* harmony export */   "getDefaultCat": () => (/* binding */ getDefaultCat)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

const DEFAULT_CAT_NAME = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_CAT_NAME_KEY) ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_CAT_NAME;
const getCats = () => {
    const cats = localStorage.getItem('cats');
    if (cats !== null) {
        return JSON.parse(cats);
    }
    return null;
};
const getCat = (name) => getCats()?.[name] || null;
const getDefaultCat = () => getCat(DEFAULT_CAT_NAME);


/***/ }),

/***/ "./src/utils/debounce.ts":
/*!*******************************!*\
  !*** ./src/utils/debounce.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((fn, delay = 1000, ...args) => {
    let busy = false;
    return () => {
        if (!busy) {
            busy = true;
            fn(...args);
            setTimeout(() => {
                busy = false;
            }, delay);
            return;
        }
    };
});


/***/ }),

/***/ "./src/utils/fetchApi.ts":
/*!*******************************!*\
  !*** ./src/utils/fetchApi.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (slug) => fetch(`https://www.speedrun.com/api/v1/${slug}`, {
    headers: {
        Accept: 'application/json, text/javascript, *,*; q=0.01',
    },
}));


/***/ }),

/***/ "./src/utils/fp.ts":
/*!*************************!*\
  !*** ./src/utils/fp.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "curry": () => (/* binding */ curry),
/* harmony export */   "compose": () => (/* binding */ compose)
/* harmony export */ });
const curry = (f, ...outer) => (...inner) => f.apply(null, outer.concat(inner));
const compose = (f, ...g) => (x) => !g.length ? f(x) : compose(g[0], ...g.slice(1))(f(x));


/***/ }),

/***/ "./src/utils/jQuery.ts":
/*!*****************************!*\
  !*** ./src/utils/jQuery.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "c": () => (/* binding */ c),
/* harmony export */   "e": () => (/* binding */ e)
/* harmony export */ });
const $ = document.querySelector.bind(document);
const c = document.createElement.bind(document);
const e = (name, detail) => new CustomEvent(name, {
    bubbles: true,
    composed: true,
    detail,
});


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MainComponent___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MainComponent/ */ "./src/components/MainComponent/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _utils_jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/jQuery */ "./src/utils/jQuery.ts");
// import registerServiceWorker from './registerServiceWorker.js'



const getRandomImage = (from) => `url(${from[~~(Math.random() * from.length)]})`;
const currentBackgroundImage = getRandomImage(_constants__WEBPACK_IMPORTED_MODULE_1__.default.BACKGROUND_IMAGES);
(0,_components_MainComponent___WEBPACK_IMPORTED_MODULE_0__.default)();
const playBackgroundLoadingGif = () => {
    (0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_2__.$)('body').style.backgroundImage = getRandomImage(_constants__WEBPACK_IMPORTED_MODULE_1__.default.LOADING_GIFS);
};
const stopBackgroundLoadingGif = () => {
    (0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_2__.$)('body').style.backgroundImage = currentBackgroundImage;
};
(0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_2__.$)('body').style.backgroundImage = currentBackgroundImage;
(0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_2__.$)('body').addEventListener('isLoading', e => {
    // @ts-ignore TS doesn't have support for custom events yet
    const { isLoading } = e.detail;
    if (isLoading) {
        playBackgroundLoadingGif();
    }
    else {
        stopBackgroundLoadingGif();
    }
});
(0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_2__.$)('main').appendChild(document.createElement('main-component'));
// registerServiceWorker()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50L0NhdFNlbGVjdG9yLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvQ2F0U2VsZWN0b3JDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9EaXNwbGF5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvY2F0cy50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2ZldGNoQXBpLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy91dGlscy9mcC50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvalF1ZXJ5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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QUcsR0FBRyxFQUFFO0lBQ3BDLGdEQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxzQkFBc0I7QUFDM0QsQ0FBQztBQUVELGdEQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxzQkFBc0I7QUFFekQsZ0RBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDM0MsMkRBQTJEO0lBQzNELE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTTtJQUM5QixJQUFJLFNBQVMsRUFBRTtRQUNiLHdCQUF3QixFQUFFO0tBQzNCO1NBQU07UUFDTCx3QkFBd0IsRUFBRTtLQUMzQjtBQUNILENBQUMsQ0FBQztBQUVGLGdEQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUVoRSwwQkFBMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGdldERlZmF1bHRDYXQgfSBmcm9tICcuLi8uLi91dGlscy9jYXRzJ1xuaW1wb3J0IGZldGNoQXBpIGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoQXBpJ1xuaW1wb3J0IHsgY29tcG9zZSwgY3VycnkgfSBmcm9tICcuLi8uLi91dGlscy9mcCdcbmltcG9ydCB7IGMsIGUgfSBmcm9tICcuLi8uLi91dGlscy9qUXVlcnknXG5cbmV4cG9ydCB0eXBlIENhdEVudHJpZXMgPSB7XG4gIFtuYW1lOiBzdHJpbmddOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIENhdFJlc3BvbnNlIHtcbiAgZGF0YToge1xuICAgIGlkOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgfVtdXG59XG5cbmV4cG9ydCB0eXBlIE9uQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcblxuZXhwb3J0IGludGVyZmFjZSBJQ2F0U2VsZWN0b3Ige1xuICBlbDogSFRNTFNlbGVjdEVsZW1lbnRcbiAgY3VycmVudDogc3RyaW5nXG59XG5cbmNvbnN0IFRBRyA9ICdjYXQtc2VsZWN0b3InXG5cbmNvbnN0IHN0eWxlID0gYFxuI2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDByZW0gLjVyZW07XG59XG5cbnNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBcImFzdHJhbHNPa2FtaVwiO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jYXQtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiYXN0cmFsc09rYW1pXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmBcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gIDxzZWxlY3Q+PC9zZWxlY3Q+XG48L2Rpdj5cbmBcblxuY29uc3Qgb3B0aW9uVGVtcGxhdGUgPSAoZW50cnk6IFtzdHJpbmcsIHN0cmluZ10pID0+IGBcbjxvcHRpb24gJHtcbiAgZW50cnlbMV0gPT09IGdldERlZmF1bHRDYXQoKSAmJiAnc2VsZWN0ZWQnXG59IGNsYXNzPVwiY2F0LW9wdGlvblwiIHZhbHVlPSR7ZW50cnlbMV19PlxuJHtlbnRyeVswXX1cbjwvb3B0aW9uPlxuYFxuXG5jb25zdCBpbml0U3R5bGUgPSAoKSA9PiBPYmplY3QuYXNzaWduKGMoJ3N0eWxlJyksIHsgdGV4dENvbnRlbnQ6IHN0eWxlIH0pXG5cbmNvbnN0IGluaXQgPSAoKSA9PlxuICBPYmplY3QuYXNzaWduKGMoJ2RpdicpLCB7IGlubmVySFRNTDogdGVtcGxhdGUgfSkucXVlcnlTZWxlY3RvcihcbiAgICAnI2NvbnRhaW5lcicsXG4gICkgYXMgSFRNTERpdkVsZW1lbnRcblxuY29uc3QgZmV0Y2hDYXRzID0gYXN5bmMgKCk6IFByb21pc2U8Q2F0UmVzcG9uc2UgfCBudWxsPiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoQXBpKCdnYW1lcy93Nmo3NTQ2ai9jYXRlZ29yaWVzJylcbiAgaWYgKCFyZXMub2spIHtcbiAgICBjb25zb2xlLnRhYmxlKHsgc3RhdHVzOiByZXMuc3RhdHVzLCBzdGF0dXNUZXh0OiByZXMuc3RhdHVzVGV4dCB9KVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIHJlcy5qc29uKClcbn1cblxuY29uc3QgcGFyc2VDYXRBcGlKc29uID0gYXN5bmMgKFxuICBqc29uOiBQcm9taXNlPENhdFJlc3BvbnNlIHwgbnVsbD4sXG4pOiBQcm9taXNlPENhdEVudHJpZXMgfCBudWxsPiA9PlxuICAoYXdhaXQganNvbilcbiAgICA/ICgoYXdhaXQganNvbikgYXMgQ2F0UmVzcG9uc2UpLmRhdGEucmVkdWNlKFxuICAgICAgICAoYWNjLCB7IGlkLCBuYW1lIH0pID0+XG4gICAgICAgICAgbmFtZS5zdGFydHNXaXRoKCcoTGVnYWN5KScpID8gYWNjIDogeyAuLi5hY2MsIFtuYW1lXTogaWQgfSxcbiAgICAgICAge30sXG4gICAgICApXG4gICAgOiBudWxsXG5cbmNvbnN0IHdyaXRlQ2F0c1RvTG9jYWxTdG9yYWdlID0gYXN5bmMgKFxuICBjYXRzOiBQcm9taXNlPENhdEVudHJpZXMgfCBudWxsPixcbik6IFByb21pc2U8Q2F0RW50cmllcz4gPT4ge1xuICB0cnkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgJ2NhdHMnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoKGF3YWl0IGNhdHMpID8/IGNvbnN0YW50cy5GQUxMQkFDSyksXG4gICAgKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgY29uc3RhbnRzLkRFRkFVTFRfQ0FUX05BTUVfS0VZLFxuICAgICAgY29uc3RhbnRzLkRFRkFVTFRfQ0FUX05BTUUsXG4gICAgKVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSXQncyBtb3N0IGxpa2VseSBhIFF1b3RhRXhjZWVkZWRFcnJvci4gSnVzdCBsb2cgdGhlIGVycm9yIGp1c3QgaW4gY2FzZSBhbmQgaWdub3JlXG4gICAgY29uc29sZS5lcnJvcihlKVxuICB9XG4gIHJldHVybiAoYXdhaXQgY2F0cykgPz8gY29uc3RhbnRzLkZBTExCQUNLXG59XG5cbmNvbnN0IHRyaWdnZXJGZXRjaCA9IGFzeW5jIChlbDogQ2F0U2VsZWN0b3IsIGNhdHM6IFByb21pc2U8Q2F0RW50cmllcz4pID0+IHtcbiAgZWwuZGlzcGF0Y2hFdmVudChcbiAgICBlKCdpbml0aWFsRmV0Y2gnLCB7XG4gICAgICB3aHlEb0lIYXZlVG9Eb1RoaXM6IChhd2FpdCBjYXRzKVtjb25zdGFudHMuREVGQVVMVF9DQVRfTkFNRV0sXG4gICAgfSksXG4gIClcbiAgcmV0dXJuIGNhdHNcbn1cblxuY2xhc3MgQ2F0U2VsZWN0b3IgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIF9zZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG4gICAgY29uc3QgY29udGFpbmVyID0gaW5pdCgpXG5cbiAgICB0aGlzLl9zZWxlY3QgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnRcblxuICAgIHRoaXMuX3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBfID0+IHtcbiAgICAgIHRoaXMuX3NlbGVjdC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBlKCdjYXRDaGFuZ2VkJywge1xuICAgICAgICAgIGNhdDogdGhpcy5fc2VsZWN0Lm9wdGlvbnMuaXRlbSh0aGlzLl9zZWxlY3Quc2VsZWN0ZWRJbmRleCksXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgIH0pXG5cbiAgICBzaGFkb3cuYXBwZW5kKGluaXRTdHlsZSgpLCBjb250YWluZXIpXG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmJ1aWxkU2VsZWN0KHRoaXMuZ2V0Q2F0cygpLCB0aGlzLl9zZWxlY3QpXG4gIH1cblxuICBidWlsZFNlbGVjdCA9IChcbiAgICBjYXRzOiBDYXRFbnRyaWVzIHwgUHJvbWlzZTxDYXRFbnRyaWVzPixcbiAgICBlbDogSFRNTFNlbGVjdEVsZW1lbnQsXG4gICkgPT4ge1xuICAgIGlmICghKGNhdHMgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgZWwuaW5uZXJIVE1MID0gT2JqZWN0LmVudHJpZXMoY2F0cykubWFwKG9wdGlvblRlbXBsYXRlKS5qb2luKCdcXG4nKVxuICAgIH0gZWxzZSB7XG4gICAgICBjYXRzLnRoZW4oYyA9PiB0aGlzLmJ1aWxkU2VsZWN0KGMsIGVsKSlcbiAgICB9XG4gIH1cblxuICBnZXRDYXRzID0gKCk6IENhdEVudHJpZXMgfCBQcm9taXNlPENhdEVudHJpZXM+ID0+XG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdHMnKVxuICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRzJykgYXMgc3RyaW5nKVxuICAgICAgOiB0aGlzLmZldGNoQ2F0c0FuZFBhcnNlSnNvbigpXG5cbiAgZmV0Y2hDYXRzQW5kUGFyc2VKc29uOiAoKSA9PiBQcm9taXNlPENhdEVudHJpZXM+ID0gY29tcG9zZShcbiAgICBmZXRjaENhdHMsXG4gICAgcGFyc2VDYXRBcGlKc29uLFxuICAgIHdyaXRlQ2F0c1RvTG9jYWxTdG9yYWdlLFxuICAgIGN1cnJ5KHRyaWdnZXJGZXRjaCwgdGhpcyksXG4gIClcbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFRBRywgQ2F0U2VsZWN0b3IpXG5cbmV4cG9ydCBkZWZhdWx0IFRBR1xuIiwiaW1wb3J0IHsgYyB9IGZyb20gJy4uLy4uL3V0aWxzL2pRdWVyeSdcbmltcG9ydCBDYXRTZWxlY3RvciwgeyBPbkNoYW5nZSB9IGZyb20gJy4vQ2F0U2VsZWN0b3InXG5cbmNvbnN0IFRBRyA9ICdjYXQtc2VsZWN0b3ItY29udGFpbmVyJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYXRTZWxlY3RvckNvbnRhaW5lciB7XG4gIGVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGxcbn1cblxuY29uc3Qgc3R5bGUgPSBgXG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuYFxuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgPHNwYW4+WW91IGhhdmUgdG8gc2hvdyB2aWRlbyBwcm9vZiBpZiB5b3VyPC9zcGFuPlxuICA8c3Bhbj5ydW4gaXMgcXVpY2tlciB0aGFuIG9yIGV4YWN0bHkgYXQ8L3NwYW4+XG48L2Rpdj5cbmBcblxuY29uc3QgaW5pdFN0eWxlID0gKCkgPT4gT2JqZWN0LmFzc2lnbihjKCdzdHlsZScpLCB7IHRleHRDb250ZW50OiBzdHlsZSB9KVxuXG5jb25zdCBpbml0ID0gKCkgPT4gT2JqZWN0LmFzc2lnbihjKCdkaXYnKSwgeyBpbm5lckhUTUw6IHRlbXBsYXRlIH0pLnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudFxuXG5jbGFzcyBDYXRTZWxlY3RvckNvbnRhaW5lciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG4gICAgY29uc3QgY29udGFpbmVyID0gaW5pdCgpXG4gICAgY29udGFpbmVyLmluc2VydEJlZm9yZShjKENhdFNlbGVjdG9yKSwgY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpXG4gICAgc2hhZG93LmFwcGVuZChpbml0U3R5bGUoKSwgY29udGFpbmVyKVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShUQUcsIENhdFNlbGVjdG9yQ29udGFpbmVyKVxuXG5leHBvcnQgZGVmYXVsdCBUQUdcbiIsImV4cG9ydCBpbnRlcmZhY2UgSURpc3BsYXkge1xuICB0aW1lRGlzcGxheTogSFRNTERpdkVsZW1lbnRcbiAgdGltZTogbnVtYmVyXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBoaWRlOiAoKSA9PiB2b2lkXG4gIHNob3c6ICgpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElUaW1lIHtcbiAgaG91cnM6IG51bWJlclxuICBtaW51dGVzOiBudW1iZXJcbiAgc2Vjb25kczogbnVtYmVyXG59XG5cbmNvbnN0IFRIUkVTSE9MRCA9IDEuMVxuXG5jb25zdCBjYWxjdWxhdGVUaHJlc2hvbGRUaW1lID0gKHdyVGltZUluU2Vjb25kczogbnVtYmVyKSA9PlxuICB3clRpbWVJblNlY29uZHMgKiBUSFJFU0hPTERcblxuY29uc3QgcGFyc2VUaHJlc2hvbGRUaW1lID0gKHM6IG51bWJlcik6IElUaW1lID0+IHtcbiAgY29uc3QgW2hvdXJzLCBtaW5zU2Vjc10gPSBbfn4ocyAvIDM2MDApLCBzICUgMzYwMF1cbiAgY29uc3QgW21pbnV0ZXMsIHNlY29uZHNdID0gW35+KG1pbnNTZWNzIC8gNjApLCBNYXRoLmNlaWwobWluc1NlY3MgJSA2MCldXG4gIHJldHVybiB7XG4gICAgaG91cnMsXG4gICAgbWludXRlcyxcbiAgICBzZWNvbmRzLFxuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlUaHJlc2hvbGRUaW1lID0gKHRpbWVEaXNwbGF5OiBIVE1MRGl2RWxlbWVudCwgdGltZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSA9IHBhcnNlVGhyZXNob2xkVGltZSh0aW1lKVxuICB0aW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2hvdXJzfUggJHttaW51dGVzfU0gJHtzZWNvbmRzfVNgXG59XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogSURpc3BsYXkgPT4ge1xuICBjb25zdCB0aW1lRGlzcGxheSA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgdGltZURpc3BsYXkuaWQgPSAnZGlzcGxheSdcbiAgdGltZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG5cbiAgcmV0dXJuIHtcbiAgICB0aW1lRGlzcGxheSxcbiAgICBzZXQgdGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgIGlmICghdGhpcy50aW1lRGlzcGxheSkge1xuICAgICAgICB0aHJvdyBFcnJvclxuICAgICAgfVxuICAgICAgZGlzcGxheVRocmVzaG9sZFRpbWUodGhpcy50aW1lRGlzcGxheSwgY2FsY3VsYXRlVGhyZXNob2xkVGltZSh0aW1lKSlcbiAgICB9LFxuXG4gICAgc2V0IG1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICBpZiAoIXRoaXMudGltZURpc3BsYXkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3JcbiAgICAgIH1cbiAgICAgIHRoaXMudGltZURpc3BsYXkudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgfSxcblxuICAgIGhpZGUoKSB7XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIH0sXG5cbiAgICBzaG93KCkge1xuICAgICAgdGhpcy50aW1lRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGdldERlZmF1bHRDYXQgfSBmcm9tICcuLi8uLi91dGlscy9jYXRzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlJ1xuaW1wb3J0IGZldGNoQXBpIGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoQXBpJ1xuaW1wb3J0IHsgYywgZSB9IGZyb20gJy4uLy4uL3V0aWxzL2pRdWVyeSdcbmltcG9ydCBDYXRTZWxlY3RvckNvbnRhaW5lciBmcm9tICcuL0NhdFNlbGVjdG9yQ29udGFpbmVyJ1xuaW1wb3J0IERpc3BsYXksIHsgSURpc3BsYXkgfSBmcm9tICcuL0Rpc3BsYXknXG5cbmludGVyZmFjZSBSdW5SZXNwb25zZSB7XG4gIGRhdGE6IHtcbiAgICBydW5zOiB7XG4gICAgICBydW46IHtcbiAgICAgICAgdGltZXM6IHtcbiAgICAgICAgICBpbmdhbWVfdDogbnVtYmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9W11cbiAgfVxufVxuXG5jb25zdCBTVFlMRSA9IGBcbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IHNvbGlkIDE4cHggaHNsKDAsIDAlLCAxMiUpO1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDk3JSk7XG59XG5cbmJ1dHRvbiwgc2VsZWN0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJhc3RyYWxzT2thbWlcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbG9hZGluZy1pY29uIHtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4jZGlzcGxheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xufVxuXG4jdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAjY29udGFpbmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIDI0cHggaHNsKDAsIDAlLCAxMiUpO1xuICAgIHBhZGRpbmc6IDQ4cHg7XG4gIH1cblxuICAjZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuYFxuXG5jbGFzcyBNYWluQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxuICBfZGlzcGxheTogSURpc3BsYXlcbiAgX2xvYWRpbmdJY29uOiBIVE1MSW1hZ2VFbGVtZW50XG4gIF9idXR0b246IEhUTUxCdXR0b25FbGVtZW50XG4gIF9zZWxlY3RlZENhdDogc3RyaW5nIHwgbnVsbCA9IGdldERlZmF1bHRDYXQoKVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG5cbiAgICB0aGlzLl9jb250YWluZXIgPSBjKCdkaXYnKVxuXG4gICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGMoQ2F0U2VsZWN0b3JDb250YWluZXIpKVxuXG4gICAgdGhpcy5fY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2luaXRpYWxGZXRjaCcsIGUgPT4ge1xuICAgICAgLy8gQHRzLWlnbm9yZSBUUyBkb2Vzbid0IGhhdmUgc3VwcG9ydCBmb3IgY3VzdG9tIGV2ZW50cyB5ZXRcbiAgICAgIGNvbnN0IHsgd2h5RG9JSGF2ZVRvRG9UaGlzIH0gPSBlLmRldGFpbFxuICAgICAgdGhpcy5fc2VsZWN0ZWRDYXQgPSB3aHlEb0lIYXZlVG9Eb1RoaXNcbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgfSlcblxuICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjYXRDaGFuZ2VkJywgZSA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlIFRTIGRvZXNuJ3QgaGF2ZSBDdXN0b21FdmVudCBoYW5kbGVyIHN1cHBvcnQgeWV0XG4gICAgICBjb25zdCB7IGNhdCB9ID0gZS5kZXRhaWxcbiAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ID0gY2F0LnZhbHVlXG4gICAgICB0aGlzLnNhdmVEZWZhdWx0Q2F0TmFtZVRvTG9jYWxTdG9yYWdlKGNhdC5pbm5lclRleHQpXG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgIH0pXG5cbiAgICB0aGlzLl9sb2FkaW5nSWNvbiA9IHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjKCdpbWcnKSlcbiAgICB0aGlzLl9kaXNwbGF5ID0gRGlzcGxheSh0aGlzLl9jb250YWluZXIpXG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGMoJ2J1dHRvbicpKVxuXG4gICAgdGhpcy5fY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcidcbiAgICB0aGlzLl9sb2FkaW5nSWNvbi5pZCA9ICdsb2FkaW5nLWljb24nXG4gICAgdGhpcy5fbG9hZGluZ0ljb24uc3JjID0gJ2Fzc2V0cy9hbW15LWJvcmtpbmcuZ2lmJ1xuICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9ICdHZXQvUmVmcmVzaCdcbiAgICB0aGlzLl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2gpKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjKCdzdHlsZScpXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBTVFlMRVxuXG4gICAgc2hhZG93LmFwcGVuZChzdHlsZSwgdGhpcy5fY29udGFpbmVyKVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSByZXR1cm5cbiAgICB0aGlzLl9zZWxlY3RlZENhdCAmJiB0aGlzLnJlZnJlc2goKVxuICB9XG5cbiAgcmVmcmVzaCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3NlbGVjdGVkQ2F0ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nIG9uIG91ciBlbmQhIFRyeSByZWZyZXNoaW5nLidcbiAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuc2hvd0xvYWRpbmcoKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZ2V0V3JGb3JDYXQodGhpcy5fc2VsZWN0ZWRDYXQpXG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQyMCkge1xuICAgICAgICB0aGlzLl9kaXNwbGF5Lm1lc3NhZ2UgPSBcIlNSQydzIGJ1c3khIFJldHJ5IExhdGVyLlwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kaXNwbGF5Lm1lc3NhZ2UgPSAnRmFpbGVkISBQbGVhc2UgUmV0cnkuJ1xuICAgICAgfVxuICAgICAgdGhpcy5oaWRlTG9hZGluZygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5zZXREaXNwbGF5VGltZShhd2FpdCByZXMuanNvbigpKVxuICAgICAgdGhpcy5oaWRlTG9hZGluZygpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coeyBlIH0pXG4gICAgfVxuICB9XG5cbiAgaGlkZUxvYWRpbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5fbG9hZGluZ0ljb24uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgdGhpcy5oaWRlTG9hZGluZ0ltYWdlKClcbiAgICB0aGlzLl9kaXNwbGF5LnNob3coKVxuICB9XG5cbiAgc2hvd0xvYWRpbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5zaG93TG9hZGluZ0ltYWdlKClcbiAgICB0aGlzLl9kaXNwbGF5LmhpZGUoKVxuICAgIHRoaXMuX2xvYWRpbmdJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICB9XG5cbiAgZ2V0V3JGb3JDYXQgPSBhc3luYyAoY2F0OiBzdHJpbmcpID0+XG4gICAgZmV0Y2hBcGkoXG4gICAgICBgbGVhZGVyYm9hcmRzL3c2ajc1NDZqL2NhdGVnb3J5LyR7Y2F0fT92YXItNjhrNGR5emw9NHF5M3I1N2wmdG9wPTFgLFxuICAgIClcblxuICBzYXZlRGVmYXVsdENhdE5hbWVUb0xvY2FsU3RvcmFnZSA9IChjYXROYW1lOiBzdHJpbmcpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb25zdGFudHMuREVGQVVMVF9DQVRfTkFNRV9LRVksIGNhdE5hbWUpXG4gIH1cblxuICBzZXREaXNwbGF5VGltZSA9IGFzeW5jIChqc29uOiBSdW5SZXNwb25zZSkgPT4ge1xuICAgIHRoaXMuX2Rpc3BsYXkudGltZSA9IGpzb24uZGF0YS5ydW5zWzBdLnJ1bi50aW1lcy5pbmdhbWVfdFxuICB9XG5cbiAgLy8gVE9ETzogRG9lc24ndCB3b3JrOyBldmVudCBzZWVtaW5nbHkgZG9lc24ndCBkaXNwYXRjaC5cbiAgaGlkZUxvYWRpbmdJbWFnZSA9ICgpID0+IHtcbiAgICB0aGlzLl9jb250YWluZXIuZGlzcGF0Y2hFdmVudChlKCdpc0xvYWRpbmcnLCB7IGlzTG9hZGluZzogZmFsc2UgfSkpXG4gIH1cblxuICAvLyBUT0RPOiBEaXR0by5cbiAgc2hvd0xvYWRpbmdJbWFnZSA9ICgpID0+IHtcbiAgICB0aGlzLl9jb250YWluZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgIGUoJ2lzTG9hZGluZycsIHtcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgfSksXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtYWluLWNvbXBvbmVudCcsIE1haW5Db21wb25lbnQpXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIERFRkFVTFRfQ0FUX05BTUVfS0VZOiAnZGVmYXVsdENhdE5hbWUnLFxuICBERUZBVUxUX0NBVF9OQU1FOiAnTkcrIEFueSUnLFxuICBCQUNLR1JPVU5EX0lNQUdFUzogW1xuICAgICdhc3NldHMvYmFja2dyb3VuZC1pbWFnZXMvYW1teS1zdGF0aWMucG5nJyxcbiAgICAnYXNzZXRzL2JhY2tncm91bmQtaW1hZ2VzL2JlYWQucG5nJyxcbiAgXSxcbiAgTE9BRElOR19HSUZTOiBbXG4gICAgJ2Fzc2V0cy9sb2FkaW5nLWdpZnMvQm9yZ0ZsYWcuZ2lmJyxcbiAgICAnYXNzZXRzL2xvYWRpbmctZ2lmcy9Cb3JnSGVhcnQuZ2lmJyxcbiAgICAnYXNzZXRzL2xvYWRpbmctZ2lmcy9QZW5zaXZlSGVhcnQuZ2lmJyxcbiAgXSxcbiAgRkFMTEJBQ0s6IHtcbiAgICAnTkcgQW55JSc6ICd6ZG53cDR4ZCcsXG4gICAgJ05HKyBBbnklJzogJ3hrOTAxZ2drJyxcbiAgICAnTkcgQWxsIEJydXNoZXMnOiAncTI1b3dxZ2snLFxuICAgICdORysgQWxsIEJydXNoZXMnOiAnejI3Z3k2bzInLFxuICAgICdUb3AgRG9nJzogJ21rZW96cXhkJyxcbiAgICAnQWxsIE1ham9yIEJvc3Nlcyc6ICc5ZDgzMTk2MicsXG4gIH0sXG59XG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IHR5cGUgQ2F0cyA9IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0NBVF9OQU1FID1cbiAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLkRFRkFVTFRfQ0FUX05BTUVfS0VZKSB8fFxuICBjb25zdGFudHMuREVGQVVMVF9DQVRfTkFNRVxuXG5leHBvcnQgY29uc3QgZ2V0Q2F0cyA9ICgpOiBDYXRzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGNhdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0cycpXG4gIGlmIChjYXRzICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoY2F0cylcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2F0ID0gKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwgPT4gZ2V0Q2F0cygpPy5bbmFtZV0gfHwgbnVsbFxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdENhdCA9ICgpOiBzdHJpbmcgfCBudWxsID0+IGdldENhdChERUZBVUxUX0NBVF9OQU1FKVxuIiwiZXhwb3J0IGRlZmF1bHQgPEYgZXh0ZW5kcyAoLi4uYTogYW55W10pID0+IGFueT4oXG4gIGZuOiBGLFxuICBkZWxheSA9IDEwMDAsXG4gIC4uLmFyZ3M6IFBhcmFtZXRlcnM8Rj5cbikgPT4ge1xuICBsZXQgYnVzeSA9IGZhbHNlXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKCFidXN5KSB7XG4gICAgICBidXN5ID0gdHJ1ZVxuICAgICAgZm4oLi4uYXJncylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBidXN5ID0gZmFsc2VcbiAgICAgIH0sIGRlbGF5KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyAoc2x1Zzogc3RyaW5nKSA9PlxuICBmZXRjaChgaHR0cHM6Ly93d3cuc3BlZWRydW4uY29tL2FwaS92MS8ke3NsdWd9YCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKiwqOyBxPTAuMDEnLFxuICAgIH0sXG4gIH0pXG4iLCJleHBvcnQgY29uc3QgY3VycnkgPSAoZjogRnVuY3Rpb24sIC4uLm91dGVyOiBhbnlbXSkgPT4gKC4uLmlubmVyOiBhbnlbXSkgPT5cbiAgZi5hcHBseShudWxsLCBvdXRlci5jb25jYXQoaW5uZXIpKVxuXG5leHBvcnQgY29uc3QgY29tcG9zZSA9XG4gIChmOiBGdW5jdGlvbiwgLi4uZzogRnVuY3Rpb25bXSkgPT5cbiAgKHg/OiBhbnkpOiBhbnkgPT5cbiAgICAhZy5sZW5ndGggPyBmKHgpIDogY29tcG9zZShnWzBdLCAuLi5nLnNsaWNlKDEpKShmKHgpKVxuIiwiZXhwb3J0IGNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpXG5cbmV4cG9ydCBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KVxuXG5leHBvcnQgY29uc3QgZSA9IChuYW1lOiBzdHJpbmcsIGRldGFpbD86IE9iamVjdCkgPT5cbiAgbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgIGRldGFpbCxcbiAgfSlcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHJlZ2lzdGVyU2VydmljZVdvcmtlciBmcm9tICcuL3JlZ2lzdGVyU2VydmljZVdvcmtlci5qcydcbmltcG9ydCBNYWluQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9NYWluQ29tcG9uZW50LydcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi91dGlscy9qUXVlcnknXG5cbmNvbnN0IGdldFJhbmRvbUltYWdlID0gKGZyb206IHN0cmluZ1tdKSA9PlxuICBgdXJsKCR7ZnJvbVt+fihNYXRoLnJhbmRvbSgpICogZnJvbS5sZW5ndGgpXX0pYFxuXG5jb25zdCBjdXJyZW50QmFja2dyb3VuZEltYWdlID0gZ2V0UmFuZG9tSW1hZ2UoY29uc3RhbnRzLkJBQ0tHUk9VTkRfSU1BR0VTKVxuXG5NYWluQ29tcG9uZW50KClcblxuY29uc3QgcGxheUJhY2tncm91bmRMb2FkaW5nR2lmID0gKCkgPT4ge1xuICAkKCdib2R5JykhLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGdldFJhbmRvbUltYWdlKGNvbnN0YW50cy5MT0FESU5HX0dJRlMpXG59XG5cbmNvbnN0IHN0b3BCYWNrZ3JvdW5kTG9hZGluZ0dpZiA9ICgpID0+IHtcbiAgJCgnYm9keScpIS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBjdXJyZW50QmFja2dyb3VuZEltYWdlXG59XG5cbiQoJ2JvZHknKSEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gY3VycmVudEJhY2tncm91bmRJbWFnZVxuXG4kKCdib2R5JykhLmFkZEV2ZW50TGlzdGVuZXIoJ2lzTG9hZGluZycsIGUgPT4ge1xuICAvLyBAdHMtaWdub3JlIFRTIGRvZXNuJ3QgaGF2ZSBzdXBwb3J0IGZvciBjdXN0b20gZXZlbnRzIHlldFxuICBjb25zdCB7IGlzTG9hZGluZyB9ID0gZS5kZXRhaWxcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHBsYXlCYWNrZ3JvdW5kTG9hZGluZ0dpZigpXG4gIH0gZWxzZSB7XG4gICAgc3RvcEJhY2tncm91bmRMb2FkaW5nR2lmKClcbiAgfVxufSlcblxuJCgnbWFpbicpIS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluLWNvbXBvbmVudCcpKVxuXG4vLyByZWdpc3RlclNlcnZpY2VXb3JrZXIoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==