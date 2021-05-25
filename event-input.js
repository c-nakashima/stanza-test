import { d as defineStanzaElement } from './stanza-element-4b732164.js';

async function eventInput(stanza, params) {

  stanza.render({
    template: 'stanza.html.hbs',
    parameters: {
      fields: [
        {
          label: 'First name',
          required: true
        },
        {
          label: 'Middle name',
          required: false
        },
        {
          label: 'Last name',
          required: true
        }
      ]
    }
  });
}

function handleEvent(stanza, params, event) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      name: event.detail.value,
    },
  });
}

var stanzaModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': eventInput,
  handleEvent: handleEvent
});

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "event-input",
	"stanza:label": "Event input",
	"stanza:definition": "Event input stanza",
	"stanza:type": "Stanza",
	"stanza:display": "Text",
	"stanza:provider": "",
	"stanza:license": "MIT",
	"stanza:author": "",
	"stanza:address": "",
	"stanza:contributor": [
],
	"stanza:created": "2021-05-25",
	"stanza:updated": "2021-05-25",
	"stanza:parameter": [
	{
		"stanza:key": "say-to",
		"stanza:type": "string",
		"stanza:example": "world",
		"stanza:description": "who to say hello to",
		"stanza:required": false
	}
],
	"stanza:menu-placement": "bottom-right",
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
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div>\n        <label>\n          "
    + container.escapeExpression(container.lambda(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"label") : stack1), depth0))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":11,"column":10},"end":{"line":13,"column":17}}})) != null ? stack1 : "")
    + "        </label>\n        <input type=\"text\" />\n      </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "          <span class=\"required\">(required)</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\n  <h1>Event input stanza</h1>\n  <div class=\"container\">\n    <h2>Input</h2>\n    <section>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fields") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":7,"column":6},"end":{"line":17,"column":15}}})) != null ? stack1 : "")
    + "    </section>\n  </div>\n</div>";
},"useData":true,"useBlockParams":true}]
];

const url = import.meta.url.replace(/\?.*$/, '');

defineStanzaElement({stanzaModule, metadata, templates, url});
//# sourceMappingURL=event-input.js.map
