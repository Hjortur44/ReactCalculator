/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/numberPad/equation.ts":
/*!**********************************************!*\
  !*** ./src/components/numberPad/equation.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/// PUBLIC ///\nfunction back() {\n  _eqs.pop();\n}\n\nfunction calculate() {\n  if (!Number(_eqs[_eqs.length - 1])) return \"Error\";\n  return \"D\";\n}\n\nfunction clear() {\n  _eqs = [];\n}\n\nfunction display() {\n  _flush();\n\n  return _eqs.join(\"\");\n}\n\nfunction number(n) {\n  _num = _num.concat(n);\n}\n\nfunction operand(op) {\n  _op = op;\n} /// PRIVATE ///\n\n\nvar _eqs = [];\nvar _num = \"\";\nvar _op = \"\";\n\nfunction _flush() {\n  if (_num.charAt(_num.length - 1) === \".\") {// _eqs.push(_num);\n    // _num = \"\";\n  }\n\n  if (_num.length > 0) {\n    _eqs.push(Number(_num));\n\n    _num = \"\";\n  }\n\n  if (_op.length !== 0) {\n    _eqs.push(_op);\n\n    _op = \"\";\n  }\n\n  console.log(eqs);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  back: back,\n  calculate: calculate,\n  clear: clear,\n  display: display,\n  number: number,\n  operand: operand\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbnVtYmVyUGFkL2VxdWF0aW9uLnRzP2YxYTMiXSwibmFtZXMiOlsiYmFjayIsIl9lcXMiLCJwb3AiLCJjYWxjdWxhdGUiLCJOdW1iZXIiLCJsZW5ndGgiLCJjbGVhciIsImRpc3BsYXkiLCJfZmx1c2giLCJqb2luIiwibnVtYmVyIiwibiIsIl9udW0iLCJjb25jYXQiLCJvcGVyYW5kIiwib3AiLCJfb3AiLCJjaGFyQXQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImVxcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLFNBQVNBLElBQVQsR0FBc0I7QUFDbEJDLE1BQUksQ0FBQ0MsR0FBTDtBQUNIOztBQUVELFNBQVNDLFNBQVQsR0FBNkI7QUFDekIsTUFBRyxDQUFDQyxNQUFNLENBQUNILElBQUksQ0FBQ0EsSUFBSSxDQUFDSSxNQUFMLEdBQWMsQ0FBZixDQUFMLENBQVYsRUFBbUMsT0FBTyxPQUFQO0FBQ25DLFNBQU8sR0FBUDtBQUNIOztBQUVELFNBQVNDLEtBQVQsR0FBdUI7QUFDbkJMLE1BQUksR0FBRyxFQUFQO0FBQ0g7O0FBRUQsU0FBU00sT0FBVCxHQUEyQjtBQUN2QkMsUUFBTTs7QUFDTixTQUFPUCxJQUFJLENBQUNRLElBQUwsQ0FBVSxFQUFWLENBQVA7QUFDSDs7QUFFRCxTQUFTQyxNQUFULENBQWdCQyxDQUFoQixFQUFnQztBQUM1QkMsTUFBSSxHQUFHQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUYsQ0FBWixDQUFQO0FBQ0g7O0FBRUQsU0FBU0csT0FBVCxDQUFpQkMsRUFBakIsRUFBbUM7QUFDL0JDLEtBQUcsR0FBR0QsRUFBTjtBQUNILEMsQ0FHRDs7O0FBRUEsSUFBSWQsSUFBNEIsR0FBRyxFQUFuQztBQUNBLElBQUlXLElBQVksR0FBRyxFQUFuQjtBQUNBLElBQUlJLEdBQVcsR0FBRyxFQUFsQjs7QUFFQSxTQUFTUixNQUFULEdBQWlCO0FBQ2IsTUFBR0ksSUFBSSxDQUFDSyxNQUFMLENBQVlMLElBQUksQ0FBQ1AsTUFBTCxHQUFjLENBQTFCLE1BQWlDLEdBQXBDLEVBQXdDLENBQ3JDO0FBQ0E7QUFDRjs7QUFDRCxNQUFHTyxJQUFJLENBQUNQLE1BQUwsR0FBYyxDQUFqQixFQUFvQjtBQUNoQkosUUFBSSxDQUFDaUIsSUFBTCxDQUFVZCxNQUFNLENBQUNRLElBQUQsQ0FBaEI7O0FBQ0FBLFFBQUksR0FBRyxFQUFQO0FBQ0g7O0FBRUQsTUFBR0ksR0FBRyxDQUFDWCxNQUFKLEtBQWUsQ0FBbEIsRUFBcUI7QUFDakJKLFFBQUksQ0FBQ2lCLElBQUwsQ0FBVUYsR0FBVjs7QUFDQUEsT0FBRyxHQUFHLEVBQU47QUFDSDs7QUFFREcsU0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDSDs7QUFFRCwrREFBZTtBQUNYckIsTUFBSSxFQUFKQSxJQURXO0FBRVhHLFdBQVMsRUFBVEEsU0FGVztBQUdYRyxPQUFLLEVBQUxBLEtBSFc7QUFJWEMsU0FBTyxFQUFQQSxPQUpXO0FBS1hHLFFBQU0sRUFBTkEsTUFMVztBQU1YSSxTQUFPLEVBQVBBO0FBTlcsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL251bWJlclBhZC9lcXVhdGlvbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyBQVUJMSUMgLy8vXG5cbmZ1bmN0aW9uIGJhY2soKTogdm9pZCB7XG4gICAgX2Vxcy5wb3AoKTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlKCk6IHN0cmluZyB7XG4gICAgaWYoIU51bWJlcihfZXFzW19lcXMubGVuZ3RoIC0gMV0pKSByZXR1cm4gXCJFcnJvclwiO1xuICAgIHJldHVybiBcIkRcIjtcbn1cblxuZnVuY3Rpb24gY2xlYXIoKTogdm9pZCB7XG4gICAgX2VxcyA9IFtdO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgX2ZsdXNoKCk7XG4gICAgcmV0dXJuIF9lcXMuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyKG46IHN0cmluZyk6IHZvaWR7XG4gICAgX251bSA9IF9udW0uY29uY2F0KG4pO1xufVxuXG5mdW5jdGlvbiBvcGVyYW5kKG9wOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBfb3AgPSBvcDtcbn1cblxuXG4vLy8gUFJJVkFURSAvLy9cblxubGV0IF9lcXM6IEFycmF5PG51bWJlciB8IHN0cmluZz4gPSBbXTtcbmxldCBfbnVtOiBzdHJpbmcgPSBcIlwiO1xubGV0IF9vcDogc3RyaW5nID0gXCJcIjtcblxuZnVuY3Rpb24gX2ZsdXNoKCl7XG4gICAgaWYoX251bS5jaGFyQXQoX251bS5sZW5ndGggLSAxKSA9PT0gXCIuXCIpe1xuICAgICAgIC8vIF9lcXMucHVzaChfbnVtKTtcbiAgICAgICAvLyBfbnVtID0gXCJcIjtcbiAgICB9XG4gICAgaWYoX251bS5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9lcXMucHVzaChOdW1iZXIoX251bSkpO1xuICAgICAgICBfbnVtID0gXCJcIjtcbiAgICB9XG5cbiAgICBpZihfb3AubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIF9lcXMucHVzaChfb3ApO1xuICAgICAgICBfb3AgPSBcIlwiO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGVxcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBiYWNrLFxuICAgIGNhbGN1bGF0ZSxcbiAgICBjbGVhcixcbiAgICBkaXNwbGF5LFxuICAgIG51bWJlcixcbiAgICBvcGVyYW5kXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/numberPad/equation.ts\n");

/***/ })

});