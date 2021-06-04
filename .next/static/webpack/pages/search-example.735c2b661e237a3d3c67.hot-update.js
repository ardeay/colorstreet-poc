self["webpackHotUpdate_N_E"]("pages/search-example",{

/***/ "./pages/search-example/index.js":
/*!***************************************!*\
  !*** ./pages/search-example/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DeveloperHint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/DeveloperHint */ "./components/DeveloperHint/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/kilroy/code/zesty-io/colorstreet-poc/pages/search-example/index.js",
    _s = $RefreshSig$();







function Posts(props) {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      searchVal = _useState[0],
      setSearchVal = _useState[1];

  var filteredArticles = props.articles;

  if (searchVal != '') {
    filteredArticles = filteredArticles.filter(function (article) {
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
        onChange: function onChange(e) {
          return setSearchVal(e.target.value);
        },
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
      children: [filteredArticles.map(function (art) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-3534732505" + " " + 'resultsText',
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              className: "jsx-3534732505",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: art.path_full,
                className: "jsx-3534732505",
                children: art.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "jsx-3534732505",
              children: art.description.replace(/(<([^>]+)>)/gi, '').substring(0, 200)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: art.uri,
              className: "jsx-3534732505" + " " + 'path',
              children: art.uri
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this), ' ', "-", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: art.uri,
              className: "jsx-3534732505" + " " + 'cached',
              children: "Cached"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)]
        }, art.zuid, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DeveloperHint__WEBPACK_IMPORTED_MODULE_5__.default, {
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
      children: ".results.jsx-3534732505{padding-top:90px;margin:3rem auto 6rem;}.imageThumb.jsx-3534732505{overflow:hidden;min-width:120px;height:80px;-webkit-box-flex:3;-webkit-flex-grow:3;-ms-flex-positive:3;flex-grow:3;margin-right:10px;border:2px solid #2736d1;}.resultsText.jsx-3534732505{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.imageThumb.jsx-3534732505 img.jsx-3534732505{width:150px;margin-left:-15px;}.result.jsx-3534732505{font-family:Verdana,Arial,sans-serif;margin-bottom:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}h4.jsx-3534732505{margin:0;line-height:14px;margin-bottom:4px;}.fake-google-header.jsx-3534732505{position:absolute;width:100%;top:56.25px;left:0px;border-bottom:2px grey solid;padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.fake-google-header.jsx-3534732505 input.jsx-3534732505,.fake-google-header.jsx-3534732505 p.jsx-3534732505{margin:auto 30px;}.fake-google-header.jsx-3534732505 p.jsx-3534732505{color:grey;}.fake-google-header.jsx-3534732505 img.jsx-3534732505{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}p.jsx-3534732505{font-size:14px;margin:0;}h4.jsx-3534732505 a.jsx-3534732505{color:#2736d1;font-size:18px;}a.path.jsx-3534732505{color:#34a853;font-size:14px;}a.cached.jsx-3534732505{color:#2736d1;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpbHJveS9jb2RlL3plc3R5LWlvL2NvbG9yc3RyZWV0LXBvYy9wYWdlcy9zZWFyY2gtZXhhbXBsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRmtCLEFBRzRCLEFBSUQsQUFRSixBQUdBLEFBSTJCLEFBSzlCLEFBS1MsQUFZRCxBQUdOLEFBSWQsQUFFa0IsQUFJRCxBQUlBLEFBSUEsU0FyQ0csRUFvQm5CLENBN0JvQixFQXVDSCxBQUlBLEFBSUEsQ0FaTixDQTlDTyxDQUpNLEFBeUN4QixDQVphLE1Bc0JiLEVBMUJvQixHQUtOLEFBeUJkLEFBSUEsQUFJQSxDQS9DQSxFQVhjLEtBY08sRUFsQnJCLEVBOEJXLEdBekJHLEFBb0JkLE1BTStCLE1BWmhCLGVBUmYsQUFtQ0EsUUFkZSxhQUNBLHVCQTNCSyxlQWNwQixHQWIyQix5QkFDM0IsUUEwQm1CLGlCQUNLLG1HQUN4QiIsImZpbGUiOiIvaG9tZS9raWxyb3kvY29kZS96ZXN0eS1pby9jb2xvcnN0cmVldC1wb2MvcGFnZXMvc2VhcmNoLWV4YW1wbGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEZXZlbG9wZXJIaW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV2ZWxvcGVySGludCc7XG5cbmZ1bmN0aW9uIFBvc3RzKHByb3BzKSB7XG4gIGNvbnN0IFtzZWFyY2hWYWwsIHNldFNlYXJjaFZhbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgbGV0IGZpbHRlcmVkQXJ0aWNsZXMgPSBwcm9wcy5hcnRpY2xlcztcblxuICBpZiAoc2VhcmNoVmFsICE9ICcnKSB7XG4gICAgZmlsdGVyZWRBcnRpY2xlcyA9IGZpbHRlcmVkQXJ0aWNsZXMuZmlsdGVyKChhcnRpY2xlKSA9PiB7XG4gICAgICBpZiAoYXJ0aWNsZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNlYXJjaCBFeGFtcGxlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zha2UtZ29vZ2xlLWhlYWRlcic+XG4gICAgICAgIDxpbWcgc3JjPSdodHRwczovL3d3dy5jb2xvcnN0cmVldC5jb20vY29udGVudC9pbWFnZXMvbG9nby1ob3Jpem9udGFsLmpwZycgd2lkdGg9JzIwMCcgYWx0PSdHb29nbGUnIC8+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoLi4uJ1xuICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdWx0cyc+XG4gICAgICAgIHtmaWx0ZXJlZEFydGljbGVzLm1hcCgoYXJ0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2FydC56dWlkfSBjbGFzc05hbWU9J3Jlc3VsdCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VUaHVtYic+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXthcnQucHJpbWFyeV9pbWFnZX0gYWx0PXthcnQubmFtZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdHNUZXh0Jz5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydC5wYXRoX2Z1bGx9PnthcnQubmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHthcnQuZGVzY3JpcHRpb24ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKS5zdWJzdHJpbmcoMCwgMjAwKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3BhdGgnIGhyZWY9e2FydC51cml9PlxuICAgICAgICAgICAgICAgIHthcnQudXJpfVxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgLXsnICd9XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2FjaGVkJyBocmVmPXthcnQudXJpfT5cbiAgICAgICAgICAgICAgICBDYWNoZWRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8RGV2ZWxvcGVySGludD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+WmVzdHkuaW8gSGludDo8L3N0cm9uZz5cbiAgICAgICAgICAgIFRoaXMgTmV4dEpTIGV4YW1wbGUgdXNlcyBhbiBlbmRwb2ludCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRpbmcgZnJvbSBhXG4gICAgICAgICAgICBaZXN0eS5pbyBjb250ZW50IGluc3RhbmNleycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgaHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vZ3FsL3Byb2R1Y3RzLmpzb25cbiAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgdG8gbG9hZCB0aGUgZGF0YSwgYW5kIHVzZXMgYSBqYXZhc2NyaXB0IGFycmF5IGZpbHRlciB0byBwb3dlciB0aGVcbiAgICAgICAgICAgIHNlYXJjaC4gRGF0YSBpcyBwcmVsb2FkZWQgdXNpbmcgYSBOZXh0SlMgZnVuY3Rpb257JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2Jhc2ljLWZlYXR1cmVzL2RhdGEtZmV0Y2hpbmcjZ2V0c3RhdGljcHJvcHMtc3RhdGljLWdlbmVyYXRpb24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGdldFN0YXRpY1Byb3BzXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vemVzdHktaW8vZGVtb3MvYmxvYi9tYWluL25leHRqcy9wYWdlcy9zZWFyY2gtZXhhbXBsZS9pbmRleC5qcydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBOZXh0LmpzIHNvdXJjZSBmaWxlIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRGV2ZWxvcGVySGludD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVzdWx0cyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG8gNnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2VUaHVtYiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDM7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNzM2ZDE7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3VsdHNUZXh0IHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlVGh1bWIgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZXN1bHQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgaDQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRvcDogNTYuMjVweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGdyZXkgc29saWQ7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciBpbnB1dCxcbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciBwIHtcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuZmFrZS1nb29nbGUtaGVhZGVyIHAge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG4gICAgICAgIC5mYWtlLWdvb2dsZS1oZWFkZXIgaW1nIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXJcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGg0IGEge1xuICAgICAgICAgIGNvbG9yOiAjMjczNmQxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICBhLnBhdGgge1xuICAgICAgICAgIGNvbG9yOiAjMzRhODUzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICBhLmNhY2hlZCB7XG4gICAgICAgICAgY29sb3I6ICMyNzM2ZDE7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgKTtcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZXM6IFsuLi5kYXRhXSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdfQ== */\n/*@ sourceURL=/home/kilroy/code/zesty-io/colorstreet-poc/pages/search-example/index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(Posts, "RdVTTnxnqzMUgUpV4sMPH4N9R0I=");

_c = Posts;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Posts);

var _c;

$RefreshReg$(_c, "Posts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLWV4YW1wbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdHMiLCJwcm9wcyIsInVzZVN0YXRlIiwic2VhcmNoVmFsIiwic2V0U2VhcmNoVmFsIiwiZmlsdGVyZWRBcnRpY2xlcyIsImFydGljbGVzIiwiZmlsdGVyIiwiYXJ0aWNsZSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImFydCIsInByaW1hcnlfaW1hZ2UiLCJuYW1lIiwicGF0aF9mdWxsIiwiZGVzY3JpcHRpb24iLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwidXJpIiwienVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2NDLCtDQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ2JDLFNBRGE7QUFBQSxNQUNGQyxZQURFOztBQUdwQixNQUFJQyxnQkFBZ0IsR0FBR0osS0FBSyxDQUFDSyxRQUE3Qjs7QUFFQSxNQUFJSCxTQUFTLElBQUksRUFBakIsRUFBcUI7QUFDbkJFLG9CQUFnQixHQUFHQSxnQkFBZ0IsQ0FBQ0UsTUFBakIsQ0FBd0IsVUFBQ0MsT0FBRCxFQUFhO0FBQ3RELFVBQUlBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxXQUFkLEdBQTRCQyxRQUE1QixDQUFxQ1IsU0FBckMsQ0FBSixFQUFxRDtBQUNuRCxlQUFPLElBQVA7QUFDRDtBQUNGLEtBSmtCLENBQW5CO0FBS0Q7O0FBRUQsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFB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O0tBQUFBLEs7O0FBMktULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC1leGFtcGxlLjczNWMyYjY2MWUyMzdhM2QzYzY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEZXZlbG9wZXJIaW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV2ZWxvcGVySGludCc7XG5cbmZ1bmN0aW9uIFBvc3RzKHByb3BzKSB7XG4gIGNvbnN0IFtzZWFyY2hWYWwsIHNldFNlYXJjaFZhbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgbGV0IGZpbHRlcmVkQXJ0aWNsZXMgPSBwcm9wcy5hcnRpY2xlcztcblxuICBpZiAoc2VhcmNoVmFsICE9ICcnKSB7XG4gICAgZmlsdGVyZWRBcnRpY2xlcyA9IGZpbHRlcmVkQXJ0aWNsZXMuZmlsdGVyKChhcnRpY2xlKSA9PiB7XG4gICAgICBpZiAoYXJ0aWNsZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNlYXJjaCBFeGFtcGxlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zha2UtZ29vZ2xlLWhlYWRlcic+XG4gICAgICAgIDxpbWcgc3JjPSdodHRwczovL3d3dy5jb2xvcnN0cmVldC5jb20vY29udGVudC9pbWFnZXMvbG9nby1ob3Jpem9udGFsLmpwZycgd2lkdGg9JzIwMCcgYWx0PSdHb29nbGUnIC8+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoLi4uJ1xuICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdWx0cyc+XG4gICAgICAgIHtmaWx0ZXJlZEFydGljbGVzLm1hcCgoYXJ0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2FydC56dWlkfSBjbGFzc05hbWU9J3Jlc3VsdCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VUaHVtYic+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXthcnQucHJpbWFyeV9pbWFnZX0gYWx0PXthcnQubmFtZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdHNUZXh0Jz5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydC5wYXRoX2Z1bGx9PnthcnQubmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHthcnQuZGVzY3JpcHRpb24ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKS5zdWJzdHJpbmcoMCwgMjAwKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3BhdGgnIGhyZWY9e2FydC51cml9PlxuICAgICAgICAgICAgICAgIHthcnQudXJpfVxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgLXsnICd9XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2FjaGVkJyBocmVmPXthcnQudXJpfT5cbiAgICAgICAgICAgICAgICBDYWNoZWRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8RGV2ZWxvcGVySGludD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+WmVzdHkuaW8gSGludDo8L3N0cm9uZz5cbiAgICAgICAgICAgIFRoaXMgTmV4dEpTIGV4YW1wbGUgdXNlcyBhbiBlbmRwb2ludCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRpbmcgZnJvbSBhXG4gICAgICAgICAgICBaZXN0eS5pbyBjb250ZW50IGluc3RhbmNleycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgaHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vZ3FsL3Byb2R1Y3RzLmpzb25cbiAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgdG8gbG9hZCB0aGUgZGF0YSwgYW5kIHVzZXMgYSBqYXZhc2NyaXB0IGFycmF5IGZpbHRlciB0byBwb3dlciB0aGVcbiAgICAgICAgICAgIHNlYXJjaC4gRGF0YSBpcyBwcmVsb2FkZWQgdXNpbmcgYSBOZXh0SlMgZnVuY3Rpb257JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2Jhc2ljLWZlYXR1cmVzL2RhdGEtZmV0Y2hpbmcjZ2V0c3RhdGljcHJvcHMtc3RhdGljLWdlbmVyYXRpb24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGdldFN0YXRpY1Byb3BzXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vemVzdHktaW8vZGVtb3MvYmxvYi9tYWluL25leHRqcy9wYWdlcy9zZWFyY2gtZXhhbXBsZS9pbmRleC5qcydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBOZXh0LmpzIHNvdXJjZSBmaWxlIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRGV2ZWxvcGVySGludD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVzdWx0cyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG8gNnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2VUaHVtYiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDM7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNzM2ZDE7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3VsdHNUZXh0IHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlVGh1bWIgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZXN1bHQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgaDQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRvcDogNTYuMjVweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGdyZXkgc29saWQ7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciBpbnB1dCxcbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciBwIHtcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuZmFrZS1nb29nbGUtaGVhZGVyIHAge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG4gICAgICAgIC5mYWtlLWdvb2dsZS1oZWFkZXIgaW1nIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXJcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGg0IGEge1xuICAgICAgICAgIGNvbG9yOiAjMjczNmQxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICBhLnBhdGgge1xuICAgICAgICAgIGNvbG9yOiAjMzRhODUzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICBhLmNhY2hlZCB7XG4gICAgICAgICAgY29sb3I6ICMyNzM2ZDE7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgKTtcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZXM6IFsuLi5kYXRhXSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=