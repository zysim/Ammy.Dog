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
    timeDisplay.setAttribute('class', 'display');
    return {
        timeDisplay,
        set time(time) {
            if (!this.timeDisplay) {
                throw Error;
            }
            const thresh = time * 1.1;
            const [hrTemp, restTemp] = [~~(thresh / 3600), thresh % 3600];
            const [minTemp, secTemp] = [~~(restTemp / 60), Math.ceil(restTemp % 60)];
            this.timeDisplay.setAttribute('class', 'display');
            this.timeDisplay.textContent = `${hrTemp}H ${minTemp} M ${secTemp.toFixed(1)} S`;
        },
        set message(message) {
            if (!this.timeDisplay) {
                throw Error;
            }
            this.timeDisplay.setAttribute('class', 'material-icons');
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
.display {
  text-align: center;
  font-size: 2.5rem;
}

@media (min-width: 640px) {
  .display {
    font-size: 6rem;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTXlDb21wb25lbnQvQ2F0U2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL015Q29tcG9uZW50L0Rpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL015Q29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvdXRpbHMvYnVpbGRDb21wb25lbnRzLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvdXRpbHMvZnAudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFFBT1g7QUFQRCxXQUFZLFFBQVE7SUFDbEIsZ0NBQXNCO0lBQ3RCLGlDQUF1QjtJQUN2Qix1Q0FBNkI7SUFDN0IseUNBQStCO0lBQy9CLGdDQUFzQjtJQUN0Qix5Q0FBK0I7QUFDakMsQ0FBQyxFQVBXLFFBQVEsS0FBUixRQUFRLFFBT25CO0FBRUQsTUFBTSxhQUFhLEdBQWEsUUFBUSxDQUFDLFVBQVUsQ0FBQztBQVNwRCxpRUFBZSxDQUFDLE1BQW1CLEVBQUUsUUFBa0IsRUFB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Q0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU3QixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQVcsRUFBRSxHQUFHLENBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFNLEVBQU8sRUFBRSxDQUN4RSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7VUNKdkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkEsaUVBQWlFO0FBQ3RCO0FBQ1E7QUFFbkQsaUVBQVcsRUFBRTtBQUViLHlEQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFOUQsTUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDdEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLE1BQU0sRUFBRTtBQUN2RCxDQUFDO0FBRUQsMEJBQTBCO0FBQzFCLFNBQVMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDYXRFbnRyeSB7XG4gICdORyBBbnklJyA9ICd6ZG53cDR4ZCcsXG4gICdORysgQW55JScgPSAneGs5MDFnZ2snLFxuICAnTkcgQWxsIEJydXNoZXMnID0gJ3EyNW93cWdrJyxcbiAgJ05HKyBBbGwgQnJ1c2hlczEnID0gJ3oyN2d5Nm8yJyxcbiAgJ1RvcCBEb2cnID0gJ21rZW96cXhkJyxcbiAgJ0FsbCBNYWpvciBCb3NzZXMnID0gJzlkODMxOTYyJyxcbn1cblxuY29uc3QgREVGQVVMVF9FTlRSWTogQ2F0RW50cnkgPSBDYXRFbnRyeVsnTkcrIEFueSUnXVxuXG50eXBlIE9uQ2hhbmdlID0gKHZhbHVlOiBDYXRFbnRyeSkgPT4gdm9pZFxuXG5leHBvcnQgaW50ZXJmYWNlIElDYXRTZWxlY3RvciB7XG4gIGVsOiBIVE1MU2VsZWN0RWxlbWVudFxuICBjdXJyZW50OiBDYXRFbnRyeVxufVxuXG5leHBvcnQgZGVmYXVsdCAocGFyZW50OiBIVE1MRWxlbWVudCwgb25DaGFuZ2U6IE9uQ2hhbmdlKTogSUNhdFNlbGVjdG9yID0+IHtcbiAgY29uc3QgZWwgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JykpXG5cbiAgT2JqZWN0LmVudHJpZXMoQ2F0RW50cnkpLmZvckVhY2goKGVudHJ5OiBbc3RyaW5nLCBDYXRFbnRyeV0pID0+IHtcbiAgICBjb25zdCBvcHQ6IEhUTUxPcHRpb25FbGVtZW50ID0gZWwuYXBwZW5kQ2hpbGQoXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcbiAgICApXG4gICAgaWYgKGVudHJ5WzFdID09PSBERUZBVUxUX0VOVFJZKSBvcHQuc2VsZWN0ZWQgPSB0cnVlXG4gICAgb3B0LnRleHRDb250ZW50ID0gZW50cnlbMF1cbiAgICBvcHQudmFsdWUgPSBlbnRyeVsxXVxuICB9KVxuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBvbkNoYW5nZShlbC52YWx1ZSBhcyBDYXRFbnRyeSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGVsLFxuICAgIGN1cnJlbnQ6IGVsLnZhbHVlIGFzIENhdEVudHJ5LFxuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIElEaXNwbGF5IHtcbiAgdGltZURpc3BsYXk6IEhUTUxEaXZFbGVtZW50IHwgbnVsbFxuICB0aW1lOiBudW1iZXJcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogSURpc3BsYXkgPT4ge1xuICBjb25zdCB0aW1lRGlzcGxheSA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgdGltZURpc3BsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkaXNwbGF5JylcblxuICByZXR1cm4ge1xuICAgIHRpbWVEaXNwbGF5LFxuICAgIHNldCB0aW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRocmVzaCA9IHRpbWUgKiAxLjFcbiAgICAgIGNvbnN0IFtoclRlbXAsIHJlc3RUZW1wXSA9IFt+fih0aHJlc2ggLyAzNjAwKSwgdGhyZXNoICUgMzYwMF1cbiAgICAgIGNvbnN0IFttaW5UZW1wLCBzZWNUZW1wXSA9IFt+fihyZXN0VGVtcCAvIDYwKSwgTWF0aC5jZWlsKHJlc3RUZW1wICUgNjApXVxuXG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGlzcGxheScpXG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7aHJUZW1wfUggJHttaW5UZW1wfSBNICR7c2VjVGVtcC50b0ZpeGVkKFxuICAgICAgICAxLFxuICAgICAgKX0gU2BcbiAgICB9LFxuXG4gICAgc2V0IG1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICBpZiAoIXRoaXMudGltZURpc3BsYXkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3JcbiAgICAgIH1cbiAgICAgIHRoaXMudGltZURpc3BsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYXRlcmlhbC1pY29ucycpXG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBDYXRTZWxlY3RvciwgeyBDYXRFbnRyeSwgSUNhdFNlbGVjdG9yIH0gZnJvbSAnLi9DYXRTZWxlY3RvcidcbmltcG9ydCBEaXNwbGF5LCB7IElEaXNwbGF5IH0gZnJvbSAnLi9EaXNwbGF5J1xuXG5pbnRlcmZhY2UgUnVuUmVzcG9uc2Uge1xuICBkYXRhOiB7XG4gICAgcnVuczoge1xuICAgICAgcnVuOiB7XG4gICAgICAgIHRpbWVzOiB7XG4gICAgICAgICAgaW5nYW1lX3Q6IG51bWJlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVtdXG4gIH1cbn1cblxuY29uc3QgU1RZTEUgPSBgXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuLmRpc3BsYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLmRpc3BsYXkge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgfVxufVxuYFxuXG5jbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRcbiAgX3RpdGxlOiBIVE1MU3BhbkVsZW1lbnRcbiAgX2Rpc3BsYXk6IElEaXNwbGF5XG4gIF9idXR0b246IEhUTUxCdXR0b25FbGVtZW50XG4gIF9jYXRTZWxlY3RvcjogSUNhdFNlbGVjdG9yXG4gIF9zZWxlY3RlZENhdCE6IENhdEVudHJ5XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSlcblxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5fdGl0bGUgPSB0aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxuICAgIHRoaXMuX2Rpc3BsYXkgPSBEaXNwbGF5KHRoaXMuX2NvbnRhaW5lcilcbiAgICB0aGlzLl9idXR0b24gPSB0aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXG4gICAgdGhpcy5fY2F0U2VsZWN0b3IgPSBDYXRTZWxlY3Rvcih0aGlzLl9jb250YWluZXIsICh2YWx1ZTogQ2F0RW50cnkpID0+IHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ICE9PSB2YWx1ZSAmJiB0aGlzLnJlZnJlc2godmFsdWUpXG4gICAgICB0aGlzLl9zZWxlY3RlZENhdCA9IHZhbHVlXG4gICAgfSlcblxuICAgIHRoaXMuX2NvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJ1xuICAgIHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID1cbiAgICAgICdZb3UgaGF2ZSB0byBzaG93IHZpZGVvIHByb29mIGlmIHlvdXIgcnVuIGlzIHF1aWNrZXIgdGhhbiBvciBleGFjdGx5IGF0J1xuICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9ICdSZWZyZXNoJ1xuICAgIHRoaXMuX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucmVmcmVzaCgpKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBTVFlMRVxuXG4gICAgc2hhZG93LmFwcGVuZChzdHlsZSwgdGhpcy5fY29udGFpbmVyKVxuICB9XG5cbiAgcmVmcmVzaCA9IGFzeW5jICh2YWx1ZTogQ2F0RW50cnkgPSB0aGlzLl9jYXRTZWxlY3Rvci5jdXJyZW50KSA9PiB7XG4gICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ0dldHRpbmcgdGltZXMuLi4nXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5nZXRSdW5zRm9yQ2F0KHZhbHVlKVxuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXkubWVzc2FnZSA9ICdGYWlsZWQhIFBsZWFzZSBSZXRyeS4nXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5fZGlzcGxheS50aW1lID0gKGF3YWl0IHJlcy5qc29uKCkpLmRhdGEucnVuc1swXS5ydW4udGltZXMuaW5nYW1lX3RcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyh7IGUgfSlcbiAgICB9XG4gIH1cblxuICBnZXRSdW5zRm9yQ2F0ID0gYXN5bmMgKGNhdDogQ2F0RW50cnkpID0+XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly93d3cuc3BlZWRydW4uY29tL2FwaS92MS9sZWFkZXJib2FyZHMvdzZqNzU0NmovY2F0ZWdvcnkvJHtjYXR9P3Zhci02OGs0ZHl6bD00cXkzcjU3bCZ0b3A9MWAsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktY29tcG9uZW50JywgTXlDb21wb25lbnQpXG59XG4iLCJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnLi9mcCdcblxuY29uc3Qgc3BsaXRFbW1ldCA9IChlbW1ldDogc3RyaW5nKSA9PlxuICBlbW1ldC5zcGxpdCgnJykucmVkdWNlKChhY2M6IHN0cmluZ1tdLCBsOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIWFjYy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtsXSlcbiAgICB9XG4gICAgaWYgKC9cXFcvLnRlc3QobCkgfHwgKC9cXFcvLnRlc3QoYWNjW2FjYy5sZW5ndGggLSAxXSkgJiYgIS9cXFcvLnRlc3QobCkpKSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChbbF0pXG4gICAgfVxuICAgIGFjY1thY2MubGVuZ3RoIC0gMV0gPSBhY2NbYWNjLmxlbmd0aCAtIDFdLmNvbmNhdChsKVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG5cbmludGVyZmFjZSBNaW5lRWxlbWVudCB7XG4gIGNoaWxkcmVuOiBIVE1MRWxlbWVudFtdXG4gIGNsYXNzTGlzdDogc3RyaW5nW10gfCBudWxsXG4gIGlkOiBzdHJpbmcgfCBudWxsXG4gIHRhZzoga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXG4gIHRleHRDb250ZW50OiBzdHJpbmcgfCBudWxsXG59XG5cbmVudW0gRmxhZ3Mge1xuICBDbGFzcyxcbiAgSWQsXG4gIENoaWxkcmVuU3RhcnQsXG4gIENoaWxkcmVuRW5kLFxuICBDb3VudCxcbiAgU2libGluZyxcbiAgVGV4dFN0YXJ0LFxuICBUZXh0RW5kLFxufVxuXG5jb25zdCBjcmVhdGVEZWZhdWx0RWxlbWVudCA9ICgpOiBNaW5lRWxlbWVudCA9PiAoe1xuICBjaGlsZHJlbjogW10sXG4gIGNsYXNzTGlzdDogbnVsbCxcbiAgaWQ6IG51bGwsXG4gIHRhZzogJ2RpdicsXG4gIHRleHRDb250ZW50OiBudWxsLFxufSlcblxuLyoqXG4gKiBAcGFyYW0gdG9rZW5zIHN0cmluZ1tdXG4gKiBAcmV0dXJuIE1pbmVFbGVtZW50W11cbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkRWxlbWVudHMgPSAodG9rZW5zOiBzdHJpbmdbXSkgPT4ge1xuICAvLyBzd2l0Y2ggKHRva2VuKSB7XG4gIC8vICAgY2FzZSAnKic6XG4gIC8vICAgICBhY2MuZmxhZyA9IEZsYWdzLkNvdW50XG4gIC8vICAgICByZXR1cm4gYWNjXG4gIC8vICAgY2FzZSAnKyc6XG4gIC8vICAgICBhY2MuZmxhZyA9IEZsYWdzLlNpYmxpbmdcbiAgLy8gICAgIHJldHVybiBhY2NcbiAgLy8gfVxuICBjb25zdCBtYXJrZXJzID0gW11cbiAgdG9rZW5zLmZvckVhY2goKHRva2VuLCBpbmRleCkgPT4ge30pXG59XG5cbmV4cG9ydCBjb25zdCBidWlsZEVsZW1lbnQgPSAodG9rZW5zOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCByID0gdG9rZW5zLnJlZHVjZShcbiAgICAoYWNjOiB7IGVsZW1lbnQ6IE1pbmVFbGVtZW50OyBmbGFnOiBGbGFncyB8IG51bGwgfSwgdG9rZW4sIGkpID0+IHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5DbGFzc1xuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5JZFxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5DaGlsZHJlblN0YXJ0XG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICcpJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLkNoaWxkcmVuRW5kXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICd7JzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLlRleHRTdGFydFxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5UZXh0RW5kXG4gICAgICAgICAgcmV0dXJuIGFjY1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3dpdGNoIChhY2MuZmxhZykge1xuICAgICAgICAgICAgY2FzZSBGbGFncy5DbGFzczpcbiAgICAgICAgICAgICAgYWNjLmVsZW1lbnQuY2xhc3NMaXN0Py5wdXNoKHRva2VuKVxuICAgICAgICAgICAgICBhY2MuZmxhZyA9IG51bGxcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuSWQ6XG4gICAgICAgICAgICAgIGFjYy5lbGVtZW50LmlkID0gdG9rZW5cbiAgICAgICAgICAgICAgYWNjLmZsYWcgPSBudWxsXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEZsYWdzLkNoaWxkcmVuU3RhcnQ6XG4gICAgICAgICAgICBjYXNlIEZsYWdzLkNoaWxkcmVuRW5kOlxuICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnRcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuVGV4dFN0YXJ0OlxuICAgICAgICAgICAgICBhY2MuZWxlbWVudC50ZXh0Q29udGVudCArPSB0b2tlblxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBGbGFncy5UZXh0RW5kOlxuICAgICAgICAgICAgICBhY2MuZmxhZyA9IG51bGxcbiAgICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYWNjLmVsZW1lbnQudGFnID0gdG9rZW4gYXMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgIH1cbiAgICB9LFxuICAgIHsgZWxlbWVudDogY3JlYXRlRGVmYXVsdEVsZW1lbnQoKSwgZmxhZzogbnVsbCB9LFxuICApXG4gIHJldHVybiByLmVsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0ICQgPSAoc2VsZWN0b3I6IHN0cmluZykgPT5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgRWxlbWVudFxuXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50OiBNaW5lRWxlbWVudCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC50YWcpXG4gIGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsLmNsYXNzTGlzdC5hZGQoLi4uZWxlbWVudC5jbGFzc0xpc3QpXG4gIGVsLnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudFxuICBlbGVtZW50LmlkICYmIChlbC5pZCA9IGVsZW1lbnQuaWQpXG4gIC8vIG9wdGlvbnMuZXZlbnRMaXN0ZW5lciAmJlxuICAvLyAgIGVsLmFkZEV2ZW50TGlzdGVuZXIob3B0aW9ucz8uZXZlbnRMaXN0ZW5lclswXSwgb3B0aW9ucz8uZXZlbnRMaXN0ZW5lclsxXSlcbiAgcmV0dXJuIGVsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uoc3BsaXRFbW1ldCwgYnVpbGRFbGVtZW50LCBjcmVhdGVFbGVtZW50KVxuIiwiZXhwb3J0IGNvbnN0IGN1cnJ5ID0gKGY6IEZ1bmN0aW9uLCAuLi5vdXRlcjogYW55W10pID0+ICguLi5pbm5lcjogYW55W10pID0+XG4gIGYuYXBwbHkobnVsbCwgb3V0ZXIuY29uY2F0KGlubmVyKSlcblxuZXhwb3J0IGNvbnN0IGNvbXBvc2UgPSAoZjogRnVuY3Rpb24sIC4uLmc6IEZ1bmN0aW9uW10pID0+ICh4OiBhbnkpOiBhbnkgPT5cbiAgIWcubGVuZ3RoID8gZih4KSA6IGNvbXBvc2UoZ1swXSwgLi4uZy5zbGljZSgxKSkoZih4KSlcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHJlZ2lzdGVyU2VydmljZVdvcmtlciBmcm9tICcuL3JlZ2lzdGVyU2VydmljZVdvcmtlci5qcydcbmltcG9ydCB7ICQgfSBmcm9tICcuL3V0aWxzL2J1aWxkQ29tcG9uZW50cydcbmltcG9ydCBNeUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvTXlDb21wb25lbnQvJ1xuXG5NeUNvbXBvbmVudCgpXG5cbiQoJyNyb290JykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbXktY29tcG9uZW50JykpXG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkZXItY29udGFpbmVyJyk/LnJlbW92ZSgpXG59XG5cbi8vIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpXG4vLyBtYWluKClcbiJdLCJzb3VyY2VSb290IjoiIn0=