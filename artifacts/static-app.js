(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Typography");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Box");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(16);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(63);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(65);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(23);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(22);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(17);

var _helpers = __webpack_require__(66);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(62)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Container");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Link");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Grid");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(17);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(64)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Button");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(13);

// CONCATENATED MODULE: /Users/marcelhacker/Documents/source/megalodon-material/src/components/Router.js

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(38);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(39);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(5);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(40);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(20);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(4);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(41);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var icons_material_Menu_ = __webpack_require__(42);
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_);

// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(8);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(12);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(43);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(44);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: /Users/marcelhacker/Documents/source/megalodon-material/public/logo.png
var logo = __webpack_require__(45);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: external "@mui/icons-material/Instagram"
var Instagram_ = __webpack_require__(46);
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_);

// CONCATENATED MODULE: /Users/marcelhacker/Documents/source/megalodon-material/src/components/shared/Navbar.js















var pages = ["Preise", "Qualifikationen"];

var Navbar_Navbar = function Navbar() {
  var _React$useState = external_react_["useState"](null),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      anchorElNav = _React$useState2[0],
      setAnchorElNav = _React$useState2[1];

  var handleOpenNavMenu = function handleOpenNavMenu(event) {
    console.log(event);
    setAnchorElNav(event.currentTarget);
  };

  var handleOpenUserMenu = function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget);
  };

  var handleCloseNavMenu = function handleCloseNavMenu() {
    setAnchorElNav(null);
  };

  return /*#__PURE__*/external_react_["createElement"](AppBar_default.a, {
    position: "static"
  }, /*#__PURE__*/external_react_["createElement"](Container_default.a, {
    maxWidth: "xl"
  }, /*#__PURE__*/external_react_["createElement"](Toolbar_default.a, {
    disableGutters: true
  }, /*#__PURE__*/external_react_["createElement"]("img", {
    src: logo_default.a,
    width: "50px",
    height: "50px"
  }), /*#__PURE__*/external_react_["createElement"](Typography_default.a, {
    variant: "h6",
    noWrap: true,
    component: "a",
    href: "/",
    sx: {
      mr: 2,
      display: {
        xs: "none",
        md: "flex"
      },
      fontFamily: "monospace",
      fontWeight: 700,
      letterSpacing: ".3rem",
      color: "inherit",
      textDecoration: "none"
    }
  }, "MEGALODON"), /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    sx: {
      flexGrow: 1,
      display: {
        xs: "flex",
        md: "none"
      }
    }
  }, /*#__PURE__*/external_react_["createElement"](IconButton_default.a, {
    size: "large",
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleOpenNavMenu,
    color: "inherit"
  }, /*#__PURE__*/external_react_["createElement"](icons_material_Menu_default.a, null)), /*#__PURE__*/external_react_["createElement"](Menu_default.a, {
    id: "menu-appbar",
    anchorEl: anchorElNav,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    open: Boolean(anchorElNav),
    onClose: handleCloseNavMenu,
    sx: {
      display: {
        xs: "block",
        md: "none"
      }
    }
  }, pages.map(function (page) {
    return /*#__PURE__*/external_react_["createElement"](MenuItem_default.a, {
      key: page,
      onClick: handleCloseNavMenu
    }, /*#__PURE__*/external_react_["createElement"](Typography_default.a, {
      textAlign: "center"
    }, page));
  }))), /*#__PURE__*/external_react_["createElement"](Typography_default.a, {
    variant: "h5",
    noWrap: true,
    component: "a",
    href: "",
    sx: {
      mr: 2,
      display: {
        xs: "flex",
        md: "none"
      },
      flexGrow: 1,
      fontFamily: "monospace",
      fontWeight: 700,
      letterSpacing: ".3rem",
      color: "inherit",
      textDecoration: "none"
    }
  }, "MEGALODON COACHING"), /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    sx: {
      flexGrow: 1,
      display: {
        xs: "none",
        md: "flex"
      }
    }
  }, pages.map(function (page) {
    return /*#__PURE__*/external_react_["createElement"](Button_default.a, {
      key: page,
      onClick: handleCloseNavMenu,
      sx: {
        my: 2,
        color: "white",
        display: "block"
      },
      href: "/" + page.toLowerCase()
    }, page);
  })), /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    sx: {
      flexGrow: 0
    },
    className: "mr-1",
    style: {
      "margin-right": "1em"
    }
  }, /*#__PURE__*/external_react_["createElement"](Button_default.a, {
    variant: "contained",
    size: "medium",
    borderColor: "#ffffff",
    sx: {
      color: "#ffffff",
      "border-color": "#ffffff",
      "background-color": "grey"
    },
    backgroundColor: "grey",
    href: "mailto:megalodoncoaching@gmail.com?subject=Anfrage"
  }, "Anfrage")), /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    sx: {
      flexGrow: 0
    }
  }, /*#__PURE__*/external_react_["createElement"](Tooltip_default.a, {
    title: "megalodon_coaching"
  }, /*#__PURE__*/external_react_["createElement"](IconButton_default.a, {
    onClick: handleOpenUserMenu,
    sx: {
      p: 0
    },
    href: "https://www.instagram.com/megalodon_coaching/"
  }, /*#__PURE__*/external_react_["createElement"](Instagram_default.a, {
    sx: {
      color: "#ffffff"
    },
    fontSize: "large"
  })))))));
};

/* harmony default export */ var shared_Navbar = (Navbar_Navbar);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(9);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(47);

// CONCATENATED MODULE: /Users/marcelhacker/Documents/source/megalodon-material/src/components/shared/Footer.js







function Copyright() {
  return /*#__PURE__*/external_react_["createElement"](Typography_default.a, {
    variant: "body2",
    color: "text.secondary"
  }, "Copyright © ", /*#__PURE__*/external_react_["createElement"](Link_default.a, {
    color: "inherit",
    href: "https://megalodon-coaching.com/"
  }, "Marcel Hacker"), " ", new Date().getFullYear(), ".");
}

function StickyFooter() {
  return /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    component: "footer",
    sx: {
      py: 3,
      px: 2,
      mt: "auto",
      ml: "3px",
      backgroundColor: function backgroundColor(theme) {
        return theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800];
      }
    }
  }, /*#__PURE__*/external_react_["createElement"](Container_default.a, {
    maxWidth: "sm"
  }, /*#__PURE__*/external_react_["createElement"](Typography_default.a, {
    variant: "body1"
  }, /*#__PURE__*/external_react_["createElement"](material_["Grid"], null, "Megalodon Coaching", /*#__PURE__*/external_react_["createElement"]("div", null, /*#__PURE__*/external_react_["createElement"](Link_default.a, {
    href: "/privacy"
  }, "Datenschutz"), " |", " ", /*#__PURE__*/external_react_["createElement"](Link_default.a, {
    href: "/imprint"
  }, "Impressum")))), /*#__PURE__*/external_react_["createElement"](Copyright, null)));
}
// EXTERNAL MODULE: /Users/marcelhacker/Documents/source/megalodon-material/src/app.css
var app = __webpack_require__(74);

// EXTERNAL MODULE: external "bootstrap/dist/css/bootstrap.min.css"
var bootstrap_min_css_ = __webpack_require__(75);

// CONCATENATED MODULE: /Users/marcelhacker/Documents/source/megalodon-material/src/App.js

 //

 // animation
// comps






function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(shared_Navbar, null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))), /*#__PURE__*/external_react_default.a.createElement(StickyFooter, null));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(16);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(11);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/IconButton");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("/Users/marcelhacker/Documents/source/megalodon-material/node_modules/react-static/lib/browser");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Go to home")));
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var width = 320;
  var height = 150;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "KONTAKT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      width: "25rem",
      height: "10rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
    className: "pb-2"
  }, "Wenn du Interesse hast, mit mir zu arbeiten, kontaktiere mich unter folgender Mail oder klick den Button:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "buttinger",
    variant: "success",
    href: "mailto:megalodoncoaching@gmail.com?subject = Trainingsplan&body = Message"
  }, "megalodoncoaching@gmail.com"))));
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "KONTAKT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      width: "25rem",
      height: "10rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
    className: "pb-2"
  }, "Wenn du Interesse hast, mit mir zu arbeiten, kontaktiere mich unter folgender Mail oder klick den Button:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "buttinger",
    variant: "success",
    href: "mailto:megalodoncoaching@gmail.com?subject = Trainingsplan&body = Message"
  }, "megalodoncoaching@gmail.com"))));
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "IMPRESSUM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "ANGABEN GEM\xC4SS \xA7 5 TMG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "KONTAKT: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Name: Marcel Hacker ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Telefon: +43 (0)699 10844411 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "E-Mail: megalodoncoaching@gmail.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "STREITSCHLICHTUNG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die Europ\xE4ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "HAFTUNG F\xDCR INHALTE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Als Diensteanbieter sind wir gem\xE4\xDF \xA7 7 Abs.1 TMG f\xFCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \xA7\xA7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \xFCbermittelte oder gespeicherte fremde Informationen zu \xFCberwachen oder nach Umst\xE4nden zu forschen, die auf eine rechtswidrige T\xE4tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\xFChrt. Eine diesbez\xFCgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\xF6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "HAFTUNG F\xDCR LINKS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Unser Angebot enth\xE4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\xF6nnen wir f\xFCr diese fremden Inhalte auch keine Gew\xE4hr \xFCbernehmen. F\xFCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\xF6gliche Rechtsverst\xF6\xDFe \xFCberpr\xFCft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "URHEBERRECHT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\xE4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\xDFerhalb der Grenzen des Urheberrechtes bed\xFCrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\xFCr den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.")));
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "DATENSCHUTZ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "1. DATENSCHUTZ AUF EINEN BLICK"), "ALLGEMEINE HINWEISE Die folgenden Hinweise geben einen einfachen \xDCberblick dar\xFCber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers\xF6nlich identifiziert werden k\xF6nnen. Ausf\xFChrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef\xFChrten Datenschutzerkl\xE4rung. DATENERFASSUNG AUF UNSERER WEBSITE Wer ist verantwortlich f\xFCr die Datenerfassung auf dieser Website? Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k\xF6nnen Sie dem Impressum dieser Website entnehmen. Wie erfassen wir Ihre Daten? Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten. Wof\xFCr nutzen wir Ihre Daten? Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew\xE4hrleisten. Andere Daten k\xF6nnen zur Analyse Ihres Nutzerverhaltens verwendet werden. Welche Rechte haben Sie bez\xFCglich Ihrer Daten? Sie haben jederzeit das Recht unentgeltlich Auskunft \xFCber Herkunft, Empf\xE4nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au\xDFerdem ein Recht, die Berichtigung, Sperrung oder L\xF6schung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k\xF6nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust\xE4ndigen Aufsichtsbeh\xF6rde zu. ANALYSE-TOOLS UND TOOLS VON DRITTANBIETERN Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zur\xFCckverfolgt werden. Sie k\xF6nnen dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerkl\xE4rung. Sie k\xF6nnen dieser Analyse widersprechen. \xDCber die Widerspruchsm\xF6glichkeiten werden wir Sie in dieser Datenschutzerkl\xE4rung informieren. 2. ALLGEMEINE HINWEISE UND PFLICHTINFORMATIONEN DATENSCHUTZ Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers\xF6nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl\xE4rung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers\xF6nlich identifiziert werden k\xF6nnen. Die vorliegende Datenschutzerkl\xE4rung erl\xE4utert, welche Daten wir erheben und wof\xFCr wir sie nutzen. Sie erl\xE4utert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die Daten\xFCbertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsl\xFCcken aufweisen kann. Ein l\xFCckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m\xF6glich. Hinweis zur verantwortlichen Stelle Die verantwortliche Stelle f\xFCr die Datenverarbeitung auf dieser Website ist: Andreas P\xFCrzel Handelskai 340 1020 Wien Telefon: +43 (0)660 4867722 E-Mail: info@intelligentstrength.net Verantwortliche Stelle ist die nat\xFCrliche oder juristische Person, die allein oder gemeinsam mit anderen \xFCber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. \xC4.) entscheidet. Widerruf Ihrer Einwilligung zur Datenverarbeitung Viele Datenverarbeitungsvorg\xE4nge sind nur mit Ihrer ausdr\xFCcklichen Einwilligung m\xF6glich. Sie k\xF6nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm\xE4\xDFigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber\xFChrt. Beschwerderecht bei der zust\xE4ndigen Aufsichtsbeh\xF6rde Im Falle datenschutzrechtlicher Verst\xF6\xDFe steht dem Betroffenen ein Beschwerderecht bei der zust\xE4ndigen Aufsichtsbeh\xF6rde zu. Zust\xE4ndige Aufsichtsbeh\xF6rde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat. Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten k\xF6nnen folgendem Link entnommen werden: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html. RECHT AUF DATEN\xDCBERTRAGBARKEIT Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf\xFCllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g\xE4ngigen, maschinenlesbaren Format aush\xE4ndigen zu lassen. Sofern Sie die direkte \xDCbertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist. SSL- bzw. TLS-Verschl\xFCsselung Diese Seite nutzt aus Sicherheitsgr\xFCnden und zum Schutz der \xDCbertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschl\xFCsselung. Eine verschl\xFCsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \u201Chttp://\u201D auf \u201Chttps://\u201D wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschl\xFCsselung aktiviert ist, k\xF6nnen die Daten, die Sie an uns \xFCbermitteln, nicht von Dritten mitgelesen werden. VERSCHL\xDCSSELTER ZAHLUNGSVERKEHR AUF DIESER WEBSITE Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten (z.B. Kontonummer bei Einzugserm\xE4chtigung) zu \xFCbermitteln, werden diese Daten zur Zahlungsabwicklung ben\xF6tigt. Der Zahlungsverkehr \xFCber die g\xE4ngigen Zahlungsmittel (Visa/MasterCard, Lastschriftverfahren) erfolgt ausschlie\xDFlich \xFCber eine verschl\xFCsselte SSL- bzw. TLS-Verbindung. Eine verschl\xFCsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \u201Chttp://\u201D auf \u201Chttps://\u201D wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Bei verschl\xFCsselter Kommunikation k\xF6nnen Ihre Zahlungsdaten, die Sie an uns \xFCbermitteln, nicht von Dritten mitgelesen werden. Auskunft, Sperrung, L\xF6schung Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft \xFCber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf\xE4nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder L\xF6schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k\xF6nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Widerspruch gegen Werbe-Mails Der Nutzung von im Rahmen der Impressumspflicht ver\xF6ffentlichten Kontaktdaten zur \xDCbersendung von nicht ausdr\xFCcklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdr\xFCcklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor. 3. DATENERFASSUNG AUF UNSERER WEBSITE Cookies Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte \u201CSession-Cookies\u201D. Sie werden nach Ende Ihres Besuchs automatisch gel\xF6scht. Andere Cookies bleiben auf Ihrem Endger\xE4t gespeichert bis Sie diese l\xF6schen. Diese Cookies erm\xF6glichen es uns, Ihren Browser beim n\xE4chsten Besuch wiederzuerkennen. Sie k\xF6nnen Ihren Browser so einstellen, dass Sie \xFCber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f\xFCr bestimmte F\xE4lle oder generell ausschlie\xDFen sowie das automatische L\xF6schen der Cookies beim Schlie\xDFen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit\xE4t dieser Website eingeschr\xE4nkt sein. Cookies, die zur Durchf\xFChrung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erw\xFCnschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerkl\xE4rung gesondert behandelt. Server-Log-Dateien Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns \xFCbermittelt. Dies sind: Browsertyp und Browserversion verwendetes Betriebssystem Referrer URL Hostname des zugreifenden Rechners Uhrzeit der Serveranfrage IP-Adresse Eine Zusammenf\xFChrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage f\xFCr die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erf\xFCllung eines Vertrags oder vorvertraglicher Ma\xDFnahmen gestattet. Kontaktformular Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f\xFCr den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschlie\xDFlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie k\xF6nnen diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm\xE4\xDFigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorg\xE4nge bleibt vom Widerruf unber\xFChrt. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur L\xF6schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f\xFCr die Datenspeicherung entf\xE4llt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen \u2013 insbesondere Aufbewahrungsfristen \u2013 bleiben unber\xFChrt. Registrierung auf dieser Website Sie k\xF6nnen sich auf unserer Website registrieren, um zus\xE4tzliche Funktionen auf der Seite zu nutzen. Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, f\xFCr den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben m\xFCssen vollst\xE4ndig angegeben werden. Anderenfalls werden wir die Registrierung ablehnen. F\xFCr wichtige \xC4nderungen etwa beim Angebotsumfang oder bei technisch notwendigen \xC4nderungen nutzen wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren. Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie k\xF6nnen eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm\xE4\xDFigkeit der bereits erfolgten Datenverarbeitung bleibt vom Widerruf unber\xFChrt. Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf unserer Website registriert sind und werden anschlie\xDFend gel\xF6scht. Gesetzliche Aufbewahrungsfristen bleiben unber\xFChrt. Registrierung mit Facebook Connect Statt einer direkten Registrierung auf unserer Website k\xF6nnen Sie sich mit Facebook Connect registrieren. Anbieter dieses Dienstes ist die Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Wenn Sie sich f\xFCr die Registrierung mit Facebook Connect entscheiden und auf den \u201CLogin with Facebook\u201D- / \u201CConnect with Facebook\u201D-Button klicken, werden Sie automatisch auf die Plattform von Facebook weitergeleitet. Dort k\xF6nnen Sie sich mit Ihren Nutzungsdaten anmelden. Dadurch wird Ihr Facebook-Profil mit unserer Website bzw. unseren Diensten verkn\xFCpft. Durch diese Verkn\xFCpfung erhalten wir Zugriff auf Ihre bei Facebook hinterlegten Daten. Dies sind vor allem: Facebook-Name Facebook-Profil- und Titelbild Facebook-Titelbild bei Facebook hinterlegte E-Mail-Adresse Facebook-ID Facebook-Freundeslisten Facebook Likes (\u201CGef\xE4llt-mir\u201D-Angaben) Geburtstag Geschlecht Land Sprache Diese Daten werden zur Einrichtung, Bereitstellung und Personalisierung Ihres Accounts genutzt. Weitere Informationen finden Sie in den Facebook-Nutzungsbedingungen und den Facebook-Datenschutzbestimmungen. Diese finden Sie unter: https://de-de.facebook.com/about/privacy/ und https://www.facebook.com/legal/terms/. Kommentarfunktion auf dieser Website F\xFCr die Kommentarfunktion auf dieser Seite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars, Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen gew\xE4hlte Nutzername gespeichert. Speicherung der IP-Adresse Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. Da wir Kommentare auf unserer Seite nicht vor der Freischaltung pr\xFCfen, ben\xF6tigen wir diese Daten, um im Falle von Rechtsverletzungen wie Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu k\xF6nnen. Abonnieren von Kommentaren Als Nutzer der Seite k\xF6nnen Sie nach einer Anmeldung Kommentare abonnieren. Sie erhalten eine Best\xE4tigungsemail, um zu pr\xFCfen, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie k\xF6nnen diese Funktion jederzeit \xFCber einen Link in den Info-Mails abbestellen. Die im Rahmen des Abonnierens von Kommentaren eingegebenen Daten werden in diesem Fall gel\xF6scht; wenn Sie diese Daten f\xFCr andere Zwecke und an anderer Stelle (z.B. Newsletterbestellung) an uns \xFCbermittelt haben, verbleiben die jedoch bei uns. Speicherdauer der Kommentare Die Kommentare und die damit verbundenen Daten (z.B. IP-Adresse) werden gespeichert und verbleiben auf unserer Website, bis der kommentierte Inhalt vollst\xE4ndig gel\xF6scht wurde oder die Kommentare aus rechtlichen Gr\xFCnden gel\xF6scht werden m\xFCssen (z.B. beleidigende Kommentare). Rechtsgrundlage Die Speicherung der Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie k\xF6nnen eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm\xE4\xDFigkeit der bereits erfolgten Datenverarbeitungsvorg\xE4nge bleibt vom Widerruf unber\xFChrt. Verarbeiten von Daten (Kunden- und Vertragsdaten) Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie f\xFCr die Begr\xFCndung, inhaltliche Ausgestaltung oder \xC4nderung des Rechtsverh\xE4ltnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erf\xFCllung eines Vertrags oder vorvertraglicher Ma\xDFnahmen gestattet. Personenbezogene Daten \xFCber die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu erm\xF6glichen oder abzurechnen. Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Gesch\xE4ftsbeziehung gel\xF6scht. Gesetzliche Aufbewahrungsfristen bleiben unber\xFChrt. Daten\xFCbermittlung bei Vertragsschluss f\xFCr Online-Shops, H\xE4ndler und Warenversand Wir \xFCbermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an die mit der Lieferung der Ware betrauten Unternehmen oder das mit der Zahlungsabwicklung beauftragte Kreditinstitut. Eine weitergehende \xDCbermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der \xDCbermittlung ausdr\xFCcklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdr\xFCckliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht. Grundlage f\xFCr die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erf\xFCllung eines Vertrags oder vorvertraglicher Ma\xDFnahmen gestattet. Daten\xFCbermittlung bei Vertragsschluss f\xFCr Dienstleistungen und digitale Inhalte Wir \xFCbermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut. Eine weitergehende \xDCbermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der \xDCbermittlung ausdr\xFCcklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdr\xFCckliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht. Grundlage f\xFCr die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erf\xFCllung eines Vertrags oder vorvertraglicher Ma\xDFnahmen gestattet. 4. SOZIALE MEDIEN Inhalte teilen \xFCber Plugins (Facebook, Google+1, Twitter & Co.) Die Inhalte auf unseren Seiten k\xF6nnen datenschutzkonform in sozialen Netzwerken wie Facebook, Twitter oder Google+ geteilt werden. Diese Seite nutzt daf\xFCr das eRecht24 Safe Sharing Tool. Dieses Tool stellt den direkten Kontakt zwischen den Netzwerken und Nutzern erst dann her, wenn der Nutzer aktiv auf einen dieser Button klickt. Eine automatische \xDCbertragung von Nutzerdaten an die Betreiber dieser Plattformen erfolgt durch dieses Tool nicht. Ist der Nutzer bei einem der sozialen Netzwerke angemeldet, erscheint bei der Nutzung der Social-Buttons von Facebook, Google+1, Twitter & Co. ein Informations-Fenster, in dem der Nutzer den Text vor dem Absenden best\xE4tigen kann. Unsere Nutzer k\xF6nnen die Inhalte dieser Seite datenschutzkonform in sozialen Netzwerken teilen, ohne dass komplette Surf-Profile durch die Betreiber der Netzwerke erstellt werden. Facebook-Plugins (Like & Share-Button) Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California 94025, USA, integriert. Die Facebook-Plugins erkennen Sie an dem Facebook-Logo oder dem \u201CLike-Button\u201D (\u201CGef\xE4llt mir\u201D) auf unserer Seite. Eine \xDCbersicht \xFCber die Facebook-Plugins finden Sie hier: https://developers.facebook.com/docs/plugins/. Wenn Sie unsere Seiten besuchen, wird \xFCber das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erh\xE4lt dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den Facebook \u201CLike-Button\u201D anklicken w\xE4hrend Sie in Ihrem Facebook-Account eingeloggt sind, k\xF6nnen Sie die Inhalte unserer Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der \xFCbermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerkl\xE4rung von Facebook unter: https://de-de.facebook.com/policy.php. Wenn Sie nicht w\xFCnschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus. Instagram Plugin Auf unseren Seiten sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA 94025, USA integriert. Wenn Sie in Ihrem Instagram-Account eingeloggt sind, k\xF6nnen Sie durch Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der \xFCbermittelten Daten sowie deren Nutzung durch Instagram erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerkl\xE4rung von Instagram: https://instagram.com/about/legal/privacy/. 5. ANALYSE TOOLS UND WERBUNG Google Analytics Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Analytics verwendet so genannte \u201CCookies\u201D. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie erm\xF6glichen. Die durch den Cookie erzeugten Informationen \xFCber Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA \xFCbertragen und dort gespeichert. Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. IP Anonymisierung Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europ\xE4ischen Union oder in anderen Vertragsstaaten des Abkommens \xFCber den Europ\xE4ischen Wirtschaftsraum vor der \xDCbermittlung in die USA gek\xFCrzt. Nur in Ausnahmef\xE4llen wird die volle IP-Adresse an einen Server von Google in den USA \xFCbertragen und dort gek\xFCrzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports \xFCber die Websiteaktivit\xE4ten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegen\xFCber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser \xFCbermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengef\xFChrt. Browser Plugin Sie k\xF6nnen die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht s\xE4mtliche Funktionen dieser Website vollumf\xE4nglich werden nutzen k\xF6nnen. Sie k\xF6nnen dar\xFCber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verf\xFCgbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de. Widerspruch gegen Datenerfassung Sie k\xF6nnen die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zuk\xFCnftigen Besuchen dieser Website verhindert: Google Analytics deaktivieren. Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerkl\xE4rung von Google: https://support.google.com/analytics/answer/6004245?hl=de. Auftragsdatenverarbeitung Wir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbeh\xF6rden bei der Nutzung von Google Analytics vollst\xE4ndig um. Demografische Merkmale bei Google Analytics Diese Website nutzt die Funktion \u201Cdemografische Merkmale\u201D von Google Analytics. Dadurch k\xF6nnen Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Diese Daten k\xF6nnen keiner bestimmten Person zugeordnet werden. Sie k\xF6nnen diese Funktion jederzeit \xFCber die Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics wie im Punkt \u201CWiderspruch gegen Datenerfassung\u201D dargestellt generell untersagen. WordPress Stats Diese Website nutzt das WordPress Tool Stats, um Besucherzugriffe statistisch auszuwerten. Anbieter ist die Automattic Inc., 60 29th Street #343, San Francisco, CA 94110-4929, USA. WordPress Stats verwendet Cookies, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website erlauben. Die durch die Cookies generierten Informationen \xFCber die Benutzung unserer Website werden auf Servern in den USA gespeichert. Ihre IP-Adresse wird nach der Verarbeitung und vor der Speicherung anonymisiert. \u201CWordPress-Stats\u201D-Cookies verbleiben auf Ihrem Endger\xE4t, bis Sie sie l\xF6schen. Die Speicherung von \u201CWordPress Stats\u201D-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sie k\xF6nnen Ihren Browser so einstellen, dass Sie \xFCber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f\xFCr bestimmte F\xE4lle oder generell ausschlie\xDFen sowie das automatische L\xF6schen der Cookies beim Schlie\xDFen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit\xE4t unserer Website eingeschr\xE4nkt sein. Sie k\xF6nnen der Erhebung und Nutzung Ihrer Daten f\xFCr die Zukunft widersprechen, indem Sie mit einem Klick auf diesen Link einen Opt-Out-Cookie in Ihrem Browser setzen: https://www.quantcast.com/opt-out/. Wenn Sie die Cookies auf Ihrem Rechner l\xF6schen, m\xFCssen Sie den Opt-Out-Cookie erneut setzen. Google Analytics Remarketing Unsere Websites nutzen die Funktionen von Google Analytics Remarketing in Verbindung mit den ger\xE4te\xFCbergreifenden Funktionen von Google AdWords und Google DoubleClick. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Diese Funktion erm\xF6glicht es die mit Google Analytics Remarketing erstellten Werbe-Zielgruppen mit den ger\xE4te\xFCbergreifenden Funktionen von Google AdWords und Google DoubleClick zu verkn\xFCpfen. Auf diese Weise k\xF6nnen interessenbezogene, personalisierte Werbebotschaften, die in Abh\xE4ngigkeit Ihres fr\xFCheren Nutzungs- und Surfverhaltens auf einem Endger\xE4t (z.B. Handy) an Sie angepasst wurden auch auf einem anderen Ihrer Endger\xE4te (z.B. Tablet oder PC) angezeigt werden. Haben Sie eine entsprechende Einwilligung erteilt, verkn\xFCpft Google zu diesem Zweck Ihren Web- und App-Browserverlauf mit Ihrem Google-Konto. Auf diese Weise k\xF6nnen auf jedem Endger\xE4t auf dem Sie sich mit Ihrem Google-Konto anmelden, dieselben personalisierten Werbebotschaften geschaltet werden. Zur Unterst\xFCtzung dieser Funktion erfasst Google Analytics google-authentifizierte IDs der Nutzer, die vor\xFCbergehend mit unseren Google-Analytics-Daten verkn\xFCpft werden, um Zielgruppen f\xFCr die ger\xE4te\xFCbergreifende Anzeigenwerbung zu definieren und zu erstellen. Sie k\xF6nnen dem ger\xE4te\xFCbergreifenden Remarketing/Targeting dauerhaft widersprechen, indem Sie personalisierte Werbung in Ihrem Google-Konto deaktivieren; folgen Sie hierzu diesem Link: https://www.google.com/settings/ads/onweb/. Die Zusammenfassung der erfassten Daten in Ihrem Google-Konto erfolgt ausschlie\xDFlich auf Grundlage Ihrer Einwilligung, die Sie bei Google abgeben oder widerrufen k\xF6nnen (Art. 6 Abs. 1 lit. a DSGVO). Bei Datenerfassungsvorg\xE4ngen, die nicht in Ihrem Google-Konto zusammengef\xFChrt werden (z.B. weil Sie kein Google-Konto haben oder der Zusammenf\xFChrung widersprochen haben) beruht die Erfassung der Daten auf Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse ergibt sich daraus, dass der Websitebetreiber ein Interesse an der anonymisierten Analyse der Websitebesucher zu Werbezwecken hat. Weitergehende Informationen und die Datenschutzbestimmungen finden Sie in der Datenschutzerkl\xE4rung von Google unter: https://www.google.com/policies/technologies/ads/. Google AdWords und Google Conversion-Tracking Diese Website verwendet Google AdWords. AdWords ist ein Online-Werbeprogramm der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States (\u201CGoogle\u201D). Im Rahmen von Google AdWords nutzen wir das so genannte Conversion-Tracking. Wenn Sie auf eine von Google geschaltete Anzeige klicken wird ein Cookie f\xFCr das Conversion-Tracking gesetzt. Bei Cookies handelt es sich um kleine Textdateien, die der Internet-Browser auf dem Computer des Nutzers ablegt. Diese Cookies verlieren nach 30 Tagen ihre G\xFCltigkeit und dienen nicht der pers\xF6nlichen Identifizierung der Nutzer. Besucht der Nutzer bestimmte Seiten dieser Website und das Cookie ist noch nicht abgelaufen, k\xF6nnen Google und wir erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder Google AdWords-Kunde erh\xE4lt ein anderes Cookie. Die Cookies k\xF6nnen nicht \xFCber die Websites von AdWords-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu, Conversion-Statistiken f\xFCr AdWords-Kunden zu erstellen, die sich f\xFCr Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer pers\xF6nlich identifizieren lassen. Wenn Sie nicht am Tracking teilnehmen m\xF6chten, k\xF6nnen Sie dieser Nutzung widersprechen, indem Sie das Cookie des Google Conversion-Trackings \xFCber ihren Internet-Browser unter Nutzereinstellungen leicht deaktivieren. Sie werden sodann nicht in die Conversion-Tracking Statistiken aufgenommen. Die Speicherung von \u201CConversion-Cookies\u201D erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Mehr Informationen zu Google AdWords und Google Conversion-Tracking finden Sie in den Datenschutzbestimmungen von Google: https://www.google.de/policies/privacy/. Sie k\xF6nnen Ihren Browser so einstellen, dass Sie \xFCber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f\xFCr bestimmte F\xE4lle oder generell ausschlie\xDFen sowie das automatische L\xF6schen der Cookies beim Schlie\xDFen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit\xE4t dieser Website eingeschr\xE4nkt sein. Google reCAPTCHA Wir nutzen \u201CGoogle reCAPTCHA\u201D (im Folgenden \u201CreCAPTCHA\u201D) auf unseren Websites. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (\u201CGoogle\u201D). Mit reCAPTCHA soll \xFCberpr\xFCft werden, ob die Dateneingabe auf unseren Websites (z.B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z.B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom Nutzer get\xE4tigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet. Die reCAPTCHA-Analysen laufen vollst\xE4ndig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse stattfindet. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbr\xE4uchlicher automatisierter Aussp\xE4hung und vor SPAM zu sch\xFCtzen. Weitere Informationen zu Google reCAPTCHA sowie die Datenschutzerkl\xE4rung von Google entnehmen Sie folgenden Links: https://www.google.com/intl/de/policies/privacy/ und https://www.google.com/recaptcha/intro/android.html. Facebook Pixel Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA (\u201CFacebook\u201D). So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch k\xF6nnen die Wirksamkeit der Facebook-Werbeanzeigen f\xFCr statistische und Marktforschungszwecke ausgewertet werden und zuk\xFCnftige Werbema\xDFnahmen optimiert werden. Die erhobenen Daten sind f\xFCr uns als Betreiber dieser Website anonym, wir k\xF6nnen keine R\xFCckschl\xFCsse auf die Identit\xE4t der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil m\xF6glich ist und Facebook die Daten f\xFCr eigene Werbezwecke, entsprechend der Facebook-Datenverwendungsrichtlinie verwenden kann. Dadurch kann Facebook das Schalten von Werbeanzeigen auf Seiten von Facebook sowie au\xDFerhalb von Facebook erm\xF6glichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden. In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise zum Schutz Ihrer Privatsph\xE4re: https://www.facebook.com/about/privacy/. Sie k\xF6nnen au\xDFerdem die Remarketing-Funktion \u201CCustom Audiences\u201D im Bereich Einstellungen f\xFCr Werbeanzeigen unter https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen deaktivieren. Dazu m\xFCssen Sie bei Facebook angemeldet sein. Wenn Sie kein Facebook Konto besitzen, k\xF6nnen Sie nutzungsbasierte Werbung von Facebook auf der Website der European Interactive Digital Advertising Alliance deaktivieren: http://www.youronlinechoices.com/de/praferenzmanagement/. 7. PLUGINS UND TOOLS YouTube Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, erm\xF6glichen Sie YouTube, Ihr Surfverhalten direkt Ihrem pers\xF6nlichen Profil zuzuordnen. Dies k\xF6nnen Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen. Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerkl\xE4rung von YouTube unter: https://www.google.de/intl/de/policies/privacy. Google Web Fonts Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite l\xE4dt Ihr Browser die ben\xF6tigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis dar\xFCber, dass \xFCber Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Wenn Ihr Browser Web Fonts nicht unterst\xFCtzt, wird eine Standardschrift von Ihrem Computer genutzt. Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerkl\xE4rung von Google: https://www.google.com/policies/privacy/. Google Maps Diese Seite nutzt \xFCber eine API den Kartendienst Google Maps. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA \xFCbertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Daten\xFCbertragung. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerkl\xE4rung von Google: https://www.google.de/intl/de/policies/privacy/."));
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_urkunde_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _public_urkunde_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_urkunde_jpg__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var width = 320;
  var height = 150;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Qualifikationen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      width: "25rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Img, {
    variant: "top",
    src: _public_urkunde_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Title, null, "Powerlifting Academy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Text, null, "Trainerausbildung Kraftdreikampf 2022"))));
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(18);

// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(48);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(4);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(10);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(9);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(5);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// CONCATENATED MODULE: /Users/marcelhacker/Documents/source/megalodon-material/src/components/MainPost.js








function MainPost(props) {
  var post = props.post;
  return /*#__PURE__*/external_react_["createElement"](Paper_default.a, {
    backgroundColor: "grey.800",
    sx: {
      position: "relative",
      backgroundColor: "grey.800",
      color: "#fff",
      mb: 4,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: "url(".concat(post.image, ")")
    }
  }, /*#__PURE__*/external_react_["createElement"]("img", {
    style: {
      display: "none"
    },
    src: post.image,
    alt: post.imageText
  }), /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    sx: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,.3)"
    }
  }), /*#__PURE__*/external_react_["createElement"](Grid_default.a, {
    container: true
  }, /*#__PURE__*/external_react_["createElement"](Grid_default.a, {
    item: true,
    md: 6
  }, /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    sx: {
      position: "relative",
      p: {
        xs: 3,
        md: 6
      },
      pr: {
        md: 0
      }
    }
  }, /*#__PURE__*/external_react_["createElement"](Typography_default.a, {
    component: "h1",
    variant: "h3",
    color: "inherit",
    gutterBottom: true
  }, post.title), /*#__PURE__*/external_react_["createElement"](Typography_default.a, {
    variant: "h5",
    color: "inherit",
    paragraph: true
  }, post.description), /*#__PURE__*/external_react_["createElement"](Link_default.a, {
    variant: "subtitle1",
    href: "#"
  }, post.linkText)))));
}

/* harmony default export */ var components_MainPost = (MainPost);
// EXTERNAL MODULE: /Users/marcelhacker/Documents/source/megalodon-material/public/analyse.jpg
var analyse = __webpack_require__(49);
var analyse_default = /*#__PURE__*/__webpack_require__.n(analyse);

// CONCATENATED MODULE: /Users/marcelhacker/Documents/source/megalodon-material/src/pages/index.js



/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  var mainFeaturedPost = {
    title: "Title of a longer featured blog post",
    description: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: analyse_default.a,
    imageText: "main image description",
    linkText: "Continue reading…"
  };
  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(components_MainPost, {
    post: mainFeaturedPost
  }));
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(5);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(12);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(50);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@mui/material/CardActions"
var CardActions_ = __webpack_require__(51);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);

// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(52);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(53);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);

// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(10);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@mui/icons-material/Star"
var Star_ = __webpack_require__(54);
var Star_default = /*#__PURE__*/__webpack_require__.n(Star_);

// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(4);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(8);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__(55);

// CONCATENATED MODULE: /Users/marcelhacker/Documents/source/megalodon-material/src/components/PriceList.js













var PriceList_PriceList = function PriceList() {
  var tiers = [{
    title: "Trainingsplan",
    price: "60",
    description: ["Zielorientiert", "Effektiv & Effizient", "Individuell"],
    buttonText: "Anfragen",
    buttonVariant: "outlined",
    subject: "Trainingsplan"
  }, {
    title: "Online Coaching",
    subheader: "Most popular",
    price: "125",
    description: [//  "20 users included",
    "Individuallisierter Trainingsplan", "Technikanalyse deiner Übungsausführung", "Wöchentliches Check-In", "Textkommunikation via Messenger"],
    buttonText: "Anfragen",
    buttonVariant: "contained",
    subject: "Online Caoching"
  }, {
    title: "Ernährungsplan",
    price: "100",
    description: ["Leistungsoptimierung", "Körperfettreduktion", "Kommunikation via E-Mail"],
    buttonText: "Anfragen",
    buttonVariant: "outlined",
    subject: "Ernährungsplan"
  }];
  return /*#__PURE__*/external_react_["createElement"](Container_default.a, {
    maxWidth: "md",
    component: "main"
  }, /*#__PURE__*/external_react_["createElement"](Grid_default.a, {
    container: true,
    spacing: 5,
    alignItems: "flex-end"
  }, tiers.map(function (tier) {
    return (
      /*#__PURE__*/
      // Enterprise card is full width at sm breakpoint
      external_react_["createElement"](Grid_default.a, {
        item: true,
        key: tier.title,
        xs: 12,
        sm: tier.title === "Enterprise" ? 12 : 6,
        md: 4
      }, /*#__PURE__*/external_react_["createElement"](Card_default.a, null, /*#__PURE__*/external_react_["createElement"](CardHeader_default.a, {
        title: tier.title,
        subheader: tier.subheader,
        titleTypographyProps: {
          align: "center"
        },
        action: tier.title === "Online Coaching" && /*#__PURE__*/external_react_["createElement"](Star_default.a, {
          sx: {
            color: colors_["yellow"][800]
          }
        }),
        subheaderTypographyProps: {
          align: "center"
        },
        sx: {
          backgroundColor: function backgroundColor(theme) {
            return theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[700];
          }
        }
      }), /*#__PURE__*/external_react_["createElement"](CardContent_default.a, null, /*#__PURE__*/external_react_["createElement"](Box_default.a, {
        sx: {
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          mb: 2
        }
      }, /*#__PURE__*/external_react_["createElement"](Typography_default.a, {
        component: "h2",
        variant: "h3",
        color: "text.primary"
      }, "\u20AC ", tier.price), /*#__PURE__*/external_react_["createElement"](Typography_default.a, {
        variant: "h6",
        color: "text.secondary"
      }, "/monat")), /*#__PURE__*/external_react_["createElement"]("ul", null, tier.description.map(function (line) {
        return /*#__PURE__*/external_react_["createElement"](Typography_default.a, {
          component: "li",
          variant: "subtitle1",
          align: "center",
          key: line
        }, line);
      }))), /*#__PURE__*/external_react_["createElement"](CardActions_default.a, null, /*#__PURE__*/external_react_["createElement"](Button_default.a, {
        fullWidth: true,
        variant: tier.buttonVariant,
        href: "mailto:megalodoncoaching@gmail.com?subject=".concat(tier.subject)
      }, tier.buttonText))))
    );
  })));
};

/* harmony default export */ var components_PriceList = (PriceList_PriceList);
// CONCATENATED MODULE: /Users/marcelhacker/Documents/source/megalodon-material/src/pages/preise.js


/* harmony default export */ var preise = __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(components_PriceList, null));
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(14);

var _router = __webpack_require__(13);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/AppBar");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Toolbar");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Menu");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Menu");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Tooltip");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/MenuItem");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.fdba51f4.png";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Instagram");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@mui/material");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Paper");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/analyse.7a6f1789.jpg";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Card");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/CardActions");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/CardContent");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/CardHeader");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Star");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/colors");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/urkunde.987ef503.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(60);
module.exports = __webpack_require__(67);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(59)["default"];

var _require = __webpack_require__(21),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(21),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(61),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);




















Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/about */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/about";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/about.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/contact */).then(__webpack_require__.bind(null, 29))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/contact";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/contact.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/faq.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/faq */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/faq.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/faq";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/faq.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/imprint.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/imprint */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/imprint.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/imprint";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/imprint.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/index.js';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/preise.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/preise */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/preise.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/preise";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/pages/preise.js';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/privacy.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/privacy */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/privacy.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/privacy";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/pages/privacy.js';
var t_8 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/qualifications.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/qualifications */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/qualifications.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/qualifications";
  }
}), universalOptions);
t_8.template = '__react_static_root__/src/pages/qualifications.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/about.js': t_1,
  '__react_static_root__/src/pages/contact.js': t_2,
  '__react_static_root__/src/pages/faq.js': t_3,
  '__react_static_root__/src/pages/imprint.js': t_4,
  '__react_static_root__/src/pages/index.js': t_5,
  '__react_static_root__/src/pages/preise.js': t_6,
  '__react_static_root__/src/pages/privacy.js': t_7,
  '__react_static_root__/src/pages/qualifications.js': t_8
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(17);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 11,
	"./": 11,
	"./index": 11,
	"./index.js": 11
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 64;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(16);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(22);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(23);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(24);

var _interopRequireWildcard = __webpack_require__(25);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(68);

var _Suspense = _interopRequireDefault(__webpack_require__(69));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(72)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("/Users/marcelhacker/Documents/source/megalodon-material/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(25);

var _interopRequireDefault = __webpack_require__(24);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(70));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(71));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== "undefined") {
  var target = document.getElementById("root");
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept("./App", function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(73)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 1rem;\n}\n", ""]);



/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// Module
exports.push([module.i, "/* \n  index\n*/\n.quote {\n  position: absolute;\n  left: 0px;\n  width: 1903px;\n  height: 20%;\n  color: white;\n  margin-top: 6em;\n  border: 0px;\n  background-color: #4894a2;\n}\n\n.qtext {\n  position: absolute;\n  margin-top: 3em;\n  margin-left: 52em;\n}\n\n.carous {\n  margin-top: 60em;\n  position: sticky;\n  top: 300px;\n  margin-bottom: 30em;\n}\n\n/* \n  online-coaching\n*/\n", ""]);



/***/ })
/******/ ]);
});