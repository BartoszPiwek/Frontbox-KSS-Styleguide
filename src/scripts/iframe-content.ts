export class IframeContent {
  private data: HTMLElement;
  private iframeElement: HTMLIFrameElement;

  constructor(data: Element) {
    this.data = data as HTMLElement;

    this.start();
  }

  private start() {
    this.iframeElement = this.data.getElementsByClassName('iframe-content__iframe')[0] as HTMLIFrameElement;
    const contentElement = this.data.getElementsByClassName('iframe-content__content')[0] as HTMLElement;

    this.iframeElement.contentWindow.document.body.innerHTML = contentElement.innerHTML;

    contentElement.remove();

    this.iframeElement.style.height = this.iframeElement.contentWindow.document.documentElement.scrollHeight + 'px';

    this.data.classList.add('is-active');
  }
}
