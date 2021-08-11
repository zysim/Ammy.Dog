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
    CatEntry["NG+ All Brushes1"] = "z27gy6o2";
    CatEntry["Top Dog"] = "mkeozqxd";
    CatEntry["All Major Bosses"] = "9d831962";
})(CatEntry || (CatEntry = {}));
const DEFAULT_ENTRY = CatEntry['NG+ Any%'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((parent, onChange) => {
    const el = parent.appendChild(document.createElement('select'));
    el.id = 'cat-select';
    Object.entries(CatEntry).forEach((entry) => {
        const opt = el.appendChild(document.createElement('option'));
        if (entry[1] === DEFAULT_ENTRY)
            opt.selected = true;
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

/***/ "./src/client/components/MyComponent/Display.ts":
/*!******************************************************!*\
  !*** ./src/client/components/MyComponent/Display.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
            const thresh = time * 1.1;
            const [hrTemp, restTemp] = [~~(thresh / 3600), thresh % 3600];
            const [minTemp, secTemp] = [~~(restTemp / 60), Math.ceil(restTemp % 60)];
            this.timeDisplay.textContent = `${hrTemp}H ${minTemp} M ${secTemp.toFixed(1)} S`;
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
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display */ "./src/client/components/MyComponent/Display.ts");


const STYLE = `
.container {
    display: grid;
    grid-template-columns: 1fr;
}

.container * {
  font-size: 24px;
  font-family: "astralsOkami", serif;
}

#cat-select > option {
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
  #display {
    font-size: 6rem;
    height: 6rem;
  }
}
`;
class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.refresh = async (value = this._catSelector.current) => {
            this._display.message = 'Getting times...';
            const res = await this.getRunsForCat(value);
            if (!res.ok) {
                this._display.message = 'Failed! Please Retry.';
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
        this._title = this._container.appendChild(document.createElement('span'));
        this._display = (0,_Display__WEBPACK_IMPORTED_MODULE_1__.default)(this._container);
        this._button = this._container.appendChild(document.createElement('button'));
        this._catSelector = (0,_CatSelector__WEBPACK_IMPORTED_MODULE_0__.default)(this._container, (value) => {
            this._selectedCat !== value && this.refresh(value);
            this._selectedCat = value;
        });
        this._container.className = 'container';
        this._title.id = 'title';
        this._title.textContent =
            'You have to show video proof if your run is quicker than or exactly at';
        this._button.textContent = 'Refresh';
        this._button.addEventListener('click', () => this.refresh());
        const style = document.createElement('style');
        style.textContent = STYLE;
        shadow.append(style, this._container);
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


(0,_components_MyComponent___WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_utils_buildComponents__WEBPACK_IMPORTED_MODULE_0__.$)('#root').appendChild(document.createElement('my-component'));
const main = async () => {
    document.querySelector('#loader-container')?.remove();
};
// registerServiceWorker()
// main()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTXlDb21wb25lbnQvQ2F0U2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL015Q29tcG9uZW50L0Rpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL015Q29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvdXRpbHMvYnVpbGRDb21wb25lbnRzLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvdXRpbHMvZnAudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFFBT1g7QUFQRCxXQUFZLFFBQVE7SUFDbEIsZ0NBQXNCO0lBQ3RCLGlDQUF1QjtJQUN2Qix1Q0FBNkI7SUFDN0IseUNBQStCO0lBQy9CLGdDQUFzQjtJQUN0Qix5Q0FBK0I7QUFDakMsQ0FBQyxFQVBXLFFBQVEsS0FBUixRQUFRLFFBT25CO0FBRUQsTUFBTSxhQUFhLEdBQWEsUUFBUSxDQUFDLFVBQVUsQ0FBQztBQVNwRCxpRUFBZSxDQUFDLE1BQW1CLEVBQUUsUUFBa0IsRUFB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QyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFN0IsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFXLEVBQUUsR0FBRyxDQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBTSxFQUFPLEVBQUUsQ0FDeEUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O1VDSnZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BLGlFQUFpRTtBQUN0QjtBQUNRO0FBRW5ELGlFQUFXLEVBQUU7QUFFYix5REFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTlELE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ3RCLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRSxNQUFNLEVBQUU7QUFDdkQsQ0FBQztBQUVELDBCQUEwQjtBQUMxQixTQUFTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2F0RW50cnkge1xuICAnTkcgQW55JScgPSAnemRud3A0eGQnLFxuICAnTkcrIEFueSUnID0gJ3hrOTAxZ2drJyxcbiAgJ05HIEFsbCBCcnVzaGVzJyA9ICdxMjVvd3FnaycsXG4gICdORysgQWxsIEJydXNoZXMxJyA9ICd6MjdneTZvMicsXG4gICdUb3AgRG9nJyA9ICdta2VvenF4ZCcsXG4gICdBbGwgTWFqb3IgQm9zc2VzJyA9ICc5ZDgzMTk2MicsXG59XG5cbmNvbnN0IERFRkFVTFRfRU5UUlk6IENhdEVudHJ5ID0gQ2F0RW50cnlbJ05HKyBBbnklJ11cblxudHlwZSBPbkNoYW5nZSA9ICh2YWx1ZTogQ2F0RW50cnkpID0+IHZvaWRcblxuZXhwb3J0IGludGVyZmFjZSBJQ2F0U2VsZWN0b3Ige1xuICBlbDogSFRNTFNlbGVjdEVsZW1lbnRcbiAgY3VycmVudDogQ2F0RW50cnlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHBhcmVudDogSFRNTEVsZW1lbnQsIG9uQ2hhbmdlOiBPbkNoYW5nZSk6IElDYXRTZWxlY3RvciA9PiB7XG4gIGNvbnN0IGVsID0gcGFyZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKVxuICBlbC5pZCA9ICdjYXQtc2VsZWN0J1xuXG4gIE9iamVjdC5lbnRyaWVzKENhdEVudHJ5KS5mb3JFYWNoKChlbnRyeTogW3N0cmluZywgQ2F0RW50cnldKSA9PiB7XG4gICAgY29uc3Qgb3B0OiBIVE1MT3B0aW9uRWxlbWVudCA9IGVsLmFwcGVuZENoaWxkKFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXG4gICAgKVxuICAgIGlmIChlbnRyeVsxXSA9PT0gREVGQVVMVF9FTlRSWSkgb3B0LnNlbGVjdGVkID0gdHJ1ZVxuICAgIG9wdC50ZXh0Q29udGVudCA9IGVudHJ5WzBdXG4gICAgb3B0LnZhbHVlID0gZW50cnlbMV1cbiAgfSlcblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgb25DaGFuZ2UoZWwudmFsdWUgYXMgQ2F0RW50cnkpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBlbCxcbiAgICBjdXJyZW50OiBlbC52YWx1ZSBhcyBDYXRFbnRyeSxcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBJRGlzcGxheSB7XG4gIHRpbWVEaXNwbGF5OiBIVE1MRGl2RWxlbWVudCB8IG51bGxcbiAgdGltZTogbnVtYmVyXG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCAocGFyZW50OiBIVE1MRWxlbWVudCk6IElEaXNwbGF5ID0+IHtcbiAgY29uc3QgdGltZURpc3BsYXkgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gIHRpbWVEaXNwbGF5LmlkID0gJ2Rpc3BsYXknXG4gIHRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gJy0nXG5cbiAgcmV0dXJuIHtcbiAgICB0aW1lRGlzcGxheSxcbiAgICBzZXQgdGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgIGlmICghdGhpcy50aW1lRGlzcGxheSkge1xuICAgICAgICB0aHJvdyBFcnJvclxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aHJlc2ggPSB0aW1lICogMS4xXG4gICAgICBjb25zdCBbaHJUZW1wLCByZXN0VGVtcF0gPSBbfn4odGhyZXNoIC8gMzYwMCksIHRocmVzaCAlIDM2MDBdXG4gICAgICBjb25zdCBbbWluVGVtcCwgc2VjVGVtcF0gPSBbfn4ocmVzdFRlbXAgLyA2MCksIE1hdGguY2VpbChyZXN0VGVtcCAlIDYwKV1cblxuICAgICAgdGhpcy50aW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2hyVGVtcH1IICR7bWluVGVtcH0gTSAke3NlY1RlbXAudG9GaXhlZChcbiAgICAgICAgMSxcbiAgICAgICl9IFNgXG4gICAgfSxcblxuICAgIHNldCBtZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBDYXRTZWxlY3RvciwgeyBDYXRFbnRyeSwgSUNhdFNlbGVjdG9yIH0gZnJvbSAnLi9DYXRTZWxlY3RvcidcbmltcG9ydCBEaXNwbGF5LCB7IElEaXNwbGF5IH0gZnJvbSAnLi9EaXNwbGF5J1xuXG5pbnRlcmZhY2UgUnVuUmVzcG9uc2Uge1xuICBkYXRhOiB7XG4gICAgcnVuczoge1xuICAgICAgcnVuOiB7XG4gICAgICAgIHRpbWVzOiB7XG4gICAgICAgICAgaW5nYW1lX3Q6IG51bWJlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVtdXG4gIH1cbn1cblxuY29uc3QgU1RZTEUgPSBgXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuXG4uY29udGFpbmVyICoge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImFzdHJhbHNPa2FtaVwiLCBzZXJpZjtcbn1cblxuI2NhdC1zZWxlY3QgPiBvcHRpb24ge1xuICBmb250LWZhbWlseTogXCJhc3RyYWxzT2thbWlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2Rpc3BsYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cblxuI3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgI2Rpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gIH1cbn1cbmBcblxuY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIF9jb250YWluZXI6IEhUTUxEaXZFbGVtZW50XG4gIF90aXRsZTogSFRNTFNwYW5FbGVtZW50XG4gIF9kaXNwbGF5OiBJRGlzcGxheVxuICBfYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudFxuICBfY2F0U2VsZWN0b3I6IElDYXRTZWxlY3RvclxuICBfc2VsZWN0ZWRDYXQhOiBDYXRFbnRyeVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG5cbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSlcbiAgICB0aGlzLl9kaXNwbGF5ID0gRGlzcGxheSh0aGlzLl9jb250YWluZXIpXG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxuICAgIHRoaXMuX2NhdFNlbGVjdG9yID0gQ2F0U2VsZWN0b3IodGhpcy5fY29udGFpbmVyLCAodmFsdWU6IENhdEVudHJ5KSA9PiB7XG4gICAgICB0aGlzLl9zZWxlY3RlZENhdCAhPT0gdmFsdWUgJiYgdGhpcy5yZWZyZXNoKHZhbHVlKVxuICAgICAgdGhpcy5fc2VsZWN0ZWRDYXQgPSB2YWx1ZVxuICAgIH0pXG5cbiAgICB0aGlzLl9jb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcidcbiAgICB0aGlzLl90aXRsZS5pZCA9ICd0aXRsZSdcbiAgICB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9XG4gICAgICAnWW91IGhhdmUgdG8gc2hvdyB2aWRlbyBwcm9vZiBpZiB5b3VyIHJ1biBpcyBxdWlja2VyIHRoYW4gb3IgZXhhY3RseSBhdCdcbiAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSAnUmVmcmVzaCdcbiAgICB0aGlzLl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlZnJlc2goKSlcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gU1RZTEVcblxuICAgIHNoYWRvdy5hcHBlbmQoc3R5bGUsIHRoaXMuX2NvbnRhaW5lcilcbiAgfVxuXG4gIHJlZnJlc2ggPSBhc3luYyAodmFsdWU6IENhdEVudHJ5ID0gdGhpcy5fY2F0U2VsZWN0b3IuY3VycmVudCkgPT4ge1xuICAgIHRoaXMuX2Rpc3BsYXkubWVzc2FnZSA9ICdHZXR0aW5nIHRpbWVzLi4uJ1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZ2V0UnVuc0ZvckNhdCh2YWx1ZSlcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICB0aGlzLl9kaXNwbGF5Lm1lc3NhZ2UgPSAnRmFpbGVkISBQbGVhc2UgUmV0cnkuJ1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2Rpc3BsYXkudGltZSA9IChhd2FpdCByZXMuanNvbigpKS5kYXRhLnJ1bnNbMF0ucnVuLnRpbWVzLmluZ2FtZV90XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coeyBlIH0pXG4gICAgfVxuICB9XG5cbiAgZ2V0UnVuc0ZvckNhdCA9IGFzeW5jIChjYXQ6IENhdEVudHJ5KSA9PlxuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vd3d3LnNwZWVkcnVuLmNvbS9hcGkvdjEvbGVhZGVyYm9hcmRzL3c2ajc1NDZqL2NhdGVnb3J5LyR7Y2F0fT92YXItNjhrNGR5emw9NHF5M3I1N2wmdG9wPTFgLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWNvbXBvbmVudCcsIE15Q29tcG9uZW50KVxufVxuIiwiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJy4vZnAnXG5cbmNvbnN0IHNwbGl0RW1tZXQgPSAoZW1tZXQ6IHN0cmluZykgPT5cbiAgZW1tZXQuc3BsaXQoJycpLnJlZHVjZSgoYWNjOiBzdHJpbmdbXSwgbDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFhY2MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChbbF0pXG4gICAgfVxuICAgIGlmICgvXFxXLy50ZXN0KGwpIHx8ICgvXFxXLy50ZXN0KGFjY1thY2MubGVuZ3RoIC0gMV0pICYmICEvXFxXLy50ZXN0KGwpKSkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2xdKVxuICAgIH1cbiAgICBhY2NbYWNjLmxlbmd0aCAtIDFdID0gYWNjW2FjYy5sZW5ndGggLSAxXS5jb25jYXQobClcbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxuXG5pbnRlcmZhY2UgTWluZUVsZW1lbnQge1xuICBjaGlsZHJlbjogSFRNTEVsZW1lbnRbXVxuICBjbGFzc0xpc3Q6IHN0cmluZ1tdIHwgbnVsbFxuICBpZDogc3RyaW5nIHwgbnVsbFxuICB0YWc6IGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcFxuICB0ZXh0Q29udGVudDogc3RyaW5nIHwgbnVsbFxufVxuXG5lbnVtIEZsYWdzIHtcbiAgQ2xhc3MsXG4gIElkLFxuICBDaGlsZHJlblN0YXJ0LFxuICBDaGlsZHJlbkVuZCxcbiAgQ291bnQsXG4gIFNpYmxpbmcsXG4gIFRleHRTdGFydCxcbiAgVGV4dEVuZCxcbn1cblxuY29uc3QgY3JlYXRlRGVmYXVsdEVsZW1lbnQgPSAoKTogTWluZUVsZW1lbnQgPT4gKHtcbiAgY2hpbGRyZW46IFtdLFxuICBjbGFzc0xpc3Q6IG51bGwsXG4gIGlkOiBudWxsLFxuICB0YWc6ICdkaXYnLFxuICB0ZXh0Q29udGVudDogbnVsbCxcbn0pXG5cbi8qKlxuICogQHBhcmFtIHRva2VucyBzdHJpbmdbXVxuICogQHJldHVybiBNaW5lRWxlbWVudFtdXG4gKi9cbmV4cG9ydCBjb25zdCBidWlsZEVsZW1lbnRzID0gKHRva2Vuczogc3RyaW5nW10pID0+IHtcbiAgLy8gc3dpdGNoICh0b2tlbikge1xuICAvLyAgIGNhc2UgJyonOlxuICAvLyAgICAgYWNjLmZsYWcgPSBGbGFncy5Db3VudFxuICAvLyAgICAgcmV0dXJuIGFjY1xuICAvLyAgIGNhc2UgJysnOlxuICAvLyAgICAgYWNjLmZsYWcgPSBGbGFncy5TaWJsaW5nXG4gIC8vICAgICByZXR1cm4gYWNjXG4gIC8vIH1cbiAgY29uc3QgbWFya2VycyA9IFtdXG4gIHRva2Vucy5mb3JFYWNoKCh0b2tlbiwgaW5kZXgpID0+IHt9KVxufVxuXG5leHBvcnQgY29uc3QgYnVpbGRFbGVtZW50ID0gKHRva2Vuczogc3RyaW5nW10pID0+IHtcbiAgY29uc3QgciA9IHRva2Vucy5yZWR1Y2UoXG4gICAgKGFjYzogeyBlbGVtZW50OiBNaW5lRWxlbWVudDsgZmxhZzogRmxhZ3MgfCBudWxsIH0sIHRva2VuLCBpKSA9PiB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuQ2xhc3NcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJyMnOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuSWRcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJygnOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuQ2hpbGRyZW5TdGFydFxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAnKSc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5DaGlsZHJlbkVuZFxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5UZXh0U3RhcnRcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuVGV4dEVuZFxuICAgICAgICAgIHJldHVybiBhY2NcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN3aXRjaCAoYWNjLmZsYWcpIHtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuQ2xhc3M6XG4gICAgICAgICAgICAgIGFjYy5lbGVtZW50LmNsYXNzTGlzdD8ucHVzaCh0b2tlbilcbiAgICAgICAgICAgICAgYWNjLmZsYWcgPSBudWxsXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEZsYWdzLklkOlxuICAgICAgICAgICAgICBhY2MuZWxlbWVudC5pZCA9IHRva2VuXG4gICAgICAgICAgICAgIGFjYy5mbGFnID0gbnVsbFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBGbGFncy5DaGlsZHJlblN0YXJ0OlxuICAgICAgICAgICAgY2FzZSBGbGFncy5DaGlsZHJlbkVuZDpcbiAgICAgICAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEZsYWdzLlRleHRTdGFydDpcbiAgICAgICAgICAgICAgYWNjLmVsZW1lbnQudGV4dENvbnRlbnQgKz0gdG9rZW5cbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuVGV4dEVuZDpcbiAgICAgICAgICAgICAgYWNjLmZsYWcgPSBudWxsXG4gICAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGFjYy5lbGVtZW50LnRhZyA9IHRva2VuIGFzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9XG4gICAgfSxcbiAgICB7IGVsZW1lbnQ6IGNyZWF0ZURlZmF1bHRFbGVtZW50KCksIGZsYWc6IG51bGwgfSxcbiAgKVxuICByZXR1cm4gci5lbGVtZW50XG59XG5cbmV4cG9ydCBjb25zdCAkID0gKHNlbGVjdG9yOiBzdHJpbmcpID0+XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIGFzIEVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudDogTWluZUVsZW1lbnQpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQudGFnKVxuICBlbGVtZW50LmNsYXNzTGlzdCAmJiBlbC5jbGFzc0xpc3QuYWRkKC4uLmVsZW1lbnQuY2xhc3NMaXN0KVxuICBlbC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnRcbiAgZWxlbWVudC5pZCAmJiAoZWwuaWQgPSBlbGVtZW50LmlkKVxuICAvLyBvcHRpb25zLmV2ZW50TGlzdGVuZXIgJiZcbiAgLy8gICBlbC5hZGRFdmVudExpc3RlbmVyKG9wdGlvbnM/LmV2ZW50TGlzdGVuZXJbMF0sIG9wdGlvbnM/LmV2ZW50TGlzdGVuZXJbMV0pXG4gIHJldHVybiBlbFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKHNwbGl0RW1tZXQsIGJ1aWxkRWxlbWVudCwgY3JlYXRlRWxlbWVudClcbiIsImV4cG9ydCBjb25zdCBjdXJyeSA9IChmOiBGdW5jdGlvbiwgLi4ub3V0ZXI6IGFueVtdKSA9PiAoLi4uaW5uZXI6IGFueVtdKSA9PlxuICBmLmFwcGx5KG51bGwsIG91dGVyLmNvbmNhdChpbm5lcikpXG5cbmV4cG9ydCBjb25zdCBjb21wb3NlID0gKGY6IEZ1bmN0aW9uLCAuLi5nOiBGdW5jdGlvbltdKSA9PiAoeDogYW55KTogYW55ID0+XG4gICFnLmxlbmd0aCA/IGYoeCkgOiBjb21wb3NlKGdbMF0sIC4uLmcuc2xpY2UoMSkpKGYoeCkpXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCByZWdpc3RlclNlcnZpY2VXb3JrZXIgZnJvbSAnLi9yZWdpc3RlclNlcnZpY2VXb3JrZXIuanMnXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi91dGlscy9idWlsZENvbXBvbmVudHMnXG5pbXBvcnQgTXlDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL015Q29tcG9uZW50LydcblxuTXlDb21wb25lbnQoKVxuXG4kKCcjcm9vdCcpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ215LWNvbXBvbmVudCcpKVxuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZGVyLWNvbnRhaW5lcicpPy5yZW1vdmUoKVxufVxuXG4vLyByZWdpc3RlclNlcnZpY2VXb3JrZXIoKVxuLy8gbWFpbigpXG4iXSwic291cmNlUm9vdCI6IiJ9