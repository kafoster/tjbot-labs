var TJBot = require("tjbot");

var tj = new TJBot(
  ["microphone","speaker"],
  {
    robot:
    {
      gender: "male"
    },
    speak:
    {
      language: "en-US"
    }
  },
  {
    speech_to_text:  
    {
      username: "a06a237f-287a-4a3b-b9e9-734bedbfb94c",
      password: "rWHFBIGRrIRL"
    },
    conversation:
    {
      username:  "98c3b4f3-0911-4312-ad33-3862869c664a",
      password:  "2FVcggcrtMkc"
    },
    text_to_speech:
    {
      username:  "00c5da30-8e78-44b1-ad50-2b6321842220",
      password: "Ma023By4XT2K"
    }
  }
);

var workspaceId = "5c109d8a-3ee9-4da4-9174-6585c85f7c85";

function processText(text)
  {
  console.log(text);
  tj.stopListening();
  
  tj.converse(workspaceId, text, response => 
              {console.log(response);
                                              
  tj.speak(response.object.output.text.join(" ")).then() => {tj.listen(processText);
                                                            });
              });                               
  }
  
  tj.listen(processText);
