/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 568:
/***/ (function(module) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ProTabs": function() { return /* reexport */ ProTabs; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./src/utils/bem.js
/**
 * bem模式（block,element,modifier）
 * -中划线连接单词，可以是块元素也可以是子元素
 * __ 双下划线 连接块与块的子元素
 * -- 双中划线 描述一个块或者块的子元素的一种状态
 * is is-关键字结合使用时，指示模块特定的状态类；一般用于js控制样式时,css命名用is-开头 例如 is-open、is-disabled
 */
var createBEM = function createBEM(name) {
  return function (el, mods) {
    var resultEl = el;
    var resultMods = mods;

    if (el && typeof el !== 'string') {
      resultMods = el;
      resultEl = '';
    }

    resultEl = resultEl ? "".concat(name, "__").concat(resultEl) : name;
    return "".concat(resultEl).concat(gen(resultEl, resultMods));
  };
};
var gen = function gen(name, mods) {
  if (!mods) return '';
  if (typeof mods === 'string') return " ".concat(name, "--").concat(mods);
  if (Array.isArray(mods)) return mods.reduce(function (ret, item) {
    return ret + gen(name, item);
  }, '');
  return Object.keys(mods).reduce(function (ret, key) {
    return ret + (mods[key] ? gen(name, key) : '');
  }, '');
};
;// CONCATENATED MODULE: ./src/mixins/slotsMixin.js
/**
 * 兼容老版本写法，获取slot
 */
var SlotsMixin = {
  methods: {
    slots: function slots() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      var props = arguments.length > 1 ? arguments[1] : undefined;
      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
};
;// CONCATENATED MODULE: ./src/utils/create.js
 // import { camelize } from './format'

 // 统一slots和scopedSlots

function unifySlots(context) {
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {}; // (2.6.0+)作用域插槽对象，低版本vue: data.scopedSlots

  var slots = context.slots(); // 返回了包含所有插槽的对象

  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      }; // scopedSlots以函数形式暴露普通插槽（兼容低版本）

    }
  });
  return scopedSlots;
} // 函数转化为函数式组件

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    } // context.props: 所有prop的对象

  };
} // 全局注册：优先调用组件的install
// function install (Vue) {
//   const { name } = this
//   Vue.component(name, this)
//   Vue.component(camelize(`-${name}`), this)
// }
// 预设组件处理，混入获取slot兼容写法，定义组件install方法，这里的name为pro-xxx


function createComponent(name) {
  return function (sfc) {
    if (isFunction(sfc)) {
      sfc = transformFunctionComponent(sfc); // 函数转化为函数式组件
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(SlotsMixin);
    }

    sfc.name = name;
    return sfc;
  };
}
;// CONCATENATED MODULE: ./src/utils/index.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}



/**
 * 命名空间
 */

var createNamespace = function createNamespace(name) {
  var proName = 'pro-' + name;
  return [createComponent(proName), createBEM(proName)];
};
var inBrowser = typeof window !== 'undefined';
function noop() {}
function isDef(val) {
  return val !== undefined && val !== null;
}
function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function isFunction(val) {
  return typeof val === 'function';
}
function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}
;// CONCATENATED MODULE: ./src/utils/constant.js
// color
var RED = '#ee0a24'; // border

var BORDER = 'pro-hairline';
var BORDER_TOP = "".concat(BORDER, "--top");
var BORDER_LEFT = "".concat(BORDER, "--left");
var BORDER_BOTTOM = "".concat(BORDER, "--bottom");
var BORDER_SURROUND = "".concat(BORDER, "--surround");
var BORDER_TOP_BOTTOM = "".concat(BORDER, "--top-bottom");
var BORDER_UNSET_TOP_BOTTOM = "".concat(BORDER, "-unset--top-bottom");
;// CONCATENATED MODULE: ./src/utils/raf.js
// requestAnimationFrame API
var root = window;
var prev = Date.now();
var iRaf = root.requestAnimationFrame || fallback;
function raf(fn) {
  return iRaf.call(root, fn);
} // 降级实现，消除时间差

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

var iCancel = root.cancelAnimationFrame || root.clearTimeout;
function cancelRaf(id) {
  iCancel.call(root, id);
}
;// CONCATENATED MODULE: ./src/utils/scroll.js


function isWindow(val) {
  return val === window;
}
/**
 * 获取最近的滚动容器 || root
 */


function getScroller(el) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var overflowScrollReg = /scroll|auto/i;
  var node = el;

  while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== root) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      return node;
    }

    node = node.parentNode;
  }

  return root;
} // 元素到视窗顶部距离 + 容器scrollTop/页面scrollTop

function getElementTop(el, scroller) {
  if (isWindow(el)) return 0;
  var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}
function getScrollTop(el) {
  var top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset; // iOS滚动回弹兼容

  return Math.max(top, 0);
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function getVisibleHeight(el) {
  if (isWindow(el)) return el.innerHeight;
  return el.getBoundingClientRect().height;
}
function scrollLeftTo(scroller, to, duration) {
  var count = 0;
  var from = scroller.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16); // 按1s 60帧算，1帧16毫秒，总帧数
  // raf动画

  function animate() {
    scroller.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      raf(animate);
    }
  }

  animate();
}
function scrollTopTo(scroller, to, duration, callback) {
  var current = getScrollTop(scroller);
  var isDown = current < to; // 向上滚动展示下部内容

  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16); // 按1s 60帧算，1帧16毫秒，共frames帧

  var step = (to - current) / frames; // 每帧步长

  function animate() {
    current += step; // 临界点

    if (isDown && current > to || !isDown && current < to) {
      current = to;
    }

    setScrollTop(scroller, current); // 循环/结束

    if (isDown && current < to || !isDown && current > to) {
      raf(animate);
    } else if (callback) {
      raf(callback);
    }
  }

  animate();
} // 设置scrollTop

function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
} // 元素到视窗顶部的距离

function getVisibleTop(el) {
  if (isWindow(el)) {
    return 0;
  }

  return el.getBoundingClientRect().top;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}
;// CONCATENATED MODULE: ./src/utils/interceptor.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}


/**
 * 回调拦截
 * @param {function} interceptor -拦截函数
 * @param {function} done -回调
 * @param {array} args -拦截函数入参
 */

function callInterceptor(options) {
  var interceptor = options.interceptor,
      args = options.args,
      done = options.done;

  if (interceptor) {
    var returnVal = interceptor.apply(void 0, _toConsumableArray(args));

    if (isPromise(returnVal)) {
      returnVal.then(function (value) {
        value && done();
      }).catch(noop);
    } else if (returnVal) {
      done();
    }
  } else {
    done();
  }
}
;// CONCATENATED MODULE: ./src/utils/format.js

function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumeric(value) ? "".concat(value, "px") : value;
}
function unitToPx(value) {
  if (typeof value === 'number') return value;

  if (inBrowser) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }

    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }

    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}
var rootFontSize;

function getRootFontSize() {
  if (!rootFontSize) {
    var doc = document.documentElement;
    var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value) {
  value = value.replace(/vw/g, '');
  return +value * window.innerWidth / 100;
}

function convertVh(value) {
  value = value.replace(/vh/g, '');
  return +value * window.innerHeight / 100;
}

var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
;// CONCATENATED MODULE: ./src/utils/router.js
// 是否从当前路由导航到当前路由
function isRedundantNavigation(err) {
  return err.name === 'NavigationDuplicated' || // 兼容 vue-router@3.3
  err.message && err.message.indexOf('redundant navigation') !== -1;
} // 兼容vue-router


function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    var promise = router[replace ? 'replace' : 'push'](to);

    if (promise && promise.catch) {
      promise.catch(function (err) {
        if (err && !isRedundantNavigation(err)) {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
} // item组件prop

var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};
;// CONCATENATED MODULE: ./src/utils/event.js
// 这里检验当前环境的addEventListener是否支持passive属性,监听test-passive时，读取opts的passive属性，触发get, supportsPassive设置为true，addEventListener中第三个参数布尔值表示触发回调的阶段：true捕获，默认false为冒泡；也可以用obj来表示，capture表示触发阶段，passive: true是告诉浏览器监听器内部不会调用preventDefault来阻止默认行为，以便浏览器据此优化页面性能（滑动），目前passive仅影响mousewheel/touch相关事件，如果passive设置为true但是又调用了preventDefault会有警告⚠️但浏览器不会执行 preventDefault
// eslint-disable-next-line import/no-mutable-exports
var supportsPassive = false;

try {
  var opts = {};
  Object.defineProperty(opts, 'passive', {
    // eslint-disable-next-line getter-return
    get: function get() {
      /* istanbul ignore next */
      supportsPassive = true;
    }
  });
  window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
} catch (e) {}
/**
 * 绑定事件，默认冒泡
 */


function on(target, event, handler) {
  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  target.addEventListener(event, handler, supportsPassive ? {
    capture: false,
    passive: passive
  } : false);
}
/**
 * 解绑事件
 */

function off(target, event, handler) {
  target.removeEventListener(event, handler);
}
;// CONCATENATED MODULE: ./src/utils/style.js
function isHidden(el) {
  var style = window.getComputedStyle(el);
  var hidden = style.display === 'none'; // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed

  var parentHidden = el.offsetParent === null && style.position !== 'fixed';
  return hidden || parentHidden;
}
;// CONCATENATED MODULE: ./src/utils/vnodes.js
function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.componentInstance) {
        // 扁平化当前组件内部子组件节点：index组件内引用的Header和Footer组件
        traverse(vnode.componentInstance.$children.map(function (item) {
          return item.$vnode;
        }));
      }

      if (vnode.children) {
        // 当前组件有父子组件关联关系混入：relationMixin
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
} // 根据虚拟dom顺序进行排序


function sortChildren(children, parent) {
  var componentOptions = parent.$vnode.componentOptions;
  if (!componentOptions || !componentOptions.children) return; // 扁平化vnode外部子组件(Tab组件)节点：<Tabs><Tab></Tab></Tabs>

  var vnodes = flattenVNodes(componentOptions.children);
  children.sort(function (a, b) {
    return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
  });
}
;// CONCATENATED MODULE: ./src/mixins/relationMixin.js
function relationMixin_toConsumableArray(arr) {
  return relationMixin_arrayWithoutHoles(arr) || relationMixin_iterableToArray(arr) || relationMixin_unsupportedIterableToArray(arr) || relationMixin_nonIterableSpread();
}

function relationMixin_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function relationMixin_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return relationMixin_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return relationMixin_arrayLikeToArray(o, minLen);
}

function relationMixin_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function relationMixin_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return relationMixin_arrayLikeToArray(arr);
}

function relationMixin_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


function ChildrenMixin(_parent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var indexKey = options.indexKey || 'index';
  return {
    inject: _defineProperty({}, _parent, {
      default: null
    }),
    computed: _defineProperty({
      parent: function parent() {
        // 定义父组件
        return this.disableBindRelation ? null : this[_parent];
      }
    }, indexKey, function () {
      this.bindRelation();
      return this.parent ? this.parent.children.indexOf(this) : null;
    }),
    watch: {
      disableBindRelation: function disableBindRelation(val) {
        !val && this.bindRelation();
      }
    },
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this; // 销毁前更新parent.children


      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      // 关联父组件
      bindRelation: function bindRelation() {
        // 无父组件 || 已关联 跳过
        if (!this.parent || this.parent.children.indexOf(this) !== -1) return;
        var children = [].concat(relationMixin_toConsumableArray(this.parent.children), [this]); // 各子组件关联时机不定，需按虚拟dom顺序重新排序

        sortChildren(children, this.parent);
        this.parent.children = children;
      }
    }
  };
}
function ParentMixin(parent) {
  return {
    provide: function provide() {
      return _defineProperty({}, parent, this);
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}
;// CONCATENATED MODULE: ./src/mixins/bindEventMixin.js
/**
 * Bind event when mounted or activated
 */

var uid = 0;
function BindEventMixin(handler) {
  var key = "binded_".concat(uid++);

  function bind() {
    if (!this[key]) {
      handler.call(this, on, true);
      this[key] = true;
    }
  }

  function unbind() {
    if (this[key]) {
      handler.call(this, off, false);
      this[key] = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}
// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__(568);
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);
;// CONCATENATED MODULE: ./src/utils/functional.js
var inheritKey = ['ref', 'key', 'style', 'class', 'attrs', 'refInFor', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // nativeOn仅用于组件，这里需替换为on用于元素
// 子组件根元素继承父组件中传递给子组件的各属性&事件

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      // 将组件所有nativeOn事件保存到on
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {}); // 上面继承了所有nativeOn事件，这里继续继承自定义事件

  if (inheritListeners) {
    result.on = result.on || {};
    Object.assign(result.on, context.data.on);
  }

  return result;
}
;// CONCATENATED MODULE: ./packages/Basic/src/ProTabs/src/comp/Info.js


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Info_unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function Info_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Info_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Info_arrayLikeToArray(o, minLen);
}

function Info_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
} // Utils





var _createNamespace = createNamespace('info'),
    _createNamespace2 = _slicedToArray(_createNamespace, 2),
    Info_createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

function Info(h, props, slots, ctx) {
  var dot = props.dot,
      info = props.info;
  var showInfo = isDef(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return (// {...obj}将作为createElement第二个参数，即数据对象; 将本组件的可继承的数据对象传递给子组件，例如class,style,etc.
    h("div", helper_default()([{
      "class": bem({
        dot: dot
      })
    }, inherit(ctx, true)]), [dot ? '' : props.info])
  );
}

Info.props = {
  dot: Boolean,
  // 是否在标题右上角显示小红点
  info: [Number, String] // 徽标

};
/* harmony default export */ var comp_Info = (Info_createComponent(Info));
;// CONCATENATED MODULE: ./packages/Basic/src/ProTabs/src/comp/Title.js
function Title_slicedToArray(arr, i) {
  return Title_arrayWithHoles(arr) || Title_iterableToArrayLimit(arr, i) || Title_unsupportedIterableToArray(arr, i) || Title_nonIterableRest();
}

function Title_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function Title_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Title_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Title_arrayLikeToArray(o, minLen);
}

function Title_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function Title_iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function Title_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}




var Title_createNamespace = createNamespace('tab'),
    Title_createNamespace2 = Title_slicedToArray(Title_createNamespace, 2),
    Title_createComponent = Title_createNamespace2[0],
    Title_bem = Title_createNamespace2[1];

/* harmony default export */ var Title = (Title_createComponent({
  props: {
    dot: Boolean,
    // 是否在标题右上角显示小红点
    type: String,
    // 样式风格类型，可选值为 card | line
    info: [Number, String],
    // 徽标
    color: String,
    // 标签主题色
    title: String,
    // 标题
    isActive: Boolean,
    // 是否当前标题
    disabled: Boolean,
    // 是否禁用
    scrollable: Boolean,
    // 是否可滚动
    activeColor: String,
    // 标题选中态颜色
    inactiveColor: String // 标题默认态颜色

  },
  computed: {
    style: function style() {
      var style = {};
      var color = this.color,
          isActive = this.isActive;
      var isCard = this.type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? this.activeColor : this.inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      return style;
    }
  },
  methods: {
    onClick: function onClick() {
      // 触发组件onClick事件
      this.$emit('click');
    },
    genText: function genText() {
      var h = this.$createElement; // 标题文案+徽标

      var Text = h("span", {
        "class": Title_bem('text', {
          ellipsis: !this.scrollable
        })
      }, [this.slots() || this.title]);

      if (this.dot || isDef(this.info) && this.info !== '') {
        return h("span", {
          "class": Title_bem('text-wrapper')
        }, [Text, h(comp_Info, {
          "attrs": {
            "dot": this.dot,
            "info": this.info
          }
        })]);
      }

      return Text;
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": [Title_bem({
        active: this.isActive,
        disabled: this.disabled
      })],
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [this.genText()]);
  }
}));
;// CONCATENATED MODULE: ./src/mixins/touchMixin.js

var MIN_DISTANCE = 10; // 最低幅度

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = {
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      /**
       * clientX: 鼠标指针相对于浏览器页面（或客户区）的水平坐标
       */
      // 兼容safari弹性回弹，clientX为负的情景

      this.deltaX = touch.clientX < 0 ? 0 : touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = ''; // 滑动方向

      this.deltaX = 0; // 水平坐标变化值

      this.deltaY = 0; // 垂直坐标变化值

      this.offsetX = 0; // 水平坐标变化净值

      this.offsetY = 0; // 垂直坐标变化净值
    },
    // avoid Vue 2.6 event bubble issues by manually binding events
    // https://github.com/youzan/vant/issues/3015
    bindTouchEvent: function bindTouchEvent(el) {
      var onTouchStart = this.onTouchStart,
          onTouchMove = this.onTouchMove,
          onTouchEnd = this.onTouchEnd;
      on(el, 'touchstart', onTouchStart);
      on(el, 'touchmove', onTouchMove);

      if (onTouchEnd) {
        on(el, 'touchend', onTouchEnd);
        on(el, 'touchcancel', onTouchEnd);
      }
    }
  }
};
;// CONCATENATED MODULE: ./packages/Basic/src/ProTabs/src/comp/Content.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      Content_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function Content_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function Content_slicedToArray(arr, i) {
  return Content_arrayWithHoles(arr) || Content_iterableToArrayLimit(arr, i) || Content_unsupportedIterableToArray(arr, i) || Content_nonIterableRest();
}

function Content_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function Content_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Content_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Content_arrayLikeToArray(o, minLen);
}

function Content_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function Content_iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function Content_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}




var Content_createNamespace = createNamespace('tabs'),
    Content_createNamespace2 = Content_slicedToArray(Content_createNamespace, 2),
    Content_createComponent = Content_createNamespace2[0],
    Content_bem = Content_createNamespace2[1];

var MIN_SWIPE_DISTANCE = 50; // 滑动切换临界值

/* harmony default export */ var Content = (Content_createComponent({
  mixins: [TouchMixin],
  props: {
    count: Number,
    // item数量
    duration: [Number, String],
    // 动画时间
    animated: Boolean,
    // // 是否开启切换标签内容时的转场动画
    swipeable: Boolean,
    // 是否开启手势滑动切换
    currentIndex: Number
  },
  computed: {
    style: function style() {
      if (this.animated) {
        return {
          transform: "translate3d(".concat(-1 * this.currentIndex * 100, "%, 0, 0)"),
          transitionDuration: "".concat(this.duration, "s")
        };
      }
    },
    listeners: function listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },
  methods: {
    // 监听 touch end，改变currentIndex
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          currentIndex = this.currentIndex;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },
    genChildren: function genChildren() {
      var h = this.$createElement;

      if (this.animated) {
        return h("div", {
          "class": Content_bem('track'),
          "style": this.style
        }, [this.slots()]);
      }

      return this.slots();
    }
  },
  render: function render() {
    var h = arguments[0]; // {...obj}为jsx语法，obj会被编译成createElement的第二参数数据对象

    return h("div", {
      "class": Content_bem('content', {
        animated: this.animated
      }),
      "on": _objectSpread({}, this.listeners)
    }, [this.genChildren()]);
  }
}));
;// CONCATENATED MODULE: ./packages/Basic/src/ProTabs/src/comp/Sticky.js
function Sticky_slicedToArray(arr, i) {
  return Sticky_arrayWithHoles(arr) || Sticky_iterableToArrayLimit(arr, i) || Sticky_unsupportedIterableToArray(arr, i) || Sticky_nonIterableRest();
}

function Sticky_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function Sticky_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Sticky_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Sticky_arrayLikeToArray(o, minLen);
}

function Sticky_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function Sticky_iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function Sticky_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}







var Sticky_createNamespace = createNamespace('sticky'),
    Sticky_createNamespace2 = Sticky_slicedToArray(Sticky_createNamespace, 2),
    Sticky_createComponent = Sticky_createNamespace2[0],
    Sticky_bem = Sticky_createNamespace2[1];

/* harmony default export */ var Sticky = (Sticky_createComponent({
  mixins: [BindEventMixin(function (bind, isBind) {
    if (!this.scroller) {
      this.scroller = getScroller(this.$el);
    }

    if (this.observer) {
      // 监听元素可见性
      var method = isBind ? 'observe' : 'unobserve';
      this.observer[method](this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll, true);
    this.onScroll();
  })],
  props: {
    zIndex: [Number, String],
    container: null,
    offsetTop: {
      type: [Number, String],
      default: 0
    }
  },
  data: function data() {
    return {
      fixed: false,
      height: 0,
      transform: 0
    };
  },
  computed: {
    offsetTopPx: function offsetTopPx() {
      return unitToPx(this.offsetTop);
    },
    style: function style() {
      if (!this.fixed) {
        return;
      }

      var style = {};

      if (isDef(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTopPx && this.fixed) {
        style.top = "".concat(this.offsetTopPx, "px");
      }

      if (this.transform) {
        style.transform = "translate3d(0, ".concat(this.transform, "px, 0)");
      }

      return style;
    }
  },
  watch: {
    fixed: function fixed(isFixed) {
      this.$emit('change', isFixed);
    }
  },
  created: function created() {
    var _this = this; // 元素是否可见api，兼容性：https://caniuse.com/?search=IntersectionObserver


    if (window.IntersectionObserver) {
      this.observer = new IntersectionObserver(function (entries) {
        // 这里回调触发时机为配置项中的thresholds阈值，默认[0]即可见比例超过0触发一次
        // intersectionRatio:目标元素的可见比例
        if (entries[0].intersectionRatio > 0) {
          _this.onScroll();
        }
      }, // root: 监视元素在root(默认视口)区域的可见性变化
      {
        root: document.body
      });
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this2 = this;

      if (isHidden(this.$el)) {
        return;
      }

      this.height = this.$el.offsetHeight; // 当前组件高度（包括border）

      var container = this.container,
          offsetTopPx = this.offsetTopPx; // 组件的容器，粘性定位距顶部距离

      var scrollTop = getScrollTop(window); // 当前页面的scrollTop

      var topToPageTop = getElementTop(this.$el); // 组件元素顶部到页面顶部距离

      var emitScrollEvent = function emitScrollEvent() {
        _this2.$emit('scroll', {
          scrollTop: scrollTop,
          isFixed: _this2.fixed
        });
      }; // The sticky component should be kept inside the container element


      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight; // 组件元素顶部到页面顶部距离+容器container高度
        // 区域吸顶：scrollTop增加到超过临界

        if (scrollTop + offsetTopPx + this.height > bottomToPageTop) {
          var distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            // header跟随上移
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTopPx);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      } // 一般吸顶：topToPageTop和offsetTopPx固定，scrollTop不断变大


      if (scrollTop + offsetTopPx > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    }
  },
  render: function render() {
    var h = arguments[0];
    var fixed = this.fixed;
    var style = {
      height: fixed ? "".concat(this.height, "px") : null
    };
    return h("div", {
      "style": style
    }, [h("div", {
      "class": Sticky_bem({
        fixed: fixed
      }),
      "style": this.style
    }, [this.slots()])]);
  }
}));
;// CONCATENATED MODULE: ./packages/Basic/src/ProTabs/src/pro-tabs.js
function pro_tabs_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function pro_tabs_slicedToArray(arr, i) {
  return pro_tabs_arrayWithHoles(arr) || pro_tabs_iterableToArrayLimit(arr, i) || pro_tabs_unsupportedIterableToArray(arr, i) || pro_tabs_nonIterableRest();
}

function pro_tabs_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function pro_tabs_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return pro_tabs_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pro_tabs_arrayLikeToArray(o, minLen);
}

function pro_tabs_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function pro_tabs_iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function pro_tabs_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}








 // Mixins


 // bind：target.addEventListener
// Components






var pro_tabs_createNamespace = createNamespace('tabs'),
    pro_tabs_createNamespace2 = pro_tabs_slicedToArray(pro_tabs_createNamespace, 2),
    pro_tabs_createComponent = pro_tabs_createNamespace2[0],
    pro_tabs_bem = pro_tabs_createNamespace2[1];

/* harmony default export */ var pro_tabs = (pro_tabs_createComponent({
  mixins: [ParentMixin('tabs'), // 将本组件provide出去tabs，定义children为空数组
  BindEventMixin(function (bind, isBind) {
    if (!this.scroller) {
      this.scroller = getScroller(this.$el); // 获取最近的滚动容器 || window
    }

    bind(window, 'resize', this.resize, true); // true为告诉浏览器不会调用preventDefault以优化性能

    if (this.scrollspy) {
      // 开启了滚动导航
      bind(this.scroller, 'scroll', this.onScroll, true);
    }
  })],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    // 标签主题色
    border: Boolean,
    // 是否显示标签栏外边框，仅在 type="line" 时有效
    sticky: Boolean,
    // 是否使用粘性定位布局
    animated: Boolean,
    // 是否开启切换标签内容时的转场动画
    swipeable: Boolean,
    // 是否开启手势滑动切换
    scrollspy: Boolean,
    // 是否开启滚动导航
    background: String,
    // 标签栏背景色
    lineWidth: [Number, String],
    // 底部条宽度，默认单位 px
    lineHeight: [Number, String],
    // 底部条高度，默认单位 px
    beforeChange: Function,
    // 切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise
    titleActiveColor: String,
    // 标题选中态颜色
    titleInactiveColor: String,
    // 标题默认态颜色
    type: {
      // 样式风格类型，可选值为 card
      type: String,
      default: 'line'
    },
    active: {
      // v-model
      type: [Number, String],
      default: 0
    },
    ellipsis: {
      // 是否省略过长的标题文字
      type: Boolean,
      default: true
    },
    duration: {
      // 动画时间，单位秒
      type: [Number, String],
      default: 0.3
    },
    offsetTop: {
      // 粘性定位布局下与顶部的最小距离，支持 px vw vh rem 单位，默认 px
      type: [Number, String],
      default: 0
    },
    lazyRender: {
      // 是否开启延迟渲染（首次切换到标签时才触发内容渲染）
      type: Boolean,
      default: true
    },
    swipeThreshold: {
      // 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动
      type: [Number, String],
      default: 5
    }
  },
  data: function data() {
    return {
      position: '',
      currentIndex: null,
      // 当前激活的tab index, 对应children在父组件中的序号
      lineStyle: {
        backgroundColor: this.color
      }
    };
  },
  computed: {
    scrollable: function scrollable() {
      // 超出容器是否可滚动
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },
    currentName: function currentName() {
      var activeTab = this.children[this.currentIndex]; // 当前激活的children组件

      if (activeTab) {
        return activeTab.computedName;
      }
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },
    scrollOffset: function scrollOffset() {
      // 粘性布局顶部预留间距+tab栏高度，用于计算滚动相关数据
      if (this.sticky) return this.offsetTopPx + this.tabHeight;
      return 0;
    },
    offsetTopPx: function offsetTopPx() {
      // 粘性布局顶部预留间距
      return unitToPx(this.offsetTop);
    }
  },
  watch: {
    color: 'setLine',
    active: function active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },
    children: function children() {
      var _this = this; // children序列可能改变，重设当前激活的tab etc.


      this.setCurrentIndexByName(this.active);
      this.setLine();
      this.$nextTick(function () {
        _this.scrollIntoView(true);
      });
    },

    /**
     * 监听currentIndex改变
     * 常规：滚动标签栏&底部条，针对吸顶&非滚动导航 修正顶部距离，设置root scrollTop为当前组件到滚动容器顶部距离 + 当前root scrollTop - 吸顶预留间距
     * 滚动导航：滚动标签栏&底部条，title点击时通过scrollToCurrentContent滚动页面内容
     */
    currentIndex: function currentIndex() {
      this.scrollIntoView(); // 标签栏滚动

      this.setLine(); // 底部条设置

      if (this.stickyFixed && !this.scrollspy) {
        // 非滚动导航&吸顶：设置根scrollTop、预留offsetTop
        setRootScrollTop(Math.ceil(getElementTop(this.$el) - this.offsetTopPx));
      }
    },
    scrollspy: function scrollspy(val) {
      if (val) {
        on(this.scroller, 'scroll', this.onScroll, true); // true为告诉浏览器不会调用preventDefault以优化性能
      } else {
        off(this.scroller, 'scroll', this.onScroll);
      }
    }
  },
  mounted: function mounted() {
    this.init();
  },
  activated: function activated() {
    this.init();
    this.setLine();
  },
  methods: {
    init: function init() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.inited = true;
        _this2.tabHeight = getVisibleHeight(_this2.$refs.wrap); // 标签栏高度

        _this2.scrollIntoView(true);
      });
    },
    resize: function resize() {
      this.setLine();
    },
    // 重置导航条nav line位置&&样式
    setLine: function setLine() {
      var _this3 = this;

      var shouldAnimate = this.inited; // 首次渲染line无动画

      this.$nextTick(function () {
        var titles = _this3.$refs.titles;

        if (!titles || !titles[_this3.currentIndex] || _this3.type !== 'line' || isHidden(_this3.$el)) {
          return;
        }

        var title = titles[_this3.currentIndex].$el;
        var lineWidth = _this3.lineWidth,
            lineHeight = _this3.lineHeight;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: addUnit(lineWidth),
          backgroundColor: _this3.color,
          transform: "translateX(".concat(left, "px) translateX(-50%)")
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = "".concat(_this3.duration, "s");
        }

        if (isDef(lineHeight)) {
          var height = addUnit(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        _this3.lineStyle = lineStyle;
      });
    },
    // 根据name找出子组件序号，设置currentIndex
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var matched = this.children.filter(function (tab) {
        return tab.computedName === name;
      });
      var defaultIndex = (this.children[0] || {}).index || 0; // children.index: 该子组件在父组件中的排序，见relationMixin混入

      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },
    // 滚动导航开启后的滚动回调：即时获取&设置当前index，通过watch触发标签栏&底部条的滚动
    onScroll: function onScroll() {
      // 点击title的raf动画结束：点击title时滑动无效
      if (this.scrollspy && !this.lockScroll) {
        var index = this.getCurrentIndexOnScroll();
        this.setCurrentIndex(index);
      }
    },
    // 滚动时获取当前展示的index
    getCurrentIndexOnScroll: function getCurrentIndexOnScroll() {
      var children = this.children;

      for (var index = 0; index < children.length; index++) {
        var top = getVisibleTop(children[index].$el); // 元素到视窗顶部的距离

        if (top > this.scrollOffset) {
          return index === 0 ? 0 : index - 1;
        }
      }

      return children.length - 1;
    },
    // 设置最近可用的index，同步v-model；标签&底部条滚动通过对currentIndex的watch触发
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      var newIndex = this.findAvailableTab(currentIndex);
      if (!isDef(newIndex)) return;
      var newTab = this.children[newIndex];
      var newName = newTab.computedName;
      var shouldEmitChange = this.currentIndex !== null; // 初始化不emitChange

      this.currentIndex = newIndex;

      if (newName !== this.active) {
        this.$emit('input', newName); // v-model同步

        shouldEmitChange && this.$emit('change', newName, newTab.title);
      }
    },
    // 返回最近的可用的index，当前禁用时继续--/++
    findAvailableTab: function findAvailableTab(index) {
      var diff = index < this.currentIndex ? -1 : 1;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    onSticktScroll: function onSticktScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params); // 滚动时触发，仅在 sticky 模式下生效
    },

    /**
     * @exposed-api
     * 滚动到指定的标签页，在滚动导航模式下可用
     */
    scrollTo: function scrollTo(name) {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.setCurrentIndexByName(name);

        _this4.scrollToCurrentContent(true);
      });
    },
    // 滚动导航模式下：滚动内容到视图，用于点击标题
    scrollToCurrentContent: function scrollToCurrentContent() {
      var _this5 = this;

      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.scrollspy) return;
      var target = this.children[this.currentIndex];
      var el = target === null || target === void 0 ? void 0 : target.$el;
      if (!el) return;
      var to = getElementTop(el, this.scroller) - this.scrollOffset;
      this.lockScroll = true;
      scrollTopTo(this.scroller, to, immediate ? 0 : +this.duration, function () {
        _this5.lockScroll = false;
      });
    },
    // 标题点击
    onClick: function onClick(item, index) {
      var _this6 = this;

      var _this$children$index = this.children[index],
          title = _this$children$index.title,
          disabled = _this$children$index.disabled,
          computedName = _this$children$index.computedName;

      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        callInterceptor({
          interceptor: this.beforeChange,
          args: [computedName],
          done: function done() {
            _this6.setCurrentIndex(index);

            _this6.scrollToCurrentContent();
          }
        });
        this.$emit('click', computedName, title); // 跳转item.prop.to(&&router) || item.prop.url

        route(item.$router, item);
      }
    },
    // 标签栏滚动：计算滚动距离，raf帧动画模拟
    scrollIntoView: function scrollIntoView(immediate) {
      var titles = this.$refs.titles;
      if (!this.scrollable || !titles || !titles[this.currentIndex]) return;
      var nav = this.$refs.nav;
      var title = titles[this.currentIndex].$el; // title.offsetLeft + title.offsetWidth/2 为屏中到最左侧，再减半屏即滚动后scrollLeft的总长，nav.scrollLeft为原值，差值即滚动长度

      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      scrollLeftTo(nav, to, immediate ? 0 : +this.duration);
    }
  },
  render: function render(h) {
    var _this7 = this;

    var type = this.type,
        animated = this.animated,
        scrollable = this.scrollable;
    var Nav = this.children.map(function (item, index) {
      var _item$badge;

      return h(Title, {
        "ref": "titles",
        "refInFor": true,
        "attrs": {
          "type": type,
          "dot": item.dot,
          "info": (_item$badge = item.badge) !== null && _item$badge !== void 0 ? _item$badge : item.info,
          "title": item.title,
          "color": _this7.color,
          "isActive": index === _this7.currentIndex,
          "disabled": item.disabled,
          "scrollable": scrollable,
          "activeColor": _this7.titleActiveColor,
          "inactiveColor": _this7.titleInactiveColor
        },
        "style": item.titleStyle,
        "class": item.titleClass,
        "scopedSlots": {
          // this.slots: createComponent中已混入
          default: function _default() {
            return item.slots('title');
          }
        },
        "on": {
          "click": function click() {
            // 自定义click事件，需要内部$emit触发
            _this7.onClick(item, index);
          }
        }
      });
    });
    var Wrap = h("div", {
      "ref": "wrap",
      "class": [pro_tabs_bem('wrap', {
        scrollable: scrollable
      }), pro_tabs_defineProperty({}, BORDER_TOP_BOTTOM, type === 'line' && this.border)]
    }, [h("div", {
      "ref": "nav",
      "class": pro_tabs_bem('nav', [type, {
        complete: this.scrollable
      }]),
      "style": this.navStyle
    }, [this.slots('nav-left'), Nav, type === 'line' && h("div", {
      "class": pro_tabs_bem('line'),
      "style": this.lineStyle
    }) // 底部line条
    , this.slots('nav-right')])]);
    return h("div", {
      "class": pro_tabs_bem([type])
    }, [this.sticky ? h(Sticky, {
      "attrs": {
        "container": this.$el,
        "offsetTop": this.offsetTop
      },
      "on": {
        "scroll": this.onSticktScroll
      }
    }, [Wrap]) : Wrap, h(Content, {
      "attrs": {
        "count": this.children.length,
        "animated": animated,
        "duration": this.duration,
        "swipeable": this.swipeable,
        "currentIndex": this.currentIndex
      },
      "on": {
        "change": this.setCurrentIndex
      }
    }, [this.slots()])]);
  }
}));
;// CONCATENATED MODULE: ./packages/Basic/src/ProTabs/src/pro-tab.js
function pro_tab_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function pro_tab_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? pro_tab_ownKeys(Object(source), !0).forEach(function (key) {
      pro_tab_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : pro_tab_ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function pro_tab_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function pro_tab_slicedToArray(arr, i) {
  return pro_tab_arrayWithHoles(arr) || pro_tab_iterableToArrayLimit(arr, i) || pro_tab_unsupportedIterableToArray(arr, i) || pro_tab_nonIterableRest();
}

function pro_tab_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function pro_tab_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return pro_tab_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pro_tab_arrayLikeToArray(o, minLen);
}

function pro_tab_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function pro_tab_iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function pro_tab_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}






var pro_tab_createNamespace = createNamespace('tab'),
    pro_tab_createNamespace2 = pro_tab_slicedToArray(pro_tab_createNamespace, 2),
    pro_tab_createComponent = pro_tab_createNamespace2[0],
    pro_tab_bem = pro_tab_createNamespace2[1];

/* harmony default export */ var pro_tab = (pro_tab_createComponent({
  mixins: [ChildrenMixin('tabs')],
  // inject父组件tabs，绑定与父组件的关联关系
  props: pro_tab_objectSpread(pro_tab_objectSpread({}, routeProps), {}, {
    // url: 点击后跳转的链接地址; to: 点击后跳转的目标路由对象，同 vue-router 的 to 属性; replace: 是否在跳转时替换当前页面历史
    dot: Boolean,
    // 是否在标题右上角显示小红点
    name: [Number, String],
    // 标签名称，作为匹配v-model的标识符
    // @deprecated
    info: [Number, String],
    // 图标右上角徽标的内容（已废弃，请使用 badge 属性）
    badge: [Number, String],
    title: String,
    // 标题
    titleStyle: null,
    // 自定义标题样式
    titleClass: null,
    // 自定义标题类名
    disabled: Boolean // 是否禁用标签

  }),
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    computedName: function computedName() {
      var _this$name;

      return (_this$name = this.name) !== null && _this$name !== void 0 ? _this$name : this.index; // 空值合并
    },
    isActive: function isActive() {
      var active = this.computedName === this.parent.currentName;

      if (active) {
        this.inited = true;
      }

      return active;
    }
  },
  watch: {
    title: function title() {
      this.parent.setLine();
      this.parent.scrollIntoView();
    },
    // 开启延迟渲染后，tab内容首次渲染触发rendered回调
    inited: function inited(val) {
      var _this = this;

      if (this.parent.lazyRender && val) {
        this.$nextTick(function () {
          _this.parent.$emit('rendered', _this.computedName, _this.title);
        });
      }
    }
  },
  render: function render(h) {
    var slots = this.slots,
        parent = this.parent,
        isActive = this.isActive;
    var slotContent = slots(); // 获取default slot

    if (!slotContent && !parent.animated) {
      return;
    }

    var show = parent.scrollspy || isActive;
    var shouldRender = this.inited || parent.scrollspy || !parent.lazyRender;
    var Content = shouldRender ? slotContent : h();

    if (parent.animated) {
      return h("div", {
        "class": pro_tab_bem('pane-wrapper', {
          inactive: !isActive
        })
      }, [h("div", {
        "class": pro_tab_bem('pane')
      }, [Content])]);
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: show
      }],
      "class": pro_tab_bem('pane')
    }, [Content]);
  }
}));
;// CONCATENATED MODULE: ./packages/Basic/src/ProTabs/index.js




pro_tabs.install = function (Vue) {
  Vue.component(pro_tabs.name, pro_tabs);
  Vue.component(camelize("-".concat(pro_tabs.name)), pro_tabs);
  Vue.component(pro_tab.name, pro_tab);
  Vue.component(camelize("-".concat(pro_tab.name)), pro_tab);
};

pro_tabs.Item = pro_tab;
/* harmony default export */ var ProTabs = (pro_tabs);
;// CONCATENATED MODULE: ./packages/Basic/index.js
// 引入所有组件

var components = {
  ProTabs: ProTabs // 标签栏组件

};

var install = function install(Vue) {
  Object.values(components).forEach(function (comp) {
    comp.install(Vue);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


/* harmony default export */ var Basic = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (Basic);


}();
module.exports = __webpack_exports__;
/******/ })()
;