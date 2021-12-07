// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A


// Storing the label
let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/TClPJAzb8/';

let img;

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  var cnv = createCanvas(640, 520);
  cnv.parent('myContainer');

  img = loadImage("images/listen.jpg");

  button = createButton('Listen Again');
  button.position(width*3/4-100, 400);
  button.mousePressed(play);
  // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(255,255,255);

  // STEP 4: Draw the label
  // textSize(32);
  textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width/2, height - 16);

  // Background noise is headphones
  let emoji = "Listening...";
  // Pick an emoji based on label
  if (label == "Cardinal") {
    emoji = "Cardinal";
  } else if (label == "Blue Jay") {
    emoji = "Blue Jay";
  } else if (label == "Robin") {
    emoji = "Robin";
  }

  // Draw the emoji
  textSize(100);
  fill(0)
  text(emoji, width / 2, height / 2);
  image(img,width/2-50,0,150,150)
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}

function pause () {
    noLoop();
}

function play () {
    loop();
}