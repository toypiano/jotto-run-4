import React, { Component } from "react";

import Congrats from "../features/congrats/Congrats";
import GuessContainer from "../features/guess/GuessContainer";
import GuessedWords from "../features/guessedWords/GuessedWords";

class App extends Component {
  componentDidMount() {
    this.props.fetchSecretWord();
  }
  render() {
    return (
      <div className="container text-center col-sm-8 col-lg-6 mt-4">
        <header>
          <h1>Jotto</h1>
        </header>
        <main>
          <Congrats success={this.props.success} />
          <GuessContainer />
          <GuessedWords guessedWords={this.props.guessedWords} />
        </main>
      </div>
    );
  }
}

export default App;
