/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/components/MainComponent/CatSelector.ts":
/*!************************************************************!*\
  !*** ./src/client/components/MainComponent/CatSelector.ts ***!
  \************************************************************/
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

/***/ "./src/client/components/MainComponent/CatSelectorContainer.ts":
/*!*********************************************************************!*\
  !*** ./src/client/components/MainComponent/CatSelectorContainer.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CatSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatSelector */ "./src/client/components/MainComponent/CatSelector.ts");

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

/***/ "./src/client/components/MainComponent/Display.ts":
/*!********************************************************!*\
  !*** ./src/client/components/MainComponent/Display.ts ***!
  \********************************************************/
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

/***/ "./src/client/components/MainComponent/index.ts":
/*!******************************************************!*\
  !*** ./src/client/components/MainComponent/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/debounce */ "./src/client/utils/debounce.ts");
/* harmony import */ var _CatSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatSelector */ "./src/client/components/MainComponent/CatSelector.ts");
/* harmony import */ var _CatSelectorContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CatSelectorContainer */ "./src/client/components/MainComponent/CatSelectorContainer.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Display */ "./src/client/components/MainComponent/Display.ts");




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

/***/ "./src/client/utils/buildComponents.ts":
/*!*********************************************!*\
  !*** ./src/client/utils/buildComponents.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildElements": () => (/* binding */ buildElements),
/* harmony export */   "buildElement": () => (/* binding */ buildElement),
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fp */ "./src/client/utils/fp.ts");

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
const $ = (selector) => document.querySelector(selector);
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

/***/ "./src/client/utils/debounce.ts":
/*!**************************************!*\
  !*** ./src/client/utils/debounce.ts ***!
  \**************************************/
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

/***/ "./src/client/utils/fp.ts":
/*!********************************!*\
  !*** ./src/client/utils/fp.ts ***!
  \********************************/
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
/*!*****************************!*\
  !*** ./src/client/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/buildComponents */ "./src/client/utils/buildComponents.ts");
/* harmony import */ var _components_MainComponent___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MainComponent/ */ "./src/client/components/MainComponent/index.ts");
// import registerServiceWorker from './registerServiceWorker.js'


const backgroundImages = ['ammy-static', 'bead'];
(0,_components_MainComponent___WEBPACK_IMPORTED_MODULE_1__.default)();
// @ts-ignore
(0,_utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__.$)('body').style.backgroundImage = `url(assets/${backgroundImages[~~(Math.random() * backgroundImages.length)]}.png)`;
(0,_utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__.$)('main').appendChild(document.createElement('main-component'));
(0,_utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__.$)('#stop-animation').addEventListener('click', _ => {
    (0,_utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__.$)('body').classList.toggle('no-anim');
});
const main = async () => {
    document.querySelector('#loader-container')?.remove();
};
// registerServiceWorker()
// main()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9DYXRTZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9DYXRTZWxlY3RvckNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9EaXNwbGF5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9NYWluQ29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvdXRpbHMvYnVpbGRDb21wb25lbnRzLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvdXRpbHMvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC91dGlscy9mcC50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksUUFPWDtBQVBELFdBQVksUUFBUTtJQUNsQixnQ0FBc0I7SUFDdEIsaUNBQXVCO0lBQ3ZCLHVDQUE2QjtJQUM3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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BLGlFQUFpRTtBQUN0QjtBQUNZO0FBRXZELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO0FBRWhELG1FQUFhLEVBQUU7QUFFZixhQUFhO0FBQ2IseURBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGNBQ2hDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FDOUQsT0FBTztBQUVQLHlEQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMvRCx5REFBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQ2pELHlEQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDdEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLE1BQU0sRUFBRTtBQUN2RCxDQUFDO0FBRUQsMEJBQTBCO0FBQzFCLFNBQVMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDYXRFbnRyeSB7XG4gICdORyBBbnklJyA9ICd6ZG53cDR4ZCcsXG4gICdORysgQW55JScgPSAneGs5MDFnZ2snLFxuICAnTkcgQWxsIEJydXNoZXMnID0gJ3EyNW93cWdrJyxcbiAgJ05HKyBBbGwgQnJ1c2hlcycgPSAnejI3Z3k2bzInLFxuICAnVG9wIERvZycgPSAnbWtlb3pxeGQnLFxuICAnQWxsIE1ham9yIEJvc3NlcycgPSAnOWQ4MzE5NjInLFxufVxuXG5jb25zdCBERUZBVUxUX0VOVFJZOiBDYXRFbnRyeSA9IENhdEVudHJ5WydORysgQW55JSddXG5cbmV4cG9ydCB0eXBlIE9uQ2hhbmdlID0gKHZhbHVlOiBDYXRFbnRyeSkgPT4gdm9pZFxuXG5leHBvcnQgaW50ZXJmYWNlIElDYXRTZWxlY3RvciB7XG4gIGVsOiBIVE1MU2VsZWN0RWxlbWVudFxuICBjdXJyZW50OiBDYXRFbnRyeVxufVxuXG5leHBvcnQgZGVmYXVsdCAocGFyZW50OiBIVE1MRWxlbWVudCwgb25DaGFuZ2U6IE9uQ2hhbmdlKTogSUNhdFNlbGVjdG9yID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gcGFyZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICBjb250YWluZXIuaWQgPSAnY2F0LXNlbGVjdCdcbiAgY29uc3QgZWwgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JykpXG5cbiAgT2JqZWN0LmVudHJpZXMoQ2F0RW50cnkpLmZvckVhY2goKGVudHJ5OiBbc3RyaW5nLCBDYXRFbnRyeV0pID0+IHtcbiAgICBjb25zdCBvcHQ6IEhUTUxPcHRpb25FbGVtZW50ID0gZWwuYXBwZW5kQ2hpbGQoXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcbiAgICApXG4gICAgaWYgKGVudHJ5WzFdID09PSBERUZBVUxUX0VOVFJZKSBvcHQuc2VsZWN0ZWQgPSB0cnVlXG4gICAgb3B0LmNsYXNzTmFtZSA9ICdjYXQtb3B0aW9uJ1xuICAgIG9wdC50ZXh0Q29udGVudCA9IGVudHJ5WzBdXG4gICAgb3B0LnZhbHVlID0gZW50cnlbMV1cbiAgfSlcblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgb25DaGFuZ2UoZWwudmFsdWUgYXMgQ2F0RW50cnkpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBlbCxcbiAgICBjdXJyZW50OiBlbC52YWx1ZSBhcyBDYXRFbnRyeSxcbiAgfVxufVxuIiwiaW1wb3J0IENhdFNlbGVjdG9yLCB7IE9uQ2hhbmdlIH0gZnJvbSAnLi9DYXRTZWxlY3RvcidcblxuZXhwb3J0IGludGVyZmFjZSBJQ2F0U2VsZWN0b3JDb250YWluZXIge1xuICBlbDogSFRNTERpdkVsZW1lbnQgfCBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgb25DaGFuZ2U6IE9uQ2hhbmdlLFxuKTogSUNhdFNlbGVjdG9yQ29udGFpbmVyID0+IHtcbiAgY29uc3QgZWwgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gIGVsLmlkID0gJ2NhdC1zZWxlY3Rvci1jb250YWluZXInXG4gIGNvbnN0IHRpdGxlMSA9IGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSlcbiAgQ2F0U2VsZWN0b3IoZWwsIG9uQ2hhbmdlKVxuICBjb25zdCB0aXRsZTIgPSBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpXG4gIHRpdGxlMS50ZXh0Q29udGVudCA9ICdZb3UgaGF2ZSB0byBzaG93IHZpZGVvIHByb29mIGlmIHlvdXInXG4gIHRpdGxlMi50ZXh0Q29udGVudCA9ICdydW4gaXMgcXVpY2tlciB0aGFuIG9yIGV4YWN0bHkgYXQnXG5cbiAgcmV0dXJuIHtcbiAgICBlbCxcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBJRGlzcGxheSB7XG4gIHRpbWVEaXNwbGF5OiBIVE1MRGl2RWxlbWVudCB8IG51bGxcbiAgdGltZTogbnVtYmVyXG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVRpbWUge1xuICBob3VyczogbnVtYmVyXG4gIG1pbnV0ZXM6IG51bWJlclxuICBzZWNvbmRzOiBudW1iZXJcbn1cblxuY29uc3QgVEhSRVNIT0xEID0gMS4xXG5cbmNvbnN0IGNhbGN1bGF0ZVRocmVzaG9sZFRpbWUgPSAod3JUaW1lSW5TZWNvbmRzOiBudW1iZXIpID0+XG4gIHdyVGltZUluU2Vjb25kcyAqIFRIUkVTSE9MRFxuXG5jb25zdCBwYXJzZVRocmVzaG9sZFRpbWUgPSAoczogbnVtYmVyKTogSVRpbWUgPT4ge1xuICBjb25zdCBbaG91cnMsIG1pbnNTZWNzXSA9IFt+fihzIC8gMzYwMCksIHMgJSAzNjAwXVxuICBjb25zdCBbbWludXRlcywgc2Vjb25kc10gPSBbfn4obWluc1NlY3MgLyA2MCksIE1hdGguY2VpbChtaW5zU2VjcyAlIDYwKV1cbiAgcmV0dXJuIHtcbiAgICBob3VycyxcbiAgICBtaW51dGVzLFxuICAgIHNlY29uZHMsXG4gIH1cbn1cblxuY29uc3QgZGlzcGxheVRocmVzaG9sZFRpbWUgPSAodGltZURpc3BsYXk6IEhUTUxEaXZFbGVtZW50LCB0aW1lOiBudW1iZXIpID0+IHtcbiAgY29uc3QgeyBob3VycywgbWludXRlcywgc2Vjb25kcyB9ID0gcGFyc2VUaHJlc2hvbGRUaW1lKHRpbWUpXG4gIHRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7aG91cnN9SCAke21pbnV0ZXN9TSAke3NlY29uZHN9U2Bcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHBhcmVudDogSFRNTEVsZW1lbnQpOiBJRGlzcGxheSA9PiB7XG4gIGNvbnN0IHRpbWVEaXNwbGF5ID0gcGFyZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICB0aW1lRGlzcGxheS5pZCA9ICdkaXNwbGF5J1xuICB0aW1lRGlzcGxheS50ZXh0Q29udGVudCA9ICctJ1xuXG4gIHJldHVybiB7XG4gICAgdGltZURpc3BsYXksXG4gICAgc2V0IHRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgICBpZiAoIXRoaXMudGltZURpc3BsYXkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3JcbiAgICAgIH1cblxuICAgICAgZGlzcGxheVRocmVzaG9sZFRpbWUodGhpcy50aW1lRGlzcGxheSwgY2FsY3VsYXRlVGhyZXNob2xkVGltZSh0aW1lKSlcbiAgICB9LFxuXG4gICAgc2V0IG1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICBpZiAoIXRoaXMudGltZURpc3BsYXkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3JcbiAgICAgIH1cbiAgICAgIHRoaXMudGltZURpc3BsYXkudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgfSxcbiAgfVxufVxuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlJ1xuaW1wb3J0IHsgQ2F0RW50cnkgfSBmcm9tICcuL0NhdFNlbGVjdG9yJ1xuaW1wb3J0IENhdFNlbGVjdG9yQ29udGFpbmVyLCB7XG4gIElDYXRTZWxlY3RvckNvbnRhaW5lcixcbn0gZnJvbSAnLi9DYXRTZWxlY3RvckNvbnRhaW5lcidcbmltcG9ydCBEaXNwbGF5LCB7IElEaXNwbGF5IH0gZnJvbSAnLi9EaXNwbGF5J1xuXG5pbnRlcmZhY2UgUnVuUmVzcG9uc2Uge1xuICBkYXRhOiB7XG4gICAgcnVuczoge1xuICAgICAgcnVuOiB7XG4gICAgICAgIHRpbWVzOiB7XG4gICAgICAgICAgaW5nYW1lX3Q6IG51bWJlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVtdXG4gIH1cbn1cblxuY29uc3QgU1RZTEUgPSBgXG4jY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogc29saWQgMjRweCBoc2woMCwgMCUsIDEyJSk7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCA5NyUpO1xufVxuXG5idXR0b24sIHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiYXN0cmFsc09rYW1pXCIsIHNlcmlmO1xufVxuXG4jY2F0LXNlbGVjdG9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cblxuI2NhdC1zZWxlY3Qge1xuICBwYWRkaW5nOiAwcmVtIC41cmVtO1xufVxuXG4uY2F0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcImFzdHJhbHNPa2FtaVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jZGlzcGxheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xufVxuXG4jdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAjY2F0LXNlbGVjdG9yLWNvbnRhaW5lciB7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICB9XG5cbiAgI2Rpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gIH1cbn1cbmBcblxuY2xhc3MgTWFpbkNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRcbiAgX2NhdFNlbGVjdG9yQ29udGFpbmVyOiBJQ2F0U2VsZWN0b3JDb250YWluZXJcbiAgX2Rpc3BsYXk6IElEaXNwbGF5XG4gIF9idXR0b246IEhUTUxCdXR0b25FbGVtZW50XG4gIF9zZWxlY3RlZENhdCA9IENhdEVudHJ5WydORysgQW55JSddXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSlcblxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5fY2F0U2VsZWN0b3JDb250YWluZXIgPSBDYXRTZWxlY3RvckNvbnRhaW5lcihcbiAgICAgIHRoaXMuX2NvbnRhaW5lcixcbiAgICAgICh2YWx1ZTogQ2F0RW50cnkpID0+IHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXQgIT09IHZhbHVlICYmIGRlYm91bmNlKCgpID0+IHRoaXMucmVmcmVzaCh2YWx1ZSkpKClcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXQgPSB2YWx1ZVxuICAgICAgfSxcbiAgICApXG4gICAgdGhpcy5fZGlzcGxheSA9IERpc3BsYXkodGhpcy5fY29udGFpbmVyKVxuICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcblxuICAgIHRoaXMuX2NvbnRhaW5lci5pZCA9ICdjb250YWluZXInXG4gICAgdGhpcy5fYnV0dG9uLnRleHRDb250ZW50ID0gJ0dldC9SZWZyZXNoJ1xuICAgIHRoaXMuX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlYm91bmNlKHRoaXMucmVmcmVzaCkpXG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IFNUWUxFXG5cbiAgICBzaGFkb3cuYXBwZW5kKHN0eWxlLCB0aGlzLl9jb250YWluZXIpXG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmlzQ29ubmVjdGVkICYmIHRoaXMucmVmcmVzaCgpXG4gIH1cblxuICByZWZyZXNoID0gYXN5bmMgKHZhbHVlOiBDYXRFbnRyeSA9IHRoaXMuX3NlbGVjdGVkQ2F0KSA9PiB7XG4gICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ0dldHRpbmcgdGltZXMuLi4nXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5nZXRSdW5zRm9yQ2F0KHZhbHVlKVxuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MjApIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gXCJTUkMncyBidXN5ISBSZXRyeSBMYXRlci5cIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ0ZhaWxlZCEgUGxlYXNlIFJldHJ5LidcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLl9kaXNwbGF5LnRpbWUgPSAoYXdhaXQgcmVzLmpzb24oKSkuZGF0YS5ydW5zWzBdLnJ1bi50aW1lcy5pbmdhbWVfdFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgZSB9KVxuICAgIH1cbiAgfVxuXG4gIGdldFJ1bnNGb3JDYXQgPSBhc3luYyAoY2F0OiBDYXRFbnRyeSkgPT5cbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL3d3dy5zcGVlZHJ1bi5jb20vYXBpL3YxL2xlYWRlcmJvYXJkcy93Nmo3NTQ2ai9jYXRlZ29yeS8ke2NhdH0/dmFyLTY4azRkeXpsPTRxeTNyNTdsJnRvcD0xYCxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtYWluLWNvbXBvbmVudCcsIE1haW5Db21wb25lbnQpXG59XG4iLCJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnLi9mcCdcblxuY29uc3Qgc3BsaXRFbW1ldCA9IChlbW1ldDogc3RyaW5nKSA9PlxuICBlbW1ldC5zcGxpdCgnJykucmVkdWNlKChhY2M6IHN0cmluZ1tdLCBsOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIWFjYy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtsXSlcbiAgICB9XG4gICAgaWYgKC9cXFcvLnRlc3QobCkgfHwgKC9cXFcvLnRlc3QoYWNjW2FjYy5sZW5ndGggLSAxXSkgJiYgIS9cXFcvLnRlc3QobCkpKSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChbbF0pXG4gICAgfVxuICAgIGFjY1thY2MubGVuZ3RoIC0gMV0gPSBhY2NbYWNjLmxlbmd0aCAtIDFdLmNvbmNhdChsKVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG5cbmludGVyZmFjZSBNaW5lRWxlbWVudCB7XG4gIGNoaWxkcmVuOiBIVE1MRWxlbWVudFtdXG4gIGNsYXNzTGlzdDogc3RyaW5nW10gfCBudWxsXG4gIGlkOiBzdHJpbmcgfCBudWxsXG4gIHRhZzoga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXG4gIHRleHRDb250ZW50OiBzdHJpbmcgfCBudWxsXG59XG5cbmVudW0gRmxhZ3Mge1xuICBDbGFzcyxcbiAgSWQsXG4gIENoaWxkcmVuU3RhcnQsXG4gIENoaWxkcmVuRW5kLFxuICBDb3VudCxcbiAgU2libGluZyxcbiAgVGV4dFN0YXJ0LFxuICBUZXh0RW5kLFxufVxuXG5jb25zdCBjcmVhdGVEZWZhdWx0RWxlbWVudCA9ICgpOiBNaW5lRWxlbWVudCA9PiAoe1xuICBjaGlsZHJlbjogW10sXG4gIGNsYXNzTGlzdDogbnVsbCxcbiAgaWQ6IG51bGwsXG4gIHRhZzogJ2RpdicsXG4gIHRleHRDb250ZW50OiBudWxsLFxufSlcblxuLyoqXG4gKiBAcGFyYW0gdG9rZW5zIHN0cmluZ1tdXG4gKiBAcmV0dXJuIE1pbmVFbGVtZW50W11cbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkRWxlbWVudHMgPSAodG9rZW5zOiBzdHJpbmdbXSkgPT4ge1xuICAvLyBzd2l0Y2ggKHRva2VuKSB7XG4gIC8vICAgY2FzZSAnKic6XG4gIC8vICAgICBhY2MuZmxhZyA9IEZsYWdzLkNvdW50XG4gIC8vICAgICByZXR1cm4gYWNjXG4gIC8vICAgY2FzZSAnKyc6XG4gIC8vICAgICBhY2MuZmxhZyA9IEZsYWdzLlNpYmxpbmdcbiAgLy8gICAgIHJldHVybiBhY2NcbiAgLy8gfVxuICBjb25zdCBtYXJrZXJzID0gW11cbiAgdG9rZW5zLmZvckVhY2goKHRva2VuLCBpbmRleCkgPT4ge30pXG59XG5cbmV4cG9ydCBjb25zdCBidWlsZEVsZW1lbnQgPSAodG9rZW5zOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCByID0gdG9rZW5zLnJlZHVjZShcbiAgICAoYWNjOiB7IGVsZW1lbnQ6IE1pbmVFbGVtZW50OyBmbGFnOiBGbGFncyB8IG51bGwgfSwgdG9rZW4sIGkpID0+IHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5DbGFzc1xuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5JZFxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5DaGlsZHJlblN0YXJ0XG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICcpJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLkNoaWxkcmVuRW5kXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICd7JzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLlRleHRTdGFydFxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5UZXh0RW5kXG4gICAgICAgICAgcmV0dXJuIGFjY1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3dpdGNoIChhY2MuZmxhZykge1xuICAgICAgICAgICAgY2FzZSBGbGFncy5DbGFzczpcbiAgICAgICAgICAgICAgYWNjLmVsZW1lbnQuY2xhc3NMaXN0Py5wdXNoKHRva2VuKVxuICAgICAgICAgICAgICBhY2MuZmxhZyA9IG51bGxcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuSWQ6XG4gICAgICAgICAgICAgIGFjYy5lbGVtZW50LmlkID0gdG9rZW5cbiAgICAgICAgICAgICAgYWNjLmZsYWcgPSBudWxsXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEZsYWdzLkNoaWxkcmVuU3RhcnQ6XG4gICAgICAgICAgICBjYXNlIEZsYWdzLkNoaWxkcmVuRW5kOlxuICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnRcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuVGV4dFN0YXJ0OlxuICAgICAgICAgICAgICBhY2MuZWxlbWVudC50ZXh0Q29udGVudCArPSB0b2tlblxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBGbGFncy5UZXh0RW5kOlxuICAgICAgICAgICAgICBhY2MuZmxhZyA9IG51bGxcbiAgICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYWNjLmVsZW1lbnQudGFnID0gdG9rZW4gYXMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgIH1cbiAgICB9LFxuICAgIHsgZWxlbWVudDogY3JlYXRlRGVmYXVsdEVsZW1lbnQoKSwgZmxhZzogbnVsbCB9LFxuICApXG4gIHJldHVybiByLmVsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0ICQgPSAoc2VsZWN0b3I6IHN0cmluZykgPT5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgRWxlbWVudFxuXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50OiBNaW5lRWxlbWVudCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC50YWcpXG4gIGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsLmNsYXNzTGlzdC5hZGQoLi4uZWxlbWVudC5jbGFzc0xpc3QpXG4gIGVsLnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudFxuICBlbGVtZW50LmlkICYmIChlbC5pZCA9IGVsZW1lbnQuaWQpXG4gIC8vIG9wdGlvbnMuZXZlbnRMaXN0ZW5lciAmJlxuICAvLyAgIGVsLmFkZEV2ZW50TGlzdGVuZXIob3B0aW9ucz8uZXZlbnRMaXN0ZW5lclswXSwgb3B0aW9ucz8uZXZlbnRMaXN0ZW5lclsxXSlcbiAgcmV0dXJuIGVsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uoc3BsaXRFbW1ldCwgYnVpbGRFbGVtZW50LCBjcmVhdGVFbGVtZW50KVxuIiwiZXhwb3J0IGRlZmF1bHQgPEYgZXh0ZW5kcyAoLi4uYTogYW55W10pID0+IGFueT4oXG4gIGZuOiBGLFxuICBkZWxheSA9IDEwMDAsXG4gIC4uLmFyZ3M6IFBhcmFtZXRlcnM8Rj5cbikgPT4ge1xuICBsZXQgYnVzeSA9IGZhbHNlXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKCFidXN5KSB7XG4gICAgICBidXN5ID0gdHJ1ZVxuICAgICAgZm4oLi4uYXJncylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBidXN5ID0gZmFsc2VcbiAgICAgIH0sIGRlbGF5KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY3VycnkgPSAoZjogRnVuY3Rpb24sIC4uLm91dGVyOiBhbnlbXSkgPT4gKC4uLmlubmVyOiBhbnlbXSkgPT5cbiAgZi5hcHBseShudWxsLCBvdXRlci5jb25jYXQoaW5uZXIpKVxuXG5leHBvcnQgY29uc3QgY29tcG9zZSA9IChmOiBGdW5jdGlvbiwgLi4uZzogRnVuY3Rpb25bXSkgPT4gKHg6IGFueSk6IGFueSA9PlxuICAhZy5sZW5ndGggPyBmKHgpIDogY29tcG9zZShnWzBdLCAuLi5nLnNsaWNlKDEpKShmKHgpKVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gJy4vcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzJ1xuaW1wb3J0IHsgJCB9IGZyb20gJy4vdXRpbHMvYnVpbGRDb21wb25lbnRzJ1xuaW1wb3J0IE1haW5Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL01haW5Db21wb25lbnQvJ1xuXG5jb25zdCBiYWNrZ3JvdW5kSW1hZ2VzID0gWydhbW15LXN0YXRpYycsICdiZWFkJ11cblxuTWFpbkNvbXBvbmVudCgpXG5cbi8vIEB0cy1pZ25vcmVcbiQoJ2JvZHknKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKGFzc2V0cy8ke1xuICBiYWNrZ3JvdW5kSW1hZ2VzW35+KE1hdGgucmFuZG9tKCkgKiBiYWNrZ3JvdW5kSW1hZ2VzLmxlbmd0aCldXG59LnBuZylgXG5cbiQoJ21haW4nKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluLWNvbXBvbmVudCcpKVxuJCgnI3N0b3AtYW5pbWF0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfID0+IHtcbiAgJCgnYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ25vLWFuaW0nKVxufSlcblxuY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYWRlci1jb250YWluZXInKT8ucmVtb3ZlKClcbn1cblxuLy8gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKClcbi8vIG1haW4oKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==