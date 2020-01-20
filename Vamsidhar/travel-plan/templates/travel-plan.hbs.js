(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['travel-plan.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form name=\"search-input\" action=\"/search\" method=\"GET\" class=\"trip-type-one-way\">\n  <legend>Travel details</legend>\n  <label for=\"one-way\" class=\"trip-type selected\">One way</label>\n  <input type=\"radio\" id=\"one-way\" name=\"trip-type\" value=\"oneway\" checked/>\n  <label for=\"return\" class=\"trip-type\">Return</label>\n  <input type=\"radio\" id=\"return\" name=\"trip-type\" value=\"return\"/>\n  <div class=\"tab-body\">\n    <label for=\"origin\">Origin</label>\n    <input type=\"text\" id=\"origin\" name=\"origin\"/>\n    <label for=\"destination\">Destination</label>\n    <input type=\"text\" id=\"destination\" name=\"destination\"/>\n    <label for=\"departure-date\">Departure date (DD-MM-YYYY)</label>\n    <input type=\"text\" id=\"departure-date\" name=\"departure-date\"/>\n    <label for=\"return-date\">Return date (DD-MM-YYYY)</label>\n    <input type=\"text\" id=\"return-date\" name=\"return-date\"/>\n    <label for=\"passenger-count\">Number of passengers</label>\n    <input type=\"text\" id=\"passenger-count\" name=\"passenger-count\"/>\n    <button type=\"submit\">Search</button>\n  </div>\n</form>\n";
},"useData":true});
})();