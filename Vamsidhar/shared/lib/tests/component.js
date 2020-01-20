import Component from "../component.js";

class ComponentA extends Component {}
class ComponentB extends Component {
  get id() {
    return "comp-b";
  }
  get name() {
    return "comp-b";
  }
}

QUnit.module("Component");

QUnit.test("initChild", function(assert) {
  var componentA= new ComponentA(),
      componentB = new ComponentB(),
      template = Handlebars.compile("{{comp-b}}");

  componentA.initChild(componentB);
  assert.equal(componentA.components['comp-b'], componentB, 
    "Stores reference to children");
});
