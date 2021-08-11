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
/* harmony import */ var _CatSelectorContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatSelectorContainer */ "./src/client/components/MyComponent/CatSelectorContainer.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Display */ "./src/client/components/MyComponent/Display.ts");



const STYLE = `
#container {
    display: flex;
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
class MyComponent extends HTMLElement {
    constructor() {
        super();
        this._selectedCat = _CatSelector__WEBPACK_IMPORTED_MODULE_0__.CatEntry["NG+ Any%"];
        this.refresh = async (value = this._selectedCat) => {
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
        this._catSelectorContainer = (0,_CatSelectorContainer__WEBPACK_IMPORTED_MODULE_1__.default)(this._container, (value) => {
            this._selectedCat !== value && this.refresh(value);
            this._selectedCat = value;
        });
        this._display = (0,_Display__WEBPACK_IMPORTED_MODULE_2__.default)(this._container);
        this._button = this._container.appendChild(document.createElement('button'));
        this._container.id = 'container';
        this._button.textContent = 'Get/Refresh';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTXlDb21wb25lbnQvQ2F0U2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL015Q29tcG9uZW50L0NhdFNlbGVjdG9yQ29udGFpbmVyLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9NeUNvbXBvbmVudC9EaXNwbGF5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9NeUNvbXBvbmVudC9pbmRleC50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L3V0aWxzL2J1aWxkQ29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY2xpZW50L3V0aWxzL2ZwLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jbGllbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxRQU9YO0FBUEQsV0FBWSxRQUFRO0lBQ2xCLGdDQUFzQjtJQUN0QixpQ0FBdUI7SUFDdkIsdUNBQTZCO0lBQzdCLHlDQUErQjtJQUMvQixnQ0FBc0I7SUFDdEIseUNBQStCO0FBQ2pDLENBQUMsRUFQVyxRQUFRLEtBQVIsUUFB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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkEsaUVBQWlFO0FBQ3RCO0FBQ1E7QUFFbkQsaUVBQVcsRUFBRTtBQUViLHlEQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDN0QseURBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRTtJQUNqRCx5REFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ3RCLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRSxNQUFNLEVBQUU7QUFDdkQsQ0FBQztBQUVELDBCQUEwQjtBQUMxQixTQUFTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2F0RW50cnkge1xuICAnTkcgQW55JScgPSAnemRud3A0eGQnLFxuICAnTkcrIEFueSUnID0gJ3hrOTAxZ2drJyxcbiAgJ05HIEFsbCBCcnVzaGVzJyA9ICdxMjVvd3FnaycsXG4gICdORysgQWxsIEJydXNoZXMxJyA9ICd6MjdneTZvMicsXG4gICdUb3AgRG9nJyA9ICdta2VvenF4ZCcsXG4gICdBbGwgTWFqb3IgQm9zc2VzJyA9ICc5ZDgzMTk2MicsXG59XG5cbmNvbnN0IERFRkFVTFRfRU5UUlk6IENhdEVudHJ5ID0gQ2F0RW50cnlbJ05HKyBBbnklJ11cblxuZXhwb3J0IHR5cGUgT25DaGFuZ2UgPSAodmFsdWU6IENhdEVudHJ5KSA9PiB2b2lkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhdFNlbGVjdG9yIHtcbiAgZWw6IEhUTUxTZWxlY3RFbGVtZW50XG4gIGN1cnJlbnQ6IENhdEVudHJ5XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJlbnQ6IEhUTUxFbGVtZW50LCBvbkNoYW5nZTogT25DaGFuZ2UpOiBJQ2F0U2VsZWN0b3IgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gIGNvbnRhaW5lci5pZCA9ICdjYXQtc2VsZWN0J1xuICBjb25zdCBlbCA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSlcblxuICBPYmplY3QuZW50cmllcyhDYXRFbnRyeSkuZm9yRWFjaCgoZW50cnk6IFtzdHJpbmcsIENhdEVudHJ5XSkgPT4ge1xuICAgIGNvbnN0IG9wdDogSFRNTE9wdGlvbkVsZW1lbnQgPSBlbC5hcHBlbmRDaGlsZChcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpLFxuICAgIClcbiAgICBpZiAoZW50cnlbMV0gPT09IERFRkFVTFRfRU5UUlkpIG9wdC5zZWxlY3RlZCA9IHRydWVcbiAgICBvcHQuY2xhc3NOYW1lID0gJ2NhdC1vcHRpb24nXG4gICAgb3B0LnRleHRDb250ZW50ID0gZW50cnlbMF1cbiAgICBvcHQudmFsdWUgPSBlbnRyeVsxXVxuICB9KVxuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBvbkNoYW5nZShlbC52YWx1ZSBhcyBDYXRFbnRyeSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGVsLFxuICAgIGN1cnJlbnQ6IGVsLnZhbHVlIGFzIENhdEVudHJ5LFxuICB9XG59XG4iLCJpbXBvcnQgQ2F0U2VsZWN0b3IsIHsgT25DaGFuZ2UgfSBmcm9tICcuL0NhdFNlbGVjdG9yJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYXRTZWxlY3RvckNvbnRhaW5lciB7XG4gIGVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBvbkNoYW5nZTogT25DaGFuZ2UsXG4pOiBJQ2F0U2VsZWN0b3JDb250YWluZXIgPT4ge1xuICBjb25zdCBlbCA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgZWwuaWQgPSAnY2F0LXNlbGVjdG9yLWNvbnRhaW5lcidcbiAgY29uc3QgdGl0bGUxID0gZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxuICBDYXRTZWxlY3RvcihlbCwgb25DaGFuZ2UpXG4gIGNvbnN0IHRpdGxlMiA9IGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSlcbiAgdGl0bGUxLnRleHRDb250ZW50ID0gJ1lvdSBoYXZlIHRvIHNob3cgdmlkZW8gcHJvb2YgaWYgeW91cidcbiAgdGl0bGUyLnRleHRDb250ZW50ID0gJ3J1biBpcyBxdWlja2VyIHRoYW4gb3IgZXhhY3RseSBhdCdcblxuICByZXR1cm4ge1xuICAgIGVsLFxuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIElEaXNwbGF5IHtcbiAgdGltZURpc3BsYXk6IEhUTUxEaXZFbGVtZW50IHwgbnVsbFxuICB0aW1lOiBudW1iZXJcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogSURpc3BsYXkgPT4ge1xuICBjb25zdCB0aW1lRGlzcGxheSA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgdGltZURpc3BsYXkuaWQgPSAnZGlzcGxheSdcbiAgdGltZURpc3BsYXkudGV4dENvbnRlbnQgPSAnLSdcblxuICByZXR1cm4ge1xuICAgIHRpbWVEaXNwbGF5LFxuICAgIHNldCB0aW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRocmVzaCA9IHRpbWUgKiAxLjFcbiAgICAgIGNvbnN0IFtoclRlbXAsIHJlc3RUZW1wXSA9IFt+fih0aHJlc2ggLyAzNjAwKSwgdGhyZXNoICUgMzYwMF1cbiAgICAgIGNvbnN0IFttaW5UZW1wLCBzZWNUZW1wXSA9IFt+fihyZXN0VGVtcCAvIDYwKSwgTWF0aC5jZWlsKHJlc3RUZW1wICUgNjApXVxuXG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7aHJUZW1wfUggJHttaW5UZW1wfSBNICR7c2VjVGVtcC50b0ZpeGVkKFxuICAgICAgICAxLFxuICAgICAgKX0gU2BcbiAgICB9LFxuXG4gICAgc2V0IG1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICBpZiAoIXRoaXMudGltZURpc3BsYXkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3JcbiAgICAgIH1cbiAgICAgIHRoaXMudGltZURpc3BsYXkudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgfSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2F0RW50cnkgfSBmcm9tICcuL0NhdFNlbGVjdG9yJ1xuaW1wb3J0IENhdFNlbGVjdG9yQ29udGFpbmVyLCB7XG4gIElDYXRTZWxlY3RvckNvbnRhaW5lcixcbn0gZnJvbSAnLi9DYXRTZWxlY3RvckNvbnRhaW5lcidcbmltcG9ydCBEaXNwbGF5LCB7IElEaXNwbGF5IH0gZnJvbSAnLi9EaXNwbGF5J1xuXG5pbnRlcmZhY2UgUnVuUmVzcG9uc2Uge1xuICBkYXRhOiB7XG4gICAgcnVuczoge1xuICAgICAgcnVuOiB7XG4gICAgICAgIHRpbWVzOiB7XG4gICAgICAgICAgaW5nYW1lX3Q6IG51bWJlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVtdXG4gIH1cbn1cblxuY29uc3QgU1RZTEUgPSBgXG4jY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQ4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgOTclKTtcbn1cblxuYnV0dG9uLCBzZWxlY3Qge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImFzdHJhbHNPa2FtaVwiLCBzZXJpZjtcbn1cblxuI2NhdC1zZWxlY3Rvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbiNjYXQtc2VsZWN0IHtcbiAgcGFkZGluZzogMHJlbSAuNXJlbTtcbn1cblxuLmNhdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogXCJhc3RyYWxzT2thbWlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2Rpc3BsYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cblxuI3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgI2NhdC1zZWxlY3Rvci1jb250YWluZXIge1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgfVxuXG4gICNkaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICB9XG59XG5gXG5cbmNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxuICBfY2F0U2VsZWN0b3JDb250YWluZXI6IElDYXRTZWxlY3RvckNvbnRhaW5lclxuICBfZGlzcGxheTogSURpc3BsYXlcbiAgX2J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnRcbiAgX3NlbGVjdGVkQ2F0ID0gQ2F0RW50cnlbJ05HKyBBbnklJ11cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KVxuXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLl9jYXRTZWxlY3RvckNvbnRhaW5lciA9IENhdFNlbGVjdG9yQ29udGFpbmVyKFxuICAgICAgdGhpcy5fY29udGFpbmVyLFxuICAgICAgKHZhbHVlOiBDYXRFbnRyeSkgPT4ge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZENhdCAhPT0gdmFsdWUgJiYgdGhpcy5yZWZyZXNoKHZhbHVlKVxuICAgICAgICB0aGlzLl9zZWxlY3RlZENhdCA9IHZhbHVlXG4gICAgICB9LFxuICAgIClcbiAgICB0aGlzLl9kaXNwbGF5ID0gRGlzcGxheSh0aGlzLl9jb250YWluZXIpXG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxuXG4gICAgdGhpcy5fY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcidcbiAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSAnR2V0L1JlZnJlc2gnXG4gICAgdGhpcy5fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZWZyZXNoKCkpXG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IFNUWUxFXG5cbiAgICBzaGFkb3cuYXBwZW5kKHN0eWxlLCB0aGlzLl9jb250YWluZXIpXG4gIH1cblxuICByZWZyZXNoID0gYXN5bmMgKHZhbHVlOiBDYXRFbnRyeSA9IHRoaXMuX3NlbGVjdGVkQ2F0KSA9PiB7XG4gICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ0dldHRpbmcgdGltZXMuLi4nXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5nZXRSdW5zRm9yQ2F0KHZhbHVlKVxuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXkubWVzc2FnZSA9ICdGYWlsZWQhIFBsZWFzZSBSZXRyeS4nXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5fZGlzcGxheS50aW1lID0gKGF3YWl0IHJlcy5qc29uKCkpLmRhdGEucnVuc1swXS5ydW4udGltZXMuaW5nYW1lX3RcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyh7IGUgfSlcbiAgICB9XG4gIH1cblxuICBnZXRSdW5zRm9yQ2F0ID0gYXN5bmMgKGNhdDogQ2F0RW50cnkpID0+XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly93d3cuc3BlZWRydW4uY29tL2FwaS92MS9sZWFkZXJib2FyZHMvdzZqNzU0NmovY2F0ZWdvcnkvJHtjYXR9P3Zhci02OGs0ZHl6bD00cXkzcjU3bCZ0b3A9MWAsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktY29tcG9uZW50JywgTXlDb21wb25lbnQpXG59XG4iLCJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnLi9mcCdcblxuY29uc3Qgc3BsaXRFbW1ldCA9IChlbW1ldDogc3RyaW5nKSA9PlxuICBlbW1ldC5zcGxpdCgnJykucmVkdWNlKChhY2M6IHN0cmluZ1tdLCBsOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIWFjYy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtsXSlcbiAgICB9XG4gICAgaWYgKC9cXFcvLnRlc3QobCkgfHwgKC9cXFcvLnRlc3QoYWNjW2FjYy5sZW5ndGggLSAxXSkgJiYgIS9cXFcvLnRlc3QobCkpKSB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChbbF0pXG4gICAgfVxuICAgIGFjY1thY2MubGVuZ3RoIC0gMV0gPSBhY2NbYWNjLmxlbmd0aCAtIDFdLmNvbmNhdChsKVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG5cbmludGVyZmFjZSBNaW5lRWxlbWVudCB7XG4gIGNoaWxkcmVuOiBIVE1MRWxlbWVudFtdXG4gIGNsYXNzTGlzdDogc3RyaW5nW10gfCBudWxsXG4gIGlkOiBzdHJpbmcgfCBudWxsXG4gIHRhZzoga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXG4gIHRleHRDb250ZW50OiBzdHJpbmcgfCBudWxsXG59XG5cbmVudW0gRmxhZ3Mge1xuICBDbGFzcyxcbiAgSWQsXG4gIENoaWxkcmVuU3RhcnQsXG4gIENoaWxkcmVuRW5kLFxuICBDb3VudCxcbiAgU2libGluZyxcbiAgVGV4dFN0YXJ0LFxuICBUZXh0RW5kLFxufVxuXG5jb25zdCBjcmVhdGVEZWZhdWx0RWxlbWVudCA9ICgpOiBNaW5lRWxlbWVudCA9PiAoe1xuICBjaGlsZHJlbjogW10sXG4gIGNsYXNzTGlzdDogbnVsbCxcbiAgaWQ6IG51bGwsXG4gIHRhZzogJ2RpdicsXG4gIHRleHRDb250ZW50OiBudWxsLFxufSlcblxuLyoqXG4gKiBAcGFyYW0gdG9rZW5zIHN0cmluZ1tdXG4gKiBAcmV0dXJuIE1pbmVFbGVtZW50W11cbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkRWxlbWVudHMgPSAodG9rZW5zOiBzdHJpbmdbXSkgPT4ge1xuICAvLyBzd2l0Y2ggKHRva2VuKSB7XG4gIC8vICAgY2FzZSAnKic6XG4gIC8vICAgICBhY2MuZmxhZyA9IEZsYWdzLkNvdW50XG4gIC8vICAgICByZXR1cm4gYWNjXG4gIC8vICAgY2FzZSAnKyc6XG4gIC8vICAgICBhY2MuZmxhZyA9IEZsYWdzLlNpYmxpbmdcbiAgLy8gICAgIHJldHVybiBhY2NcbiAgLy8gfVxuICBjb25zdCBtYXJrZXJzID0gW11cbiAgdG9rZW5zLmZvckVhY2goKHRva2VuLCBpbmRleCkgPT4ge30pXG59XG5cbmV4cG9ydCBjb25zdCBidWlsZEVsZW1lbnQgPSAodG9rZW5zOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCByID0gdG9rZW5zLnJlZHVjZShcbiAgICAoYWNjOiB7IGVsZW1lbnQ6IE1pbmVFbGVtZW50OyBmbGFnOiBGbGFncyB8IG51bGwgfSwgdG9rZW4sIGkpID0+IHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5DbGFzc1xuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5JZFxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5DaGlsZHJlblN0YXJ0XG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICcpJzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLkNoaWxkcmVuRW5kXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICBjYXNlICd7JzpcbiAgICAgICAgICBhY2MuZmxhZyA9IEZsYWdzLlRleHRTdGFydFxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgYWNjLmZsYWcgPSBGbGFncy5UZXh0RW5kXG4gICAgICAgICAgcmV0dXJuIGFjY1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3dpdGNoIChhY2MuZmxhZykge1xuICAgICAgICAgICAgY2FzZSBGbGFncy5DbGFzczpcbiAgICAgICAgICAgICAgYWNjLmVsZW1lbnQuY2xhc3NMaXN0Py5wdXNoKHRva2VuKVxuICAgICAgICAgICAgICBhY2MuZmxhZyA9IG51bGxcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuSWQ6XG4gICAgICAgICAgICAgIGFjYy5lbGVtZW50LmlkID0gdG9rZW5cbiAgICAgICAgICAgICAgYWNjLmZsYWcgPSBudWxsXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEZsYWdzLkNoaWxkcmVuU3RhcnQ6XG4gICAgICAgICAgICBjYXNlIEZsYWdzLkNoaWxkcmVuRW5kOlxuICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnRcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgRmxhZ3MuVGV4dFN0YXJ0OlxuICAgICAgICAgICAgICBhY2MuZWxlbWVudC50ZXh0Q29udGVudCArPSB0b2tlblxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBGbGFncy5UZXh0RW5kOlxuICAgICAgICAgICAgICBhY2MuZmxhZyA9IG51bGxcbiAgICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYWNjLmVsZW1lbnQudGFnID0gdG9rZW4gYXMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgIH1cbiAgICB9LFxuICAgIHsgZWxlbWVudDogY3JlYXRlRGVmYXVsdEVsZW1lbnQoKSwgZmxhZzogbnVsbCB9LFxuICApXG4gIHJldHVybiByLmVsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0ICQgPSAoc2VsZWN0b3I6IHN0cmluZykgPT5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgRWxlbWVudFxuXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50OiBNaW5lRWxlbWVudCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC50YWcpXG4gIGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsLmNsYXNzTGlzdC5hZGQoLi4uZWxlbWVudC5jbGFzc0xpc3QpXG4gIGVsLnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudFxuICBlbGVtZW50LmlkICYmIChlbC5pZCA9IGVsZW1lbnQuaWQpXG4gIC8vIG9wdGlvbnMuZXZlbnRMaXN0ZW5lciAmJlxuICAvLyAgIGVsLmFkZEV2ZW50TGlzdGVuZXIob3B0aW9ucz8uZXZlbnRMaXN0ZW5lclswXSwgb3B0aW9ucz8uZXZlbnRMaXN0ZW5lclsxXSlcbiAgcmV0dXJuIGVsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uoc3BsaXRFbW1ldCwgYnVpbGRFbGVtZW50LCBjcmVhdGVFbGVtZW50KVxuIiwiZXhwb3J0IGNvbnN0IGN1cnJ5ID0gKGY6IEZ1bmN0aW9uLCAuLi5vdXRlcjogYW55W10pID0+ICguLi5pbm5lcjogYW55W10pID0+XG4gIGYuYXBwbHkobnVsbCwgb3V0ZXIuY29uY2F0KGlubmVyKSlcblxuZXhwb3J0IGNvbnN0IGNvbXBvc2UgPSAoZjogRnVuY3Rpb24sIC4uLmc6IEZ1bmN0aW9uW10pID0+ICh4OiBhbnkpOiBhbnkgPT5cbiAgIWcubGVuZ3RoID8gZih4KSA6IGNvbXBvc2UoZ1swXSwgLi4uZy5zbGljZSgxKSkoZih4KSlcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHJlZ2lzdGVyU2VydmljZVdvcmtlciBmcm9tICcuL3JlZ2lzdGVyU2VydmljZVdvcmtlci5qcydcbmltcG9ydCB7ICQgfSBmcm9tICcuL3V0aWxzL2J1aWxkQ29tcG9uZW50cydcbmltcG9ydCBNeUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvTXlDb21wb25lbnQvJ1xuXG5NeUNvbXBvbmVudCgpXG5cbiQoJ21haW4nKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdteS1jb21wb25lbnQnKSlcbiQoJyNzdG9wLWFuaW1hdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XG4gICQoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCduby1hbmltJylcbn0pXG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkZXItY29udGFpbmVyJyk/LnJlbW92ZSgpXG59XG5cbi8vIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpXG4vLyBtYWluKClcbiJdLCJzb3VyY2VSb290IjoiIn0=