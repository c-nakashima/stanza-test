import { d as defineStanzaElement } from './stanza-element-4b732164.js';
import 'https://d3js.org/d3.v5.min.js';

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

  var width = 400; // グラフの幅
  var height = 300; // グラフの高さ
  var padding = 40; // スケール表示用マージン

  // 2. SVG領域の設定
  var chartElement = stanza.root.querySelector('#chart');
  var svg = d3.select(chartElement).append("svg").attr("width", width).attr("height", height);

  // 3. 軸スケールの設定
  var xScale = d3.scaleBand()
    .rangeRound([padding, width - padding])
    .padding(0.5)
    .domain(receivedData.map(function (d) { return d.category; }));
  // .domain(receivedData.map(function (d) { 
  //   console.log('d.count',d.count)
  //   return d.category; }));

  var yScale = d3.scaleLinear()
    .domain([0, 2000])
    // .domain([0, 
    //   // d3.max(receivedData, function(d) { return d.count; })
    //   d3.max(receivedData.map(d => d.count))
    // ])
    // .domain([0, d3.max(receivedData, function(d) { return d.count; })])
    .range([height - padding, padding]);

  // 4. 軸の表示
  svg.append("g")
    .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
    .call(d3.axisBottom(xScale));

  svg.append("g")
    .attr("transform", "translate(" + padding + "," + 0 + ")")
    .call(d3.axisLeft(yScale));

  // 5. バーの表示
  svg.append("g")
    .selectAll("rect")
    .data(receivedData)
    .enter()
    .append("rect")
    .attr("x", function (d) { return xScale(d.category); })
    .attr("y", function (d) { return yScale(d.count); })
    .attr("width", xScale.bandwidth())
    .attr("height", function (d) { return height - padding - yScale(d.count); })
    .attr("fill", "lightblue")
    .attr("class", "rect")
    .on("click", function () {
      // イベントの処理
      console.log('hey');
      console.log(d3.event);
      // イベントオブジェクトには[d3.event]でアクセス
      d3.event.preventDefault();

      stanza.host.dispatchEvent(
        new CustomEvent("clickedData", {
          detail: {
            "category": function(d){return d.category},
            "count": function(d){return d.count}
          }
        })
      );
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
		"stanza:example": "https://sparql-support.dbcls.jp/sparqlist/api/metastanza_chart?chromosome=1",
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

  return "<div id=\"chart\"></div>\n<hr>\n<p class=\"greeting\">Loading from "
    + alias4(((helper = (helper = lookupProperty(helpers,"dataUrl") || (depth0 != null ? lookupProperty(depth0,"dataUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dataUrl","hash":{},"data":data,"loc":{"start":{"line":3,"column":33},"end":{"line":3,"column":44}}}) : helper)))
    + "</p>\n<pre><code>"
    + alias4(((helper = (helper = lookupProperty(helpers,"receivedData") || (depth0 != null ? lookupProperty(depth0,"receivedData") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"receivedData","hash":{},"data":data,"loc":{"start":{"line":4,"column":11},"end":{"line":4,"column":27}}}) : helper)))
    + "</code></pre>";
},"useData":true}]
];

const url = import.meta.url.replace(/\?.*$/, '');

defineStanzaElement({stanzaModule, metadata, templates, url});
//# sourceMappingURL=qux.js.map
