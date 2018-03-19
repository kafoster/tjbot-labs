var TJBot = require("tjbot');
var tj = new TJBot(["microphone","led"],
{},
{
  speech_to_text:  
  {
    username: "acc2067c-995a-4bd0-adcd-ed07c4d36663",
    password: "LneUCoChoDaa"
  }
  tone_analyzer:
  {
    username: "71b3716f-e019-48d4-aac9-2a4ef85851c9",
    password: "W3y0trLlWZtx"
  )
}
};
function processText(text)
{
  console.log(text);
  tj.analyzeTone(text).then(response =>
  {
    console.log(response);
    var emotions = response.document_tone.tone_categories[0].tones;
    var top = emotions[Object.keys(emotions).reduce((a, b) =>
    {
      return emotions[a].score > emotions[b].score ? a : b
    })];
    console.log(top);
    var colors = 
    {
    "anger": "red",
    "disgust": "green",
    "fear": "magenta",
    "joy": "yellow",
    "sadness": "blue"
    };
    tj.shine(colors[top.tone_id]);
  });
}
tj.listen(processText);

  
