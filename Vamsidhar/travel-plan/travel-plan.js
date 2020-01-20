import Component from "shared/lib/component.js";

export default class TravelPlan extends Component {
  constructor(el, model, view) {
    super(el, model, view);
  }

  preparePlan() {
    var form = this.el.querySelector('form[name="search-input"]'),
        plan = this._model;

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

  removeClass(el, className) {
    var classes = el.getAttribute('class') || "";

    classes = classes.split(' ').filter((c) => { return c !== className });
    el.setAttribute('class', classes.join(' '));
  }

  addClass(el, className) {
    el.setAttribute('class', (el.getAttribute('class') || '') + ' ' + className);
  }

  hasClass(el, className) {
    return (el.getAttribute('class') || '').split(' ').filter((c) => { return c === className })
      .length > 0;
  }

  handleTabClick(e, form) {
    if (this.hasClass(e.target, 'trip-type')) {
      Array.prototype.slice.call(form.querySelectorAll('.trip-type')).map((label) => {
        this.removeClass(label, 'selected');
      });
      this.addClass(e.target, 'selected');
      this.removeClass(form, 'trip-type-one-way');
      this.removeClass(form, 'trip-type-return');
      this.addClass(form, 'trip-type-' + e.target.getAttribute('for'));
    }
  }

  afterRender() {
    var form;

    form = this.el.querySelector('form[name="search-input"]');
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 
      this.trigger('submit', this.preparePlan(), e);
    });

    form.addEventListener('click', (e) => {
      this.handleTabClick(e, form);
    });
  }
};
