module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
var _jsxFileName = "/Users/quanvihong/Desktop/cultural-lens-v2/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Header() {
  return __jsx("div", {
    className: "jsx-375191567" + " " + "App-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-375191567" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 15
    }
  }, " Cultural lens logo goes here "), __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 15
    }
  }), __jsx("ul", {
    className: "jsx-375191567" + " " + "Navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "jsx-375191567",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "Home")), __jsx("li", {
    className: "jsx-375191567",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/forum",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Forum")), __jsx("li", {
    className: "jsx-375191567",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "About")), __jsx("li", {
    className: "jsx-375191567",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "Login"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "375191567",
    __self: this
  }, ".App-header.jsx-375191567{position:relative;background-color:#eaeef7;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;color:blue;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.country-panel-header.jsx-375191567{position:relative;width:50%;margin-left:15%;}.Navbar.jsx-375191567{position:relative;width:30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style-type:none;-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.Navbar.jsx-375191567 li.jsx-375191567{font-size:calc(5px + 2vmin);margin-right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFudmlob25nL0Rlc2t0b3AvY3VsdHVyYWwtbGVucy12Mi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmdCLEFBRzZCLEFBVUEsQUFNRSxBQVNVLGtCQXhCTCxBQVVmLEFBTUUsVUFMSSxBQU1ELEFBUUksZUF4Qk4sQ0FXZixDQWNBLHlEQVJ5QixlQWhCTSxNQWlCYixzREFDZSwrREFqQnBCLFdBQ1EsaURBaUJyQiw0Q0FmQSIsImZpbGUiOiIvVXNlcnMvcXVhbnZpaG9uZy9EZXNrdG9wL2N1bHR1cmFsLWxlbnMtdjIvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnOyBcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2gnOyBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IFwidGl0bGVcIj4gQ3VsdHVyYWwgbGVucyBsb2dvIGdvZXMgaGVyZSA8L3NwYW4+XG4gICAgICAgICAgICAgIDxTZWFyY2gvPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiTmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9ydW1cIj5Gb3J1bTwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5BcHAtaGVhZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWVmNztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuXG4gICAgICAgIH1cblxuICAgICAgICAuY291bnRyeS1wYW5lbC1oZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogNTAlOyBcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTUlOyBcbiAgICAgICAgfVxuXG4gICAgICAgIC5OYXZiYXIgeyBcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5OYXZiYXIgbGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDVweCArIDJ2bWluKTsgXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICApXG59Il19 */\n/*@ sourceURL=/Users/quanvihong/Desktop/cultural-lens-v2/components/Header.js */"));
}

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/countries */ "./lib/countries.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/quanvihong/Desktop/cultural-lens-v2/components/Search.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Item = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li`
    &:hover {
        cursor: pointer; 
        color: red; 
    }

    font-size: 20px; 
    font-family: 'Arial', sans-serif;
    color: black;
    width: 100%;
    border-bottom: 0.5px solid gray; 
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    position: relative;
    height: fit-content; 
    display: flex; 
    flex-direction: column; 
    width: 25rem; 
`;

const Suggestions = ({
  suggestions
}) => {
  const options = suggestions.map(suggestion => __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/country/[country]",
    as: `/country/${suggestion.country}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(Item, {
    key: suggestion.unicode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, suggestion.emoji, " ", suggestion.country)));
  return __jsx("ul", {
    className: "jsx-1714706217",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, options, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1714706217",
    __self: undefined
  }, "ul.jsx-1714706217{position:absolute;top:30px;height:-webkit-max-content;height:-moz-max-content;height:max-content;list-style-type:none;width:25rem;background:white;border-left:2px solid black;border-right:2px solid black;padding-left:5px;margin-left:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFudmlob25nL0Rlc2t0b3AvY3VsdHVyYWwtbGVucy12Mi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3NCLEFBRytCLGtCQUNULFNBQ1Usc0VBQ0UscUJBQ1QsWUFDSyxpQkFDVyw0QkFDQyw2QkFDWixpQkFDQSxpQkFDckIiLCJmaWxlIjoiL1VzZXJzL3F1YW52aWhvbmcvRGVza3RvcC9jdWx0dXJhbC1sZW5zLXYyL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRDb3VudHJ5U3VnZ2VzdGlvbnN9IGZyb20gJy4uL2xpYi9jb3VudHJpZXMnO1xuaW1wb3J0IHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnOyBcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnOyBcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7IFxuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgICAgICBjb2xvcjogcmVkOyBcbiAgICB9XG5cbiAgICBmb250LXNpemU6IDIwcHg7IFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBncmF5OyBcbmBcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7IFxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIHdpZHRoOiAyNXJlbTsgXG5gXG5cbmNvbnN0IFN1Z2dlc3Rpb25zID0gKHtzdWdnZXN0aW9uc30pID0+IHtcbmNvbnN0IG9wdGlvbnMgPSBzdWdnZXN0aW9ucy5tYXAoc3VnZ2VzdGlvbiA9PiBcbiAgICA8TGluayBocmVmPVwiL2NvdW50cnkvW2NvdW50cnldXCIgYXM9e2AvY291bnRyeS8ke3N1Z2dlc3Rpb24uY291bnRyeX1gfT5cbiAgICAgICAgPEl0ZW0ga2V5PXtzdWdnZXN0aW9uLnVuaWNvZGV9PntzdWdnZXN0aW9uLmVtb2ppfSB7c3VnZ2VzdGlvbi5jb3VudHJ5fTwvSXRlbT5cbiAgICA8L0xpbms+XG4pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+e29wdGlvbnN9XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDMwcHg7IFxuICAgICAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAyNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjazsgXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjazsgXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyBcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC91bD5cbiAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTsgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW10gXG4gICAgICAgIH07IFxuICAgICAgICB0aGlzLnNlYXJjaCA9IGNyZWF0ZVJlZigpOyBcbiAgICB9XG5cbiAgICBzZXRLZXl3b3JkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZ2V0Q291bnRyeVN1Z2dlc3Rpb25zKHRoaXMuc2VhcmNoLnZhbHVlKTsgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N1Z2dlc3Rpb25zOiByZXN1bHRzfSk7IFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgcmVmPXtpbnB1dCA9PiB0aGlzLnNlYXJjaCA9IGlucHV0fSBcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBteC1hdXRvIHctZnVsbCBoLTEwIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHRleHQteGwgc2hhZG93LWxnIHB4LTMgcHktNFwiIFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgY291bnRyeSBuYW1lIGhlcmVcIiBcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0S2V5d29yZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YCBcbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDsgXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3RoaXMuc2VhcmNoLnZhbHVlICYmIDxTdWdnZXN0aW9ucyBzdWdnZXN0aW9ucz17dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc30vPiB9XG4gICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgIClcbiAgICB9ICAgXG59XG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/quanvihong/Desktop/cultural-lens-v2/components/Search.js */"));
};

class Search extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "setKeyword", () => {
      const results = Object(_lib_countries__WEBPACK_IMPORTED_MODULE_2__["getCountrySuggestions"])(this.search.value);
      this.setState({
        suggestions: results
      });
    });

    this.state = {
      suggestions: []
    };
    this.search = Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
  }

  render() {
    return __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 12
      }
    }, __jsx("div", {
      className: "jsx-1417483104" + " " + "searcher",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, __jsx("input", {
      ref: input => this.search = input,
      type: "search",
      placeholder: "Type country name here",
      onChange: this.setKeyword,
      className: "jsx-1417483104" + " " + "input mx-auto w-full h-10 rounded focus:outline-none focus:shadow-outline text-xl shadow-lg px-3 py-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1417483104",
      __self: this
    }, "input.jsx-1417483104{font-size:15px;padding:0.5rem 0;margin:0.5rem 1rem;width:25rem;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFudmlob25nL0Rlc2t0b3AvY3VsdHVyYWwtbGVucy12Mi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRTBCLEFBR29DLGVBQ0UsaUJBQ0UsbUJBQ1AsWUFDTSxrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL3F1YW52aWhvbmcvRGVza3RvcC9jdWx0dXJhbC1sZW5zLXYyL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRDb3VudHJ5U3VnZ2VzdGlvbnN9IGZyb20gJy4uL2xpYi9jb3VudHJpZXMnO1xuaW1wb3J0IHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnOyBcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnOyBcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7IFxuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgICAgICBjb2xvcjogcmVkOyBcbiAgICB9XG5cbiAgICBmb250LXNpemU6IDIwcHg7IFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBncmF5OyBcbmBcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7IFxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIHdpZHRoOiAyNXJlbTsgXG5gXG5cbmNvbnN0IFN1Z2dlc3Rpb25zID0gKHtzdWdnZXN0aW9uc30pID0+IHtcbmNvbnN0IG9wdGlvbnMgPSBzdWdnZXN0aW9ucy5tYXAoc3VnZ2VzdGlvbiA9PiBcbiAgICA8TGluayBocmVmPVwiL2NvdW50cnkvW2NvdW50cnldXCIgYXM9e2AvY291bnRyeS8ke3N1Z2dlc3Rpb24uY291bnRyeX1gfT5cbiAgICAgICAgPEl0ZW0ga2V5PXtzdWdnZXN0aW9uLnVuaWNvZGV9PntzdWdnZXN0aW9uLmVtb2ppfSB7c3VnZ2VzdGlvbi5jb3VudHJ5fTwvSXRlbT5cbiAgICA8L0xpbms+XG4pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+e29wdGlvbnN9XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDMwcHg7IFxuICAgICAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAyNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjazsgXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjazsgXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyBcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC91bD5cbiAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTsgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW10gXG4gICAgICAgIH07IFxuICAgICAgICB0aGlzLnNlYXJjaCA9IGNyZWF0ZVJlZigpOyBcbiAgICB9XG5cbiAgICBzZXRLZXl3b3JkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZ2V0Q291bnRyeVN1Z2dlc3Rpb25zKHRoaXMuc2VhcmNoLnZhbHVlKTsgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N1Z2dlc3Rpb25zOiByZXN1bHRzfSk7IFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgcmVmPXtpbnB1dCA9PiB0aGlzLnNlYXJjaCA9IGlucHV0fSBcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBteC1hdXRvIHctZnVsbCBoLTEwIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHRleHQteGwgc2hhZG93LWxnIHB4LTMgcHktNFwiIFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgY291bnRyeSBuYW1lIGhlcmVcIiBcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0S2V5d29yZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YCBcbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDsgXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3RoaXMuc2VhcmNoLnZhbHVlICYmIDxTdWdnZXN0aW9ucyBzdWdnZXN0aW9ucz17dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc30vPiB9XG4gICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgIClcbiAgICB9ICAgXG59XG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/quanvihong/Desktop/cultural-lens-v2/components/Search.js */")), this.search.value && __jsx(Suggestions, {
      suggestions: this.state.suggestions,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 35
      }
    }));
  }

}

/***/ }),

/***/ "./components/Title.js":
/*!*****************************!*\
  !*** ./components/Title.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/quanvihong/Desktop/cultural-lens-v2/components/Title.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Title({
  country,
  emoji
}) {
  return __jsx("main", {
    className: "jsx-1964226274" + " " + "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1964226274" + " " + "country",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/country/[country]",
    as: `/country/${country}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1964226274",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, country))), __jsx("span", {
    className: "jsx-1964226274" + " " + "emoji",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, emoji), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1964226274",
    __self: this
  }, "main.jsx-1964226274{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;}.country.jsx-1964226274{font-family:cursive;color:#e243de;font-size:30px;padding-bottom:10px;margin-right:10px;}.emoji.jsx-1964226274{font-family:sans-serif;color:#559834;font-size:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFudmlob25nL0Rlc2t0b3AvY3VsdHVyYWwtbGVucy12Mi9jb21wb25lbnRzL1RpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlvQixBQUc0QixBQU1TLEFBT0csV0FaVixTQU1DLEdBT0EsV0FOQyxHQU9BLFlBTkssR0FPeEIsaUJBTnNCLGdCQVJBLEVBU3RCLGdCQVJBIiwiZmlsZSI6Ii9Vc2Vycy9xdWFudmlob25nL0Rlc2t0b3AvY3VsdHVyYWwtbGVucy12Mi9jb21wb25lbnRzL1RpdGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpdGxlKHtjb3VudHJ5LCBlbW9qaX0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudHJ5XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY291bnRyeS9bY291bnRyeV1cIiBhcz17YC9jb3VudHJ5LyR7Y291bnRyeX1gfT5cbiAgICAgICAgICAgIDxkaXY+e2NvdW50cnl9PC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVtb2ppXCI+e2Vtb2ppfTwvc3Bhbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2UyNDNkZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5lbW9qaSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NTk4MzQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICBcbiAgICAgICAgPC9tYWluPlxuXG4gICAgXG4gICAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/quanvihong/Desktop/cultural-lens-v2/components/Title.js */"));
}

/***/ }),

/***/ "./lib/countries.js":
/*!**************************!*\
  !*** ./lib/countries.js ***!
  \**************************/
/*! exports provided: getCountryData, allCountryPaths, getRandomCountry, getCountrySuggestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryData", function() { return getCountryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCountryPaths", function() { return allCountryPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomCountry", function() { return getRandomCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountrySuggestions", function() { return getCountrySuggestions; });
const allCountries = __webpack_require__(/*! ./game_trending.json */ "./lib/game_trending.json");

function getCountryData(name) {
  const findExactName = element => element.country === name;

  const country = allCountries[allCountries.findIndex(findExactName)];
  const country_name = country.country,
        emoji_name = country.emoji,
        gaming_trends = country.trends.games;
  return {
    name: country_name,
    emoji: emoji_name,
    trends: {
      game: gaming_trends
    }
  };
}
function allCountryPaths() {
  return allCountries.map(country => {
    return {
      params: {
        country: country.country
      }
    };
  });
}
function getRandomCountry() {
  const country = allCountries[Math.floor(Math.random() * allCountries.length)];
  return {
    name: country.country,
    emoji: country.emoji
  };
}
function getCountrySuggestions(keyword) {
  const countries = allCountries.filter(country => country.country.includes(keyword));
  return countries.slice(0, 3);
}

/***/ }),

/***/ "./lib/game_trending.json":
/*!********************************!*\
  !*** ./lib/game_trending.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"country\":\"Ascension Island\",\"emoji\":\"🇦🇨\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":399,\"likes\":306},{\"name\":\"League of legends\",\"downloads\":484,\"likes\":168},{\"name\":\"Minecraft\",\"downloads\":855,\"likes\":418}]}},{\"country\":\"Andorra\",\"emoji\":\"🇦🇩\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":231,\"likes\":18},{\"name\":\"League of legends\",\"downloads\":451,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":1215,\"likes\":44}]}},{\"country\":\"United Arab Emirates\",\"emoji\":\"🇦🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":462,\"likes\":378},{\"name\":\"League of legends\",\"downloads\":187,\"likes\":252},{\"name\":\"Minecraft\",\"downloads\":1395,\"likes\":638}]}},{\"country\":\"Afghanistan\",\"emoji\":\"🇦🇫\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":819,\"likes\":36},{\"name\":\"League of legends\",\"downloads\":77,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":945,\"likes\":308}]}},{\"country\":\"Antigua & Barbuda\",\"emoji\":\"🇦🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":21,\"likes\":162},{\"name\":\"League of legends\",\"downloads\":154,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":1575,\"likes\":330}]}},{\"country\":\"Anguilla\",\"emoji\":\"🇦🇮\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":609,\"likes\":360},{\"name\":\"League of legends\",\"downloads\":143,\"likes\":336},{\"name\":\"Minecraft\",\"downloads\":270,\"likes\":198}]}},{\"country\":\"Albania\",\"emoji\":\"🇦🇱\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":336,\"likes\":414},{\"name\":\"League of legends\",\"downloads\":308,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":945,\"likes\":286}]}},{\"country\":\"Armenia\",\"emoji\":\"🇦🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":126,\"likes\":18},{\"name\":\"League of legends\",\"downloads\":407,\"likes\":336},{\"name\":\"Minecraft\",\"downloads\":585,\"likes\":550}]}},{\"country\":\"Angola\",\"emoji\":\"🇦🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":945,\"likes\":414},{\"name\":\"League of legends\",\"downloads\":242,\"likes\":216},{\"name\":\"Minecraft\",\"downloads\":1845,\"likes\":132}]}},{\"country\":\"Antarctica\",\"emoji\":\"🇦🇶\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":399,\"likes\":522},{\"name\":\"League of legends\",\"downloads\":473,\"likes\":120},{\"name\":\"Minecraft\",\"downloads\":855,\"likes\":154}]}},{\"country\":\"Argentina\",\"emoji\":\"🇦🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":924,\"likes\":18},{\"name\":\"League of legends\",\"downloads\":121,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":405,\"likes\":66}]}},{\"country\":\"American Samoa\",\"emoji\":\"🇦🇸\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":840,\"likes\":252},{\"name\":\"League of legends\",\"downloads\":77,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":585,\"likes\":440}]}},{\"country\":\"Austria\",\"emoji\":\"🇦🇹\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":378,\"likes\":558},{\"name\":\"League of legends\",\"downloads\":33,\"likes\":120},{\"name\":\"Minecraft\",\"downloads\":270,\"likes\":550}]}},{\"country\":\"Australia\",\"emoji\":\"🇦🇺\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":987,\"likes\":0},{\"name\":\"League of legends\",\"downloads\":253,\"likes\":84},{\"name\":\"Minecraft\",\"downloads\":1485,\"likes\":462}]}},{\"country\":\"Aruba\",\"emoji\":\"🇦🇼\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":189,\"likes\":180},{\"name\":\"League of legends\",\"downloads\":352,\"likes\":336},{\"name\":\"Minecraft\",\"downloads\":360,\"likes\":374}]}},{\"country\":\"Azerbaijan\",\"emoji\":\"🇦🇿\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":945,\"likes\":126},{\"name\":\"League of legends\",\"downloads\":429,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":2025,\"likes\":396}]}},{\"country\":\"Bosnia & Herzegovina\",\"emoji\":\"🇧🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":273,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":308,\"likes\":168},{\"name\":\"Minecraft\",\"downloads\":1215,\"likes\":66}]}},{\"country\":\"Barbados\",\"emoji\":\"🇧🇧\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":189,\"likes\":216},{\"name\":\"League of legends\",\"downloads\":143,\"likes\":0},{\"name\":\"Minecraft\",\"downloads\":1305,\"likes\":66}]}},{\"country\":\"Bangladesh\",\"emoji\":\"🇧🇩\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":945,\"likes\":108},{\"name\":\"League of legends\",\"downloads\":363,\"likes\":240},{\"name\":\"Minecraft\",\"downloads\":495,\"likes\":638}]}},{\"country\":\"Belgium\",\"emoji\":\"🇧🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":567,\"likes\":396},{\"name\":\"League of legends\",\"downloads\":33,\"likes\":288},{\"name\":\"Minecraft\",\"downloads\":2115,\"likes\":154}]}},{\"country\":\"Burkina Faso\",\"emoji\":\"🇧🇫\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":483,\"likes\":468},{\"name\":\"League of legends\",\"downloads\":209,\"likes\":180},{\"name\":\"Minecraft\",\"downloads\":900,\"likes\":132}]}},{\"country\":\"Bulgaria\",\"emoji\":\"🇧🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":147,\"likes\":180},{\"name\":\"League of legends\",\"downloads\":99,\"likes\":84},{\"name\":\"Minecraft\",\"downloads\":1305,\"likes\":484}]}},{\"country\":\"Bahrain\",\"emoji\":\"🇧🇭\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":189,\"likes\":360},{\"name\":\"League of legends\",\"downloads\":55,\"likes\":360},{\"name\":\"Minecraft\",\"downloads\":90,\"likes\":528}]}},{\"country\":\"Burundi\",\"emoji\":\"🇧🇮\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":126,\"likes\":306},{\"name\":\"League of legends\",\"downloads\":121,\"likes\":144},{\"name\":\"Minecraft\",\"downloads\":1890,\"likes\":0}]}},{\"country\":\"Benin\",\"emoji\":\"🇧🇯\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":315,\"likes\":360},{\"name\":\"League of legends\",\"downloads\":55,\"likes\":336},{\"name\":\"Minecraft\",\"downloads\":45,\"likes\":572}]}},{\"country\":\"Bermuda\",\"emoji\":\"🇧🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":756,\"likes\":162},{\"name\":\"League of legends\",\"downloads\":451,\"likes\":192},{\"name\":\"Minecraft\",\"downloads\":2070,\"likes\":638}]}},{\"country\":\"Brunei\",\"emoji\":\"🇧🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":126,\"likes\":234},{\"name\":\"League of legends\",\"downloads\":352,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":1800,\"likes\":682}]}},{\"country\":\"Bolivia\",\"emoji\":\"🇧🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":630,\"likes\":468},{\"name\":\"League of legends\",\"downloads\":319,\"likes\":108},{\"name\":\"Minecraft\",\"downloads\":540,\"likes\":242}]}},{\"country\":\"Brazil\",\"emoji\":\"🇧🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":126,\"likes\":72},{\"name\":\"League of legends\",\"downloads\":319,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":1845,\"likes\":572}]}},{\"country\":\"Bahamas\",\"emoji\":\"🇧🇸\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":672,\"likes\":558},{\"name\":\"League of legends\",\"downloads\":363,\"likes\":240},{\"name\":\"Minecraft\",\"downloads\":945,\"likes\":110}]}},{\"country\":\"Bhutan\",\"emoji\":\"🇧🇹\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":84,\"likes\":396},{\"name\":\"League of legends\",\"downloads\":99,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":1305,\"likes\":528}]}},{\"country\":\"Botswana\",\"emoji\":\"🇧🇼\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":966,\"likes\":342},{\"name\":\"League of legends\",\"downloads\":352,\"likes\":216},{\"name\":\"Minecraft\",\"downloads\":90,\"likes\":550}]}},{\"country\":\"Belarus\",\"emoji\":\"🇧🇾\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":945,\"likes\":450},{\"name\":\"League of legends\",\"downloads\":396,\"likes\":144},{\"name\":\"Minecraft\",\"downloads\":1980,\"likes\":88}]}},{\"country\":\"Belize\",\"emoji\":\"🇧🇿\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":105,\"likes\":432},{\"name\":\"League of legends\",\"downloads\":154,\"likes\":36},{\"name\":\"Minecraft\",\"downloads\":810,\"likes\":616}]}},{\"country\":\"Canada\",\"emoji\":\"🇨🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":126,\"likes\":126},{\"name\":\"League of legends\",\"downloads\":330,\"likes\":36},{\"name\":\"Minecraft\",\"downloads\":1935,\"likes\":198}]}},{\"country\":\"Congo - Kinshasa\",\"emoji\":\"🇨🇩\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":483,\"likes\":288},{\"name\":\"League of legends\",\"downloads\":462,\"likes\":156},{\"name\":\"Minecraft\",\"downloads\":450,\"likes\":352}]}},{\"country\":\"Central African Republic\",\"emoji\":\"🇨🇫\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":189,\"likes\":504},{\"name\":\"League of legends\",\"downloads\":165,\"likes\":300},{\"name\":\"Minecraft\",\"downloads\":1440,\"likes\":528}]}},{\"country\":\"Congo - Brazzaville\",\"emoji\":\"🇨🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":336,\"likes\":324},{\"name\":\"League of legends\",\"downloads\":77,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":1575,\"likes\":352}]}},{\"country\":\"Switzerland\",\"emoji\":\"🇨🇭\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":483,\"likes\":234},{\"name\":\"League of legends\",\"downloads\":22,\"likes\":36},{\"name\":\"Minecraft\",\"downloads\":990,\"likes\":198}]}},{\"country\":\"Côte d’Ivoire\",\"emoji\":\"🇨🇮\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":462,\"likes\":180},{\"name\":\"League of legends\",\"downloads\":154,\"likes\":252},{\"name\":\"Minecraft\",\"downloads\":720,\"likes\":264}]}},{\"country\":\"Cook Islands\",\"emoji\":\"🇨🇰\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":168,\"likes\":198},{\"name\":\"League of legends\",\"downloads\":473,\"likes\":216},{\"name\":\"Minecraft\",\"downloads\":1485,\"likes\":616}]}},{\"country\":\"Chile\",\"emoji\":\"🇨🇱\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":105,\"likes\":252},{\"name\":\"League of legends\",\"downloads\":297,\"likes\":132},{\"name\":\"Minecraft\",\"downloads\":1755,\"likes\":220}]}},{\"country\":\"Cameroon\",\"emoji\":\"🇨🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":294,\"likes\":270},{\"name\":\"League of legends\",\"downloads\":275,\"likes\":36},{\"name\":\"Minecraft\",\"downloads\":1800,\"likes\":242}]}},{\"country\":\"China\",\"emoji\":\"🇨🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":861,\"likes\":504},{\"name\":\"League of legends\",\"downloads\":143,\"likes\":240},{\"name\":\"Minecraft\",\"downloads\":2070,\"likes\":440}]}},{\"country\":\"Colombia\",\"emoji\":\"🇨🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":105,\"likes\":252},{\"name\":\"League of legends\",\"downloads\":363,\"likes\":252},{\"name\":\"Minecraft\",\"downloads\":1215,\"likes\":132}]}},{\"country\":\"Costa Rica\",\"emoji\":\"🇨🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":378,\"likes\":0},{\"name\":\"League of legends\",\"downloads\":308,\"likes\":144},{\"name\":\"Minecraft\",\"downloads\":720,\"likes\":286}]}},{\"country\":\"Cuba\",\"emoji\":\"🇨🇺\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":273,\"likes\":558},{\"name\":\"League of legends\",\"downloads\":352,\"likes\":132},{\"name\":\"Minecraft\",\"downloads\":585,\"likes\":418}]}},{\"country\":\"Cape Verde\",\"emoji\":\"🇨🇻\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":882,\"likes\":90},{\"name\":\"League of legends\",\"downloads\":484,\"likes\":312},{\"name\":\"Minecraft\",\"downloads\":765,\"likes\":44}]}},{\"country\":\"Curaçao\",\"emoji\":\"🇨🇼\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":441,\"likes\":198},{\"name\":\"League of legends\",\"downloads\":429,\"likes\":192},{\"name\":\"Minecraft\",\"downloads\":1665,\"likes\":286}]}},{\"country\":\"Cyprus\",\"emoji\":\"🇨🇾\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":105,\"likes\":360},{\"name\":\"League of legends\",\"downloads\":209,\"likes\":372},{\"name\":\"Minecraft\",\"downloads\":1890,\"likes\":66}]}},{\"country\":\"Czechia\",\"emoji\":\"🇨🇿\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":21,\"likes\":558},{\"name\":\"League of legends\",\"downloads\":407,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":855,\"likes\":308}]}},{\"country\":\"Germany\",\"emoji\":\"🇩🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":147,\"likes\":324},{\"name\":\"League of legends\",\"downloads\":231,\"likes\":300},{\"name\":\"Minecraft\",\"downloads\":315,\"likes\":0}]}},{\"country\":\"Djibouti\",\"emoji\":\"🇩🇯\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":609,\"likes\":540},{\"name\":\"League of legends\",\"downloads\":110,\"likes\":276},{\"name\":\"Minecraft\",\"downloads\":1845,\"likes\":176}]}},{\"country\":\"Denmark\",\"emoji\":\"🇩🇰\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":210,\"likes\":234},{\"name\":\"League of legends\",\"downloads\":165,\"likes\":132},{\"name\":\"Minecraft\",\"downloads\":1980,\"likes\":352}]}},{\"country\":\"Dominica\",\"emoji\":\"🇩🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":63,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":319,\"likes\":180},{\"name\":\"Minecraft\",\"downloads\":1620,\"likes\":352}]}},{\"country\":\"Dominican Republic\",\"emoji\":\"🇩🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":777,\"likes\":360},{\"name\":\"League of legends\",\"downloads\":517,\"likes\":312},{\"name\":\"Minecraft\",\"downloads\":810,\"likes\":110}]}},{\"country\":\"Algeria\",\"emoji\":\"🇩🇿\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":987,\"likes\":396},{\"name\":\"League of legends\",\"downloads\":22,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":1845,\"likes\":132}]}},{\"country\":\"Ecuador\",\"emoji\":\"🇪🇨\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":315,\"likes\":540},{\"name\":\"League of legends\",\"downloads\":176,\"likes\":264},{\"name\":\"Minecraft\",\"downloads\":1305,\"likes\":176}]}},{\"country\":\"Estonia\",\"emoji\":\"🇪🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":840,\"likes\":216},{\"name\":\"League of legends\",\"downloads\":176,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":900,\"likes\":308}]}},{\"country\":\"Egypt\",\"emoji\":\"🇪🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":126,\"likes\":18},{\"name\":\"League of legends\",\"downloads\":385,\"likes\":300},{\"name\":\"Minecraft\",\"downloads\":1935,\"likes\":22}]}},{\"country\":\"Western Sahara\",\"emoji\":\"🇪🇭\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":210,\"likes\":234},{\"name\":\"League of legends\",\"downloads\":418,\"likes\":348},{\"name\":\"Minecraft\",\"downloads\":1260,\"likes\":462}]}},{\"country\":\"Eritrea\",\"emoji\":\"🇪🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":378,\"likes\":342},{\"name\":\"League of legends\",\"downloads\":242,\"likes\":96},{\"name\":\"Minecraft\",\"downloads\":1710,\"likes\":242}]}},{\"country\":\"Spain\",\"emoji\":\"🇪🇸\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":693,\"likes\":216},{\"name\":\"League of legends\",\"downloads\":121,\"likes\":252},{\"name\":\"Minecraft\",\"downloads\":180,\"likes\":0}]}},{\"country\":\"Ethiopia\",\"emoji\":\"🇪🇹\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":798,\"likes\":90},{\"name\":\"League of legends\",\"downloads\":297,\"likes\":84},{\"name\":\"Minecraft\",\"downloads\":585,\"likes\":88}]}},{\"country\":\"Finland\",\"emoji\":\"🇫🇮\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":630,\"likes\":396},{\"name\":\"League of legends\",\"downloads\":341,\"likes\":0},{\"name\":\"Minecraft\",\"downloads\":225,\"likes\":374}]}},{\"country\":\"Fiji\",\"emoji\":\"🇫🇯\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":210,\"likes\":414},{\"name\":\"League of legends\",\"downloads\":187,\"likes\":84},{\"name\":\"Minecraft\",\"downloads\":1665,\"likes\":0}]}},{\"country\":\"Falkland Islands\",\"emoji\":\"🇫🇰\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":861,\"likes\":252},{\"name\":\"League of legends\",\"downloads\":495,\"likes\":252},{\"name\":\"Minecraft\",\"downloads\":225,\"likes\":88}]}},{\"country\":\"Micronesia\",\"emoji\":\"🇫🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":126,\"likes\":234},{\"name\":\"League of legends\",\"downloads\":473,\"likes\":288},{\"name\":\"Minecraft\",\"downloads\":1665,\"likes\":550}]}},{\"country\":\"Faroe Islands\",\"emoji\":\"🇫🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":819,\"likes\":126},{\"name\":\"League of legends\",\"downloads\":495,\"likes\":120},{\"name\":\"Minecraft\",\"downloads\":1215,\"likes\":682}]}},{\"country\":\"France\",\"emoji\":\"🇫🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":294,\"likes\":360},{\"name\":\"League of legends\",\"downloads\":0,\"likes\":36},{\"name\":\"Minecraft\",\"downloads\":1440,\"likes\":220}]}},{\"country\":\"Gabon\",\"emoji\":\"🇬🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":336,\"likes\":306},{\"name\":\"League of legends\",\"downloads\":11,\"likes\":72},{\"name\":\"Minecraft\",\"downloads\":180,\"likes\":682}]}},{\"country\":\"United Kingdom\",\"emoji\":\"🇬🇧\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":441,\"likes\":306},{\"name\":\"League of legends\",\"downloads\":275,\"likes\":216},{\"name\":\"Minecraft\",\"downloads\":2025,\"likes\":220}]}},{\"country\":\"Grenada\",\"emoji\":\"🇬🇩\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":609,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":418,\"likes\":192},{\"name\":\"Minecraft\",\"downloads\":1800,\"likes\":88}]}},{\"country\":\"Georgia\",\"emoji\":\"🇬🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":651,\"likes\":468},{\"name\":\"League of legends\",\"downloads\":11,\"likes\":144},{\"name\":\"Minecraft\",\"downloads\":945,\"likes\":396}]}},{\"country\":\"French Guiana\",\"emoji\":\"🇬🇫\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":966,\"likes\":162},{\"name\":\"League of legends\",\"downloads\":506,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":1260,\"likes\":550}]}},{\"country\":\"Guernsey\",\"emoji\":\"🇬🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":588,\"likes\":324},{\"name\":\"League of legends\",\"downloads\":484,\"likes\":120},{\"name\":\"Minecraft\",\"downloads\":2025,\"likes\":660}]}},{\"country\":\"Ghana\",\"emoji\":\"🇬🇭\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":252,\"likes\":288},{\"name\":\"League of legends\",\"downloads\":242,\"likes\":300},{\"name\":\"Minecraft\",\"downloads\":270,\"likes\":396}]}},{\"country\":\"Gibraltar\",\"emoji\":\"🇬🇮\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":105,\"likes\":432},{\"name\":\"League of legends\",\"downloads\":99,\"likes\":96},{\"name\":\"Minecraft\",\"downloads\":90,\"likes\":110}]}},{\"country\":\"Greenland\",\"emoji\":\"🇬🇱\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":672,\"likes\":18},{\"name\":\"League of legends\",\"downloads\":462,\"likes\":24},{\"name\":\"Minecraft\",\"downloads\":1890,\"likes\":44}]}},{\"country\":\"Gambia\",\"emoji\":\"🇬🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":294,\"likes\":198},{\"name\":\"League of legends\",\"downloads\":330,\"likes\":24},{\"name\":\"Minecraft\",\"downloads\":1665,\"likes\":550}]}},{\"country\":\"Guinea\",\"emoji\":\"🇬🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":714,\"likes\":126},{\"name\":\"League of legends\",\"downloads\":506,\"likes\":132},{\"name\":\"Minecraft\",\"downloads\":765,\"likes\":352}]}},{\"country\":\"Guadeloupe\",\"emoji\":\"🇬🇵\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":84,\"likes\":36},{\"name\":\"League of legends\",\"downloads\":154,\"likes\":372},{\"name\":\"Minecraft\",\"downloads\":225,\"likes\":418}]}},{\"country\":\"Equatorial Guinea\",\"emoji\":\"🇬🇶\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":672,\"likes\":342},{\"name\":\"League of legends\",\"downloads\":165,\"likes\":192},{\"name\":\"Minecraft\",\"downloads\":450,\"likes\":198}]}},{\"country\":\"Greece\",\"emoji\":\"🇬🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":252,\"likes\":36},{\"name\":\"League of legends\",\"downloads\":407,\"likes\":324},{\"name\":\"Minecraft\",\"downloads\":225,\"likes\":374}]}},{\"country\":\"Guatemala\",\"emoji\":\"🇬🇹\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":147,\"likes\":144},{\"name\":\"League of legends\",\"downloads\":187,\"likes\":240},{\"name\":\"Minecraft\",\"downloads\":675,\"likes\":660}]}},{\"country\":\"Guam\",\"emoji\":\"🇬🇺\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":357,\"likes\":198},{\"name\":\"League of legends\",\"downloads\":319,\"likes\":192},{\"name\":\"Minecraft\",\"downloads\":315,\"likes\":660}]}},{\"country\":\"Guinea-Bissau\",\"emoji\":\"🇬🇼\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":63,\"likes\":252},{\"name\":\"League of legends\",\"downloads\":231,\"likes\":96},{\"name\":\"Minecraft\",\"downloads\":0,\"likes\":66}]}},{\"country\":\"Guyana\",\"emoji\":\"🇬🇾\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":357,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":341,\"likes\":312},{\"name\":\"Minecraft\",\"downloads\":135,\"likes\":110}]}},{\"country\":\"Hong Kong\",\"emoji\":\"🇭🇰\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":273,\"likes\":144},{\"name\":\"League of legends\",\"downloads\":418,\"likes\":324},{\"name\":\"Minecraft\",\"downloads\":720,\"likes\":352}]}},{\"country\":\"Honduras\",\"emoji\":\"🇭🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":504,\"likes\":198},{\"name\":\"League of legends\",\"downloads\":396,\"likes\":108},{\"name\":\"Minecraft\",\"downloads\":945,\"likes\":374}]}},{\"country\":\"Croatia\",\"emoji\":\"🇭🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":378,\"likes\":522},{\"name\":\"League of legends\",\"downloads\":253,\"likes\":168},{\"name\":\"Minecraft\",\"downloads\":1215,\"likes\":638}]}},{\"country\":\"Haiti\",\"emoji\":\"🇭🇹\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":441,\"likes\":0},{\"name\":\"League of legends\",\"downloads\":198,\"likes\":120},{\"name\":\"Minecraft\",\"downloads\":1170,\"likes\":88}]}},{\"country\":\"Hungary\",\"emoji\":\"🇭🇺\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":315,\"likes\":378},{\"name\":\"League of legends\",\"downloads\":110,\"likes\":324},{\"name\":\"Minecraft\",\"downloads\":720,\"likes\":44}]}},{\"country\":\"Canary Islands\",\"emoji\":\"🇮🇨\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":819,\"likes\":486},{\"name\":\"League of legends\",\"downloads\":77,\"likes\":96},{\"name\":\"Minecraft\",\"downloads\":270,\"likes\":418}]}},{\"country\":\"Indonesia\",\"emoji\":\"🇮🇩\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":273,\"likes\":522},{\"name\":\"League of legends\",\"downloads\":286,\"likes\":348},{\"name\":\"Minecraft\",\"downloads\":630,\"likes\":44}]}},{\"country\":\"Ireland\",\"emoji\":\"🇮🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":147,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":44,\"likes\":156},{\"name\":\"Minecraft\",\"downloads\":315,\"likes\":88}]}},{\"country\":\"Israel\",\"emoji\":\"🇮🇱\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":504,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":319,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":585,\"likes\":660}]}},{\"country\":\"Isle of Man\",\"emoji\":\"🇮🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":798,\"likes\":558},{\"name\":\"League of legends\",\"downloads\":55,\"likes\":264},{\"name\":\"Minecraft\",\"downloads\":630,\"likes\":396}]}},{\"country\":\"India\",\"emoji\":\"🇮🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":756,\"likes\":252},{\"name\":\"League of legends\",\"downloads\":0,\"likes\":360},{\"name\":\"Minecraft\",\"downloads\":1530,\"likes\":88}]}},{\"country\":\"British Indian Ocean Territory\",\"emoji\":\"🇮🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":294,\"likes\":216},{\"name\":\"League of legends\",\"downloads\":374,\"likes\":228},{\"name\":\"Minecraft\",\"downloads\":90,\"likes\":44}]}},{\"country\":\"Iraq\",\"emoji\":\"🇮🇶\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":504,\"likes\":450},{\"name\":\"League of legends\",\"downloads\":154,\"likes\":300},{\"name\":\"Minecraft\",\"downloads\":90,\"likes\":352}]}},{\"country\":\"Iran\",\"emoji\":\"🇮🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":525,\"likes\":252},{\"name\":\"League of legends\",\"downloads\":132,\"likes\":360},{\"name\":\"Minecraft\",\"downloads\":315,\"likes\":154}]}},{\"country\":\"Iceland\",\"emoji\":\"🇮🇸\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":441,\"likes\":108},{\"name\":\"League of legends\",\"downloads\":495,\"likes\":276},{\"name\":\"Minecraft\",\"downloads\":1395,\"likes\":286}]}},{\"country\":\"Italy\",\"emoji\":\"🇮🇹\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":0,\"likes\":522},{\"name\":\"League of legends\",\"downloads\":396,\"likes\":300},{\"name\":\"Minecraft\",\"downloads\":1170,\"likes\":440}]}},{\"country\":\"Jersey\",\"emoji\":\"🇯🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":357,\"likes\":468},{\"name\":\"League of legends\",\"downloads\":418,\"likes\":312},{\"name\":\"Minecraft\",\"downloads\":585,\"likes\":440}]}},{\"country\":\"Jamaica\",\"emoji\":\"🇯🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":63,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":187,\"likes\":348},{\"name\":\"Minecraft\",\"downloads\":2025,\"likes\":528}]}},{\"country\":\"Jordan\",\"emoji\":\"🇯🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":525,\"likes\":234},{\"name\":\"League of legends\",\"downloads\":418,\"likes\":240},{\"name\":\"Minecraft\",\"downloads\":810,\"likes\":286}]}},{\"country\":\"Japan\",\"emoji\":\"🇯🇵\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":651,\"likes\":450},{\"name\":\"League of legends\",\"downloads\":440,\"likes\":168},{\"name\":\"Minecraft\",\"downloads\":1485,\"likes\":308}]}},{\"country\":\"Kenya\",\"emoji\":\"🇰🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":357,\"likes\":72},{\"name\":\"League of legends\",\"downloads\":110,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":2025,\"likes\":550}]}},{\"country\":\"Kyrgyzstan\",\"emoji\":\"🇰🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":882,\"likes\":108},{\"name\":\"League of legends\",\"downloads\":220,\"likes\":324},{\"name\":\"Minecraft\",\"downloads\":990,\"likes\":550}]}},{\"country\":\"Cambodia\",\"emoji\":\"🇰🇭\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":147,\"likes\":468},{\"name\":\"League of legends\",\"downloads\":88,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":2115,\"likes\":110}]}},{\"country\":\"Kiribati\",\"emoji\":\"🇰🇮\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":966,\"likes\":72},{\"name\":\"League of legends\",\"downloads\":99,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":1620,\"likes\":374}]}},{\"country\":\"Comoros\",\"emoji\":\"🇰🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":399,\"likes\":216},{\"name\":\"League of legends\",\"downloads\":396,\"likes\":264},{\"name\":\"Minecraft\",\"downloads\":1710,\"likes\":264}]}},{\"country\":\"St. Kitts & Nevis\",\"emoji\":\"🇰🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":399,\"likes\":270},{\"name\":\"League of legends\",\"downloads\":176,\"likes\":228},{\"name\":\"Minecraft\",\"downloads\":540,\"likes\":396}]}},{\"country\":\"North Korea\",\"emoji\":\"🇰🇵\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":273,\"likes\":396},{\"name\":\"League of legends\",\"downloads\":319,\"likes\":168},{\"name\":\"Minecraft\",\"downloads\":2070,\"likes\":616}]}},{\"country\":\"South Korea\",\"emoji\":\"🇰🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":0,\"likes\":270},{\"name\":\"League of legends\",\"downloads\":517,\"likes\":156},{\"name\":\"Minecraft\",\"downloads\":1350,\"likes\":616}]}},{\"country\":\"Kuwait\",\"emoji\":\"🇰🇼\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":819,\"likes\":144},{\"name\":\"League of legends\",\"downloads\":44,\"likes\":336},{\"name\":\"Minecraft\",\"downloads\":2070,\"likes\":506}]}},{\"country\":\"Cayman Islands\",\"emoji\":\"🇰🇾\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":588,\"likes\":414},{\"name\":\"League of legends\",\"downloads\":220,\"likes\":72},{\"name\":\"Minecraft\",\"downloads\":720,\"likes\":462}]}},{\"country\":\"Kazakhstan\",\"emoji\":\"🇰🇿\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":231,\"likes\":0},{\"name\":\"League of legends\",\"downloads\":88,\"likes\":36},{\"name\":\"Minecraft\",\"downloads\":540,\"likes\":286}]}},{\"country\":\"Laos\",\"emoji\":\"🇱🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":420,\"likes\":90},{\"name\":\"League of legends\",\"downloads\":110,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":1080,\"likes\":132}]}},{\"country\":\"Lebanon\",\"emoji\":\"🇱🇧\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":84,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":143,\"likes\":324},{\"name\":\"Minecraft\",\"downloads\":315,\"likes\":242}]}},{\"country\":\"St. Lucia\",\"emoji\":\"🇱🇨\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":735,\"likes\":414},{\"name\":\"League of legends\",\"downloads\":44,\"likes\":0},{\"name\":\"Minecraft\",\"downloads\":360,\"likes\":440}]}},{\"country\":\"Liechtenstein\",\"emoji\":\"🇱🇮\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":651,\"likes\":36},{\"name\":\"League of legends\",\"downloads\":275,\"likes\":228},{\"name\":\"Minecraft\",\"downloads\":405,\"likes\":418}]}},{\"country\":\"Sri Lanka\",\"emoji\":\"🇱🇰\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":63,\"likes\":72},{\"name\":\"League of legends\",\"downloads\":44,\"likes\":84},{\"name\":\"Minecraft\",\"downloads\":1800,\"likes\":616}]}},{\"country\":\"Liberia\",\"emoji\":\"🇱🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":840,\"likes\":504},{\"name\":\"League of legends\",\"downloads\":22,\"likes\":312},{\"name\":\"Minecraft\",\"downloads\":90,\"likes\":220}]}},{\"country\":\"Lesotho\",\"emoji\":\"🇱🇸\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":315,\"likes\":198},{\"name\":\"League of legends\",\"downloads\":198,\"likes\":180},{\"name\":\"Minecraft\",\"downloads\":1440,\"likes\":242}]}},{\"country\":\"Lithuania\",\"emoji\":\"🇱🇹\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":651,\"likes\":342},{\"name\":\"League of legends\",\"downloads\":220,\"likes\":312},{\"name\":\"Minecraft\",\"downloads\":1395,\"likes\":418}]}},{\"country\":\"Luxembourg\",\"emoji\":\"🇱🇺\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":420,\"likes\":360},{\"name\":\"League of legends\",\"downloads\":33,\"likes\":96},{\"name\":\"Minecraft\",\"downloads\":1575,\"likes\":330}]}},{\"country\":\"Latvia\",\"emoji\":\"🇱🇻\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":189,\"likes\":504},{\"name\":\"League of legends\",\"downloads\":286,\"likes\":36},{\"name\":\"Minecraft\",\"downloads\":450,\"likes\":198}]}},{\"country\":\"Libya\",\"emoji\":\"🇱🇾\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":924,\"likes\":504},{\"name\":\"League of legends\",\"downloads\":462,\"likes\":24},{\"name\":\"Minecraft\",\"downloads\":1980,\"likes\":506}]}},{\"country\":\"Morocco\",\"emoji\":\"🇲🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":357,\"likes\":522},{\"name\":\"League of legends\",\"downloads\":385,\"likes\":192},{\"name\":\"Minecraft\",\"downloads\":540,\"likes\":176}]}},{\"country\":\"Monaco\",\"emoji\":\"🇲🇨\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":231,\"likes\":324},{\"name\":\"League of legends\",\"downloads\":462,\"likes\":312},{\"name\":\"Minecraft\",\"downloads\":1080,\"likes\":506}]}},{\"country\":\"Moldova\",\"emoji\":\"🇲🇩\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":378,\"likes\":432},{\"name\":\"League of legends\",\"downloads\":165,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":2115,\"likes\":352}]}},{\"country\":\"Montenegro\",\"emoji\":\"🇲🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":903,\"likes\":270},{\"name\":\"League of legends\",\"downloads\":33,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":1800,\"likes\":374}]}},{\"country\":\"St. Martin\",\"emoji\":\"🇲🇫\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":798,\"likes\":486},{\"name\":\"League of legends\",\"downloads\":66,\"likes\":264},{\"name\":\"Minecraft\",\"downloads\":1125,\"likes\":440}]}},{\"country\":\"Madagascar\",\"emoji\":\"🇲🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":714,\"likes\":558},{\"name\":\"League of legends\",\"downloads\":110,\"likes\":240},{\"name\":\"Minecraft\",\"downloads\":900,\"likes\":374}]}},{\"country\":\"Marshall Islands\",\"emoji\":\"🇲🇭\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":378,\"likes\":414},{\"name\":\"League of legends\",\"downloads\":176,\"likes\":144},{\"name\":\"Minecraft\",\"downloads\":765,\"likes\":572}]}},{\"country\":\"Macedonia\",\"emoji\":\"🇲🇰\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":357,\"likes\":468},{\"name\":\"League of legends\",\"downloads\":22,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":1305,\"likes\":440}]}},{\"country\":\"Mali\",\"emoji\":\"🇲🇱\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":231,\"likes\":270},{\"name\":\"League of legends\",\"downloads\":264,\"likes\":36},{\"name\":\"Minecraft\",\"downloads\":1620,\"likes\":550}]}},{\"country\":\"Myanmar\",\"emoji\":\"🇲🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":903,\"likes\":522},{\"name\":\"League of legends\",\"downloads\":352,\"likes\":120},{\"name\":\"Minecraft\",\"downloads\":225,\"likes\":616}]}},{\"country\":\"Mongolia\",\"emoji\":\"🇲🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":735,\"likes\":360},{\"name\":\"League of legends\",\"downloads\":231,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":1080,\"likes\":330}]}},{\"country\":\"Macau\",\"emoji\":\"🇲🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":21,\"likes\":108},{\"name\":\"League of legends\",\"downloads\":220,\"likes\":36},{\"name\":\"Minecraft\",\"downloads\":1035,\"likes\":88}]}},{\"country\":\"Northern Mariana Islands\",\"emoji\":\"🇲🇵\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":924,\"likes\":414},{\"name\":\"League of legends\",\"downloads\":22,\"likes\":348},{\"name\":\"Minecraft\",\"downloads\":1755,\"likes\":22}]}},{\"country\":\"Martinique\",\"emoji\":\"🇲🇶\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":882,\"likes\":36},{\"name\":\"League of legends\",\"downloads\":484,\"likes\":192},{\"name\":\"Minecraft\",\"downloads\":630,\"likes\":572}]}},{\"country\":\"Mauritania\",\"emoji\":\"🇲🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":567,\"likes\":126},{\"name\":\"League of legends\",\"downloads\":330,\"likes\":228},{\"name\":\"Minecraft\",\"downloads\":1980,\"likes\":572}]}},{\"country\":\"Montserrat\",\"emoji\":\"🇲🇸\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":378,\"likes\":36},{\"name\":\"League of legends\",\"downloads\":418,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":1440,\"likes\":572}]}},{\"country\":\"Malta\",\"emoji\":\"🇲🇹\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":63,\"likes\":234},{\"name\":\"League of legends\",\"downloads\":451,\"likes\":348},{\"name\":\"Minecraft\",\"downloads\":990,\"likes\":264}]}},{\"country\":\"Mauritius\",\"emoji\":\"🇲🇺\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":210,\"likes\":126},{\"name\":\"League of legends\",\"downloads\":484,\"likes\":24},{\"name\":\"Minecraft\",\"downloads\":1980,\"likes\":308}]}},{\"country\":\"Maldives\",\"emoji\":\"🇲🇻\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":105,\"likes\":144},{\"name\":\"League of legends\",\"downloads\":121,\"likes\":132},{\"name\":\"Minecraft\",\"downloads\":1485,\"likes\":198}]}},{\"country\":\"Malawi\",\"emoji\":\"🇲🇼\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":735,\"likes\":378},{\"name\":\"League of legends\",\"downloads\":440,\"likes\":120},{\"name\":\"Minecraft\",\"downloads\":855,\"likes\":264}]}},{\"country\":\"Mexico\",\"emoji\":\"🇲🇽\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":441,\"likes\":540},{\"name\":\"League of legends\",\"downloads\":352,\"likes\":264},{\"name\":\"Minecraft\",\"downloads\":1530,\"likes\":638}]}},{\"country\":\"Malaysia\",\"emoji\":\"🇲🇾\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":126,\"likes\":378},{\"name\":\"League of legends\",\"downloads\":44,\"likes\":372},{\"name\":\"Minecraft\",\"downloads\":1980,\"likes\":286}]}},{\"country\":\"Mozambique\",\"emoji\":\"🇲🇿\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":819,\"likes\":0},{\"name\":\"League of legends\",\"downloads\":143,\"likes\":72},{\"name\":\"Minecraft\",\"downloads\":540,\"likes\":396}]}},{\"country\":\"Namibia\",\"emoji\":\"🇳🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":420,\"likes\":72},{\"name\":\"League of legends\",\"downloads\":209,\"likes\":60},{\"name\":\"Minecraft\",\"downloads\":2025,\"likes\":682}]}},{\"country\":\"New Caledonia\",\"emoji\":\"🇳🇨\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":189,\"likes\":270},{\"name\":\"League of legends\",\"downloads\":132,\"likes\":108},{\"name\":\"Minecraft\",\"downloads\":180,\"likes\":242}]}},{\"country\":\"Niger\",\"emoji\":\"🇳🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":882,\"likes\":126},{\"name\":\"League of legends\",\"downloads\":374,\"likes\":324},{\"name\":\"Minecraft\",\"downloads\":225,\"likes\":374}]}},{\"country\":\"Norfolk Island\",\"emoji\":\"🇳🇫\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":315,\"likes\":288},{\"name\":\"League of legends\",\"downloads\":374,\"likes\":276},{\"name\":\"Minecraft\",\"downloads\":855,\"likes\":506}]}},{\"country\":\"Nigeria\",\"emoji\":\"🇳🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":357,\"likes\":378},{\"name\":\"League of legends\",\"downloads\":0,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":1215,\"likes\":132}]}},{\"country\":\"Nicaragua\",\"emoji\":\"🇳🇮\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":567,\"likes\":72},{\"name\":\"League of legends\",\"downloads\":451,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":855,\"likes\":22}]}},{\"country\":\"Netherlands\",\"emoji\":\"🇳🇱\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":714,\"likes\":0},{\"name\":\"League of legends\",\"downloads\":451,\"likes\":132},{\"name\":\"Minecraft\",\"downloads\":675,\"likes\":374}]}},{\"country\":\"Norway\",\"emoji\":\"🇳🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":714,\"likes\":162},{\"name\":\"League of legends\",\"downloads\":55,\"likes\":72},{\"name\":\"Minecraft\",\"downloads\":1935,\"likes\":286}]}},{\"country\":\"Nepal\",\"emoji\":\"🇳🇵\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":105,\"likes\":252},{\"name\":\"League of legends\",\"downloads\":330,\"likes\":156},{\"name\":\"Minecraft\",\"downloads\":90,\"likes\":352}]}},{\"country\":\"Nauru\",\"emoji\":\"🇳🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":252,\"likes\":468},{\"name\":\"League of legends\",\"downloads\":22,\"likes\":216},{\"name\":\"Minecraft\",\"downloads\":1935,\"likes\":264}]}},{\"country\":\"Niue\",\"emoji\":\"🇳🇺\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":693,\"likes\":90},{\"name\":\"League of legends\",\"downloads\":297,\"likes\":312},{\"name\":\"Minecraft\",\"downloads\":495,\"likes\":572}]}},{\"country\":\"New Zealand\",\"emoji\":\"🇳🇿\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":861,\"likes\":162},{\"name\":\"League of legends\",\"downloads\":506,\"likes\":72},{\"name\":\"Minecraft\",\"downloads\":1800,\"likes\":242}]}},{\"country\":\"Oman\",\"emoji\":\"🇴🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":189,\"likes\":504},{\"name\":\"League of legends\",\"downloads\":220,\"likes\":192},{\"name\":\"Minecraft\",\"downloads\":1485,\"likes\":506}]}},{\"country\":\"Panama\",\"emoji\":\"🇵🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":399,\"likes\":234},{\"name\":\"League of legends\",\"downloads\":319,\"likes\":132},{\"name\":\"Minecraft\",\"downloads\":45,\"likes\":616}]}},{\"country\":\"Peru\",\"emoji\":\"🇵🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":903,\"likes\":324},{\"name\":\"League of legends\",\"downloads\":0,\"likes\":360},{\"name\":\"Minecraft\",\"downloads\":945,\"likes\":396}]}},{\"country\":\"French Polynesia\",\"emoji\":\"🇵🇫\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":168,\"likes\":486},{\"name\":\"League of legends\",\"downloads\":11,\"likes\":360},{\"name\":\"Minecraft\",\"downloads\":855,\"likes\":308}]}},{\"country\":\"Papua New Guinea\",\"emoji\":\"🇵🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":84,\"likes\":216},{\"name\":\"League of legends\",\"downloads\":363,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":1440,\"likes\":572}]}},{\"country\":\"Philippines\",\"emoji\":\"🇵🇭\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":357,\"likes\":378},{\"name\":\"League of legends\",\"downloads\":462,\"likes\":252},{\"name\":\"Minecraft\",\"downloads\":720,\"likes\":0}]}},{\"country\":\"Pakistan\",\"emoji\":\"🇵🇰\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":168,\"likes\":126},{\"name\":\"League of legends\",\"downloads\":275,\"likes\":180},{\"name\":\"Minecraft\",\"downloads\":1125,\"likes\":264}]}},{\"country\":\"Poland\",\"emoji\":\"🇵🇱\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":252,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":451,\"likes\":300},{\"name\":\"Minecraft\",\"downloads\":1575,\"likes\":550}]}},{\"country\":\"St. Pierre & Miquelon\",\"emoji\":\"🇵🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":441,\"likes\":216},{\"name\":\"League of legends\",\"downloads\":88,\"likes\":192},{\"name\":\"Minecraft\",\"downloads\":1980,\"likes\":286}]}},{\"country\":\"Pitcairn Islands\",\"emoji\":\"🇵🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":546,\"likes\":306},{\"name\":\"League of legends\",\"downloads\":121,\"likes\":360},{\"name\":\"Minecraft\",\"downloads\":1440,\"likes\":682}]}},{\"country\":\"Puerto Rico\",\"emoji\":\"🇵🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":336,\"likes\":126},{\"name\":\"League of legends\",\"downloads\":495,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":765,\"likes\":242}]}},{\"country\":\"Palestinian Territories\",\"emoji\":\"🇵🇸\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":756,\"likes\":0},{\"name\":\"League of legends\",\"downloads\":286,\"likes\":96},{\"name\":\"Minecraft\",\"downloads\":180,\"likes\":352}]}},{\"country\":\"Portugal\",\"emoji\":\"🇵🇹\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":420,\"likes\":306},{\"name\":\"League of legends\",\"downloads\":132,\"likes\":372},{\"name\":\"Minecraft\",\"downloads\":945,\"likes\":308}]}},{\"country\":\"Palau\",\"emoji\":\"🇵🇼\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":525,\"likes\":468},{\"name\":\"League of legends\",\"downloads\":143,\"likes\":168},{\"name\":\"Minecraft\",\"downloads\":405,\"likes\":308}]}},{\"country\":\"Paraguay\",\"emoji\":\"🇵🇾\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":756,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":506,\"likes\":276},{\"name\":\"Minecraft\",\"downloads\":810,\"likes\":0}]}},{\"country\":\"Qatar\",\"emoji\":\"🇶🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":945,\"likes\":378},{\"name\":\"League of legends\",\"downloads\":297,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":675,\"likes\":352}]}},{\"country\":\"Réunion\",\"emoji\":\"🇷🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":273,\"likes\":504},{\"name\":\"League of legends\",\"downloads\":0,\"likes\":180},{\"name\":\"Minecraft\",\"downloads\":990,\"likes\":550}]}},{\"country\":\"Romania\",\"emoji\":\"🇷🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":777,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":484,\"likes\":336},{\"name\":\"Minecraft\",\"downloads\":1665,\"likes\":88}]}},{\"country\":\"Serbia\",\"emoji\":\"🇷🇸\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":903,\"likes\":486},{\"name\":\"League of legends\",\"downloads\":154,\"likes\":288},{\"name\":\"Minecraft\",\"downloads\":1125,\"likes\":198}]}},{\"country\":\"Russia\",\"emoji\":\"🇷🇺\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":672,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":275,\"likes\":336},{\"name\":\"Minecraft\",\"downloads\":1575,\"likes\":308}]}},{\"country\":\"Rwanda\",\"emoji\":\"🇷🇼\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":735,\"likes\":468},{\"name\":\"League of legends\",\"downloads\":66,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":1710,\"likes\":462}]}},{\"country\":\"Saudi Arabia\",\"emoji\":\"🇸🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":651,\"likes\":162},{\"name\":\"League of legends\",\"downloads\":132,\"likes\":276},{\"name\":\"Minecraft\",\"downloads\":0,\"likes\":264}]}},{\"country\":\"Solomon Islands\",\"emoji\":\"🇸🇧\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":588,\"likes\":0},{\"name\":\"League of legends\",\"downloads\":418,\"likes\":240},{\"name\":\"Minecraft\",\"downloads\":900,\"likes\":198}]}},{\"country\":\"Seychelles\",\"emoji\":\"🇸🇨\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":798,\"likes\":522},{\"name\":\"League of legends\",\"downloads\":341,\"likes\":120},{\"name\":\"Minecraft\",\"downloads\":45,\"likes\":616}]}},{\"country\":\"Sudan\",\"emoji\":\"🇸🇩\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":777,\"likes\":288},{\"name\":\"League of legends\",\"downloads\":176,\"likes\":312},{\"name\":\"Minecraft\",\"downloads\":450,\"likes\":242}]}},{\"country\":\"Sweden\",\"emoji\":\"🇸🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":714,\"likes\":252},{\"name\":\"League of legends\",\"downloads\":99,\"likes\":228},{\"name\":\"Minecraft\",\"downloads\":360,\"likes\":242}]}},{\"country\":\"Singapore\",\"emoji\":\"🇸🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":525,\"likes\":72},{\"name\":\"League of legends\",\"downloads\":396,\"likes\":156},{\"name\":\"Minecraft\",\"downloads\":2115,\"likes\":550}]}},{\"country\":\"St. Helena\",\"emoji\":\"🇸🇭\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":399,\"likes\":360},{\"name\":\"League of legends\",\"downloads\":495,\"likes\":348},{\"name\":\"Minecraft\",\"downloads\":1620,\"likes\":352}]}},{\"country\":\"Slovenia\",\"emoji\":\"🇸🇮\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":0,\"likes\":180},{\"name\":\"League of legends\",\"downloads\":429,\"likes\":156},{\"name\":\"Minecraft\",\"downloads\":2025,\"likes\":528}]}},{\"country\":\"Svalbard & Jan Mayen\",\"emoji\":\"🇸🇯\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":924,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":275,\"likes\":276},{\"name\":\"Minecraft\",\"downloads\":225,\"likes\":264}]}},{\"country\":\"Slovakia\",\"emoji\":\"🇸🇰\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":84,\"likes\":288},{\"name\":\"League of legends\",\"downloads\":121,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":945,\"likes\":44}]}},{\"country\":\"Sierra Leone\",\"emoji\":\"🇸🇱\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":336,\"likes\":342},{\"name\":\"League of legends\",\"downloads\":484,\"likes\":228},{\"name\":\"Minecraft\",\"downloads\":1125,\"likes\":352}]}},{\"country\":\"San Marino\",\"emoji\":\"🇸🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":882,\"likes\":324},{\"name\":\"League of legends\",\"downloads\":11,\"likes\":252},{\"name\":\"Minecraft\",\"downloads\":765,\"likes\":154}]}},{\"country\":\"Senegal\",\"emoji\":\"🇸🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":189,\"likes\":558},{\"name\":\"League of legends\",\"downloads\":110,\"likes\":192},{\"name\":\"Minecraft\",\"downloads\":630,\"likes\":308}]}},{\"country\":\"Somalia\",\"emoji\":\"🇸🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":546,\"likes\":144},{\"name\":\"League of legends\",\"downloads\":319,\"likes\":300},{\"name\":\"Minecraft\",\"downloads\":1665,\"likes\":440}]}},{\"country\":\"Suriname\",\"emoji\":\"🇸🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":273,\"likes\":486},{\"name\":\"League of legends\",\"downloads\":231,\"likes\":264},{\"name\":\"Minecraft\",\"downloads\":450,\"likes\":638}]}},{\"country\":\"South Sudan\",\"emoji\":\"🇸🇸\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":210,\"likes\":126},{\"name\":\"League of legends\",\"downloads\":484,\"likes\":312},{\"name\":\"Minecraft\",\"downloads\":2025,\"likes\":528}]}},{\"country\":\"São Tomé & Príncipe\",\"emoji\":\"🇸🇹\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":861,\"likes\":0},{\"name\":\"League of legends\",\"downloads\":352,\"likes\":228},{\"name\":\"Minecraft\",\"downloads\":315,\"likes\":528}]}},{\"country\":\"El Salvador\",\"emoji\":\"🇸🇻\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":42,\"likes\":342},{\"name\":\"League of legends\",\"downloads\":517,\"likes\":336},{\"name\":\"Minecraft\",\"downloads\":405,\"likes\":528}]}},{\"country\":\"Sint Maarten\",\"emoji\":\"🇸🇽\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":567,\"likes\":252},{\"name\":\"League of legends\",\"downloads\":253,\"likes\":336},{\"name\":\"Minecraft\",\"downloads\":1080,\"likes\":462}]}},{\"country\":\"Syria\",\"emoji\":\"🇸🇾\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":525,\"likes\":216},{\"name\":\"League of legends\",\"downloads\":154,\"likes\":120},{\"name\":\"Minecraft\",\"downloads\":45,\"likes\":484}]}},{\"country\":\"Swaziland\",\"emoji\":\"🇸🇿\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":735,\"likes\":36},{\"name\":\"League of legends\",\"downloads\":0,\"likes\":252},{\"name\":\"Minecraft\",\"downloads\":360,\"likes\":462}]}},{\"country\":\"Tristan da Cunha\",\"emoji\":\"🇹🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":966,\"likes\":270},{\"name\":\"League of legends\",\"downloads\":451,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":1800,\"likes\":660}]}},{\"country\":\"Turks & Caicos Islands\",\"emoji\":\"🇹🇨\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":336,\"likes\":108},{\"name\":\"League of legends\",\"downloads\":506,\"likes\":264},{\"name\":\"Minecraft\",\"downloads\":360,\"likes\":352}]}},{\"country\":\"Chad\",\"emoji\":\"🇹🇩\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":504,\"likes\":432},{\"name\":\"League of legends\",\"downloads\":319,\"likes\":36},{\"name\":\"Minecraft\",\"downloads\":135,\"likes\":374}]}},{\"country\":\"French Southern Territories\",\"emoji\":\"🇹🇫\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":672,\"likes\":414},{\"name\":\"League of legends\",\"downloads\":275,\"likes\":372},{\"name\":\"Minecraft\",\"downloads\":1305,\"likes\":154}]}},{\"country\":\"Togo\",\"emoji\":\"🇹🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":861,\"likes\":234},{\"name\":\"League of legends\",\"downloads\":33,\"likes\":24},{\"name\":\"Minecraft\",\"downloads\":945,\"likes\":0}]}},{\"country\":\"Thailand\",\"emoji\":\"🇹🇭\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":840,\"likes\":36},{\"name\":\"League of legends\",\"downloads\":352,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":315,\"likes\":286}]}},{\"country\":\"Tajikistan\",\"emoji\":\"🇹🇯\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":546,\"likes\":18},{\"name\":\"League of legends\",\"downloads\":352,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":945,\"likes\":264}]}},{\"country\":\"Tokelau\",\"emoji\":\"🇹🇰\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":189,\"likes\":360},{\"name\":\"League of legends\",\"downloads\":341,\"likes\":156},{\"name\":\"Minecraft\",\"downloads\":90,\"likes\":330}]}},{\"country\":\"Timor-Leste\",\"emoji\":\"🇹🇱\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":252,\"likes\":540},{\"name\":\"League of legends\",\"downloads\":44,\"likes\":12},{\"name\":\"Minecraft\",\"downloads\":2070,\"likes\":352}]}},{\"country\":\"Turkmenistan\",\"emoji\":\"🇹🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":441,\"likes\":504},{\"name\":\"League of legends\",\"downloads\":275,\"likes\":288},{\"name\":\"Minecraft\",\"downloads\":495,\"likes\":330}]}},{\"country\":\"Tunisia\",\"emoji\":\"🇹🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":903,\"likes\":306},{\"name\":\"League of legends\",\"downloads\":154,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":900,\"likes\":220}]}},{\"country\":\"Tonga\",\"emoji\":\"🇹🇴\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":126,\"likes\":252},{\"name\":\"League of legends\",\"downloads\":429,\"likes\":120},{\"name\":\"Minecraft\",\"downloads\":2070,\"likes\":352}]}},{\"country\":\"Turkey\",\"emoji\":\"🇹🇷\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":336,\"likes\":198},{\"name\":\"League of legends\",\"downloads\":77,\"likes\":60},{\"name\":\"Minecraft\",\"downloads\":720,\"likes\":506}]}},{\"country\":\"Trinidad & Tobago\",\"emoji\":\"🇹🇹\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":357,\"likes\":90},{\"name\":\"League of legends\",\"downloads\":396,\"likes\":0},{\"name\":\"Minecraft\",\"downloads\":765,\"likes\":462}]}},{\"country\":\"Tuvalu\",\"emoji\":\"🇹🇻\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":42,\"likes\":234},{\"name\":\"League of legends\",\"downloads\":11,\"likes\":0},{\"name\":\"Minecraft\",\"downloads\":90,\"likes\":242}]}},{\"country\":\"Taiwan\",\"emoji\":\"🇹🇼\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":924,\"likes\":270},{\"name\":\"League of legends\",\"downloads\":55,\"likes\":24},{\"name\":\"Minecraft\",\"downloads\":1170,\"likes\":374}]}},{\"country\":\"Tanzania\",\"emoji\":\"🇹🇿\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":273,\"likes\":18},{\"name\":\"League of legends\",\"downloads\":418,\"likes\":276},{\"name\":\"Minecraft\",\"downloads\":1935,\"likes\":176}]}},{\"country\":\"Ukraine\",\"emoji\":\"🇺🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":735,\"likes\":324},{\"name\":\"League of legends\",\"downloads\":462,\"likes\":0},{\"name\":\"Minecraft\",\"downloads\":1260,\"likes\":638}]}},{\"country\":\"Uganda\",\"emoji\":\"🇺🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":63,\"likes\":144},{\"name\":\"League of legends\",\"downloads\":517,\"likes\":372},{\"name\":\"Minecraft\",\"downloads\":1035,\"likes\":682}]}},{\"country\":\"U.S. Outlying Islands\",\"emoji\":\"🇺🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":567,\"likes\":468},{\"name\":\"League of legends\",\"downloads\":330,\"likes\":348},{\"name\":\"Minecraft\",\"downloads\":630,\"likes\":550}]}},{\"country\":\"United Nations\",\"emoji\":\"🇺🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":147,\"likes\":18},{\"name\":\"League of legends\",\"downloads\":407,\"likes\":24},{\"name\":\"Minecraft\",\"downloads\":2025,\"likes\":132}]}},{\"country\":\"United States\",\"emoji\":\"🇺🇸\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":252,\"likes\":72},{\"name\":\"League of legends\",\"downloads\":330,\"likes\":216},{\"name\":\"Minecraft\",\"downloads\":1755,\"likes\":154}]}},{\"country\":\"Uruguay\",\"emoji\":\"🇺🇾\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":420,\"likes\":342},{\"name\":\"League of legends\",\"downloads\":132,\"likes\":96},{\"name\":\"Minecraft\",\"downloads\":1035,\"likes\":440}]}},{\"country\":\"Uzbekistan\",\"emoji\":\"🇺🇿\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":210,\"likes\":324},{\"name\":\"League of legends\",\"downloads\":253,\"likes\":204},{\"name\":\"Minecraft\",\"downloads\":1935,\"likes\":220}]}},{\"country\":\"Vatican City\",\"emoji\":\"🇻🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":441,\"likes\":54},{\"name\":\"League of legends\",\"downloads\":44,\"likes\":96},{\"name\":\"Minecraft\",\"downloads\":1395,\"likes\":154}]}},{\"country\":\"St. Vincent & Grenadines\",\"emoji\":\"🇻🇨\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":210,\"likes\":324},{\"name\":\"League of legends\",\"downloads\":22,\"likes\":240},{\"name\":\"Minecraft\",\"downloads\":1260,\"likes\":198}]}},{\"country\":\"Venezuela\",\"emoji\":\"🇻🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":294,\"likes\":414},{\"name\":\"League of legends\",\"downloads\":341,\"likes\":108},{\"name\":\"Minecraft\",\"downloads\":225,\"likes\":44}]}},{\"country\":\"British Virgin Islands\",\"emoji\":\"🇻🇬\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":756,\"likes\":540},{\"name\":\"League of legends\",\"downloads\":506,\"likes\":276},{\"name\":\"Minecraft\",\"downloads\":2025,\"likes\":308}]}},{\"country\":\"U.S. Virgin Islands\",\"emoji\":\"🇻🇮\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":294,\"likes\":306},{\"name\":\"League of legends\",\"downloads\":110,\"likes\":300},{\"name\":\"Minecraft\",\"downloads\":1755,\"likes\":44}]}},{\"country\":\"Vietnam\",\"emoji\":\"🇻🇳\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":945,\"likes\":522},{\"name\":\"League of legends\",\"downloads\":154,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":1710,\"likes\":44}]}},{\"country\":\"Vanuatu\",\"emoji\":\"🇻🇺\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":966,\"likes\":306},{\"name\":\"League of legends\",\"downloads\":110,\"likes\":264},{\"name\":\"Minecraft\",\"downloads\":405,\"likes\":44}]}},{\"country\":\"Wallis & Futuna\",\"emoji\":\"🇼🇫\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":840,\"likes\":378},{\"name\":\"League of legends\",\"downloads\":440,\"likes\":96},{\"name\":\"Minecraft\",\"downloads\":1575,\"likes\":330}]}},{\"country\":\"Samoa\",\"emoji\":\"🇼🇸\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":315,\"likes\":126},{\"name\":\"League of legends\",\"downloads\":407,\"likes\":48},{\"name\":\"Minecraft\",\"downloads\":270,\"likes\":506}]}},{\"country\":\"Kosovo\",\"emoji\":\"🇽🇰\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":315,\"likes\":144},{\"name\":\"League of legends\",\"downloads\":22,\"likes\":72},{\"name\":\"Minecraft\",\"downloads\":1575,\"likes\":638}]}},{\"country\":\"Yemen\",\"emoji\":\"🇾🇪\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":210,\"likes\":90},{\"name\":\"League of legends\",\"downloads\":341,\"likes\":216},{\"name\":\"Minecraft\",\"downloads\":0,\"likes\":484}]}},{\"country\":\"South Africa\",\"emoji\":\"🇿🇦\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":798,\"likes\":342},{\"name\":\"League of legends\",\"downloads\":429,\"likes\":120},{\"name\":\"Minecraft\",\"downloads\":90,\"likes\":550}]}},{\"country\":\"Zambia\",\"emoji\":\"🇿🇲\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":567,\"likes\":18},{\"name\":\"League of legends\",\"downloads\":484,\"likes\":348},{\"name\":\"Minecraft\",\"downloads\":225,\"likes\":638}]}},{\"country\":\"Zimbabwe\",\"emoji\":\"🇿🇼\",\"trends\":{\"games\":[{\"name\":\"Fortnite\",\"downloads\":819,\"likes\":162},{\"name\":\"League of legends\",\"downloads\":110,\"likes\":360},{\"name\":\"Minecraft\",\"downloads\":225,\"likes\":22}]}}]");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _lib_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/countries */ "./lib/countries.js");
var _jsxFileName = "/Users/quanvihong/Desktop/cultural-lens-v2/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Index({
  randomCountry
}) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }), __jsx(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    country: randomCountry.name,
    emoji: randomCountry.emoji,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }));
}
async function getStaticProps() {
  const randomCountry = Object(_lib_countries__WEBPACK_IMPORTED_MODULE_3__["getRandomCountry"])();
  return {
    props: {
      randomCountry: randomCountry
    }
  };
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/quanvihong/Desktop/cultural-lens-v2/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map