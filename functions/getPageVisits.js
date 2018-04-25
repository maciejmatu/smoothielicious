(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { MongoClient } = __webpack_require__(1);

// const DB_URL = 'mongodb://admin:h3r2a8@ds239097.mlab.com:39097/serverless-smoothielicious';
const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'serverless-smoothielicious';

function connect() {
  return MongoClient.connect(DB_URL);
}

module.exports.addPageVisit = () => {
  return new Promise((resolve, reject) => {
    connect().then(client => {
      const db = client.db(DB_NAME);

      db.collection('info').findOneAndUpdate({}, { $inc: { requests: 1 } }, { projection: { _id: 0 }, returnNewDocument: true }).then(result => resolve(result.value));
    });
  });
};

module.exports.getPageVisits = () => {
  return new Promise((resolve, reject) => {
    connect().then(client => {
      const db = client.db(DB_NAME);

      db.collection('info').findOne({}, { projection: { _id: 0 } }).then(result => resolve(result));
    });
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const db = __webpack_require__(0);

exports.handler = function (event, context, callback) {
  db.getPageVisits().then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(res)
    });
  }).catch(console.error);
};

/***/ })
/******/ ])));