import { storeFactory } from "../../../test/testUtils";
import { resetGame } from "./NewWordActions";
import moxios from "moxios";

describe("'resetGame' action dispatcher", () => {
  let store, newState;
  const secretWord = "piano";
  const guessedWords = [
    { guessedWord: "conga", letterMatchCount: 3 }
  ];
  const success = true;
  const preloadedState = {
    secretWord,
    guessedWords,
    success
  };
  beforeEach(() => {
    moxios.install();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "conga"
      });
    });
    store = storeFactory(preloadedState);
    return store.dispatch(resetGame()).then(() => {
      newState = store.getState();
    });
  });
  afterEach(() => {
    moxios.uninstall();
  });
  // calling resetGame with button click is already in unit test.
  test("updates 'secretWord' state correctly upon execution", () => {
    expect(newState.secretWord.length).toBe(5);
    expect(newState.secretWord).not.toBe(secretWord);
  });
  test("clears 'guessedWords' state upon execution", () => {
    expect(newState.guessedWords.length).toBe(0);
  });
  test("'success' state is false upon execution", () => {
    expect(newState.success).toBe(false);
  });
});
