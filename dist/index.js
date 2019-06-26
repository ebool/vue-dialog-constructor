(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue/dist/vue.js":
/*!**************************************!*\
  !*** ./node_modules/vue/dist/vue.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'should conform to valid custom element name in html5 specification.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType (value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  function isExplicable (value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Techinically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      return res && (
        res.length === 0 ||
        (res.length === 1 && res[0].isComment) // #9658
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a speical value for explicitly removing a binding
        warn(
          ("Invalid value for dynamic directive argument (expected string or null): " + key),
          this
        );
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack becaues all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (
      performance &&
      typeof performance.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
        }
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */



  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.10';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */



  /* eslint-disable no-unused-vars */
  function baseWarn (msg, range) {
    console.error(("[Vue compiler]: " + msg));
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr (el, name, value, range, dynamic) {
    var attrs = dynamic
      ? (el.dynamicAttrs || (el.dynamicAttrs = []))
      : (el.attrs || (el.attrs = []));
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    isDynamicArg,
    modifiers,
    range
  ) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker (symbol, name, dynamic) {
    return dynamic
      ? ("_p(" + name + ",\"" + symbol + "\")")
      : symbol + name // mark the event as captured
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn,
    range,
    dynamic
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.',
        range
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr (
    el,
    name
  ) {
    return el.rawAttrsMap[':' + name] ||
      el.rawAttrsMap['v-bind:' + name] ||
      el.rawAttrsMap[name]
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  function getAndRemoveAttrByRegex (
    el,
    name
  ) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr
      }
    }
  }

  function rangeSetItem (
    item,
    range
  ) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead.",
          el.rawAttrsMap['v-model']
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.',
        el.rawAttrsMap['v-model']
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally',
          el.rawAttrsMap[binding]
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecesarry `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.',
          el.rawAttrsMap['class']
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.',
            el.rawAttrsMap['style']
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being pased as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag."),
              { start: stack[i].start, end: stack[i].end }
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement (element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead.",
            { start: element.start }
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) { return !(c).slotScope; });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace (el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while (
          (lastNode = el.children[el.children.length - 1]) &&
          lastNode.type === 3 &&
          lastNode.text === ' '
        ) {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints (el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce(
          "Cannot use <" + (el.tag) + "> as component root element because it may " +
          'contain multiple nodes.',
          { start: el.start }
        );
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce(
          'Cannot use v-for on stateful component root element because ' +
          'it renders multiple elements.',
          el.rawAttrsMap['v-for']
        );
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start (tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2(
                "Invalid dynamic argument expression: attribute names cannot contain " +
                "spaces, quotes, <, >, / or =.",
                {
                  start: attr.start + attr.name.indexOf("["),
                  end: attr.start + attr.name.length
                }
              );
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.',
            { start: element.start }
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end (tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars (text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.',
                { start: start }
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored."),
                { start: start }
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment (text, start, end) {
        // adding anyting as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (
    element,
    options
  ) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = (
      !element.key &&
      !element.scopedSlots &&
      !element.attrsList.length
    );

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2(
            "<template> cannot be keyed. Place the key on real elements instead.",
            getRawBindingAttr(el, 'key')
          );
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys.",
              getRawBindingAttr(el, 'key'),
              true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp),
          el.rawAttrsMap['v-for']
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if.",
        el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored.",
            children[i]
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent (el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          el.rawAttrsMap['scope'],
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          el.rawAttrsMap['slot-scope'],
          true
        );
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2(
                "<template v-slot> can only appear at the root level inside " +
                "the receiving the component",
                el
              );
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2(
                "v-slot can only be used on components or <template>.",
                slotBinding$1
              );
            }
            if (el.slotScope || el.slotTarget) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.scopedSlots) {
              warn$2(
                "To avoid scope ambiguity, the default slot should also use " +
                "<template> syntax when there are other named slots.",
                slotBinding$1
              );
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName (binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2(
          "v-slot shorthand syntax requires a slot name.",
          binding
        );
      }
    }
    return dynamicArgRE.test(name)
      // dynamic [name]
      ? { name: name.slice(1, -1), dynamic: true }
      // static name
      : { name: ("\"" + name + "\""), dynamic: false }
  }

  // handle <slot/> outlets
  function processSlotOutlet (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead.",
          getRawBindingAttr(el, 'key')
        );
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(
                  el,
                  ("update:" + (camelize(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(
                    el,
                    ("update:" + (hyphenate(name))),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i]
                  );
                }
              } else {
                // handler w/ dynamic event name
                addHandler(
                  el,
                  ("\"update:\"+(" + name + ")"),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i],
                  true // dynamic
                );
              }
            }
          }
          if ((modifiers && modifiers.prop) || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.',
              list[i]
            );
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead.",
          el.rawAttrsMap['v-model']
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
    } else {
      return prefix + staticHandlers
    }
  }

  function genHandler (handler) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + "($event)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ")($event)")
          : isFunctionInvocation
            ? ("return " + (handler.value))
            : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" +
      (keys.map(genFilterCode).join('&&')) + ")return null;"
    )
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. ",
          el.rawAttrsMap['v-once']
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        el.rawAttrsMap['v-for'],
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + (genProps(el.attrs)) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + (genProps(el.props)) + ",";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn(
        'Inline-template components must have exactly one child element.',
        { start: el.start }
      );
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    el,
    slots,
    state
  ) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return (
        slot.slotTargetDynamic ||
        slot.if ||
        slot.for ||
        containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      )
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (
          (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
          parent.for
        ) {
          needsForceUpdate = true;
          break
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots)
      .map(function (key) { return genScopedSlot(slots[key], state); })
      .join(',');

    return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
  }

  function containsSlotChild (el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true
      }
      return el.children.some(containsSlotChild)
    }
    return false
  }

  function genScopedSlot (
    el,
    state
  ) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null")
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot)
    }
    var slotScope = el.slotScope === emptySlotScopeToken
      ? ""
      : String(el.slotScope);
    var fn = "function(" + slotScope + "){" +
      "return " + (el.tag === 'template'
        ? el.if && isLegacySyntax
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? ("," + children) : '');
    var attrs = el.attrs || el.dynamicAttrs
      ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
          // slot props are camelized
          name: camelize(attr.name),
          value: attr.value,
          dynamic: attr.dynamic
        }); }))
      : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += (prop.name) + "," + value + ",";
      } else {
        staticProps += "\"" + (prop.name) + "\":" + value + ",";
      }
    }
    staticProps = "{" + (staticProps.slice(0, -1)) + "}";
    if (dynamicProps) {
      return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
    } else {
      return staticProps
    }
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */



  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode (node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), warn, range);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent (exp, text, warn, range) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      warn(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
        range
      );
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor (node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    warn,
    range
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
      }
    }
  }

  function checkExpression (exp, text, warn, range) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
          range
        );
      } else {
        warn(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n",
          range
        );
      }
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame (
    source,
    start,
    end
  ) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) { continue }
          res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break
      }
    }
    return res.join('\n')
  }

  function repeat$1 (str, n) {
    var result = '';
    if (n > 0) {
      while (true) { // eslint-disable-line
        if (n & 1) { result += str; }
        n >>>= 1;
        if (n <= 0) { break }
        str += str;
      }
    }
    return result
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1(
                "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                generateCodeFrame(template, e.start, e.end),
                vm
              );
            });
          } else {
            warn$$1(
              "Error compiling template:\n\n" + template + "\n\n" +
              compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
              vm
            );
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
          } else {
            compiled.tips.forEach(function (msg) { return tip(msg, vm); });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function (msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function (msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const backgroundConfig = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  isShow: false
};

let list = [];

let background = undefined;
(function () {
  if (background) return;
  background = document.createElement('div');
  setBackground(background, backgroundConfig.backgroundColor);
})();

function setBackground (div, color) {
  div.style.position = 'fixed';
  div.style.top = '0px';
  div.style.left = '0px';
  div.style.right = '0px';
  div.style.bottom = '0px';
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.display = 'flex';
  div.style.justifyContent = 'center';
  div.style.alignItems = 'center';
  div.style.backgroundColor = color;
}

function showBackground () {
  if (list.length < 1) return; // 열려있는 dialog 없으면 return
  document.body.appendChild(background);
  document.body.style['overflow'] = 'hidden'; // prevent scroll
}

function dismissBackground () {
  if (list.length > 0) return; // 열려있는 dialog 있으면 return
  document.body.removeChild(background);
  document.body.style['overflow'] = 'auto'; // scrolling available
}

const manager = {
  show ({ view, store, props }) {
    // view 가 vue component 인지 확인
    return new Promise(resolve => {

      /** backgorund 생성 */
      let dialogContainer = document.createElement('div');
      setBackground(dialogContainer, '');

      /** dialog instance 생성 */
      const Constructor = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend(view);
      let instance = new Constructor({
        el: document.createElement('div'),
        propsData: props,
        store,
        methods: {
          dismiss (data) {
            this.$destroy();
            resolve(data);
          },
        },
        beforeDestroy () {
          let idx = list.indexOf(instance);
          list.splice(idx, 1);
          background.removeChild(dialogContainer);
          dismissBackground()
        }
      });
      list.push(instance);

      dialogContainer.appendChild(instance.$el);
      background.appendChild(dialogContainer);
      showBackground();
    });

  },
  removeAllDialog () {
    for (let i of list) i.dismiss();
    list = [];
  }
};


/* harmony default export */ __webpack_exports__["default"] = (manager);


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pMRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQU8sQ0FBQyxpRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUE0RDtBQUM5RCxFQUFFLFNBQ2lEO0FBQ25ELENBQUMsb0JBQW9COztBQUVyQjs7QUFFQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZELHdCQUF3QixpQkFBaUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsaUNBQWlDLEVBQUU7QUFDdkYsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYzs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQyxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEdBQUc7QUFDVjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyx5Q0FBeUMsd0JBQXdCLEVBQUU7QUFDbkUsNEJBQTRCOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLDBDQUEwQyxFQUFFO0FBQzVDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9CQUFvQixFQUFFO0FBQ3ZEO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLFNBQVMscUJBQXFCOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELE9BQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVCQUF1QjtBQUMzRCxtQ0FBbUMsc0JBQXNCO0FBQ3pEO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EscUJBQXFCLG1CQUFtQjtBQUN4QyxpQ0FBaUM7QUFDakM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEMsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHNDQUFzQztBQUN0QztBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MscUNBQXFDLEVBQUU7QUFDdEY7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyx5Q0FBeUMsRUFBRTtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qjs7QUFFNUIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQixFQUFFOztBQUV0RDtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRCx1QkFBdUIsK0JBQStCO0FBQ3REO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCO0FBQzNCO0FBQ0Esd0JBQXdCLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLDJCQUEyQixFQUFFO0FBQ3pFLE9BQU87QUFDUDtBQUNBLDRDQUE0Qyw0QkFBNEIsRUFBRTtBQUMxRSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHNCQUFzQjs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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Q0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxrQkFBa0I7QUFDNUQsT0FBTztBQUNQLDBDQUEwQyxrQkFBa0I7QUFDNUQsT0FBTztBQUNQLDBDQUEwQywwQkFBMEI7QUFDcEUsT0FBTztBQUNQLDBDQUEwQyxpQkFBaUI7QUFDM0QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyw2Q0FBNkM7QUFDN0MsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0I7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZUFBZSxFQUFFLHVCQUF1QixVQUFVLEVBQUU7QUFDdEY7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCw2Q0FBNkM7QUFDbEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2Q0FBNkM7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsMkJBQTJCO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCxLQUFLO0FBQ0wsMkNBQTJDO0FBQzNDOztBQUVBLG1DQUFtQyx3Q0FBd0M7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxtQkFBbUI7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsYUFBYTtBQUN0Qyx5QkFBeUIsYUFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsK0JBQStCLEVBQUU7QUFDdkYsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxhQUFhOztBQUU3RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLHFDQUFxQzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHVDQUF1QyxFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywyQ0FBMkMsRUFBRTtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsOEJBQThCLEVBQUU7QUFDdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsdUNBQXVDOztBQUUzRSx1Q0FBdUMsMEJBQTBCOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0JBQW9CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVMsNEJBQTRCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msd0JBQXdCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2cVhEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0EsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsMENBQUc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdlLHNFQUFPLEVBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsIi8qIVxuICogVnVlLmpzIHYyLjYuMTBcbiAqIChjKSAyMDE0LTIwMTkgRXZhbiBZb3VcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5WdWUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAvKiAgKi9cblxuICB2YXIgZW1wdHlPYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuICAvLyBUaGVzZSBoZWxwZXJzIHByb2R1Y2UgYmV0dGVyIFZNIGNvZGUgaW4gSlMgZW5naW5lcyBkdWUgdG8gdGhlaXJcbiAgLy8gZXhwbGljaXRuZXNzIGFuZCBmdW5jdGlvbiBpbmxpbmluZy5cbiAgZnVuY3Rpb24gaXNVbmRlZiAodikge1xuICAgIHJldHVybiB2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gaXNEZWYgKHYpIHtcbiAgICByZXR1cm4gdiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGxcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVHJ1ZSAodikge1xuICAgIHJldHVybiB2ID09PSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBpc0ZhbHNlICh2KSB7XG4gICAgcmV0dXJuIHYgPT09IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdmFsdWUgaXMgcHJpbWl0aXZlLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNQcmltaXRpdmUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJyB8fFxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gICAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAgICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gICAqL1xuICB2YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuICBmdW5jdGlvbiB0b1Jhd1R5cGUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gICAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gICAqL1xuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvYmopIHtcbiAgICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUmVnRXhwICh2KSB7XG4gICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHYpID09PSAnW29iamVjdCBSZWdFeHBdJ1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHZhbCBpcyBhIHZhbGlkIGFycmF5IGluZGV4LlxuICAgKi9cbiAgZnVuY3Rpb24gaXNWYWxpZEFycmF5SW5kZXggKHZhbCkge1xuICAgIHZhciBuID0gcGFyc2VGbG9hdChTdHJpbmcodmFsKSk7XG4gICAgcmV0dXJuIG4gPj0gMCAmJiBNYXRoLmZsb29yKG4pID09PSBuICYmIGlzRmluaXRlKHZhbClcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUHJvbWlzZSAodmFsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGlzRGVmKHZhbCkgJiZcbiAgICAgIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdHlwZW9mIHZhbC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGEgdmFsdWUgdG8gYSBzdHJpbmcgdGhhdCBpcyBhY3R1YWxseSByZW5kZXJlZC5cbiAgICovXG4gIGZ1bmN0aW9uIHRvU3RyaW5nICh2YWwpIHtcbiAgICByZXR1cm4gdmFsID09IG51bGxcbiAgICAgID8gJydcbiAgICAgIDogQXJyYXkuaXNBcnJheSh2YWwpIHx8IChpc1BsYWluT2JqZWN0KHZhbCkgJiYgdmFsLnRvU3RyaW5nID09PSBfdG9TdHJpbmcpXG4gICAgICAgID8gSlNPTi5zdHJpbmdpZnkodmFsLCBudWxsLCAyKVxuICAgICAgICA6IFN0cmluZyh2YWwpXG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhbiBpbnB1dCB2YWx1ZSB0byBhIG51bWJlciBmb3IgcGVyc2lzdGVuY2UuXG4gICAqIElmIHRoZSBjb252ZXJzaW9uIGZhaWxzLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gdG9OdW1iZXIgKHZhbCkge1xuICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWwpO1xuICAgIHJldHVybiBpc05hTihuKSA/IHZhbCA6IG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgbWFwIGFuZCByZXR1cm4gYSBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYSBrZXlcbiAgICogaXMgaW4gdGhhdCBtYXAuXG4gICAqL1xuICBmdW5jdGlvbiBtYWtlTWFwIChcbiAgICBzdHIsXG4gICAgZXhwZWN0c0xvd2VyQ2FzZVxuICApIHtcbiAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGVjdHNMb3dlckNhc2VcbiAgICAgID8gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfVxuICAgICAgOiBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIGEgYnVpbHQtaW4gdGFnLlxuICAgKi9cbiAgdmFyIGlzQnVpbHRJblRhZyA9IG1ha2VNYXAoJ3Nsb3QsY29tcG9uZW50JywgdHJ1ZSk7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyBhIHJlc2VydmVkIGF0dHJpYnV0ZS5cbiAgICovXG4gIHZhciBpc1Jlc2VydmVkQXR0cmlidXRlID0gbWFrZU1hcCgna2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXMnKTtcblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZSAoYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gICAqL1xuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICBmdW5jdGlvbiBoYXNPd24gKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gY2FjaGVkIChmbikge1xuICAgIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIChmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgICB2YXIgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cbiAgICovXG4gIHZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xuICB2YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCBmdW5jdGlvbiAoXywgYykgeyByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnOyB9KVxuICB9KTtcblxuICAvKipcbiAgICogQ2FwaXRhbGl6ZSBhIHN0cmluZy5cbiAgICovXG4gIHZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICAgKi9cbiAgdmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbiAgdmFyIGh5cGhlbmF0ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnLSQxJykudG9Mb3dlckNhc2UoKVxuICB9KTtcblxuICAvKipcbiAgICogU2ltcGxlIGJpbmQgcG9seWZpbGwgZm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBzdXBwb3J0IGl0LFxuICAgKiBlLmcuLCBQaGFudG9tSlMgMS54LiBUZWNobmljYWxseSwgd2UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmVcbiAgICogc2luY2UgbmF0aXZlIGJpbmQgaXMgbm93IHBlcmZvcm1hbnQgZW5vdWdoIGluIG1vc3QgYnJvd3NlcnMuXG4gICAqIEJ1dCByZW1vdmluZyBpdCB3b3VsZCBtZWFuIGJyZWFraW5nIGNvZGUgdGhhdCB3YXMgYWJsZSB0byBydW4gaW5cbiAgICogUGhhbnRvbUpTIDEueCwgc28gdGhpcyBtdXN0IGJlIGtlcHQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gICAqL1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGZ1bmN0aW9uIHBvbHlmaWxsQmluZCAoZm4sIGN0eCkge1xuICAgIGZ1bmN0aW9uIGJvdW5kRm4gKGEpIHtcbiAgICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHJldHVybiBsXG4gICAgICAgID8gbCA+IDFcbiAgICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICAgIDogZm4uY2FsbChjdHgpXG4gICAgfVxuXG4gICAgYm91bmRGbi5fbGVuZ3RoID0gZm4ubGVuZ3RoO1xuICAgIHJldHVybiBib3VuZEZuXG4gIH1cblxuICBmdW5jdGlvbiBuYXRpdmVCaW5kIChmbiwgY3R4KSB7XG4gICAgcmV0dXJuIGZuLmJpbmQoY3R4KVxuICB9XG5cbiAgdmFyIGJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICAgID8gbmF0aXZlQmluZFxuICAgIDogcG9seWZpbGxCaW5kO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gICAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICAgIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydDtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG5cbiAgLyoqXG4gICAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGV4dGVuZCAodG8sIF9mcm9tKSB7XG4gICAgZm9yICh2YXIga2V5IGluIF9mcm9tKSB7XG4gICAgICB0b1trZXldID0gX2Zyb21ba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRvXG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIHRvT2JqZWN0IChhcnIpIHtcbiAgICB2YXIgcmVzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJbaV0pIHtcbiAgICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICAvKipcbiAgICogUGVyZm9ybSBubyBvcGVyYXRpb24uXG4gICAqIFN0dWJiaW5nIGFyZ3MgdG8gbWFrZSBGbG93IGhhcHB5IHdpdGhvdXQgbGVhdmluZyB1c2VsZXNzIHRyYW5zcGlsZWQgY29kZVxuICAgKiB3aXRoIC4uLnJlc3QgKGh0dHBzOi8vZmxvdy5vcmcvYmxvZy8yMDE3LzA1LzA3L1N0cmljdC1GdW5jdGlvbi1DYWxsLUFyaXR5LykuXG4gICAqL1xuICBmdW5jdGlvbiBub29wIChhLCBiLCBjKSB7fVxuXG4gIC8qKlxuICAgKiBBbHdheXMgcmV0dXJuIGZhbHNlLlxuICAgKi9cbiAgdmFyIG5vID0gZnVuY3Rpb24gKGEsIGIsIGMpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXG4gIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzYW1lIHZhbHVlLlxuICAgKi9cbiAgdmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF87IH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgc3RyaW5nIGNvbnRhaW5pbmcgc3RhdGljIGtleXMgZnJvbSBjb21waWxlciBtb2R1bGVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuU3RhdGljS2V5cyAobW9kdWxlcykge1xuICAgIHJldHVybiBtb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAoa2V5cywgbSkge1xuICAgICAgcmV0dXJuIGtleXMuY29uY2F0KG0uc3RhdGljS2V5cyB8fCBbXSlcbiAgICB9LCBbXSkuam9pbignLCcpXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXG4gICAqIGlmIHRoZXkgYXJlIHBsYWluIG9iamVjdHMsIGRvIHRoZXkgaGF2ZSB0aGUgc2FtZSBzaGFwZT9cbiAgICovXG4gIGZ1bmN0aW9uIGxvb3NlRXF1YWwgKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gYikgeyByZXR1cm4gdHJ1ZSB9XG4gICAgdmFyIGlzT2JqZWN0QSA9IGlzT2JqZWN0KGEpO1xuICAgIHZhciBpc09iamVjdEIgPSBpc09iamVjdChiKTtcbiAgICBpZiAoaXNPYmplY3RBICYmIGlzT2JqZWN0Qikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGlzQXJyYXlBID0gQXJyYXkuaXNBcnJheShhKTtcbiAgICAgICAgdmFyIGlzQXJyYXlCID0gQXJyYXkuaXNBcnJheShiKTtcbiAgICAgICAgaWYgKGlzQXJyYXlBICYmIGlzQXJyYXlCKSB7XG4gICAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChlLCBiW2ldKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoIWlzQXJyYXlBICYmICFpc0FycmF5Qikge1xuICAgICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuICAgICAgICAgIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuICAgICAgICAgIHJldHVybiBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aCAmJiBrZXlzQS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChhW2tleV0sIGJba2V5XSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNPYmplY3RBICYmICFpc09iamVjdEIpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGxvb3NlbHkgZXF1YWwgdmFsdWUgY2FuIGJlXG4gICAqIGZvdW5kIGluIHRoZSBhcnJheSAoaWYgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QsIHRoZSBhcnJheSBtdXN0XG4gICAqIGNvbnRhaW4gYW4gb2JqZWN0IG9mIHRoZSBzYW1lIHNoYXBlKSwgb3IgLTEgaWYgaXQgaXMgbm90IHByZXNlbnQuXG4gICAqL1xuICBmdW5jdGlvbiBsb29zZUluZGV4T2YgKGFyciwgdmFsKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsb29zZUVxdWFsKGFycltpXSwgdmFsKSkgeyByZXR1cm4gaSB9XG4gICAgfVxuICAgIHJldHVybiAtMVxuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZSBhIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmx5IG9uY2UuXG4gICAqL1xuICBmdW5jdGlvbiBvbmNlIChmbikge1xuICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgU1NSX0FUVFIgPSAnZGF0YS1zZXJ2ZXItcmVuZGVyZWQnO1xuXG4gIHZhciBBU1NFVF9UWVBFUyA9IFtcbiAgICAnY29tcG9uZW50JyxcbiAgICAnZGlyZWN0aXZlJyxcbiAgICAnZmlsdGVyJ1xuICBdO1xuXG4gIHZhciBMSUZFQ1lDTEVfSE9PS1MgPSBbXG4gICAgJ2JlZm9yZUNyZWF0ZScsXG4gICAgJ2NyZWF0ZWQnLFxuICAgICdiZWZvcmVNb3VudCcsXG4gICAgJ21vdW50ZWQnLFxuICAgICdiZWZvcmVVcGRhdGUnLFxuICAgICd1cGRhdGVkJyxcbiAgICAnYmVmb3JlRGVzdHJveScsXG4gICAgJ2Rlc3Ryb3llZCcsXG4gICAgJ2FjdGl2YXRlZCcsXG4gICAgJ2RlYWN0aXZhdGVkJyxcbiAgICAnZXJyb3JDYXB0dXJlZCcsXG4gICAgJ3NlcnZlclByZWZldGNoJ1xuICBdO1xuXG4gIC8qICAqL1xuXG5cblxuICB2YXIgY29uZmlnID0gKHtcbiAgICAvKipcbiAgICAgKiBPcHRpb24gbWVyZ2Ugc3RyYXRlZ2llcyAodXNlZCBpbiBjb3JlL3V0aWwvb3B0aW9ucylcbiAgICAgKi9cbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBvcHRpb25NZXJnZVN0cmF0ZWdpZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHN1cHByZXNzIHdhcm5pbmdzLlxuICAgICAqL1xuICAgIHNpbGVudDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBTaG93IHByb2R1Y3Rpb24gbW9kZSB0aXAgbWVzc2FnZSBvbiBib290P1xuICAgICAqL1xuICAgIHByb2R1Y3Rpb25UaXA6IFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBlbmFibGUgZGV2dG9vbHNcbiAgICAgKi9cbiAgICBkZXZ0b29sczogXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHJlY29yZCBwZXJmXG4gICAgICovXG4gICAgcGVyZm9ybWFuY2U6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogRXJyb3IgaGFuZGxlciBmb3Igd2F0Y2hlciBlcnJvcnNcbiAgICAgKi9cbiAgICBlcnJvckhhbmRsZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBXYXJuIGhhbmRsZXIgZm9yIHdhdGNoZXIgd2FybnNcbiAgICAgKi9cbiAgICB3YXJuSGFuZGxlcjogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIElnbm9yZSBjZXJ0YWluIGN1c3RvbSBlbGVtZW50c1xuICAgICAqL1xuICAgIGlnbm9yZWRFbGVtZW50czogW10sXG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gdXNlciBrZXkgYWxpYXNlcyBmb3Igdi1vblxuICAgICAqL1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGtleUNvZGVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSB0YWcgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgcmVnaXN0ZXJlZCBhcyBhXG4gICAgICogY29tcG9uZW50LiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgICAqL1xuICAgIGlzUmVzZXJ2ZWRUYWc6IG5vLFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGlzIHJlc2VydmVkIHNvIHRoYXQgaXQgY2Fubm90IGJlIHVzZWQgYXMgYSBjb21wb25lbnRcbiAgICAgKiBwcm9wLiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgICAqL1xuICAgIGlzUmVzZXJ2ZWRBdHRyOiBubyxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgdGFnIGlzIGFuIHVua25vd24gZWxlbWVudC5cbiAgICAgKiBQbGF0Zm9ybS1kZXBlbmRlbnQuXG4gICAgICovXG4gICAgaXNVbmtub3duRWxlbWVudDogbm8sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5hbWVzcGFjZSBvZiBhbiBlbGVtZW50XG4gICAgICovXG4gICAgZ2V0VGFnTmFtZXNwYWNlOiBub29wLFxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgdGhlIHJlYWwgdGFnIG5hbWUgZm9yIHRoZSBzcGVjaWZpYyBwbGF0Zm9ybS5cbiAgICAgKi9cbiAgICBwYXJzZVBsYXRmb3JtVGFnTmFtZTogaWRlbnRpdHksXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgbXVzdCBiZSBib3VuZCB1c2luZyBwcm9wZXJ0eSwgZS5nLiB2YWx1ZVxuICAgICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICAgKi9cbiAgICBtdXN0VXNlUHJvcDogbm8sXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIHVwZGF0ZXMgYXN5bmNocm9ub3VzbHkuIEludGVuZGVkIHRvIGJlIHVzZWQgYnkgVnVlIFRlc3QgVXRpbHNcbiAgICAgKiBUaGlzIHdpbGwgc2lnbmlmaWNhbnRseSByZWR1Y2UgcGVyZm9ybWFuY2UgaWYgc2V0IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIGFzeW5jOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogRXhwb3NlZCBmb3IgbGVnYWN5IHJlYXNvbnNcbiAgICAgKi9cbiAgICBfbGlmZWN5Y2xlSG9va3M6IExJRkVDWUNMRV9IT09LU1xuICB9KTtcblxuICAvKiAgKi9cblxuICAvKipcbiAgICogdW5pY29kZSBsZXR0ZXJzIHVzZWQgZm9yIHBhcnNpbmcgaHRtbCB0YWdzLCBjb21wb25lbnQgbmFtZXMgYW5kIHByb3BlcnR5IHBhdGhzLlxuICAgKiB1c2luZyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUzL3NlbWFudGljcy1zY3JpcHRpbmcuaHRtbCNwb3RlbnRpYWxjdXN0b21lbGVtZW50bmFtZVxuICAgKiBza2lwcGluZyBcXHUxMDAwMC1cXHVFRkZGRiBkdWUgdG8gaXQgZnJlZXppbmcgdXAgUGhhbnRvbUpTXG4gICAqL1xuICB2YXIgdW5pY29kZVJlZ0V4cCA9IC9hLXpBLVpcXHUwMEI3XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjAzRi1cXHUyMDQwXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZELztcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gICAqL1xuICBmdW5jdGlvbiBpc1Jlc2VydmVkIChzdHIpIHtcbiAgICB2YXIgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKTtcbiAgICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGEgcHJvcGVydHkuXG4gICAqL1xuICBmdW5jdGlvbiBkZWYgKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHNpbXBsZSBwYXRoLlxuICAgKi9cbiAgdmFyIGJhaWxSRSA9IG5ldyBSZWdFeHAoKFwiW15cIiArICh1bmljb2RlUmVnRXhwLnNvdXJjZSkgKyBcIi4kX1xcXFxkXVwiKSk7XG4gIGZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICAgIGlmIChiYWlsUkUudGVzdChwYXRoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIW9iaikgeyByZXR1cm4gfVxuICAgICAgICBvYmogPSBvYmpbc2VnbWVudHNbaV1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9ialxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIC8vIGNhbiB3ZSB1c2UgX19wcm90b19fP1xuICB2YXIgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fTtcblxuICAvLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXG4gIHZhciBpbkJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIGluV2VleCA9IHR5cGVvZiBXWEVudmlyb25tZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhIVdYRW52aXJvbm1lbnQucGxhdGZvcm07XG4gIHZhciB3ZWV4UGxhdGZvcm0gPSBpbldlZXggJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgVUEgPSBpbkJyb3dzZXIgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGlzSUUgPSBVQSAmJiAvbXNpZXx0cmlkZW50Ly50ZXN0KFVBKTtcbiAgdmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XG4gIHZhciBpc0VkZ2UgPSBVQSAmJiBVQS5pbmRleE9mKCdlZGdlLycpID4gMDtcbiAgdmFyIGlzQW5kcm9pZCA9IChVQSAmJiBVQS5pbmRleE9mKCdhbmRyb2lkJykgPiAwKSB8fCAod2VleFBsYXRmb3JtID09PSAnYW5kcm9pZCcpO1xuICB2YXIgaXNJT1MgPSAoVUEgJiYgL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFVBKSkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2lvcycpO1xuICB2YXIgaXNDaHJvbWUgPSBVQSAmJiAvY2hyb21lXFwvXFxkKy8udGVzdChVQSkgJiYgIWlzRWRnZTtcbiAgdmFyIGlzUGhhbnRvbUpTID0gVUEgJiYgL3BoYW50b21qcy8udGVzdChVQSk7XG4gIHZhciBpc0ZGID0gVUEgJiYgVUEubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKTtcblxuICAvLyBGaXJlZm94IGhhcyBhIFwid2F0Y2hcIiBmdW5jdGlvbiBvbiBPYmplY3QucHJvdG90eXBlLi4uXG4gIHZhciBuYXRpdmVXYXRjaCA9ICh7fSkud2F0Y2g7XG5cbiAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICBpZiAoaW5Ccm93c2VyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvcHRzID0ge307XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3B0cywgJ3Bhc3NpdmUnLCAoe1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8yODVcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0LXBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG5cbiAgLy8gdGhpcyBuZWVkcyB0byBiZSBsYXp5LWV2YWxlZCBiZWNhdXNlIHZ1ZSBtYXkgYmUgcmVxdWlyZWQgYmVmb3JlXG4gIC8vIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgY2FuIHNldCBWVUVfRU5WXG4gIHZhciBfaXNTZXJ2ZXI7XG4gIHZhciBpc1NlcnZlclJlbmRlcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFpbkJyb3dzZXIgJiYgIWluV2VleCAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcbiAgICAgICAgLy8gV2VicGFjayBzaGltbWluZyB0aGUgcHJvY2Vzc1xuICAgICAgICBfaXNTZXJ2ZXIgPSBnbG9iYWxbJ3Byb2Nlc3MnXSAmJiBnbG9iYWxbJ3Byb2Nlc3MnXS5lbnYuVlVFX0VOViA9PT0gJ3NlcnZlcic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaXNTZXJ2ZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9pc1NlcnZlclxuICB9O1xuXG4gIC8vIGRldGVjdCBkZXZ0b29sc1xuICB2YXIgZGV2dG9vbHMgPSBpbkJyb3dzZXIgJiYgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZnVuY3Rpb24gaXNOYXRpdmUgKEN0b3IpIHtcbiAgICByZXR1cm4gdHlwZW9mIEN0b3IgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KEN0b3IudG9TdHJpbmcoKSlcbiAgfVxuXG4gIHZhciBoYXNTeW1ib2wgPVxuICAgIHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFN5bWJvbCkgJiZcbiAgICB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUmVmbGVjdC5vd25LZXlzKTtcblxuICB2YXIgX1NldDtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBpZiAodHlwZW9mIFNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU2V0KSkge1xuICAgIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICAgIF9TZXQgPSBTZXQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICAgIF9TZXQgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIFNldCAoKSB7XG4gICAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIH1cbiAgICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICAgIH07XG4gICAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoa2V5KSB7XG4gICAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgICAgfTtcbiAgICAgIFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhciAoKSB7XG4gICAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBTZXQ7XG4gICAgfSgpKTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciB3YXJuID0gbm9vcDtcbiAgdmFyIHRpcCA9IG5vb3A7XG4gIHZhciBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gKG5vb3ApOyAvLyB3b3JrIGFyb3VuZCBmbG93IGNoZWNrXG4gIHZhciBmb3JtYXRDb21wb25lbnROYW1lID0gKG5vb3ApO1xuXG4gIHtcbiAgICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcbiAgICB2YXIgY2xhc3NpZnlSRSA9IC8oPzpefFstX10pKFxcdykvZztcbiAgICB2YXIgY2xhc3NpZnkgPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHJcbiAgICAgIC5yZXBsYWNlKGNsYXNzaWZ5UkUsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pXG4gICAgICAucmVwbGFjZSgvWy1fXS9nLCAnJyk7IH07XG5cbiAgICB3YXJuID0gZnVuY3Rpb24gKG1zZywgdm0pIHtcbiAgICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcblxuICAgICAgaWYgKGNvbmZpZy53YXJuSGFuZGxlcikge1xuICAgICAgICBjb25maWcud2FybkhhbmRsZXIuY2FsbChudWxsLCBtc2csIHZtLCB0cmFjZSk7XG4gICAgICB9IGVsc2UgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKChcIltWdWUgd2Fybl06IFwiICsgbXNnICsgdHJhY2UpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGlwID0gZnVuY3Rpb24gKG1zZywgdm0pIHtcbiAgICAgIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW1Z1ZSB0aXBdOiBcIiArIG1zZyArIChcbiAgICAgICAgICB2bSA/IGdlbmVyYXRlQ29tcG9uZW50VHJhY2Uodm0pIDogJydcbiAgICAgICAgKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvcm1hdENvbXBvbmVudE5hbWUgPSBmdW5jdGlvbiAodm0sIGluY2x1ZGVGaWxlKSB7XG4gICAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICAgIHJldHVybiAnPFJvb3Q+J1xuICAgICAgfVxuICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygdm0gPT09ICdmdW5jdGlvbicgJiYgdm0uY2lkICE9IG51bGxcbiAgICAgICAgPyB2bS5vcHRpb25zXG4gICAgICAgIDogdm0uX2lzVnVlXG4gICAgICAgICAgPyB2bS4kb3B0aW9ucyB8fCB2bS5jb25zdHJ1Y3Rvci5vcHRpb25zXG4gICAgICAgICAgOiB2bTtcbiAgICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lIHx8IG9wdGlvbnMuX2NvbXBvbmVudFRhZztcbiAgICAgIHZhciBmaWxlID0gb3B0aW9ucy5fX2ZpbGU7XG4gICAgICBpZiAoIW5hbWUgJiYgZmlsZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBmaWxlLm1hdGNoKC8oW14vXFxcXF0rKVxcLnZ1ZSQvKTtcbiAgICAgICAgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAobmFtZSA/IChcIjxcIiArIChjbGFzc2lmeShuYW1lKSkgKyBcIj5cIikgOiBcIjxBbm9ueW1vdXM+XCIpICtcbiAgICAgICAgKGZpbGUgJiYgaW5jbHVkZUZpbGUgIT09IGZhbHNlID8gKFwiIGF0IFwiICsgZmlsZSkgOiAnJylcbiAgICAgIClcbiAgICB9O1xuXG4gICAgdmFyIHJlcGVhdCA9IGZ1bmN0aW9uIChzdHIsIG4pIHtcbiAgICAgIHZhciByZXMgPSAnJztcbiAgICAgIHdoaWxlIChuKSB7XG4gICAgICAgIGlmIChuICUgMiA9PT0gMSkgeyByZXMgKz0gc3RyOyB9XG4gICAgICAgIGlmIChuID4gMSkgeyBzdHIgKz0gc3RyOyB9XG4gICAgICAgIG4gPj49IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzXG4gICAgfTtcblxuICAgIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSBmdW5jdGlvbiAodm0pIHtcbiAgICAgIGlmICh2bS5faXNWdWUgJiYgdm0uJHBhcmVudCkge1xuICAgICAgICB2YXIgdHJlZSA9IFtdO1xuICAgICAgICB2YXIgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcbiAgICAgICAgd2hpbGUgKHZtKSB7XG4gICAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGxhc3QgPSB0cmVlW3RyZWUubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAobGFzdC5jb25zdHJ1Y3RvciA9PT0gdm0uY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICAgIHZtID0gdm0uJHBhcmVudDtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xuICAgICAgICAgICAgICB0cmVlW3RyZWUubGVuZ3RoIC0gMV0gPSBbbGFzdCwgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlXTtcbiAgICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdHJlZS5wdXNoKHZtKTtcbiAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdcXG5cXG5mb3VuZCBpblxcblxcbicgKyB0cmVlXG4gICAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcbiAgICAgICAgICAgICAgPyAoKGZvcm1hdENvbXBvbmVudE5hbWUodm1bMF0pKSArIFwiLi4uIChcIiArICh2bVsxXSkgKyBcIiByZWN1cnNpdmUgY2FsbHMpXCIpXG4gICAgICAgICAgICAgIDogZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpKTsgfSlcbiAgICAgICAgICAuam9pbignXFxuJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXCJcXG5cXG4oZm91bmQgaW4gXCIgKyAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIpXCIpXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciB1aWQgPSAwO1xuXG4gIC8qKlxuICAgKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAgICogZGlyZWN0aXZlcyBzdWJzY3JpYmluZyB0byBpdC5cbiAgICovXG4gIHZhciBEZXAgPSBmdW5jdGlvbiBEZXAgKCkge1xuICAgIHRoaXMuaWQgPSB1aWQrKztcbiAgICB0aGlzLnN1YnMgPSBbXTtcbiAgfTtcblxuICBEZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIGFkZFN1YiAoc3ViKSB7XG4gICAgdGhpcy5zdWJzLnB1c2goc3ViKTtcbiAgfTtcblxuICBEZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIHJlbW92ZVN1YiAoc3ViKSB7XG4gICAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKTtcbiAgfTtcblxuICBEZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBEZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSAoKSB7XG4gICAgLy8gc3RhYmlsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgICB2YXIgc3VicyA9IHRoaXMuc3Vicy5zbGljZSgpO1xuICAgIGlmICghY29uZmlnLmFzeW5jKSB7XG4gICAgICAvLyBzdWJzIGFyZW4ndCBzb3J0ZWQgaW4gc2NoZWR1bGVyIGlmIG5vdCBydW5uaW5nIGFzeW5jXG4gICAgICAvLyB3ZSBuZWVkIHRvIHNvcnQgdGhlbSBub3cgdG8gbWFrZSBzdXJlIHRoZXkgZmlyZSBpbiBjb3JyZWN0XG4gICAgICAvLyBvcmRlclxuICAgICAgc3Vicy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3Vicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHN1YnNbaV0udXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbiAgLy8gVGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSBvbmx5IG9uZSB3YXRjaGVyXG4gIC8vIGNhbiBiZSBldmFsdWF0ZWQgYXQgYSB0aW1lLlxuICBEZXAudGFyZ2V0ID0gbnVsbDtcbiAgdmFyIHRhcmdldFN0YWNrID0gW107XG5cbiAgZnVuY3Rpb24gcHVzaFRhcmdldCAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0U3RhY2sucHVzaCh0YXJnZXQpO1xuICAgIERlcC50YXJnZXQgPSB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xuICAgIHRhcmdldFN0YWNrLnBvcCgpO1xuICAgIERlcC50YXJnZXQgPSB0YXJnZXRTdGFja1t0YXJnZXRTdGFjay5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBWTm9kZSA9IGZ1bmN0aW9uIFZOb2RlIChcbiAgICB0YWcsXG4gICAgZGF0YSxcbiAgICBjaGlsZHJlbixcbiAgICB0ZXh0LFxuICAgIGVsbSxcbiAgICBjb250ZXh0LFxuICAgIGNvbXBvbmVudE9wdGlvbnMsXG4gICAgYXN5bmNGYWN0b3J5XG4gICkge1xuICAgIHRoaXMudGFnID0gdGFnO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5lbG0gPSBlbG07XG4gICAgdGhpcy5ucyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuZm5Db250ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZm5PcHRpb25zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZm5TY29wZUlkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMua2V5ID0gZGF0YSAmJiBkYXRhLmtleTtcbiAgICB0aGlzLmNvbXBvbmVudE9wdGlvbnMgPSBjb21wb25lbnRPcHRpb25zO1xuICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yYXcgPSBmYWxzZTtcbiAgICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gICAgdGhpcy5pc1Jvb3RJbnNlcnQgPSB0cnVlO1xuICAgIHRoaXMuaXNDb21tZW50ID0gZmFsc2U7XG4gICAgdGhpcy5pc0Nsb25lZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNPbmNlID0gZmFsc2U7XG4gICAgdGhpcy5hc3luY0ZhY3RvcnkgPSBhc3luY0ZhY3Rvcnk7XG4gICAgdGhpcy5hc3luY01ldGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXIgPSBmYWxzZTtcbiAgfTtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjaGlsZDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG4gIC8vIERFUFJFQ0FURUQ6IGFsaWFzIGZvciBjb21wb25lbnRJbnN0YW5jZSBmb3IgYmFja3dhcmRzIGNvbXBhdC5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmNoaWxkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZVxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWTm9kZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHZhciBjcmVhdGVFbXB0eVZOb2RlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICBpZiAoIHRleHQgPT09IHZvaWQgMCApIHRleHQgPSAnJztcblxuICAgIHZhciBub2RlID0gbmV3IFZOb2RlKCk7XG4gICAgbm9kZS50ZXh0ID0gdGV4dDtcbiAgICBub2RlLmlzQ29tbWVudCA9IHRydWU7XG4gICAgcmV0dXJuIG5vZGVcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVUZXh0Vk5vZGUgKHZhbCkge1xuICAgIHJldHVybiBuZXcgVk5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKHZhbCkpXG4gIH1cblxuICAvLyBvcHRpbWl6ZWQgc2hhbGxvdyBjbG9uZVxuICAvLyB1c2VkIGZvciBzdGF0aWMgbm9kZXMgYW5kIHNsb3Qgbm9kZXMgYmVjYXVzZSB0aGV5IG1heSBiZSByZXVzZWQgYWNyb3NzXG4gIC8vIG11bHRpcGxlIHJlbmRlcnMsIGNsb25pbmcgdGhlbSBhdm9pZHMgZXJyb3JzIHdoZW4gRE9NIG1hbmlwdWxhdGlvbnMgcmVseVxuICAvLyBvbiB0aGVpciBlbG0gcmVmZXJlbmNlLlxuICBmdW5jdGlvbiBjbG9uZVZOb2RlICh2bm9kZSkge1xuICAgIHZhciBjbG9uZWQgPSBuZXcgVk5vZGUoXG4gICAgICB2bm9kZS50YWcsXG4gICAgICB2bm9kZS5kYXRhLFxuICAgICAgLy8gIzc5NzVcbiAgICAgIC8vIGNsb25lIGNoaWxkcmVuIGFycmF5IHRvIGF2b2lkIG11dGF0aW5nIG9yaWdpbmFsIGluIGNhc2Ugb2YgY2xvbmluZ1xuICAgICAgLy8gYSBjaGlsZC5cbiAgICAgIHZub2RlLmNoaWxkcmVuICYmIHZub2RlLmNoaWxkcmVuLnNsaWNlKCksXG4gICAgICB2bm9kZS50ZXh0LFxuICAgICAgdm5vZGUuZWxtLFxuICAgICAgdm5vZGUuY29udGV4dCxcbiAgICAgIHZub2RlLmNvbXBvbmVudE9wdGlvbnMsXG4gICAgICB2bm9kZS5hc3luY0ZhY3RvcnlcbiAgICApO1xuICAgIGNsb25lZC5ucyA9IHZub2RlLm5zO1xuICAgIGNsb25lZC5pc1N0YXRpYyA9IHZub2RlLmlzU3RhdGljO1xuICAgIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XG4gICAgY2xvbmVkLmlzQ29tbWVudCA9IHZub2RlLmlzQ29tbWVudDtcbiAgICBjbG9uZWQuZm5Db250ZXh0ID0gdm5vZGUuZm5Db250ZXh0O1xuICAgIGNsb25lZC5mbk9wdGlvbnMgPSB2bm9kZS5mbk9wdGlvbnM7XG4gICAgY2xvbmVkLmZuU2NvcGVJZCA9IHZub2RlLmZuU2NvcGVJZDtcbiAgICBjbG9uZWQuYXN5bmNNZXRhID0gdm5vZGUuYXN5bmNNZXRhO1xuICAgIGNsb25lZC5pc0Nsb25lZCA9IHRydWU7XG4gICAgcmV0dXJuIGNsb25lZFxuICB9XG5cbiAgLypcbiAgICogbm90IHR5cGUgY2hlY2tpbmcgdGhpcyBmaWxlIGJlY2F1c2UgZmxvdyBkb2Vzbid0IHBsYXkgd2VsbCB3aXRoXG4gICAqIGR5bmFtaWNhbGx5IGFjY2Vzc2luZyBtZXRob2RzIG9uIEFycmF5IHByb3RvdHlwZVxuICAgKi9cblxuICB2YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbiAgdmFyIGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbiAgdmFyIG1ldGhvZHNUb1BhdGNoID0gW1xuICAgICdwdXNoJyxcbiAgICAncG9wJyxcbiAgICAnc2hpZnQnLFxuICAgICd1bnNoaWZ0JyxcbiAgICAnc3BsaWNlJyxcbiAgICAnc29ydCcsXG4gICAgJ3JldmVyc2UnXG4gIF07XG5cbiAgLyoqXG4gICAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICAgKi9cbiAgbWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gICAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdO1xuICAgIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgdmFyIG9iID0gdGhpcy5fX29iX187XG4gICAgICB2YXIgaW5zZXJ0ZWQ7XG4gICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBpZiAoaW5zZXJ0ZWQpIHsgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTsgfVxuICAgICAgLy8gbm90aWZ5IGNoYW5nZVxuICAgICAgb2IuZGVwLm5vdGlmeSgpO1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0pO1xuICB9KTtcblxuICAvKiAgKi9cblxuICB2YXIgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKTtcblxuICAvKipcbiAgICogSW4gc29tZSBjYXNlcyB3ZSBtYXkgd2FudCB0byBkaXNhYmxlIG9ic2VydmF0aW9uIGluc2lkZSBhIGNvbXBvbmVudCdzXG4gICAqIHVwZGF0ZSBjb21wdXRhdGlvbi5cbiAgICovXG4gIHZhciBzaG91bGRPYnNlcnZlID0gdHJ1ZTtcblxuICBmdW5jdGlvbiB0b2dnbGVPYnNlcnZpbmcgKHZhbHVlKSB7XG4gICAgc2hvdWxkT2JzZXJ2ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ic2VydmVyIGNsYXNzIHRoYXQgaXMgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICAgKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0aGUgdGFyZ2V0XG4gICAqIG9iamVjdCdzIHByb3BlcnR5IGtleXMgaW50byBnZXR0ZXIvc2V0dGVycyB0aGF0XG4gICAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaCB1cGRhdGVzLlxuICAgKi9cbiAgdmFyIE9ic2VydmVyID0gZnVuY3Rpb24gT2JzZXJ2ZXIgKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICAgIHRoaXMudm1Db3VudCA9IDA7XG4gICAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAoaGFzUHJvdG8pIHtcbiAgICAgICAgcHJvdG9BdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29weUF1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcywgYXJyYXlLZXlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAgICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gICAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICAgKi9cbiAgT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiB3YWxrIChvYmopIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShvYmosIGtleXNbaV0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gICAqL1xuICBPYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gb2JzZXJ2ZUFycmF5IChpdGVtcykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBvYnNlcnZlKGl0ZW1zW2ldKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gaGVscGVyc1xuXG4gIC8qKlxuICAgKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAgICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAgICovXG4gIGZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICAgIHRhcmdldC5fX3Byb3RvX18gPSBzcmM7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xuICB9XG5cbiAgLyoqXG4gICAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gICAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gICAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gICAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICAgKi9cbiAgZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIGFzUm9vdERhdGEpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIG9iO1xuICAgIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgICAgb2IgPSB2YWx1ZS5fX29iX187XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHNob3VsZE9ic2VydmUgJiZcbiAgICAgICFpc1NlcnZlclJlbmRlcmluZygpICYmXG4gICAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgICBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSAmJlxuICAgICAgIXZhbHVlLl9pc1Z1ZVxuICAgICkge1xuICAgICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAoYXNSb290RGF0YSAmJiBvYikge1xuICAgICAgb2Iudm1Db3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gb2JcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSQkMSAoXG4gICAgb2JqLFxuICAgIGtleSxcbiAgICB2YWwsXG4gICAgY3VzdG9tU2V0dGVyLFxuICAgIHNoYWxsb3dcbiAgKSB7XG4gICAgdmFyIGRlcCA9IG5ldyBEZXAoKTtcblxuICAgIHZhciBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICAgIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgICB2YXIgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICAgIHZhciBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG4gICAgaWYgKCghZ2V0dGVyIHx8IHNldHRlcikgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgdmFsID0gb2JqW2tleV07XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKHZhbCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgICAgZGVwLmRlcGVuZCgpO1xuICAgICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICBkZXBlbmRBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIgKG5ld1ZhbCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUgfHwgKG5ld1ZhbCAhPT0gbmV3VmFsICYmIHZhbHVlICE9PSB2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgICBpZiAoY3VzdG9tU2V0dGVyKSB7XG4gICAgICAgICAgY3VzdG9tU2V0dGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gIzc5ODE6IGZvciBhY2Nlc3NvciBwcm9wZXJ0aWVzIHdpdGhvdXQgc2V0dGVyXG4gICAgICAgIGlmIChnZXR0ZXIgJiYgIXNldHRlcikgeyByZXR1cm4gfVxuICAgICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZE9iID0gIXNoYWxsb3cgJiYgb2JzZXJ2ZShuZXdWYWwpO1xuICAgICAgICBkZXAubm90aWZ5KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gICAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAgICogYWxyZWFkeSBleGlzdC5cbiAgICovXG4gIGZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbCkge1xuICAgIGlmIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KVxuICAgICkge1xuICAgICAgd2FybigoXCJDYW5ub3Qgc2V0IHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBpc1ZhbGlkQXJyYXlJbmRleChrZXkpKSB7XG4gICAgICB0YXJnZXQubGVuZ3RoID0gTWF0aC5tYXgodGFyZ2V0Lmxlbmd0aCwga2V5KTtcbiAgICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxLCB2YWwpO1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH1cbiAgICBpZiAoa2V5IGluIHRhcmdldCAmJiAhKGtleSBpbiBPYmplY3QucHJvdG90eXBlKSkge1xuICAgICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfVxuICAgIHZhciBvYiA9ICh0YXJnZXQpLl9fb2JfXztcbiAgICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCBhZGRpbmcgcmVhY3RpdmUgcHJvcGVydGllcyB0byBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICAgJ2F0IHJ1bnRpbWUgLSBkZWNsYXJlIGl0IHVwZnJvbnQgaW4gdGhlIGRhdGEgb3B0aW9uLidcbiAgICAgICk7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfVxuICAgIGlmICghb2IpIHtcbiAgICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH1cbiAgICBkZWZpbmVSZWFjdGl2ZSQkMShvYi52YWx1ZSwga2V5LCB2YWwpO1xuICAgIG9iLmRlcC5ub3RpZnkoKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAgICovXG4gIGZ1bmN0aW9uIGRlbCAodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAoaXNVbmRlZih0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHRhcmdldClcbiAgICApIHtcbiAgICAgIHdhcm4oKFwiQ2Fubm90IGRlbGV0ZSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiB1bmRlZmluZWQsIG51bGwsIG9yIHByaW1pdGl2ZSB2YWx1ZTogXCIgKyAoKHRhcmdldCkpKSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgICAgdGFyZ2V0LnNwbGljZShrZXksIDEpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBvYiA9ICh0YXJnZXQpLl9fb2JfXztcbiAgICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCBkZWxldGluZyBwcm9wZXJ0aWVzIG9uIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgICAnLSBqdXN0IHNldCBpdCB0byBudWxsLidcbiAgICAgICk7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIGlmICghb2IpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdCBkZXBlbmRlbmNpZXMgb24gYXJyYXkgZWxlbWVudHMgd2hlbiB0aGUgYXJyYXkgaXMgdG91Y2hlZCwgc2luY2VcbiAgICogd2UgY2Fubm90IGludGVyY2VwdCBhcnJheSBlbGVtZW50IGFjY2VzcyBsaWtlIHByb3BlcnR5IGdldHRlcnMuXG4gICAqL1xuICBmdW5jdGlvbiBkZXBlbmRBcnJheSAodmFsdWUpIHtcbiAgICBmb3IgKHZhciBlID0gKHZvaWQgMCksIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBlID0gdmFsdWVbaV07XG4gICAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgICAgIGRlcGVuZEFycmF5KGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIC8qKlxuICAgKiBPcHRpb24gb3ZlcndyaXRpbmcgc3RyYXRlZ2llcyBhcmUgZnVuY3Rpb25zIHRoYXQgaGFuZGxlXG4gICAqIGhvdyB0byBtZXJnZSBhIHBhcmVudCBvcHRpb24gdmFsdWUgYW5kIGEgY2hpbGQgb3B0aW9uXG4gICAqIHZhbHVlIGludG8gdGhlIGZpbmFsIHZhbHVlLlxuICAgKi9cbiAgdmFyIHN0cmF0cyA9IGNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgd2l0aCByZXN0cmljdGlvbnNcbiAgICovXG4gIHtcbiAgICBzdHJhdHMuZWwgPSBzdHJhdHMucHJvcHNEYXRhID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQsIHZtLCBrZXkpIHtcbiAgICAgIGlmICghdm0pIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIm9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgaW5zdGFuY2UgXCIgK1xuICAgICAgICAgICdjcmVhdGlvbiB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZhdWx0U3RyYXQocGFyZW50LCBjaGlsZClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VEYXRhICh0bywgZnJvbSkge1xuICAgIGlmICghZnJvbSkgeyByZXR1cm4gdG8gfVxuICAgIHZhciBrZXksIHRvVmFsLCBmcm9tVmFsO1xuXG4gICAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICAgID8gUmVmbGVjdC5vd25LZXlzKGZyb20pXG4gICAgICA6IE9iamVjdC5rZXlzKGZyb20pO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgLy8gaW4gY2FzZSB0aGUgb2JqZWN0IGlzIGFscmVhZHkgb2JzZXJ2ZWQuLi5cbiAgICAgIGlmIChrZXkgPT09ICdfX29iX18nKSB7IGNvbnRpbnVlIH1cbiAgICAgIHRvVmFsID0gdG9ba2V5XTtcbiAgICAgIGZyb21WYWwgPSBmcm9tW2tleV07XG4gICAgICBpZiAoIWhhc093bih0bywga2V5KSkge1xuICAgICAgICBzZXQodG8sIGtleSwgZnJvbVZhbCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0b1ZhbCAhPT0gZnJvbVZhbCAmJlxuICAgICAgICBpc1BsYWluT2JqZWN0KHRvVmFsKSAmJlxuICAgICAgICBpc1BsYWluT2JqZWN0KGZyb21WYWwpXG4gICAgICApIHtcbiAgICAgICAgbWVyZ2VEYXRhKHRvVmFsLCBmcm9tVmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvXG4gIH1cblxuICAvKipcbiAgICogRGF0YVxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VEYXRhT3JGbiAoXG4gICAgcGFyZW50VmFsLFxuICAgIGNoaWxkVmFsLFxuICAgIHZtXG4gICkge1xuICAgIGlmICghdm0pIHtcbiAgICAgIC8vIGluIGEgVnVlLmV4dGVuZCBtZXJnZSwgYm90aCBzaG91bGQgYmUgZnVuY3Rpb25zXG4gICAgICBpZiAoIWNoaWxkVmFsKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICAgIH1cbiAgICAgIGlmICghcGFyZW50VmFsKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFZhbFxuICAgICAgfVxuICAgICAgLy8gd2hlbiBwYXJlbnRWYWwgJiBjaGlsZFZhbCBhcmUgYm90aCBwcmVzZW50LFxuICAgICAgLy8gd2UgbmVlZCB0byByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gICAgICAvLyBtZXJnZWQgcmVzdWx0IG9mIGJvdGggZnVuY3Rpb25zLi4uIG5vIG5lZWQgdG9cbiAgICAgIC8vIGNoZWNrIGlmIHBhcmVudFZhbCBpcyBhIGZ1bmN0aW9uIGhlcmUgYmVjYXVzZVxuICAgICAgLy8gaXQgaGFzIHRvIGJlIGEgZnVuY3Rpb24gdG8gcGFzcyBwcmV2aW91cyBtZXJnZXMuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkRGF0YUZuICgpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlRGF0YShcbiAgICAgICAgICB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbicgPyBjaGlsZFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogY2hpbGRWYWwsXG4gICAgICAgICAgdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHBhcmVudFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogcGFyZW50VmFsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZEluc3RhbmNlRGF0YUZuICgpIHtcbiAgICAgICAgLy8gaW5zdGFuY2UgbWVyZ2VcbiAgICAgICAgdmFyIGluc3RhbmNlRGF0YSA9IHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gY2hpbGRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgICAgOiBjaGlsZFZhbDtcbiAgICAgICAgdmFyIGRlZmF1bHREYXRhID0gdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gcGFyZW50VmFsLmNhbGwodm0sIHZtKVxuICAgICAgICAgIDogcGFyZW50VmFsO1xuICAgICAgICBpZiAoaW5zdGFuY2VEYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIG1lcmdlRGF0YShpbnN0YW5jZURhdGEsIGRlZmF1bHREYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0RGF0YVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAoXG4gICAgcGFyZW50VmFsLFxuICAgIGNoaWxkVmFsLFxuICAgIHZtXG4gICkge1xuICAgIGlmICghdm0pIHtcbiAgICAgIGlmIChjaGlsZFZhbCAmJiB0eXBlb2YgY2hpbGRWYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnVGhlIFwiZGF0YVwiIG9wdGlvbiBzaG91bGQgYmUgYSBmdW5jdGlvbiAnICtcbiAgICAgICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICAgICAnZGVmaW5pdGlvbnMuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pXG4gIH07XG5cbiAgLyoqXG4gICAqIEhvb2tzIGFuZCBwcm9wcyBhcmUgbWVyZ2VkIGFzIGFycmF5cy5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlSG9vayAoXG4gICAgcGFyZW50VmFsLFxuICAgIGNoaWxkVmFsXG4gICkge1xuICAgIHZhciByZXMgPSBjaGlsZFZhbFxuICAgICAgPyBwYXJlbnRWYWxcbiAgICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXG4gICAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICAgIDogW2NoaWxkVmFsXVxuICAgICAgOiBwYXJlbnRWYWw7XG4gICAgcmV0dXJuIHJlc1xuICAgICAgPyBkZWR1cGVIb29rcyhyZXMpXG4gICAgICA6IHJlc1xuICB9XG5cbiAgZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZXMuaW5kZXhPZihob29rc1tpXSkgPT09IC0xKSB7XG4gICAgICAgIHJlcy5wdXNoKGhvb2tzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgTElGRUNZQ0xFX0hPT0tTLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICBzdHJhdHNbaG9va10gPSBtZXJnZUhvb2s7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBc3NldHNcbiAgICpcbiAgICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICAgKiBhIHRocmVlLXdheSBtZXJnZSBiZXR3ZWVuIGNvbnN0cnVjdG9yIG9wdGlvbnMsIGluc3RhbmNlXG4gICAqIG9wdGlvbnMgYW5kIHBhcmVudCBvcHRpb25zLlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VBc3NldHMgKFxuICAgIHBhcmVudFZhbCxcbiAgICBjaGlsZFZhbCxcbiAgICB2bSxcbiAgICBrZXlcbiAgKSB7XG4gICAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpO1xuICAgIGlmIChjaGlsZFZhbCkge1xuICAgICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gICAgICByZXR1cm4gZXh0ZW5kKHJlcywgY2hpbGRWYWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNcbiAgICB9XG4gIH1cblxuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgc3RyYXRzW3R5cGUgKyAncyddID0gbWVyZ2VBc3NldHM7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBXYXRjaGVycy5cbiAgICpcbiAgICogV2F0Y2hlcnMgaGFzaGVzIHNob3VsZCBub3Qgb3ZlcndyaXRlIG9uZVxuICAgKiBhbm90aGVyLCBzbyB3ZSBtZXJnZSB0aGVtIGFzIGFycmF5cy5cbiAgICovXG4gIHN0cmF0cy53YXRjaCA9IGZ1bmN0aW9uIChcbiAgICBwYXJlbnRWYWwsXG4gICAgY2hpbGRWYWwsXG4gICAgdm0sXG4gICAga2V5XG4gICkge1xuICAgIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3gncyBPYmplY3QucHJvdG90eXBlLndhdGNoLi4uXG4gICAgaWYgKHBhcmVudFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgcGFyZW50VmFsID0gdW5kZWZpbmVkOyB9XG4gICAgaWYgKGNoaWxkVmFsID09PSBuYXRpdmVXYXRjaCkgeyBjaGlsZFZhbCA9IHVuZGVmaW5lZDsgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghY2hpbGRWYWwpIHsgcmV0dXJuIE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpIH1cbiAgICB7XG4gICAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgICB2YXIgcmV0ID0ge307XG4gICAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgICBmb3IgKHZhciBrZXkkMSBpbiBjaGlsZFZhbCkge1xuICAgICAgdmFyIHBhcmVudCA9IHJldFtrZXkkMV07XG4gICAgICB2YXIgY2hpbGQgPSBjaGlsZFZhbFtrZXkkMV07XG4gICAgICBpZiAocGFyZW50ICYmICFBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgICAgcGFyZW50ID0gW3BhcmVudF07XG4gICAgICB9XG4gICAgICByZXRba2V5JDFdID0gcGFyZW50XG4gICAgICAgID8gcGFyZW50LmNvbmNhdChjaGlsZClcbiAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkKSA/IGNoaWxkIDogW2NoaWxkXTtcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9O1xuXG4gIC8qKlxuICAgKiBPdGhlciBvYmplY3QgaGFzaGVzLlxuICAgKi9cbiAgc3RyYXRzLnByb3BzID1cbiAgc3RyYXRzLm1ldGhvZHMgPVxuICBzdHJhdHMuaW5qZWN0ID1cbiAgc3RyYXRzLmNvbXB1dGVkID0gZnVuY3Rpb24gKFxuICAgIHBhcmVudFZhbCxcbiAgICBjaGlsZFZhbCxcbiAgICB2bSxcbiAgICBrZXlcbiAgKSB7XG4gICAgaWYgKGNoaWxkVmFsICYmIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICAgIGlmIChjaGlsZFZhbCkgeyBleHRlbmQocmV0LCBjaGlsZFZhbCk7IH1cbiAgICByZXR1cm4gcmV0XG4gIH07XG4gIHN0cmF0cy5wcm92aWRlID0gbWVyZ2VEYXRhT3JGbjtcblxuICAvKipcbiAgICogRGVmYXVsdCBzdHJhdGVneS5cbiAgICovXG4gIHZhciBkZWZhdWx0U3RyYXQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHBhcmVudFZhbFxuICAgICAgOiBjaGlsZFZhbFxuICB9O1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSBjb21wb25lbnQgbmFtZXNcbiAgICovXG4gIGZ1bmN0aW9uIGNoZWNrQ29tcG9uZW50cyAob3B0aW9ucykge1xuICAgIGZvciAodmFyIGtleSBpbiBvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlQ29tcG9uZW50TmFtZSAobmFtZSkge1xuICAgIGlmICghbmV3IFJlZ0V4cCgoXCJeW2EtekEtWl1bXFxcXC1cXFxcLjAtOV9cIiArICh1bmljb2RlUmVnRXhwLnNvdXJjZSkgKyBcIl0qJFwiKSkudGVzdChuYW1lKSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0ludmFsaWQgY29tcG9uZW50IG5hbWU6IFwiJyArIG5hbWUgKyAnXCIuIENvbXBvbmVudCBuYW1lcyAnICtcbiAgICAgICAgJ3Nob3VsZCBjb25mb3JtIHRvIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUgaW4gaHRtbDUgc3BlY2lmaWNhdGlvbi4nXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaXNCdWlsdEluVGFnKG5hbWUpIHx8IGNvbmZpZy5pc1Jlc2VydmVkVGFnKG5hbWUpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICtcbiAgICAgICAgJ2lkOiAnICsgbmFtZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlIGFsbCBwcm9wcyBvcHRpb24gc3ludGF4IGFyZSBub3JtYWxpemVkIGludG8gdGhlXG4gICAqIE9iamVjdC1iYXNlZCBmb3JtYXQuXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVQcm9wcyAob3B0aW9ucywgdm0pIHtcbiAgICB2YXIgcHJvcHMgPSBvcHRpb25zLnByb3BzO1xuICAgIGlmICghcHJvcHMpIHsgcmV0dXJuIH1cbiAgICB2YXIgcmVzID0ge307XG4gICAgdmFyIGksIHZhbCwgbmFtZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhbCA9IHByb3BzW2ldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBuYW1lID0gY2FtZWxpemUodmFsKTtcbiAgICAgICAgICByZXNbbmFtZV0gPSB7IHR5cGU6IG51bGwgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YXJuKCdwcm9wcyBtdXN0IGJlIHN0cmluZ3Mgd2hlbiB1c2luZyBhcnJheSBzeW50YXguJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocHJvcHMpKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgdmFsID0gcHJvcHNba2V5XTtcbiAgICAgICAgbmFtZSA9IGNhbWVsaXplKGtleSk7XG4gICAgICAgIHJlc1tuYW1lXSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICAgID8gdmFsXG4gICAgICAgICAgOiB7IHR5cGU6IHZhbCB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwicHJvcHNcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShwcm9wcykpICsgXCIuXCIsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgICBvcHRpb25zLnByb3BzID0gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBhbGwgaW5qZWN0aW9ucyBpbnRvIE9iamVjdC1iYXNlZCBmb3JtYXRcbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUluamVjdCAob3B0aW9ucywgdm0pIHtcbiAgICB2YXIgaW5qZWN0ID0gb3B0aW9ucy5pbmplY3Q7XG4gICAgaWYgKCFpbmplY3QpIHsgcmV0dXJuIH1cbiAgICB2YXIgbm9ybWFsaXplZCA9IG9wdGlvbnMuaW5qZWN0ID0ge307XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5qZWN0KSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbm9ybWFsaXplZFtpbmplY3RbaV1dID0geyBmcm9tOiBpbmplY3RbaV0gfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoaW5qZWN0KSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIGluamVjdCkge1xuICAgICAgICB2YXIgdmFsID0gaW5qZWN0W2tleV07XG4gICAgICAgIG5vcm1hbGl6ZWRba2V5XSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICAgID8gZXh0ZW5kKHsgZnJvbToga2V5IH0sIHZhbClcbiAgICAgICAgICA6IHsgZnJvbTogdmFsIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJpbmplY3RcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShpbmplY3QpKSArIFwiLlwiLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplIHJhdyBmdW5jdGlvbiBkaXJlY3RpdmVzIGludG8gb2JqZWN0IGZvcm1hdC5cbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURpcmVjdGl2ZXMgKG9wdGlvbnMpIHtcbiAgICB2YXIgZGlycyA9IG9wdGlvbnMuZGlyZWN0aXZlcztcbiAgICBpZiAoZGlycykge1xuICAgICAgZm9yICh2YXIga2V5IGluIGRpcnMpIHtcbiAgICAgICAgdmFyIGRlZiQkMSA9IGRpcnNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkaXJzW2tleV0gPSB7IGJpbmQ6IGRlZiQkMSwgdXBkYXRlOiBkZWYkJDEgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2VydE9iamVjdFR5cGUgKG5hbWUsIHZhbHVlLCB2bSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJcIiArIG5hbWUgKyBcIlxcXCI6IGV4cGVjdGVkIGFuIE9iamVjdCwgXCIgK1xuICAgICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHZhbHVlKSkgKyBcIi5cIixcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHR3byBvcHRpb24gb2JqZWN0cyBpbnRvIGEgbmV3IG9uZS5cbiAgICogQ29yZSB1dGlsaXR5IHVzZWQgaW4gYm90aCBpbnN0YW50aWF0aW9uIGFuZCBpbmhlcml0YW5jZS5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyAoXG4gICAgcGFyZW50LFxuICAgIGNoaWxkLFxuICAgIHZtXG4gICkge1xuICAgIHtcbiAgICAgIGNoZWNrQ29tcG9uZW50cyhjaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQgPSBjaGlsZC5vcHRpb25zO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZVByb3BzKGNoaWxkLCB2bSk7XG4gICAgbm9ybWFsaXplSW5qZWN0KGNoaWxkLCB2bSk7XG4gICAgbm9ybWFsaXplRGlyZWN0aXZlcyhjaGlsZCk7XG5cbiAgICAvLyBBcHBseSBleHRlbmRzIGFuZCBtaXhpbnMgb24gdGhlIGNoaWxkIG9wdGlvbnMsXG4gICAgLy8gYnV0IG9ubHkgaWYgaXQgaXMgYSByYXcgb3B0aW9ucyBvYmplY3QgdGhhdCBpc24ndFxuICAgIC8vIHRoZSByZXN1bHQgb2YgYW5vdGhlciBtZXJnZU9wdGlvbnMgY2FsbC5cbiAgICAvLyBPbmx5IG1lcmdlZCBvcHRpb25zIGhhcyB0aGUgX2Jhc2UgcHJvcGVydHkuXG4gICAgaWYgKCFjaGlsZC5fYmFzZSkge1xuICAgICAgaWYgKGNoaWxkLmV4dGVuZHMpIHtcbiAgICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQuZXh0ZW5kcywgdm0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoaWxkLm1peGlucykge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkLm1peGlucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5taXhpbnNbaV0sIHZtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0ge307XG4gICAgdmFyIGtleTtcbiAgICBmb3IgKGtleSBpbiBwYXJlbnQpIHtcbiAgICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgICB9XG4gICAgZm9yIChrZXkgaW4gY2hpbGQpIHtcbiAgICAgIGlmICghaGFzT3duKHBhcmVudCwga2V5KSkge1xuICAgICAgICBtZXJnZUZpZWxkKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1lcmdlRmllbGQgKGtleSkge1xuICAgICAgdmFyIHN0cmF0ID0gc3RyYXRzW2tleV0gfHwgZGVmYXVsdFN0cmF0O1xuICAgICAgb3B0aW9uc1trZXldID0gc3RyYXQocGFyZW50W2tleV0sIGNoaWxkW2tleV0sIHZtLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgYW4gYXNzZXQuXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBiZWNhdXNlIGNoaWxkIGluc3RhbmNlcyBuZWVkIGFjY2Vzc1xuICAgKiB0byBhc3NldHMgZGVmaW5lZCBpbiBpdHMgYW5jZXN0b3IgY2hhaW4uXG4gICAqL1xuICBmdW5jdGlvbiByZXNvbHZlQXNzZXQgKFxuICAgIG9wdGlvbnMsXG4gICAgdHlwZSxcbiAgICBpZCxcbiAgICB3YXJuTWlzc2luZ1xuICApIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBhc3NldHMgPSBvcHRpb25zW3R5cGVdO1xuICAgIC8vIGNoZWNrIGxvY2FsIHJlZ2lzdHJhdGlvbiB2YXJpYXRpb25zIGZpcnN0XG4gICAgaWYgKGhhc093bihhc3NldHMsIGlkKSkgeyByZXR1cm4gYXNzZXRzW2lkXSB9XG4gICAgdmFyIGNhbWVsaXplZElkID0gY2FtZWxpemUoaWQpO1xuICAgIGlmIChoYXNPd24oYXNzZXRzLCBjYW1lbGl6ZWRJZCkpIHsgcmV0dXJuIGFzc2V0c1tjYW1lbGl6ZWRJZF0gfVxuICAgIHZhciBQYXNjYWxDYXNlSWQgPSBjYXBpdGFsaXplKGNhbWVsaXplZElkKTtcbiAgICBpZiAoaGFzT3duKGFzc2V0cywgUGFzY2FsQ2FzZUlkKSkgeyByZXR1cm4gYXNzZXRzW1Bhc2NhbENhc2VJZF0gfVxuICAgIC8vIGZhbGxiYWNrIHRvIHByb3RvdHlwZSBjaGFpblxuICAgIHZhciByZXMgPSBhc3NldHNbaWRdIHx8IGFzc2V0c1tjYW1lbGl6ZWRJZF0gfHwgYXNzZXRzW1Bhc2NhbENhc2VJZF07XG4gICAgaWYgKHdhcm5NaXNzaW5nICYmICFyZXMpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgdHlwZS5zbGljZSgwLCAtMSkgKyAnOiAnICsgaWQsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIC8qICAqL1xuXG5cblxuICBmdW5jdGlvbiB2YWxpZGF0ZVByb3AgKFxuICAgIGtleSxcbiAgICBwcm9wT3B0aW9ucyxcbiAgICBwcm9wc0RhdGEsXG4gICAgdm1cbiAgKSB7XG4gICAgdmFyIHByb3AgPSBwcm9wT3B0aW9uc1trZXldO1xuICAgIHZhciBhYnNlbnQgPSAhaGFzT3duKHByb3BzRGF0YSwga2V5KTtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc0RhdGFba2V5XTtcbiAgICAvLyBib29sZWFuIGNhc3RpbmdcbiAgICB2YXIgYm9vbGVhbkluZGV4ID0gZ2V0VHlwZUluZGV4KEJvb2xlYW4sIHByb3AudHlwZSk7XG4gICAgaWYgKGJvb2xlYW5JbmRleCA+IC0xKSB7XG4gICAgICBpZiAoYWJzZW50ICYmICFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IGh5cGhlbmF0ZShrZXkpKSB7XG4gICAgICAgIC8vIG9ubHkgY2FzdCBlbXB0eSBzdHJpbmcgLyBzYW1lIG5hbWUgdG8gYm9vbGVhbiBpZlxuICAgICAgICAvLyBib29sZWFuIGhhcyBoaWdoZXIgcHJpb3JpdHlcbiAgICAgICAgdmFyIHN0cmluZ0luZGV4ID0gZ2V0VHlwZUluZGV4KFN0cmluZywgcHJvcC50eXBlKTtcbiAgICAgICAgaWYgKHN0cmluZ0luZGV4IDwgMCB8fCBib29sZWFuSW5kZXggPCBzdHJpbmdJbmRleCkge1xuICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjaGVjayBkZWZhdWx0IHZhbHVlXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbHVlID0gZ2V0UHJvcERlZmF1bHRWYWx1ZSh2bSwgcHJvcCwga2V5KTtcbiAgICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGEgZnJlc2ggY29weSxcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBvYnNlcnZlIGl0LlxuICAgICAgdmFyIHByZXZTaG91bGRPYnNlcnZlID0gc2hvdWxkT2JzZXJ2ZTtcbiAgICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICAgIG9ic2VydmUodmFsdWUpO1xuICAgICAgdG9nZ2xlT2JzZXJ2aW5nKHByZXZTaG91bGRPYnNlcnZlKTtcbiAgICB9XG4gICAge1xuICAgICAgYXNzZXJ0UHJvcChwcm9wLCBrZXksIHZhbHVlLCB2bSwgYWJzZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGEgcHJvcC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFByb3BEZWZhdWx0VmFsdWUgKHZtLCBwcm9wLCBrZXkpIHtcbiAgICAvLyBubyBkZWZhdWx0LCByZXR1cm4gdW5kZWZpbmVkXG4gICAgaWYgKCFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgICB2YXIgZGVmID0gcHJvcC5kZWZhdWx0O1xuICAgIC8vIHdhcm4gYWdhaW5zdCBub24tZmFjdG9yeSBkZWZhdWx0cyBmb3IgT2JqZWN0ICYgQXJyYXlcbiAgICBpZiAoaXNPYmplY3QoZGVmKSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0ludmFsaWQgZGVmYXVsdCB2YWx1ZSBmb3IgcHJvcCBcIicgKyBrZXkgKyAnXCI6ICcgK1xuICAgICAgICAnUHJvcHMgd2l0aCB0eXBlIE9iamVjdC9BcnJheSBtdXN0IHVzZSBhIGZhY3RvcnkgZnVuY3Rpb24gJyArXG4gICAgICAgICd0byByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8vIHRoZSByYXcgcHJvcCB2YWx1ZSB3YXMgYWxzbyB1bmRlZmluZWQgZnJvbSBwcmV2aW91cyByZW5kZXIsXG4gICAgLy8gcmV0dXJuIHByZXZpb3VzIGRlZmF1bHQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd2F0Y2hlciB0cmlnZ2VyXG4gICAgaWYgKHZtICYmIHZtLiRvcHRpb25zLnByb3BzRGF0YSAmJlxuICAgICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhW2tleV0gPT09IHVuZGVmaW5lZCAmJlxuICAgICAgdm0uX3Byb3BzW2tleV0gIT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgcmV0dXJuIHZtLl9wcm9wc1trZXldXG4gICAgfVxuICAgIC8vIGNhbGwgZmFjdG9yeSBmdW5jdGlvbiBmb3Igbm9uLUZ1bmN0aW9uIHR5cGVzXG4gICAgLy8gYSB2YWx1ZSBpcyBGdW5jdGlvbiBpZiBpdHMgcHJvdG90eXBlIGlzIGZ1bmN0aW9uIGV2ZW4gYWNyb3NzIGRpZmZlcmVudCBleGVjdXRpb24gY29udGV4dFxuICAgIHJldHVybiB0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIGdldFR5cGUocHJvcC50eXBlKSAhPT0gJ0Z1bmN0aW9uJ1xuICAgICAgPyBkZWYuY2FsbCh2bSlcbiAgICAgIDogZGVmXG4gIH1cblxuICAvKipcbiAgICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gYXNzZXJ0UHJvcCAoXG4gICAgcHJvcCxcbiAgICBuYW1lLFxuICAgIHZhbHVlLFxuICAgIHZtLFxuICAgIGFic2VudFxuICApIHtcbiAgICBpZiAocHJvcC5yZXF1aXJlZCAmJiBhYnNlbnQpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdNaXNzaW5nIHJlcXVpcmVkIHByb3A6IFwiJyArIG5hbWUgKyAnXCInLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhcHJvcC5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciB0eXBlID0gcHJvcC50eXBlO1xuICAgIHZhciB2YWxpZCA9ICF0eXBlIHx8IHR5cGUgPT09IHRydWU7XG4gICAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcbiAgICBpZiAodHlwZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGUgPSBbdHlwZV07XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGUubGVuZ3RoICYmICF2YWxpZDsgaSsrKSB7XG4gICAgICAgIHZhciBhc3NlcnRlZFR5cGUgPSBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlW2ldKTtcbiAgICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGFzc2VydGVkVHlwZS5leHBlY3RlZFR5cGUgfHwgJycpO1xuICAgICAgICB2YWxpZCA9IGFzc2VydGVkVHlwZS52YWxpZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgdmFsaWRhdG9yID0gcHJvcC52YWxpZGF0b3I7XG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgaWYgKCF2YWxpZGF0b3IodmFsdWUpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHNpbXBsZUNoZWNrUkUgPSAvXihTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258U3ltYm9sKSQvO1xuXG4gIGZ1bmN0aW9uIGFzc2VydFR5cGUgKHZhbHVlLCB0eXBlKSB7XG4gICAgdmFyIHZhbGlkO1xuICAgIHZhciBleHBlY3RlZFR5cGUgPSBnZXRUeXBlKHR5cGUpO1xuICAgIGlmIChzaW1wbGVDaGVja1JFLnRlc3QoZXhwZWN0ZWRUeXBlKSkge1xuICAgICAgdmFyIHQgPSB0eXBlb2YgdmFsdWU7XG4gICAgICB2YWxpZCA9IHQgPT09IGV4cGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgLy8gZm9yIHByaW1pdGl2ZSB3cmFwcGVyIG9iamVjdHNcbiAgICAgIGlmICghdmFsaWQgJiYgdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdPYmplY3QnKSB7XG4gICAgICB2YWxpZCA9IGlzUGxhaW5PYmplY3QodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnQXJyYXknKSB7XG4gICAgICB2YWxpZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkOiB2YWxpZCxcbiAgICAgIGV4cGVjdGVkVHlwZTogZXhwZWN0ZWRUeXBlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZSBmdW5jdGlvbiBzdHJpbmcgbmFtZSB0byBjaGVjayBidWlsdC1pbiB0eXBlcyxcbiAgICogYmVjYXVzZSBhIHNpbXBsZSBlcXVhbGl0eSBjaGVjayB3aWxsIGZhaWwgd2hlbiBydW5uaW5nXG4gICAqIGFjcm9zcyBkaWZmZXJlbnQgdm1zIC8gaWZyYW1lcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFR5cGUgKGZuKSB7XG4gICAgdmFyIG1hdGNoID0gZm4gJiYgZm4udG9TdHJpbmcoKS5tYXRjaCgvXlxccypmdW5jdGlvbiAoXFx3KykvKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnXG4gIH1cblxuICBmdW5jdGlvbiBpc1NhbWVUeXBlIChhLCBiKSB7XG4gICAgcmV0dXJuIGdldFR5cGUoYSkgPT09IGdldFR5cGUoYilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFR5cGVJbmRleCAodHlwZSwgZXhwZWN0ZWRUeXBlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFR5cGVzKSkge1xuICAgICAgcmV0dXJuIGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlcywgdHlwZSkgPyAwIDogLTFcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkVHlwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXNbaV0sIHR5cGUpKSB7XG4gICAgICAgIHJldHVybiBpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW52YWxpZFR5cGVNZXNzYWdlIChuYW1lLCB2YWx1ZSwgZXhwZWN0ZWRUeXBlcykge1xuICAgIHZhciBtZXNzYWdlID0gXCJJbnZhbGlkIHByb3A6IHR5cGUgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuXCIgK1xuICAgICAgXCIgRXhwZWN0ZWQgXCIgKyAoZXhwZWN0ZWRUeXBlcy5tYXAoY2FwaXRhbGl6ZSkuam9pbignLCAnKSk7XG4gICAgdmFyIGV4cGVjdGVkVHlwZSA9IGV4cGVjdGVkVHlwZXNbMF07XG4gICAgdmFyIHJlY2VpdmVkVHlwZSA9IHRvUmF3VHlwZSh2YWx1ZSk7XG4gICAgdmFyIGV4cGVjdGVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCBleHBlY3RlZFR5cGUpO1xuICAgIHZhciByZWNlaXZlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgcmVjZWl2ZWRUeXBlKTtcbiAgICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgZXhwZWN0ZWQgdmFsdWVcbiAgICBpZiAoZXhwZWN0ZWRUeXBlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgaXNFeHBsaWNhYmxlKGV4cGVjdGVkVHlwZSkgJiZcbiAgICAgICAgIWlzQm9vbGVhbihleHBlY3RlZFR5cGUsIHJlY2VpdmVkVHlwZSkpIHtcbiAgICAgIG1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSBcIiArIGV4cGVjdGVkVmFsdWU7XG4gICAgfVxuICAgIG1lc3NhZ2UgKz0gXCIsIGdvdCBcIiArIHJlY2VpdmVkVHlwZSArIFwiIFwiO1xuICAgIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSByZWNlaXZlZCB2YWx1ZVxuICAgIGlmIChpc0V4cGxpY2FibGUocmVjZWl2ZWRUeXBlKSkge1xuICAgICAgbWVzc2FnZSArPSBcIndpdGggdmFsdWUgXCIgKyByZWNlaXZlZFZhbHVlICsgXCIuXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlXG4gIH1cblxuICBmdW5jdGlvbiBzdHlsZVZhbHVlICh2YWx1ZSwgdHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnU3RyaW5nJykge1xuICAgICAgcmV0dXJuIChcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnTnVtYmVyJykge1xuICAgICAgcmV0dXJuIChcIlwiICsgKE51bWJlcih2YWx1ZSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFwiXCIgKyB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0V4cGxpY2FibGUgKHZhbHVlKSB7XG4gICAgdmFyIGV4cGxpY2l0VHlwZXMgPSBbJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbiddO1xuICAgIHJldHVybiBleHBsaWNpdFR5cGVzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGVsZW07IH0pXG4gIH1cblxuICBmdW5jdGlvbiBpc0Jvb2xlYW4gKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIHJldHVybiBhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0udG9Mb3dlckNhc2UoKSA9PT0gJ2Jvb2xlYW4nOyB9KVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gaGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgICAvLyBEZWFjdGl2YXRlIGRlcHMgdHJhY2tpbmcgd2hpbGUgcHJvY2Vzc2luZyBlcnJvciBoYW5kbGVyIHRvIGF2b2lkIHBvc3NpYmxlIGluZmluaXRlIHJlbmRlcmluZy5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWV4L2lzc3Vlcy8xNTA1XG4gICAgcHVzaFRhcmdldCgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAodm0pIHtcbiAgICAgICAgdmFyIGN1ciA9IHZtO1xuICAgICAgICB3aGlsZSAoKGN1ciA9IGN1ci4kcGFyZW50KSkge1xuICAgICAgICAgIHZhciBob29rcyA9IGN1ci4kb3B0aW9ucy5lcnJvckNhcHR1cmVkO1xuICAgICAgICAgIGlmIChob29rcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlID0gaG9va3NbaV0uY2FsbChjdXIsIGVyciwgdm0sIGluZm8pID09PSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZSkgeyByZXR1cm4gfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsSGFuZGxlRXJyb3IoZSwgY3VyLCAnZXJyb3JDYXB0dXJlZCBob29rJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdsb2JhbEhhbmRsZUVycm9yKGVyciwgdm0sIGluZm8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBwb3BUYXJnZXQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyAoXG4gICAgaGFuZGxlcixcbiAgICBjb250ZXh0LFxuICAgIGFyZ3MsXG4gICAgdm0sXG4gICAgaW5mb1xuICApIHtcbiAgICB2YXIgcmVzO1xuICAgIHRyeSB7XG4gICAgICByZXMgPSBhcmdzID8gaGFuZGxlci5hcHBseShjb250ZXh0LCBhcmdzKSA6IGhhbmRsZXIuY2FsbChjb250ZXh0KTtcbiAgICAgIGlmIChyZXMgJiYgIXJlcy5faXNWdWUgJiYgaXNQcm9taXNlKHJlcykgJiYgIXJlcy5faGFuZGxlZCkge1xuICAgICAgICByZXMuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvICsgXCIgKFByb21pc2UvYXN5bmMpXCIpOyB9KTtcbiAgICAgICAgLy8gaXNzdWUgIzk1MTFcbiAgICAgICAgLy8gYXZvaWQgY2F0Y2ggdHJpZ2dlcmluZyBtdWx0aXBsZSB0aW1lcyB3aGVuIG5lc3RlZCBjYWxsc1xuICAgICAgICByZXMuX2hhbmRsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgZnVuY3Rpb24gZ2xvYmFsSGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgICBpZiAoY29uZmlnLmVycm9ySGFuZGxlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZy5lcnJvckhhbmRsZXIuY2FsbChudWxsLCBlcnIsIHZtLCBpbmZvKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZiB0aGUgdXNlciBpbnRlbnRpb25hbGx5IHRocm93cyB0aGUgb3JpZ2luYWwgZXJyb3IgaW4gdGhlIGhhbmRsZXIsXG4gICAgICAgIC8vIGRvIG5vdCBsb2cgaXQgdHdpY2VcbiAgICAgICAgaWYgKGUgIT09IGVycikge1xuICAgICAgICAgIGxvZ0Vycm9yKGUsIG51bGwsICdjb25maWcuZXJyb3JIYW5kbGVyJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbG9nRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2dFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICAgIHtcbiAgICAgIHdhcm4oKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnIudG9TdHJpbmcoKSkgKyBcIlxcXCJcIiksIHZtKTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoKGluQnJvd3NlciB8fCBpbldlZXgpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgaXNVc2luZ01pY3JvVGFzayA9IGZhbHNlO1xuXG4gIHZhciBjYWxsYmFja3MgPSBbXTtcbiAgdmFyIHBlbmRpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBmbHVzaENhbGxiYWNrcyAoKSB7XG4gICAgcGVuZGluZyA9IGZhbHNlO1xuICAgIHZhciBjb3BpZXMgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvcGllc1tpXSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhlcmUgd2UgaGF2ZSBhc3luYyBkZWZlcnJpbmcgd3JhcHBlcnMgdXNpbmcgbWljcm90YXNrcy5cbiAgLy8gSW4gMi41IHdlIHVzZWQgKG1hY3JvKSB0YXNrcyAoaW4gY29tYmluYXRpb24gd2l0aCBtaWNyb3Rhc2tzKS5cbiAgLy8gSG93ZXZlciwgaXQgaGFzIHN1YnRsZSBwcm9ibGVtcyB3aGVuIHN0YXRlIGlzIGNoYW5nZWQgcmlnaHQgYmVmb3JlIHJlcGFpbnRcbiAgLy8gKGUuZy4gIzY4MTMsIG91dC1pbiB0cmFuc2l0aW9ucykuXG4gIC8vIEFsc28sIHVzaW5nIChtYWNybykgdGFza3MgaW4gZXZlbnQgaGFuZGxlciB3b3VsZCBjYXVzZSBzb21lIHdlaXJkIGJlaGF2aW9yc1xuICAvLyB0aGF0IGNhbm5vdCBiZSBjaXJjdW12ZW50ZWQgKGUuZy4gIzcxMDksICM3MTUzLCAjNzU0NiwgIzc4MzQsICM4MTA5KS5cbiAgLy8gU28gd2Ugbm93IHVzZSBtaWNyb3Rhc2tzIGV2ZXJ5d2hlcmUsIGFnYWluLlxuICAvLyBBIG1ham9yIGRyYXdiYWNrIG9mIHRoaXMgdHJhZGVvZmYgaXMgdGhhdCB0aGVyZSBhcmUgc29tZSBzY2VuYXJpb3NcbiAgLy8gd2hlcmUgbWljcm90YXNrcyBoYXZlIHRvbyBoaWdoIGEgcHJpb3JpdHkgYW5kIGZpcmUgaW4gYmV0d2VlbiBzdXBwb3NlZGx5XG4gIC8vIHNlcXVlbnRpYWwgZXZlbnRzIChlLmcuICM0NTIxLCAjNjY5MCwgd2hpY2ggaGF2ZSB3b3JrYXJvdW5kcylcbiAgLy8gb3IgZXZlbiBiZXR3ZWVuIGJ1YmJsaW5nIG9mIHRoZSBzYW1lIGV2ZW50ICgjNjU2NikuXG4gIHZhciB0aW1lckZ1bmM7XG5cbiAgLy8gVGhlIG5leHRUaWNrIGJlaGF2aW9yIGxldmVyYWdlcyB0aGUgbWljcm90YXNrIHF1ZXVlLCB3aGljaCBjYW4gYmUgYWNjZXNzZWRcbiAgLy8gdmlhIGVpdGhlciBuYXRpdmUgUHJvbWlzZS50aGVuIG9yIE11dGF0aW9uT2JzZXJ2ZXIuXG4gIC8vIE11dGF0aW9uT2JzZXJ2ZXIgaGFzIHdpZGVyIHN1cHBvcnQsIGhvd2V2ZXIgaXQgaXMgc2VyaW91c2x5IGJ1Z2dlZCBpblxuICAvLyBVSVdlYlZpZXcgaW4gaU9TID49IDkuMy4zIHdoZW4gdHJpZ2dlcmVkIGluIHRvdWNoIGV2ZW50IGhhbmRsZXJzLiBJdFxuICAvLyBjb21wbGV0ZWx5IHN0b3BzIHdvcmtpbmcgYWZ0ZXIgdHJpZ2dlcmluZyBhIGZldyB0aW1lcy4uLiBzbywgaWYgbmF0aXZlXG4gIC8vIFByb21pc2UgaXMgYXZhaWxhYmxlLCB3ZSB3aWxsIHVzZSBpdDpcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQsICRmbG93LWRpc2FibGUtbGluZSAqL1xuICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb21pc2UpKSB7XG4gICAgdmFyIHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwLnRoZW4oZmx1c2hDYWxsYmFja3MpO1xuICAgICAgLy8gSW4gcHJvYmxlbWF0aWMgVUlXZWJWaWV3cywgUHJvbWlzZS50aGVuIGRvZXNuJ3QgY29tcGxldGVseSBicmVhaywgYnV0XG4gICAgICAvLyBpdCBjYW4gZ2V0IHN0dWNrIGluIGEgd2VpcmQgc3RhdGUgd2hlcmUgY2FsbGJhY2tzIGFyZSBwdXNoZWQgaW50byB0aGVcbiAgICAgIC8vIG1pY3JvdGFzayBxdWV1ZSBidXQgdGhlIHF1ZXVlIGlzbid0IGJlaW5nIGZsdXNoZWQsIHVudGlsIHRoZSBicm93c2VyXG4gICAgICAvLyBuZWVkcyB0byBkbyBzb21lIG90aGVyIHdvcmssIGUuZy4gaGFuZGxlIGEgdGltZXIuIFRoZXJlZm9yZSB3ZSBjYW5cbiAgICAgIC8vIFwiZm9yY2VcIiB0aGUgbWljcm90YXNrIHF1ZXVlIHRvIGJlIGZsdXNoZWQgYnkgYWRkaW5nIGFuIGVtcHR5IHRpbWVyLlxuICAgICAgaWYgKGlzSU9TKSB7IHNldFRpbWVvdXQobm9vcCk7IH1cbiAgICB9O1xuICAgIGlzVXNpbmdNaWNyb1Rhc2sgPSB0cnVlO1xuICB9IGVsc2UgaWYgKCFpc0lFICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJyAmJiAoXG4gICAgaXNOYXRpdmUoTXV0YXRpb25PYnNlcnZlcikgfHxcbiAgICAvLyBQaGFudG9tSlMgYW5kIGlPUyA3LnhcbiAgICBNdXRhdGlvbk9ic2VydmVyLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl0nXG4gICkpIHtcbiAgICAvLyBVc2UgTXV0YXRpb25PYnNlcnZlciB3aGVyZSBuYXRpdmUgUHJvbWlzZSBpcyBub3QgYXZhaWxhYmxlLFxuICAgIC8vIGUuZy4gUGhhbnRvbUpTLCBpT1M3LCBBbmRyb2lkIDQuNFxuICAgIC8vICgjNjQ2NiBNdXRhdGlvbk9ic2VydmVyIGlzIHVucmVsaWFibGUgaW4gSUUxMSlcbiAgICB2YXIgY291bnRlciA9IDE7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2hDYWxsYmFja3MpO1xuICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjb3VudGVyKSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0Tm9kZSwge1xuICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICAgIH0pO1xuICAgIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgMjtcbiAgICAgIHRleHROb2RlLmRhdGEgPSBTdHJpbmcoY291bnRlcik7XG4gICAgfTtcbiAgICBpc1VzaW5nTWljcm9UYXNrID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShzZXRJbW1lZGlhdGUpKSB7XG4gICAgLy8gRmFsbGJhY2sgdG8gc2V0SW1tZWRpYXRlLlxuICAgIC8vIFRlY2hpbmljYWxseSBpdCBsZXZlcmFnZXMgdGhlIChtYWNybykgdGFzayBxdWV1ZSxcbiAgICAvLyBidXQgaXQgaXMgc3RpbGwgYSBiZXR0ZXIgY2hvaWNlIHRoYW4gc2V0VGltZW91dC5cbiAgICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRJbW1lZGlhdGUoZmx1c2hDYWxsYmFja3MpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2sgdG8gc2V0VGltZW91dC5cbiAgICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZsdXNoQ2FsbGJhY2tzLCAwKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dFRpY2sgKGNiLCBjdHgpIHtcbiAgICB2YXIgX3Jlc29sdmU7XG4gICAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2IuY2FsbChjdHgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgY3R4LCAnbmV4dFRpY2snKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgICBfcmVzb2x2ZShjdHgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IHRydWU7XG4gICAgICB0aW1lckZ1bmMoKTtcbiAgICB9XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBtYXJrO1xuICB2YXIgbWVhc3VyZTtcblxuICB7XG4gICAgdmFyIHBlcmYgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChcbiAgICAgIHBlcmYgJiZcbiAgICAgIHBlcmYubWFyayAmJlxuICAgICAgcGVyZi5tZWFzdXJlICYmXG4gICAgICBwZXJmLmNsZWFyTWFya3MgJiZcbiAgICAgIHBlcmYuY2xlYXJNZWFzdXJlc1xuICAgICkge1xuICAgICAgbWFyayA9IGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIHBlcmYubWFyayh0YWcpOyB9O1xuICAgICAgbWVhc3VyZSA9IGZ1bmN0aW9uIChuYW1lLCBzdGFydFRhZywgZW5kVGFnKSB7XG4gICAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgICAgcGVyZi5jbGVhck1hcmtzKHN0YXJ0VGFnKTtcbiAgICAgICAgcGVyZi5jbGVhck1hcmtzKGVuZFRhZyk7XG4gICAgICAgIC8vIHBlcmYuY2xlYXJNZWFzdXJlcyhuYW1lKVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGggUHJveHkgKi9cblxuICB2YXIgaW5pdFByb3h5O1xuXG4gIHtcbiAgICB2YXIgYWxsb3dlZEdsb2JhbHMgPSBtYWtlTWFwKFxuICAgICAgJ0luZmluaXR5LHVuZGVmaW5lZCxOYU4saXNGaW5pdGUsaXNOYU4sJyArXG4gICAgICAncGFyc2VGbG9hdCxwYXJzZUludCxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSxlbmNvZGVVUklDb21wb25lbnQsJyArXG4gICAgICAnTWF0aCxOdW1iZXIsRGF0ZSxBcnJheSxPYmplY3QsQm9vbGVhbixTdHJpbmcsUmVnRXhwLE1hcCxTZXQsSlNPTixJbnRsLCcgK1xuICAgICAgJ3JlcXVpcmUnIC8vIGZvciBXZWJwYWNrL0Jyb3dzZXJpZnlcbiAgICApO1xuXG4gICAgdmFyIHdhcm5Ob25QcmVzZW50ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIlByb3BlcnR5IG9yIG1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQgb24gdGhlIGluc3RhbmNlIGJ1dCBcIiArXG4gICAgICAgICdyZWZlcmVuY2VkIGR1cmluZyByZW5kZXIuIE1ha2Ugc3VyZSB0aGF0IHRoaXMgcHJvcGVydHkgaXMgcmVhY3RpdmUsICcgK1xuICAgICAgICAnZWl0aGVyIGluIHRoZSBkYXRhIG9wdGlvbiwgb3IgZm9yIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMsIGJ5ICcgK1xuICAgICAgICAnaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eS4gJyArXG4gICAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL3JlYWN0aXZpdHkuaHRtbCNEZWNsYXJpbmctUmVhY3RpdmUtUHJvcGVydGllcy4nLFxuICAgICAgICB0YXJnZXRcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHZhciB3YXJuUmVzZXJ2ZWRQcmVmaXggPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwiUHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIG11c3QgYmUgYWNjZXNzZWQgd2l0aCBcXFwiJGRhdGEuXCIgKyBrZXkgKyBcIlxcXCIgYmVjYXVzZSBcIiArXG4gICAgICAgICdwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggXCIkXCIgb3IgXCJfXCIgYXJlIG5vdCBwcm94aWVkIGluIHRoZSBWdWUgaW5zdGFuY2UgdG8gJyArXG4gICAgICAgICdwcmV2ZW50IGNvbmZsaWN0cyB3aXRoIFZ1ZSBpbnRlcm5hbHMnICtcbiAgICAgICAgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvYXBpLyNkYXRhJyxcbiAgICAgICAgdGFyZ2V0XG4gICAgICApO1xuICAgIH07XG5cbiAgICB2YXIgaGFzUHJveHkgPVxuICAgICAgdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm94eSk7XG5cbiAgICBpZiAoaGFzUHJveHkpIHtcbiAgICAgIHZhciBpc0J1aWx0SW5Nb2RpZmllciA9IG1ha2VNYXAoJ3N0b3AscHJldmVudCxzZWxmLGN0cmwsc2hpZnQsYWx0LG1ldGEsZXhhY3QnKTtcbiAgICAgIGNvbmZpZy5rZXlDb2RlcyA9IG5ldyBQcm94eShjb25maWcua2V5Q29kZXMsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICAgIGlmIChpc0J1aWx0SW5Nb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgICB3YXJuKChcIkF2b2lkIG92ZXJ3cml0aW5nIGJ1aWx0LWluIG1vZGlmaWVyIGluIGNvbmZpZy5rZXlDb2RlczogLlwiICsga2V5KSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaGFzSGFuZGxlciA9IHtcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzICh0YXJnZXQsIGtleSkge1xuICAgICAgICB2YXIgaGFzID0ga2V5IGluIHRhcmdldDtcbiAgICAgICAgdmFyIGlzQWxsb3dlZCA9IGFsbG93ZWRHbG9iYWxzKGtleSkgfHxcbiAgICAgICAgICAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5LmNoYXJBdCgwKSA9PT0gJ18nICYmICEoa2V5IGluIHRhcmdldC4kZGF0YSkpO1xuICAgICAgICBpZiAoIWhhcyAmJiAhaXNBbGxvd2VkKSB7XG4gICAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICAgIGVsc2UgeyB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFzIHx8ICFpc0FsbG93ZWRcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGdldEhhbmRsZXIgPSB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmICEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICBpZiAoa2V5IGluIHRhcmdldC4kZGF0YSkgeyB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbml0UHJveHkgPSBmdW5jdGlvbiBpbml0UHJveHkgKHZtKSB7XG4gICAgICBpZiAoaGFzUHJveHkpIHtcbiAgICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3h5IGhhbmRsZXIgdG8gdXNlXG4gICAgICAgIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IG9wdGlvbnMucmVuZGVyICYmIG9wdGlvbnMucmVuZGVyLl93aXRoU3RyaXBwZWRcbiAgICAgICAgICA/IGdldEhhbmRsZXJcbiAgICAgICAgICA6IGhhc0hhbmRsZXI7XG4gICAgICAgIHZtLl9yZW5kZXJQcm94eSA9IG5ldyBQcm94eSh2bSwgaGFuZGxlcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IHRyYXZlcnNlIGFuIG9iamVjdCB0byBldm9rZSBhbGwgY29udmVydGVkXG4gICAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gICAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gICAqL1xuICBmdW5jdGlvbiB0cmF2ZXJzZSAodmFsKSB7XG4gICAgX3RyYXZlcnNlKHZhbCwgc2Vlbk9iamVjdHMpO1xuICAgIHNlZW5PYmplY3RzLmNsZWFyKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfdHJhdmVyc2UgKHZhbCwgc2Vlbikge1xuICAgIHZhciBpLCBrZXlzO1xuICAgIHZhciBpc0EgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gICAgaWYgKCghaXNBICYmICFpc09iamVjdCh2YWwpKSB8fCBPYmplY3QuaXNGcm96ZW4odmFsKSB8fCB2YWwgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2YWwuX19vYl9fKSB7XG4gICAgICB2YXIgZGVwSWQgPSB2YWwuX19vYl9fLmRlcC5pZDtcbiAgICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBzZWVuLmFkZChkZXBJZCk7XG4gICAgfVxuICAgIGlmIChpc0EpIHtcbiAgICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2ldLCBzZWVuKTsgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2Vlbik7IH1cbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgbm9ybWFsaXplRXZlbnQgPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgcGFzc2l2ZSA9IG5hbWUuY2hhckF0KDApID09PSAnJic7XG4gICAgbmFtZSA9IHBhc3NpdmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgICB2YXIgb25jZSQkMSA9IG5hbWUuY2hhckF0KDApID09PSAnfic7IC8vIFByZWZpeGVkIGxhc3QsIGNoZWNrZWQgZmlyc3RcbiAgICBuYW1lID0gb25jZSQkMSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICAgIHZhciBjYXB0dXJlID0gbmFtZS5jaGFyQXQoMCkgPT09ICchJztcbiAgICBuYW1lID0gY2FwdHVyZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgb25jZTogb25jZSQkMSxcbiAgICAgIGNhcHR1cmU6IGNhcHR1cmUsXG4gICAgICBwYXNzaXZlOiBwYXNzaXZlXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBjcmVhdGVGbkludm9rZXIgKGZucywgdm0pIHtcbiAgICBmdW5jdGlvbiBpbnZva2VyICgpIHtcbiAgICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgICAgdmFyIGZucyA9IGludm9rZXIuZm5zO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZm5zKSkge1xuICAgICAgICB2YXIgY2xvbmVkID0gZm5zLnNsaWNlKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoY2xvbmVkW2ldLCBudWxsLCBhcmd1bWVudHMkMSwgdm0sIFwidi1vbiBoYW5kbGVyXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXR1cm4gaGFuZGxlciByZXR1cm4gdmFsdWUgZm9yIHNpbmdsZSBoYW5kbGVyc1xuICAgICAgICByZXR1cm4gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoZm5zLCBudWxsLCBhcmd1bWVudHMsIHZtLCBcInYtb24gaGFuZGxlclwiKVxuICAgICAgfVxuICAgIH1cbiAgICBpbnZva2VyLmZucyA9IGZucztcbiAgICByZXR1cm4gaW52b2tlclxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTGlzdGVuZXJzIChcbiAgICBvbixcbiAgICBvbGRPbixcbiAgICBhZGQsXG4gICAgcmVtb3ZlJCQxLFxuICAgIGNyZWF0ZU9uY2VIYW5kbGVyLFxuICAgIHZtXG4gICkge1xuICAgIHZhciBuYW1lLCBkZWYkJDEsIGN1ciwgb2xkLCBldmVudDtcbiAgICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICAgIGRlZiQkMSA9IGN1ciA9IG9uW25hbWVdO1xuICAgICAgb2xkID0gb2xkT25bbmFtZV07XG4gICAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgICAgaWYgKGlzVW5kZWYoY3VyKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiSW52YWxpZCBoYW5kbGVyIGZvciBldmVudCBcXFwiXCIgKyAoZXZlbnQubmFtZSkgKyBcIlxcXCI6IGdvdCBcIiArIFN0cmluZyhjdXIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGlzVW5kZWYob2xkKSkge1xuICAgICAgICBpZiAoaXNVbmRlZihjdXIuZm5zKSkge1xuICAgICAgICAgIGN1ciA9IG9uW25hbWVdID0gY3JlYXRlRm5JbnZva2VyKGN1ciwgdm0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1RydWUoZXZlbnQub25jZSkpIHtcbiAgICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZU9uY2VIYW5kbGVyKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSwgZXZlbnQucGFzc2l2ZSwgZXZlbnQucGFyYW1zKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VyICE9PSBvbGQpIHtcbiAgICAgICAgb2xkLmZucyA9IGN1cjtcbiAgICAgICAgb25bbmFtZV0gPSBvbGQ7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgICAgaWYgKGlzVW5kZWYob25bbmFtZV0pKSB7XG4gICAgICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgICAgIHJlbW92ZSQkMShldmVudC5uYW1lLCBvbGRPbltuYW1lXSwgZXZlbnQuY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gbWVyZ2VWTm9kZUhvb2sgKGRlZiwgaG9va0tleSwgaG9vaykge1xuICAgIGlmIChkZWYgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgICAgZGVmID0gZGVmLmRhdGEuaG9vayB8fCAoZGVmLmRhdGEuaG9vayA9IHt9KTtcbiAgICB9XG4gICAgdmFyIGludm9rZXI7XG4gICAgdmFyIG9sZEhvb2sgPSBkZWZbaG9va0tleV07XG5cbiAgICBmdW5jdGlvbiB3cmFwcGVkSG9vayAoKSB7XG4gICAgICBob29rLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAvLyBpbXBvcnRhbnQ6IHJlbW92ZSBtZXJnZWQgaG9vayB0byBlbnN1cmUgaXQncyBjYWxsZWQgb25seSBvbmNlXG4gICAgICAvLyBhbmQgcHJldmVudCBtZW1vcnkgbGVha1xuICAgICAgcmVtb3ZlKGludm9rZXIuZm5zLCB3cmFwcGVkSG9vayk7XG4gICAgfVxuXG4gICAgaWYgKGlzVW5kZWYob2xkSG9vaykpIHtcbiAgICAgIC8vIG5vIGV4aXN0aW5nIGhvb2tcbiAgICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW3dyYXBwZWRIb29rXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGlzRGVmKG9sZEhvb2suZm5zKSAmJiBpc1RydWUob2xkSG9vay5tZXJnZWQpKSB7XG4gICAgICAgIC8vIGFscmVhZHkgYSBtZXJnZWQgaW52b2tlclxuICAgICAgICBpbnZva2VyID0gb2xkSG9vaztcbiAgICAgICAgaW52b2tlci5mbnMucHVzaCh3cmFwcGVkSG9vayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBleGlzdGluZyBwbGFpbiBob29rXG4gICAgICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW29sZEhvb2ssIHdyYXBwZWRIb29rXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW52b2tlci5tZXJnZWQgPSB0cnVlO1xuICAgIGRlZltob29rS2V5XSA9IGludm9rZXI7XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIChcbiAgICBkYXRhLFxuICAgIEN0b3IsXG4gICAgdGFnXG4gICkge1xuICAgIC8vIHdlIGFyZSBvbmx5IGV4dHJhY3RpbmcgcmF3IHZhbHVlcyBoZXJlLlxuICAgIC8vIHZhbGlkYXRpb24gYW5kIGRlZmF1bHQgdmFsdWVzIGFyZSBoYW5kbGVkIGluIHRoZSBjaGlsZFxuICAgIC8vIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLnByb3BzO1xuICAgIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciByZXMgPSB7fTtcbiAgICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICAgIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XG4gICAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgICB2YXIgYWx0S2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIga2V5SW5Mb3dlckNhc2UgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBrZXkgIT09IGtleUluTG93ZXJDYXNlICYmXG4gICAgICAgICAgICBhdHRycyAmJiBoYXNPd24oYXR0cnMsIGtleUluTG93ZXJDYXNlKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGlwKFxuICAgICAgICAgICAgICBcIlByb3AgXFxcIlwiICsga2V5SW5Mb3dlckNhc2UgKyBcIlxcXCIgaXMgcGFzc2VkIHRvIGNvbXBvbmVudCBcIiArXG4gICAgICAgICAgICAgIChmb3JtYXRDb21wb25lbnROYW1lKHRhZyB8fCBDdG9yKSkgKyBcIiwgYnV0IHRoZSBkZWNsYXJlZCBwcm9wIG5hbWUgaXNcIiArXG4gICAgICAgICAgICAgIFwiIFxcXCJcIiArIGtleSArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgICAgICBcIk5vdGUgdGhhdCBIVE1MIGF0dHJpYnV0ZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUgYW5kIGNhbWVsQ2FzZWQgXCIgK1xuICAgICAgICAgICAgICBcInByb3BzIG5lZWQgdG8gdXNlIHRoZWlyIGtlYmFiLWNhc2UgZXF1aXZhbGVudHMgd2hlbiB1c2luZyBpbi1ET00gXCIgK1xuICAgICAgICAgICAgICBcInRlbXBsYXRlcy4gWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgYWx0S2V5ICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGVja1Byb3AocmVzLCBwcm9wcywga2V5LCBhbHRLZXksIHRydWUpIHx8XG4gICAgICAgIGNoZWNrUHJvcChyZXMsIGF0dHJzLCBrZXksIGFsdEtleSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1Byb3AgKFxuICAgIHJlcyxcbiAgICBoYXNoLFxuICAgIGtleSxcbiAgICBhbHRLZXksXG4gICAgcHJlc2VydmVcbiAgKSB7XG4gICAgaWYgKGlzRGVmKGhhc2gpKSB7XG4gICAgICBpZiAoaGFzT3duKGhhc2gsIGtleSkpIHtcbiAgICAgICAgcmVzW2tleV0gPSBoYXNoW2tleV07XG4gICAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgICBkZWxldGUgaGFzaFtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2UgaWYgKGhhc093bihoYXNoLCBhbHRLZXkpKSB7XG4gICAgICAgIHJlc1trZXldID0gaGFzaFthbHRLZXldO1xuICAgICAgICBpZiAoIXByZXNlcnZlKSB7XG4gICAgICAgICAgZGVsZXRlIGhhc2hbYWx0S2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qICAqL1xuXG4gIC8vIFRoZSB0ZW1wbGF0ZSBjb21waWxlciBhdHRlbXB0cyB0byBtaW5pbWl6ZSB0aGUgbmVlZCBmb3Igbm9ybWFsaXphdGlvbiBieVxuICAvLyBzdGF0aWNhbGx5IGFuYWx5emluZyB0aGUgdGVtcGxhdGUgYXQgY29tcGlsZSB0aW1lLlxuICAvL1xuICAvLyBGb3IgcGxhaW4gSFRNTCBtYXJrdXAsIG5vcm1hbGl6YXRpb24gY2FuIGJlIGNvbXBsZXRlbHkgc2tpcHBlZCBiZWNhdXNlIHRoZVxuICAvLyBnZW5lcmF0ZWQgcmVuZGVyIGZ1bmN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gcmV0dXJuIEFycmF5PFZOb2RlPi4gVGhlcmUgYXJlXG4gIC8vIHR3byBjYXNlcyB3aGVyZSBleHRyYSBub3JtYWxpemF0aW9uIGlzIG5lZWRlZDpcblxuICAvLyAxLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb21wb25lbnRzIC0gYmVjYXVzZSBhIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gIC8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcbiAgLy8gbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQgLSBpZiBhbnkgY2hpbGQgaXMgYW4gQXJyYXksIHdlIGZsYXR0ZW4gdGhlIHdob2xlXG4gIC8vIHRoaW5nIHdpdGggQXJyYXkucHJvdG90eXBlLmNvbmNhdC4gSXQgaXMgZ3VhcmFudGVlZCB0byBiZSBvbmx5IDEtbGV2ZWwgZGVlcFxuICAvLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXG4gIGZ1bmN0aW9uIHNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgY2hpbGRyZW4pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlblxuICB9XG5cbiAgLy8gMi4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29uc3RydWN0cyB0aGF0IGFsd2F5cyBnZW5lcmF0ZWQgbmVzdGVkIEFycmF5cyxcbiAgLy8gZS5nLiA8dGVtcGxhdGU+LCA8c2xvdD4sIHYtZm9yLCBvciB3aGVuIHRoZSBjaGlsZHJlbiBpcyBwcm92aWRlZCBieSB1c2VyXG4gIC8vIHdpdGggaGFuZC13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMgLyBKU1guIEluIHN1Y2ggY2FzZXMgYSBmdWxsIG5vcm1hbGl6YXRpb25cbiAgLy8gaXMgbmVlZGVkIHRvIGNhdGVyIHRvIGFsbCBwb3NzaWJsZSB0eXBlcyBvZiBjaGlsZHJlbiB2YWx1ZXMuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICAgIHJldHVybiBpc1ByaW1pdGl2ZShjaGlsZHJlbilcbiAgICAgID8gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICAgID8gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjaGlsZHJlbilcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVGV4dE5vZGUgKG5vZGUpIHtcbiAgICByZXR1cm4gaXNEZWYobm9kZSkgJiYgaXNEZWYobm9kZS50ZXh0KSAmJiBpc0ZhbHNlKG5vZGUuaXNDb21tZW50KVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplQXJyYXlDaGlsZHJlbiAoY2hpbGRyZW4sIG5lc3RlZEluZGV4KSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIHZhciBpLCBjLCBsYXN0SW5kZXgsIGxhc3Q7XG4gICAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNVbmRlZihjKSB8fCB0eXBlb2YgYyA9PT0gJ2Jvb2xlYW4nKSB7IGNvbnRpbnVlIH1cbiAgICAgIGxhc3RJbmRleCA9IHJlcy5sZW5ndGggLSAxO1xuICAgICAgbGFzdCA9IHJlc1tsYXN0SW5kZXhdO1xuICAgICAgLy8gIG5lc3RlZFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYykpIHtcbiAgICAgICAgaWYgKGMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGMgPSBub3JtYWxpemVBcnJheUNoaWxkcmVuKGMsICgobmVzdGVkSW5kZXggfHwgJycpICsgXCJfXCIgKyBpKSk7XG4gICAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICAgIGlmIChpc1RleHROb2RlKGNbMF0pICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIChjWzBdKS50ZXh0KTtcbiAgICAgICAgICAgIGMuc2hpZnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBjKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xuICAgICAgICBpZiAoaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgU1NSIGh5ZHJhdGlvbiBiZWNhdXNlIHRleHQgbm9kZXMgYXJlXG4gICAgICAgICAgLy8gZXNzZW50aWFsbHkgbWVyZ2VkIHdoZW4gcmVuZGVyZWQgdG8gSFRNTCBzdHJpbmdzXG4gICAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJycpIHtcbiAgICAgICAgICAvLyBjb252ZXJ0IHByaW1pdGl2ZSB0byB2bm9kZVxuICAgICAgICAgIHJlcy5wdXNoKGNyZWF0ZVRleHRWTm9kZShjKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1RleHROb2RlKGMpICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYy50ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkZWZhdWx0IGtleSBmb3IgbmVzdGVkIGFycmF5IGNoaWxkcmVuIChsaWtlbHkgZ2VuZXJhdGVkIGJ5IHYtZm9yKVxuICAgICAgICAgIGlmIChpc1RydWUoY2hpbGRyZW4uX2lzVkxpc3QpICYmXG4gICAgICAgICAgICBpc0RlZihjLnRhZykgJiZcbiAgICAgICAgICAgIGlzVW5kZWYoYy5rZXkpICYmXG4gICAgICAgICAgICBpc0RlZihuZXN0ZWRJbmRleCkpIHtcbiAgICAgICAgICAgIGMua2V5ID0gXCJfX3ZsaXN0XCIgKyBuZXN0ZWRJbmRleCArIFwiX1wiICsgaSArIFwiX19cIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzLnB1c2goYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gaW5pdFByb3ZpZGUgKHZtKSB7XG4gICAgdmFyIHByb3ZpZGUgPSB2bS4kb3B0aW9ucy5wcm92aWRlO1xuICAgIGlmIChwcm92aWRlKSB7XG4gICAgICB2bS5fcHJvdmlkZWQgPSB0eXBlb2YgcHJvdmlkZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3ZpZGUuY2FsbCh2bSlcbiAgICAgICAgOiBwcm92aWRlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRJbmplY3Rpb25zICh2bSkge1xuICAgIHZhciByZXN1bHQgPSByZXNvbHZlSW5qZWN0KHZtLiRvcHRpb25zLmluamVjdCwgdm0pO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gICAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICB7XG4gICAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYW4gaW5qZWN0ZWQgdmFsdWUgZGlyZWN0bHkgc2luY2UgdGhlIGNoYW5nZXMgd2lsbCBiZSBcIiArXG4gICAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICAgIFwiaW5qZWN0aW9uIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgICB2bVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUluamVjdCAoaW5qZWN0LCB2bSkge1xuICAgIGlmIChpbmplY3QpIHtcbiAgICAgIC8vIGluamVjdCBpcyA6YW55IGJlY2F1c2UgZmxvdyBpcyBub3Qgc21hcnQgZW5vdWdoIHRvIGZpZ3VyZSBvdXQgY2FjaGVkXG4gICAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgICAgID8gUmVmbGVjdC5vd25LZXlzKGluamVjdClcbiAgICAgICAgOiBPYmplY3Qua2V5cyhpbmplY3QpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIC8vICM2NTc0IGluIGNhc2UgdGhlIGluamVjdCBvYmplY3QgaXMgb2JzZXJ2ZWQuLi5cbiAgICAgICAgaWYgKGtleSA9PT0gJ19fb2JfXycpIHsgY29udGludWUgfVxuICAgICAgICB2YXIgcHJvdmlkZUtleSA9IGluamVjdFtrZXldLmZyb207XG4gICAgICAgIHZhciBzb3VyY2UgPSB2bTtcbiAgICAgICAgd2hpbGUgKHNvdXJjZSkge1xuICAgICAgICAgIGlmIChzb3VyY2UuX3Byb3ZpZGVkICYmIGhhc093bihzb3VyY2UuX3Byb3ZpZGVkLCBwcm92aWRlS2V5KSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2UuX3Byb3ZpZGVkW3Byb3ZpZGVLZXldO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgc291cmNlID0gc291cmNlLiRwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIGluamVjdFtrZXldKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZURlZmF1bHQgPSBpbmplY3Rba2V5XS5kZWZhdWx0O1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB0eXBlb2YgcHJvdmlkZURlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgPyBwcm92aWRlRGVmYXVsdC5jYWxsKHZtKVxuICAgICAgICAgICAgICA6IHByb3ZpZGVEZWZhdWx0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YXJuKChcIkluamVjdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgbm90IGZvdW5kXCIpLCB2bSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cblxuXG4gIC8qKlxuICAgKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIHJhdyBjaGlsZHJlbiBWTm9kZXMgaW50byBhIHNsb3Qgb2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZVNsb3RzIChcbiAgICBjaGlsZHJlbixcbiAgICBjb250ZXh0XG4gICkge1xuICAgIGlmICghY2hpbGRyZW4gfHwgIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICAgIHZhciBzbG90cyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIHZhciBkYXRhID0gY2hpbGQuZGF0YTtcbiAgICAgIC8vIHJlbW92ZSBzbG90IGF0dHJpYnV0ZSBpZiB0aGUgbm9kZSBpcyByZXNvbHZlZCBhcyBhIFZ1ZSBzbG90IG5vZGVcbiAgICAgIGlmIChkYXRhICYmIGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy5zbG90KSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhLmF0dHJzLnNsb3Q7XG4gICAgICB9XG4gICAgICAvLyBuYW1lZCBzbG90cyBzaG91bGQgb25seSBiZSByZXNwZWN0ZWQgaWYgdGhlIHZub2RlIHdhcyByZW5kZXJlZCBpbiB0aGVcbiAgICAgIC8vIHNhbWUgY29udGV4dC5cbiAgICAgIGlmICgoY2hpbGQuY29udGV4dCA9PT0gY29udGV4dCB8fCBjaGlsZC5mbkNvbnRleHQgPT09IGNvbnRleHQpICYmXG4gICAgICAgIGRhdGEgJiYgZGF0YS5zbG90ICE9IG51bGxcbiAgICAgICkge1xuICAgICAgICB2YXIgbmFtZSA9IGRhdGEuc2xvdDtcbiAgICAgICAgdmFyIHNsb3QgPSAoc2xvdHNbbmFtZV0gfHwgKHNsb3RzW25hbWVdID0gW10pKTtcbiAgICAgICAgaWYgKGNoaWxkLnRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAgIHNsb3QucHVzaC5hcHBseShzbG90LCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xvdC5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHNsb3RzLmRlZmF1bHQgfHwgKHNsb3RzLmRlZmF1bHQgPSBbXSkpLnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZ25vcmUgc2xvdHMgdGhhdCBjb250YWlucyBvbmx5IHdoaXRlc3BhY2VcbiAgICBmb3IgKHZhciBuYW1lJDEgaW4gc2xvdHMpIHtcbiAgICAgIGlmIChzbG90c1tuYW1lJDFdLmV2ZXJ5KGlzV2hpdGVzcGFjZSkpIHtcbiAgICAgICAgZGVsZXRlIHNsb3RzW25hbWUkMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzbG90c1xuICB9XG5cbiAgZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChub2RlKSB7XG4gICAgcmV0dXJuIChub2RlLmlzQ29tbWVudCAmJiAhbm9kZS5hc3luY0ZhY3RvcnkpIHx8IG5vZGUudGV4dCA9PT0gJyAnXG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90cyAoXG4gICAgc2xvdHMsXG4gICAgbm9ybWFsU2xvdHMsXG4gICAgcHJldlNsb3RzXG4gICkge1xuICAgIHZhciByZXM7XG4gICAgdmFyIGhhc05vcm1hbFNsb3RzID0gT2JqZWN0LmtleXMobm9ybWFsU2xvdHMpLmxlbmd0aCA+IDA7XG4gICAgdmFyIGlzU3RhYmxlID0gc2xvdHMgPyAhIXNsb3RzLiRzdGFibGUgOiAhaGFzTm9ybWFsU2xvdHM7XG4gICAgdmFyIGtleSA9IHNsb3RzICYmIHNsb3RzLiRrZXk7XG4gICAgaWYgKCFzbG90cykge1xuICAgICAgcmVzID0ge307XG4gICAgfSBlbHNlIGlmIChzbG90cy5fbm9ybWFsaXplZCkge1xuICAgICAgLy8gZmFzdCBwYXRoIDE6IGNoaWxkIGNvbXBvbmVudCByZS1yZW5kZXIgb25seSwgcGFyZW50IGRpZCBub3QgY2hhbmdlXG4gICAgICByZXR1cm4gc2xvdHMuX25vcm1hbGl6ZWRcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgaXNTdGFibGUgJiZcbiAgICAgIHByZXZTbG90cyAmJlxuICAgICAgcHJldlNsb3RzICE9PSBlbXB0eU9iamVjdCAmJlxuICAgICAga2V5ID09PSBwcmV2U2xvdHMuJGtleSAmJlxuICAgICAgIWhhc05vcm1hbFNsb3RzICYmXG4gICAgICAhcHJldlNsb3RzLiRoYXNOb3JtYWxcbiAgICApIHtcbiAgICAgIC8vIGZhc3QgcGF0aCAyOiBzdGFibGUgc2NvcGVkIHNsb3RzIHcvIG5vIG5vcm1hbCBzbG90cyB0byBwcm94eSxcbiAgICAgIC8vIG9ubHkgbmVlZCB0byBub3JtYWxpemUgb25jZVxuICAgICAgcmV0dXJuIHByZXZTbG90c1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSQxIGluIHNsb3RzKSB7XG4gICAgICAgIGlmIChzbG90c1trZXkkMV0gJiYga2V5JDFbMF0gIT09ICckJykge1xuICAgICAgICAgIHJlc1trZXkkMV0gPSBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXkkMSwgc2xvdHNba2V5JDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBleHBvc2Ugbm9ybWFsIHNsb3RzIG9uIHNjb3BlZFNsb3RzXG4gICAgZm9yICh2YXIga2V5JDIgaW4gbm9ybWFsU2xvdHMpIHtcbiAgICAgIGlmICghKGtleSQyIGluIHJlcykpIHtcbiAgICAgICAgcmVzW2tleSQyXSA9IHByb3h5Tm9ybWFsU2xvdChub3JtYWxTbG90cywga2V5JDIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhdm9yaWF6IHNlZW1zIHRvIG1vY2sgYSBub24tZXh0ZW5zaWJsZSAkc2NvcGVkU2xvdHMgb2JqZWN0XG4gICAgLy8gYW5kIHdoZW4gdGhhdCBpcyBwYXNzZWQgZG93biB0aGlzIHdvdWxkIGNhdXNlIGFuIGVycm9yXG4gICAgaWYgKHNsb3RzICYmIE9iamVjdC5pc0V4dGVuc2libGUoc2xvdHMpKSB7XG4gICAgICAoc2xvdHMpLl9ub3JtYWxpemVkID0gcmVzO1xuICAgIH1cbiAgICBkZWYocmVzLCAnJHN0YWJsZScsIGlzU3RhYmxlKTtcbiAgICBkZWYocmVzLCAnJGtleScsIGtleSk7XG4gICAgZGVmKHJlcywgJyRoYXNOb3JtYWwnLCBoYXNOb3JtYWxTbG90cyk7XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdChub3JtYWxTbG90cywga2V5LCBmbikge1xuICAgIHZhciBub3JtYWxpemVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlcyA9IGFyZ3VtZW50cy5sZW5ndGggPyBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpIDogZm4oe30pO1xuICAgICAgcmVzID0gcmVzICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlcylcbiAgICAgICAgPyBbcmVzXSAvLyBzaW5nbGUgdm5vZGVcbiAgICAgICAgOiBub3JtYWxpemVDaGlsZHJlbihyZXMpO1xuICAgICAgcmV0dXJuIHJlcyAmJiAoXG4gICAgICAgIHJlcy5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgKHJlcy5sZW5ndGggPT09IDEgJiYgcmVzWzBdLmlzQ29tbWVudCkgLy8gIzk2NThcbiAgICAgICkgPyB1bmRlZmluZWRcbiAgICAgICAgOiByZXNcbiAgICB9O1xuICAgIC8vIHRoaXMgaXMgYSBzbG90IHVzaW5nIHRoZSBuZXcgdi1zbG90IHN5bnRheCB3aXRob3V0IHNjb3BlLiBhbHRob3VnaCBpdCBpc1xuICAgIC8vIGNvbXBpbGVkIGFzIGEgc2NvcGVkIHNsb3QsIHJlbmRlciBmbiB1c2VycyB3b3VsZCBleHBlY3QgaXQgdG8gYmUgcHJlc2VudFxuICAgIC8vIG9uIHRoaXMuJHNsb3RzIGJlY2F1c2UgdGhlIHVzYWdlIGlzIHNlbWFudGljYWxseSBhIG5vcm1hbCBzbG90LlxuICAgIGlmIChmbi5wcm94eSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbFNsb3RzLCBrZXksIHtcbiAgICAgICAgZ2V0OiBub3JtYWxpemVkLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplZFxuICB9XG5cbiAgZnVuY3Rpb24gcHJveHlOb3JtYWxTbG90KHNsb3RzLCBrZXkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2xvdHNba2V5XTsgfVxuICB9XG5cbiAgLyogICovXG5cbiAgLyoqXG4gICAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgdi1mb3IgbGlzdHMuXG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgICB2YWwsXG4gICAgcmVuZGVyXG4gICkge1xuICAgIHZhciByZXQsIGksIGwsIGtleXMsIGtleTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0gdmFsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICByZXRbaV0gPSByZW5kZXIodmFsW2ldLCBpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgICByZXRbaV0gPSByZW5kZXIoaSArIDEsIGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgICAgaWYgKGhhc1N5bWJvbCAmJiB2YWxbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgICByZXQgPSBbXTtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gdmFsW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgICAgICAgIHJldC5wdXNoKHJlbmRlcihyZXN1bHQudmFsdWUsIHJldC5sZW5ndGgpKTtcbiAgICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgICByZXQgPSBuZXcgQXJyYXkoa2V5cy5sZW5ndGgpO1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxba2V5XSwga2V5LCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzRGVmKHJldCkpIHtcbiAgICAgIHJldCA9IFtdO1xuICAgIH1cbiAgICAocmV0KS5faXNWTGlzdCA9IHRydWU7XG4gICAgcmV0dXJuIHJldFxuICB9XG5cbiAgLyogICovXG5cbiAgLyoqXG4gICAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgPHNsb3Q+XG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXJTbG90IChcbiAgICBuYW1lLFxuICAgIGZhbGxiYWNrLFxuICAgIHByb3BzLFxuICAgIGJpbmRPYmplY3RcbiAgKSB7XG4gICAgdmFyIHNjb3BlZFNsb3RGbiA9IHRoaXMuJHNjb3BlZFNsb3RzW25hbWVdO1xuICAgIHZhciBub2RlcztcbiAgICBpZiAoc2NvcGVkU2xvdEZuKSB7IC8vIHNjb3BlZCBzbG90XG4gICAgICBwcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgICAgaWYgKGJpbmRPYmplY3QpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdChiaW5kT2JqZWN0KSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAnc2xvdCB2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCcsXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9wcyA9IGV4dGVuZChleHRlbmQoe30sIGJpbmRPYmplY3QpLCBwcm9wcyk7XG4gICAgICB9XG4gICAgICBub2RlcyA9IHNjb3BlZFNsb3RGbihwcm9wcykgfHwgZmFsbGJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVzID0gdGhpcy4kc2xvdHNbbmFtZV0gfHwgZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IHByb3BzICYmIHByb3BzLnNsb3Q7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJywgeyBzbG90OiB0YXJnZXQgfSwgbm9kZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBub2Rlc1xuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIC8qKlxuICAgKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIGZpbHRlcnNcbiAgICovXG4gIGZ1bmN0aW9uIHJlc29sdmVGaWx0ZXIgKGlkKSB7XG4gICAgcmV0dXJuIHJlc29sdmVBc3NldCh0aGlzLiRvcHRpb25zLCAnZmlsdGVycycsIGlkLCB0cnVlKSB8fCBpZGVudGl0eVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gaXNLZXlOb3RNYXRjaCAoZXhwZWN0LCBhY3R1YWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3QpKSB7XG4gICAgICByZXR1cm4gZXhwZWN0LmluZGV4T2YoYWN0dWFsKSA9PT0gLTFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGV4cGVjdCAhPT0gYWN0dWFsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnRpbWUgaGVscGVyIGZvciBjaGVja2luZyBrZXlDb2RlcyBmcm9tIGNvbmZpZy5cbiAgICogZXhwb3NlZCBhcyBWdWUucHJvdG90eXBlLl9rXG4gICAqIHBhc3NpbmcgaW4gZXZlbnRLZXlOYW1lIGFzIGxhc3QgYXJndW1lbnQgc2VwYXJhdGVseSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgKi9cbiAgZnVuY3Rpb24gY2hlY2tLZXlDb2RlcyAoXG4gICAgZXZlbnRLZXlDb2RlLFxuICAgIGtleSxcbiAgICBidWlsdEluS2V5Q29kZSxcbiAgICBldmVudEtleU5hbWUsXG4gICAgYnVpbHRJbktleU5hbWVcbiAgKSB7XG4gICAgdmFyIG1hcHBlZEtleUNvZGUgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluS2V5Q29kZTtcbiAgICBpZiAoYnVpbHRJbktleU5hbWUgJiYgZXZlbnRLZXlOYW1lICYmICFjb25maWcua2V5Q29kZXNba2V5XSkge1xuICAgICAgcmV0dXJuIGlzS2V5Tm90TWF0Y2goYnVpbHRJbktleU5hbWUsIGV2ZW50S2V5TmFtZSlcbiAgICB9IGVsc2UgaWYgKG1hcHBlZEtleUNvZGUpIHtcbiAgICAgIHJldHVybiBpc0tleU5vdE1hdGNoKG1hcHBlZEtleUNvZGUsIGV2ZW50S2V5Q29kZSlcbiAgICB9IGVsc2UgaWYgKGV2ZW50S2V5TmFtZSkge1xuICAgICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXlcbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICAvKipcbiAgICogUnVudGltZSBoZWxwZXIgZm9yIG1lcmdpbmcgdi1iaW5kPVwib2JqZWN0XCIgaW50byBhIFZOb2RlJ3MgZGF0YS5cbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRPYmplY3RQcm9wcyAoXG4gICAgZGF0YSxcbiAgICB0YWcsXG4gICAgdmFsdWUsXG4gICAgYXNQcm9wLFxuICAgIGlzU3luY1xuICApIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ3YtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IG9yIEFycmF5IHZhbHVlJyxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzaDtcbiAgICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBrZXkgPT09ICdjbGFzcycgfHxcbiAgICAgICAgICAgIGtleSA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgICAgaXNSZXNlcnZlZEF0dHJpYnV0ZShrZXkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBoYXNoID0gZGF0YTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMudHlwZTtcbiAgICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxuICAgICAgICAgICAgICA/IGRhdGEuZG9tUHJvcHMgfHwgKGRhdGEuZG9tUHJvcHMgPSB7fSlcbiAgICAgICAgICAgICAgOiBkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgY2FtZWxpemVkS2V5ID0gY2FtZWxpemUoa2V5KTtcbiAgICAgICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgICAgIGlmICghKGNhbWVsaXplZEtleSBpbiBoYXNoKSAmJiAhKGh5cGhlbmF0ZWRLZXkgaW4gaGFzaCkpIHtcbiAgICAgICAgICAgIGhhc2hba2V5XSA9IHZhbHVlW2tleV07XG5cbiAgICAgICAgICAgIGlmIChpc1N5bmMpIHtcbiAgICAgICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgICAgICAgICAgICAgb25bKFwidXBkYXRlOlwiICsga2V5KV0gPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFsdWVba2V5XSA9ICRldmVudDtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSBsb29wKCBrZXkgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIC8qICAqL1xuXG4gIC8qKlxuICAgKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHN0YXRpYyB0cmVlcy5cbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlclN0YXRpYyAoXG4gICAgaW5kZXgsXG4gICAgaXNJbkZvclxuICApIHtcbiAgICB2YXIgY2FjaGVkID0gdGhpcy5fc3RhdGljVHJlZXMgfHwgKHRoaXMuX3N0YXRpY1RyZWVzID0gW10pO1xuICAgIHZhciB0cmVlID0gY2FjaGVkW2luZGV4XTtcbiAgICAvLyBpZiBoYXMgYWxyZWFkeS1yZW5kZXJlZCBzdGF0aWMgdHJlZSBhbmQgbm90IGluc2lkZSB2LWZvcixcbiAgICAvLyB3ZSBjYW4gcmV1c2UgdGhlIHNhbWUgdHJlZS5cbiAgICBpZiAodHJlZSAmJiAhaXNJbkZvcikge1xuICAgICAgcmV0dXJuIHRyZWVcbiAgICB9XG4gICAgLy8gb3RoZXJ3aXNlLCByZW5kZXIgYSBmcmVzaCB0cmVlLlxuICAgIHRyZWUgPSBjYWNoZWRbaW5kZXhdID0gdGhpcy4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNbaW5kZXhdLmNhbGwoXG4gICAgICB0aGlzLl9yZW5kZXJQcm94eSxcbiAgICAgIG51bGwsXG4gICAgICB0aGlzIC8vIGZvciByZW5kZXIgZm5zIGdlbmVyYXRlZCBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgdGVtcGxhdGVzXG4gICAgKTtcbiAgICBtYXJrU3RhdGljKHRyZWUsIChcIl9fc3RhdGljX19cIiArIGluZGV4KSwgZmFsc2UpO1xuICAgIHJldHVybiB0cmVlXG4gIH1cblxuICAvKipcbiAgICogUnVudGltZSBoZWxwZXIgZm9yIHYtb25jZS5cbiAgICogRWZmZWN0aXZlbHkgaXQgbWVhbnMgbWFya2luZyB0aGUgbm9kZSBhcyBzdGF0aWMgd2l0aCBhIHVuaXF1ZSBrZXkuXG4gICAqL1xuICBmdW5jdGlvbiBtYXJrT25jZSAoXG4gICAgdHJlZSxcbiAgICBpbmRleCxcbiAgICBrZXlcbiAgKSB7XG4gICAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX29uY2VfX1wiICsgaW5kZXggKyAoa2V5ID8gKFwiX1wiICsga2V5KSA6IFwiXCIpKSwgdHJ1ZSk7XG4gICAgcmV0dXJuIHRyZWVcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtTdGF0aWMgKFxuICAgIHRyZWUsXG4gICAga2V5LFxuICAgIGlzT25jZVxuICApIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0cmVlW2ldICYmIHR5cGVvZiB0cmVlW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIG1hcmtTdGF0aWNOb2RlKHRyZWVbaV0sIChrZXkgKyBcIl9cIiArIGkpLCBpc09uY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmtTdGF0aWNOb2RlKHRyZWUsIGtleSwgaXNPbmNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXJrU3RhdGljTm9kZSAobm9kZSwga2V5LCBpc09uY2UpIHtcbiAgICBub2RlLmlzU3RhdGljID0gdHJ1ZTtcbiAgICBub2RlLmtleSA9IGtleTtcbiAgICBub2RlLmlzT25jZSA9IGlzT25jZTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGJpbmRPYmplY3RMaXN0ZW5lcnMgKGRhdGEsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ3Ytb24gd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCB2YWx1ZScsXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG9uID0gZGF0YS5vbiA9IGRhdGEub24gPyBleHRlbmQoe30sIGRhdGEub24pIDoge307XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgIHZhciBleGlzdGluZyA9IG9uW2tleV07XG4gICAgICAgICAgdmFyIG91cnMgPSB2YWx1ZVtrZXldO1xuICAgICAgICAgIG9uW2tleV0gPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgb3VycykgOiBvdXJzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxuICAgIGZucywgLy8gc2VlIGZsb3cvdm5vZGVcbiAgICByZXMsXG4gICAgLy8gdGhlIGZvbGxvd2luZyBhcmUgYWRkZWQgaW4gMi42XG4gICAgaGFzRHluYW1pY0tleXMsXG4gICAgY29udGVudEhhc2hLZXlcbiAgKSB7XG4gICAgcmVzID0gcmVzIHx8IHsgJHN0YWJsZTogIWhhc0R5bmFtaWNLZXlzIH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzbG90ID0gZm5zW2ldO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2xvdCkpIHtcbiAgICAgICAgcmVzb2x2ZVNjb3BlZFNsb3RzKHNsb3QsIHJlcywgaGFzRHluYW1pY0tleXMpO1xuICAgICAgfSBlbHNlIGlmIChzbG90KSB7XG4gICAgICAgIC8vIG1hcmtlciBmb3IgcmV2ZXJzZSBwcm94eWluZyB2LXNsb3Qgd2l0aG91dCBzY29wZSBvbiB0aGlzLiRzbG90c1xuICAgICAgICBpZiAoc2xvdC5wcm94eSkge1xuICAgICAgICAgIHNsb3QuZm4ucHJveHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc1tzbG90LmtleV0gPSBzbG90LmZuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGVudEhhc2hLZXkpIHtcbiAgICAgIChyZXMpLiRrZXkgPSBjb250ZW50SGFzaEtleTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gYmluZER5bmFtaWNLZXlzIChiYXNlT2JqLCB2YWx1ZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgdmFyIGtleSA9IHZhbHVlc1tpXTtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkpIHtcbiAgICAgICAgYmFzZU9ialt2YWx1ZXNbaV1dID0gdmFsdWVzW2kgKyAxXTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ICE9PSAnJyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgICAgLy8gbnVsbCBpcyBhIHNwZWljYWwgdmFsdWUgZm9yIGV4cGxpY2l0bHkgcmVtb3ZpbmcgYSBiaW5kaW5nXG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiSW52YWxpZCB2YWx1ZSBmb3IgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgKGV4cGVjdGVkIHN0cmluZyBvciBudWxsKTogXCIgKyBrZXkpLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJhc2VPYmpcbiAgfVxuXG4gIC8vIGhlbHBlciB0byBkeW5hbWljYWxseSBhcHBlbmQgbW9kaWZpZXIgcnVudGltZSBtYXJrZXJzIHRvIGV2ZW50IG5hbWVzLlxuICAvLyBlbnN1cmUgb25seSBhcHBlbmQgd2hlbiB2YWx1ZSBpcyBhbHJlYWR5IHN0cmluZywgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgY2FzdFxuICAvLyB0byBzdHJpbmcgYW5kIGNhdXNlIHRoZSB0eXBlIGNoZWNrIHRvIG1pc3MuXG4gIGZ1bmN0aW9uIHByZXBlbmRNb2RpZmllciAodmFsdWUsIHN5bWJvbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gc3ltYm9sICsgdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gaW5zdGFsbFJlbmRlckhlbHBlcnMgKHRhcmdldCkge1xuICAgIHRhcmdldC5fbyA9IG1hcmtPbmNlO1xuICAgIHRhcmdldC5fbiA9IHRvTnVtYmVyO1xuICAgIHRhcmdldC5fcyA9IHRvU3RyaW5nO1xuICAgIHRhcmdldC5fbCA9IHJlbmRlckxpc3Q7XG4gICAgdGFyZ2V0Ll90ID0gcmVuZGVyU2xvdDtcbiAgICB0YXJnZXQuX3EgPSBsb29zZUVxdWFsO1xuICAgIHRhcmdldC5faSA9IGxvb3NlSW5kZXhPZjtcbiAgICB0YXJnZXQuX20gPSByZW5kZXJTdGF0aWM7XG4gICAgdGFyZ2V0Ll9mID0gcmVzb2x2ZUZpbHRlcjtcbiAgICB0YXJnZXQuX2sgPSBjaGVja0tleUNvZGVzO1xuICAgIHRhcmdldC5fYiA9IGJpbmRPYmplY3RQcm9wcztcbiAgICB0YXJnZXQuX3YgPSBjcmVhdGVUZXh0Vk5vZGU7XG4gICAgdGFyZ2V0Ll9lID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgICB0YXJnZXQuX3UgPSByZXNvbHZlU2NvcGVkU2xvdHM7XG4gICAgdGFyZ2V0Ll9nID0gYmluZE9iamVjdExpc3RlbmVycztcbiAgICB0YXJnZXQuX2QgPSBiaW5kRHluYW1pY0tleXM7XG4gICAgdGFyZ2V0Ll9wID0gcHJlcGVuZE1vZGlmaWVyO1xuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgKFxuICAgIGRhdGEsXG4gICAgcHJvcHMsXG4gICAgY2hpbGRyZW4sXG4gICAgcGFyZW50LFxuICAgIEN0b3JcbiAgKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgICAvLyBlbnN1cmUgdGhlIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gaW4gZnVuY3Rpb25hbCBjb21wb25lbnRzXG4gICAgLy8gZ2V0cyBhIHVuaXF1ZSBjb250ZXh0IC0gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIGNvcnJlY3QgbmFtZWQgc2xvdCBjaGVja1xuICAgIHZhciBjb250ZXh0Vm07XG4gICAgaWYgKGhhc093bihwYXJlbnQsICdfdWlkJykpIHtcbiAgICAgIGNvbnRleHRWbSA9IE9iamVjdC5jcmVhdGUocGFyZW50KTtcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgY29udGV4dFZtLl9vcmlnaW5hbCA9IHBhcmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhlIGNvbnRleHQgdm0gcGFzc2VkIGluIGlzIGEgZnVuY3Rpb25hbCBjb250ZXh0IGFzIHdlbGwuXG4gICAgICAvLyBpbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgYXJlIGFibGUgdG8gZ2V0IGEgaG9sZCB0byB0aGVcbiAgICAgIC8vIHJlYWwgY29udGV4dCBpbnN0YW5jZS5cbiAgICAgIGNvbnRleHRWbSA9IHBhcmVudDtcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgcGFyZW50ID0gcGFyZW50Ll9vcmlnaW5hbDtcbiAgICB9XG4gICAgdmFyIGlzQ29tcGlsZWQgPSBpc1RydWUob3B0aW9ucy5fY29tcGlsZWQpO1xuICAgIHZhciBuZWVkTm9ybWFsaXphdGlvbiA9ICFpc0NvbXBpbGVkO1xuXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMubGlzdGVuZXJzID0gZGF0YS5vbiB8fCBlbXB0eU9iamVjdDtcbiAgICB0aGlzLmluamVjdGlvbnMgPSByZXNvbHZlSW5qZWN0KG9wdGlvbnMuaW5qZWN0LCBwYXJlbnQpO1xuICAgIHRoaXMuc2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMkMS4kc2xvdHMpIHtcbiAgICAgICAgbm9ybWFsaXplU2NvcGVkU2xvdHMoXG4gICAgICAgICAgZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgICB0aGlzJDEuJHNsb3RzID0gcmVzb2x2ZVNsb3RzKGNoaWxkcmVuLCBwYXJlbnQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcyQxLiRzbG90c1xuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Njb3BlZFNsb3RzJywgKHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLnNsb3RzKCkpXG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgLy8gc3VwcG9ydCBmb3IgY29tcGlsZWQgZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICAgIGlmIChpc0NvbXBpbGVkKSB7XG4gICAgICAvLyBleHBvc2luZyAkb3B0aW9ucyBmb3IgcmVuZGVyU3RhdGljKClcbiAgICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgLy8gcHJlLXJlc29sdmUgc2xvdHMgZm9yIHJlbmRlclNsb3QoKVxuICAgICAgdGhpcy4kc2xvdHMgPSB0aGlzLnNsb3RzKCk7XG4gICAgICB0aGlzLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuJHNsb3RzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5fc2NvcGVJZCkge1xuICAgICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICAgIHZhciB2bm9kZSA9IGNyZWF0ZUVsZW1lbnQoY29udGV4dFZtLCBhLCBiLCBjLCBkLCBuZWVkTm9ybWFsaXphdGlvbik7XG4gICAgICAgIGlmICh2bm9kZSAmJiAhQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgICB2bm9kZS5mblNjb3BlSWQgPSBvcHRpb25zLl9zY29wZUlkO1xuICAgICAgICAgIHZub2RlLmZuQ29udGV4dCA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdm5vZGVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTsgfTtcbiAgICB9XG4gIH1cblxuICBpbnN0YWxsUmVuZGVySGVscGVycyhGdW5jdGlvbmFsUmVuZGVyQ29udGV4dC5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQgKFxuICAgIEN0b3IsXG4gICAgcHJvcHNEYXRhLFxuICAgIGRhdGEsXG4gICAgY29udGV4dFZtLFxuICAgIGNoaWxkcmVuXG4gICkge1xuICAgIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBwcm9wT3B0aW9ucyA9IG9wdGlvbnMucHJvcHM7XG4gICAgaWYgKGlzRGVmKHByb3BPcHRpb25zKSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhIHx8IGVtcHR5T2JqZWN0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzRGVmKGRhdGEuYXR0cnMpKSB7IG1lcmdlUHJvcHMocHJvcHMsIGRhdGEuYXR0cnMpOyB9XG4gICAgICBpZiAoaXNEZWYoZGF0YS5wcm9wcykpIHsgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5wcm9wcyk7IH1cbiAgICB9XG5cbiAgICB2YXIgcmVuZGVyQ29udGV4dCA9IG5ldyBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dChcbiAgICAgIGRhdGEsXG4gICAgICBwcm9wcyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY29udGV4dFZtLFxuICAgICAgQ3RvclxuICAgICk7XG5cbiAgICB2YXIgdm5vZGUgPSBvcHRpb25zLnJlbmRlci5jYWxsKG51bGwsIHJlbmRlckNvbnRleHQuX2MsIHJlbmRlckNvbnRleHQpO1xuXG4gICAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICAgIHJldHVybiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0KHZub2RlLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dClcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xuICAgICAgdmFyIHJlcyA9IG5ldyBBcnJheSh2bm9kZXMubGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc1tpXSA9IGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGVzW2ldLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCAodm5vZGUsIGRhdGEsIGNvbnRleHRWbSwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCkge1xuICAgIC8vICM3ODE3IGNsb25lIG5vZGUgYmVmb3JlIHNldHRpbmcgZm5Db250ZXh0LCBvdGhlcndpc2UgaWYgdGhlIG5vZGUgaXMgcmV1c2VkXG4gICAgLy8gKGUuZy4gaXQgd2FzIGZyb20gYSBjYWNoZWQgbm9ybWFsIHNsb3QpIHRoZSBmbkNvbnRleHQgY2F1c2VzIG5hbWVkIHNsb3RzXG4gICAgLy8gdGhhdCBzaG91bGQgbm90IGJlIG1hdGNoZWQgdG8gbWF0Y2guXG4gICAgdmFyIGNsb25lID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gICAgY2xvbmUuZm5Db250ZXh0ID0gY29udGV4dFZtO1xuICAgIGNsb25lLmZuT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAge1xuICAgICAgKGNsb25lLmRldnRvb2xzTWV0YSA9IGNsb25lLmRldnRvb2xzTWV0YSB8fCB7fSkucmVuZGVyQ29udGV4dCA9IHJlbmRlckNvbnRleHQ7XG4gICAgfVxuICAgIGlmIChkYXRhLnNsb3QpIHtcbiAgICAgIChjbG9uZS5kYXRhIHx8IChjbG9uZS5kYXRhID0ge30pKS5zbG90ID0gZGF0YS5zbG90O1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmVcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcbiAgICAgIHRvW2NhbWVsaXplKGtleSldID0gZnJvbVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIC8qICAqL1xuXG4gIC8qICAqL1xuXG4gIC8qICAqL1xuXG4gIC8vIGlubGluZSBob29rcyB0byBiZSBpbnZva2VkIG9uIGNvbXBvbmVudCBWTm9kZXMgZHVyaW5nIHBhdGNoXG4gIHZhciBjb21wb25lbnRWTm9kZUhvb2tzID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQgKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgJiZcbiAgICAgICAgIXZub2RlLmNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCAmJlxuICAgICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZVxuICAgICAgKSB7XG4gICAgICAgIC8vIGtlcHQtYWxpdmUgY29tcG9uZW50cywgdHJlYXQgYXMgYSBwYXRjaFxuICAgICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgICBjb21wb25lbnRWTm9kZUhvb2tzLnByZXBhdGNoKG1vdW50ZWROb2RlLCBtb3VudGVkTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICAgICAgdm5vZGUsXG4gICAgICAgICAgYWN0aXZlSW5zdGFuY2VcbiAgICAgICAgKTtcbiAgICAgICAgY2hpbGQuJG1vdW50KGh5ZHJhdGluZyA/IHZub2RlLmVsbSA6IHVuZGVmaW5lZCwgaHlkcmF0aW5nKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJlcGF0Y2g6IGZ1bmN0aW9uIHByZXBhdGNoIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICB1cGRhdGVDaGlsZENvbXBvbmVudChcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIG9wdGlvbnMucHJvcHNEYXRhLCAvLyB1cGRhdGVkIHByb3BzXG4gICAgICAgIG9wdGlvbnMubGlzdGVuZXJzLCAvLyB1cGRhdGVkIGxpc3RlbmVyc1xuICAgICAgICB2bm9kZSwgLy8gbmV3IHBhcmVudCB2bm9kZVxuICAgICAgICBvcHRpb25zLmNoaWxkcmVuIC8vIG5ldyBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQgKHZub2RlKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHZub2RlLmNvbnRleHQ7XG4gICAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCkge1xuICAgICAgICBjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdtb3VudGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAodm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2lzTW91bnRlZCkge1xuICAgICAgICAgIC8vIHZ1ZS1yb3V0ZXIjMTIxMlxuICAgICAgICAgIC8vIER1cmluZyB1cGRhdGVzLCBhIGtlcHQtYWxpdmUgY29tcG9uZW50J3MgY2hpbGQgY29tcG9uZW50cyBtYXlcbiAgICAgICAgICAvLyBjaGFuZ2UsIHNvIGRpcmVjdGx5IHdhbGtpbmcgdGhlIHRyZWUgaGVyZSBtYXkgY2FsbCBhY3RpdmF0ZWQgaG9va3NcbiAgICAgICAgICAvLyBvbiBpbmNvcnJlY3QgY2hpbGRyZW4uIEluc3RlYWQgd2UgcHVzaCB0aGVtIGludG8gYSBxdWV1ZSB3aGljaCB3aWxsXG4gICAgICAgICAgLy8gYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSB3aG9sZSBwYXRjaCBwcm9jZXNzIGVuZGVkLlxuICAgICAgICAgIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSAodm5vZGUpIHtcbiAgICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcbiAgICAgICAgaWYgKCF2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgICAgIGNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGhvb2tzVG9NZXJnZSA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFZOb2RlSG9va3MpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAoXG4gICAgQ3RvcixcbiAgICBkYXRhLFxuICAgIGNvbnRleHQsXG4gICAgY2hpbGRyZW4sXG4gICAgdGFnXG4gICkge1xuICAgIGlmIChpc1VuZGVmKEN0b3IpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgYmFzZUN0b3IgPSBjb250ZXh0LiRvcHRpb25zLl9iYXNlO1xuXG4gICAgLy8gcGxhaW4gb3B0aW9ucyBvYmplY3Q6IHR1cm4gaXQgaW50byBhIGNvbnN0cnVjdG9yXG4gICAgaWYgKGlzT2JqZWN0KEN0b3IpKSB7XG4gICAgICBDdG9yID0gYmFzZUN0b3IuZXh0ZW5kKEN0b3IpO1xuICAgIH1cblxuICAgIC8vIGlmIGF0IHRoaXMgc3RhZ2UgaXQncyBub3QgYSBjb25zdHJ1Y3RvciBvciBhbiBhc3luYyBjb21wb25lbnQgZmFjdG9yeSxcbiAgICAvLyByZWplY3QuXG4gICAgaWYgKHR5cGVvZiBDdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB7XG4gICAgICAgIHdhcm4oKFwiSW52YWxpZCBDb21wb25lbnQgZGVmaW5pdGlvbjogXCIgKyAoU3RyaW5nKEN0b3IpKSksIGNvbnRleHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gYXN5bmMgY29tcG9uZW50XG4gICAgdmFyIGFzeW5jRmFjdG9yeTtcbiAgICBpZiAoaXNVbmRlZihDdG9yLmNpZCkpIHtcbiAgICAgIGFzeW5jRmFjdG9yeSA9IEN0b3I7XG4gICAgICBDdG9yID0gcmVzb2x2ZUFzeW5jQ29tcG9uZW50KGFzeW5jRmFjdG9yeSwgYmFzZUN0b3IpO1xuICAgICAgaWYgKEN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciBub2RlIGZvciBhc3luYyBjb21wb25lbnQsIHdoaWNoIGlzIHJlbmRlcmVkXG4gICAgICAgIC8vIGFzIGEgY29tbWVudCBub2RlIGJ1dCBwcmVzZXJ2ZXMgYWxsIHRoZSByYXcgaW5mb3JtYXRpb24gZm9yIHRoZSBub2RlLlxuICAgICAgICAvLyB0aGUgaW5mb3JtYXRpb24gd2lsbCBiZSB1c2VkIGZvciBhc3luYyBzZXJ2ZXItcmVuZGVyaW5nIGFuZCBoeWRyYXRpb24uXG4gICAgICAgIHJldHVybiBjcmVhdGVBc3luY1BsYWNlaG9sZGVyKFxuICAgICAgICAgIGFzeW5jRmFjdG9yeSxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgdGFnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0gZGF0YSB8fCB7fTtcblxuICAgIC8vIHJlc29sdmUgY29uc3RydWN0b3Igb3B0aW9ucyBpbiBjYXNlIGdsb2JhbCBtaXhpbnMgYXJlIGFwcGxpZWQgYWZ0ZXJcbiAgICAvLyBjb21wb25lbnQgY29uc3RydWN0b3IgY3JlYXRpb25cbiAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3IpO1xuXG4gICAgLy8gdHJhbnNmb3JtIGNvbXBvbmVudCB2LW1vZGVsIGRhdGEgaW50byBwcm9wcyAmIGV2ZW50c1xuICAgIGlmIChpc0RlZihkYXRhLm1vZGVsKSkge1xuICAgICAgdHJhbnNmb3JtTW9kZWwoQ3Rvci5vcHRpb25zLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBleHRyYWN0IHByb3BzXG4gICAgdmFyIHByb3BzRGF0YSA9IGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgdGFnKTtcblxuICAgIC8vIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gICAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuZnVuY3Rpb25hbCkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50KEN0b3IsIHByb3BzRGF0YSwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgLy8gZXh0cmFjdCBsaXN0ZW5lcnMsIHNpbmNlIHRoZXNlIG5lZWRzIHRvIGJlIHRyZWF0ZWQgYXNcbiAgICAvLyBjaGlsZCBjb21wb25lbnQgbGlzdGVuZXJzIGluc3RlYWQgb2YgRE9NIGxpc3RlbmVyc1xuICAgIHZhciBsaXN0ZW5lcnMgPSBkYXRhLm9uO1xuICAgIC8vIHJlcGxhY2Ugd2l0aCBsaXN0ZW5lcnMgd2l0aCAubmF0aXZlIG1vZGlmaWVyXG4gICAgLy8gc28gaXQgZ2V0cyBwcm9jZXNzZWQgZHVyaW5nIHBhcmVudCBjb21wb25lbnQgcGF0Y2guXG4gICAgZGF0YS5vbiA9IGRhdGEubmF0aXZlT247XG5cbiAgICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5hYnN0cmFjdCkpIHtcbiAgICAgIC8vIGFic3RyYWN0IGNvbXBvbmVudHMgZG8gbm90IGtlZXAgYW55dGhpbmdcbiAgICAgIC8vIG90aGVyIHRoYW4gcHJvcHMgJiBsaXN0ZW5lcnMgJiBzbG90XG5cbiAgICAgIC8vIHdvcmsgYXJvdW5kIGZsb3dcbiAgICAgIHZhciBzbG90ID0gZGF0YS5zbG90O1xuICAgICAgZGF0YSA9IHt9O1xuICAgICAgaWYgKHNsb3QpIHtcbiAgICAgICAgZGF0YS5zbG90ID0gc2xvdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbnN0YWxsIGNvbXBvbmVudCBtYW5hZ2VtZW50IGhvb2tzIG9udG8gdGhlIHBsYWNlaG9sZGVyIG5vZGVcbiAgICBpbnN0YWxsQ29tcG9uZW50SG9va3MoZGF0YSk7XG5cbiAgICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciB2bm9kZVxuICAgIHZhciBuYW1lID0gQ3Rvci5vcHRpb25zLm5hbWUgfHwgdGFnO1xuICAgIHZhciB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgIChcInZ1ZS1jb21wb25lbnQtXCIgKyAoQ3Rvci5jaWQpICsgKG5hbWUgPyAoXCItXCIgKyBuYW1lKSA6ICcnKSksXG4gICAgICBkYXRhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0LFxuICAgICAgeyBDdG9yOiBDdG9yLCBwcm9wc0RhdGE6IHByb3BzRGF0YSwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHRhZzogdGFnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSxcbiAgICAgIGFzeW5jRmFjdG9yeVxuICAgICk7XG5cbiAgICByZXR1cm4gdm5vZGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUgKFxuICAgIHZub2RlLCAvLyB3ZSBrbm93IGl0J3MgTW91bnRlZENvbXBvbmVudFZOb2RlIGJ1dCBmbG93IGRvZXNuJ3RcbiAgICBwYXJlbnQgLy8gYWN0aXZlSW5zdGFuY2UgaW4gbGlmZWN5Y2xlIHN0YXRlXG4gICkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgX2lzQ29tcG9uZW50OiB0cnVlLFxuICAgICAgX3BhcmVudFZub2RlOiB2bm9kZSxcbiAgICAgIHBhcmVudDogcGFyZW50XG4gICAgfTtcbiAgICAvLyBjaGVjayBpbmxpbmUtdGVtcGxhdGUgcmVuZGVyIGZ1bmN0aW9uc1xuICAgIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gICAgaWYgKGlzRGVmKGlubGluZVRlbXBsYXRlKSkge1xuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBpbmxpbmVUZW1wbGF0ZS5yZW5kZXI7XG4gICAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyB2bm9kZS5jb21wb25lbnRPcHRpb25zLkN0b3Iob3B0aW9ucylcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc3RhbGxDb21wb25lbnRIb29rcyAoZGF0YSkge1xuICAgIHZhciBob29rcyA9IGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gaG9va3NUb01lcmdlW2ldO1xuICAgICAgdmFyIGV4aXN0aW5nID0gaG9va3Nba2V5XTtcbiAgICAgIHZhciB0b01lcmdlID0gY29tcG9uZW50Vk5vZGVIb29rc1trZXldO1xuICAgICAgaWYgKGV4aXN0aW5nICE9PSB0b01lcmdlICYmICEoZXhpc3RpbmcgJiYgZXhpc3RpbmcuX21lcmdlZCkpIHtcbiAgICAgICAgaG9va3Nba2V5XSA9IGV4aXN0aW5nID8gbWVyZ2VIb29rJDEodG9NZXJnZSwgZXhpc3RpbmcpIDogdG9NZXJnZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUhvb2skMSAoZjEsIGYyKSB7XG4gICAgdmFyIG1lcmdlZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAvLyBmbG93IGNvbXBsYWlucyBhYm91dCBleHRyYSBhcmdzIHdoaWNoIGlzIHdoeSB3ZSB1c2UgYW55XG4gICAgICBmMShhLCBiKTtcbiAgICAgIGYyKGEsIGIpO1xuICAgIH07XG4gICAgbWVyZ2VkLl9tZXJnZWQgPSB0cnVlO1xuICAgIHJldHVybiBtZXJnZWRcbiAgfVxuXG4gIC8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbiAgLy8gcHJvcCBhbmQgZXZlbnQgaGFuZGxlciByZXNwZWN0aXZlbHkuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybU1vZGVsIChvcHRpb25zLCBkYXRhKSB7XG4gICAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gICAgdmFyIGV2ZW50ID0gKG9wdGlvbnMubW9kZWwgJiYgb3B0aW9ucy5tb2RlbC5ldmVudCkgfHwgJ2lucHV0J1xuICAgIDsoZGF0YS5hdHRycyB8fCAoZGF0YS5hdHRycyA9IHt9KSlbcHJvcF0gPSBkYXRhLm1vZGVsLnZhbHVlO1xuICAgIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gICAgdmFyIGV4aXN0aW5nID0gb25bZXZlbnRdO1xuICAgIHZhciBjYWxsYmFjayA9IGRhdGEubW9kZWwuY2FsbGJhY2s7XG4gICAgaWYgKGlzRGVmKGV4aXN0aW5nKSkge1xuICAgICAgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KGV4aXN0aW5nKVxuICAgICAgICAgID8gZXhpc3RpbmcuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xXG4gICAgICAgICAgOiBleGlzdGluZyAhPT0gY2FsbGJhY2tcbiAgICAgICkge1xuICAgICAgICBvbltldmVudF0gPSBbY2FsbGJhY2tdLmNvbmNhdChleGlzdGluZyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uW2V2ZW50XSA9IGNhbGxiYWNrO1xuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBTSU1QTEVfTk9STUFMSVpFID0gMTtcbiAgdmFyIEFMV0FZU19OT1JNQUxJWkUgPSAyO1xuXG4gIC8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhIG1vcmUgZmxleGlibGUgaW50ZXJmYWNlXG4gIC8vIHdpdGhvdXQgZ2V0dGluZyB5ZWxsZWQgYXQgYnkgZmxvd1xuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50IChcbiAgICBjb250ZXh0LFxuICAgIHRhZyxcbiAgICBkYXRhLFxuICAgIGNoaWxkcmVuLFxuICAgIG5vcm1hbGl6YXRpb25UeXBlLFxuICAgIGFsd2F5c05vcm1hbGl6ZVxuICApIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSB8fCBpc1ByaW1pdGl2ZShkYXRhKSkge1xuICAgICAgbm9ybWFsaXphdGlvblR5cGUgPSBjaGlsZHJlbjtcbiAgICAgIGNoaWxkcmVuID0gZGF0YTtcbiAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChpc1RydWUoYWx3YXlzTm9ybWFsaXplKSkge1xuICAgICAgbm9ybWFsaXphdGlvblR5cGUgPSBBTFdBWVNfTk9STUFMSVpFO1xuICAgIH1cbiAgICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQoY29udGV4dCwgdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUpXG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudCAoXG4gICAgY29udGV4dCxcbiAgICB0YWcsXG4gICAgZGF0YSxcbiAgICBjaGlsZHJlbixcbiAgICBub3JtYWxpemF0aW9uVHlwZVxuICApIHtcbiAgICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoKGRhdGEpLl9fb2JfXykpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwiQXZvaWQgdXNpbmcgb2JzZXJ2ZWQgZGF0YSBvYmplY3QgYXMgdm5vZGUgZGF0YTogXCIgKyAoSlNPTi5zdHJpbmdpZnkoZGF0YSkpICsgXCJcXG5cIiArXG4gICAgICAgICdBbHdheXMgY3JlYXRlIGZyZXNoIHZub2RlIGRhdGEgb2JqZWN0cyBpbiBlYWNoIHJlbmRlciEnLFxuICAgICAgICBjb250ZXh0XG4gICAgICApO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICAgIH1cbiAgICAvLyBvYmplY3Qgc3ludGF4IGluIHYtYmluZFxuICAgIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLmlzKSkge1xuICAgICAgdGFnID0gZGF0YS5pcztcbiAgICB9XG4gICAgaWYgKCF0YWcpIHtcbiAgICAgIC8vIGluIGNhc2Ugb2YgY29tcG9uZW50IDppcyBzZXQgdG8gZmFsc3kgdmFsdWVcbiAgICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgICB9XG4gICAgLy8gd2FybiBhZ2FpbnN0IG5vbi1wcmltaXRpdmUga2V5XG4gICAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEua2V5KSAmJiAhaXNQcmltaXRpdmUoZGF0YS5rZXkpXG4gICAgKSB7XG4gICAgICB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ0F2b2lkIHVzaW5nIG5vbi1wcmltaXRpdmUgdmFsdWUgYXMga2V5LCAnICtcbiAgICAgICAgICAndXNlIHN0cmluZy9udW1iZXIgdmFsdWUgaW5zdGVhZC4nLFxuICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gc3VwcG9ydCBzaW5nbGUgZnVuY3Rpb24gY2hpbGRyZW4gYXMgZGVmYXVsdCBzY29wZWQgc2xvdFxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJlxuICAgICAgdHlwZW9mIGNoaWxkcmVuWzBdID09PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICBkYXRhID0gZGF0YSB8fCB7fTtcbiAgICAgIGRhdGEuc2NvcGVkU2xvdHMgPSB7IGRlZmF1bHQ6IGNoaWxkcmVuWzBdIH07XG4gICAgICBjaGlsZHJlbi5sZW5ndGggPSAwO1xuICAgIH1cbiAgICBpZiAobm9ybWFsaXphdGlvblR5cGUgPT09IEFMV0FZU19OT1JNQUxJWkUpIHtcbiAgICAgIGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICAgIH0gZWxzZSBpZiAobm9ybWFsaXphdGlvblR5cGUgPT09IFNJTVBMRV9OT1JNQUxJWkUpIHtcbiAgICAgIGNoaWxkcmVuID0gc2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICAgIH1cbiAgICB2YXIgdm5vZGUsIG5zO1xuICAgIGlmICh0eXBlb2YgdGFnID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIEN0b3I7XG4gICAgICBucyA9IChjb250ZXh0LiR2bm9kZSAmJiBjb250ZXh0LiR2bm9kZS5ucykgfHwgY29uZmlnLmdldFRhZ05hbWVzcGFjZSh0YWcpO1xuICAgICAgaWYgKGNvbmZpZy5pc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgICAgLy8gcGxhdGZvcm0gYnVpbHQtaW4gZWxlbWVudHNcbiAgICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgICAgY29uZmlnLnBhcnNlUGxhdGZvcm1UYWdOYW1lKHRhZyksIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKCghZGF0YSB8fCAhZGF0YS5wcmUpICYmIGlzRGVmKEN0b3IgPSByZXNvbHZlQXNzZXQoY29udGV4dC4kb3B0aW9ucywgJ2NvbXBvbmVudHMnLCB0YWcpKSkge1xuICAgICAgICAvLyBjb21wb25lbnRcbiAgICAgICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQoQ3RvciwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4sIHRhZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1bmtub3duIG9yIHVubGlzdGVkIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAgICAgICAgLy8gY2hlY2sgYXQgcnVudGltZSBiZWNhdXNlIGl0IG1heSBnZXQgYXNzaWduZWQgYSBuYW1lc3BhY2Ugd2hlbiBpdHNcbiAgICAgICAgLy8gcGFyZW50IG5vcm1hbGl6ZXMgY2hpbGRyZW5cbiAgICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgICAgdGFnLCBkYXRhLCBjaGlsZHJlbixcbiAgICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkaXJlY3QgY29tcG9uZW50IG9wdGlvbnMgLyBjb25zdHJ1Y3RvclxuICAgICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQodGFnLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbik7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgcmV0dXJuIHZub2RlXG4gICAgfSBlbHNlIGlmIChpc0RlZih2bm9kZSkpIHtcbiAgICAgIGlmIChpc0RlZihucykpIHsgYXBwbHlOUyh2bm9kZSwgbnMpOyB9XG4gICAgICBpZiAoaXNEZWYoZGF0YSkpIHsgcmVnaXN0ZXJEZWVwQmluZGluZ3MoZGF0YSk7IH1cbiAgICAgIHJldHVybiB2bm9kZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlOUyAodm5vZGUsIG5zLCBmb3JjZSkge1xuICAgIHZub2RlLm5zID0gbnM7XG4gICAgaWYgKHZub2RlLnRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgICAvLyB1c2UgZGVmYXVsdCBuYW1lc3BhY2UgaW5zaWRlIGZvcmVpZ25PYmplY3RcbiAgICAgIG5zID0gdW5kZWZpbmVkO1xuICAgICAgZm9yY2UgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXNEZWYodm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGlzRGVmKGNoaWxkLnRhZykgJiYgKFxuICAgICAgICAgIGlzVW5kZWYoY2hpbGQubnMpIHx8IChpc1RydWUoZm9yY2UpICYmIGNoaWxkLnRhZyAhPT0gJ3N2ZycpKSkge1xuICAgICAgICAgIGFwcGx5TlMoY2hpbGQsIG5zLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZWYgIzUzMThcbiAgLy8gbmVjZXNzYXJ5IHRvIGVuc3VyZSBwYXJlbnQgcmUtcmVuZGVyIHdoZW4gZGVlcCBiaW5kaW5ncyBsaWtlIDpzdHlsZSBhbmRcbiAgLy8gOmNsYXNzIGFyZSB1c2VkIG9uIHNsb3Qgbm9kZXNcbiAgZnVuY3Rpb24gcmVnaXN0ZXJEZWVwQmluZGluZ3MgKGRhdGEpIHtcbiAgICBpZiAoaXNPYmplY3QoZGF0YS5zdHlsZSkpIHtcbiAgICAgIHRyYXZlcnNlKGRhdGEuc3R5bGUpO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3QoZGF0YS5jbGFzcykpIHtcbiAgICAgIHRyYXZlcnNlKGRhdGEuY2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGluaXRSZW5kZXIgKHZtKSB7XG4gICAgdm0uX3Zub2RlID0gbnVsbDsgLy8gdGhlIHJvb3Qgb2YgdGhlIGNoaWxkIHRyZWVcbiAgICB2bS5fc3RhdGljVHJlZXMgPSBudWxsOyAvLyB2LW9uY2UgY2FjaGVkIHRyZWVzXG4gICAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgICB2YXIgcGFyZW50Vm5vZGUgPSB2bS4kdm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTsgLy8gdGhlIHBsYWNlaG9sZGVyIG5vZGUgaW4gcGFyZW50IHRyZWVcbiAgICB2YXIgcmVuZGVyQ29udGV4dCA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmNvbnRleHQ7XG4gICAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLCByZW5kZXJDb250ZXh0KTtcbiAgICB2bS4kc2NvcGVkU2xvdHMgPSBlbXB0eU9iamVjdDtcbiAgICAvLyBiaW5kIHRoZSBjcmVhdGVFbGVtZW50IGZuIHRvIHRoaXMgaW5zdGFuY2VcbiAgICAvLyBzbyB0aGF0IHdlIGdldCBwcm9wZXIgcmVuZGVyIGNvbnRleHQgaW5zaWRlIGl0LlxuICAgIC8vIGFyZ3Mgb3JkZXI6IHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlLCBhbHdheXNOb3JtYWxpemVcbiAgICAvLyBpbnRlcm5hbCB2ZXJzaW9uIGlzIHVzZWQgYnkgcmVuZGVyIGZ1bmN0aW9ucyBjb21waWxlZCBmcm9tIHRlbXBsYXRlc1xuICAgIHZtLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIGZhbHNlKTsgfTtcbiAgICAvLyBub3JtYWxpemF0aW9uIGlzIGFsd2F5cyBhcHBsaWVkIGZvciB0aGUgcHVibGljIHZlcnNpb24sIHVzZWQgaW5cbiAgICAvLyB1c2VyLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucy5cbiAgICB2bS4kY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCB0cnVlKTsgfTtcblxuICAgIC8vICRhdHRycyAmICRsaXN0ZW5lcnMgYXJlIGV4cG9zZWQgZm9yIGVhc2llciBIT0MgY3JlYXRpb24uXG4gICAgLy8gdGhleSBuZWVkIHRvIGJlIHJlYWN0aXZlIHNvIHRoYXQgSE9DcyB1c2luZyB0aGVtIGFyZSBhbHdheXMgdXBkYXRlZFxuICAgIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAge1xuICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGF0dHJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgICB9LCB0cnVlKTtcbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkbGlzdGVuZXJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgICB9LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcblxuICBmdW5jdGlvbiByZW5kZXJNaXhpbiAoVnVlKSB7XG4gICAgLy8gaW5zdGFsbCBydW50aW1lIGNvbnZlbmllbmNlIGhlbHBlcnNcbiAgICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICAgIFZ1ZS5wcm90b3R5cGUuJG5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gbmV4dFRpY2soZm4sIHRoaXMpXG4gICAgfTtcblxuICAgIFZ1ZS5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XG4gICAgICB2YXIgcmVuZGVyID0gcmVmLnJlbmRlcjtcbiAgICAgIHZhciBfcGFyZW50Vm5vZGUgPSByZWYuX3BhcmVudFZub2RlO1xuXG4gICAgICBpZiAoX3BhcmVudFZub2RlKSB7XG4gICAgICAgIHZtLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKFxuICAgICAgICAgIF9wYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzLFxuICAgICAgICAgIHZtLiRzbG90cyxcbiAgICAgICAgICB2bS4kc2NvcGVkU2xvdHNcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHBhcmVudCB2bm9kZS4gdGhpcyBhbGxvd3MgcmVuZGVyIGZ1bmN0aW9ucyB0byBoYXZlIGFjY2Vzc1xuICAgICAgLy8gdG8gdGhlIGRhdGEgb24gdGhlIHBsYWNlaG9sZGVyIG5vZGUuXG4gICAgICB2bS4kdm5vZGUgPSBfcGFyZW50Vm5vZGU7XG4gICAgICAvLyByZW5kZXIgc2VsZlxuICAgICAgdmFyIHZub2RlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhlcmUncyBubyBuZWVkIHRvIG1haW50YWluIGEgc3RhY2sgYmVjYXVlcyBhbGwgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAgIC8vIHNlcGFyYXRlbHkgZnJvbSBvbmUgYW5vdGhlci4gTmVzdGVkIGNvbXBvbmVudCdzIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgICAvLyB3aGVuIHBhcmVudCBjb21wb25lbnQgaXMgcGF0Y2hlZC5cbiAgICAgICAgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gdm07XG4gICAgICAgIHZub2RlID0gcmVuZGVyLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlclwiKTtcbiAgICAgICAgLy8gcmV0dXJuIGVycm9yIHJlbmRlciByZXN1bHQsXG4gICAgICAgIC8vIG9yIHByZXZpb3VzIHZub2RlIHRvIHByZXZlbnQgcmVuZGVyIGVycm9yIGNhdXNpbmcgYmxhbmsgY29tcG9uZW50XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmICh2bS4kb3B0aW9ucy5yZW5kZXJFcnJvcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCwgZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwicmVuZGVyRXJyb3JcIik7XG4gICAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBpZiB0aGUgcmV0dXJuZWQgYXJyYXkgY29udGFpbnMgb25seSBhIHNpbmdsZSBub2RlLCBhbGxvdyBpdFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpICYmIHZub2RlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB2bm9kZSA9IHZub2RlWzBdO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgICAgaWYgKCEodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgICdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArXG4gICAgICAgICAgICAnc2hvdWxkIHJldHVybiBhIHNpbmdsZSByb290IG5vZGUuJyxcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2bm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgICAgIH1cbiAgICAgIC8vIHNldCBwYXJlbnRcbiAgICAgIHZub2RlLnBhcmVudCA9IF9wYXJlbnRWbm9kZTtcbiAgICAgIHJldHVybiB2bm9kZVxuICAgIH07XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBlbnN1cmVDdG9yIChjb21wLCBiYXNlKSB7XG4gICAgaWYgKFxuICAgICAgY29tcC5fX2VzTW9kdWxlIHx8XG4gICAgICAoaGFzU3ltYm9sICYmIGNvbXBbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ01vZHVsZScpXG4gICAgKSB7XG4gICAgICBjb21wID0gY29tcC5kZWZhdWx0O1xuICAgIH1cbiAgICByZXR1cm4gaXNPYmplY3QoY29tcClcbiAgICAgID8gYmFzZS5leHRlbmQoY29tcClcbiAgICAgIDogY29tcFxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlciAoXG4gICAgZmFjdG9yeSxcbiAgICBkYXRhLFxuICAgIGNvbnRleHQsXG4gICAgY2hpbGRyZW4sXG4gICAgdGFnXG4gICkge1xuICAgIHZhciBub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICAgIG5vZGUuYXN5bmNGYWN0b3J5ID0gZmFjdG9yeTtcbiAgICBub2RlLmFzeW5jTWV0YSA9IHsgZGF0YTogZGF0YSwgY29udGV4dDogY29udGV4dCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0YWc6IHRhZyB9O1xuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxuICAgIGZhY3RvcnksXG4gICAgYmFzZUN0b3JcbiAgKSB7XG4gICAgaWYgKGlzVHJ1ZShmYWN0b3J5LmVycm9yKSAmJiBpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5LmVycm9yQ29tcFxuICAgIH1cblxuICAgIGlmIChpc0RlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkucmVzb2x2ZWRcbiAgICB9XG5cbiAgICB2YXIgb3duZXIgPSBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2U7XG4gICAgaWYgKG93bmVyICYmIGlzRGVmKGZhY3Rvcnkub3duZXJzKSAmJiBmYWN0b3J5Lm93bmVycy5pbmRleE9mKG93bmVyKSA9PT0gLTEpIHtcbiAgICAgIC8vIGFscmVhZHkgcGVuZGluZ1xuICAgICAgZmFjdG9yeS5vd25lcnMucHVzaChvd25lcik7XG4gICAgfVxuXG4gICAgaWYgKGlzVHJ1ZShmYWN0b3J5LmxvYWRpbmcpICYmIGlzRGVmKGZhY3RvcnkubG9hZGluZ0NvbXApKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nQ29tcFxuICAgIH1cblxuICAgIGlmIChvd25lciAmJiAhaXNEZWYoZmFjdG9yeS5vd25lcnMpKSB7XG4gICAgICB2YXIgb3duZXJzID0gZmFjdG9yeS5vd25lcnMgPSBbb3duZXJdO1xuICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgdmFyIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICB2YXIgdGltZXJUaW1lb3V0ID0gbnVsbFxuXG4gICAgICA7KG93bmVyKS4kb24oJ2hvb2s6ZGVzdHJveWVkJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVtb3ZlKG93bmVycywgb3duZXIpOyB9KTtcblxuICAgICAgdmFyIGZvcmNlUmVuZGVyID0gZnVuY3Rpb24gKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG93bmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAob3duZXJzW2ldKS4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZW5kZXJDb21wbGV0ZWQpIHtcbiAgICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgICBpZiAodGltZXJMb2FkaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJMb2FkaW5nKTtcbiAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aW1lclRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciByZXNvbHZlID0gb25jZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIC8vIGNhY2hlIHJlc29sdmVkXG4gICAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSBlbnN1cmVDdG9yKHJlcywgYmFzZUN0b3IpO1xuICAgICAgICAvLyBpbnZva2UgY2FsbGJhY2tzIG9ubHkgaWYgdGhpcyBpcyBub3QgYSBzeW5jaHJvbm91cyByZXNvbHZlXG4gICAgICAgIC8vIChhc3luYyByZXNvbHZlcyBhcmUgc2hpbW1lZCBhcyBzeW5jaHJvbm91cyBkdXJpbmcgU1NSKVxuICAgICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudDogXCIgKyAoU3RyaW5nKGZhY3RvcnkpKSArXG4gICAgICAgICAgKHJlYXNvbiA/IChcIlxcblJlYXNvbjogXCIgKyByZWFzb24pIDogJycpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICAgICAgICBmYWN0b3J5LmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciByZXMgPSBmYWN0b3J5KHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgIGlmIChpc09iamVjdChyZXMpKSB7XG4gICAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xuICAgICAgICAgIC8vICgpID0+IFByb21pc2VcbiAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlKHJlcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgcmVzLmNvbXBvbmVudC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgICAgICBpZiAoaXNEZWYocmVzLmVycm9yKSkge1xuICAgICAgICAgICAgZmFjdG9yeS5lcnJvckNvbXAgPSBlbnN1cmVDdG9yKHJlcy5lcnJvciwgYmFzZUN0b3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0RlZihyZXMubG9hZGluZykpIHtcbiAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZ0NvbXAgPSBlbnN1cmVDdG9yKHJlcy5sb2FkaW5nLCBiYXNlQ3Rvcik7XG4gICAgICAgICAgICBpZiAocmVzLmRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpICYmIGlzVW5kZWYoZmFjdG9yeS5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCByZXMuZGVsYXkgfHwgMjAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNEZWYocmVzLnRpbWVvdXQpKSB7XG4gICAgICAgICAgICB0aW1lclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgICBcInRpbWVvdXQgKFwiICsgKHJlcy50aW1lb3V0KSArIFwibXMpXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCByZXMudGltZW91dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgIC8vIHJldHVybiBpbiBjYXNlIHJlc29sdmVkIHN5bmNocm9ub3VzbHlcbiAgICAgIHJldHVybiBmYWN0b3J5LmxvYWRpbmdcbiAgICAgICAgPyBmYWN0b3J5LmxvYWRpbmdDb21wXG4gICAgICAgIDogZmFjdG9yeS5yZXNvbHZlZFxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGlzQXN5bmNQbGFjZWhvbGRlciAobm9kZSkge1xuICAgIHJldHVybiBub2RlLmlzQ29tbWVudCAmJiBub2RlLmFzeW5jRmFjdG9yeVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZCAoY2hpbGRyZW4pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGMgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGlzRGVmKGMpICYmIChpc0RlZihjLmNvbXBvbmVudE9wdGlvbnMpIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKSkpIHtcbiAgICAgICAgICByZXR1cm4gY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gaW5pdEV2ZW50cyAodm0pIHtcbiAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2bS5faGFzSG9va0V2ZW50ID0gZmFsc2U7XG4gICAgLy8gaW5pdCBwYXJlbnQgYXR0YWNoZWQgZXZlbnRzXG4gICAgdmFyIGxpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0YXJnZXQ7XG5cbiAgZnVuY3Rpb24gYWRkIChldmVudCwgZm4pIHtcbiAgICB0YXJnZXQuJG9uKGV2ZW50LCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmUkMSAoZXZlbnQsIGZuKSB7XG4gICAgdGFyZ2V0LiRvZmYoZXZlbnQsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyIChldmVudCwgZm4pIHtcbiAgICB2YXIgX3RhcmdldCA9IHRhcmdldDtcbiAgICByZXR1cm4gZnVuY3Rpb24gb25jZUhhbmRsZXIgKCkge1xuICAgICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICAgIF90YXJnZXQuJG9mZihldmVudCwgb25jZUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyAoXG4gICAgdm0sXG4gICAgbGlzdGVuZXJzLFxuICAgIG9sZExpc3RlbmVyc1xuICApIHtcbiAgICB0YXJnZXQgPSB2bTtcbiAgICB1cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMgfHwge30sIGFkZCwgcmVtb3ZlJDEsIGNyZWF0ZU9uY2VIYW5kbGVyLCB2bSk7XG4gICAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRzTWl4aW4gKFZ1ZSkge1xuICAgIHZhciBob29rUkUgPSAvXmhvb2s6LztcbiAgICBWdWUucHJvdG90eXBlLiRvbiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB2bS4kb24oZXZlbnRbaV0sIGZuKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgICAgIC8vIG9wdGltaXplIGhvb2s6ZXZlbnQgY29zdCBieSB1c2luZyBhIGJvb2xlYW4gZmxhZyBtYXJrZWQgYXQgcmVnaXN0cmF0aW9uXG4gICAgICAgIC8vIGluc3RlYWQgb2YgYSBoYXNoIGxvb2t1cFxuICAgICAgICBpZiAoaG9va1JFLnRlc3QoZXZlbnQpKSB7XG4gICAgICAgICAgdm0uX2hhc0hvb2tFdmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2bVxuICAgIH07XG5cbiAgICBWdWUucHJvdG90eXBlLiRvbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIG9uICgpIHtcbiAgICAgICAgdm0uJG9mZihldmVudCwgb24pO1xuICAgICAgICBmbi5hcHBseSh2bSwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIG9uLmZuID0gZm47XG4gICAgICB2bS4kb24oZXZlbnQsIG9uKTtcbiAgICAgIHJldHVybiB2bVxuICAgIH07XG5cbiAgICBWdWUucHJvdG90eXBlLiRvZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgLy8gYWxsXG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHJldHVybiB2bVxuICAgICAgfVxuICAgICAgLy8gYXJyYXkgb2YgZXZlbnRzXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSQxID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSQxIDwgbDsgaSQxKyspIHtcbiAgICAgICAgICB2bS4kb2ZmKGV2ZW50W2kkMV0sIGZuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdm1cbiAgICAgIH1cbiAgICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgICBpZiAoIWNicykge1xuICAgICAgICByZXR1cm4gdm1cbiAgICAgIH1cbiAgICAgIGlmICghZm4pIHtcbiAgICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xuICAgICAgICByZXR1cm4gdm1cbiAgICAgIH1cbiAgICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgICAgIHZhciBjYjtcbiAgICAgIHZhciBpID0gY2JzLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY2IgPSBjYnNbaV07XG4gICAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdm1cbiAgICB9O1xuXG4gICAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgIHtcbiAgICAgICAgdmFyIGxvd2VyQ2FzZUV2ZW50ID0gZXZlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGxvd2VyQ2FzZUV2ZW50ICE9PSBldmVudCAmJiB2bS5fZXZlbnRzW2xvd2VyQ2FzZUV2ZW50XSkge1xuICAgICAgICAgIHRpcChcbiAgICAgICAgICAgIFwiRXZlbnQgXFxcIlwiICsgbG93ZXJDYXNlRXZlbnQgKyBcIlxcXCIgaXMgZW1pdHRlZCBpbiBjb21wb25lbnQgXCIgK1xuICAgICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSArIFwiIGJ1dCB0aGUgaGFuZGxlciBpcyByZWdpc3RlcmVkIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSBcIiArXG4gICAgICAgICAgICBcInYtb24gdG8gbGlzdGVuIHRvIGNhbWVsQ2FzZSBldmVudHMgd2hlbiB1c2luZyBpbi1ET00gdGVtcGxhdGVzLiBcIiArXG4gICAgICAgICAgICBcIllvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIChoeXBoZW5hdGUoZXZlbnQpKSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgICAgaWYgKGNicykge1xuICAgICAgICBjYnMgPSBjYnMubGVuZ3RoID4gMSA/IHRvQXJyYXkoY2JzKSA6IGNicztcbiAgICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHZhciBpbmZvID0gXCJldmVudCBoYW5kbGVyIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjYnNbaV0sIHZtLCBhcmdzLCB2bSwgaW5mbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2bVxuICAgIH07XG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBudWxsO1xuICB2YXIgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gc2V0QWN0aXZlSW5zdGFuY2Uodm0pIHtcbiAgICB2YXIgcHJldkFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2U7XG4gICAgYWN0aXZlSW5zdGFuY2UgPSB2bTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlSW5zdGFuY2UgPSBwcmV2QWN0aXZlSW5zdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdExpZmVjeWNsZSAodm0pIHtcbiAgICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuXG4gICAgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcbiAgICB2YXIgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gICAgaWYgKHBhcmVudCAmJiAhb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5hYnN0cmFjdCAmJiBwYXJlbnQuJHBhcmVudCkge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICAgIH1cbiAgICAgIHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gICAgfVxuXG4gICAgdm0uJHBhcmVudCA9IHBhcmVudDtcbiAgICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xuXG4gICAgdm0uJGNoaWxkcmVuID0gW107XG4gICAgdm0uJHJlZnMgPSB7fTtcblxuICAgIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgICB2bS5faW5hY3RpdmUgPSBudWxsO1xuICAgIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IGZhbHNlO1xuICAgIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB2bS5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4gKFZ1ZSkge1xuICAgIFZ1ZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgdmFyIHByZXZFbCA9IHZtLiRlbDtcbiAgICAgIHZhciBwcmV2Vm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2Uodm0pO1xuICAgICAgdm0uX3Zub2RlID0gdm5vZGU7XG4gICAgICAvLyBWdWUucHJvdG90eXBlLl9fcGF0Y2hfXyBpcyBpbmplY3RlZCBpbiBlbnRyeSBwb2ludHNcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgICAgaWYgKCFwcmV2Vm5vZGUpIHtcbiAgICAgICAgLy8gaW5pdGlhbCByZW5kZXJcbiAgICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZywgZmFsc2UgLyogcmVtb3ZlT25seSAqLyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1cGRhdGVzXG4gICAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICAgIH1cbiAgICAgIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSgpO1xuICAgICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgICBpZiAocHJldkVsKSB7XG4gICAgICAgIHByZXZFbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh2bS4kZWwpIHtcbiAgICAgICAgdm0uJGVsLl9fdnVlX18gPSB2bTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIHBhcmVudCBpcyBhbiBIT0MsIHVwZGF0ZSBpdHMgJGVsIGFzIHdlbGxcbiAgICAgIGlmICh2bS4kdm5vZGUgJiYgdm0uJHBhcmVudCAmJiB2bS4kdm5vZGUgPT09IHZtLiRwYXJlbnQuX3Zub2RlKSB7XG4gICAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgICAgfVxuICAgICAgLy8gdXBkYXRlZCBob29rIGlzIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyIHRvIGVuc3VyZSB0aGF0IGNoaWxkcmVuIGFyZVxuICAgICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cbiAgICB9O1xuXG4gICAgVnVlLnByb3RvdHlwZS4kZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICAgIHZtLl93YXRjaGVyLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBWdWUucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgIGlmICh2bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlRGVzdHJveScpO1xuICAgICAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnRcbiAgICAgIHZhciBwYXJlbnQgPSB2bS4kcGFyZW50O1xuICAgICAgaWYgKHBhcmVudCAmJiAhcGFyZW50Ll9pc0JlaW5nRGVzdHJveWVkICYmICF2bS4kb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgICAgICByZW1vdmUocGFyZW50LiRjaGlsZHJlbiwgdm0pO1xuICAgICAgfVxuICAgICAgLy8gdGVhcmRvd24gd2F0Y2hlcnNcbiAgICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgICB2bS5fd2F0Y2hlci50ZWFyZG93bigpO1xuICAgICAgfVxuICAgICAgdmFyIGkgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2bS5fd2F0Y2hlcnNbaV0udGVhcmRvd24oKTtcbiAgICAgIH1cbiAgICAgIC8vIHJlbW92ZSByZWZlcmVuY2UgZnJvbSBkYXRhIG9iXG4gICAgICAvLyBmcm96ZW4gb2JqZWN0IG1heSBub3QgaGF2ZSBvYnNlcnZlci5cbiAgICAgIGlmICh2bS5fZGF0YS5fX29iX18pIHtcbiAgICAgICAgdm0uX2RhdGEuX19vYl9fLnZtQ291bnQtLTtcbiAgICAgIH1cbiAgICAgIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICAgICAgdm0uX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIC8vIGludm9rZSBkZXN0cm95IGhvb2tzIG9uIGN1cnJlbnQgcmVuZGVyZWQgdHJlZVxuICAgICAgdm0uX19wYXRjaF9fKHZtLl92bm9kZSwgbnVsbCk7XG4gICAgICAvLyBmaXJlIGRlc3Ryb3llZCBob29rXG4gICAgICBjYWxsSG9vayh2bSwgJ2Rlc3Ryb3llZCcpO1xuICAgICAgLy8gdHVybiBvZmYgYWxsIGluc3RhbmNlIGxpc3RlbmVycy5cbiAgICAgIHZtLiRvZmYoKTtcbiAgICAgIC8vIHJlbW92ZSBfX3Z1ZV9fIHJlZmVyZW5jZVxuICAgICAgaWYgKHZtLiRlbCkge1xuICAgICAgICB2bS4kZWwuX192dWVfXyA9IG51bGw7XG4gICAgICB9XG4gICAgICAvLyByZWxlYXNlIGNpcmN1bGFyIHJlZmVyZW5jZSAoIzY3NTkpXG4gICAgICBpZiAodm0uJHZub2RlKSB7XG4gICAgICAgIHZtLiR2bm9kZS5wYXJlbnQgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtb3VudENvbXBvbmVudCAoXG4gICAgdm0sXG4gICAgZWwsXG4gICAgaHlkcmF0aW5nXG4gICkge1xuICAgIHZtLiRlbCA9IGVsO1xuICAgIGlmICghdm0uJG9wdGlvbnMucmVuZGVyKSB7XG4gICAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVZOb2RlO1xuICAgICAge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCh2bS4kb3B0aW9ucy50ZW1wbGF0ZSAmJiB2bS4kb3B0aW9ucy50ZW1wbGF0ZS5jaGFyQXQoMCkgIT09ICcjJykgfHxcbiAgICAgICAgICB2bS4kb3B0aW9ucy5lbCB8fCBlbCkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAnWW91IGFyZSB1c2luZyB0aGUgcnVudGltZS1vbmx5IGJ1aWxkIG9mIFZ1ZSB3aGVyZSB0aGUgdGVtcGxhdGUgJyArXG4gICAgICAgICAgICAnY29tcGlsZXIgaXMgbm90IGF2YWlsYWJsZS4gRWl0aGVyIHByZS1jb21waWxlIHRoZSB0ZW1wbGF0ZXMgaW50byAnICtcbiAgICAgICAgICAgICdyZW5kZXIgZnVuY3Rpb25zLCBvciB1c2UgdGhlIGNvbXBpbGVyLWluY2x1ZGVkIGJ1aWxkLicsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgICdGYWlsZWQgdG8gbW91bnQgY29tcG9uZW50OiB0ZW1wbGF0ZSBvciByZW5kZXIgZnVuY3Rpb24gbm90IGRlZmluZWQuJyxcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZU1vdW50Jyk7XG5cbiAgICB2YXIgdXBkYXRlQ29tcG9uZW50O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmFtZSA9IHZtLl9uYW1lO1xuICAgICAgICB2YXIgaWQgPSB2bS5fdWlkO1xuICAgICAgICB2YXIgc3RhcnRUYWcgPSBcInZ1ZS1wZXJmLXN0YXJ0OlwiICsgaWQ7XG4gICAgICAgIHZhciBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArIGlkO1xuXG4gICAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgICAgICB2YXIgdm5vZGUgPSB2bS5fcmVuZGVyKCk7XG4gICAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyBuYW1lICsgXCIgcmVuZGVyXCIpLCBzdGFydFRhZywgZW5kVGFnKTtcblxuICAgICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICAgICAgdm0uX3VwZGF0ZSh2bm9kZSwgaHlkcmF0aW5nKTtcbiAgICAgICAgbWFyayhlbmRUYWcpO1xuICAgICAgICBtZWFzdXJlKChcInZ1ZSBcIiArIG5hbWUgKyBcIiBwYXRjaFwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZtLl91cGRhdGUodm0uX3JlbmRlcigpLCBoeWRyYXRpbmcpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB3ZSBzZXQgdGhpcyB0byB2bS5fd2F0Y2hlciBpbnNpZGUgdGhlIHdhdGNoZXIncyBjb25zdHJ1Y3RvclxuICAgIC8vIHNpbmNlIHRoZSB3YXRjaGVyJ3MgaW5pdGlhbCBwYXRjaCBtYXkgY2FsbCAkZm9yY2VVcGRhdGUgKGUuZy4gaW5zaWRlIGNoaWxkXG4gICAgLy8gY29tcG9uZW50J3MgbW91bnRlZCBob29rKSwgd2hpY2ggcmVsaWVzIG9uIHZtLl93YXRjaGVyIGJlaW5nIGFscmVhZHkgZGVmaW5lZFxuICAgIG5ldyBXYXRjaGVyKHZtLCB1cGRhdGVDb21wb25lbnQsIG5vb3AsIHtcbiAgICAgIGJlZm9yZTogZnVuY3Rpb24gYmVmb3JlICgpIHtcbiAgICAgICAgaWYgKHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlVXBkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB0cnVlIC8qIGlzUmVuZGVyV2F0Y2hlciAqLyk7XG4gICAgaHlkcmF0aW5nID0gZmFsc2U7XG5cbiAgICAvLyBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlLCBjYWxsIG1vdW50ZWQgb24gc2VsZlxuICAgIC8vIG1vdW50ZWQgaXMgY2FsbGVkIGZvciByZW5kZXItY3JlYXRlZCBjaGlsZCBjb21wb25lbnRzIGluIGl0cyBpbnNlcnRlZCBob29rXG4gICAgaWYgKHZtLiR2bm9kZSA9PSBudWxsKSB7XG4gICAgICB2bS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxIb29rKHZtLCAnbW91bnRlZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkQ29tcG9uZW50IChcbiAgICB2bSxcbiAgICBwcm9wc0RhdGEsXG4gICAgbGlzdGVuZXJzLFxuICAgIHBhcmVudFZub2RlLFxuICAgIHJlbmRlckNoaWxkcmVuXG4gICkge1xuICAgIHtcbiAgICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgY29tcG9uZW50IGhhcyBzbG90IGNoaWxkcmVuXG4gICAgLy8gd2UgbmVlZCB0byBkbyB0aGlzIGJlZm9yZSBvdmVyd3JpdGluZyAkb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4uXG5cbiAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgZHluYW1pYyBzY29wZWRTbG90cyAoaGFuZC13cml0dGVuIG9yIGNvbXBpbGVkIGJ1dCB3aXRoXG4gICAgLy8gZHluYW1pYyBzbG90IG5hbWVzKS4gU3RhdGljIHNjb3BlZCBzbG90cyBjb21waWxlZCBmcm9tIHRlbXBsYXRlIGhhcyB0aGVcbiAgICAvLyBcIiRzdGFibGVcIiBtYXJrZXIuXG4gICAgdmFyIG5ld1Njb3BlZFNsb3RzID0gcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cztcbiAgICB2YXIgb2xkU2NvcGVkU2xvdHMgPSB2bS4kc2NvcGVkU2xvdHM7XG4gICAgdmFyIGhhc0R5bmFtaWNTY29wZWRTbG90ID0gISEoXG4gICAgICAobmV3U2NvcGVkU2xvdHMgJiYgIW5ld1Njb3BlZFNsb3RzLiRzdGFibGUpIHx8XG4gICAgICAob2xkU2NvcGVkU2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmICFvbGRTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgICAgKG5ld1Njb3BlZFNsb3RzICYmIHZtLiRzY29wZWRTbG90cy4ka2V5ICE9PSBuZXdTY29wZWRTbG90cy4ka2V5KVxuICAgICk7XG5cbiAgICAvLyBBbnkgc3RhdGljIHNsb3QgY2hpbGRyZW4gZnJvbSB0aGUgcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgZHVyaW5nIHBhcmVudCdzXG4gICAgLy8gdXBkYXRlLiBEeW5hbWljIHNjb3BlZCBzbG90cyBtYXkgYWxzbyBoYXZlIGNoYW5nZWQuIEluIHN1Y2ggY2FzZXMsIGEgZm9yY2VkXG4gICAgLy8gdXBkYXRlIGlzIG5lY2Vzc2FyeSB0byBlbnN1cmUgY29ycmVjdG5lc3MuXG4gICAgdmFyIG5lZWRzRm9yY2VVcGRhdGUgPSAhIShcbiAgICAgIHJlbmRlckNoaWxkcmVuIHx8ICAgICAgICAgICAgICAgLy8gaGFzIG5ldyBzdGF0aWMgc2xvdHNcbiAgICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiB8fCAgLy8gaGFzIG9sZCBzdGF0aWMgc2xvdHNcbiAgICAgIGhhc0R5bmFtaWNTY29wZWRTbG90XG4gICAgKTtcblxuICAgIHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuICAgIHZtLiR2bm9kZSA9IHBhcmVudFZub2RlOyAvLyB1cGRhdGUgdm0ncyBwbGFjZWhvbGRlciBub2RlIHdpdGhvdXQgcmUtcmVuZGVyXG5cbiAgICBpZiAodm0uX3Zub2RlKSB7IC8vIHVwZGF0ZSBjaGlsZCB0cmVlJ3MgcGFyZW50XG4gICAgICB2bS5fdm5vZGUucGFyZW50ID0gcGFyZW50Vm5vZGU7XG4gICAgfVxuICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiA9IHJlbmRlckNoaWxkcmVuO1xuXG4gICAgLy8gdXBkYXRlICRhdHRycyBhbmQgJGxpc3RlbmVycyBoYXNoXG4gICAgLy8gdGhlc2UgYXJlIGFsc28gcmVhY3RpdmUgc28gdGhleSBtYXkgdHJpZ2dlciBjaGlsZCB1cGRhdGUgaWYgdGhlIGNoaWxkXG4gICAgLy8gdXNlZCB0aGVtIGR1cmluZyByZW5kZXJcbiAgICB2bS4kYXR0cnMgPSBwYXJlbnRWbm9kZS5kYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0O1xuICAgIHZtLiRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG5cbiAgICAvLyB1cGRhdGUgcHJvcHNcbiAgICBpZiAocHJvcHNEYXRhICYmIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgICAgdmFyIHByb3BzID0gdm0uX3Byb3BzO1xuICAgICAgdmFyIHByb3BLZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzIHx8IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gcHJvcEtleXNbaV07XG4gICAgICAgIHZhciBwcm9wT3B0aW9ucyA9IHZtLiRvcHRpb25zLnByb3BzOyAvLyB3dGYgZmxvdz9cbiAgICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAgIH1cbiAgICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICAgIC8vIGtlZXAgYSBjb3B5IG9mIHJhdyBwcm9wc0RhdGFcbiAgICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YSA9IHByb3BzRGF0YTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgbGlzdGVuZXJzXG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuICAgIHZhciBvbGRMaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICAgIHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyk7XG5cbiAgICAvLyByZXNvbHZlIHNsb3RzICsgZm9yY2UgdXBkYXRlIGlmIGhhcyBjaGlsZHJlblxuICAgIGlmIChuZWVkc0ZvcmNlVXBkYXRlKSB7XG4gICAgICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMocmVuZGVyQ2hpbGRyZW4sIHBhcmVudFZub2RlLmNvbnRleHQpO1xuICAgICAgdm0uJGZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAge1xuICAgICAgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNJbkluYWN0aXZlVHJlZSAodm0pIHtcbiAgICB3aGlsZSAodm0gJiYgKHZtID0gdm0uJHBhcmVudCkpIHtcbiAgICAgIGlmICh2bS5faW5hY3RpdmUpIHsgcmV0dXJuIHRydWUgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQgKHZtLCBkaXJlY3QpIHtcbiAgICBpZiAoZGlyZWN0KSB7XG4gICAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZtLl9kaXJlY3RJbmFjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2bS5faW5hY3RpdmUgfHwgdm0uX2luYWN0aXZlID09PSBudWxsKSB7XG4gICAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0uJGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cbiAgICAgIGNhbGxIb29rKHZtLCAnYWN0aXZhdGVkJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gICAgaWYgKGRpcmVjdCkge1xuICAgICAgdm0uX2RpcmVjdEluYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF2bS5faW5hY3RpdmUpIHtcbiAgICAgIHZtLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0uJGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cbiAgICAgIGNhbGxIb29rKHZtLCAnZGVhY3RpdmF0ZWQnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYWxsSG9vayAodm0sIGhvb2spIHtcbiAgICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgbGlmZWN5Y2xlIGhvb2tzXG4gICAgcHVzaFRhcmdldCgpO1xuICAgIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICAgIHZhciBpbmZvID0gaG9vayArIFwiIGhvb2tcIjtcbiAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGhhbmRsZXJzW2ldLCB2bSwgbnVsbCwgdm0sIGluZm8pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2spO1xuICAgIH1cbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBNQVhfVVBEQVRFX0NPVU5UID0gMTAwO1xuXG4gIHZhciBxdWV1ZSA9IFtdO1xuICB2YXIgYWN0aXZhdGVkQ2hpbGRyZW4gPSBbXTtcbiAgdmFyIGhhcyA9IHt9O1xuICB2YXIgY2lyY3VsYXIgPSB7fTtcbiAgdmFyIHdhaXRpbmcgPSBmYWxzZTtcbiAgdmFyIGZsdXNoaW5nID0gZmFsc2U7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBzY2hlZHVsZXIncyBzdGF0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0U2NoZWR1bGVyU3RhdGUgKCkge1xuICAgIGluZGV4ID0gcXVldWUubGVuZ3RoID0gYWN0aXZhdGVkQ2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgICBoYXMgPSB7fTtcbiAgICB7XG4gICAgICBjaXJjdWxhciA9IHt9O1xuICAgIH1cbiAgICB3YWl0aW5nID0gZmx1c2hpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIEFzeW5jIGVkZ2UgY2FzZSAjNjU2NiByZXF1aXJlcyBzYXZpbmcgdGhlIHRpbWVzdGFtcCB3aGVuIGV2ZW50IGxpc3RlbmVycyBhcmVcbiAgLy8gYXR0YWNoZWQuIEhvd2V2ZXIsIGNhbGxpbmcgcGVyZm9ybWFuY2Uubm93KCkgaGFzIGEgcGVyZiBvdmVyaGVhZCBlc3BlY2lhbGx5XG4gIC8vIGlmIHRoZSBwYWdlIGhhcyB0aG91c2FuZHMgb2YgZXZlbnQgbGlzdGVuZXJzLiBJbnN0ZWFkLCB3ZSB0YWtlIGEgdGltZXN0YW1wXG4gIC8vIGV2ZXJ5IHRpbWUgdGhlIHNjaGVkdWxlciBmbHVzaGVzIGFuZCB1c2UgdGhhdCBmb3IgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAvLyBhdHRhY2hlZCBkdXJpbmcgdGhhdCBmbHVzaC5cbiAgdmFyIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IDA7XG5cbiAgLy8gQXN5bmMgZWRnZSBjYXNlIGZpeCByZXF1aXJlcyBzdG9yaW5nIGFuIGV2ZW50IGxpc3RlbmVyJ3MgYXR0YWNoIHRpbWVzdGFtcC5cbiAgdmFyIGdldE5vdyA9IERhdGUubm93O1xuXG4gIC8vIERldGVybWluZSB3aGF0IGV2ZW50IHRpbWVzdGFtcCB0aGUgYnJvd3NlciBpcyB1c2luZy4gQW5ub3lpbmdseSwgdGhlXG4gIC8vIHRpbWVzdGFtcCBjYW4gZWl0aGVyIGJlIGhpLXJlcyAocmVsYXRpdmUgdG8gcGFnZSBsb2FkKSBvciBsb3ctcmVzXG4gIC8vIChyZWxhdGl2ZSB0byBVTklYIGVwb2NoKSwgc28gaW4gb3JkZXIgdG8gY29tcGFyZSB0aW1lIHdlIGhhdmUgdG8gdXNlIHRoZVxuICAvLyBzYW1lIHRpbWVzdGFtcCB0eXBlIHdoZW4gc2F2aW5nIHRoZSBmbHVzaCB0aW1lc3RhbXAuXG4gIC8vIEFsbCBJRSB2ZXJzaW9ucyB1c2UgbG93LXJlcyBldmVudCB0aW1lc3RhbXBzLCBhbmQgaGF2ZSBwcm9ibGVtYXRpYyBjbG9ja1xuICAvLyBpbXBsZW1lbnRhdGlvbnMgKCM5NjMyKVxuICBpZiAoaW5Ccm93c2VyICYmICFpc0lFKSB7XG4gICAgdmFyIHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICAgIGlmIChcbiAgICAgIHBlcmZvcm1hbmNlICYmXG4gICAgICB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICBnZXROb3coKSA+IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpLnRpbWVTdGFtcFxuICAgICkge1xuICAgICAgLy8gaWYgdGhlIGV2ZW50IHRpbWVzdGFtcCwgYWx0aG91Z2ggZXZhbHVhdGVkIEFGVEVSIHRoZSBEYXRlLm5vdygpLCBpc1xuICAgICAgLy8gc21hbGxlciB0aGFuIGl0LCBpdCBtZWFucyB0aGUgZXZlbnQgaXMgdXNpbmcgYSBoaS1yZXMgdGltZXN0YW1wLFxuICAgICAgLy8gYW5kIHdlIG5lZWQgdG8gdXNlIHRoZSBoaS1yZXMgdmVyc2lvbiBmb3IgZXZlbnQgbGlzdGVuZXIgdGltZXN0YW1wcyBhc1xuICAgICAgLy8gd2VsbC5cbiAgICAgIGdldE5vdyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpOyB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGbHVzaCBib3RoIHF1ZXVlcyBhbmQgcnVuIHRoZSB3YXRjaGVycy5cbiAgICovXG4gIGZ1bmN0aW9uIGZsdXNoU2NoZWR1bGVyUXVldWUgKCkge1xuICAgIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IGdldE5vdygpO1xuICAgIGZsdXNoaW5nID0gdHJ1ZTtcbiAgICB2YXIgd2F0Y2hlciwgaWQ7XG5cbiAgICAvLyBTb3J0IHF1ZXVlIGJlZm9yZSBmbHVzaC5cbiAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdDpcbiAgICAvLyAxLiBDb21wb25lbnRzIGFyZSB1cGRhdGVkIGZyb20gcGFyZW50IHRvIGNoaWxkLiAoYmVjYXVzZSBwYXJlbnQgaXMgYWx3YXlzXG4gICAgLy8gICAgY3JlYXRlZCBiZWZvcmUgdGhlIGNoaWxkKVxuICAgIC8vIDIuIEEgY29tcG9uZW50J3MgdXNlciB3YXRjaGVycyBhcmUgcnVuIGJlZm9yZSBpdHMgcmVuZGVyIHdhdGNoZXIgKGJlY2F1c2VcbiAgICAvLyAgICB1c2VyIHdhdGNoZXJzIGFyZSBjcmVhdGVkIGJlZm9yZSB0aGUgcmVuZGVyIHdhdGNoZXIpXG4gICAgLy8gMy4gSWYgYSBjb21wb25lbnQgaXMgZGVzdHJveWVkIGR1cmluZyBhIHBhcmVudCBjb21wb25lbnQncyB3YXRjaGVyIHJ1bixcbiAgICAvLyAgICBpdHMgd2F0Y2hlcnMgY2FuIGJlIHNraXBwZWQuXG4gICAgcXVldWUuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pZCAtIGIuaWQ7IH0pO1xuXG4gICAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgd2F0Y2hlcnMgbWlnaHQgYmUgcHVzaGVkXG4gICAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIHdhdGNoZXJzXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcXVldWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB3YXRjaGVyID0gcXVldWVbaW5kZXhdO1xuICAgICAgaWYgKHdhdGNoZXIuYmVmb3JlKSB7XG4gICAgICAgIHdhdGNoZXIuYmVmb3JlKCk7XG4gICAgICB9XG4gICAgICBpZCA9IHdhdGNoZXIuaWQ7XG4gICAgICBoYXNbaWRdID0gbnVsbDtcbiAgICAgIHdhdGNoZXIucnVuKCk7XG4gICAgICAvLyBpbiBkZXYgYnVpbGQsIGNoZWNrIGFuZCBzdG9wIGNpcmN1bGFyIHVwZGF0ZXMuXG4gICAgICBpZiAoaGFzW2lkXSAhPSBudWxsKSB7XG4gICAgICAgIGNpcmN1bGFyW2lkXSA9IChjaXJjdWxhcltpZF0gfHwgMCkgKyAxO1xuICAgICAgICBpZiAoY2lyY3VsYXJbaWRdID4gTUFYX1VQREFURV9DT1VOVCkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGFuIGluZmluaXRlIHVwZGF0ZSBsb29wICcgKyAoXG4gICAgICAgICAgICAgIHdhdGNoZXIudXNlclxuICAgICAgICAgICAgICAgID8gKFwiaW4gd2F0Y2hlciB3aXRoIGV4cHJlc3Npb24gXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIilcbiAgICAgICAgICAgICAgICA6IFwiaW4gYSBjb21wb25lbnQgcmVuZGVyIGZ1bmN0aW9uLlwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgd2F0Y2hlci52bVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGtlZXAgY29waWVzIG9mIHBvc3QgcXVldWVzIGJlZm9yZSByZXNldHRpbmcgc3RhdGVcbiAgICB2YXIgYWN0aXZhdGVkUXVldWUgPSBhY3RpdmF0ZWRDaGlsZHJlbi5zbGljZSgpO1xuICAgIHZhciB1cGRhdGVkUXVldWUgPSBxdWV1ZS5zbGljZSgpO1xuXG4gICAgcmVzZXRTY2hlZHVsZXJTdGF0ZSgpO1xuXG4gICAgLy8gY2FsbCBjb21wb25lbnQgdXBkYXRlZCBhbmQgYWN0aXZhdGVkIGhvb2tzXG4gICAgY2FsbEFjdGl2YXRlZEhvb2tzKGFjdGl2YXRlZFF1ZXVlKTtcbiAgICBjYWxsVXBkYXRlZEhvb2tzKHVwZGF0ZWRRdWV1ZSk7XG5cbiAgICAvLyBkZXZ0b29sIGhvb2tcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoZGV2dG9vbHMgJiYgY29uZmlnLmRldnRvb2xzKSB7XG4gICAgICBkZXZ0b29scy5lbWl0KCdmbHVzaCcpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGxVcGRhdGVkSG9va3MgKHF1ZXVlKSB7XG4gICAgdmFyIGkgPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHdhdGNoZXIgPSBxdWV1ZVtpXTtcbiAgICAgIHZhciB2bSA9IHdhdGNoZXIudm07XG4gICAgICBpZiAodm0uX3dhdGNoZXIgPT09IHdhdGNoZXIgJiYgdm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICAgIGNhbGxIb29rKHZtLCAndXBkYXRlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBRdWV1ZSBhIGtlcHQtYWxpdmUgY29tcG9uZW50IHRoYXQgd2FzIGFjdGl2YXRlZCBkdXJpbmcgcGF0Y2guXG4gICAqIFRoZSBxdWV1ZSB3aWxsIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgZW50aXJlIHRyZWUgaGFzIGJlZW4gcGF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50ICh2bSkge1xuICAgIC8vIHNldHRpbmcgX2luYWN0aXZlIHRvIGZhbHNlIGhlcmUgc28gdGhhdCBhIHJlbmRlciBmdW5jdGlvbiBjYW5cbiAgICAvLyByZWx5IG9uIGNoZWNraW5nIHdoZXRoZXIgaXQncyBpbiBhbiBpbmFjdGl2ZSB0cmVlIChlLmcuIHJvdXRlci12aWV3KVxuICAgIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGFjdGl2YXRlZENoaWxkcmVuLnB1c2godm0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsbEFjdGl2YXRlZEhvb2tzIChxdWV1ZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHF1ZXVlW2ldLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHF1ZXVlW2ldLCB0cnVlIC8qIHRydWUgKi8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIGEgd2F0Y2hlciBpbnRvIHRoZSB3YXRjaGVyIHF1ZXVlLlxuICAgKiBKb2JzIHdpdGggZHVwbGljYXRlIElEcyB3aWxsIGJlIHNraXBwZWQgdW5sZXNzIGl0J3NcbiAgICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBxdWV1ZVdhdGNoZXIgKHdhdGNoZXIpIHtcbiAgICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGlmIChoYXNbaWRdID09IG51bGwpIHtcbiAgICAgIGhhc1tpZF0gPSB0cnVlO1xuICAgICAgaWYgKCFmbHVzaGluZykge1xuICAgICAgICBxdWV1ZS5wdXNoKHdhdGNoZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgYWxyZWFkeSBmbHVzaGluZywgc3BsaWNlIHRoZSB3YXRjaGVyIGJhc2VkIG9uIGl0cyBpZFxuICAgICAgICAvLyBpZiBhbHJlYWR5IHBhc3QgaXRzIGlkLCBpdCB3aWxsIGJlIHJ1biBuZXh0IGltbWVkaWF0ZWx5LlxuICAgICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlIChpID4gaW5kZXggJiYgcXVldWVbaV0uaWQgPiB3YXRjaGVyLmlkKSB7XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXVlLnNwbGljZShpICsgMSwgMCwgd2F0Y2hlcik7XG4gICAgICB9XG4gICAgICAvLyBxdWV1ZSB0aGUgZmx1c2hcbiAgICAgIGlmICghd2FpdGluZykge1xuICAgICAgICB3YWl0aW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIWNvbmZpZy5hc3luYykge1xuICAgICAgICAgIGZsdXNoU2NoZWR1bGVyUXVldWUoKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBuZXh0VGljayhmbHVzaFNjaGVkdWxlclF1ZXVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuXG5cbiAgdmFyIHVpZCQyID0gMDtcblxuICAvKipcbiAgICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gICAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gICAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICAgKi9cbiAgdmFyIFdhdGNoZXIgPSBmdW5jdGlvbiBXYXRjaGVyIChcbiAgICB2bSxcbiAgICBleHBPckZuLFxuICAgIGNiLFxuICAgIG9wdGlvbnMsXG4gICAgaXNSZW5kZXJXYXRjaGVyXG4gICkge1xuICAgIHRoaXMudm0gPSB2bTtcbiAgICBpZiAoaXNSZW5kZXJXYXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlciA9IHRoaXM7XG4gICAgfVxuICAgIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpO1xuICAgIC8vIG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5kZWVwID0gISFvcHRpb25zLmRlZXA7XG4gICAgICB0aGlzLnVzZXIgPSAhIW9wdGlvbnMudXNlcjtcbiAgICAgIHRoaXMubGF6eSA9ICEhb3B0aW9ucy5sYXp5O1xuICAgICAgdGhpcy5zeW5jID0gISFvcHRpb25zLnN5bmM7XG4gICAgICB0aGlzLmJlZm9yZSA9IG9wdGlvbnMuYmVmb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlZXAgPSB0aGlzLnVzZXIgPSB0aGlzLmxhenkgPSB0aGlzLnN5bmMgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5jYiA9IGNiO1xuICAgIHRoaXMuaWQgPSArK3VpZCQyOyAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZGlydHkgPSB0aGlzLmxhenk7IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gICAgdGhpcy5kZXBzID0gW107XG4gICAgdGhpcy5uZXdEZXBzID0gW107XG4gICAgdGhpcy5kZXBJZHMgPSBuZXcgX1NldCgpO1xuICAgIHRoaXMubmV3RGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHBPckZuLnRvU3RyaW5nKCk7XG4gICAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gICAgaWYgKHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmdldHRlciA9IGV4cE9yRm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pO1xuICAgICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgICB0aGlzLmdldHRlciA9IG5vb3A7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJGYWlsZWQgd2F0Y2hpbmcgcGF0aDogXFxcIlwiICsgZXhwT3JGbiArIFwiXFxcIiBcIiArXG4gICAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHRoaXMuZ2V0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cbiAgICovXG4gIFdhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgcHVzaFRhcmdldCh0aGlzKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFyIHZtID0gdGhpcy52bTtcbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGVcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gICAgICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgICAgIGlmICh0aGlzLmRlZXApIHtcbiAgICAgICAgdHJhdmVyc2UodmFsdWUpO1xuICAgICAgfVxuICAgICAgcG9wVGFyZ2V0KCk7XG4gICAgICB0aGlzLmNsZWFudXBEZXBzKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gYWRkRGVwIChkZXApIHtcbiAgICB2YXIgaWQgPSBkZXAuaWQ7XG4gICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoaWQpKSB7XG4gICAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpO1xuICAgICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKTtcbiAgICAgIGlmICghdGhpcy5kZXBJZHMuaGFzKGlkKSkge1xuICAgICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2xlYW4gdXAgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAgICovXG4gIFdhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gY2xlYW51cERlcHMgKCkge1xuICAgIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgZGVwID0gdGhpcy5kZXBzW2ldO1xuICAgICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoZGVwLmlkKSkge1xuICAgICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgdG1wID0gdGhpcy5kZXBJZHM7XG4gICAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkcztcbiAgICB0aGlzLm5ld0RlcElkcyA9IHRtcDtcbiAgICB0aGlzLm5ld0RlcElkcy5jbGVhcigpO1xuICAgIHRtcCA9IHRoaXMuZGVwcztcbiAgICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHM7XG4gICAgdGhpcy5uZXdEZXBzID0gdG1wO1xuICAgIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAgICovXG4gIFdhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAgICAgdGhpcy5ydW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVldWVXYXRjaGVyKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2NoZWR1bGVyIGpvYiBpbnRlcmZhY2UuXG4gICAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIuXG4gICAqL1xuICBXYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiBydW4gKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXQoKTtcbiAgICAgIGlmIChcbiAgICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgICAgLy8gaGF2ZSBtdXRhdGVkLlxuICAgICAgICBpc09iamVjdCh2YWx1ZSkgfHxcbiAgICAgICAgdGhpcy5kZWVwXG4gICAgICApIHtcbiAgICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdGhpcy52bSwgKFwiY2FsbGJhY2sgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICAgKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gICAqL1xuICBXYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlICgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKTtcbiAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICAgKi9cbiAgV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLmRlcGVuZCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJzY3JpYmVyIGxpc3QuXG4gICAqL1xuICBXYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIHRlYXJkb3duICgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAgIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBkZXN0cm95ZWQuXG4gICAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKTtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8qICAqL1xuXG4gIHZhciBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24gPSB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBub29wLFxuICAgIHNldDogbm9vcFxuICB9O1xuXG4gIGZ1bmN0aW9uIHByb3h5ICh0YXJnZXQsIHNvdXJjZUtleSwga2V5KSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NvdXJjZUtleV1ba2V5XVxuICAgIH07XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICAgIHRoaXNbc291cmNlS2V5XVtrZXldID0gdmFsO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFN0YXRlICh2bSkge1xuICAgIHZtLl93YXRjaGVycyA9IFtdO1xuICAgIHZhciBvcHRzID0gdm0uJG9wdGlvbnM7XG4gICAgaWYgKG9wdHMucHJvcHMpIHsgaW5pdFByb3BzKHZtLCBvcHRzLnByb3BzKTsgfVxuICAgIGlmIChvcHRzLm1ldGhvZHMpIHsgaW5pdE1ldGhvZHModm0sIG9wdHMubWV0aG9kcyk7IH1cbiAgICBpZiAob3B0cy5kYXRhKSB7XG4gICAgICBpbml0RGF0YSh2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ic2VydmUodm0uX2RhdGEgPSB7fSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbiAgICB9XG4gICAgaWYgKG9wdHMuY29tcHV0ZWQpIHsgaW5pdENvbXB1dGVkKHZtLCBvcHRzLmNvbXB1dGVkKTsgfVxuICAgIGlmIChvcHRzLndhdGNoICYmIG9wdHMud2F0Y2ggIT09IG5hdGl2ZVdhdGNoKSB7XG4gICAgICBpbml0V2F0Y2godm0sIG9wdHMud2F0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRQcm9wcyAodm0sIHByb3BzT3B0aW9ucykge1xuICAgIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge307XG4gICAgdmFyIHByb3BzID0gdm0uX3Byb3BzID0ge307XG4gICAgLy8gY2FjaGUgcHJvcCBrZXlzIHNvIHRoYXQgZnV0dXJlIHByb3BzIHVwZGF0ZXMgY2FuIGl0ZXJhdGUgdXNpbmcgQXJyYXlcbiAgICAvLyBpbnN0ZWFkIG9mIGR5bmFtaWMgb2JqZWN0IGtleSBlbnVtZXJhdGlvbi5cbiAgICB2YXIga2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyA9IFtdO1xuICAgIHZhciBpc1Jvb3QgPSAhdm0uJHBhcmVudDtcbiAgICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgICBpZiAoIWlzUm9vdCkge1xuICAgICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICB9XG4gICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICB7XG4gICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIGlmIChpc1Jlc2VydmVkQXR0cmlidXRlKGh5cGhlbmF0ZWRLZXkpIHx8XG4gICAgICAgICAgICBjb25maWcuaXNSZXNlcnZlZEF0dHIoaHlwaGVuYXRlZEtleSkpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgKFwiXFxcIlwiICsgaHlwaGVuYXRlZEtleSArIFwiXFxcIiBpcyBhIHJlc2VydmVkIGF0dHJpYnV0ZSBhbmQgY2Fubm90IGJlIHVzZWQgYXMgY29tcG9uZW50IHByb3AuXCIpLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFpc1Jvb3QgJiYgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgICAgd2FybihcbiAgICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhIHByb3AgZGlyZWN0bHkgc2luY2UgdGhlIHZhbHVlIHdpbGwgYmUgXCIgK1xuICAgICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwYXJlbnQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgICAgXCJJbnN0ZWFkLCB1c2UgYSBkYXRhIG9yIGNvbXB1dGVkIHByb3BlcnR5IGJhc2VkIG9uIHRoZSBwcm9wJ3MgXCIgK1xuICAgICAgICAgICAgICBcInZhbHVlLiBQcm9wIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgICB2bVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gc3RhdGljIHByb3BzIGFyZSBhbHJlYWR5IHByb3hpZWQgb24gdGhlIGNvbXBvbmVudCdzIHByb3RvdHlwZVxuICAgICAgLy8gZHVyaW5nIFZ1ZS5leHRlbmQoKS4gV2Ugb25seSBuZWVkIHRvIHByb3h5IHByb3BzIGRlZmluZWQgYXRcbiAgICAgIC8vIGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgICAgcHJveHkodm0sIFwiX3Byb3BzXCIsIGtleSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wc09wdGlvbnMpIGxvb3AoIGtleSApO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXREYXRhICh2bSkge1xuICAgIHZhciBkYXRhID0gdm0uJG9wdGlvbnMuZGF0YTtcbiAgICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBnZXREYXRhKGRhdGEsIHZtKVxuICAgICAgOiBkYXRhIHx8IHt9O1xuICAgIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgZGF0YSA9IHt9O1xuICAgICAgd2FybihcbiAgICAgICAgJ2RhdGEgZnVuY3Rpb25zIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0OlxcbicgK1xuICAgICAgICAnaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvY29tcG9uZW50cy5odG1sI2RhdGEtTXVzdC1CZS1hLUZ1bmN0aW9uJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICAgIHZhciBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kcztcbiAgICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAge1xuICAgICAgICBpZiAobWV0aG9kcyAmJiBoYXNPd24obWV0aG9kcywga2V5KSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGRhdGEgcHJvcGVydHkuXCIpLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJUaGUgZGF0YSBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWNsYXJlZCBhcyBhIHByb3AuIFwiICtcbiAgICAgICAgICBcIlVzZSBwcm9wIGRlZmF1bHQgdmFsdWUgaW5zdGVhZC5cIixcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICAgIHByb3h5KHZtLCBcIl9kYXRhXCIsIGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG9ic2VydmUgZGF0YVxuICAgIG9ic2VydmUoZGF0YSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGEgKGRhdGEsIHZtKSB7XG4gICAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xuICAgIHB1c2hUYXJnZXQoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGRhdGEuY2FsbCh2bSwgdm0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwiZGF0YSgpXCIpO1xuICAgICAgcmV0dXJuIHt9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHBvcFRhcmdldCgpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21wdXRlZFdhdGNoZXJPcHRpb25zID0geyBsYXp5OiB0cnVlIH07XG5cbiAgZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSwgY29tcHV0ZWQpIHtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB2YXIgd2F0Y2hlcnMgPSB2bS5fY29tcHV0ZWRXYXRjaGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgLy8gY29tcHV0ZWQgcHJvcGVydGllcyBhcmUganVzdCBnZXR0ZXJzIGR1cmluZyBTU1JcbiAgICB2YXIgaXNTU1IgPSBpc1NlcnZlclJlbmRlcmluZygpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV07XG4gICAgICB2YXIgZ2V0dGVyID0gdHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicgPyB1c2VyRGVmIDogdXNlckRlZi5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJHZXR0ZXIgaXMgbWlzc2luZyBmb3IgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU1NSKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBpbnRlcm5hbCB3YXRjaGVyIGZvciB0aGUgY29tcHV0ZWQgcHJvcGVydHkuXG4gICAgICAgIHdhdGNoZXJzW2tleV0gPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgICB2bSxcbiAgICAgICAgICBnZXR0ZXIgfHwgbm9vcCxcbiAgICAgICAgICBub29wLFxuICAgICAgICAgIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gY29tcG9uZW50LWRlZmluZWQgY29tcHV0ZWQgcHJvcGVydGllcyBhcmUgYWxyZWFkeSBkZWZpbmVkIG9uIHRoZVxuICAgICAgLy8gY29tcG9uZW50IHByb3RvdHlwZS4gV2Ugb25seSBuZWVkIHRvIGRlZmluZSBjb21wdXRlZCBwcm9wZXJ0aWVzIGRlZmluZWRcbiAgICAgIC8vIGF0IGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgICAgZGVmaW5lQ29tcHV0ZWQodm0sIGtleSwgdXNlckRlZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoa2V5IGluIHZtLiRkYXRhKSB7XG4gICAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBkYXRhLlwiKSwgdm0pO1xuICAgICAgICB9IGVsc2UgaWYgKHZtLiRvcHRpb25zLnByb3BzICYmIGtleSBpbiB2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgYXMgYSBwcm9wLlwiKSwgdm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmaW5lQ29tcHV0ZWQgKFxuICAgIHRhcmdldCxcbiAgICBrZXksXG4gICAgdXNlckRlZlxuICApIHtcbiAgICB2YXIgc2hvdWxkQ2FjaGUgPSAhaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcbiAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBzaG91bGRDYWNoZVxuICAgICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgICAgOiBjcmVhdGVHZXR0ZXJJbnZva2VyKHVzZXJEZWYpO1xuICAgICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IG5vb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICA/IHNob3VsZENhY2hlICYmIHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICAgICAgOiBjcmVhdGVHZXR0ZXJJbnZva2VyKHVzZXJEZWYuZ2V0KVxuICAgICAgICA6IG5vb3A7XG4gICAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXQgfHwgbm9vcDtcbiAgICB9XG4gICAgaWYgKHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPT09IG5vb3ApIHtcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiQ29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBhc3NpZ25lZCB0byBidXQgaXQgaGFzIG5vIHNldHRlci5cIiksXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIgKGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgICB2YXIgd2F0Y2hlciA9IHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnMgJiYgdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1trZXldO1xuICAgICAgaWYgKHdhdGNoZXIpIHtcbiAgICAgICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgICAgICB3YXRjaGVyLmV2YWx1YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlR2V0dGVySW52b2tlcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRNZXRob2RzICh2bSwgbWV0aG9kcykge1xuICAgIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICAgIGZvciAodmFyIGtleSBpbiBtZXRob2RzKSB7XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgdHlwZSBcXFwiXCIgKyAodHlwZW9mIG1ldGhvZHNba2V5XSkgKyBcIlxcXCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgICBcIkRpZCB5b3UgcmVmZXJlbmNlIHRoZSBmdW5jdGlvbiBjb3JyZWN0bHk/XCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIHByb3AuXCIpLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoa2V5IGluIHZtKSAmJiBpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGNvbmZsaWN0cyB3aXRoIGFuIGV4aXN0aW5nIFZ1ZSBpbnN0YW5jZSBtZXRob2QuIFwiICtcbiAgICAgICAgICAgIFwiQXZvaWQgZGVmaW5pbmcgY29tcG9uZW50IG1ldGhvZHMgdGhhdCBzdGFydCB3aXRoIF8gb3IgJC5cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZtW2tleV0gPSB0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nID8gbm9vcCA6IGJpbmQobWV0aG9kc1trZXldLCB2bSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gd2F0Y2gpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gd2F0Y2hba2V5XTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcltpXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlV2F0Y2hlciAoXG4gICAgdm0sXG4gICAgZXhwT3JGbixcbiAgICBoYW5kbGVyLFxuICAgIG9wdGlvbnNcbiAgKSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICAgIG9wdGlvbnMgPSBoYW5kbGVyO1xuICAgICAgaGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlcjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdO1xuICAgIH1cbiAgICByZXR1cm4gdm0uJHdhdGNoKGV4cE9yRm4sIGhhbmRsZXIsIG9wdGlvbnMpXG4gIH1cblxuICBmdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgICAvLyBmbG93IHNvbWVob3cgaGFzIHByb2JsZW1zIHdpdGggZGlyZWN0bHkgZGVjbGFyZWQgZGVmaW5pdGlvbiBvYmplY3RcbiAgICAvLyB3aGVuIHVzaW5nIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgc28gd2UgaGF2ZSB0byBwcm9jZWR1cmFsbHkgYnVpbGQgdXBcbiAgICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gICAgdmFyIGRhdGFEZWYgPSB7fTtcbiAgICBkYXRhRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfTtcbiAgICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgICBwcm9wc0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wcm9wcyB9O1xuICAgIHtcbiAgICAgIGRhdGFEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXG4gICAgICAgICAgJ1VzZSBuZXN0ZWQgZGF0YSBwcm9wZXJ0aWVzIGluc3RlYWQuJyxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgcHJvcHNEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcbiAgICAgIH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRwcm9wcycsIHByb3BzRGVmKTtcblxuICAgIFZ1ZS5wcm90b3R5cGUuJHNldCA9IHNldDtcbiAgICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBkZWw7XG5cbiAgICBWdWUucHJvdG90eXBlLiR3YXRjaCA9IGZ1bmN0aW9uIChcbiAgICAgIGV4cE9yRm4sXG4gICAgICBjYixcbiAgICAgIG9wdGlvbnNcbiAgICApIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChjYikpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKVxuICAgICAgfVxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICBvcHRpb25zLnVzZXIgPSB0cnVlO1xuICAgICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMuaW1tZWRpYXRlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIHZtLCAoXCJjYWxsYmFjayBmb3IgaW1tZWRpYXRlIHdhdGNoZXIgXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gdW53YXRjaEZuICgpIHtcbiAgICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKiAgKi9cblxuICB2YXIgdWlkJDMgPSAwO1xuXG4gIGZ1bmN0aW9uIGluaXRNaXhpbiAoVnVlKSB7XG4gICAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgLy8gYSB1aWRcbiAgICAgIHZtLl91aWQgPSB1aWQkMysrO1xuXG4gICAgICB2YXIgc3RhcnRUYWcsIGVuZFRhZztcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICAgIHN0YXJ0VGFnID0gXCJ2dWUtcGVyZi1zdGFydDpcIiArICh2bS5fdWlkKTtcbiAgICAgICAgZW5kVGFnID0gXCJ2dWUtcGVyZi1lbmQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgICAgfVxuXG4gICAgICAvLyBhIGZsYWcgdG8gYXZvaWQgdGhpcyBiZWluZyBvYnNlcnZlZFxuICAgICAgdm0uX2lzVnVlID0gdHJ1ZTtcbiAgICAgIC8vIG1lcmdlIG9wdGlvbnNcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuX2lzQ29tcG9uZW50KSB7XG4gICAgICAgIC8vIG9wdGltaXplIGludGVybmFsIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uXG4gICAgICAgIC8vIHNpbmNlIGR5bmFtaWMgb3B0aW9ucyBtZXJnaW5nIGlzIHByZXR0eSBzbG93LCBhbmQgbm9uZSBvZiB0aGVcbiAgICAgICAgLy8gaW50ZXJuYWwgY29tcG9uZW50IG9wdGlvbnMgbmVlZHMgc3BlY2lhbCB0cmVhdG1lbnQuXG4gICAgICAgIGluaXRJbnRlcm5hbENvbXBvbmVudCh2bSwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bS4kb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgICBvcHRpb25zIHx8IHt9LFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAge1xuICAgICAgICBpbml0UHJveHkodm0pO1xuICAgICAgfVxuICAgICAgLy8gZXhwb3NlIHJlYWwgc2VsZlxuICAgICAgdm0uX3NlbGYgPSB2bTtcbiAgICAgIGluaXRMaWZlY3ljbGUodm0pO1xuICAgICAgaW5pdEV2ZW50cyh2bSk7XG4gICAgICBpbml0UmVuZGVyKHZtKTtcbiAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlQ3JlYXRlJyk7XG4gICAgICBpbml0SW5qZWN0aW9ucyh2bSk7IC8vIHJlc29sdmUgaW5qZWN0aW9ucyBiZWZvcmUgZGF0YS9wcm9wc1xuICAgICAgaW5pdFN0YXRlKHZtKTtcbiAgICAgIGluaXRQcm92aWRlKHZtKTsgLy8gcmVzb2x2ZSBwcm92aWRlIGFmdGVyIGRhdGEvcHJvcHNcbiAgICAgIGNhbGxIb29rKHZtLCAnY3JlYXRlZCcpO1xuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgICB2bS5fbmFtZSA9IGZvcm1hdENvbXBvbmVudE5hbWUodm0sIGZhbHNlKTtcbiAgICAgICAgbWFyayhlbmRUYWcpO1xuICAgICAgICBtZWFzdXJlKChcInZ1ZSBcIiArICh2bS5fbmFtZSkgKyBcIiBpbml0XCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZtLiRvcHRpb25zLmVsKSB7XG4gICAgICAgIHZtLiRtb3VudCh2bS4kb3B0aW9ucy5lbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRJbnRlcm5hbENvbXBvbmVudCAodm0sIG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zID0gT2JqZWN0LmNyZWF0ZSh2bS5jb25zdHJ1Y3Rvci5vcHRpb25zKTtcbiAgICAvLyBkb2luZyB0aGlzIGJlY2F1c2UgaXQncyBmYXN0ZXIgdGhhbiBkeW5hbWljIGVudW1lcmF0aW9uLlxuICAgIHZhciBwYXJlbnRWbm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICAgIG9wdHMucGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gICAgb3B0cy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcblxuICAgIHZhciB2bm9kZUNvbXBvbmVudE9wdGlvbnMgPSBwYXJlbnRWbm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIG9wdHMucHJvcHNEYXRhID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnByb3BzRGF0YTtcbiAgICBvcHRzLl9wYXJlbnRMaXN0ZW5lcnMgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzO1xuICAgIG9wdHMuX3JlbmRlckNoaWxkcmVuID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmNoaWxkcmVuO1xuICAgIG9wdHMuX2NvbXBvbmVudFRhZyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy50YWc7XG5cbiAgICBpZiAob3B0aW9ucy5yZW5kZXIpIHtcbiAgICAgIG9wdHMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgICBvcHRzLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMgKEN0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgICBpZiAoQ3Rvci5zdXBlcikge1xuICAgICAgdmFyIHN1cGVyT3B0aW9ucyA9IHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvci5zdXBlcik7XG4gICAgICB2YXIgY2FjaGVkU3VwZXJPcHRpb25zID0gQ3Rvci5zdXBlck9wdGlvbnM7XG4gICAgICBpZiAoc3VwZXJPcHRpb25zICE9PSBjYWNoZWRTdXBlck9wdGlvbnMpIHtcbiAgICAgICAgLy8gc3VwZXIgb3B0aW9uIGNoYW5nZWQsXG4gICAgICAgIC8vIG5lZWQgdG8gcmVzb2x2ZSBuZXcgb3B0aW9ucy5cbiAgICAgICAgQ3Rvci5zdXBlck9wdGlvbnMgPSBzdXBlck9wdGlvbnM7XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbGF0ZS1tb2RpZmllZC9hdHRhY2hlZCBvcHRpb25zICgjNDk3NilcbiAgICAgICAgdmFyIG1vZGlmaWVkT3B0aW9ucyA9IHJlc29sdmVNb2RpZmllZE9wdGlvbnMoQ3Rvcik7XG4gICAgICAgIC8vIHVwZGF0ZSBiYXNlIGV4dGVuZCBvcHRpb25zXG4gICAgICAgIGlmIChtb2RpZmllZE9wdGlvbnMpIHtcbiAgICAgICAgICBleHRlbmQoQ3Rvci5leHRlbmRPcHRpb25zLCBtb2RpZmllZE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoc3VwZXJPcHRpb25zLCBDdG9yLmV4dGVuZE9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0aW9ucy5uYW1lKSB7XG4gICAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW29wdGlvbnMubmFtZV0gPSBDdG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlTW9kaWZpZWRPcHRpb25zIChDdG9yKSB7XG4gICAgdmFyIG1vZGlmaWVkO1xuICAgIHZhciBsYXRlc3QgPSBDdG9yLm9wdGlvbnM7XG4gICAgdmFyIHNlYWxlZCA9IEN0b3Iuc2VhbGVkT3B0aW9ucztcbiAgICBmb3IgKHZhciBrZXkgaW4gbGF0ZXN0KSB7XG4gICAgICBpZiAobGF0ZXN0W2tleV0gIT09IHNlYWxlZFtrZXldKSB7XG4gICAgICAgIGlmICghbW9kaWZpZWQpIHsgbW9kaWZpZWQgPSB7fTsgfVxuICAgICAgICBtb2RpZmllZFtrZXldID0gbGF0ZXN0W2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2RpZmllZFxuICB9XG5cbiAgZnVuY3Rpb24gVnVlIChvcHRpb25zKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZ1ZSlcbiAgICApIHtcbiAgICAgIHdhcm4oJ1Z1ZSBpcyBhIGNvbnN0cnVjdG9yIGFuZCBzaG91bGQgYmUgY2FsbGVkIHdpdGggdGhlIGBuZXdgIGtleXdvcmQnKTtcbiAgICB9XG4gICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIGluaXRNaXhpbihWdWUpO1xuICBzdGF0ZU1peGluKFZ1ZSk7XG4gIGV2ZW50c01peGluKFZ1ZSk7XG4gIGxpZmVjeWNsZU1peGluKFZ1ZSk7XG4gIHJlbmRlck1peGluKFZ1ZSk7XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gaW5pdFVzZSAoVnVlKSB7XG4gICAgVnVlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIHZhciBpbnN0YWxsZWRQbHVnaW5zID0gKHRoaXMuX2luc3RhbGxlZFBsdWdpbnMgfHwgKHRoaXMuX2luc3RhbGxlZFBsdWdpbnMgPSBbXSkpO1xuICAgICAgaWYgKGluc3RhbGxlZFBsdWdpbnMuaW5kZXhPZihwbHVnaW4pID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH1cblxuICAgICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcbiAgICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9XG4gICAgICBpbnN0YWxsZWRQbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGluaXRNaXhpbiQxIChWdWUpIHtcbiAgICBWdWUubWl4aW4gPSBmdW5jdGlvbiAobWl4aW4pIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIG1peGluKTtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGluaXRFeHRlbmQgKFZ1ZSkge1xuICAgIC8qKlxuICAgICAqIEVhY2ggaW5zdGFuY2UgY29uc3RydWN0b3IsIGluY2x1ZGluZyBWdWUsIGhhcyBhIHVuaXF1ZVxuICAgICAqIGNpZC4gVGhpcyBlbmFibGVzIHVzIHRvIGNyZWF0ZSB3cmFwcGVkIFwiY2hpbGRcbiAgICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICAgKi9cbiAgICBWdWUuY2lkID0gMDtcbiAgICB2YXIgY2lkID0gMTtcblxuICAgIC8qKlxuICAgICAqIENsYXNzIGluaGVyaXRhbmNlXG4gICAgICovXG4gICAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbmRPcHRpb25zKSB7XG4gICAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcbiAgICAgIHZhciBTdXBlciA9IHRoaXM7XG4gICAgICB2YXIgU3VwZXJJZCA9IFN1cGVyLmNpZDtcbiAgICAgIHZhciBjYWNoZWRDdG9ycyA9IGV4dGVuZE9wdGlvbnMuX0N0b3IgfHwgKGV4dGVuZE9wdGlvbnMuX0N0b3IgPSB7fSk7XG4gICAgICBpZiAoY2FjaGVkQ3RvcnNbU3VwZXJJZF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZEN0b3JzW1N1cGVySWRdXG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lID0gZXh0ZW5kT3B0aW9ucy5uYW1lIHx8IFN1cGVyLm9wdGlvbnMubmFtZTtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShuYW1lKTtcbiAgICAgIH1cblxuICAgICAgdmFyIFN1YiA9IGZ1bmN0aW9uIFZ1ZUNvbXBvbmVudCAob3B0aW9ucykge1xuICAgICAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgICAgfTtcbiAgICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgICBTdWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ViO1xuICAgICAgU3ViLmNpZCA9IGNpZCsrO1xuICAgICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICAgIFN1cGVyLm9wdGlvbnMsXG4gICAgICAgIGV4dGVuZE9wdGlvbnNcbiAgICAgICk7XG4gICAgICBTdWJbJ3N1cGVyJ10gPSBTdXBlcjtcblxuICAgICAgLy8gRm9yIHByb3BzIGFuZCBjb21wdXRlZCBwcm9wZXJ0aWVzLCB3ZSBkZWZpbmUgdGhlIHByb3h5IGdldHRlcnMgb25cbiAgICAgIC8vIHRoZSBWdWUgaW5zdGFuY2VzIGF0IGV4dGVuc2lvbiB0aW1lLCBvbiB0aGUgZXh0ZW5kZWQgcHJvdG90eXBlLiBUaGlzXG4gICAgICAvLyBhdm9pZHMgT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxzIGZvciBlYWNoIGluc3RhbmNlIGNyZWF0ZWQuXG4gICAgICBpZiAoU3ViLm9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgaW5pdFByb3BzJDEoU3ViKTtcbiAgICAgIH1cbiAgICAgIGlmIChTdWIub3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgICBpbml0Q29tcHV0ZWQkMShTdWIpO1xuICAgICAgfVxuXG4gICAgICAvLyBhbGxvdyBmdXJ0aGVyIGV4dGVuc2lvbi9taXhpbi9wbHVnaW4gdXNhZ2VcbiAgICAgIFN1Yi5leHRlbmQgPSBTdXBlci5leHRlbmQ7XG4gICAgICBTdWIubWl4aW4gPSBTdXBlci5taXhpbjtcbiAgICAgIFN1Yi51c2UgPSBTdXBlci51c2U7XG5cbiAgICAgIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgICAgIC8vIGNhbiBoYXZlIHRoZWlyIHByaXZhdGUgYXNzZXRzIHRvby5cbiAgICAgIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgU3ViW3R5cGVdID0gU3VwZXJbdHlwZV07XG4gICAgICB9KTtcbiAgICAgIC8vIGVuYWJsZSByZWN1cnNpdmUgc2VsZi1sb29rdXBcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIFN1Yi5vcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBTdWI7XG4gICAgICB9XG5cbiAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyIG9wdGlvbnMgYXQgZXh0ZW5zaW9uIHRpbWUuXG4gICAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxuICAgICAgLy8gYmVlbiB1cGRhdGVkLlxuICAgICAgU3ViLnN1cGVyT3B0aW9ucyA9IFN1cGVyLm9wdGlvbnM7XG4gICAgICBTdWIuZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnM7XG4gICAgICBTdWIuc2VhbGVkT3B0aW9ucyA9IGV4dGVuZCh7fSwgU3ViLm9wdGlvbnMpO1xuXG4gICAgICAvLyBjYWNoZSBjb25zdHJ1Y3RvclxuICAgICAgY2FjaGVkQ3RvcnNbU3VwZXJJZF0gPSBTdWI7XG4gICAgICByZXR1cm4gU3ViXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRQcm9wcyQxIChDb21wKSB7XG4gICAgdmFyIHByb3BzID0gQ29tcC5vcHRpb25zLnByb3BzO1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgcHJveHkoQ29tcC5wcm90b3R5cGUsIFwiX3Byb3BzXCIsIGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdENvbXB1dGVkJDEgKENvbXApIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBDb21wLm9wdGlvbnMuY29tcHV0ZWQ7XG4gICAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICBkZWZpbmVDb21wdXRlZChDb21wLnByb3RvdHlwZSwga2V5LCBjb21wdXRlZFtrZXldKTtcbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBpbml0QXNzZXRSZWdpc3RlcnMgKFZ1ZSkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhc3NldCByZWdpc3RyYXRpb24gbWV0aG9kcy5cbiAgICAgKi9cbiAgICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBWdWVbdHlwZV0gPSBmdW5jdGlvbiAoXG4gICAgICAgIGlkLFxuICAgICAgICBkZWZpbml0aW9uXG4gICAgICApIHtcbiAgICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShpZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBkZWZpbml0aW9uLm5hbWUgfHwgaWQ7XG4gICAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5vcHRpb25zLl9iYXNlLmV4dGVuZChkZWZpbml0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnICYmIHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uID0geyBiaW5kOiBkZWZpbml0aW9uLCB1cGRhdGU6IGRlZmluaXRpb24gfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XG4gICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qICAqL1xuXG5cblxuICBmdW5jdGlvbiBnZXRDb21wb25lbnROYW1lIChvcHRzKSB7XG4gICAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpXG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaGVzIChwYXR0ZXJuLCBuYW1lKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLmluZGV4T2YobmFtZSkgPiAtMVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi5zcGxpdCgnLCcpLmluZGV4T2YobmFtZSkgPiAtMVxuICAgIH0gZWxzZSBpZiAoaXNSZWdFeHAocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobmFtZSlcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHBydW5lQ2FjaGUgKGtlZXBBbGl2ZUluc3RhbmNlLCBmaWx0ZXIpIHtcbiAgICB2YXIgY2FjaGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5jYWNoZTtcbiAgICB2YXIga2V5cyA9IGtlZXBBbGl2ZUluc3RhbmNlLmtleXM7XG4gICAgdmFyIF92bm9kZSA9IGtlZXBBbGl2ZUluc3RhbmNlLl92bm9kZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gY2FjaGUpIHtcbiAgICAgIHZhciBjYWNoZWROb2RlID0gY2FjaGVba2V5XTtcbiAgICAgIGlmIChjYWNoZWROb2RlKSB7XG4gICAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjYWNoZWROb2RlLmNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgICBpZiAobmFtZSAmJiAhZmlsdGVyKG5hbWUpKSB7XG4gICAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIF92bm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcnVuZUNhY2hlRW50cnkgKFxuICAgIGNhY2hlLFxuICAgIGtleSxcbiAgICBrZXlzLFxuICAgIGN1cnJlbnRcbiAgKSB7XG4gICAgdmFyIGNhY2hlZCQkMSA9IGNhY2hlW2tleV07XG4gICAgaWYgKGNhY2hlZCQkMSAmJiAoIWN1cnJlbnQgfHwgY2FjaGVkJCQxLnRhZyAhPT0gY3VycmVudC50YWcpKSB7XG4gICAgICBjYWNoZWQkJDEuY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICB9XG4gICAgY2FjaGVba2V5XSA9IG51bGw7XG4gICAgcmVtb3ZlKGtleXMsIGtleSk7XG4gIH1cblxuICB2YXIgcGF0dGVyblR5cGVzID0gW1N0cmluZywgUmVnRXhwLCBBcnJheV07XG5cbiAgdmFyIEtlZXBBbGl2ZSA9IHtcbiAgICBuYW1lOiAna2VlcC1hbGl2ZScsXG4gICAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgICBwcm9wczoge1xuICAgICAgaW5jbHVkZTogcGF0dGVyblR5cGVzLFxuICAgICAgZXhjbHVkZTogcGF0dGVyblR5cGVzLFxuICAgICAgbWF4OiBbU3RyaW5nLCBOdW1iZXJdXG4gICAgfSxcblxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQgKCkge1xuICAgICAgdGhpcy5jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB0aGlzLmtleXMgPSBbXTtcbiAgICB9LFxuXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiBkZXN0cm95ZWQgKCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FjaGUpIHtcbiAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KHRoaXMuY2FjaGUsIGtleSwgdGhpcy5rZXlzKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCAoKSB7XG4gICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgICAgdGhpcy4kd2F0Y2goJ2luY2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kd2F0Y2goJ2V4Y2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgICAgdmFyIHNsb3QgPSB0aGlzLiRzbG90cy5kZWZhdWx0O1xuICAgICAgdmFyIHZub2RlID0gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZChzbG90KTtcbiAgICAgIHZhciBjb21wb25lbnRPcHRpb25zID0gdm5vZGUgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICAgIGlmIChjb21wb25lbnRPcHRpb25zKSB7XG4gICAgICAgIC8vIGNoZWNrIHBhdHRlcm5cbiAgICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgICB2YXIgcmVmID0gdGhpcztcbiAgICAgICAgdmFyIGluY2x1ZGUgPSByZWYuaW5jbHVkZTtcbiAgICAgICAgdmFyIGV4Y2x1ZGUgPSByZWYuZXhjbHVkZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIG5vdCBpbmNsdWRlZFxuICAgICAgICAgIChpbmNsdWRlICYmICghbmFtZSB8fCAhbWF0Y2hlcyhpbmNsdWRlLCBuYW1lKSkpIHx8XG4gICAgICAgICAgLy8gZXhjbHVkZWRcbiAgICAgICAgICAoZXhjbHVkZSAmJiBuYW1lICYmIG1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB2bm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlZiQxID0gdGhpcztcbiAgICAgICAgdmFyIGNhY2hlID0gcmVmJDEuY2FjaGU7XG4gICAgICAgIHZhciBrZXlzID0gcmVmJDEua2V5cztcbiAgICAgICAgdmFyIGtleSA9IHZub2RlLmtleSA9PSBudWxsXG4gICAgICAgICAgLy8gc2FtZSBjb25zdHJ1Y3RvciBtYXkgZ2V0IHJlZ2lzdGVyZWQgYXMgZGlmZmVyZW50IGxvY2FsIGNvbXBvbmVudHNcbiAgICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXG4gICAgICAgICAgPyBjb21wb25lbnRPcHRpb25zLkN0b3IuY2lkICsgKGNvbXBvbmVudE9wdGlvbnMudGFnID8gKFwiOjpcIiArIChjb21wb25lbnRPcHRpb25zLnRhZykpIDogJycpXG4gICAgICAgICAgOiB2bm9kZS5rZXk7XG4gICAgICAgIGlmIChjYWNoZVtrZXldKSB7XG4gICAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjYWNoZVtrZXldLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICAgIC8vIG1ha2UgY3VycmVudCBrZXkgZnJlc2hlc3RcbiAgICAgICAgICByZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWNoZVtrZXldID0gdm5vZGU7XG4gICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgLy8gcHJ1bmUgb2xkZXN0IGVudHJ5XG4gICAgICAgICAgaWYgKHRoaXMubWF4ICYmIGtleXMubGVuZ3RoID4gcGFyc2VJbnQodGhpcy5tYXgpKSB7XG4gICAgICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleXNbMF0sIGtleXMsIHRoaXMuX3Zub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGUgfHwgKHNsb3QgJiYgc2xvdFswXSlcbiAgICB9XG4gIH07XG5cbiAgdmFyIGJ1aWx0SW5Db21wb25lbnRzID0ge1xuICAgIEtlZXBBbGl2ZTogS2VlcEFsaXZlXG4gIH07XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gaW5pdEdsb2JhbEFQSSAoVnVlKSB7XG4gICAgLy8gY29uZmlnXG4gICAgdmFyIGNvbmZpZ0RlZiA9IHt9O1xuICAgIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWc7IH07XG4gICAge1xuICAgICAgY29uZmlnRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnRG8gbm90IHJlcGxhY2UgdGhlIFZ1ZS5jb25maWcgb2JqZWN0LCBzZXQgaW5kaXZpZHVhbCBmaWVsZHMgaW5zdGVhZC4nXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnY29uZmlnJywgY29uZmlnRGVmKTtcblxuICAgIC8vIGV4cG9zZWQgdXRpbCBtZXRob2RzLlxuICAgIC8vIE5PVEU6IHRoZXNlIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIC0gYXZvaWQgcmVseWluZyBvblxuICAgIC8vIHRoZW0gdW5sZXNzIHlvdSBhcmUgYXdhcmUgb2YgdGhlIHJpc2suXG4gICAgVnVlLnV0aWwgPSB7XG4gICAgICB3YXJuOiB3YXJuLFxuICAgICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgICBtZXJnZU9wdGlvbnM6IG1lcmdlT3B0aW9ucyxcbiAgICAgIGRlZmluZVJlYWN0aXZlOiBkZWZpbmVSZWFjdGl2ZSQkMVxuICAgIH07XG5cbiAgICBWdWUuc2V0ID0gc2V0O1xuICAgIFZ1ZS5kZWxldGUgPSBkZWw7XG4gICAgVnVlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbiAgICAvLyAyLjYgZXhwbGljaXQgb2JzZXJ2YWJsZSBBUElcbiAgICBWdWUub2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIG9ic2VydmUob2JqKTtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9O1xuXG4gICAgVnVlLm9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIFZ1ZS5vcHRpb25zW3R5cGUgKyAncyddID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9KTtcblxuICAgIC8vIHRoaXMgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgXCJiYXNlXCIgY29uc3RydWN0b3IgdG8gZXh0ZW5kIGFsbCBwbGFpbi1vYmplY3RcbiAgICAvLyBjb21wb25lbnRzIHdpdGggaW4gV2VleCdzIG11bHRpLWluc3RhbmNlIHNjZW5hcmlvcy5cbiAgICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcblxuICAgIGV4dGVuZChWdWUub3B0aW9ucy5jb21wb25lbnRzLCBidWlsdEluQ29tcG9uZW50cyk7XG5cbiAgICBpbml0VXNlKFZ1ZSk7XG4gICAgaW5pdE1peGluJDEoVnVlKTtcbiAgICBpbml0RXh0ZW5kKFZ1ZSk7XG4gICAgaW5pdEFzc2V0UmVnaXN0ZXJzKFZ1ZSk7XG4gIH1cblxuICBpbml0R2xvYmFsQVBJKFZ1ZSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckaXNTZXJ2ZXInLCB7XG4gICAgZ2V0OiBpc1NlcnZlclJlbmRlcmluZ1xuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRzc3JDb250ZXh0Jywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gdGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dFxuICAgIH1cbiAgfSk7XG5cbiAgLy8gZXhwb3NlIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IGZvciBzc3IgcnVudGltZSBoZWxwZXIgaW5zdGFsbGF0aW9uXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCcsIHtcbiAgICB2YWx1ZTogRnVuY3Rpb25hbFJlbmRlckNvbnRleHRcbiAgfSk7XG5cbiAgVnVlLnZlcnNpb24gPSAnMi42LjEwJztcblxuICAvKiAgKi9cblxuICAvLyB0aGVzZSBhcmUgcmVzZXJ2ZWQgZm9yIHdlYiBiZWNhdXNlIHRoZXkgYXJlIGRpcmVjdGx5IGNvbXBpbGVkIGF3YXlcbiAgLy8gZHVyaW5nIHRlbXBsYXRlIGNvbXBpbGF0aW9uXG4gIHZhciBpc1Jlc2VydmVkQXR0ciA9IG1ha2VNYXAoJ3N0eWxlLGNsYXNzJyk7XG5cbiAgLy8gYXR0cmlidXRlcyB0aGF0IHNob3VsZCBiZSB1c2luZyBwcm9wcyBmb3IgYmluZGluZ1xuICB2YXIgYWNjZXB0VmFsdWUgPSBtYWtlTWFwKCdpbnB1dCx0ZXh0YXJlYSxvcHRpb24sc2VsZWN0LHByb2dyZXNzJyk7XG4gIHZhciBtdXN0VXNlUHJvcCA9IGZ1bmN0aW9uICh0YWcsIHR5cGUsIGF0dHIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKGF0dHIgPT09ICd2YWx1ZScgJiYgYWNjZXB0VmFsdWUodGFnKSkgJiYgdHlwZSAhPT0gJ2J1dHRvbicgfHxcbiAgICAgIChhdHRyID09PSAnc2VsZWN0ZWQnICYmIHRhZyA9PT0gJ29wdGlvbicpIHx8XG4gICAgICAoYXR0ciA9PT0gJ2NoZWNrZWQnICYmIHRhZyA9PT0gJ2lucHV0JykgfHxcbiAgICAgIChhdHRyID09PSAnbXV0ZWQnICYmIHRhZyA9PT0gJ3ZpZGVvJylcbiAgICApXG4gIH07XG5cbiAgdmFyIGlzRW51bWVyYXRlZEF0dHIgPSBtYWtlTWFwKCdjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2snKTtcblxuICB2YXIgaXNWYWxpZENvbnRlbnRFZGl0YWJsZVZhbHVlID0gbWFrZU1hcCgnZXZlbnRzLGNhcmV0LHR5cGluZyxwbGFpbnRleHQtb25seScpO1xuXG4gIHZhciBjb252ZXJ0RW51bWVyYXRlZFZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkgfHwgdmFsdWUgPT09ICdmYWxzZSdcbiAgICAgID8gJ2ZhbHNlJ1xuICAgICAgLy8gYWxsb3cgYXJiaXRyYXJ5IHN0cmluZyB2YWx1ZSBmb3IgY29udGVudGVkaXRhYmxlXG4gICAgICA6IGtleSA9PT0gJ2NvbnRlbnRlZGl0YWJsZScgJiYgaXNWYWxpZENvbnRlbnRFZGl0YWJsZVZhbHVlKHZhbHVlKVxuICAgICAgICA/IHZhbHVlXG4gICAgICAgIDogJ3RydWUnXG4gIH07XG5cbiAgdmFyIGlzQm9vbGVhbkF0dHIgPSBtYWtlTWFwKFxuICAgICdhbGxvd2Z1bGxzY3JlZW4sYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNoZWNrZWQsY29tcGFjdCxjb250cm9scyxkZWNsYXJlLCcgK1xuICAgICdkZWZhdWx0LGRlZmF1bHRjaGVja2VkLGRlZmF1bHRtdXRlZCxkZWZhdWx0c2VsZWN0ZWQsZGVmZXIsZGlzYWJsZWQsJyArXG4gICAgJ2VuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsJyArXG4gICAgJ211dGVkLG5vaHJlZixub3Jlc2l6ZSxub3NoYWRlLG5vdmFsaWRhdGUsbm93cmFwLG9wZW4scGF1c2VvbmV4aXQscmVhZG9ubHksJyArXG4gICAgJ3JlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxzZWxlY3RlZCxzb3J0YWJsZSx0cmFuc2xhdGUsJyArXG4gICAgJ3RydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGUnXG4gICk7XG5cbiAgdmFyIHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG5cbiAgdmFyIGlzWGxpbmsgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuYW1lLmNoYXJBdCg1KSA9PT0gJzonICYmIG5hbWUuc2xpY2UoMCwgNSkgPT09ICd4bGluaydcbiAgfTtcblxuICB2YXIgZ2V0WGxpbmtQcm9wID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gaXNYbGluayhuYW1lKSA/IG5hbWUuc2xpY2UoNiwgbmFtZS5sZW5ndGgpIDogJydcbiAgfTtcblxuICB2YXIgaXNGYWxzeUF0dHJWYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZVxuICB9O1xuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGdlbkNsYXNzRm9yVm5vZGUgKHZub2RlKSB7XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIHZhciBwYXJlbnROb2RlID0gdm5vZGU7XG4gICAgdmFyIGNoaWxkTm9kZSA9IHZub2RlO1xuICAgIHdoaWxlIChpc0RlZihjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UpKSB7XG4gICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgaWYgKGNoaWxkTm9kZSAmJiBjaGlsZE5vZGUuZGF0YSkge1xuICAgICAgICBkYXRhID0gbWVyZ2VDbGFzc0RhdGEoY2hpbGROb2RlLmRhdGEsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAoaXNEZWYocGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50KSkge1xuICAgICAgaWYgKHBhcmVudE5vZGUgJiYgcGFyZW50Tm9kZS5kYXRhKSB7XG4gICAgICAgIGRhdGEgPSBtZXJnZUNsYXNzRGF0YShkYXRhLCBwYXJlbnROb2RlLmRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVuZGVyQ2xhc3MoZGF0YS5zdGF0aWNDbGFzcywgZGF0YS5jbGFzcylcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlQ2xhc3NEYXRhIChjaGlsZCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBjb25jYXQoY2hpbGQuc3RhdGljQ2xhc3MsIHBhcmVudC5zdGF0aWNDbGFzcyksXG4gICAgICBjbGFzczogaXNEZWYoY2hpbGQuY2xhc3MpXG4gICAgICAgID8gW2NoaWxkLmNsYXNzLCBwYXJlbnQuY2xhc3NdXG4gICAgICAgIDogcGFyZW50LmNsYXNzXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ2xhc3MgKFxuICAgIHN0YXRpY0NsYXNzLFxuICAgIGR5bmFtaWNDbGFzc1xuICApIHtcbiAgICBpZiAoaXNEZWYoc3RhdGljQ2xhc3MpIHx8IGlzRGVmKGR5bmFtaWNDbGFzcykpIHtcbiAgICAgIHJldHVybiBjb25jYXQoc3RhdGljQ2xhc3MsIHN0cmluZ2lmeUNsYXNzKGR5bmFtaWNDbGFzcykpXG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgICByZXR1cm4gYSA/IGIgPyAoYSArICcgJyArIGIpIDogYSA6IChiIHx8ICcnKVxuICB9XG5cbiAgZnVuY3Rpb24gc3RyaW5naWZ5Q2xhc3MgKHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5QXJyYXkodmFsdWUpXG4gICAgfVxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBzdHJpbmdpZnlPYmplY3QodmFsdWUpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeUFycmF5ICh2YWx1ZSkge1xuICAgIHZhciByZXMgPSAnJztcbiAgICB2YXIgc3RyaW5naWZpZWQ7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChpc0RlZihzdHJpbmdpZmllZCA9IHN0cmluZ2lmeUNsYXNzKHZhbHVlW2ldKSkgJiYgc3RyaW5naWZpZWQgIT09ICcnKSB7XG4gICAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgICByZXMgKz0gc3RyaW5naWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeU9iamVjdCAodmFsdWUpIHtcbiAgICB2YXIgcmVzID0gJyc7XG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgICAgcmVzICs9IGtleTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgLyogICovXG5cbiAgdmFyIG5hbWVzcGFjZU1hcCA9IHtcbiAgICBzdmc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgbWF0aDogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnXG4gIH07XG5cbiAgdmFyIGlzSFRNTFRhZyA9IG1ha2VNYXAoXG4gICAgJ2h0bWwsYm9keSxiYXNlLGhlYWQsbGluayxtZXRhLHN0eWxlLHRpdGxlLCcgK1xuICAgICdhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoMSxoMixoMyxoNCxoNSxoNixoZ3JvdXAsbmF2LHNlY3Rpb24sJyArXG4gICAgJ2RpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxwaWN0dXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLCcgK1xuICAgICdhLGIsYWJicixiZGksYmRvLGJyLGNpdGUsY29kZSxkYXRhLGRmbixlbSxpLGtiZCxtYXJrLHEscnAscnQscnRjLHJ1YnksJyArXG4gICAgJ3Msc2FtcCxzbWFsbCxzcGFuLHN0cm9uZyxzdWIsc3VwLHRpbWUsdSx2YXIsd2JyLGFyZWEsYXVkaW8sbWFwLHRyYWNrLHZpZGVvLCcgK1xuICAgICdlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucywnICtcbiAgICAnY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsJyArXG4gICAgJ2J1dHRvbixkYXRhbGlzdCxmaWVsZHNldCxmb3JtLGlucHV0LGxhYmVsLGxlZ2VuZCxtZXRlcixvcHRncm91cCxvcHRpb24sJyArXG4gICAgJ291dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsJyArXG4gICAgJ2RldGFpbHMsZGlhbG9nLG1lbnUsbWVudWl0ZW0sc3VtbWFyeSwnICtcbiAgICAnY29udGVudCxlbGVtZW50LHNoYWRvdyx0ZW1wbGF0ZSxibG9ja3F1b3RlLGlmcmFtZSx0Zm9vdCdcbiAgKTtcblxuICAvLyB0aGlzIG1hcCBpcyBpbnRlbnRpb25hbGx5IHNlbGVjdGl2ZSwgb25seSBjb3ZlcmluZyBTVkcgZWxlbWVudHMgdGhhdCBtYXlcbiAgLy8gY29udGFpbiBjaGlsZCBlbGVtZW50cy5cbiAgdmFyIGlzU1ZHID0gbWFrZU1hcChcbiAgICAnc3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udC1mYWNlLCcgK1xuICAgICdmb3JlaWduT2JqZWN0LGcsZ2x5cGgsaW1hZ2UsbGluZSxtYXJrZXIsbWFzayxtaXNzaW5nLWdseXBoLHBhdGgscGF0dGVybiwnICtcbiAgICAncG9seWdvbixwb2x5bGluZSxyZWN0LHN3aXRjaCxzeW1ib2wsdGV4dCx0ZXh0cGF0aCx0c3Bhbix1c2UsdmlldycsXG4gICAgdHJ1ZVxuICApO1xuXG4gIHZhciBpc1ByZVRhZyA9IGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIHRhZyA9PT0gJ3ByZSc7IH07XG5cbiAgdmFyIGlzUmVzZXJ2ZWRUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gICAgcmV0dXJuIGlzSFRNTFRhZyh0YWcpIHx8IGlzU1ZHKHRhZylcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRUYWdOYW1lc3BhY2UgKHRhZykge1xuICAgIGlmIChpc1NWRyh0YWcpKSB7XG4gICAgICByZXR1cm4gJ3N2ZydcbiAgICB9XG4gICAgLy8gYmFzaWMgc3VwcG9ydCBmb3IgTWF0aE1MXG4gICAgLy8gbm90ZSBpdCBkb2Vzbid0IHN1cHBvcnQgb3RoZXIgTWF0aE1MIGVsZW1lbnRzIGJlaW5nIGNvbXBvbmVudCByb290c1xuICAgIGlmICh0YWcgPT09ICdtYXRoJykge1xuICAgICAgcmV0dXJuICdtYXRoJ1xuICAgIH1cbiAgfVxuXG4gIHZhciB1bmtub3duRWxlbWVudENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZnVuY3Rpb24gaXNVbmtub3duRWxlbWVudCAodGFnKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmIChpc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICB0YWcgPSB0YWcudG9Mb3dlckNhc2UoKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmtub3duRWxlbWVudENhY2hlW3RhZ11cbiAgICB9XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmICh0YWcuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI4MjEwMzY0LzEwNzAyNDRcbiAgICAgIHJldHVybiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddID0gKFxuICAgICAgICBlbC5jb25zdHJ1Y3RvciA9PT0gd2luZG93LkhUTUxVbmtub3duRWxlbWVudCB8fFxuICAgICAgICBlbC5jb25zdHJ1Y3RvciA9PT0gd2luZG93LkhUTUxFbGVtZW50XG4gICAgICApKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKHVua25vd25FbGVtZW50Q2FjaGVbdGFnXSA9IC9IVE1MVW5rbm93bkVsZW1lbnQvLnRlc3QoZWwudG9TdHJpbmcoKSkpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlzVGV4dElucHV0VHlwZSA9IG1ha2VNYXAoJ3RleHQsbnVtYmVyLHBhc3N3b3JkLHNlYXJjaCxlbWFpbCx0ZWwsdXJsJyk7XG5cbiAgLyogICovXG5cbiAgLyoqXG4gICAqIFF1ZXJ5IGFuIGVsZW1lbnQgc2VsZWN0b3IgaWYgaXQncyBub3QgYW4gZWxlbWVudCBhbHJlYWR5LlxuICAgKi9cbiAgZnVuY3Rpb24gcXVlcnkgKGVsKSB7XG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdDYW5ub3QgZmluZCBlbGVtZW50OiAnICsgZWxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB9XG4gICAgICByZXR1cm4gc2VsZWN0ZWRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsXG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCQxICh0YWdOYW1lLCB2bm9kZSkge1xuICAgIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIGlmICh0YWdOYW1lICE9PSAnc2VsZWN0Jykge1xuICAgICAgcmV0dXJuIGVsbVxuICAgIH1cbiAgICAvLyBmYWxzZSBvciBudWxsIHdpbGwgcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgYnV0IHVuZGVmaW5lZCB3aWxsIG5vdFxuICAgIGlmICh2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEuYXR0cnMgJiYgdm5vZGUuZGF0YS5hdHRycy5tdWx0aXBsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbG0uc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsICdtdWx0aXBsZScpO1xuICAgIH1cbiAgICByZXR1cm4gZWxtXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMgKG5hbWVzcGFjZSwgdGFnTmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlTWFwW25hbWVzcGFjZV0sIHRhZ05hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSAodGV4dCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tbWVudCAodGV4dCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRleHQpXG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRCZWZvcmUgKHBhcmVudE5vZGUsIG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNoaWxkIChub2RlLCBjaGlsZCkge1xuICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kQ2hpbGQgKG5vZGUsIGNoaWxkKSB7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJlbnROb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZVxuICB9XG5cbiAgZnVuY3Rpb24gbmV4dFNpYmxpbmcgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5uZXh0U2libGluZ1xuICB9XG5cbiAgZnVuY3Rpb24gdGFnTmFtZSAobm9kZSkge1xuICAgIHJldHVybiBub2RlLnRhZ05hbWVcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRleHRDb250ZW50IChub2RlLCB0ZXh0KSB7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTdHlsZVNjb3BlIChub2RlLCBzY29wZUlkKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoc2NvcGVJZCwgJycpO1xuICB9XG5cbiAgdmFyIG5vZGVPcHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCQxLFxuICAgIGNyZWF0ZUVsZW1lbnROUzogY3JlYXRlRWxlbWVudE5TLFxuICAgIGNyZWF0ZVRleHROb2RlOiBjcmVhdGVUZXh0Tm9kZSxcbiAgICBjcmVhdGVDb21tZW50OiBjcmVhdGVDb21tZW50LFxuICAgIGluc2VydEJlZm9yZTogaW5zZXJ0QmVmb3JlLFxuICAgIHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcbiAgICBhcHBlbmRDaGlsZDogYXBwZW5kQ2hpbGQsXG4gICAgcGFyZW50Tm9kZTogcGFyZW50Tm9kZSxcbiAgICBuZXh0U2libGluZzogbmV4dFNpYmxpbmcsXG4gICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICBzZXRUZXh0Q29udGVudDogc2V0VGV4dENvbnRlbnQsXG4gICAgc2V0U3R5bGVTY29wZTogc2V0U3R5bGVTY29wZVxuICB9KTtcblxuICAvKiAgKi9cblxuICB2YXIgcmVmID0ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlIChfLCB2bm9kZSkge1xuICAgICAgcmVnaXN0ZXJSZWYodm5vZGUpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICAgICAgaWYgKG9sZFZub2RlLmRhdGEucmVmICE9PSB2bm9kZS5kYXRhLnJlZikge1xuICAgICAgICByZWdpc3RlclJlZihvbGRWbm9kZSwgdHJ1ZSk7XG4gICAgICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgICByZWdpc3RlclJlZih2bm9kZSwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUmVmICh2bm9kZSwgaXNSZW1vdmFsKSB7XG4gICAgdmFyIGtleSA9IHZub2RlLmRhdGEucmVmO1xuICAgIGlmICghaXNEZWYoa2V5KSkgeyByZXR1cm4gfVxuXG4gICAgdmFyIHZtID0gdm5vZGUuY29udGV4dDtcbiAgICB2YXIgcmVmID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgfHwgdm5vZGUuZWxtO1xuICAgIHZhciByZWZzID0gdm0uJHJlZnM7XG4gICAgaWYgKGlzUmVtb3ZhbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVmc1trZXldKSkge1xuICAgICAgICByZW1vdmUocmVmc1trZXldLCByZWYpO1xuICAgICAgfSBlbHNlIGlmIChyZWZzW2tleV0gPT09IHJlZikge1xuICAgICAgICByZWZzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2bm9kZS5kYXRhLnJlZkluRm9yKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZWZzW2tleV0pKSB7XG4gICAgICAgICAgcmVmc1trZXldID0gW3JlZl07XG4gICAgICAgIH0gZWxzZSBpZiAocmVmc1trZXldLmluZGV4T2YocmVmKSA8IDApIHtcbiAgICAgICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgICAgICByZWZzW2tleV0ucHVzaChyZWYpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWZzW2tleV0gPSByZWY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZpcnR1YWwgRE9NIHBhdGNoaW5nIGFsZ29yaXRobSBiYXNlZCBvbiBTbmFiYmRvbSBieVxuICAgKiBTaW1vbiBGcmlpcyBWaW5kdW0gKEBwYWxkZXBpbmQpXG4gICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vcGFsZGVwaW5kL3NuYWJiZG9tL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICpcbiAgICogbW9kaWZpZWQgYnkgRXZhbiBZb3UgKEB5eXg5OTA4MDMpXG4gICAqXG4gICAqIE5vdCB0eXBlLWNoZWNraW5nIHRoaXMgYmVjYXVzZSB0aGlzIGZpbGUgaXMgcGVyZi1jcml0aWNhbCBhbmQgdGhlIGNvc3RcbiAgICogb2YgbWFraW5nIGZsb3cgdW5kZXJzdGFuZCBpdCBpcyBub3Qgd29ydGggaXQuXG4gICAqL1xuXG4gIHZhciBlbXB0eU5vZGUgPSBuZXcgVk5vZGUoJycsIHt9LCBbXSk7XG5cbiAgdmFyIGhvb2tzID0gWydjcmVhdGUnLCAnYWN0aXZhdGUnLCAndXBkYXRlJywgJ3JlbW92ZScsICdkZXN0cm95J107XG5cbiAgZnVuY3Rpb24gc2FtZVZub2RlIChhLCBiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEua2V5ID09PSBiLmtleSAmJiAoXG4gICAgICAgIChcbiAgICAgICAgICBhLnRhZyA9PT0gYi50YWcgJiZcbiAgICAgICAgICBhLmlzQ29tbWVudCA9PT0gYi5pc0NvbW1lbnQgJiZcbiAgICAgICAgICBpc0RlZihhLmRhdGEpID09PSBpc0RlZihiLmRhdGEpICYmXG4gICAgICAgICAgc2FtZUlucHV0VHlwZShhLCBiKVxuICAgICAgICApIHx8IChcbiAgICAgICAgICBpc1RydWUoYS5pc0FzeW5jUGxhY2Vob2xkZXIpICYmXG4gICAgICAgICAgYS5hc3luY0ZhY3RvcnkgPT09IGIuYXN5bmNGYWN0b3J5ICYmXG4gICAgICAgICAgaXNVbmRlZihiLmFzeW5jRmFjdG9yeS5lcnJvcilcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhbWVJbnB1dFR5cGUgKGEsIGIpIHtcbiAgICBpZiAoYS50YWcgIT09ICdpbnB1dCcpIHsgcmV0dXJuIHRydWUgfVxuICAgIHZhciBpO1xuICAgIHZhciB0eXBlQSA9IGlzRGVmKGkgPSBhLmRhdGEpICYmIGlzRGVmKGkgPSBpLmF0dHJzKSAmJiBpLnR5cGU7XG4gICAgdmFyIHR5cGVCID0gaXNEZWYoaSA9IGIuZGF0YSkgJiYgaXNEZWYoaSA9IGkuYXR0cnMpICYmIGkudHlwZTtcbiAgICByZXR1cm4gdHlwZUEgPT09IHR5cGVCIHx8IGlzVGV4dElucHV0VHlwZSh0eXBlQSkgJiYgaXNUZXh0SW5wdXRUeXBlKHR5cGVCKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5VG9PbGRJZHggKGNoaWxkcmVuLCBiZWdpbklkeCwgZW5kSWR4KSB7XG4gICAgdmFyIGksIGtleTtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZm9yIChpID0gYmVnaW5JZHg7IGkgPD0gZW5kSWR4OyArK2kpIHtcbiAgICAgIGtleSA9IGNoaWxkcmVuW2ldLmtleTtcbiAgICAgIGlmIChpc0RlZihrZXkpKSB7IG1hcFtrZXldID0gaTsgfVxuICAgIH1cbiAgICByZXR1cm4gbWFwXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXRjaEZ1bmN0aW9uIChiYWNrZW5kKSB7XG4gICAgdmFyIGksIGo7XG4gICAgdmFyIGNicyA9IHt9O1xuXG4gICAgdmFyIG1vZHVsZXMgPSBiYWNrZW5kLm1vZHVsZXM7XG4gICAgdmFyIG5vZGVPcHMgPSBiYWNrZW5kLm5vZGVPcHM7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNic1tob29rc1tpXV0gPSBbXTtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBtb2R1bGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIGlmIChpc0RlZihtb2R1bGVzW2pdW2hvb2tzW2ldXSkpIHtcbiAgICAgICAgICBjYnNbaG9va3NbaV1dLnB1c2gobW9kdWxlc1tqXVtob29rc1tpXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1wdHlOb2RlQXQgKGVsbSkge1xuICAgICAgcmV0dXJuIG5ldyBWTm9kZShub2RlT3BzLnRhZ05hbWUoZWxtKS50b0xvd2VyQ2FzZSgpLCB7fSwgW10sIHVuZGVmaW5lZCwgZWxtKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJtQ2IgKGNoaWxkRWxtLCBsaXN0ZW5lcnMpIHtcbiAgICAgIGZ1bmN0aW9uIHJlbW92ZSQkMSAoKSB7XG4gICAgICAgIGlmICgtLXJlbW92ZSQkMS5saXN0ZW5lcnMgPT09IDApIHtcbiAgICAgICAgICByZW1vdmVOb2RlKGNoaWxkRWxtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVtb3ZlJCQxLmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICAgIHJldHVybiByZW1vdmUkJDFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVOb2RlIChlbCkge1xuICAgICAgdmFyIHBhcmVudCA9IG5vZGVPcHMucGFyZW50Tm9kZShlbCk7XG4gICAgICAvLyBlbGVtZW50IG1heSBoYXZlIGFscmVhZHkgYmVlbiByZW1vdmVkIGR1ZSB0byB2LWh0bWwgLyB2LXRleHRcbiAgICAgIGlmIChpc0RlZihwYXJlbnQpKSB7XG4gICAgICAgIG5vZGVPcHMucmVtb3ZlQ2hpbGQocGFyZW50LCBlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNVbmtub3duRWxlbWVudCQkMSAodm5vZGUsIGluVlByZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgIWluVlByZSAmJlxuICAgICAgICAhdm5vZGUubnMgJiZcbiAgICAgICAgIShcbiAgICAgICAgICBjb25maWcuaWdub3JlZEVsZW1lbnRzLmxlbmd0aCAmJlxuICAgICAgICAgIGNvbmZpZy5pZ25vcmVkRWxlbWVudHMuc29tZShmdW5jdGlvbiAoaWdub3JlKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNSZWdFeHAoaWdub3JlKVxuICAgICAgICAgICAgICA/IGlnbm9yZS50ZXN0KHZub2RlLnRhZylcbiAgICAgICAgICAgICAgOiBpZ25vcmUgPT09IHZub2RlLnRhZ1xuICAgICAgICAgIH0pXG4gICAgICAgICkgJiZcbiAgICAgICAgY29uZmlnLmlzVW5rbm93bkVsZW1lbnQodm5vZGUudGFnKVxuICAgICAgKVxuICAgIH1cblxuICAgIHZhciBjcmVhdGluZ0VsbUluVlByZSA9IDA7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVFbG0gKFxuICAgICAgdm5vZGUsXG4gICAgICBpbnNlcnRlZFZub2RlUXVldWUsXG4gICAgICBwYXJlbnRFbG0sXG4gICAgICByZWZFbG0sXG4gICAgICBuZXN0ZWQsXG4gICAgICBvd25lckFycmF5LFxuICAgICAgaW5kZXhcbiAgICApIHtcbiAgICAgIGlmIChpc0RlZih2bm9kZS5lbG0pICYmIGlzRGVmKG93bmVyQXJyYXkpKSB7XG4gICAgICAgIC8vIFRoaXMgdm5vZGUgd2FzIHVzZWQgaW4gYSBwcmV2aW91cyByZW5kZXIhXG4gICAgICAgIC8vIG5vdyBpdCdzIHVzZWQgYXMgYSBuZXcgbm9kZSwgb3ZlcndyaXRpbmcgaXRzIGVsbSB3b3VsZCBjYXVzZVxuICAgICAgICAvLyBwb3RlbnRpYWwgcGF0Y2ggZXJyb3JzIGRvd24gdGhlIHJvYWQgd2hlbiBpdCdzIHVzZWQgYXMgYW4gaW5zZXJ0aW9uXG4gICAgICAgIC8vIHJlZmVyZW5jZSBub2RlLiBJbnN0ZWFkLCB3ZSBjbG9uZSB0aGUgbm9kZSBvbi1kZW1hbmQgYmVmb3JlIGNyZWF0aW5nXG4gICAgICAgIC8vIGFzc29jaWF0ZWQgRE9NIGVsZW1lbnQgZm9yIGl0LlxuICAgICAgICB2bm9kZSA9IG93bmVyQXJyYXlbaW5kZXhdID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHZub2RlLmlzUm9vdEluc2VydCA9ICFuZXN0ZWQ7IC8vIGZvciB0cmFuc2l0aW9uIGVudGVyIGNoZWNrXG4gICAgICBpZiAoY3JlYXRlQ29tcG9uZW50KHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICB2YXIgdGFnID0gdm5vZGUudGFnO1xuICAgICAgaWYgKGlzRGVmKHRhZykpIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEucHJlKSB7XG4gICAgICAgICAgICBjcmVhdGluZ0VsbUluVlByZSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNVbmtub3duRWxlbWVudCQkMSh2bm9kZSwgY3JlYXRpbmdFbG1JblZQcmUpKSB7XG4gICAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgICAnVW5rbm93biBjdXN0b20gZWxlbWVudDogPCcgKyB0YWcgKyAnPiAtIGRpZCB5b3UgJyArXG4gICAgICAgICAgICAgICdyZWdpc3RlciB0aGUgY29tcG9uZW50IGNvcnJlY3RseT8gRm9yIHJlY3Vyc2l2ZSBjb21wb25lbnRzLCAnICtcbiAgICAgICAgICAgICAgJ21ha2Ugc3VyZSB0byBwcm92aWRlIHRoZSBcIm5hbWVcIiBvcHRpb24uJyxcbiAgICAgICAgICAgICAgdm5vZGUuY29udGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2bm9kZS5lbG0gPSB2bm9kZS5uc1xuICAgICAgICAgID8gbm9kZU9wcy5jcmVhdGVFbGVtZW50TlModm5vZGUubnMsIHRhZylcbiAgICAgICAgICA6IG5vZGVPcHMuY3JlYXRlRWxlbWVudCh0YWcsIHZub2RlKTtcbiAgICAgICAgc2V0U2NvcGUodm5vZGUpO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICB7XG4gICAgICAgICAgY3JlYXRlQ2hpbGRyZW4odm5vZGUsIGNoaWxkcmVuLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEucHJlKSB7XG4gICAgICAgICAgY3JlYXRpbmdFbG1JblZQcmUtLTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc1RydWUodm5vZGUuaXNDb21tZW50KSkge1xuICAgICAgICB2bm9kZS5lbG0gPSBub2RlT3BzLmNyZWF0ZUNvbW1lbnQodm5vZGUudGV4dCk7XG4gICAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZub2RlLmVsbSA9IG5vZGVPcHMuY3JlYXRlVGV4dE5vZGUodm5vZGUudGV4dCk7XG4gICAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSB7XG4gICAgICB2YXIgaSA9IHZub2RlLmRhdGE7XG4gICAgICBpZiAoaXNEZWYoaSkpIHtcbiAgICAgICAgdmFyIGlzUmVhY3RpdmF0ZWQgPSBpc0RlZih2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkgJiYgaS5rZWVwQWxpdmU7XG4gICAgICAgIGlmIChpc0RlZihpID0gaS5ob29rKSAmJiBpc0RlZihpID0gaS5pbml0KSkge1xuICAgICAgICAgIGkodm5vZGUsIGZhbHNlIC8qIGh5ZHJhdGluZyAqLyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWZ0ZXIgY2FsbGluZyB0aGUgaW5pdCBob29rLCBpZiB0aGUgdm5vZGUgaXMgYSBjaGlsZCBjb21wb25lbnRcbiAgICAgICAgLy8gaXQgc2hvdWxkJ3ZlIGNyZWF0ZWQgYSBjaGlsZCBpbnN0YW5jZSBhbmQgbW91bnRlZCBpdC4gdGhlIGNoaWxkXG4gICAgICAgIC8vIGNvbXBvbmVudCBhbHNvIGhhcyBzZXQgdGhlIHBsYWNlaG9sZGVyIHZub2RlJ3MgZWxtLlxuICAgICAgICAvLyBpbiB0aGF0IGNhc2Ugd2UgY2FuIGp1c3QgcmV0dXJuIHRoZSBlbGVtZW50IGFuZCBiZSBkb25lLlxuICAgICAgICBpZiAoaXNEZWYodm5vZGUuY29tcG9uZW50SW5zdGFuY2UpKSB7XG4gICAgICAgICAgaW5pdENvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gICAgICAgICAgaWYgKGlzVHJ1ZShpc1JlYWN0aXZhdGVkKSkge1xuICAgICAgICAgICAgcmVhY3RpdmF0ZUNvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0Q29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgICBpZiAoaXNEZWYodm5vZGUuZGF0YS5wZW5kaW5nSW5zZXJ0KSkge1xuICAgICAgICBpbnNlcnRlZFZub2RlUXVldWUucHVzaC5hcHBseShpbnNlcnRlZFZub2RlUXVldWUsIHZub2RlLmRhdGEucGVuZGluZ0luc2VydCk7XG4gICAgICAgIHZub2RlLmRhdGEucGVuZGluZ0luc2VydCA9IG51bGw7XG4gICAgICB9XG4gICAgICB2bm9kZS5lbG0gPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS4kZWw7XG4gICAgICBpZiAoaXNQYXRjaGFibGUodm5vZGUpKSB7XG4gICAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICBzZXRTY29wZSh2bm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbXB0eSBjb21wb25lbnQgcm9vdC5cbiAgICAgICAgLy8gc2tpcCBhbGwgZWxlbWVudC1yZWxhdGVkIG1vZHVsZXMgZXhjZXB0IGZvciByZWYgKCMzNDU1KVxuICAgICAgICByZWdpc3RlclJlZih2bm9kZSk7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpbnZva2UgdGhlIGluc2VydCBob29rXG4gICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFjdGl2YXRlQ29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSkge1xuICAgICAgdmFyIGk7XG4gICAgICAvLyBoYWNrIGZvciAjNDMzOTogYSByZWFjdGl2YXRlZCBjb21wb25lbnQgd2l0aCBpbm5lciB0cmFuc2l0aW9uXG4gICAgICAvLyBkb2VzIG5vdCB0cmlnZ2VyIGJlY2F1c2UgdGhlIGlubmVyIG5vZGUncyBjcmVhdGVkIGhvb2tzIGFyZSBub3QgY2FsbGVkXG4gICAgICAvLyBhZ2Fpbi4gSXQncyBub3QgaWRlYWwgdG8gaW52b2x2ZSBtb2R1bGUtc3BlY2lmaWMgbG9naWMgaW4gaGVyZSBidXRcbiAgICAgIC8vIHRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhIGJldHRlciB3YXkgdG8gZG8gaXQuXG4gICAgICB2YXIgaW5uZXJOb2RlID0gdm5vZGU7XG4gICAgICB3aGlsZSAoaW5uZXJOb2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgIGlubmVyTm9kZSA9IGlubmVyTm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XG4gICAgICAgIGlmIChpc0RlZihpID0gaW5uZXJOb2RlLmRhdGEpICYmIGlzRGVmKGkgPSBpLnRyYW5zaXRpb24pKSB7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5hY3RpdmF0ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY2JzLmFjdGl2YXRlW2ldKGVtcHR5Tm9kZSwgaW5uZXJOb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2goaW5uZXJOb2RlKTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB1bmxpa2UgYSBuZXdseSBjcmVhdGVkIGNvbXBvbmVudCxcbiAgICAgIC8vIGEgcmVhY3RpdmF0ZWQga2VlcC1hbGl2ZSBjb21wb25lbnQgZG9lc24ndCBpbnNlcnQgaXRzZWxmXG4gICAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0IChwYXJlbnQsIGVsbSwgcmVmJCQxKSB7XG4gICAgICBpZiAoaXNEZWYocGFyZW50KSkge1xuICAgICAgICBpZiAoaXNEZWYocmVmJCQxKSkge1xuICAgICAgICAgIGlmIChub2RlT3BzLnBhcmVudE5vZGUocmVmJCQxKSA9PT0gcGFyZW50KSB7XG4gICAgICAgICAgICBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnQsIGVsbSwgcmVmJCQxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZU9wcy5hcHBlbmRDaGlsZChwYXJlbnQsIGVsbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDaGlsZHJlbiAodm5vZGUsIGNoaWxkcmVuLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICB7XG4gICAgICAgICAgY2hlY2tEdXBsaWNhdGVLZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY3JlYXRlRWxtKGNoaWxkcmVuW2ldLCBpbnNlcnRlZFZub2RlUXVldWUsIHZub2RlLmVsbSwgbnVsbCwgdHJ1ZSwgY2hpbGRyZW4sIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKHZub2RlLnRleHQpKSB7XG4gICAgICAgIG5vZGVPcHMuYXBwZW5kQ2hpbGQodm5vZGUuZWxtLCBub2RlT3BzLmNyZWF0ZVRleHROb2RlKFN0cmluZyh2bm9kZS50ZXh0KSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzUGF0Y2hhYmxlICh2bm9kZSkge1xuICAgICAgd2hpbGUgKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgIHZub2RlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzRGVmKHZub2RlLnRhZylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZva2VDcmVhdGVIb29rcyAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSQxKSB7XG4gICAgICAgIGNicy5jcmVhdGVbaSQxXShlbXB0eU5vZGUsIHZub2RlKTtcbiAgICAgIH1cbiAgICAgIGkgPSB2bm9kZS5kYXRhLmhvb2s7IC8vIFJldXNlIHZhcmlhYmxlXG4gICAgICBpZiAoaXNEZWYoaSkpIHtcbiAgICAgICAgaWYgKGlzRGVmKGkuY3JlYXRlKSkgeyBpLmNyZWF0ZShlbXB0eU5vZGUsIHZub2RlKTsgfVxuICAgICAgICBpZiAoaXNEZWYoaS5pbnNlcnQpKSB7IGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKTsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldCBzY29wZSBpZCBhdHRyaWJ1dGUgZm9yIHNjb3BlZCBDU1MuXG4gICAgLy8gdGhpcyBpcyBpbXBsZW1lbnRlZCBhcyBhIHNwZWNpYWwgY2FzZSB0byBhdm9pZCB0aGUgb3ZlcmhlYWRcbiAgICAvLyBvZiBnb2luZyB0aHJvdWdoIHRoZSBub3JtYWwgYXR0cmlidXRlIHBhdGNoaW5nIHByb2Nlc3MuXG4gICAgZnVuY3Rpb24gc2V0U2NvcGUgKHZub2RlKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuZm5TY29wZUlkKSkge1xuICAgICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhbmNlc3RvciA9IHZub2RlO1xuICAgICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgICBpZiAoaXNEZWYoaSA9IGFuY2VzdG9yLmNvbnRleHQpICYmIGlzRGVmKGkgPSBpLiRvcHRpb25zLl9zY29wZUlkKSkge1xuICAgICAgICAgICAgbm9kZU9wcy5zZXRTdHlsZVNjb3BlKHZub2RlLmVsbSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBmb3Igc2xvdCBjb250ZW50IHRoZXkgc2hvdWxkIGFsc28gZ2V0IHRoZSBzY29wZUlkIGZyb20gdGhlIGhvc3QgaW5zdGFuY2UuXG4gICAgICBpZiAoaXNEZWYoaSA9IGFjdGl2ZUluc3RhbmNlKSAmJlxuICAgICAgICBpICE9PSB2bm9kZS5jb250ZXh0ICYmXG4gICAgICAgIGkgIT09IHZub2RlLmZuQ29udGV4dCAmJlxuICAgICAgICBpc0RlZihpID0gaS4kb3B0aW9ucy5fc2NvcGVJZClcbiAgICAgICkge1xuICAgICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRWbm9kZXMgKHBhcmVudEVsbSwgcmVmRWxtLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICBjcmVhdGVFbG0odm5vZGVzW3N0YXJ0SWR4XSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSwgZmFsc2UsIHZub2Rlcywgc3RhcnRJZHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludm9rZURlc3Ryb3lIb29rICh2bm9kZSkge1xuICAgICAgdmFyIGksIGo7XG4gICAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmRlc3Ryb3kpKSB7IGkodm5vZGUpOyB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSkgeyBjYnMuZGVzdHJveVtpXSh2bm9kZSk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraikge1xuICAgICAgICAgIGludm9rZURlc3Ryb3lIb29rKHZub2RlLmNoaWxkcmVuW2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVZub2RlcyAocGFyZW50RWxtLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgpIHtcbiAgICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgICAgdmFyIGNoID0gdm5vZGVzW3N0YXJ0SWR4XTtcbiAgICAgICAgaWYgKGlzRGVmKGNoKSkge1xuICAgICAgICAgIGlmIChpc0RlZihjaC50YWcpKSB7XG4gICAgICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGNoKTtcbiAgICAgICAgICAgIGludm9rZURlc3Ryb3lIb29rKGNoKTtcbiAgICAgICAgICB9IGVsc2UgeyAvLyBUZXh0IG5vZGVcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoY2guZWxtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rICh2bm9kZSwgcm0pIHtcbiAgICAgIGlmIChpc0RlZihybSkgfHwgaXNEZWYodm5vZGUuZGF0YSkpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBjYnMucmVtb3ZlLmxlbmd0aCArIDE7XG4gICAgICAgIGlmIChpc0RlZihybSkpIHtcbiAgICAgICAgICAvLyB3ZSBoYXZlIGEgcmVjdXJzaXZlbHkgcGFzc2VkIGRvd24gcm0gY2FsbGJhY2tcbiAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgbGlzdGVuZXJzIGNvdW50XG4gICAgICAgICAgcm0ubGlzdGVuZXJzICs9IGxpc3RlbmVycztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkaXJlY3RseSByZW1vdmluZ1xuICAgICAgICAgIHJtID0gY3JlYXRlUm1DYih2bm9kZS5lbG0sIGxpc3RlbmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVjdXJzaXZlbHkgaW52b2tlIGhvb2tzIG9uIGNoaWxkIGNvbXBvbmVudCByb290IG5vZGVcbiAgICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkgJiYgaXNEZWYoaSA9IGkuX3Zub2RlKSAmJiBpc0RlZihpLmRhdGEpKSB7XG4gICAgICAgICAgcmVtb3ZlQW5kSW52b2tlUmVtb3ZlSG9vayhpLCBybSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5yZW1vdmUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjYnMucmVtb3ZlW2ldKHZub2RlLCBybSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5kYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnJlbW92ZSkpIHtcbiAgICAgICAgICBpKHZub2RlLCBybSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm0oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlTm9kZSh2bm9kZS5lbG0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuIChwYXJlbnRFbG0sIG9sZENoLCBuZXdDaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCByZW1vdmVPbmx5KSB7XG4gICAgICB2YXIgb2xkU3RhcnRJZHggPSAwO1xuICAgICAgdmFyIG5ld1N0YXJ0SWR4ID0gMDtcbiAgICAgIHZhciBvbGRFbmRJZHggPSBvbGRDaC5sZW5ndGggLSAxO1xuICAgICAgdmFyIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFswXTtcbiAgICAgIHZhciBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgICB2YXIgbmV3RW5kSWR4ID0gbmV3Q2gubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBuZXdTdGFydFZub2RlID0gbmV3Q2hbMF07XG4gICAgICB2YXIgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgICAgdmFyIG9sZEtleVRvSWR4LCBpZHhJbk9sZCwgdm5vZGVUb01vdmUsIHJlZkVsbTtcblxuICAgICAgLy8gcmVtb3ZlT25seSBpcyBhIHNwZWNpYWwgZmxhZyB1c2VkIG9ubHkgYnkgPHRyYW5zaXRpb24tZ3JvdXA+XG4gICAgICAvLyB0byBlbnN1cmUgcmVtb3ZlZCBlbGVtZW50cyBzdGF5IGluIGNvcnJlY3QgcmVsYXRpdmUgcG9zaXRpb25zXG4gICAgICAvLyBkdXJpbmcgbGVhdmluZyB0cmFuc2l0aW9uc1xuICAgICAgdmFyIGNhbk1vdmUgPSAhcmVtb3ZlT25seTtcblxuICAgICAge1xuICAgICAgICBjaGVja0R1cGxpY2F0ZUtleXMobmV3Q2gpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAob2xkU3RhcnRJZHggPD0gb2xkRW5kSWR4ICYmIG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgICBpZiAoaXNVbmRlZihvbGRTdGFydFZub2RlKSkge1xuICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTsgLy8gVm5vZGUgaGFzIGJlZW4gbW92ZWQgbGVmdFxuICAgICAgICB9IGVsc2UgaWYgKGlzVW5kZWYob2xkRW5kVm5vZGUpKSB7XG4gICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgICAgcGF0Y2hWbm9kZShvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdFbmRJZHgpO1xuICAgICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSkpIHsgLy8gVm5vZGUgbW92ZWQgcmlnaHRcbiAgICAgICAgICBwYXRjaFZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdFbmRJZHgpO1xuICAgICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgbm9kZU9wcy5uZXh0U2libGluZyhvbGRFbmRWbm9kZS5lbG0pKTtcbiAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKSkgeyAvLyBWbm9kZSBtb3ZlZCBsZWZ0XG4gICAgICAgICAgcGF0Y2hWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRFbmRWbm9kZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzVW5kZWYob2xkS2V5VG9JZHgpKSB7IG9sZEtleVRvSWR4ID0gY3JlYXRlS2V5VG9PbGRJZHgob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpOyB9XG4gICAgICAgICAgaWR4SW5PbGQgPSBpc0RlZihuZXdTdGFydFZub2RlLmtleSlcbiAgICAgICAgICAgID8gb2xkS2V5VG9JZHhbbmV3U3RhcnRWbm9kZS5rZXldXG4gICAgICAgICAgICA6IGZpbmRJZHhJbk9sZChuZXdTdGFydFZub2RlLCBvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgICAgICAgaWYgKGlzVW5kZWYoaWR4SW5PbGQpKSB7IC8vIE5ldyBlbGVtZW50XG4gICAgICAgICAgICBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBmYWxzZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdm5vZGVUb01vdmUgPSBvbGRDaFtpZHhJbk9sZF07XG4gICAgICAgICAgICBpZiAoc2FtZVZub2RlKHZub2RlVG9Nb3ZlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAgICAgICBwYXRjaFZub2RlKHZub2RlVG9Nb3ZlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgICAgICAgIG9sZENoW2lkeEluT2xkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgY2FuTW92ZSAmJiBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIHZub2RlVG9Nb3ZlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gc2FtZSBrZXkgYnV0IGRpZmZlcmVudCBlbGVtZW50LiB0cmVhdCBhcyBuZXcgZWxlbWVudFxuICAgICAgICAgICAgICBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBmYWxzZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICAgICAgcmVmRWxtID0gaXNVbmRlZihuZXdDaFtuZXdFbmRJZHggKyAxXSkgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uZWxtO1xuICAgICAgICBhZGRWbm9kZXMocGFyZW50RWxtLCByZWZFbG0sIG5ld0NoLCBuZXdTdGFydElkeCwgbmV3RW5kSWR4LCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgfSBlbHNlIGlmIChuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgICAgICByZW1vdmVWbm9kZXMocGFyZW50RWxtLCBvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tEdXBsaWNhdGVLZXlzIChjaGlsZHJlbikge1xuICAgICAgdmFyIHNlZW5LZXlzID0ge307XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB2bm9kZSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICB2YXIga2V5ID0gdm5vZGUua2V5O1xuICAgICAgICBpZiAoaXNEZWYoa2V5KSkge1xuICAgICAgICAgIGlmIChzZWVuS2V5c1trZXldKSB7XG4gICAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgICAoXCJEdXBsaWNhdGUga2V5cyBkZXRlY3RlZDogJ1wiICsga2V5ICsgXCInLiBUaGlzIG1heSBjYXVzZSBhbiB1cGRhdGUgZXJyb3IuXCIpLFxuICAgICAgICAgICAgICB2bm9kZS5jb250ZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWVuS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kSWR4SW5PbGQgKG5vZGUsIG9sZENoLCBzdGFydCwgZW5kKSB7XG4gICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICB2YXIgYyA9IG9sZENoW2ldO1xuICAgICAgICBpZiAoaXNEZWYoYykgJiYgc2FtZVZub2RlKG5vZGUsIGMpKSB7IHJldHVybiBpIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXRjaFZub2RlIChcbiAgICAgIG9sZFZub2RlLFxuICAgICAgdm5vZGUsXG4gICAgICBpbnNlcnRlZFZub2RlUXVldWUsXG4gICAgICBvd25lckFycmF5LFxuICAgICAgaW5kZXgsXG4gICAgICByZW1vdmVPbmx5XG4gICAgKSB7XG4gICAgICBpZiAob2xkVm5vZGUgPT09IHZub2RlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEZWYodm5vZGUuZWxtKSAmJiBpc0RlZihvd25lckFycmF5KSkge1xuICAgICAgICAvLyBjbG9uZSByZXVzZWQgdm5vZGVcbiAgICAgICAgdm5vZGUgPSBvd25lckFycmF5W2luZGV4XSA9IGNsb25lVk5vZGUodm5vZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxtID0gdm5vZGUuZWxtID0gb2xkVm5vZGUuZWxtO1xuXG4gICAgICBpZiAoaXNUcnVlKG9sZFZub2RlLmlzQXN5bmNQbGFjZWhvbGRlcikpIHtcbiAgICAgICAgaWYgKGlzRGVmKHZub2RlLmFzeW5jRmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICBoeWRyYXRlKG9sZFZub2RlLmVsbSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdm5vZGUuaXNBc3luY1BsYWNlaG9sZGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gcmV1c2UgZWxlbWVudCBmb3Igc3RhdGljIHRyZWVzLlxuICAgICAgLy8gbm90ZSB3ZSBvbmx5IGRvIHRoaXMgaWYgdGhlIHZub2RlIGlzIGNsb25lZCAtXG4gICAgICAvLyBpZiB0aGUgbmV3IG5vZGUgaXMgbm90IGNsb25lZCBpdCBtZWFucyB0aGUgcmVuZGVyIGZ1bmN0aW9ucyBoYXZlIGJlZW5cbiAgICAgIC8vIHJlc2V0IGJ5IHRoZSBob3QtcmVsb2FkLWFwaSBhbmQgd2UgbmVlZCB0byBkbyBhIHByb3BlciByZS1yZW5kZXIuXG4gICAgICBpZiAoaXNUcnVlKHZub2RlLmlzU3RhdGljKSAmJlxuICAgICAgICBpc1RydWUob2xkVm5vZGUuaXNTdGF0aWMpICYmXG4gICAgICAgIHZub2RlLmtleSA9PT0gb2xkVm5vZGUua2V5ICYmXG4gICAgICAgIChpc1RydWUodm5vZGUuaXNDbG9uZWQpIHx8IGlzVHJ1ZSh2bm9kZS5pc09uY2UpKVxuICAgICAgKSB7XG4gICAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICAgIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5wcmVwYXRjaCkpIHtcbiAgICAgICAgaShvbGRWbm9kZSwgdm5vZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2xkQ2ggPSBvbGRWbm9kZS5jaGlsZHJlbjtcbiAgICAgIHZhciBjaCA9IHZub2RlLmNoaWxkcmVuO1xuICAgICAgaWYgKGlzRGVmKGRhdGEpICYmIGlzUGF0Y2hhYmxlKHZub2RlKSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLnVwZGF0ZS5sZW5ndGg7ICsraSkgeyBjYnMudXBkYXRlW2ldKG9sZFZub2RlLCB2bm9kZSk7IH1cbiAgICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnVwZGF0ZSkpIHsgaShvbGRWbm9kZSwgdm5vZGUpOyB9XG4gICAgICB9XG4gICAgICBpZiAoaXNVbmRlZih2bm9kZS50ZXh0KSkge1xuICAgICAgICBpZiAoaXNEZWYob2xkQ2gpICYmIGlzRGVmKGNoKSkge1xuICAgICAgICAgIGlmIChvbGRDaCAhPT0gY2gpIHsgdXBkYXRlQ2hpbGRyZW4oZWxtLCBvbGRDaCwgY2gsIGluc2VydGVkVm5vZGVRdWV1ZSwgcmVtb3ZlT25seSk7IH1cbiAgICAgICAgfSBlbHNlIGlmIChpc0RlZihjaCkpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGVja0R1cGxpY2F0ZUtleXMoY2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpIHsgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sICcnKTsgfVxuICAgICAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIGNoLCAwLCBjaC5sZW5ndGggLSAxLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZENoKSkge1xuICAgICAgICAgIHJlbW92ZVZub2RlcyhlbG0sIG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRWbm9kZS50ZXh0KSkge1xuICAgICAgICAgIG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob2xkVm5vZGUudGV4dCAhPT0gdm5vZGUudGV4dCkge1xuICAgICAgICBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgdm5vZGUudGV4dCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnBvc3RwYXRjaCkpIHsgaShvbGRWbm9kZSwgdm5vZGUpOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52b2tlSW5zZXJ0SG9vayAodm5vZGUsIHF1ZXVlLCBpbml0aWFsKSB7XG4gICAgICAvLyBkZWxheSBpbnNlcnQgaG9va3MgZm9yIGNvbXBvbmVudCByb290IG5vZGVzLCBpbnZva2UgdGhlbSBhZnRlciB0aGVcbiAgICAgIC8vIGVsZW1lbnQgaXMgcmVhbGx5IGluc2VydGVkXG4gICAgICBpZiAoaXNUcnVlKGluaXRpYWwpICYmIGlzRGVmKHZub2RlLnBhcmVudCkpIHtcbiAgICAgICAgdm5vZGUucGFyZW50LmRhdGEucGVuZGluZ0luc2VydCA9IHF1ZXVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIHF1ZXVlW2ldLmRhdGEuaG9vay5pbnNlcnQocXVldWVbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGh5ZHJhdGlvbkJhaWxlZCA9IGZhbHNlO1xuICAgIC8vIGxpc3Qgb2YgbW9kdWxlcyB0aGF0IGNhbiBza2lwIGNyZWF0ZSBob29rIGR1cmluZyBoeWRyYXRpb24gYmVjYXVzZSB0aGV5XG4gICAgLy8gYXJlIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIGNsaWVudCBvciBoYXMgbm8gbmVlZCBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICAvLyBOb3RlOiBzdHlsZSBpcyBleGNsdWRlZCBiZWNhdXNlIGl0IHJlbGllcyBvbiBpbml0aWFsIGNsb25lIGZvciBmdXR1cmVcbiAgICAvLyBkZWVwIHVwZGF0ZXMgKCM3MDYzKS5cbiAgICB2YXIgaXNSZW5kZXJlZE1vZHVsZSA9IG1ha2VNYXAoJ2F0dHJzLGNsYXNzLHN0YXRpY0NsYXNzLHN0YXRpY1N0eWxlLGtleScpO1xuXG4gICAgLy8gTm90ZTogdGhpcyBpcyBhIGJyb3dzZXItb25seSBmdW5jdGlvbiBzbyB3ZSBjYW4gYXNzdW1lIGVsbXMgYXJlIERPTSBub2Rlcy5cbiAgICBmdW5jdGlvbiBoeWRyYXRlIChlbG0sIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIGluVlByZSkge1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgdGFnID0gdm5vZGUudGFnO1xuICAgICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICBpblZQcmUgPSBpblZQcmUgfHwgKGRhdGEgJiYgZGF0YS5wcmUpO1xuICAgICAgdm5vZGUuZWxtID0gZWxtO1xuXG4gICAgICBpZiAoaXNUcnVlKHZub2RlLmlzQ29tbWVudCkgJiYgaXNEZWYodm5vZGUuYXN5bmNGYWN0b3J5KSkge1xuICAgICAgICB2bm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgLy8gYXNzZXJ0IG5vZGUgbWF0Y2hcbiAgICAgIHtcbiAgICAgICAgaWYgKCFhc3NlcnROb2RlTWF0Y2goZWxtLCB2bm9kZSwgaW5WUHJlKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmluaXQpKSB7IGkodm5vZGUsIHRydWUgLyogaHlkcmF0aW5nICovKTsgfVxuICAgICAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xuICAgICAgICAgIC8vIGNoaWxkIGNvbXBvbmVudC4gaXQgc2hvdWxkIGhhdmUgaHlkcmF0ZWQgaXRzIG93biB0cmVlLlxuICAgICAgICAgIGluaXRDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzRGVmKHRhZykpIHtcbiAgICAgICAgaWYgKGlzRGVmKGNoaWxkcmVuKSkge1xuICAgICAgICAgIC8vIGVtcHR5IGVsZW1lbnQsIGFsbG93IGNsaWVudCB0byBwaWNrIHVwIGFuZCBwb3B1bGF0ZSBjaGlsZHJlblxuICAgICAgICAgIGlmICghZWxtLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgY3JlYXRlQ2hpbGRyZW4odm5vZGUsIGNoaWxkcmVuLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB2LWh0bWwgYW5kIGRvbVByb3BzOiBpbm5lckhUTUxcbiAgICAgICAgICAgIGlmIChpc0RlZihpID0gZGF0YSkgJiYgaXNEZWYoaSA9IGkuZG9tUHJvcHMpICYmIGlzRGVmKGkgPSBpLmlubmVySFRNTCkpIHtcbiAgICAgICAgICAgICAgaWYgKGkgIT09IGVsbS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgICAhaHlkcmF0aW9uQmFpbGVkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBoeWRyYXRpb25CYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdQYXJlbnQ6ICcsIGVsbSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NlcnZlciBpbm5lckhUTUw6ICcsIGkpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdjbGllbnQgaW5uZXJIVE1MOiAnLCBlbG0uaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGl0ZXJhdGUgYW5kIGNvbXBhcmUgY2hpbGRyZW4gbGlzdHNcbiAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICB2YXIgY2hpbGROb2RlID0gZWxtLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGNoaWxkcmVuLmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkTm9kZSB8fCAhaHlkcmF0ZShjaGlsZE5vZGUsIGNoaWxkcmVuW2kkMV0sIGluc2VydGVkVm5vZGVRdWV1ZSwgaW5WUHJlKSkge1xuICAgICAgICAgICAgICAgICAgY2hpbGRyZW5NYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGlmIGNoaWxkTm9kZSBpcyBub3QgbnVsbCwgaXQgbWVhbnMgdGhlIGFjdHVhbCBjaGlsZE5vZGVzIGxpc3QgaXNcbiAgICAgICAgICAgICAgLy8gbG9uZ2VyIHRoYW4gdGhlIHZpcnR1YWwgY2hpbGRyZW4gbGlzdC5cbiAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbk1hdGNoIHx8IGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICAgICFoeWRyYXRpb25CYWlsZWRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGh5ZHJhdGlvbkJhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BhcmVudDogJywgZWxtKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWlzbWF0Y2hpbmcgY2hpbGROb2RlcyB2cy4gVk5vZGVzOiAnLCBlbG0uY2hpbGROb2RlcywgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgICB2YXIgZnVsbEludm9rZSA9IGZhbHNlO1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIWlzUmVuZGVyZWRNb2R1bGUoa2V5KSkge1xuICAgICAgICAgICAgICBmdWxsSW52b2tlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZnVsbEludm9rZSAmJiBkYXRhWydjbGFzcyddKSB7XG4gICAgICAgICAgICAvLyBlbnN1cmUgY29sbGVjdGluZyBkZXBzIGZvciBkZWVwIGNsYXNzIGJpbmRpbmdzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICAgICAgdHJhdmVyc2UoZGF0YVsnY2xhc3MnXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsbS5kYXRhICE9PSB2bm9kZS50ZXh0KSB7XG4gICAgICAgIGVsbS5kYXRhID0gdm5vZGUudGV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXNzZXJ0Tm9kZU1hdGNoIChub2RlLCB2bm9kZSwgaW5WUHJlKSB7XG4gICAgICBpZiAoaXNEZWYodm5vZGUudGFnKSkge1xuICAgICAgICByZXR1cm4gdm5vZGUudGFnLmluZGV4T2YoJ3Z1ZS1jb21wb25lbnQnKSA9PT0gMCB8fCAoXG4gICAgICAgICAgIWlzVW5rbm93bkVsZW1lbnQkJDEodm5vZGUsIGluVlByZSkgJiZcbiAgICAgICAgICB2bm9kZS50YWcudG9Mb3dlckNhc2UoKSA9PT0gKG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09ICh2bm9kZS5pc0NvbW1lbnQgPyA4IDogMylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSwgaHlkcmF0aW5nLCByZW1vdmVPbmx5KSB7XG4gICAgICBpZiAoaXNVbmRlZih2bm9kZSkpIHtcbiAgICAgICAgaWYgKGlzRGVmKG9sZFZub2RlKSkgeyBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7IH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHZhciBpc0luaXRpYWxQYXRjaCA9IGZhbHNlO1xuICAgICAgdmFyIGluc2VydGVkVm5vZGVRdWV1ZSA9IFtdO1xuXG4gICAgICBpZiAoaXNVbmRlZihvbGRWbm9kZSkpIHtcbiAgICAgICAgLy8gZW1wdHkgbW91bnQgKGxpa2VseSBhcyBjb21wb25lbnQpLCBjcmVhdGUgbmV3IHJvb3QgZWxlbWVudFxuICAgICAgICBpc0luaXRpYWxQYXRjaCA9IHRydWU7XG4gICAgICAgIGNyZWF0ZUVsbSh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpc1JlYWxFbGVtZW50ID0gaXNEZWYob2xkVm5vZGUubm9kZVR5cGUpO1xuICAgICAgICBpZiAoIWlzUmVhbEVsZW1lbnQgJiYgc2FtZVZub2RlKG9sZFZub2RlLCB2bm9kZSkpIHtcbiAgICAgICAgICAvLyBwYXRjaCBleGlzdGluZyByb290IG5vZGVcbiAgICAgICAgICBwYXRjaFZub2RlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBudWxsLCBudWxsLCByZW1vdmVPbmx5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNSZWFsRWxlbWVudCkge1xuICAgICAgICAgICAgLy8gbW91bnRpbmcgdG8gYSByZWFsIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgc2VydmVyLXJlbmRlcmVkIGNvbnRlbnQgYW5kIGlmIHdlIGNhbiBwZXJmb3JtXG4gICAgICAgICAgICAvLyBhIHN1Y2Nlc3NmdWwgaHlkcmF0aW9uLlxuICAgICAgICAgICAgaWYgKG9sZFZub2RlLm5vZGVUeXBlID09PSAxICYmIG9sZFZub2RlLmhhc0F0dHJpYnV0ZShTU1JfQVRUUikpIHtcbiAgICAgICAgICAgICAgb2xkVm5vZGUucmVtb3ZlQXR0cmlidXRlKFNTUl9BVFRSKTtcbiAgICAgICAgICAgICAgaHlkcmF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1RydWUoaHlkcmF0aW5nKSkge1xuICAgICAgICAgICAgICBpZiAoaHlkcmF0ZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkpIHtcbiAgICAgICAgICAgICAgICBpbnZva2VJbnNlcnRIb29rKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvbGRWbm9kZVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAgICAgICAnVGhlIGNsaWVudC1zaWRlIHJlbmRlcmVkIHZpcnR1YWwgRE9NIHRyZWUgaXMgbm90IG1hdGNoaW5nICcgK1xuICAgICAgICAgICAgICAgICAgJ3NlcnZlci1yZW5kZXJlZCBjb250ZW50LiBUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgaW5jb3JyZWN0ICcgK1xuICAgICAgICAgICAgICAgICAgJ0hUTUwgbWFya3VwLCBmb3IgZXhhbXBsZSBuZXN0aW5nIGJsb2NrLWxldmVsIGVsZW1lbnRzIGluc2lkZSAnICtcbiAgICAgICAgICAgICAgICAgICc8cD4sIG9yIG1pc3NpbmcgPHRib2R5Pi4gQmFpbGluZyBoeWRyYXRpb24gYW5kIHBlcmZvcm1pbmcgJyArXG4gICAgICAgICAgICAgICAgICAnZnVsbCBjbGllbnQtc2lkZSByZW5kZXIuJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVpdGhlciBub3Qgc2VydmVyLXJlbmRlcmVkLCBvciBoeWRyYXRpb24gZmFpbGVkLlxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGVtcHR5IG5vZGUgYW5kIHJlcGxhY2UgaXRcbiAgICAgICAgICAgIG9sZFZub2RlID0gZW1wdHlOb2RlQXQob2xkVm5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJlcGxhY2luZyBleGlzdGluZyBlbGVtZW50XG4gICAgICAgICAgdmFyIG9sZEVsbSA9IG9sZFZub2RlLmVsbTtcbiAgICAgICAgICB2YXIgcGFyZW50RWxtID0gbm9kZU9wcy5wYXJlbnROb2RlKG9sZEVsbSk7XG5cbiAgICAgICAgICAvLyBjcmVhdGUgbmV3IG5vZGVcbiAgICAgICAgICBjcmVhdGVFbG0oXG4gICAgICAgICAgICB2bm9kZSxcbiAgICAgICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZSxcbiAgICAgICAgICAgIC8vIGV4dHJlbWVseSByYXJlIGVkZ2UgY2FzZTogZG8gbm90IGluc2VydCBpZiBvbGQgZWxlbWVudCBpcyBpbiBhXG4gICAgICAgICAgICAvLyBsZWF2aW5nIHRyYW5zaXRpb24uIE9ubHkgaGFwcGVucyB3aGVuIGNvbWJpbmluZyB0cmFuc2l0aW9uICtcbiAgICAgICAgICAgIC8vIGtlZXAtYWxpdmUgKyBIT0NzLiAoIzQ1OTApXG4gICAgICAgICAgICBvbGRFbG0uX2xlYXZlQ2IgPyBudWxsIDogcGFyZW50RWxtLFxuICAgICAgICAgICAgbm9kZU9wcy5uZXh0U2libGluZyhvbGRFbG0pXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vIHVwZGF0ZSBwYXJlbnQgcGxhY2Vob2xkZXIgbm9kZSBlbGVtZW50LCByZWN1cnNpdmVseVxuICAgICAgICAgIGlmIChpc0RlZih2bm9kZS5wYXJlbnQpKSB7XG4gICAgICAgICAgICB2YXIgYW5jZXN0b3IgPSB2bm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB2YXIgcGF0Y2hhYmxlID0gaXNQYXRjaGFibGUodm5vZGUpO1xuICAgICAgICAgICAgd2hpbGUgKGFuY2VzdG9yKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2JzLmRlc3Ryb3kubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjYnMuZGVzdHJveVtpXShhbmNlc3Rvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYW5jZXN0b3IuZWxtID0gdm5vZGUuZWxtO1xuICAgICAgICAgICAgICBpZiAocGF0Y2hhYmxlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSQxKSB7XG4gICAgICAgICAgICAgICAgICBjYnMuY3JlYXRlW2kkMV0oZW1wdHlOb2RlLCBhbmNlc3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICM2NTEzXG4gICAgICAgICAgICAgICAgLy8gaW52b2tlIGluc2VydCBob29rcyB0aGF0IG1heSBoYXZlIGJlZW4gbWVyZ2VkIGJ5IGNyZWF0ZSBob29rcy5cbiAgICAgICAgICAgICAgICAvLyBlLmcuIGZvciBkaXJlY3RpdmVzIHRoYXQgdXNlcyB0aGUgXCJpbnNlcnRlZFwiIGhvb2suXG4gICAgICAgICAgICAgICAgdmFyIGluc2VydCA9IGFuY2VzdG9yLmRhdGEuaG9vay5pbnNlcnQ7XG4gICAgICAgICAgICAgICAgaWYgKGluc2VydC5tZXJnZWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0IGF0IGluZGV4IDEgdG8gYXZvaWQgcmUtaW52b2tpbmcgY29tcG9uZW50IG1vdW50ZWQgaG9va1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSQyID0gMTsgaSQyIDwgaW5zZXJ0LmZucy5sZW5ndGg7IGkkMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydC5mbnNbaSQyXSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWdpc3RlclJlZihhbmNlc3Rvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZGVzdHJveSBvbGQgbm9kZVxuICAgICAgICAgIGlmIChpc0RlZihwYXJlbnRFbG0pKSB7XG4gICAgICAgICAgICByZW1vdmVWbm9kZXMocGFyZW50RWxtLCBbb2xkVm5vZGVdLCAwLCAwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZFZub2RlLnRhZykpIHtcbiAgICAgICAgICAgIGludm9rZURlc3Ryb3lIb29rKG9sZFZub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW52b2tlSW5zZXJ0SG9vayh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpc0luaXRpYWxQYXRjaCk7XG4gICAgICByZXR1cm4gdm5vZGUuZWxtXG4gICAgfVxuICB9XG5cbiAgLyogICovXG5cbiAgdmFyIGRpcmVjdGl2ZXMgPSB7XG4gICAgY3JlYXRlOiB1cGRhdGVEaXJlY3RpdmVzLFxuICAgIHVwZGF0ZTogdXBkYXRlRGlyZWN0aXZlcyxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiB1bmJpbmREaXJlY3RpdmVzICh2bm9kZSkge1xuICAgICAgdXBkYXRlRGlyZWN0aXZlcyh2bm9kZSwgZW1wdHlOb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlRGlyZWN0aXZlcyAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgaWYgKG9sZFZub2RlLmRhdGEuZGlyZWN0aXZlcyB8fCB2bm9kZS5kYXRhLmRpcmVjdGl2ZXMpIHtcbiAgICAgIF91cGRhdGUob2xkVm5vZGUsIHZub2RlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfdXBkYXRlIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICB2YXIgaXNDcmVhdGUgPSBvbGRWbm9kZSA9PT0gZW1wdHlOb2RlO1xuICAgIHZhciBpc0Rlc3Ryb3kgPSB2bm9kZSA9PT0gZW1wdHlOb2RlO1xuICAgIHZhciBvbGREaXJzID0gbm9ybWFsaXplRGlyZWN0aXZlcyQxKG9sZFZub2RlLmRhdGEuZGlyZWN0aXZlcywgb2xkVm5vZGUuY29udGV4dCk7XG4gICAgdmFyIG5ld0RpcnMgPSBub3JtYWxpemVEaXJlY3RpdmVzJDEodm5vZGUuZGF0YS5kaXJlY3RpdmVzLCB2bm9kZS5jb250ZXh0KTtcblxuICAgIHZhciBkaXJzV2l0aEluc2VydCA9IFtdO1xuICAgIHZhciBkaXJzV2l0aFBvc3RwYXRjaCA9IFtdO1xuXG4gICAgdmFyIGtleSwgb2xkRGlyLCBkaXI7XG4gICAgZm9yIChrZXkgaW4gbmV3RGlycykge1xuICAgICAgb2xkRGlyID0gb2xkRGlyc1trZXldO1xuICAgICAgZGlyID0gbmV3RGlyc1trZXldO1xuICAgICAgaWYgKCFvbGREaXIpIHtcbiAgICAgICAgLy8gbmV3IGRpcmVjdGl2ZSwgYmluZFxuICAgICAgICBjYWxsSG9vayQxKGRpciwgJ2JpbmQnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgICBpZiAoZGlyLmRlZiAmJiBkaXIuZGVmLmluc2VydGVkKSB7XG4gICAgICAgICAgZGlyc1dpdGhJbnNlcnQucHVzaChkaXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBleGlzdGluZyBkaXJlY3RpdmUsIHVwZGF0ZVxuICAgICAgICBkaXIub2xkVmFsdWUgPSBvbGREaXIudmFsdWU7XG4gICAgICAgIGRpci5vbGRBcmcgPSBvbGREaXIuYXJnO1xuICAgICAgICBjYWxsSG9vayQxKGRpciwgJ3VwZGF0ZScsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICAgIGlmIChkaXIuZGVmICYmIGRpci5kZWYuY29tcG9uZW50VXBkYXRlZCkge1xuICAgICAgICAgIGRpcnNXaXRoUG9zdHBhdGNoLnB1c2goZGlyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkaXJzV2l0aEluc2VydC5sZW5ndGgpIHtcbiAgICAgIHZhciBjYWxsSW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnNXaXRoSW5zZXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY2FsbEhvb2skMShkaXJzV2l0aEluc2VydFtpXSwgJ2luc2VydGVkJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChpc0NyZWF0ZSkge1xuICAgICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ2luc2VydCcsIGNhbGxJbnNlcnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbEluc2VydCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkaXJzV2l0aFBvc3RwYXRjaC5sZW5ndGgpIHtcbiAgICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAncG9zdHBhdGNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnNXaXRoUG9zdHBhdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY2FsbEhvb2skMShkaXJzV2l0aFBvc3RwYXRjaFtpXSwgJ2NvbXBvbmVudFVwZGF0ZWQnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQ3JlYXRlKSB7XG4gICAgICBmb3IgKGtleSBpbiBvbGREaXJzKSB7XG4gICAgICAgIGlmICghbmV3RGlyc1trZXldKSB7XG4gICAgICAgICAgLy8gbm8gbG9uZ2VyIHByZXNlbnQsIHVuYmluZFxuICAgICAgICAgIGNhbGxIb29rJDEob2xkRGlyc1trZXldLCAndW5iaW5kJywgb2xkVm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVtcHR5TW9kaWZpZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzJDEgKFxuICAgIGRpcnMsXG4gICAgdm1cbiAgKSB7XG4gICAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgaWYgKCFkaXJzKSB7XG4gICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiByZXNcbiAgICB9XG4gICAgdmFyIGksIGRpcjtcbiAgICBmb3IgKGkgPSAwOyBpIDwgZGlycy5sZW5ndGg7IGkrKykge1xuICAgICAgZGlyID0gZGlyc1tpXTtcbiAgICAgIGlmICghZGlyLm1vZGlmaWVycykge1xuICAgICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgICAgZGlyLm1vZGlmaWVycyA9IGVtcHR5TW9kaWZpZXJzO1xuICAgICAgfVxuICAgICAgcmVzW2dldFJhd0Rpck5hbWUoZGlyKV0gPSBkaXI7XG4gICAgICBkaXIuZGVmID0gcmVzb2x2ZUFzc2V0KHZtLiRvcHRpb25zLCAnZGlyZWN0aXZlcycsIGRpci5uYW1lLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmF3RGlyTmFtZSAoZGlyKSB7XG4gICAgcmV0dXJuIGRpci5yYXdOYW1lIHx8ICgoZGlyLm5hbWUpICsgXCIuXCIgKyAoT2JqZWN0LmtleXMoZGlyLm1vZGlmaWVycyB8fCB7fSkuam9pbignLicpKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGxIb29rJDEgKGRpciwgaG9vaywgdm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpIHtcbiAgICB2YXIgZm4gPSBkaXIuZGVmICYmIGRpci5kZWZbaG9va107XG4gICAgaWYgKGZuKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmbih2bm9kZS5lbG0sIGRpciwgdm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBoYW5kbGVFcnJvcihlLCB2bm9kZS5jb250ZXh0LCAoXCJkaXJlY3RpdmUgXCIgKyAoZGlyLm5hbWUpICsgXCIgXCIgKyBob29rICsgXCIgaG9va1wiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2VNb2R1bGVzID0gW1xuICAgIHJlZixcbiAgICBkaXJlY3RpdmVzXG4gIF07XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gdXBkYXRlQXR0cnMgKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIHZhciBvcHRzID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICBpZiAoaXNEZWYob3B0cykgJiYgb3B0cy5DdG9yLm9wdGlvbnMuaW5oZXJpdEF0dHJzID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChpc1VuZGVmKG9sZFZub2RlLmRhdGEuYXR0cnMpICYmIGlzVW5kZWYodm5vZGUuZGF0YS5hdHRycykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIga2V5LCBjdXIsIG9sZDtcbiAgICB2YXIgZWxtID0gdm5vZGUuZWxtO1xuICAgIHZhciBvbGRBdHRycyA9IG9sZFZub2RlLmRhdGEuYXR0cnMgfHwge307XG4gICAgdmFyIGF0dHJzID0gdm5vZGUuZGF0YS5hdHRycyB8fCB7fTtcbiAgICAvLyBjbG9uZSBvYnNlcnZlZCBvYmplY3RzLCBhcyB0aGUgdXNlciBwcm9iYWJseSB3YW50cyB0byBtdXRhdGUgaXRcbiAgICBpZiAoaXNEZWYoYXR0cnMuX19vYl9fKSkge1xuICAgICAgYXR0cnMgPSB2bm9kZS5kYXRhLmF0dHJzID0gZXh0ZW5kKHt9LCBhdHRycyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gYXR0cnMpIHtcbiAgICAgIGN1ciA9IGF0dHJzW2tleV07XG4gICAgICBvbGQgPSBvbGRBdHRyc1trZXldO1xuICAgICAgaWYgKG9sZCAhPT0gY3VyKSB7XG4gICAgICAgIHNldEF0dHIoZWxtLCBrZXksIGN1cik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vICM0MzkxOiBpbiBJRTksIHNldHRpbmcgdHlwZSBjYW4gcmVzZXQgdmFsdWUgZm9yIGlucHV0W3R5cGU9cmFkaW9dXG4gICAgLy8gIzY2NjY6IElFL0VkZ2UgZm9yY2VzIHByb2dyZXNzIHZhbHVlIGRvd24gdG8gMSBiZWZvcmUgc2V0dGluZyBhIG1heFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgoaXNJRSB8fCBpc0VkZ2UpICYmIGF0dHJzLnZhbHVlICE9PSBvbGRBdHRycy52YWx1ZSkge1xuICAgICAgc2V0QXR0cihlbG0sICd2YWx1ZScsIGF0dHJzLnZhbHVlKTtcbiAgICB9XG4gICAgZm9yIChrZXkgaW4gb2xkQXR0cnMpIHtcbiAgICAgIGlmIChpc1VuZGVmKGF0dHJzW2tleV0pKSB7XG4gICAgICAgIGlmIChpc1hsaW5rKGtleSkpIHtcbiAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlTlMoeGxpbmtOUywgZ2V0WGxpbmtQcm9wKGtleSkpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc0VudW1lcmF0ZWRBdHRyKGtleSkpIHtcbiAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBdHRyIChlbCwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChlbC50YWdOYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICBiYXNlU2V0QXR0cihlbCwga2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyKGtleSkpIHtcbiAgICAgIC8vIHNldCBhdHRyaWJ1dGUgZm9yIGJsYW5rIHZhbHVlXG4gICAgICAvLyBlLmcuIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IG9uZTwvb3B0aW9uPlxuICAgICAgaWYgKGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGVjaG5pY2FsbHkgYWxsb3dmdWxsc2NyZWVuIGlzIGEgYm9vbGVhbiBhdHRyaWJ1dGUgZm9yIDxpZnJhbWU+LFxuICAgICAgICAvLyBidXQgRmxhc2ggZXhwZWN0cyBhIHZhbHVlIG9mIFwidHJ1ZVwiIHdoZW4gdXNlZCBvbiA8ZW1iZWQ+IHRhZ1xuICAgICAgICB2YWx1ZSA9IGtleSA9PT0gJ2FsbG93ZnVsbHNjcmVlbicgJiYgZWwudGFnTmFtZSA9PT0gJ0VNQkVEJ1xuICAgICAgICAgID8gJ3RydWUnXG4gICAgICAgICAgOiBrZXk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRW51bWVyYXRlZEF0dHIoa2V5KSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgY29udmVydEVudW1lcmF0ZWRWYWx1ZShrZXksIHZhbHVlKSk7XG4gICAgfSBlbHNlIGlmIChpc1hsaW5rKGtleSkpIHtcbiAgICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGVOUyh4bGlua05TLCBnZXRYbGlua1Byb3Aoa2V5KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZVNldEF0dHIoZWwsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJhc2VTZXRBdHRyIChlbCwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vICM3MTM4OiBJRTEwICYgMTEgZmlyZXMgaW5wdXQgZXZlbnQgd2hlbiBzZXR0aW5nIHBsYWNlaG9sZGVyIG9uXG4gICAgICAvLyA8dGV4dGFyZWE+Li4uIGJsb2NrIHRoZSBmaXJzdCBpbnB1dCBldmVudCBhbmQgcmVtb3ZlIHRoZSBibG9ja2VyXG4gICAgICAvLyBpbW1lZGlhdGVseS5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKFxuICAgICAgICBpc0lFICYmICFpc0lFOSAmJlxuICAgICAgICBlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnICYmXG4gICAgICAgIGtleSA9PT0gJ3BsYWNlaG9sZGVyJyAmJiB2YWx1ZSAhPT0gJycgJiYgIWVsLl9faWVwaFxuICAgICAgKSB7XG4gICAgICAgIHZhciBibG9ja2VyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYmxvY2tlcik7XG4gICAgICAgIH07XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYmxvY2tlcik7XG4gICAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgICBlbC5fX2llcGggPSB0cnVlOyAvKiBJRSBwbGFjZWhvbGRlciBwYXRjaGVkICovXG4gICAgICB9XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGF0dHJzID0ge1xuICAgIGNyZWF0ZTogdXBkYXRlQXR0cnMsXG4gICAgdXBkYXRlOiB1cGRhdGVBdHRyc1xuICB9O1xuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNsYXNzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICB2YXIgZWwgPSB2bm9kZS5lbG07XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIHZhciBvbGREYXRhID0gb2xkVm5vZGUuZGF0YTtcbiAgICBpZiAoXG4gICAgICBpc1VuZGVmKGRhdGEuc3RhdGljQ2xhc3MpICYmXG4gICAgICBpc1VuZGVmKGRhdGEuY2xhc3MpICYmIChcbiAgICAgICAgaXNVbmRlZihvbGREYXRhKSB8fCAoXG4gICAgICAgICAgaXNVbmRlZihvbGREYXRhLnN0YXRpY0NsYXNzKSAmJlxuICAgICAgICAgIGlzVW5kZWYob2xkRGF0YS5jbGFzcylcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGNscyA9IGdlbkNsYXNzRm9yVm5vZGUodm5vZGUpO1xuXG4gICAgLy8gaGFuZGxlIHRyYW5zaXRpb24gY2xhc3Nlc1xuICAgIHZhciB0cmFuc2l0aW9uQ2xhc3MgPSBlbC5fdHJhbnNpdGlvbkNsYXNzZXM7XG4gICAgaWYgKGlzRGVmKHRyYW5zaXRpb25DbGFzcykpIHtcbiAgICAgIGNscyA9IGNvbmNhdChjbHMsIHN0cmluZ2lmeUNsYXNzKHRyYW5zaXRpb25DbGFzcykpO1xuICAgIH1cblxuICAgIC8vIHNldCB0aGUgY2xhc3NcbiAgICBpZiAoY2xzICE9PSBlbC5fcHJldkNsYXNzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xzKTtcbiAgICAgIGVsLl9wcmV2Q2xhc3MgPSBjbHM7XG4gICAgfVxuICB9XG5cbiAgdmFyIGtsYXNzID0ge1xuICAgIGNyZWF0ZTogdXBkYXRlQ2xhc3MsXG4gICAgdXBkYXRlOiB1cGRhdGVDbGFzc1xuICB9O1xuXG4gIC8qICAqL1xuXG4gIHZhciB2YWxpZERpdmlzaW9uQ2hhclJFID0gL1tcXHcpLitcXC1fJFxcXV0vO1xuXG4gIGZ1bmN0aW9uIHBhcnNlRmlsdGVycyAoZXhwKSB7XG4gICAgdmFyIGluU2luZ2xlID0gZmFsc2U7XG4gICAgdmFyIGluRG91YmxlID0gZmFsc2U7XG4gICAgdmFyIGluVGVtcGxhdGVTdHJpbmcgPSBmYWxzZTtcbiAgICB2YXIgaW5SZWdleCA9IGZhbHNlO1xuICAgIHZhciBjdXJseSA9IDA7XG4gICAgdmFyIHNxdWFyZSA9IDA7XG4gICAgdmFyIHBhcmVuID0gMDtcbiAgICB2YXIgbGFzdEZpbHRlckluZGV4ID0gMDtcbiAgICB2YXIgYywgcHJldiwgaSwgZXhwcmVzc2lvbiwgZmlsdGVycztcblxuICAgIGZvciAoaSA9IDA7IGkgPCBleHAubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByZXYgPSBjO1xuICAgICAgYyA9IGV4cC5jaGFyQ29kZUF0KGkpO1xuICAgICAgaWYgKGluU2luZ2xlKSB7XG4gICAgICAgIGlmIChjID09PSAweDI3ICYmIHByZXYgIT09IDB4NUMpIHsgaW5TaW5nbGUgPSBmYWxzZTsgfVxuICAgICAgfSBlbHNlIGlmIChpbkRvdWJsZSkge1xuICAgICAgICBpZiAoYyA9PT0gMHgyMiAmJiBwcmV2ICE9PSAweDVDKSB7IGluRG91YmxlID0gZmFsc2U7IH1cbiAgICAgIH0gZWxzZSBpZiAoaW5UZW1wbGF0ZVN0cmluZykge1xuICAgICAgICBpZiAoYyA9PT0gMHg2MCAmJiBwcmV2ICE9PSAweDVDKSB7IGluVGVtcGxhdGVTdHJpbmcgPSBmYWxzZTsgfVxuICAgICAgfSBlbHNlIGlmIChpblJlZ2V4KSB7XG4gICAgICAgIGlmIChjID09PSAweDJmICYmIHByZXYgIT09IDB4NUMpIHsgaW5SZWdleCA9IGZhbHNlOyB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjID09PSAweDdDICYmIC8vIHBpcGVcbiAgICAgICAgZXhwLmNoYXJDb2RlQXQoaSArIDEpICE9PSAweDdDICYmXG4gICAgICAgIGV4cC5jaGFyQ29kZUF0KGkgLSAxKSAhPT0gMHg3QyAmJlxuICAgICAgICAhY3VybHkgJiYgIXNxdWFyZSAmJiAhcGFyZW5cbiAgICAgICkge1xuICAgICAgICBpZiAoZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gZmlyc3QgZmlsdGVyLCBlbmQgb2YgZXhwcmVzc2lvblxuICAgICAgICAgIGxhc3RGaWx0ZXJJbmRleCA9IGkgKyAxO1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleHAuc2xpY2UoMCwgaSkudHJpbSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHB1c2hGaWx0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgY2FzZSAweDIyOiBpbkRvdWJsZSA9IHRydWU7IGJyZWFrICAgICAgICAgLy8gXCJcbiAgICAgICAgICBjYXNlIDB4Mjc6IGluU2luZ2xlID0gdHJ1ZTsgYnJlYWsgICAgICAgICAvLyAnXG4gICAgICAgICAgY2FzZSAweDYwOiBpblRlbXBsYXRlU3RyaW5nID0gdHJ1ZTsgYnJlYWsgLy8gYFxuICAgICAgICAgIGNhc2UgMHgyODogcGFyZW4rKzsgYnJlYWsgICAgICAgICAgICAgICAgIC8vIChcbiAgICAgICAgICBjYXNlIDB4Mjk6IHBhcmVuLS07IGJyZWFrICAgICAgICAgICAgICAgICAvLyApXG4gICAgICAgICAgY2FzZSAweDVCOiBzcXVhcmUrKzsgYnJlYWsgICAgICAgICAgICAgICAgLy8gW1xuICAgICAgICAgIGNhc2UgMHg1RDogc3F1YXJlLS07IGJyZWFrICAgICAgICAgICAgICAgIC8vIF1cbiAgICAgICAgICBjYXNlIDB4N0I6IGN1cmx5Kys7IGJyZWFrICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgY2FzZSAweDdEOiBjdXJseS0tOyBicmVhayAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjID09PSAweDJmKSB7IC8vIC9cbiAgICAgICAgICB2YXIgaiA9IGkgLSAxO1xuICAgICAgICAgIHZhciBwID0gKHZvaWQgMCk7XG4gICAgICAgICAgLy8gZmluZCBmaXJzdCBub24td2hpdGVzcGFjZSBwcmV2IGNoYXJcbiAgICAgICAgICBmb3IgKDsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgIHAgPSBleHAuY2hhckF0KGopO1xuICAgICAgICAgICAgaWYgKHAgIT09ICcgJykgeyBicmVhayB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghcCB8fCAhdmFsaWREaXZpc2lvbkNoYXJSRS50ZXN0KHApKSB7XG4gICAgICAgICAgICBpblJlZ2V4ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBleHByZXNzaW9uID0gZXhwLnNsaWNlKDAsIGkpLnRyaW0oKTtcbiAgICB9IGVsc2UgaWYgKGxhc3RGaWx0ZXJJbmRleCAhPT0gMCkge1xuICAgICAgcHVzaEZpbHRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1c2hGaWx0ZXIgKCkge1xuICAgICAgKGZpbHRlcnMgfHwgKGZpbHRlcnMgPSBbXSkpLnB1c2goZXhwLnNsaWNlKGxhc3RGaWx0ZXJJbmRleCwgaSkudHJpbSgpKTtcbiAgICAgIGxhc3RGaWx0ZXJJbmRleCA9IGkgKyAxO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJzKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBleHByZXNzaW9uID0gd3JhcEZpbHRlcihleHByZXNzaW9uLCBmaWx0ZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvblxuICB9XG5cbiAgZnVuY3Rpb24gd3JhcEZpbHRlciAoZXhwLCBmaWx0ZXIpIHtcbiAgICB2YXIgaSA9IGZpbHRlci5pbmRleE9mKCcoJyk7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICAvLyBfZjogcmVzb2x2ZUZpbHRlclxuICAgICAgcmV0dXJuIChcIl9mKFxcXCJcIiArIGZpbHRlciArIFwiXFxcIikoXCIgKyBleHAgKyBcIilcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5hbWUgPSBmaWx0ZXIuc2xpY2UoMCwgaSk7XG4gICAgICB2YXIgYXJncyA9IGZpbHRlci5zbGljZShpICsgMSk7XG4gICAgICByZXR1cm4gKFwiX2YoXFxcIlwiICsgbmFtZSArIFwiXFxcIikoXCIgKyBleHAgKyAoYXJncyAhPT0gJyknID8gJywnICsgYXJncyA6IGFyZ3MpKVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG5cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICBmdW5jdGlvbiBiYXNlV2FybiAobXNnLCByYW5nZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKFwiW1Z1ZSBjb21waWxlcl06IFwiICsgbXNnKSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4gIGZ1bmN0aW9uIHBsdWNrTW9kdWxlRnVuY3Rpb24gKFxuICAgIG1vZHVsZXMsXG4gICAga2V5XG4gICkge1xuICAgIHJldHVybiBtb2R1bGVzXG4gICAgICA/IG1vZHVsZXMubWFwKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtW2tleV07IH0pLmZpbHRlcihmdW5jdGlvbiAoXykgeyByZXR1cm4gXzsgfSlcbiAgICAgIDogW11cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb3AgKGVsLCBuYW1lLCB2YWx1ZSwgcmFuZ2UsIGR5bmFtaWMpIHtcbiAgICAoZWwucHJvcHMgfHwgKGVsLnByb3BzID0gW10pKS5wdXNoKHJhbmdlU2V0SXRlbSh7IG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSwgZHluYW1pYzogZHluYW1pYyB9LCByYW5nZSkpO1xuICAgIGVsLnBsYWluID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBdHRyIChlbCwgbmFtZSwgdmFsdWUsIHJhbmdlLCBkeW5hbWljKSB7XG4gICAgdmFyIGF0dHJzID0gZHluYW1pY1xuICAgICAgPyAoZWwuZHluYW1pY0F0dHJzIHx8IChlbC5keW5hbWljQXR0cnMgPSBbXSkpXG4gICAgICA6IChlbC5hdHRycyB8fCAoZWwuYXR0cnMgPSBbXSkpO1xuICAgIGF0dHJzLnB1c2gocmFuZ2VTZXRJdGVtKHsgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlLCBkeW5hbWljOiBkeW5hbWljIH0sIHJhbmdlKSk7XG4gICAgZWwucGxhaW4gPSBmYWxzZTtcbiAgfVxuXG4gIC8vIGFkZCBhIHJhdyBhdHRyICh1c2UgdGhpcyBpbiBwcmVUcmFuc2Zvcm1zKVxuICBmdW5jdGlvbiBhZGRSYXdBdHRyIChlbCwgbmFtZSwgdmFsdWUsIHJhbmdlKSB7XG4gICAgZWwuYXR0cnNNYXBbbmFtZV0gPSB2YWx1ZTtcbiAgICBlbC5hdHRyc0xpc3QucHVzaChyYW5nZVNldEl0ZW0oeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUgfSwgcmFuZ2UpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZERpcmVjdGl2ZSAoXG4gICAgZWwsXG4gICAgbmFtZSxcbiAgICByYXdOYW1lLFxuICAgIHZhbHVlLFxuICAgIGFyZyxcbiAgICBpc0R5bmFtaWNBcmcsXG4gICAgbW9kaWZpZXJzLFxuICAgIHJhbmdlXG4gICkge1xuICAgIChlbC5kaXJlY3RpdmVzIHx8IChlbC5kaXJlY3RpdmVzID0gW10pKS5wdXNoKHJhbmdlU2V0SXRlbSh7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgcmF3TmFtZTogcmF3TmFtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGFyZzogYXJnLFxuICAgICAgaXNEeW5hbWljQXJnOiBpc0R5bmFtaWNBcmcsXG4gICAgICBtb2RpZmllcnM6IG1vZGlmaWVyc1xuICAgIH0sIHJhbmdlKSk7XG4gICAgZWwucGxhaW4gPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBlbmRNb2RpZmllck1hcmtlciAoc3ltYm9sLCBuYW1lLCBkeW5hbWljKSB7XG4gICAgcmV0dXJuIGR5bmFtaWNcbiAgICAgID8gKFwiX3AoXCIgKyBuYW1lICsgXCIsXFxcIlwiICsgc3ltYm9sICsgXCJcXFwiKVwiKVxuICAgICAgOiBzeW1ib2wgKyBuYW1lIC8vIG1hcmsgdGhlIGV2ZW50IGFzIGNhcHR1cmVkXG4gIH1cblxuICBmdW5jdGlvbiBhZGRIYW5kbGVyIChcbiAgICBlbCxcbiAgICBuYW1lLFxuICAgIHZhbHVlLFxuICAgIG1vZGlmaWVycyxcbiAgICBpbXBvcnRhbnQsXG4gICAgd2FybixcbiAgICByYW5nZSxcbiAgICBkeW5hbWljXG4gICkge1xuICAgIG1vZGlmaWVycyA9IG1vZGlmaWVycyB8fCBlbXB0eU9iamVjdDtcbiAgICAvLyB3YXJuIHByZXZlbnQgYW5kIHBhc3NpdmUgbW9kaWZpZXJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoXG4gICAgICB3YXJuICYmXG4gICAgICBtb2RpZmllcnMucHJldmVudCAmJiBtb2RpZmllcnMucGFzc2l2ZVxuICAgICkge1xuICAgICAgd2FybihcbiAgICAgICAgJ3Bhc3NpdmUgYW5kIHByZXZlbnQgY2FuXFwndCBiZSB1c2VkIHRvZ2V0aGVyLiAnICtcbiAgICAgICAgJ1Bhc3NpdmUgaGFuZGxlciBjYW5cXCd0IHByZXZlbnQgZGVmYXVsdCBldmVudC4nLFxuICAgICAgICByYW5nZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBub3JtYWxpemUgY2xpY2sucmlnaHQgYW5kIGNsaWNrLm1pZGRsZSBzaW5jZSB0aGV5IGRvbid0IGFjdHVhbGx5IGZpcmVcbiAgICAvLyB0aGlzIGlzIHRlY2huaWNhbGx5IGJyb3dzZXItc3BlY2lmaWMsIGJ1dCBhdCBsZWFzdCBmb3Igbm93IGJyb3dzZXJzIGFyZVxuICAgIC8vIHRoZSBvbmx5IHRhcmdldCBlbnZzIHRoYXQgaGF2ZSByaWdodC9taWRkbGUgY2xpY2tzLlxuICAgIGlmIChtb2RpZmllcnMucmlnaHQpIHtcbiAgICAgIGlmIChkeW5hbWljKSB7XG4gICAgICAgIG5hbWUgPSBcIihcIiArIG5hbWUgKyBcIik9PT0nY2xpY2snPydjb250ZXh0bWVudSc6KFwiICsgbmFtZSArIFwiKVwiO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnY2xpY2snKSB7XG4gICAgICAgIG5hbWUgPSAnY29udGV4dG1lbnUnO1xuICAgICAgICBkZWxldGUgbW9kaWZpZXJzLnJpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLm1pZGRsZSkge1xuICAgICAgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgbmFtZSA9IFwiKFwiICsgbmFtZSArIFwiKT09PSdjbGljayc/J21vdXNldXAnOihcIiArIG5hbWUgKyBcIilcIjtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICBuYW1lID0gJ21vdXNldXAnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNoZWNrIGNhcHR1cmUgbW9kaWZpZXJcbiAgICBpZiAobW9kaWZpZXJzLmNhcHR1cmUpIHtcbiAgICAgIGRlbGV0ZSBtb2RpZmllcnMuY2FwdHVyZTtcbiAgICAgIG5hbWUgPSBwcmVwZW5kTW9kaWZpZXJNYXJrZXIoJyEnLCBuYW1lLCBkeW5hbWljKTtcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVycy5vbmNlKSB7XG4gICAgICBkZWxldGUgbW9kaWZpZXJzLm9uY2U7XG4gICAgICBuYW1lID0gcHJlcGVuZE1vZGlmaWVyTWFya2VyKCd+JywgbmFtZSwgZHluYW1pYyk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChtb2RpZmllcnMucGFzc2l2ZSkge1xuICAgICAgZGVsZXRlIG1vZGlmaWVycy5wYXNzaXZlO1xuICAgICAgbmFtZSA9IHByZXBlbmRNb2RpZmllck1hcmtlcignJicsIG5hbWUsIGR5bmFtaWMpO1xuICAgIH1cblxuICAgIHZhciBldmVudHM7XG4gICAgaWYgKG1vZGlmaWVycy5uYXRpdmUpIHtcbiAgICAgIGRlbGV0ZSBtb2RpZmllcnMubmF0aXZlO1xuICAgICAgZXZlbnRzID0gZWwubmF0aXZlRXZlbnRzIHx8IChlbC5uYXRpdmVFdmVudHMgPSB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50cyA9IGVsLmV2ZW50cyB8fCAoZWwuZXZlbnRzID0ge30pO1xuICAgIH1cblxuICAgIHZhciBuZXdIYW5kbGVyID0gcmFuZ2VTZXRJdGVtKHsgdmFsdWU6IHZhbHVlLnRyaW0oKSwgZHluYW1pYzogZHluYW1pYyB9LCByYW5nZSk7XG4gICAgaWYgKG1vZGlmaWVycyAhPT0gZW1wdHlPYmplY3QpIHtcbiAgICAgIG5ld0hhbmRsZXIubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVycyA9IGV2ZW50c1tuYW1lXTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVycykpIHtcbiAgICAgIGltcG9ydGFudCA/IGhhbmRsZXJzLnVuc2hpZnQobmV3SGFuZGxlcikgOiBoYW5kbGVycy5wdXNoKG5ld0hhbmRsZXIpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlcnMpIHtcbiAgICAgIGV2ZW50c1tuYW1lXSA9IGltcG9ydGFudCA/IFtuZXdIYW5kbGVyLCBoYW5kbGVyc10gOiBbaGFuZGxlcnMsIG5ld0hhbmRsZXJdO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudHNbbmFtZV0gPSBuZXdIYW5kbGVyO1xuICAgIH1cblxuICAgIGVsLnBsYWluID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSYXdCaW5kaW5nQXR0ciAoXG4gICAgZWwsXG4gICAgbmFtZVxuICApIHtcbiAgICByZXR1cm4gZWwucmF3QXR0cnNNYXBbJzonICsgbmFtZV0gfHxcbiAgICAgIGVsLnJhd0F0dHJzTWFwWyd2LWJpbmQ6JyArIG5hbWVdIHx8XG4gICAgICBlbC5yYXdBdHRyc01hcFtuYW1lXVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QmluZGluZ0F0dHIgKFxuICAgIGVsLFxuICAgIG5hbWUsXG4gICAgZ2V0U3RhdGljXG4gICkge1xuICAgIHZhciBkeW5hbWljVmFsdWUgPVxuICAgICAgZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJzonICsgbmFtZSkgfHxcbiAgICAgIGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWJpbmQ6JyArIG5hbWUpO1xuICAgIGlmIChkeW5hbWljVmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHBhcnNlRmlsdGVycyhkeW5hbWljVmFsdWUpXG4gICAgfSBlbHNlIGlmIChnZXRTdGF0aWMgIT09IGZhbHNlKSB7XG4gICAgICB2YXIgc3RhdGljVmFsdWUgPSBnZXRBbmRSZW1vdmVBdHRyKGVsLCBuYW1lKTtcbiAgICAgIGlmIChzdGF0aWNWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzdGF0aWNWYWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBub3RlOiB0aGlzIG9ubHkgcmVtb3ZlcyB0aGUgYXR0ciBmcm9tIHRoZSBBcnJheSAoYXR0cnNMaXN0KSBzbyB0aGF0IGl0XG4gIC8vIGRvZXNuJ3QgZ2V0IHByb2Nlc3NlZCBieSBwcm9jZXNzQXR0cnMuXG4gIC8vIEJ5IGRlZmF1bHQgaXQgZG9lcyBOT1QgcmVtb3ZlIGl0IGZyb20gdGhlIG1hcCAoYXR0cnNNYXApIGJlY2F1c2UgdGhlIG1hcCBpc1xuICAvLyBuZWVkZWQgZHVyaW5nIGNvZGVnZW4uXG4gIGZ1bmN0aW9uIGdldEFuZFJlbW92ZUF0dHIgKFxuICAgIGVsLFxuICAgIG5hbWUsXG4gICAgcmVtb3ZlRnJvbU1hcFxuICApIHtcbiAgICB2YXIgdmFsO1xuICAgIGlmICgodmFsID0gZWwuYXR0cnNNYXBbbmFtZV0pICE9IG51bGwpIHtcbiAgICAgIHZhciBsaXN0ID0gZWwuYXR0cnNMaXN0O1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAobGlzdFtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVtb3ZlRnJvbU1hcCkge1xuICAgICAgZGVsZXRlIGVsLmF0dHJzTWFwW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbmRSZW1vdmVBdHRyQnlSZWdleCAoXG4gICAgZWwsXG4gICAgbmFtZVxuICApIHtcbiAgICB2YXIgbGlzdCA9IGVsLmF0dHJzTGlzdDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgYXR0ciA9IGxpc3RbaV07XG4gICAgICBpZiAobmFtZS50ZXN0KGF0dHIubmFtZSkpIHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiBhdHRyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmFuZ2VTZXRJdGVtIChcbiAgICBpdGVtLFxuICAgIHJhbmdlXG4gICkge1xuICAgIGlmIChyYW5nZSkge1xuICAgICAgaWYgKHJhbmdlLnN0YXJ0ICE9IG51bGwpIHtcbiAgICAgICAgaXRlbS5zdGFydCA9IHJhbmdlLnN0YXJ0O1xuICAgICAgfVxuICAgICAgaWYgKHJhbmdlLmVuZCAhPSBudWxsKSB7XG4gICAgICAgIGl0ZW0uZW5kID0gcmFuZ2UuZW5kO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbVxuICB9XG5cbiAgLyogICovXG5cbiAgLyoqXG4gICAqIENyb3NzLXBsYXRmb3JtIGNvZGUgZ2VuZXJhdGlvbiBmb3IgY29tcG9uZW50IHYtbW9kZWxcbiAgICovXG4gIGZ1bmN0aW9uIGdlbkNvbXBvbmVudE1vZGVsIChcbiAgICBlbCxcbiAgICB2YWx1ZSxcbiAgICBtb2RpZmllcnNcbiAgKSB7XG4gICAgdmFyIHJlZiA9IG1vZGlmaWVycyB8fCB7fTtcbiAgICB2YXIgbnVtYmVyID0gcmVmLm51bWJlcjtcbiAgICB2YXIgdHJpbSA9IHJlZi50cmltO1xuXG4gICAgdmFyIGJhc2VWYWx1ZUV4cHJlc3Npb24gPSAnJCR2JztcbiAgICB2YXIgdmFsdWVFeHByZXNzaW9uID0gYmFzZVZhbHVlRXhwcmVzc2lvbjtcbiAgICBpZiAodHJpbSkge1xuICAgICAgdmFsdWVFeHByZXNzaW9uID1cbiAgICAgICAgXCIodHlwZW9mIFwiICsgYmFzZVZhbHVlRXhwcmVzc2lvbiArIFwiID09PSAnc3RyaW5nJ1wiICtcbiAgICAgICAgXCI/IFwiICsgYmFzZVZhbHVlRXhwcmVzc2lvbiArIFwiLnRyaW0oKVwiICtcbiAgICAgICAgXCI6IFwiICsgYmFzZVZhbHVlRXhwcmVzc2lvbiArIFwiKVwiO1xuICAgIH1cbiAgICBpZiAobnVtYmVyKSB7XG4gICAgICB2YWx1ZUV4cHJlc3Npb24gPSBcIl9uKFwiICsgdmFsdWVFeHByZXNzaW9uICsgXCIpXCI7XG4gICAgfVxuICAgIHZhciBhc3NpZ25tZW50ID0gZ2VuQXNzaWdubWVudENvZGUodmFsdWUsIHZhbHVlRXhwcmVzc2lvbik7XG5cbiAgICBlbC5tb2RlbCA9IHtcbiAgICAgIHZhbHVlOiAoXCIoXCIgKyB2YWx1ZSArIFwiKVwiKSxcbiAgICAgIGV4cHJlc3Npb246IEpTT04uc3RyaW5naWZ5KHZhbHVlKSxcbiAgICAgIGNhbGxiYWNrOiAoXCJmdW5jdGlvbiAoXCIgKyBiYXNlVmFsdWVFeHByZXNzaW9uICsgXCIpIHtcIiArIGFzc2lnbm1lbnQgKyBcIn1cIilcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3NzLXBsYXRmb3JtIGNvZGVnZW4gaGVscGVyIGZvciBnZW5lcmF0aW5nIHYtbW9kZWwgdmFsdWUgYXNzaWdubWVudCBjb2RlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuQXNzaWdubWVudENvZGUgKFxuICAgIHZhbHVlLFxuICAgIGFzc2lnbm1lbnRcbiAgKSB7XG4gICAgdmFyIHJlcyA9IHBhcnNlTW9kZWwodmFsdWUpO1xuICAgIGlmIChyZXMua2V5ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gKHZhbHVlICsgXCI9XCIgKyBhc3NpZ25tZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFwiJHNldChcIiArIChyZXMuZXhwKSArIFwiLCBcIiArIChyZXMua2V5KSArIFwiLCBcIiArIGFzc2lnbm1lbnQgKyBcIilcIilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSB2LW1vZGVsIGV4cHJlc3Npb24gaW50byBhIGJhc2UgcGF0aCBhbmQgYSBmaW5hbCBrZXkgc2VnbWVudC5cbiAgICogSGFuZGxlcyBib3RoIGRvdC1wYXRoIGFuZCBwb3NzaWJsZSBzcXVhcmUgYnJhY2tldHMuXG4gICAqXG4gICAqIFBvc3NpYmxlIGNhc2VzOlxuICAgKlxuICAgKiAtIHRlc3RcbiAgICogLSB0ZXN0W2tleV1cbiAgICogLSB0ZXN0W3Rlc3QxW2tleV1dXG4gICAqIC0gdGVzdFtcImFcIl1ba2V5XVxuICAgKiAtIHh4eC50ZXN0W2FbYV0udGVzdDFba2V5XV1cbiAgICogLSB0ZXN0Lnh4eC5hW1wiYXNhXCJdW3Rlc3QxW2tleV1dXG4gICAqXG4gICAqL1xuXG4gIHZhciBsZW4sIHN0ciwgY2hyLCBpbmRleCQxLCBleHByZXNzaW9uUG9zLCBleHByZXNzaW9uRW5kUG9zO1xuXG5cblxuICBmdW5jdGlvbiBwYXJzZU1vZGVsICh2YWwpIHtcbiAgICAvLyBGaXggaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS9wdWxsLzc3MzBcbiAgICAvLyBhbGxvdyB2LW1vZGVsPVwib2JqLnZhbCBcIiAodHJhaWxpbmcgd2hpdGVzcGFjZSlcbiAgICB2YWwgPSB2YWwudHJpbSgpO1xuICAgIGxlbiA9IHZhbC5sZW5ndGg7XG5cbiAgICBpZiAodmFsLmluZGV4T2YoJ1snKSA8IDAgfHwgdmFsLmxhc3RJbmRleE9mKCddJykgPCBsZW4gLSAxKSB7XG4gICAgICBpbmRleCQxID0gdmFsLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICBpZiAoaW5kZXgkMSA+IC0xKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXhwOiB2YWwuc2xpY2UoMCwgaW5kZXgkMSksXG4gICAgICAgICAga2V5OiAnXCInICsgdmFsLnNsaWNlKGluZGV4JDEgKyAxKSArICdcIidcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBleHA6IHZhbCxcbiAgICAgICAgICBrZXk6IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN0ciA9IHZhbDtcbiAgICBpbmRleCQxID0gZXhwcmVzc2lvblBvcyA9IGV4cHJlc3Npb25FbmRQb3MgPSAwO1xuXG4gICAgd2hpbGUgKCFlb2YoKSkge1xuICAgICAgY2hyID0gbmV4dCgpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoaXNTdHJpbmdTdGFydChjaHIpKSB7XG4gICAgICAgIHBhcnNlU3RyaW5nKGNocik7XG4gICAgICB9IGVsc2UgaWYgKGNociA9PT0gMHg1Qikge1xuICAgICAgICBwYXJzZUJyYWNrZXQoY2hyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXhwOiB2YWwuc2xpY2UoMCwgZXhwcmVzc2lvblBvcyksXG4gICAgICBrZXk6IHZhbC5zbGljZShleHByZXNzaW9uUG9zICsgMSwgZXhwcmVzc2lvbkVuZFBvcylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0ICgpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJDb2RlQXQoKytpbmRleCQxKVxuICB9XG5cbiAgZnVuY3Rpb24gZW9mICgpIHtcbiAgICByZXR1cm4gaW5kZXgkMSA+PSBsZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3RyaW5nU3RhcnQgKGNocikge1xuICAgIHJldHVybiBjaHIgPT09IDB4MjIgfHwgY2hyID09PSAweDI3XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUJyYWNrZXQgKGNocikge1xuICAgIHZhciBpbkJyYWNrZXQgPSAxO1xuICAgIGV4cHJlc3Npb25Qb3MgPSBpbmRleCQxO1xuICAgIHdoaWxlICghZW9mKCkpIHtcbiAgICAgIGNociA9IG5leHQoKTtcbiAgICAgIGlmIChpc1N0cmluZ1N0YXJ0KGNocikpIHtcbiAgICAgICAgcGFyc2VTdHJpbmcoY2hyKTtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmIChjaHIgPT09IDB4NUIpIHsgaW5CcmFja2V0Kys7IH1cbiAgICAgIGlmIChjaHIgPT09IDB4NUQpIHsgaW5CcmFja2V0LS07IH1cbiAgICAgIGlmIChpbkJyYWNrZXQgPT09IDApIHtcbiAgICAgICAgZXhwcmVzc2lvbkVuZFBvcyA9IGluZGV4JDE7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VTdHJpbmcgKGNocikge1xuICAgIHZhciBzdHJpbmdRdW90ZSA9IGNocjtcbiAgICB3aGlsZSAoIWVvZigpKSB7XG4gICAgICBjaHIgPSBuZXh0KCk7XG4gICAgICBpZiAoY2hyID09PSBzdHJpbmdRdW90ZSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciB3YXJuJDE7XG5cbiAgLy8gaW4gc29tZSBjYXNlcywgdGhlIGV2ZW50IHVzZWQgaGFzIHRvIGJlIGRldGVybWluZWQgYXQgcnVudGltZVxuICAvLyBzbyB3ZSB1c2VkIHNvbWUgcmVzZXJ2ZWQgdG9rZW5zIGR1cmluZyBjb21waWxlLlxuICB2YXIgUkFOR0VfVE9LRU4gPSAnX19yJztcbiAgdmFyIENIRUNLQk9YX1JBRElPX1RPS0VOID0gJ19fYyc7XG5cbiAgZnVuY3Rpb24gbW9kZWwgKFxuICAgIGVsLFxuICAgIGRpcixcbiAgICBfd2FyblxuICApIHtcbiAgICB3YXJuJDEgPSBfd2FybjtcbiAgICB2YXIgdmFsdWUgPSBkaXIudmFsdWU7XG4gICAgdmFyIG1vZGlmaWVycyA9IGRpci5tb2RpZmllcnM7XG4gICAgdmFyIHRhZyA9IGVsLnRhZztcbiAgICB2YXIgdHlwZSA9IGVsLmF0dHJzTWFwLnR5cGU7XG5cbiAgICB7XG4gICAgICAvLyBpbnB1dHMgd2l0aCB0eXBlPVwiZmlsZVwiIGFyZSByZWFkIG9ubHkgYW5kIHNldHRpbmcgdGhlIGlucHV0J3NcbiAgICAgIC8vIHZhbHVlIHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAgICBpZiAodGFnID09PSAnaW5wdXQnICYmIHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgXCI8XCIgKyAoZWwudGFnKSArIFwiIHYtbW9kZWw9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCIgdHlwZT1cXFwiZmlsZVxcXCI+OlxcblwiICtcbiAgICAgICAgICBcIkZpbGUgaW5wdXRzIGFyZSByZWFkIG9ubHkuIFVzZSBhIHYtb246Y2hhbmdlIGxpc3RlbmVyIGluc3RlYWQuXCIsXG4gICAgICAgICAgZWwucmF3QXR0cnNNYXBbJ3YtbW9kZWwnXVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbC5jb21wb25lbnQpIHtcbiAgICAgIGdlbkNvbXBvbmVudE1vZGVsKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKTtcbiAgICAgIC8vIGNvbXBvbmVudCB2LW1vZGVsIGRvZXNuJ3QgbmVlZCBleHRyYSBydW50aW1lXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIGdlblNlbGVjdChlbCwgdmFsdWUsIG1vZGlmaWVycyk7XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdpbnB1dCcgJiYgdHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgZ2VuQ2hlY2tib3hNb2RlbChlbCwgdmFsdWUsIG1vZGlmaWVycyk7XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdpbnB1dCcgJiYgdHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgZ2VuUmFkaW9Nb2RlbChlbCwgdmFsdWUsIG1vZGlmaWVycyk7XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdpbnB1dCcgfHwgdGFnID09PSAndGV4dGFyZWEnKSB7XG4gICAgICBnZW5EZWZhdWx0TW9kZWwoZWwsIHZhbHVlLCBtb2RpZmllcnMpO1xuICAgIH0gZWxzZSBpZiAoIWNvbmZpZy5pc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgIGdlbkNvbXBvbmVudE1vZGVsKGVsLCB2YWx1ZSwgbW9kaWZpZXJzKTtcbiAgICAgIC8vIGNvbXBvbmVudCB2LW1vZGVsIGRvZXNuJ3QgbmVlZCBleHRyYSBydW50aW1lXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybiQxKFxuICAgICAgICBcIjxcIiArIChlbC50YWcpICsgXCIgdi1tb2RlbD1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIj46IFwiICtcbiAgICAgICAgXCJ2LW1vZGVsIGlzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBlbGVtZW50IHR5cGUuIFwiICtcbiAgICAgICAgJ0lmIHlvdSBhcmUgd29ya2luZyB3aXRoIGNvbnRlbnRlZGl0YWJsZSwgaXRcXCdzIHJlY29tbWVuZGVkIHRvICcgK1xuICAgICAgICAnd3JhcCBhIGxpYnJhcnkgZGVkaWNhdGVkIGZvciB0aGF0IHB1cnBvc2UgaW5zaWRlIGEgY3VzdG9tIGNvbXBvbmVudC4nLFxuICAgICAgICBlbC5yYXdBdHRyc01hcFsndi1tb2RlbCddXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGVuc3VyZSBydW50aW1lIGRpcmVjdGl2ZSBtZXRhZGF0YVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBnZW5DaGVja2JveE1vZGVsIChcbiAgICBlbCxcbiAgICB2YWx1ZSxcbiAgICBtb2RpZmllcnNcbiAgKSB7XG4gICAgdmFyIG51bWJlciA9IG1vZGlmaWVycyAmJiBtb2RpZmllcnMubnVtYmVyO1xuICAgIHZhciB2YWx1ZUJpbmRpbmcgPSBnZXRCaW5kaW5nQXR0cihlbCwgJ3ZhbHVlJykgfHwgJ251bGwnO1xuICAgIHZhciB0cnVlVmFsdWVCaW5kaW5nID0gZ2V0QmluZGluZ0F0dHIoZWwsICd0cnVlLXZhbHVlJykgfHwgJ3RydWUnO1xuICAgIHZhciBmYWxzZVZhbHVlQmluZGluZyA9IGdldEJpbmRpbmdBdHRyKGVsLCAnZmFsc2UtdmFsdWUnKSB8fCAnZmFsc2UnO1xuICAgIGFkZFByb3AoZWwsICdjaGVja2VkJyxcbiAgICAgIFwiQXJyYXkuaXNBcnJheShcIiArIHZhbHVlICsgXCIpXCIgK1xuICAgICAgXCI/X2koXCIgKyB2YWx1ZSArIFwiLFwiICsgdmFsdWVCaW5kaW5nICsgXCIpPi0xXCIgKyAoXG4gICAgICAgIHRydWVWYWx1ZUJpbmRpbmcgPT09ICd0cnVlJ1xuICAgICAgICAgID8gKFwiOihcIiArIHZhbHVlICsgXCIpXCIpXG4gICAgICAgICAgOiAoXCI6X3EoXCIgKyB2YWx1ZSArIFwiLFwiICsgdHJ1ZVZhbHVlQmluZGluZyArIFwiKVwiKVxuICAgICAgKVxuICAgICk7XG4gICAgYWRkSGFuZGxlcihlbCwgJ2NoYW5nZScsXG4gICAgICBcInZhciAkJGE9XCIgKyB2YWx1ZSArIFwiLFwiICtcbiAgICAgICAgICAnJCRlbD0kZXZlbnQudGFyZ2V0LCcgK1xuICAgICAgICAgIFwiJCRjPSQkZWwuY2hlY2tlZD8oXCIgKyB0cnVlVmFsdWVCaW5kaW5nICsgXCIpOihcIiArIGZhbHNlVmFsdWVCaW5kaW5nICsgXCIpO1wiICtcbiAgICAgICdpZihBcnJheS5pc0FycmF5KCQkYSkpeycgK1xuICAgICAgICBcInZhciAkJHY9XCIgKyAobnVtYmVyID8gJ19uKCcgKyB2YWx1ZUJpbmRpbmcgKyAnKScgOiB2YWx1ZUJpbmRpbmcpICsgXCIsXCIgK1xuICAgICAgICAgICAgJyQkaT1faSgkJGEsJCR2KTsnICtcbiAgICAgICAgXCJpZigkJGVsLmNoZWNrZWQpeyQkaTwwJiYoXCIgKyAoZ2VuQXNzaWdubWVudENvZGUodmFsdWUsICckJGEuY29uY2F0KFskJHZdKScpKSArIFwiKX1cIiArXG4gICAgICAgIFwiZWxzZXskJGk+LTEmJihcIiArIChnZW5Bc3NpZ25tZW50Q29kZSh2YWx1ZSwgJyQkYS5zbGljZSgwLCQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkrMSkpJykpICsgXCIpfVwiICtcbiAgICAgIFwifWVsc2V7XCIgKyAoZ2VuQXNzaWdubWVudENvZGUodmFsdWUsICckJGMnKSkgKyBcIn1cIixcbiAgICAgIG51bGwsIHRydWVcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuUmFkaW9Nb2RlbCAoXG4gICAgZWwsXG4gICAgdmFsdWUsXG4gICAgbW9kaWZpZXJzXG4gICkge1xuICAgIHZhciBudW1iZXIgPSBtb2RpZmllcnMgJiYgbW9kaWZpZXJzLm51bWJlcjtcbiAgICB2YXIgdmFsdWVCaW5kaW5nID0gZ2V0QmluZGluZ0F0dHIoZWwsICd2YWx1ZScpIHx8ICdudWxsJztcbiAgICB2YWx1ZUJpbmRpbmcgPSBudW1iZXIgPyAoXCJfbihcIiArIHZhbHVlQmluZGluZyArIFwiKVwiKSA6IHZhbHVlQmluZGluZztcbiAgICBhZGRQcm9wKGVsLCAnY2hlY2tlZCcsIChcIl9xKFwiICsgdmFsdWUgKyBcIixcIiArIHZhbHVlQmluZGluZyArIFwiKVwiKSk7XG4gICAgYWRkSGFuZGxlcihlbCwgJ2NoYW5nZScsIGdlbkFzc2lnbm1lbnRDb2RlKHZhbHVlLCB2YWx1ZUJpbmRpbmcpLCBudWxsLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlblNlbGVjdCAoXG4gICAgZWwsXG4gICAgdmFsdWUsXG4gICAgbW9kaWZpZXJzXG4gICkge1xuICAgIHZhciBudW1iZXIgPSBtb2RpZmllcnMgJiYgbW9kaWZpZXJzLm51bWJlcjtcbiAgICB2YXIgc2VsZWN0ZWRWYWwgPSBcIkFycmF5LnByb3RvdHlwZS5maWx0ZXJcIiArXG4gICAgICBcIi5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucyxmdW5jdGlvbihvKXtyZXR1cm4gby5zZWxlY3RlZH0pXCIgK1xuICAgICAgXCIubWFwKGZ1bmN0aW9uKG8pe3ZhciB2YWwgPSBcXFwiX3ZhbHVlXFxcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1wiICtcbiAgICAgIFwicmV0dXJuIFwiICsgKG51bWJlciA/ICdfbih2YWwpJyA6ICd2YWwnKSArIFwifSlcIjtcblxuICAgIHZhciBhc3NpZ25tZW50ID0gJyRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXSc7XG4gICAgdmFyIGNvZGUgPSBcInZhciAkJHNlbGVjdGVkVmFsID0gXCIgKyBzZWxlY3RlZFZhbCArIFwiO1wiO1xuICAgIGNvZGUgPSBjb2RlICsgXCIgXCIgKyAoZ2VuQXNzaWdubWVudENvZGUodmFsdWUsIGFzc2lnbm1lbnQpKTtcbiAgICBhZGRIYW5kbGVyKGVsLCAnY2hhbmdlJywgY29kZSwgbnVsbCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5EZWZhdWx0TW9kZWwgKFxuICAgIGVsLFxuICAgIHZhbHVlLFxuICAgIG1vZGlmaWVyc1xuICApIHtcbiAgICB2YXIgdHlwZSA9IGVsLmF0dHJzTWFwLnR5cGU7XG5cbiAgICAvLyB3YXJuIGlmIHYtYmluZDp2YWx1ZSBjb25mbGljdHMgd2l0aCB2LW1vZGVsXG4gICAgLy8gZXhjZXB0IGZvciBpbnB1dHMgd2l0aCB2LWJpbmQ6dHlwZVxuICAgIHtcbiAgICAgIHZhciB2YWx1ZSQxID0gZWwuYXR0cnNNYXBbJ3YtYmluZDp2YWx1ZSddIHx8IGVsLmF0dHJzTWFwWyc6dmFsdWUnXTtcbiAgICAgIHZhciB0eXBlQmluZGluZyA9IGVsLmF0dHJzTWFwWyd2LWJpbmQ6dHlwZSddIHx8IGVsLmF0dHJzTWFwWyc6dHlwZSddO1xuICAgICAgaWYgKHZhbHVlJDEgJiYgIXR5cGVCaW5kaW5nKSB7XG4gICAgICAgIHZhciBiaW5kaW5nID0gZWwuYXR0cnNNYXBbJ3YtYmluZDp2YWx1ZSddID8gJ3YtYmluZDp2YWx1ZScgOiAnOnZhbHVlJztcbiAgICAgICAgd2FybiQxKFxuICAgICAgICAgIGJpbmRpbmcgKyBcIj1cXFwiXCIgKyB2YWx1ZSQxICsgXCJcXFwiIGNvbmZsaWN0cyB3aXRoIHYtbW9kZWwgb24gdGhlIHNhbWUgZWxlbWVudCBcIiArXG4gICAgICAgICAgJ2JlY2F1c2UgdGhlIGxhdHRlciBhbHJlYWR5IGV4cGFuZHMgdG8gYSB2YWx1ZSBiaW5kaW5nIGludGVybmFsbHknLFxuICAgICAgICAgIGVsLnJhd0F0dHJzTWFwW2JpbmRpbmddXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlZiA9IG1vZGlmaWVycyB8fCB7fTtcbiAgICB2YXIgbGF6eSA9IHJlZi5sYXp5O1xuICAgIHZhciBudW1iZXIgPSByZWYubnVtYmVyO1xuICAgIHZhciB0cmltID0gcmVmLnRyaW07XG4gICAgdmFyIG5lZWRDb21wb3NpdGlvbkd1YXJkID0gIWxhenkgJiYgdHlwZSAhPT0gJ3JhbmdlJztcbiAgICB2YXIgZXZlbnQgPSBsYXp5XG4gICAgICA/ICdjaGFuZ2UnXG4gICAgICA6IHR5cGUgPT09ICdyYW5nZSdcbiAgICAgICAgPyBSQU5HRV9UT0tFTlxuICAgICAgICA6ICdpbnB1dCc7XG5cbiAgICB2YXIgdmFsdWVFeHByZXNzaW9uID0gJyRldmVudC50YXJnZXQudmFsdWUnO1xuICAgIGlmICh0cmltKSB7XG4gICAgICB2YWx1ZUV4cHJlc3Npb24gPSBcIiRldmVudC50YXJnZXQudmFsdWUudHJpbSgpXCI7XG4gICAgfVxuICAgIGlmIChudW1iZXIpIHtcbiAgICAgIHZhbHVlRXhwcmVzc2lvbiA9IFwiX24oXCIgKyB2YWx1ZUV4cHJlc3Npb24gKyBcIilcIjtcbiAgICB9XG5cbiAgICB2YXIgY29kZSA9IGdlbkFzc2lnbm1lbnRDb2RlKHZhbHVlLCB2YWx1ZUV4cHJlc3Npb24pO1xuICAgIGlmIChuZWVkQ29tcG9zaXRpb25HdWFyZCkge1xuICAgICAgY29kZSA9IFwiaWYoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpcmV0dXJuO1wiICsgY29kZTtcbiAgICB9XG5cbiAgICBhZGRQcm9wKGVsLCAndmFsdWUnLCAoXCIoXCIgKyB2YWx1ZSArIFwiKVwiKSk7XG4gICAgYWRkSGFuZGxlcihlbCwgZXZlbnQsIGNvZGUsIG51bGwsIHRydWUpO1xuICAgIGlmICh0cmltIHx8IG51bWJlcikge1xuICAgICAgYWRkSGFuZGxlcihlbCwgJ2JsdXInLCAnJGZvcmNlVXBkYXRlKCknKTtcbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICAvLyBub3JtYWxpemUgdi1tb2RlbCBldmVudCB0b2tlbnMgdGhhdCBjYW4gb25seSBiZSBkZXRlcm1pbmVkIGF0IHJ1bnRpbWUuXG4gIC8vIGl0J3MgaW1wb3J0YW50IHRvIHBsYWNlIHRoZSBldmVudCBhcyB0aGUgZmlyc3QgaW4gdGhlIGFycmF5IGJlY2F1c2VcbiAgLy8gdGhlIHdob2xlIHBvaW50IGlzIGVuc3VyaW5nIHRoZSB2LW1vZGVsIGNhbGxiYWNrIGdldHMgY2FsbGVkIGJlZm9yZVxuICAvLyB1c2VyLWF0dGFjaGVkIGhhbmRsZXJzLlxuICBmdW5jdGlvbiBub3JtYWxpemVFdmVudHMgKG9uKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGlzRGVmKG9uW1JBTkdFX1RPS0VOXSkpIHtcbiAgICAgIC8vIElFIGlucHV0W3R5cGU9cmFuZ2VdIG9ubHkgc3VwcG9ydHMgYGNoYW5nZWAgZXZlbnRcbiAgICAgIHZhciBldmVudCA9IGlzSUUgPyAnY2hhbmdlJyA6ICdpbnB1dCc7XG4gICAgICBvbltldmVudF0gPSBbXS5jb25jYXQob25bUkFOR0VfVE9LRU5dLCBvbltldmVudF0gfHwgW10pO1xuICAgICAgZGVsZXRlIG9uW1JBTkdFX1RPS0VOXTtcbiAgICB9XG4gICAgLy8gVGhpcyB3YXMgb3JpZ2luYWxseSBpbnRlbmRlZCB0byBmaXggIzQ1MjEgYnV0IG5vIGxvbmdlciBuZWNlc3NhcnlcbiAgICAvLyBhZnRlciAyLjUuIEtlZXBpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBnZW5lcmF0ZWQgY29kZSBmcm9tIDwgMi40XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGlzRGVmKG9uW0NIRUNLQk9YX1JBRElPX1RPS0VOXSkpIHtcbiAgICAgIG9uLmNoYW5nZSA9IFtdLmNvbmNhdChvbltDSEVDS0JPWF9SQURJT19UT0tFTl0sIG9uLmNoYW5nZSB8fCBbXSk7XG4gICAgICBkZWxldGUgb25bQ0hFQ0tCT1hfUkFESU9fVE9LRU5dO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0YXJnZXQkMTtcblxuICBmdW5jdGlvbiBjcmVhdGVPbmNlSGFuZGxlciQxIChldmVudCwgaGFuZGxlciwgY2FwdHVyZSkge1xuICAgIHZhciBfdGFyZ2V0ID0gdGFyZ2V0JDE7IC8vIHNhdmUgY3VycmVudCB0YXJnZXQgZWxlbWVudCBpbiBjbG9zdXJlXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG9uY2VIYW5kbGVyICgpIHtcbiAgICAgIHZhciByZXMgPSBoYW5kbGVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICAgIHJlbW92ZSQyKGV2ZW50LCBvbmNlSGFuZGxlciwgY2FwdHVyZSwgX3RhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gIzk0NDY6IEZpcmVmb3ggPD0gNTMgKGluIHBhcnRpY3VsYXIsIEVTUiA1MikgaGFzIGluY29ycmVjdCBFdmVudC50aW1lU3RhbXBcbiAgLy8gaW1wbGVtZW50YXRpb24gYW5kIGRvZXMgbm90IGZpcmUgbWljcm90YXNrcyBpbiBiZXR3ZWVuIGV2ZW50IHByb3BhZ2F0aW9uLCBzb1xuICAvLyBzYWZlIHRvIGV4Y2x1ZGUuXG4gIHZhciB1c2VNaWNyb3Rhc2tGaXggPSBpc1VzaW5nTWljcm9UYXNrICYmICEoaXNGRiAmJiBOdW1iZXIoaXNGRlsxXSkgPD0gNTMpO1xuXG4gIGZ1bmN0aW9uIGFkZCQxIChcbiAgICBuYW1lLFxuICAgIGhhbmRsZXIsXG4gICAgY2FwdHVyZSxcbiAgICBwYXNzaXZlXG4gICkge1xuICAgIC8vIGFzeW5jIGVkZ2UgY2FzZSAjNjU2NjogaW5uZXIgY2xpY2sgZXZlbnQgdHJpZ2dlcnMgcGF0Y2gsIGV2ZW50IGhhbmRsZXJcbiAgICAvLyBhdHRhY2hlZCB0byBvdXRlciBlbGVtZW50IGR1cmluZyBwYXRjaCwgYW5kIHRyaWdnZXJlZCBhZ2Fpbi4gVGhpc1xuICAgIC8vIGhhcHBlbnMgYmVjYXVzZSBicm93c2VycyBmaXJlIG1pY3JvdGFzayB0aWNrcyBiZXR3ZWVuIGV2ZW50IHByb3BhZ2F0aW9uLlxuICAgIC8vIHRoZSBzb2x1dGlvbiBpcyBzaW1wbGU6IHdlIHNhdmUgdGhlIHRpbWVzdGFtcCB3aGVuIGEgaGFuZGxlciBpcyBhdHRhY2hlZCxcbiAgICAvLyBhbmQgdGhlIGhhbmRsZXIgd291bGQgb25seSBmaXJlIGlmIHRoZSBldmVudCBwYXNzZWQgdG8gaXQgd2FzIGZpcmVkXG4gICAgLy8gQUZURVIgaXQgd2FzIGF0dGFjaGVkLlxuICAgIGlmICh1c2VNaWNyb3Rhc2tGaXgpIHtcbiAgICAgIHZhciBhdHRhY2hlZFRpbWVzdGFtcCA9IGN1cnJlbnRGbHVzaFRpbWVzdGFtcDtcbiAgICAgIHZhciBvcmlnaW5hbCA9IGhhbmRsZXI7XG4gICAgICBoYW5kbGVyID0gb3JpZ2luYWwuX3dyYXBwZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgLy8gbm8gYnViYmxpbmcsIHNob3VsZCBhbHdheXMgZmlyZS5cbiAgICAgICAgICAvLyB0aGlzIGlzIGp1c3QgYSBzYWZldHkgbmV0IGluIGNhc2UgZXZlbnQudGltZVN0YW1wIGlzIHVucmVsaWFibGUgaW5cbiAgICAgICAgICAvLyBjZXJ0YWluIHdlaXJkIGVudmlyb25tZW50cy4uLlxuICAgICAgICAgIGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQgfHxcbiAgICAgICAgICAvLyBldmVudCBpcyBmaXJlZCBhZnRlciBoYW5kbGVyIGF0dGFjaG1lbnRcbiAgICAgICAgICBlLnRpbWVTdGFtcCA+PSBhdHRhY2hlZFRpbWVzdGFtcCB8fFxuICAgICAgICAgIC8vIGJhaWwgZm9yIGVudmlyb25tZW50cyB0aGF0IGhhdmUgYnVnZ3kgZXZlbnQudGltZVN0YW1wIGltcGxlbWVudGF0aW9uc1xuICAgICAgICAgIC8vICM5NDYyIGlPUyA5IGJ1ZzogZXZlbnQudGltZVN0YW1wIGlzIDAgYWZ0ZXIgaGlzdG9yeS5wdXNoU3RhdGVcbiAgICAgICAgICAvLyAjOTY4MSBRdFdlYkVuZ2luZSBldmVudC50aW1lU3RhbXAgaXMgbmVnYXRpdmUgdmFsdWVcbiAgICAgICAgICBlLnRpbWVTdGFtcCA8PSAwIHx8XG4gICAgICAgICAgLy8gIzk0NDggYmFpbCBpZiBldmVudCBpcyBmaXJlZCBpbiBhbm90aGVyIGRvY3VtZW50IGluIGEgbXVsdGktcGFnZVxuICAgICAgICAgIC8vIGVsZWN0cm9uL253LmpzIGFwcCwgc2luY2UgZXZlbnQudGltZVN0YW1wIHdpbGwgYmUgdXNpbmcgYSBkaWZmZXJlbnRcbiAgICAgICAgICAvLyBzdGFydGluZyByZWZlcmVuY2VcbiAgICAgICAgICBlLnRhcmdldC5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICB0YXJnZXQkMS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgbmFtZSxcbiAgICAgIGhhbmRsZXIsXG4gICAgICBzdXBwb3J0c1Bhc3NpdmVcbiAgICAgICAgPyB7IGNhcHR1cmU6IGNhcHR1cmUsIHBhc3NpdmU6IHBhc3NpdmUgfVxuICAgICAgICA6IGNhcHR1cmVcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlJDIgKFxuICAgIG5hbWUsXG4gICAgaGFuZGxlcixcbiAgICBjYXB0dXJlLFxuICAgIF90YXJnZXRcbiAgKSB7XG4gICAgKF90YXJnZXQgfHwgdGFyZ2V0JDEpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBuYW1lLFxuICAgICAgaGFuZGxlci5fd3JhcHBlciB8fCBoYW5kbGVyLFxuICAgICAgY2FwdHVyZVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVET01MaXN0ZW5lcnMgKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGlmIChpc1VuZGVmKG9sZFZub2RlLmRhdGEub24pICYmIGlzVW5kZWYodm5vZGUuZGF0YS5vbikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgb24gPSB2bm9kZS5kYXRhLm9uIHx8IHt9O1xuICAgIHZhciBvbGRPbiA9IG9sZFZub2RlLmRhdGEub24gfHwge307XG4gICAgdGFyZ2V0JDEgPSB2bm9kZS5lbG07XG4gICAgbm9ybWFsaXplRXZlbnRzKG9uKTtcbiAgICB1cGRhdGVMaXN0ZW5lcnMob24sIG9sZE9uLCBhZGQkMSwgcmVtb3ZlJDIsIGNyZWF0ZU9uY2VIYW5kbGVyJDEsIHZub2RlLmNvbnRleHQpO1xuICAgIHRhcmdldCQxID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFyIGV2ZW50cyA9IHtcbiAgICBjcmVhdGU6IHVwZGF0ZURPTUxpc3RlbmVycyxcbiAgICB1cGRhdGU6IHVwZGF0ZURPTUxpc3RlbmVyc1xuICB9O1xuXG4gIC8qICAqL1xuXG4gIHZhciBzdmdDb250YWluZXI7XG5cbiAgZnVuY3Rpb24gdXBkYXRlRE9NUHJvcHMgKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGlmIChpc1VuZGVmKG9sZFZub2RlLmRhdGEuZG9tUHJvcHMpICYmIGlzVW5kZWYodm5vZGUuZGF0YS5kb21Qcm9wcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIga2V5LCBjdXI7XG4gICAgdmFyIGVsbSA9IHZub2RlLmVsbTtcbiAgICB2YXIgb2xkUHJvcHMgPSBvbGRWbm9kZS5kYXRhLmRvbVByb3BzIHx8IHt9O1xuICAgIHZhciBwcm9wcyA9IHZub2RlLmRhdGEuZG9tUHJvcHMgfHwge307XG4gICAgLy8gY2xvbmUgb2JzZXJ2ZWQgb2JqZWN0cywgYXMgdGhlIHVzZXIgcHJvYmFibHkgd2FudHMgdG8gbXV0YXRlIGl0XG4gICAgaWYgKGlzRGVmKHByb3BzLl9fb2JfXykpIHtcbiAgICAgIHByb3BzID0gdm5vZGUuZGF0YS5kb21Qcm9wcyA9IGV4dGVuZCh7fSwgcHJvcHMpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9sZFByb3BzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvcHMpKSB7XG4gICAgICAgIGVsbVtrZXldID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGN1ciA9IHByb3BzW2tleV07XG4gICAgICAvLyBpZ25vcmUgY2hpbGRyZW4gaWYgdGhlIG5vZGUgaGFzIHRleHRDb250ZW50IG9yIGlubmVySFRNTCxcbiAgICAgIC8vIGFzIHRoZXNlIHdpbGwgdGhyb3cgYXdheSBleGlzdGluZyBET00gbm9kZXMgYW5kIGNhdXNlIHJlbW92YWwgZXJyb3JzXG4gICAgICAvLyBvbiBzdWJzZXF1ZW50IHBhdGNoZXMgKCMzMzYwKVxuICAgICAgaWYgKGtleSA9PT0gJ3RleHRDb250ZW50JyB8fCBrZXkgPT09ICdpbm5lckhUTUwnKSB7XG4gICAgICAgIGlmICh2bm9kZS5jaGlsZHJlbikgeyB2bm9kZS5jaGlsZHJlbi5sZW5ndGggPSAwOyB9XG4gICAgICAgIGlmIChjdXIgPT09IG9sZFByb3BzW2tleV0pIHsgY29udGludWUgfVxuICAgICAgICAvLyAjNjYwMSB3b3JrIGFyb3VuZCBDaHJvbWUgdmVyc2lvbiA8PSA1NSBidWcgd2hlcmUgc2luZ2xlIHRleHROb2RlXG4gICAgICAgIC8vIHJlcGxhY2VkIGJ5IGlubmVySFRNTC90ZXh0Q29udGVudCByZXRhaW5zIGl0cyBwYXJlbnROb2RlIHByb3BlcnR5XG4gICAgICAgIGlmIChlbG0uY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBlbG0ucmVtb3ZlQ2hpbGQoZWxtLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICd2YWx1ZScgJiYgZWxtLnRhZ05hbWUgIT09ICdQUk9HUkVTUycpIHtcbiAgICAgICAgLy8gc3RvcmUgdmFsdWUgYXMgX3ZhbHVlIGFzIHdlbGwgc2luY2VcbiAgICAgICAgLy8gbm9uLXN0cmluZyB2YWx1ZXMgd2lsbCBiZSBzdHJpbmdpZmllZFxuICAgICAgICBlbG0uX3ZhbHVlID0gY3VyO1xuICAgICAgICAvLyBhdm9pZCByZXNldHRpbmcgY3Vyc29yIHBvc2l0aW9uIHdoZW4gdmFsdWUgaXMgdGhlIHNhbWVcbiAgICAgICAgdmFyIHN0ckN1ciA9IGlzVW5kZWYoY3VyKSA/ICcnIDogU3RyaW5nKGN1cik7XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGVWYWx1ZShlbG0sIHN0ckN1cikpIHtcbiAgICAgICAgICBlbG0udmFsdWUgPSBzdHJDdXI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaW5uZXJIVE1MJyAmJiBpc1NWRyhlbG0udGFnTmFtZSkgJiYgaXNVbmRlZihlbG0uaW5uZXJIVE1MKSkge1xuICAgICAgICAvLyBJRSBkb2Vzbid0IHN1cHBvcnQgaW5uZXJIVE1MIGZvciBTVkcgZWxlbWVudHNcbiAgICAgICAgc3ZnQ29udGFpbmVyID0gc3ZnQ29udGFpbmVyIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdmdDb250YWluZXIuaW5uZXJIVE1MID0gXCI8c3ZnPlwiICsgY3VyICsgXCI8L3N2Zz5cIjtcbiAgICAgICAgdmFyIHN2ZyA9IHN2Z0NvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICB3aGlsZSAoZWxtLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBlbG0ucmVtb3ZlQ2hpbGQoZWxtLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChzdmcuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIGVsbS5hcHBlbmRDaGlsZChzdmcuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIC8vIHNraXAgdGhlIHVwZGF0ZSBpZiBvbGQgYW5kIG5ldyBWRE9NIHN0YXRlIGlzIHRoZSBzYW1lLlxuICAgICAgICAvLyBgdmFsdWVgIGlzIGhhbmRsZWQgc2VwYXJhdGVseSBiZWNhdXNlIHRoZSBET00gdmFsdWUgbWF5IGJlIHRlbXBvcmFyaWx5XG4gICAgICAgIC8vIG91dCBvZiBzeW5jIHdpdGggVkRPTSBzdGF0ZSBkdWUgdG8gZm9jdXMsIGNvbXBvc2l0aW9uIGFuZCBtb2RpZmllcnMuXG4gICAgICAgIC8vIFRoaXMgICM0NTIxIGJ5IHNraXBwaW5nIHRoZSB1bm5lY2VzYXJyeSBgY2hlY2tlZGAgdXBkYXRlLlxuICAgICAgICBjdXIgIT09IG9sZFByb3BzW2tleV1cbiAgICAgICkge1xuICAgICAgICAvLyBzb21lIHByb3BlcnR5IHVwZGF0ZXMgY2FuIHRocm93XG4gICAgICAgIC8vIGUuZy4gYHZhbHVlYCBvbiA8cHJvZ3Jlc3M+IHcvIG5vbi1maW5pdGUgdmFsdWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBlbG1ba2V5XSA9IGN1cjtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBjaGVjayBwbGF0Zm9ybXMvd2ViL3V0aWwvYXR0cnMuanMgYWNjZXB0VmFsdWVcblxuXG4gIGZ1bmN0aW9uIHNob3VsZFVwZGF0ZVZhbHVlIChlbG0sIGNoZWNrVmFsKSB7XG4gICAgcmV0dXJuICghZWxtLmNvbXBvc2luZyAmJiAoXG4gICAgICBlbG0udGFnTmFtZSA9PT0gJ09QVElPTicgfHxcbiAgICAgIGlzTm90SW5Gb2N1c0FuZERpcnR5KGVsbSwgY2hlY2tWYWwpIHx8XG4gICAgICBpc0RpcnR5V2l0aE1vZGlmaWVycyhlbG0sIGNoZWNrVmFsKVxuICAgICkpXG4gIH1cblxuICBmdW5jdGlvbiBpc05vdEluRm9jdXNBbmREaXJ0eSAoZWxtLCBjaGVja1ZhbCkge1xuICAgIC8vIHJldHVybiB0cnVlIHdoZW4gdGV4dGJveCAoLm51bWJlciBhbmQgLnRyaW0pIGxvc2VzIGZvY3VzIGFuZCBpdHMgdmFsdWUgaXNcbiAgICAvLyBub3QgZXF1YWwgdG8gdGhlIHVwZGF0ZWQgdmFsdWVcbiAgICB2YXIgbm90SW5Gb2N1cyA9IHRydWU7XG4gICAgLy8gIzYxNTdcbiAgICAvLyB3b3JrIGFyb3VuZCBJRSBidWcgd2hlbiBhY2Nlc3NpbmcgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbiBhbiBpZnJhbWVcbiAgICB0cnkgeyBub3RJbkZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZWxtOyB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBub3RJbkZvY3VzICYmIGVsbS52YWx1ZSAhPT0gY2hlY2tWYWxcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRGlydHlXaXRoTW9kaWZpZXJzIChlbG0sIG5ld1ZhbCkge1xuICAgIHZhciB2YWx1ZSA9IGVsbS52YWx1ZTtcbiAgICB2YXIgbW9kaWZpZXJzID0gZWxtLl92TW9kaWZpZXJzOyAvLyBpbmplY3RlZCBieSB2LW1vZGVsIHJ1bnRpbWVcbiAgICBpZiAoaXNEZWYobW9kaWZpZXJzKSkge1xuICAgICAgaWYgKG1vZGlmaWVycy5udW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRvTnVtYmVyKHZhbHVlKSAhPT0gdG9OdW1iZXIobmV3VmFsKVxuICAgICAgfVxuICAgICAgaWYgKG1vZGlmaWVycy50cmltKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS50cmltKCkgIT09IG5ld1ZhbC50cmltKClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlICE9PSBuZXdWYWxcbiAgfVxuXG4gIHZhciBkb21Qcm9wcyA9IHtcbiAgICBjcmVhdGU6IHVwZGF0ZURPTVByb3BzLFxuICAgIHVwZGF0ZTogdXBkYXRlRE9NUHJvcHNcbiAgfTtcblxuICAvKiAgKi9cblxuICB2YXIgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICB2YXIgcmVzID0ge307XG4gICAgdmFyIGxpc3REZWxpbWl0ZXIgPSAvOyg/IVteKF0qXFwpKS9nO1xuICAgIHZhciBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzXG4gIH0pO1xuXG4gIC8vIG1lcmdlIHN0YXRpYyBhbmQgZHluYW1pYyBzdHlsZSBkYXRhIG9uIHRoZSBzYW1lIHZub2RlXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlRGF0YSAoZGF0YSkge1xuICAgIHZhciBzdHlsZSA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhkYXRhLnN0eWxlKTtcbiAgICAvLyBzdGF0aWMgc3R5bGUgaXMgcHJlLXByb2Nlc3NlZCBpbnRvIGFuIG9iamVjdCBkdXJpbmcgY29tcGlsYXRpb25cbiAgICAvLyBhbmQgaXMgYWx3YXlzIGEgZnJlc2ggb2JqZWN0LCBzbyBpdCdzIHNhZmUgdG8gbWVyZ2UgaW50byBpdFxuICAgIHJldHVybiBkYXRhLnN0YXRpY1N0eWxlXG4gICAgICA/IGV4dGVuZChkYXRhLnN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICAgIDogc3R5bGVcbiAgfVxuXG4gIC8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbiAgZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nIChiaW5kaW5nU3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiaW5kaW5nU3R5bGUpKSB7XG4gICAgICByZXR1cm4gdG9PYmplY3QoYmluZGluZ1N0eWxlKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdTdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBwYXJzZVN0eWxlVGV4dChiaW5kaW5nU3R5bGUpXG4gICAgfVxuICAgIHJldHVybiBiaW5kaW5nU3R5bGVcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJlbnQgY29tcG9uZW50IHN0eWxlIHNob3VsZCBiZSBhZnRlciBjaGlsZCdzXG4gICAqIHNvIHRoYXQgcGFyZW50IGNvbXBvbmVudCdzIHN0eWxlIGNvdWxkIG92ZXJyaWRlIGl0XG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHlsZSAodm5vZGUsIGNoZWNrQ2hpbGQpIHtcbiAgICB2YXIgcmVzID0ge307XG4gICAgdmFyIHN0eWxlRGF0YTtcblxuICAgIGlmIChjaGVja0NoaWxkKSB7XG4gICAgICB2YXIgY2hpbGROb2RlID0gdm5vZGU7XG4gICAgICB3aGlsZSAoY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjaGlsZE5vZGUgJiYgY2hpbGROb2RlLmRhdGEgJiZcbiAgICAgICAgICAoc3R5bGVEYXRhID0gbm9ybWFsaXplU3R5bGVEYXRhKGNoaWxkTm9kZS5kYXRhKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgoc3R5bGVEYXRhID0gbm9ybWFsaXplU3R5bGVEYXRhKHZub2RlLmRhdGEpKSkge1xuICAgICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50Tm9kZSA9IHZub2RlO1xuICAgIHdoaWxlICgocGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50KSkge1xuICAgICAgaWYgKHBhcmVudE5vZGUuZGF0YSAmJiAoc3R5bGVEYXRhID0gbm9ybWFsaXplU3R5bGVEYXRhKHBhcmVudE5vZGUuZGF0YSkpKSB7XG4gICAgICAgIGV4dGVuZChyZXMsIHN0eWxlRGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBjc3NWYXJSRSA9IC9eLS0vO1xuICB2YXIgaW1wb3J0YW50UkUgPSAvXFxzKiFpbXBvcnRhbnQkLztcbiAgdmFyIHNldFByb3AgPSBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChjc3NWYXJSRS50ZXN0KG5hbWUpKSB7XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaW1wb3J0YW50UkUudGVzdCh2YWwpKSB7XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShoeXBoZW5hdGUobmFtZSksIHZhbC5yZXBsYWNlKGltcG9ydGFudFJFLCAnJyksICdpbXBvcnRhbnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplKG5hbWUpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAvLyBTdXBwb3J0IHZhbHVlcyBhcnJheSBjcmVhdGVkIGJ5IGF1dG9wcmVmaXhlciwgZS5nLlxuICAgICAgICAvLyB7ZGlzcGxheTogW1wiLXdlYmtpdC1ib3hcIiwgXCItbXMtZmxleGJveFwiLCBcImZsZXhcIl19XG4gICAgICAgIC8vIFNldCB0aGVtIG9uZSBieSBvbmUsIGFuZCB0aGUgYnJvd3NlciB3aWxsIG9ubHkgc2V0IHRob3NlIGl0IGNhbiByZWNvZ25pemVcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGVsLnN0eWxlW25vcm1hbGl6ZWROYW1lXSA9IHZhbFtpXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc3R5bGVbbm9ybWFsaXplZE5hbWVdID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgdmVuZG9yTmFtZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnbXMnXTtcblxuICB2YXIgZW1wdHlTdHlsZTtcbiAgdmFyIG5vcm1hbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAocHJvcCkge1xuICAgIGVtcHR5U3R5bGUgPSBlbXB0eVN0eWxlIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuICAgIHByb3AgPSBjYW1lbGl6ZShwcm9wKTtcbiAgICBpZiAocHJvcCAhPT0gJ2ZpbHRlcicgJiYgKHByb3AgaW4gZW1wdHlTdHlsZSkpIHtcbiAgICAgIHJldHVybiBwcm9wXG4gICAgfVxuICAgIHZhciBjYXBOYW1lID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG5hbWUgPSB2ZW5kb3JOYW1lc1tpXSArIGNhcE5hbWU7XG4gICAgICBpZiAobmFtZSBpbiBlbXB0eVN0eWxlKSB7XG4gICAgICAgIHJldHVybiBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVTdHlsZSAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIHZhciBvbGREYXRhID0gb2xkVm5vZGUuZGF0YTtcblxuICAgIGlmIChpc1VuZGVmKGRhdGEuc3RhdGljU3R5bGUpICYmIGlzVW5kZWYoZGF0YS5zdHlsZSkgJiZcbiAgICAgIGlzVW5kZWYob2xkRGF0YS5zdGF0aWNTdHlsZSkgJiYgaXNVbmRlZihvbGREYXRhLnN0eWxlKVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGN1ciwgbmFtZTtcbiAgICB2YXIgZWwgPSB2bm9kZS5lbG07XG4gICAgdmFyIG9sZFN0YXRpY1N0eWxlID0gb2xkRGF0YS5zdGF0aWNTdHlsZTtcbiAgICB2YXIgb2xkU3R5bGVCaW5kaW5nID0gb2xkRGF0YS5ub3JtYWxpemVkU3R5bGUgfHwgb2xkRGF0YS5zdHlsZSB8fCB7fTtcblxuICAgIC8vIGlmIHN0YXRpYyBzdHlsZSBleGlzdHMsIHN0eWxlYmluZGluZyBhbHJlYWR5IG1lcmdlZCBpbnRvIGl0IHdoZW4gZG9pbmcgbm9ybWFsaXplU3R5bGVEYXRhXG4gICAgdmFyIG9sZFN0eWxlID0gb2xkU3RhdGljU3R5bGUgfHwgb2xkU3R5bGVCaW5kaW5nO1xuXG4gICAgdmFyIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKHZub2RlLmRhdGEuc3R5bGUpIHx8IHt9O1xuXG4gICAgLy8gc3RvcmUgbm9ybWFsaXplZCBzdHlsZSB1bmRlciBhIGRpZmZlcmVudCBrZXkgZm9yIG5leHQgZGlmZlxuICAgIC8vIG1ha2Ugc3VyZSB0byBjbG9uZSBpdCBpZiBpdCdzIHJlYWN0aXZlLCBzaW5jZSB0aGUgdXNlciBsaWtlbHkgd2FudHNcbiAgICAvLyB0byBtdXRhdGUgaXQuXG4gICAgdm5vZGUuZGF0YS5ub3JtYWxpemVkU3R5bGUgPSBpc0RlZihzdHlsZS5fX29iX18pXG4gICAgICA/IGV4dGVuZCh7fSwgc3R5bGUpXG4gICAgICA6IHN0eWxlO1xuXG4gICAgdmFyIG5ld1N0eWxlID0gZ2V0U3R5bGUodm5vZGUsIHRydWUpO1xuXG4gICAgZm9yIChuYW1lIGluIG9sZFN0eWxlKSB7XG4gICAgICBpZiAoaXNVbmRlZihuZXdTdHlsZVtuYW1lXSkpIHtcbiAgICAgICAgc2V0UHJvcChlbCwgbmFtZSwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKG5hbWUgaW4gbmV3U3R5bGUpIHtcbiAgICAgIGN1ciA9IG5ld1N0eWxlW25hbWVdO1xuICAgICAgaWYgKGN1ciAhPT0gb2xkU3R5bGVbbmFtZV0pIHtcbiAgICAgICAgLy8gaWU5IHNldHRpbmcgdG8gbnVsbCBoYXMgbm8gZWZmZWN0LCBtdXN0IHVzZSBlbXB0eSBzdHJpbmdcbiAgICAgICAgc2V0UHJvcChlbCwgbmFtZSwgY3VyID09IG51bGwgPyAnJyA6IGN1cik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHN0eWxlID0ge1xuICAgIGNyZWF0ZTogdXBkYXRlU3R5bGUsXG4gICAgdXBkYXRlOiB1cGRhdGVTdHlsZVxuICB9O1xuXG4gIC8qICAqL1xuXG4gIHZhciB3aGl0ZXNwYWNlUkUgPSAvXFxzKy87XG5cbiAgLyoqXG4gICAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICAgKiBTVkcgZWxlbWVudHMgaW4gSUVcbiAgICovXG4gIGZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgIGNscy5zcGxpdCh3aGl0ZXNwYWNlUkUpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoYyk7IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAgICogU1ZHIGVsZW1lbnRzIGluIElFXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVDbGFzcyAoZWwsIGNscykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICBjbHMuc3BsaXQod2hpdGVzcGFjZVJFKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpOyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgIH1cbiAgICAgIGlmICghZWwuY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgICB2YXIgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgICB9XG4gICAgICBjdXIgPSBjdXIudHJpbSgpO1xuICAgICAgaWYgKGN1cikge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiByZXNvbHZlVHJhbnNpdGlvbiAoZGVmJCQxKSB7XG4gICAgaWYgKCFkZWYkJDEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0eXBlb2YgZGVmJCQxID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIHJlcyA9IHt9O1xuICAgICAgaWYgKGRlZiQkMS5jc3MgIT09IGZhbHNlKSB7XG4gICAgICAgIGV4dGVuZChyZXMsIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZiQkMS5uYW1lIHx8ICd2JykpO1xuICAgICAgfVxuICAgICAgZXh0ZW5kKHJlcywgZGVmJCQxKTtcbiAgICAgIHJldHVybiByZXNcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYXV0b0Nzc1RyYW5zaXRpb24oZGVmJCQxKVxuICAgIH1cbiAgfVxuXG4gIHZhciBhdXRvQ3NzVHJhbnNpdGlvbiA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRlckNsYXNzOiAobmFtZSArIFwiLWVudGVyXCIpLFxuICAgICAgZW50ZXJUb0NsYXNzOiAobmFtZSArIFwiLWVudGVyLXRvXCIpLFxuICAgICAgZW50ZXJBY3RpdmVDbGFzczogKG5hbWUgKyBcIi1lbnRlci1hY3RpdmVcIiksXG4gICAgICBsZWF2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlXCIpLFxuICAgICAgbGVhdmVUb0NsYXNzOiAobmFtZSArIFwiLWxlYXZlLXRvXCIpLFxuICAgICAgbGVhdmVBY3RpdmVDbGFzczogKG5hbWUgKyBcIi1sZWF2ZS1hY3RpdmVcIilcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBoYXNUcmFuc2l0aW9uID0gaW5Ccm93c2VyICYmICFpc0lFOTtcbiAgdmFyIFRSQU5TSVRJT04gPSAndHJhbnNpdGlvbic7XG4gIHZhciBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcblxuICAvLyBUcmFuc2l0aW9uIHByb3BlcnR5L2V2ZW50IHNuaWZmaW5nXG4gIHZhciB0cmFuc2l0aW9uUHJvcCA9ICd0cmFuc2l0aW9uJztcbiAgdmFyIHRyYW5zaXRpb25FbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kJztcbiAgdmFyIGFuaW1hdGlvblByb3AgPSAnYW5pbWF0aW9uJztcbiAgdmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gJ2FuaW1hdGlvbmVuZCc7XG4gIGlmIChoYXNUcmFuc2l0aW9uKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHdpbmRvdy5vbnRyYW5zaXRpb25lbmQgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgd2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCAhPT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICB0cmFuc2l0aW9uUHJvcCA9ICdXZWJraXRUcmFuc2l0aW9uJztcbiAgICAgIHRyYW5zaXRpb25FbmRFdmVudCA9ICd3ZWJraXRUcmFuc2l0aW9uRW5kJztcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5vbmFuaW1hdGlvbmVuZCA9PT0gdW5kZWZpbmVkICYmXG4gICAgICB3aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgYW5pbWF0aW9uUHJvcCA9ICdXZWJraXRBbmltYXRpb24nO1xuICAgICAgYW5pbWF0aW9uRW5kRXZlbnQgPSAnd2Via2l0QW5pbWF0aW9uRW5kJztcbiAgICB9XG4gIH1cblxuICAvLyBiaW5kaW5nIHRvIHdpbmRvdyBpcyBuZWNlc3NhcnkgdG8gbWFrZSBob3QgcmVsb2FkIHdvcmsgaW4gSUUgaW4gc3RyaWN0IG1vZGVcbiAgdmFyIHJhZiA9IGluQnJvd3NlclxuICAgID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxuICAgICAgOiBzZXRUaW1lb3V0XG4gICAgOiAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH07XG5cbiAgZnVuY3Rpb24gbmV4dEZyYW1lIChmbikge1xuICAgIHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICByYWYoZm4pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVHJhbnNpdGlvbkNsYXNzIChlbCwgY2xzKSB7XG4gICAgdmFyIHRyYW5zaXRpb25DbGFzc2VzID0gZWwuX3RyYW5zaXRpb25DbGFzc2VzIHx8IChlbC5fdHJhbnNpdGlvbkNsYXNzZXMgPSBbXSk7XG4gICAgaWYgKHRyYW5zaXRpb25DbGFzc2VzLmluZGV4T2YoY2xzKSA8IDApIHtcbiAgICAgIHRyYW5zaXRpb25DbGFzc2VzLnB1c2goY2xzKTtcbiAgICAgIGFkZENsYXNzKGVsLCBjbHMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb25DbGFzcyAoZWwsIGNscykge1xuICAgIGlmIChlbC5fdHJhbnNpdGlvbkNsYXNzZXMpIHtcbiAgICAgIHJlbW92ZShlbC5fdHJhbnNpdGlvbkNsYXNzZXMsIGNscyk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGVsLCBjbHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2hlblRyYW5zaXRpb25FbmRzIChcbiAgICBlbCxcbiAgICBleHBlY3RlZFR5cGUsXG4gICAgY2JcbiAgKSB7XG4gICAgdmFyIHJlZiA9IGdldFRyYW5zaXRpb25JbmZvKGVsLCBleHBlY3RlZFR5cGUpO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIHRpbWVvdXQgPSByZWYudGltZW91dDtcbiAgICB2YXIgcHJvcENvdW50ID0gcmVmLnByb3BDb3VudDtcbiAgICBpZiAoIXR5cGUpIHsgcmV0dXJuIGNiKCkgfVxuICAgIHZhciBldmVudCA9IHR5cGUgPT09IFRSQU5TSVRJT04gPyB0cmFuc2l0aW9uRW5kRXZlbnQgOiBhbmltYXRpb25FbmRFdmVudDtcbiAgICB2YXIgZW5kZWQgPSAwO1xuICAgIHZhciBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZCk7XG4gICAgICBjYigpO1xuICAgIH07XG4gICAgdmFyIG9uRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgaWYgKCsrZW5kZWQgPj0gcHJvcENvdW50KSB7XG4gICAgICAgICAgZW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGVuZGVkIDwgcHJvcENvdW50KSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgfVxuICAgIH0sIHRpbWVvdXQgKyAxKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZCk7XG4gIH1cblxuICB2YXIgdHJhbnNmb3JtUkUgPSAvXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvO1xuXG4gIGZ1bmN0aW9uIGdldFRyYW5zaXRpb25JbmZvIChlbCwgZXhwZWN0ZWRUeXBlKSB7XG4gICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAvLyBKU0RPTSBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gICAgdmFyIHRyYW5zaXRpb25EZWxheXMgPSAoc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ0RlbGF5J10gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb25zID0gKHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEdXJhdGlvbiddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICB2YXIgdHJhbnNpdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KHRyYW5zaXRpb25EZWxheXMsIHRyYW5zaXRpb25EdXJhdGlvbnMpO1xuICAgIHZhciBhbmltYXRpb25EZWxheXMgPSAoc3R5bGVzW2FuaW1hdGlvblByb3AgKyAnRGVsYXknXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgdmFyIGFuaW1hdGlvbkR1cmF0aW9ucyA9IChzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEdXJhdGlvbiddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICB2YXIgYW5pbWF0aW9uVGltZW91dCA9IGdldFRpbWVvdXQoYW5pbWF0aW9uRGVsYXlzLCBhbmltYXRpb25EdXJhdGlvbnMpO1xuXG4gICAgdmFyIHR5cGU7XG4gICAgdmFyIHRpbWVvdXQgPSAwO1xuICAgIHZhciBwcm9wQ291bnQgPSAwO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChleHBlY3RlZFR5cGUgPT09IFRSQU5TSVRJT04pIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uVGltZW91dCA+IDApIHtcbiAgICAgICAgdHlwZSA9IFRSQU5TSVRJT047XG4gICAgICAgIHRpbWVvdXQgPSB0cmFuc2l0aW9uVGltZW91dDtcbiAgICAgICAgcHJvcENvdW50ID0gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IEFOSU1BVElPTikge1xuICAgICAgaWYgKGFuaW1hdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICAgIHR5cGUgPSBBTklNQVRJT047XG4gICAgICAgIHRpbWVvdXQgPSBhbmltYXRpb25UaW1lb3V0O1xuICAgICAgICBwcm9wQ291bnQgPSBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0ID0gTWF0aC5tYXgodHJhbnNpdGlvblRpbWVvdXQsIGFuaW1hdGlvblRpbWVvdXQpO1xuICAgICAgdHlwZSA9IHRpbWVvdXQgPiAwXG4gICAgICAgID8gdHJhbnNpdGlvblRpbWVvdXQgPiBhbmltYXRpb25UaW1lb3V0XG4gICAgICAgICAgPyBUUkFOU0lUSU9OXG4gICAgICAgICAgOiBBTklNQVRJT05cbiAgICAgICAgOiBudWxsO1xuICAgICAgcHJvcENvdW50ID0gdHlwZVxuICAgICAgICA/IHR5cGUgPT09IFRSQU5TSVRJT05cbiAgICAgICAgICA/IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoXG4gICAgICAgICAgOiBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoXG4gICAgICAgIDogMDtcbiAgICB9XG4gICAgdmFyIGhhc1RyYW5zZm9ybSA9XG4gICAgICB0eXBlID09PSBUUkFOU0lUSU9OICYmXG4gICAgICB0cmFuc2Zvcm1SRS50ZXN0KHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdQcm9wZXJ0eSddKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgICBwcm9wQ291bnQ6IHByb3BDb3VudCxcbiAgICAgIGhhc1RyYW5zZm9ybTogaGFzVHJhbnNmb3JtXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGltZW91dCAoZGVsYXlzLCBkdXJhdGlvbnMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHdoaWxlIChkZWxheXMubGVuZ3RoIDwgZHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgZGVsYXlzID0gZGVsYXlzLmNvbmNhdChkZWxheXMpO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBkdXJhdGlvbnMubWFwKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICByZXR1cm4gdG9NcyhkKSArIHRvTXMoZGVsYXlzW2ldKVxuICAgIH0pKVxuICB9XG5cbiAgLy8gT2xkIHZlcnNpb25zIG9mIENocm9taXVtIChiZWxvdyA2MS4wLjMxNjMuMTAwKSBmb3JtYXRzIGZsb2F0aW5nIHBvaW50ZXIgbnVtYmVyc1xuICAvLyBpbiBhIGxvY2FsZS1kZXBlbmRlbnQgd2F5LCB1c2luZyBhIGNvbW1hIGluc3RlYWQgb2YgYSBkb3QuXG4gIC8vIElmIGNvbW1hIGlzIG5vdCByZXBsYWNlZCB3aXRoIGEgZG90LCB0aGUgaW5wdXQgd2lsbCBiZSByb3VuZGVkIGRvd24gKGkuZS4gYWN0aW5nXG4gIC8vIGFzIGEgZmxvb3IgZnVuY3Rpb24pIGNhdXNpbmcgdW5leHBlY3RlZCBiZWhhdmlvcnNcbiAgZnVuY3Rpb24gdG9NcyAocykge1xuICAgIHJldHVybiBOdW1iZXIocy5zbGljZSgwLCAtMSkucmVwbGFjZSgnLCcsICcuJykpICogMTAwMFxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gZW50ZXIgKHZub2RlLCB0b2dnbGVEaXNwbGF5KSB7XG4gICAgdmFyIGVsID0gdm5vZGUuZWxtO1xuXG4gICAgLy8gY2FsbCBsZWF2ZSBjYWxsYmFjayBub3dcbiAgICBpZiAoaXNEZWYoZWwuX2xlYXZlQ2IpKSB7XG4gICAgICBlbC5fbGVhdmVDYi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgZWwuX2xlYXZlQ2IoKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHJlc29sdmVUcmFuc2l0aW9uKHZub2RlLmRhdGEudHJhbnNpdGlvbik7XG4gICAgaWYgKGlzVW5kZWYoZGF0YSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpc0RlZihlbC5fZW50ZXJDYikgfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBjc3MgPSBkYXRhLmNzcztcbiAgICB2YXIgdHlwZSA9IGRhdGEudHlwZTtcbiAgICB2YXIgZW50ZXJDbGFzcyA9IGRhdGEuZW50ZXJDbGFzcztcbiAgICB2YXIgZW50ZXJUb0NsYXNzID0gZGF0YS5lbnRlclRvQ2xhc3M7XG4gICAgdmFyIGVudGVyQWN0aXZlQ2xhc3MgPSBkYXRhLmVudGVyQWN0aXZlQ2xhc3M7XG4gICAgdmFyIGFwcGVhckNsYXNzID0gZGF0YS5hcHBlYXJDbGFzcztcbiAgICB2YXIgYXBwZWFyVG9DbGFzcyA9IGRhdGEuYXBwZWFyVG9DbGFzcztcbiAgICB2YXIgYXBwZWFyQWN0aXZlQ2xhc3MgPSBkYXRhLmFwcGVhckFjdGl2ZUNsYXNzO1xuICAgIHZhciBiZWZvcmVFbnRlciA9IGRhdGEuYmVmb3JlRW50ZXI7XG4gICAgdmFyIGVudGVyID0gZGF0YS5lbnRlcjtcbiAgICB2YXIgYWZ0ZXJFbnRlciA9IGRhdGEuYWZ0ZXJFbnRlcjtcbiAgICB2YXIgZW50ZXJDYW5jZWxsZWQgPSBkYXRhLmVudGVyQ2FuY2VsbGVkO1xuICAgIHZhciBiZWZvcmVBcHBlYXIgPSBkYXRhLmJlZm9yZUFwcGVhcjtcbiAgICB2YXIgYXBwZWFyID0gZGF0YS5hcHBlYXI7XG4gICAgdmFyIGFmdGVyQXBwZWFyID0gZGF0YS5hZnRlckFwcGVhcjtcbiAgICB2YXIgYXBwZWFyQ2FuY2VsbGVkID0gZGF0YS5hcHBlYXJDYW5jZWxsZWQ7XG4gICAgdmFyIGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcblxuICAgIC8vIGFjdGl2ZUluc3RhbmNlIHdpbGwgYWx3YXlzIGJlIHRoZSA8dHJhbnNpdGlvbj4gY29tcG9uZW50IG1hbmFnaW5nIHRoaXNcbiAgICAvLyB0cmFuc2l0aW9uLiBPbmUgZWRnZSBjYXNlIHRvIGNoZWNrIGlzIHdoZW4gdGhlIDx0cmFuc2l0aW9uPiBpcyBwbGFjZWRcbiAgICAvLyBhcyB0aGUgcm9vdCBub2RlIG9mIGEgY2hpbGQgY29tcG9uZW50LiBJbiB0aGF0IGNhc2Ugd2UgbmVlZCB0byBjaGVja1xuICAgIC8vIDx0cmFuc2l0aW9uPidzIHBhcmVudCBmb3IgYXBwZWFyIGNoZWNrLlxuICAgIHZhciBjb250ZXh0ID0gYWN0aXZlSW5zdGFuY2U7XG4gICAgdmFyIHRyYW5zaXRpb25Ob2RlID0gYWN0aXZlSW5zdGFuY2UuJHZub2RlO1xuICAgIHdoaWxlICh0cmFuc2l0aW9uTm9kZSAmJiB0cmFuc2l0aW9uTm9kZS5wYXJlbnQpIHtcbiAgICAgIGNvbnRleHQgPSB0cmFuc2l0aW9uTm9kZS5jb250ZXh0O1xuICAgICAgdHJhbnNpdGlvbk5vZGUgPSB0cmFuc2l0aW9uTm9kZS5wYXJlbnQ7XG4gICAgfVxuXG4gICAgdmFyIGlzQXBwZWFyID0gIWNvbnRleHQuX2lzTW91bnRlZCB8fCAhdm5vZGUuaXNSb290SW5zZXJ0O1xuXG4gICAgaWYgKGlzQXBwZWFyICYmICFhcHBlYXIgJiYgYXBwZWFyICE9PSAnJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0Q2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJDbGFzc1xuICAgICAgPyBhcHBlYXJDbGFzc1xuICAgICAgOiBlbnRlckNsYXNzO1xuICAgIHZhciBhY3RpdmVDbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhckFjdGl2ZUNsYXNzXG4gICAgICA/IGFwcGVhckFjdGl2ZUNsYXNzXG4gICAgICA6IGVudGVyQWN0aXZlQ2xhc3M7XG4gICAgdmFyIHRvQ2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJUb0NsYXNzXG4gICAgICA/IGFwcGVhclRvQ2xhc3NcbiAgICAgIDogZW50ZXJUb0NsYXNzO1xuXG4gICAgdmFyIGJlZm9yZUVudGVySG9vayA9IGlzQXBwZWFyXG4gICAgICA/IChiZWZvcmVBcHBlYXIgfHwgYmVmb3JlRW50ZXIpXG4gICAgICA6IGJlZm9yZUVudGVyO1xuICAgIHZhciBlbnRlckhvb2sgPSBpc0FwcGVhclxuICAgICAgPyAodHlwZW9mIGFwcGVhciA9PT0gJ2Z1bmN0aW9uJyA/IGFwcGVhciA6IGVudGVyKVxuICAgICAgOiBlbnRlcjtcbiAgICB2YXIgYWZ0ZXJFbnRlckhvb2sgPSBpc0FwcGVhclxuICAgICAgPyAoYWZ0ZXJBcHBlYXIgfHwgYWZ0ZXJFbnRlcilcbiAgICAgIDogYWZ0ZXJFbnRlcjtcbiAgICB2YXIgZW50ZXJDYW5jZWxsZWRIb29rID0gaXNBcHBlYXJcbiAgICAgID8gKGFwcGVhckNhbmNlbGxlZCB8fCBlbnRlckNhbmNlbGxlZClcbiAgICAgIDogZW50ZXJDYW5jZWxsZWQ7XG5cbiAgICB2YXIgZXhwbGljaXRFbnRlckR1cmF0aW9uID0gdG9OdW1iZXIoXG4gICAgICBpc09iamVjdChkdXJhdGlvbilcbiAgICAgICAgPyBkdXJhdGlvbi5lbnRlclxuICAgICAgICA6IGR1cmF0aW9uXG4gICAgKTtcblxuICAgIGlmIChleHBsaWNpdEVudGVyRHVyYXRpb24gIT0gbnVsbCkge1xuICAgICAgY2hlY2tEdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24sICdlbnRlcicsIHZub2RlKTtcbiAgICB9XG5cbiAgICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2UgJiYgIWlzSUU5O1xuICAgIHZhciB1c2VyV2FudHNDb250cm9sID0gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aChlbnRlckhvb2spO1xuXG4gICAgdmFyIGNiID0gZWwuX2VudGVyQ2IgPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcyk7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgZW50ZXJDYW5jZWxsZWRIb29rICYmIGVudGVyQ2FuY2VsbGVkSG9vayhlbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZnRlckVudGVySG9vayAmJiBhZnRlckVudGVySG9vayhlbCk7XG4gICAgICB9XG4gICAgICBlbC5fZW50ZXJDYiA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBpZiAoIXZub2RlLmRhdGEuc2hvdykge1xuICAgICAgLy8gcmVtb3ZlIHBlbmRpbmcgbGVhdmUgZWxlbWVudCBvbiBlbnRlciBieSBpbmplY3RpbmcgYW4gaW5zZXJ0IGhvb2tcbiAgICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAnaW5zZXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHBlbmRpbmdOb2RlID0gcGFyZW50ICYmIHBhcmVudC5fcGVuZGluZyAmJiBwYXJlbnQuX3BlbmRpbmdbdm5vZGUua2V5XTtcbiAgICAgICAgaWYgKHBlbmRpbmdOb2RlICYmXG4gICAgICAgICAgcGVuZGluZ05vZGUudGFnID09PSB2bm9kZS50YWcgJiZcbiAgICAgICAgICBwZW5kaW5nTm9kZS5lbG0uX2xlYXZlQ2JcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGVuZGluZ05vZGUuZWxtLl9sZWF2ZUNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgZW50ZXJIb29rICYmIGVudGVySG9vayhlbCwgY2IpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3RhcnQgZW50ZXIgdHJhbnNpdGlvblxuICAgIGJlZm9yZUVudGVySG9vayAmJiBiZWZvcmVFbnRlckhvb2soZWwpO1xuICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xuICAgICAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xuICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcyk7XG4gICAgICAgICAgaWYgKCF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZER1cmF0aW9uKGV4cGxpY2l0RW50ZXJEdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRFbnRlckR1cmF0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdoZW5UcmFuc2l0aW9uRW5kcyhlbCwgdHlwZSwgY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHZub2RlLmRhdGEuc2hvdykge1xuICAgICAgdG9nZ2xlRGlzcGxheSAmJiB0b2dnbGVEaXNwbGF5KCk7XG4gICAgICBlbnRlckhvb2sgJiYgZW50ZXJIb29rKGVsLCBjYik7XG4gICAgfVxuXG4gICAgaWYgKCFleHBlY3RzQ1NTICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYXZlICh2bm9kZSwgcm0pIHtcbiAgICB2YXIgZWwgPSB2bm9kZS5lbG07XG5cbiAgICAvLyBjYWxsIGVudGVyIGNhbGxiYWNrIG5vd1xuICAgIGlmIChpc0RlZihlbC5fZW50ZXJDYikpIHtcbiAgICAgIGVsLl9lbnRlckNiLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICBlbC5fZW50ZXJDYigpO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gcmVzb2x2ZVRyYW5zaXRpb24odm5vZGUuZGF0YS50cmFuc2l0aW9uKTtcbiAgICBpZiAoaXNVbmRlZihkYXRhKSB8fCBlbC5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgcmV0dXJuIHJtKClcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaXNEZWYoZWwuX2xlYXZlQ2IpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgY3NzID0gZGF0YS5jc3M7XG4gICAgdmFyIHR5cGUgPSBkYXRhLnR5cGU7XG4gICAgdmFyIGxlYXZlQ2xhc3MgPSBkYXRhLmxlYXZlQ2xhc3M7XG4gICAgdmFyIGxlYXZlVG9DbGFzcyA9IGRhdGEubGVhdmVUb0NsYXNzO1xuICAgIHZhciBsZWF2ZUFjdGl2ZUNsYXNzID0gZGF0YS5sZWF2ZUFjdGl2ZUNsYXNzO1xuICAgIHZhciBiZWZvcmVMZWF2ZSA9IGRhdGEuYmVmb3JlTGVhdmU7XG4gICAgdmFyIGxlYXZlID0gZGF0YS5sZWF2ZTtcbiAgICB2YXIgYWZ0ZXJMZWF2ZSA9IGRhdGEuYWZ0ZXJMZWF2ZTtcbiAgICB2YXIgbGVhdmVDYW5jZWxsZWQgPSBkYXRhLmxlYXZlQ2FuY2VsbGVkO1xuICAgIHZhciBkZWxheUxlYXZlID0gZGF0YS5kZWxheUxlYXZlO1xuICAgIHZhciBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XG5cbiAgICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2UgJiYgIWlzSUU5O1xuICAgIHZhciB1c2VyV2FudHNDb250cm9sID0gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aChsZWF2ZSk7XG5cbiAgICB2YXIgZXhwbGljaXRMZWF2ZUR1cmF0aW9uID0gdG9OdW1iZXIoXG4gICAgICBpc09iamVjdChkdXJhdGlvbilcbiAgICAgICAgPyBkdXJhdGlvbi5sZWF2ZVxuICAgICAgICA6IGR1cmF0aW9uXG4gICAgKTtcblxuICAgIGlmIChpc0RlZihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XG4gICAgICBjaGVja0R1cmF0aW9uKGV4cGxpY2l0TGVhdmVEdXJhdGlvbiwgJ2xlYXZlJywgdm5vZGUpO1xuICAgIH1cblxuICAgIHZhciBjYiA9IGVsLl9sZWF2ZUNiID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZWwucGFyZW50Tm9kZSAmJiBlbC5wYXJlbnROb2RlLl9wZW5kaW5nKSB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUuX3BlbmRpbmdbdm5vZGUua2V5XSA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlVG9DbGFzcyk7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBsZWF2ZUNhbmNlbGxlZCAmJiBsZWF2ZUNhbmNlbGxlZChlbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBybSgpO1xuICAgICAgICBhZnRlckxlYXZlICYmIGFmdGVyTGVhdmUoZWwpO1xuICAgICAgfVxuICAgICAgZWwuX2xlYXZlQ2IgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgaWYgKGRlbGF5TGVhdmUpIHtcbiAgICAgIGRlbGF5TGVhdmUocGVyZm9ybUxlYXZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGVyZm9ybUxlYXZlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVyZm9ybUxlYXZlICgpIHtcbiAgICAgIC8vIHRoZSBkZWxheWVkIGxlYXZlIG1heSBoYXZlIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvLyByZWNvcmQgbGVhdmluZyBlbGVtZW50XG4gICAgICBpZiAoIXZub2RlLmRhdGEuc2hvdyAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIChlbC5wYXJlbnROb2RlLl9wZW5kaW5nIHx8IChlbC5wYXJlbnROb2RlLl9wZW5kaW5nID0ge30pKVsodm5vZGUua2V5KV0gPSB2bm9kZTtcbiAgICAgIH1cbiAgICAgIGJlZm9yZUxlYXZlICYmIGJlZm9yZUxlYXZlKGVsKTtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgICAgIG5leHRGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgICAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xuICAgICAgICAgICAgaWYgKCF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgICAgIGlmIChpc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRMZWF2ZUR1cmF0aW9uKSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0TGVhdmVEdXJhdGlvbik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbGVhdmUgJiYgbGVhdmUoZWwsIGNiKTtcbiAgICAgIGlmICghZXhwZWN0c0NTUyAmJiAhdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG9ubHkgdXNlZCBpbiBkZXYgbW9kZVxuICBmdW5jdGlvbiBjaGVja0R1cmF0aW9uICh2YWwsIG5hbWUsIHZub2RlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdudW1iZXInKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIjx0cmFuc2l0aW9uPiBleHBsaWNpdCBcIiArIG5hbWUgKyBcIiBkdXJhdGlvbiBpcyBub3QgYSB2YWxpZCBudW1iZXIgLSBcIiArXG4gICAgICAgIFwiZ290IFwiICsgKEpTT04uc3RyaW5naWZ5KHZhbCkpICsgXCIuXCIsXG4gICAgICAgIHZub2RlLmNvbnRleHRcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc05hTih2YWwpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIjx0cmFuc2l0aW9uPiBleHBsaWNpdCBcIiArIG5hbWUgKyBcIiBkdXJhdGlvbiBpcyBOYU4gLSBcIiArXG4gICAgICAgICd0aGUgZHVyYXRpb24gZXhwcmVzc2lvbiBtaWdodCBiZSBpbmNvcnJlY3QuJyxcbiAgICAgICAgdm5vZGUuY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZhbGlkRHVyYXRpb24gKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsKVxuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBhIHRyYW5zaXRpb24gaG9vaydzIGFyZ3VtZW50IGxlbmd0aC4gVGhlIGhvb2sgbWF5IGJlOlxuICAgKiAtIGEgbWVyZ2VkIGhvb2sgKGludm9rZXIpIHdpdGggdGhlIG9yaWdpbmFsIGluIC5mbnNcbiAgICogLSBhIHdyYXBwZWQgY29tcG9uZW50IG1ldGhvZCAoY2hlY2sgLl9sZW5ndGgpXG4gICAqIC0gYSBwbGFpbiBmdW5jdGlvbiAoLmxlbmd0aClcbiAgICovXG4gIGZ1bmN0aW9uIGdldEhvb2tBcmd1bWVudHNMZW5ndGggKGZuKSB7XG4gICAgaWYgKGlzVW5kZWYoZm4pKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgdmFyIGludm9rZXJGbnMgPSBmbi5mbnM7XG4gICAgaWYgKGlzRGVmKGludm9rZXJGbnMpKSB7XG4gICAgICAvLyBpbnZva2VyXG4gICAgICByZXR1cm4gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aChcbiAgICAgICAgQXJyYXkuaXNBcnJheShpbnZva2VyRm5zKVxuICAgICAgICAgID8gaW52b2tlckZuc1swXVxuICAgICAgICAgIDogaW52b2tlckZuc1xuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKGZuLl9sZW5ndGggfHwgZm4ubGVuZ3RoKSA+IDFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZW50ZXIgKF8sIHZub2RlKSB7XG4gICAgaWYgKHZub2RlLmRhdGEuc2hvdyAhPT0gdHJ1ZSkge1xuICAgICAgZW50ZXIodm5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0cmFuc2l0aW9uID0gaW5Ccm93c2VyID8ge1xuICAgIGNyZWF0ZTogX2VudGVyLFxuICAgIGFjdGl2YXRlOiBfZW50ZXIsXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUkJDEgKHZub2RlLCBybSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICh2bm9kZS5kYXRhLnNob3cgIT09IHRydWUpIHtcbiAgICAgICAgbGVhdmUodm5vZGUsIHJtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJtKCk7XG4gICAgICB9XG4gICAgfVxuICB9IDoge307XG5cbiAgdmFyIHBsYXRmb3JtTW9kdWxlcyA9IFtcbiAgICBhdHRycyxcbiAgICBrbGFzcyxcbiAgICBldmVudHMsXG4gICAgZG9tUHJvcHMsXG4gICAgc3R5bGUsXG4gICAgdHJhbnNpdGlvblxuICBdO1xuXG4gIC8qICAqL1xuXG4gIC8vIHRoZSBkaXJlY3RpdmUgbW9kdWxlIHNob3VsZCBiZSBhcHBsaWVkIGxhc3QsIGFmdGVyIGFsbFxuICAvLyBidWlsdC1pbiBtb2R1bGVzIGhhdmUgYmVlbiBhcHBsaWVkLlxuICB2YXIgbW9kdWxlcyA9IHBsYXRmb3JtTW9kdWxlcy5jb25jYXQoYmFzZU1vZHVsZXMpO1xuXG4gIHZhciBwYXRjaCA9IGNyZWF0ZVBhdGNoRnVuY3Rpb24oeyBub2RlT3BzOiBub2RlT3BzLCBtb2R1bGVzOiBtb2R1bGVzIH0pO1xuXG4gIC8qKlxuICAgKiBOb3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgbGlrZSBhdHRhY2hpbmdcbiAgICogcHJvcGVydGllcyB0byBFbGVtZW50cy5cbiAgICovXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0lFOSkge1xuICAgIC8vIGh0dHA6Ly93d3cubWF0dHM0MTEuY29tL3Bvc3QvaW50ZXJuZXQtZXhwbG9yZXItOS1vbmlucHV0L1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoZWwgJiYgZWwudm1vZGVsKSB7XG4gICAgICAgIHRyaWdnZXIoZWwsICdpbnB1dCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICBpbnNlcnRlZDogZnVuY3Rpb24gaW5zZXJ0ZWQgKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpIHtcbiAgICAgIGlmICh2bm9kZS50YWcgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIC8vICM2OTAzXG4gICAgICAgIGlmIChvbGRWbm9kZS5lbG0gJiYgIW9sZFZub2RlLmVsbS5fdk9wdGlvbnMpIHtcbiAgICAgICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ3Bvc3RwYXRjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5jb21wb25lbnRVcGRhdGVkKGVsLCBiaW5kaW5nLCB2bm9kZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsLl92T3B0aW9ucyA9IFtdLm1hcC5jYWxsKGVsLm9wdGlvbnMsIGdldFZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodm5vZGUudGFnID09PSAndGV4dGFyZWEnIHx8IGlzVGV4dElucHV0VHlwZShlbC50eXBlKSkge1xuICAgICAgICBlbC5fdk1vZGlmaWVycyA9IGJpbmRpbmcubW9kaWZpZXJzO1xuICAgICAgICBpZiAoIWJpbmRpbmcubW9kaWZpZXJzLmxhenkpIHtcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0Jywgb25Db21wb3NpdGlvblN0YXJ0KTtcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIG9uQ29tcG9zaXRpb25FbmQpO1xuICAgICAgICAgIC8vIFNhZmFyaSA8IDEwLjIgJiBVSVdlYlZpZXcgZG9lc24ndCBmaXJlIGNvbXBvc2l0aW9uZW5kIHdoZW5cbiAgICAgICAgICAvLyBzd2l0Y2hpbmcgZm9jdXMgYmVmb3JlIGNvbmZpcm1pbmcgY29tcG9zaXRpb24gY2hvaWNlXG4gICAgICAgICAgLy8gdGhpcyBhbHNvIGZpeGVzIHRoZSBpc3N1ZSB3aGVyZSBzb21lIGJyb3dzZXJzIGUuZy4gaU9TIENocm9tZVxuICAgICAgICAgIC8vIGZpcmVzIFwiY2hhbmdlXCIgaW5zdGVhZCBvZiBcImlucHV0XCIgb24gYXV0b2NvbXBsZXRlLlxuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uQ29tcG9zaXRpb25FbmQpO1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgIGlmIChpc0lFOSkge1xuICAgICAgICAgICAgZWwudm1vZGVsID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24gY29tcG9uZW50VXBkYXRlZCAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgICBpZiAodm5vZGUudGFnID09PSAnc2VsZWN0Jykge1xuICAgICAgICBzZXRTZWxlY3RlZChlbCwgYmluZGluZywgdm5vZGUuY29udGV4dCk7XG4gICAgICAgIC8vIGluIGNhc2UgdGhlIG9wdGlvbnMgcmVuZGVyZWQgYnkgdi1mb3IgaGF2ZSBjaGFuZ2VkLFxuICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlIHZhbHVlIGlzIG91dC1vZi1zeW5jIHdpdGggdGhlIHJlbmRlcmVkIG9wdGlvbnMuXG4gICAgICAgIC8vIGRldGVjdCBzdWNoIGNhc2VzIGFuZCBmaWx0ZXIgb3V0IHZhbHVlcyB0aGF0IG5vIGxvbmdlciBoYXMgYSBtYXRjaGluZ1xuICAgICAgICAvLyBvcHRpb24gaW4gdGhlIERPTS5cbiAgICAgICAgdmFyIHByZXZPcHRpb25zID0gZWwuX3ZPcHRpb25zO1xuICAgICAgICB2YXIgY3VyT3B0aW9ucyA9IGVsLl92T3B0aW9ucyA9IFtdLm1hcC5jYWxsKGVsLm9wdGlvbnMsIGdldFZhbHVlKTtcbiAgICAgICAgaWYgKGN1ck9wdGlvbnMuc29tZShmdW5jdGlvbiAobywgaSkgeyByZXR1cm4gIWxvb3NlRXF1YWwobywgcHJldk9wdGlvbnNbaV0pOyB9KSkge1xuICAgICAgICAgIC8vIHRyaWdnZXIgY2hhbmdlIGV2ZW50IGlmXG4gICAgICAgICAgLy8gbm8gbWF0Y2hpbmcgb3B0aW9uIGZvdW5kIGZvciBhdCBsZWFzdCBvbmUgdmFsdWVcbiAgICAgICAgICB2YXIgbmVlZFJlc2V0ID0gZWwubXVsdGlwbGVcbiAgICAgICAgICAgID8gYmluZGluZy52YWx1ZS5zb21lKGZ1bmN0aW9uICh2KSB7IHJldHVybiBoYXNOb01hdGNoaW5nT3B0aW9uKHYsIGN1ck9wdGlvbnMpOyB9KVxuICAgICAgICAgICAgOiBiaW5kaW5nLnZhbHVlICE9PSBiaW5kaW5nLm9sZFZhbHVlICYmIGhhc05vTWF0Y2hpbmdPcHRpb24oYmluZGluZy52YWx1ZSwgY3VyT3B0aW9ucyk7XG4gICAgICAgICAgaWYgKG5lZWRSZXNldCkge1xuICAgICAgICAgICAgdHJpZ2dlcihlbCwgJ2NoYW5nZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBzZXRTZWxlY3RlZCAoZWwsIGJpbmRpbmcsIHZtKSB7XG4gICAgYWN0dWFsbHlTZXRTZWxlY3RlZChlbCwgYmluZGluZywgdm0pO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpc0lFIHx8IGlzRWRnZSkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFjdHVhbGx5U2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZtKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdHVhbGx5U2V0U2VsZWN0ZWQgKGVsLCBiaW5kaW5nLCB2bSkge1xuICAgIHZhciB2YWx1ZSA9IGJpbmRpbmcudmFsdWU7XG4gICAgdmFyIGlzTXVsdGlwbGUgPSBlbC5tdWx0aXBsZTtcbiAgICBpZiAoaXNNdWx0aXBsZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwiPHNlbGVjdCBtdWx0aXBsZSB2LW1vZGVsPVxcXCJcIiArIChiaW5kaW5nLmV4cHJlc3Npb24pICsgXCJcXFwiPiBcIiArXG4gICAgICAgIFwiZXhwZWN0cyBhbiBBcnJheSB2YWx1ZSBmb3IgaXRzIGJpbmRpbmcsIGJ1dCBnb3QgXCIgKyAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgc2VsZWN0ZWQsIG9wdGlvbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBvcHRpb24gPSBlbC5vcHRpb25zW2ldO1xuICAgICAgaWYgKGlzTXVsdGlwbGUpIHtcbiAgICAgICAgc2VsZWN0ZWQgPSBsb29zZUluZGV4T2YodmFsdWUsIGdldFZhbHVlKG9wdGlvbikpID4gLTE7XG4gICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQgIT09IHNlbGVjdGVkKSB7XG4gICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChsb29zZUVxdWFsKGdldFZhbHVlKG9wdGlvbiksIHZhbHVlKSkge1xuICAgICAgICAgIGlmIChlbC5zZWxlY3RlZEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICBlbC5zZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc011bHRpcGxlKSB7XG4gICAgICBlbC5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFzTm9NYXRjaGluZ09wdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5ldmVyeShmdW5jdGlvbiAobykgeyByZXR1cm4gIWxvb3NlRXF1YWwobywgdmFsdWUpOyB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWUgKG9wdGlvbikge1xuICAgIHJldHVybiAnX3ZhbHVlJyBpbiBvcHRpb25cbiAgICAgID8gb3B0aW9uLl92YWx1ZVxuICAgICAgOiBvcHRpb24udmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ29tcG9zaXRpb25TdGFydCAoZSkge1xuICAgIGUudGFyZ2V0LmNvbXBvc2luZyA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNvbXBvc2l0aW9uRW5kIChlKSB7XG4gICAgLy8gcHJldmVudCB0cmlnZ2VyaW5nIGFuIGlucHV0IGV2ZW50IGZvciBubyByZWFzb25cbiAgICBpZiAoIWUudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm4gfVxuICAgIGUudGFyZ2V0LmNvbXBvc2luZyA9IGZhbHNlO1xuICAgIHRyaWdnZXIoZS50YXJnZXQsICdpbnB1dCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlciAoZWwsIHR5cGUpIHtcbiAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgZS5pbml0RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWwuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIC8vIHJlY3Vyc2l2ZWx5IHNlYXJjaCBmb3IgcG9zc2libGUgdHJhbnNpdGlvbiBkZWZpbmVkIGluc2lkZSB0aGUgY29tcG9uZW50IHJvb3RcbiAgZnVuY3Rpb24gbG9jYXRlTm9kZSAodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgJiYgKCF2bm9kZS5kYXRhIHx8ICF2bm9kZS5kYXRhLnRyYW5zaXRpb24pXG4gICAgICA/IGxvY2F0ZU5vZGUodm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlKVxuICAgICAgOiB2bm9kZVxuICB9XG5cbiAgdmFyIHNob3cgPSB7XG4gICAgYmluZDogZnVuY3Rpb24gYmluZCAoZWwsIHJlZiwgdm5vZGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcblxuICAgICAgdm5vZGUgPSBsb2NhdGVOb2RlKHZub2RlKTtcbiAgICAgIHZhciB0cmFuc2l0aW9uJCQxID0gdm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLnRyYW5zaXRpb247XG4gICAgICB2YXIgb3JpZ2luYWxEaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5ID1cbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJycgOiBlbC5zdHlsZS5kaXNwbGF5O1xuICAgICAgaWYgKHZhbHVlICYmIHRyYW5zaXRpb24kJDEpIHtcbiAgICAgICAgdm5vZGUuZGF0YS5zaG93ID0gdHJ1ZTtcbiAgICAgICAgZW50ZXIodm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gb3JpZ2luYWxEaXNwbGF5O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/IG9yaWdpbmFsRGlzcGxheSA6ICdub25lJztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUgKGVsLCByZWYsIHZub2RlKSB7XG4gICAgICB2YXIgdmFsdWUgPSByZWYudmFsdWU7XG4gICAgICB2YXIgb2xkVmFsdWUgPSByZWYub2xkVmFsdWU7XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCF2YWx1ZSA9PT0gIW9sZFZhbHVlKSB7IHJldHVybiB9XG4gICAgICB2bm9kZSA9IGxvY2F0ZU5vZGUodm5vZGUpO1xuICAgICAgdmFyIHRyYW5zaXRpb24kJDEgPSB2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEudHJhbnNpdGlvbjtcbiAgICAgIGlmICh0cmFuc2l0aW9uJCQxKSB7XG4gICAgICAgIHZub2RlLmRhdGEuc2hvdyA9IHRydWU7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIGVudGVyKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlYXZlKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyBlbC5fX3ZPcmlnaW5hbERpc3BsYXkgOiAnbm9uZSc7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kIChcbiAgICAgIGVsLFxuICAgICAgYmluZGluZyxcbiAgICAgIHZub2RlLFxuICAgICAgb2xkVm5vZGUsXG4gICAgICBpc0Rlc3Ryb3lcbiAgICApIHtcbiAgICAgIGlmICghaXNEZXN0cm95KSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBlbC5fX3ZPcmlnaW5hbERpc3BsYXk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBwbGF0Zm9ybURpcmVjdGl2ZXMgPSB7XG4gICAgbW9kZWw6IGRpcmVjdGl2ZSxcbiAgICBzaG93OiBzaG93XG4gIH07XG5cbiAgLyogICovXG5cbiAgdmFyIHRyYW5zaXRpb25Qcm9wcyA9IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgYXBwZWFyOiBCb29sZWFuLFxuICAgIGNzczogQm9vbGVhbixcbiAgICBtb2RlOiBTdHJpbmcsXG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGVudGVyQ2xhc3M6IFN0cmluZyxcbiAgICBsZWF2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZW50ZXJUb0NsYXNzOiBTdHJpbmcsXG4gICAgbGVhdmVUb0NsYXNzOiBTdHJpbmcsXG4gICAgZW50ZXJBY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGxlYXZlQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBhcHBlYXJDbGFzczogU3RyaW5nLFxuICAgIGFwcGVhckFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgYXBwZWFyVG9DbGFzczogU3RyaW5nLFxuICAgIGR1cmF0aW9uOiBbTnVtYmVyLCBTdHJpbmcsIE9iamVjdF1cbiAgfTtcblxuICAvLyBpbiBjYXNlIHRoZSBjaGlsZCBpcyBhbHNvIGFuIGFic3RyYWN0IGNvbXBvbmVudCwgZS5nLiA8a2VlcC1hbGl2ZT5cbiAgLy8gd2Ugd2FudCB0byByZWN1cnNpdmVseSByZXRyaWV2ZSB0aGUgcmVhbCBjb21wb25lbnQgdG8gYmUgcmVuZGVyZWRcbiAgZnVuY3Rpb24gZ2V0UmVhbENoaWxkICh2bm9kZSkge1xuICAgIHZhciBjb21wT3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgaWYgKGNvbXBPcHRpb25zICYmIGNvbXBPcHRpb25zLkN0b3Iub3B0aW9ucy5hYnN0cmFjdCkge1xuICAgICAgcmV0dXJuIGdldFJlYWxDaGlsZChnZXRGaXJzdENvbXBvbmVudENoaWxkKGNvbXBPcHRpb25zLmNoaWxkcmVuKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZub2RlXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXh0cmFjdFRyYW5zaXRpb25EYXRhIChjb21wKSB7XG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICB2YXIgb3B0aW9ucyA9IGNvbXAuJG9wdGlvbnM7XG4gICAgLy8gcHJvcHNcbiAgICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5wcm9wc0RhdGEpIHtcbiAgICAgIGRhdGFba2V5XSA9IGNvbXBba2V5XTtcbiAgICB9XG4gICAgLy8gZXZlbnRzLlxuICAgIC8vIGV4dHJhY3QgbGlzdGVuZXJzIGFuZCBwYXNzIHRoZW0gZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24gbWV0aG9kc1xuICAgIHZhciBsaXN0ZW5lcnMgPSBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gICAgZm9yICh2YXIga2V5JDEgaW4gbGlzdGVuZXJzKSB7XG4gICAgICBkYXRhW2NhbWVsaXplKGtleSQxKV0gPSBsaXN0ZW5lcnNba2V5JDFdO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2Vob2xkZXIgKGgsIHJhd0NoaWxkKSB7XG4gICAgaWYgKC9cXGQta2VlcC1hbGl2ZSQvLnRlc3QocmF3Q2hpbGQudGFnKSkge1xuICAgICAgcmV0dXJuIGgoJ2tlZXAtYWxpdmUnLCB7XG4gICAgICAgIHByb3BzOiByYXdDaGlsZC5jb21wb25lbnRPcHRpb25zLnByb3BzRGF0YVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYXNQYXJlbnRUcmFuc2l0aW9uICh2bm9kZSkge1xuICAgIHdoaWxlICgodm5vZGUgPSB2bm9kZS5wYXJlbnQpKSB7XG4gICAgICBpZiAodm5vZGUuZGF0YS50cmFuc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTYW1lQ2hpbGQgKGNoaWxkLCBvbGRDaGlsZCkge1xuICAgIHJldHVybiBvbGRDaGlsZC5rZXkgPT09IGNoaWxkLmtleSAmJiBvbGRDaGlsZC50YWcgPT09IGNoaWxkLnRhZ1xuICB9XG5cbiAgdmFyIGlzTm90VGV4dE5vZGUgPSBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50YWcgfHwgaXNBc3luY1BsYWNlaG9sZGVyKGMpOyB9O1xuXG4gIHZhciBpc1ZTaG93RGlyZWN0aXZlID0gZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSA9PT0gJ3Nob3cnOyB9O1xuXG4gIHZhciBUcmFuc2l0aW9uID0ge1xuICAgIG5hbWU6ICd0cmFuc2l0aW9uJyxcbiAgICBwcm9wczogdHJhbnNpdGlvblByb3BzLFxuICAgIGFic3RyYWN0OiB0cnVlLFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgpIHtcbiAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0O1xuICAgICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gZmlsdGVyIG91dCB0ZXh0IG5vZGVzIChwb3NzaWJsZSB3aGl0ZXNwYWNlcylcbiAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uZmlsdGVyKGlzTm90VGV4dE5vZGUpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gd2FybiBtdWx0aXBsZSBlbGVtZW50c1xuICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnPHRyYW5zaXRpb24+IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBzaW5nbGUgZWxlbWVudC4gVXNlICcgK1xuICAgICAgICAgICc8dHJhbnNpdGlvbi1ncm91cD4gZm9yIGxpc3RzLicsXG4gICAgICAgICAgdGhpcy4kcGFyZW50XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHZhciBtb2RlID0gdGhpcy5tb2RlO1xuXG4gICAgICAvLyB3YXJuIGludmFsaWQgbW9kZVxuICAgICAgaWYgKG1vZGUgJiYgbW9kZSAhPT0gJ2luLW91dCcgJiYgbW9kZSAhPT0gJ291dC1pbidcbiAgICAgICkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdpbnZhbGlkIDx0cmFuc2l0aW9uPiBtb2RlOiAnICsgbW9kZSxcbiAgICAgICAgICB0aGlzLiRwYXJlbnRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJhd0NoaWxkID0gY2hpbGRyZW5bMF07XG5cbiAgICAgIC8vIGlmIHRoaXMgaXMgYSBjb21wb25lbnQgcm9vdCBub2RlIGFuZCB0aGUgY29tcG9uZW50J3NcbiAgICAgIC8vIHBhcmVudCBjb250YWluZXIgbm9kZSBhbHNvIGhhcyB0cmFuc2l0aW9uLCBza2lwLlxuICAgICAgaWYgKGhhc1BhcmVudFRyYW5zaXRpb24odGhpcy4kdm5vZGUpKSB7XG4gICAgICAgIHJldHVybiByYXdDaGlsZFxuICAgICAgfVxuXG4gICAgICAvLyBhcHBseSB0cmFuc2l0aW9uIGRhdGEgdG8gY2hpbGRcbiAgICAgIC8vIHVzZSBnZXRSZWFsQ2hpbGQoKSB0byBpZ25vcmUgYWJzdHJhY3QgY29tcG9uZW50cyBlLmcuIGtlZXAtYWxpdmVcbiAgICAgIHZhciBjaGlsZCA9IGdldFJlYWxDaGlsZChyYXdDaGlsZCk7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9sZWF2aW5nKSB7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlcihoLCByYXdDaGlsZClcbiAgICAgIH1cblxuICAgICAgLy8gZW5zdXJlIGEga2V5IHRoYXQgaXMgdW5pcXVlIHRvIHRoZSB2bm9kZSB0eXBlIGFuZCB0byB0aGlzIHRyYW5zaXRpb25cbiAgICAgIC8vIGNvbXBvbmVudCBpbnN0YW5jZS4gVGhpcyBrZXkgd2lsbCBiZSB1c2VkIHRvIHJlbW92ZSBwZW5kaW5nIGxlYXZpbmcgbm9kZXNcbiAgICAgIC8vIGR1cmluZyBlbnRlcmluZy5cbiAgICAgIHZhciBpZCA9IFwiX190cmFuc2l0aW9uLVwiICsgKHRoaXMuX3VpZCkgKyBcIi1cIjtcbiAgICAgIGNoaWxkLmtleSA9IGNoaWxkLmtleSA9PSBudWxsXG4gICAgICAgID8gY2hpbGQuaXNDb21tZW50XG4gICAgICAgICAgPyBpZCArICdjb21tZW50J1xuICAgICAgICAgIDogaWQgKyBjaGlsZC50YWdcbiAgICAgICAgOiBpc1ByaW1pdGl2ZShjaGlsZC5rZXkpXG4gICAgICAgICAgPyAoU3RyaW5nKGNoaWxkLmtleSkuaW5kZXhPZihpZCkgPT09IDAgPyBjaGlsZC5rZXkgOiBpZCArIGNoaWxkLmtleSlcbiAgICAgICAgICA6IGNoaWxkLmtleTtcblxuICAgICAgdmFyIGRhdGEgPSAoY2hpbGQuZGF0YSB8fCAoY2hpbGQuZGF0YSA9IHt9KSkudHJhbnNpdGlvbiA9IGV4dHJhY3RUcmFuc2l0aW9uRGF0YSh0aGlzKTtcbiAgICAgIHZhciBvbGRSYXdDaGlsZCA9IHRoaXMuX3Zub2RlO1xuICAgICAgdmFyIG9sZENoaWxkID0gZ2V0UmVhbENoaWxkKG9sZFJhd0NoaWxkKTtcblxuICAgICAgLy8gbWFyayB2LXNob3dcbiAgICAgIC8vIHNvIHRoYXQgdGhlIHRyYW5zaXRpb24gbW9kdWxlIGNhbiBoYW5kIG92ZXIgdGhlIGNvbnRyb2wgdG8gdGhlIGRpcmVjdGl2ZVxuICAgICAgaWYgKGNoaWxkLmRhdGEuZGlyZWN0aXZlcyAmJiBjaGlsZC5kYXRhLmRpcmVjdGl2ZXMuc29tZShpc1ZTaG93RGlyZWN0aXZlKSkge1xuICAgICAgICBjaGlsZC5kYXRhLnNob3cgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG9sZENoaWxkICYmXG4gICAgICAgIG9sZENoaWxkLmRhdGEgJiZcbiAgICAgICAgIWlzU2FtZUNoaWxkKGNoaWxkLCBvbGRDaGlsZCkgJiZcbiAgICAgICAgIWlzQXN5bmNQbGFjZWhvbGRlcihvbGRDaGlsZCkgJiZcbiAgICAgICAgLy8gIzY2ODcgY29tcG9uZW50IHJvb3QgaXMgYSBjb21tZW50IG5vZGVcbiAgICAgICAgIShvbGRDaGlsZC5jb21wb25lbnRJbnN0YW5jZSAmJiBvbGRDaGlsZC5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUuaXNDb21tZW50KVxuICAgICAgKSB7XG4gICAgICAgIC8vIHJlcGxhY2Ugb2xkIGNoaWxkIHRyYW5zaXRpb24gZGF0YSB3aXRoIGZyZXNoIG9uZVxuICAgICAgICAvLyBpbXBvcnRhbnQgZm9yIGR5bmFtaWMgdHJhbnNpdGlvbnMhXG4gICAgICAgIHZhciBvbGREYXRhID0gb2xkQ2hpbGQuZGF0YS50cmFuc2l0aW9uID0gZXh0ZW5kKHt9LCBkYXRhKTtcbiAgICAgICAgLy8gaGFuZGxlIHRyYW5zaXRpb24gbW9kZVxuICAgICAgICBpZiAobW9kZSA9PT0gJ291dC1pbicpIHtcbiAgICAgICAgICAvLyByZXR1cm4gcGxhY2Vob2xkZXIgbm9kZSBhbmQgcXVldWUgdXBkYXRlIHdoZW4gbGVhdmUgZmluaXNoZXNcbiAgICAgICAgICB0aGlzLl9sZWF2aW5nID0gdHJ1ZTtcbiAgICAgICAgICBtZXJnZVZOb2RlSG9vayhvbGREYXRhLCAnYWZ0ZXJMZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMkMS5fbGVhdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcyQxLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBwbGFjZWhvbGRlcihoLCByYXdDaGlsZClcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnaW4tb3V0Jykge1xuICAgICAgICAgIGlmIChpc0FzeW5jUGxhY2Vob2xkZXIoY2hpbGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gb2xkUmF3Q2hpbGRcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGRlbGF5ZWRMZWF2ZTtcbiAgICAgICAgICB2YXIgcGVyZm9ybUxlYXZlID0gZnVuY3Rpb24gKCkgeyBkZWxheWVkTGVhdmUoKTsgfTtcbiAgICAgICAgICBtZXJnZVZOb2RlSG9vayhkYXRhLCAnYWZ0ZXJFbnRlcicsIHBlcmZvcm1MZWF2ZSk7XG4gICAgICAgICAgbWVyZ2VWTm9kZUhvb2soZGF0YSwgJ2VudGVyQ2FuY2VsbGVkJywgcGVyZm9ybUxlYXZlKTtcbiAgICAgICAgICBtZXJnZVZOb2RlSG9vayhvbGREYXRhLCAnZGVsYXlMZWF2ZScsIGZ1bmN0aW9uIChsZWF2ZSkgeyBkZWxheWVkTGVhdmUgPSBsZWF2ZTsgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgfVxuICB9O1xuXG4gIC8qICAqL1xuXG4gIHZhciBwcm9wcyA9IGV4dGVuZCh7XG4gICAgdGFnOiBTdHJpbmcsXG4gICAgbW92ZUNsYXNzOiBTdHJpbmdcbiAgfSwgdHJhbnNpdGlvblByb3BzKTtcblxuICBkZWxldGUgcHJvcHMubW9kZTtcblxuICB2YXIgVHJhbnNpdGlvbkdyb3VwID0ge1xuICAgIHByb3BzOiBwcm9wcyxcblxuICAgIGJlZm9yZU1vdW50OiBmdW5jdGlvbiBiZWZvcmVNb3VudCAoKSB7XG4gICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgICAgdmFyIHVwZGF0ZSA9IHRoaXMuX3VwZGF0ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgICAgIHZhciByZXN0b3JlQWN0aXZlSW5zdGFuY2UgPSBzZXRBY3RpdmVJbnN0YW5jZSh0aGlzJDEpO1xuICAgICAgICAvLyBmb3JjZSByZW1vdmluZyBwYXNzXG4gICAgICAgIHRoaXMkMS5fX3BhdGNoX18oXG4gICAgICAgICAgdGhpcyQxLl92bm9kZSxcbiAgICAgICAgICB0aGlzJDEua2VwdCxcbiAgICAgICAgICBmYWxzZSwgLy8gaHlkcmF0aW5nXG4gICAgICAgICAgdHJ1ZSAvLyByZW1vdmVPbmx5ICghaW1wb3J0YW50LCBhdm9pZHMgdW5uZWNlc3NhcnkgbW92ZXMpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMkMS5fdm5vZGUgPSB0aGlzJDEua2VwdDtcbiAgICAgICAgcmVzdG9yZUFjdGl2ZUluc3RhbmNlKCk7XG4gICAgICAgIHVwZGF0ZS5jYWxsKHRoaXMkMSwgdm5vZGUsIGh5ZHJhdGluZyk7XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgICAgdmFyIHRhZyA9IHRoaXMudGFnIHx8IHRoaXMuJHZub2RlLmRhdGEudGFnIHx8ICdzcGFuJztcbiAgICAgIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgdmFyIHByZXZDaGlsZHJlbiA9IHRoaXMucHJldkNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgIHZhciByYXdDaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW107XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICB2YXIgdHJhbnNpdGlvbkRhdGEgPSBleHRyYWN0VHJhbnNpdGlvbkRhdGEodGhpcyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGMgPSByYXdDaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGMudGFnKSB7XG4gICAgICAgICAgaWYgKGMua2V5ICE9IG51bGwgJiYgU3RyaW5nKGMua2V5KS5pbmRleE9mKCdfX3ZsaXN0JykgIT09IDApIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goYyk7XG4gICAgICAgICAgICBtYXBbYy5rZXldID0gY1xuICAgICAgICAgICAgOyhjLmRhdGEgfHwgKGMuZGF0YSA9IHt9KSkudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IGMuY29tcG9uZW50T3B0aW9ucztcbiAgICAgICAgICAgIHZhciBuYW1lID0gb3B0cyA/IChvcHRzLkN0b3Iub3B0aW9ucy5uYW1lIHx8IG9wdHMudGFnIHx8ICcnKSA6IGMudGFnO1xuICAgICAgICAgICAgd2FybigoXCI8dHJhbnNpdGlvbi1ncm91cD4gY2hpbGRyZW4gbXVzdCBiZSBrZXllZDogPFwiICsgbmFtZSArIFwiPlwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2Q2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIGtlcHQgPSBbXTtcbiAgICAgICAgdmFyIHJlbW92ZWQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgcHJldkNoaWxkcmVuLmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgICB2YXIgYyQxID0gcHJldkNoaWxkcmVuW2kkMV07XG4gICAgICAgICAgYyQxLmRhdGEudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xuICAgICAgICAgIGMkMS5kYXRhLnBvcyA9IGMkMS5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgaWYgKG1hcFtjJDEua2V5XSkge1xuICAgICAgICAgICAga2VwdC5wdXNoKGMkMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZWQucHVzaChjJDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtlcHQgPSBoKHRhZywgbnVsbCwga2VwdCk7XG4gICAgICAgIHRoaXMucmVtb3ZlZCA9IHJlbW92ZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKHRhZywgbnVsbCwgY2hpbGRyZW4pXG4gICAgfSxcblxuICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uIHVwZGF0ZWQgKCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcmV2Q2hpbGRyZW47XG4gICAgICB2YXIgbW92ZUNsYXNzID0gdGhpcy5tb3ZlQ2xhc3MgfHwgKCh0aGlzLm5hbWUgfHwgJ3YnKSArICctbW92ZScpO1xuICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGggfHwgIXRoaXMuaGFzTW92ZShjaGlsZHJlblswXS5lbG0sIG1vdmVDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGRpdmlkZSB0aGUgd29yayBpbnRvIHRocmVlIGxvb3BzIHRvIGF2b2lkIG1peGluZyBET00gcmVhZHMgYW5kIHdyaXRlc1xuICAgICAgLy8gaW4gZWFjaCBpdGVyYXRpb24gLSB3aGljaCBoZWxwcyBwcmV2ZW50IGxheW91dCB0aHJhc2hpbmcuXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGNhbGxQZW5kaW5nQ2JzKTtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2gocmVjb3JkUG9zaXRpb24pO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChhcHBseVRyYW5zbGF0aW9uKTtcblxuICAgICAgLy8gZm9yY2UgcmVmbG93IHRvIHB1dCBldmVyeXRoaW5nIGluIHBvc2l0aW9uXG4gICAgICAvLyBhc3NpZ24gdG8gdGhpcyB0byBhdm9pZCBiZWluZyByZW1vdmVkIGluIHRyZWUtc2hha2luZ1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICB0aGlzLl9yZWZsb3cgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcblxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYy5kYXRhLm1vdmVkKSB7XG4gICAgICAgICAgdmFyIGVsID0gYy5lbG07XG4gICAgICAgICAgdmFyIHMgPSBlbC5zdHlsZTtcbiAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIG1vdmVDbGFzcyk7XG4gICAgICAgICAgcy50cmFuc2Zvcm0gPSBzLldlYmtpdFRyYW5zZm9ybSA9IHMudHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kRXZlbnQsIGVsLl9tb3ZlQ2IgPSBmdW5jdGlvbiBjYiAoZSkge1xuICAgICAgICAgICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IGVsKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlIHx8IC90cmFuc2Zvcm0kLy50ZXN0KGUucHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmRFdmVudCwgY2IpO1xuICAgICAgICAgICAgICBlbC5fbW92ZUNiID0gbnVsbDtcbiAgICAgICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBtb3ZlQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgaGFzTW92ZTogZnVuY3Rpb24gaGFzTW92ZSAoZWwsIG1vdmVDbGFzcykge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCFoYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICh0aGlzLl9oYXNNb3ZlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc01vdmVcbiAgICAgICAgfVxuICAgICAgICAvLyBEZXRlY3Qgd2hldGhlciBhbiBlbGVtZW50IHdpdGggdGhlIG1vdmUgY2xhc3MgYXBwbGllZCBoYXNcbiAgICAgICAgLy8gQ1NTIHRyYW5zaXRpb25zLiBTaW5jZSB0aGUgZWxlbWVudCBtYXkgYmUgaW5zaWRlIGFuIGVudGVyaW5nXG4gICAgICAgIC8vIHRyYW5zaXRpb24gYXQgdGhpcyB2ZXJ5IG1vbWVudCwgd2UgbWFrZSBhIGNsb25lIG9mIGl0IGFuZCByZW1vdmVcbiAgICAgICAgLy8gYWxsIG90aGVyIHRyYW5zaXRpb24gY2xhc3NlcyBhcHBsaWVkIHRvIGVuc3VyZSBvbmx5IHRoZSBtb3ZlIGNsYXNzXG4gICAgICAgIC8vIGlzIGFwcGxpZWQuXG4gICAgICAgIHZhciBjbG9uZSA9IGVsLmNsb25lTm9kZSgpO1xuICAgICAgICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgICAgICAgZWwuX3RyYW5zaXRpb25DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNscykgeyByZW1vdmVDbGFzcyhjbG9uZSwgY2xzKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkQ2xhc3MoY2xvbmUsIG1vdmVDbGFzcyk7XG4gICAgICAgIGNsb25lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuJGVsLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgICAgdmFyIGluZm8gPSBnZXRUcmFuc2l0aW9uSW5mbyhjbG9uZSk7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9oYXNNb3ZlID0gaW5mby5oYXNUcmFuc2Zvcm0pXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGNhbGxQZW5kaW5nQ2JzIChjKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGMuZWxtLl9tb3ZlQ2IpIHtcbiAgICAgIGMuZWxtLl9tb3ZlQ2IoKTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGMuZWxtLl9lbnRlckNiKSB7XG4gICAgICBjLmVsbS5fZW50ZXJDYigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY29yZFBvc2l0aW9uIChjKSB7XG4gICAgYy5kYXRhLm5ld1BvcyA9IGMuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlUcmFuc2xhdGlvbiAoYykge1xuICAgIHZhciBvbGRQb3MgPSBjLmRhdGEucG9zO1xuICAgIHZhciBuZXdQb3MgPSBjLmRhdGEubmV3UG9zO1xuICAgIHZhciBkeCA9IG9sZFBvcy5sZWZ0IC0gbmV3UG9zLmxlZnQ7XG4gICAgdmFyIGR5ID0gb2xkUG9zLnRvcCAtIG5ld1Bvcy50b3A7XG4gICAgaWYgKGR4IHx8IGR5KSB7XG4gICAgICBjLmRhdGEubW92ZWQgPSB0cnVlO1xuICAgICAgdmFyIHMgPSBjLmVsbS5zdHlsZTtcbiAgICAgIHMudHJhbnNmb3JtID0gcy5XZWJraXRUcmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIGR4ICsgXCJweCxcIiArIGR5ICsgXCJweClcIjtcbiAgICAgIHMudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcbiAgICB9XG4gIH1cblxuICB2YXIgcGxhdGZvcm1Db21wb25lbnRzID0ge1xuICAgIFRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gICAgVHJhbnNpdGlvbkdyb3VwOiBUcmFuc2l0aW9uR3JvdXBcbiAgfTtcblxuICAvKiAgKi9cblxuICAvLyBpbnN0YWxsIHBsYXRmb3JtIHNwZWNpZmljIHV0aWxzXG4gIFZ1ZS5jb25maWcubXVzdFVzZVByb3AgPSBtdXN0VXNlUHJvcDtcbiAgVnVlLmNvbmZpZy5pc1Jlc2VydmVkVGFnID0gaXNSZXNlcnZlZFRhZztcbiAgVnVlLmNvbmZpZy5pc1Jlc2VydmVkQXR0ciA9IGlzUmVzZXJ2ZWRBdHRyO1xuICBWdWUuY29uZmlnLmdldFRhZ05hbWVzcGFjZSA9IGdldFRhZ05hbWVzcGFjZTtcbiAgVnVlLmNvbmZpZy5pc1Vua25vd25FbGVtZW50ID0gaXNVbmtub3duRWxlbWVudDtcblxuICAvLyBpbnN0YWxsIHBsYXRmb3JtIHJ1bnRpbWUgZGlyZWN0aXZlcyAmIGNvbXBvbmVudHNcbiAgZXh0ZW5kKFZ1ZS5vcHRpb25zLmRpcmVjdGl2ZXMsIHBsYXRmb3JtRGlyZWN0aXZlcyk7XG4gIGV4dGVuZChWdWUub3B0aW9ucy5jb21wb25lbnRzLCBwbGF0Zm9ybUNvbXBvbmVudHMpO1xuXG4gIC8vIGluc3RhbGwgcGxhdGZvcm0gcGF0Y2ggZnVuY3Rpb25cbiAgVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gPSBpbkJyb3dzZXIgPyBwYXRjaCA6IG5vb3A7XG5cbiAgLy8gcHVibGljIG1vdW50IG1ldGhvZFxuICBWdWUucHJvdG90eXBlLiRtb3VudCA9IGZ1bmN0aW9uIChcbiAgICBlbCxcbiAgICBoeWRyYXRpbmdcbiAgKSB7XG4gICAgZWwgPSBlbCAmJiBpbkJyb3dzZXIgPyBxdWVyeShlbCkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG1vdW50Q29tcG9uZW50KHRoaXMsIGVsLCBoeWRyYXRpbmcpXG4gIH07XG5cbiAgLy8gZGV2dG9vbHMgZ2xvYmFsIGhvb2tcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKGluQnJvd3Nlcikge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNvbmZpZy5kZXZ0b29scykge1xuICAgICAgICBpZiAoZGV2dG9vbHMpIHtcbiAgICAgICAgICBkZXZ0b29scy5lbWl0KCdpbml0JywgVnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlW2NvbnNvbGUuaW5mbyA/ICdpbmZvJyA6ICdsb2cnXShcbiAgICAgICAgICAgICdEb3dubG9hZCB0aGUgVnVlIERldnRvb2xzIGV4dGVuc2lvbiBmb3IgYSBiZXR0ZXIgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZTpcXG4nICtcbiAgICAgICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlLWRldnRvb2xzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcucHJvZHVjdGlvblRpcCAhPT0gZmFsc2UgJiZcbiAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZVtjb25zb2xlLmluZm8gPyAnaW5mbycgOiAnbG9nJ10oXG4gICAgICAgICAgXCJZb3UgYXJlIHJ1bm5pbmcgVnVlIGluIGRldmVsb3BtZW50IG1vZGUuXFxuXCIgK1xuICAgICAgICAgIFwiTWFrZSBzdXJlIHRvIHR1cm4gb24gcHJvZHVjdGlvbiBtb2RlIHdoZW4gZGVwbG95aW5nIGZvciBwcm9kdWN0aW9uLlxcblwiICtcbiAgICAgICAgICBcIlNlZSBtb3JlIHRpcHMgYXQgaHR0cHM6Ly92dWVqcy5vcmcvZ3VpZGUvZGVwbG95bWVudC5odG1sXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBkZWZhdWx0VGFnUkUgPSAvXFx7XFx7KCg/Oi58XFxyP1xcbikrPylcXH1cXH0vZztcbiAgdmFyIHJlZ2V4RXNjYXBlUkUgPSAvWy0uKis/XiR7fSgpfFtcXF1cXC9cXFxcXS9nO1xuXG4gIHZhciBidWlsZFJlZ2V4ID0gY2FjaGVkKGZ1bmN0aW9uIChkZWxpbWl0ZXJzKSB7XG4gICAgdmFyIG9wZW4gPSBkZWxpbWl0ZXJzWzBdLnJlcGxhY2UocmVnZXhFc2NhcGVSRSwgJ1xcXFwkJicpO1xuICAgIHZhciBjbG9zZSA9IGRlbGltaXRlcnNbMV0ucmVwbGFjZShyZWdleEVzY2FwZVJFLCAnXFxcXCQmJyk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAob3BlbiArICcoKD86LnxcXFxcbikrPyknICsgY2xvc2UsICdnJylcbiAgfSk7XG5cblxuXG4gIGZ1bmN0aW9uIHBhcnNlVGV4dCAoXG4gICAgdGV4dCxcbiAgICBkZWxpbWl0ZXJzXG4gICkge1xuICAgIHZhciB0YWdSRSA9IGRlbGltaXRlcnMgPyBidWlsZFJlZ2V4KGRlbGltaXRlcnMpIDogZGVmYXVsdFRhZ1JFO1xuICAgIGlmICghdGFnUkUudGVzdCh0ZXh0KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgcmF3VG9rZW5zID0gW107XG4gICAgdmFyIGxhc3RJbmRleCA9IHRhZ1JFLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG1hdGNoLCBpbmRleCwgdG9rZW5WYWx1ZTtcbiAgICB3aGlsZSAoKG1hdGNoID0gdGFnUkUuZXhlYyh0ZXh0KSkpIHtcbiAgICAgIGluZGV4ID0gbWF0Y2guaW5kZXg7XG4gICAgICAvLyBwdXNoIHRleHQgdG9rZW5cbiAgICAgIGlmIChpbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICByYXdUb2tlbnMucHVzaCh0b2tlblZhbHVlID0gdGV4dC5zbGljZShsYXN0SW5kZXgsIGluZGV4KSk7XG4gICAgICAgIHRva2Vucy5wdXNoKEpTT04uc3RyaW5naWZ5KHRva2VuVmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIC8vIHRhZyB0b2tlblxuICAgICAgdmFyIGV4cCA9IHBhcnNlRmlsdGVycyhtYXRjaFsxXS50cmltKCkpO1xuICAgICAgdG9rZW5zLnB1c2goKFwiX3MoXCIgKyBleHAgKyBcIilcIikpO1xuICAgICAgcmF3VG9rZW5zLnB1c2goeyAnQGJpbmRpbmcnOiBleHAgfSk7XG4gICAgICBsYXN0SW5kZXggPSBpbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgICByYXdUb2tlbnMucHVzaCh0b2tlblZhbHVlID0gdGV4dC5zbGljZShsYXN0SW5kZXgpKTtcbiAgICAgIHRva2Vucy5wdXNoKEpTT04uc3RyaW5naWZ5KHRva2VuVmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cHJlc3Npb246IHRva2Vucy5qb2luKCcrJyksXG4gICAgICB0b2tlbnM6IHJhd1Rva2Vuc1xuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybU5vZGUgKGVsLCBvcHRpb25zKSB7XG4gICAgdmFyIHdhcm4gPSBvcHRpb25zLndhcm4gfHwgYmFzZVdhcm47XG4gICAgdmFyIHN0YXRpY0NsYXNzID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ2NsYXNzJyk7XG4gICAgaWYgKHN0YXRpY0NsYXNzKSB7XG4gICAgICB2YXIgcmVzID0gcGFyc2VUZXh0KHN0YXRpY0NsYXNzLCBvcHRpb25zLmRlbGltaXRlcnMpO1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiY2xhc3M9XFxcIlwiICsgc3RhdGljQ2xhc3MgKyBcIlxcXCI6IFwiICtcbiAgICAgICAgICAnSW50ZXJwb2xhdGlvbiBpbnNpZGUgYXR0cmlidXRlcyBoYXMgYmVlbiByZW1vdmVkLiAnICtcbiAgICAgICAgICAnVXNlIHYtYmluZCBvciB0aGUgY29sb24gc2hvcnRoYW5kIGluc3RlYWQuIEZvciBleGFtcGxlLCAnICtcbiAgICAgICAgICAnaW5zdGVhZCBvZiA8ZGl2IGNsYXNzPVwie3sgdmFsIH19XCI+LCB1c2UgPGRpdiA6Y2xhc3M9XCJ2YWxcIj4uJyxcbiAgICAgICAgICBlbC5yYXdBdHRyc01hcFsnY2xhc3MnXVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3RhdGljQ2xhc3MpIHtcbiAgICAgIGVsLnN0YXRpY0NsYXNzID0gSlNPTi5zdHJpbmdpZnkoc3RhdGljQ2xhc3MpO1xuICAgIH1cbiAgICB2YXIgY2xhc3NCaW5kaW5nID0gZ2V0QmluZGluZ0F0dHIoZWwsICdjbGFzcycsIGZhbHNlIC8qIGdldFN0YXRpYyAqLyk7XG4gICAgaWYgKGNsYXNzQmluZGluZykge1xuICAgICAgZWwuY2xhc3NCaW5kaW5nID0gY2xhc3NCaW5kaW5nO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbkRhdGEgKGVsKSB7XG4gICAgdmFyIGRhdGEgPSAnJztcbiAgICBpZiAoZWwuc3RhdGljQ2xhc3MpIHtcbiAgICAgIGRhdGEgKz0gXCJzdGF0aWNDbGFzczpcIiArIChlbC5zdGF0aWNDbGFzcykgKyBcIixcIjtcbiAgICB9XG4gICAgaWYgKGVsLmNsYXNzQmluZGluZykge1xuICAgICAgZGF0YSArPSBcImNsYXNzOlwiICsgKGVsLmNsYXNzQmluZGluZykgKyBcIixcIjtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIHZhciBrbGFzcyQxID0ge1xuICAgIHN0YXRpY0tleXM6IFsnc3RhdGljQ2xhc3MnXSxcbiAgICB0cmFuc2Zvcm1Ob2RlOiB0cmFuc2Zvcm1Ob2RlLFxuICAgIGdlbkRhdGE6IGdlbkRhdGFcbiAgfTtcblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1Ob2RlJDEgKGVsLCBvcHRpb25zKSB7XG4gICAgdmFyIHdhcm4gPSBvcHRpb25zLndhcm4gfHwgYmFzZVdhcm47XG4gICAgdmFyIHN0YXRpY1N0eWxlID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3N0eWxlJyk7XG4gICAgaWYgKHN0YXRpY1N0eWxlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIHtcbiAgICAgICAgdmFyIHJlcyA9IHBhcnNlVGV4dChzdGF0aWNTdHlsZSwgb3B0aW9ucy5kZWxpbWl0ZXJzKTtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcInN0eWxlPVxcXCJcIiArIHN0YXRpY1N0eWxlICsgXCJcXFwiOiBcIiArXG4gICAgICAgICAgICAnSW50ZXJwb2xhdGlvbiBpbnNpZGUgYXR0cmlidXRlcyBoYXMgYmVlbiByZW1vdmVkLiAnICtcbiAgICAgICAgICAgICdVc2Ugdi1iaW5kIG9yIHRoZSBjb2xvbiBzaG9ydGhhbmQgaW5zdGVhZC4gRm9yIGV4YW1wbGUsICcgK1xuICAgICAgICAgICAgJ2luc3RlYWQgb2YgPGRpdiBzdHlsZT1cInt7IHZhbCB9fVwiPiwgdXNlIDxkaXYgOnN0eWxlPVwidmFsXCI+LicsXG4gICAgICAgICAgICBlbC5yYXdBdHRyc01hcFsnc3R5bGUnXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsLnN0YXRpY1N0eWxlID0gSlNPTi5zdHJpbmdpZnkocGFyc2VTdHlsZVRleHQoc3RhdGljU3R5bGUpKTtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVCaW5kaW5nID0gZ2V0QmluZGluZ0F0dHIoZWwsICdzdHlsZScsIGZhbHNlIC8qIGdldFN0YXRpYyAqLyk7XG4gICAgaWYgKHN0eWxlQmluZGluZykge1xuICAgICAgZWwuc3R5bGVCaW5kaW5nID0gc3R5bGVCaW5kaW5nO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbkRhdGEkMSAoZWwpIHtcbiAgICB2YXIgZGF0YSA9ICcnO1xuICAgIGlmIChlbC5zdGF0aWNTdHlsZSkge1xuICAgICAgZGF0YSArPSBcInN0YXRpY1N0eWxlOlwiICsgKGVsLnN0YXRpY1N0eWxlKSArIFwiLFwiO1xuICAgIH1cbiAgICBpZiAoZWwuc3R5bGVCaW5kaW5nKSB7XG4gICAgICBkYXRhICs9IFwic3R5bGU6KFwiICsgKGVsLnN0eWxlQmluZGluZykgKyBcIiksXCI7XG4gICAgfVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICB2YXIgc3R5bGUkMSA9IHtcbiAgICBzdGF0aWNLZXlzOiBbJ3N0YXRpY1N0eWxlJ10sXG4gICAgdHJhbnNmb3JtTm9kZTogdHJhbnNmb3JtTm9kZSQxLFxuICAgIGdlbkRhdGE6IGdlbkRhdGEkMVxuICB9O1xuXG4gIC8qICAqL1xuXG4gIHZhciBkZWNvZGVyO1xuXG4gIHZhciBoZSA9IHtcbiAgICBkZWNvZGU6IGZ1bmN0aW9uIGRlY29kZSAoaHRtbCkge1xuICAgICAgZGVjb2RlciA9IGRlY29kZXIgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZWNvZGVyLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gZGVjb2Rlci50ZXh0Q29udGVudFxuICAgIH1cbiAgfTtcblxuICAvKiAgKi9cblxuICB2YXIgaXNVbmFyeVRhZyA9IG1ha2VNYXAoXG4gICAgJ2FyZWEsYmFzZSxicixjb2wsZW1iZWQsZnJhbWUsaHIsaW1nLGlucHV0LGlzaW5kZXgsa2V5Z2VuLCcgK1xuICAgICdsaW5rLG1ldGEscGFyYW0sc291cmNlLHRyYWNrLHdicidcbiAgKTtcblxuICAvLyBFbGVtZW50cyB0aGF0IHlvdSBjYW4sIGludGVudGlvbmFsbHksIGxlYXZlIG9wZW5cbiAgLy8gKGFuZCB3aGljaCBjbG9zZSB0aGVtc2VsdmVzKVxuICB2YXIgY2FuQmVMZWZ0T3BlblRhZyA9IG1ha2VNYXAoXG4gICAgJ2NvbGdyb3VwLGRkLGR0LGxpLG9wdGlvbnMscCx0ZCx0Zm9vdCx0aCx0aGVhZCx0cixzb3VyY2UnXG4gICk7XG5cbiAgLy8gSFRNTDUgdGFncyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmRpY2VzLmh0bWwjZWxlbWVudHMtM1xuICAvLyBQaHJhc2luZyBDb250ZW50IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2RvbS5odG1sI3BocmFzaW5nLWNvbnRlbnRcbiAgdmFyIGlzTm9uUGhyYXNpbmdUYWcgPSBtYWtlTWFwKFxuICAgICdhZGRyZXNzLGFydGljbGUsYXNpZGUsYmFzZSxibG9ja3F1b3RlLGJvZHksY2FwdGlvbixjb2wsY29sZ3JvdXAsZGQsJyArXG4gICAgJ2RldGFpbHMsZGlhbG9nLGRpdixkbCxkdCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSwnICtcbiAgICAnaDEsaDIsaDMsaDQsaDUsaDYsaGVhZCxoZWFkZXIsaGdyb3VwLGhyLGh0bWwsbGVnZW5kLGxpLG1lbnVpdGVtLG1ldGEsJyArXG4gICAgJ29wdGdyb3VwLG9wdGlvbixwYXJhbSxycCxydCxzb3VyY2Usc3R5bGUsc3VtbWFyeSx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCwnICtcbiAgICAndGl0bGUsdHIsdHJhY2snXG4gICk7XG5cbiAgLyoqXG4gICAqIE5vdCB0eXBlLWNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGl0J3MgbW9zdGx5IHZlbmRvciBjb2RlLlxuICAgKi9cblxuICAvLyBSZWd1bGFyIEV4cHJlc3Npb25zIGZvciBwYXJzaW5nIHRhZ3MgYW5kIGF0dHJpYnV0ZXNcbiAgdmFyIGF0dHJpYnV0ZSA9IC9eXFxzKihbXlxcc1wiJzw+XFwvPV0rKSg/OlxccyooPSlcXHMqKD86XCIoW15cIl0qKVwiK3wnKFteJ10qKScrfChbXlxcc1wiJz08PmBdKykpKT8vO1xuICB2YXIgZHluYW1pY0FyZ0F0dHJpYnV0ZSA9IC9eXFxzKigoPzp2LVtcXHctXSs6fEB8OnwjKVxcW1tePV0rXFxdW15cXHNcIic8PlxcLz1dKikoPzpcXHMqKD0pXFxzKig/OlwiKFteXCJdKilcIit8JyhbXiddKiknK3woW15cXHNcIic9PD5gXSspKSk/LztcbiAgdmFyIG5jbmFtZSA9IFwiW2EtekEtWl9dW1xcXFwtXFxcXC4wLTlfYS16QS1aXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCJdKlwiO1xuICB2YXIgcW5hbWVDYXB0dXJlID0gXCIoKD86XCIgKyBuY25hbWUgKyBcIlxcXFw6KT9cIiArIG5jbmFtZSArIFwiKVwiO1xuICB2YXIgc3RhcnRUYWdPcGVuID0gbmV3IFJlZ0V4cCgoXCJePFwiICsgcW5hbWVDYXB0dXJlKSk7XG4gIHZhciBzdGFydFRhZ0Nsb3NlID0gL15cXHMqKFxcLz8pPi87XG4gIHZhciBlbmRUYWcgPSBuZXcgUmVnRXhwKChcIl48XFxcXC9cIiArIHFuYW1lQ2FwdHVyZSArIFwiW14+XSo+XCIpKTtcbiAgdmFyIGRvY3R5cGUgPSAvXjwhRE9DVFlQRSBbXj5dKz4vaTtcbiAgLy8gIzcyOTg6IGVzY2FwZSAtIHRvIGF2b2lkIGJlaW5nIHBhc2VkIGFzIEhUTUwgY29tbWVudCB3aGVuIGlubGluZWQgaW4gcGFnZVxuICB2YXIgY29tbWVudCA9IC9ePCFcXC0tLztcbiAgdmFyIGNvbmRpdGlvbmFsQ29tbWVudCA9IC9ePCFcXFsvO1xuXG4gIC8vIFNwZWNpYWwgRWxlbWVudHMgKGNhbiBjb250YWluIGFueXRoaW5nKVxuICB2YXIgaXNQbGFpblRleHRFbGVtZW50ID0gbWFrZU1hcCgnc2NyaXB0LHN0eWxlLHRleHRhcmVhJywgdHJ1ZSk7XG4gIHZhciByZUNhY2hlID0ge307XG5cbiAgdmFyIGRlY29kaW5nTWFwID0ge1xuICAgICcmbHQ7JzogJzwnLFxuICAgICcmZ3Q7JzogJz4nLFxuICAgICcmcXVvdDsnOiAnXCInLFxuICAgICcmYW1wOyc6ICcmJyxcbiAgICAnJiMxMDsnOiAnXFxuJyxcbiAgICAnJiM5Oyc6ICdcXHQnLFxuICAgICcmIzM5Oyc6IFwiJ1wiXG4gIH07XG4gIHZhciBlbmNvZGVkQXR0ciA9IC8mKD86bHR8Z3R8cXVvdHxhbXB8IzM5KTsvZztcbiAgdmFyIGVuY29kZWRBdHRyV2l0aE5ld0xpbmVzID0gLyYoPzpsdHxndHxxdW90fGFtcHwjMzl8IzEwfCM5KTsvZztcblxuICAvLyAjNTk5MlxuICB2YXIgaXNJZ25vcmVOZXdsaW5lVGFnID0gbWFrZU1hcCgncHJlLHRleHRhcmVhJywgdHJ1ZSk7XG4gIHZhciBzaG91bGRJZ25vcmVGaXJzdE5ld2xpbmUgPSBmdW5jdGlvbiAodGFnLCBodG1sKSB7IHJldHVybiB0YWcgJiYgaXNJZ25vcmVOZXdsaW5lVGFnKHRhZykgJiYgaHRtbFswXSA9PT0gJ1xcbic7IH07XG5cbiAgZnVuY3Rpb24gZGVjb2RlQXR0ciAodmFsdWUsIHNob3VsZERlY29kZU5ld2xpbmVzKSB7XG4gICAgdmFyIHJlID0gc2hvdWxkRGVjb2RlTmV3bGluZXMgPyBlbmNvZGVkQXR0cldpdGhOZXdMaW5lcyA6IGVuY29kZWRBdHRyO1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlLCBmdW5jdGlvbiAobWF0Y2gpIHsgcmV0dXJuIGRlY29kaW5nTWFwW21hdGNoXTsgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSFRNTCAoaHRtbCwgb3B0aW9ucykge1xuICAgIHZhciBzdGFjayA9IFtdO1xuICAgIHZhciBleHBlY3RIVE1MID0gb3B0aW9ucy5leHBlY3RIVE1MO1xuICAgIHZhciBpc1VuYXJ5VGFnJCQxID0gb3B0aW9ucy5pc1VuYXJ5VGFnIHx8IG5vO1xuICAgIHZhciBjYW5CZUxlZnRPcGVuVGFnJCQxID0gb3B0aW9ucy5jYW5CZUxlZnRPcGVuVGFnIHx8IG5vO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGxhc3QsIGxhc3RUYWc7XG4gICAgd2hpbGUgKGh0bWwpIHtcbiAgICAgIGxhc3QgPSBodG1sO1xuICAgICAgLy8gTWFrZSBzdXJlIHdlJ3JlIG5vdCBpbiBhIHBsYWludGV4dCBjb250ZW50IGVsZW1lbnQgbGlrZSBzY3JpcHQvc3R5bGVcbiAgICAgIGlmICghbGFzdFRhZyB8fCAhaXNQbGFpblRleHRFbGVtZW50KGxhc3RUYWcpKSB7XG4gICAgICAgIHZhciB0ZXh0RW5kID0gaHRtbC5pbmRleE9mKCc8Jyk7XG4gICAgICAgIGlmICh0ZXh0RW5kID09PSAwKSB7XG4gICAgICAgICAgLy8gQ29tbWVudDpcbiAgICAgICAgICBpZiAoY29tbWVudC50ZXN0KGh0bWwpKSB7XG4gICAgICAgICAgICB2YXIgY29tbWVudEVuZCA9IGh0bWwuaW5kZXhPZignLS0+Jyk7XG5cbiAgICAgICAgICAgIGlmIChjb21tZW50RW5kID49IDApIHtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvdWxkS2VlcENvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbW1lbnQoaHRtbC5zdWJzdHJpbmcoNCwgY29tbWVudEVuZCksIGluZGV4LCBpbmRleCArIGNvbW1lbnRFbmQgKyAzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhZHZhbmNlKGNvbW1lbnRFbmQgKyAzKTtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbmRpdGlvbmFsX2NvbW1lbnQjRG93bmxldmVsLXJldmVhbGVkX2NvbmRpdGlvbmFsX2NvbW1lbnRcbiAgICAgICAgICBpZiAoY29uZGl0aW9uYWxDb21tZW50LnRlc3QoaHRtbCkpIHtcbiAgICAgICAgICAgIHZhciBjb25kaXRpb25hbEVuZCA9IGh0bWwuaW5kZXhPZignXT4nKTtcblxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbmFsRW5kID49IDApIHtcbiAgICAgICAgICAgICAgYWR2YW5jZShjb25kaXRpb25hbEVuZCArIDIpO1xuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERvY3R5cGU6XG4gICAgICAgICAgdmFyIGRvY3R5cGVNYXRjaCA9IGh0bWwubWF0Y2goZG9jdHlwZSk7XG4gICAgICAgICAgaWYgKGRvY3R5cGVNYXRjaCkge1xuICAgICAgICAgICAgYWR2YW5jZShkb2N0eXBlTWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRW5kIHRhZzpcbiAgICAgICAgICB2YXIgZW5kVGFnTWF0Y2ggPSBodG1sLm1hdGNoKGVuZFRhZyk7XG4gICAgICAgICAgaWYgKGVuZFRhZ01hdGNoKSB7XG4gICAgICAgICAgICB2YXIgY3VySW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGFkdmFuY2UoZW5kVGFnTWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgIHBhcnNlRW5kVGFnKGVuZFRhZ01hdGNoWzFdLCBjdXJJbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdGFydCB0YWc6XG4gICAgICAgICAgdmFyIHN0YXJ0VGFnTWF0Y2ggPSBwYXJzZVN0YXJ0VGFnKCk7XG4gICAgICAgICAgaWYgKHN0YXJ0VGFnTWF0Y2gpIHtcbiAgICAgICAgICAgIGhhbmRsZVN0YXJ0VGFnKHN0YXJ0VGFnTWF0Y2gpO1xuICAgICAgICAgICAgaWYgKHNob3VsZElnbm9yZUZpcnN0TmV3bGluZShzdGFydFRhZ01hdGNoLnRhZ05hbWUsIGh0bWwpKSB7XG4gICAgICAgICAgICAgIGFkdmFuY2UoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0ZXh0ID0gKHZvaWQgMCksIHJlc3QgPSAodm9pZCAwKSwgbmV4dCA9ICh2b2lkIDApO1xuICAgICAgICBpZiAodGV4dEVuZCA+PSAwKSB7XG4gICAgICAgICAgcmVzdCA9IGh0bWwuc2xpY2UodGV4dEVuZCk7XG4gICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgIWVuZFRhZy50ZXN0KHJlc3QpICYmXG4gICAgICAgICAgICAhc3RhcnRUYWdPcGVuLnRlc3QocmVzdCkgJiZcbiAgICAgICAgICAgICFjb21tZW50LnRlc3QocmVzdCkgJiZcbiAgICAgICAgICAgICFjb25kaXRpb25hbENvbW1lbnQudGVzdChyZXN0KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gPCBpbiBwbGFpbiB0ZXh0LCBiZSBmb3JnaXZpbmcgYW5kIHRyZWF0IGl0IGFzIHRleHRcbiAgICAgICAgICAgIG5leHQgPSByZXN0LmluZGV4T2YoJzwnLCAxKTtcbiAgICAgICAgICAgIGlmIChuZXh0IDwgMCkgeyBicmVhayB9XG4gICAgICAgICAgICB0ZXh0RW5kICs9IG5leHQ7XG4gICAgICAgICAgICByZXN0ID0gaHRtbC5zbGljZSh0ZXh0RW5kKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dCA9IGh0bWwuc3Vic3RyaW5nKDAsIHRleHRFbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRleHRFbmQgPCAwKSB7XG4gICAgICAgICAgdGV4dCA9IGh0bWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgIGFkdmFuY2UodGV4dC5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhcnMgJiYgdGV4dCkge1xuICAgICAgICAgIG9wdGlvbnMuY2hhcnModGV4dCwgaW5kZXggLSB0ZXh0Lmxlbmd0aCwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZW5kVGFnTGVuZ3RoID0gMDtcbiAgICAgICAgdmFyIHN0YWNrZWRUYWcgPSBsYXN0VGFnLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciByZVN0YWNrZWRUYWcgPSByZUNhY2hlW3N0YWNrZWRUYWddIHx8IChyZUNhY2hlW3N0YWNrZWRUYWddID0gbmV3IFJlZ0V4cCgnKFtcXFxcc1xcXFxTXSo/KSg8LycgKyBzdGFja2VkVGFnICsgJ1tePl0qPiknLCAnaScpKTtcbiAgICAgICAgdmFyIHJlc3QkMSA9IGh0bWwucmVwbGFjZShyZVN0YWNrZWRUYWcsIGZ1bmN0aW9uIChhbGwsIHRleHQsIGVuZFRhZykge1xuICAgICAgICAgIGVuZFRhZ0xlbmd0aCA9IGVuZFRhZy5sZW5ndGg7XG4gICAgICAgICAgaWYgKCFpc1BsYWluVGV4dEVsZW1lbnQoc3RhY2tlZFRhZykgJiYgc3RhY2tlZFRhZyAhPT0gJ25vc2NyaXB0Jykge1xuICAgICAgICAgICAgdGV4dCA9IHRleHRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLzwhXFwtLShbXFxzXFxTXSo/KS0tPi9nLCAnJDEnKSAvLyAjNzI5OFxuICAgICAgICAgICAgICAucmVwbGFjZSgvPCFcXFtDREFUQVxcWyhbXFxzXFxTXSo/KV1dPi9nLCAnJDEnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNob3VsZElnbm9yZUZpcnN0TmV3bGluZShzdGFja2VkVGFnLCB0ZXh0KSkge1xuICAgICAgICAgICAgdGV4dCA9IHRleHQuc2xpY2UoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvcHRpb25zLmNoYXJzKSB7XG4gICAgICAgICAgICBvcHRpb25zLmNoYXJzKHRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgfSk7XG4gICAgICAgIGluZGV4ICs9IGh0bWwubGVuZ3RoIC0gcmVzdCQxLmxlbmd0aDtcbiAgICAgICAgaHRtbCA9IHJlc3QkMTtcbiAgICAgICAgcGFyc2VFbmRUYWcoc3RhY2tlZFRhZywgaW5kZXggLSBlbmRUYWdMZW5ndGgsIGluZGV4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGh0bWwgPT09IGxhc3QpIHtcbiAgICAgICAgb3B0aW9ucy5jaGFycyAmJiBvcHRpb25zLmNoYXJzKGh0bWwpO1xuICAgICAgICBpZiAoIXN0YWNrLmxlbmd0aCAmJiBvcHRpb25zLndhcm4pIHtcbiAgICAgICAgICBvcHRpb25zLndhcm4oKFwiTWFsLWZvcm1hdHRlZCB0YWcgYXQgZW5kIG9mIHRlbXBsYXRlOiBcXFwiXCIgKyBodG1sICsgXCJcXFwiXCIpLCB7IHN0YXJ0OiBpbmRleCArIGh0bWwubGVuZ3RoIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgYW55IHJlbWFpbmluZyB0YWdzXG4gICAgcGFyc2VFbmRUYWcoKTtcblxuICAgIGZ1bmN0aW9uIGFkdmFuY2UgKG4pIHtcbiAgICAgIGluZGV4ICs9IG47XG4gICAgICBodG1sID0gaHRtbC5zdWJzdHJpbmcobik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTdGFydFRhZyAoKSB7XG4gICAgICB2YXIgc3RhcnQgPSBodG1sLm1hdGNoKHN0YXJ0VGFnT3Blbik7XG4gICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgdmFyIG1hdGNoID0ge1xuICAgICAgICAgIHRhZ05hbWU6IHN0YXJ0WzFdLFxuICAgICAgICAgIGF0dHJzOiBbXSxcbiAgICAgICAgICBzdGFydDogaW5kZXhcbiAgICAgICAgfTtcbiAgICAgICAgYWR2YW5jZShzdGFydFswXS5sZW5ndGgpO1xuICAgICAgICB2YXIgZW5kLCBhdHRyO1xuICAgICAgICB3aGlsZSAoIShlbmQgPSBodG1sLm1hdGNoKHN0YXJ0VGFnQ2xvc2UpKSAmJiAoYXR0ciA9IGh0bWwubWF0Y2goZHluYW1pY0FyZ0F0dHJpYnV0ZSkgfHwgaHRtbC5tYXRjaChhdHRyaWJ1dGUpKSkge1xuICAgICAgICAgIGF0dHIuc3RhcnQgPSBpbmRleDtcbiAgICAgICAgICBhZHZhbmNlKGF0dHJbMF0ubGVuZ3RoKTtcbiAgICAgICAgICBhdHRyLmVuZCA9IGluZGV4O1xuICAgICAgICAgIG1hdGNoLmF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuZCkge1xuICAgICAgICAgIG1hdGNoLnVuYXJ5U2xhc2ggPSBlbmRbMV07XG4gICAgICAgICAgYWR2YW5jZShlbmRbMF0ubGVuZ3RoKTtcbiAgICAgICAgICBtYXRjaC5lbmQgPSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0YXJ0VGFnIChtYXRjaCkge1xuICAgICAgdmFyIHRhZ05hbWUgPSBtYXRjaC50YWdOYW1lO1xuICAgICAgdmFyIHVuYXJ5U2xhc2ggPSBtYXRjaC51bmFyeVNsYXNoO1xuXG4gICAgICBpZiAoZXhwZWN0SFRNTCkge1xuICAgICAgICBpZiAobGFzdFRhZyA9PT0gJ3AnICYmIGlzTm9uUGhyYXNpbmdUYWcodGFnTmFtZSkpIHtcbiAgICAgICAgICBwYXJzZUVuZFRhZyhsYXN0VGFnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuQmVMZWZ0T3BlblRhZyQkMSh0YWdOYW1lKSAmJiBsYXN0VGFnID09PSB0YWdOYW1lKSB7XG4gICAgICAgICAgcGFyc2VFbmRUYWcodGFnTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHVuYXJ5ID0gaXNVbmFyeVRhZyQkMSh0YWdOYW1lKSB8fCAhIXVuYXJ5U2xhc2g7XG5cbiAgICAgIHZhciBsID0gbWF0Y2guYXR0cnMubGVuZ3RoO1xuICAgICAgdmFyIGF0dHJzID0gbmV3IEFycmF5KGwpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBtYXRjaC5hdHRyc1tpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gYXJnc1szXSB8fCBhcmdzWzRdIHx8IGFyZ3NbNV0gfHwgJyc7XG4gICAgICAgIHZhciBzaG91bGREZWNvZGVOZXdsaW5lcyA9IHRhZ05hbWUgPT09ICdhJyAmJiBhcmdzWzFdID09PSAnaHJlZidcbiAgICAgICAgICA/IG9wdGlvbnMuc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmXG4gICAgICAgICAgOiBvcHRpb25zLnNob3VsZERlY29kZU5ld2xpbmVzO1xuICAgICAgICBhdHRyc1tpXSA9IHtcbiAgICAgICAgICBuYW1lOiBhcmdzWzFdLFxuICAgICAgICAgIHZhbHVlOiBkZWNvZGVBdHRyKHZhbHVlLCBzaG91bGREZWNvZGVOZXdsaW5lcylcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9wdGlvbnMub3V0cHV0U291cmNlUmFuZ2UpIHtcbiAgICAgICAgICBhdHRyc1tpXS5zdGFydCA9IGFyZ3Muc3RhcnQgKyBhcmdzWzBdLm1hdGNoKC9eXFxzKi8pLmxlbmd0aDtcbiAgICAgICAgICBhdHRyc1tpXS5lbmQgPSBhcmdzLmVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXVuYXJ5KSB7XG4gICAgICAgIHN0YWNrLnB1c2goeyB0YWc6IHRhZ05hbWUsIGxvd2VyQ2FzZWRUYWc6IHRhZ05hbWUudG9Mb3dlckNhc2UoKSwgYXR0cnM6IGF0dHJzLCBzdGFydDogbWF0Y2guc3RhcnQsIGVuZDogbWF0Y2guZW5kIH0pO1xuICAgICAgICBsYXN0VGFnID0gdGFnTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuc3RhcnQpIHtcbiAgICAgICAgb3B0aW9ucy5zdGFydCh0YWdOYW1lLCBhdHRycywgdW5hcnksIG1hdGNoLnN0YXJ0LCBtYXRjaC5lbmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlRW5kVGFnICh0YWdOYW1lLCBzdGFydCwgZW5kKSB7XG4gICAgICB2YXIgcG9zLCBsb3dlckNhc2VkVGFnTmFtZTtcbiAgICAgIGlmIChzdGFydCA9PSBudWxsKSB7IHN0YXJ0ID0gaW5kZXg7IH1cbiAgICAgIGlmIChlbmQgPT0gbnVsbCkgeyBlbmQgPSBpbmRleDsgfVxuXG4gICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IG9wZW5lZCB0YWcgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAgaWYgKHRhZ05hbWUpIHtcbiAgICAgICAgbG93ZXJDYXNlZFRhZ05hbWUgPSB0YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGZvciAocG9zID0gc3RhY2subGVuZ3RoIC0gMTsgcG9zID49IDA7IHBvcy0tKSB7XG4gICAgICAgICAgaWYgKHN0YWNrW3Bvc10ubG93ZXJDYXNlZFRhZyA9PT0gbG93ZXJDYXNlZFRhZ05hbWUpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBubyB0YWcgbmFtZSBpcyBwcm92aWRlZCwgY2xlYW4gc2hvcFxuICAgICAgICBwb3MgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAocG9zID49IDApIHtcbiAgICAgICAgLy8gQ2xvc2UgYWxsIHRoZSBvcGVuIGVsZW1lbnRzLCB1cCB0aGUgc3RhY2tcbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gcG9zOyBpLS0pIHtcbiAgICAgICAgICBpZiAoaSA+IHBvcyB8fCAhdGFnTmFtZSAmJlxuICAgICAgICAgICAgb3B0aW9ucy53YXJuXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBvcHRpb25zLndhcm4oXG4gICAgICAgICAgICAgIChcInRhZyA8XCIgKyAoc3RhY2tbaV0udGFnKSArIFwiPiBoYXMgbm8gbWF0Y2hpbmcgZW5kIHRhZy5cIiksXG4gICAgICAgICAgICAgIHsgc3RhcnQ6IHN0YWNrW2ldLnN0YXJ0LCBlbmQ6IHN0YWNrW2ldLmVuZCB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob3B0aW9ucy5lbmQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZW5kKHN0YWNrW2ldLnRhZywgc3RhcnQsIGVuZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBvcGVuIGVsZW1lbnRzIGZyb20gdGhlIHN0YWNrXG4gICAgICAgIHN0YWNrLmxlbmd0aCA9IHBvcztcbiAgICAgICAgbGFzdFRhZyA9IHBvcyAmJiBzdGFja1twb3MgLSAxXS50YWc7XG4gICAgICB9IGVsc2UgaWYgKGxvd2VyQ2FzZWRUYWdOYW1lID09PSAnYnInKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnN0YXJ0KSB7XG4gICAgICAgICAgb3B0aW9ucy5zdGFydCh0YWdOYW1lLCBbXSwgdHJ1ZSwgc3RhcnQsIGVuZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobG93ZXJDYXNlZFRhZ05hbWUgPT09ICdwJykge1xuICAgICAgICBpZiAob3B0aW9ucy5zdGFydCkge1xuICAgICAgICAgIG9wdGlvbnMuc3RhcnQodGFnTmFtZSwgW10sIGZhbHNlLCBzdGFydCwgZW5kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5lbmQpIHtcbiAgICAgICAgICBvcHRpb25zLmVuZCh0YWdOYW1lLCBzdGFydCwgZW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciBvblJFID0gL15AfF52LW9uOi87XG4gIHZhciBkaXJSRSA9IC9edi18XkB8XjovO1xuICB2YXIgZm9yQWxpYXNSRSA9IC8oW1xcc1xcU10qPylcXHMrKD86aW58b2YpXFxzKyhbXFxzXFxTXSopLztcbiAgdmFyIGZvckl0ZXJhdG9yUkUgPSAvLChbXixcXH1cXF1dKikoPzosKFteLFxcfVxcXV0qKSk/JC87XG4gIHZhciBzdHJpcFBhcmVuc1JFID0gL15cXCh8XFwpJC9nO1xuICB2YXIgZHluYW1pY0FyZ1JFID0gL15cXFsuKlxcXSQvO1xuXG4gIHZhciBhcmdSRSA9IC86KC4qKSQvO1xuICB2YXIgYmluZFJFID0gL146fF5cXC58XnYtYmluZDovO1xuICB2YXIgbW9kaWZpZXJSRSA9IC9cXC5bXi5cXF1dKyg/PVteXFxdXSokKS9nO1xuXG4gIHZhciBzbG90UkUgPSAvXnYtc2xvdCg6fCQpfF4jLztcblxuICB2YXIgbGluZUJyZWFrUkUgPSAvW1xcclxcbl0vO1xuICB2YXIgd2hpdGVzcGFjZVJFJDEgPSAvXFxzKy9nO1xuXG4gIHZhciBpbnZhbGlkQXR0cmlidXRlUkUgPSAvW1xcc1wiJzw+XFwvPV0vO1xuXG4gIHZhciBkZWNvZGVIVE1MQ2FjaGVkID0gY2FjaGVkKGhlLmRlY29kZSk7XG5cbiAgdmFyIGVtcHR5U2xvdFNjb3BlVG9rZW4gPSBcIl9lbXB0eV9cIjtcblxuICAvLyBjb25maWd1cmFibGUgc3RhdGVcbiAgdmFyIHdhcm4kMjtcbiAgdmFyIGRlbGltaXRlcnM7XG4gIHZhciB0cmFuc2Zvcm1zO1xuICB2YXIgcHJlVHJhbnNmb3JtcztcbiAgdmFyIHBvc3RUcmFuc2Zvcm1zO1xuICB2YXIgcGxhdGZvcm1Jc1ByZVRhZztcbiAgdmFyIHBsYXRmb3JtTXVzdFVzZVByb3A7XG4gIHZhciBwbGF0Zm9ybUdldFRhZ05hbWVzcGFjZTtcbiAgdmFyIG1heWJlQ29tcG9uZW50O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFTVEVsZW1lbnQgKFxuICAgIHRhZyxcbiAgICBhdHRycyxcbiAgICBwYXJlbnRcbiAgKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IDEsXG4gICAgICB0YWc6IHRhZyxcbiAgICAgIGF0dHJzTGlzdDogYXR0cnMsXG4gICAgICBhdHRyc01hcDogbWFrZUF0dHJzTWFwKGF0dHJzKSxcbiAgICAgIHJhd0F0dHJzTWFwOiB7fSxcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgSFRNTCBzdHJpbmcgdG8gQVNULlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2UgKFxuICAgIHRlbXBsYXRlLFxuICAgIG9wdGlvbnNcbiAgKSB7XG4gICAgd2FybiQyID0gb3B0aW9ucy53YXJuIHx8IGJhc2VXYXJuO1xuXG4gICAgcGxhdGZvcm1Jc1ByZVRhZyA9IG9wdGlvbnMuaXNQcmVUYWcgfHwgbm87XG4gICAgcGxhdGZvcm1NdXN0VXNlUHJvcCA9IG9wdGlvbnMubXVzdFVzZVByb3AgfHwgbm87XG4gICAgcGxhdGZvcm1HZXRUYWdOYW1lc3BhY2UgPSBvcHRpb25zLmdldFRhZ05hbWVzcGFjZSB8fCBubztcbiAgICB2YXIgaXNSZXNlcnZlZFRhZyA9IG9wdGlvbnMuaXNSZXNlcnZlZFRhZyB8fCBubztcbiAgICBtYXliZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gISFlbC5jb21wb25lbnQgfHwgIWlzUmVzZXJ2ZWRUYWcoZWwudGFnKTsgfTtcblxuICAgIHRyYW5zZm9ybXMgPSBwbHVja01vZHVsZUZ1bmN0aW9uKG9wdGlvbnMubW9kdWxlcywgJ3RyYW5zZm9ybU5vZGUnKTtcbiAgICBwcmVUcmFuc2Zvcm1zID0gcGx1Y2tNb2R1bGVGdW5jdGlvbihvcHRpb25zLm1vZHVsZXMsICdwcmVUcmFuc2Zvcm1Ob2RlJyk7XG4gICAgcG9zdFRyYW5zZm9ybXMgPSBwbHVja01vZHVsZUZ1bmN0aW9uKG9wdGlvbnMubW9kdWxlcywgJ3Bvc3RUcmFuc2Zvcm1Ob2RlJyk7XG5cbiAgICBkZWxpbWl0ZXJzID0gb3B0aW9ucy5kZWxpbWl0ZXJzO1xuXG4gICAgdmFyIHN0YWNrID0gW107XG4gICAgdmFyIHByZXNlcnZlV2hpdGVzcGFjZSA9IG9wdGlvbnMucHJlc2VydmVXaGl0ZXNwYWNlICE9PSBmYWxzZTtcbiAgICB2YXIgd2hpdGVzcGFjZU9wdGlvbiA9IG9wdGlvbnMud2hpdGVzcGFjZTtcbiAgICB2YXIgcm9vdDtcbiAgICB2YXIgY3VycmVudFBhcmVudDtcbiAgICB2YXIgaW5WUHJlID0gZmFsc2U7XG4gICAgdmFyIGluUHJlID0gZmFsc2U7XG4gICAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gd2Fybk9uY2UgKG1zZywgcmFuZ2UpIHtcbiAgICAgIGlmICghd2FybmVkKSB7XG4gICAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgICAgIHdhcm4kMihtc2csIHJhbmdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICAgIHRyaW1FbmRpbmdXaGl0ZXNwYWNlKGVsZW1lbnQpO1xuICAgICAgaWYgKCFpblZQcmUgJiYgIWVsZW1lbnQucHJvY2Vzc2VkKSB7XG4gICAgICAgIGVsZW1lbnQgPSBwcm9jZXNzRWxlbWVudChlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIC8vIHRyZWUgbWFuYWdlbWVudFxuICAgICAgaWYgKCFzdGFjay5sZW5ndGggJiYgZWxlbWVudCAhPT0gcm9vdCkge1xuICAgICAgICAvLyBhbGxvdyByb290IGVsZW1lbnRzIHdpdGggdi1pZiwgdi1lbHNlLWlmIGFuZCB2LWVsc2VcbiAgICAgICAgaWYgKHJvb3QuaWYgJiYgKGVsZW1lbnQuZWxzZWlmIHx8IGVsZW1lbnQuZWxzZSkpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGVja1Jvb3RDb25zdHJhaW50cyhlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWRkSWZDb25kaXRpb24ocm9vdCwge1xuICAgICAgICAgICAgZXhwOiBlbGVtZW50LmVsc2VpZixcbiAgICAgICAgICAgIGJsb2NrOiBlbGVtZW50XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2Fybk9uY2UoXG4gICAgICAgICAgICBcIkNvbXBvbmVudCB0ZW1wbGF0ZSBzaG91bGQgY29udGFpbiBleGFjdGx5IG9uZSByb290IGVsZW1lbnQuIFwiICtcbiAgICAgICAgICAgIFwiSWYgeW91IGFyZSB1c2luZyB2LWlmIG9uIG11bHRpcGxlIGVsZW1lbnRzLCBcIiArXG4gICAgICAgICAgICBcInVzZSB2LWVsc2UtaWYgdG8gY2hhaW4gdGhlbSBpbnN0ZWFkLlwiLFxuICAgICAgICAgICAgeyBzdGFydDogZWxlbWVudC5zdGFydCB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRQYXJlbnQgJiYgIWVsZW1lbnQuZm9yYmlkZGVuKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmVsc2VpZiB8fCBlbGVtZW50LmVsc2UpIHtcbiAgICAgICAgICBwcm9jZXNzSWZDb25kaXRpb25zKGVsZW1lbnQsIGN1cnJlbnRQYXJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChlbGVtZW50LnNsb3RTY29wZSkge1xuICAgICAgICAgICAgLy8gc2NvcGVkIHNsb3RcbiAgICAgICAgICAgIC8vIGtlZXAgaXQgaW4gdGhlIGNoaWxkcmVuIGxpc3Qgc28gdGhhdCB2LWVsc2UoLWlmKSBjb25kaXRpb25zIGNhblxuICAgICAgICAgICAgLy8gZmluZCBpdCBhcyB0aGUgcHJldiBub2RlLlxuICAgICAgICAgICAgdmFyIG5hbWUgPSBlbGVtZW50LnNsb3RUYXJnZXQgfHwgJ1wiZGVmYXVsdFwiJ1xuICAgICAgICAgICAgOyhjdXJyZW50UGFyZW50LnNjb3BlZFNsb3RzIHx8IChjdXJyZW50UGFyZW50LnNjb3BlZFNsb3RzID0ge30pKVtuYW1lXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRQYXJlbnQuY2hpbGRyZW4ucHVzaChlbGVtZW50KTtcbiAgICAgICAgICBlbGVtZW50LnBhcmVudCA9IGN1cnJlbnRQYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZmluYWwgY2hpbGRyZW4gY2xlYW51cFxuICAgICAgLy8gZmlsdGVyIG91dCBzY29wZWQgc2xvdHNcbiAgICAgIGVsZW1lbnQuY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gIShjKS5zbG90U2NvcGU7IH0pO1xuICAgICAgLy8gcmVtb3ZlIHRyYWlsaW5nIHdoaXRlc3BhY2Ugbm9kZSBhZ2FpblxuICAgICAgdHJpbUVuZGluZ1doaXRlc3BhY2UoZWxlbWVudCk7XG5cbiAgICAgIC8vIGNoZWNrIHByZSBzdGF0ZVxuICAgICAgaWYgKGVsZW1lbnQucHJlKSB7XG4gICAgICAgIGluVlByZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXRmb3JtSXNQcmVUYWcoZWxlbWVudC50YWcpKSB7XG4gICAgICAgIGluUHJlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBhcHBseSBwb3N0LXRyYW5zZm9ybXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zdFRyYW5zZm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zdFRyYW5zZm9ybXNbaV0oZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpbUVuZGluZ1doaXRlc3BhY2UgKGVsKSB7XG4gICAgICAvLyByZW1vdmUgdHJhaWxpbmcgd2hpdGVzcGFjZSBub2RlXG4gICAgICBpZiAoIWluUHJlKSB7XG4gICAgICAgIHZhciBsYXN0Tm9kZTtcbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgIChsYXN0Tm9kZSA9IGVsLmNoaWxkcmVuW2VsLmNoaWxkcmVuLmxlbmd0aCAtIDFdKSAmJlxuICAgICAgICAgIGxhc3ROb2RlLnR5cGUgPT09IDMgJiZcbiAgICAgICAgICBsYXN0Tm9kZS50ZXh0ID09PSAnICdcbiAgICAgICAgKSB7XG4gICAgICAgICAgZWwuY2hpbGRyZW4ucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1Jvb3RDb25zdHJhaW50cyAoZWwpIHtcbiAgICAgIGlmIChlbC50YWcgPT09ICdzbG90JyB8fCBlbC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgd2Fybk9uY2UoXG4gICAgICAgICAgXCJDYW5ub3QgdXNlIDxcIiArIChlbC50YWcpICsgXCI+IGFzIGNvbXBvbmVudCByb290IGVsZW1lbnQgYmVjYXVzZSBpdCBtYXkgXCIgK1xuICAgICAgICAgICdjb250YWluIG11bHRpcGxlIG5vZGVzLicsXG4gICAgICAgICAgeyBzdGFydDogZWwuc3RhcnQgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGVsLmF0dHJzTWFwLmhhc093blByb3BlcnR5KCd2LWZvcicpKSB7XG4gICAgICAgIHdhcm5PbmNlKFxuICAgICAgICAgICdDYW5ub3QgdXNlIHYtZm9yIG9uIHN0YXRlZnVsIGNvbXBvbmVudCByb290IGVsZW1lbnQgYmVjYXVzZSAnICtcbiAgICAgICAgICAnaXQgcmVuZGVycyBtdWx0aXBsZSBlbGVtZW50cy4nLFxuICAgICAgICAgIGVsLnJhd0F0dHJzTWFwWyd2LWZvciddXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VIVE1MKHRlbXBsYXRlLCB7XG4gICAgICB3YXJuOiB3YXJuJDIsXG4gICAgICBleHBlY3RIVE1MOiBvcHRpb25zLmV4cGVjdEhUTUwsXG4gICAgICBpc1VuYXJ5VGFnOiBvcHRpb25zLmlzVW5hcnlUYWcsXG4gICAgICBjYW5CZUxlZnRPcGVuVGFnOiBvcHRpb25zLmNhbkJlTGVmdE9wZW5UYWcsXG4gICAgICBzaG91bGREZWNvZGVOZXdsaW5lczogb3B0aW9ucy5zaG91bGREZWNvZGVOZXdsaW5lcyxcbiAgICAgIHNob3VsZERlY29kZU5ld2xpbmVzRm9ySHJlZjogb3B0aW9ucy5zaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWYsXG4gICAgICBzaG91bGRLZWVwQ29tbWVudDogb3B0aW9ucy5jb21tZW50cyxcbiAgICAgIG91dHB1dFNvdXJjZVJhbmdlOiBvcHRpb25zLm91dHB1dFNvdXJjZVJhbmdlLFxuICAgICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0ICh0YWcsIGF0dHJzLCB1bmFyeSwgc3RhcnQkMSwgZW5kKSB7XG4gICAgICAgIC8vIGNoZWNrIG5hbWVzcGFjZS5cbiAgICAgICAgLy8gaW5oZXJpdCBwYXJlbnQgbnMgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgIHZhciBucyA9IChjdXJyZW50UGFyZW50ICYmIGN1cnJlbnRQYXJlbnQubnMpIHx8IHBsYXRmb3JtR2V0VGFnTmFtZXNwYWNlKHRhZyk7XG5cbiAgICAgICAgLy8gaGFuZGxlIElFIHN2ZyBidWdcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChpc0lFICYmIG5zID09PSAnc3ZnJykge1xuICAgICAgICAgIGF0dHJzID0gZ3VhcmRJRVNWR0J1ZyhhdHRycyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlbWVudCA9IGNyZWF0ZUFTVEVsZW1lbnQodGFnLCBhdHRycywgY3VycmVudFBhcmVudCk7XG4gICAgICAgIGlmIChucykge1xuICAgICAgICAgIGVsZW1lbnQubnMgPSBucztcbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5vdXRwdXRTb3VyY2VSYW5nZSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdGFydCA9IHN0YXJ0JDE7XG4gICAgICAgICAgICBlbGVtZW50LmVuZCA9IGVuZDtcbiAgICAgICAgICAgIGVsZW1lbnQucmF3QXR0cnNNYXAgPSBlbGVtZW50LmF0dHJzTGlzdC5yZWR1Y2UoZnVuY3Rpb24gKGN1bXVsYXRlZCwgYXR0cikge1xuICAgICAgICAgICAgICBjdW11bGF0ZWRbYXR0ci5uYW1lXSA9IGF0dHI7XG4gICAgICAgICAgICAgIHJldHVybiBjdW11bGF0ZWRcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgaWYgKGludmFsaWRBdHRyaWJ1dGVSRS50ZXN0KGF0dHIubmFtZSkpIHtcbiAgICAgICAgICAgICAgd2FybiQyKFxuICAgICAgICAgICAgICAgIFwiSW52YWxpZCBkeW5hbWljIGFyZ3VtZW50IGV4cHJlc3Npb246IGF0dHJpYnV0ZSBuYW1lcyBjYW5ub3QgY29udGFpbiBcIiArXG4gICAgICAgICAgICAgICAgXCJzcGFjZXMsIHF1b3RlcywgPCwgPiwgLyBvciA9LlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXJ0OiBhdHRyLnN0YXJ0ICsgYXR0ci5uYW1lLmluZGV4T2YoXCJbXCIpLFxuICAgICAgICAgICAgICAgICAgZW5kOiBhdHRyLnN0YXJ0ICsgYXR0ci5uYW1lLmxlbmd0aFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0ZvcmJpZGRlblRhZyhlbGVtZW50KSAmJiAhaXNTZXJ2ZXJSZW5kZXJpbmcoKSkge1xuICAgICAgICAgIGVsZW1lbnQuZm9yYmlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgICAnVGVtcGxhdGVzIHNob3VsZCBvbmx5IGJlIHJlc3BvbnNpYmxlIGZvciBtYXBwaW5nIHRoZSBzdGF0ZSB0byB0aGUgJyArXG4gICAgICAgICAgICAnVUkuIEF2b2lkIHBsYWNpbmcgdGFncyB3aXRoIHNpZGUtZWZmZWN0cyBpbiB5b3VyIHRlbXBsYXRlcywgc3VjaCBhcyAnICtcbiAgICAgICAgICAgIFwiPFwiICsgdGFnICsgXCI+XCIgKyAnLCBhcyB0aGV5IHdpbGwgbm90IGJlIHBhcnNlZC4nLFxuICAgICAgICAgICAgeyBzdGFydDogZWxlbWVudC5zdGFydCB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFwcGx5IHByZS10cmFuc2Zvcm1zXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlVHJhbnNmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGVsZW1lbnQgPSBwcmVUcmFuc2Zvcm1zW2ldKGVsZW1lbnQsIG9wdGlvbnMpIHx8IGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWluVlByZSkge1xuICAgICAgICAgIHByb2Nlc3NQcmUoZWxlbWVudCk7XG4gICAgICAgICAgaWYgKGVsZW1lbnQucHJlKSB7XG4gICAgICAgICAgICBpblZQcmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhdGZvcm1Jc1ByZVRhZyhlbGVtZW50LnRhZykpIHtcbiAgICAgICAgICBpblByZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluVlByZSkge1xuICAgICAgICAgIHByb2Nlc3NSYXdBdHRycyhlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICghZWxlbWVudC5wcm9jZXNzZWQpIHtcbiAgICAgICAgICAvLyBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZXNcbiAgICAgICAgICBwcm9jZXNzRm9yKGVsZW1lbnQpO1xuICAgICAgICAgIHByb2Nlc3NJZihlbGVtZW50KTtcbiAgICAgICAgICBwcm9jZXNzT25jZShlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgIHJvb3QgPSBlbGVtZW50O1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrUm9vdENvbnN0cmFpbnRzKHJvb3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdW5hcnkpIHtcbiAgICAgICAgICBjdXJyZW50UGFyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICBzdGFjay5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb3NlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgZW5kOiBmdW5jdGlvbiBlbmQgKHRhZywgc3RhcnQsIGVuZCQxKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIC8vIHBvcCBzdGFja1xuICAgICAgICBzdGFjay5sZW5ndGggLT0gMTtcbiAgICAgICAgY3VycmVudFBhcmVudCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAob3B0aW9ucy5vdXRwdXRTb3VyY2VSYW5nZSkge1xuICAgICAgICAgIGVsZW1lbnQuZW5kID0gZW5kJDE7XG4gICAgICAgIH1cbiAgICAgICAgY2xvc2VFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfSxcblxuICAgICAgY2hhcnM6IGZ1bmN0aW9uIGNoYXJzICh0ZXh0LCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmICghY3VycmVudFBhcmVudCkge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0ZXh0ID09PSB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICB3YXJuT25jZShcbiAgICAgICAgICAgICAgICAnQ29tcG9uZW50IHRlbXBsYXRlIHJlcXVpcmVzIGEgcm9vdCBlbGVtZW50LCByYXRoZXIgdGhhbiBqdXN0IHRleHQuJyxcbiAgICAgICAgICAgICAgICB7IHN0YXJ0OiBzdGFydCB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCh0ZXh0ID0gdGV4dC50cmltKCkpKSB7XG4gICAgICAgICAgICAgIHdhcm5PbmNlKFxuICAgICAgICAgICAgICAgIChcInRleHQgXFxcIlwiICsgdGV4dCArIFwiXFxcIiBvdXRzaWRlIHJvb3QgZWxlbWVudCB3aWxsIGJlIGlnbm9yZWQuXCIpLFxuICAgICAgICAgICAgICAgIHsgc3RhcnQ6IHN0YXJ0IH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gSUUgdGV4dGFyZWEgcGxhY2Vob2xkZXIgYnVnXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoaXNJRSAmJlxuICAgICAgICAgIGN1cnJlbnRQYXJlbnQudGFnID09PSAndGV4dGFyZWEnICYmXG4gICAgICAgICAgY3VycmVudFBhcmVudC5hdHRyc01hcC5wbGFjZWhvbGRlciA9PT0gdGV4dFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBjdXJyZW50UGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBpZiAoaW5QcmUgfHwgdGV4dC50cmltKCkpIHtcbiAgICAgICAgICB0ZXh0ID0gaXNUZXh0VGFnKGN1cnJlbnRQYXJlbnQpID8gdGV4dCA6IGRlY29kZUhUTUxDYWNoZWQodGV4dCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIC8vIHJlbW92ZSB0aGUgd2hpdGVzcGFjZS1vbmx5IG5vZGUgcmlnaHQgYWZ0ZXIgYW4gb3BlbmluZyB0YWdcbiAgICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAod2hpdGVzcGFjZU9wdGlvbikge1xuICAgICAgICAgIGlmICh3aGl0ZXNwYWNlT3B0aW9uID09PSAnY29uZGVuc2UnKSB7XG4gICAgICAgICAgICAvLyBpbiBjb25kZW5zZSBtb2RlLCByZW1vdmUgdGhlIHdoaXRlc3BhY2Ugbm9kZSBpZiBpdCBjb250YWluc1xuICAgICAgICAgICAgLy8gbGluZSBicmVhaywgb3RoZXJ3aXNlIGNvbmRlbnNlIHRvIGEgc2luZ2xlIHNwYWNlXG4gICAgICAgICAgICB0ZXh0ID0gbGluZUJyZWFrUkUudGVzdCh0ZXh0KSA/ICcnIDogJyAnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gJyAnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0ID0gcHJlc2VydmVXaGl0ZXNwYWNlID8gJyAnIDogJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICBpZiAoIWluUHJlICYmIHdoaXRlc3BhY2VPcHRpb24gPT09ICdjb25kZW5zZScpIHtcbiAgICAgICAgICAgIC8vIGNvbmRlbnNlIGNvbnNlY3V0aXZlIHdoaXRlc3BhY2VzIGludG8gc2luZ2xlIHNwYWNlXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHdoaXRlc3BhY2VSRSQxLCAnICcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcmVzO1xuICAgICAgICAgIHZhciBjaGlsZDtcbiAgICAgICAgICBpZiAoIWluVlByZSAmJiB0ZXh0ICE9PSAnICcgJiYgKHJlcyA9IHBhcnNlVGV4dCh0ZXh0LCBkZWxpbWl0ZXJzKSkpIHtcbiAgICAgICAgICAgIGNoaWxkID0ge1xuICAgICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiByZXMuZXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgdG9rZW5zOiByZXMudG9rZW5zLFxuICAgICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAodGV4dCAhPT0gJyAnIHx8ICFjaGlsZHJlbi5sZW5ndGggfHwgY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0udGV4dCAhPT0gJyAnKSB7XG4gICAgICAgICAgICBjaGlsZCA9IHtcbiAgICAgICAgICAgICAgdHlwZTogMyxcbiAgICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vdXRwdXRTb3VyY2VSYW5nZSkge1xuICAgICAgICAgICAgICBjaGlsZC5zdGFydCA9IHN0YXJ0O1xuICAgICAgICAgICAgICBjaGlsZC5lbmQgPSBlbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb21tZW50OiBmdW5jdGlvbiBjb21tZW50ICh0ZXh0LCBzdGFydCwgZW5kKSB7XG4gICAgICAgIC8vIGFkZGluZyBhbnl0aW5nIGFzIGEgc2libGluZyB0byB0aGUgcm9vdCBub2RlIGlzIGZvcmJpZGRlblxuICAgICAgICAvLyBjb21tZW50cyBzaG91bGQgc3RpbGwgYmUgYWxsb3dlZCwgYnV0IGlnbm9yZWRcbiAgICAgICAgaWYgKGN1cnJlbnRQYXJlbnQpIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSB7XG4gICAgICAgICAgICB0eXBlOiAzLFxuICAgICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICAgIGlzQ29tbWVudDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG9wdGlvbnMub3V0cHV0U291cmNlUmFuZ2UpIHtcbiAgICAgICAgICAgIGNoaWxkLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgICAgICBjaGlsZC5lbmQgPSBlbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRQYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcm9vdFxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1ByZSAoZWwpIHtcbiAgICBpZiAoZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3YtcHJlJykgIT0gbnVsbCkge1xuICAgICAgZWwucHJlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmF3QXR0cnMgKGVsKSB7XG4gICAgdmFyIGxpc3QgPSBlbC5hdHRyc0xpc3Q7XG4gICAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICAgIGlmIChsZW4pIHtcbiAgICAgIHZhciBhdHRycyA9IGVsLmF0dHJzID0gbmV3IEFycmF5KGxlbik7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGF0dHJzW2ldID0ge1xuICAgICAgICAgIG5hbWU6IGxpc3RbaV0ubmFtZSxcbiAgICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkobGlzdFtpXS52YWx1ZSlcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGxpc3RbaV0uc3RhcnQgIT0gbnVsbCkge1xuICAgICAgICAgIGF0dHJzW2ldLnN0YXJ0ID0gbGlzdFtpXS5zdGFydDtcbiAgICAgICAgICBhdHRyc1tpXS5lbmQgPSBsaXN0W2ldLmVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWVsLnByZSkge1xuICAgICAgLy8gbm9uIHJvb3Qgbm9kZSBpbiBwcmUgYmxvY2tzIHdpdGggbm8gYXR0cmlidXRlc1xuICAgICAgZWwucGxhaW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50IChcbiAgICBlbGVtZW50LFxuICAgIG9wdGlvbnNcbiAgKSB7XG4gICAgcHJvY2Vzc0tleShlbGVtZW50KTtcblxuICAgIC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYSBwbGFpbiBlbGVtZW50IGFmdGVyXG4gICAgLy8gcmVtb3Zpbmcgc3RydWN0dXJhbCBhdHRyaWJ1dGVzXG4gICAgZWxlbWVudC5wbGFpbiA9IChcbiAgICAgICFlbGVtZW50LmtleSAmJlxuICAgICAgIWVsZW1lbnQuc2NvcGVkU2xvdHMgJiZcbiAgICAgICFlbGVtZW50LmF0dHJzTGlzdC5sZW5ndGhcbiAgICApO1xuXG4gICAgcHJvY2Vzc1JlZihlbGVtZW50KTtcbiAgICBwcm9jZXNzU2xvdENvbnRlbnQoZWxlbWVudCk7XG4gICAgcHJvY2Vzc1Nsb3RPdXRsZXQoZWxlbWVudCk7XG4gICAgcHJvY2Vzc0NvbXBvbmVudChlbGVtZW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYW5zZm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVsZW1lbnQgPSB0cmFuc2Zvcm1zW2ldKGVsZW1lbnQsIG9wdGlvbnMpIHx8IGVsZW1lbnQ7XG4gICAgfVxuICAgIHByb2Nlc3NBdHRycyhlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0tleSAoZWwpIHtcbiAgICB2YXIgZXhwID0gZ2V0QmluZGluZ0F0dHIoZWwsICdrZXknKTtcbiAgICBpZiAoZXhwKSB7XG4gICAgICB7XG4gICAgICAgIGlmIChlbC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgICBcIjx0ZW1wbGF0ZT4gY2Fubm90IGJlIGtleWVkLiBQbGFjZSB0aGUga2V5IG9uIHJlYWwgZWxlbWVudHMgaW5zdGVhZC5cIixcbiAgICAgICAgICAgIGdldFJhd0JpbmRpbmdBdHRyKGVsLCAna2V5JylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbC5mb3IpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBlbC5pdGVyYXRvcjIgfHwgZWwuaXRlcmF0b3IxO1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQ7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yICYmIGl0ZXJhdG9yID09PSBleHAgJiYgcGFyZW50ICYmIHBhcmVudC50YWcgPT09ICd0cmFuc2l0aW9uLWdyb3VwJykge1xuICAgICAgICAgICAgd2FybiQyKFxuICAgICAgICAgICAgICBcIkRvIG5vdCB1c2Ugdi1mb3IgaW5kZXggYXMga2V5IG9uIDx0cmFuc2l0aW9uLWdyb3VwPiBjaGlsZHJlbiwgXCIgK1xuICAgICAgICAgICAgICBcInRoaXMgaXMgdGhlIHNhbWUgYXMgbm90IHVzaW5nIGtleXMuXCIsXG4gICAgICAgICAgICAgIGdldFJhd0JpbmRpbmdBdHRyKGVsLCAna2V5JyksXG4gICAgICAgICAgICAgIHRydWUgLyogdGlwICovXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWwua2V5ID0gZXhwO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZWYgKGVsKSB7XG4gICAgdmFyIHJlZiA9IGdldEJpbmRpbmdBdHRyKGVsLCAncmVmJyk7XG4gICAgaWYgKHJlZikge1xuICAgICAgZWwucmVmID0gcmVmO1xuICAgICAgZWwucmVmSW5Gb3IgPSBjaGVja0luRm9yKGVsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRm9yIChlbCkge1xuICAgIHZhciBleHA7XG4gICAgaWYgKChleHAgPSBnZXRBbmRSZW1vdmVBdHRyKGVsLCAndi1mb3InKSkpIHtcbiAgICAgIHZhciByZXMgPSBwYXJzZUZvcihleHApO1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICBleHRlbmQoZWwsIHJlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgKFwiSW52YWxpZCB2LWZvciBleHByZXNzaW9uOiBcIiArIGV4cCksXG4gICAgICAgICAgZWwucmF3QXR0cnNNYXBbJ3YtZm9yJ11cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgZnVuY3Rpb24gcGFyc2VGb3IgKGV4cCkge1xuICAgIHZhciBpbk1hdGNoID0gZXhwLm1hdGNoKGZvckFsaWFzUkUpO1xuICAgIGlmICghaW5NYXRjaCkgeyByZXR1cm4gfVxuICAgIHZhciByZXMgPSB7fTtcbiAgICByZXMuZm9yID0gaW5NYXRjaFsyXS50cmltKCk7XG4gICAgdmFyIGFsaWFzID0gaW5NYXRjaFsxXS50cmltKCkucmVwbGFjZShzdHJpcFBhcmVuc1JFLCAnJyk7XG4gICAgdmFyIGl0ZXJhdG9yTWF0Y2ggPSBhbGlhcy5tYXRjaChmb3JJdGVyYXRvclJFKTtcbiAgICBpZiAoaXRlcmF0b3JNYXRjaCkge1xuICAgICAgcmVzLmFsaWFzID0gYWxpYXMucmVwbGFjZShmb3JJdGVyYXRvclJFLCAnJykudHJpbSgpO1xuICAgICAgcmVzLml0ZXJhdG9yMSA9IGl0ZXJhdG9yTWF0Y2hbMV0udHJpbSgpO1xuICAgICAgaWYgKGl0ZXJhdG9yTWF0Y2hbMl0pIHtcbiAgICAgICAgcmVzLml0ZXJhdG9yMiA9IGl0ZXJhdG9yTWF0Y2hbMl0udHJpbSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMuYWxpYXMgPSBhbGlhcztcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0lmIChlbCkge1xuICAgIHZhciBleHAgPSBnZXRBbmRSZW1vdmVBdHRyKGVsLCAndi1pZicpO1xuICAgIGlmIChleHApIHtcbiAgICAgIGVsLmlmID0gZXhwO1xuICAgICAgYWRkSWZDb25kaXRpb24oZWwsIHtcbiAgICAgICAgZXhwOiBleHAsXG4gICAgICAgIGJsb2NrOiBlbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChnZXRBbmRSZW1vdmVBdHRyKGVsLCAndi1lbHNlJykgIT0gbnVsbCkge1xuICAgICAgICBlbC5lbHNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBlbHNlaWYgPSBnZXRBbmRSZW1vdmVBdHRyKGVsLCAndi1lbHNlLWlmJyk7XG4gICAgICBpZiAoZWxzZWlmKSB7XG4gICAgICAgIGVsLmVsc2VpZiA9IGVsc2VpZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzSWZDb25kaXRpb25zIChlbCwgcGFyZW50KSB7XG4gICAgdmFyIHByZXYgPSBmaW5kUHJldkVsZW1lbnQocGFyZW50LmNoaWxkcmVuKTtcbiAgICBpZiAocHJldiAmJiBwcmV2LmlmKSB7XG4gICAgICBhZGRJZkNvbmRpdGlvbihwcmV2LCB7XG4gICAgICAgIGV4cDogZWwuZWxzZWlmLFxuICAgICAgICBibG9jazogZWxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuJDIoXG4gICAgICAgIFwidi1cIiArIChlbC5lbHNlaWYgPyAoJ2Vsc2UtaWY9XCInICsgZWwuZWxzZWlmICsgJ1wiJykgOiAnZWxzZScpICsgXCIgXCIgK1xuICAgICAgICBcInVzZWQgb24gZWxlbWVudCA8XCIgKyAoZWwudGFnKSArIFwiPiB3aXRob3V0IGNvcnJlc3BvbmRpbmcgdi1pZi5cIixcbiAgICAgICAgZWwucmF3QXR0cnNNYXBbZWwuZWxzZWlmID8gJ3YtZWxzZS1pZicgOiAndi1lbHNlJ11cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZFByZXZFbGVtZW50IChjaGlsZHJlbikge1xuICAgIHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChjaGlsZHJlbltpXS50eXBlID09PSAxKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbltpXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldLnRleHQgIT09ICcgJykge1xuICAgICAgICAgIHdhcm4kMihcbiAgICAgICAgICAgIFwidGV4dCBcXFwiXCIgKyAoY2hpbGRyZW5baV0udGV4dC50cmltKCkpICsgXCJcXFwiIGJldHdlZW4gdi1pZiBhbmQgdi1lbHNlKC1pZikgXCIgK1xuICAgICAgICAgICAgXCJ3aWxsIGJlIGlnbm9yZWQuXCIsXG4gICAgICAgICAgICBjaGlsZHJlbltpXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4ucG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkSWZDb25kaXRpb24gKGVsLCBjb25kaXRpb24pIHtcbiAgICBpZiAoIWVsLmlmQ29uZGl0aW9ucykge1xuICAgICAgZWwuaWZDb25kaXRpb25zID0gW107XG4gICAgfVxuICAgIGVsLmlmQ29uZGl0aW9ucy5wdXNoKGNvbmRpdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzT25jZSAoZWwpIHtcbiAgICB2YXIgb25jZSQkMSA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LW9uY2UnKTtcbiAgICBpZiAob25jZSQkMSAhPSBudWxsKSB7XG4gICAgICBlbC5vbmNlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBoYW5kbGUgY29udGVudCBiZWluZyBwYXNzZWQgdG8gYSBjb21wb25lbnQgYXMgc2xvdCxcbiAgLy8gZS5nLiA8dGVtcGxhdGUgc2xvdD1cInh4eFwiPiwgPGRpdiBzbG90LXNjb3BlPVwieHh4XCI+XG4gIGZ1bmN0aW9uIHByb2Nlc3NTbG90Q29udGVudCAoZWwpIHtcbiAgICB2YXIgc2xvdFNjb3BlO1xuICAgIGlmIChlbC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgIHNsb3RTY29wZSA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICdzY29wZScpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoc2xvdFNjb3BlKSB7XG4gICAgICAgIHdhcm4kMihcbiAgICAgICAgICBcInRoZSBcXFwic2NvcGVcXFwiIGF0dHJpYnV0ZSBmb3Igc2NvcGVkIHNsb3RzIGhhdmUgYmVlbiBkZXByZWNhdGVkIGFuZCBcIiArXG4gICAgICAgICAgXCJyZXBsYWNlZCBieSBcXFwic2xvdC1zY29wZVxcXCIgc2luY2UgMi41LiBUaGUgbmV3IFxcXCJzbG90LXNjb3BlXFxcIiBhdHRyaWJ1dGUgXCIgK1xuICAgICAgICAgIFwiY2FuIGFsc28gYmUgdXNlZCBvbiBwbGFpbiBlbGVtZW50cyBpbiBhZGRpdGlvbiB0byA8dGVtcGxhdGU+IHRvIFwiICtcbiAgICAgICAgICBcImRlbm90ZSBzY29wZWQgc2xvdHMuXCIsXG4gICAgICAgICAgZWwucmF3QXR0cnNNYXBbJ3Njb3BlJ10sXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZWwuc2xvdFNjb3BlID0gc2xvdFNjb3BlIHx8IGdldEFuZFJlbW92ZUF0dHIoZWwsICdzbG90LXNjb3BlJyk7XG4gICAgfSBlbHNlIGlmICgoc2xvdFNjb3BlID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3Nsb3Qtc2NvcGUnKSkpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGVsLmF0dHJzTWFwWyd2LWZvciddKSB7XG4gICAgICAgIHdhcm4kMihcbiAgICAgICAgICBcIkFtYmlndW91cyBjb21iaW5lZCB1c2FnZSBvZiBzbG90LXNjb3BlIGFuZCB2LWZvciBvbiA8XCIgKyAoZWwudGFnKSArIFwiPiBcIiArXG4gICAgICAgICAgXCIodi1mb3IgdGFrZXMgaGlnaGVyIHByaW9yaXR5KS4gVXNlIGEgd3JhcHBlciA8dGVtcGxhdGU+IGZvciB0aGUgXCIgK1xuICAgICAgICAgIFwic2NvcGVkIHNsb3QgdG8gbWFrZSBpdCBjbGVhcmVyLlwiLFxuICAgICAgICAgIGVsLnJhd0F0dHJzTWFwWydzbG90LXNjb3BlJ10sXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZWwuc2xvdFNjb3BlID0gc2xvdFNjb3BlO1xuICAgIH1cblxuICAgIC8vIHNsb3Q9XCJ4eHhcIlxuICAgIHZhciBzbG90VGFyZ2V0ID0gZ2V0QmluZGluZ0F0dHIoZWwsICdzbG90Jyk7XG4gICAgaWYgKHNsb3RUYXJnZXQpIHtcbiAgICAgIGVsLnNsb3RUYXJnZXQgPSBzbG90VGFyZ2V0ID09PSAnXCJcIicgPyAnXCJkZWZhdWx0XCInIDogc2xvdFRhcmdldDtcbiAgICAgIGVsLnNsb3RUYXJnZXREeW5hbWljID0gISEoZWwuYXR0cnNNYXBbJzpzbG90J10gfHwgZWwuYXR0cnNNYXBbJ3YtYmluZDpzbG90J10pO1xuICAgICAgLy8gcHJlc2VydmUgc2xvdCBhcyBhbiBhdHRyaWJ1dGUgZm9yIG5hdGl2ZSBzaGFkb3cgRE9NIGNvbXBhdFxuICAgICAgLy8gb25seSBmb3Igbm9uLXNjb3BlZCBzbG90cy5cbiAgICAgIGlmIChlbC50YWcgIT09ICd0ZW1wbGF0ZScgJiYgIWVsLnNsb3RTY29wZSkge1xuICAgICAgICBhZGRBdHRyKGVsLCAnc2xvdCcsIHNsb3RUYXJnZXQsIGdldFJhd0JpbmRpbmdBdHRyKGVsLCAnc2xvdCcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLjYgdi1zbG90IHN5bnRheFxuICAgIHtcbiAgICAgIGlmIChlbC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgLy8gdi1zbG90IG9uIDx0ZW1wbGF0ZT5cbiAgICAgICAgdmFyIHNsb3RCaW5kaW5nID0gZ2V0QW5kUmVtb3ZlQXR0ckJ5UmVnZXgoZWwsIHNsb3RSRSk7XG4gICAgICAgIGlmIChzbG90QmluZGluZykge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChlbC5zbG90VGFyZ2V0IHx8IGVsLnNsb3RTY29wZSkge1xuICAgICAgICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgICAgICAgXCJVbmV4cGVjdGVkIG1peGVkIHVzYWdlIG9mIGRpZmZlcmVudCBzbG90IHN5bnRheGVzLlwiLFxuICAgICAgICAgICAgICAgIGVsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWwucGFyZW50ICYmICFtYXliZUNvbXBvbmVudChlbC5wYXJlbnQpKSB7XG4gICAgICAgICAgICAgIHdhcm4kMihcbiAgICAgICAgICAgICAgICBcIjx0ZW1wbGF0ZSB2LXNsb3Q+IGNhbiBvbmx5IGFwcGVhciBhdCB0aGUgcm9vdCBsZXZlbCBpbnNpZGUgXCIgK1xuICAgICAgICAgICAgICAgIFwidGhlIHJlY2VpdmluZyB0aGUgY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgZWxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHJlZiA9IGdldFNsb3ROYW1lKHNsb3RCaW5kaW5nKTtcbiAgICAgICAgICB2YXIgbmFtZSA9IHJlZi5uYW1lO1xuICAgICAgICAgIHZhciBkeW5hbWljID0gcmVmLmR5bmFtaWM7XG4gICAgICAgICAgZWwuc2xvdFRhcmdldCA9IG5hbWU7XG4gICAgICAgICAgZWwuc2xvdFRhcmdldER5bmFtaWMgPSBkeW5hbWljO1xuICAgICAgICAgIGVsLnNsb3RTY29wZSA9IHNsb3RCaW5kaW5nLnZhbHVlIHx8IGVtcHR5U2xvdFNjb3BlVG9rZW47IC8vIGZvcmNlIGl0IGludG8gYSBzY29wZWQgc2xvdCBmb3IgcGVyZlxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB2LXNsb3Qgb24gY29tcG9uZW50LCBkZW5vdGVzIGRlZmF1bHQgc2xvdFxuICAgICAgICB2YXIgc2xvdEJpbmRpbmckMSA9IGdldEFuZFJlbW92ZUF0dHJCeVJlZ2V4KGVsLCBzbG90UkUpO1xuICAgICAgICBpZiAoc2xvdEJpbmRpbmckMSkge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmICghbWF5YmVDb21wb25lbnQoZWwpKSB7XG4gICAgICAgICAgICAgIHdhcm4kMihcbiAgICAgICAgICAgICAgICBcInYtc2xvdCBjYW4gb25seSBiZSB1c2VkIG9uIGNvbXBvbmVudHMgb3IgPHRlbXBsYXRlPi5cIixcbiAgICAgICAgICAgICAgICBzbG90QmluZGluZyQxXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWwuc2xvdFNjb3BlIHx8IGVsLnNsb3RUYXJnZXQpIHtcbiAgICAgICAgICAgICAgd2FybiQyKFxuICAgICAgICAgICAgICAgIFwiVW5leHBlY3RlZCBtaXhlZCB1c2FnZSBvZiBkaWZmZXJlbnQgc2xvdCBzeW50YXhlcy5cIixcbiAgICAgICAgICAgICAgICBlbFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsLnNjb3BlZFNsb3RzKSB7XG4gICAgICAgICAgICAgIHdhcm4kMihcbiAgICAgICAgICAgICAgICBcIlRvIGF2b2lkIHNjb3BlIGFtYmlndWl0eSwgdGhlIGRlZmF1bHQgc2xvdCBzaG91bGQgYWxzbyB1c2UgXCIgK1xuICAgICAgICAgICAgICAgIFwiPHRlbXBsYXRlPiBzeW50YXggd2hlbiB0aGVyZSBhcmUgb3RoZXIgbmFtZWQgc2xvdHMuXCIsXG4gICAgICAgICAgICAgICAgc2xvdEJpbmRpbmckMVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBhZGQgdGhlIGNvbXBvbmVudCdzIGNoaWxkcmVuIHRvIGl0cyBkZWZhdWx0IHNsb3RcbiAgICAgICAgICB2YXIgc2xvdHMgPSBlbC5zY29wZWRTbG90cyB8fCAoZWwuc2NvcGVkU2xvdHMgPSB7fSk7XG4gICAgICAgICAgdmFyIHJlZiQxID0gZ2V0U2xvdE5hbWUoc2xvdEJpbmRpbmckMSk7XG4gICAgICAgICAgdmFyIG5hbWUkMSA9IHJlZiQxLm5hbWU7XG4gICAgICAgICAgdmFyIGR5bmFtaWMkMSA9IHJlZiQxLmR5bmFtaWM7XG4gICAgICAgICAgdmFyIHNsb3RDb250YWluZXIgPSBzbG90c1tuYW1lJDFdID0gY3JlYXRlQVNURWxlbWVudCgndGVtcGxhdGUnLCBbXSwgZWwpO1xuICAgICAgICAgIHNsb3RDb250YWluZXIuc2xvdFRhcmdldCA9IG5hbWUkMTtcbiAgICAgICAgICBzbG90Q29udGFpbmVyLnNsb3RUYXJnZXREeW5hbWljID0gZHluYW1pYyQxO1xuICAgICAgICAgIHNsb3RDb250YWluZXIuY2hpbGRyZW4gPSBlbC5jaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIGlmICghYy5zbG90U2NvcGUpIHtcbiAgICAgICAgICAgICAgYy5wYXJlbnQgPSBzbG90Q29udGFpbmVyO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNsb3RDb250YWluZXIuc2xvdFNjb3BlID0gc2xvdEJpbmRpbmckMS52YWx1ZSB8fCBlbXB0eVNsb3RTY29wZVRva2VuO1xuICAgICAgICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBhcyB0aGV5IGFyZSByZXR1cm5lZCBmcm9tIHNjb3BlZFNsb3RzIG5vd1xuICAgICAgICAgIGVsLmNoaWxkcmVuID0gW107XG4gICAgICAgICAgLy8gbWFyayBlbCBub24tcGxhaW4gc28gZGF0YSBnZXRzIGdlbmVyYXRlZFxuICAgICAgICAgIGVsLnBsYWluID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTbG90TmFtZSAoYmluZGluZykge1xuICAgIHZhciBuYW1lID0gYmluZGluZy5uYW1lLnJlcGxhY2Uoc2xvdFJFLCAnJyk7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICBpZiAoYmluZGluZy5uYW1lWzBdICE9PSAnIycpIHtcbiAgICAgICAgbmFtZSA9ICdkZWZhdWx0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4kMihcbiAgICAgICAgICBcInYtc2xvdCBzaG9ydGhhbmQgc3ludGF4IHJlcXVpcmVzIGEgc2xvdCBuYW1lLlwiLFxuICAgICAgICAgIGJpbmRpbmdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGR5bmFtaWNBcmdSRS50ZXN0KG5hbWUpXG4gICAgICAvLyBkeW5hbWljIFtuYW1lXVxuICAgICAgPyB7IG5hbWU6IG5hbWUuc2xpY2UoMSwgLTEpLCBkeW5hbWljOiB0cnVlIH1cbiAgICAgIC8vIHN0YXRpYyBuYW1lXG4gICAgICA6IHsgbmFtZTogKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIlwiKSwgZHluYW1pYzogZmFsc2UgfVxuICB9XG5cbiAgLy8gaGFuZGxlIDxzbG90Lz4gb3V0bGV0c1xuICBmdW5jdGlvbiBwcm9jZXNzU2xvdE91dGxldCAoZWwpIHtcbiAgICBpZiAoZWwudGFnID09PSAnc2xvdCcpIHtcbiAgICAgIGVsLnNsb3ROYW1lID0gZ2V0QmluZGluZ0F0dHIoZWwsICduYW1lJyk7XG4gICAgICBpZiAoZWwua2V5KSB7XG4gICAgICAgIHdhcm4kMihcbiAgICAgICAgICBcImBrZXlgIGRvZXMgbm90IHdvcmsgb24gPHNsb3Q+IGJlY2F1c2Ugc2xvdHMgYXJlIGFic3RyYWN0IG91dGxldHMgXCIgK1xuICAgICAgICAgIFwiYW5kIGNhbiBwb3NzaWJseSBleHBhbmQgaW50byBtdWx0aXBsZSBlbGVtZW50cy4gXCIgK1xuICAgICAgICAgIFwiVXNlIHRoZSBrZXkgb24gYSB3cmFwcGluZyBlbGVtZW50IGluc3RlYWQuXCIsXG4gICAgICAgICAgZ2V0UmF3QmluZGluZ0F0dHIoZWwsICdrZXknKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnQgKGVsKSB7XG4gICAgdmFyIGJpbmRpbmc7XG4gICAgaWYgKChiaW5kaW5nID0gZ2V0QmluZGluZ0F0dHIoZWwsICdpcycpKSkge1xuICAgICAgZWwuY29tcG9uZW50ID0gYmluZGluZztcbiAgICB9XG4gICAgaWYgKGdldEFuZFJlbW92ZUF0dHIoZWwsICdpbmxpbmUtdGVtcGxhdGUnKSAhPSBudWxsKSB7XG4gICAgICBlbC5pbmxpbmVUZW1wbGF0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0F0dHJzIChlbCkge1xuICAgIHZhciBsaXN0ID0gZWwuYXR0cnNMaXN0O1xuICAgIHZhciBpLCBsLCBuYW1lLCByYXdOYW1lLCB2YWx1ZSwgbW9kaWZpZXJzLCBzeW5jR2VuLCBpc0R5bmFtaWM7XG4gICAgZm9yIChpID0gMCwgbCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBuYW1lID0gcmF3TmFtZSA9IGxpc3RbaV0ubmFtZTtcbiAgICAgIHZhbHVlID0gbGlzdFtpXS52YWx1ZTtcbiAgICAgIGlmIChkaXJSRS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIC8vIG1hcmsgZWxlbWVudCBhcyBkeW5hbWljXG4gICAgICAgIGVsLmhhc0JpbmRpbmdzID0gdHJ1ZTtcbiAgICAgICAgLy8gbW9kaWZpZXJzXG4gICAgICAgIG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKG5hbWUucmVwbGFjZShkaXJSRSwgJycpKTtcbiAgICAgICAgLy8gc3VwcG9ydCAuZm9vIHNob3J0aGFuZCBzeW50YXggZm9yIHRoZSAucHJvcCBtb2RpZmllclxuICAgICAgICBpZiAobW9kaWZpZXJzKSB7XG4gICAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZShtb2RpZmllclJFLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpbmRSRS50ZXN0KG5hbWUpKSB7IC8vIHYtYmluZFxuICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoYmluZFJFLCAnJyk7XG4gICAgICAgICAgdmFsdWUgPSBwYXJzZUZpbHRlcnModmFsdWUpO1xuICAgICAgICAgIGlzRHluYW1pYyA9IGR5bmFtaWNBcmdSRS50ZXN0KG5hbWUpO1xuICAgICAgICAgIGlmIChpc0R5bmFtaWMpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgd2FybiQyKFxuICAgICAgICAgICAgICAoXCJUaGUgdmFsdWUgZm9yIGEgdi1iaW5kIGV4cHJlc3Npb24gY2Fubm90IGJlIGVtcHR5LiBGb3VuZCBpbiBcXFwidi1iaW5kOlwiICsgbmFtZSArIFwiXFxcIlwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1vZGlmaWVycykge1xuICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wcm9wICYmICFpc0R5bmFtaWMpIHtcbiAgICAgICAgICAgICAgbmFtZSA9IGNhbWVsaXplKG5hbWUpO1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2lubmVySHRtbCcpIHsgbmFtZSA9ICdpbm5lckhUTUwnOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9kaWZpZXJzLmNhbWVsICYmICFpc0R5bmFtaWMpIHtcbiAgICAgICAgICAgICAgbmFtZSA9IGNhbWVsaXplKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5zeW5jKSB7XG4gICAgICAgICAgICAgIHN5bmNHZW4gPSBnZW5Bc3NpZ25tZW50Q29kZSh2YWx1ZSwgXCIkZXZlbnRcIik7XG4gICAgICAgICAgICAgIGlmICghaXNEeW5hbWljKSB7XG4gICAgICAgICAgICAgICAgYWRkSGFuZGxlcihcbiAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgKFwidXBkYXRlOlwiICsgKGNhbWVsaXplKG5hbWUpKSksXG4gICAgICAgICAgICAgICAgICBzeW5jR2VuLFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgd2FybiQyLFxuICAgICAgICAgICAgICAgICAgbGlzdFtpXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGh5cGhlbmF0ZShuYW1lKSAhPT0gY2FtZWxpemUobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgICAoXCJ1cGRhdGU6XCIgKyAoaHlwaGVuYXRlKG5hbWUpKSksXG4gICAgICAgICAgICAgICAgICAgIHN5bmNHZW4sXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB3YXJuJDIsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RbaV1cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZXIgdy8gZHluYW1pYyBldmVudCBuYW1lXG4gICAgICAgICAgICAgICAgYWRkSGFuZGxlcihcbiAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgKFwiXFxcInVwZGF0ZTpcXFwiKyhcIiArIG5hbWUgKyBcIilcIiksXG4gICAgICAgICAgICAgICAgICBzeW5jR2VuLFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgd2FybiQyLFxuICAgICAgICAgICAgICAgICAgbGlzdFtpXSxcbiAgICAgICAgICAgICAgICAgIHRydWUgLy8gZHluYW1pY1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKChtb2RpZmllcnMgJiYgbW9kaWZpZXJzLnByb3ApIHx8IChcbiAgICAgICAgICAgICFlbC5jb21wb25lbnQgJiYgcGxhdGZvcm1NdXN0VXNlUHJvcChlbC50YWcsIGVsLmF0dHJzTWFwLnR5cGUsIG5hbWUpXG4gICAgICAgICAgKSkge1xuICAgICAgICAgICAgYWRkUHJvcChlbCwgbmFtZSwgdmFsdWUsIGxpc3RbaV0sIGlzRHluYW1pYyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZEF0dHIoZWwsIG5hbWUsIHZhbHVlLCBsaXN0W2ldLCBpc0R5bmFtaWMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvblJFLnRlc3QobmFtZSkpIHsgLy8gdi1vblxuICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2Uob25SRSwgJycpO1xuICAgICAgICAgIGlzRHluYW1pYyA9IGR5bmFtaWNBcmdSRS50ZXN0KG5hbWUpO1xuICAgICAgICAgIGlmIChpc0R5bmFtaWMpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWRkSGFuZGxlcihlbCwgbmFtZSwgdmFsdWUsIG1vZGlmaWVycywgZmFsc2UsIHdhcm4kMiwgbGlzdFtpXSwgaXNEeW5hbWljKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gbm9ybWFsIGRpcmVjdGl2ZXNcbiAgICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKGRpclJFLCAnJyk7XG4gICAgICAgICAgLy8gcGFyc2UgYXJnXG4gICAgICAgICAgdmFyIGFyZ01hdGNoID0gbmFtZS5tYXRjaChhcmdSRSk7XG4gICAgICAgICAgdmFyIGFyZyA9IGFyZ01hdGNoICYmIGFyZ01hdGNoWzFdO1xuICAgICAgICAgIGlzRHluYW1pYyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChhcmcpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnNsaWNlKDAsIC0oYXJnLmxlbmd0aCArIDEpKTtcbiAgICAgICAgICAgIGlmIChkeW5hbWljQXJnUkUudGVzdChhcmcpKSB7XG4gICAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgICAgIGlzRHluYW1pYyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGFkZERpcmVjdGl2ZShlbCwgbmFtZSwgcmF3TmFtZSwgdmFsdWUsIGFyZywgaXNEeW5hbWljLCBtb2RpZmllcnMsIGxpc3RbaV0pO1xuICAgICAgICAgIGlmIChuYW1lID09PSAnbW9kZWwnKSB7XG4gICAgICAgICAgICBjaGVja0ZvckFsaWFzTW9kZWwoZWwsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGxpdGVyYWwgYXR0cmlidXRlXG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgcmVzID0gcGFyc2VUZXh0KHZhbHVlLCBkZWxpbWl0ZXJzKTtcbiAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgICAgIG5hbWUgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIjogXCIgK1xuICAgICAgICAgICAgICAnSW50ZXJwb2xhdGlvbiBpbnNpZGUgYXR0cmlidXRlcyBoYXMgYmVlbiByZW1vdmVkLiAnICtcbiAgICAgICAgICAgICAgJ1VzZSB2LWJpbmQgb3IgdGhlIGNvbG9uIHNob3J0aGFuZCBpbnN0ZWFkLiBGb3IgZXhhbXBsZSwgJyArXG4gICAgICAgICAgICAgICdpbnN0ZWFkIG9mIDxkaXYgaWQ9XCJ7eyB2YWwgfX1cIj4sIHVzZSA8ZGl2IDppZD1cInZhbFwiPi4nLFxuICAgICAgICAgICAgICBsaXN0W2ldXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRBdHRyKGVsLCBuYW1lLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSksIGxpc3RbaV0pO1xuICAgICAgICAvLyAjNjg4NyBmaXJlZm94IGRvZXNuJ3QgdXBkYXRlIG11dGVkIHN0YXRlIGlmIHNldCB2aWEgYXR0cmlidXRlXG4gICAgICAgIC8vIGV2ZW4gaW1tZWRpYXRlbHkgYWZ0ZXIgZWxlbWVudCBjcmVhdGlvblxuICAgICAgICBpZiAoIWVsLmNvbXBvbmVudCAmJlxuICAgICAgICAgICAgbmFtZSA9PT0gJ211dGVkJyAmJlxuICAgICAgICAgICAgcGxhdGZvcm1NdXN0VXNlUHJvcChlbC50YWcsIGVsLmF0dHJzTWFwLnR5cGUsIG5hbWUpKSB7XG4gICAgICAgICAgYWRkUHJvcChlbCwgbmFtZSwgJ3RydWUnLCBsaXN0W2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSW5Gb3IgKGVsKSB7XG4gICAgdmFyIHBhcmVudCA9IGVsO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGlmIChwYXJlbnQuZm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VNb2RpZmllcnMgKG5hbWUpIHtcbiAgICB2YXIgbWF0Y2ggPSBuYW1lLm1hdGNoKG1vZGlmaWVyUkUpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgbWF0Y2guZm9yRWFjaChmdW5jdGlvbiAobSkgeyByZXRbbS5zbGljZSgxKV0gPSB0cnVlOyB9KTtcbiAgICAgIHJldHVybiByZXRcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQXR0cnNNYXAgKGF0dHJzKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG1hcFthdHRyc1tpXS5uYW1lXSAmJiAhaXNJRSAmJiAhaXNFZGdlXG4gICAgICApIHtcbiAgICAgICAgd2FybiQyKCdkdXBsaWNhdGUgYXR0cmlidXRlOiAnICsgYXR0cnNbaV0ubmFtZSwgYXR0cnNbaV0pO1xuICAgICAgfVxuICAgICAgbWFwW2F0dHJzW2ldLm5hbWVdID0gYXR0cnNbaV0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBtYXBcbiAgfVxuXG4gIC8vIGZvciBzY3JpcHQgKGUuZy4gdHlwZT1cIngvdGVtcGxhdGVcIikgb3Igc3R5bGUsIGRvIG5vdCBkZWNvZGUgY29udGVudFxuICBmdW5jdGlvbiBpc1RleHRUYWcgKGVsKSB7XG4gICAgcmV0dXJuIGVsLnRhZyA9PT0gJ3NjcmlwdCcgfHwgZWwudGFnID09PSAnc3R5bGUnXG4gIH1cblxuICBmdW5jdGlvbiBpc0ZvcmJpZGRlblRhZyAoZWwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZWwudGFnID09PSAnc3R5bGUnIHx8XG4gICAgICAoZWwudGFnID09PSAnc2NyaXB0JyAmJiAoXG4gICAgICAgICFlbC5hdHRyc01hcC50eXBlIHx8XG4gICAgICAgIGVsLmF0dHJzTWFwLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICApKVxuICAgIClcbiAgfVxuXG4gIHZhciBpZU5TQnVnID0gL154bWxuczpOU1xcZCsvO1xuICB2YXIgaWVOU1ByZWZpeCA9IC9eTlNcXGQrOi87XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZnVuY3Rpb24gZ3VhcmRJRVNWR0J1ZyAoYXR0cnMpIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGF0dHIgPSBhdHRyc1tpXTtcbiAgICAgIGlmICghaWVOU0J1Zy50ZXN0KGF0dHIubmFtZSkpIHtcbiAgICAgICAgYXR0ci5uYW1lID0gYXR0ci5uYW1lLnJlcGxhY2UoaWVOU1ByZWZpeCwgJycpO1xuICAgICAgICByZXMucHVzaChhdHRyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JBbGlhc01vZGVsIChlbCwgdmFsdWUpIHtcbiAgICB2YXIgX2VsID0gZWw7XG4gICAgd2hpbGUgKF9lbCkge1xuICAgICAgaWYgKF9lbC5mb3IgJiYgX2VsLmFsaWFzID09PSB2YWx1ZSkge1xuICAgICAgICB3YXJuJDIoXG4gICAgICAgICAgXCI8XCIgKyAoZWwudGFnKSArIFwiIHYtbW9kZWw9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCI+OiBcIiArXG4gICAgICAgICAgXCJZb3UgYXJlIGJpbmRpbmcgdi1tb2RlbCBkaXJlY3RseSB0byBhIHYtZm9yIGl0ZXJhdGlvbiBhbGlhcy4gXCIgK1xuICAgICAgICAgIFwiVGhpcyB3aWxsIG5vdCBiZSBhYmxlIHRvIG1vZGlmeSB0aGUgdi1mb3Igc291cmNlIGFycmF5IGJlY2F1c2UgXCIgK1xuICAgICAgICAgIFwid3JpdGluZyB0byB0aGUgYWxpYXMgaXMgbGlrZSBtb2RpZnlpbmcgYSBmdW5jdGlvbiBsb2NhbCB2YXJpYWJsZS4gXCIgK1xuICAgICAgICAgIFwiQ29uc2lkZXIgdXNpbmcgYW4gYXJyYXkgb2Ygb2JqZWN0cyBhbmQgdXNlIHYtbW9kZWwgb24gYW4gb2JqZWN0IHByb3BlcnR5IGluc3RlYWQuXCIsXG4gICAgICAgICAgZWwucmF3QXR0cnNNYXBbJ3YtbW9kZWwnXVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgX2VsID0gX2VsLnBhcmVudDtcbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBwcmVUcmFuc2Zvcm1Ob2RlIChlbCwgb3B0aW9ucykge1xuICAgIGlmIChlbC50YWcgPT09ICdpbnB1dCcpIHtcbiAgICAgIHZhciBtYXAgPSBlbC5hdHRyc01hcDtcbiAgICAgIGlmICghbWFwWyd2LW1vZGVsJ10pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlQmluZGluZztcbiAgICAgIGlmIChtYXBbJzp0eXBlJ10gfHwgbWFwWyd2LWJpbmQ6dHlwZSddKSB7XG4gICAgICAgIHR5cGVCaW5kaW5nID0gZ2V0QmluZGluZ0F0dHIoZWwsICd0eXBlJyk7XG4gICAgICB9XG4gICAgICBpZiAoIW1hcC50eXBlICYmICF0eXBlQmluZGluZyAmJiBtYXBbJ3YtYmluZCddKSB7XG4gICAgICAgIHR5cGVCaW5kaW5nID0gXCIoXCIgKyAobWFwWyd2LWJpbmQnXSkgKyBcIikudHlwZVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZUJpbmRpbmcpIHtcbiAgICAgICAgdmFyIGlmQ29uZGl0aW9uID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3YtaWYnLCB0cnVlKTtcbiAgICAgICAgdmFyIGlmQ29uZGl0aW9uRXh0cmEgPSBpZkNvbmRpdGlvbiA/IChcIiYmKFwiICsgaWZDb25kaXRpb24gKyBcIilcIikgOiBcIlwiO1xuICAgICAgICB2YXIgaGFzRWxzZSA9IGdldEFuZFJlbW92ZUF0dHIoZWwsICd2LWVsc2UnLCB0cnVlKSAhPSBudWxsO1xuICAgICAgICB2YXIgZWxzZUlmQ29uZGl0aW9uID0gZ2V0QW5kUmVtb3ZlQXR0cihlbCwgJ3YtZWxzZS1pZicsIHRydWUpO1xuICAgICAgICAvLyAxLiBjaGVja2JveFxuICAgICAgICB2YXIgYnJhbmNoMCA9IGNsb25lQVNURWxlbWVudChlbCk7XG4gICAgICAgIC8vIHByb2Nlc3MgZm9yIG9uIHRoZSBtYWluIG5vZGVcbiAgICAgICAgcHJvY2Vzc0ZvcihicmFuY2gwKTtcbiAgICAgICAgYWRkUmF3QXR0cihicmFuY2gwLCAndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBwcm9jZXNzRWxlbWVudChicmFuY2gwLCBvcHRpb25zKTtcbiAgICAgICAgYnJhbmNoMC5wcm9jZXNzZWQgPSB0cnVlOyAvLyBwcmV2ZW50IGl0IGZyb20gZG91YmxlLXByb2Nlc3NlZFxuICAgICAgICBicmFuY2gwLmlmID0gXCIoXCIgKyB0eXBlQmluZGluZyArIFwiKT09PSdjaGVja2JveCdcIiArIGlmQ29uZGl0aW9uRXh0cmE7XG4gICAgICAgIGFkZElmQ29uZGl0aW9uKGJyYW5jaDAsIHtcbiAgICAgICAgICBleHA6IGJyYW5jaDAuaWYsXG4gICAgICAgICAgYmxvY2s6IGJyYW5jaDBcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIDIuIGFkZCByYWRpbyBlbHNlLWlmIGNvbmRpdGlvblxuICAgICAgICB2YXIgYnJhbmNoMSA9IGNsb25lQVNURWxlbWVudChlbCk7XG4gICAgICAgIGdldEFuZFJlbW92ZUF0dHIoYnJhbmNoMSwgJ3YtZm9yJywgdHJ1ZSk7XG4gICAgICAgIGFkZFJhd0F0dHIoYnJhbmNoMSwgJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgcHJvY2Vzc0VsZW1lbnQoYnJhbmNoMSwgb3B0aW9ucyk7XG4gICAgICAgIGFkZElmQ29uZGl0aW9uKGJyYW5jaDAsIHtcbiAgICAgICAgICBleHA6IFwiKFwiICsgdHlwZUJpbmRpbmcgKyBcIik9PT0ncmFkaW8nXCIgKyBpZkNvbmRpdGlvbkV4dHJhLFxuICAgICAgICAgIGJsb2NrOiBicmFuY2gxXG4gICAgICAgIH0pO1xuICAgICAgICAvLyAzLiBvdGhlclxuICAgICAgICB2YXIgYnJhbmNoMiA9IGNsb25lQVNURWxlbWVudChlbCk7XG4gICAgICAgIGdldEFuZFJlbW92ZUF0dHIoYnJhbmNoMiwgJ3YtZm9yJywgdHJ1ZSk7XG4gICAgICAgIGFkZFJhd0F0dHIoYnJhbmNoMiwgJzp0eXBlJywgdHlwZUJpbmRpbmcpO1xuICAgICAgICBwcm9jZXNzRWxlbWVudChicmFuY2gyLCBvcHRpb25zKTtcbiAgICAgICAgYWRkSWZDb25kaXRpb24oYnJhbmNoMCwge1xuICAgICAgICAgIGV4cDogaWZDb25kaXRpb24sXG4gICAgICAgICAgYmxvY2s6IGJyYW5jaDJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGhhc0Vsc2UpIHtcbiAgICAgICAgICBicmFuY2gwLmVsc2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGVsc2VJZkNvbmRpdGlvbikge1xuICAgICAgICAgIGJyYW5jaDAuZWxzZWlmID0gZWxzZUlmQ29uZGl0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJyYW5jaDBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZUFTVEVsZW1lbnQgKGVsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUFTVEVsZW1lbnQoZWwudGFnLCBlbC5hdHRyc0xpc3Quc2xpY2UoKSwgZWwucGFyZW50KVxuICB9XG5cbiAgdmFyIG1vZGVsJDEgPSB7XG4gICAgcHJlVHJhbnNmb3JtTm9kZTogcHJlVHJhbnNmb3JtTm9kZVxuICB9O1xuXG4gIHZhciBtb2R1bGVzJDEgPSBbXG4gICAga2xhc3MkMSxcbiAgICBzdHlsZSQxLFxuICAgIG1vZGVsJDFcbiAgXTtcblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiB0ZXh0IChlbCwgZGlyKSB7XG4gICAgaWYgKGRpci52YWx1ZSkge1xuICAgICAgYWRkUHJvcChlbCwgJ3RleHRDb250ZW50JywgKFwiX3MoXCIgKyAoZGlyLnZhbHVlKSArIFwiKVwiKSwgZGlyKTtcbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICBmdW5jdGlvbiBodG1sIChlbCwgZGlyKSB7XG4gICAgaWYgKGRpci52YWx1ZSkge1xuICAgICAgYWRkUHJvcChlbCwgJ2lubmVySFRNTCcsIChcIl9zKFwiICsgKGRpci52YWx1ZSkgKyBcIilcIiksIGRpcik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGRpcmVjdGl2ZXMkMSA9IHtcbiAgICBtb2RlbDogbW9kZWwsXG4gICAgdGV4dDogdGV4dCxcbiAgICBodG1sOiBodG1sXG4gIH07XG5cbiAgLyogICovXG5cbiAgdmFyIGJhc2VPcHRpb25zID0ge1xuICAgIGV4cGVjdEhUTUw6IHRydWUsXG4gICAgbW9kdWxlczogbW9kdWxlcyQxLFxuICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMkMSxcbiAgICBpc1ByZVRhZzogaXNQcmVUYWcsXG4gICAgaXNVbmFyeVRhZzogaXNVbmFyeVRhZyxcbiAgICBtdXN0VXNlUHJvcDogbXVzdFVzZVByb3AsXG4gICAgY2FuQmVMZWZ0T3BlblRhZzogY2FuQmVMZWZ0T3BlblRhZyxcbiAgICBpc1Jlc2VydmVkVGFnOiBpc1Jlc2VydmVkVGFnLFxuICAgIGdldFRhZ05hbWVzcGFjZTogZ2V0VGFnTmFtZXNwYWNlLFxuICAgIHN0YXRpY0tleXM6IGdlblN0YXRpY0tleXMobW9kdWxlcyQxKVxuICB9O1xuXG4gIC8qICAqL1xuXG4gIHZhciBpc1N0YXRpY0tleTtcbiAgdmFyIGlzUGxhdGZvcm1SZXNlcnZlZFRhZztcblxuICB2YXIgZ2VuU3RhdGljS2V5c0NhY2hlZCA9IGNhY2hlZChnZW5TdGF0aWNLZXlzJDEpO1xuXG4gIC8qKlxuICAgKiBHb2FsIG9mIHRoZSBvcHRpbWl6ZXI6IHdhbGsgdGhlIGdlbmVyYXRlZCB0ZW1wbGF0ZSBBU1QgdHJlZVxuICAgKiBhbmQgZGV0ZWN0IHN1Yi10cmVlcyB0aGF0IGFyZSBwdXJlbHkgc3RhdGljLCBpLmUuIHBhcnRzIG9mXG4gICAqIHRoZSBET00gdGhhdCBuZXZlciBuZWVkcyB0byBjaGFuZ2UuXG4gICAqXG4gICAqIE9uY2Ugd2UgZGV0ZWN0IHRoZXNlIHN1Yi10cmVlcywgd2UgY2FuOlxuICAgKlxuICAgKiAxLiBIb2lzdCB0aGVtIGludG8gY29uc3RhbnRzLCBzbyB0aGF0IHdlIG5vIGxvbmdlciBuZWVkIHRvXG4gICAqICAgIGNyZWF0ZSBmcmVzaCBub2RlcyBmb3IgdGhlbSBvbiBlYWNoIHJlLXJlbmRlcjtcbiAgICogMi4gQ29tcGxldGVseSBza2lwIHRoZW0gaW4gdGhlIHBhdGNoaW5nIHByb2Nlc3MuXG4gICAqL1xuICBmdW5jdGlvbiBvcHRpbWl6ZSAocm9vdCwgb3B0aW9ucykge1xuICAgIGlmICghcm9vdCkgeyByZXR1cm4gfVxuICAgIGlzU3RhdGljS2V5ID0gZ2VuU3RhdGljS2V5c0NhY2hlZChvcHRpb25zLnN0YXRpY0tleXMgfHwgJycpO1xuICAgIGlzUGxhdGZvcm1SZXNlcnZlZFRhZyA9IG9wdGlvbnMuaXNSZXNlcnZlZFRhZyB8fCBubztcbiAgICAvLyBmaXJzdCBwYXNzOiBtYXJrIGFsbCBub24tc3RhdGljIG5vZGVzLlxuICAgIG1hcmtTdGF0aWMkMShyb290KTtcbiAgICAvLyBzZWNvbmQgcGFzczogbWFyayBzdGF0aWMgcm9vdHMuXG4gICAgbWFya1N0YXRpY1Jvb3RzKHJvb3QsIGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlblN0YXRpY0tleXMkMSAoa2V5cykge1xuICAgIHJldHVybiBtYWtlTWFwKFxuICAgICAgJ3R5cGUsdGFnLGF0dHJzTGlzdCxhdHRyc01hcCxwbGFpbixwYXJlbnQsY2hpbGRyZW4sYXR0cnMsc3RhcnQsZW5kLHJhd0F0dHJzTWFwJyArXG4gICAgICAoa2V5cyA/ICcsJyArIGtleXMgOiAnJylcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBtYXJrU3RhdGljJDEgKG5vZGUpIHtcbiAgICBub2RlLnN0YXRpYyA9IGlzU3RhdGljKG5vZGUpO1xuICAgIGlmIChub2RlLnR5cGUgPT09IDEpIHtcbiAgICAgIC8vIGRvIG5vdCBtYWtlIGNvbXBvbmVudCBzbG90IGNvbnRlbnQgc3RhdGljLiB0aGlzIGF2b2lkc1xuICAgICAgLy8gMS4gY29tcG9uZW50cyBub3QgYWJsZSB0byBtdXRhdGUgc2xvdCBub2Rlc1xuICAgICAgLy8gMi4gc3RhdGljIHNsb3QgY29udGVudCBmYWlscyBmb3IgaG90LXJlbG9hZGluZ1xuICAgICAgaWYgKFxuICAgICAgICAhaXNQbGF0Zm9ybVJlc2VydmVkVGFnKG5vZGUudGFnKSAmJlxuICAgICAgICBub2RlLnRhZyAhPT0gJ3Nsb3QnICYmXG4gICAgICAgIG5vZGUuYXR0cnNNYXBbJ2lubGluZS10ZW1wbGF0ZSddID09IG51bGxcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgbWFya1N0YXRpYyQxKGNoaWxkKTtcbiAgICAgICAgaWYgKCFjaGlsZC5zdGF0aWMpIHtcbiAgICAgICAgICBub2RlLnN0YXRpYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5pZkNvbmRpdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSQxID0gMSwgbCQxID0gbm9kZS5pZkNvbmRpdGlvbnMubGVuZ3RoOyBpJDEgPCBsJDE7IGkkMSsrKSB7XG4gICAgICAgICAgdmFyIGJsb2NrID0gbm9kZS5pZkNvbmRpdGlvbnNbaSQxXS5ibG9jaztcbiAgICAgICAgICBtYXJrU3RhdGljJDEoYmxvY2spO1xuICAgICAgICAgIGlmICghYmxvY2suc3RhdGljKSB7XG4gICAgICAgICAgICBub2RlLnN0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtTdGF0aWNSb290cyAobm9kZSwgaXNJbkZvcikge1xuICAgIGlmIChub2RlLnR5cGUgPT09IDEpIHtcbiAgICAgIGlmIChub2RlLnN0YXRpYyB8fCBub2RlLm9uY2UpIHtcbiAgICAgICAgbm9kZS5zdGF0aWNJbkZvciA9IGlzSW5Gb3I7XG4gICAgICB9XG4gICAgICAvLyBGb3IgYSBub2RlIHRvIHF1YWxpZnkgYXMgYSBzdGF0aWMgcm9vdCwgaXQgc2hvdWxkIGhhdmUgY2hpbGRyZW4gdGhhdFxuICAgICAgLy8gYXJlIG5vdCBqdXN0IHN0YXRpYyB0ZXh0LiBPdGhlcndpc2UgdGhlIGNvc3Qgb2YgaG9pc3Rpbmcgb3V0IHdpbGxcbiAgICAgIC8vIG91dHdlaWdoIHRoZSBiZW5lZml0cyBhbmQgaXQncyBiZXR0ZXIgb2ZmIHRvIGp1c3QgYWx3YXlzIHJlbmRlciBpdCBmcmVzaC5cbiAgICAgIGlmIChub2RlLnN0YXRpYyAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCAmJiAhKFxuICAgICAgICBub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICBub2RlLmNoaWxkcmVuWzBdLnR5cGUgPT09IDNcbiAgICAgICkpIHtcbiAgICAgICAgbm9kZS5zdGF0aWNSb290ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnN0YXRpY1Jvb3QgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBtYXJrU3RhdGljUm9vdHMobm9kZS5jaGlsZHJlbltpXSwgaXNJbkZvciB8fCAhIW5vZGUuZm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5vZGUuaWZDb25kaXRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkkMSA9IDEsIGwkMSA9IG5vZGUuaWZDb25kaXRpb25zLmxlbmd0aDsgaSQxIDwgbCQxOyBpJDErKykge1xuICAgICAgICAgIG1hcmtTdGF0aWNSb290cyhub2RlLmlmQ29uZGl0aW9uc1tpJDFdLmJsb2NrLCBpc0luRm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3RhdGljIChub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMikgeyAvLyBleHByZXNzaW9uXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMykgeyAvLyB0ZXh0XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gISEobm9kZS5wcmUgfHwgKFxuICAgICAgIW5vZGUuaGFzQmluZGluZ3MgJiYgLy8gbm8gZHluYW1pYyBiaW5kaW5nc1xuICAgICAgIW5vZGUuaWYgJiYgIW5vZGUuZm9yICYmIC8vIG5vdCB2LWlmIG9yIHYtZm9yIG9yIHYtZWxzZVxuICAgICAgIWlzQnVpbHRJblRhZyhub2RlLnRhZykgJiYgLy8gbm90IGEgYnVpbHQtaW5cbiAgICAgIGlzUGxhdGZvcm1SZXNlcnZlZFRhZyhub2RlLnRhZykgJiYgLy8gbm90IGEgY29tcG9uZW50XG4gICAgICAhaXNEaXJlY3RDaGlsZE9mVGVtcGxhdGVGb3Iobm9kZSkgJiZcbiAgICAgIE9iamVjdC5rZXlzKG5vZGUpLmV2ZXJ5KGlzU3RhdGljS2V5KVxuICAgICkpXG4gIH1cblxuICBmdW5jdGlvbiBpc0RpcmVjdENoaWxkT2ZUZW1wbGF0ZUZvciAobm9kZSkge1xuICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgICAgaWYgKG5vZGUudGFnICE9PSAndGVtcGxhdGUnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKG5vZGUuZm9yKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLyogICovXG5cbiAgdmFyIGZuRXhwUkUgPSAvXihbXFx3JF9dK3xcXChbXildKj9cXCkpXFxzKj0+fF5mdW5jdGlvblxccyooPzpbXFx3JF0rKT9cXHMqXFwoLztcbiAgdmFyIGZuSW52b2tlUkUgPSAvXFwoW14pXSo/XFwpOyokLztcbiAgdmFyIHNpbXBsZVBhdGhSRSA9IC9eW0EtWmEtel8kXVtcXHckXSooPzpcXC5bQS1aYS16XyRdW1xcdyRdKnxcXFsnW14nXSo/J118XFxbXCJbXlwiXSo/XCJdfFxcW1xcZCtdfFxcW1tBLVphLXpfJF1bXFx3JF0qXSkqJC87XG5cbiAgLy8gS2V5Ym9hcmRFdmVudC5rZXlDb2RlIGFsaWFzZXNcbiAgdmFyIGtleUNvZGVzID0ge1xuICAgIGVzYzogMjcsXG4gICAgdGFiOiA5LFxuICAgIGVudGVyOiAxMyxcbiAgICBzcGFjZTogMzIsXG4gICAgdXA6IDM4LFxuICAgIGxlZnQ6IDM3LFxuICAgIHJpZ2h0OiAzOSxcbiAgICBkb3duOiA0MCxcbiAgICAnZGVsZXRlJzogWzgsIDQ2XVxuICB9O1xuXG4gIC8vIEtleWJvYXJkRXZlbnQua2V5IGFsaWFzZXNcbiAgdmFyIGtleU5hbWVzID0ge1xuICAgIC8vICM3ODgwOiBJRTExIGFuZCBFZGdlIHVzZSBgRXNjYCBmb3IgRXNjYXBlIGtleSBuYW1lLlxuICAgIGVzYzogWydFc2MnLCAnRXNjYXBlJ10sXG4gICAgdGFiOiAnVGFiJyxcbiAgICBlbnRlcjogJ0VudGVyJyxcbiAgICAvLyAjOTExMjogSUUxMSB1c2VzIGBTcGFjZWJhcmAgZm9yIFNwYWNlIGtleSBuYW1lLlxuICAgIHNwYWNlOiBbJyAnLCAnU3BhY2ViYXInXSxcbiAgICAvLyAjNzgwNjogSUUxMSB1c2VzIGtleSBuYW1lcyB3aXRob3V0IGBBcnJvd2AgcHJlZml4IGZvciBhcnJvdyBrZXlzLlxuICAgIHVwOiBbJ1VwJywgJ0Fycm93VXAnXSxcbiAgICBsZWZ0OiBbJ0xlZnQnLCAnQXJyb3dMZWZ0J10sXG4gICAgcmlnaHQ6IFsnUmlnaHQnLCAnQXJyb3dSaWdodCddLFxuICAgIGRvd246IFsnRG93bicsICdBcnJvd0Rvd24nXSxcbiAgICAvLyAjOTExMjogSUUxMSB1c2VzIGBEZWxgIGZvciBEZWxldGUga2V5IG5hbWUuXG4gICAgJ2RlbGV0ZSc6IFsnQmFja3NwYWNlJywgJ0RlbGV0ZScsICdEZWwnXVxuICB9O1xuXG4gIC8vICM0ODY4OiBtb2RpZmllcnMgdGhhdCBwcmV2ZW50IHRoZSBleGVjdXRpb24gb2YgdGhlIGxpc3RlbmVyXG4gIC8vIG5lZWQgdG8gZXhwbGljaXRseSByZXR1cm4gbnVsbCBzbyB0aGF0IHdlIGNhbiBkZXRlcm1pbmUgd2hldGhlciB0byByZW1vdmVcbiAgLy8gdGhlIGxpc3RlbmVyIGZvciAub25jZVxuICB2YXIgZ2VuR3VhcmQgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7IHJldHVybiAoXCJpZihcIiArIGNvbmRpdGlvbiArIFwiKXJldHVybiBudWxsO1wiKTsgfTtcblxuICB2YXIgbW9kaWZpZXJDb2RlID0ge1xuICAgIHN0b3A6ICckZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7JyxcbiAgICBwcmV2ZW50OiAnJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7JyxcbiAgICBzZWxmOiBnZW5HdWFyZChcIiRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0XCIpLFxuICAgIGN0cmw6IGdlbkd1YXJkKFwiISRldmVudC5jdHJsS2V5XCIpLFxuICAgIHNoaWZ0OiBnZW5HdWFyZChcIiEkZXZlbnQuc2hpZnRLZXlcIiksXG4gICAgYWx0OiBnZW5HdWFyZChcIiEkZXZlbnQuYWx0S2V5XCIpLFxuICAgIG1ldGE6IGdlbkd1YXJkKFwiISRldmVudC5tZXRhS2V5XCIpLFxuICAgIGxlZnQ6IGdlbkd1YXJkKFwiJ2J1dHRvbicgaW4gJGV2ZW50ICYmICRldmVudC5idXR0b24gIT09IDBcIiksXG4gICAgbWlkZGxlOiBnZW5HdWFyZChcIididXR0b24nIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAxXCIpLFxuICAgIHJpZ2h0OiBnZW5HdWFyZChcIididXR0b24nIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAyXCIpXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2VuSGFuZGxlcnMgKFxuICAgIGV2ZW50cyxcbiAgICBpc05hdGl2ZVxuICApIHtcbiAgICB2YXIgcHJlZml4ID0gaXNOYXRpdmUgPyAnbmF0aXZlT246JyA6ICdvbjonO1xuICAgIHZhciBzdGF0aWNIYW5kbGVycyA9IFwiXCI7XG4gICAgdmFyIGR5bmFtaWNIYW5kbGVycyA9IFwiXCI7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBldmVudHMpIHtcbiAgICAgIHZhciBoYW5kbGVyQ29kZSA9IGdlbkhhbmRsZXIoZXZlbnRzW25hbWVdKTtcbiAgICAgIGlmIChldmVudHNbbmFtZV0gJiYgZXZlbnRzW25hbWVdLmR5bmFtaWMpIHtcbiAgICAgICAgZHluYW1pY0hhbmRsZXJzICs9IG5hbWUgKyBcIixcIiArIGhhbmRsZXJDb2RlICsgXCIsXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNIYW5kbGVycyArPSBcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCI6XCIgKyBoYW5kbGVyQ29kZSArIFwiLFwiO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWNIYW5kbGVycyA9IFwie1wiICsgKHN0YXRpY0hhbmRsZXJzLnNsaWNlKDAsIC0xKSkgKyBcIn1cIjtcbiAgICBpZiAoZHluYW1pY0hhbmRsZXJzKSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgXCJfZChcIiArIHN0YXRpY0hhbmRsZXJzICsgXCIsW1wiICsgKGR5bmFtaWNIYW5kbGVycy5zbGljZSgwLCAtMSkpICsgXCJdKVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyBzdGF0aWNIYW5kbGVyc1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbkhhbmRsZXIgKGhhbmRsZXIpIHtcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIHJldHVybiAnZnVuY3Rpb24oKXt9J1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICByZXR1cm4gKFwiW1wiICsgKGhhbmRsZXIubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiBnZW5IYW5kbGVyKGhhbmRsZXIpOyB9KS5qb2luKCcsJykpICsgXCJdXCIpXG4gICAgfVxuXG4gICAgdmFyIGlzTWV0aG9kUGF0aCA9IHNpbXBsZVBhdGhSRS50ZXN0KGhhbmRsZXIudmFsdWUpO1xuICAgIHZhciBpc0Z1bmN0aW9uRXhwcmVzc2lvbiA9IGZuRXhwUkUudGVzdChoYW5kbGVyLnZhbHVlKTtcbiAgICB2YXIgaXNGdW5jdGlvbkludm9jYXRpb24gPSBzaW1wbGVQYXRoUkUudGVzdChoYW5kbGVyLnZhbHVlLnJlcGxhY2UoZm5JbnZva2VSRSwgJycpKTtcblxuICAgIGlmICghaGFuZGxlci5tb2RpZmllcnMpIHtcbiAgICAgIGlmIChpc01ldGhvZFBhdGggfHwgaXNGdW5jdGlvbkV4cHJlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIudmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXCJmdW5jdGlvbigkZXZlbnQpe1wiICsgKGlzRnVuY3Rpb25JbnZvY2F0aW9uID8gKFwicmV0dXJuIFwiICsgKGhhbmRsZXIudmFsdWUpKSA6IGhhbmRsZXIudmFsdWUpICsgXCJ9XCIpIC8vIGlubGluZSBzdGF0ZW1lbnRcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvZGUgPSAnJztcbiAgICAgIHZhciBnZW5Nb2RpZmllckNvZGUgPSAnJztcbiAgICAgIHZhciBrZXlzID0gW107XG4gICAgICBmb3IgKHZhciBrZXkgaW4gaGFuZGxlci5tb2RpZmllcnMpIHtcbiAgICAgICAgaWYgKG1vZGlmaWVyQ29kZVtrZXldKSB7XG4gICAgICAgICAgZ2VuTW9kaWZpZXJDb2RlICs9IG1vZGlmaWVyQ29kZVtrZXldO1xuICAgICAgICAgIC8vIGxlZnQvcmlnaHRcbiAgICAgICAgICBpZiAoa2V5Q29kZXNba2V5XSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2V4YWN0Jykge1xuICAgICAgICAgIHZhciBtb2RpZmllcnMgPSAoaGFuZGxlci5tb2RpZmllcnMpO1xuICAgICAgICAgIGdlbk1vZGlmaWVyQ29kZSArPSBnZW5HdWFyZChcbiAgICAgICAgICAgIFsnY3RybCcsICdzaGlmdCcsICdhbHQnLCAnbWV0YSddXG4gICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGtleU1vZGlmaWVyKSB7IHJldHVybiAhbW9kaWZpZXJzW2tleU1vZGlmaWVyXTsgfSlcbiAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5TW9kaWZpZXIpIHsgcmV0dXJuIChcIiRldmVudC5cIiArIGtleU1vZGlmaWVyICsgXCJLZXlcIik7IH0pXG4gICAgICAgICAgICAgIC5qb2luKCd8fCcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIGNvZGUgKz0gZ2VuS2V5RmlsdGVyKGtleXMpO1xuICAgICAgfVxuICAgICAgLy8gTWFrZSBzdXJlIG1vZGlmaWVycyBsaWtlIHByZXZlbnQgYW5kIHN0b3AgZ2V0IGV4ZWN1dGVkIGFmdGVyIGtleSBmaWx0ZXJpbmdcbiAgICAgIGlmIChnZW5Nb2RpZmllckNvZGUpIHtcbiAgICAgICAgY29kZSArPSBnZW5Nb2RpZmllckNvZGU7XG4gICAgICB9XG4gICAgICB2YXIgaGFuZGxlckNvZGUgPSBpc01ldGhvZFBhdGhcbiAgICAgICAgPyAoXCJyZXR1cm4gXCIgKyAoaGFuZGxlci52YWx1ZSkgKyBcIigkZXZlbnQpXCIpXG4gICAgICAgIDogaXNGdW5jdGlvbkV4cHJlc3Npb25cbiAgICAgICAgICA/IChcInJldHVybiAoXCIgKyAoaGFuZGxlci52YWx1ZSkgKyBcIikoJGV2ZW50KVwiKVxuICAgICAgICAgIDogaXNGdW5jdGlvbkludm9jYXRpb25cbiAgICAgICAgICAgID8gKFwicmV0dXJuIFwiICsgKGhhbmRsZXIudmFsdWUpKVxuICAgICAgICAgICAgOiBoYW5kbGVyLnZhbHVlO1xuICAgICAgcmV0dXJuIChcImZ1bmN0aW9uKCRldmVudCl7XCIgKyBjb2RlICsgaGFuZGxlckNvZGUgKyBcIn1cIilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5LZXlGaWx0ZXIgKGtleXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gbWFrZSBzdXJlIHRoZSBrZXkgZmlsdGVycyBvbmx5IGFwcGx5IHRvIEtleWJvYXJkRXZlbnRzXG4gICAgICAvLyAjOTQ0MTogY2FuJ3QgdXNlICdrZXlDb2RlJyBpbiAkZXZlbnQgYmVjYXVzZSBDaHJvbWUgYXV0b2ZpbGwgZmlyZXMgZmFrZVxuICAgICAgLy8ga2V5IGV2ZW50cyB0aGF0IGRvIG5vdCBoYXZlIGtleUNvZGUgcHJvcGVydHkuLi5cbiAgICAgIFwiaWYoISRldmVudC50eXBlLmluZGV4T2YoJ2tleScpJiZcIiArXG4gICAgICAoa2V5cy5tYXAoZ2VuRmlsdGVyQ29kZSkuam9pbignJiYnKSkgKyBcIilyZXR1cm4gbnVsbDtcIlxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbkZpbHRlckNvZGUgKGtleSkge1xuICAgIHZhciBrZXlWYWwgPSBwYXJzZUludChrZXksIDEwKTtcbiAgICBpZiAoa2V5VmFsKSB7XG4gICAgICByZXR1cm4gKFwiJGV2ZW50LmtleUNvZGUhPT1cIiArIGtleVZhbClcbiAgICB9XG4gICAgdmFyIGtleUNvZGUgPSBrZXlDb2Rlc1trZXldO1xuICAgIHZhciBrZXlOYW1lID0ga2V5TmFtZXNba2V5XTtcbiAgICByZXR1cm4gKFxuICAgICAgXCJfaygkZXZlbnQua2V5Q29kZSxcIiArXG4gICAgICAoSlNPTi5zdHJpbmdpZnkoa2V5KSkgKyBcIixcIiArXG4gICAgICAoSlNPTi5zdHJpbmdpZnkoa2V5Q29kZSkpICsgXCIsXCIgK1xuICAgICAgXCIkZXZlbnQua2V5LFwiICtcbiAgICAgIFwiXCIgKyAoSlNPTi5zdHJpbmdpZnkoa2V5TmFtZSkpICtcbiAgICAgIFwiKVwiXG4gICAgKVxuICB9XG5cbiAgLyogICovXG5cbiAgZnVuY3Rpb24gb24gKGVsLCBkaXIpIHtcbiAgICBpZiAoZGlyLm1vZGlmaWVycykge1xuICAgICAgd2FybihcInYtb24gd2l0aG91dCBhcmd1bWVudCBkb2VzIG5vdCBzdXBwb3J0IG1vZGlmaWVycy5cIik7XG4gICAgfVxuICAgIGVsLndyYXBMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoY29kZSkgeyByZXR1cm4gKFwiX2coXCIgKyBjb2RlICsgXCIsXCIgKyAoZGlyLnZhbHVlKSArIFwiKVwiKTsgfTtcbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGJpbmQkMSAoZWwsIGRpcikge1xuICAgIGVsLndyYXBEYXRhID0gZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgIHJldHVybiAoXCJfYihcIiArIGNvZGUgKyBcIiwnXCIgKyAoZWwudGFnKSArIFwiJyxcIiArIChkaXIudmFsdWUpICsgXCIsXCIgKyAoZGlyLm1vZGlmaWVycyAmJiBkaXIubW9kaWZpZXJzLnByb3AgPyAndHJ1ZScgOiAnZmFsc2UnKSArIChkaXIubW9kaWZpZXJzICYmIGRpci5tb2RpZmllcnMuc3luYyA/ICcsdHJ1ZScgOiAnJykgKyBcIilcIilcbiAgICB9O1xuICB9XG5cbiAgLyogICovXG5cbiAgdmFyIGJhc2VEaXJlY3RpdmVzID0ge1xuICAgIG9uOiBvbixcbiAgICBiaW5kOiBiaW5kJDEsXG4gICAgY2xvYWs6IG5vb3BcbiAgfTtcblxuICAvKiAgKi9cblxuXG5cblxuXG4gIHZhciBDb2RlZ2VuU3RhdGUgPSBmdW5jdGlvbiBDb2RlZ2VuU3RhdGUgKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMud2FybiA9IG9wdGlvbnMud2FybiB8fCBiYXNlV2FybjtcbiAgICB0aGlzLnRyYW5zZm9ybXMgPSBwbHVja01vZHVsZUZ1bmN0aW9uKG9wdGlvbnMubW9kdWxlcywgJ3RyYW5zZm9ybUNvZGUnKTtcbiAgICB0aGlzLmRhdGFHZW5GbnMgPSBwbHVja01vZHVsZUZ1bmN0aW9uKG9wdGlvbnMubW9kdWxlcywgJ2dlbkRhdGEnKTtcbiAgICB0aGlzLmRpcmVjdGl2ZXMgPSBleHRlbmQoZXh0ZW5kKHt9LCBiYXNlRGlyZWN0aXZlcyksIG9wdGlvbnMuZGlyZWN0aXZlcyk7XG4gICAgdmFyIGlzUmVzZXJ2ZWRUYWcgPSBvcHRpb25zLmlzUmVzZXJ2ZWRUYWcgfHwgbm87XG4gICAgdGhpcy5tYXliZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gISFlbC5jb21wb25lbnQgfHwgIWlzUmVzZXJ2ZWRUYWcoZWwudGFnKTsgfTtcbiAgICB0aGlzLm9uY2VJZCA9IDA7XG4gICAgdGhpcy5zdGF0aWNSZW5kZXJGbnMgPSBbXTtcbiAgICB0aGlzLnByZSA9IGZhbHNlO1xuICB9O1xuXG5cblxuICBmdW5jdGlvbiBnZW5lcmF0ZSAoXG4gICAgYXN0LFxuICAgIG9wdGlvbnNcbiAgKSB7XG4gICAgdmFyIHN0YXRlID0gbmV3IENvZGVnZW5TdGF0ZShvcHRpb25zKTtcbiAgICB2YXIgY29kZSA9IGFzdCA/IGdlbkVsZW1lbnQoYXN0LCBzdGF0ZSkgOiAnX2MoXCJkaXZcIiknO1xuICAgIHJldHVybiB7XG4gICAgICByZW5kZXI6IChcIndpdGgodGhpcyl7cmV0dXJuIFwiICsgY29kZSArIFwifVwiKSxcbiAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuRWxlbWVudCAoZWwsIHN0YXRlKSB7XG4gICAgaWYgKGVsLnBhcmVudCkge1xuICAgICAgZWwucHJlID0gZWwucHJlIHx8IGVsLnBhcmVudC5wcmU7XG4gICAgfVxuXG4gICAgaWYgKGVsLnN0YXRpY1Jvb3QgJiYgIWVsLnN0YXRpY1Byb2Nlc3NlZCkge1xuICAgICAgcmV0dXJuIGdlblN0YXRpYyhlbCwgc3RhdGUpXG4gICAgfSBlbHNlIGlmIChlbC5vbmNlICYmICFlbC5vbmNlUHJvY2Vzc2VkKSB7XG4gICAgICByZXR1cm4gZ2VuT25jZShlbCwgc3RhdGUpXG4gICAgfSBlbHNlIGlmIChlbC5mb3IgJiYgIWVsLmZvclByb2Nlc3NlZCkge1xuICAgICAgcmV0dXJuIGdlbkZvcihlbCwgc3RhdGUpXG4gICAgfSBlbHNlIGlmIChlbC5pZiAmJiAhZWwuaWZQcm9jZXNzZWQpIHtcbiAgICAgIHJldHVybiBnZW5JZihlbCwgc3RhdGUpXG4gICAgfSBlbHNlIGlmIChlbC50YWcgPT09ICd0ZW1wbGF0ZScgJiYgIWVsLnNsb3RUYXJnZXQgJiYgIXN0YXRlLnByZSkge1xuICAgICAgcmV0dXJuIGdlbkNoaWxkcmVuKGVsLCBzdGF0ZSkgfHwgJ3ZvaWQgMCdcbiAgICB9IGVsc2UgaWYgKGVsLnRhZyA9PT0gJ3Nsb3QnKSB7XG4gICAgICByZXR1cm4gZ2VuU2xvdChlbCwgc3RhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbXBvbmVudCBvciBlbGVtZW50XG4gICAgICB2YXIgY29kZTtcbiAgICAgIGlmIChlbC5jb21wb25lbnQpIHtcbiAgICAgICAgY29kZSA9IGdlbkNvbXBvbmVudChlbC5jb21wb25lbnQsIGVsLCBzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgaWYgKCFlbC5wbGFpbiB8fCAoZWwucHJlICYmIHN0YXRlLm1heWJlQ29tcG9uZW50KGVsKSkpIHtcbiAgICAgICAgICBkYXRhID0gZ2VuRGF0YSQyKGVsLCBzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBlbC5pbmxpbmVUZW1wbGF0ZSA/IG51bGwgOiBnZW5DaGlsZHJlbihlbCwgc3RhdGUsIHRydWUpO1xuICAgICAgICBjb2RlID0gXCJfYygnXCIgKyAoZWwudGFnKSArIFwiJ1wiICsgKGRhdGEgPyAoXCIsXCIgKyBkYXRhKSA6ICcnKSArIChjaGlsZHJlbiA/IChcIixcIiArIGNoaWxkcmVuKSA6ICcnKSArIFwiKVwiO1xuICAgICAgfVxuICAgICAgLy8gbW9kdWxlIHRyYW5zZm9ybXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGUudHJhbnNmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb2RlID0gc3RhdGUudHJhbnNmb3Jtc1tpXShlbCwgY29kZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29kZVxuICAgIH1cbiAgfVxuXG4gIC8vIGhvaXN0IHN0YXRpYyBzdWItdHJlZXMgb3V0XG4gIGZ1bmN0aW9uIGdlblN0YXRpYyAoZWwsIHN0YXRlKSB7XG4gICAgZWwuc3RhdGljUHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAvLyBTb21lIGVsZW1lbnRzICh0ZW1wbGF0ZXMpIG5lZWQgdG8gYmVoYXZlIGRpZmZlcmVudGx5IGluc2lkZSBvZiBhIHYtcHJlXG4gICAgLy8gbm9kZS4gIEFsbCBwcmUgbm9kZXMgYXJlIHN0YXRpYyByb290cywgc28gd2UgY2FuIHVzZSB0aGlzIGFzIGEgbG9jYXRpb24gdG9cbiAgICAvLyB3cmFwIGEgc3RhdGUgY2hhbmdlIGFuZCByZXNldCBpdCB1cG9uIGV4aXRpbmcgdGhlIHByZSBub2RlLlxuICAgIHZhciBvcmlnaW5hbFByZVN0YXRlID0gc3RhdGUucHJlO1xuICAgIGlmIChlbC5wcmUpIHtcbiAgICAgIHN0YXRlLnByZSA9IGVsLnByZTtcbiAgICB9XG4gICAgc3RhdGUuc3RhdGljUmVuZGVyRm5zLnB1c2goKFwid2l0aCh0aGlzKXtyZXR1cm4gXCIgKyAoZ2VuRWxlbWVudChlbCwgc3RhdGUpKSArIFwifVwiKSk7XG4gICAgc3RhdGUucHJlID0gb3JpZ2luYWxQcmVTdGF0ZTtcbiAgICByZXR1cm4gKFwiX20oXCIgKyAoc3RhdGUuc3RhdGljUmVuZGVyRm5zLmxlbmd0aCAtIDEpICsgKGVsLnN0YXRpY0luRm9yID8gJyx0cnVlJyA6ICcnKSArIFwiKVwiKVxuICB9XG5cbiAgLy8gdi1vbmNlXG4gIGZ1bmN0aW9uIGdlbk9uY2UgKGVsLCBzdGF0ZSkge1xuICAgIGVsLm9uY2VQcm9jZXNzZWQgPSB0cnVlO1xuICAgIGlmIChlbC5pZiAmJiAhZWwuaWZQcm9jZXNzZWQpIHtcbiAgICAgIHJldHVybiBnZW5JZihlbCwgc3RhdGUpXG4gICAgfSBlbHNlIGlmIChlbC5zdGF0aWNJbkZvcikge1xuICAgICAgdmFyIGtleSA9ICcnO1xuICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudDtcbiAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudC5mb3IpIHtcbiAgICAgICAgICBrZXkgPSBwYXJlbnQua2V5O1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgIH1cbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIHN0YXRlLndhcm4oXG4gICAgICAgICAgXCJ2LW9uY2UgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgdi1mb3IgdGhhdCBpcyBrZXllZC4gXCIsXG4gICAgICAgICAgZWwucmF3QXR0cnNNYXBbJ3Ytb25jZSddXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBnZW5FbGVtZW50KGVsLCBzdGF0ZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXCJfbyhcIiArIChnZW5FbGVtZW50KGVsLCBzdGF0ZSkpICsgXCIsXCIgKyAoc3RhdGUub25jZUlkKyspICsgXCIsXCIgKyBrZXkgKyBcIilcIilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdlblN0YXRpYyhlbCwgc3RhdGUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuSWYgKFxuICAgIGVsLFxuICAgIHN0YXRlLFxuICAgIGFsdEdlbixcbiAgICBhbHRFbXB0eVxuICApIHtcbiAgICBlbC5pZlByb2Nlc3NlZCA9IHRydWU7IC8vIGF2b2lkIHJlY3Vyc2lvblxuICAgIHJldHVybiBnZW5JZkNvbmRpdGlvbnMoZWwuaWZDb25kaXRpb25zLnNsaWNlKCksIHN0YXRlLCBhbHRHZW4sIGFsdEVtcHR5KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuSWZDb25kaXRpb25zIChcbiAgICBjb25kaXRpb25zLFxuICAgIHN0YXRlLFxuICAgIGFsdEdlbixcbiAgICBhbHRFbXB0eVxuICApIHtcbiAgICBpZiAoIWNvbmRpdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYWx0RW1wdHkgfHwgJ19lKCknXG4gICAgfVxuXG4gICAgdmFyIGNvbmRpdGlvbiA9IGNvbmRpdGlvbnMuc2hpZnQoKTtcbiAgICBpZiAoY29uZGl0aW9uLmV4cCkge1xuICAgICAgcmV0dXJuIChcIihcIiArIChjb25kaXRpb24uZXhwKSArIFwiKT9cIiArIChnZW5UZXJuYXJ5RXhwKGNvbmRpdGlvbi5ibG9jaykpICsgXCI6XCIgKyAoZ2VuSWZDb25kaXRpb25zKGNvbmRpdGlvbnMsIHN0YXRlLCBhbHRHZW4sIGFsdEVtcHR5KSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXCJcIiArIChnZW5UZXJuYXJ5RXhwKGNvbmRpdGlvbi5ibG9jaykpKVxuICAgIH1cblxuICAgIC8vIHYtaWYgd2l0aCB2LW9uY2Ugc2hvdWxkIGdlbmVyYXRlIGNvZGUgbGlrZSAoYSk/X20oMCk6X20oMSlcbiAgICBmdW5jdGlvbiBnZW5UZXJuYXJ5RXhwIChlbCkge1xuICAgICAgcmV0dXJuIGFsdEdlblxuICAgICAgICA/IGFsdEdlbihlbCwgc3RhdGUpXG4gICAgICAgIDogZWwub25jZVxuICAgICAgICAgID8gZ2VuT25jZShlbCwgc3RhdGUpXG4gICAgICAgICAgOiBnZW5FbGVtZW50KGVsLCBzdGF0ZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5Gb3IgKFxuICAgIGVsLFxuICAgIHN0YXRlLFxuICAgIGFsdEdlbixcbiAgICBhbHRIZWxwZXJcbiAgKSB7XG4gICAgdmFyIGV4cCA9IGVsLmZvcjtcbiAgICB2YXIgYWxpYXMgPSBlbC5hbGlhcztcbiAgICB2YXIgaXRlcmF0b3IxID0gZWwuaXRlcmF0b3IxID8gKFwiLFwiICsgKGVsLml0ZXJhdG9yMSkpIDogJyc7XG4gICAgdmFyIGl0ZXJhdG9yMiA9IGVsLml0ZXJhdG9yMiA/IChcIixcIiArIChlbC5pdGVyYXRvcjIpKSA6ICcnO1xuXG4gICAgaWYgKHN0YXRlLm1heWJlQ29tcG9uZW50KGVsKSAmJlxuICAgICAgZWwudGFnICE9PSAnc2xvdCcgJiZcbiAgICAgIGVsLnRhZyAhPT0gJ3RlbXBsYXRlJyAmJlxuICAgICAgIWVsLmtleVxuICAgICkge1xuICAgICAgc3RhdGUud2FybihcbiAgICAgICAgXCI8XCIgKyAoZWwudGFnKSArIFwiIHYtZm9yPVxcXCJcIiArIGFsaWFzICsgXCIgaW4gXCIgKyBleHAgKyBcIlxcXCI+OiBjb21wb25lbnQgbGlzdHMgcmVuZGVyZWQgd2l0aCBcIiArXG4gICAgICAgIFwidi1mb3Igc2hvdWxkIGhhdmUgZXhwbGljaXQga2V5cy4gXCIgK1xuICAgICAgICBcIlNlZSBodHRwczovL3Z1ZWpzLm9yZy9ndWlkZS9saXN0Lmh0bWwja2V5IGZvciBtb3JlIGluZm8uXCIsXG4gICAgICAgIGVsLnJhd0F0dHJzTWFwWyd2LWZvciddLFxuICAgICAgICB0cnVlIC8qIHRpcCAqL1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBlbC5mb3JQcm9jZXNzZWQgPSB0cnVlOyAvLyBhdm9pZCByZWN1cnNpb25cbiAgICByZXR1cm4gKGFsdEhlbHBlciB8fCAnX2wnKSArIFwiKChcIiArIGV4cCArIFwiKSxcIiArXG4gICAgICBcImZ1bmN0aW9uKFwiICsgYWxpYXMgKyBpdGVyYXRvcjEgKyBpdGVyYXRvcjIgKyBcIil7XCIgK1xuICAgICAgICBcInJldHVybiBcIiArICgoYWx0R2VuIHx8IGdlbkVsZW1lbnQpKGVsLCBzdGF0ZSkpICtcbiAgICAgICd9KSdcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbkRhdGEkMiAoZWwsIHN0YXRlKSB7XG4gICAgdmFyIGRhdGEgPSAneyc7XG5cbiAgICAvLyBkaXJlY3RpdmVzIGZpcnN0LlxuICAgIC8vIGRpcmVjdGl2ZXMgbWF5IG11dGF0ZSB0aGUgZWwncyBvdGhlciBwcm9wZXJ0aWVzIGJlZm9yZSB0aGV5IGFyZSBnZW5lcmF0ZWQuXG4gICAgdmFyIGRpcnMgPSBnZW5EaXJlY3RpdmVzKGVsLCBzdGF0ZSk7XG4gICAgaWYgKGRpcnMpIHsgZGF0YSArPSBkaXJzICsgJywnOyB9XG5cbiAgICAvLyBrZXlcbiAgICBpZiAoZWwua2V5KSB7XG4gICAgICBkYXRhICs9IFwia2V5OlwiICsgKGVsLmtleSkgKyBcIixcIjtcbiAgICB9XG4gICAgLy8gcmVmXG4gICAgaWYgKGVsLnJlZikge1xuICAgICAgZGF0YSArPSBcInJlZjpcIiArIChlbC5yZWYpICsgXCIsXCI7XG4gICAgfVxuICAgIGlmIChlbC5yZWZJbkZvcikge1xuICAgICAgZGF0YSArPSBcInJlZkluRm9yOnRydWUsXCI7XG4gICAgfVxuICAgIC8vIHByZVxuICAgIGlmIChlbC5wcmUpIHtcbiAgICAgIGRhdGEgKz0gXCJwcmU6dHJ1ZSxcIjtcbiAgICB9XG4gICAgLy8gcmVjb3JkIG9yaWdpbmFsIHRhZyBuYW1lIGZvciBjb21wb25lbnRzIHVzaW5nIFwiaXNcIiBhdHRyaWJ1dGVcbiAgICBpZiAoZWwuY29tcG9uZW50KSB7XG4gICAgICBkYXRhICs9IFwidGFnOlxcXCJcIiArIChlbC50YWcpICsgXCJcXFwiLFwiO1xuICAgIH1cbiAgICAvLyBtb2R1bGUgZGF0YSBnZW5lcmF0aW9uIGZ1bmN0aW9uc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGUuZGF0YUdlbkZucy5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YSArPSBzdGF0ZS5kYXRhR2VuRm5zW2ldKGVsKTtcbiAgICB9XG4gICAgLy8gYXR0cmlidXRlc1xuICAgIGlmIChlbC5hdHRycykge1xuICAgICAgZGF0YSArPSBcImF0dHJzOlwiICsgKGdlblByb3BzKGVsLmF0dHJzKSkgKyBcIixcIjtcbiAgICB9XG4gICAgLy8gRE9NIHByb3BzXG4gICAgaWYgKGVsLnByb3BzKSB7XG4gICAgICBkYXRhICs9IFwiZG9tUHJvcHM6XCIgKyAoZ2VuUHJvcHMoZWwucHJvcHMpKSArIFwiLFwiO1xuICAgIH1cbiAgICAvLyBldmVudCBoYW5kbGVyc1xuICAgIGlmIChlbC5ldmVudHMpIHtcbiAgICAgIGRhdGEgKz0gKGdlbkhhbmRsZXJzKGVsLmV2ZW50cywgZmFsc2UpKSArIFwiLFwiO1xuICAgIH1cbiAgICBpZiAoZWwubmF0aXZlRXZlbnRzKSB7XG4gICAgICBkYXRhICs9IChnZW5IYW5kbGVycyhlbC5uYXRpdmVFdmVudHMsIHRydWUpKSArIFwiLFwiO1xuICAgIH1cbiAgICAvLyBzbG90IHRhcmdldFxuICAgIC8vIG9ubHkgZm9yIG5vbi1zY29wZWQgc2xvdHNcbiAgICBpZiAoZWwuc2xvdFRhcmdldCAmJiAhZWwuc2xvdFNjb3BlKSB7XG4gICAgICBkYXRhICs9IFwic2xvdDpcIiArIChlbC5zbG90VGFyZ2V0KSArIFwiLFwiO1xuICAgIH1cbiAgICAvLyBzY29wZWQgc2xvdHNcbiAgICBpZiAoZWwuc2NvcGVkU2xvdHMpIHtcbiAgICAgIGRhdGEgKz0gKGdlblNjb3BlZFNsb3RzKGVsLCBlbC5zY29wZWRTbG90cywgc3RhdGUpKSArIFwiLFwiO1xuICAgIH1cbiAgICAvLyBjb21wb25lbnQgdi1tb2RlbFxuICAgIGlmIChlbC5tb2RlbCkge1xuICAgICAgZGF0YSArPSBcIm1vZGVsOnt2YWx1ZTpcIiArIChlbC5tb2RlbC52YWx1ZSkgKyBcIixjYWxsYmFjazpcIiArIChlbC5tb2RlbC5jYWxsYmFjaykgKyBcIixleHByZXNzaW9uOlwiICsgKGVsLm1vZGVsLmV4cHJlc3Npb24pICsgXCJ9LFwiO1xuICAgIH1cbiAgICAvLyBpbmxpbmUtdGVtcGxhdGVcbiAgICBpZiAoZWwuaW5saW5lVGVtcGxhdGUpIHtcbiAgICAgIHZhciBpbmxpbmVUZW1wbGF0ZSA9IGdlbklubGluZVRlbXBsYXRlKGVsLCBzdGF0ZSk7XG4gICAgICBpZiAoaW5saW5lVGVtcGxhdGUpIHtcbiAgICAgICAgZGF0YSArPSBpbmxpbmVUZW1wbGF0ZSArIFwiLFwiO1xuICAgICAgfVxuICAgIH1cbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sJC8sICcnKSArICd9JztcbiAgICAvLyB2LWJpbmQgZHluYW1pYyBhcmd1bWVudCB3cmFwXG4gICAgLy8gdi1iaW5kIHdpdGggZHluYW1pYyBhcmd1bWVudHMgbXVzdCBiZSBhcHBsaWVkIHVzaW5nIHRoZSBzYW1lIHYtYmluZCBvYmplY3RcbiAgICAvLyBtZXJnZSBoZWxwZXIgc28gdGhhdCBjbGFzcy9zdHlsZS9tdXN0VXNlUHJvcCBhdHRycyBhcmUgaGFuZGxlZCBjb3JyZWN0bHkuXG4gICAgaWYgKGVsLmR5bmFtaWNBdHRycykge1xuICAgICAgZGF0YSA9IFwiX2IoXCIgKyBkYXRhICsgXCIsXFxcIlwiICsgKGVsLnRhZykgKyBcIlxcXCIsXCIgKyAoZ2VuUHJvcHMoZWwuZHluYW1pY0F0dHJzKSkgKyBcIilcIjtcbiAgICB9XG4gICAgLy8gdi1iaW5kIGRhdGEgd3JhcFxuICAgIGlmIChlbC53cmFwRGF0YSkge1xuICAgICAgZGF0YSA9IGVsLndyYXBEYXRhKGRhdGEpO1xuICAgIH1cbiAgICAvLyB2LW9uIGRhdGEgd3JhcFxuICAgIGlmIChlbC53cmFwTGlzdGVuZXJzKSB7XG4gICAgICBkYXRhID0gZWwud3JhcExpc3RlbmVycyhkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbkRpcmVjdGl2ZXMgKGVsLCBzdGF0ZSkge1xuICAgIHZhciBkaXJzID0gZWwuZGlyZWN0aXZlcztcbiAgICBpZiAoIWRpcnMpIHsgcmV0dXJuIH1cbiAgICB2YXIgcmVzID0gJ2RpcmVjdGl2ZXM6Wyc7XG4gICAgdmFyIGhhc1J1bnRpbWUgPSBmYWxzZTtcbiAgICB2YXIgaSwgbCwgZGlyLCBuZWVkUnVudGltZTtcbiAgICBmb3IgKGkgPSAwLCBsID0gZGlycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGRpciA9IGRpcnNbaV07XG4gICAgICBuZWVkUnVudGltZSA9IHRydWU7XG4gICAgICB2YXIgZ2VuID0gc3RhdGUuZGlyZWN0aXZlc1tkaXIubmFtZV07XG4gICAgICBpZiAoZ2VuKSB7XG4gICAgICAgIC8vIGNvbXBpbGUtdGltZSBkaXJlY3RpdmUgdGhhdCBtYW5pcHVsYXRlcyBBU1QuXG4gICAgICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBpdCBhbHNvIG5lZWRzIGEgcnVudGltZSBjb3VudGVycGFydC5cbiAgICAgICAgbmVlZFJ1bnRpbWUgPSAhIWdlbihlbCwgZGlyLCBzdGF0ZS53YXJuKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkUnVudGltZSkge1xuICAgICAgICBoYXNSdW50aW1lID0gdHJ1ZTtcbiAgICAgICAgcmVzICs9IFwie25hbWU6XFxcIlwiICsgKGRpci5uYW1lKSArIFwiXFxcIixyYXdOYW1lOlxcXCJcIiArIChkaXIucmF3TmFtZSkgKyBcIlxcXCJcIiArIChkaXIudmFsdWUgPyAoXCIsdmFsdWU6KFwiICsgKGRpci52YWx1ZSkgKyBcIiksZXhwcmVzc2lvbjpcIiArIChKU09OLnN0cmluZ2lmeShkaXIudmFsdWUpKSkgOiAnJykgKyAoZGlyLmFyZyA/IChcIixhcmc6XCIgKyAoZGlyLmlzRHluYW1pY0FyZyA/IGRpci5hcmcgOiAoXCJcXFwiXCIgKyAoZGlyLmFyZykgKyBcIlxcXCJcIikpKSA6ICcnKSArIChkaXIubW9kaWZpZXJzID8gKFwiLG1vZGlmaWVyczpcIiArIChKU09OLnN0cmluZ2lmeShkaXIubW9kaWZpZXJzKSkpIDogJycpICsgXCJ9LFwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzUnVudGltZSkge1xuICAgICAgcmV0dXJuIHJlcy5zbGljZSgwLCAtMSkgKyAnXSdcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5JbmxpbmVUZW1wbGF0ZSAoZWwsIHN0YXRlKSB7XG4gICAgdmFyIGFzdCA9IGVsLmNoaWxkcmVuWzBdO1xuICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggIT09IDEgfHwgYXN0LnR5cGUgIT09IDEpIHtcbiAgICAgIHN0YXRlLndhcm4oXG4gICAgICAgICdJbmxpbmUtdGVtcGxhdGUgY29tcG9uZW50cyBtdXN0IGhhdmUgZXhhY3RseSBvbmUgY2hpbGQgZWxlbWVudC4nLFxuICAgICAgICB7IHN0YXJ0OiBlbC5zdGFydCB9XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoYXN0ICYmIGFzdC50eXBlID09PSAxKSB7XG4gICAgICB2YXIgaW5saW5lUmVuZGVyRm5zID0gZ2VuZXJhdGUoYXN0LCBzdGF0ZS5vcHRpb25zKTtcbiAgICAgIHJldHVybiAoXCJpbmxpbmVUZW1wbGF0ZTp7cmVuZGVyOmZ1bmN0aW9uKCl7XCIgKyAoaW5saW5lUmVuZGVyRm5zLnJlbmRlcikgKyBcIn0sc3RhdGljUmVuZGVyRm5zOltcIiArIChpbmxpbmVSZW5kZXJGbnMuc3RhdGljUmVuZGVyRm5zLm1hcChmdW5jdGlvbiAoY29kZSkgeyByZXR1cm4gKFwiZnVuY3Rpb24oKXtcIiArIGNvZGUgKyBcIn1cIik7IH0pLmpvaW4oJywnKSkgKyBcIl19XCIpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuU2NvcGVkU2xvdHMgKFxuICAgIGVsLFxuICAgIHNsb3RzLFxuICAgIHN0YXRlXG4gICkge1xuICAgIC8vIGJ5IGRlZmF1bHQgc2NvcGVkIHNsb3RzIGFyZSBjb25zaWRlcmVkIFwic3RhYmxlXCIsIHRoaXMgYWxsb3dzIGNoaWxkXG4gICAgLy8gY29tcG9uZW50cyB3aXRoIG9ubHkgc2NvcGVkIHNsb3RzIHRvIHNraXAgZm9yY2VkIHVwZGF0ZXMgZnJvbSBwYXJlbnQuXG4gICAgLy8gYnV0IGluIHNvbWUgY2FzZXMgd2UgaGF2ZSB0byBiYWlsLW91dCBvZiB0aGlzIG9wdGltaXphdGlvblxuICAgIC8vIGZvciBleGFtcGxlIGlmIHRoZSBzbG90IGNvbnRhaW5zIGR5bmFtaWMgbmFtZXMsIGhhcyB2LWlmIG9yIHYtZm9yIG9uIHRoZW0uLi5cbiAgICB2YXIgbmVlZHNGb3JjZVVwZGF0ZSA9IGVsLmZvciB8fCBPYmplY3Qua2V5cyhzbG90cykuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgc2xvdCA9IHNsb3RzW2tleV07XG4gICAgICByZXR1cm4gKFxuICAgICAgICBzbG90LnNsb3RUYXJnZXREeW5hbWljIHx8XG4gICAgICAgIHNsb3QuaWYgfHxcbiAgICAgICAgc2xvdC5mb3IgfHxcbiAgICAgICAgY29udGFpbnNTbG90Q2hpbGQoc2xvdCkgLy8gaXMgcGFzc2luZyBkb3duIHNsb3QgZnJvbSBwYXJlbnQgd2hpY2ggbWF5IGJlIGR5bmFtaWNcbiAgICAgIClcbiAgICB9KTtcblxuICAgIC8vICM5NTM0OiBpZiBhIGNvbXBvbmVudCB3aXRoIHNjb3BlZCBzbG90cyBpcyBpbnNpZGUgYSBjb25kaXRpb25hbCBicmFuY2gsXG4gICAgLy8gaXQncyBwb3NzaWJsZSBmb3IgdGhlIHNhbWUgY29tcG9uZW50IHRvIGJlIHJldXNlZCBidXQgd2l0aCBkaWZmZXJlbnRcbiAgICAvLyBjb21waWxlZCBzbG90IGNvbnRlbnQuIFRvIGF2b2lkIHRoYXQsIHdlIGdlbmVyYXRlIGEgdW5pcXVlIGtleSBiYXNlZCBvblxuICAgIC8vIHRoZSBnZW5lcmF0ZWQgY29kZSBvZiBhbGwgdGhlIHNsb3QgY29udGVudHMuXG4gICAgdmFyIG5lZWRzS2V5ID0gISFlbC5pZjtcblxuICAgIC8vIE9SIHdoZW4gaXQgaXMgaW5zaWRlIGFub3RoZXIgc2NvcGVkIHNsb3Qgb3Igdi1mb3IgKHRoZSByZWFjdGl2aXR5IG1heSBiZVxuICAgIC8vIGRpc2Nvbm5lY3RlZCBkdWUgdG8gdGhlIGludGVybWVkaWF0ZSBzY29wZSB2YXJpYWJsZSlcbiAgICAvLyAjOTQzOCwgIzk1MDZcbiAgICAvLyBUT0RPOiB0aGlzIGNhbiBiZSBmdXJ0aGVyIG9wdGltaXplZCBieSBwcm9wZXJseSBhbmFseXppbmcgaW4tc2NvcGUgYmluZGluZ3NcbiAgICAvLyBhbmQgc2tpcCBmb3JjZSB1cGRhdGluZyBvbmVzIHRoYXQgZG8gbm90IGFjdHVhbGx5IHVzZSBzY29wZSB2YXJpYWJsZXMuXG4gICAgaWYgKCFuZWVkc0ZvcmNlVXBkYXRlKSB7XG4gICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50O1xuICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKHBhcmVudC5zbG90U2NvcGUgJiYgcGFyZW50LnNsb3RTY29wZSAhPT0gZW1wdHlTbG90U2NvcGVUb2tlbikgfHxcbiAgICAgICAgICBwYXJlbnQuZm9yXG4gICAgICAgICkge1xuICAgICAgICAgIG5lZWRzRm9yY2VVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudC5pZikge1xuICAgICAgICAgIG5lZWRzS2V5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZWRTbG90cyA9IE9iamVjdC5rZXlzKHNsb3RzKVxuICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBnZW5TY29wZWRTbG90KHNsb3RzW2tleV0sIHN0YXRlKTsgfSlcbiAgICAgIC5qb2luKCcsJyk7XG5cbiAgICByZXR1cm4gKFwic2NvcGVkU2xvdHM6X3UoW1wiICsgZ2VuZXJhdGVkU2xvdHMgKyBcIl1cIiArIChuZWVkc0ZvcmNlVXBkYXRlID8gXCIsbnVsbCx0cnVlXCIgOiBcIlwiKSArICghbmVlZHNGb3JjZVVwZGF0ZSAmJiBuZWVkc0tleSA/IChcIixudWxsLGZhbHNlLFwiICsgKGhhc2goZ2VuZXJhdGVkU2xvdHMpKSkgOiBcIlwiKSArIFwiKVwiKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgICB2YXIgaGFzaCA9IDUzODE7XG4gICAgdmFyIGkgPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlKGkpIHtcbiAgICAgIGhhc2ggPSAoaGFzaCAqIDMzKSBeIHN0ci5jaGFyQ29kZUF0KC0taSk7XG4gICAgfVxuICAgIHJldHVybiBoYXNoID4+PiAwXG4gIH1cblxuICBmdW5jdGlvbiBjb250YWluc1Nsb3RDaGlsZCAoZWwpIHtcbiAgICBpZiAoZWwudHlwZSA9PT0gMSkge1xuICAgICAgaWYgKGVsLnRhZyA9PT0gJ3Nsb3QnKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gZWwuY2hpbGRyZW4uc29tZShjb250YWluc1Nsb3RDaGlsZClcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBnZW5TY29wZWRTbG90IChcbiAgICBlbCxcbiAgICBzdGF0ZVxuICApIHtcbiAgICB2YXIgaXNMZWdhY3lTeW50YXggPSBlbC5hdHRyc01hcFsnc2xvdC1zY29wZSddO1xuICAgIGlmIChlbC5pZiAmJiAhZWwuaWZQcm9jZXNzZWQgJiYgIWlzTGVnYWN5U3ludGF4KSB7XG4gICAgICByZXR1cm4gZ2VuSWYoZWwsIHN0YXRlLCBnZW5TY29wZWRTbG90LCBcIm51bGxcIilcbiAgICB9XG4gICAgaWYgKGVsLmZvciAmJiAhZWwuZm9yUHJvY2Vzc2VkKSB7XG4gICAgICByZXR1cm4gZ2VuRm9yKGVsLCBzdGF0ZSwgZ2VuU2NvcGVkU2xvdClcbiAgICB9XG4gICAgdmFyIHNsb3RTY29wZSA9IGVsLnNsb3RTY29wZSA9PT0gZW1wdHlTbG90U2NvcGVUb2tlblxuICAgICAgPyBcIlwiXG4gICAgICA6IFN0cmluZyhlbC5zbG90U2NvcGUpO1xuICAgIHZhciBmbiA9IFwiZnVuY3Rpb24oXCIgKyBzbG90U2NvcGUgKyBcIil7XCIgK1xuICAgICAgXCJyZXR1cm4gXCIgKyAoZWwudGFnID09PSAndGVtcGxhdGUnXG4gICAgICAgID8gZWwuaWYgJiYgaXNMZWdhY3lTeW50YXhcbiAgICAgICAgICA/IChcIihcIiArIChlbC5pZikgKyBcIik/XCIgKyAoZ2VuQ2hpbGRyZW4oZWwsIHN0YXRlKSB8fCAndW5kZWZpbmVkJykgKyBcIjp1bmRlZmluZWRcIilcbiAgICAgICAgICA6IGdlbkNoaWxkcmVuKGVsLCBzdGF0ZSkgfHwgJ3VuZGVmaW5lZCdcbiAgICAgICAgOiBnZW5FbGVtZW50KGVsLCBzdGF0ZSkpICsgXCJ9XCI7XG4gICAgLy8gcmV2ZXJzZSBwcm94eSB2LXNsb3Qgd2l0aG91dCBzY29wZSBvbiB0aGlzLiRzbG90c1xuICAgIHZhciByZXZlcnNlUHJveHkgPSBzbG90U2NvcGUgPyBcIlwiIDogXCIscHJveHk6dHJ1ZVwiO1xuICAgIHJldHVybiAoXCJ7a2V5OlwiICsgKGVsLnNsb3RUYXJnZXQgfHwgXCJcXFwiZGVmYXVsdFxcXCJcIikgKyBcIixmbjpcIiArIGZuICsgcmV2ZXJzZVByb3h5ICsgXCJ9XCIpXG4gIH1cblxuICBmdW5jdGlvbiBnZW5DaGlsZHJlbiAoXG4gICAgZWwsXG4gICAgc3RhdGUsXG4gICAgY2hlY2tTa2lwLFxuICAgIGFsdEdlbkVsZW1lbnQsXG4gICAgYWx0R2VuTm9kZVxuICApIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICB2YXIgZWwkMSA9IGNoaWxkcmVuWzBdO1xuICAgICAgLy8gb3B0aW1pemUgc2luZ2xlIHYtZm9yXG4gICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmXG4gICAgICAgIGVsJDEuZm9yICYmXG4gICAgICAgIGVsJDEudGFnICE9PSAndGVtcGxhdGUnICYmXG4gICAgICAgIGVsJDEudGFnICE9PSAnc2xvdCdcbiAgICAgICkge1xuICAgICAgICB2YXIgbm9ybWFsaXphdGlvblR5cGUgPSBjaGVja1NraXBcbiAgICAgICAgICA/IHN0YXRlLm1heWJlQ29tcG9uZW50KGVsJDEpID8gXCIsMVwiIDogXCIsMFwiXG4gICAgICAgICAgOiBcIlwiO1xuICAgICAgICByZXR1cm4gKFwiXCIgKyAoKGFsdEdlbkVsZW1lbnQgfHwgZ2VuRWxlbWVudCkoZWwkMSwgc3RhdGUpKSArIG5vcm1hbGl6YXRpb25UeXBlKVxuICAgICAgfVxuICAgICAgdmFyIG5vcm1hbGl6YXRpb25UeXBlJDEgPSBjaGVja1NraXBcbiAgICAgICAgPyBnZXROb3JtYWxpemF0aW9uVHlwZShjaGlsZHJlbiwgc3RhdGUubWF5YmVDb21wb25lbnQpXG4gICAgICAgIDogMDtcbiAgICAgIHZhciBnZW4gPSBhbHRHZW5Ob2RlIHx8IGdlbk5vZGU7XG4gICAgICByZXR1cm4gKFwiW1wiICsgKGNoaWxkcmVuLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gZ2VuKGMsIHN0YXRlKTsgfSkuam9pbignLCcpKSArIFwiXVwiICsgKG5vcm1hbGl6YXRpb25UeXBlJDEgPyAoXCIsXCIgKyBub3JtYWxpemF0aW9uVHlwZSQxKSA6ICcnKSlcbiAgICB9XG4gIH1cblxuICAvLyBkZXRlcm1pbmUgdGhlIG5vcm1hbGl6YXRpb24gbmVlZGVkIGZvciB0aGUgY2hpbGRyZW4gYXJyYXkuXG4gIC8vIDA6IG5vIG5vcm1hbGl6YXRpb24gbmVlZGVkXG4gIC8vIDE6IHNpbXBsZSBub3JtYWxpemF0aW9uIG5lZWRlZCAocG9zc2libGUgMS1sZXZlbCBkZWVwIG5lc3RlZCBhcnJheSlcbiAgLy8gMjogZnVsbCBub3JtYWxpemF0aW9uIG5lZWRlZFxuICBmdW5jdGlvbiBnZXROb3JtYWxpemF0aW9uVHlwZSAoXG4gICAgY2hpbGRyZW4sXG4gICAgbWF5YmVDb21wb25lbnRcbiAgKSB7XG4gICAgdmFyIHJlcyA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGVsID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAoZWwudHlwZSAhPT0gMSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWYgKG5lZWRzTm9ybWFsaXphdGlvbihlbCkgfHxcbiAgICAgICAgICAoZWwuaWZDb25kaXRpb25zICYmIGVsLmlmQ29uZGl0aW9ucy5zb21lKGZ1bmN0aW9uIChjKSB7IHJldHVybiBuZWVkc05vcm1hbGl6YXRpb24oYy5ibG9jayk7IH0pKSkge1xuICAgICAgICByZXMgPSAyO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgaWYgKG1heWJlQ29tcG9uZW50KGVsKSB8fFxuICAgICAgICAgIChlbC5pZkNvbmRpdGlvbnMgJiYgZWwuaWZDb25kaXRpb25zLnNvbWUoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1heWJlQ29tcG9uZW50KGMuYmxvY2spOyB9KSkpIHtcbiAgICAgICAgcmVzID0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgZnVuY3Rpb24gbmVlZHNOb3JtYWxpemF0aW9uIChlbCkge1xuICAgIHJldHVybiBlbC5mb3IgIT09IHVuZGVmaW5lZCB8fCBlbC50YWcgPT09ICd0ZW1wbGF0ZScgfHwgZWwudGFnID09PSAnc2xvdCdcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbk5vZGUgKG5vZGUsIHN0YXRlKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGdlbkVsZW1lbnQobm9kZSwgc3RhdGUpXG4gICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09IDMgJiYgbm9kZS5pc0NvbW1lbnQpIHtcbiAgICAgIHJldHVybiBnZW5Db21tZW50KG5vZGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZW5UZXh0KG5vZGUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuVGV4dCAodGV4dCkge1xuICAgIHJldHVybiAoXCJfdihcIiArICh0ZXh0LnR5cGUgPT09IDJcbiAgICAgID8gdGV4dC5leHByZXNzaW9uIC8vIG5vIG5lZWQgZm9yICgpIGJlY2F1c2UgYWxyZWFkeSB3cmFwcGVkIGluIF9zKClcbiAgICAgIDogdHJhbnNmb3JtU3BlY2lhbE5ld2xpbmVzKEpTT04uc3RyaW5naWZ5KHRleHQudGV4dCkpKSArIFwiKVwiKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuQ29tbWVudCAoY29tbWVudCkge1xuICAgIHJldHVybiAoXCJfZShcIiArIChKU09OLnN0cmluZ2lmeShjb21tZW50LnRleHQpKSArIFwiKVwiKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuU2xvdCAoZWwsIHN0YXRlKSB7XG4gICAgdmFyIHNsb3ROYW1lID0gZWwuc2xvdE5hbWUgfHwgJ1wiZGVmYXVsdFwiJztcbiAgICB2YXIgY2hpbGRyZW4gPSBnZW5DaGlsZHJlbihlbCwgc3RhdGUpO1xuICAgIHZhciByZXMgPSBcIl90KFwiICsgc2xvdE5hbWUgKyAoY2hpbGRyZW4gPyAoXCIsXCIgKyBjaGlsZHJlbikgOiAnJyk7XG4gICAgdmFyIGF0dHJzID0gZWwuYXR0cnMgfHwgZWwuZHluYW1pY0F0dHJzXG4gICAgICA/IGdlblByb3BzKChlbC5hdHRycyB8fCBbXSkuY29uY2F0KGVsLmR5bmFtaWNBdHRycyB8fCBbXSkubWFwKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiAoe1xuICAgICAgICAgIC8vIHNsb3QgcHJvcHMgYXJlIGNhbWVsaXplZFxuICAgICAgICAgIG5hbWU6IGNhbWVsaXplKGF0dHIubmFtZSksXG4gICAgICAgICAgdmFsdWU6IGF0dHIudmFsdWUsXG4gICAgICAgICAgZHluYW1pYzogYXR0ci5keW5hbWljXG4gICAgICAgIH0pOyB9KSlcbiAgICAgIDogbnVsbDtcbiAgICB2YXIgYmluZCQkMSA9IGVsLmF0dHJzTWFwWyd2LWJpbmQnXTtcbiAgICBpZiAoKGF0dHJzIHx8IGJpbmQkJDEpICYmICFjaGlsZHJlbikge1xuICAgICAgcmVzICs9IFwiLG51bGxcIjtcbiAgICB9XG4gICAgaWYgKGF0dHJzKSB7XG4gICAgICByZXMgKz0gXCIsXCIgKyBhdHRycztcbiAgICB9XG4gICAgaWYgKGJpbmQkJDEpIHtcbiAgICAgIHJlcyArPSAoYXR0cnMgPyAnJyA6ICcsbnVsbCcpICsgXCIsXCIgKyBiaW5kJCQxO1xuICAgIH1cbiAgICByZXR1cm4gcmVzICsgJyknXG4gIH1cblxuICAvLyBjb21wb25lbnROYW1lIGlzIGVsLmNvbXBvbmVudCwgdGFrZSBpdCBhcyBhcmd1bWVudCB0byBzaHVuIGZsb3cncyBwZXNzaW1pc3RpYyByZWZpbmVtZW50XG4gIGZ1bmN0aW9uIGdlbkNvbXBvbmVudCAoXG4gICAgY29tcG9uZW50TmFtZSxcbiAgICBlbCxcbiAgICBzdGF0ZVxuICApIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBlbC5pbmxpbmVUZW1wbGF0ZSA/IG51bGwgOiBnZW5DaGlsZHJlbihlbCwgc3RhdGUsIHRydWUpO1xuICAgIHJldHVybiAoXCJfYyhcIiArIGNvbXBvbmVudE5hbWUgKyBcIixcIiArIChnZW5EYXRhJDIoZWwsIHN0YXRlKSkgKyAoY2hpbGRyZW4gPyAoXCIsXCIgKyBjaGlsZHJlbikgOiAnJykgKyBcIilcIilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlblByb3BzIChwcm9wcykge1xuICAgIHZhciBzdGF0aWNQcm9wcyA9IFwiXCI7XG4gICAgdmFyIGR5bmFtaWNQcm9wcyA9IFwiXCI7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IHRyYW5zZm9ybVNwZWNpYWxOZXdsaW5lcyhwcm9wLnZhbHVlKTtcbiAgICAgIGlmIChwcm9wLmR5bmFtaWMpIHtcbiAgICAgICAgZHluYW1pY1Byb3BzICs9IChwcm9wLm5hbWUpICsgXCIsXCIgKyB2YWx1ZSArIFwiLFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUHJvcHMgKz0gXCJcXFwiXCIgKyAocHJvcC5uYW1lKSArIFwiXFxcIjpcIiArIHZhbHVlICsgXCIsXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRpY1Byb3BzID0gXCJ7XCIgKyAoc3RhdGljUHJvcHMuc2xpY2UoMCwgLTEpKSArIFwifVwiO1xuICAgIGlmIChkeW5hbWljUHJvcHMpIHtcbiAgICAgIHJldHVybiAoXCJfZChcIiArIHN0YXRpY1Byb3BzICsgXCIsW1wiICsgKGR5bmFtaWNQcm9wcy5zbGljZSgwLCAtMSkpICsgXCJdKVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RhdGljUHJvcHNcbiAgICB9XG4gIH1cblxuICAvLyAjMzg5NSwgIzQyNjhcbiAgZnVuY3Rpb24gdHJhbnNmb3JtU3BlY2lhbE5ld2xpbmVzICh0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHRcbiAgICAgIC5yZXBsYWNlKC9cXHUyMDI4L2csICdcXFxcdTIwMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcdTIwMjkvZywgJ1xcXFx1MjAyOScpXG4gIH1cblxuICAvKiAgKi9cblxuXG5cbiAgLy8gdGhlc2Uga2V5d29yZHMgc2hvdWxkIG5vdCBhcHBlYXIgaW5zaWRlIGV4cHJlc3Npb25zLCBidXQgb3BlcmF0b3JzIGxpa2VcbiAgLy8gdHlwZW9mLCBpbnN0YW5jZW9mIGFuZCBpbiBhcmUgYWxsb3dlZFxuICB2YXIgcHJvaGliaXRlZEtleXdvcmRSRSA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIChcbiAgICAnZG8saWYsZm9yLGxldCxuZXcsdHJ5LHZhcixjYXNlLGVsc2Usd2l0aCxhd2FpdCxicmVhayxjYXRjaCxjbGFzcyxjb25zdCwnICtcbiAgICAnc3VwZXIsdGhyb3csd2hpbGUseWllbGQsZGVsZXRlLGV4cG9ydCxpbXBvcnQscmV0dXJuLHN3aXRjaCxkZWZhdWx0LCcgK1xuICAgICdleHRlbmRzLGZpbmFsbHksY29udGludWUsZGVidWdnZXIsZnVuY3Rpb24sYXJndW1lbnRzJ1xuICApLnNwbGl0KCcsJykuam9pbignXFxcXGJ8XFxcXGInKSArICdcXFxcYicpO1xuXG4gIC8vIHRoZXNlIHVuYXJ5IG9wZXJhdG9ycyBzaG91bGQgbm90IGJlIHVzZWQgYXMgcHJvcGVydHkvbWV0aG9kIG5hbWVzXG4gIHZhciB1bmFyeU9wZXJhdG9yc1JFID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgKFxuICAgICdkZWxldGUsdHlwZW9mLHZvaWQnXG4gICkuc3BsaXQoJywnKS5qb2luKCdcXFxccypcXFxcKFteXFxcXCldKlxcXFwpfFxcXFxiJykgKyAnXFxcXHMqXFxcXChbXlxcXFwpXSpcXFxcKScpO1xuXG4gIC8vIHN0cmlwIHN0cmluZ3MgaW4gZXhwcmVzc2lvbnNcbiAgdmFyIHN0cmlwU3RyaW5nUkUgPSAvJyg/OlteJ1xcXFxdfFxcXFwuKSonfFwiKD86W15cIlxcXFxdfFxcXFwuKSpcInxgKD86W15gXFxcXF18XFxcXC4pKlxcJFxce3xcXH0oPzpbXmBcXFxcXXxcXFxcLikqYHxgKD86W15gXFxcXF18XFxcXC4pKmAvZztcblxuICAvLyBkZXRlY3QgcHJvYmxlbWF0aWMgZXhwcmVzc2lvbnMgaW4gYSB0ZW1wbGF0ZVxuICBmdW5jdGlvbiBkZXRlY3RFcnJvcnMgKGFzdCwgd2Fybikge1xuICAgIGlmIChhc3QpIHtcbiAgICAgIGNoZWNrTm9kZShhc3QsIHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrTm9kZSAobm9kZSwgd2Fybikge1xuICAgIGlmIChub2RlLnR5cGUgPT09IDEpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbm9kZS5hdHRyc01hcCkge1xuICAgICAgICBpZiAoZGlyUkUudGVzdChuYW1lKSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG5vZGUuYXR0cnNNYXBbbmFtZV07XG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBub2RlLnJhd0F0dHJzTWFwW25hbWVdO1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICd2LWZvcicpIHtcbiAgICAgICAgICAgICAgY2hlY2tGb3Iobm9kZSwgKFwidi1mb3I9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIiksIHdhcm4sIHJhbmdlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob25SRS50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNoZWNrRXZlbnQodmFsdWUsIChuYW1lICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIiksIHdhcm4sIHJhbmdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoZWNrRXhwcmVzc2lvbih2YWx1ZSwgKG5hbWUgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKSwgd2FybiwgcmFuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY2hlY2tOb2RlKG5vZGUuY2hpbGRyZW5baV0sIHdhcm4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09IDIpIHtcbiAgICAgIGNoZWNrRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24sIG5vZGUudGV4dCwgd2Fybiwgbm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tFdmVudCAoZXhwLCB0ZXh0LCB3YXJuLCByYW5nZSkge1xuICAgIHZhciBzdGlwcGVkID0gZXhwLnJlcGxhY2Uoc3RyaXBTdHJpbmdSRSwgJycpO1xuICAgIHZhciBrZXl3b3JkTWF0Y2ggPSBzdGlwcGVkLm1hdGNoKHVuYXJ5T3BlcmF0b3JzUkUpO1xuICAgIGlmIChrZXl3b3JkTWF0Y2ggJiYgc3RpcHBlZC5jaGFyQXQoa2V5d29yZE1hdGNoLmluZGV4IC0gMSkgIT09ICckJykge1xuICAgICAgd2FybihcbiAgICAgICAgXCJhdm9pZCB1c2luZyBKYXZhU2NyaXB0IHVuYXJ5IG9wZXJhdG9yIGFzIHByb3BlcnR5IG5hbWU6IFwiICtcbiAgICAgICAgXCJcXFwiXCIgKyAoa2V5d29yZE1hdGNoWzBdKSArIFwiXFxcIiBpbiBleHByZXNzaW9uIFwiICsgKHRleHQudHJpbSgpKSxcbiAgICAgICAgcmFuZ2VcbiAgICAgICk7XG4gICAgfVxuICAgIGNoZWNrRXhwcmVzc2lvbihleHAsIHRleHQsIHdhcm4sIHJhbmdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yIChub2RlLCB0ZXh0LCB3YXJuLCByYW5nZSkge1xuICAgIGNoZWNrRXhwcmVzc2lvbihub2RlLmZvciB8fCAnJywgdGV4dCwgd2FybiwgcmFuZ2UpO1xuICAgIGNoZWNrSWRlbnRpZmllcihub2RlLmFsaWFzLCAndi1mb3IgYWxpYXMnLCB0ZXh0LCB3YXJuLCByYW5nZSk7XG4gICAgY2hlY2tJZGVudGlmaWVyKG5vZGUuaXRlcmF0b3IxLCAndi1mb3IgaXRlcmF0b3InLCB0ZXh0LCB3YXJuLCByYW5nZSk7XG4gICAgY2hlY2tJZGVudGlmaWVyKG5vZGUuaXRlcmF0b3IyLCAndi1mb3IgaXRlcmF0b3InLCB0ZXh0LCB3YXJuLCByYW5nZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0lkZW50aWZpZXIgKFxuICAgIGlkZW50LFxuICAgIHR5cGUsXG4gICAgdGV4dCxcbiAgICB3YXJuLFxuICAgIHJhbmdlXG4gICkge1xuICAgIGlmICh0eXBlb2YgaWRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgRnVuY3Rpb24oKFwidmFyIFwiICsgaWRlbnQgKyBcIj1fXCIpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgd2FybigoXCJpbnZhbGlkIFwiICsgdHlwZSArIFwiIFxcXCJcIiArIGlkZW50ICsgXCJcXFwiIGluIGV4cHJlc3Npb246IFwiICsgKHRleHQudHJpbSgpKSksIHJhbmdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0V4cHJlc3Npb24gKGV4cCwgdGV4dCwgd2FybiwgcmFuZ2UpIHtcbiAgICB0cnkge1xuICAgICAgbmV3IEZ1bmN0aW9uKChcInJldHVybiBcIiArIGV4cCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHZhciBrZXl3b3JkTWF0Y2ggPSBleHAucmVwbGFjZShzdHJpcFN0cmluZ1JFLCAnJykubWF0Y2gocHJvaGliaXRlZEtleXdvcmRSRSk7XG4gICAgICBpZiAoa2V5d29yZE1hdGNoKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJhdm9pZCB1c2luZyBKYXZhU2NyaXB0IGtleXdvcmQgYXMgcHJvcGVydHkgbmFtZTogXCIgK1xuICAgICAgICAgIFwiXFxcIlwiICsgKGtleXdvcmRNYXRjaFswXSkgKyBcIlxcXCJcXG4gIFJhdyBleHByZXNzaW9uOiBcIiArICh0ZXh0LnRyaW0oKSksXG4gICAgICAgICAgcmFuZ2VcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJpbnZhbGlkIGV4cHJlc3Npb246IFwiICsgKGUubWVzc2FnZSkgKyBcIiBpblxcblxcblwiICtcbiAgICAgICAgICBcIiAgICBcIiArIGV4cCArIFwiXFxuXFxuXCIgK1xuICAgICAgICAgIFwiICBSYXcgZXhwcmVzc2lvbjogXCIgKyAodGV4dC50cmltKCkpICsgXCJcXG5cIixcbiAgICAgICAgICByYW5nZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIHZhciByYW5nZSA9IDI7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDb2RlRnJhbWUgKFxuICAgIHNvdXJjZSxcbiAgICBzdGFydCxcbiAgICBlbmRcbiAgKSB7XG4gICAgaWYgKCBzdGFydCA9PT0gdm9pZCAwICkgc3RhcnQgPSAwO1xuICAgIGlmICggZW5kID09PSB2b2lkIDAgKSBlbmQgPSBzb3VyY2UubGVuZ3RoO1xuXG4gICAgdmFyIGxpbmVzID0gc291cmNlLnNwbGl0KC9cXHI/XFxuLyk7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY291bnQgKz0gbGluZXNbaV0ubGVuZ3RoICsgMTtcbiAgICAgIGlmIChjb3VudCA+PSBzdGFydCkge1xuICAgICAgICBmb3IgKHZhciBqID0gaSAtIHJhbmdlOyBqIDw9IGkgKyByYW5nZSB8fCBlbmQgPiBjb3VudDsgaisrKSB7XG4gICAgICAgICAgaWYgKGogPCAwIHx8IGogPj0gbGluZXMubGVuZ3RoKSB7IGNvbnRpbnVlIH1cbiAgICAgICAgICByZXMucHVzaCgoXCJcIiArIChqICsgMSkgKyAocmVwZWF0JDEoXCIgXCIsIDMgLSBTdHJpbmcoaiArIDEpLmxlbmd0aCkpICsgXCJ8ICBcIiArIChsaW5lc1tqXSkpKTtcbiAgICAgICAgICB2YXIgbGluZUxlbmd0aCA9IGxpbmVzW2pdLmxlbmd0aDtcbiAgICAgICAgICBpZiAoaiA9PT0gaSkge1xuICAgICAgICAgICAgLy8gcHVzaCB1bmRlcmxpbmVcbiAgICAgICAgICAgIHZhciBwYWQgPSBzdGFydCAtIChjb3VudCAtIGxpbmVMZW5ndGgpICsgMTtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBlbmQgPiBjb3VudCA/IGxpbmVMZW5ndGggLSBwYWQgOiBlbmQgLSBzdGFydDtcbiAgICAgICAgICAgIHJlcy5wdXNoKFwiICAgfCAgXCIgKyByZXBlYXQkMShcIiBcIiwgcGFkKSArIHJlcGVhdCQxKFwiXlwiLCBsZW5ndGgpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPiBpKSB7XG4gICAgICAgICAgICBpZiAoZW5kID4gY291bnQpIHtcbiAgICAgICAgICAgICAgdmFyIGxlbmd0aCQxID0gTWF0aC5taW4oZW5kIC0gY291bnQsIGxpbmVMZW5ndGgpO1xuICAgICAgICAgICAgICByZXMucHVzaChcIiAgIHwgIFwiICsgcmVwZWF0JDEoXCJeXCIsIGxlbmd0aCQxKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCArPSBsaW5lTGVuZ3RoICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qb2luKCdcXG4nKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwZWF0JDEgKHN0ciwgbikge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICBpZiAobiA+IDApIHtcbiAgICAgIHdoaWxlICh0cnVlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgaWYgKG4gJiAxKSB7IHJlc3VsdCArPSBzdHI7IH1cbiAgICAgICAgbiA+Pj49IDE7XG4gICAgICAgIGlmIChuIDw9IDApIHsgYnJlYWsgfVxuICAgICAgICBzdHIgKz0gc3RyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKiAgKi9cblxuXG5cbiAgZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb24gKGNvZGUsIGVycm9ycykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKGNvZGUpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBlcnJvcnMucHVzaCh7IGVycjogZXJyLCBjb2RlOiBjb2RlIH0pO1xuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb21waWxlVG9GdW5jdGlvbkZuIChjb21waWxlKSB7XG4gICAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBjb21waWxlVG9GdW5jdGlvbnMgKFxuICAgICAgdGVtcGxhdGUsXG4gICAgICBvcHRpb25zLFxuICAgICAgdm1cbiAgICApIHtcbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoe30sIG9wdGlvbnMpO1xuICAgICAgdmFyIHdhcm4kJDEgPSBvcHRpb25zLndhcm4gfHwgd2FybjtcbiAgICAgIGRlbGV0ZSBvcHRpb25zLndhcm47XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAge1xuICAgICAgICAvLyBkZXRlY3QgcG9zc2libGUgQ1NQIHJlc3RyaWN0aW9uXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gMScpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaWYgKGUudG9TdHJpbmcoKS5tYXRjaCgvdW5zYWZlLWV2YWx8Q1NQLykpIHtcbiAgICAgICAgICAgIHdhcm4kJDEoXG4gICAgICAgICAgICAgICdJdCBzZWVtcyB5b3UgYXJlIHVzaW5nIHRoZSBzdGFuZGFsb25lIGJ1aWxkIG9mIFZ1ZS5qcyBpbiBhbiAnICtcbiAgICAgICAgICAgICAgJ2Vudmlyb25tZW50IHdpdGggQ29udGVudCBTZWN1cml0eSBQb2xpY3kgdGhhdCBwcm9oaWJpdHMgdW5zYWZlLWV2YWwuICcgK1xuICAgICAgICAgICAgICAnVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGNhbm5vdCB3b3JrIGluIHRoaXMgZW52aXJvbm1lbnQuIENvbnNpZGVyICcgK1xuICAgICAgICAgICAgICAncmVsYXhpbmcgdGhlIHBvbGljeSB0byBhbGxvdyB1bnNhZmUtZXZhbCBvciBwcmUtY29tcGlsaW5nIHlvdXIgJyArXG4gICAgICAgICAgICAgICd0ZW1wbGF0ZXMgaW50byByZW5kZXIgZnVuY3Rpb25zLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGNhY2hlXG4gICAgICB2YXIga2V5ID0gb3B0aW9ucy5kZWxpbWl0ZXJzXG4gICAgICAgID8gU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVycykgKyB0ZW1wbGF0ZVxuICAgICAgICA6IHRlbXBsYXRlO1xuICAgICAgaWYgKGNhY2hlW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlW2tleV1cbiAgICAgIH1cblxuICAgICAgLy8gY29tcGlsZVxuICAgICAgdmFyIGNvbXBpbGVkID0gY29tcGlsZSh0ZW1wbGF0ZSwgb3B0aW9ucyk7XG5cbiAgICAgIC8vIGNoZWNrIGNvbXBpbGF0aW9uIGVycm9ycy90aXBzXG4gICAgICB7XG4gICAgICAgIGlmIChjb21waWxlZC5lcnJvcnMgJiYgY29tcGlsZWQuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChvcHRpb25zLm91dHB1dFNvdXJjZVJhbmdlKSB7XG4gICAgICAgICAgICBjb21waWxlZC5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB3YXJuJCQxKFxuICAgICAgICAgICAgICAgIFwiRXJyb3IgY29tcGlsaW5nIHRlbXBsYXRlOlxcblxcblwiICsgKGUubXNnKSArIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29kZUZyYW1lKHRlbXBsYXRlLCBlLnN0YXJ0LCBlLmVuZCksXG4gICAgICAgICAgICAgICAgdm1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YXJuJCQxKFxuICAgICAgICAgICAgICBcIkVycm9yIGNvbXBpbGluZyB0ZW1wbGF0ZTpcXG5cXG5cIiArIHRlbXBsYXRlICsgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICAgIGNvbXBpbGVkLmVycm9ycy5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIChcIi0gXCIgKyBlKTsgfSkuam9pbignXFxuJykgKyAnXFxuJyxcbiAgICAgICAgICAgICAgdm1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb21waWxlZC50aXBzICYmIGNvbXBpbGVkLnRpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMub3V0cHV0U291cmNlUmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbXBpbGVkLnRpcHMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gdGlwKGUubXNnLCB2bSk7IH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21waWxlZC50aXBzLmZvckVhY2goZnVuY3Rpb24gKG1zZykgeyByZXR1cm4gdGlwKG1zZywgdm0pOyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdHVybiBjb2RlIGludG8gZnVuY3Rpb25zXG4gICAgICB2YXIgcmVzID0ge307XG4gICAgICB2YXIgZm5HZW5FcnJvcnMgPSBbXTtcbiAgICAgIHJlcy5yZW5kZXIgPSBjcmVhdGVGdW5jdGlvbihjb21waWxlZC5yZW5kZXIsIGZuR2VuRXJyb3JzKTtcbiAgICAgIHJlcy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZC5zdGF0aWNSZW5kZXJGbnMubWFwKGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVGdW5jdGlvbihjb2RlLCBmbkdlbkVycm9ycylcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGVjayBmdW5jdGlvbiBnZW5lcmF0aW9uIGVycm9ycy5cbiAgICAgIC8vIHRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIGlmIHRoZXJlIGlzIGEgYnVnIGluIHRoZSBjb21waWxlciBpdHNlbGYuXG4gICAgICAvLyBtb3N0bHkgZm9yIGNvZGVnZW4gZGV2ZWxvcG1lbnQgdXNlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIHtcbiAgICAgICAgaWYgKCghY29tcGlsZWQuZXJyb3JzIHx8ICFjb21waWxlZC5lcnJvcnMubGVuZ3RoKSAmJiBmbkdlbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICB3YXJuJCQxKFxuICAgICAgICAgICAgXCJGYWlsZWQgdG8gZ2VuZXJhdGUgcmVuZGVyIGZ1bmN0aW9uOlxcblxcblwiICtcbiAgICAgICAgICAgIGZuR2VuRXJyb3JzLm1hcChmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICAgIHZhciBlcnIgPSByZWYuZXJyO1xuICAgICAgICAgICAgICB2YXIgY29kZSA9IHJlZi5jb2RlO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoKGVyci50b1N0cmluZygpKSArIFwiIGluXFxuXFxuXCIgKyBjb2RlICsgXCJcXG5cIik7XG4gICAgICAgICAgfSkuam9pbignXFxuJyksXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChjYWNoZVtrZXldID0gcmVzKVxuICAgIH1cbiAgfVxuXG4gIC8qICAqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbXBpbGVyQ3JlYXRvciAoYmFzZUNvbXBpbGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlQ29tcGlsZXIgKGJhc2VPcHRpb25zKSB7XG4gICAgICBmdW5jdGlvbiBjb21waWxlIChcbiAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICkge1xuICAgICAgICB2YXIgZmluYWxPcHRpb25zID0gT2JqZWN0LmNyZWF0ZShiYXNlT3B0aW9ucyk7XG4gICAgICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICAgICAgdmFyIHRpcHMgPSBbXTtcblxuICAgICAgICB2YXIgd2FybiA9IGZ1bmN0aW9uIChtc2csIHJhbmdlLCB0aXApIHtcbiAgICAgICAgICAodGlwID8gdGlwcyA6IGVycm9ycykucHVzaChtc2cpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMub3V0cHV0U291cmNlUmFuZ2UpIHtcbiAgICAgICAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgdmFyIGxlYWRpbmdTcGFjZUxlbmd0aCA9IHRlbXBsYXRlLm1hdGNoKC9eXFxzKi8pWzBdLmxlbmd0aDtcblxuICAgICAgICAgICAgd2FybiA9IGZ1bmN0aW9uIChtc2csIHJhbmdlLCB0aXApIHtcbiAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7IG1zZzogbXNnIH07XG4gICAgICAgICAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZS5zdGFydCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhLnN0YXJ0ID0gcmFuZ2Uuc3RhcnQgKyBsZWFkaW5nU3BhY2VMZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyYW5nZS5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgZGF0YS5lbmQgPSByYW5nZS5lbmQgKyBsZWFkaW5nU3BhY2VMZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICh0aXAgPyB0aXBzIDogZXJyb3JzKS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gbWVyZ2UgY3VzdG9tIG1vZHVsZXNcbiAgICAgICAgICBpZiAob3B0aW9ucy5tb2R1bGVzKSB7XG4gICAgICAgICAgICBmaW5hbE9wdGlvbnMubW9kdWxlcyA9XG4gICAgICAgICAgICAgIChiYXNlT3B0aW9ucy5tb2R1bGVzIHx8IFtdKS5jb25jYXQob3B0aW9ucy5tb2R1bGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gbWVyZ2UgY3VzdG9tIGRpcmVjdGl2ZXNcbiAgICAgICAgICBpZiAob3B0aW9ucy5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICBmaW5hbE9wdGlvbnMuZGlyZWN0aXZlcyA9IGV4dGVuZChcbiAgICAgICAgICAgICAgT2JqZWN0LmNyZWF0ZShiYXNlT3B0aW9ucy5kaXJlY3RpdmVzIHx8IG51bGwpLFxuICAgICAgICAgICAgICBvcHRpb25zLmRpcmVjdGl2ZXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvcHkgb3RoZXIgb3B0aW9uc1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAnbW9kdWxlcycgJiYga2V5ICE9PSAnZGlyZWN0aXZlcycpIHtcbiAgICAgICAgICAgICAgZmluYWxPcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmluYWxPcHRpb25zLndhcm4gPSB3YXJuO1xuXG4gICAgICAgIHZhciBjb21waWxlZCA9IGJhc2VDb21waWxlKHRlbXBsYXRlLnRyaW0oKSwgZmluYWxPcHRpb25zKTtcbiAgICAgICAge1xuICAgICAgICAgIGRldGVjdEVycm9ycyhjb21waWxlZC5hc3QsIHdhcm4pO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBpbGVkLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgY29tcGlsZWQudGlwcyA9IHRpcHM7XG4gICAgICAgIHJldHVybiBjb21waWxlZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb21waWxlOiBjb21waWxlLFxuICAgICAgICBjb21waWxlVG9GdW5jdGlvbnM6IGNyZWF0ZUNvbXBpbGVUb0Z1bmN0aW9uRm4oY29tcGlsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAgKi9cblxuICAvLyBgY3JlYXRlQ29tcGlsZXJDcmVhdG9yYCBhbGxvd3MgY3JlYXRpbmcgY29tcGlsZXJzIHRoYXQgdXNlIGFsdGVybmF0aXZlXG4gIC8vIHBhcnNlci9vcHRpbWl6ZXIvY29kZWdlbiwgZS5nIHRoZSBTU1Igb3B0aW1pemluZyBjb21waWxlci5cbiAgLy8gSGVyZSB3ZSBqdXN0IGV4cG9ydCBhIGRlZmF1bHQgY29tcGlsZXIgdXNpbmcgdGhlIGRlZmF1bHQgcGFydHMuXG4gIHZhciBjcmVhdGVDb21waWxlciA9IGNyZWF0ZUNvbXBpbGVyQ3JlYXRvcihmdW5jdGlvbiBiYXNlQ29tcGlsZSAoXG4gICAgdGVtcGxhdGUsXG4gICAgb3B0aW9uc1xuICApIHtcbiAgICB2YXIgYXN0ID0gcGFyc2UodGVtcGxhdGUudHJpbSgpLCBvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5vcHRpbWl6ZSAhPT0gZmFsc2UpIHtcbiAgICAgIG9wdGltaXplKGFzdCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHZhciBjb2RlID0gZ2VuZXJhdGUoYXN0LCBvcHRpb25zKTtcbiAgICByZXR1cm4ge1xuICAgICAgYXN0OiBhc3QsXG4gICAgICByZW5kZXI6IGNvZGUucmVuZGVyLFxuICAgICAgc3RhdGljUmVuZGVyRm5zOiBjb2RlLnN0YXRpY1JlbmRlckZuc1xuICAgIH1cbiAgfSk7XG5cbiAgLyogICovXG5cbiAgdmFyIHJlZiQxID0gY3JlYXRlQ29tcGlsZXIoYmFzZU9wdGlvbnMpO1xuICB2YXIgY29tcGlsZSA9IHJlZiQxLmNvbXBpbGU7XG4gIHZhciBjb21waWxlVG9GdW5jdGlvbnMgPSByZWYkMS5jb21waWxlVG9GdW5jdGlvbnM7XG5cbiAgLyogICovXG5cbiAgLy8gY2hlY2sgd2hldGhlciBjdXJyZW50IGJyb3dzZXIgZW5jb2RlcyBhIGNoYXIgaW5zaWRlIGF0dHJpYnV0ZSB2YWx1ZXNcbiAgdmFyIGRpdjtcbiAgZnVuY3Rpb24gZ2V0U2hvdWxkRGVjb2RlIChocmVmKSB7XG4gICAgZGl2ID0gZGl2IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBocmVmID8gXCI8YSBocmVmPVxcXCJcXG5cXFwiLz5cIiA6IFwiPGRpdiBhPVxcXCJcXG5cXFwiLz5cIjtcbiAgICByZXR1cm4gZGl2LmlubmVySFRNTC5pbmRleE9mKCcmIzEwOycpID4gMFxuICB9XG5cbiAgLy8gIzM2NjM6IElFIGVuY29kZXMgbmV3bGluZXMgaW5zaWRlIGF0dHJpYnV0ZSB2YWx1ZXMgd2hpbGUgb3RoZXIgYnJvd3NlcnMgZG9uJ3RcbiAgdmFyIHNob3VsZERlY29kZU5ld2xpbmVzID0gaW5Ccm93c2VyID8gZ2V0U2hvdWxkRGVjb2RlKGZhbHNlKSA6IGZhbHNlO1xuICAvLyAjNjgyODogY2hyb21lIGVuY29kZXMgY29udGVudCBpbiBhW2hyZWZdXG4gIHZhciBzaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWYgPSBpbkJyb3dzZXIgPyBnZXRTaG91bGREZWNvZGUodHJ1ZSkgOiBmYWxzZTtcblxuICAvKiAgKi9cblxuICB2YXIgaWRUb1RlbXBsYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBlbCA9IHF1ZXJ5KGlkKTtcbiAgICByZXR1cm4gZWwgJiYgZWwuaW5uZXJIVE1MXG4gIH0pO1xuXG4gIHZhciBtb3VudCA9IFZ1ZS5wcm90b3R5cGUuJG1vdW50O1xuICBWdWUucHJvdG90eXBlLiRtb3VudCA9IGZ1bmN0aW9uIChcbiAgICBlbCxcbiAgICBoeWRyYXRpbmdcbiAgKSB7XG4gICAgZWwgPSBlbCAmJiBxdWVyeShlbCk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkgfHwgZWwgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgd2FybihcbiAgICAgICAgXCJEbyBub3QgbW91bnQgVnVlIHRvIDxodG1sPiBvciA8Ym9keT4gLSBtb3VudCB0byBub3JtYWwgZWxlbWVudHMgaW5zdGVhZC5cIlxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zO1xuICAgIC8vIHJlc29sdmUgdGVtcGxhdGUvZWwgYW5kIGNvbnZlcnQgdG8gcmVuZGVyIGZ1bmN0aW9uXG4gICAgaWYgKCFvcHRpb25zLnJlbmRlcikge1xuICAgICAgdmFyIHRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZS5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgICAgICAgdGVtcGxhdGUgPSBpZFRvVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAgICAgKFwiVGVtcGxhdGUgZWxlbWVudCBub3QgZm91bmQgb3IgaXMgZW1wdHk6IFwiICsgKG9wdGlvbnMudGVtcGxhdGUpKSxcbiAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRlbXBsYXRlLm5vZGVUeXBlKSB7XG4gICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgd2FybignaW52YWxpZCB0ZW1wbGF0ZSBvcHRpb246JyArIHRlbXBsYXRlLCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbCkge1xuICAgICAgICB0ZW1wbGF0ZSA9IGdldE91dGVySFRNTChlbCk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgICAgIG1hcmsoJ2NvbXBpbGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWYgPSBjb21waWxlVG9GdW5jdGlvbnModGVtcGxhdGUsIHtcbiAgICAgICAgICBvdXRwdXRTb3VyY2VSYW5nZTogXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgc2hvdWxkRGVjb2RlTmV3bGluZXM6IHNob3VsZERlY29kZU5ld2xpbmVzLFxuICAgICAgICAgIHNob3VsZERlY29kZU5ld2xpbmVzRm9ySHJlZjogc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmLFxuICAgICAgICAgIGRlbGltaXRlcnM6IG9wdGlvbnMuZGVsaW1pdGVycyxcbiAgICAgICAgICBjb21tZW50czogb3B0aW9ucy5jb21tZW50c1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdmFyIHJlbmRlciA9IHJlZi5yZW5kZXI7XG4gICAgICAgIHZhciBzdGF0aWNSZW5kZXJGbnMgPSByZWYuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnM7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgICAgIG1hcmsoJ2NvbXBpbGUgZW5kJyk7XG4gICAgICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyAodGhpcy5fbmFtZSkgKyBcIiBjb21waWxlXCIpLCAnY29tcGlsZScsICdjb21waWxlIGVuZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb3VudC5jYWxsKHRoaXMsIGVsLCBoeWRyYXRpbmcpXG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBvdXRlckhUTUwgb2YgZWxlbWVudHMsIHRha2luZyBjYXJlXG4gICAqIG9mIFNWRyBlbGVtZW50cyBpbiBJRSBhcyB3ZWxsLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0T3V0ZXJIVE1MIChlbCkge1xuICAgIGlmIChlbC5vdXRlckhUTUwpIHtcbiAgICAgIHJldHVybiBlbC5vdXRlckhUTUxcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIFZ1ZS5jb21waWxlID0gY29tcGlsZVRvRnVuY3Rpb25zO1xuXG4gIHJldHVybiBWdWU7XG5cbn0pKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuY29uc3QgYmFja2dyb3VuZENvbmZpZyA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgaXNTaG93OiBmYWxzZVxufTtcblxubGV0IGxpc3QgPSBbXTtcblxubGV0IGJhY2tncm91bmQgPSB1bmRlZmluZWQ7XG4oZnVuY3Rpb24gKCkge1xuICBpZiAoYmFja2dyb3VuZCkgcmV0dXJuO1xuICBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNldEJhY2tncm91bmQoYmFja2dyb3VuZCwgYmFja2dyb3VuZENvbmZpZy5iYWNrZ3JvdW5kQ29sb3IpO1xufSkoKTtcblxuZnVuY3Rpb24gc2V0QmFja2dyb3VuZCAoZGl2LCBjb2xvcikge1xuICBkaXYuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICBkaXYuc3R5bGUudG9wID0gJzBweCc7XG4gIGRpdi5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gIGRpdi5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICBkaXYuc3R5bGUuYm90dG9tID0gJzBweCc7XG4gIGRpdi5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgZGl2LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGRpdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuICBkaXYuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG59XG5cbmZ1bmN0aW9uIHNob3dCYWNrZ3JvdW5kICgpIHtcbiAgaWYgKGxpc3QubGVuZ3RoIDwgMSkgcmV0dXJuOyAvLyDsl7TroKTsnojripQgZGlhbG9nIOyXhuycvOuptCByZXR1cm5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZVsnb3ZlcmZsb3cnXSA9ICdoaWRkZW4nOyAvLyBwcmV2ZW50IHNjcm9sbFxufVxuXG5mdW5jdGlvbiBkaXNtaXNzQmFja2dyb3VuZCAoKSB7XG4gIGlmIChsaXN0Lmxlbmd0aCA+IDApIHJldHVybjsgLy8g7Je066Ck7J6I64qUIGRpYWxvZyDsnojsnLzrqbQgcmV0dXJuXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYmFja2dyb3VuZCk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGVbJ292ZXJmbG93J10gPSAnYXV0byc7IC8vIHNjcm9sbGluZyBhdmFpbGFibGVcbn1cblxuY29uc3QgbWFuYWdlciA9IHtcbiAgc2hvdyAoeyB2aWV3LCBzdG9yZSwgcHJvcHMgfSkge1xuICAgIC8vIHZpZXcg6rCAIHZ1ZSBjb21wb25lbnQg7J247KeAIO2ZleyduFxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuICAgICAgLyoqIGJhY2tnb3J1bmQg7IOd7ISxICovXG4gICAgICBsZXQgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzZXRCYWNrZ3JvdW5kKGRpYWxvZ0NvbnRhaW5lciwgJycpO1xuXG4gICAgICAvKiogZGlhbG9nIGluc3RhbmNlIOyDneyEsSAqL1xuICAgICAgY29uc3QgQ29uc3RydWN0b3IgPSBWdWUuZXh0ZW5kKHZpZXcpO1xuICAgICAgbGV0IGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKHtcbiAgICAgICAgZWw6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBwcm9wc0RhdGE6IHByb3BzLFxuICAgICAgICBzdG9yZSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIGRpc21pc3MgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgICAgICAgbGV0IGlkeCA9IGxpc3QuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgICAgICAgbGlzdC5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLnJlbW92ZUNoaWxkKGRpYWxvZ0NvbnRhaW5lcik7XG4gICAgICAgICAgZGlzbWlzc0JhY2tncm91bmQoKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxpc3QucHVzaChpbnN0YW5jZSk7XG5cbiAgICAgIGRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnN0YW5jZS4kZWwpO1xuICAgICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChkaWFsb2dDb250YWluZXIpO1xuICAgICAgc2hvd0JhY2tncm91bmQoKTtcbiAgICB9KTtcblxuICB9LFxuICByZW1vdmVBbGxEaWFsb2cgKCkge1xuICAgIGZvciAobGV0IGkgb2YgbGlzdCkgaS5kaXNtaXNzKCk7XG4gICAgbGlzdCA9IFtdO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IG1hbmFnZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9