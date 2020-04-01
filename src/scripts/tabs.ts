export class ITabs {
  element: Element;
}

export class Tabs {
  private data: Element;

  private links: HTMLCollectionOf<HTMLButtonElement>;
  private contents: HTMLCollectionOf<HTMLElement>;
  private activeTab: number = 0;

  constructor(data: ITabs) {
    this.data = data.element;

    this.start();
  }

  private start() {
    this.links = this.data.getElementsByClassName('tabs-header__item') as HTMLCollectionOf<HTMLButtonElement>;
    this.contents = this.data.getElementsByClassName('tabs-content__item') as HTMLCollectionOf<HTMLElement>;

    Array.from(this.links).forEach(link => {
      this.bindLink(link);
    });
  }

  private onClick(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    const linkIndex = parseInt(target.getAttribute('tabItem'));

    if (this.activeTab === linkIndex) {
      return;
    }

    this.links[this.activeTab].classList.remove('is-active');
    this.contents[this.activeTab].classList.remove('is-active');

    const link = this.links[linkIndex];
    const content = this.contents[linkIndex];

    link.classList.add('is-active');
    content.classList.add('is-active');

    this.activeTab = linkIndex
  }

  private bindLink(element: HTMLButtonElement) {
    element.addEventListener('click', e => {
      this.onClick(e);
    });
  }
}
