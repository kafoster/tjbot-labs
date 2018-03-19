var TJBot = require("tjbot");

var tj = new TJBot(
  ["microphone","speaker"],
  {
    robot:
    {
      gender: "female"
    },
    speak:
    {
      language: "en-US"
    }
  },
  {
    speech_to_text:  
    {
      username: "e2fe74c1-be0c-4e93-978d-a6781eeae350",
      password: "GV20Rbs1JiU4"
    },
    conversation:
    {
      username:  "e10fb267-8896-4246-8855-483e5d0278e9",
      password:  "PedOswaLlZW3"
    },
    text_to_speech:
    {
      username:  "bd52936a-895e-4e69-833a-55a940aee7c6",
      password: "NgiMPKJUByvg"
    }
  }
);

var workspaceId = "abdb20a1-45b3-4825-8cff-c27c82a04177";

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
