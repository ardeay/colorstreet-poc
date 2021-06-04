self["webpackHotUpdate_N_E"]("pages/flix",{

/***/ "./pages/flix/index.js":
/*!*****************************!*\
  !*** ./pages/flix/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_DeveloperHint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/DeveloperHint */ "./components/DeveloperHint/index.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/kilroy/code/zesty-io/colorstreet-poc/pages/flix/index.js",
    _s = $RefreshSig$();









var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var genres = _ref.genres,
      shows = _ref.shows,
      showsByGenre = _ref.showsByGenre;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      selectedGenre = _useState[0],
      setSelectedGenre = _useState[1];

  function renderPoster(key) {
    console.log(shows[key].content);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: "/flix/".concat(shows[key].content._path_part),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "jsx-2578695563",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          width: 220,
          height: 160,
          src: shows[key].content.primary_image.data[0].url,
          className: "jsx-2578695563" + " " + "imgHover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
          id: "2578695563",
          children: ".imgHover.jsx-2578695563{-webkit-transition:-webkit-transform .5s ease;-webkit-transition:transform .5s ease;transition:transform .5s ease;}.imgHover.jsx-2578695563:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpbHJveS9jb2RlL3plc3R5LWlvL2NvbG9yc3RyZWV0LXBvYy9wYWdlcy9mbGl4L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCc0IsQUFHMkMsQUFHUiw4RUFDeEIsb0NBSEEiLCJmaWxlIjoiL2hvbWUva2lscm95L2NvZGUvemVzdHktaW8vY29sb3JzdHJlZXQtcG9jL3BhZ2VzL2ZsaXgvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IERldmVsb3BlckhpbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXZlbG9wZXJIaW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBnZW5yZXMsIHNob3dzLCBzaG93c0J5R2VucmUgfSkge1xuICBjb25zdCBbc2VsZWN0ZWRHZW5yZSwgc2V0U2VsZWN0ZWRHZW5yZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlclBvc3RlcihrZXkpIHtcbiAgICBjb25zb2xlLmxvZyhzaG93c1trZXldLmNvbnRlbnQpXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGtleT17a2V5fSBocmVmPXtgL2ZsaXgvJHtzaG93c1trZXldLmNvbnRlbnQuX3BhdGhfcGFydH1gfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0hvdmVyXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMjB9XG4gICAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICAgIHNyYz17c2hvd3Nba2V5XS5jb250ZW50LnByaW1hcnlfaW1hZ2UuZGF0YVswXS51cmx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmltZ0hvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZ0hvdmVyOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlpGTElYPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0dlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHAnIC8+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly93d3cuY29sb3JzdHJlZXQuY29tL2NvbnRlbnQvaW1hZ2VzL2xvZ28taG9yaXpvbnRhbC5qcGcnIC8+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2VucmVzfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5nZW5yZSwgIXNlbGVjdGVkR2VucmUgPyBzdHlsZXMuYWN0aXZlIDogbnVsbCl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEdlbnJlKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWxsXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge09iamVjdC5rZXlzKGdlbnJlcykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgc3R5bGVzLmdlbnJlLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRHZW5yZSA9PT0ga2V5ID8gc3R5bGVzLmFjdGl2ZSA6IG51bGxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkR2VucmUoa2V5KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtnZW5yZXNba2V5XS5jb250ZW50Lm5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd3N9PlxuICAgICAgICAgIHshc2VsZWN0ZWRHZW5yZVxuICAgICAgICAgICAgPyAvLyBTaG93IEFsbCBNb3ZpZXMvU2hvd3NcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2hvd3MpLm1hcChyZW5kZXJQb3N0ZXIpXG4gICAgICAgICAgICA6IC8vIFNob3cgU2hvd3MgYnkgc2VsZWN0ZWQgR2VucmVcbiAgICAgICAgICAgICAgc2hvd3NCeUdlbnJlW3NlbGVjdGVkR2VucmVdICYmXG4gICAgICAgICAgICAgIHNob3dzQnlHZW5yZVtzZWxlY3RlZEdlbnJlXS5tYXAocmVuZGVyUG9zdGVyKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxEZXZlbG9wZXJIaW50PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Ryb25nPlplc3R5LmlvIEhpbnQ6PC9zdHJvbmc+IFRoaXMgaXMgYW4gZXhhbXBsZSB1c2luZyB0aGUgWmVzdHlcbiAgICAgICAgICBJbnN0YW50IEFQSS4gVGhlIHJlYWN0IGNvbXBvbmVudCBpbiBOZXh0SlMsIHVzZXMgdGhlIGdldFN0YXRpY1Byb3BzKClcbiAgICAgICAgICBmdW5jdGlvbiB0byBjYWxsIHR3byBzZXBhcmF0ZSBjb250ZW50IG1vZGVsIGVuZHBvaW50cy4gSXQgdXNlcyBheycgJ31cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9Qcm9taXNlL2FsbCc+XG4gICAgICAgICAgICBQcm9taXNlLmFsbFxuICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgIGNoYWluIHRvIGZldGNoIHRoZSBkYXRhIGZyb20gWmVzdHkncyBXZWJFbmdpbmV7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vY29sb3JzdHJlZXRkZW1vLnplc3R5LmRldi8tL2luc3RhbnQvNi1hNGRmYTZjN2VhLWgxd2h0cS5qc29uJz5cbiAgICAgICAgICAgIFByb2R1Y3RzIGNvbnRlbnQgbW9kZWxcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBhbmR7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vY29sb3JzdHJlZXRkZW1vLnplc3R5LmRldi8tL2luc3RhbnQvNi1kOGQ4YWVlNWQwLXN0YnAxei5qc29uJz5cbiAgICAgICAgICAgIENhdGVnb3JpZXMgY29udGVudCBtb2RlbFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuIEl0IHRoZW4gdXNlc3snICd9XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvUmVkdWNlJz5cbiAgICAgICAgICAgIGFycmF5LnJlZHVjZVxuICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgIHRvIG5vcm1hbGl6ZSB0aGUgZGF0YSBpbnRvIGxvb2t1cCB0YWJsZSBrZXllZCBieSBaVUlELnsnICd9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3plc3R5LWlvL2RlbW9zL2Jsb2IvbWFpbi9uZXh0anMvcGFnZXMvZmxpeC9pbmRleC5qcydcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3IE5leHQuanMgc291cmNlIGZpbGUgaGVyZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9EZXZlbG9wZXJIaW50PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IFtnZW5yZXMsIHNob3dzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaCgnaHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vaW5zdGFudC82LWE0ZGZhNmM3ZWEtaDF3aHRxLmpzb24nKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChnZW5yZXMpID0+XG4gICAgICAgIC8vIEdlbnJlcyBsb29rdXAgdGFibGUgd2l0aCB6dWlkIGtleXNcbiAgICAgICAgZ2VucmVzLmRhdGEucmVkdWNlKChvYmosIGdlbnJlKSA9PiB7XG4gICAgICAgICAgb2JqW2dlbnJlLm1ldGEuenVpZF0gPSBnZW5yZTtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSlcbiAgICAgICksXG4gICAgZmV0Y2goJ2h0dHBzOi8vY29sb3JzdHJlZXRkZW1vLnplc3R5LmRldi8tL2luc3RhbnQvNi1kOGQ4YWVlNWQwLXN0YnAxei5qc29uJylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoc2hvd3MpID0+XG4gICAgICAgIC8vIFNob3dzIGxvb2t1cCB0YWJsZSB3aXRoIHp1aWQga2V5c1xuICAgICAgICBzaG93cy5kYXRhLnJlZHVjZSgob2JqLCBzaG93KSA9PiB7XG4gICAgICAgICAgLy8gT25seSBpbmNsdWRlIHNob3dzIHdpdGggYSBwb3N0ZXJcbiAgICAgICAgICBpZiAoc2hvdy5jb250ZW50LnByaW1hcnlfaW1hZ2UpIHtcbiAgICAgICAgICAgIG9ialtzaG93Lm1ldGEuenVpZF0gPSBzaG93O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSlcbiAgICAgICksXG4gIF0pO1xuXG4gIC8vIHNob3dzIGxvb2t1cCB0YWJsZSB3aXRoIGdlbnJlIHp1aWQga2V5cywgdmFsdWVzIGFyZSBhcnJheSBvZiBzaG93IHp1aWRzXG4gIGNvbnN0IHNob3dzQnlHZW5yZSA9IE9iamVjdC5rZXlzKHNob3dzKS5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgY29uc3Qgc2hvdyA9IHNob3dzW2tleV07XG4gICAgc2hvdy5jb250ZW50LmdlbnJlcy5kYXRhLmZvckVhY2goKGdlbnJlKSA9PiB7XG4gICAgICBpZiAoIW9ialtnZW5yZS56dWlkXSkge1xuICAgICAgICBvYmpbZ2VucmUuenVpZF0gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtnZW5yZS56dWlkXS5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGdlbnJlcyxcbiAgICAgIHNob3dzLFxuICAgICAgc2hvd3NCeUdlbnJlLFxuICAgIH0sXG4gIH07XG59XG4iXX0= */\n/*@ sourceURL=/home/kilroy/code/zesty-io/colorstreet-poc/pages/flix/index.js */"
        }, void 0, false, void 0, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, key, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "ZFLIX"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "https://www.colorstreet.com/content/images/logo-horizontal.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().genres),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().genre), !selectedGenre ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().active) : null),
          onClick: function onClick() {
            return setSelectedGenre();
          },
          children: "All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), Object.keys(genres).map(function (key) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().genre), selectedGenre === key ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().active) : null),
            onClick: function onClick() {
              return setSelectedGenre(key);
            },
            children: genres[key].content.name
          }, key, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().shows),
        children: !selectedGenre ? // Show All Movies/Shows
        Object.keys(shows).map(renderPoster) : // Show Shows by selected Genre
        showsByGenre[selectedGenre] && showsByGenre[selectedGenre].map(renderPoster)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DeveloperHint__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Zesty.io Hint:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), " This is an example using the Zesty Instant API. The react component in NextJS, uses the getStaticProps() function to call two separate content model endpoints. It uses a", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all",
          children: "Promise.all"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), ' ', "chain to fetch the data from Zesty's WebEngine", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://colorstreetdemo.zesty.dev/-/instant/6-a4dfa6c7ea-h1whtq.json",
          children: "Products content model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), ' ', "and", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://colorstreetdemo.zesty.dev/-/instant/6-d8d8aee5d0-stbp1z.json",
          children: "Categories content model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), ". It then uses", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",
          children: "array.reduce"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), ' ', "to normalize the data into lookup table keyed by ZUID.", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          target: "_blank",
          href: "https://github.com/zesty-io/demos/blob/main/nextjs/pages/flix/index.js",
          children: "View Next.js source file here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(Home, "Aw6rfkx19iN/izIOeC8ahXO+mLs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmxpeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiZ2VucmVzIiwic2hvd3MiLCJzaG93c0J5R2VucmUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkR2VucmUiLCJzZXRTZWxlY3RlZEdlbnJlIiwicmVuZGVyUG9zdGVyIiwia2V5IiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJfcGF0aF9wYXJ0IiwicHJpbWFyeV9pbWFnZSIsImRhdGEiLCJ1cmwiLCJzdHlsZXMiLCJjeCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBK0M7QUFBQTs7QUFBQTs7QUFBQSxNQUEvQkMsTUFBK0IsUUFBL0JBLE1BQStCO0FBQUEsTUFBdkJDLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEsa0JBQ2xCQywrQ0FBUSxFQURVO0FBQUEsTUFDckRDLGFBRHFEO0FBQUEsTUFDdENDLGdCQURzQzs7QUFHNUQsV0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkI7QUFDekJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFLLENBQUNNLEdBQUQsQ0FBTCxDQUFXRyxPQUF2QjtBQUNBLHdCQUNFLDhEQUFDLGtEQUFEO0FBQWdCLFVBQUksa0JBQVdULEtBQUssQ0FBQ00sR0FBRCxDQUFMLENBQVdHLE9BQVgsQ0FBbUJDLFVBQTlCLENBQXBCO0FBQUEsNkJBQ0U7QUFBQTtBQUFBLGdDQUNFO0FBRUUsZUFBSyxFQUFFLEdBRlQ7QUFHRSxnQkFBTSxFQUFFLEdBSFY7QUFJRSxhQUFHLEVBQUVWLEtBQUssQ0FBQ00sR0FBRCxDQUFMLENBQVdHLE9BQVgsQ0FBbUJFLGFBQW5CLENBQWlDQyxJQUFqQyxDQUFzQyxDQUF0QyxFQUF5Q0MsR0FKaEQ7QUFBQSw4Q0FDVTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBV1AsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFvQkQ7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVRLDBFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQU0sZUFBUyxFQUFFQSxxRUFBakI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVBLHNFQUFmO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFQSx1RUFBaEI7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUVDLGlEQUFFLENBQUNELHNFQUFELEVBQWUsQ0FBQ1gsYUFBRCxHQUFpQlcsdUVBQWpCLEdBQWlDLElBQWhELENBRGY7QUFFRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1WLGdCQUFnQixFQUF0QjtBQUFBLFdBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFPR1ksTUFBTSxDQUFDQyxJQUFQLENBQVlsQixNQUFaLEVBQW9CbUIsR0FBcEIsQ0FBd0IsVUFBQ1osR0FBRCxFQUFTO0FBQ2hDLDhCQUNFO0FBRUUscUJBQVMsRUFBRVMsaURBQUUsQ0FDWEQsc0VBRFcsRUFFWFgsYUFBYSxLQUFLRyxHQUFsQixHQUF3QlEsdUVBQXhCLEdBQXdDLElBRjdCLENBRmY7QUFNRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1WLGdCQUFnQixDQUFDRSxHQUFELENBQXRCO0FBQUEsYUFOWDtBQUFBLHNCQVFHUCxNQUFNLENBQUNPLEdBQUQsQ0FBTixDQUFZRyxPQUFaLENBQW9CVTtBQVJ2QixhQUNPYixHQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFZRCxTQWJBLENBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUEwQkU7QUFBSyxpQkFBUyxFQUFFUSxzRUFBaEI7QUFBQSxrQkFDRyxDQUFDWCxhQUFELEdBQ0c7QUFDQWEsY0FBTSxDQUFDQyxJQUFQLENBQVlqQixLQUFaLEVBQW1Ca0IsR0FBbkIsQ0FBdUJiLFlBQXZCLENBRkgsR0FHRztBQUNBSixvQkFBWSxDQUFDRSxhQUFELENBQVosSUFDQUYsWUFBWSxDQUFDRSxhQUFELENBQVosQ0FBNEJlLEdBQTVCLENBQWdDYixZQUFoQztBQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUEyQ0UsOERBQUMsOERBQUQ7QUFBQSw2QkFDRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGdMQUdtRSxHQUhuRSxlQUlFO0FBQUcsY0FBSSxFQUFDLDhGQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLEVBTU8sR0FOUCxvREFPaUQsR0FQakQsZUFRRTtBQUFHLGNBQUksRUFBQyxzRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixFQVVPLEdBVlAsU0FXTSxHQVhOLGVBWUU7QUFBRyxjQUFJLEVBQUMsc0VBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkYsb0JBZWlCLEdBZmpCLGVBZ0JFO0FBQUcsY0FBSSxFQUFDLCtGQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCRixFQWtCTyxHQWxCUCw0REFtQnlELEdBbkJ6RCxlQW9CRTtBQUNFLGdCQUFNLEVBQUMsUUFEVDtBQUVFLGNBQUksRUFBQyx3RUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJFRDs7R0F0R3VCUCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZsaXguZjZlNmY4ZDNlNGJhODcwNmRjNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRGV2ZWxvcGVySGludCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldmVsb3BlckhpbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGdlbnJlcywgc2hvd3MsIHNob3dzQnlHZW5yZSB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZEdlbnJlLCBzZXRTZWxlY3RlZEdlbnJlXSA9IHVzZVN0YXRlKCk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyUG9zdGVyKGtleSkge1xuICAgIGNvbnNvbGUubG9nKHNob3dzW2tleV0uY29udGVudClcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsga2V5PXtrZXl9IGhyZWY9e2AvZmxpeC8ke3Nob3dzW2tleV0uY29udGVudC5fcGF0aF9wYXJ0fWB9PlxuICAgICAgICA8YT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nSG92ZXJcIlxuICAgICAgICAgICAgd2lkdGg9ezIyMH1cbiAgICAgICAgICAgIGhlaWdodD17MTYwfVxuICAgICAgICAgICAgc3JjPXtzaG93c1trZXldLmNvbnRlbnQucHJpbWFyeV9pbWFnZS5kYXRhWzBdLnVybH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW1nSG92ZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nSG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+WkZMSVg8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCcgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL3d3dy5jb2xvcnN0cmVldC5jb20vY29udGVudC9pbWFnZXMvbG9nby1ob3Jpem9udGFsLmpwZycgLz5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZXN9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmdlbnJlLCAhc2VsZWN0ZWRHZW5yZSA/IHN0eWxlcy5hY3RpdmUgOiBudWxsKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkR2VucmUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBbGxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoZ2VucmVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICBzdHlsZXMuZ2VucmUsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEdlbnJlID09PSBrZXkgPyBzdHlsZXMuYWN0aXZlIDogbnVsbFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRHZW5yZShrZXkpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2dlbnJlc1trZXldLmNvbnRlbnQubmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93c30+XG4gICAgICAgICAgeyFzZWxlY3RlZEdlbnJlXG4gICAgICAgICAgICA/IC8vIFNob3cgQWxsIE1vdmllcy9TaG93c1xuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzaG93cykubWFwKHJlbmRlclBvc3RlcilcbiAgICAgICAgICAgIDogLy8gU2hvdyBTaG93cyBieSBzZWxlY3RlZCBHZW5yZVxuICAgICAgICAgICAgICBzaG93c0J5R2VucmVbc2VsZWN0ZWRHZW5yZV0gJiZcbiAgICAgICAgICAgICAgc2hvd3NCeUdlbnJlW3NlbGVjdGVkR2VucmVdLm1hcChyZW5kZXJQb3N0ZXIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPERldmVsb3BlckhpbnQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzdHJvbmc+WmVzdHkuaW8gSGludDo8L3N0cm9uZz4gVGhpcyBpcyBhbiBleGFtcGxlIHVzaW5nIHRoZSBaZXN0eVxuICAgICAgICAgIEluc3RhbnQgQVBJLiBUaGUgcmVhY3QgY29tcG9uZW50IGluIE5leHRKUywgdXNlcyB0aGUgZ2V0U3RhdGljUHJvcHMoKVxuICAgICAgICAgIGZ1bmN0aW9uIHRvIGNhbGwgdHdvIHNlcGFyYXRlIGNvbnRlbnQgbW9kZWwgZW5kcG9pbnRzLiBJdCB1c2VzIGF7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb21pc2UvYWxsJz5cbiAgICAgICAgICAgIFByb21pc2UuYWxsXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgY2hhaW4gdG8gZmV0Y2ggdGhlIGRhdGEgZnJvbSBaZXN0eSdzIFdlYkVuZ2luZXsnICd9XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vaW5zdGFudC82LWE0ZGZhNmM3ZWEtaDF3aHRxLmpzb24nPlxuICAgICAgICAgICAgUHJvZHVjdHMgY29udGVudCBtb2RlbFxuICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgIGFuZHsnICd9XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vaW5zdGFudC82LWQ4ZDhhZWU1ZDAtc3RicDF6Lmpzb24nPlxuICAgICAgICAgICAgQ2F0ZWdvcmllcyBjb250ZW50IG1vZGVsXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIC4gSXQgdGhlbiB1c2VzeycgJ31cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9SZWR1Y2UnPlxuICAgICAgICAgICAgYXJyYXkucmVkdWNlXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgdG8gbm9ybWFsaXplIHRoZSBkYXRhIGludG8gbG9va3VwIHRhYmxlIGtleWVkIGJ5IFpVSUQueycgJ31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vemVzdHktaW8vZGVtb3MvYmxvYi9tYWluL25leHRqcy9wYWdlcy9mbGl4L2luZGV4LmpzJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXcgTmV4dC5qcyBzb3VyY2UgZmlsZSBoZXJlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L0RldmVsb3BlckhpbnQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgW2dlbnJlcywgc2hvd3NdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoKCdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtYTRkZmE2YzdlYS1oMXdodHEuanNvbicpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGdlbnJlcykgPT5cbiAgICAgICAgLy8gR2VucmVzIGxvb2t1cCB0YWJsZSB3aXRoIHp1aWQga2V5c1xuICAgICAgICBnZW5yZXMuZGF0YS5yZWR1Y2UoKG9iaiwgZ2VucmUpID0+IHtcbiAgICAgICAgICBvYmpbZ2VucmUubWV0YS56dWlkXSA9IGdlbnJlO1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KVxuICAgICAgKSxcbiAgICBmZXRjaCgnaHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vaW5zdGFudC82LWQ4ZDhhZWU1ZDAtc3RicDF6Lmpzb24nKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChzaG93cykgPT5cbiAgICAgICAgLy8gU2hvd3MgbG9va3VwIHRhYmxlIHdpdGggenVpZCBrZXlzXG4gICAgICAgIHNob3dzLmRhdGEucmVkdWNlKChvYmosIHNob3cpID0+IHtcbiAgICAgICAgICAvLyBPbmx5IGluY2x1ZGUgc2hvd3Mgd2l0aCBhIHBvc3RlclxuICAgICAgICAgIGlmIChzaG93LmNvbnRlbnQucHJpbWFyeV9pbWFnZSkge1xuICAgICAgICAgICAgb2JqW3Nob3cubWV0YS56dWlkXSA9IHNob3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KVxuICAgICAgKSxcbiAgXSk7XG5cbiAgLy8gc2hvd3MgbG9va3VwIHRhYmxlIHdpdGggZ2VucmUgenVpZCBrZXlzLCB2YWx1ZXMgYXJlIGFycmF5IG9mIHNob3cgenVpZHNcbiAgY29uc3Qgc2hvd3NCeUdlbnJlID0gT2JqZWN0LmtleXMoc2hvd3MpLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgICBjb25zdCBzaG93ID0gc2hvd3Nba2V5XTtcbiAgICBzaG93LmNvbnRlbnQuZ2VucmVzLmRhdGEuZm9yRWFjaCgoZ2VucmUpID0+IHtcbiAgICAgIGlmICghb2JqW2dlbnJlLnp1aWRdKSB7XG4gICAgICAgIG9ialtnZW5yZS56dWlkXSA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2dlbnJlLnp1aWRdLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZ2VucmVzLFxuICAgICAgc2hvd3MsXG4gICAgICBzaG93c0J5R2VucmUsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=