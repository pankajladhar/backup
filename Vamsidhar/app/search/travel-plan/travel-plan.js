import Component from "shared/lib/component.js";

export default class TravelPlan extends Component {
  constructor(el, model, view) {
    super(el, model, view);
  }

  preparePlan() {
    var form = this.el.querySelector('form[name="search-input"]'),
        plan = new TravelPlanModel();

    plan.tripType = Array.prototype.slice.call(
          form.querySelectorAll('input[name="trip-type"]')
        ).filter(el => el.checked)[0].getAttribute('value');

    plan.origin = form.querySelector('#origin').value;
    plan.destination = form.querySelector('#destination').value;
    plan.departureDate = form.querySelector('#departure-date').value;
    plan.returnDate = form.querySelector('#return-date').value;
    plan.passengerCount = form.querySelector('#passenger-count').value;

    return plan;
  }

  afterRender() {
    var form;

    form = this.el.querySelector('form[name="search-input"]');
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 
      this.preparePlan().then((d) => {this.trigger('input_availabe', d)});
      this.trigger('submit', this.preparePlan(), e);
    });
  }
};
