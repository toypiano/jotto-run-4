import React from "react";

import Congrats from "../features/congrats/Congrats";

function App() {
  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <header>
        <h1>Jotto</h1>
      </header>
      <main>
        <Congrats success={true} />
        <section>
          guessForm
          <div>guess input</div>
          <div>Submit Button</div>
          <p>Guess the secretWord!</p>
        </section>
        <section>
          guessed words table
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>train</td>
                <td>3</td>
              </tr>
              <tr>
                <td>train</td>
                <td>3</td>
              </tr>
              <tr>
                <td>train</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;
