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
eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar items = [];\n\nfunction dequeue() {\n  // return the dequeued element\n  // and remove it.\n  // if the queue is empty\n  // returns Underflow\n  console.log(isEmpty(), items.length);\n  if (isEmpty()) return \"Underflow\";\n  return items.shift();\n}\n\nfunction enqueue(element, priority) {\n  // creating object from queue element\n  var qElement = _queueElement(element, priority);\n\n  var contain = false; // iterating through the entire\n  // item array to add element at the\n  // correct location of the Queue\n\n  for (var i = 0; i < items.length; i++) {\n    if (items[i].priority > qElement.priority) {\n      // Once the correct location is found it is\n      // enqueued\n      items.splice(i, 0, qElement);\n      contain = true;\n      break;\n    }\n  } // if the element have the highest priority\n  // it is added at the end of the queue\n\n\n  if (!contain) {\n    items.push(qElement);\n  }\n}\n\nfunction front() {\n  // returns the highest priority element\n  // in the Priority queue without removing it.\n  if (isEmpty()) return \"No elements in Queue\";\n  return items[0];\n}\n\nfunction isEmpty() {\n  return items.length === 0;\n}\n\nfunction print() {\n  var str = \"\";\n\n  for (var i = 0; i < items.length; i++) {\n    var item = items[i];\n    str += item.element + \" :\" + item.priority + \"\\n\";\n  }\n\n  return str;\n}\n\nfunction rear() {\n  // returns the lowest priority\n  // element of the queue\n  if (isEmpty()) return \"No elements in Queue\";\n  return items[items.length - 1];\n} // User defined function\n// to store element and its priority\n\n\nfunction _queueElement(element, priority) {\n  return {\n    element: element,\n    priority: priority\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  dequeue: dequeue,\n  enqueue: enqueue,\n  front: front,\n  isEmpty: isEmpty,\n  print: print,\n  rear: rear\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9wcmlvcml0eVF1ZXVlLnRzP2EyNzQiXSwibmFtZXMiOlsiaXRlbXMiLCJkZXF1ZXVlIiwiY29uc29sZSIsImxvZyIsImlzRW1wdHkiLCJsZW5ndGgiLCJzaGlmdCIsImVucXVldWUiLCJlbGVtZW50IiwicHJpb3JpdHkiLCJxRWxlbWVudCIsIl9xdWV1ZUVsZW1lbnQiLCJjb250YWluIiwiaSIsInNwbGljZSIsInB1c2giLCJmcm9udCIsInByaW50Iiwic3RyIiwiaXRlbSIsInJlYXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsS0FBaUQsR0FBRyxFQUF4RDs7QUFFQSxTQUFTQyxPQUFULEdBQW9CO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFPLEVBQW5CLEVBQXVCSixLQUFLLENBQUNLLE1BQTdCO0FBQ0EsTUFBSUQsT0FBTyxFQUFYLEVBQ0ksT0FBTyxXQUFQO0FBQ0osU0FBT0osS0FBSyxDQUFDTSxLQUFOLEVBQVA7QUFDSDs7QUFFRCxTQUFTQyxPQUFULENBQWlCQyxPQUFqQixFQUFrQ0MsUUFBbEMsRUFBMEQ7QUFDdEQ7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLGFBQWEsQ0FBQ0gsT0FBRCxFQUFVQyxRQUFWLENBQTVCOztBQUNBLE1BQUlHLE9BQU8sR0FBRyxLQUFkLENBSHNELENBS3REO0FBQ0E7QUFDQTs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdiLEtBQUssQ0FBQ0ssTUFBMUIsRUFBa0NRLENBQUMsRUFBbkMsRUFBdUM7QUFDbkMsUUFBSWIsS0FBSyxDQUFDYSxDQUFELENBQUwsQ0FBU0osUUFBVCxHQUFvQkMsUUFBUSxDQUFDRCxRQUFqQyxFQUEyQztBQUN2QztBQUNBO0FBQ0FULFdBQUssQ0FBQ2MsTUFBTixDQUFhRCxDQUFiLEVBQWdCLENBQWhCLEVBQW1CSCxRQUFuQjtBQUNBRSxhQUFPLEdBQUcsSUFBVjtBQUNBO0FBQ0g7QUFDSixHQWhCcUQsQ0FrQnREO0FBQ0E7OztBQUNBLE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1ZaLFNBQUssQ0FBQ2UsSUFBTixDQUFXTCxRQUFYO0FBQ0g7QUFDSjs7QUFFRCxTQUFTTSxLQUFULEdBQWlCO0FBQ2I7QUFDQTtBQUNBLE1BQUlaLE9BQU8sRUFBWCxFQUNJLE9BQU8sc0JBQVA7QUFDSixTQUFPSixLQUFLLENBQUMsQ0FBRCxDQUFaO0FBQ0g7O0FBRUQsU0FBU0ksT0FBVCxHQUE0QjtBQUN4QixTQUFPSixLQUFLLENBQUNLLE1BQU4sS0FBaUIsQ0FBeEI7QUFDSDs7QUFFRCxTQUFTWSxLQUFULEdBQXlCO0FBQ3JCLE1BQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLE9BQUssSUFBSUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2IsS0FBSyxDQUFDSyxNQUExQixFQUFrQ1EsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxRQUFJTSxJQUFJLEdBQUduQixLQUFLLENBQUNhLENBQUQsQ0FBaEI7QUFDQUssT0FBRyxJQUFJQyxJQUFJLENBQUNYLE9BQUwsR0FBZSxJQUFmLEdBQXNCVyxJQUFJLENBQUNWLFFBQTNCLEdBQXNDLElBQTdDO0FBQ0g7O0FBRUQsU0FBT1MsR0FBUDtBQUNIOztBQUVELFNBQVNFLElBQVQsR0FBZ0I7QUFDWjtBQUNBO0FBQ0EsTUFBSWhCLE9BQU8sRUFBWCxFQUNJLE9BQU8sc0JBQVA7QUFDSixTQUFPSixLQUFLLENBQUNBLEtBQUssQ0FBQ0ssTUFBTixHQUFlLENBQWhCLENBQVo7QUFDSCxDLENBRUQ7QUFDQTs7O0FBQ0EsU0FBU00sYUFBVCxDQUF1QkgsT0FBdkIsRUFBd0NDLFFBQXhDLEVBQStGO0FBQzNGLFNBQU87QUFBQ0QsV0FBTyxFQUFQQSxPQUFEO0FBQVVDLFlBQVEsRUFBUkE7QUFBVixHQUFQO0FBQ0g7O0FBRUQsK0RBQWU7QUFDWFIsU0FBTyxFQUFQQSxPQURXO0FBRVhNLFNBQU8sRUFBUEEsT0FGVztBQUdYUyxPQUFLLEVBQUxBLEtBSFc7QUFJWFosU0FBTyxFQUFQQSxPQUpXO0FBS1hhLE9BQUssRUFBTEEsS0FMVztBQU1YRyxNQUFJLEVBQUpBO0FBTlcsQ0FBZiIsImZpbGUiOiIuL3NyYy9saWIvcHJpb3JpdHlRdWV1ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBpdGVtczogQXJyYXk8e2VsZW1lbnQ6IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcn0+ID0gW107XG5cbmZ1bmN0aW9uIGRlcXVldWUgKCkge1xuICAgIC8vIHJldHVybiB0aGUgZGVxdWV1ZWQgZWxlbWVudFxuICAgIC8vIGFuZCByZW1vdmUgaXQuXG4gICAgLy8gaWYgdGhlIHF1ZXVlIGlzIGVtcHR5XG4gICAgLy8gcmV0dXJucyBVbmRlcmZsb3dcblxuXG4gICAgY29uc29sZS5sb2coaXNFbXB0eSgpLCBpdGVtcy5sZW5ndGgpO1xuICAgIGlmIChpc0VtcHR5KCkpXG4gICAgICAgIHJldHVybiBcIlVuZGVyZmxvd1wiO1xuICAgIHJldHVybiBpdGVtcy5zaGlmdCgpO1xufVxuXG5mdW5jdGlvbiBlbnF1ZXVlKGVsZW1lbnQ6IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIC8vIGNyZWF0aW5nIG9iamVjdCBmcm9tIHF1ZXVlIGVsZW1lbnRcbiAgICBsZXQgcUVsZW1lbnQgPSBfcXVldWVFbGVtZW50KGVsZW1lbnQsIHByaW9yaXR5KTtcbiAgICBsZXQgY29udGFpbiA9IGZhbHNlO1xuXG4gICAgLy8gaXRlcmF0aW5nIHRocm91Z2ggdGhlIGVudGlyZVxuICAgIC8vIGl0ZW0gYXJyYXkgdG8gYWRkIGVsZW1lbnQgYXQgdGhlXG4gICAgLy8gY29ycmVjdCBsb2NhdGlvbiBvZiB0aGUgUXVldWVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVtc1tpXS5wcmlvcml0eSA+IHFFbGVtZW50LnByaW9yaXR5KSB7XG4gICAgICAgICAgICAvLyBPbmNlIHRoZSBjb3JyZWN0IGxvY2F0aW9uIGlzIGZvdW5kIGl0IGlzXG4gICAgICAgICAgICAvLyBlbnF1ZXVlZFxuICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGksIDAsIHFFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnRhaW4gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgZWxlbWVudCBoYXZlIHRoZSBoaWdoZXN0IHByaW9yaXR5XG4gICAgLy8gaXQgaXMgYWRkZWQgYXQgdGhlIGVuZCBvZiB0aGUgcXVldWVcbiAgICBpZiAoIWNvbnRhaW4pIHtcbiAgICAgICAgaXRlbXMucHVzaChxRWxlbWVudCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmcm9udCgpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBoaWdoZXN0IHByaW9yaXR5IGVsZW1lbnRcbiAgICAvLyBpbiB0aGUgUHJpb3JpdHkgcXVldWUgd2l0aG91dCByZW1vdmluZyBpdC5cbiAgICBpZiAoaXNFbXB0eSgpKVxuICAgICAgICByZXR1cm4gXCJObyBlbGVtZW50cyBpbiBRdWV1ZVwiO1xuICAgIHJldHVybiBpdGVtc1swXTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbXMubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBwcmludCgpOiBzdHJpbmcge1xuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgc3RyICs9IGl0ZW0uZWxlbWVudCArIFwiIDpcIiArIGl0ZW0ucHJpb3JpdHkgKyBcIlxcblwiO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIHJlYXIoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgbG93ZXN0IHByaW9yaXR5XG4gICAgLy8gZWxlbWVudCBvZiB0aGUgcXVldWVcbiAgICBpZiAoaXNFbXB0eSgpKVxuICAgICAgICByZXR1cm4gXCJObyBlbGVtZW50cyBpbiBRdWV1ZVwiO1xuICAgIHJldHVybiBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXTtcbn1cblxuLy8gVXNlciBkZWZpbmVkIGZ1bmN0aW9uXG4vLyB0byBzdG9yZSBlbGVtZW50IGFuZCBpdHMgcHJpb3JpdHlcbmZ1bmN0aW9uIF9xdWV1ZUVsZW1lbnQoZWxlbWVudDogc3RyaW5nLCBwcmlvcml0eTogbnVtYmVyKToge2VsZW1lbnQ6IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcn0ge1xuICAgIHJldHVybiB7ZWxlbWVudCwgcHJpb3JpdHl9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVxdWV1ZSxcbiAgICBlbnF1ZXVlLFxuICAgIGZyb250LFxuICAgIGlzRW1wdHksXG4gICAgcHJpbnQsXG4gICAgcmVhclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/priorityQueue.ts\n");

/***/ })

});