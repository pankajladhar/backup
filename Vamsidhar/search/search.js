import Component from "shared/lib/component.js";

export default class Search extends Component {
  constructor(id, model, view) {
    super(id, model, view);
  }

  getFlights(plan) {
    this._model.getMatchingFlights(plan).then(function(results) {
      this.trigger('results', results);
    }.bind(this));
  }

};


/*
App
  (PageModel, AppView)
  Search
    (QueryModel)
    TravelPlan
      (TravelPlanModel, FormView)
  SearchResults
    (FlightsModel, SearchResultsView)
*/
