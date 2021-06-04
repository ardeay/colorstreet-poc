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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: "/flix/".concat(shows[key].content._path_part),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "jsx-2578695563",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          width: 220,
          height: 160,
          src: shows[key].content.images.data[0].url,
          className: "jsx-2578695563" + " " + "imgHover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
          id: "2578695563",
          children: ".imgHover.jsx-2578695563{-webkit-transition:-webkit-transform .5s ease;-webkit-transition:transform .5s ease;transition:transform .5s ease;}.imgHover.jsx-2578695563:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpbHJveS9jb2RlL3plc3R5LWlvL2NvbG9yc3RyZWV0LXBvYy9wYWdlcy9mbGl4L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCc0IsQUFHMkMsQUFHUiw4RUFDeEIsb0NBSEEiLCJmaWxlIjoiL2hvbWUva2lscm95L2NvZGUvemVzdHktaW8vY29sb3JzdHJlZXQtcG9jL3BhZ2VzL2ZsaXgvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IERldmVsb3BlckhpbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXZlbG9wZXJIaW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBnZW5yZXMsIHNob3dzLCBzaG93c0J5R2VucmUgfSkge1xuICBjb25zdCBbc2VsZWN0ZWRHZW5yZSwgc2V0U2VsZWN0ZWRHZW5yZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlclBvc3RlcihrZXkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsga2V5PXtrZXl9IGhyZWY9e2AvZmxpeC8ke3Nob3dzW2tleV0uY29udGVudC5fcGF0aF9wYXJ0fWB9PlxuICAgICAgICA8YT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nSG92ZXJcIlxuICAgICAgICAgICAgd2lkdGg9ezIyMH1cbiAgICAgICAgICAgIGhlaWdodD17MTYwfVxuICAgICAgICAgICAgc3JjPXtzaG93c1trZXldLmNvbnRlbnQuaW1hZ2VzLmRhdGFbMF0udXJsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5pbWdIb3ZlciB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWdIb3Zlcjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db2xvcnN0cmVldDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwJyAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vd3d3LmNvbG9yc3RyZWV0LmNvbS9jb250ZW50L2ltYWdlcy9sb2dvLWhvcml6b250YWwuanBnJyAvPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdlbnJlc30+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMuZ2VucmUsICFzZWxlY3RlZEdlbnJlID8gc3R5bGVzLmFjdGl2ZSA6IG51bGwpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRHZW5yZSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFsbFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhnZW5yZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgICAgIHN0eWxlcy5nZW5yZSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkR2VucmUgPT09IGtleSA/IHN0eWxlcy5hY3RpdmUgOiBudWxsXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEdlbnJlKGtleSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Z2VucmVzW2tleV0uY29udGVudC5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dzfT5cbiAgICAgICAgICB7IXNlbGVjdGVkR2VucmVcbiAgICAgICAgICAgID8gLy8gU2hvdyBBbGwgTW92aWVzL1Nob3dzXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNob3dzKS5tYXAocmVuZGVyUG9zdGVyKVxuICAgICAgICAgICAgOiAvLyBTaG93IFNob3dzIGJ5IHNlbGVjdGVkIEdlbnJlXG4gICAgICAgICAgICAgIHNob3dzQnlHZW5yZVtzZWxlY3RlZEdlbnJlXSAmJlxuICAgICAgICAgICAgICBzaG93c0J5R2VucmVbc2VsZWN0ZWRHZW5yZV0ubWFwKHJlbmRlclBvc3Rlcil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8RGV2ZWxvcGVySGludD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHN0cm9uZz5aZXN0eS5pbyBIaW50Ojwvc3Ryb25nPiBUaGlzIGlzIGFuIGV4YW1wbGUgdXNpbmcgdGhlIFplc3R5XG4gICAgICAgICAgSW5zdGFudCBBUEkuIFRoZSByZWFjdCBjb21wb25lbnQgaW4gTmV4dEpTLCB1c2VzIHRoZSBnZXRTdGF0aWNQcm9wcygpXG4gICAgICAgICAgZnVuY3Rpb24gdG8gY2FsbCB0d28gc2VwYXJhdGUgY29udGVudCBtb2RlbCBlbmRwb2ludHMuIEl0IHVzZXMgYXsnICd9XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUHJvbWlzZS9hbGwnPlxuICAgICAgICAgICAgUHJvbWlzZS5hbGxcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBjaGFpbiB0byBmZXRjaCB0aGUgZGF0YSBmcm9tIFplc3R5J3MgV2ViRW5naW5leycgJ31cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtYTRkZmE2YzdlYS1oMXdodHEuanNvbic+XG4gICAgICAgICAgICBQcm9kdWN0cyBjb250ZW50IG1vZGVsXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgYW5keycgJ31cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtZDhkOGFlZTVkMC1zdGJwMXouanNvbic+XG4gICAgICAgICAgICBDYXRlZ29yaWVzIGNvbnRlbnQgbW9kZWxcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLiBJdCB0aGVuIHVzZXN7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L1JlZHVjZSc+XG4gICAgICAgICAgICBhcnJheS5yZWR1Y2VcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICB0byBub3JtYWxpemUgdGhlIGRhdGEgaW50byBsb29rdXAgdGFibGUga2V5ZWQgYnkgWlVJRC57JyAnfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS96ZXN0eS1pby9kZW1vcy9ibG9iL21haW4vbmV4dGpzL3BhZ2VzL2ZsaXgvaW5kZXguanMnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBOZXh0LmpzIHNvdXJjZSBmaWxlIGhlcmVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRGV2ZWxvcGVySGludD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBbZ2VucmVzLCBzaG93c10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2goJ2h0dHBzOi8vY29sb3JzdHJlZXRkZW1vLnplc3R5LmRldi8tL2luc3RhbnQvNi1hNGRmYTZjN2VhLWgxd2h0cS5qc29uJylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZ2VucmVzKSA9PlxuICAgICAgICAvLyBHZW5yZXMgbG9va3VwIHRhYmxlIHdpdGggenVpZCBrZXlzXG4gICAgICAgIGdlbnJlcy5kYXRhLnJlZHVjZSgob2JqLCBnZW5yZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGdlbnJlKVxuICAgICAgICAgIG9ialtnZW5yZS5tZXRhLnp1aWRdID0gZ2VucmU7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pXG4gICAgICApLFxuICAgIGZldGNoKCdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtZDhkOGFlZTVkMC1zdGJwMXouanNvbicpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHNob3dzKSA9PlxuICAgICAgICAvLyBTaG93cyBsb29rdXAgdGFibGUgd2l0aCB6dWlkIGtleXNcbiAgICAgICAgc2hvd3MuZGF0YS5yZWR1Y2UoKG9iaiwgc2hvdykgPT4ge1xuICAgICAgICAgIC8vIE9ubHkgaW5jbHVkZSBzaG93cyB3aXRoIGEgcG9zdGVyXG4gICAgICAgICAgaWYgKHNob3cuY29udGVudC5pbWFnZXMpIHtcbiAgICAgICAgICAgIG9ialtzaG93Lm1ldGEuenVpZF0gPSBzaG93O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSlcbiAgICAgICksXG4gIF0pO1xuXG4gIC8vIHNob3dzIGxvb2t1cCB0YWJsZSB3aXRoIGdlbnJlIHp1aWQga2V5cywgdmFsdWVzIGFyZSBhcnJheSBvZiBzaG93IHp1aWRzXG4gIGNvbnN0IHNob3dzQnlHZW5yZSA9IE9iamVjdC5rZXlzKHNob3dzKS5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgY29uc3Qgc2hvdyA9IHNob3dzW2tleV07XG4gICAgc2hvdy5jb250ZW50LmdlbnJlcy5kYXRhLmZvckVhY2goKGdlbnJlKSA9PiB7XG4gICAgICBpZiAoIW9ialtnZW5yZS56dWlkXSkge1xuICAgICAgICBvYmpbZ2VucmUuenVpZF0gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtnZW5yZS56dWlkXS5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGdlbnJlcyxcbiAgICAgIHNob3dzLFxuICAgICAgc2hvd3NCeUdlbnJlLFxuICAgIH0sXG4gIH07XG59XG4iXX0= */\n/*@ sourceURL=/home/kilroy/code/zesty-io/colorstreet-poc/pages/flix/index.js */"
        }, void 0, false, void 0, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, key, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Colorstreet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "https://www.colorstreet.com/content/images/logo-horizontal.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
          lineNumber: 48,
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
            lineNumber: 56,
            columnNumber: 15
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().shows),
        children: !selectedGenre ? // Show All Movies/Shows
        Object.keys(shows).map(renderPoster) : // Show Shows by selected Genre
        showsByGenre[selectedGenre] && showsByGenre[selectedGenre].map(renderPoster)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DeveloperHint__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Zesty.io Hint:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), " This is an example using the Zesty Instant API. The react component in NextJS, uses the getStaticProps() function to call two separate content model endpoints. It uses a", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all",
          children: "Promise.all"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), ' ', "chain to fetch the data from Zesty's WebEngine", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://colorstreetdemo.zesty.dev/-/instant/6-a4dfa6c7ea-h1whtq.json",
          children: "Products content model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), ' ', "and", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://colorstreetdemo.zesty.dev/-/instant/6-d8d8aee5d0-stbp1z.json",
          children: "Categories content model"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), ". It then uses", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",
          children: "array.reduce"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), ' ', "to normalize the data into lookup table keyed by ZUID.", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          target: "_blank",
          href: "https://github.com/zesty-io/demos/blob/main/nextjs/pages/flix/index.js",
          children: "View Next.js source file here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmxpeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiZ2VucmVzIiwic2hvd3MiLCJzaG93c0J5R2VucmUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkR2VucmUiLCJzZXRTZWxlY3RlZEdlbnJlIiwicmVuZGVyUG9zdGVyIiwia2V5IiwiY29udGVudCIsIl9wYXRoX3BhcnQiLCJpbWFnZXMiLCJkYXRhIiwidXJsIiwic3R5bGVzIiwiY3giLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQStDO0FBQUE7O0FBQUE7O0FBQUEsTUFBL0JDLE1BQStCLFFBQS9CQSxNQUErQjtBQUFBLE1BQXZCQyxLQUF1QixRQUF2QkEsS0FBdUI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUFBLGtCQUNsQkMsK0NBQVEsRUFEVTtBQUFBLE1BQ3JEQyxhQURxRDtBQUFBLE1BQ3RDQyxnQkFEc0M7O0FBRzVELFdBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQ3pCLHdCQUNFLDhEQUFDLGtEQUFEO0FBQWdCLFVBQUksa0JBQVdOLEtBQUssQ0FBQ00sR0FBRCxDQUFMLENBQVdDLE9BQVgsQ0FBbUJDLFVBQTlCLENBQXBCO0FBQUEsNkJBQ0U7QUFBQTtBQUFBLGdDQUNFO0FBRUUsZUFBSyxFQUFFLEdBRlQ7QUFHRSxnQkFBTSxFQUFFLEdBSFY7QUFJRSxhQUFHLEVBQUVSLEtBQUssQ0FBQ00sR0FBRCxDQUFMLENBQVdDLE9BQVgsQ0FBbUJFLE1BQW5CLENBQTBCQyxJQUExQixDQUErQixDQUEvQixFQUFrQ0MsR0FKekM7QUFBQSw4Q0FDVTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFBQTtBQUFBO0FBQUE7QUFB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QUFDLHdFQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkVEOztHQXJHdUJQLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmxpeC40OGM0NDkwOGUyZDIwY2VkYjExMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBEZXZlbG9wZXJIaW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV2ZWxvcGVySGludCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZ2VucmVzLCBzaG93cywgc2hvd3NCeUdlbnJlIH0pIHtcbiAgY29uc3QgW3NlbGVjdGVkR2VucmUsIHNldFNlbGVjdGVkR2VucmVdID0gdXNlU3RhdGUoKTtcblxuICBmdW5jdGlvbiByZW5kZXJQb3N0ZXIoa2V5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGtleT17a2V5fSBocmVmPXtgL2ZsaXgvJHtzaG93c1trZXldLmNvbnRlbnQuX3BhdGhfcGFydH1gfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0hvdmVyXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMjB9XG4gICAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICAgIHNyYz17c2hvd3Nba2V5XS5jb250ZW50LmltYWdlcy5kYXRhWzBdLnVybH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW1nSG92ZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nSG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29sb3JzdHJlZXQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCcgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL3d3dy5jb2xvcnN0cmVldC5jb20vY29udGVudC9pbWFnZXMvbG9nby1ob3Jpem9udGFsLmpwZycgLz5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZXN9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmdlbnJlLCAhc2VsZWN0ZWRHZW5yZSA/IHN0eWxlcy5hY3RpdmUgOiBudWxsKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkR2VucmUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBbGxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoZ2VucmVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICBzdHlsZXMuZ2VucmUsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEdlbnJlID09PSBrZXkgPyBzdHlsZXMuYWN0aXZlIDogbnVsbFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRHZW5yZShrZXkpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2dlbnJlc1trZXldLmNvbnRlbnQubmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG93c30+XG4gICAgICAgICAgeyFzZWxlY3RlZEdlbnJlXG4gICAgICAgICAgICA/IC8vIFNob3cgQWxsIE1vdmllcy9TaG93c1xuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzaG93cykubWFwKHJlbmRlclBvc3RlcilcbiAgICAgICAgICAgIDogLy8gU2hvdyBTaG93cyBieSBzZWxlY3RlZCBHZW5yZVxuICAgICAgICAgICAgICBzaG93c0J5R2VucmVbc2VsZWN0ZWRHZW5yZV0gJiZcbiAgICAgICAgICAgICAgc2hvd3NCeUdlbnJlW3NlbGVjdGVkR2VucmVdLm1hcChyZW5kZXJQb3N0ZXIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPERldmVsb3BlckhpbnQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzdHJvbmc+WmVzdHkuaW8gSGludDo8L3N0cm9uZz4gVGhpcyBpcyBhbiBleGFtcGxlIHVzaW5nIHRoZSBaZXN0eVxuICAgICAgICAgIEluc3RhbnQgQVBJLiBUaGUgcmVhY3QgY29tcG9uZW50IGluIE5leHRKUywgdXNlcyB0aGUgZ2V0U3RhdGljUHJvcHMoKVxuICAgICAgICAgIGZ1bmN0aW9uIHRvIGNhbGwgdHdvIHNlcGFyYXRlIGNvbnRlbnQgbW9kZWwgZW5kcG9pbnRzLiBJdCB1c2VzIGF7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb21pc2UvYWxsJz5cbiAgICAgICAgICAgIFByb21pc2UuYWxsXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgY2hhaW4gdG8gZmV0Y2ggdGhlIGRhdGEgZnJvbSBaZXN0eSdzIFdlYkVuZ2luZXsnICd9XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vaW5zdGFudC82LWE0ZGZhNmM3ZWEtaDF3aHRxLmpzb24nPlxuICAgICAgICAgICAgUHJvZHVjdHMgY29udGVudCBtb2RlbFxuICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgIGFuZHsnICd9XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vaW5zdGFudC82LWQ4ZDhhZWU1ZDAtc3RicDF6Lmpzb24nPlxuICAgICAgICAgICAgQ2F0ZWdvcmllcyBjb250ZW50IG1vZGVsXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIC4gSXQgdGhlbiB1c2VzeycgJ31cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9SZWR1Y2UnPlxuICAgICAgICAgICAgYXJyYXkucmVkdWNlXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgdG8gbm9ybWFsaXplIHRoZSBkYXRhIGludG8gbG9va3VwIHRhYmxlIGtleWVkIGJ5IFpVSUQueycgJ31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vemVzdHktaW8vZGVtb3MvYmxvYi9tYWluL25leHRqcy9wYWdlcy9mbGl4L2luZGV4LmpzJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXcgTmV4dC5qcyBzb3VyY2UgZmlsZSBoZXJlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L0RldmVsb3BlckhpbnQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgW2dlbnJlcywgc2hvd3NdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoKCdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtYTRkZmE2YzdlYS1oMXdodHEuanNvbicpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGdlbnJlcykgPT5cbiAgICAgICAgLy8gR2VucmVzIGxvb2t1cCB0YWJsZSB3aXRoIHp1aWQga2V5c1xuICAgICAgICBnZW5yZXMuZGF0YS5yZWR1Y2UoKG9iaiwgZ2VucmUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhnZW5yZSlcbiAgICAgICAgICBvYmpbZ2VucmUubWV0YS56dWlkXSA9IGdlbnJlO1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KVxuICAgICAgKSxcbiAgICBmZXRjaCgnaHR0cHM6Ly9jb2xvcnN0cmVldGRlbW8uemVzdHkuZGV2Ly0vaW5zdGFudC82LWQ4ZDhhZWU1ZDAtc3RicDF6Lmpzb24nKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChzaG93cykgPT5cbiAgICAgICAgLy8gU2hvd3MgbG9va3VwIHRhYmxlIHdpdGggenVpZCBrZXlzXG4gICAgICAgIHNob3dzLmRhdGEucmVkdWNlKChvYmosIHNob3cpID0+IHtcbiAgICAgICAgICAvLyBPbmx5IGluY2x1ZGUgc2hvd3Mgd2l0aCBhIHBvc3RlclxuICAgICAgICAgIGlmIChzaG93LmNvbnRlbnQuaW1hZ2VzKSB7XG4gICAgICAgICAgICBvYmpbc2hvdy5tZXRhLnp1aWRdID0gc2hvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pXG4gICAgICApLFxuICBdKTtcblxuICAvLyBzaG93cyBsb29rdXAgdGFibGUgd2l0aCBnZW5yZSB6dWlkIGtleXMsIHZhbHVlcyBhcmUgYXJyYXkgb2Ygc2hvdyB6dWlkc1xuICBjb25zdCBzaG93c0J5R2VucmUgPSBPYmplY3Qua2V5cyhzaG93cykucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgIGNvbnN0IHNob3cgPSBzaG93c1trZXldO1xuICAgIHNob3cuY29udGVudC5nZW5yZXMuZGF0YS5mb3JFYWNoKChnZW5yZSkgPT4ge1xuICAgICAgaWYgKCFvYmpbZ2VucmUuenVpZF0pIHtcbiAgICAgICAgb2JqW2dlbnJlLnp1aWRdID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbZ2VucmUuenVpZF0ucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBnZW5yZXMsXG4gICAgICBzaG93cyxcbiAgICAgIHNob3dzQnlHZW5yZSxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==