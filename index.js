/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/components/MyComponent/CatSelector.ts":
/*!**********************************************************!*\
  !*** ./src/client/components/MyComponent/CatSelector.ts ***!
  \**********************************************************/
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

/***/ "./src/client/components/MyComponent/CatSelectorContainer.ts":
/*!*******************************************************************!*\
  !*** ./src/client/components/MyComponent/CatSelectorContainer.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CatSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatSelector */ "./src/client/components/MyComponent/CatSelector.ts");

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

/***/ "./src/client/components/MyComponent/Display.ts":
/*!******************************************************!*\
  !*** ./src/client/components/MyComponent/Display.ts ***!
  \******************************************************/
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

/***/ "./src/client/components/MyComponent/index.ts":
/*!****************************************************!*\
  !*** ./src/client/components/MyComponent/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CatSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatSelector */ "./src/client/components/MyComponent/CatSelector.ts");
/* harmony import */ var _CatSelectorContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatSelectorContainer */ "./src/client/components/MyComponent/CatSelectorContainer.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Display */ "./src/client/components/MyComponent/Display.ts");



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
const debounce = (fn, delay = 1000) => {
    let busy = false;
    return () => {
        if (!busy) {
            busy = true;
            fn();
            setTimeout(() => {
                busy = false;
            }, delay);
            return;
        }
    };
};
class MyComponent extends HTMLElement {
    constructor() {
        super();
        this._selectedCat = _CatSelector__WEBPACK_IMPORTED_MODULE_0__.CatEntry["NG+ Any%"];
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
        this._catSelectorContainer = (0,_CatSelectorContainer__WEBPACK_IMPORTED_MODULE_1__.default)(this._container, (value) => {
            this._selectedCat !== value && debounce(() => this.refresh(value))();
            this._selectedCat = value;
        });
        this._display = (0,_Display__WEBPACK_IMPORTED_MODULE_2__.default)(this._container);
        this._button = this._container.appendChild(document.createElement('button'));
        this._container.id = 'container';
        this._button.textContent = 'Get/Refresh';
        this._button.addEventListener('click', debounce(this.refresh));
        const style = document.createElement('style');
        style.textContent = STYLE;
        shadow.append(style, this._container);
    }
    connectedCallback() {
        this.isConnected && this.refresh();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    customElements.define('my-component', MyComponent);
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
/* harmony import */ var _components_MyComponent___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MyComponent/ */ "./src/client/components/MyComponent/index.ts");
// import registerServiceWorker from './registerServiceWorker.js'


const backgroundImages = ['ammy-static', 'bead'];
(0,_components_MyComponent___WEBPACK_IMPORTED_MODULE_1__.default)();
// @ts-ignore
(0,_utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__.$)('body').style.backgroundImage = `url(assets/${backgroundImages[~~(Math.random() * backgroundImages.length)]}.png)`;
(0,_utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__.$)('main').appendChild(document.createElement('my-component'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTXlDb21wb25lbnQvQ2F0U2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL015Q29tcG9uZW50L0NhdFNlbGVjdG9yQ29udGFpbmVyLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9NeUNvbXBvbmVudC9EaXNwbGF5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9NeUNvbXBvbmVudC9pbmRleC50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L3V0aWxzL2J1aWxkQ29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L3V0aWxzL2ZwLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxRQU9YO0FBUEQsV0FBWSxRQUFRO0lBQ2xCLGdDQUFzQjtJQUN0QixpQ0FBdUI7SUFDdkIsdUNBQTZCO0lBQzdCLHdDQUE4QjtJQUM5QixnQ0FBc0I7SUFDdEIseUNBQStCO0FBQ2pDLENBQUMsRUFQVyxRQUFRLEtBQVIsUUFB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O1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BLGlFQUFpRTtBQUN0QjtBQUNRO0FBRW5ELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO0FBRWhELGlFQUFXLEVBQUU7QUFFYixhQUFhO0FBQ2IseURBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGNBQ2hDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FDOUQsT0FBTztBQUVQLHlEQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDN0QseURBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRTtJQUNqRCx5REFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ3RCLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRSxNQUFNLEVBQUU7QUFDdkQsQ0FBQztBQUVELDBCQUEwQjtBQUMxQixTQUFTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2F0RW50cnkge1xuICAnTkcgQW55JScgPSAnemRud3A0eGQnLFxuICAnTkcrIEFueSUnID0gJ3hrOTAxZ2drJyxcbiAgJ05HIEFsbCBCcnVzaGVzJyA9ICdxMjVvd3FnaycsXG4gICdORysgQWxsIEJydXNoZXMnID0gJ3oyN2d5Nm8yJyxcbiAgJ1RvcCBEb2cnID0gJ21rZW96cXhkJyxcbiAgJ0FsbCBNYWpvciBCb3NzZXMnID0gJzlkODMxOTYyJyxcbn1cblxuY29uc3QgREVGQVVMVF9FTlRSWTogQ2F0RW50cnkgPSBDYXRFbnRyeVsnTkcrIEFueSUnXVxuXG5leHBvcnQgdHlwZSBPbkNoYW5nZSA9ICh2YWx1ZTogQ2F0RW50cnkpID0+IHZvaWRcblxuZXhwb3J0IGludGVyZmFjZSBJQ2F0U2VsZWN0b3Ige1xuICBlbDogSFRNTFNlbGVjdEVsZW1lbnRcbiAgY3VycmVudDogQ2F0RW50cnlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHBhcmVudDogSFRNTEVsZW1lbnQsIG9uQ2hhbmdlOiBPbkNoYW5nZSk6IElDYXRTZWxlY3RvciA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgY29udGFpbmVyLmlkID0gJ2NhdC1zZWxlY3QnXG4gIGNvbnN0IGVsID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKVxuXG4gIE9iamVjdC5lbnRyaWVzKENhdEVudHJ5KS5mb3JFYWNoKChlbnRyeTogW3N0cmluZywgQ2F0RW50cnldKSA9PiB7XG4gICAgY29uc3Qgb3B0OiBIVE1MT3B0aW9uRWxlbWVudCA9IGVsLmFwcGVuZENoaWxkKFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXG4gICAgKVxuICAgIGlmIChlbnRyeVsxXSA9PT0gREVGQVVMVF9FTlRSWSkgb3B0LnNlbGVjdGVkID0gdHJ1ZVxuICAgIG9wdC5jbGFzc05hbWUgPSAnY2F0LW9wdGlvbidcbiAgICBvcHQudGV4dENvbnRlbnQgPSBlbnRyeVswXVxuICAgIG9wdC52YWx1ZSA9IGVudHJ5WzFdXG4gIH0pXG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIG9uQ2hhbmdlKGVsLnZhbHVlIGFzIENhdEVudHJ5KVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgZWwsXG4gICAgY3VycmVudDogZWwudmFsdWUgYXMgQ2F0RW50cnksXG4gIH1cbn1cbiIsImltcG9ydCBDYXRTZWxlY3RvciwgeyBPbkNoYW5nZSB9IGZyb20gJy4vQ2F0U2VsZWN0b3InXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhdFNlbGVjdG9yQ29udGFpbmVyIHtcbiAgZWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCAoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIG9uQ2hhbmdlOiBPbkNoYW5nZSxcbik6IElDYXRTZWxlY3RvckNvbnRhaW5lciA9PiB7XG4gIGNvbnN0IGVsID0gcGFyZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICBlbC5pZCA9ICdjYXQtc2VsZWN0b3ItY29udGFpbmVyJ1xuICBjb25zdCB0aXRsZTEgPSBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpXG4gIENhdFNlbGVjdG9yKGVsLCBvbkNoYW5nZSlcbiAgY29uc3QgdGl0bGUyID0gZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxuICB0aXRsZTEudGV4dENvbnRlbnQgPSAnWW91IGhhdmUgdG8gc2hvdyB2aWRlbyBwcm9vZiBpZiB5b3VyJ1xuICB0aXRsZTIudGV4dENvbnRlbnQgPSAncnVuIGlzIHF1aWNrZXIgdGhhbiBvciBleGFjdGx5IGF0J1xuXG4gIHJldHVybiB7XG4gICAgZWwsXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgSURpc3BsYXkge1xuICB0aW1lRGlzcGxheTogSFRNTERpdkVsZW1lbnQgfCBudWxsXG4gIHRpbWU6IG51bWJlclxuICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElUaW1lIHtcbiAgaG91cnM6IG51bWJlclxuICBtaW51dGVzOiBudW1iZXJcbiAgc2Vjb25kczogbnVtYmVyXG59XG5cbmNvbnN0IFRIUkVTSE9MRCA9IDEuMVxuXG5jb25zdCBjYWxjdWxhdGVUaHJlc2hvbGRUaW1lID0gKHdyVGltZUluU2Vjb25kczogbnVtYmVyKSA9PlxuICB3clRpbWVJblNlY29uZHMgKiBUSFJFU0hPTERcblxuY29uc3QgcGFyc2VUaHJlc2hvbGRUaW1lID0gKHM6IG51bWJlcik6IElUaW1lID0+IHtcbiAgY29uc3QgW2hvdXJzLCBtaW5zU2Vjc10gPSBbfn4ocyAvIDM2MDApLCBzICUgMzYwMF1cbiAgY29uc3QgW21pbnV0ZXMsIHNlY29uZHNdID0gW35+KG1pbnNTZWNzIC8gNjApLCBNYXRoLmNlaWwobWluc1NlY3MgJSA2MCldXG4gIHJldHVybiB7XG4gICAgaG91cnMsXG4gICAgbWludXRlcyxcbiAgICBzZWNvbmRzLFxuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlUaHJlc2hvbGRUaW1lID0gKHRpbWVEaXNwbGF5OiBIVE1MRGl2RWxlbWVudCwgdGltZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSA9IHBhcnNlVGhyZXNob2xkVGltZSh0aW1lKVxuICB0aW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2hvdXJzfUggJHttaW51dGVzfU0gJHtzZWNvbmRzfVNgXG59XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogSURpc3BsYXkgPT4ge1xuICBjb25zdCB0aW1lRGlzcGxheSA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgdGltZURpc3BsYXkuaWQgPSAnZGlzcGxheSdcbiAgdGltZURpc3BsYXkudGV4dENvbnRlbnQgPSAnLSdcblxuICByZXR1cm4ge1xuICAgIHRpbWVEaXNwbGF5LFxuICAgIHNldCB0aW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG5cbiAgICAgIGRpc3BsYXlUaHJlc2hvbGRUaW1lKHRoaXMudGltZURpc3BsYXksIGNhbGN1bGF0ZVRocmVzaG9sZFRpbWUodGltZSkpXG4gICAgfSxcblxuICAgIHNldCBtZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCB7IENhdEVudHJ5IH0gZnJvbSAnLi9DYXRTZWxlY3RvcidcbmltcG9ydCBDYXRTZWxlY3RvckNvbnRhaW5lciwge1xuICBJQ2F0U2VsZWN0b3JDb250YWluZXIsXG59IGZyb20gJy4vQ2F0U2VsZWN0b3JDb250YWluZXInXG5pbXBvcnQgRGlzcGxheSwgeyBJRGlzcGxheSB9IGZyb20gJy4vRGlzcGxheSdcblxuaW50ZXJmYWNlIFJ1blJlc3BvbnNlIHtcbiAgZGF0YToge1xuICAgIHJ1bnM6IHtcbiAgICAgIHJ1bjoge1xuICAgICAgICB0aW1lczoge1xuICAgICAgICAgIGluZ2FtZV90OiBudW1iZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1bXVxuICB9XG59XG5cbmNvbnN0IFNUWUxFID0gYFxuI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IHNvbGlkIDI0cHggaHNsKDAsIDAlLCAxMiUpO1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQ4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgOTclKTtcbn1cblxuYnV0dG9uLCBzZWxlY3Qge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImFzdHJhbHNPa2FtaVwiLCBzZXJpZjtcbn1cblxuI2NhdC1zZWxlY3Rvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbiNjYXQtc2VsZWN0IHtcbiAgcGFkZGluZzogMHJlbSAuNXJlbTtcbn1cblxuLmNhdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogXCJhc3RyYWxzT2thbWlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2Rpc3BsYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cblxuI3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgI2NhdC1zZWxlY3Rvci1jb250YWluZXIge1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgfVxuXG4gICNkaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICB9XG59XG5gXG5cbmNvbnN0IGRlYm91bmNlID0gKGZuOiBGdW5jdGlvbiwgZGVsYXkgPSAxMDAwKSA9PiB7XG4gIGxldCBidXN5ID0gZmFsc2VcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoIWJ1c3kpIHtcbiAgICAgIGJ1c3kgPSB0cnVlXG4gICAgICBmbigpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYnVzeSA9IGZhbHNlXG4gICAgICB9LCBkZWxheSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRcbiAgX2NhdFNlbGVjdG9yQ29udGFpbmVyOiBJQ2F0U2VsZWN0b3JDb250YWluZXJcbiAgX2Rpc3BsYXk6IElEaXNwbGF5XG4gIF9idXR0b246IEhUTUxCdXR0b25FbGVtZW50XG4gIF9zZWxlY3RlZENhdCA9IENhdEVudHJ5WydORysgQW55JSddXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSlcblxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5fY2F0U2VsZWN0b3JDb250YWluZXIgPSBDYXRTZWxlY3RvckNvbnRhaW5lcihcbiAgICAgIHRoaXMuX2NvbnRhaW5lcixcbiAgICAgICh2YWx1ZTogQ2F0RW50cnkpID0+IHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXQgIT09IHZhbHVlICYmIGRlYm91bmNlKCgpID0+IHRoaXMucmVmcmVzaCh2YWx1ZSkpKClcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXQgPSB2YWx1ZVxuICAgICAgfSxcbiAgICApXG4gICAgdGhpcy5fZGlzcGxheSA9IERpc3BsYXkodGhpcy5fY29udGFpbmVyKVxuICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcblxuICAgIHRoaXMuX2NvbnRhaW5lci5pZCA9ICdjb250YWluZXInXG4gICAgdGhpcy5fYnV0dG9uLnRleHRDb250ZW50ID0gJ0dldC9SZWZyZXNoJ1xuICAgIHRoaXMuX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlYm91bmNlKHRoaXMucmVmcmVzaCkpXG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IFNUWUxFXG5cbiAgICBzaGFkb3cuYXBwZW5kKHN0eWxlLCB0aGlzLl9jb250YWluZXIpXG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmlzQ29ubmVjdGVkICYmIHRoaXMucmVmcmVzaCgpXG4gIH1cblxuICByZWZyZXNoID0gYXN5bmMgKHZhbHVlOiBDYXRFbnRyeSA9IHRoaXMuX3NlbGVjdGVkQ2F0KSA9PiB7XG4gICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ0dldHRpbmcgdGltZXMuLi4nXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5nZXRSdW5zRm9yQ2F0KHZhbHVlKVxuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MjApIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gXCJTUkMncyBidXN5ISBSZXRyeSBMYXRlci5cIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ0ZhaWxlZCEgUGxlYXNlIFJldHJ5LidcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLl9kaXNwbGF5LnRpbWUgPSAoYXdhaXQgcmVzLmpzb24oKSkuZGF0YS5ydW5zWzBdLnJ1bi50aW1lcy5pbmdhbWVfdFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgZSB9KVxuICAgIH1cbiAgfVxuXG4gIGdldFJ1bnNGb3JDYXQgPSBhc3luYyAoY2F0OiBDYXRFbnRyeSkgPT5cbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL3d3dy5zcGVlZHJ1bi5jb20vYXBpL3YxL2xlYWRlcmJvYXJkcy93Nmo3NTQ2ai9jYXRlZ29yeS8ke2NhdH0/dmFyLTY4azRkeXpsPTRxeTNyNTdsJnRvcD0xYCxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1jb21wb25lbnQnLCBNeUNvbXBvbmVudClcbn1cbiIsImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICcuL2ZwJ1xuXG5jb25zdCBzcGxpdEVtbWV0ID0gKGVtbWV0OiBzdHJpbmcpID0+XG4gIGVtbWV0LnNwbGl0KCcnKS5yZWR1Y2UoKGFjYzogc3RyaW5nW10sIGw6IHN0cmluZykgPT4ge1xuICAgIGlmICghYWNjLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2xdKVxuICAgIH1cbiAgICBpZiAoL1xcVy8udGVzdChsKSB8fCAoL1xcVy8udGVzdChhY2NbYWNjLmxlbmd0aCAtIDFdKSAmJiAhL1xcVy8udGVzdChsKSkpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtsXSlcbiAgICB9XG4gICAgYWNjW2FjYy5sZW5ndGggLSAxXSA9IGFjY1thY2MubGVuZ3RoIC0gMV0uY29uY2F0KGwpXG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcblxuaW50ZXJmYWNlIE1pbmVFbGVtZW50IHtcbiAgY2hpbGRyZW46IEhUTUxFbGVtZW50W11cbiAgY2xhc3NMaXN0OiBzdHJpbmdbXSB8IG51bGxcbiAgaWQ6IHN0cmluZyB8IG51bGxcbiAgdGFnOiBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBcbiAgdGV4dENvbnRlbnQ6IHN0cmluZyB8IG51bGxcbn1cblxuZW51bSBGbGFncyB7XG4gIENsYXNzLFxuICBJZCxcbiAgQ2hpbGRyZW5TdGFydCxcbiAgQ2hpbGRyZW5FbmQsXG4gIENvdW50LFxuICBTaWJsaW5nLFxuICBUZXh0U3RhcnQsXG4gIFRleHRFbmQsXG59XG5cbmNvbnN0IGNyZWF0ZURlZmF1bHRFbGVtZW50ID0gKCk6IE1pbmVFbGVtZW50ID0+ICh7XG4gIGNoaWxkcmVuOiBbXSxcbiAgY2xhc3NMaXN0OiBudWxsLFxuICBpZDogbnVsbCxcbiAgdGFnOiAnZGl2JyxcbiAgdGV4dENvbnRlbnQ6IG51bGwsXG59KVxuXG4vKipcbiAqIEBwYXJhbSB0b2tlbnMgc3RyaW5nW11cbiAqIEByZXR1cm4gTWluZUVsZW1lbnRbXVxuICovXG5leHBvcnQgY29uc3QgYnVpbGRFbGVtZW50cyA9ICh0b2tlbnM6IHN0cmluZ1tdKSA9PiB7XG4gIC8vIHN3aXRjaCAodG9rZW4pIHtcbiAgLy8gICBjYXNlICcqJzpcbiAgLy8gICAgIGFjYy5mbGFnID0gRmxhZ3MuQ291bnRcbiAgLy8gICAgIHJldHVybiBhY2NcbiAgLy8gICBjYXNlICcrJzpcbiAgLy8gICAgIGFjYy5mbGFnID0gRmxhZ3MuU2libGluZ1xuICAvLyAgICAgcmV0dXJuIGFjY1xuICAvLyB9XG4gIGNvbnN0IG1hcmtlcnMgPSBbXVxuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4sIGluZGV4KSA9PiB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGJ1aWxkRWxlbWVudCA9ICh0b2tlbnM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IHIgPSB0b2tlbnMucmVkdWNlKFxuICAgIChhY2M6IHsgZWxlbWVudDogTWluZUVsZW1lbnQ7IGZsYWc6IEZsYWdzIHwgbnVsbCB9LCB0b2tlbiwgaSkgPT4ge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLkNsYXNzXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLklkXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICcoJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLkNoaWxkcmVuU3RhcnRcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuQ2hpbGRyZW5FbmRcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuVGV4dFN0YXJ0XG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLlRleHRFbmRcbiAgICAgICAgICByZXR1cm4gYWNjXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzd2l0Y2ggKGFjYy5mbGFnKSB7XG4gICAgICAgICAgICBjYXNlIEZsYWdzLkNsYXNzOlxuICAgICAgICAgICAgICBhY2MuZWxlbWVudC5jbGFzc0xpc3Q/LnB1c2godG9rZW4pXG4gICAgICAgICAgICAgIGFjYy5mbGFnID0gbnVsbFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBGbGFncy5JZDpcbiAgICAgICAgICAgICAgYWNjLmVsZW1lbnQuaWQgPSB0b2tlblxuICAgICAgICAgICAgICBhY2MuZmxhZyA9IG51bGxcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuQ2hpbGRyZW5TdGFydDpcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuQ2hpbGRyZW5FbmQ6XG4gICAgICAgICAgICAgIC8vIFRPRE86IEltcGxlbWVudFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBGbGFncy5UZXh0U3RhcnQ6XG4gICAgICAgICAgICAgIGFjYy5lbGVtZW50LnRleHRDb250ZW50ICs9IHRva2VuXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEZsYWdzLlRleHRFbmQ6XG4gICAgICAgICAgICAgIGFjYy5mbGFnID0gbnVsbFxuICAgICAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBhY2MuZWxlbWVudC50YWcgPSB0b2tlbiBhcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfVxuICAgIH0sXG4gICAgeyBlbGVtZW50OiBjcmVhdGVEZWZhdWx0RWxlbWVudCgpLCBmbGFnOiBudWxsIH0sXG4gIClcbiAgcmV0dXJuIHIuZWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgJCA9IChzZWxlY3Rvcjogc3RyaW5nKSA9PlxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBFbGVtZW50XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKGVsZW1lbnQ6IE1pbmVFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LnRhZylcbiAgZWxlbWVudC5jbGFzc0xpc3QgJiYgZWwuY2xhc3NMaXN0LmFkZCguLi5lbGVtZW50LmNsYXNzTGlzdClcbiAgZWwudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50XG4gIGVsZW1lbnQuaWQgJiYgKGVsLmlkID0gZWxlbWVudC5pZClcbiAgLy8gb3B0aW9ucy5ldmVudExpc3RlbmVyICYmXG4gIC8vICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihvcHRpb25zPy5ldmVudExpc3RlbmVyWzBdLCBvcHRpb25zPy5ldmVudExpc3RlbmVyWzFdKVxuICByZXR1cm4gZWxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShzcGxpdEVtbWV0LCBidWlsZEVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQpXG4iLCJleHBvcnQgY29uc3QgY3VycnkgPSAoZjogRnVuY3Rpb24sIC4uLm91dGVyOiBhbnlbXSkgPT4gKC4uLmlubmVyOiBhbnlbXSkgPT5cbiAgZi5hcHBseShudWxsLCBvdXRlci5jb25jYXQoaW5uZXIpKVxuXG5leHBvcnQgY29uc3QgY29tcG9zZSA9IChmOiBGdW5jdGlvbiwgLi4uZzogRnVuY3Rpb25bXSkgPT4gKHg6IGFueSk6IGFueSA9PlxuICAhZy5sZW5ndGggPyBmKHgpIDogY29tcG9zZShnWzBdLCAuLi5nLnNsaWNlKDEpKShmKHgpKVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gJy4vcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzJ1xuaW1wb3J0IHsgJCB9IGZyb20gJy4vdXRpbHMvYnVpbGRDb21wb25lbnRzJ1xuaW1wb3J0IE15Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9NeUNvbXBvbmVudC8nXG5cbmNvbnN0IGJhY2tncm91bmRJbWFnZXMgPSBbJ2FtbXktc3RhdGljJywgJ2JlYWQnXVxuXG5NeUNvbXBvbmVudCgpXG5cbi8vIEB0cy1pZ25vcmVcbiQoJ2JvZHknKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKGFzc2V0cy8ke1xuICBiYWNrZ3JvdW5kSW1hZ2VzW35+KE1hdGgucmFuZG9tKCkgKiBiYWNrZ3JvdW5kSW1hZ2VzLmxlbmd0aCldXG59LnBuZylgXG5cbiQoJ21haW4nKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdteS1jb21wb25lbnQnKSlcbiQoJyNzdG9wLWFuaW1hdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XG4gICQoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCduby1hbmltJylcbn0pXG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkZXItY29udGFpbmVyJyk/LnJlbW92ZSgpXG59XG5cbi8vIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpXG4vLyBtYWluKClcbiJdLCJzb3VyY2VSb290IjoiIn0=