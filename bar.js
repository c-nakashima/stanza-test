import { d as defineStanzaElement } from './stanza-element-4b732164.js';

async function bar(stanza, params) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      name: params["say-to"],
    },
  });
}

function handleEvent(stanza, params, event) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      name: event.detail.value,
      category: event.detail.category,
      count: event.detail.count
    },
  });
}

var stanzaModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': bar,
  handleEvent: handleEvent
});

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "bar",
	"stanza:label": "Bar",
	"stanza:definition": "Receive events via handler",
	"stanza:type": "Stanza",
	"stanza:display": "Text",
	"stanza:provider": "",
	"stanza:license": "MIT",
	"stanza:author": "Yoji Shidara",
	"stanza:address": "dara@shidara.net",
	"stanza:contributor": [
],
	"stanza:created": "2021-03-08",
	"stanza:updated": "2021-03-08",
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
	},
	{
		"stanza:key": "--key-color",
		"stanza:type": "color",
		"stanza:default": "#eb7900",
		"stanza:description": "Key color"
	}
],
	"stanza:incomingEvent": [
	{
		"stanza:key": "valueChanged",
		"stanza:description": "value changed event"
	},
	{
		"stanza:key": "clickedValue",
		"stanza:description": "Value clicked event (on table)"
	}
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

  return "<div class=\"container\">\n  <h1>bar stanza</h1>\n  <div class=\"container\">\n    <h2>Disply input data (with event)</h2>\n    <section>\n      <p class=\"greeting\">Recieved value is <span class=\"recieved-value\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":73},"end":{"line":7,"column":81}}}) : helper)))
    + "</span>! </p>\n    </section>\n  </div>\n</div>";
},"useData":true}]
];

const url = import.meta.url.replace(/\?.*$/, '');

defineStanzaElement({stanzaModule, metadata, templates, url});
//# sourceMappingURL=bar.js.map
