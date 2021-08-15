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
const $ = document.querySelector;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50L0NhdFNlbGVjdG9yLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvQ2F0U2VsZWN0b3JDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9EaXNwbGF5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2J1aWxkQ29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvdXRpbHMvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2ZwLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFFBT1g7QUFQRCxXQUFZLFFBQVE7SUFDbEIsZ0NBQXNCO0lBQ3RCLGlDQUF1QjtJQUN2Qix1Q0FBNkI7SUFDN0Isd0NBQThCO0lBQzlCLGdDQUFzQjtJQUN0Qix5Q0FBK0I7QUFDakMsQ0FBQyxFQVBXLFFBQVEs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eUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQSxpRUFBaUU7QUFDdEI7QUFDWTtBQUV2RCxNQUFNLGdCQUFnQixHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztBQUVoRCxtRUFBYSxFQUFFO0FBRWYseURBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGNBQ2pDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FDOUQsT0FBTztBQUVQLHlEQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNoRSx5REFBQyxDQUFDLGlCQUFpQixDQUFFLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQ2xELHlEQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsMEJBQTBCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2F0RW50cnkge1xuICAnTkcgQW55JScgPSAnemRud3A0eGQnLFxuICAnTkcrIEFueSUnID0gJ3hrOTAxZ2drJyxcbiAgJ05HIEFsbCBCcnVzaGVzJyA9ICdxMjVvd3FnaycsXG4gICdORysgQWxsIEJydXNoZXMnID0gJ3oyN2d5Nm8yJyxcbiAgJ1RvcCBEb2cnID0gJ21rZW96cXhkJyxcbiAgJ0FsbCBNYWpvciBCb3NzZXMnID0gJzlkODMxOTYyJyxcbn1cblxuY29uc3QgREVGQVVMVF9FTlRSWTogQ2F0RW50cnkgPSBDYXRFbnRyeVsnTkcrIEFueSUnXVxuXG5leHBvcnQgdHlwZSBPbkNoYW5nZSA9ICh2YWx1ZTogQ2F0RW50cnkpID0+IHZvaWRcblxuZXhwb3J0IGludGVyZmFjZSBJQ2F0U2VsZWN0b3Ige1xuICBlbDogSFRNTFNlbGVjdEVsZW1lbnRcbiAgY3VycmVudDogQ2F0RW50cnlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHBhcmVudDogSFRNTEVsZW1lbnQsIG9uQ2hhbmdlOiBPbkNoYW5nZSk6IElDYXRTZWxlY3RvciA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgY29udGFpbmVyLmlkID0gJ2NhdC1zZWxlY3QnXG4gIGNvbnN0IGVsID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKVxuXG4gIE9iamVjdC5lbnRyaWVzKENhdEVudHJ5KS5mb3JFYWNoKChlbnRyeTogW3N0cmluZywgQ2F0RW50cnldKSA9PiB7XG4gICAgY29uc3Qgb3B0OiBIVE1MT3B0aW9uRWxlbWVudCA9IGVsLmFwcGVuZENoaWxkKFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXG4gICAgKVxuICAgIGlmIChlbnRyeVsxXSA9PT0gREVGQVVMVF9FTlRSWSkgb3B0LnNlbGVjdGVkID0gdHJ1ZVxuICAgIG9wdC5jbGFzc05hbWUgPSAnY2F0LW9wdGlvbidcbiAgICBvcHQudGV4dENvbnRlbnQgPSBlbnRyeVswXVxuICAgIG9wdC52YWx1ZSA9IGVudHJ5WzFdXG4gIH0pXG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIG9uQ2hhbmdlKGVsLnZhbHVlIGFzIENhdEVudHJ5KVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgZWwsXG4gICAgY3VycmVudDogZWwudmFsdWUgYXMgQ2F0RW50cnksXG4gIH1cbn1cbiIsImltcG9ydCBDYXRTZWxlY3RvciwgeyBPbkNoYW5nZSB9IGZyb20gJy4vQ2F0U2VsZWN0b3InXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhdFNlbGVjdG9yQ29udGFpbmVyIHtcbiAgZWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCAoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIG9uQ2hhbmdlOiBPbkNoYW5nZSxcbik6IElDYXRTZWxlY3RvckNvbnRhaW5lciA9PiB7XG4gIGNvbnN0IGVsID0gcGFyZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICBlbC5pZCA9ICdjYXQtc2VsZWN0b3ItY29udGFpbmVyJ1xuICBjb25zdCB0aXRsZTEgPSBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpXG4gIENhdFNlbGVjdG9yKGVsLCBvbkNoYW5nZSlcbiAgY29uc3QgdGl0bGUyID0gZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxuICB0aXRsZTEudGV4dENvbnRlbnQgPSAnWW91IGhhdmUgdG8gc2hvdyB2aWRlbyBwcm9vZiBpZiB5b3VyJ1xuICB0aXRsZTIudGV4dENvbnRlbnQgPSAncnVuIGlzIHF1aWNrZXIgdGhhbiBvciBleGFjdGx5IGF0J1xuXG4gIHJldHVybiB7XG4gICAgZWwsXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgSURpc3BsYXkge1xuICB0aW1lRGlzcGxheTogSFRNTERpdkVsZW1lbnQgfCBudWxsXG4gIHRpbWU6IG51bWJlclxuICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElUaW1lIHtcbiAgaG91cnM6IG51bWJlclxuICBtaW51dGVzOiBudW1iZXJcbiAgc2Vjb25kczogbnVtYmVyXG59XG5cbmNvbnN0IFRIUkVTSE9MRCA9IDEuMVxuXG5jb25zdCBjYWxjdWxhdGVUaHJlc2hvbGRUaW1lID0gKHdyVGltZUluU2Vjb25kczogbnVtYmVyKSA9PlxuICB3clRpbWVJblNlY29uZHMgKiBUSFJFU0hPTERcblxuY29uc3QgcGFyc2VUaHJlc2hvbGRUaW1lID0gKHM6IG51bWJlcik6IElUaW1lID0+IHtcbiAgY29uc3QgW2hvdXJzLCBtaW5zU2Vjc10gPSBbfn4ocyAvIDM2MDApLCBzICUgMzYwMF1cbiAgY29uc3QgW21pbnV0ZXMsIHNlY29uZHNdID0gW35+KG1pbnNTZWNzIC8gNjApLCBNYXRoLmNlaWwobWluc1NlY3MgJSA2MCldXG4gIHJldHVybiB7XG4gICAgaG91cnMsXG4gICAgbWludXRlcyxcbiAgICBzZWNvbmRzLFxuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlUaHJlc2hvbGRUaW1lID0gKHRpbWVEaXNwbGF5OiBIVE1MRGl2RWxlbWVudCwgdGltZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSA9IHBhcnNlVGhyZXNob2xkVGltZSh0aW1lKVxuICB0aW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2hvdXJzfUggJHttaW51dGVzfU0gJHtzZWNvbmRzfVNgXG59XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogSURpc3BsYXkgPT4ge1xuICBjb25zdCB0aW1lRGlzcGxheSA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgdGltZURpc3BsYXkuaWQgPSAnZGlzcGxheSdcbiAgdGltZURpc3BsYXkudGV4dENvbnRlbnQgPSAnLSdcblxuICByZXR1cm4ge1xuICAgIHRpbWVEaXNwbGF5LFxuICAgIHNldCB0aW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG5cbiAgICAgIGRpc3BsYXlUaHJlc2hvbGRUaW1lKHRoaXMudGltZURpc3BsYXksIGNhbGN1bGF0ZVRocmVzaG9sZFRpbWUodGltZSkpXG4gICAgfSxcblxuICAgIHNldCBtZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZSdcbmltcG9ydCB7IENhdEVudHJ5IH0gZnJvbSAnLi9DYXRTZWxlY3RvcidcbmltcG9ydCBDYXRTZWxlY3RvckNvbnRhaW5lciwge1xuICBJQ2F0U2VsZWN0b3JDb250YWluZXIsXG59IGZyb20gJy4vQ2F0U2VsZWN0b3JDb250YWluZXInXG5pbXBvcnQgRGlzcGxheSwgeyBJRGlzcGxheSB9IGZyb20gJy4vRGlzcGxheSdcblxuaW50ZXJmYWNlIFJ1blJlc3BvbnNlIHtcbiAgZGF0YToge1xuICAgIHJ1bnM6IHtcbiAgICAgIHJ1bjoge1xuICAgICAgICB0aW1lczoge1xuICAgICAgICAgIGluZ2FtZV90OiBudW1iZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1bXVxuICB9XG59XG5cbmNvbnN0IFNUWUxFID0gYFxuI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IHNvbGlkIDI0cHggaHNsKDAsIDAlLCAxMiUpO1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQ4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgOTclKTtcbn1cblxuYnV0dG9uLCBzZWxlY3Qge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImFzdHJhbHNPa2FtaVwiLCBzZXJpZjtcbn1cblxuI2NhdC1zZWxlY3Rvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbiNjYXQtc2VsZWN0IHtcbiAgcGFkZGluZzogMHJlbSAuNXJlbTtcbn1cblxuLmNhdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogXCJhc3RyYWxzT2thbWlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2Rpc3BsYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cblxuI3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgI2NhdC1zZWxlY3Rvci1jb250YWluZXIge1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgfVxuXG4gICNkaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICB9XG59XG5gXG5cbmNsYXNzIE1haW5Db21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIF9jb250YWluZXI6IEhUTUxEaXZFbGVtZW50XG4gIF9jYXRTZWxlY3RvckNvbnRhaW5lcjogSUNhdFNlbGVjdG9yQ29udGFpbmVyXG4gIF9kaXNwbGF5OiBJRGlzcGxheVxuICBfYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudFxuICBfc2VsZWN0ZWRDYXQgPSBDYXRFbnRyeVsnTkcrIEFueSUnXVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG5cbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuX2NhdFNlbGVjdG9yQ29udGFpbmVyID0gQ2F0U2VsZWN0b3JDb250YWluZXIoXG4gICAgICB0aGlzLl9jb250YWluZXIsXG4gICAgICAodmFsdWU6IENhdEVudHJ5KSA9PiB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ICE9PSB2YWx1ZSAmJiBkZWJvdW5jZSgoKSA9PiB0aGlzLnJlZnJlc2godmFsdWUpKSgpXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ID0gdmFsdWVcbiAgICAgIH0sXG4gICAgKVxuICAgIHRoaXMuX2Rpc3BsYXkgPSBEaXNwbGF5KHRoaXMuX2NvbnRhaW5lcilcbiAgICB0aGlzLl9idXR0b24gPSB0aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXG5cbiAgICB0aGlzLl9jb250YWluZXIuaWQgPSAnY29udGFpbmVyJ1xuICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9ICdHZXQvUmVmcmVzaCdcbiAgICB0aGlzLl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2gpKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBTVFlMRVxuXG4gICAgc2hhZG93LmFwcGVuZChzdHlsZSwgdGhpcy5fY29udGFpbmVyKVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pc0Nvbm5lY3RlZCAmJiB0aGlzLnJlZnJlc2goKVxuICB9XG5cbiAgcmVmcmVzaCA9IGFzeW5jICh2YWx1ZTogQ2F0RW50cnkgPSB0aGlzLl9zZWxlY3RlZENhdCkgPT4ge1xuICAgIHRoaXMuX2Rpc3BsYXkubWVzc2FnZSA9ICdHZXR0aW5nIHRpbWVzLi4uJ1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZ2V0UnVuc0ZvckNhdCh2YWx1ZSlcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDIwKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXkubWVzc2FnZSA9IFwiU1JDJ3MgYnVzeSEgUmV0cnkgTGF0ZXIuXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXkubWVzc2FnZSA9ICdGYWlsZWQhIFBsZWFzZSBSZXRyeS4nXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5fZGlzcGxheS50aW1lID0gKGF3YWl0IHJlcy5qc29uKCkpLmRhdGEucnVuc1swXS5ydW4udGltZXMuaW5nYW1lX3RcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyh7IGUgfSlcbiAgICB9XG4gIH1cblxuICBnZXRSdW5zRm9yQ2F0ID0gYXN5bmMgKGNhdDogQ2F0RW50cnkpID0+XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly93d3cuc3BlZWRydW4uY29tL2FwaS92MS9sZWFkZXJib2FyZHMvdzZqNzU0NmovY2F0ZWdvcnkvJHtjYXR9P3Zhci02OGs0ZHl6bD00cXkzcjU3bCZ0b3A9MWAsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWFpbi1jb21wb25lbnQnLCBNYWluQ29tcG9uZW50KVxufVxuIiwiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJy4vZnAnXG5cbmNvbnN0IHNwbGl0RW1tZXQgPSAoZW1tZXQ6IHN0cmluZykgPT5cbiAgZW1tZXQuc3BsaXQoJycpLnJlZHVjZSgoYWNjOiBzdHJpbmdbXSwgbDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFhY2MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChbbF0pXG4gICAgfVxuICAgIGlmICgvXFxXLy50ZXN0KGwpIHx8ICgvXFxXLy50ZXN0KGFjY1thY2MubGVuZ3RoIC0gMV0pICYmICEvXFxXLy50ZXN0KGwpKSkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2xdKVxuICAgIH1cbiAgICBhY2NbYWNjLmxlbmd0aCAtIDFdID0gYWNjW2FjYy5sZW5ndGggLSAxXS5jb25jYXQobClcbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxuXG5pbnRlcmZhY2UgTWluZUVsZW1lbnQge1xuICBjaGlsZHJlbjogSFRNTEVsZW1lbnRbXVxuICBjbGFzc0xpc3Q6IHN0cmluZ1tdIHwgbnVsbFxuICBpZDogc3RyaW5nIHwgbnVsbFxuICB0YWc6IGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcFxuICB0ZXh0Q29udGVudDogc3RyaW5nIHwgbnVsbFxufVxuXG5lbnVtIEZsYWdzIHtcbiAgQ2xhc3MsXG4gIElkLFxuICBDaGlsZHJlblN0YXJ0LFxuICBDaGlsZHJlbkVuZCxcbiAgQ291bnQsXG4gIFNpYmxpbmcsXG4gIFRleHRTdGFydCxcbiAgVGV4dEVuZCxcbn1cblxuY29uc3QgY3JlYXRlRGVmYXVsdEVsZW1lbnQgPSAoKTogTWluZUVsZW1lbnQgPT4gKHtcbiAgY2hpbGRyZW46IFtdLFxuICBjbGFzc0xpc3Q6IG51bGwsXG4gIGlkOiBudWxsLFxuICB0YWc6ICdkaXYnLFxuICB0ZXh0Q29udGVudDogbnVsbCxcbn0pXG5cbi8qKlxuICogQHBhcmFtIHRva2VucyBzdHJpbmdbXVxuICogQHJldHVybiBNaW5lRWxlbWVudFtdXG4gKi9cbmV4cG9ydCBjb25zdCBidWlsZEVsZW1lbnRzID0gKHRva2Vuczogc3RyaW5nW10pID0+IHtcbiAgLy8gc3dpdGNoICh0b2tlbikge1xuICAvLyAgIGNhc2UgJyonOlxuICAvLyAgICAgYWNjLmZsYWcgPSBGbGFncy5Db3VudFxuICAvLyAgICAgcmV0dXJuIGFjY1xuICAvLyAgIGNhc2UgJysnOlxuICAvLyAgICAgYWNjLmZsYWcgPSBGbGFncy5TaWJsaW5nXG4gIC8vICAgICByZXR1cm4gYWNjXG4gIC8vIH1cbiAgY29uc3QgbWFya2VycyA9IFtdXG4gIHRva2Vucy5mb3JFYWNoKCh0b2tlbiwgaW5kZXgpID0+IHt9KVxufVxuXG5leHBvcnQgY29uc3QgYnVpbGRFbGVtZW50ID0gKHRva2Vuczogc3RyaW5nW10pID0+IHtcbiAgY29uc3QgciA9IHRva2Vucy5yZWR1Y2UoXG4gICAgKGFjYzogeyBlbGVtZW50OiBNaW5lRWxlbWVudDsgZmxhZzogRmxhZ3MgfCBudWxsIH0sIHRva2VuLCBpKSA9PiB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuQ2xhc3NcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJyMnOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuSWRcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJygnOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuQ2hpbGRyZW5TdGFydFxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAnKSc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5DaGlsZHJlbkVuZFxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5UZXh0U3RhcnRcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuVGV4dEVuZFxuICAgICAgICAgIHJldHVybiBhY2NcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN3aXRjaCAoYWNjLmZsYWcpIHtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuQ2xhc3M6XG4gICAgICAgICAgICAgIGFjYy5lbGVtZW50LmNsYXNzTGlzdD8ucHVzaCh0b2tlbilcbiAgICAgICAgICAgICAgYWNjLmZsYWcgPSBudWxsXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEZsYWdzLklkOlxuICAgICAgICAgICAgICBhY2MuZWxlbWVudC5pZCA9IHRva2VuXG4gICAgICAgICAgICAgIGFjYy5mbGFnID0gbnVsbFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBGbGFncy5DaGlsZHJlblN0YXJ0OlxuICAgICAgICAgICAgY2FzZSBGbGFncy5DaGlsZHJlbkVuZDpcbiAgICAgICAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEZsYWdzLlRleHRTdGFydDpcbiAgICAgICAgICAgICAgYWNjLmVsZW1lbnQudGV4dENvbnRlbnQgKz0gdG9rZW5cbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuVGV4dEVuZDpcbiAgICAgICAgICAgICAgYWNjLmZsYWcgPSBudWxsXG4gICAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGFjYy5lbGVtZW50LnRhZyA9IHRva2VuIGFzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9XG4gICAgfSxcbiAgICB7IGVsZW1lbnQ6IGNyZWF0ZURlZmF1bHRFbGVtZW50KCksIGZsYWc6IG51bGwgfSxcbiAgKVxuICByZXR1cm4gci5lbGVtZW50XG59XG5cbmV4cG9ydCBjb25zdCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvclxuXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50OiBNaW5lRWxlbWVudCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC50YWcpXG4gIGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsLmNsYXNzTGlzdC5hZGQoLi4uZWxlbWVudC5jbGFzc0xpc3QpXG4gIGVsLnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudFxuICBlbGVtZW50LmlkICYmIChlbC5pZCA9IGVsZW1lbnQuaWQpXG4gIC8vIG9wdGlvbnMuZXZlbnRMaXN0ZW5lciAmJlxuICAvLyAgIGVsLmFkZEV2ZW50TGlzdGVuZXIob3B0aW9ucz8uZXZlbnRMaXN0ZW5lclswXSwgb3B0aW9ucz8uZXZlbnRMaXN0ZW5lclsxXSlcbiAgcmV0dXJuIGVsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uoc3BsaXRFbW1ldCwgYnVpbGRFbGVtZW50LCBjcmVhdGVFbGVtZW50KVxuIiwiZXhwb3J0IGRlZmF1bHQgPEYgZXh0ZW5kcyAoLi4uYTogYW55W10pID0+IGFueT4oXG4gIGZuOiBGLFxuICBkZWxheSA9IDEwMDAsXG4gIC4uLmFyZ3M6IFBhcmFtZXRlcnM8Rj5cbikgPT4ge1xuICBsZXQgYnVzeSA9IGZhbHNlXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKCFidXN5KSB7XG4gICAgICBidXN5ID0gdHJ1ZVxuICAgICAgZm4oLi4uYXJncylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBidXN5ID0gZmFsc2VcbiAgICAgIH0sIGRlbGF5KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY3VycnkgPSAoZjogRnVuY3Rpb24sIC4uLm91dGVyOiBhbnlbXSkgPT4gKC4uLmlubmVyOiBhbnlbXSkgPT5cbiAgZi5hcHBseShudWxsLCBvdXRlci5jb25jYXQoaW5uZXIpKVxuXG5leHBvcnQgY29uc3QgY29tcG9zZSA9IChmOiBGdW5jdGlvbiwgLi4uZzogRnVuY3Rpb25bXSkgPT4gKHg6IGFueSk6IGFueSA9PlxuICAhZy5sZW5ndGggPyBmKHgpIDogY29tcG9zZShnWzBdLCAuLi5nLnNsaWNlKDEpKShmKHgpKVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gJy4vcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzJ1xuaW1wb3J0IHsgJCB9IGZyb20gJy4vdXRpbHMvYnVpbGRDb21wb25lbnRzJ1xuaW1wb3J0IE1haW5Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL01haW5Db21wb25lbnQvJ1xuXG5jb25zdCBiYWNrZ3JvdW5kSW1hZ2VzID0gWydhbW15LXN0YXRpYycsICdiZWFkJ11cblxuTWFpbkNvbXBvbmVudCgpXG5cbiQoJ2JvZHknKSEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChhc3NldHMvJHtcbiAgYmFja2dyb3VuZEltYWdlc1t+fihNYXRoLnJhbmRvbSgpICogYmFja2dyb3VuZEltYWdlcy5sZW5ndGgpXVxufS5wbmcpYFxuXG4kKCdtYWluJykhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4tY29tcG9uZW50JykpXG4kKCcjc3RvcC1hbmltYXRpb24nKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfID0+IHtcbiAgJCgnYm9keScpIS5jbGFzc0xpc3QudG9nZ2xlKCduby1hbmltJylcbn0pXG5cbi8vIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpXG4iXSwic291cmNlUm9vdCI6IiJ9