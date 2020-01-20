var EventEmitter = Base => class extends Base {
  trigger(eventName, data, eventObject) {
    this._events = this._events || {};
    for (var callback in this._events[eventName]) {
      this._events[eventName][callback](data, eventObject);
    }
  }
};

export default EventEmitter;
