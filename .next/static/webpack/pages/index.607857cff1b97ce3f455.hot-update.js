/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/lib/priorityQueue.ts":
/*!**********************************!*\
  !*** ./src/lib/priorityQueue.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar items = []; // If the queue is not empty,\n// this will remove the highest-priority element\n// from the queue and returns it.\n\nfunction dequeue() {\n  if (!isEmpty()) return items.shift();\n}\n\nfunction enqueue(element, priority) {\n  var qElement = {\n    element: element,\n    priority: priority\n  };\n  var contain = false; // iterating through the entire item array to add element at the\n  // correct location of the Queue\n\n  for (var i = 0; i < items.length; i++) {\n    if (items[i].priority > qElement.priority) {\n      // Once the correct location is found it is\n      // enqueued\n      items.splice(i, 0, qElement);\n      contain = true;\n      break;\n    }\n  } // if the element have the highest priority\n  // it is added at the end of the queue\n\n\n  if (!contain) items.push(qElement);\n} // If the queue is not empty,\n// this will return the highest priority element\n// in the queue without removing it.\n\n\nfunction front() {\n  if (!isEmpty()) return items[0];\n}\n\nfunction isEmpty() {\n  return items.length === 0;\n}\n\nfunction print() {\n  var str = \"\";\n\n  for (var i = 0; i < items.length; i++) {\n    var item = items[i];\n    str += item.element + \" :\" + item.priority + \"\\n\";\n  }\n\n  return str;\n} // If the queue is not empty,\n// this will return the lowest priority element\n// in the queue without removing it.\n\n\nfunction rear() {\n  if (!isEmpty()) return items[items.length - 1];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  dequeue: dequeue,\n  enqueue: enqueue,\n  front: front,\n  isEmpty: isEmpty,\n  print: print,\n  rear: rear\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9wcmlvcml0eVF1ZXVlLnRzP2EyNzQiXSwibmFtZXMiOlsiaXRlbXMiLCJkZXF1ZXVlIiwiaXNFbXB0eSIsInNoaWZ0IiwiZW5xdWV1ZSIsImVsZW1lbnQiLCJwcmlvcml0eSIsInFFbGVtZW50IiwiY29udGFpbiIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJwdXNoIiwiZnJvbnQiLCJwcmludCIsInN0ciIsIml0ZW0iLCJyZWFyIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLEtBQWlELEdBQUcsRUFBeEQsQyxDQUVBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxPQUFULEdBQW9CO0FBQ2hCLE1BQUksQ0FBQ0MsT0FBTyxFQUFaLEVBQWdCLE9BQU9GLEtBQUssQ0FBQ0csS0FBTixFQUFQO0FBQ25COztBQUVELFNBQVNDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQWtDQyxRQUFsQyxFQUEwRDtBQUN0RCxNQUFJQyxRQUE2QyxHQUFHO0FBQUNGLFdBQU8sRUFBUEEsT0FBRDtBQUFVQyxZQUFRLEVBQVJBO0FBQVYsR0FBcEQ7QUFDQSxNQUFJRSxPQUFPLEdBQUcsS0FBZCxDQUZzRCxDQUl0RDtBQUNBOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1QsS0FBSyxDQUFDVSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxRQUFJVCxLQUFLLENBQUNTLENBQUQsQ0FBTCxDQUFTSCxRQUFULEdBQW9CQyxRQUFRLENBQUNELFFBQWpDLEVBQTJDO0FBQ3ZDO0FBQ0E7QUFDQU4sV0FBSyxDQUFDVyxNQUFOLENBQWFGLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJGLFFBQW5CO0FBQ0FDLGFBQU8sR0FBRyxJQUFWO0FBQ0E7QUFDSDtBQUNKLEdBZHFELENBZ0J0RDtBQUNBOzs7QUFDQSxNQUFJLENBQUNBLE9BQUwsRUFBY1IsS0FBSyxDQUFDWSxJQUFOLENBQVdMLFFBQVg7QUFDakIsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU00sS0FBVCxHQUFpQjtBQUNiLE1BQUksQ0FBQ1gsT0FBTyxFQUFaLEVBQWdCLE9BQU9GLEtBQUssQ0FBQyxDQUFELENBQVo7QUFDbkI7O0FBRUQsU0FBU0UsT0FBVCxHQUE0QjtBQUN4QixTQUFPRixLQUFLLENBQUNVLE1BQU4sS0FBaUIsQ0FBeEI7QUFDSDs7QUFFRCxTQUFTSSxLQUFULEdBQXlCO0FBQ3JCLE1BQUlDLEdBQUcsR0FBRyxFQUFWOztBQUVBLE9BQUssSUFBSU4sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1QsS0FBSyxDQUFDVSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxRQUFJTyxJQUFJLEdBQUdoQixLQUFLLENBQUNTLENBQUQsQ0FBaEI7QUFDQU0sT0FBRyxJQUFJQyxJQUFJLENBQUNYLE9BQUwsR0FBZSxJQUFmLEdBQXNCVyxJQUFJLENBQUNWLFFBQTNCLEdBQXNDLElBQTdDO0FBQ0g7O0FBRUQsU0FBT1MsR0FBUDtBQUNILEMsQ0FFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVNFLElBQVQsR0FBZ0I7QUFDWixNQUFJLENBQUNmLE9BQU8sRUFBWixFQUFnQixPQUFPRixLQUFLLENBQUNBLEtBQUssQ0FBQ1UsTUFBTixHQUFlLENBQWhCLENBQVo7QUFDbkI7O0FBRUQsK0RBQWU7QUFDWFQsU0FBTyxFQUFQQSxPQURXO0FBRVhHLFNBQU8sRUFBUEEsT0FGVztBQUdYUyxPQUFLLEVBQUxBLEtBSFc7QUFJWFgsU0FBTyxFQUFQQSxPQUpXO0FBS1hZLE9BQUssRUFBTEEsS0FMVztBQU1YRyxNQUFJLEVBQUpBO0FBTlcsQ0FBZiIsImZpbGUiOiIuL3NyYy9saWIvcHJpb3JpdHlRdWV1ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBpdGVtczogQXJyYXk8e2VsZW1lbnQ6IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcn0+ID0gW107XG5cbi8vIElmIHRoZSBxdWV1ZSBpcyBub3QgZW1wdHksXG4vLyB0aGlzIHdpbGwgcmVtb3ZlIHRoZSBoaWdoZXN0LXByaW9yaXR5IGVsZW1lbnRcbi8vIGZyb20gdGhlIHF1ZXVlIGFuZCByZXR1cm5zIGl0LlxuZnVuY3Rpb24gZGVxdWV1ZSAoKSB7XG4gICAgaWYgKCFpc0VtcHR5KCkpIHJldHVybiBpdGVtcy5zaGlmdCgpO1xufVxuXG5mdW5jdGlvbiBlbnF1ZXVlKGVsZW1lbnQ6IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBxRWxlbWVudDoge2VsZW1lbnQ6IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcn0gPSB7ZWxlbWVudCwgcHJpb3JpdHl9O1xuICAgIGxldCBjb250YWluID0gZmFsc2U7XG5cbiAgICAvLyBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgZW50aXJlIGl0ZW0gYXJyYXkgdG8gYWRkIGVsZW1lbnQgYXQgdGhlXG4gICAgLy8gY29ycmVjdCBsb2NhdGlvbiBvZiB0aGUgUXVldWVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVtc1tpXS5wcmlvcml0eSA+IHFFbGVtZW50LnByaW9yaXR5KSB7XG4gICAgICAgICAgICAvLyBPbmNlIHRoZSBjb3JyZWN0IGxvY2F0aW9uIGlzIGZvdW5kIGl0IGlzXG4gICAgICAgICAgICAvLyBlbnF1ZXVlZFxuICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGksIDAsIHFFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnRhaW4gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgZWxlbWVudCBoYXZlIHRoZSBoaWdoZXN0IHByaW9yaXR5XG4gICAgLy8gaXQgaXMgYWRkZWQgYXQgdGhlIGVuZCBvZiB0aGUgcXVldWVcbiAgICBpZiAoIWNvbnRhaW4pIGl0ZW1zLnB1c2gocUVsZW1lbnQpOyAgICBcbn1cblxuLy8gSWYgdGhlIHF1ZXVlIGlzIG5vdCBlbXB0eSxcbi8vIHRoaXMgd2lsbCByZXR1cm4gdGhlIGhpZ2hlc3QgcHJpb3JpdHkgZWxlbWVudFxuLy8gaW4gdGhlIHF1ZXVlIHdpdGhvdXQgcmVtb3ZpbmcgaXQuXG5mdW5jdGlvbiBmcm9udCgpIHtcbiAgICBpZiAoIWlzRW1wdHkoKSkgcmV0dXJuIGl0ZW1zWzBdO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtcy5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIHByaW50KCk6IHN0cmluZyB7XG4gICAgbGV0IHN0ciA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgIHN0ciArPSBpdGVtLmVsZW1lbnQgKyBcIiA6XCIgKyBpdGVtLnByaW9yaXR5ICsgXCJcXG5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG4vLyBJZiB0aGUgcXVldWUgaXMgbm90IGVtcHR5LFxuLy8gdGhpcyB3aWxsIHJldHVybiB0aGUgbG93ZXN0IHByaW9yaXR5IGVsZW1lbnRcbi8vIGluIHRoZSBxdWV1ZSB3aXRob3V0IHJlbW92aW5nIGl0LlxuZnVuY3Rpb24gcmVhcigpIHtcbiAgICBpZiAoIWlzRW1wdHkoKSkgcmV0dXJuIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVxdWV1ZSxcbiAgICBlbnF1ZXVlLFxuICAgIGZyb250LFxuICAgIGlzRW1wdHksXG4gICAgcHJpbnQsXG4gICAgcmVhclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/priorityQueue.ts\n");

/***/ })

});