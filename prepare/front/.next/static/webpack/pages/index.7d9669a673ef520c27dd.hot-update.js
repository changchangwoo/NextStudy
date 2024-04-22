webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
  _jsxFileName = "D:\\NextStudy\\prepare\\front\\components\\FollowList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var FollowList = function FollowList(_ref) {
  var header = _ref.header,
    data = _ref.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
    style: {
      marginBottom: '20px'
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, header),
    loadMore: __jsx("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 27
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 82
      }
    }, "\uB354 \uBCF4\uAE30")),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item, {
        style: {
          marginTop: '20px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["StopOutlined"], {
          key: "stop",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 41
          }
        })],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
        description: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 29
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }));
};
_c = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);
var _c;
$RefreshReg$(_c, "FollowList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJfcmVmIiwiaGVhZGVyIiwiZGF0YSIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsIkxpc3QiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImdyaWQiLCJndXR0ZXIiLCJ4cyIsIm1kIiwic2l6ZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJsb2FkTW9yZSIsInRleHRBbGlnbiIsIm1hcmdpbiIsIkJ1dHRvbiIsImJvcmRlcmVkIiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiSXRlbSIsIm1hcmdpblRvcCIsIkNhcmQiLCJhY3Rpb25zIiwiU3RvcE91dGxpbmVkIiwia2V5IiwiTWV0YSIsImRlc2NyaXB0aW9uIiwibmlja25hbWUiLCJfYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDTztBQUN2QjtBQUNTO0FBR25DLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxJQUFBLEVBQXlCO0VBQUEsSUFBbkJDLE1BQU0sR0FBQUQsSUFBQSxDQUFOQyxNQUFNO0lBQUVDLElBQUksR0FBQUYsSUFBQSxDQUFKRSxJQUFJO0VBQzlCLE9BQ0lDLEtBQUEsQ0FBQUMsNENBQUEsQ0FBQUMsUUFBQSxRQUNJRixLQUFBLENBQUNHLHlDQUFJO0lBQ0RDLEtBQUssRUFBRTtNQUFFQyxZQUFZLEVBQUU7SUFBTyxDQUFFO0lBQ2hDQyxJQUFJLEVBQUU7TUFBRUMsTUFBTSxFQUFFLENBQUM7TUFBRUMsRUFBRSxFQUFFLENBQUM7TUFBRUMsRUFBRSxFQUFFO0lBQUUsQ0FBRTtJQUNsQ0MsSUFBSSxFQUFDLE9BQU87SUFDWlosTUFBTSxFQUFFRSxLQUFBO01BQUFXLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQU1uQixNQUFZLENBQUU7SUFDNUJvQixRQUFRLEVBQUVsQixLQUFBO01BQUtJLEtBQUssRUFBRTtRQUFFZSxTQUFTLEVBQUUsUUFBUTtRQUFFQyxNQUFNLEVBQUU7TUFBUyxDQUFFO01BQUFULE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQUNqQixLQUFBLENBQUNxQiwyQ0FBTTtNQUFBVixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSx3QkFBYSxDQUFNLENBQUU7SUFDN0ZLLFFBQVE7SUFDUkMsVUFBVSxFQUFFeEIsSUFBSztJQUNqQnlCLFVBQVUsRUFBRSxTQUFBQSxXQUFDQyxJQUFJO01BQUEsT0FDYnpCLEtBQUEsQ0FBQ0cseUNBQUksQ0FBQ3VCLElBQUk7UUFBQ3RCLEtBQUssRUFBRTtVQUFFdUIsU0FBUyxFQUFFO1FBQU8sQ0FBRTtRQUFBaEIsTUFBQSxFQUFBQyxLQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsR0FDcENqQixLQUFBLENBQUM0Qix5Q0FBSTtRQUFDQyxPQUFPLEVBQUUsQ0FBQzdCLEtBQUEsQ0FBQzhCLDhEQUFZO1VBQUNDLEdBQUcsRUFBQyxNQUFNO1VBQUFwQixNQUFBLEVBQUFDLEtBQUE7VUFBQUMsUUFBQTtZQUFBQyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUE7UUFBQSxDQUFFLENBQUMsQ0FBRTtRQUFBTixNQUFBLEVBQUFDLEtBQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUN6Q2pCLEtBQUEsQ0FBQzRCLHlDQUFJLENBQUNJLElBQUk7UUFBQ0MsV0FBVyxFQUFFUixJQUFJLENBQUNTLFFBQVM7UUFBQXZCLE1BQUEsRUFBQUMsS0FBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLENBQUUsQ0FDdEMsQ0FDQyxDQUFDO0lBQUEsQ0FDZDtJQUFBTixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNMLENBQ0gsQ0FBQztBQUVYLENBQUM7QUFBQ2tCLEVBQUEsR0FyQkl2QyxVQUFVO0FBdUJoQkEsVUFBVSxDQUFDd0MsU0FBUyxHQUFHO0VBQ25CdEMsTUFBTSxFQUFFdUMsaURBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVO0VBQ25DeEMsSUFBSSxFQUFFc0MsaURBQVMsQ0FBQ0csS0FBSyxDQUFDRDtBQUMxQixDQUFDO0FBRWMzQyx5RUFBVTtBQUFBLElBQUF1QyxFQUFBO0FBQUFNLFlBQUEsQ0FBQU4sRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZDk2NjlhNjczZWY1MjBjMjdkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBMaXN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcblxyXG5jb25zdCBGb2xsb3dMaXN0ID0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19XHJcbiAgICAgICAgICAgICAgICBncmlkPXt7IGd1dHRlcjogNCwgeHM6IDIsIG1kOiAzIH19XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgbG9hZE1vcmU9ezxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAnMTBweCAwJyB9fT48QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIC8+XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=