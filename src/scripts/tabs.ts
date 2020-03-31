export class Tabs {
  private data: Element;
  private links: HTMLCollectionOf<HTMLButtonElement>;
  private contents: HTMLCollectionOf<Element>;
  private activeTab: number = 0;

  constructor(data: Element) {
    this.data = data;

    this.start();
  }

  private start() {
    this.links = this.data.getElementsByClassName('tabs-header__item') as HTMLCollectionOf<HTMLButtonElement>;
    this.contents = this.data.getElementsByClassName('tabs-content__item');

    Array.from(this.links).forEach(link => {
      this.bindLink(link);
    });
  }

  private onClick(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    const index = parseInt(target.getAttribute('tabitem'));

    if (this.activeTab === index) {
      return;
    }

    this.links[this.activeTab].classList.remove('is-active');
    this.contents[this.activeTab].classList.remove('is-active');

    this.links[index].classList.add('is-active');
    this.contents[index].classList.add('is-active');

    this.activeTab = index;
  }

  private bindLink(element: HTMLButtonElement) {
    element.addEventListener('click', e => {
      this.onClick(e);
    });
  }
}
