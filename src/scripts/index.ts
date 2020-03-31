import { Tabs } from './tabs';
import { IframeContent } from './iframe-content';

window.onload = () => {
  const iframes = document.getElementsByClassName('iframe-content');

  const iframesData: Array<IframeContent> = Array(iframes.length - 1);

  Array.from(iframes).forEach((element, index) => {
    iframesData[index] = new IframeContent(element);
  });

  const tabs = document.getElementsByClassName('tabs');

  Array.from(tabs).forEach(element => {
    new Tabs({
      element: element,
      onActive(index: number) {
        if (!iframesData[index]) {
          return;
        }

        iframesData[index].recalculateHeight();
      }
    });
  });
};
