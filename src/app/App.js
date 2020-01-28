import React, { Component } from "react";

import Congrats from "../features/congrats/Congrats";
import GuessContainer from "../features/guess/GuessContainer";
import GuessedWords from "../features/guessedWords/GuessedWords";
import NewWord from "../features/newWord/NewWord";
import ShowSecretWord from "../features/showSecretWord/ShowSecretWord";
import ServerError from "../features/serverError/ServerError";
import EnterWordButton from "../features/enterWord/EnterWordButton";
import EnterWordForm from "../features/enterWord/EnterWordForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchSecretWord();
  }
  render() {
    const main = this.props.serverError ? (
      <ServerError errorMessage={this.props.errorMessage} />
    ) : this.props.enterWordStatus === "inProgress" ? (
      <EnterWordForm submitUserWord={this.props.submitUserWord} />
    ) : (
      <main>
        <Congrats success={this.props.success} />
        <ShowSecretWord
          secretWord={this.props.secretWord}
          show={this.props.gaveUp}
        />
        <NewWord
          show={this.props.success || this.props.gaveUp}
          getNewWord={this.props.resetGame}
        />
        <EnterWordButton
          show={this.props.success || this.props.gaveUp}
          enterWordForm={this.props.enterWordForm}
        />
        {!this.props.gaveUp && <GuessContainer />}
        <GuessedWords
          guessedWords={this.props.guessedWords}
          gaveUp={this.props.gaveUp}
        />
      </main>
    );
    return (
      <div className="container text-center col-sm-8 col-lg-6 mt-4">
        <header>
          <h1>Jotto</h1>
        </header>
        {main}
      </div>
    );
  }
}

export default App;
