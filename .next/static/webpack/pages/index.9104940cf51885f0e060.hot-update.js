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
eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar items = [];\n\nfunction dequeue() {\n  // return the dequeued element\n  // and remove it.\n  // if the queue is empty\n  // returns Underflow.\n  if (isEmpty()) return \"Underflow\";\n  return items.shift();\n}\n\nfunction enqueue(element, priority) {\n  // creating object from queue element\n  var qElement = _queueElement(element, priority);\n\n  var contain = false; // iterating through the entire\n  // item array to add element at the\n  // correct location of the Queue\n\n  for (var i = 0; i < items.length; i++) {\n    if (items[i].priority > qElement.priority) {\n      // Once the correct location is found it is\n      // enqueued\n      items.splice(i, 0, qElement);\n      contain = true;\n      break;\n    }\n  } // if the element have the highest priority\n  // it is added at the end of the queue\n\n\n  if (!contain) {\n    items.push(qElement);\n  }\n}\n\nfunction front() {\n  // returns the highest priority element\n  // in the Priority queue without removing it.\n  if (isEmpty()) return \"No elements in Queue\";\n  return items[0];\n}\n\nfunction isEmpty() {\n  return items.length === 0;\n}\n\nfunction print() {\n  var str = \"\";\n\n  for (var i = 0; i < items.length; i++) {\n    var item = items[i];\n    str += item.element + \" :\" + item.priority + \"\\n\";\n  }\n\n  return str;\n}\n\nfunction rear() {\n  // returns the lowest priority\n  // element of the queue\n  if (isEmpty()) return \"No elements in Queue\";\n  return items[items.length - 1];\n} // User defined function\n// to store element and its priority\n\n\nfunction _queueElement(element, priority) {\n  return {\n    element: element,\n    priority: priority\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  dequeue: dequeue,\n  enqueue: enqueue,\n  front: front,\n  isEmpty: isEmpty,\n  print: print,\n  rear: rear\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9wcmlvcml0eVF1ZXVlLnRzP2EyNzQiXSwibmFtZXMiOlsiaXRlbXMiLCJkZXF1ZXVlIiwiaXNFbXB0eSIsInNoaWZ0IiwiZW5xdWV1ZSIsImVsZW1lbnQiLCJwcmlvcml0eSIsInFFbGVtZW50IiwiX3F1ZXVlRWxlbWVudCIsImNvbnRhaW4iLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwicHVzaCIsImZyb250IiwicHJpbnQiLCJzdHIiLCJpdGVtIiwicmVhciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxLQUFpRCxHQUFHLEVBQXhEOztBQUVBLFNBQVNDLE9BQVQsR0FBb0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJQyxPQUFPLEVBQVgsRUFDSSxPQUFPLFdBQVA7QUFDSixTQUFPRixLQUFLLENBQUNHLEtBQU4sRUFBUDtBQUNIOztBQUVELFNBQVNDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQWtDQyxRQUFsQyxFQUEwRDtBQUN0RDtBQUNBLE1BQUlDLFFBQVEsR0FBR0MsYUFBYSxDQUFDSCxPQUFELEVBQVVDLFFBQVYsQ0FBNUI7O0FBQ0EsTUFBSUcsT0FBTyxHQUFHLEtBQWQsQ0FIc0QsQ0FLdEQ7QUFDQTtBQUNBOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1YsS0FBSyxDQUFDVyxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxRQUFJVixLQUFLLENBQUNVLENBQUQsQ0FBTCxDQUFTSixRQUFULEdBQW9CQyxRQUFRLENBQUNELFFBQWpDLEVBQTJDO0FBQ3ZDO0FBQ0E7QUFDQU4sV0FBSyxDQUFDWSxNQUFOLENBQWFGLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJILFFBQW5CO0FBQ0FFLGFBQU8sR0FBRyxJQUFWO0FBQ0E7QUFDSDtBQUNKLEdBaEJxRCxDQWtCdEQ7QUFDQTs7O0FBQ0EsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDVlQsU0FBSyxDQUFDYSxJQUFOLENBQVdOLFFBQVg7QUFDSDtBQUNKOztBQUVELFNBQVNPLEtBQVQsR0FBaUI7QUFDYjtBQUNBO0FBQ0EsTUFBSVosT0FBTyxFQUFYLEVBQ0ksT0FBTyxzQkFBUDtBQUNKLFNBQU9GLEtBQUssQ0FBQyxDQUFELENBQVo7QUFDSDs7QUFFRCxTQUFTRSxPQUFULEdBQTRCO0FBQ3hCLFNBQU9GLEtBQUssQ0FBQ1csTUFBTixLQUFpQixDQUF4QjtBQUNIOztBQUVELFNBQVNJLEtBQVQsR0FBeUI7QUFDckIsTUFBSUMsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsT0FBSyxJQUFJTixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVixLQUFLLENBQUNXLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFFBQUlPLElBQUksR0FBR2pCLEtBQUssQ0FBQ1UsQ0FBRCxDQUFoQjtBQUNBTSxPQUFHLElBQUlDLElBQUksQ0FBQ1osT0FBTCxHQUFlLElBQWYsR0FBc0JZLElBQUksQ0FBQ1gsUUFBM0IsR0FBc0MsSUFBN0M7QUFDSDs7QUFFRCxTQUFPVSxHQUFQO0FBQ0g7O0FBRUQsU0FBU0UsSUFBVCxHQUFnQjtBQUNaO0FBQ0E7QUFDQSxNQUFJaEIsT0FBTyxFQUFYLEVBQ0ksT0FBTyxzQkFBUDtBQUNKLFNBQU9GLEtBQUssQ0FBQ0EsS0FBSyxDQUFDVyxNQUFOLEdBQWUsQ0FBaEIsQ0FBWjtBQUNILEMsQ0FFRDtBQUNBOzs7QUFDQSxTQUFTSCxhQUFULENBQXVCSCxPQUF2QixFQUF3Q0MsUUFBeEMsRUFBK0Y7QUFDM0YsU0FBTztBQUFDRCxXQUFPLEVBQVBBLE9BQUQ7QUFBVUMsWUFBUSxFQUFSQTtBQUFWLEdBQVA7QUFDSDs7QUFFRCwrREFBZTtBQUNYTCxTQUFPLEVBQVBBLE9BRFc7QUFFWEcsU0FBTyxFQUFQQSxPQUZXO0FBR1hVLE9BQUssRUFBTEEsS0FIVztBQUlYWixTQUFPLEVBQVBBLE9BSlc7QUFLWGEsT0FBSyxFQUFMQSxLQUxXO0FBTVhHLE1BQUksRUFBSkE7QUFOVyxDQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9wcmlvcml0eVF1ZXVlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGl0ZW1zOiBBcnJheTx7ZWxlbWVudDogc3RyaW5nLCBwcmlvcml0eTogbnVtYmVyfT4gPSBbXTtcblxuZnVuY3Rpb24gZGVxdWV1ZSAoKSB7XG4gICAgLy8gcmV0dXJuIHRoZSBkZXF1ZXVlZCBlbGVtZW50XG4gICAgLy8gYW5kIHJlbW92ZSBpdC5cbiAgICAvLyBpZiB0aGUgcXVldWUgaXMgZW1wdHlcbiAgICAvLyByZXR1cm5zIFVuZGVyZmxvdy5cbiAgICBpZiAoaXNFbXB0eSgpKVxuICAgICAgICByZXR1cm4gXCJVbmRlcmZsb3dcIjtcbiAgICByZXR1cm4gaXRlbXMuc2hpZnQoKTtcbn1cblxuZnVuY3Rpb24gZW5xdWV1ZShlbGVtZW50OiBzdHJpbmcsIHByaW9yaXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyBjcmVhdGluZyBvYmplY3QgZnJvbSBxdWV1ZSBlbGVtZW50XG4gICAgbGV0IHFFbGVtZW50ID0gX3F1ZXVlRWxlbWVudChlbGVtZW50LCBwcmlvcml0eSk7XG4gICAgbGV0IGNvbnRhaW4gPSBmYWxzZTtcblxuICAgIC8vIGl0ZXJhdGluZyB0aHJvdWdoIHRoZSBlbnRpcmVcbiAgICAvLyBpdGVtIGFycmF5IHRvIGFkZCBlbGVtZW50IGF0IHRoZVxuICAgIC8vIGNvcnJlY3QgbG9jYXRpb24gb2YgdGhlIFF1ZXVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXRlbXNbaV0ucHJpb3JpdHkgPiBxRWxlbWVudC5wcmlvcml0eSkge1xuICAgICAgICAgICAgLy8gT25jZSB0aGUgY29ycmVjdCBsb2NhdGlvbiBpcyBmb3VuZCBpdCBpc1xuICAgICAgICAgICAgLy8gZW5xdWV1ZWRcbiAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpLCAwLCBxRWxlbWVudCk7XG4gICAgICAgICAgICBjb250YWluID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGVsZW1lbnQgaGF2ZSB0aGUgaGlnaGVzdCBwcmlvcml0eVxuICAgIC8vIGl0IGlzIGFkZGVkIGF0IHRoZSBlbmQgb2YgdGhlIHF1ZXVlXG4gICAgaWYgKCFjb250YWluKSB7XG4gICAgICAgIGl0ZW1zLnB1c2gocUVsZW1lbnQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZnJvbnQoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgaGlnaGVzdCBwcmlvcml0eSBlbGVtZW50XG4gICAgLy8gaW4gdGhlIFByaW9yaXR5IHF1ZXVlIHdpdGhvdXQgcmVtb3ZpbmcgaXQuXG4gICAgaWYgKGlzRW1wdHkoKSlcbiAgICAgICAgcmV0dXJuIFwiTm8gZWxlbWVudHMgaW4gUXVldWVcIjtcbiAgICByZXR1cm4gaXRlbXNbMF07XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gcHJpbnQoKTogc3RyaW5nIHtcbiAgICBsZXQgc3RyID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgIHN0ciArPSBpdGVtLmVsZW1lbnQgKyBcIiA6XCIgKyBpdGVtLnByaW9yaXR5ICsgXCJcXG5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiByZWFyKCkge1xuICAgIC8vIHJldHVybnMgdGhlIGxvd2VzdCBwcmlvcml0eVxuICAgIC8vIGVsZW1lbnQgb2YgdGhlIHF1ZXVlXG4gICAgaWYgKGlzRW1wdHkoKSlcbiAgICAgICAgcmV0dXJuIFwiTm8gZWxlbWVudHMgaW4gUXVldWVcIjtcbiAgICByZXR1cm4gaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV07XG59XG5cbi8vIFVzZXIgZGVmaW5lZCBmdW5jdGlvblxuLy8gdG8gc3RvcmUgZWxlbWVudCBhbmQgaXRzIHByaW9yaXR5XG5mdW5jdGlvbiBfcXVldWVFbGVtZW50KGVsZW1lbnQ6IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcik6IHtlbGVtZW50OiBzdHJpbmcsIHByaW9yaXR5OiBudW1iZXJ9IHtcbiAgICByZXR1cm4ge2VsZW1lbnQsIHByaW9yaXR5fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlcXVldWUsXG4gICAgZW5xdWV1ZSxcbiAgICBmcm9udCxcbiAgICBpc0VtcHR5LFxuICAgIHByaW50LFxuICAgIHJlYXJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/priorityQueue.ts\n");

/***/ })

});