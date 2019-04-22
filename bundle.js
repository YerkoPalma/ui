(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _md = _interopRequireDefault(require("md"));

var _litElement = require("lit-element");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["<style>\n        :host {\n          font-family: sans-serif;\n        }\n        :host div {\n          padding-left: 2rem;\n        }\n      </style>\n      <div>\n        ", "\n      </div>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["<div><slot></slot></div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// export
var AppShell =
/*#__PURE__*/
function (_LitElement) {
  (0, _inherits2["default"])(AppShell, _LitElement);
  (0, _createClass2["default"])(AppShell, null, [{
    key: "properties",
    get: function get() {
      return {
        controller: {
          type: String
        },
        "default": {
          type: String
        },
        content: {
          type: Object
        }
      };
    }
  }]);

  function AppShell() {
    var _this;

    (0, _classCallCheck2["default"])(this, AppShell);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AppShell).call(this));
    _this.content = (0, _litElement.html)(_templateObject());
    return _this;
  }

  (0, _createClass2["default"])(AppShell, [{
    key: "firstUpdated",
    value: function firstUpdated(changedProperties) {
      var _this2 = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = changedProperties.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if (key === 'default') {
            if (this["default"]) {
              this.fetchTemplate(this["default"]).then(function (result) {
                _this2.content = result;
              });
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "updated",
    value: function updated(changedProperties) {
      var _this3 = this;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = changedProperties.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          if (key === 'controller') {
            var controllerElement = document.querySelector(this.controller);
            var links = Array.from(controllerElement.querySelectorAll('a[href]'));
            links.forEach(function (link) {
              link.addEventListener('click',
              /*#__PURE__*/
              function () {
                var _ref = (0, _asyncToGenerator2["default"])(
                /*#__PURE__*/
                _regenerator["default"].mark(function _callee(e) {
                  var target;
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          e.preventDefault();
                          target = e.target.href;
                          _context.next = 4;
                          return _this3.fetchTemplate(target);

                        case 4:
                          _this3.content = _context.sent;
                          window.history.pushState({}, null, target);

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
            });
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.content;
    }
  }, {
    key: "fetchTemplate",
    value: function () {
      var _fetchTemplate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(template) {
        var NOT_FOUND_URL, response, result, isMarkdown, mdTemplate;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                NOT_FOUND_URL = 'content/404.html';
                isMarkdown = template.split('.').pop() === 'md';

                mdTemplate = function mdTemplate(md) {
                  return (0, _litElement.html)(_templateObject2(), (0, _litElement.html)([(0, _md["default"])(md)]));
                };

                _context2.prev = 3;
                _context2.next = 6;
                return fetch(template);

              case 6:
                response = _context2.sent;

                if (!(response && response.ok)) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 10;
                return response.text();

              case 10:
                result = _context2.sent;
                _context2.next = 19;
                break;

              case 13:
                _context2.next = 15;
                return fetch(NOT_FOUND_URL);

              case 15:
                response = _context2.sent;
                _context2.next = 18;
                return response.text();

              case 18:
                result = _context2.sent;

              case 19:
                _context2.next = 30;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](3);
                console.log(_context2.t0);
                _context2.next = 26;
                return fetch(NOT_FOUND_URL);

              case 26:
                response = _context2.sent;
                _context2.next = 29;
                return response.text();

              case 29:
                result = _context2.sent;

              case 30:
                return _context2.abrupt("return", isMarkdown ? mdTemplate(result) : (0, _litElement.html)([result]));

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 21]]);
      }));

      function fetchTemplate(_x2) {
        return _fetchTemplate.apply(this, arguments);
      }

      return fetchTemplate;
    }()
  }]);
  return AppShell;
}(_litElement.LitElement); // install


exports["default"] = AppShell;
customElements.define('app-shell', AppShell);

},{"@babel/runtime/helpers/asyncToGenerator":9,"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/getPrototypeOf":14,"@babel/runtime/helpers/inherits":15,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/possibleConstructorReturn":20,"@babel/runtime/helpers/taggedTemplateLiteral":23,"@babel/runtime/regenerator":27,"lit-element":31,"md":45}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _litElement = require("lit-element");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      <style>\n        .flipper-container {\n          perspective: 1000;\n          margin: 0 auto;\n        }\n        .flipper-container:hover .flipper, .flipper-container.hover .flipper {\n          transform: rotateY(180deg);\n        }\n        .flipper-container, .front, .back {\n          width: ", ";\n          height: ", ";\n        }\n        .flipper {\n          transition: 0.6s;\n          transform-style: preserve-3d;\n\n          position: relative;\n        }\n        .front, .back {\n          backface-visibility: hidden;\n\n          position: absolute;\n          top: 0;\n        }\n        .front {\n          z-index: 2;\n          transform: rotateY(0deg);\n        }\n        .back {\n          transform: rotateY(180deg);\n        }\n        .flipper-container:hover .flipper, .flipper-container.hover .flipper, .flipper-container.flip .flipper {\n          transform: rotateY(180deg);\n        }\n      </style>\n      <div class=\"flipper-container\" @touchstart=\"", "\">\n        <div class=\"flipper\">\n          <div class=\"front\"><slot name=\"front\"></slot></div>\n          <div class=\"back\"><slot name=\"back\"></slot></div>\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FlipperCard =
/*#__PURE__*/
function (_LitElement) {
  (0, _inherits2["default"])(FlipperCard, _LitElement);

  function FlipperCard() {
    (0, _classCallCheck2["default"])(this, FlipperCard);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FlipperCard).apply(this, arguments));
  }

  (0, _createClass2["default"])(FlipperCard, [{
    key: "render",
    value: function render() {
      var _this = this;

      return (0, _litElement.html)(_templateObject(), this.width || '180px', this.height || this.width || '180px', function (e) {
        return _this.shadowRoot.querySelector('flipper-container').classList.toggle('hover');
      });
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        width: {
          type: String
        },
        height: {
          type: String
        }
      };
    }
  }]);
  return FlipperCard;
}(_litElement.LitElement); // install


exports["default"] = FlipperCard;
customElements.define('flipper-card', FlipperCard);

},{"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/getPrototypeOf":14,"@babel/runtime/helpers/inherits":15,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/possibleConstructorReturn":20,"@babel/runtime/helpers/taggedTemplateLiteral":23,"lit-element":31}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _litElement = require("lit-element");

var _markdown = require("../lib/markdown.js");

/* global fetch customElements */
var FsRouter =
/*#__PURE__*/
function (_LitElement) {
  (0, _inherits2["default"])(FsRouter, _LitElement);
  (0, _createClass2["default"])(FsRouter, null, [{
    key: "properties",
    get: function get() {
      return {
        defaultPage: {
          type: String
        },
        startPage: {
          type: String
        },
        content: {
          type: Object
        }
      };
    }
  }]);

  function FsRouter() {
    var _this;

    (0, _classCallCheck2["default"])(this, FsRouter);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FsRouter).call(this));
    _this.startPage = window.location.href;
    _this.content = (0, _litElement.html)([(0, _markdown.md)(_this.innerHTML)]);
    _this.initialContent = _this.content;
    window.addEventListener('popstate', function (e) {
      e.preventDefault(); // fetch routes

      _this.resolve().then(function (result) {
        _this.content = result;
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(FsRouter, [{
    key: "firstUpdated",
    value: function firstUpdated(changedProperties) {
      var _this2 = this;

      // fetch default content
      for (var _i = 0, _Array$from = Array.from(this.attributes); _i < _Array$from.length; _i++) {
        var attribute = _Array$from[_i];

        if (attribute.name === 'default-page') {
          this.resolve(attribute.value).then(function (result) {
            _this2.defaultContent = result;
          });
        }
      }

      var links = document.querySelectorAll('a[href]');
      Array.prototype.forEach.call(links, function (link) {
        link.addEventListener('click', function (ev) {
          ev.preventDefault();

          _this2.resolve(link.href).then(function (result) {
            _this2.content = result;
            window.history.pushState(undefined, link.href, link.href);
          });
        });
      });
    }
  }, {
    key: "resolve",
    value: function () {
      var _resolve = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(path) {
        var isHtml, isMd, maybeFolder, response, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                path = path || window.location.href;

                if (!(path === this.startPage)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", this.initialContent);

              case 3:
                isHtml = /\.html?$/i.test(path);
                isMd = /\.(?:md|markdown)$/i.test(path);
                maybeFolder = !isHtml && !isMd;
                _context.prev = 6;
                _context.next = 9;
                return fetch(path);

              case 9:
                response = _context.sent;

                if (!(response && response.ok)) {
                  _context.next = 21;
                  break;
                }

                _context.next = 13;
                return response.text();

              case 13:
                result = _context.sent;

                if (!isMd) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", (0, _litElement.html)([(0, _markdown.md)(result)]));

              case 18:
                return _context.abrupt("return", (0, _litElement.html)([result]));

              case 19:
                _context.next = 60;
                break;

              case 21:
                if (!maybeFolder) {
                  _context.next = 60;
                  break;
                }

                _context.next = 24;
                return fetch("".concat(path, ".html"));

              case 24:
                response = _context.sent;

                if (!(response && response.ok)) {
                  _context.next = 32;
                  break;
                }

                _context.next = 28;
                return response.text();

              case 28:
                result = _context.sent;
                return _context.abrupt("return", (0, _litElement.html)([result]));

              case 32:
                _context.next = 34;
                return fetch("".concat(path, ".md"));

              case 34:
                response = _context.sent;

                if (!(response && response.ok)) {
                  _context.next = 42;
                  break;
                }

                _context.next = 38;
                return response.text();

              case 38:
                result = _context.sent;
                return _context.abrupt("return", (0, _litElement.html)([(0, _markdown.md)(result)]));

              case 42:
                _context.next = 44;
                return fetch("".concat(path, "/index.html"));

              case 44:
                response = _context.sent;

                if (!(response && response.ok)) {
                  _context.next = 52;
                  break;
                }

                _context.next = 48;
                return response.text();

              case 48:
                result = _context.sent;
                return _context.abrupt("return", (0, _litElement.html)([result]));

              case 52:
                _context.next = 54;
                return fetch("".concat(path, "/index.md"));

              case 54:
                response = _context.sent;

                if (!(response && response.ok)) {
                  _context.next = 60;
                  break;
                }

                _context.next = 58;
                return response.text();

              case 58:
                result = _context.sent;
                return _context.abrupt("return", (0, _litElement.html)([(0, _markdown.md)(result)]));

              case 60:
                _context.next = 64;
                break;

              case 62:
                _context.prev = 62;
                _context.t0 = _context["catch"](6);

              case 64:
                return _context.abrupt("return", this.defaultContent);

              case 65:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 62]]);
      }));

      function resolve(_x) {
        return _resolve.apply(this, arguments);
      }

      return resolve;
    }()
  }, {
    key: "render",
    value: function render() {
      return this.content;
    }
  }]);
  return FsRouter;
}(_litElement.LitElement); // install


exports["default"] = FsRouter;
customElements.define('fs-router', FsRouter);

},{"../lib/markdown.js":6,"@babel/runtime/helpers/asyncToGenerator":9,"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/getPrototypeOf":14,"@babel/runtime/helpers/inherits":15,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/possibleConstructorReturn":20,"@babel/runtime/regenerator":27,"lit-element":31}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _markdown = require("../lib/markdown.js");

var _litElement = require("lit-element");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["<style>\n        :host {\n          font-family: sans-serif;\n        }\n        :host div {\n          padding-left: 2rem;\n        }\n      </style>\n      <div>\n        ", "\n      </div>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var md;

var MdView =
/*#__PURE__*/
function (_LitElement) {
  (0, _inherits2["default"])(MdView, _LitElement);
  (0, _createClass2["default"])(MdView, null, [{
    key: "properties",
    get: function get() {
      return {
        src: {
          type: String
        },
        content: {
          type: Object
        },
        customElements: {
          type: String
        }
      };
    }
  }]);

  function MdView() {
    var _this;

    (0, _classCallCheck2["default"])(this, MdView);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MdView).call(this));

    for (var _i = 0, _Array$from = Array.from(_this.attributes); _i < _Array$from.length; _i++) {
      var attribute = _Array$from[_i];

      if (attribute.name === 'custom-elements') {
        (function () {
          var lexer = new _markdown.CustomLexer(attribute.value);
          var defaults = {
            gfm: true,
            tables: true,
            taskLists: true,
            dataLine: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            sanitizer: null,
            mangle: true,
            smartLists: false,
            silent: false,
            highlight: null,
            langPrefix: 'lang-',
            smartypants: false,
            headerPrefix: '',
            renderer: new _markdown.Renderer(),
            xhtml: false
          };

          md = function md(src) {
            return _markdown.Parser.parse(lexer.lex(src, defaults), defaults);
          };
        })();
      }
    }

    _this.content = (0, _litElement.html)([md(_this.innerHTML)]);
    return _this;
  }

  (0, _createClass2["default"])(MdView, [{
    key: "render",
    value: function render() {
      return this.content;
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated(changedProperties) {
      var _this2 = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = changedProperties.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if (key === 'src') {
            if (this.src) {
              this.fetchMarkdown(this.src).then(function (result) {
                _this2.content = result;
              });
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "fetchMarkdown",
    value: function () {
      var _fetchMarkdown = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(mdSource) {
        var result, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch(mdSource);

              case 3:
                response = _context.sent;

                if (!(response && response.ok)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return response.text();

              case 7:
                result = _context.sent;

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 13:
                return _context.abrupt("return", (0, _litElement.html)(_templateObject(), (0, _litElement.html)([md(result)])));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      function fetchMarkdown(_x) {
        return _fetchMarkdown.apply(this, arguments);
      }

      return fetchMarkdown;
    }()
  }]);
  return MdView;
}(_litElement.LitElement); // install


exports["default"] = MdView;
customElements.define('md-view', MdView);

},{"../lib/markdown.js":6,"@babel/runtime/helpers/asyncToGenerator":9,"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/getPrototypeOf":14,"@babel/runtime/helpers/inherits":15,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/possibleConstructorReturn":20,"@babel/runtime/helpers/taggedTemplateLiteral":23,"@babel/runtime/regenerator":27,"lit-element":31}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AppShell", {
  enumerable: true,
  get: function get() {
    return _appShell["default"];
  }
});
Object.defineProperty(exports, "MdView", {
  enumerable: true,
  get: function get() {
    return _mdView["default"];
  }
});
Object.defineProperty(exports, "FlipperCard", {
  enumerable: true,
  get: function get() {
    return _flipperCard["default"];
  }
});
Object.defineProperty(exports, "FsRouter", {
  enumerable: true,
  get: function get() {
    return _fsRouter["default"];
  }
});

var _appShell = _interopRequireDefault(require("./components/app-shell.js"));

var _mdView = _interopRequireDefault(require("./components/md-view.js"));

var _flipperCard = _interopRequireDefault(require("./components/flipper-card.js"));

var _fsRouter = _interopRequireDefault(require("./components/fs-router.js"));

},{"./components/app-shell.js":1,"./components/flipper-card.js":2,"./components/fs-router.js":3,"./components/md-view.js":4,"@babel/runtime/helpers/interopRequireDefault":16}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.md = md;
exports.CustomLexer = exports.Renderer = exports.Parser = exports.Lexer = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _md = _interopRequireDefault(require("md"));

var Lexer = _md["default"].Lexer,
    Parser = _md["default"].Parser,
    Renderer = _md["default"].Renderer;
exports.Renderer = Renderer;
exports.Parser = Parser;
exports.Lexer = Lexer;

var CustomLexer =
/*#__PURE__*/
function (_Lexer) {
  (0, _inherits2["default"])(CustomLexer, _Lexer);

  function CustomLexer(customElements) {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomLexer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CustomLexer).call(this));
    _this.rules.custom = new RegExp("^ *<(".concat(customElements, ").*>.*<\\/\\1>"), 's');
    return _this;
  }

  (0, _createClass2["default"])(CustomLexer, [{
    key: "token",
    value: function token(src, top, bq) {
      src = src.replace(/^ +$/gm, '');
      var next;
      var loose;
      var cap;
      var bull;
      var b;
      var item;
      var space;
      var i;
      var l;
      var checked;

      while (src) {
        // custom elements
        if (cap = this.rules.custom.exec(src)) {
          src = src.substring(cap[0].length);

          if (cap[0].length > 1) {
            this.tokens.push({
              type: 'html',
              text: cap[0]
            });
          }
        } // newline


        if (cap = this.rules.newline.exec(src)) {
          src = src.substring(cap[0].length);

          if (cap[0].length > 1) {
            this.tokens.push({
              type: 'space'
            });
          }
        } // code


        if (cap = this.rules.code.exec(src)) {
          src = src.substring(cap[0].length);
          cap = cap[0].replace(/^ {4}/gm, '');
          this.tokens.push({
            type: 'code',
            text: this.options.pedantic ? cap : cap.replace(/\n+$/, '')
          });
          continue;
        } // fences (gfm)


        if (cap = this.rules.fences.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'code',
            lang: cap[2],
            text: cap[3] || ''
          });
          continue;
        } // heading


        if (cap = this.rules.heading.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'heading',
            depth: cap[1].length,
            text: cap[2]
          });
          continue;
        } // table no leading pipe (gfm)


        if (top && (cap = this.rules.nptable.exec(src))) {
          src = src.substring(cap[0].length);
          item = {
            type: 'table',
            header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3].replace(/\n$/, '').split('\n')
          };

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = item.cells[i].split(/ *\| */);
          }

          this.tokens.push(item);
          continue;
        } // lheading


        if (cap = this.rules.lheading.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'heading',
            depth: cap[2] === '=' ? 1 : 2,
            text: cap[1]
          });
          continue;
        } // hr


        if (cap = this.rules.hr.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'hr'
          });
          continue;
        } // blockquote


        if (cap = this.rules.blockquote.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'blockquote_start'
          });
          cap = cap[0].replace(/^ *> ?/gm, ''); // Pass `top` to keep the current
          // "toplevel" state. This is exactly
          // how markdown.pl works.

          this.token(cap, top, true);
          this.tokens.push({
            type: 'blockquote_end'
          });
          continue;
        } // list


        if (cap = this.rules.list.exec(src)) {
          src = src.substring(cap[0].length);
          bull = cap[2];
          this.tokens.push({
            type: 'list_start',
            ordered: bull.length > 1
          }); // Get each top-level item.

          cap = cap[0].match(this.rules.item);
          next = false;
          l = cap.length;
          i = 0;

          for (; i < l; i++) {
            item = cap[i]; // Remove the list item's bullet
            // so it is seen as the next token.

            space = item.length;
            item = item.replace(/^ *([*+-]|\d+\.) +/, '');

            if (this.options.gfm && this.options.taskLists) {
              checked = this.rules.checkbox.exec(item);

              if (checked) {
                checked = checked[1] === 'x';
                item = item.replace(this.rules.checkbox, '');
              } else {
                checked = undefined;
              }
            } // Outdent whatever the
            // list item contains. Hacky.


            if (item.indexOf('\n ') !== -1) {
              space -= item.length;
              item = this.options.pedantic ? item.replace(/^ {1,4}/gm, '') : item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '');
            } // Determine whether the next list item belongs here.
            // Backpedal if it does not belong in this list.


            if (this.options.smartLists && i !== l - 1) {
              b = this.rules.bullet.exec(cap[i + 1])[0];

              if (bull !== b && !(bull.length > 1 && b.length > 1)) {
                src = cap.slice(i + 1).join('\n') + src;
                i = l - 1;
              }
            } // Determine whether item is loose or not.
            // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
            // for discount behavior.


            loose = next || /\n\n(?!\s*$)/.test(item);

            if (i !== l - 1) {
              next = item.charAt(item.length - 1) === '\n';
              if (!loose) loose = next;
            }

            this.tokens.push({
              checked: checked,
              type: loose ? 'loose_item_start' : 'list_item_start'
            }); // Recurse.

            this.token(item, false, bq);
            this.tokens.push({
              type: 'list_item_end'
            });
          }

          this.tokens.push({
            type: 'list_end'
          });
          continue;
        } // html


        if (cap = this.rules.html.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: this.options.sanitize ? 'paragraph' : 'html',
            pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
            text: cap[0]
          });
          continue;
        } // def


        if (!bq && top && (cap = this.rules.def.exec(src))) {
          src = src.substring(cap[0].length);
          this.tokens.links[cap[1].toLowerCase()] = {
            href: cap[2],
            title: cap[3]
          };
          continue;
        } // table (gfm)


        if (top && (cap = this.rules.table.exec(src))) {
          src = src.substring(cap[0].length);
          item = {
            type: 'table',
            header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
          };

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
          }

          this.tokens.push(item);
          continue;
        } // top-level paragraph


        if (top && (cap = this.rules.paragraph.exec(src))) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'paragraph',
            text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
          });
          continue;
        } // text


        if (cap = this.rules.text.exec(src)) {
          // Top-level should never reach here.
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'text',
            text: cap[0]
          });
          continue;
        }

        if (src) {
          throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
        }
      }

      return this.tokens;
    }
  }]);
  return CustomLexer;
}(Lexer);

exports.CustomLexer = CustomLexer;

function md(src, options) {
  var defaults = {
    gfm: true,
    tables: true,
    taskLists: true,
    dataLine: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    sanitizer: null,
    mangle: true,
    smartLists: false,
    silent: false,
    highlight: null,
    langPrefix: 'lang-',
    smartypants: false,
    headerPrefix: '',
    renderer: new Renderer(),
    xhtml: false
  };
  var lexer = new CustomLexer(options);
  var opts = Object.assign({}, defaults, options);
  return Parser.parse(lexer.lex(src, opts), opts);
}

},{"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/getPrototypeOf":14,"@babel/runtime/helpers/inherits":15,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/possibleConstructorReturn":20,"md":45}],7:[function(require,module,exports){
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],8:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],9:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],10:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],11:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
},{"./setPrototypeOf":21}],12:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],13:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf");

var superPropBase = require("./superPropBase");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
},{"./getPrototypeOf":14,"./superPropBase":22}],14:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],15:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":21}],16:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],17:[function(require,module,exports){
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
},{}],18:[function(require,module,exports){
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],19:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],20:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":25,"./assertThisInitialized":8}],21:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],22:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
},{"./getPrototypeOf":14}],23:[function(require,module,exports){
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;
},{}],24:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":7,"./iterableToArray":18,"./nonIterableSpread":19}],25:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],26:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf");

var setPrototypeOf = require("./setPrototypeOf");

var isNativeFunction = require("./isNativeFunction");

var construct = require("./construct");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
},{"./construct":11,"./getPrototypeOf":14,"./isNativeFunction":17,"./setPrototypeOf":21}],27:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":46}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = exports.unsafeCSS = exports.CSSResult = exports.supportsAdoptingStyleSheets = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
exports.supportsAdoptingStyleSheets = supportsAdoptingStyleSheets;
var constructionToken = Symbol();

var CSSResult =
/*#__PURE__*/
function () {
  function CSSResult(cssText, safeToken) {
    (0, _classCallCheck2["default"])(this, CSSResult);

    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
  } // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.


  (0, _createClass2["default"])(CSSResult, [{
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }, {
    key: "styleSheet",
    get: function get() {
      if (this._styleSheet === undefined) {
        // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
        // is constructable.
        if (supportsAdoptingStyleSheets) {
          this._styleSheet = new CSSStyleSheet();

          this._styleSheet.replaceSync(this.cssText);
        } else {
          this._styleSheet = null;
        }
      }

      return this._styleSheet;
    }
  }]);
  return CSSResult;
}();
/**
 * Wrap a value for interpolation in a css tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */


exports.CSSResult = CSSResult;

var unsafeCSS = function unsafeCSS(value) {
  return new CSSResult(String(value), constructionToken);
};

exports.unsafeCSS = unsafeCSS;

var textFromCSSResult = function textFromCSSResult(value) {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else {
    throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
  }
};
/**
 * Template tag which which can be used with LitElement's `style` property to
 * set element styles. For security reasons, only literal string values may be
 * used. To incorporate non-literal values `unsafeCSS` may be used inside a
 * template string part.
 */


var css = function css(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var cssText = values.reduce(function (acc, v, idx) {
    return acc + textFromCSSResult(v) + strings[idx + 1];
  }, strings[0]);
  return new CSSResult(cssText, constructionToken);
};

exports.css = css;

},{"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/interopRequireDefault":16}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.property = property;
exports.query = query;
exports.queryAll = queryAll;
exports.eventOptions = exports.customElement = void 0;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var legacyCustomElement = function legacyCustomElement(tagName, clazz) {
  window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
  // subtype of the decorated class when clazz is typed as
  // `Constructor<HTMLElement>` for some reason.
  // `Constructor<HTMLElement>` is helpful to make sure the decorator is
  // applied to elements however.
  // tslint:disable-next-line:no-any

  return clazz;
};

var standardCustomElement = function standardCustomElement(tagName, descriptor) {
  var kind = descriptor.kind,
      elements = descriptor.elements;
  return {
    kind: kind,
    elements: elements,
    // This callback is called once the class is otherwise fully defined
    finisher: function finisher(clazz) {
      window.customElements.define(tagName, clazz);
    }
  };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * @param tagName the name of the custom element to define
 */


var customElement = function customElement(tagName) {
  return function (classOrDescriptor) {
    return typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
  };
};

exports.customElement = customElement;

var standardProperty = function standardProperty(options, element) {
  // When decorating an accessor, pass it through and add property metadata.
  // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
  // stomp over the user's accessor.
  if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
    return Object.assign({}, element, {
      finisher: function finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    });
  } else {
    // createProperty() takes care of defining the property, but we still
    // must return some kind of descriptor, so return a descriptor for an
    // unused prototype field. The finisher calls createProperty().
    return {
      kind: 'field',
      key: Symbol(),
      placement: 'own',
      descriptor: {},
      // When @babel/plugin-proposal-decorators implements initializers,
      // do this instead of the initializer below. See:
      // https://github.com/babel/babel/issues/9260 extras: [
      //   {
      //     kind: 'initializer',
      //     placement: 'own',
      //     initializer: descriptor.initializer,
      //   }
      // ],
      // tslint:disable-next-line:no-any decorator
      initializer: function initializer() {
        if (typeof element.initializer === 'function') {
          this[element.key] = element.initializer.call(this);
        }
      },
      finisher: function finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    };
  }
};

var legacyProperty = function legacyProperty(options, proto, name) {
  proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A `PropertyDeclaration` may optionally be
 * supplied to configure property features.
 *
 * @ExportDecoratedItems
 */


function property(options) {
  // tslint:disable-next-line:no-any decorator
  return function (protoOrDescriptor, name) {
    return name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
  };
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */


function query(selector) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        return this.renderRoot.querySelector(selector);
      },
      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */


function queryAll(selector) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        return this.renderRoot.querySelectorAll(selector);
      },
      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}

var legacyQuery = function legacyQuery(descriptor, proto, name) {
  Object.defineProperty(proto, name, descriptor);
};

var standardQuery = function standardQuery(descriptor, element) {
  return {
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor: descriptor
  };
};

var standardEventOptions = function standardEventOptions(options, element) {
  return Object.assign({}, element, {
    finisher: function finisher(clazz) {
      Object.assign(clazz.prototype[element.key], options);
    }
  });
};

var legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
function legacyEventOptions(options, proto, name) {
  Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifis event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 *
 *     class MyElement {
 *
 *       clicked = false;
 *
 *       render() {
 *         return html`<div @click=${this._onClick}`><button></button></div>`;
 *       }
 *
 *       @eventOptions({capture: true})
 *       _onClick(e) {
 *         this.clicked = true;
 *       }
 *     }
 */


var eventOptions = function eventOptions(options) {
  return (// Return value typed as any to prevent TypeScript from complaining that
    // standard decorator function signature does not match TypeScript decorator
    // signature
    // TODO(kschaaf): unclear why it was only failing on this decorator and not
    // the others
    function (protoOrDescriptor, name) {
      return name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
    }
  );
};

exports.eventOptions = eventOptions;

},{}],30:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdatingElement = exports.notEqual = exports.defaultConverter = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty = function (prop, _obj) {
  return prop;
};

var defaultConverter = {
  toAttribute: function toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? '' : null;

      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        return value == null ? value : JSON.stringify(value);
    }

    return value;
  },
  fromAttribute: function fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;

      case Number:
        return value === null ? null : Number(value);

      case Object:
      case Array:
        return JSON.parse(value);
    }

    return value;
  }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */

exports.defaultConverter = defaultConverter;

var notEqual = function notEqual(value, old) {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};

exports.notEqual = notEqual;
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var microtaskPromise = Promise.resolve(true);
var STATE_HAS_UPDATED = 1;
var STATE_UPDATE_REQUESTED = 1 << 2;
var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
var STATE_HAS_CONNECTED = 1 << 5;
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */

var UpdatingElement =
/*#__PURE__*/
function (_HTMLElement) {
  (0, _inherits2["default"])(UpdatingElement, _HTMLElement);

  function UpdatingElement() {
    var _this;

    (0, _classCallCheck2["default"])(this, UpdatingElement);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(UpdatingElement).call(this));
    _this._updateState = 0;
    _this._instanceProperties = undefined;
    _this._updatePromise = microtaskPromise;
    _this._hasConnectedResolver = undefined;
    /**
     * Map with keys for any properties that have changed since the last
     * update cycle with previous values.
     */

    _this._changedProperties = new Map();
    /**
     * Map with keys of properties that should be reflected when updated.
     */

    _this._reflectingProperties = undefined;

    _this.initialize();

    return _this;
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */


  (0, _createClass2["default"])(UpdatingElement, [{
    key: "initialize",

    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    value: function initialize() {
      this._saveInstanceProperties(); // ensures first update will be caught by an early access of `updateComplete`


      this._requestUpdate();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */

  }, {
    key: "_saveInstanceProperties",
    value: function _saveInstanceProperties() {
      var _this2 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      this.constructor._classProperties.forEach(function (_v, p) {
        if (_this2.hasOwnProperty(p)) {
          var value = _this2[p];
          delete _this2[p];

          if (!_this2._instanceProperties) {
            _this2._instanceProperties = new Map();
          }

          _this2._instanceProperties.set(p, value);
        }
      });
    }
    /**
     * Applies previously saved instance properties.
     */

  }, {
    key: "_applyInstanceProperties",
    value: function _applyInstanceProperties() {
      var _this3 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      // tslint:disable-next-line:no-any
      this._instanceProperties.forEach(function (v, p) {
        return _this3[p] = v;
      });

      this._instanceProperties = undefined;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this._updateState = this._updateState | STATE_HAS_CONNECTED; // Ensure first connection completes an update. Updates cannot complete before
      // connection and if one is pending connection the `_hasConnectionResolver`
      // will exist. If so, resolve it to complete the update, otherwise
      // requestUpdate.

      if (this._hasConnectedResolver) {
        this._hasConnectedResolver();

        this._hasConnectedResolver = undefined;
      }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
    /**
     * Synchronizes property values when attributes change.
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, value) {
      if (old !== value) {
        this._attributeToProperty(name, value);
      }
    }
  }, {
    key: "_propertyToAttribute",
    value: function _propertyToAttribute(name, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
      var ctor = this.constructor;

      var attr = ctor._attributeNameForProperty(name, options);

      if (attr !== undefined) {
        var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


        if (attrValue === undefined) {
          return;
        } // Track if the property is being reflected to avoid
        // setting the property again via `attributeChangedCallback`. Note:
        // 1. this takes advantage of the fact that the callback is synchronous.
        // 2. will behave incorrectly if multiple attributes are in the reaction
        // stack at time of calling. However, since we process attributes
        // in `update` this should not be possible (or an extreme corner case
        // that we'd like to discover).
        // mark state reflecting


        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

        if (attrValue == null) {
          this.removeAttribute(attr);
        } else {
          this.setAttribute(attr, attrValue);
        } // mark state not reflecting


        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
      }
    }
  }, {
    key: "_attributeToProperty",
    value: function _attributeToProperty(name, value) {
      // Use tracking info to avoid deserializing attribute value if it was
      // just set from a property setter.
      if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
        return;
      }

      var ctor = this.constructor;

      var propName = ctor._attributeToPropertyMap.get(name);

      if (propName !== undefined) {
        var options = ctor._classProperties.get(propName) || defaultPropertyDeclaration; // mark state reflecting

        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
        this[propName] = // tslint:disable-next-line:no-any
        ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
      }
    }
    /**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */

  }, {
    key: "_requestUpdate",
    value: function _requestUpdate(name, oldValue) {
      var shouldRequestUpdate = true; // If we have a property key, perform property update steps.

      if (name !== undefined) {
        var ctor = this.constructor;
        var options = ctor._classProperties.get(name) || defaultPropertyDeclaration;

        if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
          if (!this._changedProperties.has(name)) {
            this._changedProperties.set(name, oldValue);
          } // Add to reflecting properties set.
          // Note, it's important that every change has a chance to add the
          // property to `_reflectingProperties`. This ensures setting
          // attribute + property reflects correctly.


          if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
            if (this._reflectingProperties === undefined) {
              this._reflectingProperties = new Map();
            }

            this._reflectingProperties.set(name, options);
          }
        } else {
          // Abort the request if the property should not be considered changed.
          shouldRequestUpdate = false;
        }
      }

      if (!this._hasRequestedUpdate && shouldRequestUpdate) {
        this._enqueueUpdate();
      }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */

  }, {
    key: "requestUpdate",
    value: function requestUpdate(name, oldValue) {
      this._requestUpdate(name, oldValue);

      return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */

  }, {
    key: "_enqueueUpdate",
    value: function () {
      var _enqueueUpdate2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _this4 = this;

        var resolve, reject, previousUpdatePromise, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Mark state updating...
                this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                previousUpdatePromise = this._updatePromise;
                this._updatePromise = new Promise(function (res, rej) {
                  resolve = res;
                  reject = rej;
                });
                _context.prev = 3;
                _context.next = 6;
                return previousUpdatePromise;

              case 6:
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);

              case 10:
                if (this._hasConnected) {
                  _context.next = 13;
                  break;
                }

                _context.next = 13;
                return new Promise(function (res) {
                  return _this4._hasConnectedResolver = res;
                });

              case 13:
                _context.prev = 13;
                result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                // enable coordinating updates with a scheduler. Note, the result is
                // checked to avoid delaying an additional microtask unless we need to.

                if (!(result != null)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 18;
                return result;

              case 18:
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t1 = _context["catch"](13);
                reject(_context.t1);

              case 23:
                resolve(!this._hasRequestedUpdate);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 8], [13, 20]]);
      }));

      function _enqueueUpdate() {
        return _enqueueUpdate2.apply(this, arguments);
      }

      return _enqueueUpdate;
    }()
  }, {
    key: "performUpdate",

    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    value: function performUpdate() {
      // Mixin instance properties once, if they exist.
      if (this._instanceProperties) {
        this._applyInstanceProperties();
      }

      var shouldUpdate = false;
      var changedProperties = this._changedProperties;

      try {
        shouldUpdate = this.shouldUpdate(changedProperties);

        if (shouldUpdate) {
          this.update(changedProperties);
        }
      } catch (e) {
        // Prevent `firstUpdated` and `updated` from running when there's an
        // update exception.
        shouldUpdate = false;
        throw e;
      } finally {
        // Ensure element can accept additional updates after an exception.
        this._markUpdated();
      }

      if (shouldUpdate) {
        if (!(this._updateState & STATE_HAS_UPDATED)) {
          this._updateState = this._updateState | STATE_HAS_UPDATED;
          this.firstUpdated(changedProperties);
        }

        this.updated(changedProperties);
      }
    }
  }, {
    key: "_markUpdated",
    value: function _markUpdated() {
      this._changedProperties = new Map();
      this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update. This getter can be implemented to
     * await additional state. For example, it is sometimes useful to await a
     * rendered element before fulfilling this Promise. To do this, first await
     * `super.updateComplete` then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */

  }, {
    key: "shouldUpdate",

    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    value: function shouldUpdate(_changedProperties) {
      return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(_changedProperties) {
      var _this5 = this;

      if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
        // Use forEach so this works even if for/of loops are compiled to for
        // loops expecting arrays
        this._reflectingProperties.forEach(function (v, k) {
          return _this5._propertyToAttribute(k, _this5[k], v);
        });

        this._reflectingProperties = undefined;
      }
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "updated",
    value: function updated(_changedProperties) {}
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "firstUpdated",
    value: function firstUpdated(_changedProperties) {}
  }, {
    key: "_hasConnected",
    get: function get() {
      return this._updateState & STATE_HAS_CONNECTED;
    }
  }, {
    key: "_hasRequestedUpdate",
    get: function get() {
      return this._updateState & STATE_UPDATE_REQUESTED;
    }
  }, {
    key: "hasUpdated",
    get: function get() {
      return this._updateState & STATE_HAS_UPDATED;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this._updatePromise;
    }
  }], [{
    key: "_ensureClassProperties",

    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */

    /** @nocollapse */
    value: function _ensureClassProperties() {
      var _this6 = this;

      // ensure private storage for property declarations.
      if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
        this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

        var superProperties = Object.getPrototypeOf(this)._classProperties;

        if (superProperties !== undefined) {
          superProperties.forEach(function (v, k) {
            return _this6._classProperties.set(k, v);
          });
        }
      }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */

  }, {
    key: "createProperty",
    value: function createProperty(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

      // Note, since this can be called by the `@property` decorator which
      // is called before `finalize`, we ensure storage exists for property
      // metadata.
      this._ensureClassProperties();

      this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
      // it would be lost otherwise and that would never be the user's intention;
      // Instead, we expect users to call `requestUpdate` themselves from
      // user-defined accessors. Note that if the super has an accessor we will
      // still overwrite it


      if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
        return;
      }

      var key = (0, _typeof2["default"])(name) === 'symbol' ? Symbol() : "__".concat(name);
      Object.defineProperty(this.prototype, name, {
        // tslint:disable-next-line:no-any no symbol in index
        get: function get() {
          return this[key];
        },
        set: function set(value) {
          // tslint:disable-next-line:no-any no symbol in index
          var oldValue = this[name]; // tslint:disable-next-line:no-any no symbol in index

          this[key] = value;

          this._requestUpdate(name, oldValue);
        },
        configurable: true,
        enumerable: true
      });
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */

  }, {
    key: "finalize",
    value: function finalize() {
      if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this)) && this.finalized) {
        return;
      } // finalize any superclasses


      var superCtor = Object.getPrototypeOf(this);

      if (typeof superCtor.finalize === 'function') {
        superCtor.finalize();
      }

      this.finalized = true;

      this._ensureClassProperties(); // initialize Map populated in observedAttributes


      this._attributeToPropertyMap = new Map(); // make any properties
      // Note, only process "own" properties since this element will inherit
      // any properties defined on the superClass, and finalization ensures
      // the entire prototype chain is finalized.

      if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
        var props = this.properties; // support symbols in properties (IE11 does not support this)

        var propKeys = [].concat((0, _toConsumableArray2["default"])(Object.getOwnPropertyNames(props)), (0, _toConsumableArray2["default"])(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;
            // note, use of `any` is due to TypeSript lack of support for symbol in
            // index types
            // tslint:disable-next-line:no-any no symbol in index
            this.createProperty(p, props[p]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */

  }, {
    key: "_attributeNameForProperty",
    value: function _attributeNameForProperty(name, options) {
      var attribute = options.attribute;
      return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */

  }, {
    key: "_valueHasChanged",
    value: function _valueHasChanged(value, old) {
      var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
      return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */

  }, {
    key: "_propertyValueFromAttribute",
    value: function _propertyValueFromAttribute(value, options) {
      var type = options.type;
      var converter = options.converter || defaultConverter;
      var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
      return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */

  }, {
    key: "_propertyValueToAttribute",
    value: function _propertyValueToAttribute(value, options) {
      if (options.reflect === undefined) {
        return;
      }

      var type = options.type;
      var converter = options.converter;
      var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
      return toAttribute(value, type);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      var _this7 = this;

      // note: piggy backing on this to ensure we're finalized.
      this.finalize();
      var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays

      this._classProperties.forEach(function (v, p) {
        var attr = _this7._attributeNameForProperty(p, v);

        if (attr !== undefined) {
          _this7._attributeToPropertyMap.set(attr, p);

          attributes.push(attr);
        }
      });

      return attributes;
    }
  }]);
  return UpdatingElement;
}((0, _wrapNativeSuper2["default"])(HTMLElement));
/**
 * Marks class as having finished creating properties.
 */


exports.UpdatingElement = UpdatingElement;
UpdatingElement.finalized = true;

},{"@babel/runtime/helpers/asyncToGenerator":9,"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/getPrototypeOf":14,"@babel/runtime/helpers/inherits":15,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/possibleConstructorReturn":20,"@babel/runtime/helpers/toConsumableArray":24,"@babel/runtime/helpers/typeof":25,"@babel/runtime/helpers/wrapNativeSuper":26,"@babel/runtime/regenerator":27}],31:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  LitElement: true,
  html: true,
  svg: true,
  TemplateResult: true,
  SVGTemplateResult: true
};
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function get() {
    return _litHtml2.html;
  }
});
Object.defineProperty(exports, "svg", {
  enumerable: true,
  get: function get() {
    return _litHtml2.svg;
  }
});
Object.defineProperty(exports, "TemplateResult", {
  enumerable: true,
  get: function get() {
    return _litHtml2.TemplateResult;
  }
});
Object.defineProperty(exports, "SVGTemplateResult", {
  enumerable: true,
  get: function get() {
    return _litHtml2.SVGTemplateResult;
  }
});
exports.LitElement = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _litHtml = require("lit-html");

var _shadyRender = require("lit-html/lib/shady-render.js");

var _updatingElement = require("./lib/updating-element.js");

Object.keys(_updatingElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _updatingElement[key];
    }
  });
});

var _decorators = require("./lib/decorators.js");

Object.keys(_decorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _decorators[key];
    }
  });
});

var _litHtml2 = require("lit-html/lit-html.js");

var _cssTag = require("./lib/css-tag.js");

Object.keys(_cssTag).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cssTag[key];
    }
  });
});

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.0.1');
/**
 * Minimal implementation of Array.prototype.flat
 * @param arr the array to flatten
 * @param result the accumlated result
 */

function arrayFlat(styles) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  for (var i = 0, length = styles.length; i < length; i++) {
    var value = styles[i];

    if (Array.isArray(value)) {
      arrayFlat(value, result);
    } else {
      result.push(value);
    }
  }

  return result;
}
/** Deeply flattens styles array. Uses native flat if available. */


var flattenStyles = function flattenStyles(styles) {
  return styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
};

var LitElement =
/*#__PURE__*/
function (_UpdatingElement) {
  (0, _inherits2["default"])(LitElement, _UpdatingElement);

  function LitElement() {
    (0, _classCallCheck2["default"])(this, LitElement);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LitElement).apply(this, arguments));
  }

  (0, _createClass2["default"])(LitElement, [{
    key: "initialize",

    /**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */
    value: function initialize() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(LitElement.prototype), "initialize", this).call(this);
      this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
      // element's getRootNode(). While this could be done, we're choosing not to
      // support this now since it would require different logic around de-duping.

      if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
        this.adoptStyles();
      }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */

  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow({
        mode: 'open'
      });
    }
    /**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */

  }, {
    key: "adoptStyles",
    value: function adoptStyles() {
      var styles = this.constructor._styles;

      if (styles.length === 0) {
        return;
      } // There are three separate cases here based on Shadow DOM support.
      // (1) shadowRoot polyfilled: use ShadyCSS
      // (2) shadowRoot.adoptedStyleSheets available: use it.
      // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
      // rendering


      if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
          return s.cssText;
        }), this.localName);
      } else if (_cssTag.supportsAdoptingStyleSheets) {
        this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
          return s.styleSheet;
        });
      } else {
        // This must be done after rendering so the actual style insertion is done
        // in `update`.
        this._needsShimAdoptedStyleSheets = true;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
      // connected after first update.

      if (this.hasUpdated && window.ShadyCSS !== undefined) {
        window.ShadyCSS.styleElement(this);
      }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this = this;

      (0, _get2["default"])((0, _getPrototypeOf2["default"])(LitElement.prototype), "update", this).call(this, changedProperties);
      var templateResult = this.render();

      if (templateResult instanceof _litHtml.TemplateResult) {
        this.constructor.render(templateResult, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        });
      } // When native Shadow DOM is used but adoptedStyles are not supported,
      // insert styling after rendering to ensure adoptedStyles have highest
      // priority.


      if (this._needsShimAdoptedStyleSheets) {
        this._needsShimAdoptedStyleSheets = false;

        this.constructor._styles.forEach(function (s) {
          var style = document.createElement('style');
          style.textContent = s.cssText;

          _this.renderRoot.appendChild(style);
        });
      }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */

  }, {
    key: "render",
    value: function render() {}
  }], [{
    key: "finalize",

    /** @nocollapse */
    value: function finalize() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(LitElement), "finalize", this).call(this); // Prepare styling that is stamped at first render time. Styling
      // is built from user provided `styles` or is inherited from the superclass.

      this._styles = this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ? this._getUniqueStyles() : this._styles || [];
    }
    /** @nocollapse */

  }, {
    key: "_getUniqueStyles",
    value: function _getUniqueStyles() {
      // Take care not to call `this.styles` multiple times since this generates
      // new CSSResults each time.
      // TODO(sorvell): Since we do not cache CSSResults by input, any
      // shared styles will generate new stylesheet objects, which is wasteful.
      // This should be addressed when a browser ships constructable
      // stylesheets.
      var userStyles = this.styles;
      var styles = [];

      if (Array.isArray(userStyles)) {
        var flatStyles = flattenStyles(userStyles); // As a performance optimization to avoid duplicated styling that can
        // occur especially when composing via subclassing, de-duplicate styles
        // preserving the last item in the list. The last item is kept to
        // try to preserve cascade order with the assumption that it's most
        // important that last added styles override previous styles.

        var styleSet = flatStyles.reduceRight(function (set, s) {
          set.add(s); // on IE set.add does not return the set.

          return set;
        }, new Set()); // Array.from does not work on Set in IE

        styleSet.forEach(function (v) {
          return styles.unshift(v);
        });
      } else if (userStyles) {
        styles.push(userStyles);
      }

      return styles;
    }
  }]);
  return LitElement;
}(_updatingElement.UpdatingElement);
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 */


exports.LitElement = LitElement;
LitElement.finalized = true;
/**
 * Render method used to render the lit-html TemplateResult to the element's
 * DOM.
 * @param {TemplateResult} Template to render.
 * @param {Element|DocumentFragment} Node into which to render.
 * @param {String} Element name.
 * @nocollapse
 */

LitElement.render = _shadyRender.render;

},{"./lib/css-tag.js":28,"./lib/decorators.js":29,"./lib/updating-element.js":30,"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/get":13,"@babel/runtime/helpers/getPrototypeOf":14,"@babel/runtime/helpers/inherits":15,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/possibleConstructorReturn":20,"lit-html":44,"lit-html/lib/shady-render.js":39,"lit-html/lit-html.js":44}],32:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTemplateProcessor = exports.DefaultTemplateProcessor = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _parts = require("./parts.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
var DefaultTemplateProcessor =
/*#__PURE__*/
function () {
  function DefaultTemplateProcessor() {
    (0, _classCallCheck2["default"])(this, DefaultTemplateProcessor);
  }

  (0, _createClass2["default"])(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",

    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    value: function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];

      if (prefix === '.') {
        var _comitter = new _parts.PropertyCommitter(element, name.slice(1), strings);

        return _comitter.parts;
      }

      if (prefix === '@') {
        return [new _parts.EventPart(element, name.slice(1), options.eventContext)];
      }

      if (prefix === '?') {
        return [new _parts.BooleanAttributePart(element, name.slice(1), strings)];
      }

      var comitter = new _parts.AttributeCommitter(element, name, strings);
      return comitter.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */

  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new _parts.NodePart(options);
    }
  }]);
  return DefaultTemplateProcessor;
}();

exports.DefaultTemplateProcessor = DefaultTemplateProcessor;
var defaultTemplateProcessor = new DefaultTemplateProcessor();
exports.defaultTemplateProcessor = defaultTemplateProcessor;

},{"./parts.js":37,"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/interopRequireDefault":16}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDirective = exports.directive = void 0;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
/**
 * Brands a function as a directive so that lit-html will call the function
 * during template rendering, rather than passing as a value.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object
 *
 * @example
 *
 * ```
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 * ```
 */
// tslint:disable-next-line:no-any

var directive = function directive(f) {
  return function () {
    var d = f.apply(void 0, arguments);
    directives.set(d, true);
    return d;
  };
};

exports.directive = directive;

var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};

exports.isDirective = isDirective;

},{}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNodes = exports.reparentNodes = exports.isCEPolyfill = void 0;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */

exports.isCEPolyfill = isCEPolyfill;

var reparentNodes = function reparentNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var node = start;

  while (node !== end) {
    var n = node.nextSibling;
    container.insertBefore(node, before);
    node = n;
  }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */


exports.reparentNodes = reparentNodes;

var removeNodes = function removeNodes(container, startNode) {
  var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var node = startNode;

  while (node !== endNode) {
    var n = node.nextSibling;
    container.removeChild(node);
    node = n;
  }
};

exports.removeNodes = removeNodes;

},{}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNodesFromTemplate = removeNodesFromTemplate;
exports.insertNodeIntoTemplate = insertNodeIntoTemplate;

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module shady-render
 */
var walkerNodeFilter = 133
/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */

function removeNodesFromTemplate(template, nodesToRemove) {
  var content = template.element.content,
      parts = template.parts;
  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var part = parts[partIndex];
  var nodeIndex = -1;
  var removeCount = 0;
  var nodesToRemoveInTemplate = [];
  var currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    var node = walker.currentNode; // End removal if stepped past the removing node

    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    } // A node to remove was found in the template


    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node); // Track node we're removing

      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    } // When removing, increment count by which to adjust subsequent part indices


    if (currentRemovingNode !== null) {
      removeCount++;
    }

    while (part !== undefined && part.index === nodeIndex) {
      // If part is in a removed node deactivate it by setting index to -1 or
      // adjust the index as needed.
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }

  nodesToRemoveInTemplate.forEach(function (n) {
    return n.parentNode.removeChild(n);
  });
}

var countNodes = function countNodes(node) {
  var count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

  for (var i = startIndex + 1; i < parts.length; i++) {
    var part = parts[i];

    if ((0, _template.isTemplatePartActive)(part)) {
      return i;
    }
  }

  return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */


function insertNodeIntoTemplate(template, node) {
  var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var content = template.element.content,
      parts = template.parts; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var insertCount = 0;
  var walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    var walkerNode = walker.currentNode;

    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }

    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      // If we've inserted the node, simply adjust all subsequent parts
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }

        return;
      }

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}

},{"./template.js":43}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nothing = exports.noChange = void 0;

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

exports.noChange = noChange;
var nothing = {};
exports.nothing = nothing;

},{}],37:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventPart = exports.PropertyPart = exports.PropertyCommitter = exports.BooleanAttributePart = exports.NodePart = exports.AttributePart = exports.AttributeCommitter = exports.isPrimitive = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _directive = require("./directive.js");

var _dom = require("./dom.js");

var _part = require("./part.js");

var _templateInstance = require("./template-instance.js");

var _templateResult = require("./template-result.js");

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */
var isPrimitive = function isPrimitive(value) {
  return value === null || !((0, _typeof2["default"])(value) === 'object' || typeof value === 'function');
};
/**
 * Sets attribute values for AttributeParts, so that the value is only set once
 * even if there are multiple parts for an attribute.
 */


exports.isPrimitive = isPrimitive;

var AttributeCommitter =
/*#__PURE__*/
function () {
  function AttributeCommitter(element, name, strings) {
    (0, _classCallCheck2["default"])(this, AttributeCommitter);
    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  (0, _createClass2["default"])(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var text = '';

      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = this.parts[i];

        if (part !== undefined) {
          var v = part.value;

          if (v != null && (Array.isArray(v) || // tslint:disable-next-line:no-any
          typeof v !== 'string' && v[Symbol.iterator])) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var t = _step.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            text += typeof v === 'string' ? v : String(v);
          }
        }
      }

      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);
  return AttributeCommitter;
}();

exports.AttributeCommitter = AttributeCommitter;

var AttributePart =
/*#__PURE__*/
function () {
  function AttributePart(comitter) {
    (0, _classCallCheck2["default"])(this, AttributePart);
    this.value = undefined;
    this.committer = comitter;
  }

  (0, _createClass2["default"])(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== _part.noChange && (!isPrimitive(value) || value !== this.value)) {
        this.value = value; // If the value is a not a directive, dirty the committer so that it'll
        // call setAttribute. If the value is a directive, it'll dirty the
        // committer if it calls setValue().

        if (!(0, _directive.isDirective)(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while ((0, _directive.isDirective)(this.value)) {
        var directive = this.value;
        this.value = _part.noChange;
        directive(this);
      }

      if (this.value === _part.noChange) {
        return;
      }

      this.committer.commit();
    }
  }]);
  return AttributePart;
}();

exports.AttributePart = AttributePart;

var NodePart =
/*#__PURE__*/
function () {
  function NodePart(options) {
    (0, _classCallCheck2["default"])(this, NodePart);
    this.value = undefined;
    this._pendingValue = undefined;
    this.options = options;
  }
  /**
   * Inserts this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  (0, _createClass2["default"])(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
      this.startNode = container.appendChild((0, _template.createMarker)());
      this.endNode = container.appendChild((0, _template.createMarker)());
    }
    /**
     * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
     * its next sibling must be static, unchanging nodes such as those that appear
     * in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part._insert(this.startNode = (0, _template.createMarker)());

      part._insert(this.endNode = (0, _template.createMarker)());
    }
    /**
     * Appends this part after `ref`
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref._insert(this.startNode = (0, _template.createMarker)());

      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while ((0, _directive.isDirective)(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part.noChange;
        directive(this);
      }

      var value = this._pendingValue;

      if (value === _part.noChange) {
        return;
      }

      if (isPrimitive(value)) {
        if (value !== this.value) {
          this._commitText(value);
        }
      } else if (value instanceof _templateResult.TemplateResult) {
        this._commitTemplateResult(value);
      } else if (value instanceof Node) {
        this._commitNode(value);
      } else if (Array.isArray(value) || // tslint:disable-next-line:no-any
      value[Symbol.iterator]) {
        this._commitIterable(value);
      } else if (value === _part.nothing) {
        this.value = _part.nothing;
        this.clear();
      } else {
        // Fallback, will render the string representation
        this._commitText(value);
      }
    }
  }, {
    key: "_insert",
    value: function _insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "_commitNode",
    value: function _commitNode(value) {
      if (this.value === value) {
        return;
      }

      this.clear();

      this._insert(value);

      this.value = value;
    }
  }, {
    key: "_commitText",
    value: function _commitText(value) {
      var node = this.startNode.nextSibling;
      value = value == null ? '' : value;

      if (node === this.endNode.previousSibling && node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          // If we only have a single text node between the markers, we can just
          // set its value, rather than replacing it.
          // TODO(justinfagnani): Can we just check if this.value is primitive?
          node.data = value;
        } else {
        this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
      }

      this.value = value;
    }
  }, {
    key: "_commitTemplateResult",
    value: function _commitTemplateResult(value) {
      var template = this.options.templateFactory(value);

      if (this.value instanceof _templateInstance.TemplateInstance && this.value.template === template) {
        this.value.update(value.values);
      } else {
        // Make sure we propagate the template processor from the TemplateResult
        // so that we use its syntax extension, etc. The template factory comes
        // from the render function options so that it can control template
        // caching and preprocessing.
        var instance = new _templateInstance.TemplateInstance(template, value.processor, this.options);

        var fragment = instance._clone();

        instance.update(value.values);

        this._commitNode(fragment);

        this.value = instance;
      }
    }
  }, {
    key: "_commitIterable",
    value: function _commitIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If _value is an array, then the previous render was of an
      // iterable and _value will contain the NodeParts from the previous
      // render. If _value is not an array, clear this part and make a new
      // array for NodeParts.
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      } // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render


      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          // Try to reuse an existing part
          itemPart = itemParts[partIndex]; // If no existing part, create a new one

          if (itemPart === undefined) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);

            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }

          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (partIndex < itemParts.length) {
        // Truncate the parts array so _value reflects the current state
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      (0, _dom.removeNodes)(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);
  return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */


exports.NodePart = NodePart;

var BooleanAttributePart =
/*#__PURE__*/
function () {
  function BooleanAttributePart(element, name, strings) {
    (0, _classCallCheck2["default"])(this, BooleanAttributePart);
    this.value = undefined;
    this._pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  (0, _createClass2["default"])(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while ((0, _directive.isDirective)(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part.noChange;
        directive(this);
      }

      if (this._pendingValue === _part.noChange) {
        return;
      }

      var value = !!this._pendingValue;

      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, '');
        } else {
          this.element.removeAttribute(this.name);
        }
      }

      this.value = value;
      this._pendingValue = _part.noChange;
    }
  }]);
  return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */


exports.BooleanAttributePart = BooleanAttributePart;

var PropertyCommitter =
/*#__PURE__*/
function (_AttributeCommitter) {
  (0, _inherits2["default"])(PropertyCommitter, _AttributeCommitter);

  function PropertyCommitter(element, name, strings) {
    var _this;

    (0, _classCallCheck2["default"])(this, PropertyCommitter);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PropertyCommitter).call(this, element, name, strings));
    _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this;
  }

  (0, _createClass2["default"])(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }

      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false; // tslint:disable-next-line:no-any

        this.element[this.name] = this._getValue();
      }
    }
  }]);
  return PropertyCommitter;
}(AttributeCommitter);

exports.PropertyCommitter = PropertyCommitter;

var PropertyPart =
/*#__PURE__*/
function (_AttributePart) {
  (0, _inherits2["default"])(PropertyPart, _AttributePart);

  function PropertyPart() {
    (0, _classCallCheck2["default"])(this, PropertyPart);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PropertyPart).apply(this, arguments));
  }

  return PropertyPart;
}(AttributePart); // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.


exports.PropertyPart = PropertyPart;
var eventOptionsSupported = false;

try {
  var options = {
    get capture() {
      eventOptionsSupported = true;
      return false;
    }

  }; // tslint:disable-next-line:no-any

  window.addEventListener('test', options, options); // tslint:disable-next-line:no-any

  window.removeEventListener('test', options, options);
} catch (_e) {}

var EventPart =
/*#__PURE__*/
function () {
  function EventPart(element, eventName, eventContext) {
    var _this2 = this;

    (0, _classCallCheck2["default"])(this, EventPart);
    this.value = undefined;
    this._pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this._boundHandleEvent = function (e) {
      return _this2.handleEvent(e);
    };
  }

  (0, _createClass2["default"])(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while ((0, _directive.isDirective)(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part.noChange;
        directive(this);
      }

      if (this._pendingValue === _part.noChange) {
        return;
      }

      var newListener = this._pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
      }

      if (shouldAddListener) {
        this._options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
      }

      this.value = newListener;
      this._pendingValue = _part.noChange;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);
  return EventPart;
}(); // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.


exports.EventPart = EventPart;

var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};

},{"./directive.js":33,"./dom.js":34,"./part.js":36,"./template-instance.js":41,"./template-result.js":42,"./template.js":43,"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/get":13,"@babel/runtime/helpers/getPrototypeOf":14,"@babel/runtime/helpers/inherits":15,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/possibleConstructorReturn":20,"@babel/runtime/helpers/typeof":25}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.parts = void 0;

var _dom = require("./dom.js");

var _parts = require("./parts.js");

var _templateFactory = require("./template-factory.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */
var parts = new WeakMap();
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

exports.parts = parts;

var render = function render(result, container, options) {
  var part = parts.get(container);

  if (part === undefined) {
    (0, _dom.removeNodes)(container, container.firstChild);
    parts.set(container, part = new _parts.NodePart(Object.assign({
      templateFactory: _templateFactory.templateFactory
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

exports.render = render;

},{"./dom.js":34,"./parts.js":37,"./template-factory.js":40}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function get() {
    return _litHtml.html;
  }
});
Object.defineProperty(exports, "svg", {
  enumerable: true,
  get: function get() {
    return _litHtml.svg;
  }
});
Object.defineProperty(exports, "TemplateResult", {
  enumerable: true,
  get: function get() {
    return _litHtml.TemplateResult;
  }
});
exports.render = void 0;

var _dom = require("./dom.js");

var _modifyTemplate = require("./modify-template.js");

var _render = require("./render.js");

var _templateFactory = require("./template-factory.js");

var _templateInstance = require("./template-instance.js");

var _templateResult = require("./template-result.js");

var _template = require("./template.js");

var _litHtml = require("../lit-html.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @module shady-render
 * @preferred
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */
// Get a key to lookup in `templateCaches`.
var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
  return "".concat(type, "--").concat(scopeName);
};

var compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn("Incompatible ShadyCSS version detected." + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and" + "@webcomponents/shadycss@1.3.1.");
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
  return function (result) {
    var cacheKey = getTemplateCacheKey(result.type, scopeName);

    var templateCache = _templateFactory.templateCaches.get(cacheKey);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };

      _templateFactory.templateCaches.set(cacheKey, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    }

    var key = result.strings.join(_template.marker);
    template = templateCache.keyString.get(key);

    if (template === undefined) {
      var element = result.getTemplateElement();

      if (compatibleShadyCSSVersion) {
        window.ShadyCSS.prepareTemplateDom(element, scopeName);
      }

      template = new _template.Template(result, element);
      templateCache.keyString.set(key, template);
    }

    templateCache.stringsArray.set(result.strings, template);
    return template;
  };
};

var TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
  TEMPLATE_TYPES.forEach(function (type) {
    var templates = _templateFactory.templateCaches.get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(function (template) {
        var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

        var styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(function (s) {
          styles.add(s);
        });
        (0, _modifyTemplate.removeNodesFromTemplate)(template, styles);
      });
    }
  });
};

var shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */

var prepareTemplateStyles = function prepareTemplateStyles(renderedDOM, template, scopeName) {
  shadyRenderSet.add(scopeName); // Move styles out of rendered DOM and store.

  var styles = renderedDOM.querySelectorAll('style'); // If there are no styles, skip unnecessary work

  if (styles.length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
    return;
  }

  var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (var i = 0; i < styles.length; i++) {
    var style = styles[i];
    style.parentNode.removeChild(style);
    condensedStyle.textContent += style.textContent;
  } // Remove styles from nested templates in this scope.


  removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
  // `template`.

  (0, _modifyTemplate.insertNodeIntoTemplate)(template, condensedStyle, template.element.content.firstChild); // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).

  window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);

  if (window.ShadyCSS.nativeShadow) {
    // When in native Shadow DOM, re-add styling to rendered content using
    // the style ShadyCSS produced.
    var _style = template.element.content.querySelector('style');

    renderedDOM.insertBefore(_style.cloneNode(true), renderedDOM.firstChild);
  } else {
    // When not in native Shadow DOM, at this point ShadyCSS will have
    // removed the style from the lit template and parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    template.element.content.insertBefore(condensedStyle, template.element.content.firstChild);
    var removes = new Set();
    removes.add(condensedStyle);
    (0, _modifyTemplate.removeNodesFromTemplate)(template, removes);
  }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */


var render = function render(result, container, options) {
  var scopeName = options.scopeName;

  var hasRendered = _render.parts.has(container);

  var needsScoping = container instanceof ShadowRoot && compatibleShadyCSSVersion && result instanceof _templateResult.TemplateResult; // Handle first render to a scope specially...

  var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  (0, _render.render)(result, renderContainer, Object.assign({
    templateFactory: shadyTemplateFactory(scopeName)
  }, options)); // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.

  if (firstScopeRender) {
    var part = _render.parts.get(renderContainer);

    _render.parts["delete"](renderContainer);

    if (part.value instanceof _templateInstance.TemplateInstance) {
      prepareTemplateStyles(renderContainer, part.value.template, scopeName);
    }

    (0, _dom.removeNodes)(container, container.firstChild);
    container.appendChild(renderContainer);

    _render.parts.set(container, part);
  } // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSSS.styleElement`
  // for dynamic changes.


  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};

exports.render = render;

},{"../lit-html.js":44,"./dom.js":34,"./modify-template.js":35,"./render.js":38,"./template-factory.js":40,"./template-instance.js":41,"./template-result.js":42,"./template.js":43}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templateFactory = templateFactory;
exports.templateCaches = void 0;

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
  var templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  var template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  var key = result.strings.join(_template.marker); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template.Template(result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}

var templateCaches = new Map();
exports.templateCaches = templateCaches;

},{"./template.js":43}],41:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateInstance = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _dom = require("./dom.js");

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */

/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
var TemplateInstance =
/*#__PURE__*/
function () {
  function TemplateInstance(template, processor, options) {
    (0, _classCallCheck2["default"])(this, TemplateInstance);
    this._parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  (0, _createClass2["default"])(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var part = _step.value;

          if (part !== undefined) {
            part.setValue(values[i]);
          }

          i++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _part = _step2.value;

          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      var _this = this;

      // When using the Custom Elements polyfill, clone the node, rather than
      // importing it, to keep the fragment in the template's document. This
      // leaves the fragment inert so custom elements won't upgrade and
      // potentially modify their contents by creating a polyfilled ShadowRoot
      // while we traverse the tree.
      var fragment = _dom.isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var parts = this.template.parts;
      var partIndex = 0;
      var nodeIndex = 0;

      var _prepareInstance = function _prepareInstance(fragment) {
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
        // null
        var walker = document.createTreeWalker(fragment, 133
        /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
        , null, false);
        var node = walker.nextNode(); // Loop through all the nodes and parts of a template

        while (partIndex < parts.length && node !== null) {
          var part = parts[partIndex]; // Consecutive Parts may have the same node index, in the case of
          // multiple bound attributes on an element. So each iteration we either
          // increment the nodeIndex, if we aren't on a node with a part, or the
          // partIndex if we are. By not incrementing the nodeIndex when we find a
          // part, we allow for the next part to be associated with the current
          // node if neccessasry.

          if (!(0, _template.isTemplatePartActive)(part)) {
            _this._parts.push(undefined);

            partIndex++;
          } else if (nodeIndex === part.index) {
            if (part.type === 'node') {
              var _part2 = _this.processor.handleTextExpression(_this.options);

              _part2.insertAfterNode(node.previousSibling);

              _this._parts.push(_part2);
            } else {
              var _this$_parts;

              (_this$_parts = _this._parts).push.apply(_this$_parts, (0, _toConsumableArray2["default"])(_this.processor.handleAttributeExpressions(node, part.name, part.strings, _this.options)));
            }

            partIndex++;
          } else {
            nodeIndex++;

            if (node.nodeName === 'TEMPLATE') {
              _prepareInstance(node.content);
            }

            node = walker.nextNode();
          }
        }
      };

      _prepareInstance(fragment);

      if (_dom.isCEPolyfill) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }

      return fragment;
    }
  }]);
  return TemplateInstance;
}();

exports.TemplateInstance = TemplateInstance;

},{"./dom.js":34,"./template.js":43,"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/toConsumableArray":24}],42:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVGTemplateResult = exports.TemplateResult = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _dom = require("./dom.js");

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */

/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
var TemplateResult =
/*#__PURE__*/
function () {
  function TemplateResult(strings, values, type, processor) {
    (0, _classCallCheck2["default"])(this, TemplateResult);
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  (0, _createClass2["default"])(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var endIndex = this.strings.length - 1;
      var html = '';

      for (var i = 0; i < endIndex; i++) {
        var s = this.strings[i]; // This exec() call does two things:
        // 1) Appends a suffix to the bound attribute name to opt out of special
        // attribute value parsing that IE11 and Edge do, like for style and
        // many SVG attributes. The Template class also appends the same suffix
        // when looking up attributes to create Parts.
        // 2) Adds an unquoted-attribute-safe marker for the first expression in
        // an attribute. Subsequent attribute expressions will use node markers,
        // and this is safe since attributes with multiple expressions are
        // guaranteed to be quoted.

        var match = _template.lastAttributeNameRegex.exec(s);

        if (match) {
          // We're starting a new bound attribute.
          // Add the safe attribute suffix, and use unquoted-attribute-safe
          // marker.
          html += s.substr(0, match.index) + match[1] + match[2] + _template.boundAttributeSuffix + match[3] + _template.marker;
        } else {
          // We're either in a bound node, or trailing bound attribute.
          // Either way, nodeMarker is safe to use.
          html += s + _template.nodeMarker;
        }
      }

      return html + this.strings[endIndex];
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      template.innerHTML = this.getHTML();
      return template;
    }
  }]);
  return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */


exports.TemplateResult = TemplateResult;

var SVGTemplateResult =
/*#__PURE__*/
function (_TemplateResult) {
  (0, _inherits2["default"])(SVGTemplateResult, _TemplateResult);

  function SVGTemplateResult() {
    (0, _classCallCheck2["default"])(this, SVGTemplateResult);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SVGTemplateResult).apply(this, arguments));
  }

  (0, _createClass2["default"])(SVGTemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      return "<svg>".concat((0, _get2["default"])((0, _getPrototypeOf2["default"])(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = (0, _get2["default"])((0, _getPrototypeOf2["default"])(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);
      var content = template.content;
      var svgElement = content.firstChild;
      content.removeChild(svgElement);
      (0, _dom.reparentNodes)(content, svgElement.firstChild);
      return template;
    }
  }]);
  return SVGTemplateResult;
}(TemplateResult);

exports.SVGTemplateResult = SVGTemplateResult;

},{"./dom.js":34,"./template.js":43,"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/get":13,"@babel/runtime/helpers/getPrototypeOf":14,"@babel/runtime/helpers/inherits":15,"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/possibleConstructorReturn":20}],43:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastAttributeNameRegex = exports.createMarker = exports.isTemplatePartActive = exports.Template = exports.boundAttributeSuffix = exports.markerRegex = exports.nodeMarker = exports.marker = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

exports.marker = marker;
var nodeMarker = "<!--".concat(marker, "-->");
exports.nodeMarker = nodeMarker;
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
/**
 * Suffix appended to all bound attribute names.
 */

exports.markerRegex = markerRegex;
var boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */

exports.boundAttributeSuffix = boundAttributeSuffix;

var Template = function Template(result, element) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Template);
  this.parts = [];
  this.element = element;
  var index = -1;
  var partIndex = 0;
  var nodesToRemove = [];

  var _prepareTemplate = function _prepareTemplate(template) {
    var content = template.content; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
    // null

    var walker = document.createTreeWalker(content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    var lastPartIndex = 0;

    while (walker.nextNode()) {
      index++;
      var node = walker.currentNode;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            var attributes = node.attributes; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondance between part index and attribute index.

            var count = 0;

            for (var i = 0; i < attributes.length; i++) {
              if (attributes[i].value.indexOf(marker) >= 0) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              var stringForPart = result.strings[partIndex]; // Find the attribute name

              var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              var attributeValue = node.getAttribute(attributeLookupName);
              var strings = attributeValue.split(markerRegex);

              _this.parts.push({
                type: 'attribute',
                index: index,
                name: name,
                strings: strings
              });

              node.removeAttribute(attributeLookupName);
              partIndex += strings.length - 1;
            }
          }

          if (node.tagName === 'TEMPLATE') {
            _prepareTemplate(node);
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          var data = node.data;

          if (data.indexOf(marker) >= 0) {
            var parent = node.parentNode;

            var _strings = data.split(markerRegex);

            var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (var _i = 0; _i < lastIndex; _i++) {
              parent.insertBefore(_strings[_i] === '' ? createMarker() : document.createTextNode(_strings[_i]), node);

              _this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (_strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = _strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;

              _parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;

            _this.parts.push({
              type: 'node',
              index: index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.


            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }

            partIndex++;
          } else {
            var _i2 = -1;

            while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              _this.parts.push({
                type: 'node',
                index: -1
              });
            }
          }
        }
    }
  };

  _prepareTemplate(element); // Remove text binding nodes after the walk to not disturb the TreeWalker


  for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
    var n = _nodesToRemove[_i3];
    n.parentNode.removeChild(n);
  }
};

exports.Template = Template;

var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
}; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.


exports.isTemplatePartActive = isTemplatePartActive;

var createMarker = function createMarker() {
  return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */


exports.createMarker = createMarker;
var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
exports.lastAttributeNameRegex = lastAttributeNameRegex;

},{"@babel/runtime/helpers/classCallCheck":10,"@babel/runtime/helpers/interopRequireDefault":16}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DefaultTemplateProcessor", {
  enumerable: true,
  get: function get() {
    return _defaultTemplateProcessor.DefaultTemplateProcessor;
  }
});
Object.defineProperty(exports, "defaultTemplateProcessor", {
  enumerable: true,
  get: function get() {
    return _defaultTemplateProcessor.defaultTemplateProcessor;
  }
});
Object.defineProperty(exports, "SVGTemplateResult", {
  enumerable: true,
  get: function get() {
    return _templateResult.SVGTemplateResult;
  }
});
Object.defineProperty(exports, "TemplateResult", {
  enumerable: true,
  get: function get() {
    return _templateResult.TemplateResult;
  }
});
Object.defineProperty(exports, "directive", {
  enumerable: true,
  get: function get() {
    return _directive.directive;
  }
});
Object.defineProperty(exports, "isDirective", {
  enumerable: true,
  get: function get() {
    return _directive.isDirective;
  }
});
Object.defineProperty(exports, "removeNodes", {
  enumerable: true,
  get: function get() {
    return _dom.removeNodes;
  }
});
Object.defineProperty(exports, "reparentNodes", {
  enumerable: true,
  get: function get() {
    return _dom.reparentNodes;
  }
});
Object.defineProperty(exports, "noChange", {
  enumerable: true,
  get: function get() {
    return _part.noChange;
  }
});
Object.defineProperty(exports, "nothing", {
  enumerable: true,
  get: function get() {
    return _part.nothing;
  }
});
Object.defineProperty(exports, "AttributeCommitter", {
  enumerable: true,
  get: function get() {
    return _parts.AttributeCommitter;
  }
});
Object.defineProperty(exports, "AttributePart", {
  enumerable: true,
  get: function get() {
    return _parts.AttributePart;
  }
});
Object.defineProperty(exports, "BooleanAttributePart", {
  enumerable: true,
  get: function get() {
    return _parts.BooleanAttributePart;
  }
});
Object.defineProperty(exports, "EventPart", {
  enumerable: true,
  get: function get() {
    return _parts.EventPart;
  }
});
Object.defineProperty(exports, "isPrimitive", {
  enumerable: true,
  get: function get() {
    return _parts.isPrimitive;
  }
});
Object.defineProperty(exports, "NodePart", {
  enumerable: true,
  get: function get() {
    return _parts.NodePart;
  }
});
Object.defineProperty(exports, "PropertyCommitter", {
  enumerable: true,
  get: function get() {
    return _parts.PropertyCommitter;
  }
});
Object.defineProperty(exports, "PropertyPart", {
  enumerable: true,
  get: function get() {
    return _parts.PropertyPart;
  }
});
Object.defineProperty(exports, "parts", {
  enumerable: true,
  get: function get() {
    return _render.parts;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function get() {
    return _render.render;
  }
});
Object.defineProperty(exports, "templateCaches", {
  enumerable: true,
  get: function get() {
    return _templateFactory.templateCaches;
  }
});
Object.defineProperty(exports, "templateFactory", {
  enumerable: true,
  get: function get() {
    return _templateFactory.templateFactory;
  }
});
Object.defineProperty(exports, "TemplateInstance", {
  enumerable: true,
  get: function get() {
    return _templateInstance.TemplateInstance;
  }
});
Object.defineProperty(exports, "createMarker", {
  enumerable: true,
  get: function get() {
    return _template.createMarker;
  }
});
Object.defineProperty(exports, "isTemplatePartActive", {
  enumerable: true,
  get: function get() {
    return _template.isTemplatePartActive;
  }
});
Object.defineProperty(exports, "Template", {
  enumerable: true,
  get: function get() {
    return _template.Template;
  }
});
exports.svg = exports.html = void 0;

var _defaultTemplateProcessor = require("./lib/default-template-processor.js");

var _templateResult = require("./lib/template-result.js");

var _directive = require("./lib/directive.js");

var _dom = require("./lib/dom.js");

var _part = require("./lib/part.js");

var _parts = require("./lib/parts.js");

var _render = require("./lib/render.js");

var _templateFactory = require("./lib/template-factory.js");

var _templateInstance = require("./lib/template-instance.js");

var _template = require("./lib/template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */
// TODO(justinfagnani): remove line when we get NodePart moving methods
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */

var html = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _templateResult.TemplateResult(strings, values, 'html', _defaultTemplateProcessor.defaultTemplateProcessor);
};
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */


exports.html = html;

var svg = function svg(strings) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return new _templateResult.SVGTemplateResult(strings, values, 'svg', _defaultTemplateProcessor.defaultTemplateProcessor);
};

exports.svg = svg;

},{"./lib/default-template-processor.js":32,"./lib/directive.js":33,"./lib/dom.js":34,"./lib/part.js":36,"./lib/parts.js":37,"./lib/render.js":38,"./lib/template-factory.js":40,"./lib/template-instance.js":41,"./lib/template-result.js":42,"./lib/template.js":43}],45:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _interopDefault(ex) {
  return ex && (0, _typeof2["default"])(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var slugo = _interopDefault(require('slugo'));

function merge(obj) {
  var arguments$1 = arguments;
  var i = 1;
  var target;
  var key;

  for (; i < arguments.length; i++) {
    target = arguments$1[i];

    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function noop() {}

noop.exec = noop;

function escape(html, encode) {
  return html.replace(encode ? /&/g : /&(?!#?\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function (_, n) {
    n = n.toLowerCase();

    if (n === 'colon') {
      return ':';
    }

    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(Number(n.substring(1)));
    }

    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) {
      return new RegExp(regex, opt);
    }

    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

var highlightLinesRe = /{([\d,-]+)}/;

var Renderer = function Renderer(options) {
  this.options = options || {};
  this._headings = [];
};

Renderer.prototype.code = function code(code$1, lang, escaped) {
  var dataLine = '';

  if (this.options.dataLine && lang && highlightLinesRe.test(lang)) {
    dataLine = " data-line=\"" + highlightLinesRe.exec(lang)[1] + "\"";
    lang = lang.substr(0, lang.indexOf('{'));
  }

  if (this.options.highlight) {
    var out = this.options.highlight(code$1, lang);

    if (out !== null && out !== code$1) {
      escaped = true;
      code$1 = out;
    }
  }

  if (!lang) {
    return "<pre" + dataLine + "><code>" + (escaped ? code$1 : escape(code$1, true)) + "\n</code></pre>";
  }

  return "<pre" + dataLine + "><code class=\"" + this.options.langPrefix + escape(lang, true) + "\">" + (escaped ? code$1 : escape(code$1, true)) + "\n</code></pre>\n";
};

Renderer.prototype.blockquote = function blockquote(quote) {
  return "<blockquote>\n" + quote + "</blockquote>\n";
};

Renderer.prototype.html = function html(html$1) {
  return html$1;
};

Renderer.prototype.heading = function heading(text, level, raw) {
  var slug = slugo(raw);

  var count = this._headings.filter(function (h) {
    return h === raw;
  }).length;

  if (count > 0) {
    slug += "-" + count;
  }

  this._headings.push(raw);

  return "<h" + level + " id=\"" + this.options.headerPrefix + slug + "\">" + text + "</h" + level + ">\n";
};

Renderer.prototype.hr = function hr() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function list(body, ordered, taskList) {
  var type = ordered ? 'ol' : 'ul';
  var classNames = taskList ? ' class="task-list"' : '';
  return "<" + type + classNames + ">\n" + body + "</" + type + ">\n";
};

Renderer.prototype.listitem = function listitem(text, checked) {
  if (checked === undefined) {
    return "<li>" + text + "</li>\n";
  }

  return '<li class="task-list-item">' + '<input type="checkbox" class="task-list-item-checkbox"' + (checked ? ' checked' : '') + '> ' + text + '</li>\n';
};

Renderer.prototype.paragraph = function paragraph(text) {
  return "<p>" + text + "</p>\n";
};

Renderer.prototype.table = function table(header, body) {
  return "<table>\n<thead>\n" + header + "</thead>\n<tbody>\n" + body + "</tbody>\n</table>\n";
};

Renderer.prototype.tablerow = function tablerow(content) {
  return "<tr>\n" + content + "</tr>\n";
};

Renderer.prototype.tablecell = function tablecell(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align ? "<" + type + " style=\"text-align:" + flags.align + "\">" : "<" + type + ">";
  return tag + content + "</" + type + ">\n";
}; // span level renderer


Renderer.prototype.strong = function strong(text) {
  return "<strong>" + text + "</strong>";
};

Renderer.prototype.em = function em(text) {
  return "<em>" + text + "</em>";
};

Renderer.prototype.codespan = function codespan(text) {
  return "<code>" + text + "</code>";
};

Renderer.prototype.br = function br() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function del(text) {
  return "<del>" + text + "</del>";
};

Renderer.prototype.link = function link(href, title, text) {
  if (this.options.sanitize) {
    var prot;

    try {
      prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
    } catch (err) {
      return '';
    }

    if ( // eslint-disable-next-line no-script-url
    prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      // eslint-disable-line no-script-url
      return '';
    }
  }

  var out = "<a href=\"" + href + "\"";

  if (title) {
    out += " title=\"" + title + "\"";
  }

  var ref = this.options;
  var linksInNewTab = ref.linksInNewTab;
  var targetBlank = linksInNewTab === true || typeof linksInNewTab === 'function' && linksInNewTab(href);

  if (targetBlank) {
    out += " target=\"_blank\"";
  }

  out += ">" + text + "</a>";
  return out;
};

Renderer.prototype.image = function image(href, title, text) {
  var out = "<img src=\"" + href + "\" alt=\"" + text + "\"";

  if (title) {
    out += " title=\"" + title + "\"";
  }

  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function text(text$1) {
  return text$1;
};

var defaultOptions = {
  gfm: true,
  tables: true,
  taskLists: true,
  dataLine: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer(),
  xhtml: false
};
/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<![_*`]| {2,}\n|$)/
};
inline._inside = /(?:\[[^\]]*\]|[^[\]]|\](?=[^[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
inline.link = replace(inline.link)('inside', inline._inside)('href', inline._href)();
inline.reflink = replace(inline.reflink)('inside', inline._inside)();
/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);
/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});
/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)(']|', '~]|')('|', '|https?://|')()
});
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

var InlineLexer = function InlineLexer(links, options) {
  if (options === void 0) options = defaultOptions;
  this.options = options;
  this.links = links;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  } else {
    this.rules = inline.normal;
  }
};

InlineLexer.output = function output(src, links, options) {
  return new InlineLexer(links, options).output(src);
};

InlineLexer.prototype.output = function output(src) {
  var this$1 = this;
  var out = '';
  var link;
  var text;
  var href;
  var cap;

  while (src) {
    // escape
    if (cap = this$1.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    } // autolink


    if (cap = this$1.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);

      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':' ? this$1.mangle(cap[1].substring(7)) : this$1.mangle(cap[1]);
        href = this$1.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }

      out += this$1.renderer.link(href, null, text);
      continue;
    } // url (gfm)


    if (!this$1.inLink && (cap = this$1.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this$1.renderer.link(href, null, text);
      continue;
    } // tag


    if (cap = this$1.rules.tag.exec(src)) {
      if (!this$1.inLink && /^<a /i.test(cap[0])) {
        this$1.inLink = true;
      } else if (this$1.inLink && /^<\/a>/i.test(cap[0])) {
        this$1.inLink = false;
      }

      src = src.substring(cap[0].length);
      out += this$1.options.sanitize ? this$1.options.sanitizer ? this$1.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      continue;
    } // link


    if (cap = this$1.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.inLink = true;
      out += this$1.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this$1.inLink = false;
      continue;
    } // reflink, nolink


    if ((cap = this$1.rules.reflink.exec(src)) || (cap = this$1.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this$1.links[link.toLowerCase()];

      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }

      this$1.inLink = true;
      out += this$1.outputLink(cap, link);
      this$1.inLink = false;
      continue;
    } // strong


    if (cap = this$1.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.strong(this$1.output(cap[2] || cap[1]));
      continue;
    } // em


    if (cap = this$1.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.em(this$1.output(cap[2] || cap[1]));
      continue;
    } // code


    if (cap = this$1.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.codespan(escape(cap[2], true));
      continue;
    } // br


    if (cap = this$1.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.br();
      continue;
    } // del (gfm)


    if (cap = this$1.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.del(this$1.output(cap[1]));
      continue;
    } // text


    if (cap = this$1.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.text(escape(this$1.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

InlineLexer.prototype.outputLink = function outputLink(cap, link) {
  var href = escape(link.href);
  var title = link.title ? escape(link.title) : null;
  return cap[0].charAt(0) === '!' ? this.renderer.image(href, title, escape(cap[1])) : this.renderer.link(href, title, this.output(cap[1]));
};

InlineLexer.prototype.smartypants = function smartypants(text) {
  if (!this.options.smartypants) {
    return text;
  }

  return text // em-dashes
  .replace(/---/g, "\u2014") // en-dashes
  .replace(/--/g, "\u2013") // opening singles
  .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
  .replace(/'/g, "\u2019") // opening doubles
  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
  .replace(/"/g, "\u201D") // ellipses
  .replace(/\.{3}/g, "\u2026");
};

InlineLexer.prototype.mangle = function mangle(text) {
  if (!this.options.mangle) {
    return text;
  }

  var out = '';
  var i = 0;
  var ch;

  for (; i < text.length; i++) {
    ch = text.charCodeAt(i);

    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }

    out += '&#' + ch + ';';
  }

  return out;
};

InlineLexer.rules = inline;
/**
 * Parsing & Compiling
 */

var Parser = function Parser(options) {
  if (options === void 0) options = defaultOptions;
  this.tokens = [];
  this.token = null;
  this.options = options;
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
};

Parser.parse = function parse(src, options, renderer) {
  return new Parser(options, renderer).parse(src);
};
/**
 * Parse Loop
 */


Parser.prototype.parse = function parse(src) {
  var this$1 = this;
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();
  var out = '';

  while (this.next()) {
    out += this$1.tok();
  } // Remove cached headings


  this.renderer._headings = [];
  return out;
};
/**
 * Next Token
 */


Parser.prototype.next = function next() {
  this.token = this.tokens.pop();
  return this.token;
};
/**
 * Preview Next Token
 */


Parser.prototype.peek = function peek() {
  return this.tokens[this.tokens.length - 1] || 0;
};
/**
 * Parse Text Tokens
 */


Parser.prototype.parseText = function parseText() {
  var this$1 = this;
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += "\n" + this$1.next().text;
  }

  return this.inline.output(body);
};
/**
 * Parse Current Token
 */


Parser.prototype.tok = function tok() {
  var this$1 = this;

  switch (this.token.type) {
    case 'space':
      {
        return '';
      }

    case 'hr':
      {
        return this.renderer.hr();
      }

    case 'heading':
      {
        return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
      }

    case 'code':
      {
        return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
      }

    case 'table':
      {
        var header = '';
        var body = '';
        var i;
        var row;
        var cell;
        var j; // header

        cell = '';

        for (i = 0; i < this.token.header.length; i++) {
          cell += this$1.renderer.tablecell(this$1.inline.output(this$1.token.header[i]), {
            header: true,
            align: this$1.token.align[i]
          });
        }

        header += this.renderer.tablerow(cell);

        for (i = 0; i < this.token.cells.length; i++) {
          row = this$1.token.cells[i];
          cell = '';

          for (j = 0; j < row.length; j++) {
            cell += this$1.renderer.tablecell(this$1.inline.output(row[j]), {
              header: false,
              align: this$1.token.align[j]
            });
          }

          body += this$1.renderer.tablerow(cell);
        }

        return this.renderer.table(header, body);
      }

    case 'blockquote_start':
      {
        var body$1 = '';

        while (this.next().type !== 'blockquote_end') {
          body$1 += this$1.tok();
        }

        return this.renderer.blockquote(body$1);
      }

    case 'list_start':
      {
        var body$2 = '';
        var taskList = false;
        var ordered = this.token.ordered;

        while (this.next().type !== 'list_end') {
          if (this$1.token.checked !== undefined) {
            taskList = true;
          }

          body$2 += this$1.tok();
        }

        return this.renderer.list(body$2, ordered, taskList);
      }

    case 'list_item_start':
      {
        var body$3 = '';
        var checked = this.token.checked;

        while (this.next().type !== 'list_item_end') {
          body$3 += this$1.token.type === 'text' ? this$1.parseText() : this$1.tok();
        }

        return this.renderer.listitem(body$3, checked);
      }

    case 'loose_item_start':
      {
        var body$4 = '';
        var checked$1 = this.token.checked;

        while (this.next().type !== 'list_item_end') {
          body$4 += this$1.tok();
        }

        return this.renderer.listitem(body$4, checked$1);
      }

    case 'html':
      {
        var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
        return this.renderer.html(html);
      }

    case 'paragraph':
      {
        return this.renderer.paragraph(this.inline.output(this.token.text));
      }

    case 'text':
      {
        return this.renderer.paragraph(this.parseText());
      }

    default:
      {
        throw new Error('Unknow type');
      }
  }
};

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};
block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')(/bull/g, block.bullet)();
block.list = replace(block.list)(/bull/g, block.bullet)('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')('def', '\\n+(?=' + block.def.source + ')')();
block.blockquote = replace(block.blockquote)('def', block.def)();
block._tag = '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';
block.html = replace(block.html)('comment', /<!--[\s\S]*?-->/)('closed', /<(tag)[\s\S]+?<\/\1>/)('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();
block.paragraph = replace(block.paragraph)('hr', block.hr)('heading', block.heading)('lheading', block.lheading)('blockquote', block.blockquote)('tag', '<' + block._tag)('def', block.def)();
/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);
/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
  checkbox: /^\[([ x])\] +/
});
block.gfm.paragraph = replace(block.paragraph)('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|')();
/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

var Lexer = function Lexer(options) {
  if (options === void 0) options = defaultOptions;
  this.tokens = [];
  this.tokens.links = {};
  this.options = options;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  } else {
    this.rules = block.normal;
  }
};

Lexer.lex = function lex(src, options) {
  return new Lexer(options).lex(src);
};

Lexer.prototype.lex = function lex(src) {
  src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');
  return this.token(src, true);
};

Lexer.prototype.token = function token(src, top, bq) {
  var this$1 = this;
  src = src.replace(/^ +$/gm, '');
  var next;
  var loose;
  var cap;
  var bull;
  var b;
  var item;
  var space;
  var i;
  var l;
  var checked;

  while (src) {
    // newline
    if (cap = this$1.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);

      if (cap[0].length > 1) {
        this$1.tokens.push({
          type: 'space'
        });
      }
    } // code


    if (cap = this$1.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this$1.tokens.push({
        type: 'code',
        text: this$1.options.pedantic ? cap : cap.replace(/\n+$/, '')
      });
      continue;
    } // fences (gfm)


    if (cap = this$1.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    } // heading


    if (cap = this$1.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    } // table no leading pipe (gfm)


    if (top && (cap = this$1.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);
      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this$1.tokens.push(item);
      continue;
    } // lheading


    if (cap = this$1.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    } // hr


    if (cap = this$1.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'hr'
      });
      continue;
    } // blockquote


    if (cap = this$1.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'blockquote_start'
      });
      cap = cap[0].replace(/^ *> ?/gm, ''); // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.

      this$1.token(cap, top, true);
      this$1.tokens.push({
        type: 'blockquote_end'
      });
      continue;
    } // list


    if (cap = this$1.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];
      this$1.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      }); // Get each top-level item.

      cap = cap[0].match(this$1.rules.item);
      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i]; // Remove the list item's bullet
        // so it is seen as the next token.

        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        if (this$1.options.gfm && this$1.options.taskLists) {
          checked = this$1.rules.checkbox.exec(item);

          if (checked) {
            checked = checked[1] === 'x';
            item = item.replace(this$1.rules.checkbox, '');
          } else {
            checked = undefined;
          }
        } // Outdent whatever the
        // list item contains. Hacky.


        if (item.indexOf('\n ') !== -1) {
          space -= item.length;
          item = this$1.options.pedantic ? item.replace(/^ {1,4}/gm, '') : item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '');
        } // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.


        if (this$1.options.smartLists && i !== l - 1) {
          b = this$1.rules.bullet.exec(cap[i + 1])[0];

          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        } // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.


        loose = next || /\n\n(?!\s*$)/.test(item);

        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';

          if (!loose) {
            loose = next;
          }
        }

        this$1.tokens.push({
          checked: checked,
          type: loose ? 'loose_item_start' : 'list_item_start'
        }); // Recurse.

        this$1.token(item, false, bq);
        this$1.tokens.push({
          type: 'list_item_end'
        });
      }

      this$1.tokens.push({
        type: 'list_end'
      });
      continue;
    } // html


    if (cap = this$1.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: this$1.options.sanitize ? 'paragraph' : 'html',
        pre: !this$1.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    } // def


    if (!bq && top && (cap = this$1.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this$1.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    } // table (gfm)


    if (top && (cap = this$1.rules.table.exec(src))) {
      src = src.substring(cap[0].length);
      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
      }

      this$1.tokens.push(item);
      continue;
    } // top-level paragraph


    if (top && (cap = this$1.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
      });
      continue;
    } // text


    if (cap = this$1.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

Lexer.rules = block;

function md(src, opt) {
  try {
    if (opt) {
      opt = merge({}, defaultOptions, opt);
    }

    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (err) {
    err.message += '\nPlease report this to https://github.com/egoist/md.';

    if ((opt || defaultOptions).silent) {
      return '<p>An error occurred:</p><pre>' + escape(String(err.message), true) + '</pre>';
    }

    throw err;
  }
}

md.Renderer = Renderer;
md.Parser = Parser;
md.Lexer = Lexer;
md.InlineLexer = InlineLexer;
module.exports = md;

},{"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/typeof":25,"slugo":47}],46:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && (0, _typeof2["default"])(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(typeof module === "undefined" ? "undefined" : (0, _typeof2["default"])(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/typeof":25}],47:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.slugo = factory();
})(void 0, function () {
  'use strict';

  function index(input) {
    return input // Remove html tags
    .replace(/<(?:.|\n)*?>/gm, '') // Remove special characters
    .replace(/[!\"#$%&'\(\)\*\+,\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '') // eslint-disable-line no-useless-escape
    // Replace dots and spaces with a short dash
    .replace(/(\s|\.)/g, '-') // Replace long dash with two short dashes
    .replace(/—/g, '--') // Make the whole thing lowercase
    .toLowerCase();
  }

  return index;
});

},{"@babel/runtime/helpers/interopRequireDefault":16,"@babel/runtime/helpers/typeof":25}]},{},[5]);
