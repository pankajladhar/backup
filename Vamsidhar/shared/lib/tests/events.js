import EventEmitter from "../event-emitter.js";
import EventHandler from "../event-handler.js";

QUnit.test("Events", function(assert) {
  class Base {
    constructor() {
      this._events = {
        "test-event": []
      };
    }

    get events() {
      return this._events;
    }
  };

  var ComponentWithEvents = EventHandler(EventEmitter(Base)),
      component = new ComponentWithEvents(),
      eventHandler = sinon.spy();

  component.on("test-event", eventHandler);
  component.trigger("test-event", {data:1}, {eventData:1});
  assert.ok(eventHandler.calledOnce);
});
