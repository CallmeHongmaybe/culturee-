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
  console.log(`country=${country}`);
  return __jsx("main", {
    className: "jsx-1754473062" + " " + "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1754473062" + " " + "country",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/country/[country]",
    as: `/country/${country}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-1754473062",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, country))), __jsx("span", {
    className: "jsx-1754473062" + " " + "emoji",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, emoji), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1754473062",
    __self: this
  }, "main.jsx-1754473062{width:90%;max-width:900px;margin:300px auto;text-align:center;}.country.jsx-1754473062{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.emoji.jsx-1754473062{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFudmlob25nL0Rlc2t0b3AvY3VsdHVyYWwtbGVucy12Mi9jb21wb25lbnRzL1RpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF3QixBQUcyQixBQU1VLEFBTUcsVUFYUCxVQU1GLEdBTUEsR0FYSSxRQU1ILEdBTUEsT0FYRyxLQU1FLEdBTXhCLFVBWEEsT0FNQSIsImZpbGUiOiIvVXNlcnMvcXVhbnZpaG9uZy9EZXNrdG9wL2N1bHR1cmFsLWxlbnMtdjIvY29tcG9uZW50cy9UaXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7IFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaXRsZSh7Y291bnRyeSwgZW1vaml9KSB7XG4gICAgY29uc29sZS5sb2coYGNvdW50cnk9JHtjb3VudHJ5fWApOyBcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudHJ5XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY291bnRyeS9bY291bnRyeV1cIiBhcz17YC9jb3VudHJ5LyR7Y291bnRyeX1gfT5cbiAgICAgICAgICAgIDxhPntjb3VudHJ5fTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW1vamlcIj57ZW1vaml9PC9zcGFuPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMDBweCBhdXRvO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2UyNDNkZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZW1vamkge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU5ODM0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9tYWluPlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/Users/quanvihong/Desktop/cultural-lens-v2/components/Title.js */"));
}

/***/ }),

/***/ "./lib/countries.js":
/*!**************************!*\
  !*** ./lib/countries.js ***!
  \**************************/
/*! exports provided: getCountryData, allCountryPaths, getRandomCountry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryData", function() { return getCountryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCountryPaths", function() { return allCountryPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomCountry", function() { return getRandomCountry; });
/* harmony import */ var _country_names_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country_names.json */ "./lib/country_names.json");
var _country_names_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./country_names.json */ "./lib/country_names.json", 1);

function getCountryData(name) {
  const findExactName = element => element.name === name;

  const country = _country_names_json__WEBPACK_IMPORTED_MODULE_0__[_country_names_json__WEBPACK_IMPORTED_MODULE_0__.findIndex(findExactName)];
  const country_name = country.name,
        emoji_name = country.emoji;
  console.log(country_name + " " + emoji_name);
  return {
    name: country_name,
    emoji: emoji_name
  };
}
function allCountryPaths() {
  return _country_names_json__WEBPACK_IMPORTED_MODULE_0__.map(country => {
    return {
      params: {
        country: country.name
      }
    };
  });
}
function getRandomCountry() {
  const country = _country_names_json__WEBPACK_IMPORTED_MODULE_0__[Math.floor(Math.random() * _country_names_json__WEBPACK_IMPORTED_MODULE_0__.length)];
  const country_name = country.name,
        emoji_name = country.emoji;
  return {
    name: country_name,
    emoji: emoji_name
  };
}

/***/ }),

/***/ "./lib/country_names.json":
/*!********************************!*\
  !*** ./lib/country_names.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"code\":\"AC\",\"unicode\":\"U+1F1E6 U+1F1E8\",\"name\":\"Ascension Island\",\"emoji\":\"🇦🇨\"},{\"code\":\"AD\",\"unicode\":\"U+1F1E6 U+1F1E9\",\"name\":\"Andorra\",\"emoji\":\"🇦🇩\"},{\"code\":\"AE\",\"unicode\":\"U+1F1E6 U+1F1EA\",\"name\":\"United Arab Emirates\",\"emoji\":\"🇦🇪\"},{\"code\":\"AF\",\"unicode\":\"U+1F1E6 U+1F1EB\",\"name\":\"Afghanistan\",\"emoji\":\"🇦🇫\"},{\"code\":\"AG\",\"unicode\":\"U+1F1E6 U+1F1EC\",\"name\":\"Antigua & Barbuda\",\"emoji\":\"🇦🇬\"},{\"code\":\"AI\",\"unicode\":\"U+1F1E6 U+1F1EE\",\"name\":\"Anguilla\",\"emoji\":\"🇦🇮\"},{\"code\":\"AL\",\"unicode\":\"U+1F1E6 U+1F1F1\",\"name\":\"Albania\",\"emoji\":\"🇦🇱\"},{\"code\":\"AM\",\"unicode\":\"U+1F1E6 U+1F1F2\",\"name\":\"Armenia\",\"emoji\":\"🇦🇲\"},{\"code\":\"AO\",\"unicode\":\"U+1F1E6 U+1F1F4\",\"name\":\"Angola\",\"emoji\":\"🇦🇴\"},{\"code\":\"AQ\",\"unicode\":\"U+1F1E6 U+1F1F6\",\"name\":\"Antarctica\",\"emoji\":\"🇦🇶\"},{\"code\":\"AR\",\"unicode\":\"U+1F1E6 U+1F1F7\",\"name\":\"Argentina\",\"emoji\":\"🇦🇷\"},{\"code\":\"AS\",\"unicode\":\"U+1F1E6 U+1F1F8\",\"name\":\"American Samoa\",\"emoji\":\"🇦🇸\"},{\"code\":\"AT\",\"unicode\":\"U+1F1E6 U+1F1F9\",\"name\":\"Austria\",\"emoji\":\"🇦🇹\"},{\"code\":\"AU\",\"unicode\":\"U+1F1E6 U+1F1FA\",\"name\":\"Australia\",\"emoji\":\"🇦🇺\"},{\"code\":\"AW\",\"unicode\":\"U+1F1E6 U+1F1FC\",\"name\":\"Aruba\",\"emoji\":\"🇦🇼\"},{\"code\":\"AX\",\"unicode\":\"U+1F1E6 U+1F1FD\",\"name\":\"Åland Islands\",\"emoji\":\"🇦🇽\"},{\"code\":\"AZ\",\"unicode\":\"U+1F1E6 U+1F1FF\",\"name\":\"Azerbaijan\",\"emoji\":\"🇦🇿\"},{\"code\":\"BA\",\"unicode\":\"U+1F1E7 U+1F1E6\",\"name\":\"Bosnia & Herzegovina\",\"emoji\":\"🇧🇦\"},{\"code\":\"BB\",\"unicode\":\"U+1F1E7 U+1F1E7\",\"name\":\"Barbados\",\"emoji\":\"🇧🇧\"},{\"code\":\"BD\",\"unicode\":\"U+1F1E7 U+1F1E9\",\"name\":\"Bangladesh\",\"emoji\":\"🇧🇩\"},{\"code\":\"BE\",\"unicode\":\"U+1F1E7 U+1F1EA\",\"name\":\"Belgium\",\"emoji\":\"🇧🇪\"},{\"code\":\"BF\",\"unicode\":\"U+1F1E7 U+1F1EB\",\"name\":\"Burkina Faso\",\"emoji\":\"🇧🇫\"},{\"code\":\"BG\",\"unicode\":\"U+1F1E7 U+1F1EC\",\"name\":\"Bulgaria\",\"emoji\":\"🇧🇬\"},{\"code\":\"BH\",\"unicode\":\"U+1F1E7 U+1F1ED\",\"name\":\"Bahrain\",\"emoji\":\"🇧🇭\"},{\"code\":\"BI\",\"unicode\":\"U+1F1E7 U+1F1EE\",\"name\":\"Burundi\",\"emoji\":\"🇧🇮\"},{\"code\":\"BJ\",\"unicode\":\"U+1F1E7 U+1F1EF\",\"name\":\"Benin\",\"emoji\":\"🇧🇯\"},{\"code\":\"BL\",\"unicode\":\"U+1F1E7 U+1F1F1\",\"name\":\"St. Barthélemy\",\"emoji\":\"🇧🇱\"},{\"code\":\"BM\",\"unicode\":\"U+1F1E7 U+1F1F2\",\"name\":\"Bermuda\",\"emoji\":\"🇧🇲\"},{\"code\":\"BN\",\"unicode\":\"U+1F1E7 U+1F1F3\",\"name\":\"Brunei\",\"emoji\":\"🇧🇳\"},{\"code\":\"BO\",\"unicode\":\"U+1F1E7 U+1F1F4\",\"name\":\"Bolivia\",\"emoji\":\"🇧🇴\"},{\"code\":\"BQ\",\"unicode\":\"U+1F1E7 U+1F1F6\",\"name\":\"Caribbean Netherlands\",\"emoji\":\"🇧🇶\"},{\"code\":\"BR\",\"unicode\":\"U+1F1E7 U+1F1F7\",\"name\":\"Brazil\",\"emoji\":\"🇧🇷\"},{\"code\":\"BS\",\"unicode\":\"U+1F1E7 U+1F1F8\",\"name\":\"Bahamas\",\"emoji\":\"🇧🇸\"},{\"code\":\"BT\",\"unicode\":\"U+1F1E7 U+1F1F9\",\"name\":\"Bhutan\",\"emoji\":\"🇧🇹\"},{\"code\":\"BV\",\"unicode\":\"U+1F1E7 U+1F1FB\",\"name\":\"Bouvet Island\",\"emoji\":\"🇧🇻\"},{\"code\":\"BW\",\"unicode\":\"U+1F1E7 U+1F1FC\",\"name\":\"Botswana\",\"emoji\":\"🇧🇼\"},{\"code\":\"BY\",\"unicode\":\"U+1F1E7 U+1F1FE\",\"name\":\"Belarus\",\"emoji\":\"🇧🇾\"},{\"code\":\"BZ\",\"unicode\":\"U+1F1E7 U+1F1FF\",\"name\":\"Belize\",\"emoji\":\"🇧🇿\"},{\"code\":\"CA\",\"unicode\":\"U+1F1E8 U+1F1E6\",\"name\":\"Canada\",\"emoji\":\"🇨🇦\"},{\"code\":\"CC\",\"unicode\":\"U+1F1E8 U+1F1E8\",\"name\":\"Cocos (Keeling) Islands\",\"emoji\":\"🇨🇨\"},{\"code\":\"CD\",\"unicode\":\"U+1F1E8 U+1F1E9\",\"name\":\"Congo - Kinshasa\",\"emoji\":\"🇨🇩\"},{\"code\":\"CF\",\"unicode\":\"U+1F1E8 U+1F1EB\",\"name\":\"Central African Republic\",\"emoji\":\"🇨🇫\"},{\"code\":\"CG\",\"unicode\":\"U+1F1E8 U+1F1EC\",\"name\":\"Congo - Brazzaville\",\"emoji\":\"🇨🇬\"},{\"code\":\"CH\",\"unicode\":\"U+1F1E8 U+1F1ED\",\"name\":\"Switzerland\",\"emoji\":\"🇨🇭\"},{\"code\":\"CI\",\"unicode\":\"U+1F1E8 U+1F1EE\",\"name\":\"Côte d’Ivoire\",\"emoji\":\"🇨🇮\"},{\"code\":\"CK\",\"unicode\":\"U+1F1E8 U+1F1F0\",\"name\":\"Cook Islands\",\"emoji\":\"🇨🇰\"},{\"code\":\"CL\",\"unicode\":\"U+1F1E8 U+1F1F1\",\"name\":\"Chile\",\"emoji\":\"🇨🇱\"},{\"code\":\"CM\",\"unicode\":\"U+1F1E8 U+1F1F2\",\"name\":\"Cameroon\",\"emoji\":\"🇨🇲\"},{\"code\":\"CN\",\"unicode\":\"U+1F1E8 U+1F1F3\",\"name\":\"China\",\"emoji\":\"🇨🇳\"},{\"code\":\"CO\",\"unicode\":\"U+1F1E8 U+1F1F4\",\"name\":\"Colombia\",\"emoji\":\"🇨🇴\"},{\"code\":\"CP\",\"unicode\":\"U+1F1E8 U+1F1F5\",\"name\":\"Clipperton Island\",\"emoji\":\"🇨🇵\"},{\"code\":\"CR\",\"unicode\":\"U+1F1E8 U+1F1F7\",\"name\":\"Costa Rica\",\"emoji\":\"🇨🇷\"},{\"code\":\"CU\",\"unicode\":\"U+1F1E8 U+1F1FA\",\"name\":\"Cuba\",\"emoji\":\"🇨🇺\"},{\"code\":\"CV\",\"unicode\":\"U+1F1E8 U+1F1FB\",\"name\":\"Cape Verde\",\"emoji\":\"🇨🇻\"},{\"code\":\"CW\",\"unicode\":\"U+1F1E8 U+1F1FC\",\"name\":\"Curaçao\",\"emoji\":\"🇨🇼\"},{\"code\":\"CX\",\"unicode\":\"U+1F1E8 U+1F1FD\",\"name\":\"Christmas Island\",\"emoji\":\"🇨🇽\"},{\"code\":\"CY\",\"unicode\":\"U+1F1E8 U+1F1FE\",\"name\":\"Cyprus\",\"emoji\":\"🇨🇾\"},{\"code\":\"CZ\",\"unicode\":\"U+1F1E8 U+1F1FF\",\"name\":\"Czechia\",\"emoji\":\"🇨🇿\"},{\"code\":\"DE\",\"unicode\":\"U+1F1E9 U+1F1EA\",\"name\":\"Germany\",\"emoji\":\"🇩🇪\"},{\"code\":\"DG\",\"unicode\":\"U+1F1E9 U+1F1EC\",\"name\":\"Diego Garcia\",\"emoji\":\"🇩🇬\"},{\"code\":\"DJ\",\"unicode\":\"U+1F1E9 U+1F1EF\",\"name\":\"Djibouti\",\"emoji\":\"🇩🇯\"},{\"code\":\"DK\",\"unicode\":\"U+1F1E9 U+1F1F0\",\"name\":\"Denmark\",\"emoji\":\"🇩🇰\"},{\"code\":\"DM\",\"unicode\":\"U+1F1E9 U+1F1F2\",\"name\":\"Dominica\",\"emoji\":\"🇩🇲\"},{\"code\":\"DO\",\"unicode\":\"U+1F1E9 U+1F1F4\",\"name\":\"Dominican Republic\",\"emoji\":\"🇩🇴\"},{\"code\":\"DZ\",\"unicode\":\"U+1F1E9 U+1F1FF\",\"name\":\"Algeria\",\"emoji\":\"🇩🇿\"},{\"code\":\"EA\",\"unicode\":\"U+1F1EA U+1F1E6\",\"name\":\"Ceuta & Melilla\",\"emoji\":\"🇪🇦\"},{\"code\":\"EC\",\"unicode\":\"U+1F1EA U+1F1E8\",\"name\":\"Ecuador\",\"emoji\":\"🇪🇨\"},{\"code\":\"EE\",\"unicode\":\"U+1F1EA U+1F1EA\",\"name\":\"Estonia\",\"emoji\":\"🇪🇪\"},{\"code\":\"EG\",\"unicode\":\"U+1F1EA U+1F1EC\",\"name\":\"Egypt\",\"emoji\":\"🇪🇬\"},{\"code\":\"EH\",\"unicode\":\"U+1F1EA U+1F1ED\",\"name\":\"Western Sahara\",\"emoji\":\"🇪🇭\"},{\"code\":\"ER\",\"unicode\":\"U+1F1EA U+1F1F7\",\"name\":\"Eritrea\",\"emoji\":\"🇪🇷\"},{\"code\":\"ES\",\"unicode\":\"U+1F1EA U+1F1F8\",\"name\":\"Spain\",\"emoji\":\"🇪🇸\"},{\"code\":\"ET\",\"unicode\":\"U+1F1EA U+1F1F9\",\"name\":\"Ethiopia\",\"emoji\":\"🇪🇹\"},{\"code\":\"EU\",\"unicode\":\"U+1F1EA U+1F1FA\",\"name\":\"European Union\",\"emoji\":\"🇪🇺\"},{\"code\":\"FI\",\"unicode\":\"U+1F1EB U+1F1EE\",\"name\":\"Finland\",\"emoji\":\"🇫🇮\"},{\"code\":\"FJ\",\"unicode\":\"U+1F1EB U+1F1EF\",\"name\":\"Fiji\",\"emoji\":\"🇫🇯\"},{\"code\":\"FK\",\"unicode\":\"U+1F1EB U+1F1F0\",\"name\":\"Falkland Islands\",\"emoji\":\"🇫🇰\"},{\"code\":\"FM\",\"unicode\":\"U+1F1EB U+1F1F2\",\"name\":\"Micronesia\",\"emoji\":\"🇫🇲\"},{\"code\":\"FO\",\"unicode\":\"U+1F1EB U+1F1F4\",\"name\":\"Faroe Islands\",\"emoji\":\"🇫🇴\"},{\"code\":\"FR\",\"unicode\":\"U+1F1EB U+1F1F7\",\"name\":\"France\",\"emoji\":\"🇫🇷\"},{\"code\":\"GA\",\"unicode\":\"U+1F1EC U+1F1E6\",\"name\":\"Gabon\",\"emoji\":\"🇬🇦\"},{\"code\":\"GB\",\"unicode\":\"U+1F1EC U+1F1E7\",\"name\":\"United Kingdom\",\"emoji\":\"🇬🇧\"},{\"code\":\"GD\",\"unicode\":\"U+1F1EC U+1F1E9\",\"name\":\"Grenada\",\"emoji\":\"🇬🇩\"},{\"code\":\"GE\",\"unicode\":\"U+1F1EC U+1F1EA\",\"name\":\"Georgia\",\"emoji\":\"🇬🇪\"},{\"code\":\"GF\",\"unicode\":\"U+1F1EC U+1F1EB\",\"name\":\"French Guiana\",\"emoji\":\"🇬🇫\"},{\"code\":\"GG\",\"unicode\":\"U+1F1EC U+1F1EC\",\"name\":\"Guernsey\",\"emoji\":\"🇬🇬\"},{\"code\":\"GH\",\"unicode\":\"U+1F1EC U+1F1ED\",\"name\":\"Ghana\",\"emoji\":\"🇬🇭\"},{\"code\":\"GI\",\"unicode\":\"U+1F1EC U+1F1EE\",\"name\":\"Gibraltar\",\"emoji\":\"🇬🇮\"},{\"code\":\"GL\",\"unicode\":\"U+1F1EC U+1F1F1\",\"name\":\"Greenland\",\"emoji\":\"🇬🇱\"},{\"code\":\"GM\",\"unicode\":\"U+1F1EC U+1F1F2\",\"name\":\"Gambia\",\"emoji\":\"🇬🇲\"},{\"code\":\"GN\",\"unicode\":\"U+1F1EC U+1F1F3\",\"name\":\"Guinea\",\"emoji\":\"🇬🇳\"},{\"code\":\"GP\",\"unicode\":\"U+1F1EC U+1F1F5\",\"name\":\"Guadeloupe\",\"emoji\":\"🇬🇵\"},{\"code\":\"GQ\",\"unicode\":\"U+1F1EC U+1F1F6\",\"name\":\"Equatorial Guinea\",\"emoji\":\"🇬🇶\"},{\"code\":\"GR\",\"unicode\":\"U+1F1EC U+1F1F7\",\"name\":\"Greece\",\"emoji\":\"🇬🇷\"},{\"code\":\"GS\",\"unicode\":\"U+1F1EC U+1F1F8\",\"name\":\"South Georgia & South Sandwich Islands\",\"emoji\":\"🇬🇸\"},{\"code\":\"GT\",\"unicode\":\"U+1F1EC U+1F1F9\",\"name\":\"Guatemala\",\"emoji\":\"🇬🇹\"},{\"code\":\"GU\",\"unicode\":\"U+1F1EC U+1F1FA\",\"name\":\"Guam\",\"emoji\":\"🇬🇺\"},{\"code\":\"GW\",\"unicode\":\"U+1F1EC U+1F1FC\",\"name\":\"Guinea-Bissau\",\"emoji\":\"🇬🇼\"},{\"code\":\"GY\",\"unicode\":\"U+1F1EC U+1F1FE\",\"name\":\"Guyana\",\"emoji\":\"🇬🇾\"},{\"code\":\"HK\",\"unicode\":\"U+1F1ED U+1F1F0\",\"name\":\"Hong Kong SAR China\",\"emoji\":\"🇭🇰\"},{\"code\":\"HM\",\"unicode\":\"U+1F1ED U+1F1F2\",\"name\":\"Heard & McDonald Islands\",\"emoji\":\"🇭🇲\"},{\"code\":\"HN\",\"unicode\":\"U+1F1ED U+1F1F3\",\"name\":\"Honduras\",\"emoji\":\"🇭🇳\"},{\"code\":\"HR\",\"unicode\":\"U+1F1ED U+1F1F7\",\"name\":\"Croatia\",\"emoji\":\"🇭🇷\"},{\"code\":\"HT\",\"unicode\":\"U+1F1ED U+1F1F9\",\"name\":\"Haiti\",\"emoji\":\"🇭🇹\"},{\"code\":\"HU\",\"unicode\":\"U+1F1ED U+1F1FA\",\"name\":\"Hungary\",\"emoji\":\"🇭🇺\"},{\"code\":\"IC\",\"unicode\":\"U+1F1EE U+1F1E8\",\"name\":\"Canary Islands\",\"emoji\":\"🇮🇨\"},{\"code\":\"ID\",\"unicode\":\"U+1F1EE U+1F1E9\",\"name\":\"Indonesia\",\"emoji\":\"🇮🇩\"},{\"code\":\"IE\",\"unicode\":\"U+1F1EE U+1F1EA\",\"name\":\"Ireland\",\"emoji\":\"🇮🇪\"},{\"code\":\"IL\",\"unicode\":\"U+1F1EE U+1F1F1\",\"name\":\"Israel\",\"emoji\":\"🇮🇱\"},{\"code\":\"IM\",\"unicode\":\"U+1F1EE U+1F1F2\",\"name\":\"Isle of Man\",\"emoji\":\"🇮🇲\"},{\"code\":\"IN\",\"unicode\":\"U+1F1EE U+1F1F3\",\"name\":\"India\",\"emoji\":\"🇮🇳\"},{\"code\":\"IO\",\"unicode\":\"U+1F1EE U+1F1F4\",\"name\":\"British Indian Ocean Territory\",\"emoji\":\"🇮🇴\"},{\"code\":\"IQ\",\"unicode\":\"U+1F1EE U+1F1F6\",\"name\":\"Iraq\",\"emoji\":\"🇮🇶\"},{\"code\":\"IR\",\"unicode\":\"U+1F1EE U+1F1F7\",\"name\":\"Iran\",\"emoji\":\"🇮🇷\"},{\"code\":\"IS\",\"unicode\":\"U+1F1EE U+1F1F8\",\"name\":\"Iceland\",\"emoji\":\"🇮🇸\"},{\"code\":\"IT\",\"unicode\":\"U+1F1EE U+1F1F9\",\"name\":\"Italy\",\"emoji\":\"🇮🇹\"},{\"code\":\"JE\",\"unicode\":\"U+1F1EF U+1F1EA\",\"name\":\"Jersey\",\"emoji\":\"🇯🇪\"},{\"code\":\"JM\",\"unicode\":\"U+1F1EF U+1F1F2\",\"name\":\"Jamaica\",\"emoji\":\"🇯🇲\"},{\"code\":\"JO\",\"unicode\":\"U+1F1EF U+1F1F4\",\"name\":\"Jordan\",\"emoji\":\"🇯🇴\"},{\"code\":\"JP\",\"unicode\":\"U+1F1EF U+1F1F5\",\"name\":\"Japan\",\"emoji\":\"🇯🇵\"},{\"code\":\"KE\",\"unicode\":\"U+1F1F0 U+1F1EA\",\"name\":\"Kenya\",\"emoji\":\"🇰🇪\"},{\"code\":\"KG\",\"unicode\":\"U+1F1F0 U+1F1EC\",\"name\":\"Kyrgyzstan\",\"emoji\":\"🇰🇬\"},{\"code\":\"KH\",\"unicode\":\"U+1F1F0 U+1F1ED\",\"name\":\"Cambodia\",\"emoji\":\"🇰🇭\"},{\"code\":\"KI\",\"unicode\":\"U+1F1F0 U+1F1EE\",\"name\":\"Kiribati\",\"emoji\":\"🇰🇮\"},{\"code\":\"KM\",\"unicode\":\"U+1F1F0 U+1F1F2\",\"name\":\"Comoros\",\"emoji\":\"🇰🇲\"},{\"code\":\"KN\",\"unicode\":\"U+1F1F0 U+1F1F3\",\"name\":\"St. Kitts & Nevis\",\"emoji\":\"🇰🇳\"},{\"code\":\"KP\",\"unicode\":\"U+1F1F0 U+1F1F5\",\"name\":\"North Korea\",\"emoji\":\"🇰🇵\"},{\"code\":\"KR\",\"unicode\":\"U+1F1F0 U+1F1F7\",\"name\":\"South Korea\",\"emoji\":\"🇰🇷\"},{\"code\":\"KW\",\"unicode\":\"U+1F1F0 U+1F1FC\",\"name\":\"Kuwait\",\"emoji\":\"🇰🇼\"},{\"code\":\"KY\",\"unicode\":\"U+1F1F0 U+1F1FE\",\"name\":\"Cayman Islands\",\"emoji\":\"🇰🇾\"},{\"code\":\"KZ\",\"unicode\":\"U+1F1F0 U+1F1FF\",\"name\":\"Kazakhstan\",\"emoji\":\"🇰🇿\"},{\"code\":\"LA\",\"unicode\":\"U+1F1F1 U+1F1E6\",\"name\":\"Laos\",\"emoji\":\"🇱🇦\"},{\"code\":\"LB\",\"unicode\":\"U+1F1F1 U+1F1E7\",\"name\":\"Lebanon\",\"emoji\":\"🇱🇧\"},{\"code\":\"LC\",\"unicode\":\"U+1F1F1 U+1F1E8\",\"name\":\"St. Lucia\",\"emoji\":\"🇱🇨\"},{\"code\":\"LI\",\"unicode\":\"U+1F1F1 U+1F1EE\",\"name\":\"Liechtenstein\",\"emoji\":\"🇱🇮\"},{\"code\":\"LK\",\"unicode\":\"U+1F1F1 U+1F1F0\",\"name\":\"Sri Lanka\",\"emoji\":\"🇱🇰\"},{\"code\":\"LR\",\"unicode\":\"U+1F1F1 U+1F1F7\",\"name\":\"Liberia\",\"emoji\":\"🇱🇷\"},{\"code\":\"LS\",\"unicode\":\"U+1F1F1 U+1F1F8\",\"name\":\"Lesotho\",\"emoji\":\"🇱🇸\"},{\"code\":\"LT\",\"unicode\":\"U+1F1F1 U+1F1F9\",\"name\":\"Lithuania\",\"emoji\":\"🇱🇹\"},{\"code\":\"LU\",\"unicode\":\"U+1F1F1 U+1F1FA\",\"name\":\"Luxembourg\",\"emoji\":\"🇱🇺\"},{\"code\":\"LV\",\"unicode\":\"U+1F1F1 U+1F1FB\",\"name\":\"Latvia\",\"emoji\":\"🇱🇻\"},{\"code\":\"LY\",\"unicode\":\"U+1F1F1 U+1F1FE\",\"name\":\"Libya\",\"emoji\":\"🇱🇾\"},{\"code\":\"MA\",\"unicode\":\"U+1F1F2 U+1F1E6\",\"name\":\"Morocco\",\"emoji\":\"🇲🇦\"},{\"code\":\"MC\",\"unicode\":\"U+1F1F2 U+1F1E8\",\"name\":\"Monaco\",\"emoji\":\"🇲🇨\"},{\"code\":\"MD\",\"unicode\":\"U+1F1F2 U+1F1E9\",\"name\":\"Moldova\",\"emoji\":\"🇲🇩\"},{\"code\":\"ME\",\"unicode\":\"U+1F1F2 U+1F1EA\",\"name\":\"Montenegro\",\"emoji\":\"🇲🇪\"},{\"code\":\"MF\",\"unicode\":\"U+1F1F2 U+1F1EB\",\"name\":\"St. Martin\",\"emoji\":\"🇲🇫\"},{\"code\":\"MG\",\"unicode\":\"U+1F1F2 U+1F1EC\",\"name\":\"Madagascar\",\"emoji\":\"🇲🇬\"},{\"code\":\"MH\",\"unicode\":\"U+1F1F2 U+1F1ED\",\"name\":\"Marshall Islands\",\"emoji\":\"🇲🇭\"},{\"code\":\"MK\",\"unicode\":\"U+1F1F2 U+1F1F0\",\"name\":\"Macedonia\",\"emoji\":\"🇲🇰\"},{\"code\":\"ML\",\"unicode\":\"U+1F1F2 U+1F1F1\",\"name\":\"Mali\",\"emoji\":\"🇲🇱\"},{\"code\":\"MM\",\"unicode\":\"U+1F1F2 U+1F1F2\",\"name\":\"Myanmar\",\"emoji\":\"🇲🇲\"},{\"code\":\"MN\",\"unicode\":\"U+1F1F2 U+1F1F3\",\"name\":\"Mongolia\",\"emoji\":\"🇲🇳\"},{\"code\":\"MO\",\"unicode\":\"U+1F1F2 U+1F1F4\",\"name\":\"Macau SAR China\",\"emoji\":\"🇲🇴\"},{\"code\":\"MP\",\"unicode\":\"U+1F1F2 U+1F1F5\",\"name\":\"Northern Mariana Islands\",\"emoji\":\"🇲🇵\"},{\"code\":\"MQ\",\"unicode\":\"U+1F1F2 U+1F1F6\",\"name\":\"Martinique\",\"emoji\":\"🇲🇶\"},{\"code\":\"MR\",\"unicode\":\"U+1F1F2 U+1F1F7\",\"name\":\"Mauritania\",\"emoji\":\"🇲🇷\"},{\"code\":\"MS\",\"unicode\":\"U+1F1F2 U+1F1F8\",\"name\":\"Montserrat\",\"emoji\":\"🇲🇸\"},{\"code\":\"MT\",\"unicode\":\"U+1F1F2 U+1F1F9\",\"name\":\"Malta\",\"emoji\":\"🇲🇹\"},{\"code\":\"MU\",\"unicode\":\"U+1F1F2 U+1F1FA\",\"name\":\"Mauritius\",\"emoji\":\"🇲🇺\"},{\"code\":\"MV\",\"unicode\":\"U+1F1F2 U+1F1FB\",\"name\":\"Maldives\",\"emoji\":\"🇲🇻\"},{\"code\":\"MW\",\"unicode\":\"U+1F1F2 U+1F1FC\",\"name\":\"Malawi\",\"emoji\":\"🇲🇼\"},{\"code\":\"MX\",\"unicode\":\"U+1F1F2 U+1F1FD\",\"name\":\"Mexico\",\"emoji\":\"🇲🇽\"},{\"code\":\"MY\",\"unicode\":\"U+1F1F2 U+1F1FE\",\"name\":\"Malaysia\",\"emoji\":\"🇲🇾\"},{\"code\":\"MZ\",\"unicode\":\"U+1F1F2 U+1F1FF\",\"name\":\"Mozambique\",\"emoji\":\"🇲🇿\"},{\"code\":\"NA\",\"unicode\":\"U+1F1F3 U+1F1E6\",\"name\":\"Namibia\",\"emoji\":\"🇳🇦\"},{\"code\":\"NC\",\"unicode\":\"U+1F1F3 U+1F1E8\",\"name\":\"New Caledonia\",\"emoji\":\"🇳🇨\"},{\"code\":\"NE\",\"unicode\":\"U+1F1F3 U+1F1EA\",\"name\":\"Niger\",\"emoji\":\"🇳🇪\"},{\"code\":\"NF\",\"unicode\":\"U+1F1F3 U+1F1EB\",\"name\":\"Norfolk Island\",\"emoji\":\"🇳🇫\"},{\"code\":\"NG\",\"unicode\":\"U+1F1F3 U+1F1EC\",\"name\":\"Nigeria\",\"emoji\":\"🇳🇬\"},{\"code\":\"NI\",\"unicode\":\"U+1F1F3 U+1F1EE\",\"name\":\"Nicaragua\",\"emoji\":\"🇳🇮\"},{\"code\":\"NL\",\"unicode\":\"U+1F1F3 U+1F1F1\",\"name\":\"Netherlands\",\"emoji\":\"🇳🇱\"},{\"code\":\"NO\",\"unicode\":\"U+1F1F3 U+1F1F4\",\"name\":\"Norway\",\"emoji\":\"🇳🇴\"},{\"code\":\"NP\",\"unicode\":\"U+1F1F3 U+1F1F5\",\"name\":\"Nepal\",\"emoji\":\"🇳🇵\"},{\"code\":\"NR\",\"unicode\":\"U+1F1F3 U+1F1F7\",\"name\":\"Nauru\",\"emoji\":\"🇳🇷\"},{\"code\":\"NU\",\"unicode\":\"U+1F1F3 U+1F1FA\",\"name\":\"Niue\",\"emoji\":\"🇳🇺\"},{\"code\":\"NZ\",\"unicode\":\"U+1F1F3 U+1F1FF\",\"name\":\"New Zealand\",\"emoji\":\"🇳🇿\"},{\"code\":\"OM\",\"unicode\":\"U+1F1F4 U+1F1F2\",\"name\":\"Oman\",\"emoji\":\"🇴🇲\"},{\"code\":\"PA\",\"unicode\":\"U+1F1F5 U+1F1E6\",\"name\":\"Panama\",\"emoji\":\"🇵🇦\"},{\"code\":\"PE\",\"unicode\":\"U+1F1F5 U+1F1EA\",\"name\":\"Peru\",\"emoji\":\"🇵🇪\"},{\"code\":\"PF\",\"unicode\":\"U+1F1F5 U+1F1EB\",\"name\":\"French Polynesia\",\"emoji\":\"🇵🇫\"},{\"code\":\"PG\",\"unicode\":\"U+1F1F5 U+1F1EC\",\"name\":\"Papua New Guinea\",\"emoji\":\"🇵🇬\"},{\"code\":\"PH\",\"unicode\":\"U+1F1F5 U+1F1ED\",\"name\":\"Philippines\",\"emoji\":\"🇵🇭\"},{\"code\":\"PK\",\"unicode\":\"U+1F1F5 U+1F1F0\",\"name\":\"Pakistan\",\"emoji\":\"🇵🇰\"},{\"code\":\"PL\",\"unicode\":\"U+1F1F5 U+1F1F1\",\"name\":\"Poland\",\"emoji\":\"🇵🇱\"},{\"code\":\"PM\",\"unicode\":\"U+1F1F5 U+1F1F2\",\"name\":\"St. Pierre & Miquelon\",\"emoji\":\"🇵🇲\"},{\"code\":\"PN\",\"unicode\":\"U+1F1F5 U+1F1F3\",\"name\":\"Pitcairn Islands\",\"emoji\":\"🇵🇳\"},{\"code\":\"PR\",\"unicode\":\"U+1F1F5 U+1F1F7\",\"name\":\"Puerto Rico\",\"emoji\":\"🇵🇷\"},{\"code\":\"PS\",\"unicode\":\"U+1F1F5 U+1F1F8\",\"name\":\"Palestinian Territories\",\"emoji\":\"🇵🇸\"},{\"code\":\"PT\",\"unicode\":\"U+1F1F5 U+1F1F9\",\"name\":\"Portugal\",\"emoji\":\"🇵🇹\"},{\"code\":\"PW\",\"unicode\":\"U+1F1F5 U+1F1FC\",\"name\":\"Palau\",\"emoji\":\"🇵🇼\"},{\"code\":\"PY\",\"unicode\":\"U+1F1F5 U+1F1FE\",\"name\":\"Paraguay\",\"emoji\":\"🇵🇾\"},{\"code\":\"QA\",\"unicode\":\"U+1F1F6 U+1F1E6\",\"name\":\"Qatar\",\"emoji\":\"🇶🇦\"},{\"code\":\"RE\",\"unicode\":\"U+1F1F7 U+1F1EA\",\"name\":\"Réunion\",\"emoji\":\"🇷🇪\"},{\"code\":\"RO\",\"unicode\":\"U+1F1F7 U+1F1F4\",\"name\":\"Romania\",\"emoji\":\"🇷🇴\"},{\"code\":\"RS\",\"unicode\":\"U+1F1F7 U+1F1F8\",\"name\":\"Serbia\",\"emoji\":\"🇷🇸\"},{\"code\":\"RU\",\"unicode\":\"U+1F1F7 U+1F1FA\",\"name\":\"Russia\",\"emoji\":\"🇷🇺\"},{\"code\":\"RW\",\"unicode\":\"U+1F1F7 U+1F1FC\",\"name\":\"Rwanda\",\"emoji\":\"🇷🇼\"},{\"code\":\"SA\",\"unicode\":\"U+1F1F8 U+1F1E6\",\"name\":\"Saudi Arabia\",\"emoji\":\"🇸🇦\"},{\"code\":\"SB\",\"unicode\":\"U+1F1F8 U+1F1E7\",\"name\":\"Solomon Islands\",\"emoji\":\"🇸🇧\"},{\"code\":\"SC\",\"unicode\":\"U+1F1F8 U+1F1E8\",\"name\":\"Seychelles\",\"emoji\":\"🇸🇨\"},{\"code\":\"SD\",\"unicode\":\"U+1F1F8 U+1F1E9\",\"name\":\"Sudan\",\"emoji\":\"🇸🇩\"},{\"code\":\"SE\",\"unicode\":\"U+1F1F8 U+1F1EA\",\"name\":\"Sweden\",\"emoji\":\"🇸🇪\"},{\"code\":\"SG\",\"unicode\":\"U+1F1F8 U+1F1EC\",\"name\":\"Singapore\",\"emoji\":\"🇸🇬\"},{\"code\":\"SH\",\"unicode\":\"U+1F1F8 U+1F1ED\",\"name\":\"St. Helena\",\"emoji\":\"🇸🇭\"},{\"code\":\"SI\",\"unicode\":\"U+1F1F8 U+1F1EE\",\"name\":\"Slovenia\",\"emoji\":\"🇸🇮\"},{\"code\":\"SJ\",\"unicode\":\"U+1F1F8 U+1F1EF\",\"name\":\"Svalbard & Jan Mayen\",\"emoji\":\"🇸🇯\"},{\"code\":\"SK\",\"unicode\":\"U+1F1F8 U+1F1F0\",\"name\":\"Slovakia\",\"emoji\":\"🇸🇰\"},{\"code\":\"SL\",\"unicode\":\"U+1F1F8 U+1F1F1\",\"name\":\"Sierra Leone\",\"emoji\":\"🇸🇱\"},{\"code\":\"SM\",\"unicode\":\"U+1F1F8 U+1F1F2\",\"name\":\"San Marino\",\"emoji\":\"🇸🇲\"},{\"code\":\"SN\",\"unicode\":\"U+1F1F8 U+1F1F3\",\"name\":\"Senegal\",\"emoji\":\"🇸🇳\"},{\"code\":\"SO\",\"unicode\":\"U+1F1F8 U+1F1F4\",\"name\":\"Somalia\",\"emoji\":\"🇸🇴\"},{\"code\":\"SR\",\"unicode\":\"U+1F1F8 U+1F1F7\",\"name\":\"Suriname\",\"emoji\":\"🇸🇷\"},{\"code\":\"SS\",\"unicode\":\"U+1F1F8 U+1F1F8\",\"name\":\"South Sudan\",\"emoji\":\"🇸🇸\"},{\"code\":\"ST\",\"unicode\":\"U+1F1F8 U+1F1F9\",\"name\":\"São Tomé & Príncipe\",\"emoji\":\"🇸🇹\"},{\"code\":\"SV\",\"unicode\":\"U+1F1F8 U+1F1FB\",\"name\":\"El Salvador\",\"emoji\":\"🇸🇻\"},{\"code\":\"SX\",\"unicode\":\"U+1F1F8 U+1F1FD\",\"name\":\"Sint Maarten\",\"emoji\":\"🇸🇽\"},{\"code\":\"SY\",\"unicode\":\"U+1F1F8 U+1F1FE\",\"name\":\"Syria\",\"emoji\":\"🇸🇾\"},{\"code\":\"SZ\",\"unicode\":\"U+1F1F8 U+1F1FF\",\"name\":\"Swaziland\",\"emoji\":\"🇸🇿\"},{\"code\":\"TA\",\"unicode\":\"U+1F1F9 U+1F1E6\",\"name\":\"Tristan da Cunha\",\"emoji\":\"🇹🇦\"},{\"code\":\"TC\",\"unicode\":\"U+1F1F9 U+1F1E8\",\"name\":\"Turks & Caicos Islands\",\"emoji\":\"🇹🇨\"},{\"code\":\"TD\",\"unicode\":\"U+1F1F9 U+1F1E9\",\"name\":\"Chad\",\"emoji\":\"🇹🇩\"},{\"code\":\"TF\",\"unicode\":\"U+1F1F9 U+1F1EB\",\"name\":\"French Southern Territories\",\"emoji\":\"🇹🇫\"},{\"code\":\"TG\",\"unicode\":\"U+1F1F9 U+1F1EC\",\"name\":\"Togo\",\"emoji\":\"🇹🇬\"},{\"code\":\"TH\",\"unicode\":\"U+1F1F9 U+1F1ED\",\"name\":\"Thailand\",\"emoji\":\"🇹🇭\"},{\"code\":\"TJ\",\"unicode\":\"U+1F1F9 U+1F1EF\",\"name\":\"Tajikistan\",\"emoji\":\"🇹🇯\"},{\"code\":\"TK\",\"unicode\":\"U+1F1F9 U+1F1F0\",\"name\":\"Tokelau\",\"emoji\":\"🇹🇰\"},{\"code\":\"TL\",\"unicode\":\"U+1F1F9 U+1F1F1\",\"name\":\"Timor-Leste\",\"emoji\":\"🇹🇱\"},{\"code\":\"TM\",\"unicode\":\"U+1F1F9 U+1F1F2\",\"name\":\"Turkmenistan\",\"emoji\":\"🇹🇲\"},{\"code\":\"TN\",\"unicode\":\"U+1F1F9 U+1F1F3\",\"name\":\"Tunisia\",\"emoji\":\"🇹🇳\"},{\"code\":\"TO\",\"unicode\":\"U+1F1F9 U+1F1F4\",\"name\":\"Tonga\",\"emoji\":\"🇹🇴\"},{\"code\":\"TR\",\"unicode\":\"U+1F1F9 U+1F1F7\",\"name\":\"Turkey\",\"emoji\":\"🇹🇷\"},{\"code\":\"TT\",\"unicode\":\"U+1F1F9 U+1F1F9\",\"name\":\"Trinidad & Tobago\",\"emoji\":\"🇹🇹\"},{\"code\":\"TV\",\"unicode\":\"U+1F1F9 U+1F1FB\",\"name\":\"Tuvalu\",\"emoji\":\"🇹🇻\"},{\"code\":\"TW\",\"unicode\":\"U+1F1F9 U+1F1FC\",\"name\":\"Taiwan\",\"emoji\":\"🇹🇼\"},{\"code\":\"TZ\",\"unicode\":\"U+1F1F9 U+1F1FF\",\"name\":\"Tanzania\",\"emoji\":\"🇹🇿\"},{\"code\":\"UA\",\"unicode\":\"U+1F1FA U+1F1E6\",\"name\":\"Ukraine\",\"emoji\":\"🇺🇦\"},{\"code\":\"UG\",\"unicode\":\"U+1F1FA U+1F1EC\",\"name\":\"Uganda\",\"emoji\":\"🇺🇬\"},{\"code\":\"UM\",\"unicode\":\"U+1F1FA U+1F1F2\",\"name\":\"U.S. Outlying Islands\",\"emoji\":\"🇺🇲\"},{\"code\":\"UN\",\"unicode\":\"U+1F1FA U+1F1F3\",\"name\":\"United Nations\",\"emoji\":\"🇺🇳\"},{\"code\":\"US\",\"unicode\":\"U+1F1FA U+1F1F8\",\"name\":\"United States\",\"emoji\":\"🇺🇸\"},{\"code\":\"UY\",\"unicode\":\"U+1F1FA U+1F1FE\",\"name\":\"Uruguay\",\"emoji\":\"🇺🇾\"},{\"code\":\"UZ\",\"unicode\":\"U+1F1FA U+1F1FF\",\"name\":\"Uzbekistan\",\"emoji\":\"🇺🇿\"},{\"code\":\"VA\",\"unicode\":\"U+1F1FB U+1F1E6\",\"name\":\"Vatican City\",\"emoji\":\"🇻🇦\"},{\"code\":\"VC\",\"unicode\":\"U+1F1FB U+1F1E8\",\"name\":\"St. Vincent & Grenadines\",\"emoji\":\"🇻🇨\"},{\"code\":\"VE\",\"unicode\":\"U+1F1FB U+1F1EA\",\"name\":\"Venezuela\",\"emoji\":\"🇻🇪\"},{\"code\":\"VG\",\"unicode\":\"U+1F1FB U+1F1EC\",\"name\":\"British Virgin Islands\",\"emoji\":\"🇻🇬\"},{\"code\":\"VI\",\"unicode\":\"U+1F1FB U+1F1EE\",\"name\":\"U.S. Virgin Islands\",\"emoji\":\"🇻🇮\"},{\"code\":\"VN\",\"unicode\":\"U+1F1FB U+1F1F3\",\"name\":\"Vietnam\",\"emoji\":\"🇻🇳\"},{\"code\":\"VU\",\"unicode\":\"U+1F1FB U+1F1FA\",\"name\":\"Vanuatu\",\"emoji\":\"🇻🇺\"},{\"code\":\"WF\",\"unicode\":\"U+1F1FC U+1F1EB\",\"name\":\"Wallis & Futuna\",\"emoji\":\"🇼🇫\"},{\"code\":\"WS\",\"unicode\":\"U+1F1FC U+1F1F8\",\"name\":\"Samoa\",\"emoji\":\"🇼🇸\"},{\"code\":\"XK\",\"unicode\":\"U+1F1FD U+1F1F0\",\"name\":\"Kosovo\",\"emoji\":\"🇽🇰\"},{\"code\":\"YE\",\"unicode\":\"U+1F1FE U+1F1EA\",\"name\":\"Yemen\",\"emoji\":\"🇾🇪\"},{\"code\":\"YT\",\"unicode\":\"U+1F1FE U+1F1F9\",\"name\":\"Mayotte\",\"emoji\":\"🇾🇹\"},{\"code\":\"ZA\",\"unicode\":\"U+1F1FF U+1F1E6\",\"name\":\"South Africa\",\"emoji\":\"🇿🇦\"},{\"code\":\"ZM\",\"unicode\":\"U+1F1FF U+1F1F2\",\"name\":\"Zambia\",\"emoji\":\"🇿🇲\"},{\"code\":\"ZW\",\"unicode\":\"U+1F1FF U+1F1FC\",\"name\":\"Zimbabwe\",\"emoji\":\"🇿🇼\"}]");

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
/* harmony import */ var _lib_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/countries */ "./lib/countries.js");
var _jsxFileName = "/Users/quanvihong/Desktop/cultural-lens-v2/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Index({
  randomCountry
}) {
  return __jsx(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    country: randomCountry.name,
    emoji: randomCountry.emoji,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  });
}
async function getStaticProps() {
  const randomCountry = Object(_lib_countries__WEBPACK_IMPORTED_MODULE_2__["getRandomCountry"])();
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