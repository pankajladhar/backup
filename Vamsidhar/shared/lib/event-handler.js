var EventHandler = Base => class extends Base {
  on(eventName, callback) {
    this._events = this._events || {};
    this._events[eventName] = this._events[eventName] || [];
    this._events[eventName].push(callback);
  }
};

export default EventHandler;
