"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c22ce91b9358\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MmVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImMyMmNlOTFiOTM1OFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/lib/comments.ts":
/*!*****************************!*\
  !*** ./src/lib/comments.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsReducer: function() { return /* binding */ commentsReducer; },\n/* harmony export */   deleteComment: function() { return /* binding */ deleteComment; },\n/* harmony export */   setTimeForDelete: function() { return /* binding */ setTimeForDelete; },\n/* harmony export */   setTimeForUpdate: function() { return /* binding */ setTimeForUpdate; },\n/* harmony export */   updateComment: function() { return /* binding */ updateComment; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nlet headers = {\n    token: localStorage.getItem(\"userToken\")\n};\nlet initialState = {\n    allComments: [],\n    isUpdateComment: false,\n    isDeleteComment: false\n};\nlet deleteComment = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"postsSlice/deleteComment\", async (commentId)=>{\n    console.log(commentId);\n    let response = await fetch(\"https://linked-posts.routemisr.com/comments/\".concat(commentId), {\n        method: \"DELETE\",\n        headers: headers\n    });\n    let data = await response.json();\n    console.log(data);\n    return data;\n});\nlet updateComment = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"postsSlice/updateComment\", async (param)=>{\n    let { updatevalue, content } = param;\n    // console.log({ updatevalue, content });\n    axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"https://linked-posts.routemisr.com/comments/\".concat(updatevalue), {\n        content: content\n    }, {\n        headers: headers\n    }).then((response)=>{\n        // console.log(response);\n        return response;\n    }).catch((err)=>{\n        // console.log(err);\n        return err;\n    });\n});\nlet comments = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"comments\",\n    initialState,\n    initialState,\n    reducers: {\n        setTimeForUpdate: (state)=>{\n            state.isUpdateComment = false;\n        },\n        setTimeForDelete: (state)=>{\n            state.isDeleteComment = false;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(deleteComment.fulfilled, (state, action)=>{\n            // console.log(action.payload);\n            state.isDeleteComment = true;\n        });\n        builder.addCase(updateComment.fulfilled, (state, action)=>{\n            // console.log(action);\n            state.isUpdateComment = true;\n        });\n    }\n});\nlet commentsReducer = comments.reducer;\nlet { setTimeForUpdate, setTimeForDelete } = comments.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvY29tbWVudHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRTtBQUN2QztBQUUxQixJQUFJRyxVQUFlO0lBQUVDLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQztBQUFhO0FBQzlELElBQUlDLGVBQW9CO0lBQUVDLGFBQWEsRUFBRTtJQUFFQyxpQkFBaUI7SUFBT0MsaUJBQWlCO0FBQU07QUFFbkYsSUFBSUMsZ0JBQWdCWCxrRUFBZ0JBLENBQUMsNEJBQTRCLE9BQU9ZO0lBQzNFQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osSUFBSUcsV0FBVyxNQUFNQyxNQUFNLCtDQUF5RCxPQUFWSixZQUFhO1FBQ25GSyxRQUFRO1FBQ1JkLFNBQVNBO0lBQ2I7SUFDQSxJQUFJZSxPQUFPLE1BQU1ILFNBQVNJLElBQUk7SUFDOUJOLFFBQVFDLEdBQUcsQ0FBQ0k7SUFDWixPQUFPQTtBQUNYLEdBQUU7QUFFSyxJQUFJRSxnQkFBZ0JwQixrRUFBZ0JBLENBQUMsNEJBQTRCO1FBQU8sRUFBRXFCLFdBQVcsRUFBRUMsT0FBTyxFQUFFO0lBQ25HLHlDQUF5QztJQUV6Q3BCLDZDQUFLQSxDQUFDcUIsR0FBRyxDQUFDLCtDQUEyRCxPQUFaRixjQUFlO1FBQ3BFQyxTQUFTQTtJQUNiLEdBQUc7UUFDQ25CLFNBQVNBO0lBQ2IsR0FDS3FCLElBQUksQ0FBQyxDQUFDVDtRQUNILHlCQUF5QjtRQUN6QixPQUFPQTtJQUNYLEdBQ0NVLEtBQUssQ0FBQyxDQUFDQztRQUNKLG9CQUFvQjtRQUNwQixPQUFPQTtJQUNYO0FBQ1IsR0FBRTtBQUVGLElBQUlDLFdBQVcxQiw2REFBV0EsQ0FBQztJQUN2QjJCLE1BQU07SUFDTnJCO0lBQWNBO0lBQ2RzQixVQUFVO1FBQ05DLGtCQUFrQixDQUFDQztZQUNmQSxNQUFNdEIsZUFBZSxHQUFHO1FBQzVCO1FBQ0F1QixrQkFBa0IsQ0FBQ0Q7WUFDZkEsTUFBTXJCLGVBQWUsR0FBRztRQUM1QjtJQUNKO0lBQ0F1QixlQUFlLENBQUNDO1FBQ1pBLFFBQVFDLE9BQU8sQ0FBQ3hCLGNBQWN5QixTQUFTLEVBQUUsQ0FBQ0wsT0FBT007WUFDN0MsK0JBQStCO1lBQy9CTixNQUFNckIsZUFBZSxHQUFHO1FBQzVCO1FBQ0F3QixRQUFRQyxPQUFPLENBQUNmLGNBQWNnQixTQUFTLEVBQUUsQ0FBQ0wsT0FBT007WUFDN0MsdUJBQXVCO1lBQ3ZCTixNQUFNdEIsZUFBZSxHQUFHO1FBQzVCO0lBQ0o7QUFDSjtBQUNPLElBQUk2QixrQkFBa0JYLFNBQVNZLE9BQU8sQ0FBQztBQUN2QyxJQUFJLEVBQUVULGdCQUFnQixFQUFFRSxnQkFBZ0IsRUFBRSxHQUFHTCxTQUFTYSxPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9jb21tZW50cy50cz8wOTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxubGV0IGhlYWRlcnM6IGFueSA9IHsgdG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVG9rZW4nKSB9O1xubGV0IGluaXRpYWxTdGF0ZTogYW55ID0geyBhbGxDb21tZW50czogW10sIGlzVXBkYXRlQ29tbWVudDogZmFsc2UsIGlzRGVsZXRlQ29tbWVudDogZmFsc2UgfTtcblxuZXhwb3J0IGxldCBkZWxldGVDb21tZW50ID0gY3JlYXRlQXN5bmNUaHVuaygncG9zdHNTbGljZS9kZWxldGVDb21tZW50JywgYXN5bmMgKGNvbW1lbnRJZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRJZCk7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbGlua2VkLXBvc3RzLnJvdXRlbWlzci5jb20vY29tbWVudHMvJHtjb21tZW50SWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIH0pXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG59KVxuXG5leHBvcnQgbGV0IHVwZGF0ZUNvbW1lbnQgPSBjcmVhdGVBc3luY1RodW5rKCdwb3N0c1NsaWNlL3VwZGF0ZUNvbW1lbnQnLCBhc3luYyAoeyB1cGRhdGV2YWx1ZSwgY29udGVudCB9KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coeyB1cGRhdGV2YWx1ZSwgY29udGVudCB9KTtcblxuICAgIGF4aW9zLnB1dChgaHR0cHM6Ly9saW5rZWQtcG9zdHMucm91dGVtaXNyLmNvbS9jb21tZW50cy8ke3VwZGF0ZXZhbHVlfWAsIHtcbiAgICAgICAgY29udGVudDogY29udGVudFxuICAgIH0sIHtcbiAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIGVyclxuICAgICAgICB9KVxufSlcblxubGV0IGNvbW1lbnRzID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdjb21tZW50cycsXG4gICAgaW5pdGlhbFN0YXRlLCBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0VGltZUZvclVwZGF0ZTogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5pc1VwZGF0ZUNvbW1lbnQgPSBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzZXRUaW1lRm9yRGVsZXRlOiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmlzRGVsZXRlQ29tbWVudCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXIuYWRkQ2FzZShkZWxldGVDb21tZW50LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIHN0YXRlLmlzRGVsZXRlQ29tbWVudCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgYnVpbGRlci5hZGRDYXNlKHVwZGF0ZUNvbW1lbnQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICAgICAgICAgIHN0YXRlLmlzVXBkYXRlQ29tbWVudCA9IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG59KVxuZXhwb3J0IGxldCBjb21tZW50c1JlZHVjZXIgPSBjb21tZW50cy5yZWR1Y2VyO1xuZXhwb3J0IGxldCB7IHNldFRpbWVGb3JVcGRhdGUsIHNldFRpbWVGb3JEZWxldGUgfSA9IGNvbW1lbnRzLmFjdGlvbnM7Il0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsImF4aW9zIiwiaGVhZGVycyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImluaXRpYWxTdGF0ZSIsImFsbENvbW1lbnRzIiwiaXNVcGRhdGVDb21tZW50IiwiaXNEZWxldGVDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImNvbW1lbnRJZCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiZGF0YSIsImpzb24iLCJ1cGRhdGVDb21tZW50IiwidXBkYXRldmFsdWUiLCJjb250ZW50IiwicHV0IiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29tbWVudHMiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRUaW1lRm9yVXBkYXRlIiwic3RhdGUiLCJzZXRUaW1lRm9yRGVsZXRlIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwiY29tbWVudHNSZWR1Y2VyIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/comments.ts\n"));

/***/ })

});