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
      if (article.name.toLowerCase().includes(searchVal)) {
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
      children: ".results.jsx-3534732505{padding-top:90px;margin:3rem auto 6rem;}.imageThumb.jsx-3534732505{overflow:hidden;min-width:120px;height:80px;-webkit-box-flex:3;-webkit-flex-grow:3;-ms-flex-positive:3;flex-grow:3;margin-right:10px;border:2px solid #2736d1;}.resultsText.jsx-3534732505{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.imageThumb.jsx-3534732505 img.jsx-3534732505{width:150px;margin-left:-15px;}.result.jsx-3534732505{font-family:Verdana,Arial,sans-serif;margin-bottom:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}h4.jsx-3534732505{margin:0;line-height:14px;margin-bottom:4px;}.fake-google-header.jsx-3534732505{position:absolute;width:100%;top:56.25px;left:0px;border-bottom:2px grey solid;padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.fake-google-header.jsx-3534732505 input.jsx-3534732505,.fake-google-header.jsx-3534732505 p.jsx-3534732505{margin:auto 30px;}.fake-google-header.jsx-3534732505 p.jsx-3534732505{color:grey;}.fake-google-header.jsx-3534732505 img.jsx-3534732505{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}p.jsx-3534732505{font-size:14px;margin:0;}h4.jsx-3534732505 a.jsx-3534732505{color:#2736d1;font-size:18px;}a.path.jsx-3534732505{color:#34a853;font-size:14px;}a.cached.jsx-3534732505{color:#2736d1;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpbHJveS9jb2RlL3plc3R5LWlvL2NvbG9yc3RyZWV0LXBvYy9wYWdlcy9zZWFyY2gtZXhhbXBsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRmtCLEFBRzRCLEFBSUQsQUFRSixBQUdBLEFBSTJCLEFBSzlCLEFBS1MsQUFZRCxBQUdOLEFBSWQsQUFFa0IsQUFJRCxBQUlBLEFBSUEsU0FyQ0csRUFvQm5CLENBN0JvQixFQXVDSCxBQUlBLEFBSUEsQ0FaTixDQTlDTyxDQUpNLEFBeUN4QixDQVphLE1Bc0JiLEVBMUJvQixHQUtOLEFBeUJkLEFBSUEsQUFJQSxDQS9DQSxFQVhjLEtBY08sRUFsQnJCLEVBOEJXLEdBekJHLEFBb0JkLE1BTStCLE1BWmhCLGVBUmYsQUFtQ0EsUUFkZSxhQUNBLHVCQTNCSyxlQWNwQixHQWIyQix5QkFDM0IsUUEwQm1CLGlCQUNLLG1HQUN4QiIsImZpbGUiOiIvaG9tZS9raWxyb3kvY29kZS96ZXN0eS1pby9jb2xvcnN0cmVldC1wb2MvcGFnZXMvc2VhcmNoLWV4YW1wbGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEZXZlbG9wZXJIaW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV2ZWxvcGVySGludCc7XG5cbmZ1bmN0aW9uIFBvc3RzKHByb3BzKSB7XG4gIGNvbnN0IFtzZWFyY2hWYWwsIHNldFNlYXJjaFZhbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgbGV0IGZpbHRlcmVkQXJ0aWNsZXMgPSBwcm9wcy5hcnRpY2xlcztcblxuICBpZiAoc2VhcmNoVmFsICE9ICcnKSB7XG4gICAgZmlsdGVyZWRBcnRpY2xlcyA9IGZpbHRlcmVkQXJ0aWNsZXMuZmlsdGVyKChhcnRpY2xlKSA9PiB7XG4gICAgICBpZiAoYXJ0aWNsZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2VhcmNoIEV4YW1wbGU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmFrZS1nb29nbGUtaGVhZGVyJz5cbiAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vd3d3LmNvbG9yc3RyZWV0LmNvbS9jb250ZW50L2ltYWdlcy9sb2dvLWhvcml6b250YWwuanBnJyB3aWR0aD0nMjAwJyBhbHQ9J0dvb2dsZScgLz5cblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2guLi4nXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bHRzJz5cbiAgICAgICAge2ZpbHRlcmVkQXJ0aWNsZXMubWFwKChhcnQpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17YXJ0Lnp1aWR9IGNsYXNzTmFtZT0ncmVzdWx0Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZVRodW1iJz5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2FydC5wcmltYXJ5X2ltYWdlfSBhbHQ9e2FydC5uYW1lfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdWx0c1RleHQnPlxuICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0LnBhdGhfZnVsbH0+e2FydC5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAge2FydC5kZXNjcmlwdGlvbi5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpLnN1YnN0cmluZygwLCAyMDApfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncGF0aCcgaHJlZj17YXJ0LnVyaX0+XG4gICAgICAgICAgICAgICAge2FydC51cml9XG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICAteycgJ31cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdjYWNoZWQnIGhyZWY9e2FydC51cml9PlxuICAgICAgICAgICAgICAgIENhY2hlZFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxEZXZlbG9wZXJIaW50PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5aZXN0eS5pbyBIaW50Ojwvc3Ryb25nPlxuICAgICAgICAgICAgVGhpcyBOZXh0SlMgZXhhbXBsZSB1c2VzIGFuIGVuZHBvaW50IGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGluZyBmcm9tIGFcbiAgICAgICAgICAgIFplc3R5LmlvIGNvbnRlbnQgaW5zdGFuY2V7JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY29sb3JzdHJlZXRkZW1vLnplc3R5LmRldi8tL2dxbC9wcm9kdWN0cy5qc29uJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvblxuICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICB0byBsb2FkIHRoZSBkYXRhLCBhbmQgdXNlcyBhIGphdmFzY3JpcHQgYXJyYXkgZmlsdGVyIHRvIHBvd2VyIHRoZVxuICAgICAgICAgICAgc2VhcmNoLiBEYXRhIGlzIHByZWxvYWRlZCB1c2luZyBhIE5leHRKUyBmdW5jdGlvbnsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvZGF0YS1mZXRjaGluZyNnZXRzdGF0aWNwcm9wcy1zdGF0aWMtZ2VuZXJhdGlvbidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZ2V0U3RhdGljUHJvcHNcbiAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS96ZXN0eS1pby9kZW1vcy9ibG9iL21haW4vbmV4dGpzL3BhZ2VzL3NlYXJjaC1leGFtcGxlL2luZGV4LmpzJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWaWV3IE5leHQuanMgc291cmNlIGZpbGUgaGVyZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9EZXZlbG9wZXJIaW50PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yZXN1bHRzIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICAgICAgICBtYXJnaW46IDNyZW0gYXV0byA2cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZVRodW1iIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIGZsZXgtZ3JvdzogMztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzI3MzZkMTtcbiAgICAgICAgfVxuICAgICAgICAucmVzdWx0c1RleHQge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2VUaHVtYiBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3VsdCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICBoNCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZmFrZS1nb29nbGUtaGVhZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdG9wOiA1Ni4yNXB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZ3JleSBzb2xpZDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZmFrZS1nb29nbGUtaGVhZGVyIGlucHV0LFxuICAgICAgICAuZmFrZS1nb29nbGUtaGVhZGVyIHAge1xuICAgICAgICAgIG1hcmdpbjogYXV0byAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mYWtlLWdvb2dsZS1oZWFkZXIgcCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIH1cbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciBpbWcge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlclxuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDQgYSB7XG4gICAgICAgICAgY29sb3I6ICMyNzM2ZDE7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIGEucGF0aCB7XG4gICAgICAgICAgY29sb3I6ICMzNGE4NTM7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIGEuY2FjaGVkIHtcbiAgICAgICAgICBjb2xvcjogIzI3MzZkMTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHBzOi8vY29sb3JzdHJlZXRkZW1vLnplc3R5LmRldi8tL2dxbC9wcm9kdWN0cy5qc29uJ1xuICApO1xuICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhcnRpY2xlczogWy4uLmRhdGFdLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xuIl19 */\n/*@ sourceURL=/home/kilroy/code/zesty-io/colorstreet-poc/pages/search-example/index.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLWV4YW1wbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdHMiLCJwcm9wcyIsInVzZVN0YXRlIiwic2VhcmNoVmFsIiwic2V0U2VhcmNoVmFsIiwiZmlsdGVyZWRBcnRpY2xlcyIsImFydGljbGVzIiwiZmlsdGVyIiwiYXJ0aWNsZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiYXJ0IiwicHJpbWFyeV9pbWFnZSIsInBhdGhfZnVsbCIsImRlc2NyaXB0aW9uIiwicmVwbGFjZSIsInN1YnN0cmluZyIsInVyaSIsInp1aWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUFBLGtCQUNjQywrQ0FBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNiQyxTQURhO0FBQUEsTUFDRkMsWUFERTs7QUFHcEIsTUFBSUMsZ0JBQWdCLEdBQUdKLEtBQUssQ0FBQ0ssUUFBN0I7O0FBRUEsTUFBSUgsU0FBUyxJQUFJLEVBQWpCLEVBQXFCO0FBQ25CRSxvQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUNFLE1BQWpCLENBQXdCLFVBQUNDLE9BQUQsRUFBYTtBQUN0RCxVQUFJQSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsV0FBYixHQUEyQkMsUUFBM0IsQ0FBb0NSLFNBQXBDLENBQUosRUFBb0Q7QUFDbEQsZUFBTyxJQUFQO0FBQ0Q7QUFDRixLQUprQixDQUFuQjtBQUtEOztBQUVELHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBQSwwQ0FBZSxv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OztBQTJLVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2gtZXhhbXBsZS4yMzRkNTI0Mjc2ODZmYjJhZDRlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRGV2ZWxvcGVySGludCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldmVsb3BlckhpbnQnO1xuXG5mdW5jdGlvbiBQb3N0cyhwcm9wcykge1xuICBjb25zdCBbc2VhcmNoVmFsLCBzZXRTZWFyY2hWYWxdID0gdXNlU3RhdGUoJycpO1xuXG4gIGxldCBmaWx0ZXJlZEFydGljbGVzID0gcHJvcHMuYXJ0aWNsZXM7XG5cbiAgaWYgKHNlYXJjaFZhbCAhPSAnJykge1xuICAgIGZpbHRlcmVkQXJ0aWNsZXMgPSBmaWx0ZXJlZEFydGljbGVzLmZpbHRlcigoYXJ0aWNsZSkgPT4ge1xuICAgICAgaWYgKGFydGljbGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNlYXJjaCBFeGFtcGxlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zha2UtZ29vZ2xlLWhlYWRlcic+XG4gICAgICAgIDxpbWcgc3JjPSdodHRwczovL3d3dy5jb2xvcnN0cmVldC5jb20vY29udGVudC9pbWFnZXMvbG9nby1ob3Jpem9udGFsLmpwZycgd2lkdGg9JzIwMCcgYWx0PSdHb29nbGUnIC8+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoLi4uJ1xuICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdWx0cyc+XG4gICAgICAgIHtmaWx0ZXJlZEFydGljbGVzLm1hcCgoYXJ0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2FydC56dWlkfSBjbGFzc05hbWU9J3Jlc3VsdCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VUaHVtYic+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXthcnQucHJpbWFyeV9pbWFnZX0gYWx0PXthcnQubmFtZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdHNUZXh0Jz5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydC5wYXRoX2Z1bGx9PnthcnQubmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHthcnQuZGVzY3JpcHRpb24ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKS5zdWJzdHJpbmcoMCwgMjAwKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3BhdGgnIGhyZWY9e2FydC51cml9PlxuICAgICAgICAgICAgICAgIHthcnQudXJpfVxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgLXsnICd9XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2FjaGVkJyBocmVmPXthcnQudXJpfT5cbiAgICAgICAgICAgICAgICBDYWNoZWRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8RGV2ZWxvcGVySGludD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+WmVzdHkuaW8gSGludDo8L3N0cm9uZz5cbiAgICAgICAgICAgIFRoaXMgTmV4dEpTIGV4YW1wbGUgdXNlcyBhbiBlbmRwb2ludCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRpbmcgZnJvbSBhXG4gICAgICAgICAgICBaZXN0eS5pbyBjb250ZW50IGluc3RhbmNleycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgaHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vZ3FsL3Byb2R1Y3RzLmpzb25cbiAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgdG8gbG9hZCB0aGUgZGF0YSwgYW5kIHVzZXMgYSBqYXZhc2NyaXB0IGFycmF5IGZpbHRlciB0byBwb3dlciB0aGVcbiAgICAgICAgICAgIHNlYXJjaC4gRGF0YSBpcyBwcmVsb2FkZWQgdXNpbmcgYSBOZXh0SlMgZnVuY3Rpb257JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2Jhc2ljLWZlYXR1cmVzL2RhdGEtZmV0Y2hpbmcjZ2V0c3RhdGljcHJvcHMtc3RhdGljLWdlbmVyYXRpb24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGdldFN0YXRpY1Byb3BzXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vemVzdHktaW8vZGVtb3MvYmxvYi9tYWluL25leHRqcy9wYWdlcy9zZWFyY2gtZXhhbXBsZS9pbmRleC5qcydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBOZXh0LmpzIHNvdXJjZSBmaWxlIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRGV2ZWxvcGVySGludD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVzdWx0cyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG8gNnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2VUaHVtYiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDM7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNzM2ZDE7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3VsdHNUZXh0IHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlVGh1bWIgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZXN1bHQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgaDQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRvcDogNTYuMjVweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGdyZXkgc29saWQ7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciBpbnB1dCxcbiAgICAgICAgLmZha2UtZ29vZ2xlLWhlYWRlciBwIHtcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuZmFrZS1nb29nbGUtaGVhZGVyIHAge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG4gICAgICAgIC5mYWtlLWdvb2dsZS1oZWFkZXIgaW1nIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXJcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGg0IGEge1xuICAgICAgICAgIGNvbG9yOiAjMjczNmQxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICBhLnBhdGgge1xuICAgICAgICAgIGNvbG9yOiAjMzRhODUzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICBhLmNhY2hlZCB7XG4gICAgICAgICAgY29sb3I6ICMyNzM2ZDE7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9ncWwvcHJvZHVjdHMuanNvbidcbiAgKTtcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZXM6IFsuLi5kYXRhXSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=