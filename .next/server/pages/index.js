/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./content/home.md":
/*!*************************!*\
  !*** ./content/home.md ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const React = __webpack_require__(/*! react */ \"react\")\n\nmodule.exports = { \n      attributes: {\"title\":\"PerSe\",\"date\":\"2022-08-30T19:31:20.591Z\",\"developments\":[{\"description\":\"PerSe development test\",\"name\":\"PerSe Development\"}]},\n    \n      react: \n      function (props) {\n        Object.keys(props).forEach(function (key) {\n          this[key] = props[key]\n        })\n        const markdown = /*#__PURE__*/React.createElement(\"div\", {\n  className: \"frontmatter-markdown\"\n}, /*#__PURE__*/React.createElement(\"p\", null, \"Welcome to PerSe\"));\n        return markdown\n      }\n    ,\n     }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZW50L2hvbWUubWQuanMiLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxtQkFBTyxDQUFDLG9CQUFPOztBQUU3QjtBQUNBLG1CQUFtQixtRUFBbUUsa0VBQWtFLEVBQUU7QUFDMUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc2UtbGFuZGluZy8uL2NvbnRlbnQvaG9tZS5tZD8zODM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgXG4gICAgICBhdHRyaWJ1dGVzOiB7XCJ0aXRsZVwiOlwiUGVyU2VcIixcImRhdGVcIjpcIjIwMjItMDgtMzBUMTk6MzE6MjAuNTkxWlwiLFwiZGV2ZWxvcG1lbnRzXCI6W3tcImRlc2NyaXB0aW9uXCI6XCJQZXJTZSBkZXZlbG9wbWVudCB0ZXN0XCIsXCJuYW1lXCI6XCJQZXJTZSBEZXZlbG9wbWVudFwifV19LFxuICAgIFxuICAgICAgcmVhY3Q6IFxuICAgICAgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG1hcmtkb3duID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICBjbGFzc05hbWU6IFwiZnJvbnRtYXR0ZXItbWFya2Rvd25cIlxufSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiV2VsY29tZSB0byBQZXJTZVwiKSk7XG4gICAgICAgIHJldHVybiBtYXJrZG93blxuICAgICAgfVxuICAgICxcbiAgICAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./content/home.md\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/home.md */ \"./content/home.md\");\n/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_2__.Component {\n    render() {\n        let { title , developments  } = _content_home_md__WEBPACK_IMPORTED_MODULE_3__.attributes;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://identity.netlify.com/v1/netlify-identity-widget.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jairmendoza/Developer/perse-landing/pages/index.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jairmendoza/Developer/perse-landing/pages/index.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"PerSe\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jairmendoza/Developer/perse-landing/pages/index.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_content_home_md__WEBPACK_IMPORTED_MODULE_3__.react, {}, void 0, false, {\n                            fileName: \"/Users/jairmendoza/Developer/perse-landing/pages/index.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: developments.map((dev, k)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: dev.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jairmendoza/Developer/perse-landing/pages/index.js\",\n                                            lineNumber: 20,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: dev.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jairmendoza/Developer/perse-landing/pages/index.js\",\n                                            lineNumber: 21,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, k, true, {\n                                    fileName: \"/Users/jairmendoza/Developer/perse-landing/pages/index.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/jairmendoza/Developer/perse-landing/pages/index.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jairmendoza/Developer/perse-landing/pages/index.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNLO0FBQ3FDO0FBR3ZELE1BQU1LLElBQUksU0FBU0osNENBQVM7SUFDekNLLE1BQU0sR0FBRztRQUNQLElBQUksRUFBRUMsS0FBSyxHQUFFQyxZQUFZLEdBQUUsR0FBR04sd0RBQVU7UUFDeEMscUJBQ0U7OzhCQUNFLDhEQUFDRixrREFBSTs4QkFDSCw0RUFBQ1MsUUFBTTt3QkFBQ0MsR0FBRyxFQUFDLDREQUE0RDs7Ozs7NEJBQVU7Ozs7O3dCQUM3RTs4QkFDUCw4REFBQ0MsU0FBTzs7c0NBQ04sOERBQUNDLElBQUU7c0NBQUMsT0FBSzs7Ozs7Z0NBQUs7c0NBQ2QsOERBQUNSLG1EQUFXOzs7O2dDQUFHO3NDQUNmLDhEQUFDUyxJQUFFO3NDQUNBTCxZQUFZLENBQUNNLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLENBQUMsaUJBQ3ZCLDhEQUFDQyxJQUFFOztzREFDRCw4REFBQ0MsSUFBRTtzREFBRUgsR0FBRyxDQUFDSSxJQUFJOzs7OztnREFBTTtzREFDbkIsOERBQUNDLEdBQUM7c0RBQUVMLEdBQUcsQ0FBQ00sV0FBVzs7Ozs7Z0RBQUs7O21DQUZqQkwsQ0FBQzs7Ozt3Q0FHTCxDQUNMOzs7OztnQ0FDQzs7Ozs7O3dCQUNHOzt3QkFDVCxDQUNKO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNlLWxhbmRpbmcvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhdHRyaWJ1dGVzLCByZWFjdCBhcyBIb21lQ29udGVudCB9IGZyb20gJy4uL2NvbnRlbnQvaG9tZS5tZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB0aXRsZSwgZGV2ZWxvcG1lbnRzIH0gPSBhdHRyaWJ1dGVzO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vaWRlbnRpdHkubmV0bGlmeS5jb20vdjEvbmV0bGlmeS1pZGVudGl0eS13aWRnZXQuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8aDE+UGVyU2U8L2gxPlxuICAgICAgICAgIDxIb21lQ29udGVudCAvPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtkZXZlbG9wbWVudHMubWFwKChkZXYsIGspID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17a30+XG4gICAgICAgICAgICAgICAgPGgyPntkZXYubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPntkZXYuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJDb21wb25lbnQiLCJhdHRyaWJ1dGVzIiwicmVhY3QiLCJIb21lQ29udGVudCIsIkhvbWUiLCJyZW5kZXIiLCJ0aXRsZSIsImRldmVsb3BtZW50cyIsInNjcmlwdCIsInNyYyIsImFydGljbGUiLCJoMSIsInVsIiwibWFwIiwiZGV2IiwiayIsImxpIiwiaDIiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();