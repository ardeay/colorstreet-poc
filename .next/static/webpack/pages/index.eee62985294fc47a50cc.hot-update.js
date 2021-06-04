self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DeveloperHint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DeveloperHint */ "./components/DeveloperHint/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/kilroy/code/zesty-io/colorstreet-poc/pages/index.js";



var __N_SSP = true;
function Home(props) {
  var _this = this;

  console.log(props.data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: "jsx-435419239",
        children: "Zesty.io NextJS Demo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "jsx-435419239" + " " + 'container',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "jsx-435419239",
        children: "Zesty.io with Nextjs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "jsx-435419239",
        children: "Fetching data"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-435419239" + " " + 'container-grid',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-435419239" + " " + 'card-container',
          children: props.data.map(function (data, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "jsx-435419239" + " " + 'card',
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                href: data.primary_image,
                className: "jsx-435419239",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "jsx-435419239" + " " + 'card-content',
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                    className: "jsx-435419239",
                    children: data.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    height: "auto",
                    width: "200px",
                    "max-width": "auto",
                    src: data.primary_image,
                    className: "jsx-435419239"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    className: "jsx-435419239",
                    children: [" ", data.description]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, _this)
            }, data.product_id, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DeveloperHint__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "jsx-435419239",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          className: "jsx-435419239",
          children: "Zesty.io Hint:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          title: "getstaticprops-details",
          target: "_blank",
          href: "https://nextjs.org/learn/basics/data-fetching/getstaticprops-details",
          className: "jsx-435419239",
          children: "getStaticPros"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), ' ', "Next.js will run this function at build time. Whatever your return as props will be passed into the exported page.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          title: "getServerSideProps",
          target: "_blank",
          href: "https://nextjs.org/learn/basics/data-fetching/request-time",
          className: "jsx-435419239",
          children: "getServerSideProps"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), ' ', "This will be called at runtime during every request. So unlike getStaticProps, you will have the runtime data like query params, HTTP headers, and the req and res objects from API handlers.", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          title: "getStaticPaths",
          target: "_blank",
          href: "https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation",
          className: "jsx-435419239",
          children: "getStaticPaths"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), ' ', "This will be called at runtime during every request. So unlike getStaticProps, you will have the runtime data like query params, HTTP headers, and the req and res objects from API handlers. Here we are fetching with nextjs `getServerSideProps` to Zflix", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          target: "_blank",
          href: "http://b4m94v41-dev.preview.zesty.io/-/gql/products.json",
          className: "jsx-435419239",
          children: "API from Zesty.io"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, this), ' ', "API and mapping through to display image, title, and description", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          target: "_blank",
          href: "https://github.com/zesty-io/demos/blob/main/nextjs/pages/index.js",
          className: "jsx-435419239",
          children: "View Next.js source file here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "435419239",
      children: ".container.jsx-435419239{width:100%;background-color:#f2f4fb;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:32px;height:100vh;}.container-grid.jsx-435419239{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.card-container.jsx-435419239{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,auto));gap:32px;}.card.jsx-435419239{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);background-color:#efefef;padding:16px;border-radius:15px;box-shadow:0px 10px 15px -5px rgb(0 0 0 / 65%);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.card.jsx-435419239 a.jsx-435419239{-webkit-text-decoration:none;text-decoration:none;text-align:center;}.card.jsx-435419239 a.jsx-435419239 h1.jsx-435419239{-webkit-text-decoration:none !important;text-decoration:none !important;color:rgb(33,33,33);text-transform:uppercase;background:lightgray;width:100%;margin:10px 0;}.card.jsx-435419239 a.jsx-435419239 p.jsx-435419239{color:rgb(92,92,92);}.card.jsx-435419239:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.card-content.jsx-435419239{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpbHJveS9jb2RlL3plc3R5LWlvL2NvbG9yc3RyZWV0LXBvYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RmtCLEFBR3NCLEFBUU8sQUFHTCxBQU02QixBQVFyQixBQUlXLEFBUVYsQUFJRCxBQUdSLFdBM0NZLEVBV29DLE9BMEIvRCxnQkFwQ2UsR0FnQlksV0FTNUIsY0FSZ0IsSUFRZixHQWxCQSxDQUlXLEFBaUJhLEVBZUgsQ0FIckIsRUF0QnFCLElBTnJCLFdBaUIyQixJQVZzQixjQWxCekIsT0E2QkQscUJBQ1YsS0FYcUIsTUFZbEIsY0FDaEIsSUFXd0IscUJBMUNULGFBQ0EsYUFDZixDQWlCQSw4QkF3QkEiLCJmaWxlIjoiL2hvbWUva2lscm95L2NvZGUvemVzdHktaW8vY29sb3JzdHJlZXQtcG9jL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEZXZlbG9wZXJIaW50IGZyb20gJy4uL2NvbXBvbmVudHMvRGV2ZWxvcGVySGludCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5aZXN0eS5pbyBOZXh0SlMgRGVtbzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGgxPlplc3R5LmlvIHdpdGggTmV4dGpzPC9oMT5cbiAgICAgICAgPGgzPkZldGNoaW5nIGRhdGE8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWdyaWQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRhaW5lcic+XG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnByb2R1Y3RfaWR9IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e2RhdGEucHJpbWFyeV9pbWFnZX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgPGgxPntkYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nYXV0bydcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMjAwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoPSdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YS5wcmltYXJ5X2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cD4ge2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxEZXZlbG9wZXJIaW50PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Ryb25nPlplc3R5LmlvIEhpbnQ6PC9zdHJvbmc+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRpdGxlPSdnZXRzdGF0aWNwcm9wcy1kZXRhaWxzJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL25leHRqcy5vcmcvbGVhcm4vYmFzaWNzL2RhdGEtZmV0Y2hpbmcvZ2V0c3RhdGljcHJvcHMtZGV0YWlscydcbiAgICAgICAgICA+XG4gICAgICAgICAgICBnZXRTdGF0aWNQcm9zXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgTmV4dC5qcyB3aWxsIHJ1biB0aGlzIGZ1bmN0aW9uIGF0IGJ1aWxkIHRpbWUuIFdoYXRldmVyIHlvdXIgcmV0dXJuIGFzXG4gICAgICAgICAgcHJvcHMgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgZXhwb3J0ZWQgcGFnZS5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGl0bGU9J2dldFNlcnZlclNpZGVQcm9wcydcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuL2Jhc2ljcy9kYXRhLWZldGNoaW5nL3JlcXVlc3QtdGltZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBUaGlzIHdpbGwgYmUgY2FsbGVkIGF0IHJ1bnRpbWUgZHVyaW5nIGV2ZXJ5IHJlcXVlc3QuIFNvIHVubGlrZVxuICAgICAgICAgIGdldFN0YXRpY1Byb3BzLCB5b3Ugd2lsbCBoYXZlIHRoZSBydW50aW1lIGRhdGEgbGlrZSBxdWVyeSBwYXJhbXMsIEhUVFBcbiAgICAgICAgICBoZWFkZXJzLCBhbmQgdGhlIHJlcSBhbmQgcmVzIG9iamVjdHMgZnJvbSBBUEkgaGFuZGxlcnMueycgJ31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGl0bGU9J2dldFN0YXRpY1BhdGhzJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9kYXRhLWZldGNoaW5nI2dldHN0YXRpY3BhdGhzLXN0YXRpYy1nZW5lcmF0aW9uJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIGdldFN0YXRpY1BhdGhzXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgVGhpcyB3aWxsIGJlIGNhbGxlZCBhdCBydW50aW1lIGR1cmluZyBldmVyeSByZXF1ZXN0LiBTbyB1bmxpa2VcbiAgICAgICAgICBnZXRTdGF0aWNQcm9wcywgeW91IHdpbGwgaGF2ZSB0aGUgcnVudGltZSBkYXRhIGxpa2UgcXVlcnkgcGFyYW1zLCBIVFRQXG4gICAgICAgICAgaGVhZGVycywgYW5kIHRoZSByZXEgYW5kIHJlcyBvYmplY3RzIGZyb20gQVBJIGhhbmRsZXJzLiBIZXJlIHdlIGFyZVxuICAgICAgICAgIGZldGNoaW5nIHdpdGggbmV4dGpzIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIHRvIFpmbGl4eycgJ31cblxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHA6Ly9iNG05NHY0MS1kZXYucHJldmlldy56ZXN0eS5pby8tL2dxbC9wcm9kdWN0cy5qc29uJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBUEkgZnJvbSBaZXN0eS5pb1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgQVBJIGFuZCBtYXBwaW5nIHRocm91Z2ggdG8gZGlzcGxheSBpbWFnZSwgdGl0bGUsIGFuZCBkZXNjcmlwdGlvbnsnICd9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3plc3R5LWlvL2RlbW9zL2Jsb2IvbWFpbi9uZXh0anMvcGFnZXMvaW5kZXguanMnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBOZXh0LmpzIHNvdXJjZSBmaWxlIGhlcmVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRGV2ZWxvcGVySGludD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNGZiO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lci1ncmlkIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCBhdXRvKSk7XG4gICAgICAgICAgZ2FwOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IC01cHggcmdiKDAgMCAwIC8gNjUlKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgYSBoMSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHJnYigzMywgMzMsIDMzKTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBhIHAge1xuICAgICAgICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgKTtcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgaWYgKCFkYXRhLm9rKSB7XG4gICAgY29uc29sZS5lcnJvcignZGF0YSBub3QgZm91bmQnKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXX0= */\n/*@ sourceURL=/home/kilroy/code/zesty-io/colorstreet-poc/pages/index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtYXAiLCJpbmRleCIsInByaW1hcnlfaW1hZ2UiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0X2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxJQUFsQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBQSx5Q0FBZ0IsV0FBaEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBLDJDQUFlLGdCQUFmO0FBQUEsK0JBQ0U7QUFBQSw2Q0FBZSxnQkFBZjtBQUFBLG9CQUNHSCxLQUFLLENBQUNHLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUNELElBQUQsRUFBT0UsS0FBUDtBQUFBLGdDQUNkO0FBQUEsaURBQXFDLE1BQXJDO0FBQUEscUNBQ0U7QUFBRyxzQkFBTSxFQUFDLFFBQVY7QUFBbUIsb0JBQUksRUFBRUYsSUFBSSxDQUFDRyxhQUE5QjtBQUFBO0FBQUEsdUNBQ0U7QUFBQSxxREFBZSxjQUFmO0FBQUEsMENBQ0U7QUFBQTtBQUFBLDhCQUFLSCxJQUFJLENBQUNJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQ0UsMEJBQU0sRUFBQyxNQURUO0FBRUUseUJBQUssRUFBQyxPQUZSO0FBR0UsaUNBQVUsTUFIWjtBQUlFLHVCQUFHLEVBQUVKLElBQUksQ0FBQ0csYUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixlQVFFO0FBQUE7QUFBQSxvQ0FBS0gsSUFBSSxDQUFDSyxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBVUwsSUFBSSxDQUFDTSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGM7QUFBQSxXQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQTZCRSw4REFBQyw4REFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFDRSxlQUFLLEVBQUMsd0JBRFI7QUFFRSxnQkFBTSxFQUFDLFFBRlQ7QUFHRSxjQUFJLEVBQUMsc0VBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQVFPLEdBUlAscUlBV0U7QUFDRSxlQUFLLEVBQUMsb0JBRFI7QUFFRSxnQkFBTSxFQUFDLFFBRlQ7QUFHRSxjQUFJLEVBQUMsNERBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixFQWlCTyxHQWpCUCxtTUFvQjBELEdBcEIxRCxlQXFCRTtBQUNFLGVBQUssRUFBQyxnQkFEUjtBQUVFLGdCQUFNLEVBQUMsUUFGVDtBQUdFLGNBQUksRUFBQyx1RkFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCRixFQTJCTyxHQTNCUCxrUUErQnFELEdBL0JyRCxlQWlDSTtBQUNFLGdCQUFNLEVBQUMsUUFEVDtBQUVFLGNBQUksRUFBQywwREFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpDSixFQXVDRyxHQXZDSCxzRUF3Q21FLEdBeENuRSxlQXlDRTtBQUNFLGdCQUFNLEVBQUMsUUFEVDtBQUVFLGNBQUksRUFBQyxtRUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFzSUQ7S0F6SXVCVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVlZTYyOTg1Mjk0ZmM0N2E1MGNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IERldmVsb3BlckhpbnQgZnJvbSAnLi4vY29tcG9uZW50cy9EZXZlbG9wZXJIaW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlplc3R5LmlvIE5leHRKUyBEZW1vPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8aDE+WmVzdHkuaW8gd2l0aCBOZXh0anM8L2gxPlxuICAgICAgICA8aDM+RmV0Y2hpbmcgZGF0YTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZ3JpZCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtY29udGFpbmVyJz5cbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEucHJvZHVjdF9pZH0gY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj17ZGF0YS5wcmltYXJ5X2ltYWdlfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgICA8aDE+e2RhdGEubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScyMDBweCdcbiAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg9J2F1dG8nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLnByaW1hcnlfaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPiB7ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPERldmVsb3BlckhpbnQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzdHJvbmc+WmVzdHkuaW8gSGludDo8L3N0cm9uZz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGl0bGU9J2dldHN0YXRpY3Byb3BzLWRldGFpbHMnXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vbmV4dGpzLm9yZy9sZWFybi9iYXNpY3MvZGF0YS1mZXRjaGluZy9nZXRzdGF0aWNwcm9wcy1kZXRhaWxzJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIGdldFN0YXRpY1Byb3NcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBOZXh0LmpzIHdpbGwgcnVuIHRoaXMgZnVuY3Rpb24gYXQgYnVpbGQgdGltZS4gV2hhdGV2ZXIgeW91ciByZXR1cm4gYXNcbiAgICAgICAgICBwcm9wcyB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBleHBvcnRlZCBwYWdlLlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0aXRsZT0nZ2V0U2VydmVyU2lkZVByb3BzJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL25leHRqcy5vcmcvbGVhcm4vYmFzaWNzL2RhdGEtZmV0Y2hpbmcvcmVxdWVzdC10aW1lJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgIFRoaXMgd2lsbCBiZSBjYWxsZWQgYXQgcnVudGltZSBkdXJpbmcgZXZlcnkgcmVxdWVzdC4gU28gdW5saWtlXG4gICAgICAgICAgZ2V0U3RhdGljUHJvcHMsIHlvdSB3aWxsIGhhdmUgdGhlIHJ1bnRpbWUgZGF0YSBsaWtlIHF1ZXJ5IHBhcmFtcywgSFRUUFxuICAgICAgICAgIGhlYWRlcnMsIGFuZCB0aGUgcmVxIGFuZCByZXMgb2JqZWN0cyBmcm9tIEFQSSBoYW5kbGVycy57JyAnfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0aXRsZT0nZ2V0U3RhdGljUGF0aHMnXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2Jhc2ljLWZlYXR1cmVzL2RhdGEtZmV0Y2hpbmcjZ2V0c3RhdGljcGF0aHMtc3RhdGljLWdlbmVyYXRpb24nXG4gICAgICAgICAgPlxuICAgICAgICAgICAgZ2V0U3RhdGljUGF0aHNcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBUaGlzIHdpbGwgYmUgY2FsbGVkIGF0IHJ1bnRpbWUgZHVyaW5nIGV2ZXJ5IHJlcXVlc3QuIFNvIHVubGlrZVxuICAgICAgICAgIGdldFN0YXRpY1Byb3BzLCB5b3Ugd2lsbCBoYXZlIHRoZSBydW50aW1lIGRhdGEgbGlrZSBxdWVyeSBwYXJhbXMsIEhUVFBcbiAgICAgICAgICBoZWFkZXJzLCBhbmQgdGhlIHJlcSBhbmQgcmVzIG9iamVjdHMgZnJvbSBBUEkgaGFuZGxlcnMuIEhlcmUgd2UgYXJlXG4gICAgICAgICAgZmV0Y2hpbmcgd2l0aCBuZXh0anMgYGdldFNlcnZlclNpZGVQcm9wc2AgdG8gWmZsaXh7JyAnfVxuXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgaHJlZj0naHR0cDovL2I0bTk0djQxLWRldi5wcmV2aWV3Lnplc3R5LmlvLy0vZ3FsL3Byb2R1Y3RzLmpzb24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFQSSBmcm9tIFplc3R5LmlvXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBBUEkgYW5kIG1hcHBpbmcgdGhyb3VnaCB0byBkaXNwbGF5IGltYWdlLCB0aXRsZSwgYW5kIGRlc2NyaXB0aW9ueycgJ31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vemVzdHktaW8vZGVtb3MvYmxvYi9tYWluL25leHRqcy9wYWdlcy9pbmRleC5qcydcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3IE5leHQuanMgc291cmNlIGZpbGUgaGVyZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9EZXZlbG9wZXJIaW50PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY0ZmI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyLWdyaWQge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsIGF1dG8pKTtcbiAgICAgICAgICBnYXA6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggLTVweCByZ2IoMCAwIDAgLyA2NSUpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBhIGgxIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogcmdiKDMzLCAzMywgMzMpO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIGEgcCB7XG4gICAgICAgICAgY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHBzOi8vY29sb3JzdHJlZXRkZW1vLnplc3R5LmRldi8tL2dxbC9wcm9kdWN0cy5qc29uJ1xuICApO1xuICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBpZiAoIWRhdGEub2spIHtcbiAgICBjb25zb2xlLmVycm9yKCdkYXRhIG5vdCBmb3VuZCcpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=