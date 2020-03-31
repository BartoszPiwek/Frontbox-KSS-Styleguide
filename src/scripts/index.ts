import { Tabs } from './tabs';
import { IframeContent } from './iframe-content';
const ScrollSpy = require('scrollspy-js');

window.onload = () => {
  var spy = new ScrollSpy('#doc-body', {
    nav: '.doc-sidebar-nav__child > li > a',
    className: 'doc-is-viewed'
  });

  const iframes = document.getElementsByClassName('iframe-content');

  let iframesData: Array<IframeContent> = [];

  Array.from(iframes).forEach((element, index) => {
    iframesData.push(new IframeContent(element));
  });

  const tabs = document.getElementsByClassName('tabs');

  Array.from(tabs).forEach((tab, tabIndex) => {
    new Tabs({
      element: tab,
    });
  });
};
