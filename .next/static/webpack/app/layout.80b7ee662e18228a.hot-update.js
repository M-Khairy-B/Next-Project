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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"13b25de9f339\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MmVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjEzYjI1ZGU5ZjMzOVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/lib/comments.ts":
/*!*****************************!*\
  !*** ./src/lib/comments.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsReducer: function() { return /* binding */ commentsReducer; },\n/* harmony export */   deleteComment: function() { return /* binding */ deleteComment; },\n/* harmony export */   setTimeForDelete: function() { return /* binding */ setTimeForDelete; },\n/* harmony export */   setTimeForUpdate: function() { return /* binding */ setTimeForUpdate; },\n/* harmony export */   updateComment: function() { return /* binding */ updateComment; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nlet headers = {\n    token: localStorage.getItem(\"userToken\")\n};\nlet initialState = {\n    allComments: [],\n    isUpdateComment: false,\n    isDeleteComment: false\n};\nlet deleteComment = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"postsSlice/deleteComment\", async (commentId)=>{\n    console.log(commentId);\n    let response = await fetch(\"https://linked-posts.routemisr.com/comments/\".concat(commentId), {\n        method: \"DELETE\",\n        headers: headers\n    });\n    let data = await response.json();\n    console.log(data);\n    return data;\n});\nlet updateComment = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"postsSlice/updateComment\", async (param)=>{\n    let { updatevalue, content } = param;\n    // console.log({ updatevalue, content });\n    axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"https://linked-posts.routemisr.com/comments/\".concat(updatevalue), {\n        content: content\n    }, {\n        headers: headers\n    }).then((response)=>{\n        // console.log(response);\n        return response;\n    }).catch((err)=>{\n        // console.log(err);\n        return err;\n    });\n});\nlet comments = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"comments\",\n    initialState,\n    reducers: {\n        setTimeForUpdate: (state)=>{\n            state.isUpdateComment = false;\n        },\n        setTimeForDelete: (state)=>{\n            state.isDeleteComment = false;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(deleteComment.fulfilled, (state, action)=>{\n            // console.log(action.payload);\n            state.isDeleteComment = true;\n        });\n        builder.addCase(updateComment.fulfilled, (state, action)=>{\n            // console.log(action);\n            state.isUpdateComment = true;\n        });\n    }\n});\nlet commentsReducer = comments.reducer;\nlet { setTimeForUpdate, setTimeForDelete } = comments.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvY29tbWVudHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRTtBQUN2QztBQUUxQixJQUFJRyxVQUFlO0lBQUVDLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQztBQUFhO0FBQzlELElBQUlDLGVBQW9CO0lBQUVDLGFBQWEsRUFBRTtJQUFFQyxpQkFBaUI7SUFBT0MsaUJBQWlCO0FBQU07QUFFbkYsSUFBSUMsZ0JBQWdCWCxrRUFBZ0JBLENBQUMsNEJBQTRCLE9BQU9ZO0lBQzNFQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osSUFBSUcsV0FBVyxNQUFNQyxNQUFNLCtDQUF5RCxPQUFWSixZQUFhO1FBQ25GSyxRQUFRO1FBQ1JkLFNBQVNBO0lBQ2I7SUFDQSxJQUFJZSxPQUFPLE1BQU1ILFNBQVNJLElBQUk7SUFDOUJOLFFBQVFDLEdBQUcsQ0FBQ0k7SUFDWixPQUFPQTtBQUNYLEdBQUU7QUFFSyxJQUFJRSxnQkFBZ0JwQixrRUFBZ0JBLENBQUMsNEJBQTRCO1FBQU8sRUFBRXFCLFdBQVcsRUFBRUMsT0FBTyxFQUFNO0lBQ3ZHLHlDQUF5QztJQUV6Q3BCLDZDQUFLQSxDQUFDcUIsR0FBRyxDQUFDLCtDQUEyRCxPQUFaRixjQUFlO1FBQ3BFQyxTQUFTQTtJQUNiLEdBQUc7UUFDQ25CLFNBQVNBO0lBQ2IsR0FDS3FCLElBQUksQ0FBQyxDQUFDVDtRQUNILHlCQUF5QjtRQUN6QixPQUFPQTtJQUNYLEdBQ0NVLEtBQUssQ0FBQyxDQUFDQztRQUNKLG9CQUFvQjtRQUNwQixPQUFPQTtJQUNYO0FBQ1IsR0FBRTtBQUVGLElBQUlDLFdBQVcxQiw2REFBV0EsQ0FBQztJQUN2QjJCLE1BQU07SUFDTnJCO0lBQ0FzQixVQUFVO1FBQ05DLGtCQUFrQixDQUFDQztZQUNmQSxNQUFNdEIsZUFBZSxHQUFHO1FBQzVCO1FBQ0F1QixrQkFBa0IsQ0FBQ0Q7WUFDZkEsTUFBTXJCLGVBQWUsR0FBRztRQUM1QjtJQUNKO0lBQ0F1QixlQUFlLENBQUNDO1FBQ1pBLFFBQVFDLE9BQU8sQ0FBQ3hCLGNBQWN5QixTQUFTLEVBQUUsQ0FBQ0wsT0FBT007WUFDN0MsK0JBQStCO1lBQy9CTixNQUFNckIsZUFBZSxHQUFHO1FBQzVCO1FBQ0F3QixRQUFRQyxPQUFPLENBQUNmLGNBQWNnQixTQUFTLEVBQUUsQ0FBQ0wsT0FBT007WUFDN0MsdUJBQXVCO1lBQ3ZCTixNQUFNdEIsZUFBZSxHQUFHO1FBQzVCO0lBQ0o7QUFDSjtBQUNPLElBQUk2QixrQkFBa0JYLFNBQVNZLE9BQU8sQ0FBQztBQUN2QyxJQUFJLEVBQUVULGdCQUFnQixFQUFFRSxnQkFBZ0IsRUFBRSxHQUFHTCxTQUFTYSxPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9jb21tZW50cy50cz8wOTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxubGV0IGhlYWRlcnM6IGFueSA9IHsgdG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVG9rZW4nKSB9O1xubGV0IGluaXRpYWxTdGF0ZTogYW55ID0geyBhbGxDb21tZW50czogW10sIGlzVXBkYXRlQ29tbWVudDogZmFsc2UsIGlzRGVsZXRlQ29tbWVudDogZmFsc2UgfTtcblxuZXhwb3J0IGxldCBkZWxldGVDb21tZW50ID0gY3JlYXRlQXN5bmNUaHVuaygncG9zdHNTbGljZS9kZWxldGVDb21tZW50JywgYXN5bmMgKGNvbW1lbnRJZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRJZCk7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbGlua2VkLXBvc3RzLnJvdXRlbWlzci5jb20vY29tbWVudHMvJHtjb21tZW50SWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIH0pXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG59KVxuXG5leHBvcnQgbGV0IHVwZGF0ZUNvbW1lbnQgPSBjcmVhdGVBc3luY1RodW5rKCdwb3N0c1NsaWNlL3VwZGF0ZUNvbW1lbnQnLCBhc3luYyAoeyB1cGRhdGV2YWx1ZSwgY29udGVudCB9OmFueSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHsgdXBkYXRldmFsdWUsIGNvbnRlbnQgfSk7XG5cbiAgICBheGlvcy5wdXQoYGh0dHBzOi8vbGlua2VkLXBvc3RzLnJvdXRlbWlzci5jb20vY29tbWVudHMvJHt1cGRhdGV2YWx1ZX1gLCB7XG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICB9LCB7XG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJcbiAgICAgICAgfSlcbn0pXG5cbmxldCBjb21tZW50cyA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnY29tbWVudHMnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRUaW1lRm9yVXBkYXRlOiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmlzVXBkYXRlQ29tbWVudCA9IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHNldFRpbWVGb3JEZWxldGU6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUuaXNEZWxldGVDb21tZW50ID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgICAgYnVpbGRlci5hZGRDYXNlKGRlbGV0ZUNvbW1lbnQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICAgICAgc3RhdGUuaXNEZWxldGVDb21tZW50ID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBidWlsZGVyLmFkZENhc2UodXBkYXRlQ29tbWVudC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24pO1xuICAgICAgICAgICAgc3RhdGUuaXNVcGRhdGVDb21tZW50ID0gdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cbn0pXG5leHBvcnQgbGV0IGNvbW1lbnRzUmVkdWNlciA9IGNvbW1lbnRzLnJlZHVjZXI7XG5leHBvcnQgbGV0IHsgc2V0VGltZUZvclVwZGF0ZSwgc2V0VGltZUZvckRlbGV0ZSB9ID0gY29tbWVudHMuYWN0aW9uczsiXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwiYXhpb3MiLCJoZWFkZXJzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5pdGlhbFN0YXRlIiwiYWxsQ29tbWVudHMiLCJpc1VwZGF0ZUNvbW1lbnQiLCJpc0RlbGV0ZUNvbW1lbnQiLCJkZWxldGVDb21tZW50IiwiY29tbWVudElkIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhIiwianNvbiIsInVwZGF0ZUNvbW1lbnQiLCJ1cGRhdGV2YWx1ZSIsImNvbnRlbnQiLCJwdXQiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJjb21tZW50cyIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFRpbWVGb3JVcGRhdGUiLCJzdGF0ZSIsInNldFRpbWVGb3JEZWxldGUiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJjb21tZW50c1JlZHVjZXIiLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/comments.ts\n"));

/***/ })

});