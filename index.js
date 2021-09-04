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
    BACKGROUND_IMAGES: [
        'assets/background-images/ammy-static.png',
        'assets/background-images/bead.png',
    ],
    LOADING_GIFS: [
        'assets/loading-gifs/BorgFlag.gif',
        'assets/loading-gifs/BorgHeart.gif',
        'assets/loading-gifs/PensiveHeart.gif',
    ],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50L0NhdFNlbGVjdG9yLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvQ2F0U2VsZWN0b3JDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9EaXNwbGF5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvY2F0cy50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2ZldGNoQXBpLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy91dGlscy9mcC50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2pRdWVyeS50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvaW5k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MEJBQTBCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRXZlbnQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IGdldERlZmF1bHRDYXQgfSBmcm9tICcuLi8uLi91dGlscy9jYXRzJ1xuaW1wb3J0IGZldGNoQXBpIGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoQXBpJ1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZwJ1xuaW1wb3J0IHsgYyB9IGZyb20gJy4uLy4uL3V0aWxzL2pRdWVyeSdcblxuZXhwb3J0IHR5cGUgQ2F0RW50cmllcyA9IHtcbiAgW25hbWU6IHN0cmluZ106IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgQ2F0UmVzcG9uc2Uge1xuICBkYXRhOiB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICB9W11cbn1cblxuY29uc3QgRkFMTEJBQ0s6IENhdEVudHJpZXMgPSB7XG4gICdORyBBbnklJzogJ3pkbndwNHhkJyxcbiAgJ05HKyBBbnklJzogJ3hrOTAxZ2drJyxcbiAgJ05HIEFsbCBCcnVzaGVzJzogJ3EyNW93cWdrJyxcbiAgJ05HKyBBbGwgQnJ1c2hlcyc6ICd6MjdneTZvMicsXG4gICdUb3AgRG9nJzogJ21rZW96cXhkJyxcbiAgJ0FsbCBNYWpvciBCb3NzZXMnOiAnOWQ4MzE5NjInLFxufVxuXG5leHBvcnQgdHlwZSBPbkNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhdFNlbGVjdG9yIHtcbiAgZWw6IEhUTUxTZWxlY3RFbGVtZW50XG4gIGN1cnJlbnQ6IHN0cmluZ1xufVxuXG5jb25zdCBUQUcgPSAnY2F0LXNlbGVjdG9yJ1xuXG5jb25zdCBzdHlsZSA9IGBcbiNjb250YWluZXIge1xuICBwYWRkaW5nOiAwcmVtIC41cmVtO1xufVxuXG5zZWxlY3Qge1xuICBmb250LWZhbWlseTogXCJhc3RyYWxzT2thbWlcIjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY2F0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcImFzdHJhbHNPa2FtaVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5gXG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICA8c2VsZWN0Pjwvc2VsZWN0PlxuPC9kaXY+XG5gXG5cbmNvbnN0IG9wdGlvblRlbXBsYXRlID0gKGVudHJ5OiBbc3RyaW5nLCBzdHJpbmddKSA9PiBgXG48b3B0aW9uICR7XG4gIGVudHJ5WzFdID09PSBnZXREZWZhdWx0Q2F0KCkgJiYgJ3NlbGVjdGVkJ1xufSBjbGFzcz1cImNhdC1vcHRpb25cIiB2YWx1ZT0ke2VudHJ5WzFdfT5cbiR7ZW50cnlbMF19XG48L29wdGlvbj5cbmBcblxuY29uc3QgaW5pdFN0eWxlID0gKCkgPT4gT2JqZWN0LmFzc2lnbihjKCdzdHlsZScpLCB7IHRleHRDb250ZW50OiBzdHlsZSB9KVxuXG5jb25zdCBpbml0ID0gKCkgPT5cbiAgT2JqZWN0LmFzc2lnbihjKCdkaXYnKSwgeyBpbm5lckhUTUw6IHRlbXBsYXRlIH0pLnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNjb250YWluZXInLFxuICApIGFzIEhUTUxEaXZFbGVtZW50XG5cbmNvbnN0IGZldGNoQ2F0cyA9IGFzeW5jICgpOiBQcm9taXNlPENhdFJlc3BvbnNlIHwgbnVsbD4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEFwaSgnZ2FtZXMvdzZqNzU0NmovY2F0ZWdvcmllcycpXG4gIGlmICghcmVzLm9rKSB7XG4gICAgY29uc29sZS50YWJsZSh7IHN0YXR1czogcmVzLnN0YXR1cywgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQgfSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiByZXMuanNvbigpXG59XG5cbmNvbnN0IHBhcnNlQ2F0QXBpSnNvbiA9IGFzeW5jIChcbiAganNvbjogUHJvbWlzZTxDYXRSZXNwb25zZSB8IG51bGw+LFxuKTogUHJvbWlzZTxDYXRFbnRyaWVzIHwgbnVsbD4gPT5cbiAgKGF3YWl0IGpzb24pXG4gICAgPyAoKGF3YWl0IGpzb24pIGFzIENhdFJlc3BvbnNlKS5kYXRhLnJlZHVjZShcbiAgICAgICAgKGFjYywgeyBpZCwgbmFtZSB9KSA9PlxuICAgICAgICAgIG5hbWUuc3RhcnRzV2l0aCgnKExlZ2FjeSknKSA/IGFjYyA6IHsgLi4uYWNjLCBbbmFtZV06IGlkIH0sXG4gICAgICAgIHt9LFxuICAgICAgKVxuICAgIDogbnVsbFxuXG5jb25zdCB3cml0ZUNhdHNUb0xvY2FsU3RvcmFnZSA9IGFzeW5jIChcbiAgY2F0czogUHJvbWlzZTxDYXRFbnRyaWVzIHwgbnVsbD4sXG4pOiBQcm9taXNlPENhdEVudHJpZXM+ID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhdHMnLCBKU09OLnN0cmluZ2lmeSgoYXdhaXQgY2F0cykgPz8gRkFMTEJBQ0spKVxuICByZXR1cm4gKGF3YWl0IGNhdHMpID8/IEZBTExCQUNLXG59XG5cbmNsYXNzIENhdFNlbGVjdG9yIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSlcbiAgICBjb25zdCBjb250YWluZXIgPSBpbml0KClcblxuICAgIGNvbnN0IHNlbGVjdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuXG4gICAgdGhpcy5idWlsZFNlbGVjdCh0aGlzLmdldENhdHMoKSwgc2VsZWN0KVxuXG4gICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIF8gPT4ge1xuICAgICAgc2VsZWN0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIGNyZWF0ZUN1c3RvbUV2ZW50KCdjYXRDaGFuZ2VkJywge1xuICAgICAgICAgIGNhdDogc2VsZWN0Lm9wdGlvbnMuaXRlbShzZWxlY3Quc2VsZWN0ZWRJbmRleCksXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgIH0pXG5cbiAgICBzaGFkb3cuYXBwZW5kKGluaXRTdHlsZSgpLCBjb250YWluZXIpXG4gIH1cblxuICBidWlsZFNlbGVjdCA9IChcbiAgICBjYXRzOiBDYXRFbnRyaWVzIHwgUHJvbWlzZTxDYXRFbnRyaWVzPixcbiAgICBlbDogSFRNTFNlbGVjdEVsZW1lbnQsXG4gICkgPT4ge1xuICAgIGlmICghKGNhdHMgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgZWwuaW5uZXJIVE1MID0gT2JqZWN0LmVudHJpZXMoY2F0cykubWFwKG9wdGlvblRlbXBsYXRlKS5qb2luKCdcXG4nKVxuICAgIH0gZWxzZSB7XG4gICAgICBjYXRzLnRoZW4oYyA9PiB0aGlzLmJ1aWxkU2VsZWN0KGMsIGVsKSlcbiAgICB9XG4gIH1cblxuICBnZXRDYXRzID0gKCk6IENhdEVudHJpZXMgfCBQcm9taXNlPENhdEVudHJpZXM+ID0+XG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdHMnKVxuICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRzJykgYXMgc3RyaW5nKVxuICAgICAgOiB0aGlzLmZldGNoQ2F0c0FuZFBhcnNlSnNvbigpXG5cbiAgdHJpZ2dlckZldGNoID0gKGNhdHM6IFByb21pc2U8Q2F0RW50cmllcz4pID0+IHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ3RyaWdnZXJGZXRjaCcpKVxuICAgIHJldHVybiBjYXRzXG4gIH1cblxuICBmZXRjaENhdHNBbmRQYXJzZUpzb246ICgpID0+IFByb21pc2U8Q2F0RW50cmllcz4gPSBjb21wb3NlKFxuICAgIGZldGNoQ2F0cyxcbiAgICBwYXJzZUNhdEFwaUpzb24sXG4gICAgd3JpdGVDYXRzVG9Mb2NhbFN0b3JhZ2UsXG4gICAgdGhpcy50cmlnZ2VyRmV0Y2gsXG4gIClcbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFRBRywgQ2F0U2VsZWN0b3IpXG5cbmV4cG9ydCBkZWZhdWx0IFRBR1xuIiwiaW1wb3J0IHsgYyB9IGZyb20gJy4uLy4uL3V0aWxzL2pRdWVyeSdcbmltcG9ydCBDYXRTZWxlY3RvciwgeyBPbkNoYW5nZSB9IGZyb20gJy4vQ2F0U2VsZWN0b3InXG5cbmNvbnN0IFRBRyA9ICdjYXQtc2VsZWN0b3ItY29udGFpbmVyJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYXRTZWxlY3RvckNvbnRhaW5lciB7XG4gIGVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGxcbn1cblxuY29uc3Qgc3R5bGUgPSBgXG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuYFxuXG5jb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgPHNwYW4+WW91IGhhdmUgdG8gc2hvdyB2aWRlbyBwcm9vZiBpZiB5b3VyPC9zcGFuPlxuICA8c3Bhbj5ydW4gaXMgcXVpY2tlciB0aGFuIG9yIGV4YWN0bHkgYXQ8L3NwYW4+XG48L2Rpdj5cbmBcblxuY29uc3QgaW5pdFN0eWxlID0gKCkgPT4gT2JqZWN0LmFzc2lnbihjKCdzdHlsZScpLCB7IHRleHRDb250ZW50OiBzdHlsZSB9KVxuXG5jb25zdCBpbml0ID0gKCkgPT4gT2JqZWN0LmFzc2lnbihjKCdkaXYnKSwgeyBpbm5lckhUTUw6IHRlbXBsYXRlIH0pLnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudFxuXG5jbGFzcyBDYXRTZWxlY3RvckNvbnRhaW5lciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG4gICAgY29uc3QgY29udGFpbmVyID0gaW5pdCgpXG4gICAgY29udGFpbmVyLmluc2VydEJlZm9yZShjKENhdFNlbGVjdG9yKSwgY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpXG4gICAgc2hhZG93LmFwcGVuZChpbml0U3R5bGUoKSwgY29udGFpbmVyKVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShUQUcsIENhdFNlbGVjdG9yQ29udGFpbmVyKVxuXG5leHBvcnQgZGVmYXVsdCBUQUdcbiIsImV4cG9ydCBpbnRlcmZhY2UgSURpc3BsYXkge1xuICB0aW1lRGlzcGxheTogSFRNTERpdkVsZW1lbnRcbiAgdGltZTogbnVtYmVyXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBoaWRlOiAoKSA9PiB2b2lkXG4gIHNob3c6ICgpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElUaW1lIHtcbiAgaG91cnM6IG51bWJlclxuICBtaW51dGVzOiBudW1iZXJcbiAgc2Vjb25kczogbnVtYmVyXG59XG5cbmNvbnN0IFRIUkVTSE9MRCA9IDEuMVxuXG5jb25zdCBjYWxjdWxhdGVUaHJlc2hvbGRUaW1lID0gKHdyVGltZUluU2Vjb25kczogbnVtYmVyKSA9PlxuICB3clRpbWVJblNlY29uZHMgKiBUSFJFU0hPTERcblxuY29uc3QgcGFyc2VUaHJlc2hvbGRUaW1lID0gKHM6IG51bWJlcik6IElUaW1lID0+IHtcbiAgY29uc3QgW2hvdXJzLCBtaW5zU2Vjc10gPSBbfn4ocyAvIDM2MDApLCBzICUgMzYwMF1cbiAgY29uc3QgW21pbnV0ZXMsIHNlY29uZHNdID0gW35+KG1pbnNTZWNzIC8gNjApLCBNYXRoLmNlaWwobWluc1NlY3MgJSA2MCldXG4gIHJldHVybiB7XG4gICAgaG91cnMsXG4gICAgbWludXRlcyxcbiAgICBzZWNvbmRzLFxuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlUaHJlc2hvbGRUaW1lID0gKHRpbWVEaXNwbGF5OiBIVE1MRGl2RWxlbWVudCwgdGltZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSA9IHBhcnNlVGhyZXNob2xkVGltZSh0aW1lKVxuICB0aW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2hvdXJzfUggJHttaW51dGVzfU0gJHtzZWNvbmRzfVNgXG59XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogSURpc3BsYXkgPT4ge1xuICBjb25zdCB0aW1lRGlzcGxheSA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgdGltZURpc3BsYXkuaWQgPSAnZGlzcGxheSdcbiAgdGltZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG5cbiAgcmV0dXJuIHtcbiAgICB0aW1lRGlzcGxheSxcbiAgICBzZXQgdGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgIGlmICghdGhpcy50aW1lRGlzcGxheSkge1xuICAgICAgICB0aHJvdyBFcnJvclxuICAgICAgfVxuICAgICAgZGlzcGxheVRocmVzaG9sZFRpbWUodGhpcy50aW1lRGlzcGxheSwgY2FsY3VsYXRlVGhyZXNob2xkVGltZSh0aW1lKSlcbiAgICB9LFxuXG4gICAgc2V0IG1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICBpZiAoIXRoaXMudGltZURpc3BsYXkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3JcbiAgICAgIH1cbiAgICAgIHRoaXMudGltZURpc3BsYXkudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgfSxcblxuICAgIGhpZGUoKSB7XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIH0sXG5cbiAgICBzaG93KCkge1xuICAgICAgdGhpcy50aW1lRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBnZXREZWZhdWx0Q2F0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY2F0cydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZSdcbmltcG9ydCBmZXRjaEFwaSBmcm9tICcuLi8uLi91dGlscy9mZXRjaEFwaSdcbmltcG9ydCB7IGMgfSBmcm9tICcuLi8uLi91dGlscy9qUXVlcnknXG5pbXBvcnQgQ2F0U2VsZWN0b3JDb250YWluZXIgZnJvbSAnLi9DYXRTZWxlY3RvckNvbnRhaW5lcidcbmltcG9ydCBEaXNwbGF5LCB7IElEaXNwbGF5IH0gZnJvbSAnLi9EaXNwbGF5J1xuXG5pbnRlcmZhY2UgUnVuUmVzcG9uc2Uge1xuICBkYXRhOiB7XG4gICAgcnVuczoge1xuICAgICAgcnVuOiB7XG4gICAgICAgIHRpbWVzOiB7XG4gICAgICAgICAgaW5nYW1lX3Q6IG51bWJlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVtdXG4gIH1cbn1cblxuY29uc3QgU1RZTEUgPSBgXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBzb2xpZCAxOHB4IGhzbCgwLCAwJSwgMTIlKTtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCA5NyUpO1xufVxuXG5idXR0b24sIHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiYXN0cmFsc09rYW1pXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2xvYWRpbmctaWNvbiB7XG4gIGhlaWdodDogMi41cmVtO1xuICBhbmltYXRpb24tbmFtZTogc3BpbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuI2Rpc3BsYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cblxuI3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBzb2xpZCAyNHB4IGhzbCgwLCAwJSwgMTIlKTtcbiAgICBwYWRkaW5nOiA0OHB4O1xuICB9XG5cbiAgI2Rpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gIH1cbn1cbmBcblxuY2xhc3MgTWFpbkNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRcbiAgX2Rpc3BsYXk6IElEaXNwbGF5XG4gIF9sb2FkaW5nSWNvbjogSFRNTEltYWdlRWxlbWVudFxuICBfYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudFxuICBfc2VsZWN0ZWRDYXQgPSBnZXREZWZhdWx0Q2F0KClcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KVxuXG4gICAgdGhpcy5fY29udGFpbmVyID0gYygnZGl2JylcbiAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQoYyhDYXRTZWxlY3RvckNvbnRhaW5lcikpXG4gICAgdGhpcy5fbG9hZGluZ0ljb24gPSB0aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQoYygnaW1nJykpXG4gICAgdGhpcy5fZGlzcGxheSA9IERpc3BsYXkodGhpcy5fY29udGFpbmVyKVxuICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjKCdidXR0b24nKSlcblxuICAgIHRoaXMuX2NvbnRhaW5lci5pZCA9ICdjb250YWluZXInXG4gICAgLy8gVE9ETzogRml4IHRoaXMuIFRoaXMgZG9lc24ndCB0cmlnZ2VyLlxuICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0cmlnZ2VyRmV0Y2gnLCB0aGlzLnJlZnJlc2gpXG4gICAgdGhpcy5fbG9hZGluZ0ljb24uaWQgPSAnbG9hZGluZy1pY29uJ1xuICAgIHRoaXMuX2xvYWRpbmdJY29uLnNyYyA9ICdhc3NldHMvYW1teS1ib3JraW5nLmdpZidcbiAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSAnR2V0L1JlZnJlc2gnXG4gICAgdGhpcy5fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVib3VuY2UodGhpcy5yZWZyZXNoKSlcblxuICAgIGNvbnN0IHN0eWxlID0gYygnc3R5bGUnKVxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gU1RZTEVcblxuICAgIHNoYWRvdy5hcHBlbmQoc3R5bGUsIHRoaXMuX2NvbnRhaW5lcilcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkgcmV0dXJuXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuXG4gICAgdGhpcy5fY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NhdENoYW5nZWQnLCBlID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBoYXZlIEN1c3RvbUV2ZW50IGhhbmRsZXIgc3VwcG9ydCB5ZXRcbiAgICAgIGNvbnN0IHsgY2F0IH0gPSBlLmRldGFpbFxuICAgICAgdGhpcy5fc2VsZWN0ZWRDYXQgPSBjYXQudmFsdWVcbiAgICAgIHRoaXMuc2F2ZURlZmF1bHRDYXROYW1lVG9Mb2NhbFN0b3JhZ2UoY2F0LmlubmVyVGV4dClcbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2ggPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9zZWxlY3RlZENhdCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXkubWVzc2FnZSA9ICdTb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgZW5kISBUcnkgcmVmcmVzaGluZy4nXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5zaG93TG9hZGluZygpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5nZXRXckZvckNhdCh0aGlzLl9zZWxlY3RlZENhdClcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDIwKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXkubWVzc2FnZSA9IFwiU1JDJ3MgYnVzeSEgUmV0cnkgTGF0ZXIuXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXkubWVzc2FnZSA9ICdGYWlsZWQhIFBsZWFzZSBSZXRyeS4nXG4gICAgICB9XG4gICAgICB0aGlzLmhpZGVMb2FkaW5nKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnNldERpc3BsYXlUaW1lKGF3YWl0IHJlcy5qc29uKCkpXG4gICAgICB0aGlzLmhpZGVMb2FkaW5nKClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyh7IGUgfSlcbiAgICB9XG4gIH1cblxuICBoaWRlTG9hZGluZyA9ICgpID0+IHtcbiAgICB0aGlzLl9sb2FkaW5nSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICB0aGlzLmhpZGVMb2FkaW5nSW1hZ2UoKVxuICAgIHRoaXMuX2Rpc3BsYXkuc2hvdygpXG4gIH1cblxuICBzaG93TG9hZGluZyA9ICgpID0+IHtcbiAgICB0aGlzLnNob3dMb2FkaW5nSW1hZ2UoKVxuICAgIHRoaXMuX2Rpc3BsYXkuaGlkZSgpXG4gICAgdGhpcy5fbG9hZGluZ0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gIH1cblxuICBnZXRXckZvckNhdCA9IGFzeW5jIChjYXQ6IHN0cmluZykgPT5cbiAgICBmZXRjaEFwaShcbiAgICAgIGBsZWFkZXJib2FyZHMvdzZqNzU0NmovY2F0ZWdvcnkvJHtjYXR9P3Zhci02OGs0ZHl6bD00cXkzcjU3bCZ0b3A9MWAsXG4gICAgKVxuXG4gIHNhdmVEZWZhdWx0Q2F0TmFtZVRvTG9jYWxTdG9yYWdlID0gKGNhdE5hbWU6IHN0cmluZykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNvbnN0YW50cy5ERUZBVUxUX0NBVF9OQU1FX0tFWSwgY2F0TmFtZSlcbiAgfVxuXG4gIHNldERpc3BsYXlUaW1lID0gYXN5bmMgKGpzb246IFJ1blJlc3BvbnNlKSA9PiB7XG4gICAgdGhpcy5fZGlzcGxheS50aW1lID0ganNvbi5kYXRhLnJ1bnNbMF0ucnVuLnRpbWVzLmluZ2FtZV90XG4gIH1cblxuICAvLyBUT0RPOiBEb2Vzbid0IHdvcms7IGV2ZW50IHNlZW1pbmdseSBkb2Vzbid0IGRpc3BhdGNoLlxuICBoaWRlTG9hZGluZ0ltYWdlID0gKCkgPT4ge1xuICAgIHRoaXMuX2NvbnRhaW5lci5kaXNwYXRjaEV2ZW50KFxuICAgICAgY3JlYXRlQ3VzdG9tRXZlbnQoJ2lzTG9hZGluZycsIHsgaXNMb2FkaW5nOiBmYWxzZSB9KSxcbiAgICApXG4gIH1cblxuICAvLyBUT0RPOiBEaXR0by5cbiAgc2hvd0xvYWRpbmdJbWFnZSA9ICgpID0+IHtcbiAgICB0aGlzLl9jb250YWluZXIuZGlzcGF0Y2hFdmVudChcbiAgICAgIGNyZWF0ZUN1c3RvbUV2ZW50KCdpc0xvYWRpbmcnLCB7XG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgIH0pLFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWFpbi1jb21wb25lbnQnLCBNYWluQ29tcG9uZW50KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBERUZBVUxUX0NBVF9OQU1FX0tFWTogJ2RlZmF1bHRDYXROYW1lJyxcbiAgQkFDS0dST1VORF9JTUFHRVM6IFtcbiAgICAnYXNzZXRzL2JhY2tncm91bmQtaW1hZ2VzL2FtbXktc3RhdGljLnBuZycsXG4gICAgJ2Fzc2V0cy9iYWNrZ3JvdW5kLWltYWdlcy9iZWFkLnBuZycsXG4gIF0sXG4gIExPQURJTkdfR0lGUzogW1xuICAgICdhc3NldHMvbG9hZGluZy1naWZzL0JvcmdGbGFnLmdpZicsXG4gICAgJ2Fzc2V0cy9sb2FkaW5nLWdpZnMvQm9yZ0hlYXJ0LmdpZicsXG4gICAgJ2Fzc2V0cy9sb2FkaW5nLWdpZnMvUGVuc2l2ZUhlYXJ0LmdpZicsXG4gIF0sXG59XG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9jb25zdGFudHNcIlxuXG5leHBvcnQgdHlwZSBDYXRzID0geyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH1cblxuY29uc3QgREVGQVVMVF9DQVRfTkFNRSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5ERUZBVUxUX0NBVF9OQU1FX0tFWSkgfHwgJ05HKyBBbnklJ1xuXG5leHBvcnQgY29uc3QgZ2V0Q2F0cyA9ICgpOiBDYXRzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGNhdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0cycpXG4gIGlmIChjYXRzICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoY2F0cylcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2F0ID0gKGNhdDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCA9PiBnZXRDYXRzKCk/LltjYXRdIHx8IG51bGxcblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRDYXQgPSAoKTogc3RyaW5nID0+IGdldENhdChERUZBVUxUX0NBVF9OQU1FKSBhcyBzdHJpbmdcbiIsImV4cG9ydCBkZWZhdWx0IDxGIGV4dGVuZHMgKC4uLmE6IGFueVtdKSA9PiBhbnk+KFxuICBmbjogRixcbiAgZGVsYXkgPSAxMDAwLFxuICAuLi5hcmdzOiBQYXJhbWV0ZXJzPEY+XG4pID0+IHtcbiAgbGV0IGJ1c3kgPSBmYWxzZVxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICghYnVzeSkge1xuICAgICAgYnVzeSA9IHRydWVcbiAgICAgIGZuKC4uLmFyZ3MpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYnVzeSA9IGZhbHNlXG4gICAgICB9LCBkZWxheSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHNsdWc6IHN0cmluZykgPT5cbiAgZmV0Y2goYGh0dHBzOi8vd3d3LnNwZWVkcnVuLmNvbS9hcGkvdjEvJHtzbHVnfWAsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICosKjsgcT0wLjAxJyxcbiAgICB9LFxuICB9KVxuIiwiZXhwb3J0IGNvbnN0IGN1cnJ5ID0gKGY6IEZ1bmN0aW9uLCAuLi5vdXRlcjogYW55W10pID0+ICguLi5pbm5lcjogYW55W10pID0+XG4gIGYuYXBwbHkobnVsbCwgb3V0ZXIuY29uY2F0KGlubmVyKSlcblxuZXhwb3J0IGNvbnN0IGNvbXBvc2UgPVxuICAoZjogRnVuY3Rpb24sIC4uLmc6IEZ1bmN0aW9uW10pID0+XG4gICh4PzogYW55KTogYW55ID0+XG4gICAgIWcubGVuZ3RoID8gZih4KSA6IGNvbXBvc2UoZ1swXSwgLi4uZy5zbGljZSgxKSkoZih4KSlcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVDdXN0b21FdmVudCA9IChuYW1lOiBzdHJpbmcsIGRldGFpbD86IE9iamVjdCkgPT5cbiAgbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgIGRldGFpbCxcbiAgfSlcbiIsImV4cG9ydCBjb25zdCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxuXG5leHBvcnQgY29uc3QgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuYmluZChkb2N1bWVudClcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHJlZ2lzdGVyU2VydmljZVdvcmtlciBmcm9tICcuL3JlZ2lzdGVyU2VydmljZVdvcmtlci5qcydcbmltcG9ydCBNYWluQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9NYWluQ29tcG9uZW50LydcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi91dGlscy9qUXVlcnknXG5cbmNvbnN0IGdldFJhbmRvbUltYWdlID0gKGZyb206IHN0cmluZ1tdKSA9PlxuICBgdXJsKCR7ZnJvbVt+fihNYXRoLnJhbmRvbSgpICogZnJvbS5sZW5ndGgpXX0pYFxuXG5jb25zdCBjdXJyZW50QmFja2dyb3VuZEltYWdlID0gZ2V0UmFuZG9tSW1hZ2UoY29uc3RhbnRzLkJBQ0tHUk9VTkRfSU1BR0VTKVxuXG5NYWluQ29tcG9uZW50KClcblxuY29uc3QgcGxheUJhY2tncm91bmRMb2FkaW5nR2lmID0gKCkgPT4ge1xuICAkKCdib2R5JykhLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGdldFJhbmRvbUltYWdlKGNvbnN0YW50cy5MT0FESU5HX0dJRlMpXG59XG5cbmNvbnN0IHN0b3BCYWNrZ3JvdW5kTG9hZGluZ0dpZiA9ICgpID0+IHtcbiAgJCgnYm9keScpIS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBjdXJyZW50QmFja2dyb3VuZEltYWdlXG59XG5cbiQoJ2JvZHknKSEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gY3VycmVudEJhY2tncm91bmRJbWFnZVxuXG4kKCdib2R5JykhLmFkZEV2ZW50TGlzdGVuZXIoJ2lzTG9hZGluZycsIGUgPT4ge1xuICAvLyBAdHMtaWdub3JlIFRTIGRvZXNuJ3QgaGF2ZSBzdXBwb3J0IGZvciBjdXN0b20gZXZlbnRzIHlldFxuICBjb25zdCB7IGlzTG9hZGluZyB9ID0gZS5kZXRhaWxcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHBsYXlCYWNrZ3JvdW5kTG9hZGluZ0dpZigpXG4gIH0gZWxzZSB7XG4gICAgc3RvcEJhY2tncm91bmRMb2FkaW5nR2lmKClcbiAgfVxufSlcblxuJCgnbWFpbicpIS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluLWNvbXBvbmVudCcpKVxuXG4vLyByZWdpc3RlclNlcnZpY2VXb3JrZXIoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==