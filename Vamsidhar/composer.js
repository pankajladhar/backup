import App from "app/app.js";
import Search from "search/search.js";
import TravelPlan from "travel-plan/travel-plan.js";
import SearchResults from "search-results/search-results.js";
import TravelPlanModel from "travel-plan/travel-plan-model.js";
import Flights from "search/flights-model.js";

export class Composer {
  constructor(appName) {
    this._appName = appName;

    var app = new App(
          {title: 'Flight Search'}, 
          'app'
        ),

        search = new Search(
          'search',
          new Flights(),
          'search'
        ),

        travelPlan = new TravelPlan(
          'travelPlan',
          new TravelPlanModel(), 
          'travel-plan'
        ),
        
        searchResults = new SearchResults(
          'searchResults',
          {},
          'search-results'
        );

    search.composedOf(travelPlan);
    app.composedOf(search).and(searchResults);
    app.render();

    travelPlan.on('submit', search.getFlights.bind(search));
    search.on('results', searchResults.update.bind(searchResults));

  }
}
