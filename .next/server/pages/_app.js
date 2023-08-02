/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const carritoLS =  false ? 0 : [];\n    const { 0: carrito , 1: setCarrito  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(carritoLS);\n    const { 0: paginaLista , 1: setPaginaLista  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false) //para lo  de hidratación\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPaginaLista(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    }, [\n        carrito\n    ]);\n    const agregarCarrito = (sandalia)=>{\n        // Comprobar si la sandalia ya esta en el carrito...\n        if (carrito.some((sandaliaState)=>sandaliaState.id === sandalia.id)) {\n            // Iterar para actualizar la cantidad\n            const carritoActualizado = carrito.map((sandaliaState)=>{\n                if (sandaliaState.id === sandalia.id) {\n                    sandaliaState.cantidad = sandalia.cantidad;\n                }\n                return sandaliaState;\n            });\n            // Se asigna al array\n            setCarrito([\n                ...carritoActualizado\n            ]);\n            localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n        } else {\n            // En caso de que el articulo no exista, es nuevo y se agrega\n            setCarrito([\n                ...carrito,\n                sandalia\n            ]);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Agregado al carrito \\uD83E\\uDD70\");\n            localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n        }\n    };\n    const eliminarProducto = (id)=>{\n        const carritoActualizado = carrito.filter((producto)=>producto.id != id);\n        setCarrito(carritoActualizado);\n        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Eliminado del carrito \\uD83D\\uDE2D\");\n        window.localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    };\n    const actualizarCantidad = (sandalia)=>{\n        const carritoActualizado = carrito.map((sandaliaState)=>{\n            if (sandaliaState.id === sandalia.id) {\n                sandaliaState.cantidad = parseInt(sandalia.cantidad);\n            }\n            return sandaliaState;\n        });\n        setCarrito(carritoActualizado);\n        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Carrito actualizado \\uD83D\\uDE04\");\n        window.localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    };\n    return paginaLista ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        carrito: carrito,\n        agregarCarrito: agregarCarrito,\n        eliminarProducto: eliminarProducto,\n        actualizarCantidad: actualizarCantidad\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\steven\\\\Desktop\\\\blog\\\\pruebas\\\\tienda\\\\tiendaSandalias\\\\pages\\\\_app.js\",\n        lineNumber: 58,\n        columnNumber: 24\n    }, this) : null;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hELENBQUM7WUFDRCxPQUFPSixhQUFhO1FBQ3RCLENBQUMsQ0FBQztRQUNGUixVQUFVLENBQUNVLGtCQUFrQixDQUFDO1FBQzlCcEIseURBQWEsQ0FBQyxrQ0FBdUIsQ0FBQztRQUN0QzJCLE1BQU0sQ0FBQ3BCLFlBQVksQ0FBQ00sT0FBTyxDQUFDLFNBQVMsRUFBRVIsSUFBSSxDQUFDUyxTQUFTLENBQUVMLE9BQU8sQ0FBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVDLE9BQU9FLFdBQVcsaUJBQUcsOERBQUNULFNBQVM7UUFBRSxHQUFHQyxTQUFTO1FBQzdDTSxPQUFPLEVBQUVBLE9BQU87UUFDaEJNLGNBQWMsRUFBRUEsY0FBYztRQUM5QlMsZ0JBQWdCLEVBQUVBLGdCQUFnQjtRQUNsQ0ksa0JBQWtCLEVBQUVBLGtCQUFrQjs7Ozs7WUFDbkMsR0FBRyxJQUFJO0FBRVosQ0FBQztBQUVELGlFQUFlM0IsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBjYXJyaXRvTFMgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnJpdG8nKSkgID8/IFtdIDogW11cbiAgY29uc3QgW2NhcnJpdG8sIHNldENhcnJpdG9dID0gdXNlU3RhdGUoY2Fycml0b0xTKVxuICBjb25zdCBbcGFnaW5hTGlzdGEsIHNldFBhZ2luYUxpc3RhXSA9IHVzZVN0YXRlKGZhbHNlKSAvL3BhcmEgbG8gIGRlIGhpZHJhdGFjacOzblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnaW5hTGlzdGEodHJ1ZSlcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLCBKU09OLnN0cmluZ2lmeShjYXJyaXRvKSlcbiAgfSwgW2NhcnJpdG9dKVxuXG4gIGNvbnN0IGFncmVnYXJDYXJyaXRvID0gc2FuZGFsaWEgPT4ge1xuICAgIC8vIENvbXByb2JhciBzaSBsYSBzYW5kYWxpYSB5YSBlc3RhIGVuIGVsIGNhcnJpdG8uLi5cbiAgICBpZihjYXJyaXRvLnNvbWUoIHNhbmRhbGlhU3RhdGUgPT4gIHNhbmRhbGlhU3RhdGUuaWQgPT09IHNhbmRhbGlhLmlkICkpIHtcbiAgICAgICAgLy8gSXRlcmFyIHBhcmEgYWN0dWFsaXphciBsYSBjYW50aWRhZFxuICAgICAgICBjb25zdCBjYXJyaXRvQWN0dWFsaXphZG8gPSBjYXJyaXRvLm1hcCggc2FuZGFsaWFTdGF0ZSA9PiB7XG4gICAgICAgICAgICBpZiggc2FuZGFsaWFTdGF0ZS5pZCA9PT0gc2FuZGFsaWEuaWQgKSB7XG4gICAgICAgICAgICAgICAgc2FuZGFsaWFTdGF0ZS5jYW50aWRhZCA9IHNhbmRhbGlhLmNhbnRpZGFkO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJldHVybiBzYW5kYWxpYVN0YXRlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gU2UgYXNpZ25hIGFsIGFycmF5XG4gICAgICAgIHNldENhcnJpdG8oWy4uLmNhcnJpdG9BY3R1YWxpemFkb10pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2Fycml0bycsIEpTT04uc3RyaW5naWZ5KCBjYXJyaXRvICkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVuIGNhc28gZGUgcXVlIGVsIGFydGljdWxvIG5vIGV4aXN0YSwgZXMgbnVldm8geSBzZSBhZ3JlZ2FcbiAgICAgICAgc2V0Q2Fycml0byhbLi4uY2Fycml0bywgc2FuZGFsaWFdKTtcbiAgICAgICAgdG9hc3Quc3VjY2VzcygnQWdyZWdhZG8gYWwgY2Fycml0byDwn6WwJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLCBKU09OLnN0cmluZ2lmeSggY2Fycml0byApKTtcbiAgICB9XG59XG5cbmNvbnN0IGVsaW1pbmFyUHJvZHVjdG8gPSBpZCA9PiB7XG4gICAgY29uc3QgY2Fycml0b0FjdHVhbGl6YWRvID0gY2Fycml0by5maWx0ZXIoIHByb2R1Y3RvID0+IHByb2R1Y3RvLmlkICE9IGlkKVxuICAgIHNldENhcnJpdG8oY2Fycml0b0FjdHVhbGl6YWRvKVxuICAgIHRvYXN0LnN1Y2Nlc3MoJ0VsaW1pbmFkbyBkZWwgY2Fycml0byDwn5itJylcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLCBKU09OLnN0cmluZ2lmeSggY2Fycml0byApKTtcbn1cblxuY29uc3QgYWN0dWFsaXphckNhbnRpZGFkID0gc2FuZGFsaWEgPT4ge1xuICBjb25zdCBjYXJyaXRvQWN0dWFsaXphZG8gPSBjYXJyaXRvLm1hcCggc2FuZGFsaWFTdGF0ZSA9PiB7XG4gICAgaWYoc2FuZGFsaWFTdGF0ZS5pZCA9PT0gc2FuZGFsaWEuaWQgKSB7XG4gICAgICBzYW5kYWxpYVN0YXRlLmNhbnRpZGFkID0gcGFyc2VJbnQoIHNhbmRhbGlhLmNhbnRpZGFkIClcbiAgICB9IFxuICAgIHJldHVybiBzYW5kYWxpYVN0YXRlXG4gIH0pXG4gIHNldENhcnJpdG8oY2Fycml0b0FjdHVhbGl6YWRvKVxuICB0b2FzdC5zdWNjZXNzKCdDYXJyaXRvIGFjdHVhbGl6YWRvIPCfmIQnKVxuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLCBKU09OLnN0cmluZ2lmeSggY2Fycml0byApKTtcbn1cblxuICByZXR1cm4gcGFnaW5hTGlzdGEgPyA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9XG4gIGNhcnJpdG89e2NhcnJpdG99XG4gIGFncmVnYXJDYXJyaXRvPXthZ3JlZ2FyQ2Fycml0b31cbiAgZWxpbWluYXJQcm9kdWN0bz17ZWxpbWluYXJQcm9kdWN0b31cbiAgYWN0dWFsaXphckNhbnRpZGFkPXthY3R1YWxpemFyQ2FudGlkYWR9XG4gICAvPiA6IG51bGxcbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2Fycml0b0xTIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNhcnJpdG8iLCJzZXRDYXJyaXRvIiwicGFnaW5hTGlzdGEiLCJzZXRQYWdpbmFMaXN0YSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZ3JlZ2FyQ2Fycml0byIsInNhbmRhbGlhIiwic29tZSIsInNhbmRhbGlhU3RhdGUiLCJpZCIsImNhcnJpdG9BY3R1YWxpemFkbyIsIm1hcCIsImNhbnRpZGFkIiwic3VjY2VzcyIsImVsaW1pbmFyUHJvZHVjdG8iLCJmaWx0ZXIiLCJwcm9kdWN0byIsIndpbmRvdyIsImFjdHVhbGl6YXJDYW50aWRhZCIsInBhcnNlSW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();