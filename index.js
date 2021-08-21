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
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/fetchApi */ "./src/utils/fetchApi.ts");
/* harmony import */ var _utils_fp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/fp */ "./src/utils/fp.ts");
/* harmony import */ var _utils_jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/jQuery */ "./src/utils/jQuery.ts");



const FALLBACK = {
    'NG Any%': 'zdnwp4xd',
    'NG+ Any%': 'xk901ggk',
    'NG All Brushes': 'q25owqgk',
    'NG+ All Brushes': 'z27gy6o2',
    'Top Dog': 'mkeozqxd',
    'All Major Bosses': '9d831962',
};
const DEFAULT_ENTRY = 'xk901ggk'; // NG+ Any%
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
<option ${entry[1] === DEFAULT_ENTRY && 'selected'} class="cat-option" value=${entry[1]}>
${entry[0]}
</option>
`;
const initStyle = () => Object.assign((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_2__.c)('style'), { textContent: style });
const init = () => Object.assign((0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_2__.c)('div'), { innerHTML: template }).querySelector('#container');
const fetchCats = async () => {
    const res = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_0__.default)('games/w6j7546j/categories');
    if (!res.ok) {
        console.table({ status: res.status, statusText: res.statusText });
        return null;
    }
    return res.json();
};
const parseCatApiJson = async (json) => (await json)
    ? (await json).data.reduce((acc, { id, name }) => ({ ...acc, [name]: id }), {})
    : null;
const writeCatsToLocalAndReturn = async (cats) => {
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
        this.fetchCatsAndParseJson = (0,_utils_fp__WEBPACK_IMPORTED_MODULE_1__.compose)(fetchCats, parseCatApiJson, writeCatsToLocalAndReturn);
        const shadow = this.attachShadow({ mode: 'open' });
        const container = init();
        const select = container.querySelector('select');
        this.buildSelect(this.getCats(), select);
        select.addEventListener('change', e => {
            select.dispatchEvent(new CustomEvent('catChanged', {
                bubbles: true,
                detail: { text: () => select.value },
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
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/fetchApi */ "./src/utils/fetchApi.ts");
/* harmony import */ var _CatSelectorContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatSelectorContainer */ "./src/components/MainComponent/CatSelectorContainer.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Display */ "./src/components/MainComponent/Display.ts");



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
    // _selectedCat = CatEntry['NG+ Any%']
    constructor() {
        super();
        this.getLocalCats = () => {
            const cats = localStorage.getItem('cats');
            return cats ? JSON.parse(cats) : null;
        };
        this.refresh = async (value) => {
            this._display.hide();
            this._loadingIcon.classList.remove('hide');
            const res = await this.getRunsForCat(value);
            this._loadingIcon.classList.add('hide');
            this._display.show();
            if (!res.ok) {
                if (res.status === 420) {
                    this._display.message = "SRC's busy! Retry Later.";
                }
                else {
                    this._display.message = 'Failed! Please Retry.';
                }
                return;
            }
            try {
                this._display.time = (await res.json()).data.runs[0].run.times.ingame_t;
            }
            catch (e) {
                console.log({ e });
            }
        };
        this.getRunsForCat = async (cat) => (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_0__.default)(`leaderboards/w6j7546j/category/${cat}?var-68k4dyzl=4qy3r57l&top=1`);
        const shadow = this.attachShadow({ mode: 'open' });
        this._container = document.createElement('div');
        this._container.appendChild(document.createElement(_CatSelectorContainer__WEBPACK_IMPORTED_MODULE_1__.default));
        //this._catSelectorContainer = CatSelectorContainer(
        //  this._container,
        //  (value: CatEntry) => {
        //    this._selectedCat !== value && debounce(() => this.refresh(value))()
        //    this._selectedCat = value
        //  },
        //)
        this._loadingIcon = this._container.appendChild(document.createElement('img'));
        this._display = (0,_Display__WEBPACK_IMPORTED_MODULE_2__.default)(this._container);
        this._button = this._container.appendChild(document.createElement('button'));
        this._container.id = 'container';
        this._loadingIcon.id = 'loading-icon';
        this._loadingIcon.src = 'assets/ammy-borking.gif';
        this._button.textContent = 'Get/Refresh';
        // this._button.addEventListener('click', debounce(this.refresh))
        const style = document.createElement('style');
        style.textContent = STYLE;
        shadow.append(style, this._container);
    }
    connectedCallback() {
        if (!this.isConnected)
            return;
        this._container.addEventListener('catChanged', e => {
            // @ts-ignore Don't have a CustomEvent handler yet
            console.log(e.detail.text());
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    customElements.define('main-component', MainComponent);
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
/* harmony import */ var _utils_jQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/jQuery */ "./src/utils/jQuery.ts");
/* harmony import */ var _components_MainComponent___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MainComponent/ */ "./src/components/MainComponent/index.ts");
// import registerServiceWorker from './registerServiceWorker.js'


const backgroundImages = ['ammy-static', 'bead'];
(0,_components_MainComponent___WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_0__.$)('body').style.backgroundImage = `url(assets/${backgroundImages[~~(Math.random() * backgroundImages.length)]}.png)`;
(0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_0__.$)('main').appendChild(document.createElement('main-component'));
// registerServiceWorker()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50L0NhdFNlbGVjdG9yLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvQ2F0U2VsZWN0b3JDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9EaXNwbGF5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2ZldGNoQXBpLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy91dGlscy9mcC50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvalF1ZXJ5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNIO0FBQ0Y7QUFhdEMsTUFBTSxRQUFRLEdBQWU7SUFDM0IsU0FBUyxFQUFFLFVBQVU7SUFDckIsVUFBVSxFQUFFLFVBQVU7SUFDdEIsZ0JBQWdCLEVBQUUsVUFBVTtJQUM1QixpQkFBaUIsRUFBRSxVQUFVO0lBQzdCLFNBQVMs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QyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRWhFLDBCQUEwQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaEFwaSBmcm9tICcuLi8uLi91dGlscy9mZXRjaEFwaSdcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICcuLi8uLi91dGlscy9mcCdcbmltcG9ydCB7IGMgfSBmcm9tICcuLi8uLi91dGlscy9qUXVlcnknXG5cbmV4cG9ydCB0eXBlIENhdEVudHJpZXMgPSB7XG4gIFtuYW1lOiBzdHJpbmddOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIENhdFJlc3BvbnNlIHtcbiAgZGF0YToge1xuICAgIGlkOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgfVtdXG59XG5cbmNvbnN0IEZBTExCQUNLOiBDYXRFbnRyaWVzID0ge1xuICAnTkcgQW55JSc6ICd6ZG53cDR4ZCcsXG4gICdORysgQW55JSc6ICd4azkwMWdnaycsXG4gICdORyBBbGwgQnJ1c2hlcyc6ICdxMjVvd3FnaycsXG4gICdORysgQWxsIEJydXNoZXMnOiAnejI3Z3k2bzInLFxuICAnVG9wIERvZyc6ICdta2VvenF4ZCcsXG4gICdBbGwgTWFqb3IgQm9zc2VzJzogJzlkODMxOTYyJyxcbn1cblxuY29uc3QgREVGQVVMVF9FTlRSWTogc3RyaW5nID0gJ3hrOTAxZ2drJyAvLyBORysgQW55JVxuXG5leHBvcnQgdHlwZSBPbkNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhdFNlbGVjdG9yIHtcbiAgZWw6IEhUTUxTZWxlY3RFbGVtZW50XG4gIGN1cnJlbnQ6IHN0cmluZ1xufVxuXG5jb25zdCBUQUcgPSAnY2F0LXNlbGVjdG9yJ1xuXG5jb25zdCBzdHlsZSA9IGBcbiNjb250YWluZXIge1xuICBwYWRkaW5nOiAwcmVtIC41cmVtO1xufVxuXG5zZWxlY3Qge1xuICBmb250LWZhbWlseTogXCJhc3RyYWxzT2thbWlcIjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY2F0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcImFzdHJhbHNPa2FtaVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5gXG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICA8c2VsZWN0Pjwvc2VsZWN0PlxuPC9kaXY+XG5gXG5cbmNvbnN0IG9wdGlvblRlbXBsYXRlID0gKGVudHJ5OiBbc3RyaW5nLCBzdHJpbmddKSA9PiBgXG48b3B0aW9uICR7ZW50cnlbMV0gPT09IERFRkFVTFRfRU5UUlkgJiYgJ3NlbGVjdGVkJ30gY2xhc3M9XCJjYXQtb3B0aW9uXCIgdmFsdWU9JHtcbiAgZW50cnlbMV1cbn0+XG4ke2VudHJ5WzBdfVxuPC9vcHRpb24+XG5gXG5cbmNvbnN0IGluaXRTdHlsZSA9ICgpID0+IE9iamVjdC5hc3NpZ24oYygnc3R5bGUnKSwgeyB0ZXh0Q29udGVudDogc3R5bGUgfSlcblxuY29uc3QgaW5pdCA9ICgpID0+XG4gIE9iamVjdC5hc3NpZ24oYygnZGl2JyksIHsgaW5uZXJIVE1MOiB0ZW1wbGF0ZSB9KS5xdWVyeVNlbGVjdG9yKFxuICAgICcjY29udGFpbmVyJyxcbiAgKSBhcyBIVE1MRGl2RWxlbWVudFxuXG5jb25zdCBmZXRjaENhdHMgPSBhc3luYyAoKTogUHJvbWlzZTxDYXRSZXNwb25zZSB8IG51bGw+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hBcGkoJ2dhbWVzL3c2ajc1NDZqL2NhdGVnb3JpZXMnKVxuICBpZiAoIXJlcy5vaykge1xuICAgIGNvbnNvbGUudGFibGUoeyBzdGF0dXM6IHJlcy5zdGF0dXMsIHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNUZXh0IH0pXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gcmVzLmpzb24oKVxufVxuXG5jb25zdCBwYXJzZUNhdEFwaUpzb24gPSBhc3luYyAoXG4gIGpzb246IFByb21pc2U8Q2F0UmVzcG9uc2UgfCBudWxsPixcbik6IFByb21pc2U8Q2F0RW50cmllcyB8IG51bGw+ID0+XG4gIChhd2FpdCBqc29uKVxuICAgID8gKChhd2FpdCBqc29uKSBhcyBDYXRSZXNwb25zZSkuZGF0YS5yZWR1Y2UoXG4gICAgICAgIChhY2MsIHsgaWQsIG5hbWUgfSkgPT4gKHsgLi4uYWNjLCBbbmFtZV06IGlkIH0pLFxuICAgICAgICB7fSxcbiAgICAgIClcbiAgICA6IG51bGxcblxuY29uc3Qgd3JpdGVDYXRzVG9Mb2NhbEFuZFJldHVybiA9IGFzeW5jIChcbiAgY2F0czogUHJvbWlzZTxDYXRFbnRyaWVzIHwgbnVsbD4sXG4pOiBQcm9taXNlPENhdEVudHJpZXM+ID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhdHMnLCBKU09OLnN0cmluZ2lmeSgoYXdhaXQgY2F0cykgPz8gRkFMTEJBQ0spKVxuICByZXR1cm4gKGF3YWl0IGNhdHMpID8/IEZBTExCQUNLXG59XG5cbmNsYXNzIENhdFNlbGVjdG9yIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSlcbiAgICBjb25zdCBjb250YWluZXIgPSBpbml0KClcblxuICAgIGNvbnN0IHNlbGVjdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuXG4gICAgdGhpcy5idWlsZFNlbGVjdCh0aGlzLmdldENhdHMoKSwgc2VsZWN0KVxuXG4gICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgc2VsZWN0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnY2F0Q2hhbmdlZCcsIHtcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGRldGFpbDogeyB0ZXh0OiAoKSA9PiBzZWxlY3QudmFsdWUgfSxcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgfSlcblxuICAgIHNoYWRvdy5hcHBlbmQoaW5pdFN0eWxlKCksIGNvbnRhaW5lcilcbiAgfVxuXG4gIGJ1aWxkU2VsZWN0ID0gKFxuICAgIGNhdHM6IENhdEVudHJpZXMgfCBQcm9taXNlPENhdEVudHJpZXM+LFxuICAgIGVsOiBIVE1MU2VsZWN0RWxlbWVudCxcbiAgKSA9PiB7XG4gICAgaWYgKCEoY2F0cyBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICBlbC5pbm5lckhUTUwgPSBPYmplY3QuZW50cmllcyhjYXRzKS5tYXAob3B0aW9uVGVtcGxhdGUpLmpvaW4oJ1xcbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNhdHMudGhlbihjID0+IHRoaXMuYnVpbGRTZWxlY3QoYywgZWwpKVxuICAgIH1cbiAgfVxuXG4gIGdldENhdHMgPSAoKTogQ2F0RW50cmllcyB8IFByb21pc2U8Q2F0RW50cmllcz4gPT5cbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0cycpXG4gICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdHMnKSBhcyBzdHJpbmcpXG4gICAgICA6IHRoaXMuZmV0Y2hDYXRzQW5kUGFyc2VKc29uKClcblxuICBmZXRjaENhdHNBbmRQYXJzZUpzb246ICgpID0+IFByb21pc2U8Q2F0RW50cmllcz4gPSBjb21wb3NlKFxuICAgIGZldGNoQ2F0cyxcbiAgICBwYXJzZUNhdEFwaUpzb24sXG4gICAgd3JpdGVDYXRzVG9Mb2NhbEFuZFJldHVybixcbiAgKVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoVEFHLCBDYXRTZWxlY3RvcilcblxuZXhwb3J0IGRlZmF1bHQgVEFHXG4iLCJpbXBvcnQgeyBjIH0gZnJvbSAnLi4vLi4vdXRpbHMvalF1ZXJ5J1xuaW1wb3J0IENhdFNlbGVjdG9yLCB7IE9uQ2hhbmdlIH0gZnJvbSAnLi9DYXRTZWxlY3RvcidcblxuY29uc3QgVEFHID0gJ2NhdC1zZWxlY3Rvci1jb250YWluZXInXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhdFNlbGVjdG9yQ29udGFpbmVyIHtcbiAgZWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbFxufVxuXG5jb25zdCBzdHlsZSA9IGBcbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAjY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5gXG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICA8c3Bhbj5Zb3UgaGF2ZSB0byBzaG93IHZpZGVvIHByb29mIGlmIHlvdXI8L3NwYW4+XG4gIDxzcGFuPnJ1biBpcyBxdWlja2VyIHRoYW4gb3IgZXhhY3RseSBhdDwvc3Bhbj5cbjwvZGl2PlxuYFxuXG5jb25zdCBpbml0U3R5bGUgPSAoKSA9PiBPYmplY3QuYXNzaWduKGMoJ3N0eWxlJyksIHsgdGV4dENvbnRlbnQ6IHN0eWxlIH0pXG5cbmNvbnN0IGluaXQgPSAoKSA9PiBPYmplY3QuYXNzaWduKGMoJ2RpdicpLCB7IGlubmVySFRNTDogdGVtcGxhdGUgfSkucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50XG5cbmNsYXNzIENhdFNlbGVjdG9yQ29udGFpbmVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSlcbiAgICBjb25zdCBjb250YWluZXIgPSBpbml0KClcbiAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGMoQ2F0U2VsZWN0b3IpLCBjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZClcbiAgICBzaGFkb3cuYXBwZW5kKGluaXRTdHlsZSgpLCBjb250YWluZXIpXG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFRBRywgQ2F0U2VsZWN0b3JDb250YWluZXIpXG5cbmV4cG9ydCBkZWZhdWx0IFRBR1xuIiwiZXhwb3J0IGludGVyZmFjZSBJRGlzcGxheSB7XG4gIHRpbWVEaXNwbGF5OiBIVE1MRGl2RWxlbWVudFxuICB0aW1lOiBudW1iZXJcbiAgbWVzc2FnZTogc3RyaW5nXG4gIGhpZGU6ICgpID0+IHZvaWRcbiAgc2hvdzogKCkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSVRpbWUge1xuICBob3VyczogbnVtYmVyXG4gIG1pbnV0ZXM6IG51bWJlclxuICBzZWNvbmRzOiBudW1iZXJcbn1cblxuY29uc3QgVEhSRVNIT0xEID0gMS4xXG5cbmNvbnN0IGNhbGN1bGF0ZVRocmVzaG9sZFRpbWUgPSAod3JUaW1lSW5TZWNvbmRzOiBudW1iZXIpID0+XG4gIHdyVGltZUluU2Vjb25kcyAqIFRIUkVTSE9MRFxuXG5jb25zdCBwYXJzZVRocmVzaG9sZFRpbWUgPSAoczogbnVtYmVyKTogSVRpbWUgPT4ge1xuICBjb25zdCBbaG91cnMsIG1pbnNTZWNzXSA9IFt+fihzIC8gMzYwMCksIHMgJSAzNjAwXVxuICBjb25zdCBbbWludXRlcywgc2Vjb25kc10gPSBbfn4obWluc1NlY3MgLyA2MCksIE1hdGguY2VpbChtaW5zU2VjcyAlIDYwKV1cbiAgcmV0dXJuIHtcbiAgICBob3VycyxcbiAgICBtaW51dGVzLFxuICAgIHNlY29uZHMsXG4gIH1cbn1cblxuY29uc3QgZGlzcGxheVRocmVzaG9sZFRpbWUgPSAodGltZURpc3BsYXk6IEhUTUxEaXZFbGVtZW50LCB0aW1lOiBudW1iZXIpID0+IHtcbiAgY29uc3QgeyBob3VycywgbWludXRlcywgc2Vjb25kcyB9ID0gcGFyc2VUaHJlc2hvbGRUaW1lKHRpbWUpXG4gIHRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7aG91cnN9SCAke21pbnV0ZXN9TSAke3NlY29uZHN9U2Bcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHBhcmVudDogSFRNTEVsZW1lbnQpOiBJRGlzcGxheSA9PiB7XG4gIGNvbnN0IHRpbWVEaXNwbGF5ID0gcGFyZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICB0aW1lRGlzcGxheS5pZCA9ICdkaXNwbGF5J1xuICB0aW1lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcblxuICByZXR1cm4ge1xuICAgIHRpbWVEaXNwbGF5LFxuICAgIHNldCB0aW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG5cbiAgICAgIGRpc3BsYXlUaHJlc2hvbGRUaW1lKHRoaXMudGltZURpc3BsYXksIGNhbGN1bGF0ZVRocmVzaG9sZFRpbWUodGltZSkpXG4gICAgfSxcblxuICAgIHNldCBtZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIH0sXG5cbiAgICBoaWRlKCkge1xuICAgICAgdGhpcy50aW1lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICB9LFxuXG4gICAgc2hvdygpIHtcbiAgICAgIHRoaXMudGltZURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgfSxcbiAgfVxufVxuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlJ1xuaW1wb3J0IGZldGNoQXBpIGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoQXBpJ1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZwJ1xuaW1wb3J0IENhdFNlbGVjdG9yQ29udGFpbmVyIGZyb20gJy4vQ2F0U2VsZWN0b3JDb250YWluZXInXG5pbXBvcnQgRGlzcGxheSwgeyBJRGlzcGxheSB9IGZyb20gJy4vRGlzcGxheSdcblxuaW50ZXJmYWNlIFJ1blJlc3BvbnNlIHtcbiAgZGF0YToge1xuICAgIHJ1bnM6IHtcbiAgICAgIHJ1bjoge1xuICAgICAgICB0aW1lczoge1xuICAgICAgICAgIGluZ2FtZV90OiBudW1iZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1bXVxuICB9XG59XG5cbmNvbnN0IFNUWUxFID0gYFxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogc29saWQgMThweCBoc2woMCwgMCUsIDEyJSk7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgOTclKTtcbn1cblxuYnV0dG9uLCBzZWxlY3Qge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImFzdHJhbHNPa2FtaVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNsb2FkaW5nLWljb24ge1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgYW5pbWF0aW9uLW5hbWU6IHNwaW47XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbiNkaXNwbGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG5cbiN0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICNjb250YWluZXIge1xuICAgIGJvcmRlcjogc29saWQgMjRweCBoc2woMCwgMCUsIDEyJSk7XG4gICAgcGFkZGluZzogNDhweDtcbiAgfVxuXG4gICNkaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICB9XG59XG5gXG5cbmNsYXNzIE1haW5Db21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIF9jb250YWluZXI6IEhUTUxEaXZFbGVtZW50XG4gIC8vX2NhdFNlbGVjdG9yQ29udGFpbmVyOiBJQ2F0U2VsZWN0b3JDb250YWluZXJcbiAgX2Rpc3BsYXk6IElEaXNwbGF5XG4gIF9sb2FkaW5nSWNvbjogSFRNTEltYWdlRWxlbWVudFxuICBfYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudFxuICAvLyBfc2VsZWN0ZWRDYXQgPSBDYXRFbnRyeVsnTkcrIEFueSUnXVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG5cbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KENhdFNlbGVjdG9yQ29udGFpbmVyKSlcbiAgICAvL3RoaXMuX2NhdFNlbGVjdG9yQ29udGFpbmVyID0gQ2F0U2VsZWN0b3JDb250YWluZXIoXG4gICAgLy8gIHRoaXMuX2NvbnRhaW5lcixcbiAgICAvLyAgKHZhbHVlOiBDYXRFbnRyeSkgPT4ge1xuICAgIC8vICAgIHRoaXMuX3NlbGVjdGVkQ2F0ICE9PSB2YWx1ZSAmJiBkZWJvdW5jZSgoKSA9PiB0aGlzLnJlZnJlc2godmFsdWUpKSgpXG4gICAgLy8gICAgdGhpcy5fc2VsZWN0ZWRDYXQgPSB2YWx1ZVxuICAgIC8vICB9LFxuICAgIC8vKVxuICAgIHRoaXMuX2xvYWRpbmdJY29uID0gdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICApXG4gICAgdGhpcy5fZGlzcGxheSA9IERpc3BsYXkodGhpcy5fY29udGFpbmVyKVxuICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcblxuICAgIHRoaXMuX2NvbnRhaW5lci5pZCA9ICdjb250YWluZXInXG4gICAgdGhpcy5fbG9hZGluZ0ljb24uaWQgPSAnbG9hZGluZy1pY29uJ1xuICAgIHRoaXMuX2xvYWRpbmdJY29uLnNyYyA9ICdhc3NldHMvYW1teS1ib3JraW5nLmdpZidcbiAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSAnR2V0L1JlZnJlc2gnXG4gICAgLy8gdGhpcy5fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVib3VuY2UodGhpcy5yZWZyZXNoKSlcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gU1RZTEVcblxuICAgIHNoYWRvdy5hcHBlbmQoc3R5bGUsIHRoaXMuX2NvbnRhaW5lcilcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkgcmV0dXJuXG5cbiAgICB0aGlzLl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2F0Q2hhbmdlZCcsIGUgPT4ge1xuICAgICAgLy8gQHRzLWlnbm9yZSBEb24ndCBoYXZlIGEgQ3VzdG9tRXZlbnQgaGFuZGxlciB5ZXRcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnRleHQoKSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0TG9jYWxDYXRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0cycpXG4gICAgcmV0dXJuIGNhdHMgPyBKU09OLnBhcnNlKGNhdHMpIDogbnVsbFxuICB9XG5cblxuICByZWZyZXNoID0gYXN5bmMgKHZhbHVlOiAndGVzdCcpID0+IHtcbiAgICB0aGlzLl9kaXNwbGF5LmhpZGUoKVxuICAgIHRoaXMuX2xvYWRpbmdJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZ2V0UnVuc0ZvckNhdCh2YWx1ZSlcbiAgICB0aGlzLl9sb2FkaW5nSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICB0aGlzLl9kaXNwbGF5LnNob3coKVxuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MjApIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gXCJTUkMncyBidXN5ISBSZXRyeSBMYXRlci5cIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ0ZhaWxlZCEgUGxlYXNlIFJldHJ5LidcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLl9kaXNwbGF5LnRpbWUgPSAoYXdhaXQgcmVzLmpzb24oKSkuZGF0YS5ydW5zWzBdLnJ1bi50aW1lcy5pbmdhbWVfdFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgZSB9KVxuICAgIH1cbiAgfVxuXG4gIGdldFJ1bnNGb3JDYXQgPSBhc3luYyAoY2F0OiBzdHJpbmcpID0+XG4gICAgZmV0Y2hBcGkoXG4gICAgICBgbGVhZGVyYm9hcmRzL3c2ajc1NDZqL2NhdGVnb3J5LyR7Y2F0fT92YXItNjhrNGR5emw9NHF5M3I1N2wmdG9wPTFgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWFpbi1jb21wb25lbnQnLCBNYWluQ29tcG9uZW50KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHNsdWc6IHN0cmluZykgPT5cbiAgZmV0Y2goYGh0dHBzOi8vd3d3LnNwZWVkcnVuLmNvbS9hcGkvdjEvJHtzbHVnfWAsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICosKjsgcT0wLjAxJyxcbiAgICB9LFxuICB9KVxuIiwiZXhwb3J0IGNvbnN0IGN1cnJ5ID0gKGY6IEZ1bmN0aW9uLCAuLi5vdXRlcjogYW55W10pID0+ICguLi5pbm5lcjogYW55W10pID0+XG4gIGYuYXBwbHkobnVsbCwgb3V0ZXIuY29uY2F0KGlubmVyKSlcblxuZXhwb3J0IGNvbnN0IGNvbXBvc2UgPVxuICAoZjogRnVuY3Rpb24sIC4uLmc6IEZ1bmN0aW9uW10pID0+XG4gICh4PzogYW55KTogYW55ID0+XG4gICAgIWcubGVuZ3RoID8gZih4KSA6IGNvbXBvc2UoZ1swXSwgLi4uZy5zbGljZSgxKSkoZih4KSlcbiIsImV4cG9ydCBjb25zdCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxuXG5leHBvcnQgY29uc3QgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuYmluZChkb2N1bWVudClcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHJlZ2lzdGVyU2VydmljZVdvcmtlciBmcm9tICcuL3JlZ2lzdGVyU2VydmljZVdvcmtlci5qcydcbmltcG9ydCB7ICQgfSBmcm9tICcuL3V0aWxzL2pRdWVyeSdcbmltcG9ydCBNYWluQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9NYWluQ29tcG9uZW50LydcblxuY29uc3QgYmFja2dyb3VuZEltYWdlcyA9IFsnYW1teS1zdGF0aWMnLCAnYmVhZCddXG5cbk1haW5Db21wb25lbnQoKVxuXG4kKCdib2R5JykhLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoYXNzZXRzLyR7XG4gIGJhY2tncm91bmRJbWFnZXNbfn4oTWF0aC5yYW5kb20oKSAqIGJhY2tncm91bmRJbWFnZXMubGVuZ3RoKV1cbn0ucG5nKWBcblxuJCgnbWFpbicpIS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluLWNvbXBvbmVudCcpKVxuXG4vLyByZWdpc3RlclNlcnZpY2VXb3JrZXIoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==