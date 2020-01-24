import { guessWord } from "./actions";
import { storeFactory } from "../../../test/testUtils";

/* 
Thunked action creators integration test checks whether the action creator dispatches the correct actions to the store and the reducer takes that action to update the state as expected.

Steps
1. Create a new redux store instance with optional preloaded state.
2. Dispatch an action creator and get new state from the store.
3. Expect whether the updated state matches expected state.
*/

// Integration test for guessWord
describe("guessWord action dispatcher", () => {
  const incorrectGuessedWord = "bongo";
  const secretWord = "piano";
  const moreProps = {
    serverError: false
  };

  describe("no previously guessed word(first submit)", () => {
    let store;
    const preloadedState = { secretWord };
    beforeEach(() => {
      store = storeFactory(preloadedState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(incorrectGuessedWord));
      const newState = store.getState();
      const expectedState = {
        ...moreProps,
        ...preloadedState,
        success: false,
        guessedWords: [
          { guessedWord: incorrectGuessedWord, letterMatchCount: 2 }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
    test("updates state correctly for successful guess", () => {
      // MUST expect inside async callback for getState to work correctly.
      store.dispatch(guessWord(secretWord), () => {
        const newState = store.getState();
        const expectedState = {
          ...moreProps,
          ...preloadedState,
          success: true,
          guessedWords: [
            { guessedWord: secretWord, letterMatchCount: 5 }
          ]
        };
        expect(newState).toEqual(expectedState);
      });
    });
  });
  describe("there are some previously guessed words", () => {
    const guessedWords = [
      { guessedWord: "drums", letterMatchCount: 0 }
    ];
    const preloadedState = {
      guessedWords,
      secretWord
    };
    let store;
    beforeEach(() => {
      store = storeFactory(preloadedState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(incorrectGuessedWord));
      const newState = store.getState();
      const expectedState = {
        ...moreProps,
        ...preloadedState,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: incorrectGuessedWord, letterMatchCount: 2 }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord), () => {
        const newState = store.getState();
        const expectedState = {
          ...moreProps,
          ...preloadedState,
          success: true,
          guessedWords: [
            ...guessedWords,
            { guessedWord: secretWord, letterMatchCount: 5 }
          ]
        };
        expect(newState).toEqual(expectedState);
      });
    });
  });
});
