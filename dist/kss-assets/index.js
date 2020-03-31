(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function ScrollSpy (wrapper, opt) {

  this.doc = document;
  this.wrapper = (typeof wrapper === 'string') ? this.doc.querySelector(wrapper) : wrapper;
  this.nav = this.wrapper.querySelectorAll(opt.nav);

  this.contents = [];
  this.win = window;

  this.winH = this.win.innerHeight;

  this.className = opt.className;

  this.callback = opt.callback;

  this.init();
}

ScrollSpy.prototype.init = function () {
  this.contents = this.getContents();
  this.attachEvent();
};

ScrollSpy.prototype.getContents = function () {
  var targetList = [];

  for (var i = 0, max = this.nav.length; i < max; i++) {
    var href = this.nav[i].href;

    targetList.push(this.doc.getElementById(href.split('#')[1]));
  }

  return targetList;
};

ScrollSpy.prototype.attachEvent = function () {
  this.win.addEventListener('load', (function () {
    this.spy(this.callback);
  }).bind(this));


  var scrollingTimer;

  this.win.addEventListener('scroll', (function () {
    if (scrollingTimer) {
      clearTimeout(scrollingTimer);
    }

    var _this = this;

    scrollingTimer = setTimeout(function () {
      _this.spy(_this.callback);
    }, 10);
  }).bind(this));


  var resizingTimer;

  this.win.addEventListener('resize', (function () {
    if (resizingTimer) {
      clearTimeout(resizingTimer);
    }

    var _this = this;

    resizingTimer = setTimeout(function () {
      _this.spy(_this.callback);
    }, 10);
  }).bind(this));
};

ScrollSpy.prototype.spy = function (cb) {
  var elems = this.getElemsViewState();

  this.markNav(elems);

  if (typeof cb === 'function') {
    cb(elems);
  }
};

ScrollSpy.prototype.getElemsViewState = function () {
  var elemsInView = [],
    elemsOutView = [],
    viewStatusList = [];

  for (var i = 0, max = this.contents.length; i < max; i++) {
    var currentContent = this.contents[i],
      isInView = this.isInView(currentContent);

    if (isInView) {
      elemsInView.push(currentContent);
    } else {
      elemsOutView.push(currentContent);
    }
    viewStatusList.push(isInView);
  }

  return {
    inView: elemsInView,
    outView: elemsOutView,
    viewStatusList: viewStatusList
  };
};

ScrollSpy.prototype.isInView = function (el) {
  var winH = this.winH,
    scrollTop = this.doc.documentElement.scrollTop || this.doc.body.scrollTop,
    scrollBottom = scrollTop + winH,
    rect = el.getBoundingClientRect(),
    elTop = rect.top + scrollTop,
    elBottom = elTop + el.offsetHeight;

  return (elTop < scrollBottom) && (elBottom > scrollTop);
};

ScrollSpy.prototype.markNav = function (elems) {
  var navItems = this.nav,
    isAlreadyMarked = false;

  for (var i = 0, max = navItems.length; i < max; i++) {
    if (elems.viewStatusList[i] && !isAlreadyMarked) {
      isAlreadyMarked = true;
      navItems[i].classList.add(this.className);
    } else {
      navItems[i].classList.remove(this.className);
    }
  }
};


module.exports = ScrollSpy;

},{}],2:[function(require,module,exports){
(function (global){
/**
 * ScrollSpy
 *
 */

var ScrollSpy = require('./modules/scrollspy');

global.ScrollSpy = module.exports = ScrollSpy;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./modules/scrollspy":1}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var IframeContent = /** @class */ (function () {
    function IframeContent(data) {
        this.data = data;
        this.start();
    }
    IframeContent.prototype.start = function () {
        this.iframeElement = this.data.getElementsByClassName('iframe-content__iframe')[0];
        var contentElement = this.data.getElementsByClassName('iframe-content__content')[0];
        this.iframeElement.contentWindow.document.body.innerHTML = contentElement.innerHTML;
        contentElement.remove();
        this.iframeElement.style.height = this.iframeElement.contentWindow.document.documentElement.scrollHeight + 'px';
        this.data.classList.add('is-active');
    };
    return IframeContent;
}());
exports.IframeContent = IframeContent;

},{}],4:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var tabs_1 = require("./tabs");
var iframe_content_1 = require("./iframe-content");
var ScrollSpy = require('scrollspy-js');
window.onload = function () {
    var spy = new ScrollSpy('#doc-body', {
        nav: '.doc-sidebar-nav__child > li > a',
        className: 'doc-is-viewed'
    });
    var iframes = document.getElementsByClassName('iframe-content');
    var iframesData = [];
    Array.from(iframes).forEach(function (element, index) {
        iframesData.push(new iframe_content_1.IframeContent(element));
    });
    var tabs = document.getElementsByClassName('tabs');
    Array.from(tabs).forEach(function (tab, tabIndex) {
        new tabs_1.Tabs({
            element: tab
        });
    });
};

},{"./iframe-content":3,"./tabs":5,"scrollspy-js":2}],5:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var ITabs = /** @class */ (function () {
    function ITabs() {
    }
    return ITabs;
}());
exports.ITabs = ITabs;
var Tabs = /** @class */ (function () {
    function Tabs(data) {
        this.activeTab = 0;
        this.data = data.element;
        if (data.onActive) {
            this.onActive = data.onActive;
        }
        if (data.afterInit) {
            this.afterInit = data.afterInit;
        }
        this.start();
    }
    Tabs.prototype.start = function () {
        var _this = this;
        this.links = this.data.getElementsByClassName('tabs-header__item');
        this.contents = this.data.getElementsByClassName('tabs-content__item');
        Array.from(this.links).forEach(function (link) {
            _this.bindLink(link);
        });
        if (this.afterInit) {
            this.afterInit();
        }
    };
    Tabs.prototype.onClick = function (e) {
        var target = e.target;
        var index = parseInt(target.getAttribute('tabitem'));
        if (this.activeTab === index) {
            return;
        }
        this.links[this.activeTab].classList.remove('is-active');
        this.contents[this.activeTab].classList.remove('is-active');
        this.links[index].classList.add('is-active');
        this.contents[index].classList.add('is-active');
        if (this.onActive) {
            this.onActive(index);
        }
        var iframeElement = this.contents[index].getElementsByClassName('iframe-content__iframe')[0];
        if (iframeElement) {
            iframeElement.style.height = iframeElement.contentWindow.document.documentElement.scrollHeight + 'px';
        }
        this.activeTab = index;
    };
    Tabs.prototype.bindLink = function (element) {
        var _this = this;
        element.addEventListener('click', function (e) {
            _this.onClick(e);
        });
    };
    return Tabs;
}());
exports.Tabs = Tabs;

},{}]},{},[4]);
