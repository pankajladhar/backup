import Model from "shared/lib/model.js";

export default class TravelPlanModel extends Model{
  constructor() {
    super();
  }

  get tripType() {
    return this._tripType;
  }

  get origin() {
    return this._origin;
  }

  get destination() {
    return this._destination;
  }

  get departureDate() {
    return this._departureDate;
  }

  get returnDate() {
    return this._returnDate;
  }

  get passengerCount() {
    return this._passengerCount;
  }

  set tripType(val) {
    this._tripType = val;
  }

  set origin(val) {
    this._origin = val;
  }

  set destination(val) {
    this._destination = val;
  }

  set departureDate(val) {
    this._departureDate = val;
  }

  set returnDate(val) {
    this._returnDate = val;
  }

  set passengerCount(val) {
    this._passengerCount = val;
  }
};
