(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("form", [], factory);
	else if(typeof exports === 'object')
		exports["form"] = factory();
	else
		root["form"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
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

  var FEEDBACK_STATUS_SUCCESS = 0;
  var FEEDBACK_STATUS_WARNING = 1;
  var FEEDBACK_STATUS_ERROR = 2;

  /**
   * Form feature class.
   */

  var Form = function (_base$features$Featur) {
    _inherits(Form, _base$features$Featur);

    function Form() {
      _classCallCheck(this, Form);

      return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
      key: 'init',
      value: function init() {
        this.isLoading = false;

        this.$form = this.$('form');
        this.$feedback = this.$('[data-feedback]');
        this.$progress = this.$('[data-progress]');

        this.$form.noValidate = true;

        this.addEventListener(this.$form, 'submit', this._submitListener());
        this.addEventListener(this.$form, 'reset', this._resetListener());
      }
    }, {
      key: 'fetch',
      value: function fetch(action, opts) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          _this2.currentRequest = request;

          base.eventHub.trigger('form:beforeSend', opts, request);
          _this2.trigger('beforeSend', opts, request);

          request.withCredentials = true;
          request.open(opts.method || 'post', action);

          for (var h in opts.headers || {}) {
            if (opts.headers.hasOwnProperty(h)) {
              request.setRequestHeader(h, opts.headers[h]);
            }
          }

          request.onload = resolve;
          request.onerror = reject;
          request.onabort = reject;
          request.ontimeout = reject;

          if (_this2.$progress && request.upload) {
            request.upload.onprogress = _this2._onProgress();
          }

          request.send(opts.body);
        }).then(function (e) {
          _this2.currentRequest = null;

          var request = e.target;

          if (request.status >= 200 && request.status < 300) {
            return e;
          } else {
            var error = new Error(request.statusText);
            error.response = e;
            throw error;
          }
        }).then(function (e) {
          var request = e.target;
          var json = JSON.parse(request.responseText);

          return { json: json, request: request };
        });
      }
    }, {
      key: 'showFeedback',
      value: function showFeedback(msg) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FEEDBACK_STATUS_SUCCESS;

        this.$feedback.innerHTML = msg;

        switch (type) {
          case FEEDBACK_STATUS_WARNING:
            this.$feedback.classList.add(this.options.feedbackClassWarning);
            break;
          case FEEDBACK_STATUS_ERROR:
            this.$feedback.classList.add(this.options.feedbackClassError);
            break;
          case FEEDBACK_STATUS_SUCCESS:
          default:
            this.$feedback.classList.add(this.options.feedbackClassSuccess);
        }
      }
    }, {
      key: 'resetFeedback',
      value: function resetFeedback() {
        this.$feedback.innerHTML = '';
        this.$feedback.classList.remove(this.options.feedbackClassWarning);
        this.$feedback.classList.remove(this.options.feedbackClassError);
        this.$feedback.classList.remove(this.options.feedbackClassSuccess);
      }
    }, {
      key: 'resetValidation',
      value: function resetValidation() {
        var _this3 = this;

        var $$formFields = this.$$('.' + this.options.formFieldClass);

        $$formFields.forEach(function ($field) {
          var $message = $field.querySelector(_this3.options.formFieldMessageElement + '.' + _this3.options.formFieldMessageClass);
          $field.classList.remove(_this3.options.formFieldClassError);

          if ($message) {
            $message.parentNode.removeChild($message);
          }
        });
      }
    }, {
      key: 'resetProgress',
      value: function resetProgress() {
        if (!this.$progress) return;
        this.$progress.classList.remove(this.options.progressClassShow);
        this.setProgress(0);
      }
    }, {
      key: 'setProgress',
      value: function setProgress(percentage) {
        if (!this.$progress || !this.options.showProgress) return;

        if (percentage === 0 || percentage === 1 && this.options.hideProgressOnEnd) {
          this.$progress.classList.remove(this.options.progressClassShow);
        } else {
          this.$progress.classList.add(this.options.progressClassShow);
        }

        percentage = percentage * 100;
        var percentageRounded = Math.ceil(percentage);

        var $loaded = this.$progress.querySelector('[data-loaded]');
        var $percentage = this.$progress.querySelector('[data-percentage]');

        $loaded.style.width = percentageRounded + '%';
        $percentage.textContent = percentageRounded + '%';
      }
    }, {
      key: 'displayFieldErrors',
      value: function displayFieldErrors(errors) {
        for (var name in errors) {
          if (errors.hasOwnProperty(name)) {
            var fieldErrors = this.options.getFieldErrors.call(this, name, errors);
            var $field = this.options.getErrorField.call(this, name);

            if ($field) {
              $field.classList.add(this.options.formFieldClassError);
              var $message = $field.querySelector(this.options.formFieldMessageElement + '.' + this.options.formFieldMessageClass);

              if (!$message) {
                $message = document.createElement(this.options.formFieldMessageElement);
                $message.classList.add(this.options.formFieldMessageClass);
                $field.appendChild($message);
              }

              $message.innerHTML = '';

              var $text = document.createElement('span');
              $text.textContent = fieldErrors[0];

              $message.appendChild($text);
            }
          }
        }
      }
    }, {
      key: '_createFormData',
      value: function _createFormData() {
        var formData = new FormData(this.$form);
        return formData;
      }
    }, {
      key: '_onProgress',
      value: function _onProgress() {
        var _this4 = this;

        return function (e) {
          if (e.lengthComputable) {
            _this4.setProgress(e.loaded / e.total);
          }
        };
      }
    }, {
      key: '_resetListener',
      value: function _resetListener() {
        var _this5 = this;

        return function () {
          if (_this5.currentRequest) {
            _this5.currentRequest.abort();
          }

          _this5.resetProgress();
          _this5.resetFeedback();
          _this5.resetValidation();
        };
      }
    }, {
      key: '_submitListener',
      value: function _submitListener() {
        var _this6 = this;

        return function (e) {
          e.preventDefault();
          if (_this6.isLoading) return;

          _this6.isLoading = true;

          var formData = _this6._createFormData();
          var action = _this6.$form.getAttribute('action');
          var method = _this6.$form.getAttribute('method');

          _this6.resetProgress();
          _this6.resetFeedback();
          _this6.resetValidation();

          _this6.node.classList.add(_this6.options.classLoading);

          _this6.fetch(action, {
            body: formData,
            method: method
          }).then(function (response) {
            base.eventHub.trigger('form:send', response);
            _this6.trigger('send', response);

            _this6.isLoading = false;
            _this6.node.classList.remove(_this6.options.classLoading);

            if (response.json.success) {
              base.eventHub.trigger('form:sendSuccess', response);
              _this6.trigger('sendSuccess', response);

              _this6.showFeedback(response.json.message || _this6.options.defaultSuccessMessage);

              if (_this6.options.removeFormOnSuccess) {
                _this6.$form.parentNode.removeChild(_this6.$form);

                if (_this6.options.scroller) {
                  window.setTimeout(function () {
                    _this6.options.scroller.toElement(_this6.$feedback || _this6.node);
                  }, 0);
                }
              }
            } else {
              base.eventHub.trigger('form:sendError', response);
              _this6.trigger('sendError', response);

              var errors = _this6.options.findFieldErrors(response.json);

              if (errors) {
                _this6.displayFieldErrors(errors);

                if (response.json.message) {
                  _this6.showFeedback(response.json.message, FEEDBACK_STATUS_ERROR);
                }
              } else {
                _this6.showFeedback(response.json.message || _this6.options.defaultErrorMessage, FEEDBACK_STATUS_ERROR);
              }
            }
          }).catch(function (err) {
            _this6.isLoading = false;
            _this6.node.classList.remove(_this6.options.classLoading);

            if (err.type && err.type !== 'abort') {
              _this6.showFeedback(_this6.options.defaultErrorMessage, FEEDBACK_STATUS_SUCCESS);
              throw err;
            }
          });
        };
      }
    }]);

    return Form;
  }(base.features.Feature);

  /**
   * Default feature options.
   */
  Form.defaultOptions = {
    scroller: null,
    defaultSuccessMessage: 'Nachricht wurde erfolgreich versendet!',
    defaultErrorMessage: 'Beim Senden der Nachricht ist ein Fehler aufgetreten!',
    classLoading: '-loading',
    removeFormOnSuccess: true,
    showProgress: true,
    hideProgressOnEnd: true,
    progressClassShow: '-show',
    formFieldClass: 'form-field',
    formFieldClassError: '-error',
    formFieldMessageElement: 'div',
    formFieldMessageClass: 'message',
    feedbackClassSuccess: '-success',
    feedbackClassWarning: '-warning',
    feedbackClassError: '-error',
    findFieldErrors: function findFieldErrors(json) {
      return json.errors;
    },
    getErrorField: function getErrorField(name) {
      var $input = this.$form.querySelector('[name="fields[' + name + ']"]');
      if (!$input) return null;
      return $input.closest('.' + this.options.formFieldClass);
    },
    getFieldErrors: function getFieldErrors(name, errors) {
      return errors[name];
    }
  };

  exports.default = Form;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=form.js.map