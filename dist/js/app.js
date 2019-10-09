/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/app.scss":
/*!**************************!*\
  !*** ./src/css/app.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
{
  var lineEq = function lineEq(y2, y1, x2, x1, currentVal) {
    // y = mx + b
    var m = (y2 - y1) / (x2 - x1),
        b = y1 - m * x1;
    return m * currentVal + b;
  };

  var getRandomInt = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRandomFloat = function getRandomFloat(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  };

  var setRange = function setRange(obj) {
    for (var k in obj) {
      if (obj[k] == undefined) {
        obj[k] = [0, 0];
      } else if (typeof obj[k] === 'number') {
        obj[k] = [-1 * obj[k], obj[k]];
      }
    }
  }; // from http://www.quirksmode.org/js/events_properties.html#position


  var getMousePos = function getMousePos(e) {
    var posx = 0;
    var posy = 0;
    if (!e) e = window.event;

    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return {
      x: posx,
      y: posy
    };
  };

  var Item =
  /*#__PURE__*/
  function () {
    function Item(el, options) {
      _classCallCheck(this, Item);

      this.DOM = {
        el: el
      };
      this.options = {
        image: {
          translation: {
            x: -10,
            y: -10,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        title: {
          translation: {
            x: 20,
            y: 10,
            z: 0
          }
        },
        text: {
          translation: {
            x: 20,
            y: 50,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: -20
          }
        },
        deco: {
          translation: {
            x: -20,
            y: 0,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: 3
          }
        },
        shadow: {
          translation: {
            x: 30,
            y: 20,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: -2
          },
          reverseAnimation: {
            duration: 2,
            ease: 'Back.easeOut'
          }
        },
        content: {
          translation: {
            x: 5,
            y: 3,
            z: 0
          }
        }
      };
      Object.assign(this.options, options);
      this.DOM.animatable = {};
      this.DOM.animatable.image = this.DOM.el.querySelector('.portfolio_img');
      this.DOM.animatable.title = this.DOM.el.querySelector('.portfolio_title'); // this.DOM.animatable.text = this.DOM.el.querySelector('.box__text');

      this.DOM.animatable.deco = this.DOM.el.querySelector('.box__deco');
      this.DOM.animatable.shadow = this.DOM.el.querySelector('.portfolio_shadow');
      this.DOM.animatable.content = this.DOM.el.querySelector('.box__content');
      this.initEvents();
    }

    _createClass(Item, [{
      key: "initEvents",
      value: function initEvents() {
        var _this = this;

        var enter = false;

        this.mouseenterFn = function () {
          if (enter) {
            enter = false;
          }

          ;
          clearTimeout(_this.mousetime);
          _this.mousetime = setTimeout(function () {
            return enter = true;
          }, 40);
        };

        this.mousemoveFn = function (ev) {
          return requestAnimationFrame(function () {
            if (!enter) return;

            _this.tilt(ev);
          });
        };

        this.mouseleaveFn = function (ev) {
          return requestAnimationFrame(function () {
            if (!enter || !allowTilt) return;
            enter = false;
            clearTimeout(_this.mousetime);

            for (var key in _this.DOM.animatable) {
              if (_this.DOM.animatable[key] == undefined || _this.options[key] == undefined) {
                continue;
              }

              TweenMax.to(_this.DOM.animatable[key], _this.options[key].reverseAnimation != undefined ? _this.options[key].reverseAnimation.duration || 0 : 1.5, {
                ease: _this.options[key].reverseAnimation != undefined ? _this.options[key].reverseAnimation.ease || 'Power2.easeOut' : 'Power2.easeOut',
                x: 0,
                y: 0,
                z: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0
              });
            }
          });
        };

        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
      }
    }, {
      key: "tilt",
      value: function tilt(ev) {
        if (!allowTilt) return;
        var mousepos = getMousePos(ev); // Document scrolls.

        var docScrolls = {
          left: document.body.scrollLeft + document.documentElement.scrollLeft,
          top: document.body.scrollTop + document.documentElement.scrollTop
        };
        var bounds = this.DOM.el.getBoundingClientRect(); // Mouse position relative to the main element (this.DOM.el).

        var relmousepos = {
          x: mousepos.x - bounds.left - docScrolls.left,
          y: mousepos.y - bounds.top - docScrolls.top
        }; // Movement settings for the animatable elements.

        for (var key in this.DOM.animatable) {
          if (this.DOM.animatable[key] == undefined || this.options[key] == undefined) {
            continue;
          }

          var t = this.options[key] != undefined ? this.options[key].translation || {
            x: 0,
            y: 0,
            z: 0
          } : {
            x: 0,
            y: 0,
            z: 0
          },
              r = this.options[key] != undefined ? this.options[key].rotation || {
            x: 0,
            y: 0,
            z: 0
          } : {
            x: 0,
            y: 0,
            z: 0
          };
          setRange(t);
          setRange(r);
          var transforms = {
            translation: {
              x: (t.x[1] - t.x[0]) / bounds.width * relmousepos.x + t.x[0],
              y: (t.y[1] - t.y[0]) / bounds.height * relmousepos.y + t.y[0],
              z: (t.z[1] - t.z[0]) / bounds.height * relmousepos.y + t.z[0]
            },
            rotation: {
              x: (r.x[1] - r.x[0]) / bounds.height * relmousepos.y + r.x[0],
              y: (r.y[1] - r.y[0]) / bounds.width * relmousepos.x + r.y[0],
              z: (r.z[1] - r.z[0]) / bounds.width * relmousepos.x + r.z[0]
            }
          };
          TweenMax.to(this.DOM.animatable[key], 1.5, {
            ease: 'Power1.easeOut',
            x: transforms.translation.x,
            y: transforms.translation.y,
            z: transforms.translation.z,
            rotationX: transforms.rotation.x,
            rotationY: transforms.rotation.y,
            rotationZ: transforms.rotation.z
          });
        }
      }
    }]);

    return Item;
  }();

  var Overlay =
  /*#__PURE__*/
  function () {
    function Overlay() {
      _classCallCheck(this, Overlay);

      this.DOM = {
        el: document.querySelector('.overlay')
      };
      this.DOM.reveal = this.DOM.el.querySelector('.overlay__reveal');
      this.DOM.items = this.DOM.el.querySelectorAll('.overlay__item');
      this.DOM.close = this.DOM.el.querySelector('.overlay__close');
    }

    _createClass(Overlay, [{
      key: "show",
      value: function show(contentItem) {
        var _this2 = this;

        this.contentItem = contentItem;
        this.DOM.el.classList.add('overlay--open'); // show revealer

        TweenMax.to(this.DOM.reveal, .5, {
          ease: 'Power1.easeInOut',
          x: '0%',
          onComplete: function onComplete() {
            // hide scroll
            document.body.classList.add('preview-open'); // show preview

            _this2.revealItem(contentItem); // hide revealer


            TweenMax.to(_this2.DOM.reveal, .5, {
              delay: 0.2,
              ease: 'Power3.easeOut',
              x: '-100%'
            });
            _this2.DOM.close.style.opacity = 1;
          }
        });
      }
    }, {
      key: "revealItem",
      value: function revealItem() {
        this.contentItem.style.opacity = 1;
        var itemElems = []; // itemElems.push(this.contentItem.querySelector('.box__shadow'));
        // itemElems.push(this.contentItem.querySelector('.box__img'));
        // itemElems.push(this.contentItem.querySelector('.box__title'));
        // itemElems.push(this.contentItem.querySelector('.box__text'));
        // itemElems.push(this.contentItem.querySelector('.box__deco'));
        // itemElems.push(this.contentItem.querySelector('.overlay__content'));

        for (var _i = 0, _itemElems = itemElems; _i < _itemElems.length; _i++) {
          var el = _itemElems[_i];
          if (el == null) continue;
          var bounds = el.getBoundingClientRect();
          var win = {
            width: window.innerWidth,
            height: window.innerHeight
          };
          TweenMax.to(el, lineEq(0.8, 1.2, win.width, 0, Math.abs(bounds.left + bounds.width - win.width)), {
            ease: 'Expo.easeOut',
            delay: 0.2,
            startAt: {
              x: "".concat(lineEq(0, 800, win.width, 0, Math.abs(bounds.left + bounds.width - win.width))),
              y: "".concat(lineEq(-100, 100, win.height, 0, Math.abs(bounds.top + bounds.height - win.height))),
              rotationZ: "".concat(lineEq(5, 30, 0, win.width, Math.abs(bounds.left + bounds.width - win.width)))
            },
            x: 0,
            y: 0,
            rotationZ: 0
          });
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this3 = this;

        this.DOM.el.classList.remove('overlay--open'); // show revealer

        TweenMax.to(this.DOM.reveal, .5, {
          //delay: 0.15,
          ease: 'Power3.easeOut',
          x: '0%',
          onComplete: function onComplete() {
            _this3.DOM.close.style.opacity = 0; // show scroll

            document.body.classList.remove('preview-open'); // hide preview

            _this3.contentItem.style.opacity = 0; // hide revealer

            TweenMax.to(_this3.DOM.reveal, .5, {
              delay: 0,
              ease: 'Power3.easeOut',
              x: '100%'
            });
          }
        });
      }
    }]);

    return Overlay;
  }();

  var Grid =
  /*#__PURE__*/
  function () {
    function Grid(el) {
      var _this4 = this;

      _classCallCheck(this, Grid);

      this.DOM = {
        el: el
      };
      this.items = [];
      Array.from(this.DOM.el.querySelectorAll('a.grid__item')).forEach(function (item) {
        var itemObj = new Item(item);

        _this4.items.push(itemObj);

        if (!item.classList.contains('grid__item--noclick')) {
          itemObj.DOM.el.addEventListener('click', function (ev) {
            ev.preventDefault();

            _this4.openItem(document.querySelector(item.getAttribute('href')));
          });
        }
      });
      this.overlay = new Overlay();
      this.overlay.DOM.close.addEventListener('click', function () {
        return _this4.closeItem();
      });
    }

    _createClass(Grid, [{
      key: "openItem",
      value: function openItem(contentItem) {
        if (this.isPreviewOpen) return;
        this.isPreviewOpen = true;
        allowTilt = false;
        this.overlay.show(contentItem); // "explode" grid..

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            for (var key in item.DOM.animatable) {
              var el = item.DOM.animatable[key];

              if (el) {
                var bounds = el.getBoundingClientRect();
                var x = void 0;
                var y = void 0;
                var win = {
                  width: window.innerWidth,
                  height: window.innerHeight
                };

                if (bounds.top + bounds.height / 2 < win.height / 2 - win.height * .1) {
                  //x = getRandomInt(-250,-50);
                  //y = getRandomInt(20,100)*-1;
                  x = -1 * lineEq(20, 600, 0, win.width, Math.abs(bounds.left + bounds.width - win.width));
                  y = -1 * lineEq(20, 600, 0, win.width, Math.abs(bounds.left + bounds.width - win.width));
                } else if (bounds.top + bounds.height / 2 > win.height / 2 + win.height * .1) {
                  //x = getRandomInt(-250,-50);
                  //y = getRandomInt(20,100);
                  x = -1 * lineEq(20, 600, 0, win.width, Math.abs(bounds.left + bounds.width - win.width));
                  y = lineEq(20, 600, 0, win.width, Math.abs(bounds.left + bounds.width - win.width));
                } else {
                  //x = getRandomInt(300,700)*-1;
                  x = -1 * lineEq(10, 700, 0, win.width, Math.abs(bounds.left + bounds.width - win.width));
                  y = getRandomInt(-25, 25);
                }

                TweenMax.to(el, 0.4, {
                  ease: 'Power3.easeOut',
                  delay: lineEq(0, 0.3, 0, win.width, Math.abs(bounds.left + bounds.width - win.width)),
                  x: x,
                  y: y,
                  rotationZ: getRandomInt(-10, 10),
                  opacity: 0
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
      key: "closeItem",
      value: function closeItem() {
        if (!this.isPreviewOpen) return;
        this.isPreviewOpen = false;
        this.overlay.hide();
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            for (var key in item.DOM.animatable) {
              var el = item.DOM.animatable[key];

              if (el) {
                var bounds = el.getBoundingClientRect();
                var win = {
                  width: window.innerWidth
                };
                TweenMax.to(el, 0.6, {
                  ease: 'Expo.easeOut',
                  delay: .55 + lineEq(0, 0.2, 0, win.width, Math.abs(bounds.left + bounds.width - win.width)),
                  x: 0,
                  y: 0,
                  rotationZ: 0,
                  opacity: 1
                });
              }
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

        allowTilt = true;
      }
    }]);

    return Grid;
  }();

  var allowTilt = true;
  new Grid(document.querySelector('.grid')); // Preload all the images in the page..
  // imagesLoaded(document.querySelectorAll('.portfolio_img'), () => document.body.classList.remove('loading'));
}

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./src/js/app.js ./src/css/app.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! H:\Projects\Protfolio\App\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! H:\Projects\Protfolio\App\src\css\app.scss */"./src/css/app.scss");


/***/ })

/******/ });