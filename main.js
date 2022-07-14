/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, ".square{\n  width: 50px;\n  height: 50px;\n  border: 2px solid black;\n}\n\n.board{\n  width: max-content;\n  display: grid;\n  grid-template-columns: repeat(8,1fr);\n  grid-template-rows: repeat(8,1fr);\n  padding: 24px;\n}\n\n.gamecontainer{\n  display: flex;\n  justify-content: center;\n}\n\n.turn{\n  display: flex;\n  justify-content: center;\n}\n\n.square[display = 'sea']{\n  background-color: blue;\n}\n\n.square[display = 'miss']{\n  background-color: yellow;\n}\n\n.square[display = 'hit']{\n  background-color: red;\n}\n\n.square[display = 'ship']{\n  background-color: green;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,oCAAoC;EACpC,iCAAiC;EACjC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":[".square{\n  width: 50px;\n  height: 50px;\n  border: 2px solid black;\n}\n\n.board{\n  width: max-content;\n  display: grid;\n  grid-template-columns: repeat(8,1fr);\n  grid-template-rows: repeat(8,1fr);\n  padding: 24px;\n}\n\n.gamecontainer{\n  display: flex;\n  justify-content: center;\n}\n\n.turn{\n  display: flex;\n  justify-content: center;\n}\n\n.square[display = 'sea']{\n  background-color: blue;\n}\n\n.square[display = 'miss']{\n  background-color: yellow;\n}\n\n.square[display = 'hit']{\n  background-color: red;\n}\n\n.square[display = 'ship']{\n  background-color: green;\n}"],"sourceRoot":""}]);
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dom": () => (/* binding */ dom)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function dom() {
  const create_board = function (player) {
    const board = player.board;
    const container = document.createElement("div");
    for (let i = 0; i < board.size; i++) {
      for (let j = 0; j < board.size; j++) {
        const square = document.createElement("div");
        square.className = `square r${i} c${j}`;
        if(player.name == 'B'){
          square.addEventListener("click", (e) => _handle_clicks(e));
        }
        container.appendChild(square);
      }
    }
    container.className = `board ${player.name}`;
    return container;
  };
  const display_square = function (coords, player) {
    const toDisplay = player.board.gameboard;
    const square = document.querySelector(
      `.${player.name} .square.r${coords[0]}.c${coords[1]}`
    );
    let info = toDisplay[coords[0]][coords[1]];
    if (info == undefined) {
      square.setAttribute("display", "sea");
    } else if (info == "miss") {
      square.setAttribute("display", "miss");
    } else {
      const ship = info[0];
      const isHit = ship.hitMap[info[1]];
      if (isHit) {
        square.setAttribute("display", "hit");
      } else {
        square.setAttribute("display", "ship");
        // if (player == game.p1) {
        //   square.setAttribute("display", "ship");
        // } else {
        //   square.setAttribute("display", "sea");
        // }
      }
    }
  };

  const display_board = function (player) {
    for (let i = 0; i < player.board.size; i++) {
      for (let j = 0; j < player.board.size; j++) {
        display_square([i, j], player);
      }
    }
  };

  const display_turn = function () {
    const turn = document.querySelector(".turn");

    let info = ___WEBPACK_IMPORTED_MODULE_0__.game.onesTurn ? "Your turn" : "Computer's turn";
    turn.textContent = info;
  };

  const _handle_clicks = function (e) {
    let info = e.target.className;
    //This turns the classname into an array of the numbers
    let coords = info
      .split("")
      .filter((entry) => /\d/.test(entry))
      .map((entry) => parseInt(entry.replace(/\D/g, "")));

    if(___WEBPACK_IMPORTED_MODULE_0__.game.receiveAttack(coords, ___WEBPACK_IMPORTED_MODULE_0__.game.p2)){
      display_square(coords, ___WEBPACK_IMPORTED_MODULE_0__.game.p2);
      let next = ___WEBPACK_IMPORTED_MODULE_0__.game.ai_attack(___WEBPACK_IMPORTED_MODULE_0__.game.p1);
      display_square(next, ___WEBPACK_IMPORTED_MODULE_0__.game.p1);
    }
    
  }; 

  return {
    create_board,
    display_square,
    display_board,
    display_turn,
  };
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard)
/* harmony export */ });
function gameboard(size) {
  //So that the internal arrays arent references of each other
  let gameboard = new Array(size).fill(0).map(() => new Array(size));
  //ships are [ship, # of times hit] arrays
  let ships = [];

  //coords are [y,x]
  //Places going to the right
  const place_horiz = function (coords, ship) {
    //No room horizontally
    let [y,x] = coords;
    if(y < 0 || x < 0 || y > size || x > size){
      return false;
    }

    if (size - coords[1] < ship.length) {
      return false;
    }
    //First check that there is nothing in the way
    for (let i = coords[1]; i < coords[1] + ship.length; i++) {
      if (gameboard[coords[0]][i] != undefined) {
        return false;
      }
    }
    //Place ship
    for (let i = coords[1]; i < coords[1] + ship.length; i++) {
      gameboard[coords[0]][i] = [ship, i - coords[1]];
    }
    ships.push(ship);
    return true;
  };

  //coords are [y,x]
  //places going down
  const place_vert = function (coords, ship) {
    //No room vertically
    if (size - coords[0] < ship.length) {
      return false;
    }
    //First check that there is nothing in the way
    for (let i = coords[0]; i < coords[0] + ship.length; i++) {
      if (gameboard[i][coords[1]] != undefined) {
        return false;
      }
    }
    //Place ship
    for (let i = coords[0]; i < coords[0] + ship.length; i++) {
      gameboard[i][coords[1]] = [ship, i - coords[0]];
    }
    ships.push(ship);
    return true;
  };

  const receiveAttack = function (coords) {
    let target = gameboard[coords[0]][coords[1]];
    if (target == undefined) {
      gameboard[coords[0]][coords[1]] = "miss";
      return true;
    } else if (target == "miss") {
      return false;
    } else {
      //The target is a ship
      let [ship, ind] = target;
      if (ship.hitMap[ind]) {
        return false;
      } else {
        ship.hit(ind);
        return true;
      }
    }
  };
  const canReceiveAttack = function (coords) {
    let target = gameboard[coords[0]][coords[1]];
    if (target == "miss") {
      return false;
    }
    return true;
  };

  //will return true if all the ships are sunk *OR* if there are no ships
  const allSunk = function () {
    for (let boat of ships) {
      if (!boat.isSunk()) {
        return false;
      }
    }
    return true;
  };

  return {
    gameboard,
    ships,
    size,
    place_horiz,
    place_vert,
    receiveAttack,
    allSunk,
    canReceiveAttack,
  };
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const game = (() => {
  const p1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)("A", 8, true);
  const p2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)("B", 8, true);
  const display_manager = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.dom)();
  let onesTurn = true;
  let gameDone = false;

  

  function prompt_place_ship(length){
    while(true){
      let answer = prompt(`Where would you like to place your ship of length ${length}? Format is "row, column", eg. "3,2"`);
  
      let coords = answer.split(',').map(entry => parseInt(entry));
      const toPlace = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.ship)(length);
      if(p1.board.place_horiz(coords, toPlace)){
        break;
      }else{
        alert('Those are not valid coordinates');
      }
    }
    game.display_manager.display_board(game.p1);
    game.display_manager.display_board(game.p2);
  }

  function place_ship_random(length){
    const toPlace = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.ship)(length);
    while(true){
      let rand1 = Math.floor(Math.random() * p2.board.size);
      let rand2 = Math.floor(Math.random() * p2.board.size);
      if(p2.board.place_horiz([rand1,rand2], toPlace)){
        break;
      }
    }
  }

  function receiveAttack(coords, player) {
    if (gameDone) {
      return false;
    }
    let valid_move;
    switch (player) {
      case p1:
        valid_move = !onesTurn;
        break;
      case p2:
        valid_move = onesTurn;
        break;
    }

    if (!valid_move) {
      console.log("Not your turn");
      return false;
    }

    if (player.board.receiveAttack(coords)) {
      onesTurn = !onesTurn;
      display_manager.display_turn(onesTurn);

      if (player.board.allSunk()) {
        const turn = document.querySelector(".turn");
        switch (player) {
          case p1:
            turn.textContent = "You lose!";
            break;
          case p2:
            turn.textContent = "You win!";
            break;
        }
        gameDone = true;
      }
      return true;
    }
  }

  function ai_attack(player) {
    //Try guessing 10 times a random spot and moving there
    let board = player.board;
    for (let i = 0; i < 10; i++) {
      let rand1 = Math.floor(Math.random() * board.size);
      let rand2 = Math.floor(Math.random() * board.size);
      let coords = [rand1, rand2];
      if (board.canReceiveAttack(coords)) {
        receiveAttack(coords, player);
        return coords;
      }
    }function place_ship_random(length){
      const toPlace = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.ship)(length);
      while(true){
        let rand1 = Math.floor(Math.random() * board.size);
        let rand2 = Math.floor(Math.random() * board.size);
        if(game.p2.board.place_horiz([rand1,rand2], toPlace)){
          break;
        }
      }
    }
    //Go through linearly
    for (let i = 0; i < board.size; i++) {
      for (let j = 0; j < board.size; j++) {
        let coords = [i, j];
        if (board.receiveAttack([i, j])) {
          receiveAttack(coords, player);
          return coords;
        }
      }
    }
    //No place to attack, error somewhere
    console.log("Ai attack error");
    return false;
  }

  return {
    p1,
    p2,
    onesTurn,
    display_manager,
    receiveAttack,
    ai_attack,
    prompt_place_ship,
    place_ship_random,
  };
})();


function initialize_game(){
  const container = document.querySelector(".gamecontainer");
  container.appendChild(game.display_manager.create_board(game.p1));
  container.appendChild(game.display_manager.create_board(game.p2));

  game.display_manager.display_board(game.p1);
  game.display_manager.display_board(game.p2);
 

  place_ships_random();
  place_ships();

  game.display_manager.display_board(game.p1);
  game.display_manager.display_board(game.p2);
}

function place_ships(){
  game.prompt_place_ship(3);
  game.prompt_place_ship(4);
  game.prompt_place_ship(2);
  game.prompt_place_ship(2);
}

function place_ships_random(){
  game.place_ship_random(3);
  game.place_ship_random(4);
  game.place_ship_random(2);
  game.place_ship_random(2);

}

//Just a random ship layout to have by default
function default_ships(b) {


  const b1 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.ship)(2);
  const b2 = (0,_ship__WEBPACK_IMPORTED_MODULE_3__.ship)(3);

  b.place_horiz([0, 0], b1);
  b.place_vert([0, 4], b2);

  game.display_manager.display_board(game.p1);
  game.display_manager.display_board(game.p2);
}

initialize_game();




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");


function player(name, size, first) {
  let board = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameboard)(size);

  function move(coords, board) {
      let res = board.receiveAttack(coords);
      return res;
  }

  function random_move(board) {
    //Try guessing 10 times a random spot and moving there

      for (let i = 0; i < 10; i++) {
        let rand1 = Math.floor(Math.random() * board.size);
        let rand2 = Math.floor(Math.random() * board.size);
        if (board.receiveAttack([rand1, rand2])) {
          return true;
        }
      }
      //Go through linearly
      for (let i = 0; i < board.size; i++) {
        for (let j = 0; j < board.size; j++) {
          if (board.receiveAttack([i, j])) {
            return true;
          }
        }
      }
      //No place to attack, error somewhere
      return false;
  }
  return {
    name,
    board,
    move,
    random_move,
  };
}




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
function ship(length){

  const hitMap = new Array(length).fill(0);

  const hit = function(index){
    hitMap[index] = 1;
    return this;
  }

  const isSunk = function(){
    return !!hitMap.reduce((bool, ind) => ind && bool, true);
  }

  return {
    length,
    hitMap,
    hit,
    isSunk,
  }
}



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELGdCQUFnQixpQkFBaUIsNEJBQTRCLEdBQUcsV0FBVyx1QkFBdUIsa0JBQWtCLHlDQUF5QyxzQ0FBc0Msa0JBQWtCLEdBQUcsbUJBQW1CLGtCQUFrQiw0QkFBNEIsR0FBRyxVQUFVLGtCQUFrQiw0QkFBNEIsR0FBRyw2QkFBNkIsMkJBQTJCLEdBQUcsOEJBQThCLDZCQUE2QixHQUFHLDZCQUE2QiwwQkFBMEIsR0FBRyw4QkFBOEIsNEJBQTRCLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksa0NBQWtDLGdCQUFnQixpQkFBaUIsNEJBQTRCLEdBQUcsV0FBVyx1QkFBdUIsa0JBQWtCLHlDQUF5QyxzQ0FBc0Msa0JBQWtCLEdBQUcsbUJBQW1CLGtCQUFrQiw0QkFBNEIsR0FBRyxVQUFVLGtCQUFrQiw0QkFBNEIsR0FBRyw2QkFBNkIsMkJBQTJCLEdBQUcsOEJBQThCLDZCQUE2QixHQUFHLDZCQUE2QiwwQkFBMEIsR0FBRyw4QkFBOEIsNEJBQTRCLEdBQUcsbUJBQW1CO0FBQ3RsRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQyxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0Esc0NBQXNDLEdBQUcsR0FBRyxFQUFFO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGFBQWEsV0FBVyxVQUFVLElBQUksVUFBVTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0Msc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNENBQWE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLGlEQUFrQixTQUFTLHNDQUFPO0FBQ3pDLDZCQUE2QixzQ0FBTztBQUNwQyxpQkFBaUIsNkNBQWMsQ0FBQyxzQ0FBTztBQUN2QywyQkFBMkIsc0NBQU87QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlOzs7Ozs7Ozs7Ozs7Ozs7QUNwRmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHYTtBQUNNO0FBQ1o7QUFDRTtBQUNUOztBQUVkO0FBQ1AsYUFBYSwrQ0FBTTtBQUNuQixhQUFhLCtDQUFNO0FBQ25CLDBCQUEwQix5Q0FBRztBQUM3QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwrRUFBK0UsT0FBTztBQUN0RjtBQUNBO0FBQ0Esc0JBQXNCLDJDQUFJO0FBQzFCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDJDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0IsMkNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQyxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsYUFBYSwyQ0FBSTtBQUNqQixhQUFhLDJDQUFJOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0t5Qzs7QUFFekM7QUFDQSxjQUFjLHdEQUFTOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0Qyx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDbEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ25CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNxdWFyZXtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LDFmcik7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4uZ2FtZWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnR1cm57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zcXVhcmVbZGlzcGxheSA9ICdzZWEnXXtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5zcXVhcmVbZGlzcGxheSA9ICdtaXNzJ117XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5zcXVhcmVbZGlzcGxheSA9ICdoaXQnXXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNxdWFyZVtkaXNwbGF5ID0gJ3NoaXAnXXtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxpQ0FBaUM7RUFDakMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNxdWFyZXtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LDFmcik7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4uZ2FtZWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnR1cm57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zcXVhcmVbZGlzcGxheSA9ICdzZWEnXXtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5zcXVhcmVbZGlzcGxheSA9ICdtaXNzJ117XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5zcXVhcmVbZGlzcGxheSA9ICdoaXQnXXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNxdWFyZVtkaXNwbGF5ID0gJ3NoaXAnXXtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLlwiO1xuXG5mdW5jdGlvbiBkb20oKSB7XG4gIGNvbnN0IGNyZWF0ZV9ib2FyZCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5ib2FyZDtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQuc2l6ZTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkLnNpemU7IGorKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuY2xhc3NOYW1lID0gYHNxdWFyZSByJHtpfSBjJHtqfWA7XG4gICAgICAgIGlmKHBsYXllci5uYW1lID09ICdCJyl7XG4gICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gX2hhbmRsZV9jbGlja3MoZSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gYGJvYXJkICR7cGxheWVyLm5hbWV9YDtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9O1xuICBjb25zdCBkaXNwbGF5X3NxdWFyZSA9IGZ1bmN0aW9uIChjb29yZHMsIHBsYXllcikge1xuICAgIGNvbnN0IHRvRGlzcGxheSA9IHBsYXllci5ib2FyZC5nYW1lYm9hcmQ7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtwbGF5ZXIubmFtZX0gLnNxdWFyZS5yJHtjb29yZHNbMF19LmMke2Nvb3Jkc1sxXX1gXG4gICAgKTtcbiAgICBsZXQgaW5mbyA9IHRvRGlzcGxheVtjb29yZHNbMF1dW2Nvb3Jkc1sxXV07XG4gICAgaWYgKGluZm8gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGlzcGxheVwiLCBcInNlYVwiKTtcbiAgICB9IGVsc2UgaWYgKGluZm8gPT0gXCJtaXNzXCIpIHtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkaXNwbGF5XCIsIFwibWlzc1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2hpcCA9IGluZm9bMF07XG4gICAgICBjb25zdCBpc0hpdCA9IHNoaXAuaGl0TWFwW2luZm9bMV1dO1xuICAgICAgaWYgKGlzSGl0KSB7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkaXNwbGF5XCIsIFwiaGl0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRpc3BsYXlcIiwgXCJzaGlwXCIpO1xuICAgICAgICAvLyBpZiAocGxheWVyID09IGdhbWUucDEpIHtcbiAgICAgICAgLy8gICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGlzcGxheVwiLCBcInNoaXBcIik7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRpc3BsYXlcIiwgXCJzZWFcIik7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheV9ib2FyZCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5ib2FyZC5zaXplOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLmJvYXJkLnNpemU7IGorKykge1xuICAgICAgICBkaXNwbGF5X3NxdWFyZShbaSwgal0sIHBsYXllcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlfdHVybiA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0dXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dXJuXCIpO1xuXG4gICAgbGV0IGluZm8gPSBnYW1lLm9uZXNUdXJuID8gXCJZb3VyIHR1cm5cIiA6IFwiQ29tcHV0ZXIncyB0dXJuXCI7XG4gICAgdHVybi50ZXh0Q29udGVudCA9IGluZm87XG4gIH07XG5cbiAgY29uc3QgX2hhbmRsZV9jbGlja3MgPSBmdW5jdGlvbiAoZSkge1xuICAgIGxldCBpbmZvID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgIC8vVGhpcyB0dXJucyB0aGUgY2xhc3NuYW1lIGludG8gYW4gYXJyYXkgb2YgdGhlIG51bWJlcnNcbiAgICBsZXQgY29vcmRzID0gaW5mb1xuICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAuZmlsdGVyKChlbnRyeSkgPT4gL1xcZC8udGVzdChlbnRyeSkpXG4gICAgICAubWFwKChlbnRyeSkgPT4gcGFyc2VJbnQoZW50cnkucmVwbGFjZSgvXFxEL2csIFwiXCIpKSk7XG5cbiAgICBpZihnYW1lLnJlY2VpdmVBdHRhY2soY29vcmRzLCBnYW1lLnAyKSl7XG4gICAgICBkaXNwbGF5X3NxdWFyZShjb29yZHMsIGdhbWUucDIpO1xuICAgICAgbGV0IG5leHQgPSBnYW1lLmFpX2F0dGFjayhnYW1lLnAxKTtcbiAgICAgIGRpc3BsYXlfc3F1YXJlKG5leHQsIGdhbWUucDEpO1xuICAgIH1cbiAgICBcbiAgfTsgXG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVfYm9hcmQsXG4gICAgZGlzcGxheV9zcXVhcmUsXG4gICAgZGlzcGxheV9ib2FyZCxcbiAgICBkaXNwbGF5X3R1cm4sXG4gIH07XG59XG5cbmV4cG9ydCB7IGRvbSB9O1xuIiwiZnVuY3Rpb24gZ2FtZWJvYXJkKHNpemUpIHtcbiAgLy9TbyB0aGF0IHRoZSBpbnRlcm5hbCBhcnJheXMgYXJlbnQgcmVmZXJlbmNlcyBvZiBlYWNoIG90aGVyXG4gIGxldCBnYW1lYm9hcmQgPSBuZXcgQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IEFycmF5KHNpemUpKTtcbiAgLy9zaGlwcyBhcmUgW3NoaXAsICMgb2YgdGltZXMgaGl0XSBhcnJheXNcbiAgbGV0IHNoaXBzID0gW107XG5cbiAgLy9jb29yZHMgYXJlIFt5LHhdXG4gIC8vUGxhY2VzIGdvaW5nIHRvIHRoZSByaWdodFxuICBjb25zdCBwbGFjZV9ob3JpeiA9IGZ1bmN0aW9uIChjb29yZHMsIHNoaXApIHtcbiAgICAvL05vIHJvb20gaG9yaXpvbnRhbGx5XG4gICAgbGV0IFt5LHhdID0gY29vcmRzO1xuICAgIGlmKHkgPCAwIHx8IHggPCAwIHx8IHkgPiBzaXplIHx8IHggPiBzaXplKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSAtIGNvb3Jkc1sxXSA8IHNoaXAubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vRmlyc3QgY2hlY2sgdGhhdCB0aGVyZSBpcyBub3RoaW5nIGluIHRoZSB3YXlcbiAgICBmb3IgKGxldCBpID0gY29vcmRzWzFdOyBpIDwgY29vcmRzWzFdICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGdhbWVib2FyZFtjb29yZHNbMF1dW2ldICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vUGxhY2Ugc2hpcFxuICAgIGZvciAobGV0IGkgPSBjb29yZHNbMV07IGkgPCBjb29yZHNbMV0gKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBnYW1lYm9hcmRbY29vcmRzWzBdXVtpXSA9IFtzaGlwLCBpIC0gY29vcmRzWzFdXTtcbiAgICB9XG4gICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvL2Nvb3JkcyBhcmUgW3kseF1cbiAgLy9wbGFjZXMgZ29pbmcgZG93blxuICBjb25zdCBwbGFjZV92ZXJ0ID0gZnVuY3Rpb24gKGNvb3Jkcywgc2hpcCkge1xuICAgIC8vTm8gcm9vbSB2ZXJ0aWNhbGx5XG4gICAgaWYgKHNpemUgLSBjb29yZHNbMF0gPCBzaGlwLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvL0ZpcnN0IGNoZWNrIHRoYXQgdGhlcmUgaXMgbm90aGluZyBpbiB0aGUgd2F5XG4gICAgZm9yIChsZXQgaSA9IGNvb3Jkc1swXTsgaSA8IGNvb3Jkc1swXSArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChnYW1lYm9hcmRbaV1bY29vcmRzWzFdXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvL1BsYWNlIHNoaXBcbiAgICBmb3IgKGxldCBpID0gY29vcmRzWzBdOyBpIDwgY29vcmRzWzBdICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgZ2FtZWJvYXJkW2ldW2Nvb3Jkc1sxXV0gPSBbc2hpcCwgaSAtIGNvb3Jkc1swXV07XG4gICAgfVxuICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uIChjb29yZHMpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZ2FtZWJvYXJkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXTtcbiAgICBpZiAodGFyZ2V0ID09IHVuZGVmaW5lZCkge1xuICAgICAgZ2FtZWJvYXJkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9IFwibWlzc1wiO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9UaGUgdGFyZ2V0IGlzIGEgc2hpcFxuICAgICAgbGV0IFtzaGlwLCBpbmRdID0gdGFyZ2V0O1xuICAgICAgaWYgKHNoaXAuaGl0TWFwW2luZF0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5oaXQoaW5kKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBjYW5SZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24gKGNvb3Jkcykge1xuICAgIGxldCB0YXJnZXQgPSBnYW1lYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dO1xuICAgIGlmICh0YXJnZXQgPT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy93aWxsIHJldHVybiB0cnVlIGlmIGFsbCB0aGUgc2hpcHMgYXJlIHN1bmsgKk9SKiBpZiB0aGVyZSBhcmUgbm8gc2hpcHNcbiAgY29uc3QgYWxsU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBib2F0IG9mIHNoaXBzKSB7XG4gICAgICBpZiAoIWJvYXQuaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdhbWVib2FyZCxcbiAgICBzaGlwcyxcbiAgICBzaXplLFxuICAgIHBsYWNlX2hvcml6LFxuICAgIHBsYWNlX3ZlcnQsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICAgIGNhblJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGRvbSB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gKCgpID0+IHtcbiAgY29uc3QgcDEgPSBwbGF5ZXIoXCJBXCIsIDgsIHRydWUpO1xuICBjb25zdCBwMiA9IHBsYXllcihcIkJcIiwgOCwgdHJ1ZSk7XG4gIGNvbnN0IGRpc3BsYXlfbWFuYWdlciA9IGRvbSgpO1xuICBsZXQgb25lc1R1cm4gPSB0cnVlO1xuICBsZXQgZ2FtZURvbmUgPSBmYWxzZTtcblxuICBcblxuICBmdW5jdGlvbiBwcm9tcHRfcGxhY2Vfc2hpcChsZW5ndGgpe1xuICAgIHdoaWxlKHRydWUpe1xuICAgICAgbGV0IGFuc3dlciA9IHByb21wdChgV2hlcmUgd291bGQgeW91IGxpa2UgdG8gcGxhY2UgeW91ciBzaGlwIG9mIGxlbmd0aCAke2xlbmd0aH0/IEZvcm1hdCBpcyBcInJvdywgY29sdW1uXCIsIGVnLiBcIjMsMlwiYCk7XG4gIFxuICAgICAgbGV0IGNvb3JkcyA9IGFuc3dlci5zcGxpdCgnLCcpLm1hcChlbnRyeSA9PiBwYXJzZUludChlbnRyeSkpO1xuICAgICAgY29uc3QgdG9QbGFjZSA9IHNoaXAobGVuZ3RoKTtcbiAgICAgIGlmKHAxLmJvYXJkLnBsYWNlX2hvcml6KGNvb3JkcywgdG9QbGFjZSkpe1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNle1xuICAgICAgICBhbGVydCgnVGhvc2UgYXJlIG5vdCB2YWxpZCBjb29yZGluYXRlcycpO1xuICAgICAgfVxuICAgIH1cbiAgICBnYW1lLmRpc3BsYXlfbWFuYWdlci5kaXNwbGF5X2JvYXJkKGdhbWUucDEpO1xuICAgIGdhbWUuZGlzcGxheV9tYW5hZ2VyLmRpc3BsYXlfYm9hcmQoZ2FtZS5wMik7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZV9zaGlwX3JhbmRvbShsZW5ndGgpe1xuICAgIGNvbnN0IHRvUGxhY2UgPSBzaGlwKGxlbmd0aCk7XG4gICAgd2hpbGUodHJ1ZSl7XG4gICAgICBsZXQgcmFuZDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwMi5ib2FyZC5zaXplKTtcbiAgICAgIGxldCByYW5kMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHAyLmJvYXJkLnNpemUpO1xuICAgICAgaWYocDIuYm9hcmQucGxhY2VfaG9yaXooW3JhbmQxLHJhbmQyXSwgdG9QbGFjZSkpe1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkcywgcGxheWVyKSB7XG4gICAgaWYgKGdhbWVEb25lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB2YWxpZF9tb3ZlO1xuICAgIHN3aXRjaCAocGxheWVyKSB7XG4gICAgICBjYXNlIHAxOlxuICAgICAgICB2YWxpZF9tb3ZlID0gIW9uZXNUdXJuO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcDI6XG4gICAgICAgIHZhbGlkX21vdmUgPSBvbmVzVHVybjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZF9tb3ZlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vdCB5b3VyIHR1cm5cIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkcykpIHtcbiAgICAgIG9uZXNUdXJuID0gIW9uZXNUdXJuO1xuICAgICAgZGlzcGxheV9tYW5hZ2VyLmRpc3BsYXlfdHVybihvbmVzVHVybik7XG5cbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgIGNvbnN0IHR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR1cm5cIik7XG4gICAgICAgIHN3aXRjaCAocGxheWVyKSB7XG4gICAgICAgICAgY2FzZSBwMTpcbiAgICAgICAgICAgIHR1cm4udGV4dENvbnRlbnQgPSBcIllvdSBsb3NlIVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBwMjpcbiAgICAgICAgICAgIHR1cm4udGV4dENvbnRlbnQgPSBcIllvdSB3aW4hXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBnYW1lRG9uZSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhaV9hdHRhY2socGxheWVyKSB7XG4gICAgLy9UcnkgZ3Vlc3NpbmcgMTAgdGltZXMgYSByYW5kb20gc3BvdCBhbmQgbW92aW5nIHRoZXJlXG4gICAgbGV0IGJvYXJkID0gcGxheWVyLmJvYXJkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgbGV0IHJhbmQxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmQuc2l6ZSk7XG4gICAgICBsZXQgcmFuZDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5zaXplKTtcbiAgICAgIGxldCBjb29yZHMgPSBbcmFuZDEsIHJhbmQyXTtcbiAgICAgIGlmIChib2FyZC5jYW5SZWNlaXZlQXR0YWNrKGNvb3JkcykpIHtcbiAgICAgICAgcmVjZWl2ZUF0dGFjayhjb29yZHMsIHBsYXllcik7XG4gICAgICAgIHJldHVybiBjb29yZHM7XG4gICAgICB9XG4gICAgfWZ1bmN0aW9uIHBsYWNlX3NoaXBfcmFuZG9tKGxlbmd0aCl7XG4gICAgICBjb25zdCB0b1BsYWNlID0gc2hpcChsZW5ndGgpO1xuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgIGxldCByYW5kMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLnNpemUpO1xuICAgICAgICBsZXQgcmFuZDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5zaXplKTtcbiAgICAgICAgaWYoZ2FtZS5wMi5ib2FyZC5wbGFjZV9ob3JpeihbcmFuZDEscmFuZDJdLCB0b1BsYWNlKSl7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy9HbyB0aHJvdWdoIGxpbmVhcmx5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5zaXplOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmQuc2l6ZTsgaisrKSB7XG4gICAgICAgIGxldCBjb29yZHMgPSBbaSwgal07XG4gICAgICAgIGlmIChib2FyZC5yZWNlaXZlQXR0YWNrKFtpLCBqXSkpIHtcbiAgICAgICAgICByZWNlaXZlQXR0YWNrKGNvb3JkcywgcGxheWVyKTtcbiAgICAgICAgICByZXR1cm4gY29vcmRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vTm8gcGxhY2UgdG8gYXR0YWNrLCBlcnJvciBzb21ld2hlcmVcbiAgICBjb25zb2xlLmxvZyhcIkFpIGF0dGFjayBlcnJvclwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHAxLFxuICAgIHAyLFxuICAgIG9uZXNUdXJuLFxuICAgIGRpc3BsYXlfbWFuYWdlcixcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFpX2F0dGFjayxcbiAgICBwcm9tcHRfcGxhY2Vfc2hpcCxcbiAgICBwbGFjZV9zaGlwX3JhbmRvbSxcbiAgfTtcbn0pKCk7XG5cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZV9nYW1lKCl7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWUuZGlzcGxheV9tYW5hZ2VyLmNyZWF0ZV9ib2FyZChnYW1lLnAxKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lLmRpc3BsYXlfbWFuYWdlci5jcmVhdGVfYm9hcmQoZ2FtZS5wMikpO1xuXG4gIGdhbWUuZGlzcGxheV9tYW5hZ2VyLmRpc3BsYXlfYm9hcmQoZ2FtZS5wMSk7XG4gIGdhbWUuZGlzcGxheV9tYW5hZ2VyLmRpc3BsYXlfYm9hcmQoZ2FtZS5wMik7XG4gXG5cbiAgcGxhY2Vfc2hpcHNfcmFuZG9tKCk7XG4gIHBsYWNlX3NoaXBzKCk7XG5cbiAgZ2FtZS5kaXNwbGF5X21hbmFnZXIuZGlzcGxheV9ib2FyZChnYW1lLnAxKTtcbiAgZ2FtZS5kaXNwbGF5X21hbmFnZXIuZGlzcGxheV9ib2FyZChnYW1lLnAyKTtcbn1cblxuZnVuY3Rpb24gcGxhY2Vfc2hpcHMoKXtcbiAgZ2FtZS5wcm9tcHRfcGxhY2Vfc2hpcCgzKTtcbiAgZ2FtZS5wcm9tcHRfcGxhY2Vfc2hpcCg0KTtcbiAgZ2FtZS5wcm9tcHRfcGxhY2Vfc2hpcCgyKTtcbiAgZ2FtZS5wcm9tcHRfcGxhY2Vfc2hpcCgyKTtcbn1cblxuZnVuY3Rpb24gcGxhY2Vfc2hpcHNfcmFuZG9tKCl7XG4gIGdhbWUucGxhY2Vfc2hpcF9yYW5kb20oMyk7XG4gIGdhbWUucGxhY2Vfc2hpcF9yYW5kb20oNCk7XG4gIGdhbWUucGxhY2Vfc2hpcF9yYW5kb20oMik7XG4gIGdhbWUucGxhY2Vfc2hpcF9yYW5kb20oMik7XG5cbn1cblxuLy9KdXN0IGEgcmFuZG9tIHNoaXAgbGF5b3V0IHRvIGhhdmUgYnkgZGVmYXVsdFxuZnVuY3Rpb24gZGVmYXVsdF9zaGlwcyhiKSB7XG5cblxuICBjb25zdCBiMSA9IHNoaXAoMik7XG4gIGNvbnN0IGIyID0gc2hpcCgzKTtcblxuICBiLnBsYWNlX2hvcml6KFswLCAwXSwgYjEpO1xuICBiLnBsYWNlX3ZlcnQoWzAsIDRdLCBiMik7XG5cbiAgZ2FtZS5kaXNwbGF5X21hbmFnZXIuZGlzcGxheV9ib2FyZChnYW1lLnAxKTtcbiAgZ2FtZS5kaXNwbGF5X21hbmFnZXIuZGlzcGxheV9ib2FyZChnYW1lLnAyKTtcbn1cblxuaW5pdGlhbGl6ZV9nYW1lKCk7XG5cblxuIiwiaW1wb3J0IHtnYW1lYm9hcmR9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcblxuZnVuY3Rpb24gcGxheWVyKG5hbWUsIHNpemUsIGZpcnN0KSB7XG4gIGxldCBib2FyZCA9IGdhbWVib2FyZChzaXplKTtcblxuICBmdW5jdGlvbiBtb3ZlKGNvb3JkcywgYm9hcmQpIHtcbiAgICAgIGxldCByZXMgPSBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZG9tX21vdmUoYm9hcmQpIHtcbiAgICAvL1RyeSBndWVzc2luZyAxMCB0aW1lcyBhIHJhbmRvbSBzcG90IGFuZCBtb3ZpbmcgdGhlcmVcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGxldCByYW5kMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLnNpemUpO1xuICAgICAgICBsZXQgcmFuZDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5zaXplKTtcbiAgICAgICAgaWYgKGJvYXJkLnJlY2VpdmVBdHRhY2soW3JhbmQxLCByYW5kMl0pKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vR28gdGhyb3VnaCBsaW5lYXJseVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5zaXplOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZC5zaXplOyBqKyspIHtcbiAgICAgICAgICBpZiAoYm9hcmQucmVjZWl2ZUF0dGFjayhbaSwgal0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vTm8gcGxhY2UgdG8gYXR0YWNrLCBlcnJvciBzb21ld2hlcmVcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgYm9hcmQsXG4gICAgbW92ZSxcbiAgICByYW5kb21fbW92ZSxcbiAgfTtcbn1cblxuZXhwb3J0IHsgcGxheWVyIH07XG4iLCJmdW5jdGlvbiBzaGlwKGxlbmd0aCl7XG5cbiAgY29uc3QgaGl0TWFwID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbCgwKTtcblxuICBjb25zdCBoaXQgPSBmdW5jdGlvbihpbmRleCl7XG4gICAgaGl0TWFwW2luZGV4XSA9IDE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiAhIWhpdE1hcC5yZWR1Y2UoKGJvb2wsIGluZCkgPT4gaW5kICYmIGJvb2wsIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgaGl0TWFwLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH1cbn1cblxuZXhwb3J0e3NoaXB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=