require("dotenv").config();

const app = require("express")();
const cors = require("cors");
const fs = require("fs");

// Allow all cors
app.use(cors());

// read json, parse to obj, and destructure into array
const wordsJson = fs.readFileSync(
  "./five-letter-words.json",
  "utf-8"
);
const wordsObj = JSON.parse(wordsJson);
const { fiveLetterWords } = wordsObj;

app.get("/", (req, res) => {
  // randomize index for every get request to the root path.
  const randomIndex = Math.floor(
    Math.random() * fiveLetterWords.length
  );
  const fiveLetterWord = fiveLetterWords[randomIndex];
  res.send(fiveLetterWord);
});

app.listen(3030, () =>
  console.log("random-word-server listening on port 3030")
);

module.exports = app;
