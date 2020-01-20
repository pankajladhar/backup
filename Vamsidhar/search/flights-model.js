import Model from "shared/lib/model.js";

export default class Flights extends Model{
  constructor() {
    super();
  }

  getMatchingFlights(plan) {
    return this.httpGet('/api/flights', plan.toRequestParams())
      .then((resultJson) => {
        var result = JSON.parse(resultJson);
        console.log(result);
        result.hasFlights = (result.flights.length > 0) ? true : false;
        return result;
      });
  }
}
