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

/***/ "./components/buttons/button.scss":
/*!****************************************!*\
  !*** ./components/buttons/button.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/buttons/primaryButton/primaryButton.tsx":
/*!************************************************************!*\
  !*** ./components/buttons/primaryButton/primaryButton.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button.scss */ "./components/buttons/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rache\\OneDrive\\Desktop\\gitHub\\nextProject\\minerals\\components\\buttons\\primaryButton\\primaryButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const PrimaryButton = props => {
  return __jsx("button", {
    className: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (PrimaryButton);

/***/ }),

/***/ "./components/buttons/secondaryButton/secondaryButton.tsx":
/*!****************************************************************!*\
  !*** ./components/buttons/secondaryButton/secondaryButton.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button.scss */ "./components/buttons/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rache\\OneDrive\\Desktop\\gitHub\\nextProject\\minerals\\components\\buttons\\secondaryButton\\secondaryButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const SecondaryButton = props => {
  return __jsx("button", {
    className: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (SecondaryButton);

/***/ }),

/***/ "./components/buttons/tertiaryButton/tertiaryButton.tsx":
/*!**************************************************************!*\
  !*** ./components/buttons/tertiaryButton/tertiaryButton.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button.scss */ "./components/buttons/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rache\\OneDrive\\Desktop\\gitHub\\nextProject\\minerals\\components\\buttons\\tertiaryButton\\tertiaryButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const TertiaryButton = props => {
  return __jsx("button", {
    className: "tertiary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (TertiaryButton);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_buttons_primaryButton_primaryButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/buttons/primaryButton/primaryButton */ "./components/buttons/primaryButton/primaryButton.tsx");
/* harmony import */ var _components_buttons_secondaryButton_secondaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/buttons/secondaryButton/secondaryButton */ "./components/buttons/secondaryButton/secondaryButton.tsx");
/* harmony import */ var _components_buttons_tertiaryButton_tertiaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buttons/tertiaryButton/tertiaryButton */ "./components/buttons/tertiaryButton/tertiaryButton.tsx");
var _jsxFileName = "C:\\Users\\rache\\OneDrive\\Desktop\\gitHub\\nextProject\\minerals\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, "Hello!", __jsx(_components_buttons_primaryButton_primaryButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
  text: "Click me!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }
}), __jsx(_components_buttons_secondaryButton_secondaryButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
  text: "Meow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
}), __jsx(_components_buttons_tertiaryButton_tertiaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
  text: "Woof",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rache\OneDrive\Desktop\gitHub\nextProject\minerals\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map