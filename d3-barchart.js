import { d as defineStanzaElement } from './stanza-element-4b732164.js';
import 'https://d3js.org/d3.v5.min.js';

async function d3Barchart(stanza, params) {
  const dataUrl = params["data-url"];
  if (!dataUrl) {
    return;
  }
  const rawData = await fetch(dataUrl).then((res) => res.json());
  const receivedData = rawData.filter(Boolean);

  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      dataUrl,
      receivedData: JSON.stringify(receivedData.slice(0, 3), null, "  "),
    },
  });

  const width = 400;
  const height = 300;
  const padding = 40;
  const category = params['category'];
  const value = params['value'];

  // 2.set SVG area
  const chartElement = stanza.root.querySelector('#chart');
  const svg = d3.select(chartElement).append("svg").attr("width", width).attr("height", height);

  // 3. set scale
  const xScale = d3.scaleBand()
    .rangeRound([padding, width - padding])
    .padding(0.5)
    .domain(receivedData.map(function (d) { return d[category]; }));
  // .domain(receivedData.map(function (d) { 
  //   console.log('d.count',d.count)
  //   return d.category; }));

  const yScale = d3.scaleLinear()
    .domain([0, 2000])
    // .domain([0, 
    //   // d3.max(receivedData, function(d) { return d.count; })
    //   d3.max(receivedData.map(d => d.count))
    // ])
    // .domain([0, d3.max(receivedData, function(d) { return d.count; })])
    .range([height - padding, padding]);

  // 4. set axis
  svg.append("g")
    .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
    .call(d3.axisBottom(xScale));

  svg.append("g")
    .attr("transform", "translate(" + padding + "," + 0 + ")")
    .call(d3.axisLeft(yScale));

  // 5. set rect(bar)
  svg.append("g")
    .selectAll("rect")
    .data(receivedData)
    .enter()
    .append("rect")
    .attr("x", function (d) { return xScale(d[category]); })
    .attr("y", function (d) { return yScale(d[value]); })
    .attr("width", xScale.bandwidth())
    .attr("height", function (d) { return height - padding - yScale(d[value]); })
    .attr("fill", "lightblue")
    .attr("class", "rect")
    .on("click", function () {
      // access event by [d3.event]
      d3.event.preventDefault();

      stanza.host.dispatchEvent(
        new CustomEvent("clickedData", {
          detail: {
            "category": function (d) { return d[category] },
            "count": function (d) { return d[value] }
          }
        })
      );
    });
}

var stanzaModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': d3Barchart
});

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "d3-barchart",
	"stanza:label": "D3 Barchart",
	"stanza:definition": "Barchart using d3",
	"stanza:type": "Stanza",
	"stanza:display": "Chart",
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
		"stanza:key": "data-url",
		"stanza:type": "string",
		"stanza:example": "https://sparql-support.dbcls.jp/sparqlist/api/metastanza_chart?chromosome=1",
		"stanza:description": "URL to fetch from",
		"stanza:required": true
	},
	{
		"stanza:key": "category",
		"stanza:type": "string",
		"stanza:example": "category",
		"stanza:description": "Variable to be assigned as category",
		"stanza:required": true
	},
	{
		"stanza:key": "value",
		"stanza:type": "string",
		"stanza:example": "count",
		"stanza:description": "Variable to be assigned as value",
		"stanza:required": true
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
		"stanza:key": "clickedData",
		"stanza:description": "event used to notify a change of the value. payload is something like {value: 42}"
	}
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

  return "<h1>D3 Barchart stanza</h1>\n<div class=\"container\">\n  <p class=\"data-from\">Loading from<br><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"dataUrl") || (depth0 != null ? lookupProperty(depth0,"dataUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dataUrl","hash":{},"data":data,"loc":{"start":{"line":3,"column":48},"end":{"line":3,"column":59}}}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"dataUrl") || (depth0 != null ? lookupProperty(depth0,"dataUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dataUrl","hash":{},"data":data,"loc":{"start":{"line":3,"column":62},"end":{"line":3,"column":73}}}) : helper)))
    + "</a></p>\n  <section>\n    <h2>bar chart</h2>\n    <div id=\"chart\"></div>\n  </section>\n</div>";
},"useData":true}]
];

const url = import.meta.url.replace(/\?.*$/, '');

defineStanzaElement({stanzaModule, metadata, templates, url});
//# sourceMappingURL=d3-barchart.js.map
