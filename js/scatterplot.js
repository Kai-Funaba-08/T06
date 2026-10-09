const drawScatterplot = (data) => {
    // T06-2 Step 2.2
    /// Set the dimensions and margins of the chart area
    const svg = d3.select("#scatterplot")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)

    /// Create an inner chart group with margins
    innerChartS = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // T06-2 Step 2.3
    /// Set up x and y scales using data extents
    const xExtent = d3.extent(data, d => d.star);
    const yExtent = d3.extent(data, d => d.screenSize);

    const xScaleS = d3.scaleLinear()
        .domain(xExtent[0] - 0.5, xExtent[1] + 0.5) // Add padding to the domain
        .range([0, innerWidth]);

    const yScaleS = d3.scaleLinear()
        .domain(yExtent[0], yExtent[1]) // Add padding to the domain
        .range([innerHeight, 0])
        .nice();

    /// Map star ratings and screen sizes to positions within the chart area.

    // T06-2 Step 2.4
    /// (Corrected code) Set up colours for screen technologies
    const uniqueTechs = [...new Set(data.map(d => d.screenTech))];

    colorScale
        .domain(uniqueTechs)
        .range(d3.schemeCategory10);
    
    // T06-2 Step 2.5 Draw the circles

    // T06-2 Step 2.6 Add bottom and left axis
    /// Add axes

    // T06-2 Step 2.7 Add legend
    /// Add a legend on the right-hand side

    // Show each screen technology with its matching point colour.

};