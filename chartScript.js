// Determine which charts are currently being shown
let chartObject = [];

// Function to handle file input and generate charts
function inputFile(files, type = null) {
    // Remove the active charts before generating new ones
    removeAllCharts();

    // Get the file from input
    const file = files[0];

    // Used to read file
    const reader = new FileReader();

    // Executed when file is read successfully
    reader.onload = function (event) {
        // Get the data from the CSV file
        const data = event.target.result;

        // Get the data in a format that we can use
        const parsedData = parseCSV(data);

        // If we specify a chart type, generate a chart of that type
        if (type) {
            generateChart(parsedData, type, `${type.charAt(0).toUpperCase() + type.slice(1)} Chart`);
        }

        // Otherwise generate all charts with our data
        else {
            generateCharts(parsedData);
        }
    };

    // Not entirely sure how this line works, my understanding is that
    // it signifies that the event has been triggered, and we can terminate the process
    // and return the result
    reader.readAsText(file);
}

// Function to parse CSV data in a format we can use
function parseCSV(data) {
    // Split the data by line
    const lines = data.split('\n');

    // Get the headers from the first line
    const headers = lines[0].split(',');

    // To store our data
    const datasets = [];

    // Go through each line, skipping header, and add data to datasets
    for (let i = 1; i < lines.length; i++) {
        // Get current line
        const line = lines[i].trim();

        // If a line is empty, we can skip it
        if (line === '') continue;

        // Get both of our values from the current line
        const values = line.split(',');

        // Array of data for current line
        const dataset = {};

        // For each header element, get values
        for (let j = 0; j < headers.length; j++) {
            dataset[headers[j].trim()] = parseFloat(values[j].trim());
        }

        // Add data to our dataset
        datasets.push(dataset);
    }

    // Return the headers and the data
    return {
        headers: headers,
        datasets: datasets
    };
}

// Function to generate all charts
function generateCharts(data) {
    // Clear existing charts
    document.getElementById('charts').innerHTML = '';

    // Clear the current list of charts
    chartObject = [];

    // Generate each type of chart
    generateChart(data, 'line', 'Line Chart');
    generateChart(data, 'bar', 'Bar Chart');
    generateChart(data, 'radar', 'Radar Chart');
    generateChart(data, 'pie', 'Pie Chart');
    generateChart(data, 'doughnut', 'Doughnut Chart');
}

// Function to generate a single chart of a specified type
function generateChart(data, type, title) {
    // Create an HTML canvas element
    const canvas = document.createElement('canvas');
    
    // Assign width and height to canvas
    canvas.width = 400;
    canvas.height = 300;

    // Create an HTML div for the chart
    const chartContainer = document.createElement('div');

    // Give the container a class so it can be altered with CSS
    chartContainer.className = 'chartContainer';

    // Make the canvas a child of the chart
    chartContainer.appendChild(canvas);

    // Make the chart a child of the charts element
    document.getElementById('charts').appendChild(chartContainer);

    // Extract the headers from the data
    const label = data.headers[0].trim();
    const value = data.headers[1].trim();

    // Create a new chart
    const chart = new Chart(canvas.getContext('2d'), {
        // Chart type
        type: type,

        // Data in the chart
        data: {
            // Get the data for the labels
            labels: data.datasets.map(dataset => dataset[label]),

            // Get the data for the values
            datasets: [{
                label: value,
                data: data.datasets.map(dataset => dataset[value]),

                // Set the border color
                borderColor: 'rgb(75, 192, 192)',

                // Set the background color
                backgroundColor: 'rgba(166, 255, 152, 0.5)',

                // Round the corners
                borderRadius: 10
            }]
        },

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
    });

    // Store the chart in list of currently shown charts
    chartObject.push({ chart: chart, container: chartContainer });

    // Create remove button for the chart
    const removeButton = document.createElement('button');

    // Label for the remove button
    removeButton.textContent = `Remove ${type.charAt(0).toUpperCase() + type.slice(1)} Chart`;

    // Add class to the remove button for CSS styling
    removeButton.className = 'remove-button';

    // Make it remove the chart when button is clicked
    removeButton.addEventListener('click', function () {
        removeChart(chart);
    });

    // Add the button as a child of the chart
    chartContainer.appendChild(removeButton);

    // Only used to start displaying charts once a generate button is pressed
    document.getElementById('charts').style.display = 'flex';
}

// Function to remove all charts
function removeAllCharts() {
    // Remove each chart from the HTML
    chartObject.forEach(object => {
        object.container.remove();
        object.chart.destroy();
    });

    // Clear list of displayed charts
    chartObject = [];
}

// Function to remove a single chart
function removeChart(chart) {
    // Find the specific chart we want to remove
    const index = chartObject.findIndex(item => item.chart === chart);

    // If the chart exists, remove it
    if (index !== -1) {
        chartObject[index].container.remove();
        chart.destroy();
        chartObject.splice(index, 1);
    }

    // If we have no charts being displayed, hide the charts element
    if(chartObject.length === 0) {
        document.getElementById('charts').style.display = 'none';
    }
}