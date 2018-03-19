var TJBot = require("tjbot");

var tj = new TJBot(
  ["microphone"/* Step #23 */],
  {
    /* Step #24 */
  },
  {
    speech_to_text:  
      {
      username: "e2fe74c1-be0c-4e93-978d-a6781eeae350",
      password: "GV20Rbs1JiU4"
      }
    /* Step #16 */
    /* Step #22 */
  }
);

/* Step #17 */

function processText(text)
  {
  console.log(text);
  tj.stopListening();
  
  /* Step 18 */
  }
  
  tj.listen(processText);
