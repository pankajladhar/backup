import Component from "shared/lib/component.js";

export default class SearchResults extends Component {
  constructor(id, model, view) {
    super(id, model, view);
  }

  update(results) {
    document.getElementById(this.id).innerHTML 
      = Handlebars.templates['search-results.hbs'](results);
  }
};
