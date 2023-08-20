"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
}

:root {
    --darkgrey: #222831;
    --grey: #393E46;
    --yellow: #FFD369;
    --lightgrey: #EEEEEE;
}

body {
    height: 100vh;
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
    background-color: var(--grey);
    color: var(--lightgrey);
    position: relative;
}

.material-symbols-outlined {
  cursor: pointer;
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

.container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: auto;
}

#menu-icon {
    display: none;
}

#menu-icon:hover {
    color: var(--yellow);
}

.brand-name {
    position: absolute;
    top: 8px;
    left: 35px;
    text-decoration: none;
    color: var(--yellow);
}

.top-navbar {
    height: 50px;
    background-color: var(--darkgrey);
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    font-size: 24px;
    font-weight: bold;
}

.sidebar {
    width: 200px;
    height: 90vh;
    background-color: var(--darkgrey);
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    padding: 10px;
    overflow: hidden;
}

.add-project {
    font-size: 20px;
    cursor: pointer;
    transition: font-size 1s;
}

.add-project:hover {
    transform: scale(1.25);
    color: var(--yellow);
}

.sidebar-titles {
    font-size: 16px;
    border: none;
    border-bottom: 3px solid  var(--lightgrey);
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: font-size 1s;
}

.home-project > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
}

.home-project > div:hover {
    transform: scale(1.05);
    color: var(--yellow);
}

.home-project > div > h2 {
    padding-left: 5px;
    font-size: 20px;
    font-weight: normal;
    cursor: pointer;
}

.projects > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
}

.projects > div:hover {
    transform: scale(1.05);
    color: var(--yellow);
}

.projects > div > h2 {
    padding-left: 5px;
    font-size: 20px;
    font-weight: normal;
    cursor: pointer;
}

.project-container {
    margin: 50px;
    transition: 1s;
}

.add-todo-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    padding-bottom: 3px;
    font-size: 36px;
    font-weight: lighter;
    margin-bottom: 25px;
    border-radius: 3px;
    background-color: transparent;
    color: var(--lightgrey);
    border: 2px dashed var(--lightgrey);
    cursor: pointer;
    transition: .25s;
}

.add-todo-item:hover {
    border: 2px dashed var(--yellow);
    color: var(--yellow);
    transform: scale(1.01);
}

.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-bottom: 25px;
    border-radius: 3px;
    background-color: var(--lightgrey);
    color: var(--darkgrey);
    border: 1px solid white;
    border-left: 10px solid white;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    transition: .25s;
}

.todo-item:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.25) 2.4px 2.4px 9.2px;
}

#high-priority {
    border: 1px solid red;
    border-left: 10px solid red;
}

#medium-priority {
    border: 1px solid yellow;
    border-left: 10px solid yellow;
}

#low-priority {
    border: 1px solid green;
    border-left: 10px solid green;
}

.todo-item  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
}

.todo-item  div h1 {
    margin: 0 10px;
    font-size: 18px;
}

.todo-item  div p {
    font-weight: bold;
    margin: -2.5px 10px 0 10px;
}

.todo-item div span {
    margin: -1px 10px 0 0;
}

.todo-item div span:hover {
    color: var(--yellow);
}

.checkbox {
    transform: scale(2);
    margin: 5px;
    accent-color: var(--yellow);
    cursor: pointer;
}

.completed {
    text-decoration: line-through;
}

button {
    background-color: transparent;
    border: 2px solid var(--darkgrey);
    border-radius: 3px;
    font-weight: bold;
    padding: 5px;
    cursor: pointer;
    transition: 0.25s;
}

button:hover {
    background-color: var(--yellow);
    color: white;
    border: 2px solid var(--yellow);
}

.details-popup {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 500px;
    padding: 25px;
    color: var(--darkgrey);
    background-color: var(--lightgrey);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    z-index: 1000;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 24px;
    overflow: hidden;
}



.details-popup span {
    position: absolute;
    right: 5px;
    top: 5px;
}

.details-popup span:hover {
    color: var(--yellow);
}

.edit-popup, .add-project-popup, .add-todo-item-popup {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 500px;
    padding: 25px;
    color: var(--darkgrey);
    background-color: var(--lightgrey);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    z-index: 1000;
    font-size: 24px;
    display: none;
    justify-content: center;
    align-items: center;
}

.edit-popup span, .add-project-popup span, .add-todo-item-popup span {
    position: absolute;
    right: 5px;
    top: 5px;
}

.edit-popup span:hover, .add-project-popup span:hover, .add-todo-item-popup span:hover {
    color: var(--yellow);
}

.edit-popup button, .add-project-popup button, .add-todo-item-popup button {
    align-self: center;
    font-size: 20px;
    margin: 15px 0;
    width: 350px;
}


form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
}

form label{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 5px;
}

form input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    font-size: 16px;
    width: 350px;
}

form p {
    font-size: 16px;
    color: red;
    padding-left: 10px;
}

select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    color: var(--darkgrey);
    font-size: 16px;
    width: 350px;
}

select::-ms-expand {
  display: none;
}

select option {
  background-color: white;
  color: var(--darkgrey);
  font-size: 16px;
}

select option:checked {
  background-color: #007bff;
  color: white;
}


.blurred-background {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #22283199;
  backdrop-filter: blur(2px);
  z-index: 999;
}

.active-popup {
    display: flex;
}

.active {
    display: block;
}

footer {
    position: absolute;
    bottom: -1px;
    width: 100%;
    background-color: var(--darkgrey);
    text-align: center;
    padding: 10px;
}

footer a {
    text-decoration: none;
    color: var(--lightgrey);
}

















@media screen and (max-width: 768px) {
    
    .sidebar {
        display: none;
        width: 0px;
        position: absolute;
        right: 0;
        transition: .25s;
    }
    
    .active {
        display: block;
    }
    
    .sidebar-transition {
        width: 100dvw;
    }
    
    #menu-icon {
        display: block;
        position: absolute;
        top: 11px;
        right: 35px;
    }
    
    .project-container {
        margin: 25px;
    }
    
    .todo-item {
        width: 92vw;
    }
    
    footer {
        bottom: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --darkgrey: #222831;\n    --grey: #393E46;\n    --yellow: #FFD369;\n    --lightgrey: #EEEEEE;\n}\n\nbody {\n    height: 100vh;\n    width: 100%;\n    font-family: 'Ubuntu', sans-serif;\n    background-color: var(--grey);\n    color: var(--lightgrey);\n    position: relative;\n}\n\n.material-symbols-outlined {\n  cursor: pointer;\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: auto;\n}\n\n#menu-icon {\n    display: none;\n}\n\n#menu-icon:hover {\n    color: var(--yellow);\n}\n\n.brand-name {\n    position: absolute;\n    top: 8px;\n    left: 35px;\n    text-decoration: none;\n    color: var(--yellow);\n}\n\n.top-navbar {\n    height: 50px;\n    background-color: var(--darkgrey);\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n    font-size: 24px;\n    font-weight: bold;\n}\n\n.sidebar {\n    width: 200px;\n    height: 90vh;\n    background-color: var(--darkgrey);\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n    padding: 10px;\n    overflow: hidden;\n}\n\n.add-project {\n    font-size: 20px;\n    cursor: pointer;\n    transition: font-size 1s;\n}\n\n.add-project:hover {\n    transform: scale(1.25);\n    color: var(--yellow);\n}\n\n.sidebar-titles {\n    font-size: 16px;\n    border: none;\n    border-bottom: 3px solid  var(--lightgrey);\n    margin-bottom: 10px;\n    margin-top: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    transition: font-size 1s;\n}\n\n.home-project > div {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 5px;\n}\n\n.home-project > div:hover {\n    transform: scale(1.05);\n    color: var(--yellow);\n}\n\n.home-project > div > h2 {\n    padding-left: 5px;\n    font-size: 20px;\n    font-weight: normal;\n    cursor: pointer;\n}\n\n.projects > div {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 5px;\n}\n\n.projects > div:hover {\n    transform: scale(1.05);\n    color: var(--yellow);\n}\n\n.projects > div > h2 {\n    padding-left: 5px;\n    font-size: 20px;\n    font-weight: normal;\n    cursor: pointer;\n}\n\n.project-container {\n    margin: 50px;\n    transition: 1s;\n}\n\n.add-todo-item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    padding-bottom: 3px;\n    font-size: 36px;\n    font-weight: lighter;\n    margin-bottom: 25px;\n    border-radius: 3px;\n    background-color: transparent;\n    color: var(--lightgrey);\n    border: 2px dashed var(--lightgrey);\n    cursor: pointer;\n    transition: .25s;\n}\n\n.add-todo-item:hover {\n    border: 2px dashed var(--yellow);\n    color: var(--yellow);\n    transform: scale(1.01);\n}\n\n.todo-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    margin-bottom: 25px;\n    border-radius: 3px;\n    background-color: var(--lightgrey);\n    color: var(--darkgrey);\n    border: 1px solid white;\n    border-left: 10px solid white;\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n    transition: .25s;\n}\n\n.todo-item:hover {\n    transform: scale(1.01);\n    box-shadow: rgba(0, 0, 0, 0.25) 2.4px 2.4px 9.2px;\n}\n\n#high-priority {\n    border: 1px solid red;\n    border-left: 10px solid red;\n}\n\n#medium-priority {\n    border: 1px solid yellow;\n    border-left: 10px solid yellow;\n}\n\n#low-priority {\n    border: 1px solid green;\n    border-left: 10px solid green;\n}\n\n.todo-item  div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n}\n\n.todo-item  div h1 {\n    margin: 0 10px;\n    font-size: 18px;\n}\n\n.todo-item  div p {\n    font-weight: bold;\n    margin: -2.5px 10px 0 10px;\n}\n\n.todo-item div span {\n    margin: -1px 10px 0 0;\n}\n\n.todo-item div span:hover {\n    color: var(--yellow);\n}\n\n.checkbox {\n    transform: scale(2);\n    margin: 5px;\n    accent-color: var(--yellow);\n    cursor: pointer;\n}\n\n.completed {\n    text-decoration: line-through;\n}\n\nbutton {\n    background-color: transparent;\n    border: 2px solid var(--darkgrey);\n    border-radius: 3px;\n    font-weight: bold;\n    padding: 5px;\n    cursor: pointer;\n    transition: 0.25s;\n}\n\nbutton:hover {\n    background-color: var(--yellow);\n    color: white;\n    border: 2px solid var(--yellow);\n}\n\n.details-popup {\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    transform: translate(50%, -50%);\n    width: 500px;\n    padding: 25px;\n    color: var(--darkgrey);\n    background-color: var(--lightgrey);\n    border-radius: 3px;\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n    z-index: 1000;\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    font-size: 24px;\n    overflow: hidden;\n}\n\n\n\n.details-popup span {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n}\n\n.details-popup span:hover {\n    color: var(--yellow);\n}\n\n.edit-popup, .add-project-popup, .add-todo-item-popup {\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    transform: translate(50%, -50%);\n    width: 500px;\n    padding: 25px;\n    color: var(--darkgrey);\n    background-color: var(--lightgrey);\n    border-radius: 3px;\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n    z-index: 1000;\n    font-size: 24px;\n    display: none;\n    justify-content: center;\n    align-items: center;\n}\n\n.edit-popup span, .add-project-popup span, .add-todo-item-popup span {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n}\n\n.edit-popup span:hover, .add-project-popup span:hover, .add-todo-item-popup span:hover {\n    color: var(--yellow);\n}\n\n.edit-popup button, .add-project-popup button, .add-todo-item-popup button {\n    align-self: center;\n    font-size: 20px;\n    margin: 15px 0;\n    width: 350px;\n}\n\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start; \n}\n\nform label{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    margin: 5px;\n}\n\nform input {\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background-color: white;\n    font-size: 16px;\n    width: 350px;\n}\n\nform p {\n    font-size: 16px;\n    color: red;\n    padding-left: 10px;\n}\n\nselect {\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background-color: white;\n    color: var(--darkgrey);\n    font-size: 16px;\n    width: 350px;\n}\n\nselect::-ms-expand {\n  display: none;\n}\n\nselect option {\n  background-color: white;\n  color: var(--darkgrey);\n  font-size: 16px;\n}\n\nselect option:checked {\n  background-color: #007bff;\n  color: white;\n}\n\n\n.blurred-background {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #22283199;\n  backdrop-filter: blur(2px);\n  z-index: 999;\n}\n\n.active-popup {\n    display: flex;\n}\n\n.active {\n    display: block;\n}\n\nfooter {\n    position: absolute;\n    bottom: -1px;\n    width: 100%;\n    background-color: var(--darkgrey);\n    text-align: center;\n    padding: 10px;\n}\n\nfooter a {\n    text-decoration: none;\n    color: var(--lightgrey);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@media screen and (max-width: 768px) {\n    \n    .sidebar {\n        display: none;\n        width: 0px;\n        position: absolute;\n        right: 0;\n        transition: .25s;\n    }\n    \n    .active {\n        display: block;\n    }\n    \n    .sidebar-transition {\n        width: 100dvw;\n    }\n    \n    #menu-icon {\n        display: block;\n        position: absolute;\n        top: 11px;\n        right: 35px;\n    }\n    \n    .project-container {\n        margin: 25px;\n    }\n    \n    .todo-item {\n        width: 92vw;\n    }\n    \n    footer {\n        bottom: 0;\n    }\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const todo1 = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo('Grocery Shopping', 'Buy fruits, vegetables, eggs, and milk for the week.', new Date('2023-08-23'), 'high');
const project1 = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project('Shopping')
project1.addTodo(todo1)

const todo2 = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo('Prepare Presentation', 'Create slides and outline for upcoming client presentation.', new Date('2023-08-16'), 'medium');
const project2 = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project('Presentation')
project2.addTodo(todo2)
project2.addTodo(todo1)
let inbox = [];
  
inbox.push(project1)
inbox.push(project2)

document.querySelector('#menu-icon')
.addEventListener('click', () => {
    document.querySelector('.sidebar')
.classList.toggle('active');
    setTimeout(() => {
        document.querySelector('.sidebar')
.classList.toggle('sidebar-transition');
    } , 0)
})

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}


function setNewProject() {
    let requirementsAlert = '';
    document.querySelector('.add-project').addEventListener('click', () => {
        document.querySelector('.blurred-background').classList.add('active');
        document.querySelector('.add-project-popup').classList.add('active-popup');
        document.querySelectorAll('.close').forEach(item => item.addEventListener('click', function () {
        document.querySelector('.blurred-background').classList.remove('active');       document.querySelector('.add-project-popup').classList.remove('active-popup');
     }))
     document.querySelector('.add-project-confirm').addEventListener('click', (e) => {
     e.preventDefault();
     const name = document.querySelector('#add-name')
     
     if (name.value === '' && requirementsAlert != '' || name.value.length < 3 && requirementsAlert != '') {
         return
         }if (name.value === '' || name.value.length < 3) {
         requirementsAlert = `<p>Please fill out all requirements.</p>`;
         document.querySelector('.add-project-confirm').insertAdjacentHTML("beforebegin", requirementsAlert);
         return
         }
         
     const project = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(name.value)
     inbox.push(project)
     setProjects()
     getTodos()
     document.querySelector('.blurred-background').classList.remove('active');
     document.querySelector('.add-project-popup').classList.remove('active-popup');
    })
  })

}setNewProject()

function setNewTodo() {
    let requirementsAlert = '';

    document.querySelector('.add-todo-item').addEventListener('click', (e) => {
        const projectIndex = e.target.getAttribute('data-project');
        document.querySelector('.blurred-background').classList.add('active');
        document.querySelector('.add-todo-item-popup').classList.add('active-popup');
        document.querySelectorAll('.close').forEach(item => item.addEventListener('click', function () {
        document.querySelector('.blurred-background').classList.remove('active');       document.querySelector('.add-todo-item-popup').classList.remove('active-popup');
     }))
    document.querySelector('.add-todo-item-confirm').addEventListener('click', (e) => {
     e.preventDefault();
        
     const title = document.querySelector('#add-title')
     const description = document.querySelector('#add-description')
     const dueDate = document.querySelector('#add-due-date')
     const priority = document.querySelector('#add-priority')
     
     if (title.value === '' && requirementsAlert != '' || title.value.length < 3 && requirementsAlert != '') {
         return
     }if (title.value === '' || title.value.length < 3) {
         requirementsAlert = `<p>Please fill out all requirements.</p>`;
         document.querySelector('.add-todo-item-confirm').insertAdjacentHTML("beforebegin", requirementsAlert);
         return
     }
        
     const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title.value, description.value, new Date(dueDate.value), priority.value);
     inbox[projectIndex].addTodo(todo)
     
     setTodos(projectIndex)
        
     title.value = '';
     description.value = '';
     dueDate.value = '';
     priority.value = '';
        
     document.querySelector('.blurred-background').classList.remove('active');
        document.querySelector('.add-todo-item-popup').classList.remove('active-popup');
    })
  })
}

function setEditItem() {
  document.querySelectorAll('.edit-button').forEach(item => {
     item.addEventListener('click', (e) => {
      const projectIndex = e.target.getAttribute('data-project');
      const todoIndex = e.target.getAttribute('data-todo');
      
       document.querySelector('.edit-confirm').addEventListener('click', (e) => {
          e.preventDefault();
        
          const title = document.querySelector('#edit-title')
          const description = document.querySelector('#edit-description')
          const dueDate = document.querySelector('#edit-due-date')
          const priority = document.querySelector('#edit-priority')
     
          const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title.value, description.value, new Date(dueDate.value), priority.value);
          inbox[projectIndex].todos[todoIndex] = todo;
           
           setTodos(projectIndex);

          document.querySelector('.blurred-background').classList.remove('active');
          document.querySelector('.edit-popup').classList.remove('active-popup');
       })
    })
  })
}

function setProjects() {
    document.querySelector('.projects').textContent = '';

    for (let i = 0; i < inbox.length; i++) {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project');

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('material-symbols-outlined');
        iconSpan.textContent = 'lists';

        const projectName = document.createElement('h2');
        projectName.textContent = inbox[i].name;

        projectContainer.appendChild(iconSpan);
        projectContainer.appendChild(projectName);

        document.querySelector('.projects').appendChild(projectContainer);
    }
}
setProjects();



function setTodos(projectIndex, date) {
    document.querySelector('.project-container').textContent = '';
    const addNewTodo = `<div data-project="${projectIndex}" class="add-todo-item">+</div>`;
    document.querySelector('.project-container').insertAdjacentHTML("afterbegin", addNewTodo)

    for (let i = 0; i < inbox[projectIndex].todos.length; i++) {
        let priority = '';
        const currentDate = new Date();
        const todoDueDate = inbox[projectIndex].todos[i].dueDate;

        if (date === 'today') {
            if (
                todoDueDate.getDate() !== currentDate.getDate() ||
                todoDueDate.getMonth() !== currentDate.getMonth() ||
                todoDueDate.getFullYear() !== currentDate.getFullYear()
            ) {
                continue;
            }
        } else if (date === 'this-week') {
            let daysOfTheWeek = [];
            let day = currentDate.getDate();
            for (let j = 0; j <= 7; j++) {
                daysOfTheWeek.push(day);
                day++
            }
            if (
                !daysOfTheWeek.includes(todoDueDate.getDate()) ||
                todoDueDate.getMonth() !== currentDate.getMonth() ||
                todoDueDate.getFullYear() !== currentDate.getFullYear()
            ) {
                continue;
            }
        }

        if (inbox[projectIndex].todos[i].priority === 'high') {      
            priority = 'high-priority';
        }else if (inbox[projectIndex].todos[i].priority === 'medium') {      
            priority = 'medium-priority';
        }else if (inbox[projectIndex].todos[i].priority === 'low') {      
            priority = 'low-priority';
        };
        
        
        
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.setAttribute('id', priority);
        
        const todoContent = document.createElement("div");

        
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("checkbox");
        checkbox.setAttribute("data-project", projectIndex);
        checkbox.setAttribute("data-todo", i);
        if (inbox[projectIndex].todos[i].completed) {
            todoContent.classList.add('completed');       
            checkbox.checked = true;
        }
        
        const title = document.createElement("h1");
        title.textContent = inbox[projectIndex].todos[i].title;

        todoContent.appendChild(checkbox);
        todoContent.appendChild(title);

        const detailsButton = document.createElement("button");
        detailsButton.classList.add("details-button");
        detailsButton.setAttribute("data-project", projectIndex);
        detailsButton.setAttribute("data-todo", i);
        detailsButton.textContent = "DETAILS";

        const dueDate = document.createElement("p");
        dueDate.setAttribute("data-project", projectIndex);
        dueDate.setAttribute("data-todo", i);
        dueDate.textContent = formatDate(inbox[projectIndex].todos[i].dueDate);

        const editButton = document.createElement("span");
        editButton.classList.add("material-symbols-outlined", "edit-button");
        editButton.setAttribute("data-project", projectIndex);
        editButton.setAttribute("data-todo", i);
        editButton.textContent = "edit";
        
        const deleteButton = document.createElement("span");
        deleteButton.classList.add("material-symbols-outlined", "delete-button");
        deleteButton.setAttribute("data-project", projectIndex);
        deleteButton.setAttribute("data-todo", i);
        deleteButton.textContent = "delete";

        const buttonContainer = document.createElement("div");
        buttonContainer.appendChild(detailsButton);
        buttonContainer.appendChild(dueDate);
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        todoItem.appendChild(todoContent);
        todoItem.appendChild(buttonContainer);

        document.querySelector('.project-container').appendChild(todoItem);


    }
    getDetailes()
    getEditInputs()
    deleteItem()
    setCompleted()
    setNewTodo()
    setEditItem()
}

function getDetailes() {
    document.querySelectorAll('.details-button').forEach(item => {
      item.addEventListener('click', (e) => {
        const projectIndex = e.target.getAttribute('data-project');
        const todoIndex = e.target.getAttribute('data-todo');
        
        document.querySelector('.title-details').textContent = `Title: ${inbox[projectIndex].todos[todoIndex].title}`
        document.querySelector('.description-details').textContent = `Description: ${inbox[projectIndex].todos[todoIndex].description}`
        document.querySelector('.due-date-details').textContent = `Due date: ${formatDate(inbox[projectIndex].todos[todoIndex].dueDate)}`
        document.querySelector('.priority-details').textContent = `Priority: ${inbox[projectIndex].todos[todoIndex].priority}`
      
        document.querySelector('.blurred-background').classList.add('active');
        document.querySelector('.details-popup').classList.add('active-popup');
        document.querySelectorAll('.close').forEach(item => item.addEventListener('click', function () {
        document.querySelector('.blurred-background').classList.remove('active');       document.querySelector('.details-popup').classList.remove('active-popup');
        }))
     })
  })
}

function getEditInputs() {
    document.querySelectorAll('.edit-button').forEach(item => {
      item.addEventListener('click', (e) => {
        const projectIndex = e.target.getAttribute('data-project');
        const todoIndex = e.target.getAttribute('data-todo');
          
        document.querySelector('#edit-title').value = inbox[projectIndex].todos[todoIndex].title;
        document.querySelector('#edit-description').value = inbox[projectIndex].todos[todoIndex].description;
        document.querySelector('#edit-due-date').value = formatDate(inbox[projectIndex].todos[todoIndex].dueDate);
        document.querySelector('#edit-priority').value = inbox[projectIndex].todos[todoIndex].priority;
          
        document.querySelector('.blurred-background').classList.add('active');
        document.querySelector('.edit-popup').classList.add('active-popup');
        document.querySelectorAll('.close').forEach(item => item.addEventListener('click', function () {
        document.querySelector('.blurred-background').classList.remove('active');       document.querySelector('.edit-popup').classList.remove('active-popup');
        }))
     })
  })
}

function deleteItem() {
    document.querySelectorAll('.delete-button').forEach(item => {
      item.addEventListener('click', (e) => {
        const projectIndex = e.target.getAttribute('data-project');
        const todoIndex = e.target.getAttribute('data-todo');
        inbox[projectIndex].todos.splice(todoIndex, 1)
        e.target.parentNode.parentNode.remove();
        setTodos(projectIndex)
     })
  })
}

function setCompleted() {
    document.querySelectorAll('.checkbox').forEach(item => {
      item.addEventListener('click', (e) => {
        const projectIndex = e.target.getAttribute('data-project');
        const todoIndex = e.target.getAttribute('data-todo');
          if (inbox[projectIndex].todos[todoIndex].completed) {
              inbox[projectIndex].todos[todoIndex].markAsNotCompleted()
              e.target.parentNode.classList.remove('completed')
          }else {
              inbox[projectIndex].todos[todoIndex].markAsCompleted()
              e.target.parentNode.classList.add('completed')
          }
     })
  })
}


function getTodos() {
    document.querySelectorAll('.project').forEach((item, index) => {
      item.addEventListener('click', () => {
        setTodos(index)
      });
    })
}getTodos();


function getAllInbox() {
    document.querySelector('.inbox').addEventListener('click', function () {
        document.querySelectorAll('.project').forEach((item, index) => setTodos(index))
    })
    window.addEventListener('load', function () {
        document.querySelectorAll('.project').forEach((item, index) => setTodos(index))
    })
}getAllInbox();

function getAllInboxOfToday() {
    const currentDate = new Date();
    document.querySelector('.today').addEventListener('click', function () {
        document.querySelectorAll('.project').forEach((item, index) => setTodos(index, 'today'))
    })
}getAllInboxOfToday();

function getAllInboxOfWeek() {
    const currentDate = new Date();
    document.querySelector('.this-week').addEventListener('click', function () {
        document.querySelectorAll('.project').forEach((item, index) => setTodos(index, 'this-week'))
    })
}getAllInboxOfWeek();


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority, completed = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFNBQVMsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8s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LFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pYTTtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdCB7XG4gICAgLS1kYXJrZ3JleTogIzIyMjgzMTtcbiAgICAtLWdyZXk6ICMzOTNFNDY7XG4gICAgLS15ZWxsb3c6ICNGRkQzNjk7XG4gICAgLS1saWdodGdyZXk6ICNFRUVFRUU7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAnRklMTCcgMSxcbiAgJ3dnaHQnIDQwMCxcbiAgJ0dSQUQnIDAsXG4gICdvcHN6JyA0OFxufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG59XG5cbiNtZW51LWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtZW51LWljb246aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xufVxuXG4uYnJhbmQtbmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICAgIGxlZnQ6IDM1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xufVxuXG4udG9wLW5hdmJhciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtncmV5KTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpZGViYXIge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2dyZXkpO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMi40cHggMi40cHggMy4ycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWRkLXByb2plY3Qge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDFzO1xufVxuXG4uYWRkLXByb2plY3Q6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XG59XG5cbi5zaWRlYmFyLXRpdGxlcyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIHZhcigtLWxpZ2h0Z3JleSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDFzO1xufVxuXG4uaG9tZS1wcm9qZWN0ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmhvbWUtcHJvamVjdCA+IGRpdjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcbn1cblxuLmhvbWUtcHJvamVjdCA+IGRpdiA+IGgyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0cyA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9qZWN0cyA+IGRpdjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcbn1cblxuLnByb2plY3RzID4gZGl2ID4gaDIge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgdHJhbnNpdGlvbjogMXM7XG59XG5cbi5hZGQtdG9kby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1saWdodGdyZXkpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xufVxuXG4uYWRkLXRvZG8taXRlbTpob3ZlciB7XG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLXllbGxvdyk7XG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuLnRvZG8taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcbiAgICBjb2xvcjogdmFyKC0tZGFya2dyZXkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMi40cHggMi40cHggMy4ycHg7XG4gICAgdHJhbnNpdGlvbjogLjI1cztcbn1cblxuLnRvZG8taXRlbTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDIuNHB4IDIuNHB4IDkuMnB4O1xufVxuXG4jaGlnaC1wcmlvcml0eSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJlZDtcbn1cblxuI21lZGl1bS1wcmlvcml0eSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHllbGxvdztcbn1cblxuI2xvdy1wcmlvcml0eSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgZ3JlZW47XG59XG5cbi50b2RvLWl0ZW0gIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLnRvZG8taXRlbSAgZGl2IGgxIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50b2RvLWl0ZW0gIGRpdiBwIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IC0yLjVweCAxMHB4IDAgMTBweDtcbn1cblxuLnRvZG8taXRlbSBkaXYgc3BhbiB7XG4gICAgbWFyZ2luOiAtMXB4IDEwcHggMCAwO1xufVxuXG4udG9kby1pdGVtIGRpdiBzcGFuOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcbn1cblxuLmNoZWNrYm94IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGFjY2VudC1jb2xvcjogdmFyKC0teWVsbG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb21wbGV0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmtncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS15ZWxsb3cpO1xufVxuXG4uZGV0YWlscy1wb3B1cCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBjb2xvcjogdmFyKC0tZGFya2dyZXkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuXG4uZGV0YWlscy1wb3B1cCBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDVweDtcbn1cblxuLmRldGFpbHMtcG9wdXAgc3Bhbjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XG59XG5cbi5lZGl0LXBvcHVwLCAuYWRkLXByb2plY3QtcG9wdXAsIC5hZGQtdG9kby1pdGVtLXBvcHVwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrZ3JleSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lZGl0LXBvcHVwIHNwYW4sIC5hZGQtcHJvamVjdC1wb3B1cCBzcGFuLCAuYWRkLXRvZG8taXRlbS1wb3B1cCBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDVweDtcbn1cblxuLmVkaXQtcG9wdXAgc3Bhbjpob3ZlciwgLmFkZC1wcm9qZWN0LXBvcHVwIHNwYW46aG92ZXIsIC5hZGQtdG9kby1pdGVtLXBvcHVwIHNwYW46aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xufVxuXG4uZWRpdC1wb3B1cCBidXR0b24sIC5hZGQtcHJvamVjdC1wb3B1cCBidXR0b24sIC5hZGQtdG9kby1pdGVtLXBvcHVwIGJ1dHRvbiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICB3aWR0aDogMzUwcHg7XG59XG5cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBcbn1cblxuZm9ybSBsYWJlbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbmZvcm0gaW5wdXQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiAzNTBweDtcbn1cblxuZm9ybSBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbnNlbGVjdCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogdmFyKC0tZGFya2dyZXkpO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogMzUwcHg7XG59XG5cbnNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnNlbGVjdCBvcHRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWRhcmtncmV5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zZWxlY3Qgb3B0aW9uOmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuLmJsdXJyZWQtYmFja2dyb3VuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODMxOTk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5hY3RpdmUtcG9wdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2dyZXkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5mb290ZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgXG4gICAgLnNpZGViYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiAuMjVzO1xuICAgIH1cbiAgICBcbiAgICAuYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFxuICAgIC5zaWRlYmFyLXRyYW5zaXRpb24ge1xuICAgICAgICB3aWR0aDogMTAwZHZ3O1xuICAgIH1cbiAgICBcbiAgICAjbWVudS1pY29uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMXB4O1xuICAgICAgICByaWdodDogMzVweDtcbiAgICB9XG4gICAgXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAyNXB4O1xuICAgIH1cbiAgICBcbiAgICAudG9kby1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDkydnc7XG4gICAgfVxuICAgIFxuICAgIGZvb3RlciB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNc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O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1kYXJrZ3JleTogIzIyMjgzMTtcXG4gICAgLS1ncmV5OiAjMzkzRTQ2O1xcbiAgICAtLXllbGxvdzogI0ZGRDM2OTtcXG4gICAgLS1saWdodGdyZXk6ICNFRUVFRUU7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAnRklMTCcgMSxcXG4gICd3Z2h0JyA0MDAsXFxuICAnR1JBRCcgMCxcXG4gICdvcHN6JyA0OFxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbiNtZW51LWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbWVudS1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxufVxcblxcbi5icmFuZC1uYW1lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG4gICAgbGVmdDogMzVweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLnRvcC1uYXZiYXIge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtncmV5KTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAyLjRweCAyLjRweCAzLjJweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2dyZXkpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDFzO1xcbn1cXG5cXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLnNpZGViYXItdGl0bGVzIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAgdmFyKC0tbGlnaHRncmV5KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMXM7XFxufVxcblxcbi5ob21lLXByb2plY3QgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmhvbWUtcHJvamVjdCA+IGRpdjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG5cXG4uaG9tZS1wcm9qZWN0ID4gZGl2ID4gaDIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMgPiBkaXY6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLnByb2plY3RzID4gZGl2ID4gaDIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogNTBweDtcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcbi5hZGQtdG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tbGlnaHRncmV5KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG5cXG4uYWRkLXRvZG8taXRlbTpob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS15ZWxsb3cpO1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2dyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMi40cHggMi40cHggMy4ycHg7XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbi50b2RvLWl0ZW06aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDIuNHB4IDIuNHB4IDkuMnB4O1xcbn1cXG5cXG4jaGlnaC1wcmlvcml0eSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmVkO1xcbn1cXG5cXG4jbWVkaXVtLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB5ZWxsb3c7XFxufVxcblxcbiNsb3ctcHJpb3JpdHkge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgZ3JlZW47XFxufVxcblxcbi50b2RvLWl0ZW0gIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi50b2RvLWl0ZW0gIGRpdiBoMSB7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50b2RvLWl0ZW0gIGRpdiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogLTIuNXB4IDEwcHggMCAxMHB4O1xcbn1cXG5cXG4udG9kby1pdGVtIGRpdiBzcGFuIHtcXG4gICAgbWFyZ2luOiAtMXB4IDEwcHggMCAwO1xcbn1cXG5cXG4udG9kby1pdGVtIGRpdiBzcGFuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFya2dyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLmRldGFpbHMtcG9wdXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICByaWdodDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZ3JleSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcblxcblxcbi5kZXRhaWxzLXBvcHVwIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIHRvcDogNXB4O1xcbn1cXG5cXG4uZGV0YWlscy1wb3B1cCBzcGFuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxufVxcblxcbi5lZGl0LXBvcHVwLCAuYWRkLXByb2plY3QtcG9wdXAsIC5hZGQtdG9kby1pdGVtLXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2dyZXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lZGl0LXBvcHVwIHNwYW4sIC5hZGQtcHJvamVjdC1wb3B1cCBzcGFuLCAuYWRkLXRvZG8taXRlbS1wb3B1cCBzcGFuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXB4O1xcbiAgICB0b3A6IDVweDtcXG59XFxuXFxuLmVkaXQtcG9wdXAgc3Bhbjpob3ZlciwgLmFkZC1wcm9qZWN0LXBvcHVwIHNwYW46aG92ZXIsIC5hZGQtdG9kby1pdGVtLXBvcHVwIHNwYW46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLmVkaXQtcG9wdXAgYnV0dG9uLCAuYWRkLXByb2plY3QtcG9wdXAgYnV0dG9uLCAuYWRkLXRvZG8taXRlbS1wb3B1cCBidXR0b24ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luOiAxNXB4IDA7XFxuICAgIHdpZHRoOiAzNTBweDtcXG59XFxuXFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgXFxufVxcblxcbmZvcm0gbGFiZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG59XFxuXFxuZm9ybSBwIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZ3JleSk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuc2VsZWN0IG9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrZ3JleSk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbnNlbGVjdCBvcHRpb246Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4uYmx1cnJlZC1iYWNrZ3JvdW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODMxOTk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLmFjdGl2ZS1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC0xcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZ3JleSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGdyZXkpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICBcXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAwcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IC4yNXM7XFxuICAgIH1cXG4gICAgXFxuICAgIC5hY3RpdmUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgXFxuICAgIC5zaWRlYmFyLXRyYW5zaXRpb24ge1xcbiAgICAgICAgd2lkdGg6IDEwMGR2dztcXG4gICAgfVxcbiAgICBcXG4gICAgI21lbnUtaWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTFweDtcXG4gICAgICAgIHJpZ2h0OiAzNXB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAucHJvamVjdC1jb250YWluZXIge1xcbiAgICAgICAgbWFyZ2luOiAyNXB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAudG9kby1pdGVtIHtcXG4gICAgICAgIHdpZHRoOiA5MnZ3O1xcbiAgICB9XFxuICAgIFxcbiAgICBmb290ZXIge1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvLmpzJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgdG9kbzEgPSBuZXcgVG9kbygnR3JvY2VyeSBTaG9wcGluZycsICdCdXkgZnJ1aXRzLCB2ZWdldGFibGVzLCBlZ2dzLCBhbmQgbWlsayBmb3IgdGhlIHdlZWsuJywgbmV3IERhdGUoJzIwMjMtMDgtMjMnKSwgJ2hpZ2gnKTtcclxuY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdCgnU2hvcHBpbmcnKVxyXG5wcm9qZWN0MS5hZGRUb2RvKHRvZG8xKVxyXG5cclxuY29uc3QgdG9kbzIgPSBuZXcgVG9kbygnUHJlcGFyZSBQcmVzZW50YXRpb24nLCAnQ3JlYXRlIHNsaWRlcyBhbmQgb3V0bGluZSBmb3IgdXBjb21pbmcgY2xpZW50IHByZXNlbnRhdGlvbi4nLCBuZXcgRGF0ZSgnMjAyMy0wOC0xNicpLCAnbWVkaXVtJyk7XHJcbmNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QoJ1ByZXNlbnRhdGlvbicpXHJcbnByb2plY3QyLmFkZFRvZG8odG9kbzIpXHJcbnByb2plY3QyLmFkZFRvZG8odG9kbzEpXHJcbmxldCBpbmJveCA9IFtdO1xyXG4gIFxyXG5pbmJveC5wdXNoKHByb2plY3QxKVxyXG5pbmJveC5wdXNoKHByb2plY3QyKVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtaWNvbicpXHJcbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcclxuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxyXG4uY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci10cmFuc2l0aW9uJyk7XHJcbiAgICB9ICwgMClcclxufSlcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBcclxuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0TmV3UHJvamVjdCgpIHtcclxuICAgIGxldCByZXF1aXJlbWVudHNBbGVydCA9ICcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXJyZWQtYmFja2dyb3VuZCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3B1cCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wb3B1cCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZScpLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVycmVkLWJhY2tncm91bmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LXBvcHVwJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXBvcHVwJyk7XHJcbiAgICAgfSkpXHJcbiAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWNvbmZpcm0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5hbWUnKVxyXG4gICAgIFxyXG4gICAgIGlmIChuYW1lLnZhbHVlID09PSAnJyAmJiByZXF1aXJlbWVudHNBbGVydCAhPSAnJyB8fCBuYW1lLnZhbHVlLmxlbmd0aCA8IDMgJiYgcmVxdWlyZW1lbnRzQWxlcnQgIT0gJycpIHtcclxuICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgIH1pZiAobmFtZS52YWx1ZSA9PT0gJycgfHwgbmFtZS52YWx1ZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgIHJlcXVpcmVtZW50c0FsZXJ0ID0gYDxwPlBsZWFzZSBmaWxsIG91dCBhbGwgcmVxdWlyZW1lbnRzLjwvcD5gO1xyXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtY29uZmlybScpLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWJlZ2luXCIsIHJlcXVpcmVtZW50c0FsZXJ0KTtcclxuICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUudmFsdWUpXHJcbiAgICAgaW5ib3gucHVzaChwcm9qZWN0KVxyXG4gICAgIHNldFByb2plY3RzKClcclxuICAgICBnZXRUb2RvcygpXHJcbiAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXJyZWQtYmFja2dyb3VuZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3B1cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wb3B1cCcpO1xyXG4gICAgfSlcclxuICB9KVxyXG5cclxufXNldE5ld1Byb2plY3QoKVxyXG5cclxuZnVuY3Rpb24gc2V0TmV3VG9kbygpIHtcclxuICAgIGxldCByZXF1aXJlbWVudHNBbGVydCA9ICcnO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby1pdGVtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXJyZWQtYmFja2dyb3VuZCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby1pdGVtLXBvcHVwJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXBvcHVwJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXJyZWQtYmFja2dyb3VuZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8taXRlbS1wb3B1cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wb3B1cCcpO1xyXG4gICAgIH0pKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWl0ZW0tY29uZmlybScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRpdGxlJylcclxuICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtZGVzY3JpcHRpb24nKVxyXG4gICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWR1ZS1kYXRlJylcclxuICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJpb3JpdHknKVxyXG4gICAgIFxyXG4gICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZW1lbnRzQWxlcnQgIT0gJycgfHwgdGl0bGUudmFsdWUubGVuZ3RoIDwgMyAmJiByZXF1aXJlbWVudHNBbGVydCAhPSAnJykge1xyXG4gICAgICAgICByZXR1cm5cclxuICAgICB9aWYgKHRpdGxlLnZhbHVlID09PSAnJyB8fCB0aXRsZS52YWx1ZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgIHJlcXVpcmVtZW50c0FsZXJ0ID0gYDxwPlBsZWFzZSBmaWxsIG91dCBhbGwgcmVxdWlyZW1lbnRzLjwvcD5gO1xyXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8taXRlbS1jb25maXJtJykuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIiwgcmVxdWlyZW1lbnRzQWxlcnQpO1xyXG4gICAgICAgICByZXR1cm5cclxuICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgbmV3IERhdGUoZHVlRGF0ZS52YWx1ZSksIHByaW9yaXR5LnZhbHVlKTtcclxuICAgICBpbmJveFtwcm9qZWN0SW5kZXhdLmFkZFRvZG8odG9kbylcclxuICAgICBcclxuICAgICBzZXRUb2Rvcyhwcm9qZWN0SW5kZXgpXHJcbiAgICAgICAgXHJcbiAgICAgdGl0bGUudmFsdWUgPSAnJztcclxuICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgIGR1ZURhdGUudmFsdWUgPSAnJztcclxuICAgICBwcmlvcml0eS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIFxyXG4gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVycmVkLWJhY2tncm91bmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8taXRlbS1wb3B1cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wb3B1cCcpO1xyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRFZGl0SXRlbSgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1idXR0b24nKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xyXG4gICAgICBjb25zdCB0b2RvSW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kbycpO1xyXG4gICAgICBcclxuICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNvbmZpcm0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRpdGxlJylcclxuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGVzY3JpcHRpb24nKVxyXG4gICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWR1ZS1kYXRlJylcclxuICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJpb3JpdHknKVxyXG4gICAgIFxyXG4gICAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgbmV3IERhdGUoZHVlRGF0ZS52YWx1ZSksIHByaW9yaXR5LnZhbHVlKTtcclxuICAgICAgICAgIGluYm94W3Byb2plY3RJbmRleF0udG9kb3NbdG9kb0luZGV4XSA9IHRvZG87XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgc2V0VG9kb3MocHJvamVjdEluZGV4KTtcclxuXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cnJlZC1iYWNrZ3JvdW5kJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wb3B1cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wb3B1cCcpO1xyXG4gICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UHJvamVjdHMoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5ib3gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGljb25TcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcclxuICAgICAgICBpY29uU3Bhbi50ZXh0Q29udGVudCA9ICdsaXN0cyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGluYm94W2ldLm5hbWU7XHJcblxyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvblNwYW4pO1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcclxuICAgIH1cclxufVxyXG5zZXRQcm9qZWN0cygpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRUb2Rvcyhwcm9qZWN0SW5kZXgsIGRhdGUpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBjb25zdCBhZGROZXdUb2RvID0gYDxkaXYgZGF0YS1wcm9qZWN0PVwiJHtwcm9qZWN0SW5kZXh9XCIgY2xhc3M9XCJhZGQtdG9kby1pdGVtXCI+KzwvZGl2PmA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGFkZE5ld1RvZG8pXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmJveFtwcm9qZWN0SW5kZXhdLnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gJyc7XHJcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gaW5ib3hbcHJvamVjdEluZGV4XS50b2Rvc1tpXS5kdWVEYXRlO1xyXG5cclxuICAgICAgICBpZiAoZGF0ZSA9PT0gJ3RvZGF5Jykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZS5nZXREYXRlKCkgIT09IGN1cnJlbnREYXRlLmdldERhdGUoKSB8fFxyXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGUuZ2V0TW9udGgoKSAhPT0gY3VycmVudERhdGUuZ2V0TW9udGgoKSB8fFxyXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGUuZ2V0RnVsbFllYXIoKSAhPT0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRlID09PSAndGhpcy13ZWVrJykge1xyXG4gICAgICAgICAgICBsZXQgZGF5c09mVGhlV2VlayA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA3OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRheXNPZlRoZVdlZWsucHVzaChkYXkpO1xyXG4gICAgICAgICAgICAgICAgZGF5KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAhZGF5c09mVGhlV2Vlay5pbmNsdWRlcyh0b2RvRHVlRGF0ZS5nZXREYXRlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZS5nZXRNb250aCgpICE9PSBjdXJyZW50RGF0ZS5nZXRNb250aCgpIHx8XHJcbiAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZS5nZXRGdWxsWWVhcigpICE9PSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmJveFtwcm9qZWN0SW5kZXhdLnRvZG9zW2ldLnByaW9yaXR5ID09PSAnaGlnaCcpIHsgICAgICBcclxuICAgICAgICAgICAgcHJpb3JpdHkgPSAnaGlnaC1wcmlvcml0eSc7XHJcbiAgICAgICAgfWVsc2UgaWYgKGluYm94W3Byb2plY3RJbmRleF0udG9kb3NbaV0ucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7ICAgICAgXHJcbiAgICAgICAgICAgIHByaW9yaXR5ID0gJ21lZGl1bS1wcmlvcml0eSc7XHJcbiAgICAgICAgfWVsc2UgaWYgKGluYm94W3Byb2plY3RJbmRleF0udG9kb3NbaV0ucHJpb3JpdHkgPT09ICdsb3cnKSB7ICAgICAgXHJcbiAgICAgICAgICAgIHByaW9yaXR5ID0gJ2xvdy1wcmlvcml0eSc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKTtcclxuICAgICAgICB0b2RvSXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJpb3JpdHkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcclxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdEluZGV4KTtcclxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG9cIiwgaSk7XHJcbiAgICAgICAgaWYgKGluYm94W3Byb2plY3RJbmRleF0udG9kb3NbaV0uY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgIHRvZG9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpOyAgICAgICBcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaW5ib3hbcHJvamVjdEluZGV4XS50b2Rvc1tpXS50aXRsZTtcclxuXHJcbiAgICAgICAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICAgIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZGV0YWlsc0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1idXR0b25cIik7XHJcbiAgICAgICAgZGV0YWlsc0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdEluZGV4KTtcclxuICAgICAgICBkZXRhaWxzQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kb1wiLCBpKTtcclxuICAgICAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gXCJERVRBSUxTXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0SW5kZXgpO1xyXG4gICAgICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvXCIsIGkpO1xyXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBmb3JtYXREYXRlKGluYm94W3Byb2plY3RJbmRleF0udG9kb3NbaV0uZHVlRGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIsIFwiZWRpdC1idXR0b25cIik7XHJcbiAgICAgICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdEluZGV4KTtcclxuICAgICAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kb1wiLCBpKTtcclxuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJlZGl0XCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIsIFwiZGVsZXRlLWJ1dHRvblwiKTtcclxuICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIHByb2plY3RJbmRleCk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kb1wiLCBpKTtcclxuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzQnV0dG9uKTtcclxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvQ29udGVudCk7XHJcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBnZXREZXRhaWxlcygpXHJcbiAgICBnZXRFZGl0SW5wdXRzKClcclxuICAgIGRlbGV0ZUl0ZW0oKVxyXG4gICAgc2V0Q29tcGxldGVkKClcclxuICAgIHNldE5ld1RvZG8oKVxyXG4gICAgc2V0RWRpdEl0ZW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZXRhaWxlcygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXRhaWxzLWJ1dHRvbicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0luZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8nKTtcclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtZGV0YWlscycpLnRleHRDb250ZW50ID0gYFRpdGxlOiAke2luYm94W3Byb2plY3RJbmRleF0udG9kb3NbdG9kb0luZGV4XS50aXRsZX1gXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWRldGFpbHMnKS50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtpbmJveFtwcm9qZWN0SW5kZXhdLnRvZG9zW3RvZG9JbmRleF0uZGVzY3JpcHRpb259YFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZS1kZXRhaWxzJykudGV4dENvbnRlbnQgPSBgRHVlIGRhdGU6ICR7Zm9ybWF0RGF0ZShpbmJveFtwcm9qZWN0SW5kZXhdLnRvZG9zW3RvZG9JbmRleF0uZHVlRGF0ZSl9YFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1kZXRhaWxzJykudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7aW5ib3hbcHJvamVjdEluZGV4XS50b2Rvc1t0b2RvSW5kZXhdLnByaW9yaXR5fWBcclxuICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXJyZWQtYmFja2dyb3VuZCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXBvcHVwJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXBvcHVwJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXJyZWQtYmFja2dyb3VuZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1wb3B1cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wb3B1cCcpO1xyXG4gICAgICAgIH0pKVxyXG4gICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWRpdElucHV0cygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWJ1dHRvbicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0luZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8nKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRpdGxlJykudmFsdWUgPSBpbmJveFtwcm9qZWN0SW5kZXhdLnRvZG9zW3RvZG9JbmRleF0udGl0bGU7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGVzY3JpcHRpb24nKS52YWx1ZSA9IGluYm94W3Byb2plY3RJbmRleF0udG9kb3NbdG9kb0luZGV4XS5kZXNjcmlwdGlvbjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kdWUtZGF0ZScpLnZhbHVlID0gZm9ybWF0RGF0ZShpbmJveFtwcm9qZWN0SW5kZXhdLnRvZG9zW3RvZG9JbmRleF0uZHVlRGF0ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJpb3JpdHknKS52YWx1ZSA9IGluYm94W3Byb2plY3RJbmRleF0udG9kb3NbdG9kb0luZGV4XS5wcmlvcml0eTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVycmVkLWJhY2tncm91bmQnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wb3B1cCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wb3B1cCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZScpLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVycmVkLWJhY2tncm91bmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcG9wdXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcG9wdXAnKTtcclxuICAgICAgICB9KSlcclxuICAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWJ1dHRvbicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0luZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8nKTtcclxuICAgICAgICBpbmJveFtwcm9qZWN0SW5kZXhdLnRvZG9zLnNwbGljZSh0b2RvSW5kZXgsIDEpXHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgICAgIHNldFRvZG9zKHByb2plY3RJbmRleClcclxuICAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbXBsZXRlZCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0luZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8nKTtcclxuICAgICAgICAgIGlmIChpbmJveFtwcm9qZWN0SW5kZXhdLnRvZG9zW3RvZG9JbmRleF0uY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgaW5ib3hbcHJvamVjdEluZGV4XS50b2Rvc1t0b2RvSW5kZXhdLm1hcmtBc05vdENvbXBsZXRlZCgpXHJcbiAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKVxyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgIGluYm94W3Byb2plY3RJbmRleF0udG9kb3NbdG9kb0luZGV4XS5tYXJrQXNDb21wbGV0ZWQoKVxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJylcclxuICAgICAgICAgIH1cclxuICAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUb2RvcygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzZXRUb2RvcyhpbmRleClcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG59Z2V0VG9kb3MoKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxJbmJveCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHNldFRvZG9zKGluZGV4KSlcclxuICAgIH0pXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiBzZXRUb2RvcyhpbmRleCkpXHJcbiAgICB9KVxyXG59Z2V0QWxsSW5ib3goKTtcclxuXHJcbmZ1bmN0aW9uIGdldEFsbEluYm94T2ZUb2RheSgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHNldFRvZG9zKGluZGV4LCAndG9kYXknKSlcclxuICAgIH0pXHJcbn1nZXRBbGxJbmJveE9mVG9kYXkoKTtcclxuXHJcbmZ1bmN0aW9uIGdldEFsbEluYm94T2ZXZWVrKCkge1xyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoaXMtd2VlaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHNldFRvZG9zKGluZGV4LCAndGhpcy13ZWVrJykpXHJcbiAgICB9KVxyXG59Z2V0QWxsSW5ib3hPZldlZWsoKTtcclxuIiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==