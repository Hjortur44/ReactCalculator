/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/numberPad/NumberPad.tsx":
/*!************************************************!*\
  !*** ./src/components/numberPad/NumberPad.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NumberPad\": function() { return /* binding */ NumberPad; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/Button */ \"./src/components/button/Button.tsx\");\n/* harmony import */ var _equation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equation */ \"./src/components/numberPad/equation.ts\");\n/* harmony import */ var _lib_priorityQueue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/priorityQueue */ \"./src/lib/priorityQueue.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/hjortur/Desktop/calculator/src/components/numberPad/NumberPad.tsx\";\n\n\n\n\nfunction NumberPad(_ref) {\n  var _this = this;\n\n  var value = _ref.value;\n  var numButtonsA = [\"0\", \"1\", \"2\", \"3\", \"4\"];\n  var numButtonsB = [\"5\", \"6\", \"7\", \"8\", \"9\"];\n  var opButtons = [\"*\", \"/\", \"+\", \"-\", \".\", \"=\"];\n  var misButtons = [\"Back\", \"Clear\"];\n\n  var handleClick = function handleClick(val) {\n    return function () {\n      _equation__WEBPACK_IMPORTED_MODULE_3__.default.input(val);\n      value(_equation__WEBPACK_IMPORTED_MODULE_3__.default.print());\n      _lib_priorityQueue__WEBPACK_IMPORTED_MODULE_4__.default.enqueue(\"D\", 2);\n    };\n  };\n\n  var handleMisClick = function handleMisClick(val) {\n    return function () {\n      if (val === \"Back\") {\n        _equation__WEBPACK_IMPORTED_MODULE_3__.default.back();\n      } else if (val === \"Clear\") {\n        _equation__WEBPACK_IMPORTED_MODULE_3__.default.clear();\n      }\n\n      console.log(_lib_priorityQueue__WEBPACK_IMPORTED_MODULE_4__.default.front());\n      value(_equation__WEBPACK_IMPORTED_MODULE_3__.default.print());\n    };\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [numButtonsA.map(function (b, i) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        name: b,\n        onClick: handleClick(b)\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, _this);\n    }), numButtonsB.map(function (b, i) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        name: b,\n        onClick: handleClick(b)\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, _this);\n    }), opButtons.map(function (b, i) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        name: b,\n        onClick: handleClick(b)\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this);\n    }), misButtons.map(function (b, i) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        name: b,\n        onClick: handleMisClick(b)\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 9\n  }, this);\n}\n_c = NumberPad;\n\nvar _c;\n\n$RefreshReg$(_c, \"NumberPad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnVtYmVyUGFkL051bWJlclBhZC50c3g/MWI2NCJdLCJuYW1lcyI6WyJOdW1iZXJQYWQiLCJ2YWx1ZSIsIm51bUJ1dHRvbnNBIiwibnVtQnV0dG9uc0IiLCJvcEJ1dHRvbnMiLCJtaXNCdXR0b25zIiwiaGFuZGxlQ2xpY2siLCJ2YWwiLCJlcXVhdGlvbiIsInByaVF1ZXVlIiwiaGFuZGxlTWlzQ2xpY2siLCJjb25zb2xlIiwibG9nIiwibWFwIiwiYiIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPTyxTQUFTQSxTQUFULE9BQWtEO0FBQUE7O0FBQUEsTUFBN0JDLEtBQTZCLFFBQTdCQSxLQUE2QjtBQUNyRCxNQUFNQyxXQUEwQixHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBQW5DO0FBQ0EsTUFBTUMsV0FBMEIsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixDQUFuQztBQUNBLE1BQU1DLFNBQXdCLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FBakM7QUFDQSxNQUFNQyxVQUF5QixHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBbEM7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRDtBQUFBLFdBQWlCLFlBQU07QUFDdkNDLDBEQUFBLENBQWVELEdBQWY7QUFDQU4sV0FBSyxDQUFDTyxvREFBQSxFQUFELENBQUw7QUFFQUMscUVBQUEsQ0FBaUIsR0FBakIsRUFBc0IsQ0FBdEI7QUFDSCxLQUxtQjtBQUFBLEdBQXBCOztBQU9BLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0gsR0FBRDtBQUFBLFdBQWlCLFlBQU07QUFDMUMsVUFBR0EsR0FBRyxLQUFLLE1BQVgsRUFBbUI7QUFDZkMsMkRBQUE7QUFDSCxPQUZELE1BRU0sSUFBR0QsR0FBRyxLQUFLLE9BQVgsRUFBb0I7QUFDdEJDLDREQUFBO0FBQ0g7O0FBRURHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCw2REFBQSxFQUFaO0FBQ0FSLFdBQUssQ0FBQ08sb0RBQUEsRUFBRCxDQUFMO0FBQ0gsS0FUc0I7QUFBQSxHQUF2Qjs7QUFXQSxzQkFDSTtBQUFBLGVBQ0tOLFdBQVcsQ0FBQ1csR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSwwQkFDYiw4REFBQyxrREFBRDtBQUFnQixZQUFJLEVBQUVELENBQXRCO0FBQXlCLGVBQU8sRUFBRVIsV0FBVyxDQUFDUSxDQUFEO0FBQTdDLFNBQWFDLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBaEIsQ0FETCxFQUtLWixXQUFXLENBQUNVLEdBQVosQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsMEJBQ2IsOERBQUMsa0RBQUQ7QUFBZ0IsWUFBSSxFQUFFRCxDQUF0QjtBQUF5QixlQUFPLEVBQUVSLFdBQVcsQ0FBQ1EsQ0FBRDtBQUE3QyxTQUFhQyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWhCLENBTEwsRUFTS1gsU0FBUyxDQUFDUyxHQUFWLENBQWMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsMEJBQ1gsOERBQUMsa0RBQUQ7QUFBZ0IsWUFBSSxFQUFFRCxDQUF0QjtBQUF5QixlQUFPLEVBQUVSLFdBQVcsQ0FBQ1EsQ0FBRDtBQUE3QyxTQUFhQyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQWQsQ0FUTCxFQWFLVixVQUFVLENBQUNRLEdBQVgsQ0FBZSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSwwQkFDWiw4REFBQyxrREFBRDtBQUFnQixZQUFJLEVBQUVELENBQXRCO0FBQXlCLGVBQU8sRUFBRUosY0FBYyxDQUFDSSxDQUFEO0FBQWhELFNBQWFDLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBZixDQWJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJIO0tBN0NlZixTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbnVtYmVyUGFkL051bWJlclBhZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgZXF1YXRpb24gZnJvbSAnLi9lcXVhdGlvbic7XG5pbXBvcnQgcHJpUXVldWUgZnJvbSAnLi4vLi4vbGliL3ByaW9yaXR5UXVldWUnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHZhbHVlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gIH07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIE51bWJlclBhZCh7IHZhbHVlIH06IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IG51bUJ1dHRvbnNBOiBBcnJheTxzdHJpbmc+ID0gW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl07XG4gICAgY29uc3QgbnVtQnV0dG9uc0I6IEFycmF5PHN0cmluZz4gPSBbXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiXTtcbiAgICBjb25zdCBvcEJ1dHRvbnM6IEFycmF5PHN0cmluZz4gPSBbXCIqXCIsIFwiL1wiLCBcIitcIiwgXCItXCIsIFwiLlwiLCBcIj1cIl07XG4gICAgY29uc3QgbWlzQnV0dG9uczogQXJyYXk8c3RyaW5nPiA9IFtcIkJhY2tcIiwgXCJDbGVhclwiXTtcblxuICBcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKHZhbDogc3RyaW5nKSA9PiAoKSA9PiB7XG4gICAgICAgIGVxdWF0aW9uLmlucHV0KHZhbCk7XG4gICAgICAgIHZhbHVlKGVxdWF0aW9uLnByaW50KCkpO1xuXG4gICAgICAgIHByaVF1ZXVlLmVucXVldWUoXCJEXCIsIDIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1pc0NsaWNrID0gKHZhbDogc3RyaW5nKSA9PiAoKSA9PiB7XG4gICAgICAgIGlmKHZhbCA9PT0gXCJCYWNrXCIpIHtcbiAgICAgICAgICAgIGVxdWF0aW9uLmJhY2soKTtcbiAgICAgICAgfWVsc2UgaWYodmFsID09PSBcIkNsZWFyXCIpIHtcbiAgICAgICAgICAgIGVxdWF0aW9uLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhwcmlRdWV1ZS5mcm9udCgpKTtcbiAgICAgICAgdmFsdWUoZXF1YXRpb24ucHJpbnQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtudW1CdXR0b25zQS5tYXAoKGIsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17aX0gbmFtZT17Yn0gb25DbGljaz17aGFuZGxlQ2xpY2soYil9IC8+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAge251bUJ1dHRvbnNCLm1hcCgoYiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtpfSBuYW1lPXtifSBvbkNsaWNrPXtoYW5kbGVDbGljayhiKX0gLz5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICB7b3BCdXR0b25zLm1hcCgoYiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtpfSBuYW1lPXtifSBvbkNsaWNrPXtoYW5kbGVDbGljayhiKX0gLz5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICB7bWlzQnV0dG9ucy5tYXAoKGIsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17aX0gbmFtZT17Yn0gb25DbGljaz17aGFuZGxlTWlzQ2xpY2soYil9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/numberPad/NumberPad.tsx\n");

/***/ })

});