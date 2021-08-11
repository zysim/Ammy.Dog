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
        style.textContent = `
      .container {
          display: grid;
          grid-template-columns: 1fr;
      }
    `;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTXlDb21wb25lbnQvQ2F0U2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL015Q29tcG9uZW50L0Rpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL015Q29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvdXRpbHMvYnVpbGRDb21wb25lbnRzLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvdXRpbHMvZnAudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFFBT1g7QUFQRCxXQUFZLFFBQVE7SUFDbEIsZ0NBQXNCO0lBQ3RCLGlDQUF1QjtJQUN2Qix1Q0FBNkI7SUFDN0IseUNBQStCO0lBQy9CLGdDQUFzQjtJQUN0Qix5Q0FBK0I7QUFDakMsQ0FBQyxFQVBXLFFBQVEsS0FBUixRQUFRLFFBT25CO0FBRUQsTUFBTSxhQUFhLEdBQWEsUUFBUSxDQUFDLFVBQVUsQ0FBQztBQVNwRCxpRUFBZSxDQUFDLE1BQW1CLEVBQUUsUUFBa0IsRUFBZ0IsRUFBRTtJQUN2RSxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFL0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUF5QixFQUFFLEVBQUU7UUFDN0QsTUFBTSxHQUFHLEdBQXNCLEVBQUUsQ0FBQyxXQUFXLENBQzNDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQ2pDO1FBQ0QsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssYUFBYTtZQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUNuRCxHQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQztJQUVGLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ2pDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBaUIsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFFRixPQUFPO1FBQ0wsRUFBRTtRQUNGLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBaUI7S0FDOUI7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0QsaUVBQWUsQ0FBQyxNQUFtQixFQUFZLEVBQUU7SUFDL0MsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUU1QyxPQUFPO1FBQ0wsV0FBVztRQUNYLElBQUksSUFBSSxDQUFDLElBQVk7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLE1BQU0sS0FBSzthQUNaO1lBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEdBQUc7WUFDekIsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzdELE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFeEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxHQUFHLE1BQU0sS0FBSyxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FDdkUsQ0FBQyxDQUNGLElBQUk7UUFDUCxDQUFDO1FBRUQsSUFBSSxPQUFPLENBQUMsT0FBZTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsTUFBTSxLQUFLO2FBQ1o7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7WUFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsT0FBTztRQUN4QyxDQUFDO0tBQ0Y7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Da0U7QUFDdEI7QUFjN0MsTUFBTSxXQUFZLFNBQVEsV0FBVztJQVFuQztRQUNFLEtBQUssRUFBRTtRQThCVCxZQUFPLEdBQUcsS0FBSyxFQUFFLFFBQWtCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsa0JBQWtCO1lBQzFDLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFFM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsdUJBQXVCO2dCQUMvQyxPQUFNO2FBQ1A7WUFFRCxJQUFJO2dCQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUTthQUN4RTtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNuQjtRQUNILENBQUM7UUFFRCxrQkFBYSxHQUFHLEtBQUssRUFBRSxHQUFhLEVBQUUsRUFBRSxDQUN0QyxLQUFLLENBQ0gsa0VBQWtFLEdBQUcsOEJBQThCLEVBQ25HO1lBQ0UsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxnREFBZ0Q7YUFDekQ7U0FDRixDQUNGO1FBcERELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFFbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxpREFBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxZQUFZLEdBQUcscURBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBZSxFQUFFLEVBQUU7WUFDbkUsSUFBSSxDQUFDLFlBQVksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLO1FBQzNCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFdBQVc7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1lBQ3JCLHdFQUF3RTtRQUMxRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1RCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxLQUFLLENBQUMsV0FBVyxHQUFHOzs7OztLQUtuQjtRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQztDQTJCRjtBQUVELGlFQUFlLEdBQUcsRUFBRTtJQUNsQixjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUM7QUFDcEQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRjZCO0FBRTlCLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDbkMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFhLEVBQUUsQ0FBUyxFQUFFLEVBQUU7SUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7UUFDZixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QjtJQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNyRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QjtJQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkQsT0FBTyxHQUFHO0FBQ1osQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQVVSLElBQUssS0FTSjtBQVRELFdBQUssS0FBSztJQUNSLG1DQUFLO0lBQ0wsNkJBQUU7SUFDRixtREFBYTtJQUNiLCtDQUFXO0lBQ1gsbUNBQUs7SUFDTCx1Q0FBTztJQUNQLDJDQUFTO0lBQ1QsdUNBQU87QUFDVCxDQUFDLEVBVEksS0FBSyxLQUFMLEtBQUssUUFTVDtBQUVELE1BQU0sb0JBQW9CLEdBQUcsR0FBZ0IsRUFBRSxDQUFDLENBQUM7SUFDL0MsUUFBUSxFQUFFLEVBQUU7SUFDWixTQUFTLEVBQUUsSUFBSTtJQUNmLEVBQUUsRUFBRSxJQUFJO0lBQ1IsR0FBRyxFQUFFLEtBQUs7SUFDVixXQUFXLEVBQUUsSUFBSTtDQUNsQixDQUFDO0FBRUY7OztHQUdHO0FBQ0ksTUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUFnQixFQUFFLEVBQUU7SUFDaEQsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLElBQUk7SUFDSixNQUFNLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVNLE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBZ0IsRUFBRSxFQUFFO0lBQy9DLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3JCLENBQUMsR0FBaUQsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDOUQsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLEdBQUc7Z0JBQ04sR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSztnQkFDdEIsT0FBTyxHQUFHO1lBQ1osS0FBSyxHQUFHO2dCQUNOLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLE9BQU8sR0FBRztZQUNaLEtBQUssR0FBRztnQkFDTixHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhO2dCQUM5QixPQUFPLEdBQUc7WUFDWixLQUFLLEdBQUc7Z0JBQ04sR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVztnQkFDNUIsT0FBTyxHQUFHO1lBQ1osS0FBSyxHQUFHO2dCQUNOLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVM7Z0JBQzFCLE9BQU8sR0FBRztZQUNaLEtBQUssR0FBRztnQkFDTixHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPO2dCQUN4QixPQUFPLEdBQUc7WUFFWjtnQkFDRSxRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ2hCLEtBQUssS0FBSyxDQUFDLEtBQUs7d0JBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDbEMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJO3dCQUNmLE1BQUs7b0JBQ1AsS0FBSyxLQUFLLENBQUMsRUFBRTt3QkFDWCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFLO3dCQUN0QixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUk7d0JBQ2YsTUFBSztvQkFDUCxLQUFLLEtBQUssQ0FBQyxhQUFhLENBQUM7b0JBQ3pCLEtBQUssS0FBSyxDQUFDLFdBQVc7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsTUFBSztvQkFDUCxLQUFLLEtBQUssQ0FBQyxTQUFTO3dCQUNsQixHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxLQUFLO3dCQUNoQyxNQUFLO29CQUNQLEtBQUssS0FBSyxDQUFDLE9BQU87d0JBQ2hCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSTt3QkFDZixPQUFPLEdBQUc7b0JBQ1o7d0JBQ0UsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBb0M7d0JBQ3RELE1BQUs7aUJBQ1I7Z0JBQ0QsT0FBTyxHQUFHO1NBQ2I7SUFDSCxDQUFDLEVBQ0QsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQ2hEO0lBQ0QsT0FBTyxDQUFDLENBQUMsT0FBTztBQUNsQixDQUFDO0FBRU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FDcEMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQVk7QUFFdEMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFvQixFQUFFLEVBQUU7SUFDcEQsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzNELEVBQUUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVc7SUFDcEMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUNsQywyQkFBMkI7SUFDM0IsOEVBQThFO0lBQzlFLE9BQU8sRUFBRTtBQUNYLENBQUM7QUFFRCxpRUFBZSw0Q0FBTyxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUh4RCxNQUFNLEtBQUssR0FBRyxDQUFDLENBQVcsRUFBRSxHQUFHLEtBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQVksRUFBRSxFQUFFLENBQ3pFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFN0IsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFXLEVBQUUsR0FBRyxDQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBTSxFQUFPLEVBQUUsQ0FDeEUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O1VDSnZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BLGlFQUFpRTtBQUN0QjtBQUNRO0FBRW5ELGlFQUFXLEVBQUU7QUFFYix5REFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTlELE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ3RCLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRSxNQUFNLEVBQUU7QUFDdkQsQ0FBQztBQUVELDBCQUEwQjtBQUMxQixTQUFTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2F0RW50cnkge1xuICAnTkcgQW55JScgPSAnemRud3A0eGQnLFxuICAnTkcrIEFueSUnID0gJ3hrOTAxZ2drJyxcbiAgJ05HIEFsbCBCcnVzaGVzJyA9ICdxMjVvd3FnaycsXG4gICdORysgQWxsIEJydXNoZXMxJyA9ICd6MjdneTZvMicsXG4gICdUb3AgRG9nJyA9ICdta2VvenF4ZCcsXG4gICdBbGwgTWFqb3IgQm9zc2VzJyA9ICc5ZDgzMTk2MicsXG59XG5cbmNvbnN0IERFRkFVTFRfRU5UUlk6IENhdEVudHJ5ID0gQ2F0RW50cnlbJ05HKyBBbnklJ11cblxudHlwZSBPbkNoYW5nZSA9ICh2YWx1ZTogQ2F0RW50cnkpID0+IHZvaWRcblxuZXhwb3J0IGludGVyZmFjZSBJQ2F0U2VsZWN0b3Ige1xuICBlbDogSFRNTFNlbGVjdEVsZW1lbnRcbiAgY3VycmVudDogQ2F0RW50cnlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHBhcmVudDogSFRNTEVsZW1lbnQsIG9uQ2hhbmdlOiBPbkNoYW5nZSk6IElDYXRTZWxlY3RvciA9PiB7XG4gIGNvbnN0IGVsID0gcGFyZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKVxuXG4gIE9iamVjdC5lbnRyaWVzKENhdEVudHJ5KS5mb3JFYWNoKChlbnRyeTogW3N0cmluZywgQ2F0RW50cnldKSA9PiB7XG4gICAgY29uc3Qgb3B0OiBIVE1MT3B0aW9uRWxlbWVudCA9IGVsLmFwcGVuZENoaWxkKFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXG4gICAgKVxuICAgIGlmIChlbnRyeVsxXSA9PT0gREVGQVVMVF9FTlRSWSkgb3B0LnNlbGVjdGVkID0gdHJ1ZVxuICAgIG9wdC50ZXh0Q29udGVudCA9IGVudHJ5WzBdXG4gICAgb3B0LnZhbHVlID0gZW50cnlbMV1cbiAgfSlcblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgb25DaGFuZ2UoZWwudmFsdWUgYXMgQ2F0RW50cnkpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBlbCxcbiAgICBjdXJyZW50OiBlbC52YWx1ZSBhcyBDYXRFbnRyeSxcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBJRGlzcGxheSB7XG4gIHRpbWVEaXNwbGF5OiBIVE1MRGl2RWxlbWVudCB8IG51bGxcbiAgdGltZTogbnVtYmVyXG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCAocGFyZW50OiBIVE1MRWxlbWVudCk6IElEaXNwbGF5ID0+IHtcbiAgY29uc3QgdGltZURpc3BsYXkgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gIHRpbWVEaXNwbGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGlzcGxheScpXG5cbiAgcmV0dXJuIHtcbiAgICB0aW1lRGlzcGxheSxcbiAgICBzZXQgdGltZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgIGlmICghdGhpcy50aW1lRGlzcGxheSkge1xuICAgICAgICB0aHJvdyBFcnJvclxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aHJlc2ggPSB0aW1lICogMS4xXG4gICAgICBjb25zdCBbaHJUZW1wLCByZXN0VGVtcF0gPSBbfn4odGhyZXNoIC8gMzYwMCksIHRocmVzaCAlIDM2MDBdXG4gICAgICBjb25zdCBbbWluVGVtcCwgc2VjVGVtcF0gPSBbfn4ocmVzdFRlbXAgLyA2MCksIE1hdGguY2VpbChyZXN0VGVtcCAlIDYwKV1cblxuICAgICAgdGhpcy50aW1lRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rpc3BsYXknKVxuICAgICAgdGhpcy50aW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2hyVGVtcH1IICR7bWluVGVtcH0gTSAke3NlY1RlbXAudG9GaXhlZChcbiAgICAgICAgMSxcbiAgICAgICl9IFNgXG4gICAgfSxcblxuICAgIHNldCBtZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWF0ZXJpYWwtaWNvbnMnKVxuICAgICAgdGhpcy50aW1lRGlzcGxheS50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgQ2F0U2VsZWN0b3IsIHsgQ2F0RW50cnksIElDYXRTZWxlY3RvciB9IGZyb20gJy4vQ2F0U2VsZWN0b3InXG5pbXBvcnQgRGlzcGxheSwgeyBJRGlzcGxheSB9IGZyb20gJy4vRGlzcGxheSdcblxuaW50ZXJmYWNlIFJ1blJlc3BvbnNlIHtcbiAgZGF0YToge1xuICAgIHJ1bnM6IHtcbiAgICAgIHJ1bjoge1xuICAgICAgICB0aW1lczoge1xuICAgICAgICAgIGluZ2FtZV90OiBudW1iZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1bXVxuICB9XG59XG5cbmNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxuICBfdGl0bGU6IEhUTUxTcGFuRWxlbWVudFxuICBfZGlzcGxheTogSURpc3BsYXlcbiAgX2J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnRcbiAgX2NhdFNlbGVjdG9yOiBJQ2F0U2VsZWN0b3JcbiAgX3NlbGVjdGVkQ2F0OiBDYXRFbnRyeVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG5cbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSlcbiAgICB0aGlzLl9kaXNwbGF5ID0gRGlzcGxheSh0aGlzLl9jb250YWluZXIpXG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxuICAgIHRoaXMuX2NhdFNlbGVjdG9yID0gQ2F0U2VsZWN0b3IodGhpcy5fY29udGFpbmVyLCAodmFsdWU6IENhdEVudHJ5KSA9PiB7XG4gICAgICB0aGlzLl9zZWxlY3RlZENhdCAhPT0gdmFsdWUgJiYgdGhpcy5yZWZyZXNoKHZhbHVlKVxuICAgICAgdGhpcy5fc2VsZWN0ZWRDYXQgPSB2YWx1ZVxuICAgIH0pXG5cbiAgICB0aGlzLl9jb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcidcbiAgICB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9XG4gICAgICAnWW91IGhhdmUgdG8gc2hvdyB2aWRlbyBwcm9vZiBpZiB5b3VyIHJ1biBpcyBxdWlja2VyIHRoYW4gb3IgZXhhY3RseSBhdCdcbiAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSAnUmVmcmVzaCdcbiAgICB0aGlzLl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlZnJlc2goKSlcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIH1cbiAgICBgXG5cbiAgICBzaGFkb3cuYXBwZW5kKHN0eWxlLCB0aGlzLl9jb250YWluZXIpXG4gIH1cblxuICByZWZyZXNoID0gYXN5bmMgKHZhbHVlOiBDYXRFbnRyeSA9IHRoaXMuX2NhdFNlbGVjdG9yLmN1cnJlbnQpID0+IHtcbiAgICB0aGlzLl9kaXNwbGF5Lm1lc3NhZ2UgPSAnR2V0dGluZyB0aW1lcy4uLidcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmdldFJ1bnNGb3JDYXQodmFsdWUpXG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ0ZhaWxlZCEgUGxlYXNlIFJldHJ5LidcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLl9kaXNwbGF5LnRpbWUgPSAoYXdhaXQgcmVzLmpzb24oKSkuZGF0YS5ydW5zWzBdLnJ1bi50aW1lcy5pbmdhbWVfdFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgZSB9KVxuICAgIH1cbiAgfVxuXG4gIGdldFJ1bnNGb3JDYXQgPSBhc3luYyAoY2F0OiBDYXRFbnRyeSkgPT5cbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL3d3dy5zcGVlZHJ1bi5jb20vYXBpL3YxL2xlYWRlcmJvYXJkcy93Nmo3NTQ2ai9jYXRlZ29yeS8ke2NhdH0/dmFyLTY4azRkeXpsPTRxeTNyNTdsJnRvcD0xYCxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1jb21wb25lbnQnLCBNeUNvbXBvbmVudClcbn1cbiIsImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICcuL2ZwJ1xuXG5jb25zdCBzcGxpdEVtbWV0ID0gKGVtbWV0OiBzdHJpbmcpID0+XG4gIGVtbWV0LnNwbGl0KCcnKS5yZWR1Y2UoKGFjYzogc3RyaW5nW10sIGw6IHN0cmluZykgPT4ge1xuICAgIGlmICghYWNjLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2xdKVxuICAgIH1cbiAgICBpZiAoL1xcVy8udGVzdChsKSB8fCAoL1xcVy8udGVzdChhY2NbYWNjLmxlbmd0aCAtIDFdKSAmJiAhL1xcVy8udGVzdChsKSkpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtsXSlcbiAgICB9XG4gICAgYWNjW2FjYy5sZW5ndGggLSAxXSA9IGFjY1thY2MubGVuZ3RoIC0gMV0uY29uY2F0KGwpXG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcblxuaW50ZXJmYWNlIE1pbmVFbGVtZW50IHtcbiAgY2hpbGRyZW46IEhUTUxFbGVtZW50W11cbiAgY2xhc3NMaXN0OiBzdHJpbmdbXSB8IG51bGxcbiAgaWQ6IHN0cmluZyB8IG51bGxcbiAgdGFnOiBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBcbiAgdGV4dENvbnRlbnQ6IHN0cmluZyB8IG51bGxcbn1cblxuZW51bSBGbGFncyB7XG4gIENsYXNzLFxuICBJZCxcbiAgQ2hpbGRyZW5TdGFydCxcbiAgQ2hpbGRyZW5FbmQsXG4gIENvdW50LFxuICBTaWJsaW5nLFxuICBUZXh0U3RhcnQsXG4gIFRleHRFbmQsXG59XG5cbmNvbnN0IGNyZWF0ZURlZmF1bHRFbGVtZW50ID0gKCk6IE1pbmVFbGVtZW50ID0+ICh7XG4gIGNoaWxkcmVuOiBbXSxcbiAgY2xhc3NMaXN0OiBudWxsLFxuICBpZDogbnVsbCxcbiAgdGFnOiAnZGl2JyxcbiAgdGV4dENvbnRlbnQ6IG51bGwsXG59KVxuXG4vKipcbiAqIEBwYXJhbSB0b2tlbnMgc3RyaW5nW11cbiAqIEByZXR1cm4gTWluZUVsZW1lbnRbXVxuICovXG5leHBvcnQgY29uc3QgYnVpbGRFbGVtZW50cyA9ICh0b2tlbnM6IHN0cmluZ1tdKSA9PiB7XG4gIC8vIHN3aXRjaCAodG9rZW4pIHtcbiAgLy8gICBjYXNlICcqJzpcbiAgLy8gICAgIGFjYy5mbGFnID0gRmxhZ3MuQ291bnRcbiAgLy8gICAgIHJldHVybiBhY2NcbiAgLy8gICBjYXNlICcrJzpcbiAgLy8gICAgIGFjYy5mbGFnID0gRmxhZ3MuU2libGluZ1xuICAvLyAgICAgcmV0dXJuIGFjY1xuICAvLyB9XG4gIGNvbnN0IG1hcmtlcnMgPSBbXVxuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4sIGluZGV4KSA9PiB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGJ1aWxkRWxlbWVudCA9ICh0b2tlbnM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IHIgPSB0b2tlbnMucmVkdWNlKFxuICAgIChhY2M6IHsgZWxlbWVudDogTWluZUVsZW1lbnQ7IGZsYWc6IEZsYWdzIHwgbnVsbCB9LCB0b2tlbiwgaSkgPT4ge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLkNsYXNzXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLklkXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICcoJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLkNoaWxkcmVuU3RhcnRcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuQ2hpbGRyZW5FbmRcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgIGFjYy5mbGFnID0gRmxhZ3MuVGV4dFN0YXJ0XG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLlRleHRFbmRcbiAgICAgICAgICByZXR1cm4gYWNjXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzd2l0Y2ggKGFjYy5mbGFnKSB7XG4gICAgICAgICAgICBjYXNlIEZsYWdzLkNsYXNzOlxuICAgICAgICAgICAgICBhY2MuZWxlbWVudC5jbGFzc0xpc3Q/LnB1c2godG9rZW4pXG4gICAgICAgICAgICAgIGFjYy5mbGFnID0gbnVsbFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBGbGFncy5JZDpcbiAgICAgICAgICAgICAgYWNjLmVsZW1lbnQuaWQgPSB0b2tlblxuICAgICAgICAgICAgICBhY2MuZmxhZyA9IG51bGxcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuQ2hpbGRyZW5TdGFydDpcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuQ2hpbGRyZW5FbmQ6XG4gICAgICAgICAgICAgIC8vIFRPRE86IEltcGxlbWVudFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBGbGFncy5UZXh0U3RhcnQ6XG4gICAgICAgICAgICAgIGFjYy5lbGVtZW50LnRleHRDb250ZW50ICs9IHRva2VuXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEZsYWdzLlRleHRFbmQ6XG4gICAgICAgICAgICAgIGFjYy5mbGFnID0gbnVsbFxuICAgICAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBhY2MuZWxlbWVudC50YWcgPSB0b2tlbiBhcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfVxuICAgIH0sXG4gICAgeyBlbGVtZW50OiBjcmVhdGVEZWZhdWx0RWxlbWVudCgpLCBmbGFnOiBudWxsIH0sXG4gIClcbiAgcmV0dXJuIHIuZWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgJCA9IChzZWxlY3Rvcjogc3RyaW5nKSA9PlxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBFbGVtZW50XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKGVsZW1lbnQ6IE1pbmVFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LnRhZylcbiAgZWxlbWVudC5jbGFzc0xpc3QgJiYgZWwuY2xhc3NMaXN0LmFkZCguLi5lbGVtZW50LmNsYXNzTGlzdClcbiAgZWwudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50XG4gIGVsZW1lbnQuaWQgJiYgKGVsLmlkID0gZWxlbWVudC5pZClcbiAgLy8gb3B0aW9ucy5ldmVudExpc3RlbmVyICYmXG4gIC8vICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihvcHRpb25zPy5ldmVudExpc3RlbmVyWzBdLCBvcHRpb25zPy5ldmVudExpc3RlbmVyWzFdKVxuICByZXR1cm4gZWxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShzcGxpdEVtbWV0LCBidWlsZEVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQpXG4iLCJleHBvcnQgY29uc3QgY3VycnkgPSAoZjogRnVuY3Rpb24sIC4uLm91dGVyOiBhbnlbXSkgPT4gKC4uLmlubmVyOiBhbnlbXSkgPT5cbiAgZi5hcHBseShudWxsLCBvdXRlci5jb25jYXQoaW5uZXIpKVxuXG5leHBvcnQgY29uc3QgY29tcG9zZSA9IChmOiBGdW5jdGlvbiwgLi4uZzogRnVuY3Rpb25bXSkgPT4gKHg6IGFueSk6IGFueSA9PlxuICAhZy5sZW5ndGggPyBmKHgpIDogY29tcG9zZShnWzBdLCAuLi5nLnNsaWNlKDEpKShmKHgpKVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gJy4vcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzJ1xuaW1wb3J0IHsgJCB9IGZyb20gJy4vdXRpbHMvYnVpbGRDb21wb25lbnRzJ1xuaW1wb3J0IE15Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9NeUNvbXBvbmVudC8nXG5cbk15Q29tcG9uZW50KClcblxuJCgnI3Jvb3QnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdteS1jb21wb25lbnQnKSlcblxuY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYWRlci1jb250YWluZXInKT8ucmVtb3ZlKClcbn1cblxuLy8gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKClcbi8vIG1haW4oKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==