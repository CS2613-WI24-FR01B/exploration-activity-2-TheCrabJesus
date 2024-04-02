# EA2 - Overview

## 1. Which Package/Library did I select?

I chose the Chart.js library for Javascript as my focus for this exploration activity

## 2. What is the Package/Library?

Chart.js is a library that's used for creating charts out of data. Although you can just hardcode data in and make charts out of it that way, it's main purpose is to have data be input and read from a file in order to be interpreted into various charts.

Using it is relatively simple, it's meant to be integrated with HTML. Essentially you create a canvas in HTML, create a chart (from Chart.js) as a child of the canvas, and populate data into the chart.

Note that I will refer to the term "static graph" to mean a graph in which values within the graph cannot be toggled on and off.

There are 5 types of basic charts you can make:
- Line Charts
    - These graphs are static
    - Has an X and a Y axis
    - As the title suggests, has points on a graph and a line connecting them all to show the progression
- Bar Charts
    - These graphs are static
    - Has an X and a Y axis
    - Shows a series of bars representing the value
- Radar Charts
    - These graphs are static
    - Circular graph that shows the progression of values within a circle
    - Plots points in the circle, and draws lines connecting all of the points
- Pie Charts
    - Not static, meaning you can deselect certain values from the chart to see the distribution without them
    - Circular graph that shows each value as a percentage of the total region
- Doughnut Charts
    - Not static, meaning you can deselect certain values from the chart to see the distribution without them
    - Essentially the same as pie charts, but with a hole in the center

There are also 3 other types of charts, but I have not explored them much
- Area Charts
- Bubble Charts
- Scatter Charts

## 3. What are the functionalities of the Package/Library?

Charts have plenty of options to them. You can add titles to them, to the different axis, highlight values, see them change in real time as values get updated, change the colors every aspect of the charts. In addition to CSS, they are customizeable to whatever you need them to be.

Adding values to a chart is as simple as adding a value to a label for the data, and mapping each element of a list of data to the data of the chart. 

```js
label: value,
data: data.datasets.map(dataset => dataset[value]),
```


I chose to format all the charts the same, however you could completely change them based on the type of chart. For example, here's some of the formatting choices I've made for the charts the change the border color, background color, and rounding the corners
```js
// Set the border color
borderColor: 'rgb(75, 192, 192)',

// Set the background color
backgroundColor: 'rgba(166, 255, 152, 0.5)',

// Round the corners
borderRadius: 10
```

Example with the formatting:
[![Image](/Screenshots/Screenshot06.png)"With the formatting"]

Example without the formatting:
[![Image](/Screenshots/Screenshot07.png)"Without the formatting"]

There are also other optional features that can be modified within the charts. You can have the charts dynamically change in size depending on data, you can add titles, change where the different axis starts, add padding, etc.

```js
// Optional features
        options: {
            // Used to make sure the size of the chart is not adaptive
            // And stays within the limits set by me
            responsive: false,

            // Display the title
            title: {
                display: true,
                text: title
            },

            // Whether or not the Y axis starts at 0
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },

            // Just used for styling
            layout: {
                padding: {
                    left: 20,
                    right: 20
                }
            }
        }
```

## 4. When was it created?

Chart.js was created in 2013 by Nick Downie, and is being licensed by MIT. It is fully open-source and is the second most popular Javascript charting library (next to D3.js). [Information taken from Wikipedia](https://en.wikipedia.org/wiki/Chart.js)

## 5. Why did I select this Package/Library?

I've actually had some personal projects that I wanted to work on that could very much make use of this type of package. I looked into D3.js at first, but found that the usage of Chart.js was much easier, and had much better documentation (Well written documentation, and they have hundreds of video on their official youtube channel on how to use the library).

## 6. How did learning the Package/Library influence my learning?

I don't typically use videos as a tool for learning when I'm coding, but I actually found out that I learn a lot better when I can see other people explain how code works rather than just reading it. I think I would have still managed quite well with just written documentation, but seeing someone do something similar to what I want to achieve, and explain how to change things to get the desired results made it much simpler.

## 7. How was my overall experience with the Package/Library?

Overall I think the package is very fun to work with. I feel like I just sort of scratched the surface with what could have been done with it, which is a bit of a letdown for myself knowing that I could have definitely done more (such as have live changing data to show how graphs dynamically update, worked more with colors, showed off comparisons with data, done some 3D charts).

I would highly recommend this library for anyone making a webpage that needs to use any sort of chart or graph. It's very easy to use and implement, very flexible in how you can use and configure it, and is overall satisfying to look at.

I will absolutely continue to use this for my own personal projects, in fact I do plan on using it more in depth than what I showed in this small program.