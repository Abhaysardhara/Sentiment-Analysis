let sentiment;
let statusEl;
let submitBtn;
let inputBox;
let sentimentResult;
let result;

function setup() 
{
  noCanvas();
  sentiment = ml5.sentiment('movieReviews', modelReady);
  statusEl = createP('Loading Model...');
  inputBox = createInput('Today is the happiest day and is full of rainbows!');
  inputBox.attribute('size', '75');
  submitBtn = createButton('submit');
  sentimentResult = createP('sentiment score:');
  result = createP('Result: Not result yet!')
  submitBtn.mousePressed(getSentiment);

}

function getSentiment() 
{
  const text = inputBox.value();
  const prediction = sentiment.predict(text);
  sentimentResult.html('Sentiment score: ' + (prediction.score * 100).toFixed(4) + '%' );
  if((prediction.score * 100).toFixed(4) < 50)
  {
  	result.html('Result: Negative Comment');
  }
  else
  {
  	result.html('Result: Positive Comment');
  }
}

function modelReady() 
{
  statusEl.html('model loaded');
}