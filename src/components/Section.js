export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container =  document.querySelector(containerSelector);
  }

  addItem(element) {
this.container.prepend(element);
  }

  renderCards(items) {
    items.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }
}