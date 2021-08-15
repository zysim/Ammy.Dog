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
    border: solid 18px hsl(0, 0%, 12%);
    flex-flow: column nowrap;
    align-items: center;
    padding: 24px;
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

@media (min-width: 800px) {
  #container {
    border: solid 24px hsl(0, 0%, 12%);
    padding: 48px;
}

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

/***/ "./src/utils/jQuery.ts":
/*!*****************************!*\
  !*** ./src/utils/jQuery.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $)
/* harmony export */ });
const $ = document.querySelector.bind(document);


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
(0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_0__.$)('#stop-animation').addEventListener('click', _ => {
    (0,_utils_jQuery__WEBPACK_IMPORTED_MODULE_0__.$)('body').classList.toggle('no-anim');
});
// registerServiceWorker()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50L0NhdFNlbGVjdG9yLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvQ2F0U2VsZWN0b3JDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9EaXNwbGF5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2RlYm91bmNlLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy91dGlscy9qUXVlcnkudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksUUFPWDtBQVBELFdBQVksUUFBUTtJQUNsQixnQ0FBc0I7SUFDdEIsaUNBQXVCO0lBQ3ZCLHVDQUE2QjtJQUM3Qix3Q0FBOEI7SUFDOUIsZ0NBQXNCO0lBQ3RCLHlDQUErQjtBQUNqQyxDQUFDLEVBUFcsUUFBUSxLQUFSLFFBQVEsUUFPbkI7QUFFRCxNQUFNLGFBQWEsR0FBYSxRQUFRLENBQUMsVUFBVSxD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bnRlbnQiOlsiZXhwb3J0IGVudW0gQ2F0RW50cnkge1xuICAnTkcgQW55JScgPSAnemRud3A0eGQnLFxuICAnTkcrIEFueSUnID0gJ3hrOTAxZ2drJyxcbiAgJ05HIEFsbCBCcnVzaGVzJyA9ICdxMjVvd3FnaycsXG4gICdORysgQWxsIEJydXNoZXMnID0gJ3oyN2d5Nm8yJyxcbiAgJ1RvcCBEb2cnID0gJ21rZW96cXhkJyxcbiAgJ0FsbCBNYWpvciBCb3NzZXMnID0gJzlkODMxOTYyJyxcbn1cblxuY29uc3QgREVGQVVMVF9FTlRSWTogQ2F0RW50cnkgPSBDYXRFbnRyeVsnTkcrIEFueSUnXVxuXG5leHBvcnQgdHlwZSBPbkNoYW5nZSA9ICh2YWx1ZTogQ2F0RW50cnkpID0+IHZvaWRcblxuZXhwb3J0IGludGVyZmFjZSBJQ2F0U2VsZWN0b3Ige1xuICBlbDogSFRNTFNlbGVjdEVsZW1lbnRcbiAgY3VycmVudDogQ2F0RW50cnlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHBhcmVudDogSFRNTEVsZW1lbnQsIG9uQ2hhbmdlOiBPbkNoYW5nZSk6IElDYXRTZWxlY3RvciA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgY29udGFpbmVyLmlkID0gJ2NhdC1zZWxlY3QnXG4gIGNvbnN0IGVsID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKVxuXG4gIE9iamVjdC5lbnRyaWVzKENhdEVudHJ5KS5mb3JFYWNoKChlbnRyeTogW3N0cmluZywgQ2F0RW50cnldKSA9PiB7XG4gICAgY29uc3Qgb3B0OiBIVE1MT3B0aW9uRWxlbWVudCA9IGVsLmFwcGVuZENoaWxkKFxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXG4gICAgKVxuICAgIGlmIChlbnRyeVsxXSA9PT0gREVGQVVMVF9FTlRSWSkgb3B0LnNlbGVjdGVkID0gdHJ1ZVxuICAgIG9wdC5jbGFzc05hbWUgPSAnY2F0LW9wdGlvbidcbiAgICBvcHQudGV4dENvbnRlbnQgPSBlbnRyeVswXVxuICAgIG9wdC52YWx1ZSA9IGVudHJ5WzFdXG4gIH0pXG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIG9uQ2hhbmdlKGVsLnZhbHVlIGFzIENhdEVudHJ5KVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgZWwsXG4gICAgY3VycmVudDogZWwudmFsdWUgYXMgQ2F0RW50cnksXG4gIH1cbn1cbiIsImltcG9ydCBDYXRTZWxlY3RvciwgeyBPbkNoYW5nZSB9IGZyb20gJy4vQ2F0U2VsZWN0b3InXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhdFNlbGVjdG9yQ29udGFpbmVyIHtcbiAgZWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCAoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIG9uQ2hhbmdlOiBPbkNoYW5nZSxcbik6IElDYXRTZWxlY3RvckNvbnRhaW5lciA9PiB7XG4gIGNvbnN0IGVsID0gcGFyZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICBlbC5pZCA9ICdjYXQtc2VsZWN0b3ItY29udGFpbmVyJ1xuICBjb25zdCB0aXRsZTEgPSBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpXG4gIENhdFNlbGVjdG9yKGVsLCBvbkNoYW5nZSlcbiAgY29uc3QgdGl0bGUyID0gZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxuICB0aXRsZTEudGV4dENvbnRlbnQgPSAnWW91IGhhdmUgdG8gc2hvdyB2aWRlbyBwcm9vZiBpZiB5b3VyJ1xuICB0aXRsZTIudGV4dENvbnRlbnQgPSAncnVuIGlzIHF1aWNrZXIgdGhhbiBvciBleGFjdGx5IGF0J1xuXG4gIHJldHVybiB7XG4gICAgZWwsXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgSURpc3BsYXkge1xuICB0aW1lRGlzcGxheTogSFRNTERpdkVsZW1lbnQgfCBudWxsXG4gIHRpbWU6IG51bWJlclxuICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElUaW1lIHtcbiAgaG91cnM6IG51bWJlclxuICBtaW51dGVzOiBudW1iZXJcbiAgc2Vjb25kczogbnVtYmVyXG59XG5cbmNvbnN0IFRIUkVTSE9MRCA9IDEuMVxuXG5jb25zdCBjYWxjdWxhdGVUaHJlc2hvbGRUaW1lID0gKHdyVGltZUluU2Vjb25kczogbnVtYmVyKSA9PlxuICB3clRpbWVJblNlY29uZHMgKiBUSFJFU0hPTERcblxuY29uc3QgcGFyc2VUaHJlc2hvbGRUaW1lID0gKHM6IG51bWJlcik6IElUaW1lID0+IHtcbiAgY29uc3QgW2hvdXJzLCBtaW5zU2Vjc10gPSBbfn4ocyAvIDM2MDApLCBzICUgMzYwMF1cbiAgY29uc3QgW21pbnV0ZXMsIHNlY29uZHNdID0gW35+KG1pbnNTZWNzIC8gNjApLCBNYXRoLmNlaWwobWluc1NlY3MgJSA2MCldXG4gIHJldHVybiB7XG4gICAgaG91cnMsXG4gICAgbWludXRlcyxcbiAgICBzZWNvbmRzLFxuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlUaHJlc2hvbGRUaW1lID0gKHRpbWVEaXNwbGF5OiBIVE1MRGl2RWxlbWVudCwgdGltZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSA9IHBhcnNlVGhyZXNob2xkVGltZSh0aW1lKVxuICB0aW1lRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2hvdXJzfUggJHttaW51dGVzfU0gJHtzZWNvbmRzfVNgXG59XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogSURpc3BsYXkgPT4ge1xuICBjb25zdCB0aW1lRGlzcGxheSA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgdGltZURpc3BsYXkuaWQgPSAnZGlzcGxheSdcbiAgdGltZURpc3BsYXkudGV4dENvbnRlbnQgPSAnLSdcblxuICByZXR1cm4ge1xuICAgIHRpbWVEaXNwbGF5LFxuICAgIHNldCB0aW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG5cbiAgICAgIGRpc3BsYXlUaHJlc2hvbGRUaW1lKHRoaXMudGltZURpc3BsYXksIGNhbGN1bGF0ZVRocmVzaG9sZFRpbWUodGltZSkpXG4gICAgfSxcblxuICAgIHNldCBtZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgaWYgKCF0aGlzLnRpbWVEaXNwbGF5KSB7XG4gICAgICAgIHRocm93IEVycm9yXG4gICAgICB9XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZSdcbmltcG9ydCB7IENhdEVudHJ5IH0gZnJvbSAnLi9DYXRTZWxlY3RvcidcbmltcG9ydCBDYXRTZWxlY3RvckNvbnRhaW5lciwge1xuICBJQ2F0U2VsZWN0b3JDb250YWluZXIsXG59IGZyb20gJy4vQ2F0U2VsZWN0b3JDb250YWluZXInXG5pbXBvcnQgRGlzcGxheSwgeyBJRGlzcGxheSB9IGZyb20gJy4vRGlzcGxheSdcblxuaW50ZXJmYWNlIFJ1blJlc3BvbnNlIHtcbiAgZGF0YToge1xuICAgIHJ1bnM6IHtcbiAgICAgIHJ1bjoge1xuICAgICAgICB0aW1lczoge1xuICAgICAgICAgIGluZ2FtZV90OiBudW1iZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1bXVxuICB9XG59XG5cbmNvbnN0IFNUWUxFID0gYFxuI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IHNvbGlkIDE4cHggaHNsKDAsIDAlLCAxMiUpO1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgOTclKTtcbn1cblxuYnV0dG9uLCBzZWxlY3Qge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImFzdHJhbHNPa2FtaVwiLCBzZXJpZjtcbn1cblxuI2NhdC1zZWxlY3Rvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbiNjYXQtc2VsZWN0IHtcbiAgcGFkZGluZzogMHJlbSAuNXJlbTtcbn1cblxuLmNhdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogXCJhc3RyYWxzT2thbWlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2Rpc3BsYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cblxuI3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBzb2xpZCAyNHB4IGhzbCgwLCAwJSwgMTIlKTtcbiAgICBwYWRkaW5nOiA0OHB4O1xufVxuXG4gICNjYXQtc2VsZWN0b3ItY29udGFpbmVyIHtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIH1cblxuICAjZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuYFxuXG5jbGFzcyBNYWluQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxuICBfY2F0U2VsZWN0b3JDb250YWluZXI6IElDYXRTZWxlY3RvckNvbnRhaW5lclxuICBfZGlzcGxheTogSURpc3BsYXlcbiAgX2J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnRcbiAgX3NlbGVjdGVkQ2F0ID0gQ2F0RW50cnlbJ05HKyBBbnklJ11cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KVxuXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLl9jYXRTZWxlY3RvckNvbnRhaW5lciA9IENhdFNlbGVjdG9yQ29udGFpbmVyKFxuICAgICAgdGhpcy5fY29udGFpbmVyLFxuICAgICAgKHZhbHVlOiBDYXRFbnRyeSkgPT4ge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZENhdCAhPT0gdmFsdWUgJiYgZGVib3VuY2UoKCkgPT4gdGhpcy5yZWZyZXNoKHZhbHVlKSkoKVxuICAgICAgICB0aGlzLl9zZWxlY3RlZENhdCA9IHZhbHVlXG4gICAgICB9LFxuICAgIClcbiAgICB0aGlzLl9kaXNwbGF5ID0gRGlzcGxheSh0aGlzLl9jb250YWluZXIpXG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxuXG4gICAgdGhpcy5fY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcidcbiAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSAnR2V0L1JlZnJlc2gnXG4gICAgdGhpcy5fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVib3VuY2UodGhpcy5yZWZyZXNoKSlcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gU1RZTEVcblxuICAgIHNoYWRvdy5hcHBlbmQoc3R5bGUsIHRoaXMuX2NvbnRhaW5lcilcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaXNDb25uZWN0ZWQgJiYgdGhpcy5yZWZyZXNoKClcbiAgfVxuXG4gIHJlZnJlc2ggPSBhc3luYyAodmFsdWU6IENhdEVudHJ5ID0gdGhpcy5fc2VsZWN0ZWRDYXQpID0+IHtcbiAgICB0aGlzLl9kaXNwbGF5Lm1lc3NhZ2UgPSAnR2V0dGluZyB0aW1lcy4uLidcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmdldFJ1bnNGb3JDYXQodmFsdWUpXG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQyMCkge1xuICAgICAgICB0aGlzLl9kaXNwbGF5Lm1lc3NhZ2UgPSBcIlNSQydzIGJ1c3khIFJldHJ5IExhdGVyLlwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kaXNwbGF5Lm1lc3NhZ2UgPSAnRmFpbGVkISBQbGVhc2UgUmV0cnkuJ1xuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2Rpc3BsYXkudGltZSA9IChhd2FpdCByZXMuanNvbigpKS5kYXRhLnJ1bnNbMF0ucnVuLnRpbWVzLmluZ2FtZV90XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coeyBlIH0pXG4gICAgfVxuICB9XG5cbiAgZ2V0UnVuc0ZvckNhdCA9IGFzeW5jIChjYXQ6IENhdEVudHJ5KSA9PlxuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vd3d3LnNwZWVkcnVuLmNvbS9hcGkvdjEvbGVhZGVyYm9hcmRzL3c2ajc1NDZqL2NhdGVnb3J5LyR7Y2F0fT92YXItNjhrNGR5emw9NHF5M3I1N2wmdG9wPTFgLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ21haW4tY29tcG9uZW50JywgTWFpbkNvbXBvbmVudClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IDxGIGV4dGVuZHMgKC4uLmE6IGFueVtdKSA9PiBhbnk+KFxuICBmbjogRixcbiAgZGVsYXkgPSAxMDAwLFxuICAuLi5hcmdzOiBQYXJhbWV0ZXJzPEY+XG4pID0+IHtcbiAgbGV0IGJ1c3kgPSBmYWxzZVxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmICghYnVzeSkge1xuICAgICAgYnVzeSA9IHRydWVcbiAgICAgIGZuKC4uLmFyZ3MpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYnVzeSA9IGZhbHNlXG4gICAgICB9LCBkZWxheSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCByZWdpc3RlclNlcnZpY2VXb3JrZXIgZnJvbSAnLi9yZWdpc3RlclNlcnZpY2VXb3JrZXIuanMnXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi91dGlscy9qUXVlcnknXG5pbXBvcnQgTWFpbkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC8nXG5cbmNvbnN0IGJhY2tncm91bmRJbWFnZXMgPSBbJ2FtbXktc3RhdGljJywgJ2JlYWQnXVxuXG5NYWluQ29tcG9uZW50KClcblxuJCgnYm9keScpIS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKGFzc2V0cy8ke1xuICBiYWNrZ3JvdW5kSW1hZ2VzW35+KE1hdGgucmFuZG9tKCkgKiBiYWNrZ3JvdW5kSW1hZ2VzLmxlbmd0aCldXG59LnBuZylgXG5cbiQoJ21haW4nKSEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbi1jb21wb25lbnQnKSlcbiQoJyNzdG9wLWFuaW1hdGlvbicpIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xuICAkKCdib2R5JykhLmNsYXNzTGlzdC50b2dnbGUoJ25vLWFuaW0nKVxufSlcblxuLy8gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKClcbiJdLCJzb3VyY2VSb290IjoiIn0=