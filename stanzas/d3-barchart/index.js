import 'https://d3js.org/d3.v5.min.js';

export default async function d3Barchart(stanza, params) {
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