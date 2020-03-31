export class IframeContent {
  private data: HTMLElement;

  constructor(data: Element) {
    this.data = data as HTMLElement;

    this.start();
  }

  private start() {
    const iframeElement = this.data.getElementsByClassName('iframe-content__iframe')[0] as HTMLIFrameElement;
    const contentElement = this.data.getElementsByClassName('iframe-content__content')[0] as HTMLElement;

    iframeElement.contentWindow.document.body.innerHTML = contentElement.innerHTML;

    contentElement.remove();
    iframeElement.style.height = iframeElement.contentWindow.document.documentElement.scrollHeight + 'px';

    this.data.classList.add('is-active');
  }
}
