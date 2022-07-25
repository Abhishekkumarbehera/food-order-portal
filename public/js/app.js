/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log('Hello from app js');

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\r\n    min-height: calc(100vh-86px);\r\n                         ^\r\n      \"+\" and \"-\" must be surrounded by whitespace in calculations.\n   ╷\n61 │     min-height: calc(100vh-86px);\r\n   │                           ^\n   ╵\n  stdin 61:27  root stylesheet\r\n      in C:\\Users\\Hello\\Desktop\\food ordering portal\\resources\\scss\\app.scss (line 61, column 27)\n    at C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass-loader\\dist\\index.js:89:7\n    at Function.call$2 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:101143:16)\n    at render_closure1.call$2 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:86162:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:29899:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:28419:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:28726:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:3914:77)\n    at _Future._completeError$2 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:28572:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:28220:12)\n    at Object._asyncRethrow (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:3716:17)\n    at C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:20025:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:3741:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:28239:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:28233:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:29899:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:28419:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:28726:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:3914:77)\n    at _Future._completeError$2 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:28572:9)\n    at _Future__asyncCompleteError_closure.call$0 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:28656:18)\n    at Object._microtaskLoop (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:3970:24)\n    at StaticClosure._startMicrotaskLoop (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:3976:11)\n    at _AsyncRun__scheduleImmediateJsOverride_internalCallback.call$0 (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:28140:21)\n    at invokeClosure (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:1447:26)\n    at Immediate.<anonymous> (C:\\Users\\Hello\\Desktop\\food ordering portal\\node_modules\\sass\\sass.dart.js:1468:18)\n    at processImmediate (node:internal/timers:466:21)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/scss/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Hello\Desktop\food ordering portal\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\Hello\Desktop\food ordering portal\resources\scss\app.scss */"./resources/scss/app.scss");


/***/ })

/******/ });