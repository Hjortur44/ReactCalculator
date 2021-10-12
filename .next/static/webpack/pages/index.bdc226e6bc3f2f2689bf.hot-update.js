/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ \"./src/components/layout/Layout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _math_equation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/equation */ \"./src/math/equation.ts\");\n/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/button/Button */ \"./src/components/button/Button.tsx\");\n/* harmony import */ var _components_textarea_TextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/textarea/TextArea */ \"./src/components/textarea/TextArea.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/hjortur/Desktop/calculator/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction App() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      result = _useState[0],\n      setResult = _useState[1];\n\n  var numButtons = [\"0\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \".\"];\n  var opButtons = [\"*\", \"/\", \"+\", \"-\"];\n  var adminButtons = [\"Back\", \"Clear\"];\n  var equalsButton = \"=\";\n\n  var handleNumberClick = function handleNumberClick(e) {\n    setResult(result.concat(e.target.name));\n    (0,_math_equation__WEBPACK_IMPORTED_MODULE_4__.number)(e.target.name);\n  };\n\n  var handleOperandClick = function handleOperandClick(e) {\n    setResult(result.concat(e.target.name));\n    (0,_math_equation__WEBPACK_IMPORTED_MODULE_4__.operand)(e.target.name);\n  };\n\n  var handleCalculateClick = function handleCalculateClick() {\n    setResult(_math_equation__WEBPACK_IMPORTED_MODULE_4__.calculate);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Calculator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_textarea_TextArea__WEBPACK_IMPORTED_MODULE_6__.TextArea, {\n        value: result\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }, this), numButtons.map(function (button, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n          name: button,\n          onClick: handleNumberClick\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }, _this);\n      }), opButtons.map(function (button, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n          name: button,\n          onClick: handleOperandClick\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }, _this);\n      }), adminButtons.map(function (button, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n          name: button,\n          onClick: handleOperandClick\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 9\n        }, _this);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n        name: equalsButton,\n        onClick: handleCalculateClick\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"+gLbWhCz1wxZi8Q3iizH9D49vKk=\");\n\n_c = App;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkFwcCIsInVzZVN0YXRlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwibnVtQnV0dG9ucyIsIm9wQnV0dG9ucyIsImFkbWluQnV0dG9ucyIsImVxdWFsc0J1dHRvbiIsImhhbmRsZU51bWJlckNsaWNrIiwiZSIsImNvbmNhdCIsInRhcmdldCIsIm5hbWUiLCJudW1iZXIiLCJoYW5kbGVPcGVyYW5kQ2xpY2siLCJvcGVyYW5kIiwiaGFuZGxlQ2FsY3VsYXRlQ2xpY2siLCJjYWxjdWxhdGUiLCJtYXAiLCJidXR0b24iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULEdBQWM7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZ0JDLCtDQUFRLENBQVMsRUFBVCxDQUR4QjtBQUFBLE1BQ0xDLE1BREs7QUFBQSxNQUNHQyxTQURIOztBQUdaLE1BQU1DLFVBQXlCLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsRUFBbUQsR0FBbkQsQ0FBbEM7QUFDQSxNQUFNQyxTQUF3QixHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQWpDO0FBQ0EsTUFBTUMsWUFBMkIsR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULENBQXBDO0FBQ0EsTUFBTUMsWUFBb0IsR0FBRyxHQUE3Qjs7QUFHQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQsRUFBWTtBQUNwQ04sYUFBUyxDQUFDRCxNQUFNLENBQUNRLE1BQVAsQ0FBY0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQXZCLENBQUQsQ0FBVDtBQUNBQywwREFBTSxDQUFDSixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFBVixDQUFOO0FBQ0QsR0FIRDs7QUFLQSxNQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNMLENBQUQsRUFBWTtBQUNyQ04sYUFBUyxDQUFDRCxNQUFNLENBQUNRLE1BQVAsQ0FBY0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQXZCLENBQUQsQ0FBVDtBQUNBRywyREFBTyxDQUFDTixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFBVixDQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFNSSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakNiLGFBQVMsQ0FBQ2MscURBQUQsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UsOERBQUMsNkRBQUQ7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUE7QUFBQSw4QkFDRSw4REFBQyxtRUFBRDtBQUFVLGFBQUssRUFBRWY7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBR0dFLFVBQVUsQ0FBQ2MsR0FBWCxDQUFlLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLDRCQUNkLDhEQUFDLDZEQUFEO0FBQWdCLGNBQUksRUFBRUQsTUFBdEI7QUFBOEIsaUJBQU8sRUFBRVg7QUFBdkMsV0FBYVksQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZixDQUhILEVBT0dmLFNBQVMsQ0FBQ2EsR0FBVixDQUFjLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLDRCQUNiLDhEQUFDLDZEQUFEO0FBQWdCLGNBQUksRUFBRUQsTUFBdEI7QUFBOEIsaUJBQU8sRUFBRUw7QUFBdkMsV0FBYU0sQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZCxDQVBILEVBV0dkLFlBQVksQ0FBQ1ksR0FBYixDQUFpQixVQUFDQyxNQUFELEVBQVNDLENBQVQ7QUFBQSw0QkFDaEIsOERBQUMsNkRBQUQ7QUFBZ0IsY0FBSSxFQUFFRCxNQUF0QjtBQUE4QixpQkFBTyxFQUFFTDtBQUF2QyxXQUFhTSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBakIsQ0FYSCxlQWVFLDhEQUFDLDZEQUFEO0FBQVEsWUFBSSxFQUFFYixZQUFkO0FBQTRCLGVBQU8sRUFBRVM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztHQS9DUWhCLEc7O0tBQUFBLEc7QUErQ1I7QUFFRCwrREFBZUEsR0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG51bWJlciwgb3BlcmFuZCwgY2FsY3VsYXRlIH0gZnJvbSAnLi4vbWF0aC9lcXVhdGlvbic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHRhcmVhL1RleHRBcmVhJztcblxuZnVuY3Rpb24gQXBwKCl7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBjb25zdCBudW1CdXR0b25zOiBBcnJheTxzdHJpbmc+ID0gW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIi5cIl07XG4gIGNvbnN0IG9wQnV0dG9uczogQXJyYXk8c3RyaW5nPiA9IFtcIipcIiwgXCIvXCIsIFwiK1wiLCBcIi1cIl07XG4gIGNvbnN0IGFkbWluQnV0dG9uczogQXJyYXk8c3RyaW5nPiA9IFtcIkJhY2tcIiwgXCJDbGVhclwiXTtcbiAgY29uc3QgZXF1YWxzQnV0dG9uOiBzdHJpbmcgPSBcIj1cIjtcbiAgXG5cbiAgY29uc3QgaGFuZGxlTnVtYmVyQ2xpY2sgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0UmVzdWx0KHJlc3VsdC5jb25jYXQoZS50YXJnZXQubmFtZSkpO1xuICAgIG51bWJlcihlLnRhcmdldC5uYW1lKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPcGVyYW5kQ2xpY2sgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0UmVzdWx0KHJlc3VsdC5jb25jYXQoZS50YXJnZXQubmFtZSkpO1xuICAgIG9wZXJhbmQoZS50YXJnZXQubmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2FsY3VsYXRlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0UmVzdWx0KGNhbGN1bGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DYWxjdWxhdG9yPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICA8ZGl2PlxuICAgICAgPFRleHRBcmVhIHZhbHVlPXtyZXN1bHR9IC8+XG5cbiAgICAgIHtudW1CdXR0b25zLm1hcCgoYnV0dG9uLCBpKSA9PiAoXG4gICAgICAgIDxCdXR0b24ga2V5PXtpfSBuYW1lPXtidXR0b259IG9uQ2xpY2s9e2hhbmRsZU51bWJlckNsaWNrfSAvPlxuICAgICAgKSl9XG5cbiAgICAgIHtvcEJ1dHRvbnMubWFwKChidXR0b24sIGkpID0+IChcbiAgICAgICAgPEJ1dHRvbiBrZXk9e2l9IG5hbWU9e2J1dHRvbn0gb25DbGljaz17aGFuZGxlT3BlcmFuZENsaWNrfSAvPlxuICAgICAgKSl9XG5cbiAgICAgIHthZG1pbkJ1dHRvbnMubWFwKChidXR0b24sIGkpID0+IChcbiAgICAgICAgPEJ1dHRvbiBrZXk9e2l9IG5hbWU9e2J1dHRvbn0gb25DbGljaz17aGFuZGxlT3BlcmFuZENsaWNrfSAvPlxuICAgICAgKSl9XG5cbiAgICAgIDxCdXR0b24gbmFtZT17ZXF1YWxzQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDYWxjdWxhdGVDbGlja30gLz4gIFxuICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});