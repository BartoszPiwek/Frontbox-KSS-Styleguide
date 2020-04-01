export class ITabs {
  element: Element;
  onChange: Function;
}

export class Tabs {
  private data: Element;
  private onChange: Function;

  private links: HTMLCollectionOf<HTMLButtonElement>;
  private contents: HTMLCollectionOf<Element>;
  private activeTab: number = 0;
  private activeLink: number = 0;

  constructor(data: ITabs) {
    this.data = data.element;

    if (data.onChange) {
      this.onChange = data.onChange;
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
    const linkIndex = parseInt(target.getAttribute('tabItem'));
    const contentIndex = parseInt(target.getAttribute('tabContent'));

    if (this.activeLink === linkIndex) {
      return;
    }

    this.links[this.activeLink].classList.remove('is-active');
    this.contents[this.activeTab].classList.remove('is-active');

    const link = this.links[linkIndex];
    const content = this.contents[contentIndex];

    link.classList.add('is-active');
    content.classList.add('is-active');

    if (this.onChange) {
      this.onChange(link, content);
    }

    this.activeTab = contentIndex;
    this.activeLink = linkIndex
  }

  private bindLink(element: HTMLButtonElement) {
    element.addEventListener('click', e => {
      this.onClick(e);
    });
  }
}
