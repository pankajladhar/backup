import Component from "shared/lib/component.js";

export default class RootComponent extends Component {
  constructor(model, view) {
    super('', model, view);
    this._el = document.body;
  }
}
