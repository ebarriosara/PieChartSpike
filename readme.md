# PieChartSpike

In this project, D3.js v4 and React are used to display a pie chart with hardcoded data. The goal is to explore how D3.js works and conclude which parameters are necessary as well as their characteristics. 

## Instructions to run the project

To run this project, firstly, it is necessary to install dependencies:
```
npm install
```

Secondly, next command will run the app:
```
npm start
```

Finally, open your browser in http://localhost:8080 and you will be able to see and play with the pie chart.

## Functionality

This example shows four ways of interacting with a pie chart:
1. A slice will be highlighted when the mouse is over it.
2. Checkbox to show or hide percentages for each slice (if percentage is greater than 8%).
3. Slider to modify the inner radius. This shows how a pie chart can be transformed into a donut chart.
4. Change the color function using radio buttons.

## Conclusions

The following inputs are necessary when building a pie chart using D3.js:

- Data: an element could have one or several fields. The only requirement is to have at least one numeric field. If the data element contains more than one field, when creating the pie, it is necessary to provide an accessor that returns the corresponding numeric value for a given datum.
- Position: dimension and margins to display the chart at a specific position.
  - Dimension: size in pixels of the chart view. If the chart is larger than the view, it will be cut.
  - Margins: number of pixels that will be left empty around the chart.
- Inner radius: pie chart could have a donut aspect if inner radius is greater than 0.
- Outer radius: defines how large the chart will be. It could be provided as parameter or calculated depending on the dimension and margins.
- Color function: d3-scale provides some of them.
- Legend: it is a separate component and should be reusable.




