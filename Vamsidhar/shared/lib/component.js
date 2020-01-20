import EventEmitter from 'shared/lib/event-emitter.js';
import EventHandler from 'shared/lib/event-handler.js';

class BaseComponent {};

export default class Component extends EventEmitter(EventHandler(BaseComponent)) {

  constructor(id, model, view) {
    super();
    this._id = id;
    this._model = model;
    this._view = view;
  }

  get id() {
    return this._id;
  }

  get el() {
    return this._el;
  }

  set el(domElement) {
    this._el = domElement;
  }

  initChild(component) {
    component._parent = this;
    this._components = this._components || {};
    this._components[component.id] = component;
     /*   
     {
       "S" : componn
     }
     */

  }

  get components() {
    return this._components;
  }

  composedOf(component) {
    this.initChild(component);
    return this;
  }

  and(component) {
    return this.composedOf(component);
  }

  afterRender() {}

  render() {
    this._el.innerHTML = Handlebars.templates[this._view + '.hbs'](this._model);
    this.afterRender();
    for (var id in this._components) {
      this._components[id].el = this._el.querySelector('#' + id);
      this._components[id].render();
    }
  }
}
