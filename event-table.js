import { d as defineStanzaElement } from './stanza-element-4b732164.js';

async function eventTable(stanza, params) {

  stanza.render({
    template: 'stanza.html.hbs',
    parameters: {
      fields: [
        {
          label: 'Name',
          value: 'Tanaka',
          required: true
        },
        {
          label: 'Country',
          value: 'Japane',
          required: false
        },
        {
          label: 'Age',
          value: '19',
          required: true
        }
      ]
    }
  });

  //get clicked column values
  const values = stanza.root.querySelectorAll('.value');
  for (let i = 0; i < values.length; i++) {
    values[i].addEventListener('click', (e) => {
      const clickedValue = e.path[0].innerText;
      stanza.host.dispatchEvent(
        new CustomEvent("valueClicked", { detail: { clickedValue } })
      );
    });
  }}

function handleEvent(stanza, params, event) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      name: event.detail.value,
    },
  });
}

// export default async function dispatchValue(stanza, params) {
//   stanza.host.dispatchEvent(
//       new CustomEvent("valueChanged", { detail: { value: 42 } })
//   );
// }

var stanzaModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': eventTable,
  handleEvent: handleEvent
});

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "event-table",
	"stanza:label": "Event table",
	"stanza:definition": "Event table stanza",
	"stanza:type": "Stanza",
	"stanza:display": "Table",
	"stanza:provider": "TogoStanza",
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
	"stanza:menu-placement": "bottom-right",
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
	{
		"stanza:key": "valueClicked",
		"stanza:description": "Value clicked event (on table)"
	}
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

  return "          <tr>\n            <td>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"label") : stack1), depth0))
    + "</td>\n            <td class=\"value\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</td>\n          </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\n  <h1>Event table stanza</h1>\n  <div class=\"container\">\n    <h2>Table</h2>\n    <section>\n      <table>\n        <thead>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fields") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":9,"column":10},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "        </thead>\n      </table>\n    </section>\n  </div>\n</div>";
},"useData":true,"useBlockParams":true}]
];

const url = import.meta.url.replace(/\?.*$/, '');

defineStanzaElement({stanzaModule, metadata, templates, url});
//# sourceMappingURL=event-table.js.map
