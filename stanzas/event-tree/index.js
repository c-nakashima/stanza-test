import 'https://d3js.org/d3.v5.min.js';


export default async function eventTree(stanza, params) {
  stanza.render({
    template: 'stanza.html.hbs',
    parameters: {
      greeting: `Hello, ${params['say-to']}!`
    }
  });
  // var width = stanza.root.querySelector("svg").clientWidth;
  // var height = stanza.root.querySelector("svg").clientHeight;
  var width = 400;
  var height = 300;
  var data = {
    "name": "A",
    "children": [
      { "name": "B" },
      {
        "name": "C",
        "children": [{ "name": "D" }, { "name": "E" }, { "name": "F" }]
      },
      { "name": "G" },
      {
        "name": "H",
        "children": [{ "name": "I" }, { "name": "J" }]
      },
      { "name": "K" }
    ]
  };

  // 3. 描画用のデータ変換
  var root = d3.hierarchy(data);
  var tree = d3.tree()
    .size([height, width - 160])
  //  .nodeSize([50,300]) ;
  //  .separation(function(a, b) { return(a.parent == b.parent ? 1 : 2); });

  tree(root);

  // 4. svg要素の配置
  var chartElement = stanza.root.querySelector('#chart');
  var svg = d3
    .select(chartElement)
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  var g = svg.append("g").attr("transform", "translate(80,0)");;

  var link = g
    .selectAll(".link")
    .data(root.descendants().slice(1))
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("d", function (d) {
      return "M" + d.y + "," + d.x +
        "C" + (d.parent.y + 100) + "," + d.x +
        " " + (d.parent.y + 100) + "," + d.parent.x +
        " " + d.parent.y + "," + d.parent.x;
    });

  var node = g.selectAll(".node")
    .data(root.descendants())
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; })

  node.append("circle")
    .attr("r", 6)
    .attr("fill", "#999");

  node.append("text")
    .attr("dy", 3)
    .attr("x", function (d) { return d.children ? -12 : 12; })
    .style("text-anchor", function (d) { return d.children ? "end" : "start"; })
    .attr("font-size", "80%")
    .text(function (d) { return d.data.name; });

    stanza.host.dispatchEvent(
      new CustomEvent("valueChanged", { detail: { value: 42 } })
  );
}
