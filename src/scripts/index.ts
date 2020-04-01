import { Tabs } from './tabs';
import { IframeContent } from './iframe-content';
import interact from 'interactjs'
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
      element: tab
    });
  });

  interact('.iframe-content__iframe')
    .resizable({
      edges: { right: true, left: true },
      listeners: {
        move(event) {
          var target = event.target
          target.style.width = event.rect.width + 'px'
        }
      },
      modifiers: [
        interact.modifiers.restrictEdges({
          outer: 'parent'
        }),
        interact.modifiers.restrictSize({
          min: { width: 350, height: null }
        })
      ],
      inertia: true
    })
};
