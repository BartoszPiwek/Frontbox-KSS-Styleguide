import { Tabs } from './tabs';
import { IframeContent } from './iframe-content';
const ScrollSpy = require('scrollspy-js');

window.onload = () => {

  new ScrollSpy('#doc-body', {
    nav: '.doc-sidebar-nav__child > li > a',
    className: 'doc-is-viewed'
  });

  const iframes = document.getElementsByClassName('iframe-content');

  Array.from(iframes).forEach(element => {
    new IframeContent(element);
  });

  const tabs = document.getElementsByClassName('tabs');

  Array.from(tabs).forEach((tab, tabIndex) => {
    new Tabs({
      element: tab,
      onChange(link, content) {
        const hasLinkResponsive = link.getAttribute('tabResponsive') === 'true';

        if (hasLinkResponsive) {
          content.classList.add('iframe-content--responsive');
        } else {
          content.classList.remove('iframe-content--responsive');
        }
      }
    });
  });
};
