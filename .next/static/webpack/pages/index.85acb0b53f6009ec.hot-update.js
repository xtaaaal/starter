"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/controls/Button.tsx":
/*!********************************************!*\
  !*** ./src/components/controls/Button.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: function() { return /* binding */ Button; },\n/* harmony export */   ColorScheme: function() { return /* binding */ ColorScheme; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar ColorScheme;\n(function(ColorScheme) {\n    ColorScheme[\"white\"] = \"white\";\n    ColorScheme[\"black\"] = \"black\";\n    ColorScheme[\"gray\"] = \"gray\";\n    ColorScheme[\"darkgray\"] = \"darkgray\";\n    ColorScheme[\"lightgray\"] = \"lightgray\";\n    ColorScheme[\"enabled\"] = \"enabled\";\n    ColorScheme[\"outline\"] = \"outline\";\n    ColorScheme[\"disabled\"] = \"disabled-bg\";\n    ColorScheme[\"lightblue\"] = \"lightblue\";\n    ColorScheme[\"navy\"] = \"navy\";\n    ColorScheme[\"pink\"] = \"pink\";\n    ColorScheme[\"blue\"] = \"blue\";\n})(ColorScheme || (ColorScheme = {}));\nconst Button = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = (param, ref)=>{\n    let { label , variant , disabled , color =ColorScheme.navy , ..._props } = param;\n    _props.type = _props.type || \"button\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        ..._props,\n        className: \"text-black bg-\".concat(color, \"-900 hover:bg-\").concat(color, \"-800 focus:ring-4 focus:outline-none focus:ring-\").concat(color, \"-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-\").concat(color, \"-500 mr-2 mb-2\"),\n        onClick: onClick,\n        disabled: disabled,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: label\n        }, void 0, false, {\n            fileName: \"/Users/xtaaaal/Documents/git/livi/temp/src/components/controls/Button.tsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/xtaaaal/Documents/git/livi/temp/src/components/controls/Button.tsx\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, undefined);\n    function onClick(e) {\n        var //TODO: check form state\n        _props_onClick;\n        const element = e.currentTarget;\n        (_props_onClick = _props.onClick) === null || _props_onClick === void 0 ? void 0 : _props_onClick.call(_props, e);\n    }\n});\n_c1 = Button;\nvar _c, _c1;\n$RefreshReg$(_c, \"Button$forwardRef\");\n$RefreshReg$(_c1, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9CdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUM7SUFFNUI7VUFBS0MsV0FBVztJQUFYQSxZQUNWQyxXQUFBQTtJQURVRCxZQUVWRSxXQUFBQTtJQUZVRixZQUdWRyxVQUFBQTtJQUhVSCxZQUlWSSxjQUFBQTtJQUpVSixZQUtWSyxlQUFBQTtJQUxVTCxZQU1WTSxhQUFBQTtJQU5VTixZQU9WTyxhQUFBQTtJQVBVUCxZQVFWUSxjQUFXO0lBUkRSLFlBU1ZTLGVBQUFBO0lBVFVULFlBVVZVLFVBQUFBO0lBVlVWLFlBV1ZXLFVBQUFBO0lBWFVYLFlBWVZZLFVBQUFBO0dBWlVaLGdCQUFBQTtBQXVCTCxNQUFNYSx1QkFBU2QsaURBQVVBLE1BQzlCLFFBQW9FZTtRQUFuRSxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRVIsU0FBUSxFQUFFUyxPQUFRakIsWUFBWVUsS0FBSSxFQUFFLEdBQUdRLFFBQVE7SUFDaEVBLE9BQU9DLE9BQU9ELE9BQU9DLFFBQVE7SUFDN0IscUJBQ0UsOERBQUNDO1FBQ0UsR0FBR0YsTUFBTTtRQUNWRyxXQUFXLGlCQUF1Q0osT0FBdEJBLE9BQU0sa0JBQXdFQSxPQUF4REEsT0FBTSxvREFBK0pBLE9BQTdHQSxPQUFNLHlHQUE2RyxPQUFOQSxPQUFNO1FBQzdOSyxTQUFTQTtRQUNUZCxVQUFVQTtrQkFFViw0RUFBQ2U7c0JBQU1SOzs7Ozs7Ozs7OztJQUlYLFNBQVNPLFFBQVFFLENBQWdCO1lBRS9CLHdCQUF3QjtRQUN4Qk47UUFGQSxNQUFNTyxVQUFVRCxFQUFFRTtRQUVsQlIsQ0FBQUEsaUJBQUFBLE9BQU9JLHFCQUFQSiw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBQUEsS0FBQUEsUUFBaUJNO0lBQ25CO0FBQ0YsR0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9CdXR0b24udHN4PzdhMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuZXhwb3J0IGVudW0gQ29sb3JTY2hlbWUge1xuICB3aGl0ZSA9ICd3aGl0ZScsXG4gIGJsYWNrID0gJ2JsYWNrJyxcbiAgZ3JheSA9ICdncmF5JyxcbiAgZGFya2dyYXkgPSAnZGFya2dyYXknLFxuICBsaWdodGdyYXkgPSAnbGlnaHRncmF5JyxcbiAgZW5hYmxlZCA9ICdlbmFibGVkJyxcbiAgb3V0bGluZSA9ICdvdXRsaW5lJyxcbiAgZGlzYWJsZWQgPSAnZGlzYWJsZWQtYmcnLFxuICBsaWdodGJsdWUgPSAnbGlnaHRibHVlJyxcbiAgbmF2eSA9ICduYXZ5JyxcbiAgcGluayA9ICdwaW5rJyxcbiAgYmx1ZSA9ICdibHVlJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aFJlZjwnYnV0dG9uJz4ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YXJpYW50PzogJ3ByaW1hcnknIHwgJ291dGxpbmVkJyB8ICdsaW5rJztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25DbGljaz86IChlOiBSZWFjdC5VSUV2ZW50KSA9PiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBmb3J3YXJkUmVmPEhUTUxCdXR0b25FbGVtZW50LCBCdXR0b25Qcm9wcz4oXG4gICh7IGxhYmVsLCB2YXJpYW50LCBkaXNhYmxlZCwgY29sb3IgPSBDb2xvclNjaGVtZS5uYXZ5LCAuLi5fcHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgX3Byb3BzLnR5cGUgPSBfcHJvcHMudHlwZSB8fCAnYnV0dG9uJztcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICB7Li4uX3Byb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJsYWNrIGJnLSR7Y29sb3J9LTkwMCBob3ZlcjpiZy0ke2NvbG9yfS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLSR7Y29sb3J9LTUwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGRhcms6Zm9jdXM6cmluZy0ke2NvbG9yfS01MDAgbXItMiBtYi0yYH1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2soZTogUmVhY3QuVUlFdmVudCkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIC8vVE9ETzogY2hlY2sgZm9ybSBzdGF0ZVxuICAgICAgX3Byb3BzLm9uQ2xpY2s/LihlKTtcbiAgICB9XG4gIH1cbik7XG4iXSwibmFtZXMiOlsiZm9yd2FyZFJlZiIsIkNvbG9yU2NoZW1lIiwid2hpdGUiLCJibGFjayIsImdyYXkiLCJkYXJrZ3JheSIsImxpZ2h0Z3JheSIsImVuYWJsZWQiLCJvdXRsaW5lIiwiZGlzYWJsZWQiLCJsaWdodGJsdWUiLCJuYXZ5IiwicGluayIsImJsdWUiLCJCdXR0b24iLCJyZWYiLCJsYWJlbCIsInZhcmlhbnQiLCJjb2xvciIsIl9wcm9wcyIsInR5cGUiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3BhbiIsImUiLCJlbGVtZW50IiwiY3VycmVudFRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/controls/Button.tsx\n"));

/***/ })

});