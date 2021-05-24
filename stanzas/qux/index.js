import 'https://d3js.org/d3.v5.min.js';

export default async function qux(stanza, params) {
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
      console.log('hey')
      console.log(d3.event)
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