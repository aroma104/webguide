// utils.js 시작

'use strict';

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

(function(global) {
	var Months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	var COLORS = [
		'#4dc9f6',
		'#f67019',
		'#f53794',
		'#537bc4',
		'#acc236',
		'#166a8f',
		'#00a950',
		'#58595b',
		'#8549ba'
	];

	var Samples = global.Samples || (global.Samples = {});
	var Color = global.Color;

	Samples.utils = {
		// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
		srand: function(seed) {
			this._seed = seed;
		},

		rand: function(min, max) {
			var seed = this._seed;
			min = min === undefined ? 0 : min;
			max = max === undefined ? 1 : max;
			this._seed = (seed * 9301 + 49297) % 233280;
			return min + (this._seed / 233280) * (max - min);
		},

		numbers: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 1;
			var from = cfg.from || [];
			var count = cfg.count || 8;
			var decimals = cfg.decimals || 8;
			var continuity = cfg.continuity || 1;
			var dfactor = Math.pow(10, decimals) || 0;
			var data = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = (from[i] || 0) + this.rand(min, max);
				if (this.rand() <= continuity) {
					data.push(Math.round(dfactor * value) / dfactor);
				} else {
					data.push(null);
				}
			}

			return data;
		},

		labels: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 100;
			var count = cfg.count || 8;
			var step = (max - min) / count;
			var decimals = cfg.decimals || 8;
			var dfactor = Math.pow(10, decimals) || 0;
			var prefix = cfg.prefix || '';
			var values = [];
			var i;

			for (i = min; i < max; i += step) {
				values.push(prefix + Math.round(dfactor * i) / dfactor);
			}

			return values;
		},

		months: function(config) {
			var cfg = config || {};
			var count = cfg.count || 12;
			var section = cfg.section;
			var values = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = Months[Math.ceil(i) % 12];
				values.push(value.substring(0, section));
			}

			return values;
		},

		color: function(index) {
			return COLORS[index % COLORS.length];
		},

		transparentize: function(color, opacity) {
			var alpha = opacity === undefined ? 0.5 : 1 - opacity;
			return Color(color).alpha(alpha).rgbString();
		}
	};

	// DEPRECATED
	window.randomScalingFactor = function() {
		return Math.round(Samples.utils.rand(-100, 100));
	};

	// INITIALIZATION

	Samples.utils.srand(Date.now());

	// Google Analytics
	/* eslint-disable */
	if (document.location.hostname.match(/^(www\.)?chartjs\.org$/)) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-28909194-3', 'auto');
		ga('send', 'pageview');
	}
	/* eslint-enable */

}(this));

// utils.js 끝


var ctx = document.getElementById("cv1");
var myChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			label: '# of Votes',
			data: [5, 7, 3, 5, 2, 3, 4, 5, 8, 1, 2, 3, 4, 7, 1, 5, 2, 4, 1, 5, 4, 8, 2, 4, 9, 9, 1, 2, 3, 4 ,8,7,5,2,1,5,1],
			backgroundColor: [
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 206, 86)',
				'rgb(75, 192, 192)',
				'rgb(153, 102, 255)',
				'rgb(255, 159, 64)',
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 206, 86)',
				'rgb(75, 192, 192)',
				'rgb(153, 102, 255)',
				'rgb(255, 159, 64)',
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 206, 86)',
				'rgb(75, 192, 192)',
				'rgb(153, 102, 255)',
				'rgb(255, 159, 64)',
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 206, 86)',
				'rgb(75, 192, 192)',
				'rgb(153, 102, 255)',
				'rgb(255, 159, 64)',
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 206, 86)',
				'rgb(75, 192, 192)',
				'rgb(153, 102, 255)',
				'rgb(255, 159, 64)',
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 206, 86)',
				'rgb(75, 192, 192)',
				'rgb(153, 102, 255)',
				'rgb(255, 159, 64)',
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 206, 86)',
				'rgb(75, 192, 192)',
				'rgb(153, 102, 255)',
				'rgb(255, 159, 64)',
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 206, 86)',
				'rgb(75, 192, 192)',
				'rgb(153, 102, 255)',
				'rgb(255, 159, 64)'
			],
			borderWidth: 0,

		}]
	},
	options: {
		// scales: {
		// 	yAxes: [{
		// 		ticks: {
		// 			beginAtZero:true
		// 		}
		// 	}]
		// },
		legendCallback: function(chart) {
			var text = [];
			text.push('<ul class="test-legend">');
			for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
				text.push('<li><span>');
				if (chart.data.labels[i]) {
					text.push(chart.data.labels[i]);
				}
				text.push('</span></li>');
			}
			text.push('</ul>');
			return text.join("");
		}
	}
});

$("#chartjs-legend").html(myChart.generateLegend());

$("#chartjs-legend").on('click', "li", function(index) {
	myChart.getDatasetMeta(index).hidden;
	myChart.update();

});

var randomScalingFactor = function() {
	return Math.round(Math.random() * 100);
};

var config = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
			],
			backgroundColor: [
				window.chartColors.red,
				window.chartColors.orange,
				window.chartColors.yellow,
				window.chartColors.green,
				window.chartColors.blue,
			],
			label: 'Dataset 1'
		}],
		labels: [
			"Red",
			"Orange",
			"Yellow",
			"Green",
			"Blue"
		]
	},
	options: {
		responsive: true,
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Doughnut Chart'
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	}
};

var ctx2 = document.getElementById("cv2").getContext("2d");
var myDoughnut = new Chart(ctx2, config);


var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var config = {
	type: 'line',
	data: {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [{
			label: "My First dataset",
			backgroundColor: window.chartColors.red,
			borderColor: window.chartColors.red,
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			],
			fill: false,
		}, {
			label: "My Second dataset",
			fill: false,
			backgroundColor: window.chartColors.blue,
			borderColor: window.chartColors.blue,
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			],
		}]
	},
	options: {
		responsive: true,
		title:{
			display:true,
			text:'Chart.js Line Chart'
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Month'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Value'
				}
			}]
		}
	}
};

window.onload = function() {
	var ctx3 = document.getElementById("cv3").getContext("2d");
	window.myLine = new Chart(ctx3, config);
};

document.getElementById('randomizeData').addEventListener('click', function() {
	config.data.datasets.forEach(function(dataset) {
		dataset.data = dataset.data.map(function() {
			return randomScalingFactor();
		});

	});

	window.myLine.update();
});

var colorNames = Object.keys(window.chartColors);
document.getElementById('addDataset').addEventListener('click', function() {
	var colorName = colorNames[config.data.datasets.length % colorNames.length];
	var newColor = window.chartColors[colorName];
	var newDataset = {
		label: 'Dataset ' + config.data.datasets.length,
		backgroundColor: newColor,
		borderColor: newColor,
		data: [],
		fill: false
	};

	for (var index = 0; index < config.data.labels.length; ++index) {
		newDataset.data.push(randomScalingFactor());
	}

	config.data.datasets.push(newDataset);
	window.myLine.update();
});

document.getElementById('addData').addEventListener('click', function() {
	if (config.data.datasets.length > 0) {
		var month = MONTHS[config.data.labels.length % MONTHS.length];
		config.data.labels.push(month);

		config.data.datasets.forEach(function(dataset) {
			dataset.data.push(randomScalingFactor());
		});

		window.myLine.update();
	}
});

document.getElementById('removeDataset').addEventListener('click', function() {
	config.data.datasets.splice(0, 1);
	window.myLine.update();
});

document.getElementById('removeData').addEventListener('click', function() {
	config.data.labels.splice(-1, 1); // remove the label first

	config.data.datasets.forEach(function(dataset, datasetIndex) {
		dataset.data.pop();
	});

	window.myLine.update();
});

// cv4

var barChartData = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [{
		label: 'Dataset 1',
		backgroundColor: window.chartColors.red,
		data: [
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor()
		]
	}, {
		label: 'Dataset 2',
		backgroundColor: window.chartColors.blue,
		data: [
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor()
		]
	}, {
		label: 'Dataset 3',
		backgroundColor: window.chartColors.green,
		data: [
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor()
		]
	}]
};


var ctx4 = document.getElementById("cv4");
var myBar = new Chart(ctx4, {


	type: 'bar',
	data: barChartData,
	options: {
		title:{
			display:true,
			text:"Chart.js Bar Chart - Stacked"
		},
		tooltips: {
			mode: 'index',
			intersect: false
		},
		responsive: true,
		scales: {
			xAxes: [{
				stacked: true,
			}],
			yAxes: [{
				stacked: true
			}]
		}
	}
});

// document.getElementById('randomizeData').addEventListener('click', function() {
// 	barChartData.datasets.forEach(function(dataset, i) {
// 		dataset.data = dataset.data.map(function() {
// 			return randomScalingFactor();
// 		});
// 	});
// 	window.myBar.update();
// });
