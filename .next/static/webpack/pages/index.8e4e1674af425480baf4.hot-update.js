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
                href: "/product/".concat(data.product_id),
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
                    children: [" ", data.meta_description]
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
      children: ".container.jsx-435419239{width:100%;background-color:#f2f4fb;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:32px;height:100vh;}.container-grid.jsx-435419239{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.card-container.jsx-435419239{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,auto));gap:32px;}.card.jsx-435419239{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);background-color:#efefef;padding:16px;border-radius:15px;box-shadow:0px 10px 15px -5px rgb(0 0 0 / 65%);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.card.jsx-435419239 a.jsx-435419239{-webkit-text-decoration:none;text-decoration:none;text-align:center;}.card.jsx-435419239 a.jsx-435419239 h1.jsx-435419239{-webkit-text-decoration:none !important;text-decoration:none !important;color:rgb(33,33,33);text-transform:uppercase;background:lightgray;width:100%;margin:10px 0;}.card.jsx-435419239 a.jsx-435419239 p.jsx-435419239{color:rgb(92,92,92);}.card.jsx-435419239:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.card-content.jsx-435419239{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpbHJveS9jb2RlL3plc3R5LWlvL2NvbG9yc3RyZWV0LXBvYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RmtCLEFBR3NCLEFBUU8sQUFHTCxBQU02QixBQVFyQixBQUlXLEFBUVYsQUFJRCxBQUdSLFdBM0NZLEVBV29DLE9BMEIvRCxnQkFwQ2UsR0FnQlksV0FTNUIsY0FSZ0IsSUFRZixHQWxCQSxDQUlXLEFBaUJhLEVBZUgsQ0FIckIsRUF0QnFCLElBTnJCLFdBaUIyQixJQVZzQixjQWxCekIsT0E2QkQscUJBQ1YsS0FYcUIsTUFZbEIsY0FDaEIsSUFXd0IscUJBMUNULGFBQ0EsYUFDZixDQWlCQSw4QkF3QkEiLCJmaWxlIjoiL2hvbWUva2lscm95L2NvZGUvemVzdHktaW8vY29sb3JzdHJlZXQtcG9jL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEZXZlbG9wZXJIaW50IGZyb20gJy4uL2NvbXBvbmVudHMvRGV2ZWxvcGVySGludCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5aZXN0eS5pbyBOZXh0SlMgRGVtbzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGgxPlplc3R5LmlvIHdpdGggTmV4dGpzPC9oMT5cbiAgICAgICAgPGgzPkZldGNoaW5nIGRhdGE8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWdyaWQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRhaW5lcic+XG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnByb2R1Y3RfaWR9IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YC9wcm9kdWN0LyR7ZGF0YS5wcm9kdWN0X2lkfWB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57ZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9J2F1dG8nXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzIwMHB4J1xuICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aD0nYXV0bydcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEucHJpbWFyeV9pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+IHtkYXRhLm1ldGFfZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxEZXZlbG9wZXJIaW50PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Ryb25nPlplc3R5LmlvIEhpbnQ6PC9zdHJvbmc+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRpdGxlPSdnZXRzdGF0aWNwcm9wcy1kZXRhaWxzJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL25leHRqcy5vcmcvbGVhcm4vYmFzaWNzL2RhdGEtZmV0Y2hpbmcvZ2V0c3RhdGljcHJvcHMtZGV0YWlscydcbiAgICAgICAgICA+XG4gICAgICAgICAgICBnZXRTdGF0aWNQcm9zXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgTmV4dC5qcyB3aWxsIHJ1biB0aGlzIGZ1bmN0aW9uIGF0IGJ1aWxkIHRpbWUuIFdoYXRldmVyIHlvdXIgcmV0dXJuIGFzXG4gICAgICAgICAgcHJvcHMgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgZXhwb3J0ZWQgcGFnZS5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGl0bGU9J2dldFNlcnZlclNpZGVQcm9wcydcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuL2Jhc2ljcy9kYXRhLWZldGNoaW5nL3JlcXVlc3QtdGltZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBUaGlzIHdpbGwgYmUgY2FsbGVkIGF0IHJ1bnRpbWUgZHVyaW5nIGV2ZXJ5IHJlcXVlc3QuIFNvIHVubGlrZVxuICAgICAgICAgIGdldFN0YXRpY1Byb3BzLCB5b3Ugd2lsbCBoYXZlIHRoZSBydW50aW1lIGRhdGEgbGlrZSBxdWVyeSBwYXJhbXMsIEhUVFBcbiAgICAgICAgICBoZWFkZXJzLCBhbmQgdGhlIHJlcSBhbmQgcmVzIG9iamVjdHMgZnJvbSBBUEkgaGFuZGxlcnMueycgJ31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGl0bGU9J2dldFN0YXRpY1BhdGhzJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9kYXRhLWZldGNoaW5nI2dldHN0YXRpY3BhdGhzLXN0YXRpYy1nZW5lcmF0aW9uJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIGdldFN0YXRpY1BhdGhzXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgVGhpcyB3aWxsIGJlIGNhbGxlZCBhdCBydW50aW1lIGR1cmluZyBldmVyeSByZXF1ZXN0LiBTbyB1bmxpa2VcbiAgICAgICAgICBnZXRTdGF0aWNQcm9wcywgeW91IHdpbGwgaGF2ZSB0aGUgcnVudGltZSBkYXRhIGxpa2UgcXVlcnkgcGFyYW1zLCBIVFRQXG4gICAgICAgICAgaGVhZGVycywgYW5kIHRoZSByZXEgYW5kIHJlcyBvYmplY3RzIGZyb20gQVBJIGhhbmRsZXJzLiBIZXJlIHdlIGFyZVxuICAgICAgICAgIGZldGNoaW5nIHdpdGggbmV4dGpzIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIHRvIFpmbGl4eycgJ31cblxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHA6Ly9iNG05NHY0MS1kZXYucHJldmlldy56ZXN0eS5pby8tL2dxbC9wcm9kdWN0cy5qc29uJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBUEkgZnJvbSBaZXN0eS5pb1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgQVBJIGFuZCBtYXBwaW5nIHRocm91Z2ggdG8gZGlzcGxheSBpbWFnZSwgdGl0bGUsIGFuZCBkZXNjcmlwdGlvbnsnICd9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3plc3R5LWlvL2RlbW9zL2Jsb2IvbWFpbi9uZXh0anMvcGFnZXMvaW5kZXguanMnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBOZXh0LmpzIHNvdXJjZSBmaWxlIGhlcmVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRGV2ZWxvcGVySGludD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNGZiO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lci1ncmlkIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCBhdXRvKSk7XG4gICAgICAgICAgZ2FwOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IC01cHggcmdiKDAgMCAwIC8gNjUlKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgYSBoMSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHJnYigzMywgMzMsIDMzKTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBhIHAge1xuICAgICAgICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgKTtcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBpZiAoIWRhdGEub2spIHtcbiAgICBjb25zb2xlLmVycm9yKCdkYXRhIG5vdCBmb3VuZCcpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/kilroy/code/zesty-io/colorstreet-poc/pages/index.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtYXAiLCJpbmRleCIsInByb2R1Y3RfaWQiLCJuYW1lIiwicHJpbWFyeV9pbWFnZSIsIm1ldGFfZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFDbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLElBQWxCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFBLHlDQUFnQixXQUFoQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUEsMkNBQWUsZ0JBQWY7QUFBQSwrQkFDRTtBQUFBLDZDQUFlLGdCQUFmO0FBQUEsb0JBQ0dILEtBQUssQ0FBQ0csSUFBTixDQUFXQyxHQUFYLENBQWUsVUFBQ0QsSUFBRCxFQUFPRSxLQUFQO0FBQUEsZ0NBQ2Q7QUFBQSxpREFBcUMsTUFBckM7QUFBQSxxQ0FDRTtBQUFHLG9CQUFJLHFCQUFjRixJQUFJLENBQUNHLFVBQW5CLENBQVA7QUFBQTtBQUFBLHVDQUNFO0FBQUEscURBQWUsY0FBZjtBQUFBLDBDQUNFO0FBQUE7QUFBQSw4QkFBS0gsSUFBSSxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUNFLDBCQUFNLEVBQUMsTUFEVDtBQUVFLHlCQUFLLEVBQUMsT0FGUjtBQUdFLGlDQUFVLE1BSFo7QUFJRSx1QkFBRyxFQUFFSixJQUFJLENBQUNLLGFBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkYsZUFRRTtBQUFBO0FBQUEsb0NBQUtMLElBQUksQ0FBQ00sZ0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUFVTixJQUFJLENBQUNHLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYztBQUFBLFdBQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBNkJFLDhEQUFDLDhEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGVBQUssRUFBQyx3QkFEUjtBQUVFLGdCQUFNLEVBQUMsUUFGVDtBQUdFLGNBQUksRUFBQyxzRUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBUU8sR0FSUCxxSUFXRTtBQUNFLGVBQUssRUFBQyxvQkFEUjtBQUVFLGdCQUFNLEVBQUMsUUFGVDtBQUdFLGNBQUksRUFBQyw0REFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGLEVBaUJPLEdBakJQLG1NQW9CMEQsR0FwQjFELGVBcUJFO0FBQ0UsZUFBSyxFQUFDLGdCQURSO0FBRUUsZ0JBQU0sRUFBQyxRQUZUO0FBR0UsY0FBSSxFQUFDLHVGQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJGLEVBMkJPLEdBM0JQLGtRQStCcUQsR0EvQnJELGVBaUNJO0FBQ0UsZ0JBQU0sRUFBQyxRQURUO0FBRUUsY0FBSSxFQUFDLDBEQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakNKLEVBdUNHLEdBdkNILHNFQXdDbUUsR0F4Q25FLGVBeUNFO0FBQ0UsZ0JBQU0sRUFBQyxRQURUO0FBRUUsY0FBSSxFQUFDLG1FQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQXNJRDtLQXpJdUJQLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGU0ZTE2NzRhZjQyNTQ4MGJhZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRGV2ZWxvcGVySGludCBmcm9tICcuLi9jb21wb25lbnRzL0RldmVsb3BlckhpbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHByb3BzLmRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+WmVzdHkuaW8gTmV4dEpTIERlbW88L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxoMT5aZXN0eS5pbyB3aXRoIE5leHRqczwvaDE+XG4gICAgICAgIDxoMz5GZXRjaGluZyBkYXRhPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1ncmlkJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1jb250YWluZXInPlxuICAgICAgICAgICAge3Byb3BzLmRhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5wcm9kdWN0X2lkfSBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvcHJvZHVjdC8ke2RhdGEucHJvZHVjdF9pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgICA8aDE+e2RhdGEubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScyMDBweCdcbiAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg9J2F1dG8nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLnByaW1hcnlfaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPiB7ZGF0YS5tZXRhX2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8RGV2ZWxvcGVySGludD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHN0cm9uZz5aZXN0eS5pbyBIaW50Ojwvc3Ryb25nPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0aXRsZT0nZ2V0c3RhdGljcHJvcHMtZGV0YWlscydcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuL2Jhc2ljcy9kYXRhLWZldGNoaW5nL2dldHN0YXRpY3Byb3BzLWRldGFpbHMnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgZ2V0U3RhdGljUHJvc1xuICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgIE5leHQuanMgd2lsbCBydW4gdGhpcyBmdW5jdGlvbiBhdCBidWlsZCB0aW1lLiBXaGF0ZXZlciB5b3VyIHJldHVybiBhc1xuICAgICAgICAgIHByb3BzIHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIGV4cG9ydGVkIHBhZ2UuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRpdGxlPSdnZXRTZXJ2ZXJTaWRlUHJvcHMnXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vbmV4dGpzLm9yZy9sZWFybi9iYXNpY3MvZGF0YS1mZXRjaGluZy9yZXF1ZXN0LXRpbWUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgVGhpcyB3aWxsIGJlIGNhbGxlZCBhdCBydW50aW1lIGR1cmluZyBldmVyeSByZXF1ZXN0LiBTbyB1bmxpa2VcbiAgICAgICAgICBnZXRTdGF0aWNQcm9wcywgeW91IHdpbGwgaGF2ZSB0aGUgcnVudGltZSBkYXRhIGxpa2UgcXVlcnkgcGFyYW1zLCBIVFRQXG4gICAgICAgICAgaGVhZGVycywgYW5kIHRoZSByZXEgYW5kIHJlcyBvYmplY3RzIGZyb20gQVBJIGhhbmRsZXJzLnsnICd9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRpdGxlPSdnZXRTdGF0aWNQYXRocydcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvZGF0YS1mZXRjaGluZyNnZXRzdGF0aWNwYXRocy1zdGF0aWMtZ2VuZXJhdGlvbidcbiAgICAgICAgICA+XG4gICAgICAgICAgICBnZXRTdGF0aWNQYXRoc1xuICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgIFRoaXMgd2lsbCBiZSBjYWxsZWQgYXQgcnVudGltZSBkdXJpbmcgZXZlcnkgcmVxdWVzdC4gU28gdW5saWtlXG4gICAgICAgICAgZ2V0U3RhdGljUHJvcHMsIHlvdSB3aWxsIGhhdmUgdGhlIHJ1bnRpbWUgZGF0YSBsaWtlIHF1ZXJ5IHBhcmFtcywgSFRUUFxuICAgICAgICAgIGhlYWRlcnMsIGFuZCB0aGUgcmVxIGFuZCByZXMgb2JqZWN0cyBmcm9tIEFQSSBoYW5kbGVycy4gSGVyZSB3ZSBhcmVcbiAgICAgICAgICBmZXRjaGluZyB3aXRoIG5leHRqcyBgZ2V0U2VydmVyU2lkZVByb3BzYCB0byBaZmxpeHsnICd9XG5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwOi8vYjRtOTR2NDEtZGV2LnByZXZpZXcuemVzdHkuaW8vLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQVBJIGZyb20gWmVzdHkuaW9cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIEFQSSBhbmQgbWFwcGluZyB0aHJvdWdoIHRvIGRpc3BsYXkgaW1hZ2UsIHRpdGxlLCBhbmQgZGVzY3JpcHRpb257JyAnfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS96ZXN0eS1pby9kZW1vcy9ibG9iL21haW4vbmV4dGpzL3BhZ2VzL2luZGV4LmpzJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXcgTmV4dC5qcyBzb3VyY2UgZmlsZSBoZXJlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L0RldmVsb3BlckhpbnQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjRmYjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogMzJweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXItZ3JpZCB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwgYXV0bykpO1xuICAgICAgICAgIGdhcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCAtNXB4IHJnYigwIDAgMCAvIDY1JSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICB9XG4gICAgICAgIC5jYXJkIGEgaDEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiByZ2IoMzMsIDMzLCAzMyk7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgYSBwIHtcbiAgICAgICAgICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vZ3FsL3Byb2R1Y3RzLmpzb24nXG4gICk7XG4gIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgaWYgKCFkYXRhLm9rKSB7XG4gICAgY29uc29sZS5lcnJvcignZGF0YSBub3QgZm91bmQnKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9