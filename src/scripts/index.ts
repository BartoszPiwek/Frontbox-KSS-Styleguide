import { Tabs } from './tabs';
import { IframeContent } from './iframe-content';

window.onload = () => {
  const tabs = document.getElementsByClassName('tabs');

  Array.from(tabs).forEach(element => {
    new Tabs(element);
  });

  const iframes = document.getElementsByClassName('iframe-content');

  Array.from(iframes).forEach(element => {
    new IframeContent(element);
  });
};
