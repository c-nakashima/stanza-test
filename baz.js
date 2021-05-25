import { d as defineStanzaElement } from './stanza-element-4b732164.js';

async function baz(stanza, params) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      name: params["say-to"],
    },
  });
}

var stanzaModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': baz
});

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "baz",
	"stanza:label": "Baz",
	"stanza:definition": "Receive events via attribute",
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
		"stanza:key": "say-to",
		"stanza:type": "string",
		"stanza:example": "world",
		"stanza:description": "who to say hello to",
		"stanza:required": false
	}
],
	"stanza:about-link-placement": "bottom-right",
	"stanza:style": [
	{
		"stanza:key": "--link-hover-font-color",
		"stanza:type": "color",
		"stanza:default": "#eb7900",
		"stanza:description": "Link font color when it is hovered"
	},
	{
		"stanza:key": "--h1-font-family",
		"stanza:type": "string",
		"stanza:default": "Helvetica",
		"stanza:description": "h1 font family"
	},
	{
		"stanza:key": "--h1-font-size",
		"stanza:type": "string",
		"stanza:default": "20px",
		"stanza:description": "h1 font size"
	},
	{
		"stanza:key": "--h1-font-color",
		"stanza:type": "color",
		"stanza:default": "#eb7900",
		"stanza:description": "h1 font color"
	},
	{
		"stanza:key": "--h1-font-weight",
		"stanza:type": "number",
		"stanza:default": 600,
		"stanza:description": "h1 font weight"
	},
	{
		"stanza:key": "--h2-font-family",
		"stanza:type": "string",
		"stanza:default": "Helvetica",
		"stanza:description": "h2 font family"
	},
	{
		"stanza:key": "--h2-font-size",
		"stanza:type": "string",
		"stanza:default": "16px",
		"stanza:description": "h2 font size"
	},
	{
		"stanza:key": "--h2-font-color",
		"stanza:type": "color",
		"stanza:default": "#eb7900",
		"stanza:description": "h2 font color"
	},
	{
		"stanza:key": "--h2-font-weight",
		"stanza:type": "number",
		"stanza:default": 400,
		"stanza:description": "h2 font weight"
	}
],
	"stanza:incomingEvent": [
],
	"stanza:outgoingEvent": [
]
};

var templates = [
  ["stanza.html.hbs", {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\n  <h1>baz stanza</h1>\n  <div class=\"container\">\n    <h2>Disply input data</h2>\n    <section>\n      <p class=\"greeting\">Hello, "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":33},"end":{"line":7,"column":41}}}) : helper)))
    + "! (with attribute)</p>\n    </section>\n  </div>\n</div>";
},"useData":true}]
];

const url = import.meta.url.replace(/\?.*$/, '');

defineStanzaElement({stanzaModule, metadata, templates, url});
//# sourceMappingURL=baz.js.map
