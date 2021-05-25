import { d as defineStanzaElement } from './stanza-element-4b732164.js';

async function foo(stanza, params) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {},
  });
  const input = stanza.root.querySelector("input");
  input.addEventListener("input", (ev) => {
    const value = ev.target.value;
    console.log("input", value);
    stanza.host.dispatchEvent(
      new CustomEvent("valueChanged", { detail: { value } })
    );
  });
}

var stanzaModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': foo
});

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "foo",
	"stanza:label": "Foo",
	"stanza:definition": "Input form to emit events",
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
	{
		"stanza:key": "valueChanged",
		"stanza:description": "value changed"
	}
]
};

var templates = [
  ["stanza.html.hbs", {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\n  <h1>foo stanza</h1>\n  <div class=\"container\">\n    <h2>Input</h2>\n    <section>\n      <input type=\"text\">\n    </section>\n  </div>\n</div>";
},"useData":true}]
];

const url = import.meta.url.replace(/\?.*$/, '');

defineStanzaElement({stanzaModule, metadata, templates, url});
//# sourceMappingURL=foo.js.map
