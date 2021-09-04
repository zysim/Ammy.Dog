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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_cats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cats */ "./src/utils/cats.ts");
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/fetchApi */ "./src/utils/fetchApi.ts");
/* harmony import */ var _utils_fp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fp */ "./src/utils/fp.ts");
/* harmony import */ var _utils_jQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/jQuery */ "./src/utils/jQuery.ts");





const FALLBACK = {
    'NG Any%': 'zdnwp4xd',
    'NG+ Any%': 'xk901ggk',
    'NG All Brushes': 'q25owqgk',
    'NG+ All Brushes': 'z27gy6o2',
    'Top Dog': 'mkeozqxd',
    'All Major Bosses': '9d831962',
};
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
    localStorage.setItem('cats', JSON.stringify((await cats) ?? FALLBACK));
    return (await cats) ?? FALLBACK;
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
        this.triggerFetch = (cats) => {
            this.dispatchEvent((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createCustomEvent)('triggerFetch'));
            return cats;
        };
        this.fetchCatsAndParseJson = (0,_utils_fp__WEBPACK_IMPORTED_MODULE_3__.compose)(fetchCats, parseCatApiJson, writeCatsToLocalStorage, this.triggerFetch);
        const shadow = this.attachShadow({ mode: 'open' });
        const container = init();
        const select = container.querySelector('select');
        this.buildSelect(this.getCats(), select);
        select.addEventListener('change', _ => {
            select.dispatchEvent((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createCustomEvent)('catChanged', {
                cat: select.options.item(select.selectedIndex),
            }));
        });
        shadow.append(initStyle(), container);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_cats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cats */ "./src/utils/cats.ts");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/debounce */ "./src/utils/debounce.ts");
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/fetchApi */ "./src/utils/fetchApi.ts");
/* harmony import */ var _utils_jQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/jQuery */ "./src/utils/jQuery.ts");
/* harmony import */ var _CatSelectorContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CatSelectorContainer */ "./src/components/MainComponent/CatSelectorContainer.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Display */ "./src/components/MainComponent/Display.ts");








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
        this._selectedCat = (0,_utils_cats__WEBPACK_IMPORTED_MODULE_2__.getDefaultCat)();
        this.refresh = async () => {
            if (typeof this._selectedCat !== 'string') {
                this._display.message = 'Something went wrong on our end! Try refreshing.';
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
        this.getWrForCat = async (cat) => (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_4__.default)(`leaderboards/w6j7546j/category/${cat}?var-68k4dyzl=4qy3r57l&top=1`);
        this.saveDefaultCatNameToLocalStorage = (catName) => {
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_CAT_NAME_KEY, catName);
        };
        this.setDisplayTime = async (json) => {
            this._display.time = json.data.runs[0].run.times.ingame_t;
        };
        // TODO: Doesn't work; event seemingly doesn't dispatch.
        this.hideLoadingImage = () => {
            this._container.dispatchEvent((0,_utils__WEBPACK_IMPORTED_MODULE_1__.createCustomEvent)('isLoading', { isLoading: false }));
        };
        // TODO: Ditto.
        this.showLoadingImage = () => {
            this._container.dispatchEvent((0,_utils__WEBPACK_IMPORTED_MODULE_1__.createCustomEvent)('isLoading', {
                isLoading: true,
            }));
        };
        const shadow = this.attachShadow({ mode: 'open' });
        this._container = (0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_5__.c)('div');
        this._container.appendChild((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_5__.c)(_CatSelectorContainer__WEBPACK_IMPORTED_MODULE_6__.default));
        this._loadingIcon = this._container.appendChild((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_5__.c)('img'));
        this._display = (0,_Display__WEBPACK_IMPORTED_MODULE_7__.default)(this._container);
        this._button = this._container.appendChild((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_5__.c)('button'));
        this._container.id = 'container';
        // TODO: Fix this. This doesn't trigger.
        this._container.addEventListener('triggerFetch', this.refresh);
        this._loadingIcon.id = 'loading-icon';
        this._loadingIcon.src = 'assets/ammy-borking.gif';
        this._button.textContent = 'Get/Refresh';
        this._button.addEventListener('click', (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_3__.default)(this.refresh));
        const style = (0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_5__.c)('style');
        style.textContent = STYLE;
        shadow.append(style, this._container);
    }
    connectedCallback() {
        if (!this.isConnected)
            return;
        this.refresh();
        this._container.addEventListener('catChanged', e => {
            // @ts-ignore TS doesn't have CustomEvent handler support yet
            const { cat } = e.detail;
            this._selectedCat = cat.value;
            this.saveDefaultCatNameToLocalStorage(cat.innerText);
            this.refresh();
        });
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
    BACKGROUND_IMAGES: ['ammy-static.png', 'bead.png'],
    LOADING_GIFS: ['BorgFlag.gif', 'BorgHeart.gif', 'PensiveHeart.gif'],
});


/***/ }),

/***/ "./src/utils/cats.ts":
/*!***************************!*\
  !*** ./src/utils/cats.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCats": () => (/* binding */ getCats),
/* harmony export */   "getCat": () => (/* binding */ getCat),
/* harmony export */   "getDefaultCat": () => (/* binding */ getDefaultCat)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

const DEFAULT_CAT_NAME = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_CAT_NAME_KEY) || 'NG+ Any%';
const getCats = () => {
    const cats = localStorage.getItem('cats');
    if (cats !== null) {
        return JSON.parse(cats);
    }
    return null;
};
const getCat = (cat) => getCats()?.[cat] || null;
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

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCustomEvent": () => (/* binding */ createCustomEvent)
/* harmony export */ });
const createCustomEvent = (name, detail) => new CustomEvent(name, {
    bubbles: true,
    composed: true,
    detail,
});


/***/ }),

/***/ "./src/utils/jQuery.ts":
/*!*****************************!*\
  !*** ./src/utils/jQuery.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "c": () => (/* binding */ c)
/* harmony export */ });
const $ = document.querySelector.bind(document);
const c = document.createElement.bind(document);


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



const getRandomImage = (from) => `url(assets/${from[~~(Math.random() * from.length)]})`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50L0NhdFNlbGVjdG9yLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvQ2F0U2VsZWN0b3JDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9EaXNwbGF5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvY2F0cy50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2ZldGNoQXBpLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy91dGlscy9mcC50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2pRdWVyeS50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvaW5k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aWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDdXN0b21FdmVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0RGVmYXVsdENhdCB9IGZyb20gJy4uLy4uL3V0aWxzL2NhdHMnXG5pbXBvcnQgZmV0Y2hBcGkgZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hBcGknXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZnAnXG5pbXBvcnQgeyBjIH0gZnJvbSAnLi4vLi4vdXRpbHMvalF1ZXJ5J1xuXG5leHBvcnQgdHlwZSBDYXRFbnRyaWVzID0ge1xuICBbbmFtZTogc3RyaW5nXTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBDYXRSZXNwb25zZSB7XG4gIGRhdGE6IHtcbiAgICBpZDogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nXG4gIH1bXVxufVxuXG5jb25zdCBGQUxMQkFDSzogQ2F0RW50cmllcyA9IHtcbiAgJ05HIEFueSUnOiAnemRud3A0eGQnLFxuICAnTkcrIEFueSUnOiAneGs5MDFnZ2snLFxuICAnTkcgQWxsIEJydXNoZXMnOiAncTI1b3dxZ2snLFxuICAnTkcrIEFsbCBCcnVzaGVzJzogJ3oyN2d5Nm8yJyxcbiAgJ1RvcCBEb2cnOiAnbWtlb3pxeGQnLFxuICAnQWxsIE1ham9yIEJvc3Nlcyc6ICc5ZDgzMTk2MicsXG59XG5cbmV4cG9ydCB0eXBlIE9uQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcblxuZXhwb3J0IGludGVyZmFjZSBJQ2F0U2VsZWN0b3Ige1xuICBlbDogSFRNTFNlbGVjdEVsZW1lbnRcbiAgY3VycmVudDogc3RyaW5nXG59XG5cbmNvbnN0IFRBRyA9ICdjYXQtc2VsZWN0b3InXG5cbmNvbnN0IHN0eWxlID0gYFxuI2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDByZW0gLjVyZW07XG59XG5cbnNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBcImFzdHJhbHNPa2FtaVwiO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jYXQtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiYXN0cmFsc09rYW1pXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmBcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gIDxzZWxlY3Q+PC9zZWxlY3Q+XG48L2Rpdj5cbmBcblxuY29uc3Qgb3B0aW9uVGVtcGxhdGUgPSAoZW50cnk6IFtzdHJpbmcsIHN0cmluZ10pID0+IGBcbjxvcHRpb24gJHtcbiAgZW50cnlbMV0gPT09IGdldERlZmF1bHRDYXQoKSAmJiAnc2VsZWN0ZWQnXG59IGNsYXNzPVwiY2F0LW9wdGlvblwiIHZhbHVlPSR7ZW50cnlbMV19PlxuJHtlbnRyeVswXX1cbjwvb3B0aW9uPlxuYFxuXG5jb25zdCBpbml0U3R5bGUgPSAoKSA9PiBPYmplY3QuYXNzaWduKGMoJ3N0eWxlJyksIHsgdGV4dENvbnRlbnQ6IHN0eWxlIH0pXG5cbmNvbnN0IGluaXQgPSAoKSA9PlxuICBPYmplY3QuYXNzaWduKGMoJ2RpdicpLCB7IGlubmVySFRNTDogdGVtcGxhdGUgfSkucXVlcnlTZWxlY3RvcihcbiAgICAnI2NvbnRhaW5lcicsXG4gICkgYXMgSFRNTERpdkVsZW1lbnRcblxuY29uc3QgZmV0Y2hDYXRzID0gYXN5bmMgKCk6IFByb21pc2U8Q2F0UmVzcG9uc2UgfCBudWxsPiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoQXBpKCdnYW1lcy93Nmo3NTQ2ai9jYXRlZ29yaWVzJylcbiAgaWYgKCFyZXMub2spIHtcbiAgICBjb25zb2xlLnRhYmxlKHsgc3RhdHVzOiByZXMuc3RhdHVzLCBzdGF0dXNUZXh0OiByZXMuc3RhdHVzVGV4dCB9KVxuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIHJlcy5qc29uKClcbn1cblxuY29uc3QgcGFyc2VDYXRBcGlKc29uID0gYXN5bmMgKFxuICBqc29uOiBQcm9taXNlPENhdFJlc3BvbnNlIHwgbnVsbD4sXG4pOiBQcm9taXNlPENhdEVudHJpZXMgfCBudWxsPiA9PlxuICAoYXdhaXQganNvbilcbiAgICA/ICgoYXdhaXQganNvbikgYXMgQ2F0UmVzcG9uc2UpLmRhdGEucmVkdWNlKFxuICAgICAgICAoYWNjLCB7IGlkLCBuYW1lIH0pID0+XG4gICAgICAgICAgbmFtZS5zdGFydHNXaXRoKCcoTGVnYWN5KScpID8gYWNjIDogeyAuLi5hY2MsIFtuYW1lXTogaWQgfSxcbiAgICAgICAge30sXG4gICAgICApXG4gICAgOiBudWxsXG5cbmNvbnN0IHdyaXRlQ2F0c1RvTG9jYWxTdG9yYWdlID0gYXN5bmMgKFxuICBjYXRzOiBQcm9taXNlPENhdEVudHJpZXMgfCBudWxsPixcbik6IFByb21pc2U8Q2F0RW50cmllcz4gPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2F0cycsIEpTT04uc3RyaW5naWZ5KChhd2FpdCBjYXRzKSA/PyBGQUxMQkFDSykpXG4gIHJldHVybiAoYXdhaXQgY2F0cykgPz8gRkFMTEJBQ0tcbn1cblxuY2xhc3MgQ2F0U2VsZWN0b3IgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGluaXQoKVxuXG4gICAgY29uc3Qgc2VsZWN0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50XG5cbiAgICB0aGlzLmJ1aWxkU2VsZWN0KHRoaXMuZ2V0Q2F0cygpLCBzZWxlY3QpXG5cbiAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgXyA9PiB7XG4gICAgICBzZWxlY3QuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgY3JlYXRlQ3VzdG9tRXZlbnQoJ2NhdENoYW5nZWQnLCB7XG4gICAgICAgICAgY2F0OiBzZWxlY3Qub3B0aW9ucy5pdGVtKHNlbGVjdC5zZWxlY3RlZEluZGV4KSxcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgfSlcblxuICAgIHNoYWRvdy5hcHBlbmQoaW5pdFN0eWxlKCksIGNvbnRhaW5lcilcbiAgfVxuXG4gIGJ1aWxkU2VsZWN0ID0gKFxuICAgIGNhdHM6IENhdEVudHJpZXMgfCBQcm9taXNlPENhdEVudHJpZXM+LFxuICAgIGVsOiBIVE1MU2VsZWN0RWxlbWVudCxcbiAgKSA9PiB7XG4gICAgaWYgKCEoY2F0cyBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICBlbC5pbm5lckhUTUwgPSBPYmplY3QuZW50cmllcyhjYXRzKS5tYXAob3B0aW9uVGVtcGxhdGUpLmpvaW4oJ1xcbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNhdHMudGhlbihjID0+IHRoaXMuYnVpbGRTZWxlY3QoYywgZWwpKVxuICAgIH1cbiAgfVxuXG4gIGdldENhdHMgPSAoKTogQ2F0RW50cmllcyB8IFByb21pc2U8Q2F0RW50cmllcz4gPT5cbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0cycpXG4gICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdHMnKSBhcyBzdHJpbmcpXG4gICAgICA6IHRoaXMuZmV0Y2hDYXRzQW5kUGFyc2VKc29uKClcblxuICB0cmlnZ2VyRmV0Y2ggPSAoY2F0czogUHJvbWlzZTxDYXRFbnRyaWVzPikgPT4ge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgndHJpZ2dlckZldGNoJykpXG4gICAgcmV0dXJuIGNhdHNcbiAgfVxuXG4gIGZldGNoQ2F0c0FuZFBhcnNlSnNvbjogKCkgPT4gUHJvbWlzZTxDYXRFbnRyaWVzPiA9IGNvbXBvc2UoXG4gICAgZmV0Y2hDYXRzLFxuICAgIHBhcnNlQ2F0QXBpSnNvbixcbiAgICB3cml0ZUNhdHNUb0xvY2FsU3RvcmFnZSxcbiAgICB0aGlzLnRyaWdnZXJGZXRjaCxcbiAgKVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoVEFHLCBDYXRTZWxlY3RvcilcblxuZXhwb3J0IGRlZmF1bHQgVEFHXG4iLCJpbXBvcnQgeyBjIH0gZnJvbSAnLi4vLi4vdXRpbHMvalF1ZXJ5J1xuaW1wb3J0IENhdFNlbGVjdG9yLCB7IE9uQ2hhbmdlIH0gZnJvbSAnLi9DYXRTZWxlY3RvcidcblxuY29uc3QgVEFHID0gJ2NhdC1zZWxlY3Rvci1jb250YWluZXInXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhdFNlbGVjdG9yQ29udGFpbmVyIHtcbiAgZWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbFxufVxuXG5jb25zdCBzdHlsZSA9IGBcbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAjY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5gXG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICA8c3Bhbj5Zb3UgaGF2ZSB0byBzaG93IHZpZGVvIHByb29mIGlmIHlvdXI8L3NwYW4+XG4gIDxzcGFuPnJ1biBpcyBxdWlja2VyIHRoYW4gb3IgZXhhY3RseSBhdDwvc3Bhbj5cbjwvZGl2PlxuYFxuXG5jb25zdCBpbml0U3R5bGUgPSAoKSA9PiBPYmplY3QuYXNzaWduKGMoJ3N0eWxlJyksIHsgdGV4dENvbnRlbnQ6IHN0eWxlIH0pXG5cbmNvbnN0IGluaXQgPSAoKSA9PiBPYmplY3QuYXNzaWduKGMoJ2RpdicpLCB7IGlubmVySFRNTDogdGVtcGxhdGUgfSkucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50XG5cbmNsYXNzIENhdFNlbGVjdG9yQ29udGFpbmVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSlcbiAgICBjb25zdCBjb250YWluZXIgPSBpbml0KClcbiAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGMoQ2F0U2VsZWN0b3IpLCBjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZClcbiAgICBzaGFkb3cuYXBwZW5kKGluaXRTdHlsZSgpLCBjb250YWluZXIpXG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFRBRywgQ2F0U2VsZWN0b3JDb250YWluZXIpXG5cbmV4cG9ydCBkZWZhdWx0IFRBR1xuIiwiZXhwb3J0IGludGVyZmFjZSBJRGlzcGxheSB7XG4gIHRpbWVEaXNwbGF5OiBIVE1MRGl2RWxlbWVudFxuICB0aW1lOiBudW1iZXJcbiAgbWVzc2FnZTogc3RyaW5nXG4gIGhpZGU6ICgpID0+IHZvaWRcbiAgc2hvdzogKCkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSVRpbWUge1xuICBob3VyczogbnVtYmVyXG4gIG1pbnV0ZXM6IG51bWJlclxuICBzZWNvbmRzOiBudW1iZXJcbn1cblxuY29uc3QgVEhSRVNIT0xEID0gMS4xXG5cbmNvbnN0IGNhbGN1bGF0ZVRocmVzaG9sZFRpbWUgPSAod3JUaW1lSW5TZWNvbmRzOiBudW1iZXIpID0+XG4gIHdyVGltZUluU2Vjb25kcyAqIFRIUkVTSE9MRFxuXG5jb25zdCBwYXJzZVRocmVzaG9sZFRpbWUgPSAoczogbnVtYmVyKTogSVRpbWUgPT4ge1xuICBjb25zdCBbaG91cnMsIG1pbnNTZWNzXSA9IFt+fihzIC8gMzYwMCksIHMgJSAzNjAwXVxuICBjb25zdCBbbWludXRlcywgc2Vjb25kc10gPSBbfn4obWluc1NlY3MgLyA2MCksIE1hdGguY2VpbChtaW5zU2VjcyAlIDYwKV1cbiAgcmV0dXJuIHtcbiAgICBob3VycyxcbiAgICBtaW51dGVzLFxuICAgIHNlY29uZHMsXG4gIH1cbn1cblxuY29uc3QgZGlzcGxheVRocmVzaG9sZFRpbWUgPSAodGltZURpc3BsYXk6IEhUTUxEaXZFbGVtZW50LCB0aW1lOiBudW1iZXIpID0+IHtcbiAgY29uc3QgeyBob3VycywgbWludXRlcywgc2Vjb25kcyB9ID0gcGFyc2VUaHJlc2hvbGRUaW1lKHRpbWUpXG4gIHRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7aG91cnN9SCAke21pbnV0ZXN9TSAke3NlY29uZHN9U2Bcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHBhcmVudDogSFRNTEVsZW1lbnQpOiBJRGlzcGxheSA9PiB7XG4gIGNvbnN0IHRpbWVEaXNwbGF5ID0gcGFyZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICB0aW1lRGlzcGxheS5pZCA9ICdkaXNwbGF5J1xuICB0aW1lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcblxuICByZXR1cm4ge1xuICAgIHRpbWVEaXNwbGF5LFxuICAgIHNldCB0aW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG4gICAgICBkaXNwbGF5VGhyZXNob2xkVGltZSh0aGlzLnRpbWVEaXNwbGF5LCBjYWxjdWxhdGVUaHJlc2hvbGRUaW1lKHRpbWUpKVxuICAgIH0sXG5cbiAgICBzZXQgbWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgIGlmICghdGhpcy50aW1lRGlzcGxheSkge1xuICAgICAgICB0aHJvdyBFcnJvclxuICAgICAgfVxuICAgICAgdGhpcy50aW1lRGlzcGxheS50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICB9LFxuXG4gICAgaGlkZSgpIHtcbiAgICAgIHRoaXMudGltZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgfSxcblxuICAgIHNob3coKSB7XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRXZlbnQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IGdldERlZmF1bHRDYXQgfSBmcm9tICcuLi8uLi91dGlscy9jYXRzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlJ1xuaW1wb3J0IGZldGNoQXBpIGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoQXBpJ1xuaW1wb3J0IHsgYyB9IGZyb20gJy4uLy4uL3V0aWxzL2pRdWVyeSdcbmltcG9ydCBDYXRTZWxlY3RvckNvbnRhaW5lciBmcm9tICcuL0NhdFNlbGVjdG9yQ29udGFpbmVyJ1xuaW1wb3J0IERpc3BsYXksIHsgSURpc3BsYXkgfSBmcm9tICcuL0Rpc3BsYXknXG5cbmludGVyZmFjZSBSdW5SZXNwb25zZSB7XG4gIGRhdGE6IHtcbiAgICBydW5zOiB7XG4gICAgICBydW46IHtcbiAgICAgICAgdGltZXM6IHtcbiAgICAgICAgICBpbmdhbWVfdDogbnVtYmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9W11cbiAgfVxufVxuXG5jb25zdCBTVFlMRSA9IGBcbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IHNvbGlkIDE4cHggaHNsKDAsIDAlLCAxMiUpO1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDk3JSk7XG59XG5cbmJ1dHRvbiwgc2VsZWN0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJhc3RyYWxzT2thbWlcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbG9hZGluZy1pY29uIHtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4jZGlzcGxheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xufVxuXG4jdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAjY29udGFpbmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIDI0cHggaHNsKDAsIDAlLCAxMiUpO1xuICAgIHBhZGRpbmc6IDQ4cHg7XG4gIH1cblxuICAjZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuYFxuXG5jbGFzcyBNYWluQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxuICBfZGlzcGxheTogSURpc3BsYXlcbiAgX2xvYWRpbmdJY29uOiBIVE1MSW1hZ2VFbGVtZW50XG4gIF9idXR0b246IEhUTUxCdXR0b25FbGVtZW50XG4gIF9zZWxlY3RlZENhdCA9IGdldERlZmF1bHRDYXQoKVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG5cbiAgICB0aGlzLl9jb250YWluZXIgPSBjKCdkaXYnKVxuICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjKENhdFNlbGVjdG9yQ29udGFpbmVyKSlcbiAgICB0aGlzLl9sb2FkaW5nSWNvbiA9IHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjKCdpbWcnKSlcbiAgICB0aGlzLl9kaXNwbGF5ID0gRGlzcGxheSh0aGlzLl9jb250YWluZXIpXG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGMoJ2J1dHRvbicpKVxuXG4gICAgdGhpcy5fY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcidcbiAgICAvLyBUT0RPOiBGaXggdGhpcy4gVGhpcyBkb2Vzbid0IHRyaWdnZXIuXG4gICAgdGhpcy5fY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyaWdnZXJGZXRjaCcsIHRoaXMucmVmcmVzaClcbiAgICB0aGlzLl9sb2FkaW5nSWNvbi5pZCA9ICdsb2FkaW5nLWljb24nXG4gICAgdGhpcy5fbG9hZGluZ0ljb24uc3JjID0gJ2Fzc2V0cy9hbW15LWJvcmtpbmcuZ2lmJ1xuICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9ICdHZXQvUmVmcmVzaCdcbiAgICB0aGlzLl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2gpKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjKCdzdHlsZScpXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBTVFlMRVxuXG4gICAgc2hhZG93LmFwcGVuZChzdHlsZSwgdGhpcy5fY29udGFpbmVyKVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSByZXR1cm5cblxuICAgIHRoaXMucmVmcmVzaCgpXG5cbiAgICB0aGlzLl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2F0Q2hhbmdlZCcsIGUgPT4ge1xuICAgICAgLy8gQHRzLWlnbm9yZSBUUyBkb2Vzbid0IGhhdmUgQ3VzdG9tRXZlbnQgaGFuZGxlciBzdXBwb3J0IHlldFxuICAgICAgY29uc3QgeyBjYXQgfSA9IGUuZGV0YWlsXG4gICAgICB0aGlzLl9zZWxlY3RlZENhdCA9IGNhdC52YWx1ZVxuICAgICAgdGhpcy5zYXZlRGVmYXVsdENhdE5hbWVUb0xvY2FsU3RvcmFnZShjYXQuaW5uZXJUZXh0KVxuICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3NlbGVjdGVkQ2F0ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nIG9uIG91ciBlbmQhIFRyeSByZWZyZXNoaW5nLidcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnNob3dMb2FkaW5nKClcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmdldFdyRm9yQ2F0KHRoaXMuX3NlbGVjdGVkQ2F0KVxuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MjApIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gXCJTUkMncyBidXN5ISBSZXRyeSBMYXRlci5cIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ0ZhaWxlZCEgUGxlYXNlIFJldHJ5LidcbiAgICAgIH1cbiAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2V0RGlzcGxheVRpbWUoYXdhaXQgcmVzLmpzb24oKSlcbiAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgZSB9KVxuICAgIH1cbiAgfVxuXG4gIGhpZGVMb2FkaW5nID0gKCkgPT4ge1xuICAgIHRoaXMuX2xvYWRpbmdJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIHRoaXMuaGlkZUxvYWRpbmdJbWFnZSgpXG4gICAgdGhpcy5fZGlzcGxheS5zaG93KClcbiAgfVxuXG4gIHNob3dMb2FkaW5nID0gKCkgPT4ge1xuICAgIHRoaXMuc2hvd0xvYWRpbmdJbWFnZSgpXG4gICAgdGhpcy5fZGlzcGxheS5oaWRlKClcbiAgICB0aGlzLl9sb2FkaW5nSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgfVxuXG4gIGdldFdyRm9yQ2F0ID0gYXN5bmMgKGNhdDogc3RyaW5nKSA9PlxuICAgIGZldGNoQXBpKFxuICAgICAgYGxlYWRlcmJvYXJkcy93Nmo3NTQ2ai9jYXRlZ29yeS8ke2NhdH0/dmFyLTY4azRkeXpsPTRxeTNyNTdsJnRvcD0xYCxcbiAgICApXG5cbiAgc2F2ZURlZmF1bHRDYXROYW1lVG9Mb2NhbFN0b3JhZ2UgPSAoY2F0TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY29uc3RhbnRzLkRFRkFVTFRfQ0FUX05BTUVfS0VZLCBjYXROYW1lKVxuICB9XG5cbiAgc2V0RGlzcGxheVRpbWUgPSBhc3luYyAoanNvbjogUnVuUmVzcG9uc2UpID0+IHtcbiAgICB0aGlzLl9kaXNwbGF5LnRpbWUgPSBqc29uLmRhdGEucnVuc1swXS5ydW4udGltZXMuaW5nYW1lX3RcbiAgfVxuXG4gIC8vIFRPRE86IERvZXNuJ3Qgd29yazsgZXZlbnQgc2VlbWluZ2x5IGRvZXNuJ3QgZGlzcGF0Y2guXG4gIGhpZGVMb2FkaW5nSW1hZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy5fY29udGFpbmVyLmRpc3BhdGNoRXZlbnQoXG4gICAgICBjcmVhdGVDdXN0b21FdmVudCgnaXNMb2FkaW5nJywgeyBpc0xvYWRpbmc6IGZhbHNlIH0pLFxuICAgIClcbiAgfVxuXG4gIC8vIFRPRE86IERpdHRvLlxuICBzaG93TG9hZGluZ0ltYWdlID0gKCkgPT4ge1xuICAgIHRoaXMuX2NvbnRhaW5lci5kaXNwYXRjaEV2ZW50KFxuICAgICAgY3JlYXRlQ3VzdG9tRXZlbnQoJ2lzTG9hZGluZycsIHtcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgfSksXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtYWluLWNvbXBvbmVudCcsIE1haW5Db21wb25lbnQpXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIERFRkFVTFRfQ0FUX05BTUVfS0VZOiAnZGVmYXVsdENhdE5hbWUnLFxuICBCQUNLR1JPVU5EX0lNQUdFUzogWydhbW15LXN0YXRpYy5wbmcnLCAnYmVhZC5wbmcnXSxcbiAgTE9BRElOR19HSUZTOiBbJ0JvcmdGbGFnLmdpZicsICdCb3JnSGVhcnQuZ2lmJywgJ1BlbnNpdmVIZWFydC5naWYnXSxcbn1cbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5cbmV4cG9ydCB0eXBlIENhdHMgPSB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfVxuXG5jb25zdCBERUZBVUxUX0NBVF9OQU1FID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLkRFRkFVTFRfQ0FUX05BTUVfS0VZKSB8fCAnTkcrIEFueSUnXG5cbmV4cG9ydCBjb25zdCBnZXRDYXRzID0gKCk6IENhdHMgfCBudWxsID0+IHtcbiAgY29uc3QgY2F0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRzJylcbiAgaWYgKGNhdHMgIT09IG51bGwpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShjYXRzKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBnZXRDYXQgPSAoY2F0OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsID0+IGdldENhdHMoKT8uW2NhdF0gfHwgbnVsbFxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdENhdCA9ICgpOiBzdHJpbmcgPT4gZ2V0Q2F0KERFRkFVTFRfQ0FUX05BTUUpIGFzIHN0cmluZ1xuIiwiZXhwb3J0IGRlZmF1bHQgPEYgZXh0ZW5kcyAoLi4uYTogYW55W10pID0+IGFueT4oXG4gIGZuOiBGLFxuICBkZWxheSA9IDEwMDAsXG4gIC4uLmFyZ3M6IFBhcmFtZXRlcnM8Rj5cbikgPT4ge1xuICBsZXQgYnVzeSA9IGZhbHNlXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKCFidXN5KSB7XG4gICAgICBidXN5ID0gdHJ1ZVxuICAgICAgZm4oLi4uYXJncylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBidXN5ID0gZmFsc2VcbiAgICAgIH0sIGRlbGF5KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyAoc2x1Zzogc3RyaW5nKSA9PlxuICBmZXRjaChgaHR0cHM6Ly93d3cuc3BlZWRydW4uY29tL2FwaS92MS8ke3NsdWd9YCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKiwqOyBxPTAuMDEnLFxuICAgIH0sXG4gIH0pXG4iLCJleHBvcnQgY29uc3QgY3VycnkgPSAoZjogRnVuY3Rpb24sIC4uLm91dGVyOiBhbnlbXSkgPT4gKC4uLmlubmVyOiBhbnlbXSkgPT5cbiAgZi5hcHBseShudWxsLCBvdXRlci5jb25jYXQoaW5uZXIpKVxuXG5leHBvcnQgY29uc3QgY29tcG9zZSA9XG4gIChmOiBGdW5jdGlvbiwgLi4uZzogRnVuY3Rpb25bXSkgPT5cbiAgKHg/OiBhbnkpOiBhbnkgPT5cbiAgICAhZy5sZW5ndGggPyBmKHgpIDogY29tcG9zZShnWzBdLCAuLi5nLnNsaWNlKDEpKShmKHgpKVxuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUN1c3RvbUV2ZW50ID0gKG5hbWU6IHN0cmluZywgZGV0YWlsPzogT2JqZWN0KSA9PlxuICBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY29tcG9zZWQ6IHRydWUsXG4gICAgZGV0YWlsLFxuICB9KVxuIiwiZXhwb3J0IGNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpXG5cbmV4cG9ydCBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gJy4vcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzJ1xuaW1wb3J0IE1haW5Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL01haW5Db21wb25lbnQvJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7ICQgfSBmcm9tICcuL3V0aWxzL2pRdWVyeSdcblxuY29uc3QgZ2V0UmFuZG9tSW1hZ2UgPSAoZnJvbTogc3RyaW5nW10pID0+XG4gIGB1cmwoYXNzZXRzLyR7ZnJvbVt+fihNYXRoLnJhbmRvbSgpICogZnJvbS5sZW5ndGgpXX0pYFxuXG5jb25zdCBjdXJyZW50QmFja2dyb3VuZEltYWdlID0gZ2V0UmFuZG9tSW1hZ2UoY29uc3RhbnRzLkJBQ0tHUk9VTkRfSU1BR0VTKVxuXG5NYWluQ29tcG9uZW50KClcblxuY29uc3QgcGxheUJhY2tncm91bmRMb2FkaW5nR2lmID0gKCkgPT4ge1xuICAkKCdib2R5JykhLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGdldFJhbmRvbUltYWdlKGNvbnN0YW50cy5MT0FESU5HX0dJRlMpXG59XG5cbmNvbnN0IHN0b3BCYWNrZ3JvdW5kTG9hZGluZ0dpZiA9ICgpID0+IHtcbiAgJCgnYm9keScpIS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBjdXJyZW50QmFja2dyb3VuZEltYWdlXG59XG5cbiQoJ2JvZHknKSEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gY3VycmVudEJhY2tncm91bmRJbWFnZVxuXG4kKCdib2R5JykhLmFkZEV2ZW50TGlzdGVuZXIoJ2lzTG9hZGluZycsIGUgPT4ge1xuICAvLyBAdHMtaWdub3JlIFRTIGRvZXNuJ3QgaGF2ZSBzdXBwb3J0IGZvciBjdXN0b20gZXZlbnRzIHlldFxuICBjb25zdCB7IGlzTG9hZGluZyB9ID0gZS5kZXRhaWxcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHBsYXlCYWNrZ3JvdW5kTG9hZGluZ0dpZigpXG4gIH0gZWxzZSB7XG4gICAgc3RvcEJhY2tncm91bmRMb2FkaW5nR2lmKClcbiAgfVxufSlcblxuJCgnbWFpbicpIS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluLWNvbXBvbmVudCcpKVxuXG4vLyByZWdpc3RlclNlcnZpY2VXb3JrZXIoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==