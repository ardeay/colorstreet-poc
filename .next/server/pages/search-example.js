(function() {
var exports = {};
exports.id = "pages/search-example";
exports.ids = ["pages/search-example"];
exports.modules = {

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.module.css */ "./components/Layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/kilroy/code/zesty-io/colorstreet-poc/components/Layout/index.js";
// https://nextjs.org/learn/basics/assets-metadata-css/layout-component

function Layout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./pages/search-example/index.js":
/*!***************************************!*\
  !*** ./pages/search-example/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DeveloperHint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/DeveloperHint */ "./components/DeveloperHint/index.js");

var _jsxFileName = "/home/kilroy/code/zesty-io/colorstreet-poc/pages/search-example/index.js";






function Posts(props) {
  const {
    0: searchVal,
    1: setSearchVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  let filteredArticles = props.articles;

  if (searchVal != '') {
    filteredArticles = filteredArticles.filter(article => {
      if (article.title.toLowerCase().includes(searchVal)) {
        return true;
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: "jsx-3534732505",
        children: "Search Example"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3534732505" + " " + 'fake-google-header',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "https://www.colorstreet.com/content/images/logo-horizontal.jpg",
        width: "200",
        alt: "Google",
        className: "jsx-3534732505"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Search...",
        value: searchVal,
        onChange: e => setSearchVal(e.target.value),
        className: "jsx-3534732505"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3534732505" + " " + 'results',
      children: [filteredArticles.map(art => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-3534732505" + " " + 'result',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-3534732505" + " " + 'imageThumb',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: art.primary_image,
            alt: art.name,
            className: "jsx-3534732505"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-3534732505" + " " + 'resultsText',
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "jsx-3534732505",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: `/product/${art.product_id}`,
              className: "jsx-3534732505",
              children: art.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "jsx-3534732505",
            children: art.description.replace(/(<([^>]+)>)/gi, '').substring(0, 200)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: `/product/${art.product_id}`,
            className: "jsx-3534732505" + " " + 'path',
            children: `/product/${art.product_id}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this), ' ', "-", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: `/product/${art.product_id}`,
            className: "jsx-3534732505" + " " + 'cached',
            children: "Cached"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)]
      }, art.zuid, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DeveloperHint__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "jsx-3534732505",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            className: "jsx-3534732505",
            children: "Zesty.io Hint:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), "This NextJS example uses an endpoint automatically generating from a Zesty.io content instance", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            href: "https://colorstreetdemo.zesty.dev/-/gql/products.json",
            className: "jsx-3534732505",
            children: "https://colorstreetdemo.zesty.dev/-/gql/products.json"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), ' ', "to load the data, and uses a javascript array filter to power the search. Data is preloaded using a NextJS function", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            href: "https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation",
            className: "jsx-3534732505",
            children: "getStaticProps"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            href: "https://github.com/zesty-io/demos/blob/main/nextjs/pages/search-example/index.js",
            className: "jsx-3534732505",
            children: "View Next.js source file here"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3534732505",
      children: ".results.jsx-3534732505{padding-top:90px;margin:3rem auto 6rem;}.imageThumb.jsx-3534732505{overflow:hidden;min-width:120px;height:80px;-webkit-box-flex:3;-webkit-flex-grow:3;-ms-flex-positive:3;flex-grow:3;margin-right:10px;border:2px solid #2736d1;}.resultsText.jsx-3534732505{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.imageThumb.jsx-3534732505 img.jsx-3534732505{width:150px;margin-left:-15px;}.result.jsx-3534732505{font-family:Verdana,Arial,sans-serif;margin-bottom:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}h4.jsx-3534732505{margin:0;line-height:14px;margin-bottom:4px;}.fake-google-header.jsx-3534732505{position:absolute;width:100%;top:56.25px;left:0px;border-bottom:2px grey solid;padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.fake-google-header.jsx-3534732505 input.jsx-3534732505,.fake-google-header.jsx-3534732505 p.jsx-3534732505{margin:auto 30px;}.fake-google-header.jsx-3534732505 p.jsx-3534732505{color:grey;}.fake-google-header.jsx-3534732505 img.jsx-3534732505{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}p.jsx-3534732505{font-size:14px;margin:0;}h4.jsx-3534732505 a.jsx-3534732505{color:#2736d1;font-size:18px;}a.path.jsx-3534732505{color:#34a853;font-size:14px;}a.cached.jsx-3534732505{color:#2736d1;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpbHJveS9jb2RlL3plc3R5LWlvL2NvbG9yc3RyZWV0LXBvYy9wYWdlcy9zZWFyY2gtZXhhbXBsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRmtCLEFBRzRCLEFBSUQsQUFRSixBQUdBLEFBSTJCLEFBSzlCLEFBS1MsQUFZRCxBQUdOLEFBSWQsQUFFa0IsQUFJRCxBQUlBLEFBSUEsU0FyQ0csRUFvQm5CLENBN0JvQixFQXVDSCxBQUlBLEFBSUEsQ0FaTixDQTlDTyxDQUpNLEFBeUN4QixDQVphLE1Bc0JiLEVBMUJvQixHQUtOLEFBeUJkLEFBSUEsQUFJQSxDQS9DQSxFQVhjLEtBY08sRUFsQnJCLEVBOEJXLEdBekJHLEFBb0JkLE1BTStCLE1BWmhCLGVBUmYsQUFtQ0EsUUFkZSxhQUNBLHVCQTNCSyxlQWNwQixHQWIyQix5QkFDM0IsUUEwQm1CLGlCQUNLLG1HQUN4QiIsImZpbGUiOiIvaG9tZS9raWxyb3kvY29kZS96ZXN0eS1pby9jb2xvcnN0cmVldC1wb2MvcGFnZXMvc2VhcmNoLWV4YW1wbGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEZXZlbG9wZXJIaW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV2ZWxvcGVySGludCc7XG5cbmZ1bmN0aW9uIFBvc3RzKHByb3BzKSB7XG4gIGNvbnN0IFtzZWFyY2hWYWwsIHNldFNlYXJjaFZhbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgbGV0IGZpbHRlcmVkQXJ0aWNsZXMgPSBwcm9wcy5hcnRpY2xlcztcblxuICBpZiAoc2VhcmNoVmFsICE9ICcnKSB7XG4gICAgZmlsdGVyZWRBcnRpY2xlcyA9IGZpbHRlcmVkQXJ0aWNsZXMuZmlsdGVyKChhcnRpY2xlKSA9PiB7XG4gICAgICBpZiAoYXJ0aWNsZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNlYXJjaCBFeGFtcGxlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zha2UtZ29vZ2xlLWhlYWRlcic+XG4gICAgICAgIDxpbWcgc3JjPSdodHRwczovL3d3dy5jb2xvcnN0cmVldC5jb20vY29udGVudC9pbWFnZXMvbG9nby1ob3Jpem9udGFsLmpwZycgd2lkdGg9JzIwMCcgYWx0PSdHb29nbGUnIC8+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoLi4uJ1xuICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdWx0cyc+XG4gICAgICAgIHtmaWx0ZXJlZEFydGljbGVzLm1hcCgoYXJ0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2FydC56dWlkfSBjbGFzc05hbWU9J3Jlc3VsdCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VUaHVtYic+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXthcnQucHJpbWFyeV9pbWFnZX0gYWx0PXthcnQubmFtZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdHNUZXh0Jz5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvcHJvZHVjdC8ke2FydC5wcm9kdWN0X2lkfWB9PnthcnQubmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHthcnQuZGVzY3JpcHRpb24ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKS5zdWJzdHJpbmcoMCwgMjAwKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3BhdGgnIGhyZWY9e2AvcHJvZHVjdC8ke2FydC5wcm9kdWN0X2lkfWB9PlxuICAgICAgICAgICAgICAgIHtgL3Byb2R1Y3QvJHthcnQucHJvZHVjdF9pZH1gfVxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgLXsnICd9XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2FjaGVkJyBocmVmPXtgL3Byb2R1Y3QvJHthcnQucHJvZHVjdF9pZH1gfT5cbiAgICAgICAgICAgICAgICBDYWNoZWRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8RGV2ZWxvcGVySGludD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+WmVzdHkuaW8gSGludDo8L3N0cm9uZz5cbiAgICAgICAgICAgIFRoaXMgTmV4dEpTIGV4YW1wbGUgdXNlcyBhbiBlbmRwb2ludCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRpbmcgZnJvbSBhXG4gICAgICAgICAgICBaZXN0eS5pbyBjb250ZW50IGluc3RhbmNleycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgaHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vZ3FsL3Byb2R1Y3RzLmpzb25cbiAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgdG8gbG9hZCB0aGUgZGF0YSwgYW5kIHVzZXMgYSBqYXZhc2NyaXB0IGFycmF5IGZpbHRlciB0byBwb3dlciB0aGVcbiAgICAgICAgICAgIHNlYXJjaC4gRGF0YSBpcyBwcmVsb2FkZWQgdXNpbmcgYSBOZXh0SlMgZnVuY3Rpb257JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2Jhc2ljLWZlYXR1cmVzL2RhdGEtZmV0Y2hpbmcjZ2V0c3RhdGljcHJvcHMtc3RhdGljLWdlbmVyYXRpb24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGdldFN0YXRpY1Byb3BzXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vemVzdHktaW8vZGVtb3MvYmxvYi9tYWluL25leHRqcy9wYWdlcy9zZWFyY2gtZXhhbXBsZS9pbmRleC5qcydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBOZXh0LmpzIHNvdXJjZSBmaWxlIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRGV2ZWxvcGVySGludD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVzdWx0cyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG8gNnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2VUaHVtYiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDM7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNzM2ZDE7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3VsdHNUZXh0IHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlVGh1bWIgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZXN1bHQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgaDQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRvcDogNTYuMjVweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGdyZXkgc29saWQ7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciBpbnB1dCxcbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciBwIHtcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuZmFrZS1nb29nbGUtaGVhZGVyIHAge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG4gICAgICAgIC5mYWtlLWdvb2dsZS1oZWFkZXIgaW1nIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXJcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGg0IGEge1xuICAgICAgICAgIGNvbG9yOiAjMjczNmQxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICBhLnBhdGgge1xuICAgICAgICAgIGNvbG9yOiAjMzRhODUzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICBhLmNhY2hlZCB7XG4gICAgICAgICAgY29sb3I6ICMyNzM2ZDE7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgKTtcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZXM6IFsuLi5kYXRhXSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdfQ== */\n/*@ sourceURL=/home/kilroy/code/zesty-io/colorstreet-poc/pages/search-example/index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

async function getStaticProps() {
  let res = await fetch('https://colorstreetdemo.zesty.dev/-/gql/products.json');
  let data = await res.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      articles: [...data]
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./components/Layout/Layout.module.css":
/*!*********************************************!*\
  !*** ./components/Layout/Layout.module.css ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Layout_container__259yc"
};


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
var __webpack_exports__ = __webpack_require__.X(0, ["components_DeveloperHint_index_js"], function() { return __webpack_exec__("./pages/search-example/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL3BhZ2VzL3NlYXJjaC1leGFtcGxlL2luZGV4LmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJQb3N0cyIsInByb3BzIiwic2VhcmNoVmFsIiwic2V0U2VhcmNoVmFsIiwidXNlU3RhdGUiLCJmaWx0ZXJlZEFydGljbGVzIiwiYXJ0aWNsZXMiLCJmaWx0ZXIiLCJhcnRpY2xlIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiYXJ0IiwicHJpbWFyeV9pbWFnZSIsIm5hbWUiLCJwcm9kdWN0X2lkIiwiZGVzY3JpcHRpb24iLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwienVpZCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm5vdEZvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQSxNQUFULENBQWdCO0FBQUVDO0FBQUYsQ0FBaEIsRUFBOEI7QUFDekMsc0JBQU87QUFBSyxhQUFTLEVBQUVDLHFFQUFoQjtBQUFBLGNBQW1DRDtBQUFuQztB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OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3NlYXJjaC1leGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuL2Jhc2ljcy9hc3NldHMtbWV0YWRhdGEtY3NzL2xheW91dC1jb21wb25lbnRcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT57Y2hpbGRyZW59PC9kaXY+XG59IiwiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRGV2ZWxvcGVySGludCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldmVsb3BlckhpbnQnO1xuXG5mdW5jdGlvbiBQb3N0cyhwcm9wcykge1xuICBjb25zdCBbc2VhcmNoVmFsLCBzZXRTZWFyY2hWYWxdID0gdXNlU3RhdGUoJycpO1xuXG4gIGxldCBmaWx0ZXJlZEFydGljbGVzID0gcHJvcHMuYXJ0aWNsZXM7XG5cbiAgaWYgKHNlYXJjaFZhbCAhPSAnJykge1xuICAgIGZpbHRlcmVkQXJ0aWNsZXMgPSBmaWx0ZXJlZEFydGljbGVzLmZpbHRlcigoYXJ0aWNsZSkgPT4ge1xuICAgICAgaWYgKGFydGljbGUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWwpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TZWFyY2ggRXhhbXBsZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmYWtlLWdvb2dsZS1oZWFkZXInPlxuICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly93d3cuY29sb3JzdHJlZXQuY29tL2NvbnRlbnQvaW1hZ2VzL2xvZ28taG9yaXpvbnRhbC5qcGcnIHdpZHRoPScyMDAnIGFsdD0nR29vZ2xlJyAvPlxuXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaC4uLidcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVmFsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdHMnPlxuICAgICAgICB7ZmlsdGVyZWRBcnRpY2xlcy5tYXAoKGFydCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXthcnQuenVpZH0gY2xhc3NOYW1lPSdyZXN1bHQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlVGh1bWInPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17YXJ0LnByaW1hcnlfaW1hZ2V9IGFsdD17YXJ0Lm5hbWV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bHRzVGV4dCc+XG4gICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgL3Byb2R1Y3QvJHthcnQucHJvZHVjdF9pZH1gfT57YXJ0Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7YXJ0LmRlc2NyaXB0aW9uLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJykuc3Vic3RyaW5nKDAsIDIwMCl9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwYXRoJyBocmVmPXtgL3Byb2R1Y3QvJHthcnQucHJvZHVjdF9pZH1gfT5cbiAgICAgICAgICAgICAgICB7YC9wcm9kdWN0LyR7YXJ0LnByb2R1Y3RfaWR9YH1cbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIC17JyAnfVxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2NhY2hlZCcgaHJlZj17YC9wcm9kdWN0LyR7YXJ0LnByb2R1Y3RfaWR9YH0+XG4gICAgICAgICAgICAgICAgQ2FjaGVkXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPERldmVsb3BlckhpbnQ+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPlplc3R5LmlvIEhpbnQ6PC9zdHJvbmc+XG4gICAgICAgICAgICBUaGlzIE5leHRKUyBleGFtcGxlIHVzZXMgYW4gZW5kcG9pbnQgYXV0b21hdGljYWxseSBnZW5lcmF0aW5nIGZyb20gYVxuICAgICAgICAgICAgWmVzdHkuaW8gY29udGVudCBpbnN0YW5jZXsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vZ3FsL3Byb2R1Y3RzLmpzb24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGh0dHBzOi8vY29sb3JzdHJlZXRkZW1vLnplc3R5LmRldi8tL2dxbC9wcm9kdWN0cy5qc29uXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgIHRvIGxvYWQgdGhlIGRhdGEsIGFuZCB1c2VzIGEgamF2YXNjcmlwdCBhcnJheSBmaWx0ZXIgdG8gcG93ZXIgdGhlXG4gICAgICAgICAgICBzZWFyY2guIERhdGEgaXMgcHJlbG9hZGVkIHVzaW5nIGEgTmV4dEpTIGZ1bmN0aW9ueycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9kYXRhLWZldGNoaW5nI2dldHN0YXRpY3Byb3BzLXN0YXRpYy1nZW5lcmF0aW9uJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBnZXRTdGF0aWNQcm9wc1xuICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3plc3R5LWlvL2RlbW9zL2Jsb2IvbWFpbi9uZXh0anMvcGFnZXMvc2VhcmNoLWV4YW1wbGUvaW5kZXguanMnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZpZXcgTmV4dC5qcyBzb3VyY2UgZmlsZSBoZXJlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0RldmVsb3BlckhpbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlc3VsdHMge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA5MHB4O1xuICAgICAgICAgIG1hcmdpbjogM3JlbSBhdXRvIDZyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlVGh1bWIge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgZmxleC1ncm93OiAzO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjczNmQxO1xuICAgICAgICB9XG4gICAgICAgIC5yZXN1bHRzVGV4dCB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZVRodW1iIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICAgICAgfVxuICAgICAgICAucmVzdWx0IHtcbiAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mYWtlLWdvb2dsZS1oZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0b3A6IDU2LjI1cHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBncmV5IHNvbGlkO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mYWtlLWdvb2dsZS1oZWFkZXIgaW5wdXQsXG4gICAgICAgIC5mYWtlLWdvb2dsZS1oZWFkZXIgcCB7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciBwIHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuICAgICAgICAuZmFrZS1nb29nbGUtaGVhZGVyIGltZyB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyXG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoNCBhIHtcbiAgICAgICAgICBjb2xvcjogIzI3MzZkMTtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgYS5wYXRoIHtcbiAgICAgICAgICBjb2xvcjogIzM0YTg1MztcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgYS5jYWNoZWQge1xuICAgICAgICAgIGNvbG9yOiAjMjczNmQxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vZ3FsL3Byb2R1Y3RzLmpzb24nXG4gICk7XG4gIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzOiBbLi4uZGF0YV0sXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMYXlvdXRfY29udGFpbmVyX18yNTl5Y1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9