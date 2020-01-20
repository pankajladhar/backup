(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['search-results.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "    <h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.plan : depth0)) != null ? stack1.from : stack1), depth0))
    + " &#8594; "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.plan : depth0)) != null ? stack1.to : stack1), depth0))
    + " "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.plan : depth0)) != null ? stack1["return"] : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h1>\n    <ol>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.flights : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ol>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " &#8594; "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.plan : depth0)) != null ? stack1.from : stack1), depth0))
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "      <li>\n        <strong class=\"fare\">Rs. "
    + container.escapeExpression(((helper = (helper = helpers.totalFare || (depth0 != null ? depth0.totalFare : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalFare","hash":{},"data":data}) : helper)))
    + "</strong>\n        <div class=\"itenary\">\n";
  stack1 = ((helper = (helper = helpers.onward || (depth0 != null ? depth0.onward : depth0)) != null ? helper : alias2),(options={"name":"onward","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.onward) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers["return"] || (depth0 != null ? depth0["return"] : depth0)) != null ? helper : alias2),(options={"name":"return","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers["return"]) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          <button class=\"book\">Book this flight</button>\n        </div>\n      </li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <dl class=\"flight-details onward\">\n            <dt class=\"flightNo\">Flight number</dt>\n            <dd>"
    + alias4(((helper = (helper = helpers.flightNumber || (depth0 != null ? depth0.flightNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flightNumber","hash":{},"data":data}) : helper)))
    + "</dd>\n            <dt class=\"route\">Route</dt>\n            <dd>"
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + " &#8594; "
    + alias4(((helper = (helper = helpers.to || (depth0 != null ? depth0.to : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"to","hash":{},"data":data}) : helper)))
    + "</dd>\n            <dt class=\"timing\">Departure:</dt>\n            <dd>"
    + alias4(((helper = (helper = helpers.departure || (depth0 != null ? depth0.departure : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departure","hash":{},"data":data}) : helper)))
    + "</dd>\n            <dt class=\"timing\">Arrive:</dt>\n            <dd>"
    + alias4(((helper = (helper = helpers.arrival || (depth0 != null ? depth0.arrival : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"arrival","hash":{},"data":data}) : helper)))
    + "</dd>\n          </dl>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "          <dl class=\"flight-details return\">\n            <dt class=\"flightNo\">Flight number</dt>\n            <dd>AI-203</dd>\n            <dt class=\"route\">Route</dt>\n            <dd>DEL &#8594; PNQ</dd>\n            <dt class=\"timing\">Departure:</dt>\n            <dd>08.00 PM</dd>\n            <dt class=\"timing\">Arrival:</dt>\n            <dd>11.00 PM</dd>\n          </dl>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"search-results\">\n  <a name=\"search-results\"></a>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.flights : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\n";
},"useData":true});
})();