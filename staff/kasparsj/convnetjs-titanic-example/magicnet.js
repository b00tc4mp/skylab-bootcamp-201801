var csv = require("fast-csv");
var convnetjs = require("convnetjs");

function preprocess(data) {
	return [parseInt(data[2]), data[4] == 'female' ? 1 : 0, parseFloat(data[5]), parseInt(data[6]), parseInt(data[7]), parseFloat(data[9])];
}

var train_data = [];
var train_labels = [];
csv.fromPath("train.csv")
	.on("data", function(data) {
		
		if (!isNaN(parseFloat(data[5]))) {
			
			train_data.push(new convnetjs.Vol(preprocess(data)));
			train_labels.push(parseInt(data[1]));
		
		}
		
	}).on("end", function() {
		
		onTrainDataReady();
		
	});

	var magicNet;
function onTrainDataReady() {
	
	var opts = {}; // options struct
	opts.train_ratio = 0.7;
	opts.num_folds = 10; // number of folds to eval per candidate
	opts.num_candidates = 10; // number of candidates to eval in parallel
	opts.num_epochs = 2; // epochs to make through data per fold
	// below, train_data is a list of input Vols and train_labels is a 
	// list of integer correct labels (in 0...K).
	magicNet = new convnetjs.MagicNet(train_data, train_labels, opts);
	magicNet.onFinishBatch(finishedBatch); // example of setting callback for events
	 
	// start training magicNet. Every step() call all candidates train on one example
	setInterval(function(){ magicNet.step() }, 0);
	
}

// once at least one batch of candidates is evaluated on all folds we can do prediction!
function finishedBatch() {
  // prediction example. xout is Vol of scores
  // there is also predict_soft(), which returns the full score volume for all labels
  
	var dicaprio = [0, 0, 3, 'Jack Dawson', 'male', 19, 0, 0, 'N/A', 5.0000];
	var winslet = [0, 0, 1, 'Rose DeWitt Bukater', 'female', 17, 1, 2, 'N/A', 100.0000];
	
	var dicaprioData = preprocess(dicaprio);
	var x1 = new convnetjs.Vol(dicaprioData);
	//var prob1 = net.forward(x1);
		
	var winsletData = preprocess(winslet);
	var x2 = new convnetjs.Vol(winsletData);
	//var prob2 = net.forward(x2);
	  
  var predicted_label = magicNet.predict(x1);
  console.log('probability that DiCaprio survived: ' + predicted_label);
  
  var predicted_label = magicNet.predict(x2);
  console.log('probability that Winslet survived: ' + predicted_label);
}
