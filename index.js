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
/* harmony export */   "CatEntry": () => (/* binding */ CatEntry),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CatEntry;
(function (CatEntry) {
    CatEntry["NG Any%"] = "zdnwp4xd";
    CatEntry["NG+ Any%"] = "xk901ggk";
    CatEntry["NG All Brushes"] = "q25owqgk";
    CatEntry["NG+ All Brushes"] = "z27gy6o2";
    CatEntry["Top Dog"] = "mkeozqxd";
    CatEntry["All Major Bosses"] = "9d831962";
})(CatEntry || (CatEntry = {}));
const DEFAULT_ENTRY = CatEntry['NG+ Any%'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((parent, onChange) => {
    const container = parent.appendChild(document.createElement('div'));
    container.id = 'cat-select';
    const el = container.appendChild(document.createElement('select'));
    Object.entries(CatEntry).forEach((entry) => {
        const opt = el.appendChild(document.createElement('option'));
        if (entry[1] === DEFAULT_ENTRY)
            opt.selected = true;
        opt.className = 'cat-option';
        opt.textContent = entry[0];
        opt.value = entry[1];
    });
    el.addEventListener('change', () => {
        onChange(el.value);
    });
    return {
        el,
        current: el.value,
    };
});


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
/* harmony import */ var _CatSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatSelector */ "./src/components/MainComponent/CatSelector.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((parent, onChange) => {
    const el = parent.appendChild(document.createElement('div'));
    el.id = 'cat-selector-container';
    const title1 = el.appendChild(document.createElement('span'));
    (0,_CatSelector__WEBPACK_IMPORTED_MODULE_0__.default)(el, onChange);
    const title2 = el.appendChild(document.createElement('span'));
    title1.textContent = 'You have to show video proof if your';
    title2.textContent = 'run is quicker than or exactly at';
    return {
        el,
    };
});


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
    timeDisplay.textContent = '-';
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
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/debounce */ "./src/utils/debounce.ts");
/* harmony import */ var _CatSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatSelector */ "./src/components/MainComponent/CatSelector.ts");
/* harmony import */ var _CatSelectorContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CatSelectorContainer */ "./src/components/MainComponent/CatSelectorContainer.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Display */ "./src/components/MainComponent/Display.ts");




const STYLE = `
#container {
    display: flex;
    border: solid 24px hsl(0, 0%, 12%);
    flex-flow: column nowrap;
    align-items: center;
    padding: 48px;
    background-color: hsla(0, 0%, 100%, 97%);
}

button, select {
  font-size: 24px;
  font-family: "astralsOkami", serif;
}

#cat-selector-container {
  display: flex;
  flex-flow: column nowrap;
}

#cat-select {
  padding: 0rem .5rem;
}

.cat-option {
  font-family: "astralsOkami", serif;
  font-size: 16px;
}

#display {
  text-align: center;
  font-size: 2.5rem;
  height: 2.5rem;
}

#title {
  text-align: center;
}

@media (min-width: 640px) {
  #cat-selector-container {
    flex-flow: row nowrap;
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
        this._selectedCat = _CatSelector__WEBPACK_IMPORTED_MODULE_1__.CatEntry["NG+ Any%"];
        this.refresh = async (value = this._selectedCat) => {
            this._display.message = 'Getting times...';
            const res = await this.getRunsForCat(value);
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
        this.getRunsForCat = async (cat) => fetch(`https://www.speedrun.com/api/v1/leaderboards/w6j7546j/category/${cat}?var-68k4dyzl=4qy3r57l&top=1`, {
            headers: {
                Accept: 'application/json, text/javascript, */*; q=0.01',
            },
        });
        const shadow = this.attachShadow({ mode: 'open' });
        this._container = document.createElement('div');
        this._catSelectorContainer = (0,_CatSelectorContainer__WEBPACK_IMPORTED_MODULE_2__.default)(this._container, (value) => {
            this._selectedCat !== value && (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_0__.default)(() => this.refresh(value))();
            this._selectedCat = value;
        });
        this._display = (0,_Display__WEBPACK_IMPORTED_MODULE_3__.default)(this._container);
        this._button = this._container.appendChild(document.createElement('button'));
        this._container.id = 'container';
        this._button.textContent = 'Get/Refresh';
        this._button.addEventListener('click', (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_0__.default)(this.refresh));
        const style = document.createElement('style');
        style.textContent = STYLE;
        shadow.append(style, this._container);
    }
    connectedCallback() {
        this.isConnected && this.refresh();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    customElements.define('main-component', MainComponent);
});


/***/ }),

/***/ "./src/utils/buildComponents.ts":
/*!**************************************!*\
  !*** ./src/utils/buildComponents.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildElements": () => (/* binding */ buildElements),
/* harmony export */   "buildElement": () => (/* binding */ buildElement),
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fp */ "./src/utils/fp.ts");

const splitEmmet = (emmet) => emmet.split('').reduce((acc, l) => {
    if (!acc.length) {
        return acc.concat([l]);
    }
    if (/\W/.test(l) || (/\W/.test(acc[acc.length - 1]) && !/\W/.test(l))) {
        return acc.concat([l]);
    }
    acc[acc.length - 1] = acc[acc.length - 1].concat(l);
    return acc;
}, []);
var Flags;
(function (Flags) {
    Flags[Flags["Class"] = 0] = "Class";
    Flags[Flags["Id"] = 1] = "Id";
    Flags[Flags["ChildrenStart"] = 2] = "ChildrenStart";
    Flags[Flags["ChildrenEnd"] = 3] = "ChildrenEnd";
    Flags[Flags["Count"] = 4] = "Count";
    Flags[Flags["Sibling"] = 5] = "Sibling";
    Flags[Flags["TextStart"] = 6] = "TextStart";
    Flags[Flags["TextEnd"] = 7] = "TextEnd";
})(Flags || (Flags = {}));
const createDefaultElement = () => ({
    children: [],
    classList: null,
    id: null,
    tag: 'div',
    textContent: null,
});
/**
 * @param tokens string[]
 * @return MineElement[]
 */
const buildElements = (tokens) => {
    // switch (token) {
    //   case '*':
    //     acc.flag = Flags.Count
    //     return acc
    //   case '+':
    //     acc.flag = Flags.Sibling
    //     return acc
    // }
    const markers = [];
    tokens.forEach((token, index) => { });
};
const buildElement = (tokens) => {
    const r = tokens.reduce((acc, token, i) => {
        switch (token) {
            case '.':
                acc.flag = Flags.Class;
                return acc;
            case '#':
                acc.flag = Flags.Id;
                return acc;
            case '(':
                acc.flag = Flags.ChildrenStart;
                return acc;
            case ')':
                acc.flag = Flags.ChildrenEnd;
                return acc;
            case '{':
                acc.flag = Flags.TextStart;
                return acc;
            case '}':
                acc.flag = Flags.TextEnd;
                return acc;
            default:
                switch (acc.flag) {
                    case Flags.Class:
                        acc.element.classList?.push(token);
                        acc.flag = null;
                        break;
                    case Flags.Id:
                        acc.element.id = token;
                        acc.flag = null;
                        break;
                    case Flags.ChildrenStart:
                    case Flags.ChildrenEnd:
                        // TODO: Implement
                        break;
                    case Flags.TextStart:
                        acc.element.textContent += token;
                        break;
                    case Flags.TextEnd:
                        acc.flag = null;
                        return acc;
                    default:
                        acc.element.tag = token;
                        break;
                }
                return acc;
        }
    }, { element: createDefaultElement(), flag: null });
    return r.element;
};
const $ = document.querySelector.bind(document);
const createElement = (element) => {
    const el = document.createElement(element.tag);
    element.classList && el.classList.add(...element.classList);
    el.textContent = element.textContent;
    element.id && (el.id = element.id);
    // options.eventListener &&
    //   el.addEventListener(options?.eventListener[0], options?.eventListener[1])
    return el;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_fp__WEBPACK_IMPORTED_MODULE_0__.compose)(splitEmmet, buildElement, createElement));


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
/* harmony import */ var _utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/buildComponents */ "./src/utils/buildComponents.ts");
/* harmony import */ var _components_MainComponent___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MainComponent/ */ "./src/components/MainComponent/index.ts");
// import registerServiceWorker from './registerServiceWorker.js'


const backgroundImages = ['ammy-static', 'bead'];
(0,_components_MainComponent___WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__.$)('body').style.backgroundImage = `url(assets/${backgroundImages[~~(Math.random() * backgroundImages.length)]}.png)`;
(0,_utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__.$)('main').appendChild(document.createElement('main-component'));
(0,_utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__.$)('#stop-animation').addEventListener('click', _ => {
    (0,_utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__.$)('body').classList.toggle('no-anim');
});
// registerServiceWorker()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50L0NhdFNlbGVjdG9yLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvQ2F0U2VsZWN0b3JDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9EaXNwbGF5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2J1aWxkQ29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2ZwLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFFBT1g7QUFQRCxXQUFZLFFBQVE7SUFDbEIsZ0NBQXNCO0lBQ3RCLGlDQUF1QjtJQUN2Qix1Q0FBNkI7SUFDN0Isd0NBQThCO0lBQzlCLGdDQUFzQjtJQUN0Qix5Q0FBK0I7QUFDakMsQ0FBQyxFQVBXLFFBQVEs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QUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkEsaUVBQWlFO0FBQ3RCO0FBQ1k7QUFFdkQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7QUFFaEQsbUVBQWEsRUFBRTtBQUVmLHlEQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxjQUNqQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQzlELE9BQU87QUFFUCx5REFBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDaEUseURBQUMsQ0FBQyxpQkFBaUIsQ0FBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRTtJQUNsRCx5REFBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3hDLENBQUMsQ0FBQztBQUVGLDBCQUEwQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIENhdEVudHJ5IHtcbiAgJ05HIEFueSUnID0gJ3pkbndwNHhkJyxcbiAgJ05HKyBBbnklJyA9ICd4azkwMWdnaycsXG4gICdORyBBbGwgQnJ1c2hlcycgPSAncTI1b3dxZ2snLFxuICAnTkcrIEFsbCBCcnVzaGVzJyA9ICd6MjdneTZvMicsXG4gICdUb3AgRG9nJyA9ICdta2VvenF4ZCcsXG4gICdBbGwgTWFqb3IgQm9zc2VzJyA9ICc5ZDgzMTk2MicsXG59XG5cbmNvbnN0IERFRkFVTFRfRU5UUlk6IENhdEVudHJ5ID0gQ2F0RW50cnlbJ05HKyBBbnklJ11cblxuZXhwb3J0IHR5cGUgT25DaGFuZ2UgPSAodmFsdWU6IENhdEVudHJ5KSA9PiB2b2lkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhdFNlbGVjdG9yIHtcbiAgZWw6IEhUTUxTZWxlY3RFbGVtZW50XG4gIGN1cnJlbnQ6IENhdEVudHJ5XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJlbnQ6IEhUTUxFbGVtZW50LCBvbkNoYW5nZTogT25DaGFuZ2UpOiBJQ2F0U2VsZWN0b3IgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gIGNvbnRhaW5lci5pZCA9ICdjYXQtc2VsZWN0J1xuICBjb25zdCBlbCA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSlcblxuICBPYmplY3QuZW50cmllcyhDYXRFbnRyeSkuZm9yRWFjaCgoZW50cnk6IFtzdHJpbmcsIENhdEVudHJ5XSkgPT4ge1xuICAgIGNvbnN0IG9wdDogSFRNTE9wdGlvbkVsZW1lbnQgPSBlbC5hcHBlbmRDaGlsZChcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpLFxuICAgIClcbiAgICBpZiAoZW50cnlbMV0gPT09IERFRkFVTFRfRU5UUlkpIG9wdC5zZWxlY3RlZCA9IHRydWVcbiAgICBvcHQuY2xhc3NOYW1lID0gJ2NhdC1vcHRpb24nXG4gICAgb3B0LnRleHRDb250ZW50ID0gZW50cnlbMF1cbiAgICBvcHQudmFsdWUgPSBlbnRyeVsxXVxuICB9KVxuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBvbkNoYW5nZShlbC52YWx1ZSBhcyBDYXRFbnRyeSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGVsLFxuICAgIGN1cnJlbnQ6IGVsLnZhbHVlIGFzIENhdEVudHJ5LFxuICB9XG59XG4iLCJpbXBvcnQgQ2F0U2VsZWN0b3IsIHsgT25DaGFuZ2UgfSBmcm9tICcuL0NhdFNlbGVjdG9yJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYXRTZWxlY3RvckNvbnRhaW5lciB7XG4gIGVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBvbkNoYW5nZTogT25DaGFuZ2UsXG4pOiBJQ2F0U2VsZWN0b3JDb250YWluZXIgPT4ge1xuICBjb25zdCBlbCA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgZWwuaWQgPSAnY2F0LXNlbGVjdG9yLWNvbnRhaW5lcidcbiAgY29uc3QgdGl0bGUxID0gZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxuICBDYXRTZWxlY3RvcihlbCwgb25DaGFuZ2UpXG4gIGNvbnN0IHRpdGxlMiA9IGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSlcbiAgdGl0bGUxLnRleHRDb250ZW50ID0gJ1lvdSBoYXZlIHRvIHNob3cgdmlkZW8gcHJvb2YgaWYgeW91cidcbiAgdGl0bGUyLnRleHRDb250ZW50ID0gJ3J1biBpcyBxdWlja2VyIHRoYW4gb3IgZXhhY3RseSBhdCdcblxuICByZXR1cm4ge1xuICAgIGVsLFxuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIElEaXNwbGF5IHtcbiAgdGltZURpc3BsYXk6IEhUTUxEaXZFbGVtZW50IHwgbnVsbFxuICB0aW1lOiBudW1iZXJcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJVGltZSB7XG4gIGhvdXJzOiBudW1iZXJcbiAgbWludXRlczogbnVtYmVyXG4gIHNlY29uZHM6IG51bWJlclxufVxuXG5jb25zdCBUSFJFU0hPTEQgPSAxLjFcblxuY29uc3QgY2FsY3VsYXRlVGhyZXNob2xkVGltZSA9ICh3clRpbWVJblNlY29uZHM6IG51bWJlcikgPT5cbiAgd3JUaW1lSW5TZWNvbmRzICogVEhSRVNIT0xEXG5cbmNvbnN0IHBhcnNlVGhyZXNob2xkVGltZSA9IChzOiBudW1iZXIpOiBJVGltZSA9PiB7XG4gIGNvbnN0IFtob3VycywgbWluc1NlY3NdID0gW35+KHMgLyAzNjAwKSwgcyAlIDM2MDBdXG4gIGNvbnN0IFttaW51dGVzLCBzZWNvbmRzXSA9IFt+fihtaW5zU2VjcyAvIDYwKSwgTWF0aC5jZWlsKG1pbnNTZWNzICUgNjApXVxuICByZXR1cm4ge1xuICAgIGhvdXJzLFxuICAgIG1pbnV0ZXMsXG4gICAgc2Vjb25kcyxcbiAgfVxufVxuXG5jb25zdCBkaXNwbGF5VGhyZXNob2xkVGltZSA9ICh0aW1lRGlzcGxheTogSFRNTERpdkVsZW1lbnQsIHRpbWU6IG51bWJlcikgPT4ge1xuICBjb25zdCB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0gPSBwYXJzZVRocmVzaG9sZFRpbWUodGltZSlcbiAgdGltZURpc3BsYXkudGV4dENvbnRlbnQgPSBgJHtob3Vyc31IICR7bWludXRlc31NICR7c2Vjb25kc31TYFxufVxuXG5leHBvcnQgZGVmYXVsdCAocGFyZW50OiBIVE1MRWxlbWVudCk6IElEaXNwbGF5ID0+IHtcbiAgY29uc3QgdGltZURpc3BsYXkgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gIHRpbWVEaXNwbGF5LmlkID0gJ2Rpc3BsYXknXG4gIHRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gJy0nXG5cbiAgcmV0dXJuIHtcbiAgICB0aW1lRGlzcGxheSxcbiAgICBzZXQgdGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgIGlmICghdGhpcy50aW1lRGlzcGxheSkge1xuICAgICAgICB0aHJvdyBFcnJvclxuICAgICAgfVxuXG4gICAgICBkaXNwbGF5VGhyZXNob2xkVGltZSh0aGlzLnRpbWVEaXNwbGF5LCBjYWxjdWxhdGVUaHJlc2hvbGRUaW1lKHRpbWUpKVxuICAgIH0sXG5cbiAgICBzZXQgbWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgIGlmICghdGhpcy50aW1lRGlzcGxheSkge1xuICAgICAgICB0aHJvdyBFcnJvclxuICAgICAgfVxuICAgICAgdGhpcy50aW1lRGlzcGxheS50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnXG5pbXBvcnQgeyBDYXRFbnRyeSB9IGZyb20gJy4vQ2F0U2VsZWN0b3InXG5pbXBvcnQgQ2F0U2VsZWN0b3JDb250YWluZXIsIHtcbiAgSUNhdFNlbGVjdG9yQ29udGFpbmVyLFxufSBmcm9tICcuL0NhdFNlbGVjdG9yQ29udGFpbmVyJ1xuaW1wb3J0IERpc3BsYXksIHsgSURpc3BsYXkgfSBmcm9tICcuL0Rpc3BsYXknXG5cbmludGVyZmFjZSBSdW5SZXNwb25zZSB7XG4gIGRhdGE6IHtcbiAgICBydW5zOiB7XG4gICAgICBydW46IHtcbiAgICAgICAgdGltZXM6IHtcbiAgICAgICAgICBpbmdhbWVfdDogbnVtYmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9W11cbiAgfVxufVxuXG5jb25zdCBTVFlMRSA9IGBcbiNjb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiBzb2xpZCAyNHB4IGhzbCgwLCAwJSwgMTIlKTtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0OHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDk3JSk7XG59XG5cbmJ1dHRvbiwgc2VsZWN0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJhc3RyYWxzT2thbWlcIiwgc2VyaWY7XG59XG5cbiNjYXQtc2VsZWN0b3ItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuXG4jY2F0LXNlbGVjdCB7XG4gIHBhZGRpbmc6IDByZW0gLjVyZW07XG59XG5cbi5jYXQtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiYXN0cmFsc09rYW1pXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNkaXNwbGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG5cbiN0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gICNjYXQtc2VsZWN0b3ItY29udGFpbmVyIHtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIH1cblxuICAjZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuYFxuXG5jbGFzcyBNYWluQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxuICBfY2F0U2VsZWN0b3JDb250YWluZXI6IElDYXRTZWxlY3RvckNvbnRhaW5lclxuICBfZGlzcGxheTogSURpc3BsYXlcbiAgX2J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnRcbiAgX3NlbGVjdGVkQ2F0ID0gQ2F0RW50cnlbJ05HKyBBbnklJ11cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KVxuXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLl9jYXRTZWxlY3RvckNvbnRhaW5lciA9IENhdFNlbGVjdG9yQ29udGFpbmVyKFxuICAgICAgdGhpcy5fY29udGFpbmVyLFxuICAgICAgKHZhbHVlOiBDYXRFbnRyeSkgPT4ge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZENhdCAhPT0gdmFsdWUgJiYgZGVib3VuY2UoKCkgPT4gdGhpcy5yZWZyZXNoKHZhbHVlKSkoKVxuICAgICAgICB0aGlzLl9zZWxlY3RlZENhdCA9IHZhbHVlXG4gICAgICB9LFxuICAgIClcbiAgICB0aGlzLl9kaXNwbGF5ID0gRGlzcGxheSh0aGlzLl9jb250YWluZXIpXG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxuXG4gICAgdGhpcy5fY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcidcbiAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSAnR2V0L1JlZnJlc2gnXG4gICAgdGhpcy5fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVib3VuY2UodGhpcy5yZWZyZXNoKSlcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gU1RZTEVcblxuICAgIHNoYWRvdy5hcHBlbmQoc3R5bGUsIHRoaXMuX2NvbnRhaW5lcilcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaXNDb25uZWN0ZWQgJiYgdGhpcy5yZWZyZXNoKClcbiAgfVxuXG4gIHJlZnJlc2ggPSBhc3luYyAodmFsdWU6IENhdEVudHJ5ID0gdGhpcy5fc2VsZWN0ZWRDYXQpID0+IHtcbiAgICB0aGlzLl9kaXNwbGF5Lm1lc3NhZ2UgPSAnR2V0dGluZyB0aW1lcy4uLidcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmdldFJ1bnNGb3JDYXQodmFsdWUpXG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQyMCkge1xuICAgICAgICB0aGlzLl9kaXNwbGF5Lm1lc3NhZ2UgPSBcIlNSQydzIGJ1c3khIFJldHJ5IExhdGVyLlwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kaXNwbGF5Lm1lc3NhZ2UgPSAnRmFpbGVkISBQbGVhc2UgUmV0cnkuJ1xuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2Rpc3BsYXkudGltZSA9IChhd2FpdCByZXMuanNvbigpKS5kYXRhLnJ1bnNbMF0ucnVuLnRpbWVzLmluZ2FtZV90XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coeyBlIH0pXG4gICAgfVxuICB9XG5cbiAgZ2V0UnVuc0ZvckNhdCA9IGFzeW5jIChjYXQ6IENhdEVudHJ5KSA9PlxuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vd3d3LnNwZWVkcnVuLmNvbS9hcGkvdjEvbGVhZGVyYm9hcmRzL3c2ajc1NDZqL2NhdGVnb3J5LyR7Y2F0fT92YXItNjhrNGR5emw9NHF5M3I1N2wmdG9wPTFgLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ21haW4tY29tcG9uZW50JywgTWFpbkNvbXBvbmVudClcbn1cbiIsImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICcuL2ZwJ1xuXG5jb25zdCBzcGxpdEVtbWV0ID0gKGVtbWV0OiBzdHJpbmcpID0+XG4gIGVtbWV0LnNwbGl0KCcnKS5yZWR1Y2UoKGFjYzogc3RyaW5nW10sIGw6IHN0cmluZykgPT4ge1xuICAgIGlmICghYWNjLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2xdKVxuICAgIH1cbiAgICBpZiAoL1xcVy8udGVzdChsKSB8fCAoL1xcVy8udGVzdChhY2NbYWNjLmxlbmd0aCAtIDFdKSAmJiAhL1xcVy8udGVzdChsKSkpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtsXSlcbiAgICB9XG4gICAgYWNjW2FjYy5sZW5ndGggLSAxXSA9IGFjY1thY2MubGVuZ3RoIC0gMV0uY29uY2F0KGwpXG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcblxuaW50ZXJmYWNlIE1pbmVFbGVtZW50IHtcbiAgY2hpbGRyZW46IEhUTUxFbGVtZW50W11cbiAgY2xhc3NMaXN0OiBzdHJpbmdbXSB8IG51bGxcbiAgaWQ6IHN0cmluZyB8IG51bGxcbiAgdGFnOiBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBcbiAgdGV4dENvbnRlbnQ6IHN0cmluZyB8IG51bGxcbn1cblxuZW51bSBGbGFncyB7XG4gIENsYXNzLFxuICBJZCxcbiAgQ2hpbGRyZW5TdGFydCxcbiAgQ2hpbGRyZW5FbmQsXG4gIENvdW50LFxuICBTaWJsaW5nLFxuICBUZXh0U3RhcnQsXG4gIFRleHRFbmQsXG59XG5cbmNvbnN0IGNyZWF0ZURlZmF1bHRFbGVtZW50ID0gKCk6IE1pbmVFbGVtZW50ID0+ICh7XG4gIGNoaWxkcmVuOiBbXSxcbiAgY2xhc3NMaXN0OiBudWxsLFxuICBpZDogbnVsbCxcbiAgdGFnOiAnZGl2JyxcbiAgdGV4dENvbnRlbnQ6IG51bGwsXG59KVxuXG4vKipcbiAqIEBwYXJhbSB0b2tlbnMgc3RyaW5nW11cbiAqIEByZXR1cm4gTWluZUVsZW1lbnRbXVxuICovXG5leHBvcnQgY29uc3QgYnVpbGRFbGVtZW50cyA9ICh0b2tlbnM6IHN0cmluZ1tdKSA9PiB7XG4gIC8vIHN3aXRjaCAodG9rZW4pIHtcbiAgLy8gICBjYXNlICcqJzpcbiAgLy8gICAgIGFjYy5mbGFnID0gRmxhZ3MuQ291bnRcbiAgLy8gICAgIHJldHVybiBhY2NcbiAgLy8gICBjYXNlICcrJzpcbiAgLy8gICAgIGFjYy5mbGFnID0gRmxhZ3MuU2libGluZ1xuICAvLyAgICAgcmV0dXJuIGFjY1xuICAvLyB9XG4gIGNvbnN0IG1hcmtlcnMgPSBbXVxuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4sIGluZGV4KSA9PiB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGJ1aWxkRWxlbWVudCA9ICh0b2tlbnM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IHIgPSB0b2tlbnMucmVkdWNlKFxuICAgIChhY2M6IHsgZWxlbWVudDogTWluZUVsZW1lbnQ7IGZsYWc6IEZsYWdzIHwgbnVsbCB9LCB0b2tlbiwgaSkgPT4ge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLkNsYXNzXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLklkXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICcoJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLkNoaWxkcmVuU3RhcnRcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuQ2hpbGRyZW5FbmRcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuVGV4dFN0YXJ0XG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLlRleHRFbmRcbiAgICAgICAgICByZXR1cm4gYWNjXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzd2l0Y2ggKGFjYy5mbGFnKSB7XG4gICAgICAgICAgICBjYXNlIEZsYWdzLkNsYXNzOlxuICAgICAgICAgICAgICBhY2MuZWxlbWVudC5jbGFzc0xpc3Q/LnB1c2godG9rZW4pXG4gICAgICAgICAgICAgIGFjYy5mbGFnID0gbnVsbFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBGbGFncy5JZDpcbiAgICAgICAgICAgICAgYWNjLmVsZW1lbnQuaWQgPSB0b2tlblxuICAgICAgICAgICAgICBhY2MuZmxhZyA9IG51bGxcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuQ2hpbGRyZW5TdGFydDpcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuQ2hpbGRyZW5FbmQ6XG4gICAgICAgICAgICAgIC8vIFRPRE86IEltcGxlbWVudFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBGbGFncy5UZXh0U3RhcnQ6XG4gICAgICAgICAgICAgIGFjYy5lbGVtZW50LnRleHRDb250ZW50ICs9IHRva2VuXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEZsYWdzLlRleHRFbmQ6XG4gICAgICAgICAgICAgIGFjYy5mbGFnID0gbnVsbFxuICAgICAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBhY2MuZWxlbWVudC50YWcgPSB0b2tlbiBhcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfVxuICAgIH0sXG4gICAgeyBlbGVtZW50OiBjcmVhdGVEZWZhdWx0RWxlbWVudCgpLCBmbGFnOiBudWxsIH0sXG4gIClcbiAgcmV0dXJuIHIuZWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudClcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudDogTWluZUVsZW1lbnQpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQudGFnKVxuICBlbGVtZW50LmNsYXNzTGlzdCAmJiBlbC5jbGFzc0xpc3QuYWRkKC4uLmVsZW1lbnQuY2xhc3NMaXN0KVxuICBlbC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnRcbiAgZWxlbWVudC5pZCAmJiAoZWwuaWQgPSBlbGVtZW50LmlkKVxuICAvLyBvcHRpb25zLmV2ZW50TGlzdGVuZXIgJiZcbiAgLy8gICBlbC5hZGRFdmVudExpc3RlbmVyKG9wdGlvbnM/LmV2ZW50TGlzdGVuZXJbMF0sIG9wdGlvbnM/LmV2ZW50TGlzdGVuZXJbMV0pXG4gIHJldHVybiBlbFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKHNwbGl0RW1tZXQsIGJ1aWxkRWxlbWVudCwgY3JlYXRlRWxlbWVudClcbiIsImV4cG9ydCBkZWZhdWx0IDxGIGV4dGVuZHMgKC4uLmE6IGFueVtdKSA9PiBhbnk+KFxuICBmbjogRixcbiAgZGVsYXkgPSAxMDAwLFxuICAuLi5hcmdzOiBQYXJhbWV0ZXJzPEY+XG4pID0+IHtcbiAgbGV0IGJ1c3kgPSBmYWxzZVxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICghYnVzeSkge1xuICAgICAgYnVzeSA9IHRydWVcbiAgICAgIGZuKC4uLmFyZ3MpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYnVzeSA9IGZhbHNlXG4gICAgICB9LCBkZWxheSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGN1cnJ5ID0gKGY6IEZ1bmN0aW9uLCAuLi5vdXRlcjogYW55W10pID0+ICguLi5pbm5lcjogYW55W10pID0+XG4gIGYuYXBwbHkobnVsbCwgb3V0ZXIuY29uY2F0KGlubmVyKSlcblxuZXhwb3J0IGNvbnN0IGNvbXBvc2UgPSAoZjogRnVuY3Rpb24sIC4uLmc6IEZ1bmN0aW9uW10pID0+ICh4OiBhbnkpOiBhbnkgPT5cbiAgIWcubGVuZ3RoID8gZih4KSA6IGNvbXBvc2UoZ1swXSwgLi4uZy5zbGljZSgxKSkoZih4KSlcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHJlZ2lzdGVyU2VydmljZVdvcmtlciBmcm9tICcuL3JlZ2lzdGVyU2VydmljZVdvcmtlci5qcydcbmltcG9ydCB7ICQgfSBmcm9tICcuL3V0aWxzL2J1aWxkQ29tcG9uZW50cydcbmltcG9ydCBNYWluQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9NYWluQ29tcG9uZW50LydcblxuY29uc3QgYmFja2dyb3VuZEltYWdlcyA9IFsnYW1teS1zdGF0aWMnLCAnYmVhZCddXG5cbk1haW5Db21wb25lbnQoKVxuXG4kKCdib2R5JykhLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoYXNzZXRzLyR7XG4gIGJhY2tncm91bmRJbWFnZXNbfn4oTWF0aC5yYW5kb20oKSAqIGJhY2tncm91bmRJbWFnZXMubGVuZ3RoKV1cbn0ucG5nKWBcblxuJCgnbWFpbicpIS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluLWNvbXBvbmVudCcpKVxuJCgnI3N0b3AtYW5pbWF0aW9uJykhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XG4gICQoJ2JvZHknKSEuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tYW5pbScpXG59KVxuXG4vLyByZWdpc3RlclNlcnZpY2VXb3JrZXIoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==