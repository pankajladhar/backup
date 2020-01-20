import Component from "shared/lib/component.js";

export default class Search extends Component {
  constructor(id, model, view) {
    super(id, model, view);
  }

  getFlights(plan) {
    var flights = new Flights();
    return flights.getMatchingFlights(plan);
  }

  afterRender() {
    /*
    this.travelPlan.on('submit', (plan, e) => {
      e.preventDefault();
      this.getFlights(plan).then((results) => {
        this.trigger('search-results', results);
      });
    });
    */
  }
};
