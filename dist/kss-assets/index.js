(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var IframeContent = /** @class */ (function () {
    function IframeContent(data) {
        this.data = data;
        this.start();
    }
    IframeContent.prototype.start = function () {
        var iframeElement = this.data.getElementsByClassName('iframe-content__iframe')[0];
        var contentElement = this.data.getElementsByClassName('iframe-content__content')[0];
        iframeElement.contentWindow.document.body.innerHTML = contentElement.innerHTML;
        contentElement.remove();
        iframeElement.style.height = iframeElement.contentWindow.document.documentElement.scrollHeight + 'px';
        this.data.classList.add('is-active');
    };
    return IframeContent;
}());
exports.IframeContent = IframeContent;

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var tabs_1 = require("./tabs");
var iframe_content_1 = require("./iframe-content");
window.onload = function () {
    var tabs = document.getElementsByClassName('tabs');
    Array.from(tabs).forEach(function (element) {
        new tabs_1.Tabs(element);
    });
    var iframes = document.getElementsByClassName('iframe-content');
    Array.from(iframes).forEach(function (element) {
        new iframe_content_1.IframeContent(element);
    });
};

},{"./iframe-content":1,"./tabs":3}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Tabs = /** @class */ (function () {
    function Tabs(data) {
        this.activeTab = 0;
        this.data = data;
        this.start();
    }
    Tabs.prototype.start = function () {
        var _this = this;
        this.links = this.data.getElementsByClassName('tabs-header__item');
        this.contents = this.data.getElementsByClassName('tabs-content__item');
        Array.from(this.links).forEach(function (link) {
            _this.bindLink(link);
        });
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

},{}]},{},[2]);
