(function() {
var exports = {};
exports.id = "pages/flix";
exports.ids = ["pages/flix"];
exports.modules = {

/***/ "./pages/flix/index.js":
/*!*****************************!*\
  !*** ./pages/flix/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_DeveloperHint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/DeveloperHint */ "./components/DeveloperHint/index.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/kilroy/code/zesty-io/colorstreet-poc/pages/flix/index.js";








function Home({
  categories,
  products,
  showsByGenre
}) {
  const {
    0: selectedGenre,
    1: setSelectedGenre
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();

  function renderPoster(key) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: `/flix/${products[key].content._path_part}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "jsx-2578695563",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          width: 220,
          height: 160,
          src: products[key].content.images.data[0].url,
          className: "jsx-2578695563" + " " + "imgHover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
          id: "2578695563",
          children: ".imgHover.jsx-2578695563{-webkit-transition:-webkit-transform .5s ease;-webkit-transition:transform .5s ease;transition:transform .5s ease;}.imgHover.jsx-2578695563:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpbHJveS9jb2RlL3plc3R5LWlvL2NvbG9yc3RyZWV0LXBvYy9wYWdlcy9mbGl4L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCc0IsQUFHMkMsQUFHUiw4RUFDeEIsb0NBSEEiLCJmaWxlIjoiL2hvbWUva2lscm95L2NvZGUvemVzdHktaW8vY29sb3JzdHJlZXQtcG9jL3BhZ2VzL2ZsaXgvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IERldmVsb3BlckhpbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXZlbG9wZXJIaW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBjYXRlZ29yaWVzLCBwcm9kdWN0cywgc2hvd3NCeUdlbnJlIH0pIHtcbiAgY29uc3QgW3NlbGVjdGVkR2VucmUsIHNldFNlbGVjdGVkR2VucmVdID0gdXNlU3RhdGUoKTtcblxuICBmdW5jdGlvbiByZW5kZXJQb3N0ZXIoa2V5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGtleT17a2V5fSBocmVmPXtgL2ZsaXgvJHtwcm9kdWN0c1trZXldLmNvbnRlbnQuX3BhdGhfcGFydH1gfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0hvdmVyXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMjB9XG4gICAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICAgIHNyYz17cHJvZHVjdHNba2V5XS5jb250ZW50LmltYWdlcy5kYXRhWzBdLnVybH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW1nSG92ZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nSG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29sb3JzdHJlZXQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCcgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL3d3dy5jb2xvcnN0cmVldC5jb20vY29udGVudC9pbWFnZXMvbG9nby1ob3Jpem9udGFsLmpwZycgLz5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZXN9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmdlbnJlLCAhc2VsZWN0ZWRHZW5yZSA/IHN0eWxlcy5hY3RpdmUgOiBudWxsKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkR2VucmUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBbGxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoY2F0ZWdvcmllcykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgc3R5bGVzLmdlbnJlLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRHZW5yZSA9PT0ga2V5ID8gc3R5bGVzLmFjdGl2ZSA6IG51bGxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkR2VucmUoa2V5KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzW2tleV0uY29udGVudC5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dzfT5cbiAgICAgICAgICB7IXNlbGVjdGVkR2VucmVcbiAgICAgICAgICAgID8gLy8gU2hvdyBBbGwgTW92aWVzL1Nob3dzXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb2R1Y3RzKS5tYXAocmVuZGVyUG9zdGVyKVxuICAgICAgICAgICAgOiAvLyBTaG93IFNob3dzIGJ5IHNlbGVjdGVkIEdlbnJlXG4gICAgICAgICAgICAgIHNob3dzQnlHZW5yZVtzZWxlY3RlZEdlbnJlXSAmJlxuICAgICAgICAgICAgICBzaG93c0J5R2VucmVbc2VsZWN0ZWRHZW5yZV0ubWFwKHJlbmRlclBvc3Rlcil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8RGV2ZWxvcGVySGludD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHN0cm9uZz5aZXN0eS5pbyBIaW50Ojwvc3Ryb25nPiBUaGlzIGlzIGFuIGV4YW1wbGUgdXNpbmcgdGhlIFplc3R5XG4gICAgICAgICAgSW5zdGFudCBBUEkuIFRoZSByZWFjdCBjb21wb25lbnQgaW4gTmV4dEpTLCB1c2VzIHRoZSBnZXRTdGF0aWNQcm9wcygpXG4gICAgICAgICAgZnVuY3Rpb24gdG8gY2FsbCB0d28gc2VwYXJhdGUgY29udGVudCBtb2RlbCBlbmRwb2ludHMuIEl0IHVzZXMgYXsnICd9XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUHJvbWlzZS9hbGwnPlxuICAgICAgICAgICAgUHJvbWlzZS5hbGxcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBjaGFpbiB0byBmZXRjaCB0aGUgZGF0YSBmcm9tIFplc3R5J3MgV2ViRW5naW5leycgJ31cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtYTRkZmE2YzdlYS1oMXdodHEuanNvbic+XG4gICAgICAgICAgICBQcm9kdWN0cyBjb250ZW50IG1vZGVsXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgYW5keycgJ31cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtZDhkOGFlZTVkMC1zdGJwMXouanNvbic+XG4gICAgICAgICAgICBDYXRlZ29yaWVzIGNvbnRlbnQgbW9kZWxcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLiBJdCB0aGVuIHVzZXN7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L1JlZHVjZSc+XG4gICAgICAgICAgICBhcnJheS5yZWR1Y2VcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICB0byBub3JtYWxpemUgdGhlIGRhdGEgaW50byBsb29rdXAgdGFibGUga2V5ZWQgYnkgWlVJRC57JyAnfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS96ZXN0eS1pby9kZW1vcy9ibG9iL21haW4vbmV4dGpzL3BhZ2VzL2ZsaXgvaW5kZXguanMnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBOZXh0LmpzIHNvdXJjZSBmaWxlIGhlcmVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRGV2ZWxvcGVySGludD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBbY2F0ZWdvcmllcywgcHJvZHVjdHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoKCdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtYTRkZmE2YzdlYS1oMXdodHEuanNvbicpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGNhdGVnb3JpZXMpID0+XG4gICAgICAgIC8vIEdlbnJlcyBsb29rdXAgdGFibGUgd2l0aCB6dWlkIGtleXNcbiAgICAgICAgY2F0ZWdvcmllcy5kYXRhLnJlZHVjZSgob2JqLCBjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgIG9ialtjYXRlZ29yeS5tZXRhLnp1aWRdID0gY2F0ZWdvcnk7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pXG4gICAgICApLFxuICAgIGZldGNoKCdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtZDhkOGFlZTVkMC1zdGJwMXouanNvbicpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHByb2R1Y3RzKSA9PlxuICAgICAgICAvLyBTaG93cyBsb29rdXAgdGFibGUgd2l0aCB6dWlkIGtleXNcbiAgICAgICAgcHJvZHVjdHMuZGF0YS5yZWR1Y2UoKG9iaiwgc2hvdykgPT4ge1xuICAgICAgICAgIC8vIE9ubHkgaW5jbHVkZSBzaG93cyB3aXRoIGEgcG9zdGVyXG4gICAgICAgICAgaWYgKHByb2R1Y3RzLmNvbnRlbnQuaW1hZ2VzKSB7XG4gICAgICAgICAgICBvYmpbc2hvdy5tZXRhLnp1aWRdID0gc2hvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pXG4gICAgICApLFxuICBdKTtcblxuICAvLyBzaG93cyBsb29rdXAgdGFibGUgd2l0aCBnZW5yZSB6dWlkIGtleXMsIHZhbHVlcyBhcmUgYXJyYXkgb2Ygc2hvdyB6dWlkc1xuICBjb25zdCBzaG93c0J5R2VucmUgPSBPYmplY3Qua2V5cyhwcm9kdWN0cykucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c1trZXldO1xuICAgIHByb2R1Y3QuY29udGVudC5jYXRlZ29yeS5kYXRhLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICBpZiAoIW9ialtjYXRlZ29yeS56dWlkXSkge1xuICAgICAgICBvYmpbY2F0ZWdvcnkuenVpZF0gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtjYXRlZ29yeS56dWlkXS5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgICBwcm9kdWN0cyxcbiAgICAgIHNob3dzQnlHZW5yZSxcbiAgICB9LFxuICB9O1xufVxuIl19 */\n/*@ sourceURL=/home/kilroy/code/zesty-io/colorstreet-poc/pages/flix/index.js */"
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
          onClick: () => setSelectedGenre(),
          children: "All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), Object.keys(categories).map(key => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().genre), selectedGenre === key ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().active) : null),
            onClick: () => setSelectedGenre(key),
            children: categories[key].content.name
          }, key, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().shows),
        children: !selectedGenre ? // Show All Movies/Shows
        Object.keys(products).map(renderPoster) : // Show Shows by selected Genre
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
async function getStaticProps() {
  const [categories, products] = await Promise.all([fetch('https://colorstreetdemo.zesty.dev/-/instant/6-a4dfa6c7ea-h1whtq.json').then(res => res.json()).then(categories => // Genres lookup table with zuid keys
  categories.data.reduce((obj, category) => {
    obj[category.meta.zuid] = category;
    return obj;
  }, {})), fetch('https://colorstreetdemo.zesty.dev/-/instant/6-d8d8aee5d0-stbp1z.json').then(res => res.json()).then(products => // Shows lookup table with zuid keys
  products.data.reduce((obj, show) => {
    // Only include shows with a poster
    if (products.content.images) {
      obj[show.meta.zuid] = show;
    }

    return obj;
  }, {}))]); // shows lookup table with genre zuid keys, values are array of show zuids

  const showsByGenre = Object.keys(products).reduce((obj, key) => {
    const product = products[key];
    product.content.category.data.forEach(category => {
      if (!obj[category.zuid]) {
        obj[category.zuid] = [];
      } else {
        obj[category.zuid].push(key);
      }
    });
    return obj;
  }, {});
  return {
    props: {
      categories,
      products,
      showsByGenre
    }
  };
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"title": "Home_title__3DjR7",
	"genres": "Home_genres__7IzoI",
	"genre": "Home_genre__37EHW",
	"active": "Home_active__32w0w",
	"shows": "Home_shows__1ctDW"
};


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_image_js","components_DeveloperHint_index_js"], function() { return __webpack_exec__("./pages/flix/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvZmxpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2lnbm9yZWR8L2hvbWUva2lscm95L2NvZGUvemVzdHktaW8vY29sb3JzdHJlZXQtcG9jL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSG9tZSIsImNhdGVnb3JpZXMiLCJwcm9kdWN0cyIsInNob3dzQnlHZW5yZSIsInNlbGVjdGVkR2VucmUiLCJzZXRTZWxlY3RlZEdlbnJlIiwidXNlU3RhdGUiLCJyZW5kZXJQb3N0ZXIiLCJrZXkiLCJjb250ZW50IiwiX3BhdGhfcGFydCIsImltYWdlcyIsImRhdGEiLCJ1cmwiLCJzdHlsZXMiLCJjeCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJuYW1lIiwiZ2V0U3RhdGljUHJvcHMiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlZHVjZSIsIm9iaiIsImNhdGVnb3J5IiwibWV0YSIsInp1aWQiLCJzaG93IiwicHJvZHVjdCIsImZvckVhY2giLCJwdXNoIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWM7QUFBRUMsWUFBRjtBQUFjQyxVQUFkO0FBQXdCQztBQUF4QixDQUFkLEVBQXNEO0FBQ25FLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQywrQ0FBUSxFQUFsRDs7QUFFQSxXQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUN6Qix3QkFDRSw4REFBQyxrREFBRDtBQUFnQixVQUFJLEVBQUcsU0FBUU4sUUFBUSxDQUFDTSxHQUFELENBQVIsQ0FBY0MsT0FBZCxDQUFzQkMsVUFBVyxFQUFoRTtBQUFBLDZCQUNFO0FBQUE7QUFBQSxnQ0FDRTtBQUVFLGVBQUssRUFBRSxHQUZUO0FBR0UsZ0JBQU0sRUFBRSxHQUhWO0FBSUUsYUFBRyxFQUFFUixRQUFRLENB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Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2ZsaXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IERldmVsb3BlckhpbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXZlbG9wZXJIaW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBjYXRlZ29yaWVzLCBwcm9kdWN0cywgc2hvd3NCeUdlbnJlIH0pIHtcbiAgY29uc3QgW3NlbGVjdGVkR2VucmUsIHNldFNlbGVjdGVkR2VucmVdID0gdXNlU3RhdGUoKTtcblxuICBmdW5jdGlvbiByZW5kZXJQb3N0ZXIoa2V5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGtleT17a2V5fSBocmVmPXtgL2ZsaXgvJHtwcm9kdWN0c1trZXldLmNvbnRlbnQuX3BhdGhfcGFydH1gfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0hvdmVyXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMjB9XG4gICAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICAgIHNyYz17cHJvZHVjdHNba2V5XS5jb250ZW50LmltYWdlcy5kYXRhWzBdLnVybH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW1nSG92ZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nSG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29sb3JzdHJlZXQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCcgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL3d3dy5jb2xvcnN0cmVldC5jb20vY29udGVudC9pbWFnZXMvbG9nby1ob3Jpem9udGFsLmpwZycgLz5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZXN9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmdlbnJlLCAhc2VsZWN0ZWRHZW5yZSA/IHN0eWxlcy5hY3RpdmUgOiBudWxsKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkR2VucmUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBbGxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoY2F0ZWdvcmllcykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgc3R5bGVzLmdlbnJlLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRHZW5yZSA9PT0ga2V5ID8gc3R5bGVzLmFjdGl2ZSA6IG51bGxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkR2VucmUoa2V5KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzW2tleV0uY29udGVudC5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNob3dzfT5cbiAgICAgICAgICB7IXNlbGVjdGVkR2VucmVcbiAgICAgICAgICAgID8gLy8gU2hvdyBBbGwgTW92aWVzL1Nob3dzXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb2R1Y3RzKS5tYXAocmVuZGVyUG9zdGVyKVxuICAgICAgICAgICAgOiAvLyBTaG93IFNob3dzIGJ5IHNlbGVjdGVkIEdlbnJlXG4gICAgICAgICAgICAgIHNob3dzQnlHZW5yZVtzZWxlY3RlZEdlbnJlXSAmJlxuICAgICAgICAgICAgICBzaG93c0J5R2VucmVbc2VsZWN0ZWRHZW5yZV0ubWFwKHJlbmRlclBvc3Rlcil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8RGV2ZWxvcGVySGludD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHN0cm9uZz5aZXN0eS5pbyBIaW50Ojwvc3Ryb25nPiBUaGlzIGlzIGFuIGV4YW1wbGUgdXNpbmcgdGhlIFplc3R5XG4gICAgICAgICAgSW5zdGFudCBBUEkuIFRoZSByZWFjdCBjb21wb25lbnQgaW4gTmV4dEpTLCB1c2VzIHRoZSBnZXRTdGF0aWNQcm9wcygpXG4gICAgICAgICAgZnVuY3Rpb24gdG8gY2FsbCB0d28gc2VwYXJhdGUgY29udGVudCBtb2RlbCBlbmRwb2ludHMuIEl0IHVzZXMgYXsnICd9XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUHJvbWlzZS9hbGwnPlxuICAgICAgICAgICAgUHJvbWlzZS5hbGxcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBjaGFpbiB0byBmZXRjaCB0aGUgZGF0YSBmcm9tIFplc3R5J3MgV2ViRW5naW5leycgJ31cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtYTRkZmE2YzdlYS1oMXdodHEuanNvbic+XG4gICAgICAgICAgICBQcm9kdWN0cyBjb250ZW50IG1vZGVsXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgYW5keycgJ31cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtZDhkOGFlZTVkMC1zdGJwMXouanNvbic+XG4gICAgICAgICAgICBDYXRlZ29yaWVzIGNvbnRlbnQgbW9kZWxcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLiBJdCB0aGVuIHVzZXN7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L1JlZHVjZSc+XG4gICAgICAgICAgICBhcnJheS5yZWR1Y2VcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICB0byBub3JtYWxpemUgdGhlIGRhdGEgaW50byBsb29rdXAgdGFibGUga2V5ZWQgYnkgWlVJRC57JyAnfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS96ZXN0eS1pby9kZW1vcy9ibG9iL21haW4vbmV4dGpzL3BhZ2VzL2ZsaXgvaW5kZXguanMnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBOZXh0LmpzIHNvdXJjZSBmaWxlIGhlcmVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRGV2ZWxvcGVySGludD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBbY2F0ZWdvcmllcywgcHJvZHVjdHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoKCdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtYTRkZmE2YzdlYS1oMXdodHEuanNvbicpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGNhdGVnb3JpZXMpID0+XG4gICAgICAgIC8vIEdlbnJlcyBsb29rdXAgdGFibGUgd2l0aCB6dWlkIGtleXNcbiAgICAgICAgY2F0ZWdvcmllcy5kYXRhLnJlZHVjZSgob2JqLCBjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgIG9ialtjYXRlZ29yeS5tZXRhLnp1aWRdID0gY2F0ZWdvcnk7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pXG4gICAgICApLFxuICAgIGZldGNoKCdodHRwczovL2NvbG9yc3RyZWV0ZGVtby56ZXN0eS5kZXYvLS9pbnN0YW50LzYtZDhkOGFlZTVkMC1zdGJwMXouanNvbicpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHByb2R1Y3RzKSA9PlxuICAgICAgICAvLyBTaG93cyBsb29rdXAgdGFibGUgd2l0aCB6dWlkIGtleXNcbiAgICAgICAgcHJvZHVjdHMuZGF0YS5yZWR1Y2UoKG9iaiwgc2hvdykgPT4ge1xuICAgICAgICAgIC8vIE9ubHkgaW5jbHVkZSBzaG93cyB3aXRoIGEgcG9zdGVyXG4gICAgICAgICAgaWYgKHByb2R1Y3RzLmNvbnRlbnQuaW1hZ2VzKSB7XG4gICAgICAgICAgICBvYmpbc2hvdy5tZXRhLnp1aWRdID0gc2hvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pXG4gICAgICApLFxuICBdKTtcblxuICAvLyBzaG93cyBsb29rdXAgdGFibGUgd2l0aCBnZW5yZSB6dWlkIGtleXMsIHZhbHVlcyBhcmUgYXJyYXkgb2Ygc2hvdyB6dWlkc1xuICBjb25zdCBzaG93c0J5R2VucmUgPSBPYmplY3Qua2V5cyhwcm9kdWN0cykucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c1trZXldO1xuICAgIHByb2R1Y3QuY29udGVudC5jYXRlZ29yeS5kYXRhLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICBpZiAoIW9ialtjYXRlZ29yeS56dWlkXSkge1xuICAgICAgICBvYmpbY2F0ZWdvcnkuenVpZF0gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtjYXRlZ29yeS56dWlkXS5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgICBwcm9kdWN0cyxcbiAgICAgIHNob3dzQnlHZW5yZSxcbiAgICB9LFxuICB9O1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZ2VucmVzXCI6IFwiSG9tZV9nZW5yZXNfXzdJem9JXCIsXG5cdFwiZ2VucmVcIjogXCJIb21lX2dlbnJlX18zN0VIV1wiLFxuXHRcImFjdGl2ZVwiOiBcIkhvbWVfYWN0aXZlX18zMncwd1wiLFxuXHRcInNob3dzXCI6IFwiSG9tZV9zaG93c19fMWN0RFdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==