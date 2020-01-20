import Component from "shared/lib/component.js";

export default class SearchResults extends Component {
  constructor(id, model, view) {
    super(id, model, view);
  }

  update(results) {
    this._el.innerHTML = Handlebars.templates[this._view + '.hbs'](results);
    window.location = '#search-results';
  }

};
