import { d as defineStanzaElement } from './stanza-element-4b732164.js';

async function qux(stanza, params) {
  const dataUrl = params["data-url"];
  if (!dataUrl) {
    return;
  }
  const receivedData = await fetch(dataUrl).then((res) => res.json());
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      dataUrl,
      receivedData: JSON.stringify(receivedData.slice(0, 3), null, "  "),
    },
  });
}

var stanzaModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': qux
});

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "qux",
	"stanza:label": "Qux",
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
  ["stanza.html.hbs", {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<p class=\"greeting\">Loading from "
    + alias4(((helper = (helper = lookupProperty(helpers,"dataUrl") || (depth0 != null ? lookupProperty(depth0,"dataUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dataUrl","hash":{},"data":data,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":44}}}) : helper)))
    + "</p>\n<pre><code>"
    + alias4(((helper = (helper = lookupProperty(helpers,"receivedData") || (depth0 != null ? lookupProperty(depth0,"receivedData") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"receivedData","hash":{},"data":data,"loc":{"start":{"line":2,"column":11},"end":{"line":2,"column":27}}}) : helper)))
    + "</code></pre>";
},"useData":true}]
];

const url = import.meta.url.replace(/\?.*$/, '');

defineStanzaElement({stanzaModule, metadata, templates, url});
//# sourceMappingURL=qux.js.map
