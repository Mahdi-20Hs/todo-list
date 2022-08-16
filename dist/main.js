/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/check-bold.svg */ "./src/assets/img/check-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/x-svgrepo-com.svg */ "./src/assets/img/x-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/trash-can-outline.svg */ "./src/assets/img/trash-can-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  font-family: 'Raleway', sans-serif;\n  padding: 0%;\n  margin: 0%;\n  box-sizing: border-box;\n}\n\nbody{\n  height: 100vh;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n}\n\n.header{\n  grid-column: 2/-1;\n  grid-row: 1/2;\n  background-color: #333;\n  color: white;\n  height: 55px;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5rem;\n  z-index: 90;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.425);\n}\n\n/* nav-list styles */\n.nav-list{\n  grid-column: 1/2;\n  grid-row: 1/-1;\n  background-color: #333;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 16px 0;\n  gap: 30px;\n  transition-duration: 0.2s;\n  width: 65px;\n  z-index: 100;\n  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.425);\n}\n.nav-list .icon{\n  width: 30px;\n  height: auto;\n  filter: invert(99%) sepia(99%) saturate(2%) hue-rotate(321deg) brightness(106%) contrast(100%);\n}\n.nav-list .arrow-icon{\n  width: 16px;\n  visibility: hidden;\n  cursor: pointer;\n}\n.nav-list > div{\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n  cursor: pointer;\n  color: #ffffff;\n  transition-duration: 0.2s;\n  width: 100%;\n  padding: 5px 16px;\n}\n.nav-list-divs:hover, .clicked{\n  background-color:#3adcb5;\n  color: #333 !important;\n}\n.nav-list img.hovered{\n  filter: invert(19%) sepia(11%) saturate(2%) hue-rotate(117deg) brightness(93%) contrast(95%) !important;\n}\n.nav-list h3{\n  visibility: hidden;\n  width: 100%;\n  padding-left: 10px;\n  font-size: 1.3rem;\n}\n.nav-list .home{\n  margin-top: 16px;\n}\n.nav-list .settings{\n  margin-top: auto;\n  margin-bottom: 10px;\n}\n.projects{\n  position: relative;\n}\n.projects:hover{\n  cursor: default;\n}\n.projects > span{\n  position: absolute;\n  bottom: -250px;\n  left: 32px;\n  width: 150px;\n  height: 250px;\n  visibility: hidden;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow-y: auto;\n  padding: 3px 0;\n}\n.add-project-btn{\n  border: 2px solid rgb(99, 98, 98);\n  cursor: pointer;\n  padding: 3px 0;\n  text-align: center;\n  transition-duration: 0.2s;\n  color: white;\n  width: 150px;\n  align-self: center;\n  margin-top: 3px;\n  font-size: 1rem;\n}\n.add-project-btn:hover{\n  background-color: rgb(99, 98, 98);\n}\n.input-container{\n  position: relative;\n}\n.input-container > input{\n  height: 22px;\n  width: 100%;\n  background-color: transparent;\n  color: white;\n  border: none;\n  border-bottom: 1px solid rgb(99, 98, 98);\n  outline: none;\n  font-size: 0.9rem;\n}\n.input-container span{\n  position: absolute;\n  top: 30px;\n  background-size: cover;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n.input-container .add-project{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: #3adcb5;\n  left: 0px;\n}\n\n.input-container .cancel-project{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-color: #fc2d2d;\n  right: 0px;\n}\n.custom-project{\n  cursor: pointer;\n  text-align: center;\n  padding: 2px 0;\n  font-size: 1rem;\n}\n.custom-project:hover:not(.custom-project.clicked){\n  background-color: rgb(27, 27, 27);\n}\n\n/* main styles */\n.main{\n  grid-column: 2/-1;\n  grid-row: 2/-1;\n  position: relative;\n  display: grid;\n  grid-template-columns: 3fr 350px;\n  grid-template-rows: auto 1fr;\n  background-color: #f2f2f2;\n}\n\n/* form styles */\n.form-container{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 120;\n  background-color: rgba(0, 0, 0, 0.37);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n}\n.task-form{\n  width: 30vw;\n  height: 350px;\n  background-color: #f2f2f2;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  row-gap: 16px;\n  column-gap: 10px;\n  padding: 16px;\n  transform: scale(0);\n  transition-duration: 0.3s;\n  border-radius: 5px;\n}\n.task-form input, .task-form select, .task-form textarea{\n  padding: 2px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid rgb(161, 161, 161);\n  font-size: 1.1rem;\n  resize: none;\n}\n.task-form label{\n  font-size: 1.1rem;\n}\n.task-form .form-btns{\n  grid-column: 1/-1;\n  border-radius: 0 0 5px 5px;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  margin: -16px;\n  margin-top: 10px;\n  padding: 10px 0px;\n  background-color: #333;\n}\n.form-btns button{\n  font-size: 1.2rem;\n  width: 100px;\n  border: none;\n  padding: 5px 0;\n  cursor: pointer;\n  border-radius: 5px;\n  transition-duration: 0.2s;\n}\n.form-btns .add-btn{\n  background-color: #3adcb5;\n}\n.form-btns .add-btn:hover{\n  background-color: #34c5a3;\n}\n.form-btns .cancel-btn{\n  background-color: #fc2d2d;\n}\n.form-btns .cancel-btn:hover{\n  background-color: #e62929;\n}\n\n/* tasks-container styles */\n.project-title{\n  padding: 20px 0 0 20px;\n}\n.tasks-container{\n  grid-column: 1/2;\n  grid-row: 2/-1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 20px;\n}\n.tasks-container .add-task-btn{\n  background-color: white;\n  border-radius: 5px;\n  font-size: 1.2rem;\n  padding: 5px 5px;\n  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.26);\n  width: 70%;\n  text-align: center;\n  cursor: pointer;\n  transition-duration: 0.2s;\n}\n.tasks-container .add-task-btn:hover{\n  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.356);\n}\n.tasks-container .task-element{\n  display: flex;\n  justify-content: flex-start;\n  gap: 20px;\n  font-size: 1.2rem;\n  width: 70%;\n}\n.task-element .task-checkbox{\n  width: 14px;\n  height: 14px;\n  margin-top: 5px;\n  margin-right: -5px;\n}\n.task-element .task-title{\n  cursor: pointer;\n}\n.task-element .task-title:hover{\n  text-decoration: underline;\n}\n.task-element .task-title.checked, .task-priority.checked, .task-due-date.checked{\n  text-decoration: line-through;\n  opacity: 0.5;\n  cursor: default;\n}\n.task-delete-btn{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  width: 23px;\n  height: 23px;\n  filter: invert(53%) sepia(11%) saturate(0%) hue-rotate(186deg) brightness(92%) contrast(79%);\n  cursor: pointer;\n  margin-left: auto;\n}\n.task-delete-btn:hover{\n  filter: invert(9%) sepia(96%) saturate(5625%) hue-rotate(2deg) brightness(97%) contrast(113%);\n}\n\n/* sidebar styles */\n.sidebar{\n  grid-column: 2/-1;\n  grid-row: 2/-1;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  font-size: 1.3rem;\n  background-color: white;\n  padding: 10px;\n  border-top-left-radius: 5px;\n  box-shadow: -1px -2px 5px rgba(0, 0, 0, 0.26);\n}\n.sidebar > div{\n  display: none;\n  grid-template-columns: 1fr 2fr;\n}\n\n.sidebar > h1{\n  color: gray;\n  text-align: center;\n  margin: auto;\n  align-self: center;\n}\n.side-description, .side-note{\n  font-size: 1.1rem;\n  margin-top: 10px;\n  word-wrap: break-word;\n}\n.side-priority, .side-date{\n  font-size: 1.2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');\n*{\n  font-family: 'Raleway', sans-serif;\n  padding: 0%;\n  margin: 0%;\n  box-sizing: border-box;\n}\n\nbody{\n  height: 100vh;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n}\n\n.header{\n  grid-column: 2/-1;\n  grid-row: 1/2;\n  background-color: #333;\n  color: white;\n  height: 55px;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5rem;\n  z-index: 90;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.425);\n}\n\n/* nav-list styles */\n.nav-list{\n  grid-column: 1/2;\n  grid-row: 1/-1;\n  background-color: #333;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 16px 0;\n  gap: 30px;\n  transition-duration: 0.2s;\n  width: 65px;\n  z-index: 100;\n  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.425);\n}\n.nav-list .icon{\n  width: 30px;\n  height: auto;\n  filter: invert(99%) sepia(99%) saturate(2%) hue-rotate(321deg) brightness(106%) contrast(100%);\n}\n.nav-list .arrow-icon{\n  width: 16px;\n  visibility: hidden;\n  cursor: pointer;\n}\n.nav-list > div{\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n  cursor: pointer;\n  color: #ffffff;\n  transition-duration: 0.2s;\n  width: 100%;\n  padding: 5px 16px;\n}\n.nav-list-divs:hover, .clicked{\n  background-color:#3adcb5;\n  color: #333 !important;\n}\n.nav-list img.hovered{\n  filter: invert(19%) sepia(11%) saturate(2%) hue-rotate(117deg) brightness(93%) contrast(95%) !important;\n}\n.nav-list h3{\n  visibility: hidden;\n  width: 100%;\n  padding-left: 10px;\n  font-size: 1.3rem;\n}\n.nav-list .home{\n  margin-top: 16px;\n}\n.nav-list .settings{\n  margin-top: auto;\n  margin-bottom: 10px;\n}\n.projects{\n  position: relative;\n}\n.projects:hover{\n  cursor: default;\n}\n.projects > span{\n  position: absolute;\n  bottom: -250px;\n  left: 32px;\n  width: 150px;\n  height: 250px;\n  visibility: hidden;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow-y: auto;\n  padding: 3px 0;\n}\n.add-project-btn{\n  border: 2px solid rgb(99, 98, 98);\n  cursor: pointer;\n  padding: 3px 0;\n  text-align: center;\n  transition-duration: 0.2s;\n  color: white;\n  width: 150px;\n  align-self: center;\n  margin-top: 3px;\n  font-size: 1rem;\n}\n.add-project-btn:hover{\n  background-color: rgb(99, 98, 98);\n}\n.input-container{\n  position: relative;\n}\n.input-container > input{\n  height: 22px;\n  width: 100%;\n  background-color: transparent;\n  color: white;\n  border: none;\n  border-bottom: 1px solid rgb(99, 98, 98);\n  outline: none;\n  font-size: 0.9rem;\n}\n.input-container span{\n  position: absolute;\n  top: 30px;\n  background-size: cover;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n}\n.input-container .add-project{\n  background-image: url('../img/check-bold.svg');\n  background-color: #3adcb5;\n  left: 0px;\n}\n\n.input-container .cancel-project{\n  background-image: url('../img/x-svgrepo-com.svg');\n  background-color: #fc2d2d;\n  right: 0px;\n}\n.custom-project{\n  cursor: pointer;\n  text-align: center;\n  padding: 2px 0;\n  font-size: 1rem;\n}\n.custom-project:hover:not(.custom-project.clicked){\n  background-color: rgb(27, 27, 27);\n}\n\n/* main styles */\n.main{\n  grid-column: 2/-1;\n  grid-row: 2/-1;\n  position: relative;\n  display: grid;\n  grid-template-columns: 3fr 350px;\n  grid-template-rows: auto 1fr;\n  background-color: #f2f2f2;\n}\n\n/* form styles */\n.form-container{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 120;\n  background-color: rgba(0, 0, 0, 0.37);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n}\n.task-form{\n  width: 30vw;\n  height: 350px;\n  background-color: #f2f2f2;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  row-gap: 16px;\n  column-gap: 10px;\n  padding: 16px;\n  transform: scale(0);\n  transition-duration: 0.3s;\n  border-radius: 5px;\n}\n.task-form input, .task-form select, .task-form textarea{\n  padding: 2px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid rgb(161, 161, 161);\n  font-size: 1.1rem;\n  resize: none;\n}\n.task-form label{\n  font-size: 1.1rem;\n}\n.task-form .form-btns{\n  grid-column: 1/-1;\n  border-radius: 0 0 5px 5px;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  margin: -16px;\n  margin-top: 10px;\n  padding: 10px 0px;\n  background-color: #333;\n}\n.form-btns button{\n  font-size: 1.2rem;\n  width: 100px;\n  border: none;\n  padding: 5px 0;\n  cursor: pointer;\n  border-radius: 5px;\n  transition-duration: 0.2s;\n}\n.form-btns .add-btn{\n  background-color: #3adcb5;\n}\n.form-btns .add-btn:hover{\n  background-color: #34c5a3;\n}\n.form-btns .cancel-btn{\n  background-color: #fc2d2d;\n}\n.form-btns .cancel-btn:hover{\n  background-color: #e62929;\n}\n\n/* tasks-container styles */\n.project-title{\n  padding: 20px 0 0 20px;\n}\n.tasks-container{\n  grid-column: 1/2;\n  grid-row: 2/-1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 20px;\n}\n.tasks-container .add-task-btn{\n  background-color: white;\n  border-radius: 5px;\n  font-size: 1.2rem;\n  padding: 5px 5px;\n  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.26);\n  width: 70%;\n  text-align: center;\n  cursor: pointer;\n  transition-duration: 0.2s;\n}\n.tasks-container .add-task-btn:hover{\n  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.356);\n}\n.tasks-container .task-element{\n  display: flex;\n  justify-content: flex-start;\n  gap: 20px;\n  font-size: 1.2rem;\n  width: 70%;\n}\n.task-element .task-checkbox{\n  width: 14px;\n  height: 14px;\n  margin-top: 5px;\n  margin-right: -5px;\n}\n.task-element .task-title{\n  cursor: pointer;\n}\n.task-element .task-title:hover{\n  text-decoration: underline;\n}\n.task-element .task-title.checked, .task-priority.checked, .task-due-date.checked{\n  text-decoration: line-through;\n  opacity: 0.5;\n  cursor: default;\n}\n.task-delete-btn{\n  background-image: url('../img/trash-can-outline.svg');\n  background-size: cover;\n  width: 23px;\n  height: 23px;\n  filter: invert(53%) sepia(11%) saturate(0%) hue-rotate(186deg) brightness(92%) contrast(79%);\n  cursor: pointer;\n  margin-left: auto;\n}\n.task-delete-btn:hover{\n  filter: invert(9%) sepia(96%) saturate(5625%) hue-rotate(2deg) brightness(97%) contrast(113%);\n}\n\n/* sidebar styles */\n.sidebar{\n  grid-column: 2/-1;\n  grid-row: 2/-1;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  font-size: 1.3rem;\n  background-color: white;\n  padding: 10px;\n  border-top-left-radius: 5px;\n  box-shadow: -1px -2px 5px rgba(0, 0, 0, 0.26);\n}\n.sidebar > div{\n  display: none;\n  grid-template-columns: 1fr 2fr;\n}\n\n.sidebar > h1{\n  color: gray;\n  text-align: center;\n  margin: auto;\n  align-self: center;\n}\n.side-description, .side-note{\n  font-size: 1.1rem;\n  margin-top: 10px;\n  word-wrap: break-word;\n}\n.side-priority, .side-date{\n  font-size: 1.2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/main.css":
/*!************************************!*\
  !*** ./src/assets/styles/main.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBtn": () => (/* binding */ addBtn),
/* harmony export */   "addTaskBtn": () => (/* binding */ addTaskBtn),
/* harmony export */   "arrowBtn": () => (/* binding */ arrowBtn),
/* harmony export */   "cancelBtn": () => (/* binding */ cancelBtn),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "createElements": () => (/* binding */ createElements),
/* harmony export */   "dateDiv": () => (/* binding */ dateDiv),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "descriptionDiv": () => (/* binding */ descriptionDiv),
/* harmony export */   "dueDate": () => (/* binding */ dueDate),
/* harmony export */   "emptyElement": () => (/* binding */ emptyElement),
/* harmony export */   "formContainer": () => (/* binding */ formContainer),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "homeBtn": () => (/* binding */ homeBtn),
/* harmony export */   "homeIcon": () => (/* binding */ homeIcon),
/* harmony export */   "navList": () => (/* binding */ navList),
/* harmony export */   "navListDivs": () => (/* binding */ navListDivs),
/* harmony export */   "navListHeaders": () => (/* binding */ navListHeaders),
/* harmony export */   "navListIcons": () => (/* binding */ navListIcons),
/* harmony export */   "noteDiv": () => (/* binding */ noteDiv),
/* harmony export */   "notes": () => (/* binding */ notes),
/* harmony export */   "pageTitle": () => (/* binding */ pageTitle),
/* harmony export */   "priorities": () => (/* binding */ priorities),
/* harmony export */   "priority": () => (/* binding */ priority),
/* harmony export */   "priorityDiv": () => (/* binding */ priorityDiv),
/* harmony export */   "projectInput": () => (/* binding */ projectInput),
/* harmony export */   "projectsBtn": () => (/* binding */ projectsBtn),
/* harmony export */   "projectsContainer": () => (/* binding */ projectsContainer),
/* harmony export */   "sideDate": () => (/* binding */ sideDate),
/* harmony export */   "sideDescription": () => (/* binding */ sideDescription),
/* harmony export */   "sideNote": () => (/* binding */ sideNote),
/* harmony export */   "sidePriority": () => (/* binding */ sidePriority),
/* harmony export */   "sideTitle": () => (/* binding */ sideTitle),
/* harmony export */   "sidebar": () => (/* binding */ sidebar),
/* harmony export */   "taskForm": () => (/* binding */ taskForm),
/* harmony export */   "tasksContainer": () => (/* binding */ tasksContainer),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "titleDiv": () => (/* binding */ titleDiv),
/* harmony export */   "todayBtn": () => (/* binding */ todayBtn),
/* harmony export */   "weekBtn": () => (/* binding */ weekBtn)
/* harmony export */ });
// elements from the form //
let formContainer = document.querySelector('.form-container');
let taskForm = document.querySelector('.task-form');
let addBtn = document.querySelector('.add-btn');
let cancelBtn = document.querySelector('.cancel-btn');



// data from the form //
let title = document.querySelector('#titleInput');
let description = document.querySelector('#descriptionInput');
let priority = document.querySelector('#priorityInput');
let notes = document.querySelector('#notesInput');
let dueDate = document.querySelector('#dueDate');



// elements from main // 
let container = document.querySelector('.main');
let tasksContainer = document.querySelector('.tasks-container');
let addTaskBtn = createElements('div', 'add-task-btn', 'Add a new task');
let pageTitle = document.querySelector('.project-title');
let home = document.querySelector('.home');
let homeIcon = document.querySelector('.home img');



//elements from sidebar //
let sidebar = document.querySelector('.sidebar');

let titleDiv = document.querySelector('.title-div');
let sideTitle = document.querySelector('.side-title');

let descriptionDiv = document.querySelector('.description-div');
let sideDescription = document.querySelector('.side-description');

let dateDiv = document.querySelector('.date-div');
let sideDate = document.querySelector('.side-date');

let priorityDiv = document.querySelector('.priority-div');
let sidePriority = document.querySelector('.side-priority');
let high = document.querySelector('.high');
let medium = document.querySelector('.medium');
let low = document.querySelector('.low');

let noteDiv = document.querySelector('.note-div');
let sideNote = document.querySelector('.side-note');
let priorities = [high, medium, low];
let emptyElement = document.querySelector('.sidebar > h1');



//elements from nav-list //
const navList = document.querySelector('.nav-list');
const navListDivs = document.querySelectorAll('.nav-list-divs');
const navListIcons = document.querySelectorAll('.navlist .icon');
const navListHeaders = document.querySelectorAll('.nav-list h3');
const homeBtn = document.querySelector('.home');
const weekBtn = document.querySelector('.week');
const todayBtn = document.querySelector('.today');
const projectsBtn = document.querySelector('.projects');
const projectsContainer = document.querySelector('.projects-container');
const arrowBtn = document.querySelector('.arrow-icon');
const projectInput = document.querySelector('.project-input');



// functions used in different modules //
function createElements(type, className, content){
  const ele = document.createElement(`${type}`);
  if(className){
    ele.classList.add(`${className}`);
  }
  if(content){
    ele.textContent = content;
  }
  return ele
}




/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskToArr": () => (/* binding */ addTaskToArr)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/modules/DOM.js");


function CreateTask(){
  let titles = Array.from(document.querySelectorAll('.task-title'));
  let task = {};

  for(let i in titles){
    if(titles[i].textContent === _DOM_js__WEBPACK_IMPORTED_MODULE_0__.title.value){
      alert('Choose a different name');
      return;
    }
  }
  
  task.title = _DOM_js__WEBPACK_IMPORTED_MODULE_0__.title.value;
  task.dueDate = _DOM_js__WEBPACK_IMPORTED_MODULE_0__.dueDate.value;
  task.description = _DOM_js__WEBPACK_IMPORTED_MODULE_0__.description.value;
  task.priority = _DOM_js__WEBPACK_IMPORTED_MODULE_0__.priority.value;
  task.notes = _DOM_js__WEBPACK_IMPORTED_MODULE_0__.notes.value;
  task.checked = false;
  titles.push(_DOM_js__WEBPACK_IMPORTED_MODULE_0__.title.value);
  return task
}

function addTaskToArr(arr){
  let task = CreateTask()
  if(task !== undefined){
    arr.push(task)
  }
}



/***/ }),

/***/ "./src/modules/changeDate.js":
/*!***********************************!*\
  !*** ./src/modules/changeDate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeDate": () => (/* binding */ changeDate)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/modules/sidebar.js");


function findIndex(arr){
  let index;

  for(let i = 0; i < arr.length; i++){
    if(arr[i].title === _sidebar__WEBPACK_IMPORTED_MODULE_0__.sideTitle.textContent){
      index = i;
    }
  }
  
  return index;
}

function changeDate(arr){
  let index = findIndex(arr);
  arr[index].dueDate = _sidebar__WEBPACK_IMPORTED_MODULE_0__.sideDate.value;
}



/***/ }),

/***/ "./src/modules/changePriority.js":
/*!***************************************!*\
  !*** ./src/modules/changePriority.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePriority": () => (/* binding */ changePriority)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/modules/sidebar.js");


function findIndex(arr){
  let index;

  for(let i=0; i<arr.length; i++){
    if(arr[i].title === _sidebar__WEBPACK_IMPORTED_MODULE_0__.sideTitle.textContent){
      index = i;
    }
  }
  
  return index;
}

function changePriority(arr){
  let index = findIndex(arr);
  arr[index].priority = _sidebar__WEBPACK_IMPORTED_MODULE_0__.sidePriority.value;
}



/***/ }),

/***/ "./src/modules/changeStyle.js":
/*!************************************!*\
  !*** ./src/modules/changeStyle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeStyle": () => (/* binding */ changeStyle),
/* harmony export */   "onloadStyle": () => (/* binding */ onloadStyle)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/modules/DOM.js");


function changeStyle(){
  _DOM__WEBPACK_IMPORTED_MODULE_0__.navListDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.children[0].classList.add('hovered');
    })
    div.addEventListener('mouseout', () => {
      div.children[0].classList.remove('hovered');
    })

    div.addEventListener('click', () => {
      _DOM__WEBPACK_IMPORTED_MODULE_0__.navListDivs.forEach((i) => {
        i.classList.remove('clicked')
        i.children[0].style.filter = 'invert(99%) sepia(99%) saturate(2%) hue-rotate(321deg) brightness(106%) contrast(100%)';
        
        let projects = Array.from(_DOM__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.children);
        projects.forEach((project) => {
        project.classList.remove('clicked')
        })
      });
      
      div.classList.add('clicked');
      div.children[0].style.filter = 'invert(19%) sepia(11%) saturate(2%) hue-rotate(117deg) brightness(93%) contrast(95%)';
    })
  })

  _DOM__WEBPACK_IMPORTED_MODULE_0__.navList.addEventListener('mouseover', () => {
    _DOM__WEBPACK_IMPORTED_MODULE_0__.navList.style.width = '200px'
    _DOM__WEBPACK_IMPORTED_MODULE_0__.navListHeaders.forEach((header) => {
      header.style.visibility = 'visible';
    });
    _DOM__WEBPACK_IMPORTED_MODULE_0__.arrowBtn.style.visibility = 'visible';
  })

  _DOM__WEBPACK_IMPORTED_MODULE_0__.navList.addEventListener('mouseout', () => {
    if(_DOM__WEBPACK_IMPORTED_MODULE_0__.arrowBtn.style.transform != 'rotate(180deg)'){
      _DOM__WEBPACK_IMPORTED_MODULE_0__.navList.style.width = '65px'
      _DOM__WEBPACK_IMPORTED_MODULE_0__.navListHeaders.forEach((header) => {
        header.style.visibility = 'hidden';
      });
      _DOM__WEBPACK_IMPORTED_MODULE_0__.arrowBtn.style.visibility = 'hidden';
      _DOM__WEBPACK_IMPORTED_MODULE_0__.arrowBtn.style.transitionDuration = '0s';
    }else{
      _DOM__WEBPACK_IMPORTED_MODULE_0__.navList.style.width = '200px'
    }
  })

  _DOM__WEBPACK_IMPORTED_MODULE_0__.arrowBtn.addEventListener('click', () => {
    if(_DOM__WEBPACK_IMPORTED_MODULE_0__.arrowBtn.style.transform != 'rotate(180deg)'){
      _DOM__WEBPACK_IMPORTED_MODULE_0__.arrowBtn.style.transitionDuration = '0.2s'
      _DOM__WEBPACK_IMPORTED_MODULE_0__.arrowBtn.style.transform = 'rotate(180deg)'
      _DOM__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.style.visibility = 'visible';
    }else{
      _DOM__WEBPACK_IMPORTED_MODULE_0__.arrowBtn.style.transform = 'none';
      _DOM__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.style.visibility = 'hidden';
    }
  })

  document.addEventListener('click', e => {
    if(e.target.matches('.custom-project')){
      _DOM__WEBPACK_IMPORTED_MODULE_0__.navListDivs.forEach((i) => {
        i.classList.remove('clicked')
        i.children[0].style.filter = 'invert(99%) sepia(99%) saturate(2%) hue-rotate(321deg) brightness(106%) contrast(100%)';

        let projects = Array.from(_DOM__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.children);
        projects.forEach((project) => {
          project.classList.remove('clicked')
        })
      });
      e.target.classList.add('clicked');
    }
  })
}
function onloadStyle(){
  _DOM__WEBPACK_IMPORTED_MODULE_0__.home.classList.add('clicked');
  _DOM__WEBPACK_IMPORTED_MODULE_0__.homeIcon.style.filter = 'invert(19%) sepia(11%) saturate(2%) hue-rotate(117deg) brightness(93%) contrast(95%)';
}


/***/ }),

/***/ "./src/modules/checkTask.js":
/*!**********************************!*\
  !*** ./src/modules/checkTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTask": () => (/* binding */ checkTask),
/* harmony export */   "uncheckTask": () => (/* binding */ uncheckTask)
/* harmony export */ });
function checkTask(arr, index){
  let task = arr[index];
  task.checked = true;
}

function uncheckTask(arr, index){
  let task = arr[index];
  task.checked = false
}



/***/ }),

/***/ "./src/modules/deleteTask.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
function deleteTask(arr, index){
  arr.splice(index, 1)
}



/***/ }),

/***/ "./src/modules/renderTasks.js":
/*!************************************!*\
  !*** ./src/modules/renderTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/modules/DOM.js");


function createTaskElement(task){

  let element = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createElements)('div', 'task-element');
  let checkbox = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createElements)('input', 'task-checkbox');
  let title = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createElements)('div', 'task-title', task.title);
  let priorityElement = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createElements)('div', 'task-priority');
  let dueDate = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createElements)('div', 'task-due-date');
  let deleteBtn = (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createElements)('div', 'task-delete-btn');

  dueDate.textContent = task.dueDate;
  checkbox.type = 'checkbox';
  priorityElement.textContent = task.priority;

  if(task.checked === true){
    checkbox.checked = 'checked';
    title.classList.add('checked');
    priorityElement.classList.add('checked');
    dueDate.classList.add('checked')
  }

  element.append(checkbox, title, priorityElement, dueDate, deleteBtn);
  return element
}

function renderTasks(tasks){
  _DOM__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.innerHTML = '';
  for(let i in tasks){
    let taskElement = createTaskElement(tasks[i]);
    _DOM__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.appendChild(taskElement);
  }
  _DOM__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.appendChild(_DOM__WEBPACK_IMPORTED_MODULE_0__.addTaskBtn);
}



/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptySidebar": () => (/* binding */ emptySidebar),
/* harmony export */   "populateSidebar": () => (/* binding */ populateSidebar),
/* harmony export */   "sideDate": () => (/* reexport safe */ _DOM__WEBPACK_IMPORTED_MODULE_0__.sideDate),
/* harmony export */   "sidePriority": () => (/* reexport safe */ _DOM__WEBPACK_IMPORTED_MODULE_0__.sidePriority),
/* harmony export */   "sideTitle": () => (/* reexport safe */ _DOM__WEBPACK_IMPORTED_MODULE_0__.sideTitle)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/modules/DOM.js");


function populateSidebar(arr, index){
  let task = arr[index];

  _DOM__WEBPACK_IMPORTED_MODULE_0__.sideTitle.textContent = `${task.title}`;
  _DOM__WEBPACK_IMPORTED_MODULE_0__.sideDescription.textContent = `${task.description}`;
  _DOM__WEBPACK_IMPORTED_MODULE_0__.sideDate.value = task.dueDate;

  _DOM__WEBPACK_IMPORTED_MODULE_0__.priorities.forEach((item) => {
    item.removeAttribute('selected')
  })
  if(task.priority == 'High'){
    _DOM__WEBPACK_IMPORTED_MODULE_0__.priorities[0].setAttribute('selected', 'selected');
  }else if(task.priority == 'Medium'){
    _DOM__WEBPACK_IMPORTED_MODULE_0__.priorities[1].setAttribute('selected', 'selected');
  }else{
    _DOM__WEBPACK_IMPORTED_MODULE_0__.priorities[2].setAttribute('selected', 'selected');
  }

  _DOM__WEBPACK_IMPORTED_MODULE_0__.sideNote.textContent = `${task.notes}`;

  _DOM__WEBPACK_IMPORTED_MODULE_0__.titleDiv.style.display = 'grid';
  _DOM__WEBPACK_IMPORTED_MODULE_0__.descriptionDiv.style.display = 'block';
  _DOM__WEBPACK_IMPORTED_MODULE_0__.dateDiv.style.display = 'grid';
  _DOM__WEBPACK_IMPORTED_MODULE_0__.priorityDiv.style.display = 'grid';
  _DOM__WEBPACK_IMPORTED_MODULE_0__.noteDiv.style.display = 'block';
  _DOM__WEBPACK_IMPORTED_MODULE_0__.emptyElement.style.display = 'none'
}


function emptySidebar(arr, index){
  let task = arr[index];
  
  if(task === undefined){
    _DOM__WEBPACK_IMPORTED_MODULE_0__.emptyElement.style.display = 'block'

  }else if(task.title === _DOM__WEBPACK_IMPORTED_MODULE_0__.sideTitle.textContent){
    _DOM__WEBPACK_IMPORTED_MODULE_0__.titleDiv.style.display = 'none';
    _DOM__WEBPACK_IMPORTED_MODULE_0__.descriptionDiv.style.display = 'none';
    _DOM__WEBPACK_IMPORTED_MODULE_0__.dateDiv.style.display = 'none';
    _DOM__WEBPACK_IMPORTED_MODULE_0__.priorityDiv.style.display = 'none';
    _DOM__WEBPACK_IMPORTED_MODULE_0__.noteDiv.style.display = 'none';
    _DOM__WEBPACK_IMPORTED_MODULE_0__.emptyElement.style.display = 'block'
  }
}



/***/ }),

/***/ "./src/modules/taskForm.js":
/*!*********************************!*\
  !*** ./src/modules/taskForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindEventsToForm": () => (/* binding */ bindEventsToForm),
/* harmony export */   "hideForm": () => (/* binding */ hideForm),
/* harmony export */   "showForm": () => (/* binding */ showForm)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/modules/DOM.js");
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask.js */ "./src/modules/addTask.js");
/* harmony import */ var _renderTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasks.js */ "./src/modules/renderTasks.js");




function showForm(){
  _DOM_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.style.visibility = 'visible';
  _DOM_js__WEBPACK_IMPORTED_MODULE_0__.taskForm.style.transform = 'scale(1)';
}
function hideForm(){
  _DOM_js__WEBPACK_IMPORTED_MODULE_0__.taskForm.style.transform = 'scale(0)';
  _DOM_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.style.visibility = 'hidden';
}


function bindEventsToForm(arr){
  _DOM_js__WEBPACK_IMPORTED_MODULE_0__.addBtn.addEventListener('click', () => {
    (0,_addTask_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToArr)(arr);
    (0,_renderTasks_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(arr);
    hideForm();

  }, {once: true})
  
  _DOM_js__WEBPACK_IMPORTED_MODULE_0__.cancelBtn.addEventListener('click', () => {
    hideForm();
  });
}



/***/ }),

/***/ "./src/assets/img/check-bold.svg":
/*!***************************************!*\
  !*** ./src/assets/img/check-bold.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d47351b83650f2a3b7e5.svg";

/***/ }),

/***/ "./src/assets/img/trash-can-outline.svg":
/*!**********************************************!*\
  !*** ./src/assets/img/trash-can-outline.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

/***/ }),

/***/ "./src/assets/img/x-svgrepo-com.svg":
/*!******************************************!*\
  !*** ./src/assets/img/x-svgrepo-com.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f99ae5e7bd328fbfc8e.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/main.css */ "./src/assets/styles/main.css");
/* harmony import */ var _modules_renderTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderTasks */ "./src/modules/renderTasks.js");
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");
/* harmony import */ var _modules_taskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/taskForm */ "./src/modules/taskForm.js");
/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sidebar */ "./src/modules/sidebar.js");
/* harmony import */ var _modules_deleteTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/deleteTask */ "./src/modules/deleteTask.js");
/* harmony import */ var _modules_checkTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkTask */ "./src/modules/checkTask.js");
/* harmony import */ var _modules_changeDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/changeDate */ "./src/modules/changeDate.js");
/* harmony import */ var _modules_changePriority__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/changePriority */ "./src/modules/changePriority.js");
/* harmony import */ var _modules_changeStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/changeStyle */ "./src/modules/changeStyle.js");











(0,_modules_changeStyle__WEBPACK_IMPORTED_MODULE_9__.changeStyle)()
function findObject(target){
  let obj;
  for(let i = 0; i < pages.length; i++){
    if(pages[i].title === target.textContent){
      obj = pages[i];
      break;
    }
  }
  return obj;
}
function findIndex(arr, target){
  let index
  for(let i = 0; i < arr.length; i++){
    if(arr[i].title == target.textContent){
      index = i;
      break;
    }
  }
  return index;
}
function checkProjectName(name){
  let projectNames = Array.from(document.querySelectorAll('.custom-project'));
  for(let i in projectNames){
    if(projectNames[i].textContent === name){
      alert('Choose a different name');
      return false
    }else{
      return true
    }
  }
  return true
}



let addProjectBtn = (0,_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.createElements)('div', 'add-project-btn', 'Add new project');
_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.append(addProjectBtn);


addProjectBtn.addEventListener('click', () => {

  _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.removeChild(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.lastChild);
  let div = (0,_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.createElements)('div', 'input-container');

  let projectInput = (0,_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.createElements)('input', 'project-input');
  let addProject = (0,_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.createElements)('span', 'add-project');
  let cancelProject = (0,_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.createElements)('span', 'cancel-project');
  div.append(projectInput, addProject, cancelProject);

  projectInput.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
      let projectTitle = document.querySelector('.project-input').value;
      if(checkProjectName(projectTitle) === true){
        let project = {};
        project.title = projectTitle;
        project.tasks = [];
        pages.push(project);

        let projectElement = (0,_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.createElements)('div', `custom-project`, `${projectTitle}`);
        _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.removeChild(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.lastChild);
        _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.append(projectElement);
        _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.append(addProjectBtn);
      }
    }
  })
  _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.append(div);
});

document.addEventListener('click', e => {
  if(e.target.matches('.add-project')){
    let projectTitle = document.querySelector('.project-input').value;

    if(checkProjectName(projectTitle) === true){
      let project = {};
      project.title = projectTitle;
      project.tasks = []
      pages.push(project);

      let projectElement = (0,_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.createElements)('div', `custom-project`, `${projectTitle}`);
      _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.removeChild(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.lastChild);
      _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.append(projectElement);
      _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.append(addProjectBtn);
    }
  }
})


document.addEventListener('click', e => {
  if(e.target.matches('.cancel-project')){
    _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.removeChild(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.lastChild);
    _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.projectsContainer.append(addProjectBtn);
  }
})

document.addEventListener('click', e => {
  if(e.target.matches('.custom-project')){
    let obj = findObject(e.target);
    _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.pageTitle.textContent = obj.title;
    (0,_modules_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(obj.tasks);
  }
})

let homePage = {
  title: 'Home',
  tasks: [],
}
let todayPage = {
  title: 'Today',
  tasks: [],
};
let weekPage = {
  title: 'week',
  tasks: [],
};
let pages = [homePage, todayPage, weekPage];


window.onload = function(){
  _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.pageTitle.textContent = homePage.title;
  (0,_modules_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(homePage.tasks);
  (0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_4__.emptySidebar)([], 0);
  (0,_modules_changeStyle__WEBPACK_IMPORTED_MODULE_9__.onloadStyle)()
};

_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.homeBtn.addEventListener('click', () => {
  _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.pageTitle.textContent = homePage.title;
  (0,_modules_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(homePage.tasks);
});

_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.todayBtn.addEventListener('click', () => {
  _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.pageTitle.textContent = todayPage.title;
  (0,_modules_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(todayPage.tasks);
});

_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.weekBtn.addEventListener('click', () => {
  _modules_DOM__WEBPACK_IMPORTED_MODULE_2__.pageTitle.textContent = weekPage.title;
  (0,_modules_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(weekPage.tasks);
});

_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.addTaskBtn.addEventListener('click', () => {
  let obj = findObject(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.pageTitle);
  let arr = obj.tasks;
  (0,_modules_taskForm__WEBPACK_IMPORTED_MODULE_3__.showForm)();
  (0,_modules_taskForm__WEBPACK_IMPORTED_MODULE_3__.bindEventsToForm)(arr);
});


document.addEventListener('click', e => {
  if(e.target.matches('.task-title')){
    let obj = findObject(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.pageTitle)
    let arr = obj.tasks;
    let index =findIndex(arr, e.target);
    (0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_4__.populateSidebar)(arr, index);
  }
})

document.addEventListener('click', e => {
  if(e.target.matches('.task-delete-btn')){
    let obj = findObject(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.pageTitle)
    let arr = obj.tasks;
    let index = findIndex(arr, e.target.parentElement.children[1]);

    (0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_4__.emptySidebar)(arr, index);
    (0,_modules_deleteTask__WEBPACK_IMPORTED_MODULE_5__.deleteTask)(arr, index);
    (0,_modules_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(arr)
  }
})

document.addEventListener('click', e => {
  if(e.target.matches('.task-checkbox')){
    let obj = findObject(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.pageTitle)
    let arr = obj.tasks;
    let index = findIndex(arr, e.target.parentElement.children[1]);

    if(arr[index].checked === false){
      (0,_modules_checkTask__WEBPACK_IMPORTED_MODULE_6__.checkTask)(arr, index);
      (0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_4__.emptySidebar)(arr, index)
    }else{
      (0,_modules_checkTask__WEBPACK_IMPORTED_MODULE_6__.uncheckTask)(arr,index)
    }

    (0,_modules_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(arr);
  }
})

document.addEventListener('change', e => {
  if(e.target.matches('.side-date')){
    let obj = findObject(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.pageTitle)
    let arr = obj.tasks;
    (0,_modules_changeDate__WEBPACK_IMPORTED_MODULE_7__.changeDate)(arr);
    (0,_modules_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(arr)
  }
});

document.addEventListener('change', e => {
  if(e.target.matches('.side-priority')){
    let obj = findObject(_modules_DOM__WEBPACK_IMPORTED_MODULE_2__.pageTitle)
    let arr = obj.tasks;
    (0,_modules_changePriority__WEBPACK_IMPORTED_MODULE_8__.changePriority)(arr);
    (0,_modules_renderTasks__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(arr);
  }
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVB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O0FBQ0E7QUFDQSxJQUFJLGlFQUFlO0FBQ25CO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EseUJBQXlCLG1EQUFTO0FBQ2xDO0FBQ0E7O0FBRUEsSUFBSSw4REFBWTtBQUNoQixJQUFJLCtEQUFVO0FBQ2QsSUFBSSxpRUFBVztBQUNmO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EseUJBQXlCLG1EQUFTO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDZEQUFTO0FBQ2YsTUFBTSw4REFBWTtBQUNsQixLQUFLO0FBQ0wsTUFBTSwrREFBVztBQUNqQjs7QUFFQSxJQUFJLGlFQUFXO0FBQ2Y7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSx5QkFBeUIsbURBQVM7QUFDbEM7QUFDQSxJQUFJLCtEQUFVO0FBQ2QsSUFBSSxpRUFBVztBQUNmO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EseUJBQXlCLG1EQUFTO0FBQ2xDO0FBQ0EsSUFBSSx1RUFBYztBQUNsQixJQUFJLGlFQUFXO0FBQ2Y7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uY3NzPzU1MDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jaGFuZ2VEYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NoYW5nZVByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NoYW5nZVN0eWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NoZWNrVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kZWxldGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlclRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9jaGVjay1ib2xkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy94LXN2Z3JlcG8tY29tLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZy90cmFzaC1jYW4tb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAwJTtcXG4gIG1hcmdpbjogMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB6LWluZGV4OiA5MDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNDI1KTtcXG59XFxuXFxuLyogbmF2LWxpc3Qgc3R5bGVzICovXFxuLm5hdi1saXN0e1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAxNnB4IDA7XFxuICBnYXA6IDMwcHg7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgd2lkdGg6IDY1cHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3gtc2hhZG93OiAycHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNDI1KTtcXG59XFxuLm5hdi1saXN0IC5pY29ue1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMzIxZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMCUpO1xcbn1cXG4ubmF2LWxpc3QgLmFycm93LWljb257XFxuICB3aWR0aDogMTZweDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdi1saXN0ID4gZGl2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4IDE2cHg7XFxufVxcbi5uYXYtbGlzdC1kaXZzOmhvdmVyLCAuY2xpY2tlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IzNhZGNiNTtcXG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XFxufVxcbi5uYXYtbGlzdCBpbWcuaG92ZXJlZHtcXG4gIGZpbHRlcjogaW52ZXJ0KDE5JSkgc2VwaWEoMTElKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgxMTdkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg5NSUpICFpbXBvcnRhbnQ7XFxufVxcbi5uYXYtbGlzdCBoM3tcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi5uYXYtbGlzdCAuaG9tZXtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcbi5uYXYtbGlzdCAuc2V0dGluZ3N7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnByb2plY3Rze1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJvamVjdHM6aG92ZXJ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5wcm9qZWN0cyA+IHNwYW57XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0yNTBweDtcXG4gIGxlZnQ6IDMycHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAzcHggMDtcXG59XFxuLmFkZC1wcm9qZWN0LWJ0bntcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5OSwgOTgsIDk4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDNweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgOTgsIDk4KTtcXG59XFxuLmlucHV0LWNvbnRhaW5lcntcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmlucHV0LWNvbnRhaW5lciA+IGlucHV0e1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoOTksIDk4LCA5OCk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5pbnB1dC1jb250YWluZXIgc3BhbntcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmlucHV0LWNvbnRhaW5lciAuYWRkLXByb2plY3R7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhZGNiNTtcXG4gIGxlZnQ6IDBweDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciAuY2FuY2VsLXByb2plY3R7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjMmQyZDtcXG4gIHJpZ2h0OiAwcHg7XFxufVxcbi5jdXN0b20tcHJvamVjdHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJweCAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uY3VzdG9tLXByb2plY3Q6aG92ZXI6bm90KC5jdXN0b20tcHJvamVjdC5jbGlja2VkKXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMjcsIDI3KTtcXG59XFxuXFxuLyogbWFpbiBzdHlsZXMgKi9cXG4ubWFpbntcXG4gIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgZ3JpZC1yb3c6IDIvLTE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMzUwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLyogZm9ybSBzdHlsZXMgKi9cXG4uZm9ybS1jb250YWluZXJ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEyMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4udGFzay1mb3Jte1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICByb3ctZ2FwOiAxNnB4O1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2stZm9ybSBpbnB1dCwgLnRhc2stZm9ybSBzZWxlY3QsIC50YXNrLWZvcm0gdGV4dGFyZWF7XFxuICBwYWRkaW5nOiAycHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MSwgMTYxLCAxNjEpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi50YXNrLWZvcm0gbGFiZWx7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuLnRhc2stZm9ybSAuZm9ybS1idG5ze1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbjogLTE2cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbn1cXG4uZm9ybS1idG5zIGJ1dHRvbntcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbn1cXG4uZm9ybS1idG5zIC5hZGQtYnRue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhZGNiNTtcXG59XFxuLmZvcm0tYnRucyAuYWRkLWJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNGM1YTM7XFxufVxcbi5mb3JtLWJ0bnMgLmNhbmNlbC1idG57XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmMyZDJkO1xcbn1cXG4uZm9ybS1idG5zIC5jYW5jZWwtYnRuOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MjkyOTtcXG59XFxuXFxuLyogdGFza3MtY29udGFpbmVyIHN0eWxlcyAqL1xcbi5wcm9qZWN0LXRpdGxle1xcbiAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcXG59XFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8tMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLnRhc2tzLWNvbnRhaW5lciAuYWRkLXRhc2stYnRue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxufVxcbi50YXNrcy1jb250YWluZXIgLmFkZC10YXNrLWJ0bjpob3ZlcntcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMzU2KTtcXG59XFxuLnRhc2tzLWNvbnRhaW5lciAudGFzay1lbGVtZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuLnRhc2stZWxlbWVudCAudGFzay1jaGVja2JveHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xcbn1cXG4udGFzay1lbGVtZW50IC50YXNrLXRpdGxle1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay1lbGVtZW50IC50YXNrLXRpdGxlOmhvdmVye1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi50YXNrLWVsZW1lbnQgLnRhc2stdGl0bGUuY2hlY2tlZCwgLnRhc2stcHJpb3JpdHkuY2hlY2tlZCwgLnRhc2stZHVlLWRhdGUuY2hlY2tlZHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4udGFzay1kZWxldGUtYnRue1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMjNweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoMTElKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxODZkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg3OSUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi50YXNrLWRlbGV0ZS1idG46aG92ZXJ7XFxuICBmaWx0ZXI6IGludmVydCg5JSkgc2VwaWEoOTYlKSBzYXR1cmF0ZSg1NjI1JSkgaHVlLXJvdGF0ZSgyZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoMTEzJSk7XFxufVxcblxcbi8qIHNpZGViYXIgc3R5bGVzICovXFxuLnNpZGViYXJ7XFxuICBncmlkLWNvbHVtbjogMi8tMTtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IC0xcHggLTJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcXG59XFxuLnNpZGViYXIgPiBkaXZ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4uc2lkZWJhciA+IGgxe1xcbiAgY29sb3I6IGdyYXk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5zaWRlLWRlc2NyaXB0aW9uLCAuc2lkZS1ub3Rle1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG4uc2lkZS1wcmlvcml0eSwgLnNpZGUtZGF0ZXtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsMENBQTBDO0FBQzVDOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsU0FBUztFQUNULHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw4RkFBOEY7QUFDaEc7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4QjtBQUNBO0VB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LFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5REFBcUQ7RUFDckQsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEZBQTRGO0VBQzVGLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDZGQUE2RjtBQUMvRjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheSZkaXNwbGF5PXN3YXAnKTtcXG4qe1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgbWFyZ2luOiAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHl7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgZ3JpZC1jb2x1bW46IDIvLTE7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNTVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHotaW5kZXg6IDkwO1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC40MjUpO1xcbn1cXG5cXG4vKiBuYXYtbGlzdCBzdHlsZXMgKi9cXG4ubmF2LWxpc3R7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDE2cHggMDtcXG4gIGdhcDogMzBweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB3aWR0aDogNjVweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJveC1zaGFkb3c6IDJweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC40MjUpO1xcbn1cXG4ubmF2LWxpc3QgLmljb257XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoOTklKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgzMjFkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTAwJSk7XFxufVxcbi5uYXYtbGlzdCAuYXJyb3ctaWNvbntcXG4gIHdpZHRoOiAxNnB4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2LWxpc3QgPiBkaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHggMTZweDtcXG59XFxuLm5hdi1saXN0LWRpdnM6aG92ZXIsIC5jbGlja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjojM2FkY2I1O1xcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcXG59XFxuLm5hdi1saXN0IGltZy5ob3ZlcmVke1xcbiAgZmlsdGVyOiBpbnZlcnQoMTklKSBzZXBpYSgxMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDExN2RlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDk1JSkgIWltcG9ydGFudDtcXG59XFxuLm5hdi1saXN0IGgze1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLm5hdi1saXN0IC5ob21le1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuLm5hdi1saXN0IC5zZXR0aW5nc3tcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4ucHJvamVjdHN7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9qZWN0czpob3ZlcntcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLnByb2plY3RzID4gc3BhbntcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTI1MHB4O1xcbiAgbGVmdDogMzJweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3B4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmc6IDNweCAwO1xcbn1cXG4uYWRkLXByb2plY3QtYnRue1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDk5LCA5OCwgOTgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogM3B4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uYWRkLXByb2plY3QtYnRuOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCA5OCwgOTgpO1xcbn1cXG4uaW5wdXQtY29udGFpbmVye1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaW5wdXQtY29udGFpbmVyID4gaW5wdXR7XFxuICBoZWlnaHQ6IDIycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig5OSwgOTgsIDk4KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLmlucHV0LWNvbnRhaW5lciBzcGFue1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaW5wdXQtY29udGFpbmVyIC5hZGQtcHJvamVjdHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL2NoZWNrLWJvbGQuc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FkY2I1O1xcbiAgbGVmdDogMHB4O1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIC5jYW5jZWwtcHJvamVjdHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL3gtc3ZncmVwby1jb20uc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmMyZDJkO1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuLmN1c3RvbS1wcm9qZWN0e1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMnB4IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5jdXN0b20tcHJvamVjdDpob3Zlcjpub3QoLmN1c3RvbS1wcm9qZWN0LmNsaWNrZWQpe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAyNywgMjcpO1xcbn1cXG5cXG4vKiBtYWluIHN0eWxlcyAqL1xcbi5tYWlue1xcbiAgZ3JpZC1jb2x1bW46IDIvLTE7XFxuICBncmlkLXJvdzogMi8tMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAzNTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4vKiBmb3JtIHN0eWxlcyAqL1xcbi5mb3JtLWNvbnRhaW5lcntcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM3KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi50YXNrLWZvcm17XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMzUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIHJvdy1nYXA6IDE2cHg7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udGFzay1mb3JtIGlucHV0LCAudGFzay1mb3JtIHNlbGVjdCwgLnRhc2stZm9ybSB0ZXh0YXJlYXtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYxLCAxNjEsIDE2MSk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLnRhc2stZm9ybSBsYWJlbHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG4udGFzay1mb3JtIC5mb3JtLWJ0bnN7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWFyZ2luOiAtMTZweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxufVxcbi5mb3JtLWJ0bnMgYnV0dG9ue1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB3aWR0aDogMTAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxufVxcbi5mb3JtLWJ0bnMgLmFkZC1idG57XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FkY2I1O1xcbn1cXG4uZm9ybS1idG5zIC5hZGQtYnRuOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0YzVhMztcXG59XFxuLmZvcm0tYnRucyAuY2FuY2VsLWJ0bntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYzJkMmQ7XFxufVxcbi5mb3JtLWJ0bnMgLmNhbmNlbC1idG46aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYyOTI5O1xcbn1cXG5cXG4vKiB0YXNrcy1jb250YWluZXIgc3R5bGVzICovXFxuLnByb2plY3QtdGl0bGV7XFxuICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xcbn1cXG4udGFza3MtY29udGFpbmVye1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4udGFza3MtY29udGFpbmVyIC5hZGQtdGFzay1idG57XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XFxuICB3aWR0aDogNzAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG59XFxuLnRhc2tzLWNvbnRhaW5lciAuYWRkLXRhc2stYnRuOmhvdmVye1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zNTYpO1xcbn1cXG4udGFza3MtY29udGFpbmVyIC50YXNrLWVsZW1lbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB3aWR0aDogNzAlO1xcbn1cXG4udGFzay1lbGVtZW50IC50YXNrLWNoZWNrYm94e1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IC01cHg7XFxufVxcbi50YXNrLWVsZW1lbnQgLnRhc2stdGl0bGV7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLWVsZW1lbnQgLnRhc2stdGl0bGU6aG92ZXJ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnRhc2stZWxlbWVudCAudGFzay10aXRsZS5jaGVja2VkLCAudGFzay1wcmlvcml0eS5jaGVja2VkLCAudGFzay1kdWUtZGF0ZS5jaGVja2Vke1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi50YXNrLWRlbGV0ZS1idG57XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltZy90cmFzaC1jYW4tb3V0bGluZS5zdmcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMjNweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoMTElKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxODZkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCg3OSUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi50YXNrLWRlbGV0ZS1idG46aG92ZXJ7XFxuICBmaWx0ZXI6IGludmVydCg5JSkgc2VwaWEoOTYlKSBzYXR1cmF0ZSg1NjI1JSkgaHVlLXJvdGF0ZSgyZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoMTEzJSk7XFxufVxcblxcbi8qIHNpZGViYXIgc3R5bGVzICovXFxuLnNpZGViYXJ7XFxuICBncmlkLWNvbHVtbjogMi8tMTtcXG4gIGdyaWQtcm93OiAyLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IC0xcHggLTJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcXG59XFxuLnNpZGViYXIgPiBkaXZ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4uc2lkZWJhciA+IGgxe1xcbiAgY29sb3I6IGdyYXk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5zaWRlLWRlc2NyaXB0aW9uLCAuc2lkZS1ub3Rle1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG4uc2lkZS1wcmlvcml0eSwgLnNpZGUtZGF0ZXtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGVsZW1lbnRzIGZyb20gdGhlIGZvcm0gLy9cbmxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG5sZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5sZXQgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKTtcbmxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpO1xuXG5leHBvcnQge2Zvcm1Db250YWluZXIsIHRhc2tGb3JtLCBhZGRCdG4sIGNhbmNlbEJ0bn07XG5cbi8vIGRhdGEgZnJvbSB0aGUgZm9ybSAvL1xubGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlSW5wdXQnKTtcbmxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbklucHV0Jyk7XG5sZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlJbnB1dCcpO1xubGV0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzSW5wdXQnKTtcbmxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcblxuZXhwb3J0IHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBub3RlcywgZHVlRGF0ZX07XG5cbi8vIGVsZW1lbnRzIGZyb20gbWFpbiAvLyBcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xubGV0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpO1xubGV0IGFkZFRhc2tCdG4gPSBjcmVhdGVFbGVtZW50cygnZGl2JywgJ2FkZC10YXNrLWJ0bicsICdBZGQgYSBuZXcgdGFzaycpO1xubGV0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XG5sZXQgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG5sZXQgaG9tZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZSBpbWcnKTtcblxuZXhwb3J0IHt0YXNrc0NvbnRhaW5lciwgIGFkZFRhc2tCdG4sIGNvbnRhaW5lciwgcGFnZVRpdGxlLCBob21lLCBob21lSWNvbn07XG5cbi8vZWxlbWVudHMgZnJvbSBzaWRlYmFyIC8vXG5sZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbmxldCB0aXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1kaXYnKTtcbmxldCBzaWRlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS10aXRsZScpO1xuXG5sZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tZGl2Jyk7XG5sZXQgc2lkZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtZGVzY3JpcHRpb24nKTtcblxubGV0IGRhdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1kaXYnKTtcbmxldCBzaWRlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWRhdGUnKTtcblxubGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWRpdicpO1xubGV0IHNpZGVQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLXByaW9yaXR5Jyk7XG5sZXQgaGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoJyk7XG5sZXQgbWVkaXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lZGl1bScpO1xubGV0IGxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3cnKTtcblxubGV0IG5vdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS1kaXYnKTtcbmxldCBzaWRlTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLW5vdGUnKTtcbmxldCBwcmlvcml0aWVzID0gW2hpZ2gsIG1lZGl1bSwgbG93XTtcbmxldCBlbXB0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhciA+IGgxJyk7XG5cbmV4cG9ydCB7c2lkZWJhcix0aXRsZURpdiwgc2lkZVRpdGxlLCBkZXNjcmlwdGlvbkRpdiwgc2lkZURlc2NyaXB0aW9uLCBkYXRlRGl2LCBzaWRlRGF0ZSwgcHJpb3JpdHlEaXYsIHNpZGVQcmlvcml0eSwgcHJpb3JpdGllcywgbm90ZURpdiwgc2lkZU5vdGUsIGVtcHR5RWxlbWVudH1cblxuLy9lbGVtZW50cyBmcm9tIG5hdi1saXN0IC8vXG5jb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saXN0Jyk7XG5jb25zdCBuYXZMaXN0RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGlzdC1kaXZzJyk7XG5jb25zdCBuYXZMaXN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2bGlzdCAuaWNvbicpO1xuY29uc3QgbmF2TGlzdEhlYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpc3QgaDMnKTtcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrJyk7XG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuY29uc3QgYXJyb3dCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctaWNvbicpO1xuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW5wdXQnKTtcblxuZXhwb3J0IHsgbmF2TGlzdCwgbmF2TGlzdEhlYWRlcnMsIGhvbWVCdG4sIHdlZWtCdG4sIHRvZGF5QnRuLCBwcm9qZWN0c0J0biwgcHJvamVjdHNDb250YWluZXIsIG5hdkxpc3REaXZzLCBuYXZMaXN0SWNvbnMsIGFycm93QnRuLCBwcm9qZWN0SW5wdXR9O1xuXG4vLyBmdW5jdGlvbnMgdXNlZCBpbiBkaWZmZXJlbnQgbW9kdWxlcyAvL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudHModHlwZSwgY2xhc3NOYW1lLCBjb250ZW50KXtcbiAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICBpZihjbGFzc05hbWUpe1xuICAgIGVsZS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcbiAgfVxuICBpZihjb250ZW50KXtcbiAgICBlbGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICB9XG4gIHJldHVybiBlbGVcbn1cblxuXG5leHBvcnQge2NyZWF0ZUVsZW1lbnRzfTsiLCJpbXBvcnQge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIG5vdGVzLCBkdWVEYXRlfSBmcm9tICcuL0RPTS5qcyc7XG5cbmZ1bmN0aW9uIENyZWF0ZVRhc2soKXtcbiAgbGV0IHRpdGxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stdGl0bGUnKSk7XG4gIGxldCB0YXNrID0ge307XG5cbiAgZm9yKGxldCBpIGluIHRpdGxlcyl7XG4gICAgaWYodGl0bGVzW2ldLnRleHRDb250ZW50ID09PSB0aXRsZS52YWx1ZSl7XG4gICAgICBhbGVydCgnQ2hvb3NlIGEgZGlmZmVyZW50IG5hbWUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgXG4gIHRhc2sudGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcbiAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xuICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWU7XG4gIHRhc2subm90ZXMgPSBub3Rlcy52YWx1ZTtcbiAgdGFzay5jaGVja2VkID0gZmFsc2U7XG4gIHRpdGxlcy5wdXNoKHRpdGxlLnZhbHVlKTtcbiAgcmV0dXJuIHRhc2tcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvQXJyKGFycil7XG4gIGxldCB0YXNrID0gQ3JlYXRlVGFzaygpXG4gIGlmKHRhc2sgIT09IHVuZGVmaW5lZCl7XG4gICAgYXJyLnB1c2godGFzaylcbiAgfVxufVxuXG5leHBvcnQge2FkZFRhc2tUb0Fycn07IiwiaW1wb3J0IHsgc2lkZVRpdGxlLCBzaWRlRGF0ZSB9IGZyb20gXCIuL3NpZGViYXJcIjtcblxuZnVuY3Rpb24gZmluZEluZGV4KGFycil7XG4gIGxldCBpbmRleDtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBpZihhcnJbaV0udGl0bGUgPT09IHNpZGVUaXRsZS50ZXh0Q29udGVudCl7XG4gICAgICBpbmRleCA9IGk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZURhdGUoYXJyKXtcbiAgbGV0IGluZGV4ID0gZmluZEluZGV4KGFycik7XG4gIGFycltpbmRleF0uZHVlRGF0ZSA9IHNpZGVEYXRlLnZhbHVlO1xufVxuXG5leHBvcnQgeyBjaGFuZ2VEYXRlIH07IiwiaW1wb3J0IHsgc2lkZVRpdGxlLCBzaWRlUHJpb3JpdHkgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnIpe1xuICBsZXQgaW5kZXg7XG5cbiAgZm9yKGxldCBpPTA7IGk8YXJyLmxlbmd0aDsgaSsrKXtcbiAgICBpZihhcnJbaV0udGl0bGUgPT09IHNpZGVUaXRsZS50ZXh0Q29udGVudCl7XG4gICAgICBpbmRleCA9IGk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KGFycil7XG4gIGxldCBpbmRleCA9IGZpbmRJbmRleChhcnIpO1xuICBhcnJbaW5kZXhdLnByaW9yaXR5ID0gc2lkZVByaW9yaXR5LnZhbHVlO1xufVxuXG5leHBvcnQge2NoYW5nZVByaW9yaXR5fTsiLCJpbXBvcnQgeyBuYXZMaXN0RGl2cywgbmF2TGlzdCwgbmF2TGlzdEhlYWRlcnMsIGFycm93QnRuLCBwcm9qZWN0c0NvbnRhaW5lciwgcHJvamVjdElucHV0LCBob21lLCBob21lSWNvbiB9IGZyb20gXCIuL0RPTVwiO1xuXG5mdW5jdGlvbiBjaGFuZ2VTdHlsZSgpe1xuICBuYXZMaXN0RGl2cy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgZGl2LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcbiAgICB9KVxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgIGRpdi5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XG4gICAgfSlcblxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG5hdkxpc3REaXZzLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJylcbiAgICAgICAgaS5jaGlsZHJlblswXS5zdHlsZS5maWx0ZXIgPSAnaW52ZXJ0KDk5JSkgc2VwaWEoOTklKSBzYXR1cmF0ZSgyJSkgaHVlLXJvdGF0ZSgzMjFkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTAwJSknO1xuICAgICAgICBcbiAgICAgICAgbGV0IHByb2plY3RzID0gQXJyYXkuZnJvbShwcm9qZWN0c0NvbnRhaW5lci5jaGlsZHJlbik7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJylcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgICAgZGl2LmNoaWxkcmVuWzBdLnN0eWxlLmZpbHRlciA9ICdpbnZlcnQoMTklKSBzZXBpYSgxMSUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDExN2RlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDk1JSknO1xuICAgIH0pXG4gIH0pXG5cbiAgbmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgbmF2TGlzdC5zdHlsZS53aWR0aCA9ICcyMDBweCdcbiAgICBuYXZMaXN0SGVhZGVycy5mb3JFYWNoKChoZWFkZXIpID0+IHtcbiAgICAgIGhlYWRlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH0pO1xuICAgIGFycm93QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0pXG5cbiAgbmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICBpZihhcnJvd0J0bi5zdHlsZS50cmFuc2Zvcm0gIT0gJ3JvdGF0ZSgxODBkZWcpJyl7XG4gICAgICBuYXZMaXN0LnN0eWxlLndpZHRoID0gJzY1cHgnXG4gICAgICBuYXZMaXN0SGVhZGVycy5mb3JFYWNoKChoZWFkZXIpID0+IHtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIH0pO1xuICAgICAgYXJyb3dCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgYXJyb3dCdG4uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcbiAgICB9ZWxzZXtcbiAgICAgIG5hdkxpc3Quc3R5bGUud2lkdGggPSAnMjAwcHgnXG4gICAgfVxuICB9KVxuXG4gIGFycm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKGFycm93QnRuLnN0eWxlLnRyYW5zZm9ybSAhPSAncm90YXRlKDE4MGRlZyknKXtcbiAgICAgIGFycm93QnRuLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwLjJzJ1xuICAgICAgYXJyb3dCdG4uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgxODBkZWcpJ1xuICAgICAgcHJvamVjdHNDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9ZWxzZXtcbiAgICAgIGFycm93QnRuLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBpZihlLnRhcmdldC5tYXRjaGVzKCcuY3VzdG9tLXByb2plY3QnKSl7XG4gICAgICBuYXZMaXN0RGl2cy5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpXG4gICAgICAgIGkuY2hpbGRyZW5bMF0uc3R5bGUuZmlsdGVyID0gJ2ludmVydCg5OSUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMzIxZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMCUpJztcblxuICAgICAgICBsZXQgcHJvamVjdHMgPSBBcnJheS5mcm9tKHByb2plY3RzQ29udGFpbmVyLmNoaWxkcmVuKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICB9XG4gIH0pXG59XG5mdW5jdGlvbiBvbmxvYWRTdHlsZSgpe1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgaG9tZUljb24uc3R5bGUuZmlsdGVyID0gJ2ludmVydCgxOSUpIHNlcGlhKDExJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMTE3ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoOTUlKSc7XG59XG5leHBvcnQgeyBjaGFuZ2VTdHlsZSwgb25sb2FkU3R5bGUgfSIsImZ1bmN0aW9uIGNoZWNrVGFzayhhcnIsIGluZGV4KXtcbiAgbGV0IHRhc2sgPSBhcnJbaW5kZXhdO1xuICB0YXNrLmNoZWNrZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiB1bmNoZWNrVGFzayhhcnIsIGluZGV4KXtcbiAgbGV0IHRhc2sgPSBhcnJbaW5kZXhdO1xuICB0YXNrLmNoZWNrZWQgPSBmYWxzZVxufVxuXG5leHBvcnQge2NoZWNrVGFzaywgdW5jaGVja1Rhc2t9IiwiZnVuY3Rpb24gZGVsZXRlVGFzayhhcnIsIGluZGV4KXtcbiAgYXJyLnNwbGljZShpbmRleCwgMSlcbn1cblxuZXhwb3J0IHtkZWxldGVUYXNrfTsiLCJpbXBvcnQgeyB0YXNrc0NvbnRhaW5lciwgYWRkVGFza0J0biwgY3JlYXRlRWxlbWVudHMgfSBmcm9tIFwiLi9ET01cIjtcblxuZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQodGFzayl7XG5cbiAgbGV0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50cygnZGl2JywgJ3Rhc2stZWxlbWVudCcpO1xuICBsZXQgY2hlY2tib3ggPSBjcmVhdGVFbGVtZW50cygnaW5wdXQnLCAndGFzay1jaGVja2JveCcpO1xuICBsZXQgdGl0bGUgPSBjcmVhdGVFbGVtZW50cygnZGl2JywgJ3Rhc2stdGl0bGUnLCB0YXNrLnRpdGxlKTtcbiAgbGV0IHByaW9yaXR5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRzKCdkaXYnLCAndGFzay1wcmlvcml0eScpO1xuICBsZXQgZHVlRGF0ZSA9IGNyZWF0ZUVsZW1lbnRzKCdkaXYnLCAndGFzay1kdWUtZGF0ZScpO1xuICBsZXQgZGVsZXRlQnRuID0gY3JlYXRlRWxlbWVudHMoJ2RpdicsICd0YXNrLWRlbGV0ZS1idG4nKTtcblxuICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgcHJpb3JpdHlFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICBpZih0YXNrLmNoZWNrZWQgPT09IHRydWUpe1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSAnY2hlY2tlZCc7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgIHByaW9yaXR5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJylcbiAgfVxuXG4gIGVsZW1lbnQuYXBwZW5kKGNoZWNrYm94LCB0aXRsZSwgcHJpb3JpdHlFbGVtZW50LCBkdWVEYXRlLCBkZWxldGVCdG4pO1xuICByZXR1cm4gZWxlbWVudFxufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcyh0YXNrcyl7XG4gIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBmb3IobGV0IGkgaW4gdGFza3Mpe1xuICAgIGxldCB0YXNrRWxlbWVudCA9IGNyZWF0ZVRhc2tFbGVtZW50KHRhc2tzW2ldKTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gIH1cbiAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG59XG5cbmV4cG9ydCB7cmVuZGVyVGFza3N9IiwiaW1wb3J0IHt0aXRsZURpdiwgc2lkZVRpdGxlLCBkZXNjcmlwdGlvbkRpdiwgc2lkZURlc2NyaXB0aW9uLCBkYXRlRGl2LCBzaWRlRGF0ZSwgcHJpb3JpdHlEaXYsIHNpZGVQcmlvcml0eSwgcHJpb3JpdGllcywgbm90ZURpdiwgc2lkZU5vdGUsIGVtcHR5RWxlbWVudH0gZnJvbSBcIi4vRE9NXCI7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU2lkZWJhcihhcnIsIGluZGV4KXtcbiAgbGV0IHRhc2sgPSBhcnJbaW5kZXhdO1xuXG4gIHNpZGVUaXRsZS50ZXh0Q29udGVudCA9IGAke3Rhc2sudGl0bGV9YDtcbiAgc2lkZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7dGFzay5kZXNjcmlwdGlvbn1gO1xuICBzaWRlRGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcblxuICBwcmlvcml0aWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKVxuICB9KVxuICBpZih0YXNrLnByaW9yaXR5ID09ICdIaWdoJyl7XG4gICAgcHJpb3JpdGllc1swXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gIH1lbHNlIGlmKHRhc2sucHJpb3JpdHkgPT0gJ01lZGl1bScpe1xuICAgIHByaW9yaXRpZXNbMV0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICB9ZWxzZXtcbiAgICBwcmlvcml0aWVzWzJdLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgfVxuXG4gIHNpZGVOb3RlLnRleHRDb250ZW50ID0gYCR7dGFzay5ub3Rlc31gO1xuXG4gIHRpdGxlRGl2LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIGRlc2NyaXB0aW9uRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBkYXRlRGl2LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIHByaW9yaXR5RGl2LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIG5vdGVEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGVtcHR5RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cblxuZnVuY3Rpb24gZW1wdHlTaWRlYmFyKGFyciwgaW5kZXgpe1xuICBsZXQgdGFzayA9IGFycltpbmRleF07XG4gIFxuICBpZih0YXNrID09PSB1bmRlZmluZWQpe1xuICAgIGVtcHR5RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gIH1lbHNlIGlmKHRhc2sudGl0bGUgPT09IHNpZGVUaXRsZS50ZXh0Q29udGVudCl7XG4gICAgdGl0bGVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkZXNjcmlwdGlvbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRhdGVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwcmlvcml0eURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG5vdGVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlbXB0eUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfVxufVxuXG5leHBvcnQge3BvcHVsYXRlU2lkZWJhciwgZW1wdHlTaWRlYmFyLCBzaWRlVGl0bGUsIHNpZGVEYXRlLCBzaWRlUHJpb3JpdHl9OyIsImltcG9ydCB7IGZvcm1Db250YWluZXIsIHRhc2tGb3JtLCBhZGRCdG4sIGNhbmNlbEJ0biB9IGZyb20gXCIuL0RPTS5qc1wiO1xuaW1wb3J0IHthZGRUYXNrVG9BcnJ9IGZyb20gXCIuL2FkZFRhc2suanNcIjtcbmltcG9ydCB7cmVuZGVyVGFza3N9IGZyb20gJy4vcmVuZGVyVGFza3MuanMnO1xuXG5mdW5jdGlvbiBzaG93Rm9ybSgpe1xuICBmb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIHRhc2tGb3JtLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG59XG5mdW5jdGlvbiBoaWRlRm9ybSgpe1xuICB0YXNrRm9ybS5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xuICBmb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbn1cblxuXG5mdW5jdGlvbiBiaW5kRXZlbnRzVG9Gb3JtKGFycil7XG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRUYXNrVG9BcnIoYXJyKTtcbiAgICByZW5kZXJUYXNrcyhhcnIpO1xuICAgIGhpZGVGb3JtKCk7XG5cbiAgfSwge29uY2U6IHRydWV9KVxuICBcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhpZGVGb3JtKCk7XG4gIH0pO1xufVxuXG5leHBvcnQge3Nob3dGb3JtLCBoaWRlRm9ybSwgYmluZEV2ZW50c1RvRm9ybX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hc3NldHMvc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSAnLi9tb2R1bGVzL3JlbmRlclRhc2tzJztcbmltcG9ydCB7IHBhZ2VUaXRsZSwgYWRkVGFza0J0biwgY3JlYXRlRWxlbWVudHMsIGhvbWVCdG4sIHdlZWtCdG4sIHRvZGF5QnRuLCBwcm9qZWN0c0NvbnRhaW5lciB9IGZyb20gJy4vbW9kdWxlcy9ET00nO1xuaW1wb3J0IHsgYmluZEV2ZW50c1RvRm9ybSwgc2hvd0Zvcm0gfSBmcm9tICcuL21vZHVsZXMvdGFza0Zvcm0nO1xuaW1wb3J0IHsgZW1wdHlTaWRlYmFyLCBwb3B1bGF0ZVNpZGViYXIgfSBmcm9tICcuL21vZHVsZXMvc2lkZWJhcic7XG5pbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSAnLi9tb2R1bGVzL2RlbGV0ZVRhc2snO1xuaW1wb3J0IHsgY2hlY2tUYXNrLCB1bmNoZWNrVGFzayB9IGZyb20gJy4vbW9kdWxlcy9jaGVja1Rhc2snO1xuaW1wb3J0IHsgY2hhbmdlRGF0ZSB9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VEYXRlJztcbmltcG9ydCB7IGNoYW5nZVByaW9yaXR5IH0gZnJvbSAnLi9tb2R1bGVzL2NoYW5nZVByaW9yaXR5JztcbmltcG9ydCB7IGNoYW5nZVN0eWxlLCBvbmxvYWRTdHlsZSB9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VTdHlsZSc7XG5cbmNoYW5nZVN0eWxlKClcbmZ1bmN0aW9uIGZpbmRPYmplY3QodGFyZ2V0KXtcbiAgbGV0IG9iajtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHBhZ2VzLmxlbmd0aDsgaSsrKXtcbiAgICBpZihwYWdlc1tpXS50aXRsZSA9PT0gdGFyZ2V0LnRleHRDb250ZW50KXtcbiAgICAgIG9iaiA9IHBhZ2VzW2ldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCB0YXJnZXQpe1xuICBsZXQgaW5kZXhcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaWYoYXJyW2ldLnRpdGxlID09IHRhcmdldC50ZXh0Q29udGVudCl7XG4gICAgICBpbmRleCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuZnVuY3Rpb24gY2hlY2tQcm9qZWN0TmFtZShuYW1lKXtcbiAgbGV0IHByb2plY3ROYW1lcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1wcm9qZWN0JykpO1xuICBmb3IobGV0IGkgaW4gcHJvamVjdE5hbWVzKXtcbiAgICBpZihwcm9qZWN0TmFtZXNbaV0udGV4dENvbnRlbnQgPT09IG5hbWUpe1xuICAgICAgYWxlcnQoJ0Nob29zZSBhIGRpZmZlcmVudCBuYW1lJyk7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cblxuXG5sZXQgYWRkUHJvamVjdEJ0biA9IGNyZWF0ZUVsZW1lbnRzKCdkaXYnLCAnYWRkLXByb2plY3QtYnRuJywgJ0FkZCBuZXcgcHJvamVjdCcpO1xucHJvamVjdHNDb250YWluZXIuYXBwZW5kKGFkZFByb2plY3RCdG4pO1xuXG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdHNDb250YWluZXIubGFzdENoaWxkKTtcbiAgbGV0IGRpdiA9IGNyZWF0ZUVsZW1lbnRzKCdkaXYnLCAnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgbGV0IHByb2plY3RJbnB1dCA9IGNyZWF0ZUVsZW1lbnRzKCdpbnB1dCcsICdwcm9qZWN0LWlucHV0Jyk7XG4gIGxldCBhZGRQcm9qZWN0ID0gY3JlYXRlRWxlbWVudHMoJ3NwYW4nLCAnYWRkLXByb2plY3QnKTtcbiAgbGV0IGNhbmNlbFByb2plY3QgPSBjcmVhdGVFbGVtZW50cygnc3BhbicsICdjYW5jZWwtcHJvamVjdCcpO1xuICBkaXYuYXBwZW5kKHByb2plY3RJbnB1dCwgYWRkUHJvamVjdCwgY2FuY2VsUHJvamVjdCk7XG5cbiAgcHJvamVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XG4gICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWlucHV0JykudmFsdWU7XG4gICAgICBpZihjaGVja1Byb2plY3ROYW1lKHByb2plY3RUaXRsZSkgPT09IHRydWUpe1xuICAgICAgICBsZXQgcHJvamVjdCA9IHt9O1xuICAgICAgICBwcm9qZWN0LnRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgICAgICBwcm9qZWN0LnRhc2tzID0gW107XG4gICAgICAgIHBhZ2VzLnB1c2gocHJvamVjdCk7XG5cbiAgICAgICAgbGV0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlRWxlbWVudHMoJ2RpdicsIGBjdXN0b20tcHJvamVjdGAsIGAke3Byb2plY3RUaXRsZX1gKTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdHNDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kKHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kKGFkZFByb2plY3RCdG4pO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kKGRpdik7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgaWYoZS50YXJnZXQubWF0Y2hlcygnLmFkZC1wcm9qZWN0Jykpe1xuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbnB1dCcpLnZhbHVlO1xuXG4gICAgaWYoY2hlY2tQcm9qZWN0TmFtZShwcm9qZWN0VGl0bGUpID09PSB0cnVlKXtcbiAgICAgIGxldCBwcm9qZWN0ID0ge307XG4gICAgICBwcm9qZWN0LnRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgICAgcHJvamVjdC50YXNrcyA9IFtdXG4gICAgICBwYWdlcy5wdXNoKHByb2plY3QpO1xuXG4gICAgICBsZXQgcHJvamVjdEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50cygnZGl2JywgYGN1c3RvbS1wcm9qZWN0YCwgYCR7cHJvamVjdFRpdGxlfWApO1xuICAgICAgcHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdHNDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0RWxlbWVudCk7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQoYWRkUHJvamVjdEJ0bik7XG4gICAgfVxuICB9XG59KVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJy5jYW5jZWwtcHJvamVjdCcpKXtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0c0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChhZGRQcm9qZWN0QnRuKTtcbiAgfVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgaWYoZS50YXJnZXQubWF0Y2hlcygnLmN1c3RvbS1wcm9qZWN0Jykpe1xuICAgIGxldCBvYmogPSBmaW5kT2JqZWN0KGUudGFyZ2V0KTtcbiAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgcmVuZGVyVGFza3Mob2JqLnRhc2tzKTtcbiAgfVxufSlcblxubGV0IGhvbWVQYWdlID0ge1xuICB0aXRsZTogJ0hvbWUnLFxuICB0YXNrczogW10sXG59XG5sZXQgdG9kYXlQYWdlID0ge1xuICB0aXRsZTogJ1RvZGF5JyxcbiAgdGFza3M6IFtdLFxufTtcbmxldCB3ZWVrUGFnZSA9IHtcbiAgdGl0bGU6ICd3ZWVrJyxcbiAgdGFza3M6IFtdLFxufTtcbmxldCBwYWdlcyA9IFtob21lUGFnZSwgdG9kYXlQYWdlLCB3ZWVrUGFnZV07XG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IGhvbWVQYWdlLnRpdGxlO1xuICByZW5kZXJUYXNrcyhob21lUGFnZS50YXNrcyk7XG4gIGVtcHR5U2lkZWJhcihbXSwgMCk7XG4gIG9ubG9hZFN0eWxlKClcbn07XG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IGhvbWVQYWdlLnRpdGxlO1xuICByZW5kZXJUYXNrcyhob21lUGFnZS50YXNrcyk7XG59KTtcblxudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IHRvZGF5UGFnZS50aXRsZTtcbiAgcmVuZGVyVGFza3ModG9kYXlQYWdlLnRhc2tzKTtcbn0pO1xuXG53ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSB3ZWVrUGFnZS50aXRsZTtcbiAgcmVuZGVyVGFza3Mod2Vla1BhZ2UudGFza3MpO1xufSk7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxldCBvYmogPSBmaW5kT2JqZWN0KHBhZ2VUaXRsZSk7XG4gIGxldCBhcnIgPSBvYmoudGFza3M7XG4gIHNob3dGb3JtKCk7XG4gIGJpbmRFdmVudHNUb0Zvcm0oYXJyKTtcbn0pO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJy50YXNrLXRpdGxlJykpe1xuICAgIGxldCBvYmogPSBmaW5kT2JqZWN0KHBhZ2VUaXRsZSlcbiAgICBsZXQgYXJyID0gb2JqLnRhc2tzO1xuICAgIGxldCBpbmRleCA9ZmluZEluZGV4KGFyciwgZS50YXJnZXQpO1xuICAgIHBvcHVsYXRlU2lkZWJhcihhcnIsIGluZGV4KTtcbiAgfVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgaWYoZS50YXJnZXQubWF0Y2hlcygnLnRhc2stZGVsZXRlLWJ0bicpKXtcbiAgICBsZXQgb2JqID0gZmluZE9iamVjdChwYWdlVGl0bGUpXG4gICAgbGV0IGFyciA9IG9iai50YXNrcztcbiAgICBsZXQgaW5kZXggPSBmaW5kSW5kZXgoYXJyLCBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdKTtcblxuICAgIGVtcHR5U2lkZWJhcihhcnIsIGluZGV4KTtcbiAgICBkZWxldGVUYXNrKGFyciwgaW5kZXgpO1xuICAgIHJlbmRlclRhc2tzKGFycilcbiAgfVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgaWYoZS50YXJnZXQubWF0Y2hlcygnLnRhc2stY2hlY2tib3gnKSl7XG4gICAgbGV0IG9iaiA9IGZpbmRPYmplY3QocGFnZVRpdGxlKVxuICAgIGxldCBhcnIgPSBvYmoudGFza3M7XG4gICAgbGV0IGluZGV4ID0gZmluZEluZGV4KGFyciwgZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXSk7XG5cbiAgICBpZihhcnJbaW5kZXhdLmNoZWNrZWQgPT09IGZhbHNlKXtcbiAgICAgIGNoZWNrVGFzayhhcnIsIGluZGV4KTtcbiAgICAgIGVtcHR5U2lkZWJhcihhcnIsIGluZGV4KVxuICAgIH1lbHNle1xuICAgICAgdW5jaGVja1Rhc2soYXJyLGluZGV4KVxuICAgIH1cblxuICAgIHJlbmRlclRhc2tzKGFycik7XG4gIH1cbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICBpZihlLnRhcmdldC5tYXRjaGVzKCcuc2lkZS1kYXRlJykpe1xuICAgIGxldCBvYmogPSBmaW5kT2JqZWN0KHBhZ2VUaXRsZSlcbiAgICBsZXQgYXJyID0gb2JqLnRhc2tzO1xuICAgIGNoYW5nZURhdGUoYXJyKTtcbiAgICByZW5kZXJUYXNrcyhhcnIpXG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgaWYoZS50YXJnZXQubWF0Y2hlcygnLnNpZGUtcHJpb3JpdHknKSl7XG4gICAgbGV0IG9iaiA9IGZpbmRPYmplY3QocGFnZVRpdGxlKVxuICAgIGxldCBhcnIgPSBvYmoudGFza3M7XG4gICAgY2hhbmdlUHJpb3JpdHkoYXJyKTtcbiAgICByZW5kZXJUYXNrcyhhcnIpO1xuICB9XG59KVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9