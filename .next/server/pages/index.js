(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DeveloperHint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DeveloperHint */ "./components/DeveloperHint/index.js");


var _jsxFileName = "/home/kilroy/code/zesty-io/colorstreet-poc/pages/index.js";



function Home(props) {
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
          children: props.data.map((data, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-435419239" + " " + 'card',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: `/product/${data.product_id}`,
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  height: "auto",
                  width: "200px",
                  "max-width": "auto",
                  src: data.primary_image,
                  className: "jsx-435419239"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "jsx-435419239",
                  children: [" ", data.meta_description]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 17
            }, this)
          }, data.product_id, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 15
          }, this))
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
async function getServerSideProps() {
  const res = await fetch('https://colorstreetdemo.zesty.dev/-/gql/products.json');
  let data = await res.json();

  if (!data.ok) {
    console.error('data not found');
  }

  return {
    props: {
      data: data
    }
  };
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_DeveloperHint_index_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWFwIiwiaW5kZXgiLCJwcm9kdWN0X2lkIiwibmFtZSIsInByaW1hcnlfaW1hZ2UiLCJtZXRhX2Rlc2NyaXB0aW9uIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwib2siLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxJQUFsQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBQSx5Q0FBZ0IsV0FBaEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBLDJDQUFlLGdCQUFmO0FBQUEsK0JBQ0U7QUFBQSw2Q0FBZSxnQkFBZjtBQUFBLG9CQUNHSCxLQUFLLENBQUNHLElBQU4sQ0FBV0MsR0FBWCxDQUFlLENBQUNELElBQUQsRUFBT0UsS0FBUCxrQkFDZDtBQUFBLCtDQUFxQyxNQUFyQztBQUFBLG1DQUNFO0FBQUcsa0JBQUksRUFBRyxZQUFXRixJQUFJLENBQUNHLFVBQVcsRUFBckM7QUFBQTtBQUFBLHFDQUNFO0FBQUEsbURBQWUsY0FBZjtBQUFBLHdDQUNFO0FBQUE7QUFBQSw0QkFBS0gsSUFBSSxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUNFLHdCQUFNLEVBQUMsTUFEVDtBQUVFLHVCQUFLLEVBQUMsT0FGUjtBQUdFLCtCQUFVLE1BSFo7QUFJRSxxQkFBRyxFQUFFSixJQUFJLENBQUNLLGFBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkYsZUFRRTtBQUFBO0FBQUEsa0NBQUtMLElBQUksQ0FBQ00sZ0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFVTixJQUFJLENBQUNHLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUE2QkUsOERBQUMsOERBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQ0UsZUFBSyxFQUFDLHdCQURSO0FBRUUsZ0JBQU0sRUFBQyxRQUZUO0FBR0UsY0FBSSxFQUFDLHNFQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFRTyxHQVJQLHFJQVdFO0FBQ0UsZUFBSyxFQUFDLG9CQURSO0FBRUUsZ0JBQU0sRUFBQyxRQUZUO0FBR0UsY0FBSSxFQUFDLDREQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsRUFpQk8sR0FqQlAsbU1Bb0IwRCxHQXBCMUQsZUFxQkU7QUFDRSxlQUFLLEVBQUMsZ0JBRFI7QUFFRSxnQkFBTSxFQUFDLFFBRlQ7QUFHRSxjQUFJLEVBQUMsdUZBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkYsRUEyQk8sR0EzQlAsa1FBK0JxRCxHQS9CckQsZUFpQ0k7QUFDRSxnQkFBTSxFQUFDLFFBRFQ7QUFFRSxjQUFJLEVBQUMsMERBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQ0osRUF1Q0csR0F2Q0gsc0VBd0NtRSxHQXhDbkUsZUF5Q0U7QUFDRSxnQkFBTSxFQUFDLFFBRFQ7QUFFRSxjQUFJLEVBQUMsbUVBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBc0lEO0FBRU0sZUFBZUksa0JBQWYsR0FBb0M7QUFDekMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDckIsdURBRHFCLENBQXZCO0FBR0EsTUFBSVQsSUFBSSxHQUFHLE1BQU1RLEdBQUcsQ0FBQ0UsSUFBSixFQUFqQjs7QUFDQSxNQUFJLENBQUNWLElBQUksQ0FBQ1csRUFBVixFQUFjO0FBQ1piLFdBQU8sQ0FBQ2MsS0FBUixDQUFjLGdCQUFkO0FBQ0Q7O0FBQ0QsU0FBTztBQUNMZixTQUFLLEVBQUU7QUFDTEcsVUFBSSxFQUFFQTtBQUREO0FBREYsR0FBUDtBQUtELEM7Ozs7Ozs7Ozs7O0FDM0pELHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEZXZlbG9wZXJIaW50IGZyb20gJy4uL2NvbXBvbmVudHMvRGV2ZWxvcGVySGludCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5aZXN0eS5pbyBOZXh0SlMgRGVtbzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGgxPlplc3R5LmlvIHdpdGggTmV4dGpzPC9oMT5cbiAgICAgICAgPGgzPkZldGNoaW5nIGRhdGE8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWdyaWQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRhaW5lcic+XG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnByb2R1Y3RfaWR9IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YC9wcm9kdWN0LyR7ZGF0YS5wcm9kdWN0X2lkfWB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57ZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9J2F1dG8nXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzIwMHB4J1xuICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aD0nYXV0bydcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEucHJpbWFyeV9pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+IHtkYXRhLm1ldGFfZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxEZXZlbG9wZXJIaW50PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Ryb25nPlplc3R5LmlvIEhpbnQ6PC9zdHJvbmc+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRpdGxlPSdnZXRzdGF0aWNwcm9wcy1kZXRhaWxzJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL25leHRqcy5vcmcvbGVhcm4vYmFzaWNzL2RhdGEtZmV0Y2hpbmcvZ2V0c3RhdGljcHJvcHMtZGV0YWlscydcbiAgICAgICAgICA+XG4gICAgICAgICAgICBnZXRTdGF0aWNQcm9zXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgTmV4dC5qcyB3aWxsIHJ1biB0aGlzIGZ1bmN0aW9uIGF0IGJ1aWxkIHRpbWUuIFdoYXRldmVyIHlvdXIgcmV0dXJuIGFzXG4gICAgICAgICAgcHJvcHMgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgZXhwb3J0ZWQgcGFnZS5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGl0bGU9J2dldFNlcnZlclNpZGVQcm9wcydcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuL2Jhc2ljcy9kYXRhLWZldGNoaW5nL3JlcXVlc3QtdGltZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBUaGlzIHdpbGwgYmUgY2FsbGVkIGF0IHJ1bnRpbWUgZHVyaW5nIGV2ZXJ5IHJlcXVlc3QuIFNvIHVubGlrZVxuICAgICAgICAgIGdldFN0YXRpY1Byb3BzLCB5b3Ugd2lsbCBoYXZlIHRoZSBydW50aW1lIGRhdGEgbGlrZSBxdWVyeSBwYXJhbXMsIEhUVFBcbiAgICAgICAgICBoZWFkZXJzLCBhbmQgdGhlIHJlcSBhbmQgcmVzIG9iamVjdHMgZnJvbSBBUEkgaGFuZGxlcnMueycgJ31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGl0bGU9J2dldFN0YXRpY1BhdGhzJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9kYXRhLWZldGNoaW5nI2dldHN0YXRpY3BhdGhzLXN0YXRpYy1nZW5lcmF0aW9uJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIGdldFN0YXRpY1BhdGhzXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgVGhpcyB3aWxsIGJlIGNhbGxlZCBhdCBydW50aW1lIGR1cmluZyBldmVyeSByZXF1ZXN0LiBTbyB1bmxpa2VcbiAgICAgICAgICBnZXRTdGF0aWNQcm9wcywgeW91IHdpbGwgaGF2ZSB0aGUgcnVudGltZSBkYXRhIGxpa2UgcXVlcnkgcGFyYW1zLCBIVFRQXG4gICAgICAgICAgaGVhZGVycywgYW5kIHRoZSByZXEgYW5kIHJlcyBvYmplY3RzIGZyb20gQVBJIGhhbmRsZXJzLiBIZXJlIHdlIGFyZVxuICAgICAgICAgIGZldGNoaW5nIHdpdGggbmV4dGpzIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIHRvIFpmbGl4eycgJ31cblxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHA6Ly9iNG05NHY0MS1kZXYucHJldmlldy56ZXN0eS5pby8tL2dxbC9wcm9kdWN0cy5qc29uJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBUEkgZnJvbSBaZXN0eS5pb1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgQVBJIGFuZCBtYXBwaW5nIHRocm91Z2ggdG8gZGlzcGxheSBpbWFnZSwgdGl0bGUsIGFuZCBkZXNjcmlwdGlvbnsnICd9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3plc3R5LWlvL2RlbW9zL2Jsb2IvbWFpbi9uZXh0anMvcGFnZXMvaW5kZXguanMnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBOZXh0LmpzIHNvdXJjZSBmaWxlIGhlcmVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRGV2ZWxvcGVySGludD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNGZiO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lci1ncmlkIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCBhdXRvKSk7XG4gICAgICAgICAgZ2FwOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IC01cHggcmdiKDAgMCAwIC8gNjUlKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgYSBoMSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHJnYigzMywgMzMsIDMzKTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBhIHAge1xuICAgICAgICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgKTtcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBpZiAoIWRhdGEub2spIHtcbiAgICBjb25zb2xlLmVycm9yKCdkYXRhIG5vdCBmb3VuZCcpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==