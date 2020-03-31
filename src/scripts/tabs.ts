export class ITabs {
  element: Element;
  onActive?: Function;
}

export class Tabs {
  private data: Element;
  private onActive: Function;

  private links: HTMLCollectionOf<HTMLButtonElement>;
  private contents: HTMLCollectionOf<Element>;
  private activeTab: number = 0;

  constructor(data: ITabs) {
    this.data = data.element;

    if (data.onActive) {
      this.onActive = data.onActive;
    }

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

    if (this.onActive) {
      this.onActive(index);
    }

    this.activeTab = index;
  }

  private bindLink(element: HTMLButtonElement) {
    element.addEventListener('click', e => {
      this.onClick(e);
    });
  }
}
