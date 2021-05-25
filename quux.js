import { d as defineStanzaElement } from './stanza-element-4b732164.js';

async function quux(stanza, params) {
  const dataUrl = params["data-url"];
  if (!dataUrl) {
    return;
  }
  const receivedData = await fetch(dataUrl).then((res) => res.json());
  stanza.render({
    template: 'stanza.html.hbs',
    parameters: {
      dataUrl,
      receivedData
    }
  });
}

var stanzaModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': quux
});

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "quux",
	"stanza:label": "Quux",
	"stanza:definition": "",
	"stanza:type": "Stanza",
	"stanza:display": "Text",
	"stanza:provider": "",
	"stanza:license": "MIT",
	"stanza:author": "",
	"stanza:address": "",
	"stanza:contributor": [
],
	"stanza:created": "2021-05-24",
	"stanza:updated": "2021-05-24",
	"stanza:parameter": [
	{
		"stanza:key": "data-url",
		"stanza:type": "string",
		"stanza:example": "https://api.github.com/orgs/togostanza/repos",
		"stanza:description": "URL to fetch from",
		"stanza:required": true
	}
],
	"stanza:about-link-placement": "bottom-right",
	"stanza:style": [
	{
		"stanza:key": "--greeting-color",
		"stanza:type": "color",
		"stanza:default": "#eb7900",
		"stanza:description": "text color of greeting"
	},
	{
		"stanza:key": "--greeting-align",
		"stanza:type": "single-choice",
		"stanza:choice": [
			"left",
			"center",
			"right"
		],
		"stanza:default": "center",
		"stanza:description": "text align of greeting"
	}
],
	"stanza:incomingEvent": [
],
	"stanza:outgoingEvent": [
]
};

var templates = [
  ["stanza.html.hbs", {"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <tr>\n        <td>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"category") : stack1), depth0))
    + "</td>\n        <td>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"count") : stack1), depth0))
    + "</td>\n      </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\n  <h1>quux stanza</h1>\n  <p class=\"data-from\">Loading from<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"dataUrl") || (depth0 != null ? lookupProperty(depth0,"dataUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dataUrl","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":3,"column":44},"end":{"line":3,"column":55}}}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"dataUrl") || (depth0 != null ? lookupProperty(depth0,"dataUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dataUrl","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":3,"column":58},"end":{"line":3,"column":69}}}) : helper)))
    + "</a></p>\n  <h2>Table</h2>\n  <section>\n    <table>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"receivedData") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":6},"end":{"line":12,"column":15}}})) != null ? stack1 : "")
    + "    </table>\n  </section>\n</div>";
},"useData":true,"useBlockParams":true}]
];

const url = import.meta.url.replace(/\?.*$/, '');

defineStanzaElement({stanzaModule, metadata, templates, url});
//# sourceMappingURL=quux.js.map
