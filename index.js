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
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/debounce */ "./src/utils/debounce.ts");
/* harmony import */ var _CatSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatSelector */ "./src/components/MainComponent/CatSelector.ts");
/* harmony import */ var _CatSelectorContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CatSelectorContainer */ "./src/components/MainComponent/CatSelectorContainer.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Display */ "./src/components/MainComponent/Display.ts");




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
  font-family: "astralsOkami", serif;
}

#cat-selector-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

#cat-select {
  padding: 0rem .5rem;
}

.cat-option {
  font-family: "astralsOkami", serif;
  font-size: 16px;
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
        this._loadingIcon = this._container.appendChild(document.createElement('img'));
        this._display = (0,_Display__WEBPACK_IMPORTED_MODULE_3__.default)(this._container);
        this._button = this._container.appendChild(document.createElement('button'));
        this._container.id = 'container';
        this._loadingIcon.id = 'loading-icon';
        this._loadingIcon.src = 'assets/ammy-borking.gif';
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
// registerServiceWorker()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbW15LWRvdC1kb2cvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50L0NhdFNlbGVjdG9yLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvQ2F0U2VsZWN0b3JDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9EaXNwbGF5LnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL3V0aWxzL2RlYm91bmNlLnRzIiwid2VicGFjazovL2FtbXktZG90LWRvZy8uL3NyYy91dGlscy9qUXVlcnkudHMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FtbXktZG90LWRvZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW1teS1kb3QtZG9nLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksUUFPWDtBQVBELFdBQVksUUFBUTtJQUNsQixnQ0FBc0I7SUFDdEIsaUNBQXVCO0lBQ3ZCLHVDQUE2QjtJQUM3Qix3Q0FBOEI7SUFDOUIsZ0NBQXNCO0lBQ3RCLHlDQUErQjtBQUNqQyxDQUFDLEVBUFcsUUFBUSxLQUFSLFFBQVEsUUFPbkI7QUFFRCxNQUFNLGFBQWEsR0FBYSxRQUFRLENBQUMsVUFBVSxD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Ozs7Ozs7O0FDTkEsaUVBQWlFO0FBQy9CO0FBQ3FCO0FBRXZELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO0FBRWhELG1FQUFhLEVBQUU7QUFFZixnREFBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsY0FDakMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUM5RCxPQUFPO0FBRVAsZ0RBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRWhFLDBCQUEwQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIENhdEVudHJ5IHtcbiAgJ05HIEFueSUnID0gJ3pkbndwNHhkJyxcbiAgJ05HKyBBbnklJyA9ICd4azkwMWdnaycsXG4gICdORyBBbGwgQnJ1c2hlcycgPSAncTI1b3dxZ2snLFxuICAnTkcrIEFsbCBCcnVzaGVzJyA9ICd6MjdneTZvMicsXG4gICdUb3AgRG9nJyA9ICdta2VvenF4ZCcsXG4gICdBbGwgTWFqb3IgQm9zc2VzJyA9ICc5ZDgzMTk2MicsXG59XG5cbmNvbnN0IERFRkFVTFRfRU5UUlk6IENhdEVudHJ5ID0gQ2F0RW50cnlbJ05HKyBBbnklJ11cblxuZXhwb3J0IHR5cGUgT25DaGFuZ2UgPSAodmFsdWU6IENhdEVudHJ5KSA9PiB2b2lkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhdFNlbGVjdG9yIHtcbiAgZWw6IEhUTUxTZWxlY3RFbGVtZW50XG4gIGN1cnJlbnQ6IENhdEVudHJ5XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJlbnQ6IEhUTUxFbGVtZW50LCBvbkNoYW5nZTogT25DaGFuZ2UpOiBJQ2F0U2VsZWN0b3IgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gIGNvbnRhaW5lci5pZCA9ICdjYXQtc2VsZWN0J1xuICBjb25zdCBlbCA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSlcblxuICBPYmplY3QuZW50cmllcyhDYXRFbnRyeSkuZm9yRWFjaCgoZW50cnk6IFtzdHJpbmcsIENhdEVudHJ5XSkgPT4ge1xuICAgIGNvbnN0IG9wdDogSFRNTE9wdGlvbkVsZW1lbnQgPSBlbC5hcHBlbmRDaGlsZChcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpLFxuICAgIClcbiAgICBpZiAoZW50cnlbMV0gPT09IERFRkFVTFRfRU5UUlkpIG9wdC5zZWxlY3RlZCA9IHRydWVcbiAgICBvcHQuY2xhc3NOYW1lID0gJ2NhdC1vcHRpb24nXG4gICAgb3B0LnRleHRDb250ZW50ID0gZW50cnlbMF1cbiAgICBvcHQudmFsdWUgPSBlbnRyeVsxXVxuICB9KVxuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBvbkNoYW5nZShlbC52YWx1ZSBhcyBDYXRFbnRyeSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGVsLFxuICAgIGN1cnJlbnQ6IGVsLnZhbHVlIGFzIENhdEVudHJ5LFxuICB9XG59XG4iLCJpbXBvcnQgQ2F0U2VsZWN0b3IsIHsgT25DaGFuZ2UgfSBmcm9tICcuL0NhdFNlbGVjdG9yJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYXRTZWxlY3RvckNvbnRhaW5lciB7XG4gIGVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBvbkNoYW5nZTogT25DaGFuZ2UsXG4pOiBJQ2F0U2VsZWN0b3JDb250YWluZXIgPT4ge1xuICBjb25zdCBlbCA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgZWwuaWQgPSAnY2F0LXNlbGVjdG9yLWNvbnRhaW5lcidcbiAgY29uc3QgdGl0bGUxID0gZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxuICBDYXRTZWxlY3RvcihlbCwgb25DaGFuZ2UpXG4gIGNvbnN0IHRpdGxlMiA9IGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSlcbiAgdGl0bGUxLnRleHRDb250ZW50ID0gJ1lvdSBoYXZlIHRvIHNob3cgdmlkZW8gcHJvb2YgaWYgeW91cidcbiAgdGl0bGUyLnRleHRDb250ZW50ID0gJ3J1biBpcyBxdWlja2VyIHRoYW4gb3IgZXhhY3RseSBhdCdcblxuICByZXR1cm4ge1xuICAgIGVsLFxuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIElEaXNwbGF5IHtcbiAgdGltZURpc3BsYXk6IEhUTUxEaXZFbGVtZW50XG4gIHRpbWU6IG51bWJlclxuICBtZXNzYWdlOiBzdHJpbmdcbiAgaGlkZTogKCkgPT4gdm9pZFxuICBzaG93OiAoKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJVGltZSB7XG4gIGhvdXJzOiBudW1iZXJcbiAgbWludXRlczogbnVtYmVyXG4gIHNlY29uZHM6IG51bWJlclxufVxuXG5jb25zdCBUSFJFU0hPTEQgPSAxLjFcblxuY29uc3QgY2FsY3VsYXRlVGhyZXNob2xkVGltZSA9ICh3clRpbWVJblNlY29uZHM6IG51bWJlcikgPT5cbiAgd3JUaW1lSW5TZWNvbmRzICogVEhSRVNIT0xEXG5cbmNvbnN0IHBhcnNlVGhyZXNob2xkVGltZSA9IChzOiBudW1iZXIpOiBJVGltZSA9PiB7XG4gIGNvbnN0IFtob3VycywgbWluc1NlY3NdID0gW35+KHMgLyAzNjAwKSwgcyAlIDM2MDBdXG4gIGNvbnN0IFttaW51dGVzLCBzZWNvbmRzXSA9IFt+fihtaW5zU2VjcyAvIDYwKSwgTWF0aC5jZWlsKG1pbnNTZWNzICUgNjApXVxuICByZXR1cm4ge1xuICAgIGhvdXJzLFxuICAgIG1pbnV0ZXMsXG4gICAgc2Vjb25kcyxcbiAgfVxufVxuXG5jb25zdCBkaXNwbGF5VGhyZXNob2xkVGltZSA9ICh0aW1lRGlzcGxheTogSFRNTERpdkVsZW1lbnQsIHRpbWU6IG51bWJlcikgPT4ge1xuICBjb25zdCB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0gPSBwYXJzZVRocmVzaG9sZFRpbWUodGltZSlcbiAgdGltZURpc3BsYXkudGV4dENvbnRlbnQgPSBgJHtob3Vyc31IICR7bWludXRlc31NICR7c2Vjb25kc31TYFxufVxuXG5leHBvcnQgZGVmYXVsdCAocGFyZW50OiBIVE1MRWxlbWVudCk6IElEaXNwbGF5ID0+IHtcbiAgY29uc3QgdGltZURpc3BsYXkgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gIHRpbWVEaXNwbGF5LmlkID0gJ2Rpc3BsYXknXG4gIHRpbWVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuXG4gIHJldHVybiB7XG4gICAgdGltZURpc3BsYXksXG4gICAgc2V0IHRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgICBpZiAoIXRoaXMudGltZURpc3BsYXkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3JcbiAgICAgIH1cblxuICAgICAgZGlzcGxheVRocmVzaG9sZFRpbWUodGhpcy50aW1lRGlzcGxheSwgY2FsY3VsYXRlVGhyZXNob2xkVGltZSh0aW1lKSlcbiAgICB9LFxuXG4gICAgc2V0IG1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICBpZiAoIXRoaXMudGltZURpc3BsYXkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3JcbiAgICAgIH1cbiAgICAgIHRoaXMudGltZURpc3BsYXkudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgfSxcblxuICAgIGhpZGUoKSB7XG4gICAgICB0aGlzLnRpbWVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIH0sXG5cbiAgICBzaG93KCkge1xuICAgICAgdGhpcy50aW1lRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnXG5pbXBvcnQgeyBDYXRFbnRyeSB9IGZyb20gJy4vQ2F0U2VsZWN0b3InXG5pbXBvcnQgQ2F0U2VsZWN0b3JDb250YWluZXIsIHtcbiAgSUNhdFNlbGVjdG9yQ29udGFpbmVyLFxufSBmcm9tICcuL0NhdFNlbGVjdG9yQ29udGFpbmVyJ1xuaW1wb3J0IERpc3BsYXksIHsgSURpc3BsYXkgfSBmcm9tICcuL0Rpc3BsYXknXG5cbmludGVyZmFjZSBSdW5SZXNwb25zZSB7XG4gIGRhdGE6IHtcbiAgICBydW5zOiB7XG4gICAgICBydW46IHtcbiAgICAgICAgdGltZXM6IHtcbiAgICAgICAgICBpbmdhbWVfdDogbnVtYmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9W11cbiAgfVxufVxuXG5jb25zdCBTVFlMRSA9IGBcbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IHNvbGlkIDE4cHggaHNsKDAsIDAlLCAxMiUpO1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDk3JSk7XG59XG5cbmJ1dHRvbiwgc2VsZWN0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJhc3RyYWxzT2thbWlcIiwgc2VyaWY7XG59XG5cbiNjYXQtc2VsZWN0b3ItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY2F0LXNlbGVjdCB7XG4gIHBhZGRpbmc6IDByZW0gLjVyZW07XG59XG5cbi5jYXQtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiYXN0cmFsc09rYW1pXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2xvYWRpbmctaWNvbiB7XG4gIGhlaWdodDogMi41cmVtO1xuICBhbmltYXRpb24tbmFtZTogc3BpbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuI2Rpc3BsYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cblxuI3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBzb2xpZCAyNHB4IGhzbCgwLCAwJSwgMTIlKTtcbiAgICBwYWRkaW5nOiA0OHB4O1xufVxuXG4gICNjYXQtc2VsZWN0b3ItY29udGFpbmVyIHtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIH1cblxuICAjZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuYFxuXG5jbGFzcyBNYWluQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBfY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxuICBfY2F0U2VsZWN0b3JDb250YWluZXI6IElDYXRTZWxlY3RvckNvbnRhaW5lclxuICBfZGlzcGxheTogSURpc3BsYXlcbiAgX2xvYWRpbmdJY29uOiBIVE1MSW1hZ2VFbGVtZW50XG4gIF9idXR0b246IEhUTUxCdXR0b25FbGVtZW50XG4gIF9zZWxlY3RlZENhdCA9IENhdEVudHJ5WydORysgQW55JSddXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSlcblxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5fY2F0U2VsZWN0b3JDb250YWluZXIgPSBDYXRTZWxlY3RvckNvbnRhaW5lcihcbiAgICAgIHRoaXMuX2NvbnRhaW5lcixcbiAgICAgICh2YWx1ZTogQ2F0RW50cnkpID0+IHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXQgIT09IHZhbHVlICYmIGRlYm91bmNlKCgpID0+IHRoaXMucmVmcmVzaCh2YWx1ZSkpKClcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXQgPSB2YWx1ZVxuICAgICAgfSxcbiAgICApXG4gICAgdGhpcy5fbG9hZGluZ0ljb24gPSB0aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSxcbiAgICApXG4gICAgdGhpcy5fZGlzcGxheSA9IERpc3BsYXkodGhpcy5fY29udGFpbmVyKVxuICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcblxuICAgIHRoaXMuX2NvbnRhaW5lci5pZCA9ICdjb250YWluZXInXG4gICAgdGhpcy5fbG9hZGluZ0ljb24uaWQgPSAnbG9hZGluZy1pY29uJ1xuICAgIHRoaXMuX2xvYWRpbmdJY29uLnNyYyA9ICdhc3NldHMvYW1teS1ib3JraW5nLmdpZidcbiAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSAnR2V0L1JlZnJlc2gnXG4gICAgdGhpcy5fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVib3VuY2UodGhpcy5yZWZyZXNoKSlcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gU1RZTEVcblxuICAgIHNoYWRvdy5hcHBlbmQoc3R5bGUsIHRoaXMuX2NvbnRhaW5lcilcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaXNDb25uZWN0ZWQgJiYgdGhpcy5yZWZyZXNoKClcbiAgfVxuXG4gIHJlZnJlc2ggPSBhc3luYyAodmFsdWU6IENhdEVudHJ5ID0gdGhpcy5fc2VsZWN0ZWRDYXQpID0+IHtcbiAgICB0aGlzLl9kaXNwbGF5LmhpZGUoKVxuICAgIHRoaXMuX2xvYWRpbmdJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZ2V0UnVuc0ZvckNhdCh2YWx1ZSlcbiAgICB0aGlzLl9sb2FkaW5nSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICB0aGlzLl9kaXNwbGF5LnNob3coKVxuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MjApIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gXCJTUkMncyBidXN5ISBSZXRyeSBMYXRlci5cIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheS5tZXNzYWdlID0gJ0ZhaWxlZCEgUGxlYXNlIFJldHJ5LidcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLl9kaXNwbGF5LnRpbWUgPSAoYXdhaXQgcmVzLmpzb24oKSkuZGF0YS5ydW5zWzBdLnJ1bi50aW1lcy5pbmdhbWVfdFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgZSB9KVxuICAgIH1cbiAgfVxuXG4gIGdldFJ1bnNGb3JDYXQgPSBhc3luYyAoY2F0OiBDYXRFbnRyeSkgPT5cbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL3d3dy5zcGVlZHJ1bi5jb20vYXBpL3YxL2xlYWRlcmJvYXJkcy93Nmo3NTQ2ai9jYXRlZ29yeS8ke2NhdH0/dmFyLTY4azRkeXpsPTRxeTNyNTdsJnRvcD0xYCxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDEnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtYWluLWNvbXBvbmVudCcsIE1haW5Db21wb25lbnQpXG59XG4iLCJleHBvcnQgZGVmYXVsdCA8RiBleHRlbmRzICguLi5hOiBhbnlbXSkgPT4gYW55PihcbiAgZm46IEYsXG4gIGRlbGF5ID0gMTAwMCxcbiAgLi4uYXJnczogUGFyYW1ldGVyczxGPlxuKSA9PiB7XG4gIGxldCBidXN5ID0gZmFsc2VcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoIWJ1c3kpIHtcbiAgICAgIGJ1c3kgPSB0cnVlXG4gICAgICBmbiguLi5hcmdzKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGJ1c3kgPSBmYWxzZVxuICAgICAgfSwgZGVsYXkpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCAkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gJy4vcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzJ1xuaW1wb3J0IHsgJCB9IGZyb20gJy4vdXRpbHMvalF1ZXJ5J1xuaW1wb3J0IE1haW5Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL01haW5Db21wb25lbnQvJ1xuXG5jb25zdCBiYWNrZ3JvdW5kSW1hZ2VzID0gWydhbW15LXN0YXRpYycsICdiZWFkJ11cblxuTWFpbkNvbXBvbmVudCgpXG5cbiQoJ2JvZHknKSEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChhc3NldHMvJHtcbiAgYmFja2dyb3VuZEltYWdlc1t+fihNYXRoLnJhbmRvbSgpICogYmFja2dyb3VuZEltYWdlcy5sZW5ndGgpXVxufS5wbmcpYFxuXG4kKCdtYWluJykhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4tY29tcG9uZW50JykpXG5cbi8vIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpXG4iXSwic291cmNlUm9vdCI6IiJ9