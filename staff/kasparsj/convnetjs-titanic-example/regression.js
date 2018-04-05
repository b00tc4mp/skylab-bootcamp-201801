var csv = require("fast-csv");
var convnetjs = require("convnetjs");

// species a 2-layer neural network with two hidden layer of 32 neurons
var layer_defs = [];
// input layer declares size of input. here: 2-D data
// ConvNetJS works on 3-Dimensional volumes (sx, sy, depth), but if you're not dealing with images
// then the first two dimensions (sx, sy) will always be kept at size 1
layer_defs.push({type:'input', out_sx:1, out_sy:1, out_depth:6});
// declare 32 neurons, followed by ReLU (rectified linear unit non-linearity)
layer_defs.push({type:'fc', num_neurons:20, activation:'relu'});
layer_defs.push({type:'fc', num_neurons:20, activation:'sigmoid'});
// declare the linear classifier on top of the previous hidden layer
layer_defs.push({type:'regression', num_neurons: 1});

var net = new convnetjs.Net();
net.makeLayers(layer_defs);

var trainer = new convnetjs.Trainer(net, {batch_size: 1,  learning_rate:0.01, l2_decay:0.001, momentum:0.2});

function preprocess(data) {
	return [parseInt(data[2]), data[4] == 'female' ? 1 : 0, parseFloat(data[5]), parseInt(data[6]), parseInt(data[7]), parseFloat(data[9])];
}

var epochs = 50;
var csvData = [];

csv.fromPath("train.csv")
	.on("data", function(data) {

		if (!isNaN(parseFloat(data[5]))) {

			csvData.push(data);

		}

	}).on("end", function() {



	});


function trainNetwork()
{
	var avloss = 0.0
	for (var i=0; i<epochs; i++) {
		for (var j=0; j<csvData.length; j++) {
			var trainingData = preprocess(csvData[j]);
			var x = new convnetjs.Vol(trainingData);
			var stats = trainer.train(x, [parseFloat(csvData[j][1])]);
			avloss += stats.loss;
			//var predicted_values = net.forward(x);
			//console.log("data: [" + trainingData + "] -> value: " + parseFloat(csvData[j][1]));
			//console.log("prediction in learn stage is: " + predicted_values.w[0]);
		}
	}

	var dicaprio = [0, 0, 3, 'Jack Dawson', 'male', 19, 0, 0, 'N/A', 5.0000];
	var winslet = [0, 0, 1, 'Rose DeWitt Bukater', 'female', 17, 1, 2, 'N/A', 100.0000];

	var dicaprioData = preprocess(dicaprio);
	var x1 = new convnetjs.Vol(dicaprioData);
	var prob1 = net.forward(x1);

	console.log('probability that DiCaprio survived: ' + prob1.w[0]);

	var winsletData = preprocess(winslet);
	var x2 = new convnetjs.Vol(winsletData);
	var prob2 = net.forward(x2);

	console.log('probability that Winslet survived: ' + prob2.w[0]);

	console.log(avloss / (epochs * csvData.length));
}
