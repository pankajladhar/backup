import RootComponent from "shared/lib/root-component.js";

export default class App extends RootComponent {
  constructor(model, view) {
    super(model, view);

    //search.on("search-results", searchResults.update.bind(searchResults));
  }
};
