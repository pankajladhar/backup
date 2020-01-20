(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['search-results.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "  <h1>Pune > Delhi > Pune</h1>\n  <ol>\n";
  stack1 = ((helper = (helper = helpers.flights || (depth0 != null ? depth0.flights : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"flights","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.flights) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </ol>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <li>"
    + container.escapeExpression(((helper = (helper = helpers.airline || (depth0 != null ? depth0.airline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"airline","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <p>There are no flights for the travel plan.</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"search-results\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.hasFlights : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</section>\n";
},"useData":true});
})();